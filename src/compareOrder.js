"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareOrder = void 0;
exports.compareOrder = (a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    return 0;
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
};
//# sourceMappingURL=compareOrder.js.map