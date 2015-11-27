(function(){
  var id = 'id';
  var attr = 'data-scroll';
  var text = ' toc';
  var selfLinkPlaceholder = '<svg class="icon-small">' +
                              '<use xlink:href="#self-link" />' +
                            '</svg>';
  var targetTag = 'H3';
  var element = document.querySelectorAll('[' + attr + ']');

  // Map attr key to corresponding target value
  var scrollMap = {
    css: 'css-toc',
    scss: 'scss-toc',
    appendix: 'appendix-toc',
  };

  Array.prototype.forEach.call(element, function scrollTo(el, i){
    var linkTarget = el.querySelector(targetTag);

    // Set Link Stuff for Table of Contents
    var sup =  document.createElement('sup');
    var link =  document.createElement('a');
    var linkText = document.createTextNode(text);

    var scrollTarget = getLinkTarget(el, attr);

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

  // Returns String depending on scrollMap key
  function getLinkTarget(el, attribute) {
    var attrVal = getAttrVal(el, attribute);
    var target;

    if (attrVal === 'css') {
      target =  scrollMap.css;
    } else if (attrVal === 'scss') {
      target =  scrollMap.scss;
    } else if (attrVal === 'appendix') {
      target =  scrollMap.appendix;
    } else {
      console.warn( 'You hav not defined a proper target for your link.' )
      target = attrVal;
    }

    return target;
  };

})();
