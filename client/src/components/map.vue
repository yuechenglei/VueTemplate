<template>
  <div ref="mapContainer">
    <!-- <div ref:"mapContiner"> -->
  </div>
</template>
<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  // components: { myHeader, myContent, myFooter },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getData()
    // console.log(this.$refs.mainTable)
    // console.log(this.$refs.mapContainer)

    this.initMap()
  },
  methods: {
    getData() {
      // this.$api.get('topics', null, r => {
      //   this.list = r.data
      // })
    },

    initMap() {
      var latlng = L.latLng(40.07317, 116.5847) //location of Beijing

      // var dom = document.getElementById(this.el)

      this.map = L.map(this.$refs.mapContainer, {
        center: latlng,
        zoom: 15,
        attributionControl: false, //不显示右下角的标记
        zoomControl: true, //不显示放大缩小的按钮
      });

      var accessToken = 'pk.eyJ1IjoieWV0YW5nemhpIiwiYSI6ImNpajFrdmJ1aDAwYnF0b2x6cDA2bndybjgifQ.g9phAioL8kT5ik4jGg6kNQ';
      var style = "dark"; // emerald,light,dark
      var tileLayer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + style + '/{z}/{x}/{y}.png?access_token=' + accessToken);

      tileLayer.addTo(this.map);
      return this
    }


  }
}

</script>
<style>
/*.article_list {margin: auto;}*/

#mapContainer {
  height: 100%;
  width: 100%;
}

</style>
