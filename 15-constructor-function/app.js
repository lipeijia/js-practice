// function hex(r ,g , b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// hex(255, 100, 100);
// // #ff6464;
// // rgb(255, 100, 100);
// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
// }

// // ---------- Factory Function ----------

// function switchColorCode(r, g, b) {
//     // stores color value
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function() {
//         // console.log(this);
//         // no arguments necessary
//         // use keyword "this" to calling the color values
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function () {
//         const {
//             r,
//             g,
//             b
//         } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }

//     return color;
// }

// const testColor = switchColorCode(255, 100, 100);
// const testColor2 = switchColorCode(123, 456, 789);

// console.log(testColor.rgb === testColor2.rgb); //false
// console.log('hi'.slice === 'hello'.slice); //true

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgbDemo = function() {
        return `rgb(${r}, ${g}, ${b})`;
    } // still in the individual object function
    console.log(this);
};

Color.prototype.hex = function () {
        const {
            r,
            g,
            b
        } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
    
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.rgba = function(a=0.5) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

Color();
const color1 = new Color(255, 100, 100); //set the value to the new Color Object
const color2 = new Color(123, 456, 789);
console.log(color1.rgb === color2.rgb);

const color3 = new Color(123, 456, 111);


document.body.style.background = color3.rgba(.4);