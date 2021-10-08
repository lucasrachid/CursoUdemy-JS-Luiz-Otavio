function createCalculator() {
  return {
    display: document.querySelector(".display"),
    start: function () {
      this.clickButton();
      this.initPressEnter();
    },

    initPressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.result();
        }
      });
    },

    pressBackSpace() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 8) {
          this.clearDisplay();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOneNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },

    result() {
      let result = this.display.value;
      try {
        result = eval(result);
        if (!result) {
          alert("Conta inválida.");
          return;
        }
        this.display.value = String(result);
      } catch (e) {
        alert("Conta inválida.");
      }
    },

    clickButton() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;

          if (el.classList.contains("btn-num")) {
            this.btnToDisplay(el.innerText);
          }

          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }

          if (el.classList.contains("btn-del")) {
            this.deleteOneNumber();
          }

          if (el.classList.contains("btn-eq")) {
            this.result();
          }
          this.display.focus();
        }.bind(this)
      );
    },
    btnToDisplay(value) {
      this.display.value += value;
    },
  };
}

const calculadora = createCalculator();
calculadora.start();
