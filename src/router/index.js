/** @file Vue routes. */
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  // Redirect '/' to '/plants'.
  {
    path: "/",
    redirect: "/plants",
  },
  // View plants.
  {
    path: "/plants",
    component: () => import("@/views/PlantListView.vue"),
  },
  // View plant.
  {
    path: "/plants/:id",
    component: () => import("@/views/PlantDetailView.vue"),
  },
  // 404 page.
  { path: "/:pathMatch(.*)*", component: () => import("@/views/LostView.vue") },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Track pageviews on each route change
router.afterEach(() => {
  if (window.plausible) {
    window.plausible("pageview")
  }
})

export default router
