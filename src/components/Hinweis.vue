<template>
  <div>
    <button class="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" @click="schalteHinweis">Hinweis</button>
    <div v-if="zeigeHinweis">
      <h4>Hinweis</h4>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        zeigeHinweis: false,
      }
    },
    methods: {
      schalteHinweis(){
        this.zeigeHinweis = !this.zeigeHinweis
      }
    }
  }
</script>