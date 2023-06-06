const mainContainer= document.getElementsByClassName("main-container")[0];
const container2= document.getElementsByClassName("container-2")[0];
const container3= document.getElementsByClassName("container-3")[0];
//const question = document.getElementById("question").value;
// const answer = document.getElementById("answer").value;
//const  StudentAns= document.getElementById("StudentAns").value;

function showContainer2(){
    container2.style.display="block";
}

function hideContainer2(){
    container2.style.display="none";
}

function saveFlashcard(){
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;
   // const  StudentAns= document.getElementById("StudentAns").value;


    var node0=document.createElement("div");
    var node1=document.createElement("h2");
    var node2=document.createElement("h2");
    var node3=document.createElement("h2");
    
    node1.innerHTML = question;
    node2.innerHTML = answer;
    //node3.innerText= StudentAns;
    


    node2.style.display="none";
    node2.style.color="green"
    node3.style.display="block";

    node0.appendChild(node1);
    node0.appendChild(node2);
    //node0.appendChild(node3);
    
    node0.addEventListener("click", function(){
        if(node2.style.display=="none"){
            node2.style.display = "block";
        }
        else{
            node2.style.display="none";
        }
    })

    node0.addEventListener("dblclick", function(){
        node0.remove();
    })

    node0.setAttribute("style", "background:white; width:30%; padding:20px; border:2px solid orange; margin:10px; overflow:hidden");
    container3.insertAdjacentElement("beforeend", node0);
    

    document.getElementById("question").value='';
    document.getElementById("answer").value='';
    //document.getElementById("StudentAns").value='';

}
function chechAns(){
    const  StudentAns= document.getElementById("StudentAns").value;
    var node3=document.createElement("h2");

    node3.innerHTML= StudentAns;
    if(node3.value==node2.value)
    {
        alert("THAT'S RIGHT!");
    }



}