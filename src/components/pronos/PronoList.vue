<template>
  <ion-list>
    <prono-list-item v-for="prono in pronos" :key="prono.id"
                     :prono="prono"/>
  </ion-list>
</template>

<script>
import {IonList} from '@ionic/vue';
import PronoListItem from './PronoListItem.vue';

export default {
  props: ["pronos"],
  components: {
    IonList,
    PronoListItem
  }

}
</script>

<style scoped>

</style>