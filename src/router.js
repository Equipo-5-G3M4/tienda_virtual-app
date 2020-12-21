import VueRouter from 'vue-router'
import Shop from './components/Shop'
import Product from './components/product_details'
import administrador from './components/administrador.vue'
import UserAuth from './components/UserAuth.vue'
import Categoria from './components/Categoria'

const router = new VueRouter({
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
                path: '/administrador/:username',
                name: 'administrador',
                component: administrador
            },
            {
                path: '/administrador/:username/:producto',
                name: 'administradorProducto',
                component: administrador
            },
            {
                path: '/user/auth',
                name: 'user_auth',
                component: UserAuth
            },
            {
                path: '/mostrar/:categoria',
                name: 'mostrarCategoria',
                component: Categoria
            }
        ]
    })

export default router
