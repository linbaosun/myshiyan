import Vue from 'vue';
// mint-ui可以直接导入全局的MintUI来用
import { Button, Swipe, SwipeItem, Lazyload, Indicator, Toast } from 'mint-ui';
import 'mint-ui/lib/button/style.css';
import 'mint-ui/lib/swipe/style.css';
import 'mint-ui/lib/swipe-item/style.css';
import 'mint-ui/lib/lazyload/style.css';
import 'mint-ui/lib/indicator/style.css';
import 'mint-ui/lib/toast/style.css';

const mintUI = () => {
    Vue.component(Button.name, Button);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.use(Lazyload);
    Vue.prototype.$indicator = Indicator;
    Vue.prototype.$toast = Toast;
};

export default mintUI;