
const idInput = document.getElementById('userID');
const pwInput = document.getElementById('userPW');
const loginBtn = document.getElementById('btn_login');
const emailInput = document.getElementById('useremail');
const iddInput = document.getElementById('userid');
const pwdInput = document.getElementById('userpwd');
const nameInput = document.getElementById('username');
const signupBtn = document.getElementById('btn_signup');
const linkToMain = document.getElementsByTagName('a')[0];

idInput.addEventListener('keyup', function(event) {
    if (idInput.value && pwInput.value) {
        loginBtn.disabled = false;
        linkToMain.href = "file:///Users/MiaJLee/Desktop/WeCode/westagram/main.html";
    }
    else {
        loginBtn.disabled = true;
        linkToMain.href = "#none";
    }
})

pwInput.addEventListener('keyup', function(event) {
    if (idInput.value && pwInput.value) {
        loginBtn.disabled = false;
        linkToMain.href = "file:///Users/MiaJLee/Desktop/WeCode/westagram/main.html";
    }
    else {
        loginBtn.disabled = true;
        linkToMain.href = "#none";
    }
})
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn_login").click();
    }
})

nameInput.addEventListener('keyup', function(event) {
    if (nameInput.value && pwdInput.value && emailInput.value && iddInput.value) {
        signupBtn.disabled = false;
        linkToMain.href = "file:///Users/MiaJLee/Desktop/WeCode/westagram/main.html";
    }
    else {
        signupBtn.disabled = true;
        linkToMain.href = "#none";
    }
})
emailInput.addEventListener('keyup', function(event) {
    if (nameInput.value && pwdInput.value && emailInput.value && iddInput.value) {
        signupBtn.disabled = false;
        linkToMain.href = "file:///Users/MiaJLee/Desktop/WeCode/westagram/main.html";
    }
    else {
        signupBtn.disabled = true;
        linkToMain.href = "#none";
    }
})
iddInput.addEventListener('keyup', function(event) {
    if (nameInput.value && pwdInput.value && emailInput.value && iddInput.value) {
        signupBtn.disabled = false;
        linkToMain.href = "file:///Users/MiaJLee/Desktop/WeCode/westagram/main.html";
    }
    else {
        signupBtn.disabled = true;
        linkToMain.href = "#none";
    }
})
pwdInput.addEventListener('keyup', function(event) {
    if (nameInput.value && pwdInput.value && emailInput.value && iddInput.value) {
        signupBtn.disabled = false;
        linkToMain.href = "file:///Users/MiaJLee/Desktop/WeCode/westagram/main.html";
    }
    else {
        signupBtn.disabled = true;
        linkToMain.href = "#none";
    }
})
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn_signup").click();
    }
})




$('.img > img:gt(1)').hide();

setInterval(function(){
    $('.img > img:nth-child(2)')
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('.img');
},3000);

function loginConfirm() {
    // const username = document.getElementsByClassName("username").value;
    const userID = $("#userID").val();
    const userPW = $("#userPW").val();

    if (userID == "TEST" && userPW == "1234")
        location.replace("main.html");
    else if (userID == "TEST")
        alert("비밀번호를 확인하세요.");
    else if (userPW == "1234")
        alert("아이디를 확인하세요.");
    else 
        alert("아이디 또는 비밀번호를 확인하세요.");
}


$('.sign_up').click(function () {
    $('#popup_body').show();
});
$('#btn_signup').click(function () {
    $('#popup_body').hide();
});
