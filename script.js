import { createApp } from "https://unpkg.com/petite-vue?module";
import { createAnimal } from "./services/create.js";
import { fetchAnimais } from "./services/fetch.js";

createApp({
  count: 0,
  animais: null,
  async handleSubmitAnimal(event) {
    const formData = new FormData(event.target);
    const { name, species, status, years } = Object.fromEntries(formData.entries());
    await createAnimal({
      nome: name,
      idade: years,
      status_saude: status,
      especie_id: species,
    });
  },
  async getAnimais() {
    console.log('teste');
    const newAnimais = await fetchAnimais();
    if (!newAnimais) return;
    this.animais = newAnimais;
  }
}).mount("#app");
