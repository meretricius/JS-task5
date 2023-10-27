let starWars = {
name: ["Star Wars"],
series: [12],
originalTrilogy: [ {title: 'Episode IV A New Hope',  release: 1977}, {title: 'Episode V - The Empire Strikes Back', release: 1980}, {title: 'Episode VI - Return of the Jedi', release: 1983}],
isFilmGood: [true]
}

let harryPotter = {
    name: ["Harry Potter"],
    series: [8],
    originalShow: [ {title: 'Harry Potter and the Philosophers Stone', release: 1997}, {title: 'Harry Potter and the Chamber of Secrets', release: 1998}, {title: 'Harry Potter and the Prisoner of Azkaban', release: 1998} ],
    isFilmGood: [true]
}

let cinematography = {
    starWars, harryPotter
}
console.log(cinematography);

let key = Object.keys(cinematography)
console.log(key);

let value = Object.values(cinematography)
console.log(value);

let filtered = value.filter(value => typeof value === 'string' || typeof value === 'number');
console.log(filtered);          