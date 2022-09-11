<template>
  <v-container class="ma-0 pa-0" grid-list-sm>
    <div class="text-right">
      <v-layout wrap>
        <blog-item-component
          :blog="blog"
        ></blog-item-component>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import BlogItemComponent from "@/components/BlogItemComponent.vue"
export default {
  data() {
    return {
      apiDomain: "http://demo-api-vue.sanbercloud.com",
      blog: {},
    };
  },
  components: {
    "blog-item-component": BlogItemComponent,
  },
  methods: {
    go() {
      let { id } =  this.$route.params
      const api =  + `${this.apiDomain}/api/v2/blog/${id}`
      this.axios.get(api).then((response) => {
        let { blog } = response.data;
        this.blog = blog;
      });
    },
  },
  created() {
    this.go();
  },
};
</script>
