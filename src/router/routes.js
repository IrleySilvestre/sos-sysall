const routes = [
  // Rota nao autenticada
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login.vue') },
      { path: '/forgot-password', name: 'reloadPassword', component: () => import('pages/ForgotPassword.vue') }
    ]
  },
  // Rota autenticada
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'home', component: () => import('pages/Index.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
