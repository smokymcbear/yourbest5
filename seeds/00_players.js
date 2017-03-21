
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      return Promise.all([
        knex('players').insert([
          {
            id: 1,
            name: "Michael Jordan",
            image: "",
            ppg: 30.1,
            apg: 5.3,
            rpg: 6.2,
            bpg: 0.8,
            spg: 2.3,
            tpg: 2.7,
            fgp: .497,
            ftp: .835,
            tpp: .327,
          },
          {
            id: 2,
            name: "Magic Johnson",
            image: '',
            ppg: 19.5,
            apg: 11.2,
            rpg: 7.2,
            bpg: 0.4,
            spg: 1.9,
            tpg: 3.9,
            fgp: .520,
            ftp: .848,
            tpp: .303,
          },
          {
            id: 3,
            name: "Larry Bird",
            image: '',
            ppg: 24.3,
            apg: 6.3,
            rpg: 10.0,
            bpg: 0.8,
            spg: 1.7,
            tpg: 3.1,
            fgp: .496,
            ftp: .886,
            tpp: .376,
          },
          {
            id: 4,
            name: "Kobe Bryant",
            image: '',
            ppg: 25.0,
            apg: 4.7,
            rpg: 5.2,
            bpg: 0.5,
            spg: 1.4,
            tpg: 3.0,
            fgp: .447,
            ftp: .837,
            tpp: .329,
          },
          {
            id: 5,
            name: "Hakeem Olajuwon",
            image: '',
            ppg: 21.8,
            apg: 2.5,
            rpg: 11.1,
            bpg: 3.1,
            spg: 1.7,
            tpg: 3.0,
            fgp: .512,
            ftp: .712,
            tpp: .202,
          },
          {
            id: 6,
            name: "Shaquille O' Neal",
            image: '',
            ppg: 23.7,
            apg: 2.5,
            rpg: 10.9,
            bpg: 2.3,
            spg: 0.6,
            tpg: 2.7,
            fgp: .582,
            ftp: .527,
            tpp: .045,
          },
          {
            id: 7,
            name: "LeBron James",
            image: '',
            ppg: 27.1,
            apg: 7.0,
            rpg: 7.2,
            bpg: 0.8,
            spg: 1.7,
            tpg: 3.4,
            fgp: .500,
            ftp: .740,
            tpp: .343,
          },
          {
            id: 8,
            name: "Allen Iverson",
            image: '',
            ppg: 26.7,
            apg: 6.2,
            rpg: 3.7,
            bpg: 0.2,
            spg: 2.2,
            tpg: 3.6,
            ftp: .780,
            fgp: .425,
            tpp: .313,
          },
          {
            id: 9,
            name: "Charles Barkley",
            image: '',
            ppg: 22.1,
            apg: 3.9,
            rpg: 11.7,
            bpg: 0.8,
            spg: 1.5,
            tpg: 3.1,
            fgp: .541,
            ftp: .735,
            tpp: .266,
          },
          {
            id: 10,
            name: "Tim Duncan",
            image: '',
            ppg: 19.0,
            apg: 3.0,
            rpg: 10.8,
            bpg: 2.2,
            spg: 0.7,
            tpg: 2.4,
            fgp: .506,
            ftp: .696,
            tpp: .179,
          }
        ])
      ]);
    }).then( () => {
          return knex.raw("SELECT setval('players_id_seq', (SELECT MAX(id) FROM players));")
        })
};
