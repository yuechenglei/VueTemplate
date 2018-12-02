<template>
  <div class="container">
    <b-alert variant="success" show>{{ message }}</b-alert>
    <br>
    <button type="button" class="btn btn-primary">{{ msg }}</button>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Ping',
  props: ['message'], // pass message

  data() {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      const path = 'http://localhost:5000/ping';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    // this.getMessage();
  },
};

</script>
