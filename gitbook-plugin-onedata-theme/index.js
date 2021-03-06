module.exports = {
    website: {
        assets: "./book",
        js: [
            "nanoscroller.js",
            "onedata.js",
            "w3data.js"
        ],
        css: [
          "nanoscroller.css",
          "onedata.css",
          "rest.css"
        ],
        html: {
            "html:start": function() {
                return "<!-- Start book "+this.options.title+" -->";
            },
            "html:end": function() {
                return "<!-- End of book "+this.options.title+" -->";
            },

            "head:start": "<!-- head:start -->",
            "head:end": "<!-- head:end -->",

            "body:start": "<!-- body:start -->",
            "body:end": "<!-- body:end -->"
        },
    },
};
