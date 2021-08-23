const text = 'FRONT-END DEVELOPER';
let innerText = document.getElementById('typing');
let i = 0

function typewriter() {
    if (i < text.length) {
        innerText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, 200);
    }
}

typewriter()
