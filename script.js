let colorTheme = document.querySelector(".colorTheme");
let root = document.documentElement;
let newTheme = root.className;

colorTheme.addEventListener("click", ()=>{
    return changeTheme();
})

function changeTheme(){
    if (root.className == "light"){
        root.className = "dark";
    }
    else{
        root.className = "light";
    }
}