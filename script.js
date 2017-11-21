 var arr = [];
// var todo = document.querySelector("#newtodo").value;

var newtodo;
// addbutton.addEventListener("click",function(){
// 	arr.push(newtodo);
// 	console.log(arr.length + " " +  todo);
// 	//alert(todo);
//  // for(var i=0;i<arr.length;i++){
//  // 	console.log(arr[i] + "\n");
//  // }
// }
// );
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("input[type = 'text'").keypress(function(event){
if(event.which === 13){
	// alert("entered");
	newtodo = $(this).val();
	arr.push(newtodo);
	console.log(arr[arr.length - 1]);
	$("ul").append("<li><span><b>X</b></span> " + newtodo +" </li>" + "\n");
	$(this).val("");

}
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
$(this).remove();
	});
	event.stopPropagation();

})
// $("li").click( function() {
// // $(this).toggleClass("completed");
// if( $(this).css("color") === "gray"){

// // $(this).css("color","black");
// // $(this).css("text-decoration","none");
// alert("gray");

// } else {
// 	$(this).css("color","gray");
// 	$(this).css("text-decoration","line-through");
// }
// });


// });