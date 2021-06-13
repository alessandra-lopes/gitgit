// 13.06.2021 -  teste pra subir pro github 
// aproveitando pra treinar métodos de arrays

/* #1 .join() => O método Array.join() converte todos os elementos de um array em strings e as concatena, retornando
a string resultante. Pode-se especificar uma string opcional para separar os elementos na
string resultante. Se não for especificada qualquer string separadora, uma vírgula é usada.
SINTAXE: 
let myArray = ["nome", "nome", nome", "nome", nome"];
let variavelRecebeNovaString = myArray(" & ");
console.log(variavelQueVaiReceberNovaString);
console mostra: "nome & nome & nome & nome & nome"
*/
let bichos = ["gato", "pato", "sapo", "vaca", "cão", "galo"];
let bichosAmpersand = bichos.join(" & ");
console.log(bichosAmpersand); //gato & pato & sapo & vaca & cão & galo

/* #2 .sort() => Array.sort() classifica os elementos de um array no local e retorna o array classificado. Quando
sort() é chamado sem argumentos, ele classifica os elementos do array em ordem alfabética (convertendo-
os temporariamente em strings para fazer a comparação, se necessário):
SINTAXE:
*/
bichos.sort();
let bichos1 = bichos.join(", ");
console.log(bichos1);

/* #3 .push() e .pop() => Os métodos push() e pop() permitem trabalhar com arrays como se fossem pilhas. O 
método push() anexa um ou mais novos elementos no final de um array e retorna o novo comprimento do array. 
O método pop() faz o inverso: ele exclui o último elemento de um array, decrementa o comprimento
do array e retorna o valor que removeu. Note que os dois métodos modificam o array no local, em
vez de produzirem uma cópia modificada dele. A combinação de push() e pop() permite o uso de um
array de JavaScript para implementar uma pilha first-in, last-out (primeiro a entrar, último a sair).
SINTAXE:
*/
let bichos = ["gato", "pato", "sapo", "vaca", "cão", "galo"];









