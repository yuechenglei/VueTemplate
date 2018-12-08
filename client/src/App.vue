<template>
  <div id="app">
    <i-menu mode="horizontal" theme="dark" active-name="1">
      <menu-item name="1">
        Flight taxiing
      </menu-item>
    </i-menu>
    <div id="content">
      <myTimeline id="myTimeline"></myTimeline>
      <myIndex id="myIndex"></myIndex>
      <myMap id="myMap"></myMap>
      <!-- <router-view/> -->
    </div>
  </div>
</template>
<script>
import myTimeline from './components/header.vue'
import myMap from './components/map.vue'
import myIndex from './components/Books.vue'

const d3 = require('d3')


export default {
  name: 'App',
  components: { myTimeline, myMap, myIndex },

  mounted() {
    var self = this
    self.fnResize();
    window.onresize = function() {
      self.fnResize();
    }
  },

  methods: {
    fnResize() {
      var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
      if (deviceWidth >= 750) {
        deviceWidth = 750;
      }
      if (deviceWidth <= 320) {
        deviceWidth = 320;
      }
      document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    },
    async loadData() {
      this.$Loading.start();
      
      // let a = d3.json("../static/d1.json", function(error, data) {})
      // let b = d3.json("../static/d2.json", function(error, data) {})
      // await Promise.all([a, b]); //Concurrent request

      this.$Loading.finish();
    },


  },

  create() {
    this.loadData()

  }
};

</script>
<style lang="less">
@import "./style/base/base.vars.less";
@import "./style/base/style.less";
@import "./style/base/iview.less";

#app {
  position: absolute;
  height: 100%;
  width: 100%;

  #content {
    position: absolute;
    width: 100%;
    height: calc(~"100% - 50px");

    #myTimeline {
      position: absolute;
      left: 0;
      top: 80%;
      width: 60%;
      height: 20%;
      background: @color-bd;
    }

    #myIndex {
      position: absolute;
      left: 60%;
      top: 0;
      width: 40%;
      height: 100%; //background: @color-main;
    }

    #myMap {
      position: absolute;
      top: 0;
      left: 0;
      width: 60%;
      height: 80%;
    }
  }
}

</style>
