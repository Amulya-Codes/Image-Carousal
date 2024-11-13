const displayImage = document.querySelector('.display-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const imagesContainer = document.querySelector('.images-container');
const imagesPath = [
'./assets/img1.png',
'./assets/img2.jpg',
'./assets/img3.jpeg',
'./assets/img4.jpeg',
'./assets/img5.jpeg',
'./assets/img6.jpeg',
'./assets/img7.jpeg',
 ]

 let currentIndex = 0;
 displayImage.src = imagesPath[0];

 const thumbNails =imagesPath.map((path) => {
    const img = document.createElement('img');
    img.src = path;
    img.classList.add('images');
   imagesContainer.appendChild(img);
   return img;
 })

 rightArrow.addEventListener('click', rightClick)

 leftArrow.addEventListener('click', leftClick);

 thumbNails[currentIndex].classList.add('active');
 console.log(thumbNails[currentIndex])

 function rightClick(){
    thumbNails[currentIndex].classList.remove('active');
   currentIndex = (currentIndex+1) %imagesPath.length;
   console.log(currentIndex);
   displayImage.src = imagesPath[currentIndex];
   thumbNails[currentIndex].classList.add('active');
 }

 function leftClick(){
    thumbNails[currentIndex].classList.remove('active');
    currentIndex =(currentIndex-1 + imagesPath.length) % imagesPath.length 
    displayImage.src = imagesPath[currentIndex];
    thumbNails[currentIndex].classList.add('active');

 }