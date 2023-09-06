class Rectangle {
    constructor(w, h) {
        if (w && h > 0) {
            this.width = w;
            this.height = h;
        } else {
            return {}
        }
    }
}

module.exports = Rectangle;