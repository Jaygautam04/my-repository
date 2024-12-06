const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

if (!menu) {
    console.error("Menu button (#menu) is missing in the HTML.");
} else {
    // Ensure the menu button is positioned and visible
    menu.style.position = "fixed";
    menu.style.top = "20px";  // Adjust top position as needed
    menu.style.right = "20px";  // Adjust right position as needed
    menu.style.zIndex = "1000";  // Ensure it's on top

    menu.onclick = () => {
        console.log("Menu button clicked");
        menu.classList.toggle('bx-x');
        nav.classList.toggle('active');
    };
    
}

// Optional: You can log whether it's working or not
console.log("Menu button and navigation are working.");
