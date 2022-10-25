import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('../components/home/content/introducce/ExIntroduce.vue'),
    },
  
    // start - product-management
    {
        path: '/product-management/list-product',
        name: 'product-management/list-product',
        component: () => import('@/components/product/ExProduct.vue'),
    },
    {
        path: '/product-management/add-product',
        name: 'product-management/add-product',
        component: () => import('@/components/product/ExAddProduct.vue'),
    },
    {
        path: '/product-management/detail-product/:id(\\d+)',
        // id chỉ được là số
        name: 'product-management/detail-product',
        component: () => import('@/components/product/ExDetailProduct.vue'),
    },
    {
        path: '/product-management/update-product/:id(\\d+)',
        // id chỉ được là số
        name: 'product-management/update-product',
        component: () => import('@/components/product/ExUpdateProduct.vue'),
    },
    // end - product-management
    // start - word-management
    {
        path: '/word-management/list-word',
        name: 'word-management/list-word',
        component: () => import('@/components/word/ExWord.vue'),
    },
    {
        path: '/word-management/add-word',
        name: 'word-management/add-word',
        component: () => import('@/components/word/ExWord.vue'),
    },
    {
        path: '/word-management/detail-word/:id(\\d+)',
        // id chỉ được là số
        name: 'word-management/detail-word',
        component: () => import('@/components/word/ExWord.vue'),
    },
    {
        path: '/word-management/update-word/:id(\\d+)',
        // id chỉ được là số
        name: 'word-management/update-word',
        component: () => import('@/components/word/ExWord.vue'),
    },
    // end - product-management

    // core example
    {
        path: '/core-management/list-component',
        name: 'core-management/list-component',
        component: () => import('@/components/core-examples/CoreExamples'),
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;