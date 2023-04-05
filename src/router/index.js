import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Presentation/Accueil.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import AuthorView from "../views/LandingPages/Author/AuthorView.vue";

import TravailleurView from "../views/LandingPages/EspaceTravailleur/EspaceTravailleurView.vue";
import PartenaireView from "../views/LandingPages/EspacePartenaire/EspacePartenaireView.vue";
import FournisseurView from "../views/LandingPages/EspaceFournisseur/EspaceFournisseurView.vue";


import Etablissament from "../views/LandingPages/nosEtablissaements/Etablissament.vue";
import SignInBasicView from "../views/LandingPages/SignIn/BasicView.vue";
import SignUpBasicView from "../views/LandingPages/SignUp/BasicView.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadersView.vue";
import PageFeatures from "../layouts/sections/page-sections/features/FeaturesView.vue";
import NavigationNavbars from "../layouts/sections/navigation/navbars/NavbarsView.vue";
import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import NavigationPagination from "../layouts/sections/navigation/pagination/PaginationView.vue";
import InputAreasInputs from "../layouts/sections/input-areas/inputs/InputsView.vue";
import InputAreasForms from "../layouts/sections/input-areas/forms/FormsView.vue";
// import ACAlerts from "../layouts/sections/attention-catchers/alerts/AlertsView.vue";
import ACModals from "../layouts/sections/attention-catchers/modals/ModalsView.vue";
import ACTooltipsPopovers from "../layouts/sections/attention-catchers/tooltips-popovers/TooltipsPopoversView.vue";
import ElAvatars from "../layouts/sections/elements/avatars/AvatarsView.vue";
import ElBadges from "../layouts/sections/elements/badges/BadgesView.vue";
import ElBreadcrumbs from "../layouts/sections/elements/breadcrumbs/BreadcrumbsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
import ElButtonGroups from "../layouts/sections/elements/button-groups/ButtonGroupsView.vue";
import ElDropdowns from "../layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElProgressBars from "../layouts/sections/elements/progress-bars/ProgressBarsView.vue";
import ElToggles from "../layouts/sections/elements/toggles/TogglesView.vue";
import ElTypography from "../layouts/sections/elements/typography/TypographyView.vue";

// import Dashboard from "../views/admin/admin_dashboard.vue";

