<template>
  <div id="table">
    <h1>{{ title }}</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <table>
            <thead>
              <tr>
                <th
                  @click="sort('name')"
                  :class="[sortBy === 'name' ? sortDirection : '']"
                >
                  Team
                </th>
                <th
                  @click="sort('win')"
                  :class="[sortBy === 'win' ? sortDirection : '']"
                >
                  Win
                </th>
                <th
                  @click="sort('loss')"
                  :class="[sortBy === 'loss' ? sortDirection : '']"
                >
                  Loss
                </th>
                <th
                  @click="sort('points')"
                  :class="[sortBy === 'points' ? sortDirection : '']"
                >
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(teams, index) in sortedPlayer" :key="index">
                <td>{{ teams.name }}</td>
                <td>{{ teams.win }}</td>
                <td>{{ teams.loss }}</td>
                <td>{{ teams.points }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      player: [
        { name: "Player 1", loss: 2, win: 10, points: 3 },
        { name: "Player 2", loss: 2, win: 3, points: 5 },
        { name: "Player 3", loss: 2, win: 9, points: 5 },
        { name: "Player 4", loss: 2, win: 5, points: 6 },
        { name: "Player 5", loss: 2, win: 4, points: 8 }
      ],
      sortBy: "name",
      sortDirection: "asc",
      title: "Current Standing"
    };
  },
  methods: {
    sort: function(s) {
      if (s === this.sortBy) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      }
      this.sortBy = s;
    }
  },
  computed: {
    sortedPlayer: function() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.player.sort((p1, p2) => {
        let modifier = 1;
        if (this.sortDirection === "desc") modifier = -1;
        if (p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier;
        if (p1[this.sortBy] > p2[this.sortBy]) return modifier;
        return 0;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
body {
  background-color: grey;
}
#table {
  margin-bottom: 2em;
  h1 {
    color: #0438ad;
    padding: 1.5rem 0;
    text-align: center;
    font-weight: 900;
  }
  table {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
    background: #ffffff;

    tr {
      transition: ease-in-out;
      &:nth-of-type(even) {
        background: #ececec;
      }
      &:hover,
      &:active {
        background: #066d04;
        border: 2px solid #066d04;
        &th:hover,
        &th:active {
          color: #ffffff;
        }
      }
      th {
        font-size: 1.2em;
        color: #fff;
        line-height: 1.4;
        text-transform: uppercase;
        background-color: #36304a;
        max-width: 100%;
        width: 20em;
        padding: 0.5em 0;
        cursor: pointer;
        &:active {
          cursor: progress;
        }

        &:hover {
          background-color: #484848 !important;
        }
      }
      td {
        font-size: 1.2em;
        color: #808080;
        line-height: 1.4;
        padding: 1em 0;
        &:hover,
        &:active {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
