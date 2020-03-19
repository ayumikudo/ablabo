//可視領域に入ったらふわっと表示
$(function(){
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 100){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});
//ページ内リンクスムーススクロール
$(function(){
  $("a[href^=#]:not([href=#])").click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -= 100;
    $("html, body").animate({scrollTop: target}, 500);
    return false;
  });
});

/* 幅が640px以下の場合 */
if (window.matchMedia( "(max-width: 640px)" ).matches) {
  //.sp_menu_iconをクリックしたらnavを展開し、closeアイコンに切り替え
  $(function(){
    $(".sp_menu_icon").on('click', function(){
      $("header nav").stop().slideToggle(200);
      $("header nav").toggleClass("on");
      if($("header nav").hasClass("on")){
        $(".sp_menu_icon img").attr('src','images/close.png');
      }else{
        $(".sp_menu_icon img").attr('src','images/open.png');
      }
      return false;
    });
  });
  //ページ内リンクしたらnavを閉じる
  $(function(){
    $("nav a").click(function(){
      $("nav").hide();
      $(".sp_menu_icon img").attr('src','images/open.png');
    });
  });

  /* 幅が640px以上の場合 */
} else {
  //スクロールしたらheaderを上に固定
  $(function(){
    var navPos = $("header").offset().top;
    $(window).scroll(function(){
      if($(window).scrollTop() > navPos){
        $("header").css("position", "fixed");
      }else{
        $("header").css("position", "static");
      }
    });
  });
}
