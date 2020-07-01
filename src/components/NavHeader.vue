<template>
  <b-navbar toggleable="md" type="light">
    <b-navbar-toggle target="nav_collapse" class="ml-auto"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="mr-auto nav-item nav">
        <b-nav-item>
          <router-link to="/">Top</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/about">About</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/skill">Skill</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/outputs">Outputs</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
.nav-item {
  font-size: 20px;
  padding-left: 10px;
  text-align: left;
  margin-left: 20px;
}
a {
  color: rgba(0, 0, 0, 0.5);
}
a:hover {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
}
</style>
