function goToNextpage() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;

    if (name == "") {
        alert("please enter your name.");
        return;
    }

    if (!/^\d{10}$/.test(number)) {
        alert("please enter a valid 10-digit mobile number.");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("please enter a valid email id.");
        return;
    }
    
    document.getElementById("signupSection").style.display = "none";
    document.getElementById("profileSection").style.display = "block";
    
    window.location.href = "home.html";
}
window.onload = function () {
    const isSignedUp = localStorage.getItem("SignedUp");

    if (isSignedUp === "true") {
        window.location.href = "home.html";
    } else {
        document.getElementById("signupSection").style.display = "";
    }
};
function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("SignedUp");
    localStorage.removeItem("completedTasks"); 

    window.location.href = "index.html";
}

