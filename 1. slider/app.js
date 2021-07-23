(function() {
  const slidesInfo = [{
    title: "Football",
    imgURL: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Tennis",
    imgURL: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Basketball",
    imgURL: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  },
  {
    title: "Snooker",
    imgURL: "https://images.unsplash.com/photo-1556329754-9420aeb663c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "American Football",
    imgURL: "https://images.unsplash.com/photo-1537882111161-c3379a777c8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  }];
  
  const slider = document.querySelector('#slider')

  makeSlides(slidesInfo).forEach(el => {
    slider.insertAdjacentElement("beforeend", el)
  })
  
  slider.childNodes[3].classList.add("active")
  
  slider.addEventListener("click", (el) => {
    disactiveAll()
    el.target.classList.add("active")
  })
  
  function disactiveAll() {
    for(const slide of slider.children) {
      slide.classList.remove("active")
    }
  }
  
  function makeSlides(slides) {
    return slides.map(el => {
      const div = document.createElement('div')
      const h3 = document.createElement("h3")

      div.classList.add("slide")
      div.setAttribute("style", `background-image: url('${el.imgURL}');`)
      h3.innerText = el.title
      div.appendChild(h3)
      return div
    })
  }
})()