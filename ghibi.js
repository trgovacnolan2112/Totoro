/*-------------Species list base
fetch('https://ghibliapi.herokuapp.com/species')
.then(function(response){
return response.json();
})
.then(function(json){
 let species = json;
 console.log(species)
 for(p of species){
    let listItem= document.createElement('li');
    listItem.innerHTML='<p>'+p.classification+'</p>';
    studioGhibiSpeciesList.appendChild(listItem);
}
});
*/
/*----------Films list base
let studioGhibiFilmsList=document.querySelector('ul2');
fetch('https://ghibliapi.herokuapp.com/films')
.then(function(response){
return response.json();
})
.then(function(json){
 let films = json;
 console.log(films)
 for(p of films){
    let listItem= document.createElement('li');
    listItem.innerHTML='<p>'+p.title+'</p>';
    studioGhibiFilmsList.appendChild(listItem);
}
});
*/
/*----------People list base
let studioGhibiFilmsPeople=document.querySelector('ul3');
fetch('https://ghibliapi.herokuapp.com/people')
.then(function(response){
return response.json();
})
.then(function(json){
 let people = json;
 for(p of people){
    let listItem= document.createElement('li');
    listItem.innerHTML='<p>'+p.name+'</p>';
    studioGhibiFilmsPeople.appendChild(listItem);
}
});
*/
/*document.getElementById('nameInput').addEventListener('keyup',(fetchCharacter)=>{
    if (fetchCharacter.target.value === ''){
        document.getElementsByTagName("p").innerText = 'no name has been entered';
    }else{
        document.getElementsByTagName("p").innerText = `everyone please come welcome ${fetchCharacter.target.value}`;
    };
});
*/

let searchMe = document.querySelector('.search')
let searchForm = document.getElementById('People');
let winput=document.querySelector('h1')

const fetchCharacter = async (e) => {
    e.preventDefault()
    try {
        const response = await fetch(`https://ghibliapi.herokuapp.com/people/`);
        if (response.status == 404) {
            throw "404 not found";
        }
        const data = await response.json();
        console.log(data);
        let name = data[searchMe.value].name
        console.log(name);
        let characterName = document.getElementById('p');
        characterName.innerHTML = name;
    } catch (error) {
        alert(error);}
    }
searchForm.addEventListener('submit', fetchCharacter);


let searchMeF = document.querySelector('.search2')
let searchFormF = document.getElementById('Films');

const fetchFilm = async (e) => {
    e.preventDefault()
    try {
        const response = await fetch(`https://ghibliapi.herokuapp.com/films/`);
        if (response.status == 404) {
            throw "404 not found";
        }
        const data = await response.json();
        console.log(data);
        let title = data[searchMeF.value].title
        console.log(title);
        let filmName = document.getElementById('f');
           filmName.innerHTML = title;
    } catch (error) {
        alert(error);
    }
}
searchFormF.addEventListener('submit',fetchFilm);

document.getElementById('nameInput').addEventListener('keyup',(event) =>{
    console.log(event.target.value)
    console.log(document.getElementById('winput'))
    if(event.target.value === ''){
        winput.innerText='Enter a name to see a change';
    }else{
        winput.innerText=`Totoro now is friends with ${event.target.value} <3`
    };
})








