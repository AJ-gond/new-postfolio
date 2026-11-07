let body = document.querySelector("body");

      
    //    Let's Talk Button


let letsTalkBtn = body.querySelectorAll(".wt-Talk-btn");

function letsTalk(){
    window.open("https://wa.me/919073110301?text=Hello%20Abhijeet%2C%20I%20found%20your%20portfolio.",
    "_blank")
};

letsTalkBtn.forEach(e=>{
   e.addEventListener("click", ()=>{
     letsTalk();
   })
})


    //  View My Work


    let viewMyWorkBtn = body.querySelectorAll(".view-my-work-btn");

     function myWork(){
          window.open("work.html", "_blank")
     }

    viewMyWorkBtn.forEach(e=>{
         e.addEventListener("click", ()=>{   
       myWork();
       })
    })


    //   Project Section 

    let projectDiv = body.querySelector(".projects");
    let previusbtn = body.querySelector(".previus") ;
    let projectBox = body.querySelectorAll(".project-box");
   
let indexdiv=[];
let start = 2;
let end;

projectBox.forEach((e, index)=>{
   
  
  if(e.classList.contains("active")){
     indexdiv.push(index);
    
  }

})

let timer = setInterval(()=>{
      start = 1+start;
      let addindex = start;
      let box = projectBox[addindex]
       indexdiv.push(addindex);
      
      box.classList.add("active");
   let endindex =  indexdiv.shift();
    let endbox = projectBox[endindex]
   
    endbox.classList.remove("active")
   if(addindex==5){
    start = -1;
    
   }
    },4000);

    previusbtn.addEventListener("click", ()=>{
     
      
    })

