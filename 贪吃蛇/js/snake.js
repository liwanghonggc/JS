//小蛇的自调用函数
(function () {
    //存放小蛇的每个身体部分
    var elements = [];

    //小蛇的构造函数
    function Snake(width, height, direction) {
        //小蛇每个部分的高和宽
        this.width = width || 20;
        this.height = height || 20;

        //小蛇的身体
        this.body = [
            {x : 3, y : 2, color : "red"},
            {x : 2, y : 2, color : "orange"},
            {x : 1, y : 2, color : "orange"}
        ];

        this.direction = direction || "right";
    }

    //为原型添加方法,小蛇初始化方法
    Snake.prototype.init = function (map) {
        remove();

        //循环遍历创建div
        for(var i = 0; i < this.body.length; i++){
            //创建div并加入到地图中
            var div = document.createElement("div");
            map.appendChild(div);

            //设置div样式
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";

            var obj = this.body[i];
            div.style.left = (obj.x * this.width) + "px";
            div.style.top = (obj.y * this.height) + "px";
            div.style.backgroundColor = obj.color;

            elements.push(div);
        }
    };

    //为原型添加方法,小蛇动起来
    Snake.prototype.move = function(map, food){
        //改变小蛇的身体位置
        var i = this.body.length - 1;
        //改变除蛇头之外的其他身体部分位置
        for(; i > 0; i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y
        }
        //判断方向,改变小蛇蛇头位置
        switch (this.direction){
            case "right" : this.body[0].x += 1; break;
            case "left" : this.body[0].x -= 1; break;
            case "top" : this.body[0].y -= 1; break;
            case "bottom" : this.body[0].y += 1; break;
        }

        //判断小蛇有没有吃到食物
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        if(headX === food.x && headY === food.y){
            //获取小蛇最后的尾巴
            var last = this.body[this.body.length - 1];
            this.body.push({
                x : last.x,
                y : last.y,
                color : last.color
            });
            //删除食物并重新放置食物
            food.init(map);
        }
    };

    //删除小蛇的私有函数
    function remove(){
        var i = elements.length - 1;
        for(; i >= 0; i--){
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }

    window.Snake = Snake;

}());