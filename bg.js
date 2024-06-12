$(document).ready(function() {
    var $menu = $('.menu');
    var $sidebar = $('.sidebar');
    var $content = $('.ma');

    $menu.click(function() {
        $sidebar.toggleClass('open'); //切換側邊攔開與關
        $('body').toggleClass('sidebar-open');
        $menu.toggleClass('move'); //線條與打叉的切換
    });

    $content.click(function(event) {
        //檢查側邊攔是否為打開狀態
        if ($sidebar.hasClass('open') && !$(event.target).closest('.sidebar').length) {
            $sidebar.removeClass('open'); //關閉側邊攔
            $('body').removeClass('sidebar-open'); //恢復頁面的默認模式
            $menu.removeClass('move'); //恢復漢堡選單的默認模式(打叉變線條)
        }
    });

    $(document).click(function(e) {
        var target = $(e.target);
        if (!target.closest('.nav').length && !target.closest('.menu-toggle').length) {
            $('.nav').slideUp();
            $('body').removeClass('fixed');
        }
    });
});