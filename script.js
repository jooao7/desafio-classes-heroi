// Classe Hero
class Hero {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  atacar() {
      let ataque;

      // Define o tipo de ataque baseado na classe do herói
      switch (this.tipo.toLowerCase()) {
          case 'mago':
              ataque = 'magia';
              break;
          case 'guerreiro':
              ataque = 'espada';
              break;
          case 'monge':
              ataque = 'artes marciais';
              break;
          case 'ninja':
              ataque = 'shuriken';
              break;
          default:
              ataque = 'ataque desconhecido';
      }
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
  }
}

// Exemplo de uso da classe Hero
const heroi1 = new Hero('Mago', 300, 'mago');
heroi1.atacar();

const heroi2 = new Hero('Guerreiro', 35, 'guerreiro');
heroi2.atacar();

const heroi3 = new Hero('Monge', 50, 'monge');
heroi3.atacar();

const heroi4 = new Hero('Ninja', 16, 'ninja');
heroi4.atacar(); 