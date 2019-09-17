new Vue({
  el: "#app",
  data: {
    now_rule: "今のルール",
    now_maps: "ステージ"
  },
  mounted() {
    axios.get("https://spla2.yuu26.com/gachi/now").then(response => {
      (this.now_rule = response.data.result[0].rule),
        (this.now_maps = response.data.result[0].maps);
    });
  }
});
