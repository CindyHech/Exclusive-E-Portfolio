// template_j4y6w6p
// service_gizjigr
// EXBJtKBHRblraxYsv

// //<script type="text/javascript"
//         src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
// </script>
// <script type="text/javascript">
//    (function(){
//       emailjs.init("EXBJtKBHRblraxYsv");
//    })();
// </script>

let isModalOpen = false;
let contrastToggle = false;


function toggleContrast() {
  contrastToggle = !contrastToggle;
  if(contrastToggle) {
   document.body.classList += " dark-theme" 
  }
  else {
   document.body.classList.remove("dark-theme")
  }
}


function contact(event) {
 event.preventDefault();
 const loading = document.querySelector('.modal__overlay--loading')
 const success = document.querySelector('.modal__overlay--success')
 loading.classList += " modal__overlay--visible"

 emailjs
  .sendForm(
     'service_gizjigr',
     'template_j4y6w6p',
     event.target,
     'EXBJtKBHRblraxYsv'
  ).then(() => {
   loading.classList.remove("modal__overlay--visible");
   success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
    "The email service is temporarily unavailable. Please contact me directly on archerychinadiva@gmail.com"
    );
  })
}


function toggleModal () {
  if (isModalOpen) {
   isModalOpen = false;
   return document.body.classList.remove("modal--open") 
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}