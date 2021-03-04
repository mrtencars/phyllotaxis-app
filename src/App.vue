<template>
  <Definition name="Zylinderprojektion">
    Eine Zylinderprojektion macht schöne Sachen.
  </Definition>
  <Aufgabe>
    Bitte wasche Deine Hände!
    <Hinweis>Benutze die Toilette!</Hinweis>
  </Aufgabe>
</template>

<script>
import Definition from './components/Definition.vue'
import Aufgabe from './components/Aufgabe.vue'
import Hinweis from "@/components/Hinweis";

export default {
  name: 'App',
  components: {
    Definition,Aufgabe,Hinweis
  }
}
</script>
