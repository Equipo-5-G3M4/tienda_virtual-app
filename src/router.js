import vueRouter from 'vue-router'
import Shop from './components/Shop'
import Product from './components/product_details'
const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: Shop
            },
            {
                path: '/producto/:producto',
                name: "productoDetails",
                component: Product
            }
        ]
    })

export default router