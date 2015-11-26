(function(){
  var id = 'id';
  var attr = 'data-scroll';
  var text = ' top';
  var selfLinkPlaceholder = '<svg class="icon-small">' +
                              '<use xlink:href="#self-link" />' +
                            '</svg>';
  var targetTag = 'H3';
  var element = document.querySelectorAll('[' + attr + ']');

  Array.prototype.forEach.call(element, function scrollTo(el, i){
    var linkTarget = el.querySelector(targetTag);

    // Set Link Stuff for Table of Contents
    var sup =  document.createElement('sup');
    var link =  document.createElement('a');
    var linkText = document.createTextNode(text);

    var scrollTarget = getAttrVal(el, attr);

    link.setAttribute('href', '#' + scrollTarget);
    link.appendChild(linkText);

    // Set Link Stuff for self Link
    var selfLink =  document.createElement('a');
    var selfLinkRef = getAttrVal(el, id);

    selfLink.innerHTML = selfLinkPlaceholder;
    selfLink.setAttribute('href', '#' + selfLinkRef);

    // Pre- / append them to linkTarget
    if (linkTarget) {
      linkTarget.appendChild(sup)
                .appendChild(link);

      linkTarget.insertBefore(selfLink, linkTarget.firstChild);
    }

  })

  // Returns attribute value of an element
  function getAttrVal(el, attribute) {
    var val = el.getAttribute(attribute);
    return val;
  };

})();
