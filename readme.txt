1.JS分3个部分
  1) ECMAScript,JS的基本语法
  2) DOM,Document Object Model,文档对象模型
  3) BOM,Browser Object Model,浏览器对象模型

2、JS是一门运行在客户端的脚本语言,是一门解释性语言,是一门动态类型语言,是一门基于对象的语言.
   JS是不需要编译的

   编译语言:需要把代码翻译成计算机所认识的二进制语言,才能够执行
   脚本语言:不需要编译,直接执行

   脚本语言:t-sql,cmd

3、一些快捷键
  Ctrl Alt L,格式化代码

4、JS中数据类型
   number、string、boolean、null、undefined、object

5、数字类型
   1) 不要用小数去验证小数
      var x = 0.1;
      var y = 0.1;
      var sum = x + y;
      console.log(sum == 0.3) --> false;

   2) 不要用Nan验证是不是NaN
      如何验证结果是不是NaN,应该使用isNan()

6、绑定事件
   对象.on事件类型
   addEventListener("click", function(){}, false);
   attachEvent("onclick", function(){});

   绑定事件的区别
   相同点:都可以为元素绑定事件
   不同点:
         1) 参数个数不一样
         2) addEventListener,谷歌、火狐、IE11支持,IE8不支持
            attachEvent,谷歌火狐不支持,IE11不支持,IE8支持
         3) addEventListener中this是当前绑定事件的对象
            attachEvent中this是window对象
         4) addEventListener中事件类型没有on,而attachEvent中有

7、解绑事件
   var input = document.getElementById("input");

   注意:用什么方式绑定事件,就应该用对应的方式解绑事件

   1) 将对象重新绑定事件null,形如input.onclick = null;
   2) input.removeEventListener()
   3) input.detachEvent()

8、事件冒泡

   多个元素嵌套,有层次关系,这些标签都注册了相同的事件,如果里面的元素事件触发了,外面元素的该事件自动的触发了

   事件处理函数中即使不传参数,也有一个默认的参数,即事件处理参数对象,记为e

   如何阻止事件冒泡:
   1) window.event.cancelBubble = true; IE特有,谷歌支持,火狐不支持
   2) e.stopPropagation(); 谷歌和火狐支持,IE8不支持e对象

   事件有3个阶段
   1) 事件捕获阶段: 从外向内
   2) 事件目标阶段
   3) 事件冒泡阶段: 从里向外

   通过e.eventPhase这个属性可以知道当前事件是什么阶段的,1捕获阶段,3冒泡阶段

9、BOM介绍
   浏览器中有个顶级对象: window,皇上
   页面中顶级对象: document,总管太监
   页面中的所有内容都是属于浏览器的,页面中的所有内容都是window的

10、加载事件
   1) onload:页面加载完毕
   2) onunload:页面关闭后才触发的事件,2) 3)谷歌浏览器中没有效果
   3) onbeforeunload:页面关闭之前触发的

11、location对象
   location.replace("http://www.jd.com");//没有历史记录

   location.href="http://www.jd.com";
   location.assign("http://www.jd.com");

12、history对象
   history.forward():前进
   history.back():后退
   history.go():里面可以加参数,正数表示前进,负数后退

13、navigator和platform
   window.navigator.userAgent,可以判断浏览器类型
   window.navigator.platform,可以判断浏览器所在的系统平台类型

14、定时器
   1) var timeId = setInterval(fun, time): fun为要执行的函数,time为每个多少毫秒执行一次,反复执行
      window.clearInterval(timeId): 清理定时器,参数为定义定时器的返回值

   2) var timeId = setTimeout(fun, time): 参数及返回值同上,该定时器只执行一次,用完要清理,否则即使废掉了也占空间
      clearTimeout(timeId)

15、创建页面元素
   1) document.write()
   2) innerHTML
   3) document.createElement()

16、小知识点1
   1) div要移动,要脱离文档流,使用absolute绝对定位
   2) 如果样式的代码是在style的标签中设置,外面是获取不到.如果样式的代码是在style的属性设置,外面是可以获取

   可以使用getById("div").offsetLeft来获取属性值,不管它是在style标签还是再style属性中都可以获取到.

17、三组属性
   1) offset系列中的属性
      在style标签中设置的样式属性获取不到,style属性中设置的样式是可以获取到的
      以后获取元素的宽和高,应该使用offset系列来获取

      offsetWidth: 元素的宽,有边框
      offsetHeight: 元素的高,含边框
      offsetLeft: 获取元素距离左边位置的值
      offsetTop: 获取元素距离上面位置的值

      没有脱离文档流的情况下: offsetLeft为父级元素的margin+padding+border+自己的margin
      脱标情况下: offsetLeft主要是自己的left+margin

   2) scroll系列
      scrollWidth: 元素中内容实际的宽度,如果无内容(或者内容不足)就是元素的宽
      scrollHeight: 元素中内容实际的高度,如果无内容就是元素的高
      scrollTop: 向上卷曲出去的距离

18、直接通过document获取元素
    document.body
    document.title
    document.documentElements: 获取HTML

19、获取任意一个元素任意一个样式属性的值
    function getStyle(element, attr){
        //火狐谷歌支持
        if(window.getComputedStyle){
            return window.getComputedStyle(element, null)[attr];
        }else {
            return element.currentStyle[attr];
        }
    }

    或者简写
    function getStyle(element, attr){
        return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
    }

20、小知识点2
   var str = "23hello";

   parseInt(str) --> 23
   Number(str)   --> NaN

21、数组的几个方法
   1) arr.shift():    删除第一个元素
   2) arr.push():     添加一个元素到最后
   3) arr.unshift():  添加元素到最前面
   4) arr.pop():      删除第一个元素

















