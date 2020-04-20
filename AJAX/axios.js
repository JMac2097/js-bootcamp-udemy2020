const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
    return axios.get(url)
}


const printNextPlanets = ({data}) => {
    console.log(data);
    for(let planet of data.results) {
        console.log(planet.name);
    }

    return Promise.resolve(data.next)
}


fetchNextPlanets()
.then(printNextPlanets)
.then(fetchNextPlanets)
.then(printNextPlanets)
.then(fetchNextPlanets)
.then(printNextPlanets)
.then(fetchNextPlanets)
.then(printNextPlanets)

.catch((err) => {
    console.log(err);
});