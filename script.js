function sayHello(event) {
    const userName = toTitleCase($userNameForm.elements.userName.value)
    if (userName !== "") {
        $welcomeMessage.innerHTML = 'Salut ' + userName + '!'
    }
    event.preventDefault();
}

const $userNameForm = document.querySelector('#userNameForm');
const $welcomeMessage = document.querySelector('#welcomeMessage');

$userNameForm.addEventListener('submit', sayHello);

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
        );
}

//-----------------------------------------------------------

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('#clock').innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

startTime();

//-----------------------------------------------------------

/*
let today = new Date()

let dd = today.getDate()
let mm = today.getMonth() + 1
let yyyy = today.getFullYear()

if (dd < 10)
    dd = '0' + dd

if (mm < 10)
    mm = '0' + mm

today = yyyy + mm + dd

const $inputDate = document.querySelector('#birthDate')

$inputDate.setAttribute('max', today)
*/

const $ageForm = document.querySelector('#age');
const $currentAge = document.querySelector('#currentAge')

function getAge(event) {
    const today = new Date();
    console.log(today)
    const birthDate = new Date($ageForm.elements.birthDate.value);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    event.preventDefault()
    $currentAge.innerHTML = 'Your age is: ' + age
}

$ageForm.addEventListener('submit', getAge)
