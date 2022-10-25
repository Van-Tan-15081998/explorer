import { createApp } from 'vue';
import App from './App.vue';
// import AppTest from './AppTest.vue';
import mitt from 'mitt'; // Use for eventBus

import router from './router/routes'; // Use router

import config from './config';
import AppUtils from './utils';

import 'bootstrap/dist/css/bootstrap.css';

// use pinia
// import { createPinia } from 'pinia';

// import axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faUserSecret,
    faLaptopCode,
    faAngleLeft,
    faBell,
    faAngleDown,
    faAngleUp,
    faMagnifyingGlass,
    faPencil,
    faTrashCan,
    faCheck,
    faDownLong,
    faXmark,
    faCircleExclamation,
    faTriangleExclamation,
    faBook,
    faCopy,
    faNetworkWired,
    faUsersGear,
    faPuzzlePiece,
    faMaximize,
    faPen,
    faFloppyDisk,
    faSpinner,
    faMagnifyingGlassArrowRight,
    faDiagramProject,
    faStar,
    faPlus

} from '@fortawesome/free-solid-svg-icons';

import {
    faCircleCheck,
    faCircleXmark,


    
} from '@fortawesome/free-regular-svg-icons';

import { 
    faLeanpub, 
    faWindows,
    faReadme,
    faSearchengin
} from '@fortawesome/free-brands-svg-icons';

library.add(
    // solid
    faUserSecret,
    faLaptopCode,
    faAngleLeft,
    faBell,
    faAngleDown,
    faAngleUp,
    faMagnifyingGlass,
    faPencil,
    faTrashCan,
    faCheck,
    faDownLong,
    faXmark,
    faCircleExclamation,
    faTriangleExclamation,
    faBook,
    faCopy,
    faNetworkWired,
    faUsersGear,
    faPuzzlePiece,
    faMaximize,
    faPen,
    faFloppyDisk,
    faSpinner,
    faMagnifyingGlassArrowRight,
    faDiagramProject,
    faStar,
    faPlus,

    // regular
    faCircleCheck,
    faCircleXmark,

    
    // brands
    faLeanpub,
    faWindows,
    faReadme,
    faSearchengin

);

/// Vue 3 createApp method
const myApp = createApp(App);
// const myApp = createApp(AppTest);

/// Use for event
const exEventBus = mitt();
myApp.config.globalProperties.exEventBus = exEventBus;

// Add more functionality to myApp
// myApp.use(A).use(B).use(C);

/// use axios
// myApp.use(VueAxios, axios); // AppUtils đã use axios nên không cần use ở đây nữa

/// use vuex
import store from './vuex-store/store';
myApp.use(store);

/// use pinia
// const pinia = createPinia();
// myApp.use(pinia);

/// Import and use vue paginate
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";
// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
myApp.use(VueAwesomePaginate);

// use router
myApp.use(router);

myApp.config.globalProperties.exAppSetting = config.setting;    // Inject
 
// use utils
const exAppUtils = new AppUtils();
myApp.config.globalProperties.exAppUtils = exAppUtils;          // Inject

myApp.component('font-awesome-icon', FontAwesomeIcon);

// Mount
myApp.mount('#app');
