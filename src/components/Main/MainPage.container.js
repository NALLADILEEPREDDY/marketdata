import {default as MainPage} from "./MainPage.component";
import { connect } from "react-redux";
import { updateSelectedImage } from "../../ReduxData/actionCreators";

const mapDispatchToProps = dispatch => ({
  updateSelectedImage: image => dispatch(updateSelectedImage(image))
})
const mapStateToProps = state => {
  return {
    selectedMarket: state.selectedMarket,
    marketData: state.marketData
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)