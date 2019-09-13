new Vue({
  el: "#app",
  data() {
    return {
      now_rule: null,
      now_stage: null
    };
  },
  mounted() {
    axios
      .get("https://spla2.yuu26.com/gachi/now")
      .then(response => (this.now_rule = response.data.result[0].rule));
  }
});

// (
//     (this.now_stage = response.data.result[0].maps)
//   )
