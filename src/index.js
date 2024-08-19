const answerBtn = document.querySelector(".answer");

answerBtn.addEventListener("click", ()=>{
    const hiddenPara = document.getElementById("qAnswer");
    hiddenPara.classList.toggle("hidden");

    const chevron = document.getElementById("chevron");
    chevron.classList.toggle("-rotate-180");
})