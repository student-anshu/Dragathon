var coll=document.querySelector(".annu1")
var content= document.querySelector(".annu1")
coll.addEventListener("click",function(){
    coll.classification.toggle("active");
    if(content.computedStyleMap.maxheight){
        content.computedStyleMap.maxheight=null;

    }
    else{
        content.computedStyleMap.maxheight=content.scrollHeight+px
    }
})