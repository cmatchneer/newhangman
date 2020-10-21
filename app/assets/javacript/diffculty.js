import * as easy from "./easy.js";
import * as mid from "./mid.js";

function diffculty(level, num) {
    switch (level) {
        case "easy":
            easy.easy(num)
            break;
        case "medium":
            mid.mid(num)
            break;
    }
}
export { diffculty }