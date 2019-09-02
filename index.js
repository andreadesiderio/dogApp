'use strict'

function retrieveDogImgs(val){
   fetch(`https://dog.ceo/api/breeds/image/random/${val}`)
   .then(response => response.json())
   .then(responseJson => showImgs(responseJson)); 
}

function showImgs(responseJson){
    let imgArr = responseJson.message;
    for (let i = 0 ; i < imgArr.length; i ++){
        let img = imgArr[i];
        console.log(img);
        $('.imagesContainer').append(`<img src='${img}'>`);
    }
}

function handleMultipleImgsForm(){
    $('#multipleImgs').on('submit', function(event){
     event.preventDefault();
     let val = $('input').val();
     $('.imagesContainer').empty();
     retrieveDogImgs(val); 
})
}

function retrieveBreed(breed){
   fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
   .then(response => response.json())
   .then(responseJson => showBreedImg(responseJson))
   .catch(error => showErrorMessage(error))
}

function showErrorMessage(error){
    $('.dogBreedImg').html(`<h2>Error Meassage:</h2><p>${error.message}</p>`);
}

function showBreedImg(responseJson){
let breed = responseJson.message;
console.log();
$('.dogBreedImg').html(`<img src='${breed}' alt='${breed}'>`);
}

function handleSingleImgForm(){
  $('#singleImg').on('submit', function(event){
     event.preventDefault();
     let breed = $('#breedInput').val();
     retrieveBreed(breed);
    })  
}


$(function handlePageLoad(){
    handleMultipleImgsForm();
    handleSingleImgForm();
})