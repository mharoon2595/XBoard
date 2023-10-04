let magazines = [
    "https://flipboard.com/@thenewsdesk/the-latest-on-coronavirus-covid-19-t82no8kmz.rss",
    "https://flipboard.com/@dfletcher/india-tech-b2meqpd6z.rss",
    "https://flipboard.com/@thehindu/sportstarlive-rj3ttinvz.rss"
  ];
  
//import magazines from "../data/magazines.js"

let url="https://api.rss2json.com/v1/api.json?rss_url=";

async function getFeed(mag){
    
    let fullURL=await fetch(url+mag);
    let jsonURL=await fullURL.json();
    //console.log(jsonURL);
    return jsonURL
}

//getFeed();

async function setAccordions(){
  let newsAdd=document.getElementById("news");
  let a=await getFeed(magazines[0])
    newsAdd.innerHTML=` <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">
          ${a.feed.title}
        </button>
      </h2>
      <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" id=addCar${1}>
    </div>
   </div>
   </div>
   </div>`

  for(let i=1;i<magazines.length;i++){
     let b=await getFeed(magazines[i]);
     let ab=document.getElementById("accordionExample");
     //let abc=document.getElementById("getCarousel");
     ab.innerHTML+=`<div class="accordion-item">
     <h2 class="accordion-header">
       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i+1}" aria-expanded="false" aria-controls="collapseTwo">
       ${b.feed.title}
       </button>
     </h2>
     <div id="collapse${i+1}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
       <div class="accordion-body" id=addCar${i+1}>
       </div>
     </div>
   </div>
 `
     
     //b.items.forEach((items)=>console.log(items))
     
     }
     setCarousel();
    }

     async function setCarousel(){
      for(let i=0;i<magazines.length;i++){
        let c=await getFeed(magazines[i]);
        let d=new Date(c.items[0].pubDate)
        let date=(d.toISOString().replace(/T.*/,'').split('-').reverse().join('-'))
        let getAccordion=document.getElementById("addCar"+parseInt(i+1));
        getAccordion.innerHTML=`<div id="carouselExample${i+1}" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" id="addCard${i+1}">
          <div class="carousel-item active">
          <a href=${c.items[i].link}>
            <div class="card mx-auto">
        <img class="card-img-top responsive" src=${c.items[i].enclosure.link} alt="Card image cap">
        <div class="card-body">
            <p class="card-text"><strong>${c.items[i].title}</strong></p>
            <div id="text1">${c.items[i].author}  <span class="dot"></span>  ${date}
          </div><br>
          <div>${c.items[i].description}</div>
        </div>
        </a>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample${i+1}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample${i+1}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>`

  
        
      for(let j=1;j<c.items.length;j++){
      //console.log('addCar'+1);
       let cards=c.items[j];
       let d=new Date(cards.pubDate)
       let date=(d.toISOString().replace(/T.*/,'').split('-').reverse().join('-'))
       let addCards=document.getElementById("addCard"+parseInt(i+1));
       addCards.innerHTML+=`<div class="carousel-item">
       <a href=${cards.link}>
       <div class="card mx-auto">
          <img class="card-img-top responsive" src=${cards.enclosure.link} alt="Card image cap" >
          <div class="card-body">
           <p class="card-text"><strong>${cards.title}</strong></p>
           <div id="text2">${cards.author}   <span class="dot"></span>  ${date}
          </div><br>
          <div>${cards.description}</div>
          </div>
          </a>
        </div>         
       </div>`
       //console.log(cards)
        //console.log(getAccordion);
        
      /*
      for(let i=0;i<magazines.length;i++){
        //console.log(a.items);
        console.log("addCar"+parseInt(i+1));
        let getAccordion=document.getElementById("addCar"+parseInt(i+1));
        console.log(getAccordion);
        getAccordion.innerHTML=`<div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
          </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`
      }
    }
    setCarousel();

    function setCards(){

    }
    
  }
}
  setCarousel();
}

*/


       }
}
     }
     

setAccordions();


//setCarousel();
/*
let newsAdd=document.getElementById("news");
    newsAdd.innerHTML=` <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="" class="d-block w-100" alt="Slide"}">
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
        </button>
        </div> 
      </div>
    </div>
   </div>`
*/
      
