<template>
  <v-container
    id="article"
    tag="section"
  >
    <vue-markdown :source="articleText">
    </vue-markdown>
  </v-container>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'Article',
    data: () => {
      return {
        articleText: '',
        articleLoaded: false
      }
    },
    props: [
      'static_page', 
      // 'headerimg'
    ],
    mounted: function () {
      let link = 'static/' + this.static_page
      let vm = this
      this.$http.get(link).then((response) => {
        vm.articleText = response.body
        vm.articleLodaed = true
        console.log("vm is ", vm)
        console.log(" and its article text is ", vm.articleText)
      })
    },
    components: {
      VueMarkdown
    }
  }
</script>
