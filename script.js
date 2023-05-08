const textBox=document.getElementsByTagName("textarea")[0];
textBox.addEventListener("input",function(){
    let text=this.value;
    let char=text.length;
document.getElementById("charcter").innerHTML=char;

text=text.trim();
let words=text.split(" ");
let cleanList=words.filter(function(a){
    return a != "";
});
document.getElementById("word").innerHTML=cleanList.length;
})