// import produits from "../views/admin/admin_products.vue";
// import commandes from "../views/admin/admin_commandes.vue";
// import profil_utilisateur from "../views/admin/admin_profil_utilisateur.vue";
// import profil_administrateur from "../views/admin/admin_profil_administrateur.vue";
// import reglage from "../views/admin/admin_reglage.vue";
// import details_produit from "../views/admin/admin_details_produit.vue";
// // import commande_update from "../views/Commande_update.vue"
// import modifier from "../views/admin/admin_update_prod.vue"
// import detail_commande from "../views/admin/admin_details_cmde.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: Accueil,
    },
    {
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/landing-pages/contact-us",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/pages/landing-pages/author",
      name: "author",
      component: AuthorView,
    },
    {
      path: "/pages/landing-pages/etablissament",
      name: "etablissament",
      component: Etablissament,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },
    {
      path: "/pages/landing-pages/signup",
      name: "signUp-basic",
      component: SignUpBasicView,
    },







    {
      path: "/pages/landing-pages/espace-travailleur",
      name: "espace-travailleur",
      component: TravailleurView,
    },    
    {
      path: "/pages/landing-pages/espace-partenaire",
      name: "espace-partenaire",
      component: PartenaireView,
    },    
    {
      path: "/pages/landing-pages/espace-fournisseur",
      name: "espace-fournisseur",
      component: FournisseurView,
    },


    // {
    //   path: "/sections/page-sections/page-headers",
    //   name: "page-headers",
    //   component: PageHeaders,
    // },
    // {
    //   path: "/sections/page-sections/features",
    //   name: "page-features",
    //   component: PageFeatures,
    // },
    // {
    //   path: "/sections/navigation/navbars",
    //   name: "navigation-navbars",
    //   component: NavigationNavbars,
    // },
    // {
    //   path: "/sections/navigation/nav-tabs",
    //   name: "navigation-navtabs",
    //   component: NavigationNavTabs,
    // },
    // {
    //   path: "/sections/navigation/pagination",
    //   name: "navigation-pagination",
    //   component: NavigationPagination,
    // },
    // {
    //   path: "/sections/input-areas/inputs",
    //   name: "inputareas-inputs",
    //   component: InputAreasInputs,
    // },
    // {
    //   path: "/sections/input-areas/forms",
    //   name: "inputareas-forms",
    //   component: InputAreasForms,
    // },
    // {
    //   path: "/sections/attention-catchers/alerts",
    //   name: "ac-alerts",
    //   component: ACAlerts,
    // },
    // {
    //   path: "/sections/attention-catchers/modals",
    //   name: "ac-modals",
    //   component: ACModals,
    // },
    // {
    //   path: "/sections/attention-catchers/tooltips-popovers",
    //   name: "ac-tooltips-popovers",
    //   component: ACTooltipsPopovers,
    // },
    // {
    //   path: "/sections/elements/avatars",
    //   name: "el-avatars",
    //   component: ElAvatars,
    // },
    // {
    //   path: "/sections/elements/badges",
    //   name: "el-badges",
    //   component: ElBadges,
    // },
    // {
    //   path: "/sections/elements/breadcrumbs",
    //   name: "el-breadcrumbs",
    //   component: ElBreadcrumbs,
    // },
    // {
    //   path: "/sections/elements/buttons",
    //   name: "el-buttons",
    //   component: ElButtons,
    // },
    // {
    //   path: "/sections/elements/button-groups",
    //   name: "el-button-groups",
    //   component: ElButtonGroups,
    // },
    // {
    //   path: "/sections/elements/dropdowns",
    //   name: "el-dropdowns",
    //   component: ElDropdowns,
    // },
    // {
    //   path: "/sections/elements/progress-bars",
    //   name: "el-progress-bars",
    //   component: ElProgressBars,
    // },
    // {
    //   path: "/sections/elements/toggles",
    //   name: "el-toggles",
    //   component: ElToggles,
    // },
    // {
    //   path: "/sections/elements/typography",
    //   name: "el-typography",
    //   component: ElTypography,
    // },


    // {
    //   path: "/index_admin",
    //   name: "Index_admin",
    //   component: () =>
    //     import(/* webpackChunkName: "inscription" */ "../views/admin/Index_admin.vue"),
    //   children: [
    //     {
    //       // UserProfile will be rendered inside User's <router-view>
    //       // when /user/:id/profile is matched
    //       path: '',
    //       component: Dashboard,
    //     },
    //     {
    //       // UserPosts will be rendered inside User's <router-view>
    //       // when /user/:id/posts is matched
    //       path: 'produits',
    //       component: produits,
    //     },
    //     {
    //       // UserPosts will be rendered inside User's <router-view>
    //       // when /user/:id/posts is matched
    //       path: 'commandes',
    //       component: commandes,
    //     },
    //     {
    //       // UserPosts will be rendered inside User's <router-view>
    //       // when /user/:id/posts is matched
    //       path: '/detail_commandes/:id',
    //       component: detail_commande,
    //     },
    //     // {
    //     //   // UserPosts will be rendered inside User's <router-view>
    //     //   // when /user/:id/posts is matched
    //     //   path: 'commandes',
    //     //   component: commandes,
    //     // },
    //     {
    //       // UserPosts will be rendered inside User's <router-view>
    //       // when /user/:id/posts is matched
    //       path: 'profil_utilisateur',
    //       component: profil_utilisateur,
    //     },
    //     {
    //       // UserPosts will be rendered inside User's <router-view>
    //       // when /user/:id/posts is matched
    //       path: 'profil_administrateur',
    //       component: profil_administrateur,
    //     },
    //     {
    //       // UserPosts will be rendered inside User's <router-view>
    //       // when /user/:id/posts is matched
    //       path: 'reglage',
    //       component: reglage,
    //     },
    //     {
    //       // UserPosts will be rendered inside User's <router-view>
    //       // when /user/:id/posts is matched
    //       path: '/details_produit/:id',
    //       component: details_produit,
    //     },
    //     {
    //       // UserPosts will be rendered inside User's <router-view>
    //       // when /user/:id/posts is matched
    //       path: '/modifier/:id',
    //       component: modifier,
    //     },
    //   ],
    // },
  ],
});

export default router;
