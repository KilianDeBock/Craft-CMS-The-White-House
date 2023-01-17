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
      this.$blogNavigation = document.querySelector("#blog__navigation");
      console.log("Eventlisteners added!");
    },
    registerListeners() {
      this.$mainNavInput.addEventListener("click", (event) => {
        if (event.target.checked) {
          return (this.$body.style = "overflow: hidden");
        }
        return (this.$body.style = "");
      });

      this.$blogNavigation &&
        this.$blogNavigation.addEventListener("change", (event) => {
          if (event?.target?.value) window.location.href = event.target.value;
        });
    },
  };

  app.initialize();
})();
