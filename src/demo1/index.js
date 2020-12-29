let number = 0;
let onClickButton = () => {
  number += 1;
  render();
};
let onClickButton2 = () => {
  number -= 1;
  render();
};

render();

function render() {
  let h = React.createElement;
  ReactDOM.render(
    h(
      "div",
      { className: "parent" },
      h("span", { className: "tag" }, number),
      h(
        "button",
        { onClick: onClickButton, className: "button is-primary" },
        "+"
      ),
      h(
        "button",
        { onClick: onClickButton2, className: "button is-primary" },
        "-"
      )
    ),
    document.querySelector("#app")
  );
}
