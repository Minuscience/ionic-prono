<template>
  <div>
    <p>{{ cote }}</p>
    <h2 class="ion-text-center">{{ Name }}</h2>
    <p> analyse: {{ analyse }}</p>
    <div v-if="res_prono === 1">
      1
    </div>
    <div v-else-if="res_prono === N">
      N
    </div>
    <div v-else-if="res_prono === 2">
      2
    </div>
    <div v-else>
      NA
    </div>


    <p backgroundColor="#673AB7"> résultat: {{ resultat }}</p>

  </div>
</template>

<script>

export default {
  components: {},
  props: [
    "id",
    "name",
    "type",
    "typeId",
    "competition",
    "competitionId",
    "analyse",
    "cote",
    "resultat",
    "res_prono"
  ]
}
</script>