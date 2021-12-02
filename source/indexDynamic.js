import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "./style.css";

function getLodash() {
  return import("lodash")
    .then(({ default: _ }) => {
      return (document.querySelector("#root").innerHTML = _.join(
        [hello_word, world_word],
        " "
      ));
    })
    .catch((error) => "error occur");
}

getLodash().then((component)=>{
    document.body.appendChild(component);
})


// async function getLodash() {
//   const element = document.querySelector("#root");
//   const { default: _ } = await import("lodash");

//   element.innerHTML = _.join(["hello_word", "world_word"], " ");

//   return element;
// }
