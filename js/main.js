// dati statici
const receive = 'received';
const send = 'sended';

const myUsername = {
  username: 'Giulia',
  photo: 'resources/img/avatar_io.jpg',
  status: ''
}


// dichiaro l'array di contatti
const contacts = [

  {
    username: 'Michele',
    photo: 'resources/img/avatar_1.jpg',
    lastSeen: '10:30 Lun 20 Ago',
    chatHistory: [
      {
        text: 'Hello, how r u?',
        date: '22 Nov 2020',
        type: 'receive'
      }
    ]
  },
  {
    username: 'Fabio',
    photo: 'resources/img/avatar_2.jpg',
    lastSeen: '10:30 Lun 20 Ago',
    chatHistory: [
      {
        text: 'Hello, how r u?',
        date: '22 Nov 2020',
        type: 'receive'
      }
    ]
  },
  {
    username: 'Samuele',
    photo: 'resources/img/avatar_3.jpg',
    lastSeen: '10:30 Lun 20 Ago',
    chatHistory: [
      {
        text: 'Hello, how r u?',
        date: '22 Nov 2020',
        type: 'receive'
      }
    ]
  },
  {
    username: 'Luisa',
    photo: 'resources/img/avatar_4.jpg',
    lastSeen: '10:30 Lun 20 Ago',
    chatHistory: [
      {
        text: 'Hello, how r u?',
        date: '22 Nov 2020',
        type: 'receive'
      }
    ]
  }
]


const rootApp = new Vue ({
  el: '#root',

  data: {

    inputMessage: '',
    contacts: [...contacts],
    counter: 0,
    myUsername: myUsername

  },
  methods: {
    contactChat: function(index) {
      this.counter = index;
    },
    sendMessage: function() {
      this.contacts[this.counter].chatHistory.push(
        {
          text: this.inputMessage,
          date: '22 Nov 2020',
          type: 'send'
        }
      )

      this.inputMessage = '';
    }
  }

})
