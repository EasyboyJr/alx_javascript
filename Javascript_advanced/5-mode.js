function changeMode(size, weight, transform, background, color) {
    return () => {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
};

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const body = document.body;
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Welcome Holberton!';
    body.appendChild(paragraph);

    const spookyBtn = document.createElement('button');
    const spookyText = document.createTextNode('Spooky');
    spookyBtn.appendChild(spookyText);
    body.appendChild(spookyBtn);

    const darkModeBtn = document.createElement('button');
    const darkModeText = document.createTextNode('Dark mode');
    darkModeBtn.appendChild(darkModeText);
    body.appendChild(darkModeBtn);

    const screamBtn = document.createElement('button');
    const screamText = document.createTextNode('Scream mode');
    screamBtn.appendChild(screamText);
    body.appendChild(screamBtn);

    spookyBtn.addEventListener('click', spooky);
    darkModeBtn.addEventListener('click', darkMode);
    screamBtn.addEventListener('click', screamMode);
}

main();