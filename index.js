'use strict'

function showDogImgs(val){
   fetch(`https://dog.ceo/api/breeds/image/random/${val}`)
   .then(response => response.json())
   .then(responseJson => console.log(responseJson)); 
}

function handleFormSubmition(){
$('form').on('submit', function(event){
    event.preventDefault();
    let val = $('input').val();
    showDogImgs(val);
})
}



$(function handlePageLoad(){
    handleFormSubmition();
})