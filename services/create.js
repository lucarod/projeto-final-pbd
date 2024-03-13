export async function createAnimal(animalData) {
    const response = await fetch('http://localhost:3000/animais', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(animalData)
    });

    return response.json();
}

export async function createTratamento(treatmentData) {
    const response = await fetch('http://localhost:3000/tratamentos', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(treatmentData)
    });

    return response.json();
}

export async function createTratador(treaterData) {
    const response = await fetch('http://localhost:3000/tratadores', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(animalData)
    });

    return response.json();
}

export async function createSecoes(sectionsData) {
    const response = await fetch('http://localhost:3000/secoes', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(sectionsData)
    });

    return response.json();
}