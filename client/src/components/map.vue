<template>
  <div>
    <div ref="mapContainer">
      <!-- <div ref:"mapContiner"> -->
    </div>
    <MapControl id="mapControl"> </MapControl>
  </div>
</template>
<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import MapControl from './mapcontrol.vue'

export default {
  components: { MapControl },
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

      var accessToken = 'pk.eyJ1IjoieXVlY2hlbmciLCJhIjoiY2pwZGptdjJ5MzMwazN3cHhmbHg2YmZ1ZCJ9.flgccDx3QbYy46Qp-Joz5A';
      // var accessToken = 'pk.eyJ1IjoieXVlY2hlbmciLCJhIjoiY2pwZGptdjJ5MzMwazN3cHhmbHg2YmZ1ZCJ9.flgccDx3QbYy46Qp-Joz5A'; // default public
      var style = "dark"; // emerald,light,dark
      var tileLayer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + style + '/{z}/{x}/{y}.png?access_token=' + accessToken);

      tileLayer.addTo(this.map);
      return this
    }


  }
}

</script>
<style lang="less">
/*.article_list {margin: auto;}*/
@import "../style/base/base.vars.less";

#mapContainer {
  height: 100%;
  width: 100%;
}


</style>
