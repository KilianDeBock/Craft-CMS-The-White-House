(() => {
  const app = {
    initialize() {
      console.log("App initialized!");
      this.cacheElements();
      this.registerListeners();
    },
    cacheElements() {
      this.$body = document.querySelector("body");
      this.$mainNavInput = document.querySelector("#main-nav__opener");
      console.log("Eventlisteners added!");
    },
    registerListeners() {
      this.$mainNavInput.addEventListener("click", (event) => {
        if (event.target.checked) {
          return (this.$body.style = "overflow: hidden");
        }
        return (this.$body.style = "");
      });
      console.log("Eventlisteners added!");
    },
  };

  app.initialize();
})();
