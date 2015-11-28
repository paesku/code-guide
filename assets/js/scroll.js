(function(global){

  var Linkappend = function () {
    this.conf = {
      id: 'id',
      attr: 'data-scroll',
      text: ' toc',
      selfLinkPlaceholder: '<svg class="icon-small">' +
                                  '<use xlink:href="#self-link" />' +
                                '</svg>',
      targetTag: 'H3',

      // Map attr key to corresponding target value
      scrollMap: {
        css: 'css-toc',
        scss: 'scss-toc',
        appendix: 'appendix-toc',
      },

      // Automatic initialization
      init: true
    };

    if (this.conf.init === true) {
      this.initialize();
    }

  };

  // Initialize module
  Linkappend.prototype.initialize = function () {
    this.buildLinks();
  };


  Linkappend.prototype.buildLinks = function () {
    var element = document.querySelectorAll('[' + this.conf.attr + ']');

    for (var i = 0; i < element.length; i++) {
      var el = element[i];
      var linkTarget = el.querySelector(this.conf.targetTag);

      // Set Link Stuff for Table of Contents
      var sup =  document.createElement('sup');
      var link =  document.createElement('a');
      var linkText = document.createTextNode(this.conf.text);

      var scrollTarget = this.getLinkTarget(el, this.conf.attr);

      link.setAttribute('href', '#' + scrollTarget);
      link.appendChild(linkText);

      // Set Link Stuff for self Link
      var selfLink =  document.createElement('a');
      var selfLinkRef = this.getAttrVal(el, this.conf.id);

      selfLink.innerHTML = this.conf.selfLinkPlaceholder;
      selfLink.setAttribute('href', '#' + selfLinkRef);

      // Pre- / append them to linkTarget
      if (linkTarget) {
        linkTarget.appendChild(sup)
                  .appendChild(link);

        linkTarget.insertBefore(selfLink, linkTarget.firstChild);
      }
    }

  };

  // Returns attribute value of an element
  Linkappend.prototype.getAttrVal = function (el, attribute) {
    var val = el.getAttribute(attribute);
    return val;
  };

  // Returns String depending on scrollMap key
  Linkappend.prototype.getLinkTarget = function (el, attribute) {
    var attrVal = this.getAttrVal(el, attribute);
    var target;

    if (attrVal === 'css') {
      target =  this.conf.scrollMap.css;
    } else if (attrVal === 'scss') {
      target =  this.conf.scrollMap.scss;
    } else if (attrVal === 'appendix') {
      target =  this.conf.scrollMap.appendix;
    } else {
      console.warn( 'You have not defined a proper target for your link.' )
      target = attrVal;
    }

    return target;
  };

  global.Linkappend = Linkappend;

})(window);
