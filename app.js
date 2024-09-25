function toggleSidebar() {
    var aside = document.getElementById('aside');
    aside.classList.toggle('open');
}
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('aside').classList.remove('open');
});

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('msg').value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (email === "" || !email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (subject === "") {
        alert("Please enter a subject.");
        return false;
    }
    if (message === "") {
        alert("Please enter a message.");
        return false;
    }
    alert("Submitted successfully!");

    document.getElementById('name').value = "";
            document.getElementById('mail').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('msg').value = "";

            return true;
    
}

const texts = ["Software Engineer", "Web Developer" , 'Wordpress Developer'];
let currentIndex = 0, letterIndex = 0, isDeleting = false;

setInterval(() => {
    let currentText = texts[currentIndex];
    document.getElementById("skills").textContent = currentText.slice(0, letterIndex);

    letterIndex += isDeleting ? -1 : 1;

    if (letterIndex === currentText.length + 1) isDeleting = true;
    if (letterIndex === 0 && isDeleting) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
    }
}, 100);