const music = document.getElementById("music");
const voice = document.getElementById("voice");

const message = document.getElementById("message");

const voiceClips = [
    "audio/voicelines/02.mp3",
    "audio/voicelines/03.mp3",
    "audio/voicelines/04.mp3",
    "audio/voicelines/05.mp3",
    "audio/voicelines/06.mp3",
    "audio/voicelines/07.mp3",
    "audio/voicelines/08.mp3",
    "audio/voicelines/09.mp3",
    "audio/voicelines/10.mp3",
    "audio/voicelines/11.mp3",
    "audio/voicelines/12.mp3",
    "audio/voicelines/13.mp3",
    "audio/voicelines/14.mp3",
    "audio/voicelines/15.mp3",
    "audio/voicelines/16.mp3",
    "audio/voicelines/17.mp3",
    "audio/voicelines/18.mp3",
    "audio/voicelines/19.mp3",
    "audio/voicelines/20.mp3",
    "audio/voicelines/21.mp3",
    "audio/voicelines/22.mp3",
    "audio/voicelines/23.mp3",
    "audio/voicelines/24.mp3",
    "audio/voicelines/25.mp3",
    "audio/voicelines/26.mp3",
    "audio/voicelines/27.mp3",
    "audio/voicelines/28.mp3",
    "audio/voicelines/29.mp3",
    "audio/voicelines/30.mp3",
    "audio/voicelines/31.mp3",
    "audio/voicelines/32.mp3",
    "audio/voicelines/33.mp3",
    "audio/voicelines/34.mp3"
];

const messages = [
    "enjoying the view?",
    "tell all ur friends 2 visit primcablecar.com",
    "hey my name is bryson",
    "check out the art page plz",
    "hi there!",
    "luduvo today (well idk when i will push this or when you're reading this is this probably doesn't apply anymore oh well hahhahahahaha)",
    "oh hell yeah youtube music treating me right",
    "no, it's not geometry dash",
    "can you believe only 1 person got it right on skribbl.io?",
    "i should get some more voice lines from that guy again...",
    "i need to find a good way for people to submit their cable car art",
    "ughhhh......",
    "okay i'm done"
];

const minDelay = 20000;
const maxDelay = 30000;

function randomClip() {
    const delay = Math.random() * (maxDelay - minDelay) + minDelay;
    setTimeout(() => {
        voice.src = voiceClips[Math.floor(Math.random() * voiceClips.length)];
        voice.play();
        randomClip();
    }, delay);
}

function randomMessage() {
    const delay = Math.random() * (maxDelay - minDelay) + minDelay;
    setTimeout(() => {
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
        randomMessage();
    }, delay);
}

document.addEventListener("click", () => {
    setTimeout(() => {
        music.play();
        voice.play();
        randomClip();
        randomMessage();
    }, 1000);
}, { once: true });