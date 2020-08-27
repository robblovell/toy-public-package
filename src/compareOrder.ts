export const compareOrder = (a, b) => {
    const nameA = a.toUpperCase(); // ignore upper and lowercase
    const nameB = b.toUpperCase(); // ignore upper and lowercase
    return 0
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0
}
