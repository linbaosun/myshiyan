import Vue from 'vue';
import { router, axios } from './config';
import mintUI from './mint-ui-components';
import globalComponents from './global-components';
import './assets/css/base.less';
/* 
  import 导入模块时，有一个潜规则
  默认以当前目录里的index命名的文件来导出东西
*/
import App from './components/App';

// 注册mint-ui组件
mintUI();
// 注册axios的配置
axios();
// 注册全局子组件
globalComponents();

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
