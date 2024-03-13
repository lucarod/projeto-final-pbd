export async function fetchAnimais() {
    const response = await fetch('http://localhost:3000/animais');
    return response.json();
}