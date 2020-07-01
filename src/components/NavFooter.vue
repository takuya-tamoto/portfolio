<template>
  <footer>
    <nav class="footer-nav">
      <ul>
        <li>
          <router-link to="/">Top</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/skill">Skill</router-link>
        </li>
        <li>
          <router-link to="/outputs">Outputs</router-link>
        </li>
      </ul>
    </nav>
    <div class="sns-box">
      <a href="https://twitter.com/" target="_blank">
        <i class="fab fa-twitter fa-2x sns-icon"></i>
      </a>
      <a href="https://github.com/takuya-tamoto">
        <i class="fab fa-github fa-2x sns-icon"></i>
      </a>
    </div>
    <div class="copyright">
      <small>&copy;2020 TAKUYA</small>
    </div>
  </footer>
</template>
<style scoped>
footer {
  text-align: center;
  margin-top: 10px;
}
.footer-nav {
  padding-right: 30px;
}
.footer-nav ul li {
  list-style: none;
  display: inline-block;
  padding-right: 10px;
}
a {
  color: rgba(0, 0, 0, 0.5);
}
a:hover {
  color: rgba(0, 0, 0, 0.8);
}
.sns-icon {
  width: 50px;
}
.copyright {
  padding: 10px 0;
  color: gray;
}
</style>
