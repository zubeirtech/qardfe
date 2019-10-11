'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: "qard-The Digital Business Card",
    short_name: "qard",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "https://i.imgur.com/16QL2jU.png",
        sizes: "540x540",
        type: "image/png" 
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
