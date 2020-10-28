module.exports = function(app) {

    app.get("/api/medium", function(req, res) {
        res.json(
            [{ word: "annoying ", tip: "When someone wont stop bothering you" },
                { word: "tomato", tip: "Red fruit commonaly mistaken as veggie" },
                { word: "harmony", tip: "Everything is working in perfect _____" },
                { word: "superman", tip: "The man of steel" },
                { word: "television", tip: "TV is short for" },
                { word: "baseball", tip: "Americas past time" },
                { word: "backbone", tip: "Grow a ____ and say something" },
                { word: "capitalism", tip: "The idea you own your own labor" },
                { word: "dapper", tip: "You look ____ today" }
            ])
    })
};