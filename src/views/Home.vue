<template>
  <div class="home">
    <Map />
    <CurrentTable />
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import CurrentTable from "@/components/Table.vue";

export default {
  name: "Home",
  components: {
    Map,
    CurrentTable
  }
};
</script>
<style scoped></style>
