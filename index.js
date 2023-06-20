document.addEventListener("DOMContentLoaded", function () {
  //give error message
  const input = document.querySelector("#email");
  input.addEventListener("change", (e) => {
    console.log("this is e ---> ", e)
    const isValid = e.target.checkValidity();
    if(isValid==false){
        document.querySelector('#Invalid').style.display='block'
    } else 
    document.querySelector('#Invalid').style.display='none'
  });

  //open success page if input is valid
  document.querySelector("form").addEventListener("submit", function (event) {
    window.open("success-page.html");
    event.preventDefault();
    console.log(event);
  });
});
