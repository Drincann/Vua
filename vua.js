
class Vua {
    constructor(opts) {
        this.opts = opts;

        this.el = opts.el;

        this.template = opts.el.innerHTML;

        this.data = opts.data;

        this.processor = (propertyKey) => {
            this.render();
        };

        for (const key in opts.data) {
            let property = opts.data[key];
            Object.defineProperty(opts.data, key, {
                set: (val) => {
                    property = val;
                    this.processor(key);
                },
                get: function () {
                    return property;
                }
            });
        }
        this.render();
    }
    render() {
        let view = this.template;
        for (const key in this.data) {
            view = view.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), this.data[key]);
        }
        this.el.innerHTML = view;
    }
}