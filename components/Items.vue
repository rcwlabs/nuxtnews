<template>
  <div>
  <div class="f1 code">Hey what is up</div>
  <ul class="list pa2">
    <li v-for="item in items" :key="item.id">{{ item.title }}</li>
  </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: mapState([
      'items'
    ])
  }
</script>
