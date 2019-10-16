'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: "qard-The Digital Business Card",
    short_name: "qard",
    description: "Be able to carry around your socials conveniently for others to pick up by simply scanning your personal qr-code",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "https://i.imgur.com/16QL2jU.png",
        sizes: "540x540",
        type: "image/png" 
      }
    ],
    ms: {
      tileColor: '#000000'
    }
  };
}
