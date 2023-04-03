const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')



about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    
    width: '600px',
    height: '600px',
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
    title: 'Skills',
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
})
