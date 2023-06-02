$(function () {

    // 로고 클릭시 최상단!
    $(".logo").on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 400); // 0.4초
    });
    // 하단 버튼 클릭시 최상단!
    $(".btn_top").on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 400); // 0.4초
    });
    // 하단 버튼이 스크롤 500픽셀 도달시 나타남!
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });

    // 각 메뉴 클릭시 애니메이션으로 각 컨텐츠에 위치 이동
    var menu = $(".menu>ul>li");
    var con = $("#contents>div");
    // #contents>div => #a1 ~ #a5

    menu.click(function () {
        var tg = $(this); // this -> 클릭이벤트가일어난 li(menu)
        var i = tg.index(); // .index() - 순서값을 나타냄
        var section = con.eq(i);
        var top = section.offset().top;
        $("html,body").stop().animate({
            scrollTop: top
        });
    });
});

// .eq() - 지정한 변수만 선택
// .scroll() 이벤트메서드 : 스크롤바가 이동할때마다 이벤트발생
/* // .offset() : 전체 문서를 기준으로 선택한 요소의 
가로 세로 떨어진 위치의 좌푯값 변경시 사용 (x,y)*/
// .scrollTop() - 브라우저에 스크롤바가 수직/수평으로 이동한 위치값을 불러오거나 변경할 때 사용