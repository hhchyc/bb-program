




window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop;
    console.log("当前:" + scrollTop);
    var s1 = ((scrollTop) / 800);//p的下标
    juandong(s1, scrollTop);






    // var zz=document.documentElement.clientHeight;
    // console.log("当前浏览器页面的高度:"+zz);

}
function juandong(thindex, scrollnow) {
    var p1 = document.querySelectorAll('.text1 p');
    var t1 = document.querySelector(".text1");

    console.log("当前p的下标:" + parseInt(thindex));
    var p2 = p1.forEach(function (value, index) {
        if (index != parseInt(thindex)) {

            // p1[index].style.color = 'white';
            p1[index].style.opacity = '0';
            // p1[index].style.setProperty('--percentage', '0%');
            // $("#bg1").css("background-image","url(../piture/walk/'+parseInt(thindex)+'.jpg)");
            // t1.style.setProperty('background-image', 'url(../piture/walk/'+parseInt(thindex)+'.jpg)');
            // console.log("变白");
        } else {
            // p1[parseInt(index)].style.color = 'black';
            p1[parseInt(index)].style.opacity = '1';
            // p1[parseInt(index)].style.setProperty('backg', '100%');
            
            $("#bg1").css("background-image","url(piture/walk/"+parseInt(thindex+1)+".jpg)");
            const zzz=$("#bg1").css('background-image');
            console.log(zzz);
            // t1.style.setProperty('background-image', 'url(../piture/walk/'+parseInt(thindex)+'.jpg)');
            // console.log("变黑");
        }



        // if (index == parseInt(thindex)) {

        //     p1[parseInt(index)].style.color = 'black';
        //     console.log("变黑");
        // } else {
        //     for (var i = 0; i < index; i++) {
        //         p1[index].style.color = 'white';
        //         console.log("变白");
        //     }

        // }


    });

    // p1[index].style.setProperty('--percentage', `${scrollnow * 100}%`);
}














