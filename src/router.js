import vueRouter from 'vue-router'
import Shop from './components/Shop'
import Product from './components/product_details'
import administrador from './components/administrador.vue'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: 'root',
                component: Shop
            },            
            {
                path: '/producto/:producto',
                name: 'productoDetails',
                component: Product
            },
            {
                path: '/administrador',
                name: 'administrador',
                component: administrador
            },
            {
                path: '/administrador/:producto',
                name: 'administradorProducto',
                component: administrador
            },            
        ]
    })

export default router