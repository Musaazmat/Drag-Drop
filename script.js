const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

 inputFile.addEventListener("change",uploadImage);


 function uploadImage(){

    let imgLink = URL.createObjectURL(inputFile.files[0]); //convert object to image file
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent="";  // to remove the content after image upload
    imageView.style.border = 0;   // to remove the border after image upload
 }

 dropArea.addEventListener("dragover",function(e){

    e.preventDefault();
   
 })
 dropArea.addEventListener("drop",function(e){

    e.preventDefault();
    inputFile.files = e.dataTransfer.files; //when we drop the image it will transfer to input file
    uploadImage();
   
 })


    


