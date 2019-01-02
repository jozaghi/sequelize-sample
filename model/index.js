const ArticleFactory= require("./article");




module.exports=(db)=>({
    article:ArticleFactory(db)
});