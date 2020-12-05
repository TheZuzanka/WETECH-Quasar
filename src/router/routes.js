const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Main.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Products.vue') }
    ]
  },
  {
    path: '/addNewProduct',
    component: () => import('src/layouts/Main.vue'),
    children: [
      { path: '/', component: () => import('src/pages/NewProduct.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
