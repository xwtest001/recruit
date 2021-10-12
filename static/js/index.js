// 导航条被卷起后置顶
const nav = document.getElementById("nav")
const nav_height = nav.offsetHeight;
function f() {
    //获取页面被卷起的高度即滚动条隐藏的高度
    const top_distance = document.documentElement.scrollTop;
    if (top_distance >= nav_height){
        nav.style.position = "fixed";
        nav.style.top = 0;
    }
    else{
        nav.style.position = "static";
    }
}
// 隐藏展开箭头
function hidden_unfold(){

}
// 滚动条滚动时执行
$(document).scroll(function (){
    f()
})

// 职位展开及收缩
function unfold (num) {
    const card = $("#hidden-content"+num);
    const unfold = $("#unfold"+num)
    // 结束其他card的展开状态
    card.parent().parent().siblings().children().children(".content").attr("class","hidden-content")
    card.parent().parent().siblings().children().children(".fold").attr("class","unfold")

    // 更改当前card的状态
    if (card.attr("class") === "content"){
        card.removeClass("content")
        card.addClass("hidden-content")
    }else{
        card.removeClass("hidden-content")
        card.addClass("content")
    }
    // 更改箭头的角度
    if (unfold.attr("class") === "fold"){
        unfold.removeClass("fold")
        unfold.addClass("unfold")
    }else{
        unfold.removeClass("unfold")
        unfold.addClass("fold")
    }

}

// 收藏
function collect() {

}