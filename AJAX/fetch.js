

const checkStatus = response => {
	if (!response.ok) throw new Error(`Status code Error: ${response.status}`);

	return response.json();
};

// implement that function


fetch("https://swapi.co/api/planets/")
	.then(response => {

	})
	.then(data => {
        for(let planet of data.results) {
            console.log(planet.name)
        }
        const nextURL = data.next;
        return fetch(nextURL);
    })
	.then(response => {
		if (!response.ok)
			throw new Error(`Status code Error: ${response.status}`);

		return response.json();
    })
    .then((data) => {
        console.log('Fetched next 10 planets');
        for(let planet of data.results) {
            console.log(planet.name)
        }
    })

	.catch(err => {
		console.log("Something went wrong");
		console.log(err);
	});