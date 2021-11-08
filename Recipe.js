import React from "react";
import style from "./Recipe.module.css";

const Recipe = ({ title,calories,image, ingredients }) => {
    return(
        <div className={style.food}>
            <h1 className={style.recipe}>{title}</h1>
            <ul>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <p className={style.cal}>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;