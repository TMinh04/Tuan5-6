import './style.css';
import profile from './profile.jpg';

const app = document.getElementById('app');

const container = document.createElement('div');
container.className = 'container';

const title = document.createElement('h1');
title.textContent = 'Xin chào';

const paragraph = document.createElement('p');
paragraph.textContent = 'Mình là Minh.';

const image = document.createElement('img');
image.src = profile;

container.appendChild(image);
container.appendChild(title);
container.appendChild(paragraph);
app.appendChild(container);
