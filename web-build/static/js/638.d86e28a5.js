/*! For license information please see 638.d86e28a5.js.LICENSE.txt */
            const ${"_superIndex"} = name => super[name];`},xE={name:"typescript:advanced-async-super",scoped:!0,text:wE`
            const ${"_superIndex"} = (function (geti, seti) {
                const cache = Object.create(null);
                return name => cache[name] || (cache[name] = { get value() { return geti(name); }, set value(v) { seti(name, v); } });
//# sourceMappingURL=638.d86e28a5.js.map