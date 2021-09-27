var allSlide = document.querySelectorAll(".slide")
const current = allSlide.length
const z = 1.5
// khoi tao
const activeElement = document.querySelector(".active")
function handle (activeElement){
  var temp = [...allSlide]
      var index = temp.indexOf(activeElement)
      var i = 0
      var next = []
      var index_temp = index;
      while( i < Math.floor(allSlide.length/2) ){
        if ( index_temp > allSlide.length  - 2)
          index_temp = -1
        next.push(temp[index_temp + 1])
        index_temp++;
        i++;
      }
      next.forEach((item, index) => {
        item.style.transform  = `translate3d(${(index + 1) * 50}%,${0},${-(100 + index * 1.5*100 )}px)`
      })
      var pre = []
      var j = 0;
      var indexPre = index - 1
      while( j < Math.floor(allSlide.length/2) ){
        if ( indexPre < 0){
          indexPre = allSlide.length - 1
        }
        pre.push(temp[indexPre])
         indexPre--;
        j++;
      }
      pre.forEach((item, index) => {
        item.style.transform  = `translate3d(${-(index + 1) * 50}%,${0},${-(100 + index * 1.5*100 )}px)`
      })
}
handle(activeElement)
allSlide.forEach(item=>{
  item.addEventListener("click", e => {
    document.querySelector(".active").classList.remove("active")
    e.currentTarget.classList.add("active")
    handle(e.currentTarget)
  })
})  




// container-child-private
const container = document.querySelector(".container_1-child-1")
const listContainer = document.querySelectorAll(".container_1-child .child")
const category = document.querySelectorAll(".category__link")
document.addEventListener("DOMContentLoaded", () => {
  listContainer.forEach( (item,index) => {0
    item.style.transform = `translateX(${index * 120}%)`
  })
})
category.forEach((item) => {
  item.addEventListener("click", (e)=> {
      document.querySelector(".active-chose").classList.remove("active-chose")
      e.currentTarget.parentElement.classList.add("active-chose")
      const currentIndex = [...category].indexOf(e.currentTarget);
      container.style.transform = `translateX(${-currentIndex * 120}%)`
  })  
})