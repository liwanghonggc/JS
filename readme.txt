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

      直接使用obj.offsetWidth来获取,不是obj.style.offsetWidth

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

   3) client系列
      clientWidth: 可视区域的宽度,不含边框
      clientHeight:可视区域的高,边框内部
      clientLeft: 左边框的宽度
      clientTop: 上边框的宽度

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

22、小知识点3
   1) 阻止默认事件,如点击a链接后禁止跳转
      return false;
      e.preventDefault;

   2) 阻止事件冒泡
      e.stopPropagation();
      window.event.cancelBubble = true;

23、小知识点4
    设置鼠标移动的时候,文字不被选中
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

24、元素隐藏的几种方式
   1) obj.style.display = "none";        不占位
   2) obj.style.visibility = "hidden"    占位
   3) obj.style.opacity = 0              占位
   4) obj.style.height = "0px"           占位
   5) obj.style.border = "0px solid red" 占位

25、创建对象的三种方式
   1) 字面量的方式
   var per = {
         name:"卡卡西",
         age:20,
         sex:"男",
         eat:function () {
           console.log("吃臭豆腐");
         };
   }

   2) 调用系统的构造函数
   var per = new Object();
   per.name = "lwh";
   per.eat = function(){
     console.log("吃水果");
   }

   3) 自定义构造函数方式
   function Person(name, age){
     this.name = name;
     this.age = age;
     this.play = function(){
       //...
     };
   }

   console.log(per instanceof Person);  --> 自定义构造函数创建的对象是可以确定对象的类型的

26、判断这个对象是不是这种数据类型的
   1) 通过构造器的方式, 实例对象.构造器 == 构造函数名字
      dog.constructor == Animal

   2) 对象 instanceof 构造函数名字
      dog insanceof Animal

   看对象的结构: console.dir(obj);

27、原型
   1) 通过原型来添加方法,解决数据共享,节省内存空间
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }

      //通过原型来添加方法,解决数据共享,节省内存空间
      Person.prototype.eat = function () {
        console.log("吃凉菜");
      };

      var p1 = new Person("小明", 20);
      var p2 = new Person("小红", 30);
      console.log(p1.eat == p2.eat);  --> true

      console.dir(p1);
      console.dir(p2);

      实例对象中根本没有eat方法,但是能够使用,这是为什么?

   2) 对象和构造函数中的原型
      实例对象中有个属性,__proto__,也是对象,叫原型,不是标准的属性,浏览器使用的
      构造函数中有一个属性,prototype,也是对象,叫原型,是标准属性,程序员使用

      原型 ----> __proto__或者是prototype,都是原型对象
      原型的作用: 共享数据,节省内存空间

   3) 原型的简单写法
      Student.prototype = {
         //简单的原型写法,缺少构造器,自己手动加上,手动修改构造器的指向
         constructor:Student,
         height: "188",
         weight: "55kg",
         study: function () {
           console.log("学习好开心啊");
         },
         eat: function () {
           console.log("我要吃好吃的");
         }
       };

      var stu = new Student("段飞",20,"男");
      stu.eat();
      stu.study();
      console.dir(Student);
      console.dir(stu);

   4) 原型要点
      a) 原型中的方法可以互相访问
      b) 实例对象使用的属性或者方法,先在实例中查找,找到了则直接使用,找不到则去实例
         对象的__proto__指向的原型对象prototype中找,找到了则使用,找不到则报错

   5) 为内置对象添加方法
      String.prototype.sayHi = function(){
          console.log("字符串");
      };

      var str = "hello";
      str.sayHi();

28、函数的自调用

    1) 一次性的函数,声明的同时,直接就调用了
    (function(形参){
        console.log("函数的自调用");
    })(实参);

    2) 如何把局部变量变成全局变量,将局部变量给window就可以了
    (function(win){
        var num = 10;
        win.num = num;
    })(window);

    console.log(num);

29、原型链
    原型链是一种关系,实例对象和原型对象之间的关系,关系是通过原型(_proto_)来联系的

    1) 实例对象的原型_proto_和构造函数的原型prototype指向是相同的,
       实例对象中的_proto_原型指向的是构造函数中的原型prototype
       per._proto_ == Person.prototype --> true

    2) 构造函数和原型对象中的this指向
       构造函数中的this就是实例对象,原型对象中方法中的this就是实例对象
       function Person(age){
         this.age = age;
         console.log(this);
       }

       Person.prototype.eat = function(){
         console.log(this);
       }
       两个this指向的是同一个对象,即实例对象

    3) 原型的指向是否可以改变
           实例对象的原型_proto_指向的是该对象所在的构造函数的原型对象,构造函数的原型对象prototype指向如果改变了,
       实例对象的原型_proto_指向也会发生改变

           原型的指向可以改变,实例对象和原型对象之间的关系是通过_proto_原型来联系起来的,这个关系就是原型链

    4) 原型最终指向了哪里?
           实例对象中有_proto_原型,构造函数中有prototype原型,prototype也是对象,所以prototype这个对象中也有_proto_,
       那么它指向了哪里?

       console.log(Person.prototype._proto_);                         --> Object

       console.log(per.__proto__ == Person.prototype);                --> true
       console.log(Person.prototype.__proto__ == Object.prototype);   --> true
       console.log(Object.prototype.__proto__);                       --> null

    5) 如果原型指向改变了,那么应该在原型改变指向之后添加原型方法

30、继承
    1) 原型作用之二:实现继承

    2) 原型继承:改变原型的指向
       借用构造函数继承:主要解决属性的问题
       组合继承:原型继承+借用构造函数继承,既能解决属性问题,又能解决方法问题
       拷贝继承:就是把对象中需要共享的属性或者方法,直接遍历的方式复制到另一个对象中

