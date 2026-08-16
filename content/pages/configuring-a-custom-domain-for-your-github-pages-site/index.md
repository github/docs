<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Cyber Script Hub</title>

<style>
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    min-height: 100vh;
    background:
        radial-gradient(circle at 50% 0%, #073516 0%, #020602 45%, #000 100%);
    color: #00ff66;
    font-family: "Courier New", monospace;
}

/* Scanline effect */
body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 999;
    background: repeating-linear-gradient(
        0deg,
        rgba(0,255,80,.025) 0px,
        rgba(0,255,80,.025) 1px,
        transparent 1px,
        transparent 4px
    );
}

/* Header */
header {
    position: sticky;
    top: 0;
    z-index: 100;

    height: 70px;
    padding: 0 6%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(0,8,3,.88);
    border-bottom: 1px solid #00ff66;
    backdrop-filter: blur(10px);
}

.logo {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 0 0 15px #00ff66;
}

.logo span {
    color: #6aff92;
}

.header-status {
    color: #43ff78;
    font-size: 13px;
}

/* Main */
.container {
    width: min(900px, 92%);
    margin: 45px auto;
}

.hero {
    text-align: center;
    margin-bottom: 40px;
}

.hero h1 {
    margin: 0;
    font-size: clamp(34px, 8vw, 65px);
    text-shadow:
        0 0 10px #00ff66,
        0 0 30px #00ff66;
}

.hero p {
    color: #62906f;
    margin-top: 12px;
}

/* Card */
.card {
    margin-top: 25px;
    padding: 22px;

    background: rgba(2,15,7,.82);
    border: 1px solid #00ff66;
    border-radius: 14px;

    box-shadow:
        0 0 25px rgba(0,255,80,.10),
        inset 0 0 20px rgba(0,255,80,.025);
}

.card-title {
    color: #65ff8c;
    margin-bottom: 16px;
    font-weight: bold;
}

/* Script output */
.output {
    min-height: 150px;

    padding: 18px;

    background: #000;
    border: 1px solid #164e27;
    border-radius: 9px;

    color: #80ff9e;
    line-height: 1.7;

    white-space: pre-wrap;
    word-break: break-word;

    overflow-x: auto;
}

/* Buttons */
button {
    border: 1px solid #00ff66;
    border-radius: 7px;

    background: #041b0a;
    color: #00ff66;

    padding: 12px 18px;

    font-family: "Courier New", monospace;
    font-weight: bold;

    cursor: pointer;

    transition: .2s;
}

button:hover {
    background: #00ff66;
    color: #000;

    box-shadow: 0 0 20px rgba(0,255,80,.5);
}

button:active {
    transform: scale(.97);
}

.copy-btn {
    width: 100%;
    margin-top: 15px;
}

/* Login */
.login-row {
    display: flex;
    gap: 10px;
}

input[type="password"] {
    flex: 1;

    min-width: 0;

    padding: 13px 15px;

    background: #000;
    border: 1px solid #17632e;
    border-radius: 7px;

    color: #00ff66;

    font-family: "Courier New", monospace;
    font-size: 15px;

    outline: none;
}

input[type="password"]:focus {
    border-color: #00ff66;
    box-shadow: 0 0 15px rgba(0,255,80,.3);
}

input::placeholder {
    color: #315b3d;
}

.status {
    margin-top: 13px;
    min-height: 20px;
    color: #6aff91;
}

/* Admin */
#adminPanel {
    display: none;
}

textarea {
    width: 100%;
    min-height: 260px;

    resize: vertical;

    padding: 16px;

    background: #000;
    border: 1px solid #17632e;
    border-radius: 9px;

    color: #70ff91;

    font-family: "Courier New", monospace;
    font-size: 15px;
    line-height: 1.6;

    outline: none;
}

textarea:focus {
    border-color: #00ff66;
    box-shadow: 0 0 15px rgba(0,255,80,.25);
}

.admin-buttons {
    display: flex;
    gap: 10px;
    margin-top: 12px;
}

.save-btn {
    flex: 1;
}

.logout-btn {
    color: #ff5757;
    border-color: #ff5757;
    background: #180404;
}

.logout-btn:hover {
    background: #ff5757;
    color: #000;
}

/* Terminal */
.terminal {
    color: #4cff78;
    line-height: 1.8;
}

.terminal .dim {
    color: #396346;
}

