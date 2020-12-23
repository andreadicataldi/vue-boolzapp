let app = new Vue({
  el: "#app",
  data: {
    msg: "",
    search: "",
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
    activeContact: 0,
    lastAccessData: "",
  },
  methods: {
    toggleMenu() {
      var x = document.getElementById("menu");
      if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
    },
    lastAccess() {
      const now = dayjs().format("HH:mm:ss");
      this.lastAccessData = now;
    },
    setActiveContact(index) {
      this.lastAccessData = "";
      this.activeContact = index;
    },
    sendMsg() {
      const now = dayjs().format("DD/MM/YYYY HH:mm:ss");
      this.filteredContact[this.activeContact].messages.push({
        date: now,
        text: this.msg,
        status: "sent",
      });
      this.msg = "";
      setTimeout(this.receiveMsg, 1000);
    },
    receiveMsg() {
      const now = dayjs().format("DD/MM/YYYY HH:mm:ss");
      this.filteredContact[this.activeContact].messages.push({
        date: now,
        text: "Ok",
        status: "received",
      });
      this.lastAccess();
      this.contacts[this.activeContact].date = this.lastAccessData;
    },
  },
  computed: {
    filteredContact() {
      return this.contacts.filter((contactFilter) => {
        return contactFilter.name
          .toLowerCase()
          .match(this.search.toLowerCase());
      });
    },
  },
});
