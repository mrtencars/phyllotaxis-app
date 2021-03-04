<template>
  <div>
    <h3>Definition ({{name}})</h3>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Definition',
    props: ['name'],
  }
</script>