.cursor {
    display: inline-block;
    width: 8px;
    height: 16px;
    background: #00ff66;
    animation: blink 1s infinite;
    vertical-align: middle;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

/* Footer */
footer {
    text-align: center;
    padding: 35px 20px;
    color: #315a3c;
    font-size: 12px;
}

/* Mobile */
@media (max-width: 600px) {

    header {
        padding: 0 4%;
    }

    .header-status {
        display: none;
    }

    .container {
        width: 92%;
        margin-top: 30px;
    }

    .card {
        padding: 16px;
    }

    .login-row {
        flex-direction: column;
    }

    .login-row button {
        width: 100%;
    }

    .admin-buttons {
        flex-direction: column;
    }

    .admin-buttons button {
        width: 100%;
    }

    .output {
        font-size: 13px;
    }
}
</style>
</head>


<body>

<!-- HEADER -->
<header>

    <div class="logo">
        root@<span>cyber</span>:~$
    </div>

    <div class="header-status">
        ● SYSTEM ONLINE
    </div>

</header>


<main class="container">

    <!-- HERO -->
    <section class="hero">

        <h1>CYBER SCRIPT HUB</h1>

        <p>
            &gt; Secure Script Sharing System_
        </p>

    </section>


    <!-- SCRIPT -->
    <section class="card">

        <div class="card-title">
            // PUBLIC SCRIPT
        </div>

        <div
            class="output"
            id="output"
        ></div>

        <button
            class="copy-btn"
            onclick="copyScript()"
        >
            [ COPY SCRIPT ]
        </button>

    </section>


    <!-- CREATOR LOGIN -->
    <section class="card">

        <div class="card-title">
            // CREATOR LOGIN
        </div>

        <div class="login-row">

            <input
                type="password"
                id="password"
                placeholder="ENTER CREATOR PASSWORD"
                autocomplete="off"
                onkeydown="if(event.key === 'Enter') login()"
            >

            <button onclick="login()">
                [ LOGIN ]
            </button>

        </div>

        <div
            class="status"
            id="loginStatus"
        ></div>

    </section>


    <!-- CREATOR CONTROL -->
    <section
        class="card"
        id="adminPanel"
    >

        <div class="card-title">
            // CREATOR CONTROL PANEL
        </div>

        <textarea
            id="editor"
            placeholder="TYPE YOUR SCRIPT HERE..."
        ></textarea>

        <div class="admin-buttons">

            <button
                class="save-btn"
                onclick="saveScript()"
            >
                [ SAVE CHANGES ]
            </button>

            <button
                class="logout-btn"
                onclick="logout()"
            >
                [ LOGOUT ]
            </button>

        </div>

        <div
            class="status"
            id="saveStatus"
        ></div>

    </section>


    <!-- TERMINAL -->
    <section class="card">

        <div class="card-title">
            // TERMINAL
        </div>

        <div class="terminal">

            <div>
                root@cyber:~$ system_status
            </div>

            <div class="dim">
                Checking system...
            </div>

            <div>
                SYSTEM : ONLINE
            </div>

            <div>
                SCRIPT : READY
            </div>

            <div>
                ACCESS : PUBLIC
            </div>

            <div>
                root@cyber:~$ <span class="cursor"></span>
            </div>

        </div>

    </section>

</main>


<footer>
    CYBER SCRIPT HUB // SYSTEM ONLINE
</footer>


<script>

/*
==================================================
             CREATOR SETTINGS
==================================================
*/

/*
 * เปลี่ยนรหัสผู้สร้างตรงนี้
 */
const CREATOR_PASSWORD = "123456";


/*
 * ข้อความเริ่มต้น
 */
const DEFAULT_SCRIPT =
`print("Hello World")
print("Cyber Script")

-- Put your script here
-- Users can copy this text.`;


/*
==================================================
             ELEMENTS
==================================================
*/

const output =
    document.getElementById("output");

const editor =
    document.getElementById("editor");

const adminPanel =
    document.getElementById("adminPanel");

const password =
    document.getElementById("password");

const loginStatus =
    document.getElementById("loginStatus");

const saveStatus =
    document.getElementById("saveStatus");


/*
==================================================
             LOAD SCRIPT
==================================================
*/

function loadScript() {

    const saved =
        localStorage.getItem("cyber_script");

    if (saved !== null) {

        output.textContent = saved;

    } else {

        output.textContent =
            DEFAULT_SCRIPT;

    }
}

loadScript();


/*
==================================================
             LOGIN
==================================================
*/

function login() {

    const entered =
        password.value;

    if (entered === "") {

        loginStatus.textContent =
            "> PLEASE ENTER PASSWORD";

        return;
    }


    if (entered === CREATOR_PASSWORD) {

        loginStatus.textContent =
            "> ACCESS GRANTED ✓";

        loginStatus.style.color =
            "#00ff66";


        /*
         * เปิด Creator Panel
         */

        adminPanel.style.display =
            "block";


        /*
         * นำข้อความปัจจุบัน
         * เข้า Editor
         */

        editor.value =
            output.textContent;


        /*
         * เลื่อนไปที่ Editor
         */

        setTimeout(() => {

            adminPanel.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);


        password.value = "";


    } else {

        loginStatus.textContent =
            "> ACCESS DENIED ✕";

        loginStatus.style.color =
            "#ff5555";

        password.value = "";

    }

}


/*
==================================================
             SAVE
==================================================
*/

function saveScript() {

    const newText =
        editor.value;


    /*
     * บันทึกลง Browser
     */

    localStorage.setItem(
        "cyber_script",
        newText
    );


    /*
     * อัปเดต Public Script
     */

    output.textContent =
        newText;


    saveStatus.textContent =
        "> SCRIPT SAVED SUCCESSFULLY ✓";

    saveStatus.style.color =
        "#00ff66";


    /*
     * เปลี่ยนข้อความหลังจาก 3 วินาที
     */

    setTimeout(() => {

        saveStatus.textContent = "";

    }, 3000);

}


/*
==================================================
             LOGOUT
==================================================
*/

function logout() {

    adminPanel.style.display =
        "none";

    editor.value = "";

    saveStatus.textContent = "";

    loginStatus.textContent =
        "> LOGGED OUT";

    loginStatus.style.color =
        "#00ff66";

}


/*
==================================================
             COPY
==================================================
*/

async function copyScript() {

    const text =
        output.textContent;


    try {

        await navigator.clipboard.writeText(text);

        const button =
            document.querySelector(".copy-btn");

        const oldText =
            button.textContent;

        button.textContent =
            "[ COPIED ✓ ]";


        setTimeout(() => {

            button.textContent =
                oldText;

        }, 1500);


    } catch (error) {

        /*
         * สำรองกรณี Browser
         * ไม่อนุญาต Clipboard API
         */

        const temp =
            document.createElement("textarea");

        temp.value = text;

        document.body.appendChild(temp);

        temp.select();

        document.execCommand("copy");

        temp.remove();

        alert("SCRIPT COPIED ✓");

    }

}

</script>

</body>
</html>
