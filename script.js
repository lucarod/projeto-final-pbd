import { createApp } from "https://unpkg.com/petite-vue?module";
import { createAnimal } from "./services/create.js";

console.log('teste')

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
    const newAnimais = await fetchAnimais();
    this.animais = newAnimais;
  }
}).mount("#app");
