function toggleSidebar() {
    var aside = document.getElementById('aside');
    aside.classList.toggle('open');
}
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('aside').classList.remove('open');
});

function handleSendMessage() {
   
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('msg').value
    };

    
    if (!formData.name) {
        alert("Please enter your name.");
        return;
    }
    if (!formData.email || !formData.email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!formData.subject) {
        alert("Please enter a subject.");
        return;
    }
    if (!formData.message) {
        alert("Please enter a message.");
        return;
    }

    
    let mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent('Name: ' + formData.name + '\n\nMessage: ' + formData.message)}`;

  
    window.location.href = mailtoLink;
}




const texts = ["Software Engineer", "Software Quality Assurance", "Web Developer/WordPress"];
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
