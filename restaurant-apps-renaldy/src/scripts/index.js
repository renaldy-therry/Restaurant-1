/* for async await transpile */
import 'regenerator-runtime'

/* import elements CSS */
import '../styles/main.css'

/* import JSON */
import data from '../DATA.json'

/* Fungsi menampilkan data JSON */ 
document.addEventListener('DOMContentLoaded', () => {
    const cardElement = document.getElementById('list-restaurant')
    const listRestaurant = data.restaurants;
    let renderHTML = '';
    listRestaurant.forEach(resto => {
    renderHTML += `
            <article class="card-resto" tabindex="0" >
                <img class="resto-image" src="${resto.pictureId}" alt="${resto.description}" height="250">
                <div class="resto-text">
                    <h2 tabindex="0" class="resto-title">${resto.name}</h2>
                    <p  tabindex="0"class="resto-city">${resto.city}</p>
                    <span class="rating-number"><span class="rating">&#9733;</span>${resto.rating}</span>
                    <p tabindex="0" class="resto-description truncate">${resto.description}</p>
                </div>
            </article>
        `
    })
    cardElement.innerHTML = renderHTML

});

/*menampilkan menu navigasi dari  icon hamburger*/
const HamburgerNavigation = document.getElementsByClassName('hamburger-toggle')[0]
const LinkNavbar = document.getElementsByClassName('navbar-list')[0]


HamburgerNavigation.addEventListener('click', ()=>{
    LinkNavbar.classList.toggle('active');
});


