// scripts.js

//var foo = 'lorem' + 'Ipsum';
var question = prompt('Lubisz truskawki ?');
var selectedTab = 'details';
var foo = 'lorem' + ['1', 2, 3.4];   
var bar = (foo + 1),
    person = {
        name: 'Jon',
        surname: 'Snow',
        siblings: 5,
        knownThings: ['Nothing', 'Night Watch']
    };

if (selectedTab === 'details') {
    console.log('Wybrana zakładka to detale');
} else if (selectedTab === 'comments') {
    console.log('Wybrana zakładka to komentarze');
} else {
    console.log('Wybrana zakładka opis produktu');
}

switch (question.toLowerCase()) {
case 'tak':
    alert('Świetnie, ja też!');
    break;
case 'nie':
    alert('Jak można nie lubić truskawek?');
    break;
default:
    alert('Nie dałeś jednoznacznej odpowiedzi, więc pewnie jeszcze się zastanawiasz.');
}
console.log(foo);
console.log(bar);
console.log(person);            
    