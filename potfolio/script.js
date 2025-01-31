/* ===================================  typing animation  =================================== */
var typed = new Typed(".typing", {
    strings: ["Web Designer","UI/UX Designer","Full Stack Web Developer🚀","Web Designer",],
    typeSpeed:100,
    BackSpeed:80,
    loop:true

})
/* ===================================  aside  =================================== */
const nav = document.querySelector(".nav"),
      navList = nav.querySelector("li"),
      totalNavList = navList.length ;
      for(let i=0; i<totalNavList; i++)
      {
         console.log(navList[i])
        const a = navList[i].querySelector("a");
        a.addEventListener("click" , function()
        {
          for(let j=0; j<totalNavList; j++)
          {
            navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active")
        })
      }