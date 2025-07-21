import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
const Category = () => {
    return(

        <>
        <Header/>
        <div className="category">
            <h1>Category Wise</h1>
            <div className="category-list">
                <div className="category-item">Indian</div>
                <div className="category-item">Italian</div>
                <div className="category-item">Chinese</div>
                <div className="category-item">Mexican</div>
                <div className="category-item">Thai</div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Category;
