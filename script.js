document.querySelectorAll('.btn').forEach(btn => {
    btn.innerHTML = `
        <span></span>
        <span>${btn.textContent}</span>
    `
})


document.getElementById('startBtn').addEventListener('click', function() {
    const heart = document.querySelector('.heart');
    heart.classList.add('beat'); // Start the heartbeat animation
});

document.getElementById('stopBtn').addEventListener('click', function() {
    const heart = document.querySelector('.heart');
    heart.classList.remove('beat'); // Stop the heartbeat animation
});
