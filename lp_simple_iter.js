var findNodes = function() {
  var nodes = [];

  var testElements = document.getElementsByClassName("test");
  for(var i = 0; i < testElements.length; i++){
    nodes.push(testElements[i]);
  }
  return nodes;
};

var hide = function(nodes){
  var i = 0, max = nodes.length;
  for(; i < max; i += 1) {
    nodes[i].style.display = 'none';
  }
  // this variable will be 'hoisted' up to the top of the function
};

// findNodes is being invoked and the result is passed to the hide function
hide(findNodes());
