// dichiaro l'array di contatti
const contacts = [

  {
    username: 'Michele',
    photo: 'resources/img/avatar_1.jpg',
    lastSeen: '10:30 Lun 20 Ago'
  },
  {
    username: 'Fabio',
    photo: 'resources/img/avatar_2.jpg',
    lastSeen: '10:30 Lun 20 Ago'
  },
  {
    username: 'Samuele',
    photo: 'resources/img/avatar_3.jpg',
    lastSeen: '10:30 Lun 20 Ago'
  },
  {
    username: 'Luisa',
    photo: 'resources/img/avatar_4.jpg',
    lastSeen: '10:30 Lun 20 Ago'
  }
]


const rootApp = new Vue ({
  el: '#root',

  data: {

    contacts: [...contacts]

  }
})
