document.getElementById("scientific").style.display="none"
document.getElementById("artist").style.display="none"
document.getElementById("commercialist").style.display="none"

function showOrHide() {
    var subjects=document.getElementById("subjects").value 
    if(subjects=="science"){
        document.getElementById("scientific").style.display="block"
        document.getElementById("artist").style.display="none"
        document.getElementById("commercialist").style.display="none"
    }else if(subjects=="art"){
        document.getElementById("artist").style.display="block"
        document.getElementById("scientific").style.display="none"
        document.getElementById("commercialist").style.display="none"
    }else if(subjects=="commercial"){
        document.getElementById("commercialist").style.display="block" 
        document.getElementById("artist").style.display="none" 
        document.getElementById("scientist").style.display="none" 
    }
}
function showChe(){
    var science=document.getElementById("science").value
    if(scientific=="chemistry"){
    window.location.href="chemistry.html";

}
}