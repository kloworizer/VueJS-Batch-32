<template>
  <v-container class="ma-0 pa-0" grid-list-sm>
    <div class="text-right">
      <v-btn small text to="/blogs" class="blue--text">
        All Blogs <v-icon>mdi-chevron-rrright</v-icon>
      </v-btn>

      <v-layout wrap>
        <blog-item-component
          v-for="blog in blogs"
          :key="`blog-${blog.id}`"
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
      blogs: [],
    };
  },
  components: {
    "blog-item-component": BlogItemComponent,
  },
  created() {
    const api = this.apiDomain + "/api/v2/blog/random/4";
    this.axios.get(api).then((response) => {
      this.blogs = response.data.blogs
    })
  },
}
</script>
