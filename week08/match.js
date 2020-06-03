function match(selector, element) {
    if (typeof selector !== "string" || selector === "")
        return false;

    const combReg = /\s*[>+~\s]\s*/g;
    const combators = selector.match(combReg);
    combators.push("=");

    const compoundSelectors = selector.split(combReg);

    let isMatch = true;
    let currentCompoundSelector = "";
    let currentCombator = "";
    let currentElement = element;

    for (let i = compoundSelectors.length - 1; i >= 0; i--) {
        currentCompoundSelector = compoundSelectors[i];
        currentCombator = combators[i];
        const matchedElement = getMatchedElement(currentCompoundSelector, currentElement, currentCombator);
        if (matchedElement == null) {
            isMatch = false;
            break;
        } else {
            currentElement = matchedElement;
        }
    }

    return isMatch;
}

function getMatchedElement(compoundSelector, element, combinator) {
    let isMatch = false;
    let currentElement = element;

    if (combinator.indexOf("=") > -1) {
        isMatch = matchCompoundSelector(compoundSelector, currentElement);
    } else if (combinator.indexOf(">") > -1) {
        currentElement = element.parentNode;
        isMatch = matchCompoundSelector(compoundSelector, currentElement);
    } else if (combinator.indexOf("+") > -1) {
        currentElement = element.previousElementSibling;
        isMatch = matchCompoundSelector(compoundSelector, currentElement);
    } else if (combinator.indexOf("~") > -1) {
        currentElement = element.previousElementSibling;
        while (currentElement != null) {
            const result = matchCompoundSelector(compoundSelector, currentElement);
            if (result) {
                isMatch = true;
                break;
            } else {
                currentElement = currentElement.previousElementSibling;
            }
        }
    } else {
        currentElement = element.parentNode;
        while (currentElement !== document) {
            const result = matchCompoundSelector(compoundSelector, currentElement);
            if (result) {
                isMatch = true;
                break;
            } else {
                currentElement = currentElement.parentNode;
            }
        }
    }

    if (isMatch) {
        return currentElement;
    } else {
        return null;
    }
}

function matchCompoundSelector(compoundSelector, element) {
    if (!compoundSelector || !element) {
        return false;
    }
    const simpleSelectors = compoundSelector.match(/([\w-]+)|(\.[\w-]+)|(#[\w-]+)|(\[[\w-\'\"=~\|\^\$\*]+\])/g);
    return simpleSelectors.every(item => matchSimpleSelector(item, element));
}

function matchSimpleSelector(selector, element) {
    if (!selector || !element)
        return false;

    if (selector === "*") {
        return true;
    }
    if (selector.charAt(0) === "#") {
        const value = element.id;
        if (value === selector.replace("#", ""))
            return true;
    } else if (selector.charAt(0) === ".") {
        const value = element.className;
        if (value.split(/\s+/).includes(selector.replace(".", "")))
            return true;
    } else if (selector.charAt(0) === "[") {
        const arr = selector.replace(/[\[\]]/g, "").split("=");
        if (arr.length === 1) {
            return element.getAttribute(arr[0]) != null;
        } else {
            const lastCharOfKey = arr[0][arr[0].length - 1];
            if (["~", "|", "^", "$", "*"].includes(lastCharOfKey)) {
                const key = arr[0].slice(0, -1);
                const value = arr[1].replace(/[\'\"]/g, "");
                const attrValue = element.getAttribute(key);
                return attrValue != null && compareValue(attrValue, value, lastCharOfKey);
            } else {
                const key = arr[0];
                const value = arr[1].replace(/[\'\"]/g, "");
                return element.attributes.getAttribute(key) = value;
            }
        }
    } else {
        if (element.tagName.toLowerCase() === selector.toLowerCase()) {
            return true;
        }
    }

    return false;
}

function compareValue(attrValue, value, symbol) {
    if (symbol === "*") {
        return attrValue.includes(value);
    } else if (symbol === "^") {
        return attrValue.startsWith(value);
    } else if (symbol === "$") {
        return attrValue.endsWith(value);
    } else if (symbol === "|") {
        return attrValue.startsWith(value);
    } else if (symbol === "~") {
        const arr = attrValue.split(/\s+/);
        return arr.includes(value);
    }
}