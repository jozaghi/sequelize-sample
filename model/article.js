const Sequilize=require("sequelize");

const ArticleFactory=db=>{

    const article=db.define("article",{
        title:{
            type:Sequilize.STRING,
            unique:true,
            allowNull:false
        },
        body:Sequilize.TEXT
    }/*,{
        timestamps:false
    }*/);

    return article;
}


module.exports=ArticleFactory;