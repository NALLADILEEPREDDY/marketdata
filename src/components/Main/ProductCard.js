import React from "react";
import { connect } from "react-redux";
import "./main.css";

function ProductCard(props) {
  const { selectedImage } = props;
  const goBack= ()=>{
    console.log('hii')
    props.history.goBack();
  }
  return (
    <div>
      <div>
        <button  className="button" type="button" onClick={goBack}>
          <span>GO BACK</span>
        </button>
      </div>
      <div className="card">
        <img
          className="imgS"
          src={selectedImage.img}
          alt={selectedImage.title}
        />
        <h1>{selectedImage.title}</h1>
        <p className="price">
          MinimumPrice:{`\u20B9${selectedImage.minimumPrice}`}
        </p>
        <p className="price">
          MaximumPrice:{`\u20B9  ${selectedImage.maximumPrice}`}
        </p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    selectedImage: state.selectedImage,
  };
};
export default connect(mapStateToProps, null)(ProductCard);
