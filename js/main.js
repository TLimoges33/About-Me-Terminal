const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projects = document.querySelector('#projects')
const aboutProjects = document.querySelector('#projects-content')
const skills = document.querySelector('#skills')
const skillsContent = document.querySelector('#skills-content')
const work = document.querySelector('#work')
const workContent = document.querySelector('#work-content')


about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
<<<<<<< Updated upstream
    
    width: '600px',
    height: '600px',
=======
    width: '400px',
    height: '400px',
>>>>>>> Stashed changes
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '600px',
    height: '600px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
<<<<<<< Updated upstream
})
=======
  contact.addEventListener('click', () => {
    const contactBox = new WinBox({
      title: 'Projects',
      width: '400px',
      height: '400px',
      top: 150,
      right: 50,
      bottom: 50,
      left: 250,
      mount: projectsContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
    contact.addEventListener('click', () => {
      const contactBox = new WinBox({
        title: 'Skills',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: skillsContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
      })
      contact.addEventListener('click', () => {
        const contactBox = new WinBox({
          title: 'Work',
          width: '400px',
          height: '400px',
          top: 150,
          right: 50,
          bottom: 50,
          left: 250,
          mount: workContent,
          onfocus: function () {
            this.setBackground('#00aa00')
          },
          onblur: function () {
            this.setBackground('#777')
          },
        })
})
>>>>>>> Stashed changes
