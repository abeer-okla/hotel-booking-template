// select landing page element
let landingPage = document.querySelector(".landing-page");
// get array of imgs
let imgsArray = [ "1.jpeg" , "4.jpg", "a.jpg" ," 5.jpg", "6.jpg",  "7.jpg" ,  "8.jpg", "9.jpg" ];
landingPage.style.backgroundImage='url("img/1.jpg")';

setInterval( () => {
     // get random number
    let randomNumber = Math.floor(Math.random()*imgsArray.length);
     // change background images url
    landingPage.style.backgroundImage='url("./assets/img/'+ imgsArray[randomNumber]  +'")';
console.log(randomNumber);

} ,2000);
