let colorTheme = document.querySelector(".colorTheme");
let root = document.documentElement;
let newTheme = root.className;
let themeName = document.querySelector(".themeName");

colorTheme.addEventListener("click", ()=>{
    changeTheme();
    changeThemeName();
})

function changeTheme(){
    if (root.className == "light" || root.className == ""){
        root.className = "dark";
    }
    else{
        root.className = "light";
    }
}

function changeThemeName(){
    if (themeName.textContent == "Light"){
        return themeName.textContent = "Dark";
    }
        return themeName.textContent = "Light";
}