31、高阶函数
   1) 函数的角色
      a) 函数的声明:
         function f1(){

         }
         调用 --> f1();
      b) 函数表达式
         var f2 = function(){

         };
         调用 --> f2();

      函数声明和函数表达式的区别:函数声明如果放在if-else的语句中,在IE8的浏览器中会出现问题.
                              以后宁愿用函数表达式,都不用函数声明

   2) 函数中this指向问题
      a) 普通函数中的this指向?
         function f(){
            console.log(this);  --> window
         }

      b) 定时器中this的指向?
         setInterval(function(){
            console.log(this);  --> window
         }, 1000);

      c) 构造函数中this的指向?
         function Person(){
            console.log(this)   --> 实例对象
         }

      d) 对象.方法中的this指向?   --> 当前的实例对象

      e) 原型对象的方法中this指向? --> 实例对象

      严格模式下:
          "use strict";
          没有明确指定 --> this为undefined

   3) 函数也是对象,对象不一定是函数

      如果一个东西里面既有prototype,又有_proto_,说明既是函数又是对象

      所有的函数实际上都是Function的构造函数创建出来的实例对象

   4) 函数作为参数
      function f(fn){
          console.log("f的函数");
          fn();
      }

      传入匿名函数
      f(function(){
          console.log("我是匿名函数");
      });

      命名函数
      function f2(){
          console.log("f2的函数");
      }
      f(f2);
      函数作为参数的时候,如果是命名函数,那么只传入命名函数的名字,不要加括号,否则就是将命名函数的返回值作为参数了

   5) 函数作为返回值
      function f1(){
          console.log("f1函数开始");
          return function(){
              console.log("函数的返回值");
          }
      }

      var ff = f1();
      ff();

32、apply和call的使用:可以改变this的指向

   function f(x, y){
       console.log("结果是: " + (x + y) + this);
   }
   f(10, 20); --> 函数的调用

   1)不传参数或者传null
       f.apply();
       f.call();

       f.apply(null);
       f.call(null);

       apply和call方法中如果没有传入参数,或者是传入的是null,那么调用该方法的函数对象中的this就是默认的window

   2) 传参
      function Person(age, sex){
          this.age = age;
          this.sex = sex;
      }
      Person.prototype.sayHi = function(x, y){
          console.log(this.sex);
      };

      var per = new Person(10, "男");
      per.sayHi(); --> 男

      function Student(name, sex){
          this.name = name;
          this.set = sex;
      }

      var stu = new Student("小明", "人妖");

      //两个都可以改变this指向,此时sayHi中的this对象为stu
      per.sayHi.apply(stu, [10, 20]); --> 人妖
      per.sayHi.call(stu, 10, 20); --> 人妖

   3) apply和call到底是谁的?
      它们并不在函数这个实例对象中,而是在Function的prototype中

33、bind方法
    复制一份,改变了this的指向

    function Person(){
        this.age = age;
    }
    Person.prototype.play = function(){
        console.log(this.age);
    };

    function Student(age){
        this.age = age;
    }

    var per = new Person(10);
    var stu = new Student(20);

    //复制了一份,将this指向改为传入的参数stu
    var f = per.play.bind(stu);
    f(); --> 20

34、函数中几个成员
    function f(x,y) {
         console.log(f.name);               --> 函数名,不可修改
         console.log(f.arguments.length);   --> 函数实参个数
         console.log(f.length);             --> 函数形参个数
         console.log(f.caller);             --> 调用者
    }

35、作用域
   1) JS中没有块级作用域,一对括号中定义的变量,在大括号外面也可以使用
      while(true){
          var num = 10;
          break;
      }
      console.log(num);  --> 10,可以访问

      {
          var num = 100;
      }
      console.log(num);  --> 100,可以访问

      function f(){
          //这个是局部变量,外面不可以访问
          var num = 10;
      }

   2) 作用域链,变量的使用,从里往外,层层搜索,搜索到了就可以直接使用了
      var num = 10;
      function f1(){
          var num = 20;
          function f2(){
              var num = 30;
              console.log(num);
          }
          f2();
      }
      f1();

   3) 预解析,就是在浏览器解析代码之前,把变量的声明和函数的声明提前到该作用域的最外面

      //变量的提升
      console.log(num);  --> undefined;
      var num = 10;

      //函数的声明提前
      f();  --> 正常输出
      function f(){
          console.log("这个函数,执行了");
      }

      //这样会报错
      f();
      var f = function(){
          console.log("不能正常执行");
      }

36、闭包
   1) 闭包的概念:函数A中,有一个函数B,函数B中可以访问函数A中定义的变量或者是数据,此时形成了闭包
   2) 闭包的模式:函数模式的闭包,对象模式的闭包
      函数模式的闭包
      function f1(){
         var num = 10;
         function f2(){
             console.log(num);
         }
         //函数调用
         f2();
      }

      f1();

      //对象模式的闭包:函数中有一个对象
      function f(){
         var num = 10;
         var obj = {
             age : num;
         };
         console.log(obj.age);
      }

      f();

   3) 闭包的作用:缓存数据,延长作用域链
      缓存数据
      function f(){
          var num = 10;
          return function(){
              num++;
              return num;
          }
      }

      var ff = f();
      console.log(ff()); --> 11
      console.log(ff()); --> 12
      console.log(ff()); --> 13

   4) 闭包的优点缺点:缓存数据

37、深浅拷贝





















