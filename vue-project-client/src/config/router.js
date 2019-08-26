import Vue from 'vue';
import VueRouter from 'vue-router';
/* 
    实际项目开发时，路由的组件配置，如果直接采用import导入后，那么无论这个组件最后是否渲染到视图中
    VM都会创建跟这个组件有关的Virtual DOM tree，这样做，如果路由配置的组件过多时，可能会影响程序
    第一次打开时的效率问题
*/
// import Home from '../components/Home';
// 针对上边问题，需要用到一个技术叫“路由懒加载组件”技术，这样哪个组件被锚链接调用，才会创建组件的虚拟DOM
// 这种路由懒加载的本质就是通过调用Promise.resolve()来强制按需加载路由组件使用的
const Home = () => import('../components/Home');
const NotFound = () => import('../components/NotFound');
const CallMe = () => import('../components/CallMe');
const Find = () => import('../components/Find');
const GoodsDetail = () => import('../components/GoodsDetail');
const GoodsList = () => import('../components/GoodsList');
const NewsDetail = () => import('../components/NewsDetail');
const NewsList = () => import('../components/NewsList');
const PersonalCenter = () => import('../components/PersonalCenter');
const PhotoShareDetail = () => import('../components/PhotoShareDetail');
const PhotoShareList = () => import('../components/PhotoShareList');
const Search = () => import('../components/Search');

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: { name: 'home' },
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            name: 'callme',
            path: '/callme',
            component: CallMe,
        },
        {
            name: 'find',
            path: '/find',
            component: Find,
        },
        {
            name: 'goods-detail',
            path: '/goods-detail',
            component: GoodsDetail,
        },
        {
            name: 'goods-list',
            path: '/goods-list',
            component: GoodsList,
        },
        {
            name: 'news-detail',
            path: '/news-detail',
            component: NewsDetail,
        },
        {
            name: 'news-list',
            path: '/news-list',
            component: NewsList,
        },
        {
            name: 'personal-center',
            path: '/personal-center',
            component: PersonalCenter,
        },
        {
            name: 'photo-share-detail',
            path: '/photo-share-detail',
            component: PhotoShareDetail,
        },
        {
            name: 'photo-share-list',
            path: '/photo-share-list',
            component: PhotoShareList,
        },
        {
            name: 'search',
            path: '/search',
            component: Search,
        },
        {
            path: '*',
            component: NotFound,
        },
    ],
});