const btn = document.getElementById("dropdownbtn");
const content = document.getElementById("dropdowncontent");

btn.addEventListener("click", () =>{
    content.classList.toggle("active");
});
function toggleDropdown(button){
    const dropDown = document.getElementById("myDropdown");
    dropDown.classList.toggle("show");
    button.classList.toggle("active");
}
function dropDown(element){
    const dropDownn = document.getElementById("dropDownn");
    dropDownn.classList.toggle("down");
    element.classList.toggle("active");
}
function dropDown3(element){
    const dropDownn3 = document.getElementById("dropDownn3");
    dropDownn3.classList.toggle("down3");
    element.classList.toggle("active3");
}
function dropDown4(element){
    const dropDownn4 = document.getElementById("dropDownn4");
    dropDownn4.classList.toggle("down4");
    element.classList.toggle("active4");
}
function dropDown5(element){
    const dropDownn5 = document.getElementById("dropDownn5");
    dropDownn5.classList.toggle("down5");
    element.classList.toggle("active5");
}
function dropDown6(element){
    const dropDownn6 = document.getElementById("dropDownn6");
    dropDownn6.classList.toggle("down6");
    element.classList.toggle("active6");
}
function dropDown7(element){
    const dropDownn7 = document.getElementById("dropDownn7");
    dropDownn7.classList.toggle("down7");
    element.classList.toggle("active7");
}