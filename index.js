const submitBtn = document.getElementById('submitBtn');
const fName = document.getElementById('fName');
const dob = document.getElementById('dob');
const email = document.getElementById('email');
const male = document.getElementById("male");
const feMale = document.getElementById('female');
const java = document.getElementById('java');
const html = document.getElementById('html');
const css = document.getElementById('css');
const show = document.getElementById('show');

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const photo = document.querySelector("#photo").files[0];

    if (fName.value == '' || dob.value == '' || email.value == '') {
        alert("All fields are required.");
    }
    else {
        enrolledStudents(photo);
    }
    fName.value = '';
    dob.value = '';
    email.value = '';
})

function enrolledStudents(photo) {
    let ht = `
         <div class="card">
                <div class="description">
                  <h5 class="name">${fName.value}</h5>
                  <p class="gender">${male.checked ? male.value : feMale.value}</p>
                  <p class="email"> <a href="mailto:${email.value}">${email.value}</a></p>
                  <p class="dob">${dob.value}</p>
                  <p class="skills">${java.checked ? java.value + "," : ''} ${html.checked ? html.value + "," : ''}${css.checked ? css.value : ''}</p>
                </div>
                <div class="image">
                  <img src="${URL.createObjectURL(photo)}" alt="Profile Photo">
                </div>
        </div>
    `
    show.innerHTML += ht;

}