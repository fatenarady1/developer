// ^ Write your JavaScript code here


const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

const themeButton = document.querySelector("#theme-toggle-button");
const htmlTag = document.querySelector("html");

const tabs = document.querySelectorAll("[data-filter]");
const contents = document.querySelectorAll("[data-category]");


const gearBtn = document.querySelector("#settings-toggle");
const gearSidebar = document.querySelector("#settings-sidebar");
const fontsBtns = document.querySelectorAll("[data-font]");





window.addEventListener("scroll",()=>{
   
    let activeSection = "";

    sections.forEach((section)=>{
        let sectionTop = section.offsetTop;
        if( window.scrollY>= (sectionTop - 150)){
            activeSection = section.getAttribute("id");
          
        }
    });

    links.forEach((link)=>{

         
        link.classList.remove("active");


        if (link.getAttribute('href').includes(activeSection)){

            link.classList.add("active");
        }
        
    });
});

// themeButton.addEventListener("click",()=>{

//     if (htmlTag.getAttribute("data-bs-theme") === "dark"){
            
//         htmlTag.setAttribute("data-bs-theme","light");
//     }
// else{
//     htmlTag.setAttribute("data-bs-theme","dark");
// }
// } );

//////

themeButton.addEventListener("click",()=>{
   
    htmlTag.classList.toggle("dark");
} );


tabs.forEach((tab)=>{

    tab.addEventListener("click", ()=>{
           
        contents.forEach((content)=>{

            content.classList.add("hidden");
            if(tab.dataset.filter ==="all"){
                  content.classList.remove("hidden");
            }
            else if(tab.dataset.filter === content.dataset.category){
                content.classList.remove("hidden");
            }
        });
        });

});



gearBtn.addEventListener("click",()=>{

    if(  gearSidebar.getAttribute("aria-hidden")==="true"){
        gearSidebar.setAttribute("aria-hidden","false");
         
        gearSidebar.classList.remove("translate-x-full");
    }
  else{

    gearSidebar.setAttribute("aria-hidden","true");
    gearSidebar.classList.add("translate-x-full");

  }

} );

fontsBtns.forEach((btn)=>{

    btn.addEventListener("click", ()=>{
        // if(btn.dataset.font==="alexandria"){
        //         htmlTag.style.fontFamily="Alexandria"
        // }
        // else if(btn.dataset.font==="tajawal"){
        //     htmlTag.style.fontFamily="Tajawal"
        // }

        // else if(btn.dataset.font==="cairo"){
        //     htmlTag.style.fontFamily="Cairo"
        // }

        switch (btn.dataset.font) {

            case "alexandria":
                htmlTag.style.fontFamily = "Alexandria";
                break;
        
            case "tajawal":
                htmlTag.style.fontFamily = "Tajawal";
                break;
        
            case "cairo":
                htmlTag.style.fontFamily = "Cairo";
                break;
        }
    });
});

