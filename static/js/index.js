// 导航条被卷起后置顶
const nav = document.getElementById("nav")
const nav_height = nav.offsetHeight;
back = document.getElementById("back");

function f() {

    const body_width = $("#body").width();
    nav.style.width = body_width + "px";
    //获取页面被卷起的高度即滚动条隐藏的高度
    const top_distance = document.documentElement.scrollTop;
    if (top_distance >= nav_height) {
        nav.style.position = "fixed";
        nav.style.top = 0;
        back.style.display = "block";
    } else {
        nav.style.position = "static";
        back.style.display = "none";
    }
}

// 滚动条滚动时执行  监控滚动条
$(document).scroll(function () {
    f()
})
// 窗口变化时执行 监控窗口
$(window).resize(function () {
    f()
})

// 职位展开及收缩
function unfold(num) {
    const card = $("#hidden-content" + num);
    const unfold = $("#unfold" + num)
    // 结束其他card的展开状态
    card.parent().parent().siblings().children().children(".content").attr("class", "hidden-content")
    card.parent().parent().siblings().children().children(".fold").attr("class", "unfold")

    // 更改当前card的状态
    if (card.attr("class") === "content") {
        card.removeClass("content")
        card.addClass("hidden-content")
    } else {
        card.removeClass("hidden-content")
        card.addClass("content")
    }
    // 更改箭头的角度
    if (unfold.attr("class") === "fold") {
        unfold.removeClass("fold")
        unfold.addClass("unfold")
    } else {
        unfold.removeClass("unfold")
        unfold.addClass("fold")
    }

}

// 返回顶部
function back_top() {
    window.scroll(0, 0)
}

// 登录
function login() {
    document.getElementById("login").style.display = "block";
    document.getElementById("index").style.filter = "blur(9px)";
}

// 关闭登录页面
function shut() {
    document.getElementById("login").style.display = "none";
    document.getElementById("index").style.filter = "blur(0px)";
    location.reload();
}
