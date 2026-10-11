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
const themeColorsGrid = document.querySelector("#theme-colors-grid");
const resetSettings = document.querySelector("#reset-settings");



let colors = [
    { 
        title: "Purple Blue",
        colorPrimary: "#6366f1",      
        colorSecondary: "#8b5cf6",      

      },
    { 
        title: "Pink Orange", 
        colorPrimary: "#ec4899",      
        colorSecondary: "#f97316",     
        

     },

    { 
    
     title: "Green Emerald",
     colorPrimary: "#10b981",      
     colorSecondary: "#059669", 

    },
    {
        title: "Blue Cyan",
        colorPrimary: "#3b82f6",      
        colorSecondary: "#06b6d4", 
   
    },
    {
        title:"Red Rose",
        colorPrimary: "#ef4444",      
        colorSecondary: "#f43f5e", 
    },
    {
        title: "Amber Orange",
        colorPrimary: "#f59e0b",      
        colorSecondary: "#ea580c", 
    }
];


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
               document.body.classList.remove("font-cairo");
               document.body.classList.remove("font-tajawal");
              document.body.classList.add ("font-alexandria");
                break;
        
            case "tajawal":
                document.body.classList.remove("font-cairo");
                document.body.classList.remove("font-alexandria");
                document.body.classList.add("font-tajawal");
                break;
        
            case "cairo":
             
            document.body.classList.remove("font-alexandria");
            document.body.classList.remove("font-tajawal");
            document.body.classList.add("font-cairo");
                break;
        }
    });
});


colors.forEach((color)=>{

    const btnColor = document.createElement("button");
    btnColor.classList.add("shadow-sm","border-2","border-slate-200","w-12","h-12","rounded-full", "transition-transform");
    btnColor.style.background=`linear-gradient(135deg, ${color.colorPrimary}, ${color.colorSecondary})`;
   
    themeColorsGrid.appendChild(btnColor);

    btnColor.addEventListener("click", ()=>{
        let btnsCs = document.querySelectorAll("#theme-colors-grid button");
        btnsCs.forEach((btn)=>{
            btn.classList.remove("ring-2","ring-primary", "ring-offset-2","ring-offset-white","ring-offset-slate-900");
       
        })
         htmlTag.style.setProperty("--color-primary",color.colorPrimary);
         htmlTag.style.setProperty("--color-secondary",color.colorSecondary);
         btnColor.classList.add("ring-2", "ring-primary", "ring-offset-2","ring-offset-white");
         if(htmlTag.classList.contains("dark")){
            btnColor.classList.remove("ring-offset-white");
            btnColor.classList.add("ring-offset-slate-900");
        }
    
        });
    
        
    if(htmlTag.classList.contains("dark")){
        btnColor.classList.remove("border-slate-200");
        btnColor.classList.add("border-slate-700");
    }

    });


    // reset settings
    resetSettings.addEventListener("click",()=>{

        document.body.classList.remove("font-cairo");
        document.body.classList.remove("font-alexandria");
        document.body.classList.add("font-tajawal");
        
        htmlTag.style.setProperty("--color-primary", " #6366f1" );
        htmlTag.style.setProperty("--color-secondary","#8b5cf6");

    
        gearSidebar.setAttribute("aria-hidden","true");
        gearSidebar.classList.add("translate-x-full");
    
      

    });