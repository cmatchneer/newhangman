import * as easy from "./easy.js";
import * as mid from "./mid.js";
import * as hard from "./hard.js"

function diffculty(level, num) {
    switch (level) {
        case "easy":
            easy.easy(num)
            break;
        case "medium":
            mid.mid(num)
            break;
        case "hard":
            hard.hard(num)
            break;

    }
}
export { diffculty }