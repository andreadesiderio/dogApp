'use strict'

function showDogImgs(val){
   fetch(`https://dog.ceo/api/breeds/image/random/${val}`)
   .then(response => response.json())
   .then(responseJson => showResponse(responseJson)); 
}

function showResponse(responseJson){
    let imgArr = responseJson.message;
    for (let i = 0 ; i < imgArr.length; i ++){
        let img = imgArr[i];
        console.log(img);
        $('.imagesContainer').append(`<img src='${img}'>`);
    }
}

function handleFormSubmition(){
$('form').on('submit', function(event){
    event.preventDefault();
    let val = $('input').val();
    showDogImgs(val);
    $('form').off('submit'); 
    $('form')[0].reset(); 
})
}



$(function handlePageLoad(){
    handleFormSubmition();
})