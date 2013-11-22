(function () {
    self.JSREPLEngine = function () {
        function d(c, a, b, d, f, h) {
            var e, g = this;
            this.output = a;
            this.result = b;
            this.error = d;
            this.Python = f.Python;
            f.print = function () {};
            this.error_buffer = [];
            e = makeUtf8Print(a);
            this.Python.initialize(null, e, function (a) {
                if (a != null) return g.Python.isHandlingError ? g.error_buffer.push(String.fromCharCode(a)) : e(a)
            });
            h()
        }
        d.prototype.Eval = function (c) {
            var a;
            this.error_buffer = [];
            try {
                return a = this.Python.eval(encodeUtf8(c)), a === void 0 ? this.error(this.error_buffer.join("") || "Unknown error.") :
                    (this.output(this.error_buffer.join("")), this.result(a))
            } catch (b) {
                return this.error("Internal error: " + b)
            }
        };
        d.prototype.RawEval = function (c) {
            return this.Eval(c)
        };
        d.prototype.GetNextLineIndent = function (c) {
            var a, b;
            b = c.split("\n");
            return b.length === 0 ? 0 : (a = b[b.length - 1], c = a.match(/^\s*/)[0], a = b[b.length - 1].replace(/\s+$/, ""), a[a.length - 1] === ":" ? 1 : c.length && a[a.length - 1].length !== 0 ? 0 : false)
        };
        return d
    }()
}).call(this);