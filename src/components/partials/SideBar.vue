<template>
  <div>
    <main>
      <div
        id="sidebar-container"
        class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      >
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li>
            <router-link
              :class="{ active: $route.name === 'Profile' }"
              to="/"
              class="nav-link text-white"
            >
              <i class="fa fa-user"></i> Profile
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="{ active: $route.name === 'Billing' }"
              to="/Billing"
              class="nav-link text-white"
            >
              <i class="fa fa-cc-visa"></i> Billing
            </router-link>
          </li>
        </ul>
        <hr />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style lang="scss">
#sidebar-container {
  width: 16.5rem;
  @media screen and (max-width: 400px) {
    width: 6.5rem;
  }
}
.nav-link {
  border-radius: 0 !important;
}
</style>
