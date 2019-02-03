//function newColor(){
    //var arr = [];
    //for (var i = 0;i <3; i++){
        //var num = Math.floor(Math.random() * 256);
      //  arr.push(num);
    //}
    //var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
  //  return newRgb;
//}

//('box').onmouseenter = function (){
 //   this.target . style . backgroundColor = newColor();
//}
$(document).ready(function () {

    function randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    };

    $(".box").on("mouseenter", function () {
        $(this).css('background-color', randomColor());
        $(this).css('box-shadow', "0 0 8px white");
        $(this).css('z-index', "100000");
    });

    $(".box").on("mouseleave", function () {
        $(this).css('box-shadow', "none");
        $(this).css('z-index', "1");
    });
});