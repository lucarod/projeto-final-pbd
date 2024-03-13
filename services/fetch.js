export async function fetchAnimais() {
    try {
        const response = await fetch('http://localhost:3000/animais');
        return response.json();
    } catch {
        console.log('erro no fetch animais')
    }
}