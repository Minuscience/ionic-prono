<template>
  <form @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Nom</ion-label>
        <ion-input v-model="inputName" type="text"/>
      </ion-item>

      <ion-item>
        <ion-label>Type</ion-label>
        <ion-select placeholder="type" v-model="inputType">
          <ion-option key="1" >FOOTBALL</ion-option>
          <ion-option key="2">TENNIS</ion-option>
          <ion-option key="3">BASKETBALL</ion-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label>Compétition</ion-label>
        <ion-select placeholder="compet" v-model="inputCompet">
          <ion-option key="1" >FOOTBALL</ion-option>
          <ion-option key="2">TENNIS</ion-option>
          <ion-option key="3">BASKETBALL</ion-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Cote</ion-label>
        <ion-input v-model="inputCote" type="decimal"/>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Analyse</ion-label>
        <ion-textarea cols="5" v-model="inputAnalyse"></ion-textarea>
      </ion-item>

    </ion-list>

    <ion-button type="submit" expand="full" color="success">Save</ion-button>
  </form>
</template>

<script>
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue';

export default {
  data() {
    return {
      inputName: "",
      // inputType: "",
      // inputCompet: "",
      inputCote: "",
      inputAnalyse: ""

    }
  },
  emits: ["save-prono"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
  },
  methods: {
    winner() {
      if (this.cote > 1)
        return '1'
      else if (this.cote < 1)
        return '2'
      else
        return 'N'
    },
    submitForm() {
      const pronoData = {

        name: this.inputName,
        // type: this.typeInpup,
        // typeId: this.typeId,
        // competition: this.competition,
        // competitionId: this.competitionId,
        analyse: this.inputAnalyse,
        cote: this.inputCote,
        // resultat: this.i,
        res_prono: this.winner()

      };
      this.$emit("save-prono", pronoData);
    }
    }
  }
</script>