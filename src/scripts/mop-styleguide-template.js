(function(mopsgt) {
  'use strict'
  mopsgt = {
    initialize: function () {
      let mainEl = mopsgt.mainEl = document.getElementById('kss-main')
      let sidebar = mopsgt.sidebar = mainEl.querySelector(".kss-sidebar")
      mainEl.querySelector(".sidebar-toggle").addEventListener('click', (e) =>  {
        e.preventDefault()
        mopsgt.showNav()
      })
      sidebar.querySelector(".button--close").addEventListener('click', (e) =>  {
        e.preventDefault()
        mopsgt.hideNav()
      })
      document.body.addEventListener("click", (e) => {
        // When you click outside the sidebar, and you didn't click on a link the sidebar should close.
        let linkClicked = (e.target.tagName.toLowerCase() === "a")
        let clickWithinSidebar = e.target.closest('.kss-sidebar')
        if (!linkClicked) {
          e.preventDefault()
          if (!clickWithinSidebar && !e.target.closest('.sidebar-toggle')) {
            mopsgt.hideNav()
          }
        }
      })
      sidebar.querySelector('.kss-nav > ul > li').addEventListener('click', () => {
        sidebar.dataset.active = this
      })
      let menuChildToggles = mainEl.querySelectorAll('.kss-sidebar .kss-nav > ul > li .kss-nav__menu-child-actuator')
      if(menuChildToggles.length > 0) {
        menuChildToggles.forEach((item) => {
          item.addEventListener('click', (e) => {
            e.preventDefault()
            let parentMenu = e.target.closest('.kss-nav__menu-item')
            console.log("hi", parentMenu)
            mopsgt.toggleElement(parentMenu)
          })
        })
      }
      let markupToggles = mainEl.querySelectorAll('.component_details .controls .markup_toggle')
      if(markupToggles.length > 0) {
        markupToggles.forEach((item) => {
          item.addEventListener('click', (e) => {
            e.preventDefault()
            mopsgt.showModal("Markup", e.target.closest('.component_details').querySelector('.kss-markup').innerHTML)
          })
        })
      }
      let modToggles = mainEl.querySelectorAll('.component_details .controls .modifiers_toggle')
      if(modToggles.length > 0) {
        modToggles.forEach( (item) => {
          item.addEventListener('click', (e) => {
            e.preventDefault()
            mopsgt.showModal("Variants", e.target.closest('.component_details').querySelector('.kss-modifier__wrapper').innerHTML)
          })
        })
      }
      let menuItems = mainEl.querySelectorAll(".kss-sidebar .kss-nav__menu .kss-nav__menu-item")
      if(menuItems.length > 0) {
        menuItems.forEach((item) => {
          if (
            item.getAttribute("class")
            && mainEl.querySelector(".kss-header h1").id
            && mopsgt.slugify( mainEl.querySelector(".kss-header h1").id) === kss.slugify( item.getAttribute("class"))
          ){
            item.classList.add("active")
            mainEl.querySelector(".kss-sidebar").dataset.active = item
            mopsgt.showModal()
          }
        })
      }
      mopsgt.buildModal()
    },
    buildModal: () => {
      let modalBackdrop = mopsgt.modalBackdrop = document.createElement('div')
      let modal = mopsgt.modal = document.createElement('div')
      let modalHeader = mopsgt.modalHeader = document.createElement('div')
      let modalTitle = mopsgt.modalTitle = document.createElement('h1')
      let modalCloseButton = mopsgt.modalCloseButton = document.createElement('a')
      let modalContent = mopsgt.modalContent = document.createElement('div')
      let modalBody = mopsgt.modalBody = document.createElement('div')
      modalBackdrop.classList.add('modal__backdrop')
      modal.classList.add('modal')
      modalContent.classList.add('modal__content')
      modalHeader.classList.add('modal__header')
      modalTitle.classList.add('modal__title')
      modalCloseButton.classList.add('modal__close')
      modalBody.classList.add('modal__body')
      modalContent.appendChild(modalHeader)
      modalContent.appendChild(modalBody)
      modalHeader.appendChild(modalTitle)
      modalHeader.appendChild(modalCloseButton)
      modal.appendChild(modalContent)
      document.body.appendChild(modalBackdrop)
      document.body.appendChild(modal)
      modalBackdrop.addEventListener('click', (e) => {
         let clickedBackdrop = e.target === modalBackdrop
         console.log('clickedBackdrop', clickedBackdrop)
         if (clickedBackdrop) {
           mopsgt.hideModal()
         }
      })
      modalCloseButton.addEventListener('click', (e) => {
        e.preventDefault()
        mopsgt.hideModal()
      })
    },
    setModalContent: (title, htmlString) => {
      mopsgt.modalTitle.textContent = title
      mopsgt.modalBody.innerHTML = htmlString
    },
    showModal: (title, htmlString) => {
      if (title || htmlString) {
        mopsgt.setModalContent(title, htmlString)
      }
      document.body.classList.add('modal-is-active')
    },
    hideModal: () => {
      document.body.classList.remove('modal-is-active')
    },
    slugify: (text) => {
      return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
    },
    toggleSidebar: () => {
      mopsgt.mainEl.classList.toggle('nav-active')
      mopsgt.sidebar.classList.toggle('active')
    },
    showNav: () => {
      mopsgt.mainEl.classList.add('nav-active')
      mopsgt.showElement(mopsgt.sidebar)
    },
    hideNav: () => {
      console.log('hideNav')
      mopsgt.mainEl.classList.remove('nav-active')
      mopsgt.hideElement(mopsgt.sidebar)
    },
    toggleElement: (el) => {
      console.log('toggleElement', el)
      el.classList.toggle("active")
    },
    showElement: (el) => {
      console.log('showElement', el)
      el.classList.add("active")
    },
    hideElement: (el) => {
      console.log('closeElement', el)
      el.classList.remove("active")
    },
  }
  document.addEventListener("DOMContentLoaded", () => {
    mopsgt.initialize()
  })
}(window.mopsgt = {}));
