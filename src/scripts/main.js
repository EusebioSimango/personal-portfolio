(() => {
  const aboutSection = document.querySelector(".about-section")
  const tabsContainer = document.querySelector(".about-tabs")

  tabsContainer.addEventListener("click", event => {
    if ( event.target.classList.contains("tab-item") && 
    !event.target.classList.contains("active")) {
      console.log("Changing...")
      tabsContainer.querySelector(".active").classList.remove("active", "outer-shadow")
      const target = event.target.getAttribute("data-target")
      event.target.classList.add("tab-content", .active").classList.
      aboutSection.querySelector(target).classList.add("active", "outer-shadow")
 
    } 
  })
})()