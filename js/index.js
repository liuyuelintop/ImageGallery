document.addEventListener("DOMContentLoaded", function(){
    let btn = document.querySelector("button");
    btn.addEventListener("click", function(){
        const name = prompt("Enter Your Name");
        let user = name.toLocaleUpperCase();
        console.log("name "+name);
        if(user == "MONICA"){
            const num = prompt("Enter Your Favorite Number");
            console.log("favorite number "+num);
            if(num=="29"){
                let nav = document.querySelector(".homenav");
                nav.style.visibility ="visible";
                btn.style.display = "none";
            }
            else{
                console.log("fail");
            }
        }
        else{
            console.log("fail");
        }
        // key=="admin"?console.log("pass"):console.log("fail");
    });
});