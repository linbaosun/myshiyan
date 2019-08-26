import Vue from 'vue';
import Tabbar from './Tabbar';

const globalComponents = () => {
    Vue.component('tab-bar', Tabbar);
};

export default globalComponents;