import * as easy from "./easy.js";

function diffculty(level, num) {
    console.log(level);
    switch (level) {
        case "easy":
            easy.easy(num)
            break;
    }
}
export { diffculty }