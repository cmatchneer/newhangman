module.exports = function(app) {

    app.get("/api/hard", function(req, res) {
        res.json(
            [{ word: "the", tip: "You use this word everyday starts with t" },
                { word: "jumbo", tip: "Some shrimps are called this" },
                { word: "javascript", tip: "Used to make a web page dyanmic" },
                { word: "html", tip: "Basics of makeing a website" },
                { word: "css", tip: "Makes webpages look goooooooood" },
                { word: "gravity", tip: "What keeps us from being able to fly" },
                { word: "codeing", tip: "Another name for programming" },
                { word: "bugs", tip: "The one thing coders and all homeowners hate to see" },
                { word: "debugging", tip: "What coders spend 90% of their lives doing" }
            ])
    })
};