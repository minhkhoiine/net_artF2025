const body = document.body;
const transformBtn = document.getElementById("transformBtn");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const avatarEmoji = document.getElementById("avatarEmoji");
const identityName = document.getElementById("identityName");
const identityRole = document.getElementById("identityRole");
const identityDesc = document.getElementById("identityDesc");
const skillsList = document.getElementById("skillsList");
const valuesList = document.getElementById("valuesList");
const hobbiesList = document.getElementById("hobbiesList");

let isChaos = false;

function setBusinessIdentity() {
    body.classList.remove("mode-chaos");
    body.classList.add("mode-business");
    isChaos = false;

    pageTitle.textContent = "Professional Portfolio";
    pageSubtitle.textContent = "“Results-driven, detail-oriented, highly optimized human.”";

    avatarEmoji.textContent = "💼";
    identityName.textContent = "K. Vu";
    identityRole.textContent = "Software Engineer · Available 24/7";
    identityDesc.textContent =
        "I specialize in backend development. " +
        "Passionate about Math, Math, and Math.";

    skillsList.innerHTML = `
        <li>Computer Vision</li>
        <li>Computer Programming</li>
        <li>Graph Theory</li>
    `;

    valuesList.innerHTML = `
        <li>Efficiency</li>
        <li>Professionalism</li>
        <li>Synergy</li>
    `;

    hobbiesList.innerHTML = `
        <li>Soccer</li>
        <li>Reading math papers</li>
        <li>Cooking</li>
    `;

    transformBtn.textContent = "Reveal True Identity";
}

function setChaosIdentity() {
    body.classList.remove("mode-business");
    body.classList.add("mode-chaos");
    isChaos = true;

    pageTitle.textContent = "Secret Identity: Chaos Mode";
    pageSubtitle.textContent = "“I am more than my resume.”";

    avatarEmoji.textContent = "🎹";
    identityName.textContent = "Khoi (a little unhinged)";
    identityRole.textContent = "Night-time artist · Daydreaming coder";
    identityDesc.textContent =
        "I make weird websites, practice sad piano songs at 2am, " +
        "and get lost in math problems and rabbit-hole Wikipedia tabs.";

    skillsList.innerHTML = `
        <li>Turning feelings into code</li>
        <li>Spontaneous creative projects</li>
        <li>Master of procrastination sprints</li>
    `;

    valuesList.innerHTML = `
        <li>Honesty</li>
        <li>Curiosity</li>
        <li>Playfulness</li>
    `;

    hobbiesList.innerHTML = `
        <li>Table tennis & piano</li>
        <li>Net art & online rabbit holes</li>
        <li>Redesigning my identity every semester</li>
    `;

    transformBtn.textContent = "Hide True Identity";
}

function toggleIdentity() {
    if (isChaos) {
        setBusinessIdentity();
    } else {
        setChaosIdentity();
    }
}

setBusinessIdentity();

transformBtn.addEventListener("click", toggleIdentity);

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault(); 
        toggleIdentity();
    }
});

document.addEventListener("dblclick", () => {
    toggleIdentity();
});
