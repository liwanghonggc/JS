//游戏的自调用函数
(function () {
    //游戏的构造函数
    var that = null;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    //初始化游戏
    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);
        //调用小蛇的自动移动方法
        this.runSnake(this.food, this.map);
        this.bindKey();
    };

    //添加原型方法,小蛇可以自动的跑起来
    Game.prototype.runSnake = function(food, map){
        var timeId = setInterval(function () {
            this.snake.move(this.map, this.food);
            this.snake.init(this.map);

            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;

            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;

            if(headX < 0 || headX >= maxX || headY < 0 || headY >= maxY){
                clearInterval(timeId);
                alert("游戏结束");
            }
        }.bind(that), 300);
    };

    //添加原型方法,设置用户按键,改变小蛇的移动方向
    Game.prototype.bindKey = function(){
        document.addEventListener("keydown", function (e) {
            //这里的this应该是触发keydown事件的对象-->document
            //需要使用bind方法修改this的值改为Game对象
            switch (e.keyCode){
                case 37 : this.snake.direction = "left"; break;
                case 38 : this.snake.direction = "top"; break;
                case 39 : this.snake.direction = "right"; break;
                case 40 : this.snake.direction = "bottom"; break;
            }
        }.bind(that), false);
    };

    window.Game = Game;
}());