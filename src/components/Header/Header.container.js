import {default as Header} from './Header.component';
import { connect } from "react-redux";
import { updateSelectedMarketData,updateSelectedMarket } from "../../ReduxData/actionCreators";

const mapDispatchToProps = dispatch => ({
  updateSelectedMarket: image => dispatch(updateSelectedMarket(image)),
  updateSelectedMarketData: image => dispatch(updateSelectedMarketData(image))
})
export default connect(null, mapDispatchToProps)(Header)
