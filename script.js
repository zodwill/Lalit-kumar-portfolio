var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


// ------------------about------------- 

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}



// -------------------sidemenu------------ 


var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}





// ----------------------------contact to google form-------------------- 




const scriptURL = 'https://docs.google.com/spreadsheets/d/1A_ZEG-X77zXt-WBT3RnDFId9TOTD2njQRg_dndEtIOA/edit?usp=sharing'
const form = document.forms['submit-to-google-sheets']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    //e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML= "Message sent SUCCESSFULLY...."
            setTimeout(function(){
                msg.innerHTML= ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})




