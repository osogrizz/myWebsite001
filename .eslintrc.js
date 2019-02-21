module.exports = {
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
      },
    "settings": {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "detect",
            "flowVersion": "0.53"
        },
        "proWrapperFunctions": [
            "forbidExtraPops",
            { "property": "freeze", "object": "Object" },
            { "property": "myFavoriteWrapper" }
        ],
        "linkComponents": [
            "Hyperlink",
            { "name": "Link", "linkAttribute": "to" }
        ]
    }
};
