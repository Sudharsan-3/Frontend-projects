// $("h1").addClass("big-text back");
// $("button").text("<em>hi</em>")
// $("h1").addClass("big-text")
// $("h1").click(function(){
//     $("h1").css("color","red")
// })
// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     })
// }

// $("button").click("color",function(){
//     $("h1").css("color","purple")})
// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });
// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple")
// })
// $("button").on("click",function(){
// $("h1").slideUp().slideDown().slideUp();
// })

// console.log($(".big-text").text("dii"))

$("input").keypress(function(event){
    $("h1").text((event.key))
})