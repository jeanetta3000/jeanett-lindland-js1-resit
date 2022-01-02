/*

const url = "https://official-joke-api.appspot.com/random_joke";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

async function getJokes(){
try {
    const response = await fetch (corsFix);

    const results = await response.json();



    } catch (error){
    console.log(error);
    }
}

getJokes();
 
 it seems like there is something wrong with the link provided.*/

 
const url = "https://official-joke-api.appspot.com/random_joke";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;


 fetch(corsFix)
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(data){
    console.log(data);
    createHTML(data);
})
.catch(function(error){
    console.log(error)
})