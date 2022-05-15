/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/*const sections = document.querySelectorAll('section');*/


/**
 * Define Global Variables
 *
*/

var i = 1; //A counter for number of sections

const ul = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/* function to add new sections to the navigation bar */
function addSectionToNav() {

    //finding nav-bar list items
    var li = document.createElement("li");

    //add anchor to scroll to sections
    li.innerHTML = `<a href= "#section` + (i) + `">Section ` + i + ` </a>`;
    ul.appendChild(li);
    i++;

}

/**function that adds a new section to the page 
 * create section 
 * give it an id and class
 * add the paragraph to that section
 * add the section to page
 * add the section name in navigation bar
*/
function addSection() {
    //collecting all sections
    var section = document.createElement("section");
    var div = document.createElement("div");

    //give each section it's id and classes
    section.id = "section" + i;
    section.setAttribute("data-nav", "Section" + i); //attribute used to the scrolling function
    div.className = "landing__container";

    //adding the paragraph to the new section
    div.innerHTML = `
    <h2>Section `+ i + `</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.</p>
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    `;
    section.appendChild(div);
    document.querySelector("main").appendChild(section);

    addSectionToNav();   //add the new section's name to navigation bar 

}

//function that check if section is in view page 
function scrolled(sec) {
    var viewedSection = sec.getBoundingClientRect();
    return (viewedSection.top >= 0);
}


/**function that add class to section viewed in page
 * make an array with all classes
 * iterate through that array
 * then give the wanted section an active class
*/
function myActiveSection() {
    //collecting all sections 
    var sections = document.querySelectorAll("section");

    //iteration thtrough sections
    for (var index = 0; index < sections.length; index++) {
        if (scrolled(sections[index])) {
            //giving the active class to the section
            sections[index].className = ("your-active-class");
        }
        //remove active section class from inactive sections
        else { sections[index].classList.remove("your-active-class"); }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

/**build the nav
 *  add the new-section button to nav-bar
 * add the existing sections' names to nav-bar
 */

// adding a button to add new section in navigation bar
const Addbtn = document.createElement("button");
Addbtn.innerHTML = "Add section";
ul.append(Addbtn);

// adding the existing sections names to it 
for (var j = 0; j < 4; j++) {
    addSectionToNav();
}

//adding button to scroll up to top
var button = document.createElement("button");
button.id = "upbutton";
button.innerHTML = "Back to \ntop";

//add button to screen
var body = document.querySelector("body");
body.append(button);

/* adding text to the footer*/
const text1 = "Project 1 - Landing page - By Habiba Ahmed";
document.querySelector("footer").append(text1);



/**
 * End Main Functions
 * Begin Events
 *
*/
//adding sections using button
Addbtn.addEventListener('click', addSection);

//scrolling up using button
button.addEventListener('click', function scrollup() {
    //function to scroll up
    document.body.scrollTop = 0;
});

//make the scroll-up button only visible after the user scrolls down
document.addEventListener("scroll", function () {
    myActiveSection();
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
})
