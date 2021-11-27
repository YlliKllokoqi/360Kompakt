const settings = {
  "name": "test",
  "state": {
    "frontity": {
      "url": "https://api.360kompakt.de",
      "title": "360 Kompakt",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@fourothreepage/fourothree-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Finanzen",
              "/finanzen/"
            ],
            [
              "Technologie",
              "/technologie/"
            ],
            [
              "Lifestyle",
              "/lifestyle/"
            ],
            [
              "Management",
              "/management/"
            ],

            [
              "Marketing",
              "/marketing/"
            ],
            [
              "Recht",
              "/recht"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://api.360kompakt.de"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast"
  ]
};

export default settings;