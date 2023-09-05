class Rectangle {
    constructor() {
        this.prototype.constructor.toString = function() {
            return `[function: ${this.name}]`;
          };
    };
}
