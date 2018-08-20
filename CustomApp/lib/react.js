console.log('react');

class Component {
    constructor(props, tag = 'div') {
        this._tag = tag;

        this.props = props;

        this._children = [];

        this.classes = new Set();
    }

    /**
     * @returns DomElement
     */
    render() {
        const domElement = document.createElement(this._tag);

        if (this._props.innerText) {
            const t = document.createTextNode(this.props.innerText);
            domElement.appendChild(t);
        }

        if (this._props.classList) {
            if (!Array.isArray(this._))
        }

        this._children.forEach((chDomEle) => {
            domElement.appendChild(chDomEle.render());
        });

        const attrs = Object.keys(this._props);

        attrs.forEach((attr) => {
            domElement.setAttribute(attr, this._props['attr']);
        });

        this._classes.forEach(clName => {
            domElement.classList.add(clName);
        });

        return domElement;
    }

    addChild(ch) {
        this._children.push(ch);

        return this;
    }
}


static specialAttrs = new Set([

]);
