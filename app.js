//Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогчийг 0 хоёрдугаар тоглогчийг 1
var activePlayer = 0;

//Тоглогчийг оноог хадгалах хувьсагч
var scores = [0 , 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ          хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice =Math.floor(Math.random() *6)+1;

//<div class="player-score" id="score-0">43</div>
// window.document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').textContent = dice;

//Тоглоом эхлэх бэлтгэл

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('.dice').style.display='none';

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

console.log("Шоо: "+ dice);