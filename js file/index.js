const textContents = [
  `<p id="myText">SOFTWARE <span class="y">E|</span><span id="remove">NGINEER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">EN|</span><span id="remove">GINEER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENG|</span><span id="remove">INEER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGI|</span><span id="remove">NEER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGIN|</span><span id="remove">EER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGINE|</span><span id="remove">ER</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGINEE|</span><span id="remove">R</span></p>`,
  `<p id="myText">SOFTWARE <span class="y">ENGINEER|</span></p>`,
];

// variables to be decleared later on
let myFirst = `<p class="thp">project</p>
<div class="hrp">
  <hr id="prohr1">
  <hr id="prohrr1">
</div>
<div  class="theProject">
  <div class="pros">
      <h2 class="animate2a" id="stop">Stopwatch</h2>
  </div>
  <div class="imagePro">
      <div onclick="backward5()" class="btn" >
          <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
      <div onmouseout="out1()" onmouseover="over1()" class="img1 animate2a click">
          <p id="ppro1"></p>
          <a  href="https://four-card-feature-bzou.vercel.app/">
              <img id="mm1"  src="./images/four-card-features.png">
          </a>
      </div>
      <div onclick="forward5()" class="btn" >
          <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
  </div>
</div>` 
let mySecond = `<p class="thp">project</p>
<div id="hr">
  <hr id="prohr">
  <hr id="prohrr">
</div>
<div class="theProject">
  <div class="pros">
      <h2 class="animate2a" id="hud">Huddle Landing Page</h2>
  </div>
  <div class="imagePro">
      <div onclick="backward4()" class="btn" >
          <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
      <div onmouseout="out()" onmouseover="over()" class="img animate2a click">
          <p id="ppro"></p>
          <a  href="https://huddle-landing-page-two-omega.vercel.app/">
              <img id="mm"  src="images/huddleLandingPage.png">
          </a>
      </div>
      <div onclick="forward4()" class="btn" >
          <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
          <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
      </div>
  </div>
</div>`
let myThird = `<p class="thp">project</p>
<div class="hrp">
    <hr id="prohr1">
    <hr id="prohrr1">
</div>
<div  class="theProject">
    <div class="pros">
        <h2 class="animate1a" id="stop">four card Featurs</h2>
    </div>
    <div class="imagePro">
        <div onclick="backward5()" class="btn" >
            <i class="rotate fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="rotate fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
        <div onmouseout="out1()" onmouseover="over1()" class="img1 animate1a click">
            <p id="ppro1"></p>
            <a  href="https://four-card-feature-bzou.vercel.app/">
                <img id="mm1"  src="./images/four-card-features.png">
            </a>
        </div>
        <div onclick="forward5()" class="btn" >
            <i class="fa-solid fa-play fa-2xl" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-2xs" style="color: #7733ff;"></i>
            <i class="fa-solid fa-play fa-sm" style="color: #7733ff;"></i>
        </div>
    </div>
</div>`
let MyimgFour1 = `<div id="imgFou">
<div class="rem"  id="imgrem1">
</div>
<div class="rem" id="imgrem3">
<img src="./images/certificate1.png" alt="" class="fourc animate" id="b">
</div>
<div class="rem" onclick="removeb()" id="imgrem2">
<img src="./images/certificate2.png" alt="" class="fourc" id="a">
</div>
</div>`
let MyimgFour2 = `<div id="imgFou">
<div class="rem" onclick="removea()" id="imgrem1">
  <img src="./images/certificate1.png" alt="" class="fourc " id="a">
</div>
<div class="rem" onclick="removeb()" id="imgrem3">
  <img src="./images/certificate2.png" alt="" class="fourc animate" id="b">
</div>
<div class="rem" onclick="removec()" id="imgrem2">
  <img src="./images/certificate3.png" alt="" class="fourc " id="a">
</div>
</div>`
let MyimgFour3 = `<div id="imgFou">
<div class="rem" onclick="removeb()" id="imgrem1">
<img src="./images/certificate2.png" alt="" class="fourc" id="a">
</div>
<div class="rem" id="imgrem3">
<img src="./images/certificate3.png" alt="" class="fourc animate" id="b">
</div>
<div class="rem" onclick="removec()" id="imgrem2">
</div>
</div>`

// for the text with the color red that transition out the alphabet

function changeText(texts) {
  let currentIndex = 0;
  const textElement = document.getElementById('myText');
  if (!textElement) {
    console.error("Element with ID 'myText' not found.");
    return;
  }
  setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.innerHTML = texts[currentIndex];
  }, 700);
}
changeText(textContents);

// for the forward and backward button in the skill section
let onehtml = document.getElementById('onehtml')
let onecss = document.getElementById('onecss')
let onejs = document.getElementById('onejs')
let onets = document.getElementById('onets')
onehtml.style.display = ""
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = "none"
function forward() {
onehtml.style.display = "none"
onecss.style.display = ""
onejs.style.display = "none"
onets.style.display = "none"
};
function  backward() {
onehtml.style.display = "none"
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = ""
};
function forward1() {
onehtml.style.display = "none"
onecss.style.display = "none"
onejs.style.display = ""
onets.style.display = "none"
};
function  backward1() {
onehtml.style.display = ""
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = "none"
};
function forward2() {
onehtml.style.display = "none"
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = ""
};
function  backward2() {
onehtml.style.display = "none"
onecss.style.display = ""
onejs.style.display = "none"
onets.style.display = "none"
};
function forward3() {
onehtml.style.display = ""
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = "none"
};
function  backward3() {
onehtml.style.display = "none"
onecss.style.display = "none"
onejs.style.display = ""
onets.style.display = "none"
};

