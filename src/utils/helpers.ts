export const trunc = (str:string, count=12) => {
    if (str.length > count) {
        let truncate = str.slice(0, count);
        return `${truncate} ...`
    }
    return str;
}


export const generateRandomColor = () => {
    // Generate random values for Red, Green, and Blue components
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  
    // Construct the RGB color string
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}