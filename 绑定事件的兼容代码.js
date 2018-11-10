/**
   绑定事件的兼容
   element: 对象
   type:    事件类型,如click
   fnName:  函数名
 */
function addEventListener(element, type, fnName) {
    if(element.addEventListener){
        element.addEventListener(type, fnName, false);
    }else if(element.attachEvent){
        element.attachEvent("on" + type, fnName);
    }else {
        element["on" + type] = fnName;
    }
}

/**
 解绑事件的兼容
 element: 对象
 type:    事件类型,如click
 fnName:  函数名
 */
function addEventListener(element, type, fnName) {
    if(element.removeEventListener){
        element.removeEventListener(type, fnName, false);
    }else if(element.detachEvent){
        element.detachEvent("on" + type, fnName);
    }else {
        element["on" + type] = null;
    }
}