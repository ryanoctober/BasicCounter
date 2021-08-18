let counter = document.getElementById('counter-el');
count = 0;

function increment() {
    count = count += 1;
    counter.textContent = count;
}

function decrement() {
    count = count -= 1;
    counter.textContent = count;
}