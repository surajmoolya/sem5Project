function come_in(){
    var div1 = document.getElementById('target');
    div1.innerHTML = "<img src='../resource/donut1.gif' alt='scooter.png' height='200px'>"
    div1.classList = 'come'
    // document.body.appendChild(div1);
}
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}    async function login(){
var div1 = document.getElementById('target');
div1.className = "popup1"
await sleep(550)
div1.innerHTML = "<h1>Log In</h1><label>Username</label><input type='text' size='17'><br><label>Password</label><input type='password' size='17'> <br><br><button onclick = 'click_signup()'>Sign Up</button><button>Log in</button>"
}
async function signup(){
var div1 = document.getElementById('target');
div1.className = "popup2"
await sleep(550)
div1.innerHTML = "<h1>Sign Up</h1><label style = 'margin-top = 1px;'>Full Name</label><input type='text' size='17' style = 'margin-top = 1px;'><br><label style = 'margin-top = 1px;'>Gender</label><br><input type='radio' name='gender' style = 'margin-top = 1px;'><label style = 'margin-top = 1px;'>Male</label><input type='radio' name='gender' style = 'margin-top = 1px;'><label style = 'margin-top = 1px;'>Female</label><input type='radio' name='gender' style = 'margin-top = 1px;'><label style = 'margin-top = 1px;'>Other</label><br><label style = 'margin-top = 1px;'>Contact number</label><input type='text' size='10' style = 'margin-top = 1px;'><br><label style = 'margin-top = 1px;'>Username</label><input type='text' size='17' style = 'margin-top = 1px;'><label style = 'margin-top = 1px;'>Password</label><input type='password' size='17' style = 'margin-top = 1px;'><br><label style = 'margin-top = 1px;'>Confirm Password</label><input type='password' size='17' style = 'margin-left: 10px'> <br><br><button onclick = 'click_login()' style = 'margin-top:10px;'>Log in</button><button style = 'margin-top:10px;'>Sign up</button>"
}
async function popup(action){
var div1 = document.getElementById('target');
await sleep(550);
while (div1.firstChild) {
         div1.removeChild(div1.lastChild);
}

action()
}
async function godown(){
    var div1 = document.getElementById('target');
while (div1.firstChild) {
         div1.removeChild(div1.lastChild);
        
}
div1.className = "popdown"
await sleep(550)
div1.innerHTML = "<img src='../resource/donut1.gif' alt='scooter.png' height='200px'>"
div1.className = "go"
await sleep(550)
while (div1.firstChild) {
         div1.removeChild(div1.lastChild);
        
}

}
async function click_login(){
    godown()
    await sleep(1200)
    come_in()
    popup(login)
}
async function click_signup(){
    godown()
    await sleep(1200)
    come_in()
    popup(signup)
}
come_in();
popup(login)
