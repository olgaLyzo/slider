const cities = {
  rostovAdm: {
    url: ["img/rostov/image-1.jpg","img/rostov/image-2.jpg","img/rostov/image-3.jpg"],  
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
  },
  sochi: {
    url: ["img/sochi/image-4.jpg","img/sochi/image-5.jpg","img/sochi/image-6.jpg"],
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
  },
  rostovPatr: {
    url: ["img/rostov2/image-7.jpg","img/rostov2/image-8.jpg","img/rostov2/image-9.jpg"],
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
  }
}

function initSlider() {
  
  const images = document.getElementById("images");
  const arrowArray = document.querySelectorAll(".arrows");
  const arrowRight = document.getElementById("slider-arrow-right");
  const arrowLeft = document.getElementById("slider-arrow-left");
  const dotArray = document.querySelectorAll(".slider-dot");
  
  const rostovAdmiral = document.getElementById("rostov-admiral");
  const sochiThieves = document.getElementById("sochi-thieves");
  const rostovPatriotic = document.getElementById("rostov-patriotic");
  const pagesArray = document.querySelectorAll(".page");
  
  
  const cityInfo = document.getElementById("city-info");
  const areaInfo = document.getElementById("area-info");
  const costInfo = document.getElementById("cost-info");
  const timeInfo = document.getElementById("time-info");
  
  let currentCity = cities.rostovAdm;
  let currentImageIndex = 0;
  
  
  //инициализация вкладок городов + инфы о них

  pagesArray.forEach(element => element.addEventListener('click', event => {
      if(document.querySelector('.active') !== null){
        document.querySelector('.active').classList.remove('active');
      }
      event.target.classList.add('active');
      const city = event.target.getAttribute("city");
      currentCity = cities[city];
      
      
      cityInfo.innerHTML = currentCity.city;
      timeInfo.innerHTML = currentCity.time;
      areaInfo.innerHTML = currentCity.area;
      images.setAttribute("src", currentCity.url[0]);
      document.querySelector(".active-dot").classList.remove("active-dot");
      document.querySelector(`[index="0"]`).classList.add("active-dot");
      
      
  }))    
 
      
      //инициализация стрелок + смена картинок
      
  document.getElementById("slider-arrow-right").addEventListener("click", function(){
            if(currentImageIndex + 1 < currentCity.url.length){
              currentImageIndex = currentImageIndex + 1;
              images.setAttribute("src", currentCity.url[currentImageIndex]); 
            }else{
              currentImageIndex = 0;
            }
            images.setAttribute("src", currentCity.url[currentImageIndex]);
            if(document.querySelector(".active-dot")){
              document.querySelector(".active-dot").classList.remove("active-dot");
            }
            document.querySelector(`[index="${currentImageIndex}"]`).classList.add("active-dot");
          })
            
  

  document.getElementById("slider-arrow-left").addEventListener("click", function(){
    if(currentImageIndex - 1 >= 0){
      currentImageIndex = currentImageIndex - 1;
      images.setAttribute("src", currentCity.url[currentImageIndex]);
    } else{
      currentImageIndex = currentCity.url.length - 1;
      images.setAttribute("src", currentCity.url[currentImageIndex]);
    }
    if(document.querySelector(".active-dot")){
      document.querySelector(".active-dot").classList.remove("active-dot");
    }
    document.querySelector(`[index="${currentImageIndex}"]`).classList.add("active-dot");
    })
  
  
  
  dotArray.forEach(element => element.addEventListener("click", event =>{
    if(document.querySelector(".active-dot") !== null){
      document.querySelector(".active-dot").classList.remove("active-dot");
    }
    event.target.classList.add("active-dot");
    const dotIndex = event.target.getAttribute("index");
    images.setAttribute("src", currentCity.url[dotIndex]);
  }))
  
  
  
    
      


  


      
      
   
}

document.addEventListener("DOMContentLoaded",initSlider);