<template>
  <h1>{{ title }} {{ gameId }}</h1>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div v-for="report in gameReport.details" :key="report.id" class="col-12">
        <div class="report-box" v-if="parseInt(gameId) === report.id">
          <img alt :src="report.img" />
          <p v-for="(reportText, index) in report.descr" :key="index">
            {{ reportText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  components: {},
  setup: () => {
    const title = ref("Game");
    const gameReport = reactive({
      details: [
        {
          img: require("../assets/game-play-1.jpg"),
          descr: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
          ],
          id: 1
        },
        {
          img: require("../assets/game-play-2.jpg"),
          descr: [
            "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
            "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
            "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
          ],
          id: 2
        },
        {
          img: require("../assets/game-play-3.jpg"),
          descr: [
            "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
            "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
            "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing."
          ],
          id: 3
        },
        {
          img: require("../assets/game-play-2.jpg"),
          descr: [
            "Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis",
            "Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.",
            "Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus."
          ],
          id: 4
        },
        {
          img: require("../assets/game-play-1.jpg"),
          descr: [
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.",
            "Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! Now fax quiz Jack! my brave ghost pled. Five quacking zephyrs jolt my wax bed.",
            "Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex."
          ],
          id: 5
        }
      ]
    });
    return { gameReport, title };
  },
  props: {
    gameId: {
      type: Number,
      required: true
    },
    descr: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  background: #0f60c9;
  color: #ffffff;
  padding: 1.5rem 0;
  text-align: center;
  font-weight: 900;
}

.container-fluid {
  background: url("../assets/report-bg.png") no-repeat;
  background-size: cover;
  .row {
    .col, .col-12{
      padding:0;
    }
    .report-box {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);
      background: #ffffff;
      max-width: 1000px;
      margin: 1em auto 1.85%;
      padding-bottom: 1em;
      img {
        margin-bottom: 1em;
        max-width: 100%;
      }
      p {
        padding: 0 2em;
        max-width: 50em;
        margin: auto;
        line-height: 2.1em;
        text-align: left;
      }
    }
  }
}
</style>
