// Stars
function createStars(){
  const sky = document.querySelector('.night-sky');
  for(let i=0;i<100;i++){
    let star = document.createElement('div');
    star.classList.add('star');
    let size = Math.random()*2 + 1;
    star.style.width = star.style.height = size + "px";
    star.style.top = Math.random()*100 + "vh";
    star.style.left = Math.random()*100 + "vw";
    star.style.animationDuration = (Math.random()*2+1) + "s";
    sky.appendChild(star);
  }
}
createStars();

// Surprise button
document.getElementById('surpriseBtn').addEventListener('click', surprise);

function surprise(){
  document.getElementById("surpriseBtn").style.display="none";
  document.getElementById("message").style.display="block";
  document.getElementById("music").play().catch(()=>{});
  typeMessage();
  confetti();
  fireworks();
}

// Typing love message in main card
const text="Happy Birthday meri jaan ❤️ Tum meri zindagi ka sabse khoobsurat hissa ho. Tumhari smile meri duniya roshan kar deti hai. Tumhara saath mujhe har mushkil se ladne ki himmat deta hai. Main hamesha tumhara saath dunga aur tumse bahut pyaar karta hoon 💕"
let i=0
function typeMessage(){
  if(i<text.length){
    document.getElementById("message").innerHTML+=text.charAt(i)
    i++
    setTimeout(typeMessage,40)
  }
}

// Confetti
function confetti(){
  const colors=["#ff2e63","#ffd166","#06d6a0","#118ab2"];
  for(let i=0;i<120;i++){
    let c=document.createElement("div");
    c.classList.add("confetti");
    c.style.left=Math.random()*100+"vw";
    c.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
    c.style.animationDuration=(Math.random()*3+2)+"s";
    document.body.appendChild(c);
    setTimeout(()=>{c.remove()},5000);
  }
}

// Floating hearts
setInterval(()=>{
  let heart=document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(Math.random()*20+20)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>{heart.remove()},6000);
},500);

// Fireworks
function fireworks(){
  setInterval(()=>{
    let f=document.createElement("div");
    f.classList.add("firework");
    f.style.left=Math.random()*100+"vw";
    f.style.top=Math.random()*60+"vh";
    document.body.appendChild(f);
    setTimeout(()=>{f.remove()},1000);
  },800);
}

// Love Letter Popup with typing
function showLetter(){
  document.getElementById("loveLetter").classList.add("show");
  typeLetterMessage();
}

function closeLetter(){
  document.getElementById("loveLetter").classList.remove("show");
}

// Typing effect inside love letter
function typeLetterMessage(){
  const letterText="Happy Birthday meri jaan ❤️ Tum meri zindagi ka sabse khoobsurat hissa ho. Tumhari smile meri duniya roshan kar deti hai. Tumhara saath mujhe har mushkil se ladne ki himmat deta hai. Main hamesha tumhara saath dunga aur tumse bahut pyaar karta hoon 💕";
  let index=0;
  const p = document.querySelector("#loveLetter p");
  p.innerHTML="";
  const interval = setInterval(()=>{
    if(index<letterText.length){
      p.innerHTML += letterText.charAt(index);
      index++;
    } else clearInterval(interval);
  },40);
}