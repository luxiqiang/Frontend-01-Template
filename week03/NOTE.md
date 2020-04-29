# 每周总结可以写在这里

### 找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？

- #### [Array](https://www.w3school.com.cn/jsref/jsref_obj_array.asp)

  ## Array 对象

  Array 对象用于在单个的变量中存储多个值。

  ### 创建 Array 对象的语法：

  ```
  new Array();
  new Array(size);
  new Array(element0, element1, ..., elementn);
  ```

  ### 参数

  参数 *size* 是期望的数组元素个数。返回的数组，length 字段将被设为 *size* 的值。

  参数 *element* ..., *elementn* 是参数列表。当使用这些参数来调用构造函数 Array() 时，新创建的数组的元素就会被初始化为这些值。它的 length 字段也会被设置为参数的个数。

  ### 返回值

  返回新创建并被初始化了的数组。

  如果调用构造函数 Array() 时没有使用参数，那么返回的数组为空，length 字段为 0。

  当调用构造函数时只传递给它一个数字参数，该构造函数将返回具有指定个数、元素为 undefined 的数组。

  当其他参数调用 Array() 时，该构造函数将用参数指定的值初始化数组。

  当把构造函数作为函数调用，不使用 new 运算符时，它的行为与使用 new 运算符调用它时的行为完全一样。

  ## Array 对象属性

  | 属性                                                         | 描述                               |
  | :----------------------------------------------------------- | :--------------------------------- |
  | [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_array.asp) | 返回对创建此对象的数组函数的引用。 |
  | [length](https://www.w3school.com.cn/jsref/jsref_length_array.asp) | 设置或返回数组中元素的数目。       |
  | [prototype](https://www.w3school.com.cn/jsref/jsref_prototype_array.asp) | 使您有能力向对象添加属性和方法。   |

  ## Array 对象方法

  | 方法                                                         | 描述                                                         |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | [concat()](https://www.w3school.com.cn/jsref/jsref_concat_array.asp) | 连接两个或更多的数组，并返回结果。                           |
  | [join()](https://www.w3school.com.cn/jsref/jsref_join.asp)   | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。 |
  | [pop()](https://www.w3school.com.cn/jsref/jsref_pop.asp)     | 删除并返回数组的最后一个元素                                 |
  | [push()](https://www.w3school.com.cn/jsref/jsref_push.asp)   | 向数组的末尾添加一个或更多元素，并返回新的长度。             |
  | [reverse()](https://www.w3school.com.cn/jsref/jsref_reverse.asp) | 颠倒数组中元素的顺序。                                       |
  | [shift()](https://www.w3school.com.cn/jsref/jsref_shift.asp) | 删除并返回数组的第一个元素                                   |
  | [slice()](https://www.w3school.com.cn/jsref/jsref_slice_array.asp) | 从某个已有的数组返回选定的元素                               |
  | [sort()](https://www.w3school.com.cn/jsref/jsref_sort.asp)   | 对数组的元素进行排序                                         |
  | [splice()](https://www.w3school.com.cn/jsref/jsref_splice.asp) | 删除元素，并向数组添加新元素。                               |
  | [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_array.asp) | 返回该对象的源代码。                                         |
  | [toString()](https://www.w3school.com.cn/jsref/jsref_toString_array.asp) | 把数组转换为字符串，并返回结果。                             |
  | [toLocaleString()](https://www.w3school.com.cn/jsref/jsref_toLocaleString_array.asp) | 把数组转换为本地数组，并返回结果。                           |
  | [unshift()](https://www.w3school.com.cn/jsref/jsref_unshift.asp) | 向数组的开头添加一个或更多元素，并返回新的长度。             |
  | [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueof_array.asp) | 返回数组对象的原始值                                         |

- #### [Boolean](https://www.w3school.com.cn/jsref/jsref_obj_boolean.asp)

  ## Boolean 对象

  Boolean 对象表示两个值："true" 或 "false"。

  ### 创建 Boolean 对象的语法：

  ```
  new Boolean(value);	//构造函数
  Boolean(value);		//转换函数
  ```

  ### 参数

  参数 *value* 由布尔对象存放的值或者要转换成布尔值的值。

  ### 返回值

  当作为一个构造函数（带有运算符 new）调用时，Boolean() 将把它的参数转换成一个布尔值，并且返回一个包含该值的 Boolean 对象。

  如果作为一个函数（不带有运算符 new）调用时，Boolean() 只将把它的参数转换成一个原始的布尔值，并且返回这个值。

  **注释：**如果省略 value 参数，或者设置为 0、-0、null、""、false、undefined 或 NaN，则该对象设置为 false。否则设置为 true（即使 value 参数是字符串 "false"）。

  ## Boolean 对象属性

  | 属性                                                         | 描述                                  |
  | :----------------------------------------------------------- | :------------------------------------ |
  | [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_boolean.asp) | 返回对创建此对象的 Boolean 函数的引用 |
  | [prototype](https://www.w3school.com.cn/jsref/jsref_prototype_boolean.asp) | 使您有能力向对象添加属性和方法。      |

  ## Boolean 对象方法

  | 方法                                                         | 描述                               |
  | :----------------------------------------------------------- | :--------------------------------- |
  | [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp) | 返回该对象的源代码。               |
  | [toString()](https://www.w3school.com.cn/jsref/jsref_toString_boolean.asp) | 把逻辑值转换为字符串，并返回结果。 |
  | [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueOf_boolean.asp) | 返回 Boolean 对象的原始值。        |

  ## Boolean 对象描述

  在 JavaScript 中，布尔值是一种基本的数据类型。Boolean 对象是一个将布尔值打包的布尔对象。Boolean 对象主要用于提供将布尔值转换成字符串的 toString() 方法。

  当调用 toString() 方法将布尔值转换成字符串时（通常是由 JavaScript 隐式地调用），JavaScript 会内在地将这个布尔值转换成一个临时的 Boolean 对象，然后调用这个对象的 toString() 方法。

- #### [Date](https://www.w3school.com.cn/jsref/jsref_obj_date.asp)

  ## Date 对象

  Date 对象用于处理日期和时间。

  ### 创建 Date 对象的语法：

  ```
  var myDate=new Date()
  ```

  **注释：**Date 对象会自动把当前日期和时间保存为其初始值。

  ## Date 对象属性

  | 属性                                                         | 描述                                 |
  | :----------------------------------------------------------- | :----------------------------------- |
  | [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_date.asp) | 返回对创建此对象的 Date 函数的引用。 |
  | [prototype](https://www.w3school.com.cn/jsref/jsref_prototype_date.asp) | 使您有能力向对象添加属性和方法。     |

  ## Date 对象方法

  | 方法                                                         | 描述                                                   |
  | :----------------------------------------------------------- | :----------------------------------------------------- |
  | [Date()](https://www.w3school.com.cn/jsref/jsref_Date.asp)   | 返回当日的日期和时间。                                 |
  | [getDate()](https://www.w3school.com.cn/jsref/jsref_getDate.asp) | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。            |
  | [getDay()](https://www.w3school.com.cn/jsref/jsref_getDay.asp) | 从 Date 对象返回一周中的某一天 (0 ~ 6)。               |
  | [getMonth()](https://www.w3school.com.cn/jsref/jsref_getMonth.asp) | 从 Date 对象返回月份 (0 ~ 11)。                        |
  | [getFullYear()](https://www.w3school.com.cn/jsref/jsref_getFullYear.asp) | 从 Date 对象以四位数字返回年份。                       |
  | [getYear()](https://www.w3school.com.cn/jsref/jsref_getYear.asp) | 请使用 getFullYear() 方法代替。                        |
  | [getHours()](https://www.w3school.com.cn/jsref/jsref_getHours.asp) | 返回 Date 对象的小时 (0 ~ 23)。                        |
  | [getMinutes()](https://www.w3school.com.cn/jsref/jsref_getMinutes.asp) | 返回 Date 对象的分钟 (0 ~ 59)。                        |
  | [getSeconds()](https://www.w3school.com.cn/jsref/jsref_getSeconds.asp) | 返回 Date 对象的秒数 (0 ~ 59)。                        |
  | [getMilliseconds()](https://www.w3school.com.cn/jsref/jsref_getMilliseconds.asp) | 返回 Date 对象的毫秒(0 ~ 999)。                        |
  | [getTime()](https://www.w3school.com.cn/jsref/jsref_getTime.asp) | 返回 1970 年 1 月 1 日至今的毫秒数。                   |
  | [getTimezoneOffset()](https://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp) | 返回本地时间与格林威治标准时间 (GMT) 的分钟差。        |
  | [getUTCDate()](https://www.w3school.com.cn/jsref/jsref_getUTCDate.asp) | 根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。        |
  | [getUTCDay()](https://www.w3school.com.cn/jsref/jsref_getUTCDay.asp) | 根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。         |
  | [getUTCMonth()](https://www.w3school.com.cn/jsref/jsref_getUTCMonth.asp) | 根据世界时从 Date 对象返回月份 (0 ~ 11)。              |
  | [getUTCFullYear()](https://www.w3school.com.cn/jsref/jsref_getUTCFullYear.asp) | 根据世界时从 Date 对象返回四位数的年份。               |
  | [getUTCHours()](https://www.w3school.com.cn/jsref/jsref_getUTCHours.asp) | 根据世界时返回 Date 对象的小时 (0 ~ 23)。              |
  | [getUTCMinutes()](https://www.w3school.com.cn/jsref/jsref_getUTCMinutes.asp) | 根据世界时返回 Date 对象的分钟 (0 ~ 59)。              |
  | [getUTCSeconds()](https://www.w3school.com.cn/jsref/jsref_getUTCSeconds.asp) | 根据世界时返回 Date 对象的秒钟 (0 ~ 59)。              |
  | [getUTCMilliseconds()](https://www.w3school.com.cn/jsref/jsref_getUTCMilliseconds.asp) | 根据世界时返回 Date 对象的毫秒(0 ~ 999)。              |
  | [parse()](https://www.w3school.com.cn/jsref/jsref_parse.asp) | 返回1970年1月1日午夜到指定日期（字符串）的毫秒数。     |
  | [setDate()](https://www.w3school.com.cn/jsref/jsref_setDate.asp) | 设置 Date 对象中月的某一天 (1 ~ 31)。                  |
  | [setMonth()](https://www.w3school.com.cn/jsref/jsref_setMonth.asp) | 设置 Date 对象中月份 (0 ~ 11)。                        |
  | [setFullYear()](https://www.w3school.com.cn/jsref/jsref_setFullYear.asp) | 设置 Date 对象中的年份（四位数字）。                   |
  | [setYear()](https://www.w3school.com.cn/jsref/jsref_setYear.asp) | 请使用 setFullYear() 方法代替。                        |
  | [setHours()](https://www.w3school.com.cn/jsref/jsref_setHours.asp) | 设置 Date 对象中的小时 (0 ~ 23)。                      |
  | [setMinutes()](https://www.w3school.com.cn/jsref/jsref_setMinutes.asp) | 设置 Date 对象中的分钟 (0 ~ 59)。                      |
  | [setSeconds()](https://www.w3school.com.cn/jsref/jsref_setSeconds.asp) | 设置 Date 对象中的秒钟 (0 ~ 59)。                      |
  | [setMilliseconds()](https://www.w3school.com.cn/jsref/jsref_setMilliseconds.asp) | 设置 Date 对象中的毫秒 (0 ~ 999)。                     |
  | [setTime()](https://www.w3school.com.cn/jsref/jsref_setTime.asp) | 以毫秒设置 Date 对象。                                 |
  | [setUTCDate()](https://www.w3school.com.cn/jsref/jsref_setUTCDate.asp) | 根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。        |
  | [setUTCMonth()](https://www.w3school.com.cn/jsref/jsref_setUTCMonth.asp) | 根据世界时设置 Date 对象中的月份 (0 ~ 11)。            |
  | [setUTCFullYear()](https://www.w3school.com.cn/jsref/jsref_setUTCFullYear.asp) | 根据世界时设置 Date 对象中的年份（四位数字）。         |
  | [setUTCHours()](https://www.w3school.com.cn/jsref/jsref_setutchours.asp) | 根据世界时设置 Date 对象中的小时 (0 ~ 23)。            |
  | [setUTCMinutes()](https://www.w3school.com.cn/jsref/jsref_setUTCMinutes.asp) | 根据世界时设置 Date 对象中的分钟 (0 ~ 59)。            |
  | [setUTCSeconds()](https://www.w3school.com.cn/jsref/jsref_setUTCSeconds.asp) | 根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。            |
  | [setUTCMilliseconds()](https://www.w3school.com.cn/jsref/jsref_setUTCMilliseconds.asp) | 根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。           |
  | [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp) | 返回该对象的源代码。                                   |
  | [toString()](https://www.w3school.com.cn/jsref/jsref_toString_date.asp) | 把 Date 对象转换为字符串。                             |
  | [toTimeString()](https://www.w3school.com.cn/jsref/jsref_toTimeString.asp) | 把 Date 对象的时间部分转换为字符串。                   |
  | [toDateString()](https://www.w3school.com.cn/jsref/jsref_toDateString.asp) | 把 Date 对象的日期部分转换为字符串。                   |
  | [toGMTString()](https://www.w3school.com.cn/jsref/jsref_toGMTString.asp) | 请使用 toUTCString() 方法代替。                        |
  | [toUTCString()](https://www.w3school.com.cn/jsref/jsref_toUTCString.asp) | 根据世界时，把 Date 对象转换为字符串。                 |
  | [toLocaleString()](https://www.w3school.com.cn/jsref/jsref_toLocaleString.asp) | 根据本地时间格式，把 Date 对象转换为字符串。           |
  | [toLocaleTimeString()](https://www.w3school.com.cn/jsref/jsref_toLocaleTimeString.asp) | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。 |
  | [toLocaleDateString()](https://www.w3school.com.cn/jsref/jsref_toLocaleDateString.asp) | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。 |
  | [UTC()](https://www.w3school.com.cn/jsref/jsref_utc.asp)     | 根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。  |
  | [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueOf_date.asp) | 返回 Date 对象的原始值。                               |

- #### [Math](https://www.w3school.com.cn/jsref/jsref_obj_math.asp)

  ## Math 对象

  Math 对象用于执行数学任务。

  ### 使用 Math 的属性和方法的语法：

  ```
  var pi_value=Math.PI;
  var sqrt_value=Math.sqrt(15);
  ```

  **注释：**Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。

  ## Math 对象属性

  | 属性                                                         | 描述                                              |
  | :----------------------------------------------------------- | :------------------------------------------------ |
  | [E](https://www.w3school.com.cn/jsref/jsref_e.asp)           | 返回算术常量 e，即自然对数的底数（约等于2.718）。 |
  | [LN2](https://www.w3school.com.cn/jsref/jsref_ln2.asp)       | 返回 2 的自然对数（约等于0.693）。                |
  | [LN10](https://www.w3school.com.cn/jsref/jsref_ln10.asp)     | 返回 10 的自然对数（约等于2.302）。               |
  | [LOG2E](https://www.w3school.com.cn/jsref/jsref_log2e.asp)   | 返回以 2 为底的 e 的对数（约等于 1.414）。        |
  | [LOG10E](https://www.w3school.com.cn/jsref/jsref_log10e.asp) | 返回以 10 为底的 e 的对数（约等于0.434）。        |
  | [PI](https://www.w3school.com.cn/jsref/jsref_pi.asp)         | 返回圆周率（约等于3.14159）。                     |
  | [SQRT1_2](https://www.w3school.com.cn/jsref/jsref_sqrt1_2.asp) | 返回返回 2 的平方根的倒数（约等于 0.707）。       |
  | [SQRT2](https://www.w3school.com.cn/jsref/jsref_sqrt2.asp)   | 返回 2 的平方根（约等于 1.414）。                 |

  ## Math 对象方法

  | 方法                                                         | 描述                                                         |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | [abs(x)](https://www.w3school.com.cn/jsref/jsref_abs.asp)    | 返回数的绝对值。                                             |
  | [acos(x)](https://www.w3school.com.cn/jsref/jsref_acos.asp)  | 返回数的反余弦值。                                           |
  | [asin(x)](https://www.w3school.com.cn/jsref/jsref_asin.asp)  | 返回数的反正弦值。                                           |
  | [atan(x)](https://www.w3school.com.cn/jsref/jsref_atan.asp)  | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
  | [atan2(y,x)](https://www.w3school.com.cn/jsref/jsref_atan2.asp) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
  | [ceil(x)](https://www.w3school.com.cn/jsref/jsref_ceil.asp)  | 对数进行上舍入。                                             |
  | [cos(x)](https://www.w3school.com.cn/jsref/jsref_cos.asp)    | 返回数的余弦。                                               |
  | [exp(x)](https://www.w3school.com.cn/jsref/jsref_exp.asp)    | 返回 e 的指数。                                              |
  | [floor(x)](https://www.w3school.com.cn/jsref/jsref_floor.asp) | 对数进行下舍入。                                             |
  | [log(x)](https://www.w3school.com.cn/jsref/jsref_log.asp)    | 返回数的自然对数（底为e）。                                  |
  | [max(x,y)](https://www.w3school.com.cn/jsref/jsref_max.asp)  | 返回 x 和 y 中的最高值。                                     |
  | [min(x,y)](https://www.w3school.com.cn/jsref/jsref_min.asp)  | 返回 x 和 y 中的最低值。                                     |
  | [pow(x,y)](https://www.w3school.com.cn/jsref/jsref_pow.asp)  | 返回 x 的 y 次幂。                                           |
  | [random()](https://www.w3school.com.cn/jsref/jsref_random.asp) | 返回 0 ~ 1 之间的随机数。                                    |
  | [round(x)](https://www.w3school.com.cn/jsref/jsref_round.asp) | 把数四舍五入为最接近的整数。                                 |
  | [sin(x)](https://www.w3school.com.cn/jsref/jsref_sin.asp)    | 返回数的正弦。                                               |
  | [sqrt(x)](https://www.w3school.com.cn/jsref/jsref_sqrt.asp)  | 返回数的平方根。                                             |
  | [tan(x)](https://www.w3school.com.cn/jsref/jsref_tan.asp)    | 返回角的正切。                                               |
  | [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_math.asp) | 返回该对象的源代码。                                         |
  | [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueof_math.asp) | 返回 Math 对象的原始值。                                     |

- #### [Number](https://www.w3school.com.cn/jsref/jsref_obj_number.asp)

  ## Number 对象

  Number 对象是原始数值的包装对象。

  ### 创建 Number 对象的语法：

  ```
  var myNum=new Number(value);
  var myNum=Number(value);
  ```

  ### 参数

  参数 *value* 是要创建的 Number 对象的数值，或是要转换成数字的值。

  ### 返回值

  当 Number() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 Number 对象。如果不用 new 运算符，把 Number() 作为一个函数来调用，它将把自己的参数转换成一个原始的数值，并且返回这个值（如果转换失败，则返回 NaN）。

  ## Number 对象属性

  | 属性                                                         | 描述                                   |
  | :----------------------------------------------------------- | :------------------------------------- |
  | [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_number.asp) | 返回对创建此对象的 Number 函数的引用。 |
  | [MAX_VALUE](https://www.w3school.com.cn/jsref/jsref_max_value.asp) | 可表示的最大的数。                     |
  | [MIN_VALUE](https://www.w3school.com.cn/jsref/jsref_min_value.asp) | 可表示的最小的数。                     |
  | [NaN](https://www.w3school.com.cn/jsref/jsref_nan_number.asp) | 非数字值。                             |
  | [NEGATIVE_INFINITY](https://www.w3school.com.cn/jsref/jsref_negative_infinity.asp) | 负无穷大，溢出时返回该值。             |
  | [POSITIVE_INFINITY](https://www.w3school.com.cn/jsref/jsref_positive_infinity.asp) | 正无穷大，溢出时返回该值。             |
  | prototype                                                    | 使您有能力向对象添加属性和方法。       |

  ## Number 对象方法

  | 方法                                                         | 描述                                                 |
  | :----------------------------------------------------------- | :--------------------------------------------------- |
  | [toString](https://www.w3school.com.cn/jsref/jsref_tostring_number.asp) | 把数字转换为字符串，使用指定的基数。                 |
  | [toLocaleString](https://www.w3school.com.cn/jsref/jsref_tolocalestring_number.asp) | 把数字转换为字符串，使用本地数字格式顺序。           |
  | [toFixed](https://www.w3school.com.cn/jsref/jsref_tofixed.asp) | 把数字转换为字符串，结果的小数点后有指定位数的数字。 |
  | [toExponential](https://www.w3school.com.cn/jsref/jsref_toexponential.asp) | 把对象的值转换为指数计数法。                         |
  | [toPrecision](https://www.w3school.com.cn/jsref/jsref_toprecision.asp) | 把数字格式化为指定的长度。                           |
  | [valueOf](https://www.w3school.com.cn/jsref/jsref_valueof_number.asp) | 返回一个 Number 对象的基本数字值。                   |

  ## Number 对象描述

  在 JavaScript 中，数字是一种基本的数据类型。JavaScript 还支持 Number 对象，该对象是原始数值的包装对象。在必要时，JavaScript 会自动地在原始数据和对象之间转换。在 JavaScript 1.1 中，可以用构造函数 Number() 明确地创建一个 Number 对象，尽管这样做并没有什么必要。

  构造函数 Number() 可以不与运算符 new 一起使用，而直接作为转化函数来使用。以这种方式调用 Number() 时，它会把自己的参数转化成一个数字，然后返回转换后的原始数值（或 NaN）。

  构造函数通常还用作 5 个有用的数字常量的占位符，这 5 个有用的数字常量分别是可表示的最大数、可表示的最小数、正无穷大、负无穷大和特殊的 NaN 值。 注意，这些值是构造函数 Number() 自身的属性，而不是单独的某个 Number 对象的属性。

  比如这样使用属性 MAX_VALUE 是正确的：

  ```
  var big = Number.MAX_VALUE
  ```

  但是这样是错误的：

  ```
  var n= new Number(2);
  var big = n.MAX_VALUE
  ```

  作为比较，我们看一下 toString() 和 Number 对象的其他方法，它们是每个 Number 对象的方法，而不是 Number() 构造函数的方法。前面提到过，在必要时，JavaScript 会自动地把原始数值转化成 Number 对象，调用 Number 方法的既可以是 Number 对象，也可以是原始数字值。

  ```
  var n = 123;
  var binary_value = n.toString(2);
  ```

- #### [String](https://www.w3school.com.cn/jsref/jsref_obj_string.asp)

  ## String 对象

  String 对象用于处理文本（字符串）。

  ### 创建 String 对象的语法：

  ```
  new String(s);
  String(s);
  ```

  ### 参数

  参数 *s* 是要存储在 String 对象中或转换成原始字符串的值。

  ### 返回值

  当 String() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 String 对象，存放的是字符串 *s* 或 *s* 的字符串表示。

  当不用 new 运算符调用 String() 时，它只把 *s* 转换成原始的字符串，并返回转换后的值。

  ## String 对象属性

  | 属性                                                         | 描述                       |
  | :----------------------------------------------------------- | :------------------------- |
  | constructor                                                  | 对创建该对象的函数的引用   |
  | [length](https://www.w3school.com.cn/jsref/jsref_length_string.asp) | 字符串的长度               |
  | prototype                                                    | 允许您向对象添加属性和方法 |

  ## String 对象方法

  | 方法                                                         | 描述                                                 |
  | :----------------------------------------------------------- | :--------------------------------------------------- |
  | [anchor()](https://www.w3school.com.cn/jsref/jsref_anchor.asp) | 创建 HTML 锚。                                       |
  | [big()](https://www.w3school.com.cn/jsref/jsref_big.asp)     | 用大号字体显示字符串。                               |
  | [blink()](https://www.w3school.com.cn/jsref/jsref_blink.asp) | 显示闪动字符串。                                     |
  | [bold()](https://www.w3school.com.cn/jsref/jsref_bold.asp)   | 使用粗体显示字符串。                                 |
  | [charAt()](https://www.w3school.com.cn/jsref/jsref_charAt.asp) | 返回在指定位置的字符。                               |
  | [charCodeAt()](https://www.w3school.com.cn/jsref/jsref_charCodeAt.asp) | 返回在指定的位置的字符的 Unicode 编码。              |
  | [concat()](https://www.w3school.com.cn/jsref/jsref_concat_string.asp) | 连接字符串。                                         |
  | [fixed()](https://www.w3school.com.cn/jsref/jsref_fixed.asp) | 以打字机文本显示字符串。                             |
  | [fontcolor()](https://www.w3school.com.cn/jsref/jsref_fontcolor.asp) | 使用指定的颜色来显示字符串。                         |
  | [fontsize()](https://www.w3school.com.cn/jsref/jsref_fontsize.asp) | 使用指定的尺寸来显示字符串。                         |
  | [fromCharCode()](https://www.w3school.com.cn/jsref/jsref_fromCharCode.asp) | 从字符编码创建一个字符串。                           |
  | [indexOf()](https://www.w3school.com.cn/jsref/jsref_indexOf.asp) | 检索字符串。                                         |
  | [italics()](https://www.w3school.com.cn/jsref/jsref_italics.asp) | 使用斜体显示字符串。                                 |
  | [lastIndexOf()](https://www.w3school.com.cn/jsref/jsref_lastIndexOf.asp) | 从后向前搜索字符串。                                 |
  | [link()](https://www.w3school.com.cn/jsref/jsref_link.asp)   | 将字符串显示为链接。                                 |
  | [localeCompare()](https://www.w3school.com.cn/jsref/jsref_localeCompare.asp) | 用本地特定的顺序来比较两个字符串。                   |
  | [match()](https://www.w3school.com.cn/jsref/jsref_match.asp) | 找到一个或多个正则表达式的匹配。                     |
  | [replace()](https://www.w3school.com.cn/jsref/jsref_replace.asp) | 替换与正则表达式匹配的子串。                         |
  | [search()](https://www.w3school.com.cn/jsref/jsref_search.asp) | 检索与正则表达式相匹配的值。                         |
  | [slice()](https://www.w3school.com.cn/jsref/jsref_slice_string.asp) | 提取字符串的片断，并在新的字符串中返回被提取的部分。 |
  | [small()](https://www.w3school.com.cn/jsref/jsref_small.asp) | 使用小字号来显示字符串。                             |
  | [split()](https://www.w3school.com.cn/jsref/jsref_split.asp) | 把字符串分割为字符串数组。                           |
  | [strike()](https://www.w3school.com.cn/jsref/jsref_strike.asp) | 使用删除线来显示字符串。                             |
  | [sub()](https://www.w3school.com.cn/jsref/jsref_sub.asp)     | 把字符串显示为下标。                                 |
  | [substr()](https://www.w3school.com.cn/jsref/jsref_substr.asp) | 从起始索引号提取字符串中指定数目的字符。             |
  | [substring()](https://www.w3school.com.cn/jsref/jsref_substring.asp) | 提取字符串中两个指定的索引号之间的字符。             |
  | [sup()](https://www.w3school.com.cn/jsref/jsref_sup.asp)     | 把字符串显示为上标。                                 |
  | [toLocaleLowerCase()](https://www.w3school.com.cn/jsref/jsref_toLocaleLowerCase.asp) | 把字符串转换为小写。                                 |
  | [toLocaleUpperCase()](https://www.w3school.com.cn/jsref/jsref_toLocaleUpperCase.asp) | 把字符串转换为大写。                                 |
  | [toLowerCase()](https://www.w3school.com.cn/jsref/jsref_toLowerCase.asp) | 把字符串转换为小写。                                 |
  | [toUpperCase()](https://www.w3school.com.cn/jsref/jsref_toUpperCase.asp) | 把字符串转换为大写。                                 |
  | toSource()                                                   | 代表对象的源代码。                                   |
  | [toString()](https://www.w3school.com.cn/jsref/jsref_toString_string.asp) | 返回字符串。                                         |
  | [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueOf_string.asp) | 返回某个字符串对象的原始值。                         |

  ## String 对象描述

  字符串是 JavaScript 的一种基本的数据类型。

  String 对象的 length 属性声明了该字符串中的字符数。

  String 类定义了大量操作字符串的方法，例如从字符串中提取字符或子串，或者检索字符或子串。

  需要注意的是，JavaScript 的字符串是不可变的（immutable），String 类定义的方法都不能改变字符串的内容。像 String.toUpperCase() 这样的方法，返回的是全新的字符串，而不是修改原始字符串。

  在较早的 Netscape 代码基的 JavaScript 实现中（例如 Firefox 实现中），字符串的行为就像只读的字符数组。例如，从字符串 s 中提取第三个字符，可以用 s[2] 代替更加标准的 s.charAt(2)。此外，对字符串应用 for/in 循环时，它将枚举字符串中每个字符的数组下标（但要注意，ECMAScript 标准规定，不能枚举 length 属性）。因为字符串的数组行为不标准，所以应该避免使用它。

- #### [RegExp](https://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)

  ## RegExp 对象

  RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。

  ### 直接量语法

  ```
  /pattern/attributes
  ```

  ### 创建 RegExp 对象的语法：

  ```
  new RegExp(pattern, attributes);
  ```

  ### 参数

  参数 *pattern* 是一个字符串，指定了正则表达式的模式或其他正则表达式。

  参数 *attributes* 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。ECMAScript 标准化之前，不支持 m 属性。如果 *pattern* 是正则表达式，而不是字符串，则必须省略该参数。

  ### 返回值

  一个新的 RegExp 对象，具有指定的模式和标志。如果参数 *pattern* 是正则表达式而不是字符串，那么 RegExp() 构造函数将用与指定的 RegExp 相同的模式和标志创建一个新的 RegExp 对象。

  如果不用 new 运算符，而将 RegExp() 作为函数调用，那么它的行为与用 new 运算符调用时一样，只是当 *pattern* 是正则表达式时，它只返回 *pattern*，而不再创建一个新的 RegExp 对象。

  ### 抛出

  SyntaxError - 如果 *pattern* 不是合法的正则表达式，或 *attributes* 含有 "g"、"i" 和 "m" 之外的字符，抛出该异常。

  TypeError - 如果 *pattern* 是 RegExp 对象，但没有省略 *attributes* 参数，抛出该异常。

  ## 修饰符

  | 修饰符                                                    | 描述                                                     |
  | :-------------------------------------------------------- | :------------------------------------------------------- |
  | [i](https://www.w3school.com.cn/jsref/jsref_regexp_i.asp) | 执行对大小写不敏感的匹配。                               |
  | [g](https://www.w3school.com.cn/jsref/jsref_regexp_g.asp) | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
  | m                                                         | 执行多行匹配。                                           |

  ## 方括号

  方括号用于查找某个范围内的字符：

  | 表达式                                                       | 描述                               |
  | :----------------------------------------------------------- | :--------------------------------- |
  | [[abc\]](https://www.w3school.com.cn/jsref/jsref_regexp_charset.asp) | 查找方括号之间的任何字符。         |
  | [[^abc\]](https://www.w3school.com.cn/jsref/jsref_regexp_charset_not.asp) | 查找任何不在方括号之间的字符。     |
  | [0-9]                                                        | 查找任何从 0 至 9 的数字。         |
  | [a-z]                                                        | 查找任何从小写 a 到小写 z 的字符。 |
  | [A-Z]                                                        | 查找任何从大写 A 到大写 Z 的字符。 |
  | [A-z]                                                        | 查找任何从大写 A 到小写 z 的字符。 |
  | [adgk]                                                       | 查找给定集合内的任何字符。         |
  | [^adgk]                                                      | 查找给定集合外的任何字符。         |
  | (red\|blue\|green)                                           | 查找任何指定的选项。               |

  ## 元字符

  元字符（Metacharacter）是拥有特殊含义的字符：

  | 元字符                                                       | 描述                                        |
  | :----------------------------------------------------------- | :------------------------------------------ |
  | [.](https://www.w3school.com.cn/jsref/jsref_regexp_dot.asp)  | 查找单个字符，除了换行和行结束符。          |
  | [\w](https://www.w3school.com.cn/jsref/jsref_regexp_wordchar.asp) | 查找单词字符。                              |
  | [\W](https://www.w3school.com.cn/jsref/jsref_regexp_wordchar_non.asp) | 查找非单词字符。                            |
  | [\d](https://www.w3school.com.cn/jsref/jsref_regexp_digit.asp) | 查找数字。                                  |
  | [\D](https://www.w3school.com.cn/jsref/jsref_regexp_digit_non.asp) | 查找非数字字符。                            |
  | [\s](https://www.w3school.com.cn/jsref/jsref_regexp_whitespace.asp) | 查找空白字符。                              |
  | [\S](https://www.w3school.com.cn/jsref/jsref_regexp_whitespace_non.asp) | 查找非空白字符。                            |
  | [\b](https://www.w3school.com.cn/jsref/jsref_regexp_begin.asp) | 匹配单词边界。                              |
  | [\B](https://www.w3school.com.cn/jsref/jsref_regexp_begin_not.asp) | 匹配非单词边界。                            |
  | \0                                                           | 查找 NUL 字符。                             |
  | [\n](https://www.w3school.com.cn/jsref/jsref_regexp_newline.asp) | 查找换行符。                                |
  | \f                                                           | 查找换页符。                                |
  | \r                                                           | 查找回车符。                                |
  | \t                                                           | 查找制表符。                                |
  | \v                                                           | 查找垂直制表符。                            |
  | [\xxx](https://www.w3school.com.cn/jsref/jsref_regexp_octal.asp) | 查找以八进制数 xxx 规定的字符。             |
  | [\xdd](https://www.w3school.com.cn/jsref/jsref_regexp_hex.asp) | 查找以十六进制数 dd 规定的字符。            |
  | [\uxxxx](https://www.w3school.com.cn/jsref/jsref_regexp_unicode_hex.asp) | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |

  ## 量词

  | 量词                                                         | 描述                                        |
  | :----------------------------------------------------------- | :------------------------------------------ |
  | [n+](https://www.w3school.com.cn/jsref/jsref_regexp_onemore.asp) | 匹配任何包含至少一个 n 的字符串。           |
  | [n*](https://www.w3school.com.cn/jsref/jsref_regexp_zeromore.asp) | 匹配任何包含零个或多个 n 的字符串。         |
  | [n?](https://www.w3school.com.cn/jsref/jsref_regexp_zeroone.asp) | 匹配任何包含零个或一个 n 的字符串。         |
  | [n{X}](https://www.w3school.com.cn/jsref/jsref_regexp_nx.asp) | 匹配包含 X 个 n 的序列的字符串。            |
  | [n{X,Y}](https://www.w3school.com.cn/jsref/jsref_regexp_nxy.asp) | 匹配包含 X 至 Y 个 n 的序列的字符串。       |
  | [n{X,}](https://www.w3school.com.cn/jsref/jsref_regexp_nxcomma.asp) | 匹配包含至少 X 个 n 的序列的字符串。        |
  | [n$](https://www.w3school.com.cn/jsref/jsref_regexp_ndollar.asp) | 匹配任何结尾为 n 的字符串。                 |
  | [^n](https://www.w3school.com.cn/jsref/jsref_regexp_ncaret.asp) | 匹配任何开头为 n 的字符串。                 |
  | [?=n](https://www.w3school.com.cn/jsref/jsref_regexp_nfollow.asp) | 匹配任何其后紧接指定字符串 n 的字符串。     |
  | [?!n](https://www.w3school.com.cn/jsref/jsref_regexp_nfollow_not.asp) | 匹配任何其后没有紧接指定字符串 n 的字符串。 |

  ## RegExp 对象属性

  | 属性                                                         | 描述                                     | FF   | IE   |
  | :----------------------------------------------------------- | :--------------------------------------- | :--- | :--- |
  | [global](https://www.w3school.com.cn/jsref/jsref_regexp_global.asp) | RegExp 对象是否具有标志 g。              | 1    | 4    |
  | [ignoreCase](https://www.w3school.com.cn/jsref/jsref_regexp_ignorecase.asp) | RegExp 对象是否具有标志 i。              | 1    | 4    |
  | [lastIndex](https://www.w3school.com.cn/jsref/jsref_lastindex_regexp.asp) | 一个整数，标示开始下一次匹配的字符位置。 | 1    | 4    |
  | [multiline](https://www.w3school.com.cn/jsref/jsref_multiline_regexp.asp) | RegExp 对象是否具有标志 m。              | 1    | 4    |
  | [source](https://www.w3school.com.cn/jsref/jsref_source_regexp.asp) | 正则表达式的源文本。                     | 1    | 4    |

  ## RegExp 对象方法

  | 方法                                                         | 描述                                               | FF   | IE   |
  | :----------------------------------------------------------- | :------------------------------------------------- | :--- | :--- |
  | [compile](https://www.w3school.com.cn/jsref/jsref_regexp_compile.asp) | 编译正则表达式。                                   | 1    | 4    |
  | [exec](https://www.w3school.com.cn/jsref/jsref_exec_regexp.asp) | 检索字符串中指定的值。返回找到的值，并确定其位置。 | 1    | 4    |
  | [test](https://www.w3school.com.cn/jsref/jsref_test_regexp.asp) | 检索字符串中指定的值。返回 true 或 false。         | 1    | 4    |

  ## 支持正则表达式的 String 对象的方法

  | 方法                                                         | 描述                             | FF   | IE   |
  | :----------------------------------------------------------- | :------------------------------- | :--- | :--- |
  | [search](https://www.w3school.com.cn/jsref/jsref_search.asp) | 检索与正则表达式相匹配的值。     | 1    | 4    |
  | [match](https://www.w3school.com.cn/jsref/jsref_match.asp)   | 找到一个或多个正则表达式的匹配。 | 1    | 4    |
  | [replace](https://www.w3school.com.cn/jsref/jsref_replace.asp) | 替换与正则表达式匹配的子串。     | 1    | 4    |
  | [split](https://www.w3school.com.cn/jsref/jsref_split.asp)   | 把字符串分割为字符串数组。       | 1    | 4    |

- #### Global

  全局属性和函数可用于所有内建的 JavaScript 对象。

  ## 顶层函数（全局函数）

  | 函数                                                         | 描述                                               |
  | :----------------------------------------------------------- | :------------------------------------------------- |
  | [decodeURI()](https://www.w3school.com.cn/jsref/jsref_decodeURI.asp) | 解码某个编码的 URI。                               |
  | [decodeURIComponent()](https://www.w3school.com.cn/jsref/jsref_decodeURIComponent.asp) | 解码一个编码的 URI 组件。                          |
  | [encodeURI()](https://www.w3school.com.cn/jsref/jsref_encodeuri.asp) | 把字符串编码为 URI。                               |
  | [encodeURIComponent()](https://www.w3school.com.cn/jsref/jsref_encodeURIComponent.asp) | 把字符串编码为 URI 组件。                          |
  | [escape()](https://www.w3school.com.cn/jsref/jsref_escape.asp) | 对字符串进行编码。                                 |
  | [eval()](https://www.w3school.com.cn/jsref/jsref_eval.asp)   | 计算 JavaScript 字符串，并把它作为脚本代码来执行。 |
  | [getClass()](https://www.w3school.com.cn/jsref/jsref_getClass.asp) | 返回一个 JavaObject 的 JavaClass。                 |
  | [isFinite()](https://www.w3school.com.cn/jsref/jsref_isFinite.asp) | 检查某个值是否为有穷大的数。                       |
  | [isNaN()](https://www.w3school.com.cn/jsref/jsref_isNaN.asp) | 检查某个值是否是数字。                             |
  | [Number()](https://www.w3school.com.cn/jsref/jsref_number.asp) | 把对象的值转换为数字。                             |
  | [parseFloat()](https://www.w3school.com.cn/jsref/jsref_parseFloat.asp) | 解析一个字符串并返回一个浮点数。                   |
  | [parseInt()](https://www.w3school.com.cn/jsref/jsref_parseInt.asp) | 解析一个字符串并返回一个整数。                     |
  | [String()](https://www.w3school.com.cn/jsref/jsref_string.asp) | 把对象的值转换为字符串。                           |
  | [unescape()](https://www.w3school.com.cn/jsref/jsref_unescape.asp) | 对由 escape() 编码的字符串进行解码。               |

  ## 顶层属性（全局属性）

  | 方法                                                         | 描述                                   |
  | :----------------------------------------------------------- | :------------------------------------- |
  | [Infinity](https://www.w3school.com.cn/jsref/jsref_infinity.asp) | 代表正的无穷大的数值。                 |
  | [java](https://www.w3school.com.cn/jsref/jsref_java.asp)     | 代表 java.* 包层级的一个 JavaPackage。 |
  | [NaN](https://www.w3school.com.cn/jsref/jsref_nan.asp)       | 指示某个值是不是数字值。               |
  | [Packages](https://www.w3school.com.cn/jsref/jsref_Packages.asp) | 根 JavaPackage 对象。                  |
  | [undefined](https://www.w3school.com.cn/jsref/jsref_undefined.asp) | 指示未定义的值。                       |

  ## 全局对象描述

  全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。全局对象不是任何对象的属性，所以它没有名称。

  在顶层 JavaScript 代码中，可以用关键字 this 引用全局对象。但通常不必用这种方式引用全局对象，因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。例如，当JavaScript 代码引用 parseInt() 函数时，它引用的是全局对象的 parseInt 属性。全局对象是作用域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。

  全局对象只是一个对象，而不是类。既没有构造函数，也无法实例化一个新的全局对象。

  在 JavaScript 代码嵌入一个特殊环境中时，全局对象通常具有环境特定的属性。实际上，ECMAScript 标准没有规定全局对象的类型，JavaScript 的实现或嵌入的 JavaScript 都可以把任意类型的对象作为全局对象，只要该对象定义了这里列出的基本属性和函数。例如，在允许通过 LiveConnect 或相关的技术来脚本化 Java 的 JavaScript 实现中，全局对象被赋予了这里列出的 java 和 Package 属性以及 getClass() 方法。而在客户端 JavaScript 中，全局对象就是 Window 对象，表示允许 JavaScript 代码的 Web 浏览器窗口。

  ### 例子

  在 JavaScript 核心语言中，全局对象的预定义属性都是不可枚举的，所有可以用 for/in 循环列出所有隐式或显式声明的全局变量，如下所示：

  ```
  var variables = "";
  
  for (var name in this) 
  {
  variables += name + "<br />";
  }
  
  document.write(variables);
  ```

- #### event

  **事件通常与函数配合使用，这样就可以通过发生的事件来驱动函数执行。**

  ## 事件句柄

  HTML 4.0 的新特性之一是有能力使 HTML 事件触发浏览器中的动作（action），比如当用户点击某个 HTML 元素时启动一段 JavaScript。下面是一个属性列表，这些属性可插入 HTML 标签来定义事件动作。

  | 属性        | 当以下情况发生时，出现此事件   | FF   | N    | IE   |
  | :---------- | :----------------------------- | :--- | :--- | :--- |
  | onabort     | 图像加载被中断                 | 1    | 3    | 4    |
  | onblur      | 元素失去焦点                   | 1    | 2    | 3    |
  | onchange    | 用户改变域的内容               | 1    | 2    | 3    |
  | onclick     | 鼠标点击某个对象               | 1    | 2    | 3    |
  | ondblclick  | 鼠标双击某个对象               | 1    | 4    | 4    |
  | onerror     | 当加载文档或图像时发生某个错误 | 1    | 3    | 4    |
  | onfocus     | 元素获得焦点                   | 1    | 2    | 3    |
  | onkeydown   | 某个键盘的键被按下             | 1    | 4    | 3    |
  | onkeypress  | 某个键盘的键被按下或按住       | 1    | 4    | 3    |
  | onkeyup     | 某个键盘的键被松开             | 1    | 4    | 3    |
  | onload      | 某个页面或图像被完成加载       | 1    | 2    | 3    |
  | onmousedown | 某个鼠标按键被按下             | 1    | 4    | 4    |
  | onmousemove | 鼠标被移动                     | 1    | 6    | 3    |
  | onmouseout  | 鼠标从某元素移开               | 1    | 4    | 4    |
  | onmouseover | 鼠标被移到某元素之上           | 1    | 2    | 3    |
  | onmouseup   | 某个鼠标按键被松开             | 1    | 4    | 4    |
  | onreset     | 重置按钮被点击                 | 1    | 3    | 4    |
  | onresize    | 窗口或框架被调整尺寸           | 1    | 4    | 4    |
  | onselect    | 文本被选定                     | 1    | 2    | 3    |
  | onsubmit    | 提交按钮被点击                 | 1    | 2    | 3    |
  | onunload    | 用户退出页面                   | 1    | 2    | 3    |

