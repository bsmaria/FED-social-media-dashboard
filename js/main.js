var main = document.getElementsByTagName('main')[0];
var toggle = document.getElementsByClassName('switch');
var themeText = document.getElementById('theme-text');

function changeTheme() {
    if(main.id == "dark-theme") {
        main.id = "light-theme";
        console.log('You are on the light theme')
        themeText.innerHTML = "Dark mode";
    } else {
        return console.log('You are on the light theme')
    }
    
};

changeTheme();