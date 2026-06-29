/* ===================================

   ĐÀO HOA Ổ V1.5

   SCRIPT.JS - PHẦN 3.1

=================================== */

/* ===========================

        BACKGROUND

=========================== */

const backgrounds = [

    "img/bg1.jpg",

    "img/bg2.jpg",

    "img/bg3.jpg",

    "img/bg4.jpg"

];

const bgElements = document.querySelectorAll(".bg");

bgElements.forEach((bg, index) => {

    if (backgrounds[index]) {

        bg.style.backgroundImage = `url('${backgrounds[index]}')`;

    }

});

let currentBg = 0;

function changeBackground() {

    bgElements[currentBg].classList.remove("active");

    currentBg++;

    if (currentBg >= backgrounds.length) {

        currentBg = 0;

    }

    bgElements[currentBg].classList.add("active");

}

setInterval(changeBackground, 5000);

/* ===========================

        TIỂU SỬ

=========================== */

const bios = [

"🌸 Đào Hoa thịnh phóng, thanh âm viễn dương.",

"🌸 Gặp nhau là duyên, đồng hành là phúc.",

"🌸 Mỗi cánh hoa là một lời chúc bình an.",

"🌸 Chào mừng bạn đến với Đào Hoa Ổ.",

"🌸 Cảm ơn vì đã ghé thăm trang của mình ❤️"

];

const bioText = document.getElementById("bioText");

let bioIndex = 0;

function changeBio(){

    bioText.style.opacity="0";

    setTimeout(()=>{

        bioIndex++;

        if(bioIndex>=bios.length){

            bioIndex=0;

        }

        bioText.innerHTML=bios[bioIndex];

        bioText.style.opacity="1";

    },400);

}

setInterval(changeBio,5000);

/* ===========================

        ĐỒNG HỒ

=========================== */

function updateClock(){

    const now = new Date();

    let h = now.getHours();

    let m = now.getMinutes();

    let s = now.getSeconds();

    h = h.toString().padStart(2,"0");

    m = m.toString().padStart(2,"0");

    s = s.toString().padStart(2,"0");

    document.getElementById("clock").innerHTML =

        h + ":" + m + ":" + s;

}

updateClock();

setInterval(updateClock,1000);

/* ===========================

        HIỆU ỨNG CLICK

=========================== */

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousedown",()=>{

        card.style.transform="scale(.97)";

    });

    card.addEventListener("mouseup",()=>{

        card.style.transform="";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});
/* ===================================

   ĐÀO HOA Ổ V1.5

   SCRIPT.JS - PHẦN 3.2

=================================== */

/* ===========================

        HOA ĐÀO RƠI

=========================== */

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.fontSize = (18 + Math.random()*20) + "px";

    petal.style.animationDuration =

        (8 + Math.random()*6) + "s";

    petal.style.opacity =

        0.4 + Math.random()*0.6;

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },15000);

}

setInterval(createPetal,250);

/* ===========================

        HẠT SÁNG

=========================== */

const particles =

document.getElementById("particles");

function createParticle(){

    const dot =

    document.createElement("div");

    dot.className="particle";

    dot.style.left =

    Math.random()*100+"vw";

    dot.style.animationDuration =

    (6+Math.random()*6)+"s";

    dot.style.opacity =

    Math.random();

    dot.style.width =

    (3+Math.random()*4)+"px";

    dot.style.height =

    dot.style.width;

    particles.appendChild(dot);

    setTimeout(()=>{

        dot.remove();

    },12000);

}

setInterval(createParticle,180);

/* ===========================

        NHẠC NỀN

=========================== */

const music =

document.getElementById("bgMusic");

const musicBtn =

document.getElementById("musicBtn");

let playing=false;

music.volume=0.35;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML=

        '<i class="fa-solid fa-music"></i>';

    }else{

        music.play();

        musicBtn.innerHTML=

        '<i class="fa-solid fa-pause"></i>';

    }

    playing=!playing;

});

/* ===========================

        HOVER ICON

=========================== */

document.querySelectorAll(".icon")

.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform=

        "rotate(10deg) scale(1.1)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="";

    });

});

/* ===========================

        CHUYỂN ĐỘNG NHẸ

=========================== */

document.querySelectorAll(".card")

.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x =

        e.offsetX/card.clientWidth;

        const y =

        e.offsetY/card.clientHeight;

        card.style.transform=

        `rotateX(${(0.5-y)*6}deg)

         rotateY(${(x-0.5)*6}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});
/* ===================================

   ĐÀO HOA Ổ V1.5

   SCRIPT.JS - PHẦN 3.3

=================================== */

/* ===========================

        LOADING

=========================== */

window.addEventListener("load",()=>{

    const loading =

    document.getElementById("loading");

    setTimeout(()=>{

        loading.classList.add("hide");

    },1200);

});

/* ===========================

        BACKGROUND KEN BURNS

=========================== */

const style =

document.createElement("style");

style.innerHTML=`

.bg{

    animation:zoomBg 18s linear infinite;

}

@keyframes zoomBg{

    0%{

        transform:scale(1);

    }

    100%{

        transform:scale(1.12);

    }

}

`;

document.head.appendChild(style);

/* ===========================

        HIỆU ỨNG MỞ TRANG

=========================== */

document.body.style.opacity="0";

window.onload=()=>{

    document.body.style.transition=

    "opacity 1s";

    document.body.style.opacity="1";

};

/* ===========================

        CHỐNG LỖI ẢNH

=========================== */

document.querySelectorAll("img")

.forEach(img=>{

    img.onerror=()=>{

        img.src="https://placehold.co/300x300/png?text=Avatar";

    }

});

/* ===========================

        CHỐNG LỖI NHẠC

=========================== */

music.addEventListener("error",()=>{

    console.log("Không tìm thấy file nhạc.");

});

/* ===========================

        CONSOLE

=========================== */

console.log(

"%c🌸 Đào Hoa Ổ 🌸",

"color:#ff69b4;font-size:24px;font-weight:bold;"

);

console.log(

"%cWelcome Hoài An ❤️",

"color:white;font-size:15px;"

);

/* ===========================

        HOÀN THÀNH

=========================== */

console.log(

"%cBio V1.5 Loaded Successfully!",

"color:#00ff99;font-size:16px;"

);