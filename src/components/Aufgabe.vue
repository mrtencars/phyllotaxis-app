<template>
  <div>
    <h3 class="text-pink-500">Aufgabe</h3>
    <p><slot></slot></p>
  </div>
</template>

<script>

export default {
  name: 'Aufgabe',
  props: ['name'],
  components: {
  },
  data() {
    return {
      zeigeHinweis: false,
    }
  },
  methods:{
  }

}
</script>