<template>
<nav class="navbar">
     <div class="navbar-brand">
          <a class="navbar-item" href="http://bulma.io">
               <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
               <span class="icon" style="color: #333;">
                    <i class="fa fa-github"></i>
               </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
               <span class="icon" style="color: #55acee;">
                    <i class="fa fa-twitter"></i>
               </span>
          </a>
          <div class="navbar-burger burger" data-target="navMenubd-example">
               <span></span>
               <span></span>
               <span></span>
          </div>
     </div>
     <div id="navMenubd-example" class="navbar-menu">
          <div class="navbar-start">
               <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link  is-active" href="/documentation/overview/start/">
                         Docs
                    </a>
               </div>
               <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link " href="http://bulma.io/blog/">
                         Blog
                    </a>
               </div>
               <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                         More
                    </div>
               </div>
               <a class="navbar-item " href="http://bulma.io/expo/">
                    <span class="bd-emoji">🎨</span>
                    Expo
               </a>
               <a class="navbar-item " href="http://bulma.io/love/">
                    <span class="bd-emoji">❤️</span>
                    Love
               </a>
          </div>
          <div class="navbar-end">
              <div class="navbar-item">
              </div>
          </div>
     </div>
</nav>
</template>
<script type="text/javascript">
  export default {

  }
</script>
