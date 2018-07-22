function filter_list(l) {
  return l.filter(function(l){
    return typeof l == "number"
});
}