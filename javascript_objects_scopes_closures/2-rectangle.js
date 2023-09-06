#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        } else {
            const emptyObject = Object.create(null);
            emptyObject.constructor = Rectangle;
            return emptyObject;
        }
    }
}

module.exports = Rectangle;