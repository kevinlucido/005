function logOut(element) {
    element.innerText = "Logout";
}

function hide(element) {
    element.remove();
    console.log("This element was removed", element);
}