let btns = document.querySelectorAll(".btns");
let submit = document.getElementById("submit");  // Removed the '#' from the ID

btns.forEach(function (buttons) {
    buttons.addEventListener("click", function () {
        if (buttons.attributes.id.value == "ui") {
            document.getElementById("uidesign").style.display = "block";
            document.getElementById("webdesign").style.display = "none";
            document.getElementById("appdesign").style.display = "none";
        }

        if (buttons.attributes.id.value == "web") {
            document.getElementById("uidesign").style.display = "none";
            document.getElementById("webdesign").style.display = "block";
            document.getElementById("appdesign").style.display = "none";
        }

        if (buttons.attributes.id.value == "app") {
            document.getElementById("uidesign").style.display = "none";
            document.getElementById("webdesign").style.display = "none";
            document.getElementById("appdesign").style.display = "block";
        }

        if (buttons.attributes.id.value == "all") {
            document.getElementById("uidesign").style.display = "block";
            document.getElementById("webdesign").style.display = "block";
            document.getElementById("appdesign").style.display = "block";
        }
    });
});


function downloadbtn() {
    alert("CV downloaded");
}

/*submit.addEventListener("click",function(){

    let name=document.getElementById("#name");
    let email=document.getElementById("#email");
    let msg=document.getElementById("#msg");

    if(name.value=="" || email.value=="" || msg.value==""){
        alert("Please Fill detail")
    }
    else{
        alert("Thanks for connecting")
    }
})

*/




