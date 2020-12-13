import vueRouter from 'vue-router'
import Shop from './components/Shop'
const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: Shop
            }
        ]
    })

export default router