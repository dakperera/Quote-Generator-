const quotes = [
    'It does not matter how slowly you go as long as you do not stop.',
    'If you can dream it, you can do it.',
    'Success consists of going from failure to failure without loss of enthusiasm.',
    'A creative man is motivated by the desire to achieve, not by the desire to beat others.',
    'He who is not courageous enough to take risks will accomplish nothing in life.',
    'You can never quit. Winners never quit, and quitters never win.',
    'Build your own dreams, or someone else will hire you to build theirs.',
    "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    'You need to overcome the tug of people against you as you reach for high goals.',
    'I want to be motivational and inspirational for everybody: my big aim is more women on bicycles.'
  ];
  const authors = [
    'Confucius',
    'Walt Disney',
    'Winston Churchill',
    'Ayn Rand',
    'Muhammad Ali',
    'Ted Turner',
    'Farrah Gray',
    'Jim Rohn',
    'George S. Patton',
    'Marianne Vos'
  ];

function generateQuote() {
let randomVal=Math.floor(Math.random() * 10);;
let quote = quotes[randomVal];
let author = authors[randomVal];


document.getElementById("text").innerHTML = quote;
document.getElementById("author").innerHTML = '- '+author;


let color= '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1,6);

let r = document.querySelector(':root');
r.style.setProperty('--base-color3',color);

}