// for the certificate function
let hr4 = document.getElementById("hr4")
let hr5 = document.getElementById("hr5")
let hr6 = document.getElementById("hr6")
hr4.style.display="none"
hr5.style.display=""
hr6.style.display="none"
let imgFour = document.getElementById("imgFour");
imgFour.style.display = ""
function removea(){
imgFour.innerHTML = `${MyimgFour1}`
hr4.style.display=""
hr5.style.display="none"
hr6.style.display="none"
};
function removeb(){
imgFour.innerHTML = `${MyimgFour2}`
hr4.style.display="none"
hr5.style.display=""
hr6.style.display="none"
}
function removec(){
imgFour.innerHTML = `${MyimgFour3}`
hr4.style.display="none"
hr5.style.display="none"
hr6.style.display=""
}

//  for the transition and other function of the showMenu and cancleMenu
let texts = document.getElementById("texts")
let about = document.getElementById("about")
let certificate = document.getElementById("certificate")
let three = document.getElementById("three")
let project = document.getElementById("project")
let menu = document.getElementById("menu")
let menuImg = document.getElementById("menuImg")
let con = document.getElementById("con")
let main = document.getElementById("main")

menu.style.display = ""
con.style.display = "none"
function showmenu(){
menuImg.style.display = "none"
con.style.display = ""
con.style.zIndex = 5
texts.style.filter = "blur(5px)"
about.style.filter = "blur(5px)"
three.style.filter = "blur(5px)"
certificate.style.filter = "blur(5px)"
project.style.filter = "blur(5px)"
main.style.position = "fixed"
}

function cancelShow(){
menuImg.style.display = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
main.style.position = ""
}

// for the forward and backward buttons in the project section
let pro = document.getElementById("pro")
let pro1 = document.getElementById("pro1")
let pro2 = document.getElementById("pro2")
pro.style.display = ""
pro1.style.display = "none"
pro2.style.display = "none"
function forward4() {
pro.style.display = "none"
pro1.style.display = ""
pro1.innerHTML = `${myThird}`
};
function  backward4() {
};
function forward5() {
pro.style.display = "none"
pro1.style.display = "none"
pro2.style.display = ""
};
function  backward5() {
pro.style.display = ""
pro.innerHTML = `${mySecond}`
pro1.style.display = "none"
};
function forward6() {
pro.style.display = "none"
pro1.style.display = "none"
pro2.style.display = ""
};
function  backward6() {
pro.style.display = "none"
pro1.style.display = ""
pro1.innerHTML = `${myFirst}`
pro2.style.display = "none"
};

// for the mouse over effect in the project section
let ppro = document.getElementById('ppro')
let mm = document.getElementById('mm')
let ppro1 = document.getElementById('ppro1')
let mm1 = document.getElementById('mm1')
let ppro2 = document.getElementById('ppro2')
let mm2 = document.getElementById('mm2')
mm.style.opacity = "1"
ppro.style.display = ""
ppro.innerHTML = ". "
ppro.style.color ="rgba(0,0,0,0)"
mm1.style.opacity = "1"
ppro1.style.display = ""
ppro1.innerHTML = ". "
ppro1.style.color ="rgba(0,0,0,0)"
function over(){
ppro.innerHTML = "Click on image to explore website"
ppro.style.color ="#fff"
mm.style.opacity = "0.4"
}
function out(){
ppro.innerHTML = ". "
ppro.style.color ="rgba(0,0,0,0)"
mm.style.opacity = "1"
}
function over1(){
ppro1.innerHTML = "Click on image to explore website"
ppro1.style.color ="#fff"
mm1.style.opacity = "0.4"
}
function out1(){
 ppro1.innerHTML = ". "
 ppro1.style.color ="rgba(0,0,0,0)"
 mm1.style.opacity = "1"
}
function over2(){
 ppro2.innerHTML = "Click on image to explore website"
 ppro2.style.color ="#fff"
 mm2.style.opacity = "0.4"
}
function out2(){
  ppro2.innerHTML = ". "
  ppro2.style.color ="rgba(0,0,0,0)"
  mm2.style.opacity = "1"
}


// for the onclick in the showMenu  nav
function removeD(){
main.style.position = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
menu.style.display = ""
menuImg.style.display = ""
}
function removeE(){
main.style.position = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
menu.style.display = ""
menuImg.style.display = ""
}
function removeF(){
main.style.position = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
menu.style.display = ""
menuImg.style.display = ""
}
function removeG(){
main.style.position = ""
con.style.display = "none"
texts.style.filter = "blur(0)"
about.style.filter = "blur(0)"
three.style.filter = "blur(0)"
certificate.style.filter = "blur(0)"
project.style.filter = "blur(0)"
menu.style.display = ""
menuImg.style.display = ""
}
// for the airplane img to make it scroll back up after scrolling down a bit
let toTopAction = document.getElementById('toTopAction')
let toTopp = document.getElementById('toTop')
toTopAction.style.display = "none"
toTopp.style.display = "none"
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  toTopAction.style.display = "block";
} else {
  toTopAction.style.display = "none";
}
}


function  toTop() {
toTopAction.style.display = "none"
toTopp.style.display = ""
setTimeout(() => {
toTopp.style.display = "none"
}, 1500);
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// document.documentElement.style.transition = " all 1s ease-in 2s"
}