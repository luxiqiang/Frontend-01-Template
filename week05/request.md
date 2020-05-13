client端

```js
const net = require('net');
class ResponseParser {
    constructor() {
        this.WAITING_STATUS_LINE = 0 // init status
        this.WAITING_STATUS_LINE_END = 1 // meet a '\r'
        this.WAITING_HEADER_NAME = 2 // meet a ':'
        this.WAITING_HEADER_SPACE = 3 // headerName after need a space
        this.WAITING_HEADER_VALUE = 4
        this.WAITING_HEADER_LINE_END = 5 // one 'key-value' end
        this.WAITING_HEADER_BLOCK_END = 6 // header meet \r end
        this.WAITING_HEADER_BODY = 7 // body start

        this.current = this.WAITING_STATUS_LINE
        this.statusLine = ""
        this.headers = {}
        this.headerName = ""
        this.headerValue = ""
        this.bodyParser = null // 在解析完headers再创建的 等Transfer-Encoding

    }
    get isFinished() {
        return this.bodyParser && this.bodyParser.isFinished
    }
    get response() {
        this.statusLine.match(/HTTP\/1.1 ([0-9]+) ([\s\S]+)/) // Regexp $1?
        return {
            statusCode: RegExp.$1,
            statusText: RegExp.$2,
            headers: this.headers,
            body: this.bodyParser.content.join('')
        }
    }
    receive(string) {
        for (let i = 0; i < string.length; i++) {
            // charAt
            this.receiveChar(string.charAt(i))
        }
    }
    receiveChar(char) {
        if (this.current === this.WAITING_STATUS_LINE) {
            if (char === '\r') {
                this.current = this.WAITING_STATUS_LINE_END
            } else if (char === '\n') {
                this.current = this.WAITING_HEADER_NAME
            } else {
                this.statusLine += char
            }
        } else if (this.current === this.WAITING_STATUS_LINE_END) {
            this.current = this.WAITING_HEADER_NAME
        } else if (this.current === this.WAITING_HEADER_NAME) {
            // 以冒号结束
            if (char === ':') {
                this.current = this.WAITING_HEADER_SPACE
            } else if (char === '\r') {
                this.current = this.WAITING_HEADER_BLOCK_END
                // header parse end then create bodyParser
                if (this.headers["Transfer-Encoding"] === 'chunked') {
                    this.bodyParser = new TrunkedBodyParse()
                }
            } else {
                this.headerName += char
            }
        } else if (this.current === this.WAITING_HEADER_SPACE) {
            if (char === ' ') {
                this.current = this.WAITING_HEADER_VALUE
            }
        } else if (this.current === this.WAITING_HEADER_VALUE) {
            if (char === '\r') {
                this.current = this.WAITING_HEADER_LINE_END
                // 存储key-value到headers
                this.headers[this.headerName] = this.headerValue
                // 初始化 headerName and headerValue
                this.headerName = ""
                this.headerValue = ""
            } else {
                this.headerValue += char
            }
        } else if (this.current === this.WAITING_HEADER_LINE_END) {
            if (char === '\n') {
                this.current = this.WAITING_HEADER_NAME
            }
        } else if (this.current === this.WAITING_HEADER_BLOCK_END) {
            if (char === '\n') {
                this.current = this.WAITING_HEADER_BODY
            }
        } else if (this.current === this.WAITING_HEADER_BODY) {
            this.bodyParser.receiveChar(char)
        }

    }

}

class TrunkedBodyParse {
    constructor() {
        this.WAITING_LENGTH = 0
        this.WAITING_LENGTH_LINE_END = 1
        this.READING_TRUNK = 2
        this.WAITING_NEW_LINE = 3
        this.WAITING_NEW_LINE_END = 4

        this.length = 0
        this.content = []
        this.isFinished = false
        this.current = this.WAITING_LENGTH
    }
    receiveChar(char) {
        if (this.current === this.WAITING_LENGTH) {
            if (char === '\r') {
                if (this.length === 0) {
                    this.isFinished = true
                }
                this.current = this.WAITING_LENGTH_LINE_END
            } else {
                this.length *= 10
                this.length += char.charCodeAt(0) - '0'.charCodeAt(0)
                // this.length += char.charCodeAt(0) - '0'.charCodeAt(0)
            }
        } else if (this.current === this.WAITING_LENGTH_LINE_END) {
            if (char === '\n') {
                this.current = this.READING_TRUNK
            }
        } else if (this.current === this.READING_TRUNK) {
            console.log('READING_TRUNK char :', char)
            this.content.push(char)
            this.length--
            if (this.length === 0) {
                this.current = this.WAITING_NEW_LINE
            }
        } else if (this.current === this.WAITING_NEW_LINE) {
            if (char === '\r') {
                this.current = this.WAITING_NEW_LINE_END
            }
        } else if (this.current === this.WAITING_NEW_LINE_END) {
            if (char === '\n') {
                this.current = this.WAITING_LENGTH
            }
        }
    }
}

class Request {
    constructor(options) {
        this.method = options.method || "GET"
        this.host = options.host
        this.path = options.path || "/"
        this.port = options.port || 80
        this.body = options.body || {}
        this.headers = options.headers || {}

        if (!this.headers["Content-Type"]) {
            this.headers["Content-Type"] = "application/x-www-form-urlencoed"
        }

        if (this.headers["Content-Type"] === "application/json") {

            this.bodyText = JSON.stringify(this.body)
        } else if (this.headers["Content-Type"] === "application/x-www-form-urlencoed") {

            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&')
        }

        this.headers["Content-Length"] = this.bodyText.length
    }
    toString() {

        console.log('bodyText :', this.bodyText)
        return `
${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
\r
${this.bodyText}`
    }
    send(connection) {
        return new Promise((resolve, reject) => {

            const parser = new ResponseParser()
            if (connection) {

                connection.write(this.toString())
            } else {

                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, () => {
                    connection.write(this.toString())
            })
    }

        connection.on('data', (data) => {

            console.log(data.toString())
        parser.receive(data.toString())
        if (parser.isFinished) {

            resolve(parser.response)
        }

        connection.end()
    })
        connection.on('error', err => {
            reject(err)
            connection.end()
    })
    })

    }

}

void async function() {
    const request = new Request({
        method: 'POST',
        host: '127.0.0.1',
        path: "/",
        port: 8088,
        headers: {
            ["X-Foo2"]: "customed"
        },
        body: {
            name: "winter",
            age: 18
        }
    })

    const response = await request.send()
    console.log('response :', response);
}()
```



server端

```js
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
server.listen(8088);
```

