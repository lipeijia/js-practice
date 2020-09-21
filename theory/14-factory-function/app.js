function hex(r ,g , b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
hex(255, 100, 100);
// #ff6464;
// rgb(255, 100, 100);
function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

// ---------- Factory Function ----------

function switchColorCode(r, g, b) {
    // stores color value
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        // console.log(this);
        // no arguments necessary
        // use keyword "this" to calling the color values
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function () {
        const {
            r,
            g,
            b
        } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return color;
}

const testColor = switchColorCode(255, 100, 100);
