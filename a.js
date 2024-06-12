$(document).ready(function(){
    let currentIndex = 0;   //追蹤當前顯示的對話框
    const messages = $(".msg");

    $("#sh").click(function(){   //當按鈕被點擊時執行
        if (currentIndex < messages.length) {  //
            $(messages[currentIndex]).show();  //
            currentIndex++;  //
        }
    });
});