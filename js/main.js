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
    lastSeen: 'oggi alle ore 10:30',
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
    lastSeen: 'oggi alle ore 10:30',
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
    lastSeen: 'oggi alle ore 10:30',
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
    lastSeen: 'oggi alle ore 10:30',
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
    activeContact: {},
    myUsername: myUsername,
    searchInput: '',
    filteredContacts: []

  },

  created() {
    this.activeContact = this.contacts[0];
  },

  methods: {
    contactChat: function(contact) {
      this.activeContact = contact;
    },

    sendMessage: function() {
      this.activeContact.chatHistory.push(
        {
          text: this.inputMessage,
          date: '22 Nov 2020',
          type: 'send'
        }
      )

      this.inputMessage = '';

      let oldCounter = this.counter;
      setTimeout( () => {
        this.contacts[oldCounter].chatHistory.push(
          {
            text: 'ciao',
            date: '22 Nov 2020',
            type: 'receive'
          })
      }, 3000);
    },

    filterContacts() {
      this.filteredContacts = this.contacts.filter( (element) => element.username.toLowerCase().includes(this.searchInput));
      return this.activeContact;
    }
  }

})
