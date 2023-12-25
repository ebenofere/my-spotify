export const trunc = (str:string, count=12) => {
    if (str.length > count) {
        let truncate = str.slice(0, count);
        return `${truncate} ...`
    }
    return str;
}