(function (global) {
  "use strict";

  global.elem = function elem(name, attrs, children) {
    attrs = attrs || {};
    children = children || [];
    var e = document.createElement(name);
    Object.keys(attrs).forEach(function (key) {
      e.setAttribute(key, attrs[key]);
    });
    children.forEach(function (child) {
      if (typeof child === "string") {
        child = document.createTextNode(child);
      }
      e.appendChild(child);
    });
    return e;
  };

  global.trigger = function trigger(name, target) {
    target.dispatchEvent(
      new CustomEvent(name, { bubbles: true, cancelable: false })
    );
  };

  global.DEGREE = Math.PI / 180;

  global.deg2rad = function deg2rad(degrees) {
    return DEGREE * degrees;
  };
})(window);
