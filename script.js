const viewAll = document.querySelector('.view-all')
const moreProjects = document.querySelectorAll('.not-visible')
const workSection = document.querySelector('#work')
let isVisible = false

viewAll.addEventListener('click', () => {
  if(!isVisible) {
    // if(window.innerWidth <= 944) {
    //   workSection.style.height = '250vh'
    // }
    moreProjects.forEach((project) => {
      project.style.display = 'flex'
    })
    
    isVisible = true
  } else {
    moreProjects.forEach((project) => {
      project.style.display = 'none'
    })
    isVisible = false
  }
})
