/* =====================================
   PAGE SYSTEM
===================================== */

let currentPage = 1;

const pages = document.querySelectorAll(".page");


function nextPage() {

    if (currentPage >= pages.length) {
        return;
    }

    pages[currentPage - 1]
        .classList.remove("active");

    currentPage++;

    pages[currentPage - 1]
        .classList.add("active");

    // Confetti saat masuk halaman 2
    if (currentPage === 2) {
        createConfetti();
    }

}


/* =====================================
   RESTART
===================================== */

function restart() {

    document
        .getElementById("envelope")
        .classList.remove("open");

    document
        .getElementById("finalMessage")
        .classList.remove("show");

    document
        .getElementById("openHint")
        .style.opacity = "1";


    pages[currentPage - 1]
        .classList.remove("active");

    currentPage = 1;

    pages[0]
        .classList.add("active");

}


/* =====================================
   MEMORY DATA
===================================== */

const memories = [

    {
        image: "foto%201.jpeg",
        caption: "Momen kecil yang selalu ingin aku ingat."
    },

    {
        image: "foto%202.jpeg",
        caption: "Salah satu hari yang memang pantas disimpan."
    },

    {
        image: "foto%203.jpeg",
        caption: "Momen sederhana, kenangan yang istimewa."
    },

    {
        image: "foto%204.jpeg",
        caption: "Beberapa momen terasa berbeda dan tak tergantikan."
    },

    {
        image: "foto%205.jpeg",
        caption: "Kenangan lain yang ingin aku simpan selamanya."
    },

    {
        image: "foto%206.jpeg",
        caption: "Dan cerita baru yang tetap ingin aku kenang."
    }

];


let currentPhoto = 0;


/* =====================================
   CHANGE PHOTO
===================================== */

function showPhoto(index) {

    currentPhoto = index;

    const photo = document.getElementById("memoryPhoto");
    const caption = document.getElementById("memoryCaption");
    const number = document.getElementById("photoNumber");
    const flash = document.getElementById("photoFlash");

    // efek keluar
    photo.style.opacity = "0";
    photo.style.transform = "scale(0.96)";

    setTimeout(() => {

        photo.src = memories[currentPhoto].image;

        caption.textContent =
            memories[currentPhoto].caption;

        number.textContent =
            String(currentPhoto + 1).padStart(2, "0")
            + " / "
            + String(memories.length).padStart(2, "0");

        // efek masuk
        photo.style.opacity = "1";
        photo.style.transform = "scale(1)";

        // flash kamera
        flash.classList.remove("active");

        void flash.offsetWidth;

        flash.classList.add("active");

    }, 180);
}


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= memories.length) {
        currentPhoto = 0;
    }

    showPhoto(currentPhoto);
}


function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = memories.length - 1;
    }

    showPhoto(currentPhoto);
}

/* =====================================
   CAMERA FLASH
===================================== */

function cameraFlash() {

    const screen =
        document.querySelector(".camera-screen");

    screen.animate(
        [
            {
                filter: "brightness(1)"
            },

            {
                filter: "brightness(2)"
            },

            {
                filter: "brightness(1)"
            }
        ],
        {
            duration: 280
        }
    );

}


/* =====================================
   OPEN LETTER
===================================== */

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    const hint =
        document.getElementById("openHint");

    const finalMessage =
        document.getElementById("finalMessage");


    envelope.classList.add("open");

    hint.style.opacity = "0";


    setTimeout(() => {

        finalMessage.classList.add("show");

        createConfetti();

    }, 1000);

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const colors = [
        "#f19bc0",
        "#ffffff",
        "#e8b5cd",
        "#d778a1",
        "#ffd4e5"
    ];


    for (let i = 0; i < 70; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position =
            "fixed";

        confetti.style.width =
            Math.random() * 7 + 3 + "px";

        confetti.style.height =
            Math.random() * 10 + 5 + "px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.top =
            "-20px";

        confetti.style.zIndex =
            "999";

        confetti.style.pointerEvents =
            "none";

        document.body.appendChild(confetti);


        const duration =
            Math.random() * 3 + 2;


        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 900}deg)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    duration * 1000,

                easing: "linear"
            }

        );


        setTimeout(() => {

            confetti.remove();

        }, duration * 1000);

    }

}


/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML =
        Math.random() > .5
            ? "♥"
            : "♡";

    heart.style.position =
        "fixed";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom =
        "-30px";

    heart.style.color =
        "rgba(239,140,183,.55)";

    heart.style.fontSize =
        Math.random() * 20 + 10 + "px";

    heart.style.zIndex =
        "1";

    heart.style.pointerEvents =
        "none";


    document.body.appendChild(heart);


    const duration =
        Math.random() * 5 + 5;


    heart.animate(

        [
            {
                transform:
                    "translateY(0) rotate(0deg)",

                opacity: 0
            },

            {
                transform:
                    "translateY(-110vh) rotate(360deg)",

                opacity: 1
            }
        ],

        {
            duration:
                duration * 1000,

            easing: "linear"
        }

    );


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}


setInterval(createHeart, 1400);


/* =====================================
   MUSIC
===================================== */

const music =
    document.getElementById("music");

let musicStarted = false;


document.addEventListener(
    "click",
    () => {

        if (!musicStarted) {

            music.play()
                .catch(() => {});

            musicStarted = true;

        }

    },
    { once: true }
);