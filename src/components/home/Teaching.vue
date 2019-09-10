<template>
  <v-container
    id="teaching"
    tag="section"
  >
    <vue-markdown>
      {{teaching_text}}
    </vue-markdown>
  </v-container>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import teaching_text from '../../../public/static/teaching.md';

  export default {
    name: 'Teaching',
    data: () => {
      return {
        teaching_text: teaching_text
      }
    },
    components: {
      VueMarkdown
    }
  }
</script>
