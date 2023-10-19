let nome = prompt("Entre o nome do seu herói: " );
let xp = prompt("Entre a quantidade de pontos do herói: ");

function level(nome, xp) {
  if (xp > 0) {
    if (xp < 1000) {
      console.log(`O nível de ${nome} é Ferro`);
    } else if (xp < 2000) {
      console.log(`O nível de ${nome} é Bronze`);
    } else if (xp <= 6000) {
      console.log(`O nível de ${nome} é Prata`);
    } else if (xp <= 7000) {
      console.log(`O nível de ${nome} é Ouro`);
    } else if (xp <= 8000) {
      console.log(`O nível de ${nome} é Platina`);
    } else if (xp <= 9000) {
      console.log(`O nível de ${nome} é Ascendente`);
    } else if (xp <= 10000) {
      console.log(`O nível de ${nome} é Imortal`);
    } else {
      console.log(`O nível de ${nome} é Radiante`);
    }
  } else {
    console.log("Favor entrar um valor positivo para a quantidade de pontos do seu herói!");
  }
}

level(nome, xp);
