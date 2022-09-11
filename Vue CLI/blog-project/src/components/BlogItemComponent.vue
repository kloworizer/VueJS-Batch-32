<template>
  <v-flex xs6>
    <v-card :to="`blog/${blog.id}`">
      <v-img
        :src="
          blog.photo ? apiDomain + blog.photo : 'https://picsum.photos/200/300'
        "
        class="white--text"
        height="200px"
      >
        <v-card-title
          class="fill-height align-end"
          v-text="blog.title"
        ></v-card-title>
      </v-img>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      apiDomain: "http://demo-api-vue.sanbercloud.com",
    };
  },
  props: ['blog']
};
</script>
