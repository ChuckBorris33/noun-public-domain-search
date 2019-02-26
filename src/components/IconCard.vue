<template>
  <v-flex xs2 text-xs-center>
    <a :href="getLink(iconData.permalink)" target="_blank">
      <img
        :src="iconData.preview_url"
        class="image"
        alt="lorem"
        width="50%"
        height="auto"
      />
    </a>
    <div>
      <a :href="getLink(iconData.uploader.permalink)" target="_blank">
        {{ iconData.uploader.name }}
      </a>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "IconCard",
  props: {
    iconData: {
      type: Object,
      required: true
    }
  },
  methods: {
    getLink(relativeUrl) {
      return `https://thenounproject.com${relativeUrl}`;
    }
  }
};
</script>
