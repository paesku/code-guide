(function(){
  var attr = 'data-scroll';
  var text = ' ^';
  var targetTag = 'H3';
  var element = document.querySelectorAll('[' + attr + ']');

  Array.prototype.forEach.call(element, function scrollTo(el, i){
    var linkTarget = el.querySelector(targetTag);
    var link =  document.createElement('a');
    var linkText = document.createTextNode(text);
    var scrollTarget = getAttrVal(el);

    link.setAttribute('href', '#' + scrollTarget);
    link.appendChild(linkText);
    if (linkTarget) {
      linkTarget.appendChild(link);
    }

  })

  function getAttrVal(el) {
    var val = el.getAttribute(attr);
    return val;
  }

})();
