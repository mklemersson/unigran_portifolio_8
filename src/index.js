const calcIMC = (height, weight) => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

const weight = 92;
const height = 191;
const result = calcIMC(height, weight).toFixed(1);

console.log(
  `O IMC para os valores de Altura:${height} e Peso: ${weight} e igual a: ${result}`
);
