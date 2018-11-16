//食物的自调用函数
(function () {
    //用来保存每个小方块食物的,用来删除该食物
    var elements = [];

    function Food(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "green";
    }

    Food.prototype.init = function(map) {
        //初始化的时候先删除食物
        remove();

        //创建div
        var div = document.createElement("div");
        //将div加到map中
        map.appendChild(div);

        //设置div样式
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;

        div.style.position = "absolute";

        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;

        div.style.left = this.x + "px";
        div.style.top = this.y + "px";

        //将div放到elements中
        elements.push(div);
    };

    //私有函数,删除食物
    function remove(){
        for(var i = 0; i < elements.length; i++){
            var div = elements[i];
            div.parentNode.removeChild(div);
            elements.splice(i, 1);
        }
    }


    //把食物暴露给window,外部可以使用
    window.Food = Food;
}());