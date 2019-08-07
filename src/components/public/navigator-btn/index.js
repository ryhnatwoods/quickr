import Taro from "@tarojs/taro";
import PropTypes from "prop-types";
import "./index.scss";
import { Button } from "@tarojs/components";

const handleGoto = name => {
  Taro.navigateTo({
    url: `/pages/${name.toLowerCase()}/index`
  });
};

function NavigatorBtn(props) {
  const { name, ...rest } = props;
  return (
    <Button className='uu-goto-btn' onClick={handleGoto.bind(this, name)}>
      props.children
    </Button>
  );
}

NavigatorBtn.defaultProps = {
  parent: "",
  name: ""
};

NavigatorBtn.propTypes = {
  parent: PropTypes.string,
  name: PropTypes.string
};

export default NavigatorBtn;
