import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    title: "All Notes",
    notes: [],
  },
  actions: {
    fetchNotes ({ commit }) {
      let notes = [
        {
          "createdTime": "2018-01-21T20:04:18.000Z",
          "fields": {
            "Coach": [
              "recDGQA0I6M3cZRZq"
            ],
            "Date": "2017-11-01",
            "Formatted Date": "Nov 2017",
            "Microchurch": "Building 33",
            "Microchurch Link": [
              "rec7qWpT68TshWaeA"
            ],
            "Month Group": "2017 11 - November",
            "Notes": "New MC\n",
            "Old Session ID": "Building 33 (Nov 2017)"
          },
          "id": "rec52RGaCI0BPN1vK"
        },
        {
          "createdTime": "2018-02-05T20:01:35.000Z",
          "fields": {
            "Coach": [
              "recDGQA0I6M3cZRZq"
            ],
            "Date": "2018-02-05",
            "Formatted Date": "Feb",
            "Microchurch": "Hold Fast Initiative",
            "Microchurch Link": [
              "recfSJ1i387BVizm9"
            ],
            "Month Group": "2018 2 - February",
            "Next Steps / Prayer Requests": "Follow up in Feb",
            "Notes": "Tried to get together but the theatre took priority",
            "Old Session ID": "Hold Fast Initia\u2026 (Feb)"
          },
          "id": "recGWJdutAw2rGr0s"
        },
        {
          "createdTime": "2018-02-05T20:00:36.000Z",
          "fields": {
            "Coach": [
              "recDGQA0I6M3cZRZq"
            ],
            "Date": "2018-02-05",
            "Formatted Date": "Feb",
            "Microchurch": "Healing Waters",
            "Microchurch Link": [
              "recE9mIiPrkL8BytM"
            ],
            "Month Group": "2018 2 - February",
            "Next Steps / Prayer Requests": "Try again next month",
            "Notes": "Tried reaching out, so response. Per usual.",
            "Old Session ID": "Healing Waters (Feb)"
          },
          "id": "recclSgo9iBYBvJXA"
        },
        {
          "createdTime": "2018-02-05T20:01:17.000Z",
          "fields": {
            "Coach": [
              "recDGQA0I6M3cZRZq"
            ],
            "Date": "2018-02-05",
            "Formatted Date": "Feb",
            "Microchurch": "Building 33",
            "Microchurch Link": [
              "rec7qWpT68TshWaeA"
            ],
            "Month Group": "2018 2 - February",
            "Next Steps / Prayer Requests": "Check in on planning and momentum",
            "Notes": "Met with Josh. Talked about generating movement in his microchurch. he is going to try to jump start things again.",
            "Old Session ID": "Building 33 (Feb)"
          },
          "id": "reclXbg6z3PuJm0Gc"
        }
      ];
      commit('setNotes', notes);
    }
  },
  mutations: {
    setNotes (state, notes) {
      state.notes = notes;
    },
  },
})
