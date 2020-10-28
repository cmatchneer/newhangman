module.exports = function(app) {

    app.get("/api/hard", function(req, res) {
        res.json(
            [{ word: "bruschetta", tip: "Roasted garlic bread with tomatoes" },
                { word: "vegemite", tip: "Famous spread from down under" },
                { word: "literally", tip: "This word is misused all time for effect" },
                { word: "eccentric", tip: "Another word for strange" },
                { word: "samaritan", tip: "What a good ____" },
                { word: "imbecile", tip: "Another word for dummy" },
                { word: "tangible", tip: "Something real you can touch" },
                { word: "hilarious", tip: "When something is very funny" },
                { word: "xenophobia", tip: "Fear of outsiders" }
            ])
    })
};