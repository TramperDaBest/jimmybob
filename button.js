var i = 1
function revealticket(){
    if(i==1){
    i=2
    document.getElementById("ticketnum").innerHTML = "Your ticket number is "+Math.random()*10000000000000000000+". Congratulations on geting your ticket to see Jimmy Bob!"
}
}
