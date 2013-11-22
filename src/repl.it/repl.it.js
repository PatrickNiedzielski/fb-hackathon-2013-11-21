! function () {
    var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }, F = [].slice;
    e = jQuery, D = 0, P = 1, H = 2, T = 13, O = 9, E = 46, w = 8, C = 37, A = 39, M = 38, S = 40, N = 36, x = 35, L = 33, k = 34, a = "jqconsole-", i = "" + a + "cursor", s = "" + a + "header", f = "" + a + "prompt", u = "" + a + "old-prompt", o = "" + a + "input", r = "" + a + "blurred", y = "keypress", v = "<span/>", p = "<div/>", d = ":empty", _ = "\n", h = ">>> ", c = "... ", l = 2, n = "" + a + "ansi-", m = "", g = /\[(\d*)(?:;(\d*))*m/, t = function () {
        function e() {
            this.stylize = j(this.stylize, this), this._closeSpan = j(this._closeSpan, this), this._openSpan = j(this._openSpan, this), this.getClasses = j(this.getClasses, this), this._style = j(this._style, this), this._color = j(this._color, this), this._remove = j(this._remove, this), this._append = j(this._append, this), this.klasses = []
        }
        return e.prototype.COLORS = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"], e.prototype._append = function (e) {
            e = "" + n + e;
            if (this.klasses.indexOf(e) === -1) return this.klasses.push(e)
        }, e.prototype._remove = function () {
            var e, t, r, i, s, o;
            r = 1 <= arguments.length ? F.call(arguments, 0) : [], o = [];
            for (i = 0, s = r.length; i < s; i++) t = r[i], t === "fonts" || t === "color" || t === "background-color" ? o.push(this.klasses = function () {
                var r, i, s, o;
                s = this.klasses, o = [];
                for (r = 0, i = s.length; r < i; r++) e = s[r], e.indexOf(t) !== n.length && o.push(e);
                return o
            }.call(this)) : (t = "" + n + t, o.push(this.klasses = function () {
                var n, r, i, s;
                i = this.klasses, s = [];
                for (n = 0, r = i.length; n < r; n++) e = i[n], e !== t && s.push(e);
                return s
            }.call(this)));
            return o
        }, e.prototype._color = function (e) {
            return this.COLORS[e]
        }, e.prototype._style = function (e) {
            e === "" && (e = 0), e = parseInt(e);
            if (isNaN(e)) return;
            switch (e) {
            case 0:
                return this.klasses = [];
            case 1:
                return this._append("bold");
            case 2:
                return this._append("lighter");
            case 3:
                return this._append("italic");
            case 4:
                return this._append("underline");
            case 5:
                return this._append("blink");
            case 6:
                return this._append("blink-rapid");
            case 8:
                return this._append("hidden");
            case 9:
                return this._append("line-through");
            case 10:
                return this._remove("fonts");
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                return this._remove("fonts"), this._append("fonts-" + (e - 10));
            case 20:
                return this._append("fraktur");
            case 21:
                return this._remove("bold", "lighter");
            case 22:
                return this._remove("bold", "lighter");
            case 23:
                return this._remove("italic", "fraktur");
            case 24:
                return this._remove("underline");
            case 25:
                return this._remove("blink", "blink-rapid");
            case 28:
                return this._remove("hidden");
            case 29:
                return this._remove("line-through");
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
                return this._remove("color"), this._append("color-" + this._color(e - 30));
            case 39:
                return this._remove("color");
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
                return this._remove("background-color"), this._append("background-color-" + this._color(e - 40));
            case 49:
                return this._remove("background-color");
            case 51:
                return this._append("framed");
            case 53:
                return this._append("overline");
            case 54:
                return this._remove("framed");
            case 55:
                return this._remove("overline")
            }
        }, e.prototype.getClasses = function () {
            return this.klasses.join(" ")
        }, e.prototype._openSpan = function (e) {
            return '<span class="' + this.getClasses() + '">' + e
        }, e.prototype._closeSpan = function (e) {
            return "" + e + "</span>"
        }, e.prototype.stylize = function (e) {
            var t, n, r, i, s, o;
            e = this._openSpan(e), r = 0;
            while ((r = e.indexOf(m, r)) && r !== -1)
                if (n = e.slice(r).match(g)) {
                    o = n.slice(1);
                    for (i = 0, s = o.length; i < s; i++) t = o[i], this._style(t);
                    e = this._closeSpan(e.slice(0, r)) + this._openSpan(e.slice(r + 1 + n[0].length))
                } else r++;
            return this._closeSpan(e)
        }, e
    }(), B = function (e, t) {
        return '<span class="' + e + '">' + (t || "") + "</span>"
    }, b = function () {
        function n(n, r, i, o) {
            this.container = n, this._HideComposition = j(this._HideComposition, this), this._ShowComposition = j(this._ShowComposition, this), this._UpdateComposition = j(this._UpdateComposition, this), this._EndComposition = j(this._EndComposition, this), this._StartComposition = j(this._StartComposition, this), this._CheckComposition = j(this._CheckComposition, this), this._ProcessMatch = j(this._ProcessMatch, this), this._HandleKey = j(this._HandleKey, this), this._HandleChar = j(this._HandleChar, this), this.isMobile = !! navigator.userAgent.match(/iPhone|iPad|iPod|Android/i), this.isIos = !! navigator.userAgent.match(/iPhone|iPad|iPod/i), this.isAndroid = !! navigator.userAgent.match(/Android/i), this.$window = e(window), this.header = r || "", this.prompt_label_main = typeof i == "string" ? i : h, this.prompt_label_continue = " \n" + (o || c), this.indent_width = l, this.state = P, this.input_queue = [], this.input_callback = null, this.multiline_callback = null, this.history = [], this.history_index = 0, this.history_new = "", this.history_active = !1, this.shortcuts = {}, this.$console = e('<pre class="jqconsole"/>').appendTo(this.container), this.$console.css({
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                margin: 0,
                overflow: "auto"
            }), this.$console_focused = !0, this.$input_container = e(p).appendTo(this.container), this.$input_container.css({
                position: "relative",
                width: 1,
                height: 0,
                overflow: "hidden"
            }), this.$input_source = e("<textarea/>"), this.$input_source.attr("wrap", "off").css({
                position: "absolute",
                width: 2
            }), this.$input_source.appendTo(this.$input_container), this.$composition = e(p), this.$composition.addClass("" + a + "composition"), this.$composition.css({
                display: "inline",
                position: "relative"
            }), this.matchings = {
                openings: {},
                closings: {},
                clss: []
            }, this.ansi = new t, this._InitPrompt(), this._SetupEvents(), this.Write(this.header, s), e(this.container).data("jqconsole", this)
        }
        return n.prototype.ResetHistory = function () {
            return this.SetHistory([])
        }, n.prototype.ResetShortcuts = function () {
            return this.shortcuts = {}
        }, n.prototype.ResetMatchings = function () {
            return this.matchings = {
                openings: {},
                closings: {},
                clss: []
            }
        }, n.prototype.Reset = function () {
            return this.state !== P && this.ClearPromptText(!0), this.state = P, this.input_queue = [], this.input_callback = null, this.multiline_callback = null, this.ResetHistory(), this.ResetShortcuts(), this.ResetMatchings(), this.$prompt.detach(), this.$input_container.detach(), this.$console.html(""), this.$prompt.appendTo(this.$console), this.$input_container.appendTo(this.container), this.Write(this.header, s), void 0
        }, n.prototype.GetHistory = function () {
            return this.history
        }, n.prototype.SetHistory = function (e) {
            return this.history = e.slice(), this.history_index = this.history.length
        }, n.prototype._CheckKeyCode = function (e) {
            isNaN(e) ? e = e.charCodeAt(0) : e = parseInt(e, 10);
            if (0 < e && e < 256 && !isNaN(e)) return e;
            throw new Error("Key code must be a number between 0 and 256 exclusive.")
        }, n.prototype._LetterCaseHelper = function (e, t) {
            t(e), 65 <= e && e <= 90 && t(e + 32);
            if (97 <= e && e <= 122) return t(e - 32)
        }, n.prototype.RegisterShortcut = function (e, t) {
            var n, r = this;
            e = this._CheckKeyCode(e);
            if (!t instanceof Function) throw new Error("Callback must be a function, not " + t + ".");
            return n = function (e) {
                return e in r.shortcuts || (r.shortcuts[e] = []), r.shortcuts[e].push(t)
            }, this._LetterCaseHelper(e, n), void 0
        }, n.prototype.UnRegisterShortcut = function (e, t) {
            var n, r = this;
            return e = this._CheckKeyCode(e), n = function (e) {
                if (e in r.shortcuts) return t ? r.shortcuts[e].splice(r.shortcuts[e].indexOf(t), 1) : delete r.shortcuts[e]
            }, this._LetterCaseHelper(e, n), void 0
        }, n.prototype.GetColumn = function () {
            var e;
            return this.$prompt_cursor.text(""), e = this.$console.text().split(_), this.$prompt_cursor.html("&nbsp;"), e[e.length - 1].length
        }, n.prototype.GetLine = function () {
            return this.$console.text().split(_).length - 1
        }, n.prototype.ClearPromptText = function (e) {
            if (this.state === P) throw new Error("ClearPromptText() is not allowed in output state.");
            return this.$prompt_before.html(""), this.$prompt_after.html(""), this.$prompt_label.text(e ? "" : this._SelectPromptLabel(!1)), this.$prompt_left.text(""), this.$prompt_right.text(""), void 0
        }, n.prototype.GetPromptText = function (t) {
            var n, r, i, s, o;
            if (this.state === P) throw new Error("GetPromptText() is not allowed in output state.");
            return t ? (this.$prompt_cursor.text(""), o = this.$prompt.text(), this.$prompt_cursor.html("&nbsp;"), o) : (s = function (t) {
                var n;
                return n = [], t.children().each(function () {
                    return n.push(e(this).children().last().text())
                }), n.join(_)
            }, r = s(this.$prompt_before), r && (r += _), i = this.$prompt_left.text() + this.$prompt_right.text(), n = s(this.$prompt_after), n && (n = _ + n), r + i + n)
        }, n.prototype.SetPromptText = function (e) {
            if (this.state === P) throw new Error("SetPromptText() is not allowed in output state.");
            return this.ClearPromptText(!1), this._AppendPromptText(e), this._ScrollToEnd(), void 0
        }, n.prototype.Write = function (t, n, r) {
            var i;
            return r == null && (r = !0), r && (t = this.ansi.stylize(e(v).text(t).html())), i = e(v).html(t), n != null && i.addClass(n), this.Append(i)
        }, n.prototype.Append = function (t) {
            var n;
            return n = e(t).insertBefore(this.$prompt), this._ScrollToEnd(), this.$prompt_cursor.detach().insertAfter(this.$prompt_left), n
        }, n.prototype.Input = function (e) {
            var t, n, r, i, s = this;
            if (this.state === H) r = this.input_callback, i = this.multiline_callback, n = this.history_active, t = this.async_multiline, this.AbortPrompt(), this.input_queue.unshift(function () {
                return s.Prompt(n, r, i, t)
            });
            else if (this.state !== P) {
                this.input_queue.push(function () {
                    return s.Input(e)
                });
                return
            }
            return this.history_active = !1, this.input_callback = e, this.multiline_callback = null, this.state = D, this.$prompt.attr("class", o), this.$prompt_label.text(this._SelectPromptLabel(!1)), this.Focus(), this._ScrollToEnd(), void 0
        }, n.prototype.Prompt = function (e, t, n, r) {
            var i = this;
            if (this.state !== P) {
                this.input_queue.push(function () {
                    return i.Prompt(e, t, n, r)
                });
                return
            }
            return this.history_active = e, this.input_callback = t, this.multiline_callback = n, this.async_multiline = r, this.state = H, this.$prompt.attr("class", f + " " + this.ansi.getClasses()), this.$prompt_label.text(this._SelectPromptLabel(!1)), this.Focus(), this._ScrollToEnd(), void 0
        }, n.prototype.AbortPrompt = function () {
            if (this.state !== H) throw new Error("Cannot abort prompt when not in prompt state.");
            return this.Write(this.GetPromptText(!0) + _, u), this.ClearPromptText(!0), this.state = P, this.input_callback = this.multiline_callback = null, this._CheckInputQueue(), void 0
        }, n.prototype.Focus = function () {
            return this.IsDisabled() || this.$input_source.focus(), void 0
        }, n.prototype.SetIndentWidth = function (e) {
            return this.indent_width = e
        }, n.prototype.GetIndentWidth = function () {
            return this.indent_width
        }, n.prototype.RegisterMatching = function (e, t, n) {
            var r;
            return r = {
                opening_char: e,
                closing_char: t,
                cls: n
            }, this.matchings.clss.push(n), this.matchings.openings[e] = r, this.matchings.closings[t] = r
        }, n.prototype.UnRegisterMatching = function (e, t) {
            var n;
            return n = this.matchings.openings[e].cls, delete this.matchings.openings[e], delete this.matchings.closings[t], this.matchings.clss.splice(this.matchings.clss.indexOf(n), 1)
        }, n.prototype.Dump = function () {
            var t, n;
            return t = this.$console.find("." + s).nextUntil("." + f),
            function () {
                var r, i, s;
                s = [];
                for (r = 0, i = t.length; r < i; r++) n = t[r], e(n).is("." + u) ? s.push(e(n).text().replace(/^\s+/, ">>> ")) : s.push(e(n).text());
                return s
            }().join(" ")
        }, n.prototype.GetState = function () {
            return this.state === D ? "input" : this.state === P ? "output" : "prompt"
        }, n.prototype.Disable = function () {
            return this.$input_source.attr("disabled", !0), this.$input_source.blur()
        }, n.prototype.Enable = function () {
            return this.$input_source.attr("disabled", !1)
        }, n.prototype.IsDisabled = function () {
            return Boolean(this.$input_source.attr("disabled"))
        }, n.prototype.MoveToStart = function (e) {
            return this._MoveTo(e, !0), void 0
        }, n.prototype.MoveToEnd = function (e) {
            return this._MoveTo(e, !1), void 0
        }, n.prototype._CheckInputQueue = function () {
            if (this.input_queue.length) return this.input_queue.shift()()
        }, n.prototype._InitPrompt = function () {
            this.$prompt = e(B(o)).appendTo(this.$console), this.$prompt_before = e(v).appendTo(this.$prompt), this.$prompt_current = e(v).appendTo(this.$prompt), this.$prompt_after = e(v).appendTo(this.$prompt), this.$prompt_label = e(v).appendTo(this.$prompt_current), this.$prompt_left = e(v).appendTo(this.$prompt_current), this.$prompt_right = e(v).appendTo(this.$prompt_current), this.$prompt_right.css({
                position: "relative"
            }), this.$prompt_cursor = e(B(i, "&nbsp;")), this.$prompt_cursor.insertBefore(this.$prompt_right), this.$prompt_cursor.css({
                color: "transparent",
                display: "inline",
                zIndex: 0
            });
            if (!this.isMobile) return this.$prompt_cursor.css("position", "absolute")
        }, n.prototype._SetupEvents = function () {
            var t, n, i = this;
            this.isMobile ? this.$console.click(function (e) {
                return e.preventDefault(), i.Focus()
            }) : this.$console.mouseup(function (e) {
                var t;
                return t = function () {
                    if (!window.getSelection().toString()) return e.preventDefault(), i.Focus()
                }, setTimeout(t, 0)
            }), this.$input_source.focus(function () {
                var e, t;
                return i._ScrollToEnd(), i.$console_focused = !0, i.$console.removeClass(r), t = function () {
                    if (i.$console_focused) return i.$console.removeClass(r)
                }, setTimeout(t, 100), e = function () {
                    if (i.isIos && i.$console_focused) return i.$input_source.hide()
                }, setTimeout(e, 500)
            }), this.$input_source.blur(function () {
                var e;
                return i.$console_focused = !1, i.isIos && i.$input_source.show(), e = function () {
                    if (!i.$console_focused) return i.$console.addClass(r)
                }, setTimeout(e, 100)
            }), n = e.browser.opera ? "input" : "paste", this.$input_source.bind(n, function () {
                var e;
                return e = function () {
                    if (i.in_composition) return;
                    return i._AppendPromptText(i.$input_source.val()), i.$input_source.val(""), i.Focus()
                }, setTimeout(e, 0)
            }), this.$input_source.keypress(this._HandleChar), this.$input_source.keydown(this._HandleKey), this.$input_source.keydown(this._CheckComposition), e.browser.mozilla != null && (this.$input_source.bind("compositionstart", this._StartComposition), this.$input_source.bind("compositionend", this._EndCommposition), this.$input_source.bind("text", this._UpdateComposition));
            if (e.browser.opera != null) return t = function () {
                if (i.in_composition) return;
                if (i.$input_source.val().length) return i._StartComposition()
            }, setInterval(t, 200)
        }, n.prototype._HandleChar = function (t) {
            var n;
            if (this.state === P || t.metaKey || t.ctrlKey) return !0;
            n = t.which;
            if (n === 8 || n === 9 || n === 13) return !1;
            if (e.browser.mozilla)
                if (t.keyCode || t.altKey) return !0;
            return e.browser.opera && t.altKey ? !0 : (this.$prompt_left.text(this.$prompt_left.text() + String.fromCharCode(n)), this._ScrollToEnd(), !1)
        }, n.prototype._HandleKey = function (t) {
            var n;
            if (this.state === P) return !0;
            n = t.keyCode || t.which, setTimeout(e.proxy(this._CheckMatchings, this), 0);
            if (t.altKey) return !0;
            if (t.ctrlKey || t.metaKey) return this._HandleCtrlShortcut(n);
            if (t.shiftKey) {
                switch (n) {
                case T:
                    this._HandleEnter(!0);
                    break;
                case O:
                    this._Unindent();
                    break;
                case M:
                    this._MoveUp();
                    break;
                case S:
                    this._MoveDown();
                    break;
                case L:
                    this._ScrollUp();
                    break;
                case k:
                    this._ScrollDown();
                    break;
                default:
                    return !0
                }
                return !1
            }
            switch (n) {
            case T:
                this._HandleEnter(!1);
                break;
            case O:
                this._Indent();
                break;
            case E:
                this._Delete(!1);
                break;
            case w:
                this._Backspace(!1);
                break;
            case C:
                this._MoveLeft(!1);
                break;
            case A:
                this._MoveRight(!1);
                break;
            case M:
                this._HistoryPrevious();
                break;
            case S:
                this._HistoryNext();
                break;
            case N:
                this.MoveToStart(!1);
                break;
            case x:
                this.MoveToEnd(!1);
                break;
            case L:
                this._ScrollUp();
                break;
            case k:
                this._ScrollDown();
                break;
            default:
                return !0
            }
            return !1
        }, n.prototype._HandleCtrlShortcut = function (e) {
            var t, n, r, i;
            switch (e) {
            case E:
                this._Delete(!0);
                break;
            case w:
                this._Backspace(!0);
                break;
            case C:
                this._MoveLeft(!0);
                break;
            case A:
                this._MoveRight(!0);
                break;
            case M:
                this._MoveUp();
                break;
            case S:
                this._MoveDown();
                break;
            case x:
                this.MoveToEnd(!0);
                break;
            case N:
                this.MoveToStart(!0);
                break;
            default:
                if (e in this.shortcuts) {
                    i = this.shortcuts[e];
                    for (n = 0, r = i.length; n < r; n++) t = i[n], t.call(this);
                    return !1
                }
                return !0
            }
            return !1
        }, n.prototype._HandleEnter = function (e) {
            var t, n, r = this;
            return e ? this._InsertNewLine(!0) : (n = this.GetPromptText(), t = function (e) {
                var t, i, s, o, u, f;
                if (e !== !1) {
                    r.MoveToEnd(!0), r._InsertNewLine(!0), f = [];
                    for (s = o = 0, u = Math.abs(e); 0 <= u ? o < u : o > u; s = 0 <= u ? ++o : --o) e > 0 ? f.push(r._Indent()) : f.push(r._Unindent());
                    return f
                }
                return i = r.state === D ? "input" : "prompt", r.Write(r.GetPromptText(!0) + _, "" + a + "old-" + i), r.ClearPromptText(!0), r.history_active && ((!r.history.length || r.history[r.history.length - 1] !== n) && r.history.push(n), r.history_index = r.history.length), r.state = P, t = r.input_callback, r.input_callback = null, t && t(n), r._CheckInputQueue()
            }, this.multiline_callback ? this.async_multiline ? this.multiline_callback(n, t) : t(this.multiline_callback(n)) : t(!1))
        }, n.prototype._GetDirectionals = function (t) {
            var n, r, i, s, o, u, a, f;
            return s = t ? this.$prompt_left : this.$prompt_right, n = t ? this.$prompt_right : this.$prompt_left, i = t ? this.$prompt_before : this.$prompt_after, r = t ? this.$prompt_after : this.$prompt_before, u = t ? e.proxy(this.MoveToStart, this) : e.proxy(this.MoveToEnd, this), o = t ? e.proxy(this._MoveLeft, this) : e.proxy(this._MoveRight, this), f = t ? "last" : "first", a = t ? "prependTo" : "appendTo", {
                $prompt_which: s,
                $prompt_opposite: n,
                $prompt_relative: i,
                $prompt_rel_opposite: r,
                MoveToLimit: u,
                MoveDirection: o,
                which_end: f,
                where_append: a
            }
        }, n.prototype._VerticalMove = function (e) {
            var t, n, r, i, s, o, u, a;
            a = this._GetDirectionals(e), r = a.$prompt_which, t = a.$prompt_opposite, n = a.$prompt_relative, s = a.MoveToLimit, i = a.MoveDirection;
            if (n.is(d)) return;
            return o = this.$prompt_left.text().length, s(), i(), u = r.text(), t.text(e ? u.slice(o) : u.slice(0, o)), r.text(e ? u.slice(0, o) : u.slice(o))
        }, n.prototype._MoveUp = function () {
            return this._VerticalMove(!0)
        }, n.prototype._MoveDown = function () {
            return this._VerticalMove()
        }, n.prototype._HorizontalMove = function (t, n) {
            var r, i, s, o, u, a, f, l, c, h, p, m, g, y;
            y = this._GetDirectionals(n), u = y.$prompt_which, i = y.$prompt_opposite, o = y.$prompt_relative, s = y.$prompt_rel_opposite, m = y.which_end, p = y.where_append, l = n ? /\w*\W*$/ : /^\w*\W*/, c = u.text();
            if (c) {
                if (t) {
                    g = c.match(l);
                    if (!g) return;
                    return g = g[0], h = i.text(), i.text(n ? g + h : h + g), f = g.length, u.text(n ? c.slice(0, -f) : c.slice(f))
                }
                return h = i.text(), i.text(n ? c.slice(-1) + h : h + c[0]), u.text(n ? c.slice(0, -1) : c.slice(1))
            }
            if (!o.is(d)) return a = e(v)[p](s), a.append(e(v).text(this.$prompt_label.text())), a.append(e(v).text(i.text())), r = o.children()[m]().detach(), this.$prompt_label.text(r.children().first().text()), u.text(r.children().last().text()), i.text("")
        }, n.prototype._MoveLeft = function (e) {
            return this._HorizontalMove(e, !0)
        }, n.prototype._MoveRight = function (e) {
            return this._HorizontalMove(e)
        }, n.prototype._MoveTo = function (e, t) {
            var n, r, i, s, o, u, a;
            u = this._GetDirectionals(t), i = u.$prompt_which, n = u.$prompt_opposite, r = u.$prompt_relative, o = u.MoveToLimit, s = u.MoveDirection;
            if (e) {
                a = [];
                while (!r.is(d) || i.text() !== "") o(!1), a.push(s(!1));
                return a
            }
            return n.text(this.$prompt_left.text() + this.$prompt_right.text()), i.text("")
        }, n.prototype._Delete = function (e) {
            var t, n, r;
            n = this.$prompt_right.text();
            if (n) {
                if (e) {
                    r = n.match(/^\w*\W*/);
                    if (!r) return;
                    return r = r[0], this.$prompt_right.text(n.slice(r.length))
                }
                return this.$prompt_right.text(n.slice(1))
            }
            if (!this.$prompt_after.is(d)) return t = this.$prompt_after.children().first().detach(), this.$prompt_right.text(t.children().last().text())
        }, n.prototype._Backspace = function (t) {
            var n, r, i;
            setTimeout(e.proxy(this._ScrollToEnd, this), 0), r = this.$prompt_left.text();
            if (r) {
                if (t) {
                    i = r.match(/\w*\W*$/);
                    if (!i) return;
                    return i = i[0], this.$prompt_left.text(r.slice(0, -i.length))
                }
                return this.$prompt_left.text(r.slice(0, -1))
            }
            if (!this.$prompt_before.is(d)) return n = this.$prompt_before.children().last().detach(), this.$prompt_label.text(n.children().first().text()), this.$prompt_left.text(n.children().last().text())
        }, n.prototype._Indent = function () {
            var e;
            return this.$prompt_left.prepend(function () {
                var t, n, r;
                r = [];
                for (e = t = 1, n = this.indent_width; 1 <= n ? t <= n : t >= n; e = 1 <= n ? ++t : --t) r.push(" ");
                return r
            }.call(this).join(""))
        }, n.prototype._Unindent = function () {
            var e, t, n, r, i;
            e = this.$prompt_left.text() + this.$prompt_right.text(), i = [];
            for (t = n = 1, r = this.indent_width; 1 <= r ? n <= r : n >= r; t = 1 <= r ? ++n : --n) {
                if (!/^ /.test(e)) break;
                this.$prompt_left.text() ? this.$prompt_left.text(this.$prompt_left.text().slice(1)) : this.$prompt_right.text(this.$prompt_right.text().slice(1)), i.push(e = e.slice(1))
            }
            return i
        }, n.prototype._InsertNewLine = function (t) {
            var n, r, i;
            return t == null && (t = !1), i = this._SelectPromptLabel(!this.$prompt_before.is(d)), n = e(v).appendTo(this.$prompt_before), n.append(e(v).text(i)), n.append(e(v).text(this.$prompt_left.text())), this.$prompt_label.text(this._SelectPromptLabel(!0)), t && (r = this.$prompt_left.text().match(/^\s+/)) ? this.$prompt_left.text(r[0]) : this.$prompt_left.text(""), this._ScrollToEnd()
        }, n.prototype._AppendPromptText = function (e) {
            var t, n, r, i, s, o;
            n = e.split(_), this.$prompt_left.text(this.$prompt_left.text() + n[0]), s = n.slice(1), o = [];
            for (r = 0, i = s.length; r < i; r++) t = s[r], this._InsertNewLine(), o.push(this.$prompt_left.text(t));
            return o
        }, n.prototype._ScrollUp = function () {
            var e;
            return e = this.$console[0].scrollTop - this.$console.height(), this.$console.stop().animate({
                scrollTop: e
            }, "fast")
        }, n.prototype._ScrollDown = function () {
            var e;
            return e = this.$console[0].scrollTop + this.$console.height(), this.$console.stop().animate({
                scrollTop: e
            }, "fast")
        }, n.prototype._ScrollToEnd = function () {
            var e, t = this;
            return this.$console.scrollTop(this.$console[0].scrollHeight), e = function () {
                var e, n, r, i, s, o, u;
                n = t.$prompt_cursor.height(), u = t.$window.scrollTop(), o = t.$window.scrollLeft(), e = document.documentElement.clientHeight, i = t.$prompt_cursor.offset(), s = t.$prompt_cursor.position(), t.$input_container.css({
                    left: s.left,
                    top: s.top
                }), r = i.top - 2 * n;
                if (t.isMobile && typeof orientation != "undefined" && orientation !== null) {
                    if (u < i.top || u > i.top) return t.$window.scrollTop(r)
                } else {
                    if (u + e < i.top) return t.$window.scrollTop(i.top - e + n);
                    if (u > r) return t.$window.scrollTop(i.top)
                }
            }, setTimeout(e, 0)
        }, n.prototype._SelectPromptLabel = function (e) {
            return this.state === H ? e ? this.prompt_label_continue : this.prompt_label_main : e ? "\n " : " "
        }, n.prototype._outerHTML = function (t) {
            return document.body.outerHTML ? t.get(0).outerHTML : e(p).append(t.eq(0).clone()).html()
        }, n.prototype._Wrap = function (e, t, n) {
            var r, i;
            return i = e.html(), r = i.slice(0, t) + B(n, i[t]) + i.slice(t + 1), e.html(r)
        }, n.prototype._WalkCharacters = function (e, t, n, r, i) {
            var s, o, u;
            o = i ? e.length : 0, e = e.split(""), u = function () {
                var t, n, r, s;
                return i ? (r = e, e = 2 <= r.length ? F.call(r, 0, n = r.length - 1) : (n = 0, []), t = r[n++]) : (s = e, t = s[0], e = 2 <= s.length ? F.call(s, 1) : []), t && (o += i ? -1 : 1), t
            };
            while (s = u()) {
                s === t ? r++ : s === n && r--;
                if (r === 0) return {
                    index: o,
                    current_count: r
                }
            }
            return {
                index: -1,
                current_count: r
            }
        }, n.prototype._ProcessMatch = function (t, n, r) {
            var i, s, o, u, a, f, l, c, h, p, d, v, m = this;
            return p = n ? [t.closing_char, t.opening_char] : [t.opening_char, t.closing_char], u = p[0], c = p[1], d = this._GetDirectionals(n), o = d.$prompt_which, s = d.$prompt_relative, a = 1, f = !1, h = o.html(), n || (h = h.slice(1)), r && n && (h = h.slice(0, -1)), v = this._WalkCharacters(h, u, c, a, n), l = v.index, a = v.current_count, l > -1 ? (this._Wrap(o, l, t.cls), f = !0) : (i = s.children(), i = n ? Array.prototype.reverse.call(i) : i, i.each(function (r, i) {
                var s, o;
                s = e(i).children().last(), h = s.html(), o = m._WalkCharacters(h, u, c, a, n), l = o.index, a = o.current_count;
                if (l > -1) return n || l--, m._Wrap(s, l, t.cls), f = !0, !1
            })), f
        }, n.prototype._CheckMatchings = function (t) {
            var n, r, i, s, o, u, a;
            i = t ? this.$prompt_left.text().slice(this.$prompt_left.text().length - 1) : this.$prompt_right.text()[0], a = this.matchings.clss;
            for (o = 0, u = a.length; o < u; o++) n = a[o], e("." + n, this.$console).contents().unwrap();
            (r = this.matchings.closings[i]) ? s = this._ProcessMatch(r, !0, t) : (r = this.matchings.openings[i]) ? s = this._ProcessMatch(r, !1, t) : t || this._CheckMatchings(!0);
            if (t) {
                if (s) return this._Wrap(this.$prompt_left, this.$prompt_left.html().length - 1, r.cls)
            } else if (s) return this._Wrap(this.$prompt_right, 0, r.cls)
        }, n.prototype._HistoryPrevious = function () {
            if (!this.history_active) return;
            if (this.history_index <= 0) return;
            return this.history_index === this.history.length && (this.history_new = this.GetPromptText()), this.SetPromptText(this.history[--this.history_index])
        }, n.prototype._HistoryNext = function () {
            if (!this.history_active) return;
            if (this.history_index >= this.history.length) return;
            return this.history_index === this.history.length - 1 ? (this.history_index++, this.SetPromptText(this.history_new)) : this.SetPromptText(this.history[++this.history_index])
        }, n.prototype._CheckComposition = function (t) {
            var n;
            n = t.keyCode || t.which, e.browser.opera != null && this.in_composition && this._UpdateComposition();
            if (n === 229) return this.in_composition ? this._UpdateComposition() : this._StartComposition()
        }, n.prototype._StartComposition = function () {
            return this.$input_source.bind(y, this._EndComposition), this.in_composition = !0, this._ShowComposition(), setTimeout(this._UpdateComposition, 0)
        }, n.prototype._EndComposition = function () {
            return this.$input_source.unbind(y, this._EndComposition), this.in_composition = !1, this._HideComposition(), this.$input_source.val("")
        }, n.prototype._UpdateComposition = function (e) {
            var t, n = this;
            return t = function () {
                if (!n.in_composition) return;
                return n.$composition.text(n.$input_source.val())
            }, setTimeout(t, 0)
        }, n.prototype._ShowComposition = function () {
            return this.$composition.css("height", this.$prompt_cursor.height()), this.$composition.empty(), this.$composition.appendTo(this.$prompt_left)
        }, n.prototype._HideComposition = function () {
            return this.$composition.detach()
        }, n
    }(), e.fn.jqconsole = function (e, t, n) {
        return new b(this, e, t, n)
    }
}.call(this);
! function (a) {
    "use strict";
    var b = function (a, b) {
        this.init("tooltip", a, b)
    };
    b.prototype = {
        constructor: b,
        init: function (b, c, d) {
            var e, f;
            this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, this.options.trigger != "manual" && (e = this.options.trigger == "hover" ? "mouseenter" : "focus", f = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(e, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f, this.options.selector, a.proxy(this.leave, this))), this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function (b) {
            return b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data()), b.delay && typeof b.delay == "number" && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        },
        enter: function (b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            if (!c.options.delay || !c.options.delay.show) return c.show();
            clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function () {
                c.hoverState == "in" && c.show()
            }, c.options.delay.show)
        },
        leave: function (b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            if (!c.options.delay || !c.options.delay.hide) return c.hide();
            clearTimeout(this.timeout), c.hoverState = "out", this.timeout = setTimeout(function () {
                c.hoverState == "out" && c.hide()
            }, c.options.delay.hide)
        },
        show: function () {
            var a, b, c, d, e, f, g;
            if (this.hasContent() && this.enabled) {
                a = this.tip(), this.setContent(), this.options.animation && a.addClass("fade"), f = typeof this.options.placement == "function" ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement, b = /in/.test(f), a.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(b ? this.$element : document.body), c = this.getPosition(b), d = a[0].offsetWidth, e = a[0].offsetHeight;
                switch (b ? f.split(" ")[1] : f) {
                case "bottom":
                    g = {
                        top: c.top + c.height,
                        left: c.left + c.width / 2 - d / 2
                    };
                    break;
                case "top":
                    g = {
                        top: c.top - e,
                        left: c.left + c.width / 2 - d / 2
                    };
                    break;
                case "left":
                    g = {
                        top: c.top + c.height / 2 - e / 2,
                        left: c.left - d
                    };
                    break;
                case "right":
                    g = {
                        top: c.top + c.height / 2 - e / 2,
                        left: c.left + c.width
                    }
                }
                a.css(g).addClass(f).addClass("in")
            }
        },
        isHTML: function (a) {
            return typeof a != "string" || a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 || /^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(a)
        },
        setContent: function () {
            var a = this.tip(),
                b = this.getTitle();
            a.find(".tooltip-inner")[this.isHTML(b) ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        },
        hide: function () {
            function d() {
                var b = setTimeout(function () {
                    c.off(a.support.transition.end).remove()
                }, 500);
                c.one(a.support.transition.end, function () {
                    clearTimeout(b), c.remove()
                })
            }
            var b = this,
                c = this.tip();
            c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d() : c.remove()
        },
        fixTitle: function () {
            var a = this.$element;
            (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").removeAttr("title")
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPosition: function (b) {
            return a.extend({}, b ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function () {
            var a, b = this.$element,
                c = this.options;
            return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title), a
        },
        tip: function () {
            return this.$tip = this.$tip || a(this.options.template)
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function () {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        }
    }, a.fn.tooltip = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("tooltip"),
                f = typeof c == "object" && c;
            e || d.data("tooltip", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0
    }
}(window.jQuery);
! function () {
    var dispatch = true;
    var base = "";
    var running;

    function page(path, fn) {
        if ("function" == typeof path) {
            return page("*", path)
        }
        if ("function" == typeof fn) {
            var route = new Route(path);
            for (var i = 1; i < arguments.length; ++i) {
                page.callbacks.push(route.middleware(arguments[i]))
            }
        } else if ("string" == typeof path) {
            page.show(path, fn)
        } else {
            page.start(path)
        }
    }
    page.callbacks = [];
    page.base = function (path) {
        if (0 == arguments.length) return base;
        base = path
    };
    page.start = function (options) {
        options = options || {};
        if (running) return;
        running = true;
        if (false === options.dispatch) dispatch = false;
        if (false !== options.popstate) window.addEventListener("popstate", onpopstate, false);
        if (false !== options.click) window.addEventListener("click", onclick, false);
        if (!dispatch) return;
        page.replace(location.pathname + location.search, null, true, dispatch)
    };
    page.stop = function () {
        running = false;
        removeEventListener("click", onclick, false);
        removeEventListener("popstate", onpopstate, false)
    };
    page.show = function (path, state) {
        var ctx = new Context(path, state);
        page.dispatch(ctx);
        if (!ctx.unhandled) ctx.pushState();
        return ctx
    };
    page.replace = function (path, state, init, dispatch) {
        var ctx = new Context(path, state);
        ctx.init = init;
        if (null == dispatch) dispatch = true;
        if (dispatch) page.dispatch(ctx);
        ctx.save();
        return ctx
    };
    page.dispatch = function (ctx) {
        var i = 0;

        function next() {
            var fn = page.callbacks[i++];
            if (!fn) return unhandled(ctx);
            fn(ctx, next)
        }
        next()
    };

    function unhandled(ctx) {
        if (window.location.pathname + window.location.search == ctx.canonicalPath) return;
        page.stop();
        ctx.unhandled = true;
        window.location = ctx.canonicalPath
    }

    function Context(path, state) {
        if ("/" == path[0] && 0 != path.indexOf(base)) path = base + path;
        var i = path.indexOf("?");
        this.canonicalPath = path;
        this.path = path.replace(base, "") || "/";
        this.title = document.title;
        this.state = state || {};
        this.state.path = path;
        this.querystring = ~i ? path.slice(i + 1) : "";
        this.pathname = ~i ? path.slice(0, i) : path;
        this.params = []
    }
    page.Context = Context;
    Context.prototype.pushState = function () {
        history.pushState(this.state, this.title, this.canonicalPath)
    };
    Context.prototype.save = function () {
        history.replaceState(this.state, this.title, this.canonicalPath)
    };

    function Route(path, options) {
        options = options || {};
        this.path = path;
        this.method = "GET";
        this.regexp = pathtoRegexp(path, this.keys = [], options.sensitive, options.strict)
    }
    page.Route = Route;
    Route.prototype.middleware = function (fn) {
        var self = this;
        return function (ctx, next) {
            if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
            next()
        }
    };
    Route.prototype.match = function (path, params) {
        var keys = this.keys,
            qsIndex = path.indexOf("?"),
            pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
            m = this.regexp.exec(pathname);
        if (!m) return false;
        for (var i = 1, len = m.length; i < len; ++i) {
            var key = keys[i - 1];
            var val = "string" == typeof m[i] ? decodeURIComponent(m[i]) : m[i];
            if (key) {
                params[key.name] = undefined !== params[key.name] ? params[key.name] : val
            } else {
                params.push(val)
            }
        }
        return true
    };

    function pathtoRegexp(path, keys, sensitive, strict) {
        if (path instanceof RegExp) return path;
        if (path instanceof Array) path = "(" + path.join("|") + ")";
        path = path.concat(strict ? "" : "/?").replace(/\/\(/g, "(?:/").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function (_, slash, format, key, capture, optional) {
            keys.push({
                name: key,
                optional: !! optional
            });
            slash = slash || "";
            return "" + (optional ? "" : slash) + "(?:" + (optional ? slash : "") + (format || "") + (capture || format && "([^/.]+?)" || "([^/]+?)") + ")" + (optional || "")
        }).replace(/([\/.])/g, "\\$1").replace(/\*/g, "(.*)");
        return new RegExp("^" + path + "$", sensitive ? "" : "i")
    }

    function onpopstate(e) {
        if (e.state) {
            var path = e.state.path;
            page.replace(path, e.state)
        }
    }

    function onclick(e) {
        if (1 != which(e)) return;
        if (e.defaultPrevented) return;
        var el = e.target;
        while (el && "A" != el.nodeName) el = el.parentNode;
        if (!el || "A" != el.nodeName) return;
        var href = el.href;
        var path = el.pathname + el.search;
        if (el.hash || "#" == el.getAttribute("href")) return;
        if (!sameOrigin(href)) return;
        var orig = path;
        path = path.replace(base, "");
        if (base && orig == path) return;
        e.preventDefault();
        page.show(orig)
    }

    function which(e) {
        e = e || window.event;
        return null == e.which ? e.button : e.which
    }

    function sameOrigin(href) {
        var origin = location.protocol + "//" + location.hostname;
        if (location.port) origin += ":" + location.port;
        return 0 == href.indexOf(origin)
    }
    if ("undefined" == typeof module) {
        window.page = page
    } else {
        module.exports = page
    }
}();
! function () {
    var $, REPLIT;
    $ = jQuery;
    REPLIT = {};
    REPLIT.$this = $(REPLIT);
    this.REPLIT = REPLIT
}.call(this);
! function () {
    var ISMOBILE, chromeVersion, safariVersion;
    ISMOBILE = Boolean(navigator.userAgent.match(/iPhone|iPad|iPod|Android/i));
    if (!ISMOBILE) {
        chromeVersion = navigator.userAgent.match(/Chrome\/(\d+)/i);
        safariVersion = navigator.userAgent.match(/Version\/(\d+)/i);
        if ($.browser.msie && $.browser.version < 10 || $.browser.mozilla && $.browser.version < 4 || $.browser.opera && $.browser.version < 11.51 || $.browser.safari && chromeVersion && chromeVersion[1] < 13 || $.browser.safari && safariVersion && safariVersion[1] < 5) {
            $(function () {
                $("#content-fallback").show();
                return $("#fallback-ignore").click(function () {
                    return $("#content-fallback").hide()
                })
            })
        }
    }
    $.extend(REPLIT, {
        ISMOBILE: ISMOBILE,
        ISIOS: Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i))
    })
}.call(this);
! function () {
    var $, ANIMATION_DURATION, CONSOLE_HIDDEN, DEFAULT_CONTENT_PADDING, DEFAULT_SPLIT, DEFAULT_TITLE, EDITOR_HIDDEN, FOOTER_HEIGHT, HEADER_HEIGHT, MAX_PROGRESS_DURATION, MIN_PROGRESS_DURATION, PROGRESS_ANIMATION_DURATION, RESIZER_WIDTH, SNAP_THRESHOLD, TITLE_ANIMATION_DURATION;
    DEFAULT_CONTENT_PADDING = 200;
    FOOTER_HEIGHT = 30;
    HEADER_HEIGHT = 61;
    RESIZER_WIDTH = 8;
    DEFAULT_SPLIT = .5;
    CONSOLE_HIDDEN = 1;
    EDITOR_HIDDEN = 0;
    SNAP_THRESHOLD = .05;
    ANIMATION_DURATION = 700;
    MIN_PROGRESS_DURATION = 1;
    MAX_PROGRESS_DURATION = 1500;
    PROGRESS_ANIMATION_DURATION = 2e3;
    TITLE_ANIMATION_DURATION = 300;
    DEFAULT_TITLE = "Online Interpreter";
    $ = jQuery;
    $.fn.disableSelection = function () {
        return this.each(function () {
            var $this;
            $this = $(this);
            $this.attr("unselectable", "on");
            $this.css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            });
            return $this.each(function () {
                return this.onselectstart = function () {
                    return false
                }
            })
        })
    };
    $.fn.enableSelection = function () {
        return this.each(function () {
            var $this;
            $this = $(this);
            $this.attr("unselectable", "");
            $this.css({
                "-moz-user-select": "",
                "-webkit-user-select": "",
                "user-select": ""
            });
            return $this.each(function () {
                return this.onselectstart = null
            })
        })
    };
    $.extend(REPLIT, {
        RESIZER_WIDTH: RESIZER_WIDTH,
        CONSOLE_HIDDEN: CONSOLE_HIDDEN,
        EDITOR_HIDDEN: EDITOR_HIDDEN,
        DEFAULT_CONTENT_PADDING: DEFAULT_CONTENT_PADDING,
        split_ratio: REPLIT.ISMOBILE ? EDITOR_HIDDEN : DEFAULT_SPLIT,
        min_content_width: 500,
        max_content_width: 3e3,
        content_padding: DEFAULT_CONTENT_PADDING,
        last_progress_ratio: 0,
        InitDOM: function () {
            var mobile_timer, _this = this;
            this.$doc_elem = $("html");
            this.$container = $("#main");
            this.$editorContainer = $("#editor");
            this.$consoleContainer = $("#console");
            this.$resizer = {
                l: $("#resize-left"),
                c: $("#resize-center"),
                r: $("#resize-right")
            };
            this.$progress = $("#progress");
            this.$progressFill = $("#progress-fill");
            this.$unhider = {
                editor: $("#unhide-right"),
                console: $("#unhide-left")
            };
            this.$run = $("#editor-run");
            this.$editorContainer.mouseleave(function () {
                return _this.$run.fadeIn("fast")
            });
            this.$editorContainer.mousemove(function () {
                if (_this.$run.is(":hidden")) {
                    return _this.$run.fadeIn("fast")
                }
            });
            this.$editorContainer.keydown(function () {
                return _this.$run.fadeOut("fast")
            });
            this.InitSideResizers();
            this.InitCenterResizer();
            this.InitUnhider();
            this.OnResize();
            mobile_timer = null;
            return $(window).bind("resize", function () {
                var cb;
                if (_this.ISMOBILE) {
                    mobile_timer = clearTimeout(mobile_timer);
                    cb = function () {
                        var width;
                        width = document.documentElement.clientWidth;
                        REPLIT.min_content_width = width - 2 * RESIZER_WIDTH;
                        return _this.OnResize()
                    };
                    return mobile_timer = setTimeout(function () {
                        return _this.OnResize()
                    }, 300)
                } else {
                    return _this.OnResize()
                }
            })
        },
        InitSideResizers: function () {
            var $body, $elem, resizer_lr_release, _, _ref, _this = this;
            $body = $("body");
            _ref = this.$resizer;
            for (_ in _ref) {
                $elem = _ref[_];
                $elem.mousedown(function (e) {
                    if (e.button !== 0) {
                        return e.stopImmediatePropagation()
                    } else {
                        return $body.disableSelection()
                    }
                })
            }
            this.$resizer.l.mousedown(function (e) {
                return $body.bind("mousemove.side_resizer", function (e) {
                    _this.content_padding = (e.pageX - RESIZER_WIDTH / 2) * 2;
                    if (_this.content_padding / $body.width() < SNAP_THRESHOLD) {
                        _this.content_padding = 0
                    }
                    return _this.OnResize()
                })
            });
            this.$resizer.r.mousedown(function (e) {
                return $body.bind("mousemove.side_resizer", function (e) {
                    _this.content_padding = ($body.width() - e.pageX - RESIZER_WIDTH / 2) * 2;
                    if (_this.content_padding / $body.width() < SNAP_THRESHOLD) {
                        _this.content_padding = 0
                    }
                    return _this.OnResize()
                })
            });
            resizer_lr_release = function () {
                $body.enableSelection();
                return $body.unbind("mousemove.side_resizer")
            };
            this.$resizer.l.mouseup(resizer_lr_release);
            this.$resizer.r.mouseup(resizer_lr_release);
            return $body.mouseup(resizer_lr_release)
        },
        InitCenterResizer: function () {
            var resizer_c_release, _this = this;
            resizer_c_release = function () {
                _this.$container.enableSelection();
                return _this.$container.unbind("mousemove.center_resizer")
            };
            this.$resizer.c.mousedown(function (e) {
                return _this.$container.bind("mousemove.center_resizer", function (e) {
                    var left;
                    left = e.pageX - _this.content_padding / 2 + RESIZER_WIDTH / 2;
                    _this.split_ratio = left / _this.$container.width();
                    if (_this.split_ratio > CONSOLE_HIDDEN - SNAP_THRESHOLD) {
                        _this.split_ratio = CONSOLE_HIDDEN;
                        resizer_c_release()
                    } else if (_this.split_ratio < EDITOR_HIDDEN + SNAP_THRESHOLD) {
                        _this.split_ratio = EDITOR_HIDDEN;
                        resizer_c_release()
                    }
                    return _this.OnResize()
                })
            });
            this.$resizer.c.mouseup(resizer_c_release);
            this.$container.mouseup(resizer_c_release);
            return this.$container.mouseleave(resizer_c_release)
        },
        InitUnhider: function () {
            var bindUnhiderClick, getUnhider, _this = this;
            getUnhider = function () {
                var side, _ref;
                if ((_ref = _this.split_ratio) !== CONSOLE_HIDDEN && _ref !== EDITOR_HIDDEN) {
                    return $([])
                }
                side = _this.split_ratio === CONSOLE_HIDDEN ? "console" : "editor";
                return _this.$unhider[side]
            };
            $("body").mousemove(function () {
                var unhider;
                unhider = getUnhider();
                if (unhider.is(":hidden")) {
                    return unhider.fadeIn("fast")
                }
            });
            this.$container.keydown(function () {
                var unhider;
                unhider = getUnhider();
                if (unhider.is(":visible")) {
                    return unhider.fadeOut("fast")
                }
            });
            bindUnhiderClick = function ($elem, $elemtoShow) {
                return $elem.click(function (e) {
                    $elem.hide();
                    _this.split_ratio = DEFAULT_SPLIT;
                    $elemtoShow.show();
                    _this.$resizer.c.show();
                    return _this.OnResize()
                })
            };
            bindUnhiderClick(this.$unhider.editor, this.$editorContainer);
            return bindUnhiderClick(this.$unhider.console, this.$consoleContainer)
        },
        OnProgress: function (percentage) {
            var duration, fill, ratio;
            ratio = percentage / 100;
            if (ratio < this.last_progress_ratio) {
                return
            }
            duration = (ratio - this.last_progress_ratio) * PROGRESS_ANIMATION_DURATION;
            this.last_progress_ratio = ratio;
            duration = Math.max(duration, MIN_PROGRESS_DURATION);
            duration = Math.min(duration, MAX_PROGRESS_DURATION);
            fill = this.$progressFill;
            return fill.animate({
                width: percentage + "%"
            }, {
                duration: Math.abs(duration),
                easing: "linear",
                step: function (now, fx) {
                    var blue_bottom, blue_top, bottom, green_bottom, green_top, red_bottom, red_top, top;
                    ratio = now / 100;
                    red_top = Math.round(ratio < .75 ? 250 : 250 + (199 - 250) * ((ratio - .75) / .25));
                    red_bottom = Math.round(ratio < .75 ? 242 : 250 + (136 - 250) * ((ratio - .75) / .25));
                    green_top = Math.round(ratio < .25 ? 110 + (181 - 110) * (ratio / .25) : 181 + (250 - 181) * ((ratio - .25) / .75));
                    green_bottom = Math.round(34 + (242 - 34) * ratio);
                    blue_top = 67;
                    blue_bottom = 12;
                    top = "rgb(" + red_top + ", " + green_top + ", " + blue_top + ")";
                    bottom = "rgb(" + red_bottom + ", " + green_bottom + ", " + blue_bottom + ")";
                    if ($.browser.webkit) {
                        fill.css({
                            "background-image": "url('/images/progress.png'), -webkit-gradient(linear, left top, left bottom, from(" + top + "), to(" + bottom + "))"
                        })
                    } else if ($.browser.mozilla) {
                        fill.css({
                            "background-image": "url('/images/progress.png'), -moz-linear-gradient(top, " + top + ", " + bottom + ")"
                        })
                    } else if ($.browser.opera) {
                        fill.css({
                            "background-image": "url('/images/progress.png'), -o-linear-gradient(top, " + top + ", " + bottom + ")"
                        })
                    }
                    return fill.css({
                        "background-image": "url('/images/progress.png'), linear-gradient(top, " + top + ", " + bottom + ")"
                    })
                }
            })
        },
        OnResize: function () {
            var documentHeight, documentWidth, height, innerWidth, width;
            documentWidth = document.documentElement.clientWidth;
            documentHeight = document.documentElement.clientHeight;
            height = documentHeight - HEADER_HEIGHT - FOOTER_HEIGHT;
            width = documentWidth - this.content_padding;
            innerWidth = width - 2 * RESIZER_WIDTH;
            if (innerWidth < this.min_content_width) {
                innerWidth = this.min_content_width
            } else if (innerWidth > this.max_content_width) {
                innerWidth = this.max_content_width
            }
            width = innerWidth + 2 * RESIZER_WIDTH;
            this.$container.css({
                width: width
            });
            if (this.ISMOBILE && !$(".page:visible").is("#content-workspace")) {
                this.$container.css("height", "auto")
            } else {
                this.$container.css("height", height)
            }
            $(".page:visible").css({
                width: innerWidth
            });
            if ($(".page:visible").is("#content-workspace")) {
                return this.ResizeWorkspace(innerWidth, height)
            }
        },
        ResizeWorkspace: function (innerWidth, height) {
            var console_hpadding, console_vpadding, console_width, editor_hpadding, editor_vpadding, editor_width, _ref;
            editor_width = Math.floor(this.split_ratio * innerWidth);
            console_width = innerWidth - editor_width;
            if ((_ref = this.split_ratio) !== CONSOLE_HIDDEN && _ref !== EDITOR_HIDDEN) {
                editor_width -= RESIZER_WIDTH / 2;
                console_width -= RESIZER_WIDTH / 2
            }
            this.$resizer.c.css({
                left: editor_width
            });
            this.$editorContainer.css({
                width: editor_width,
                height: height
            });
            this.$consoleContainer.css({
                width: console_width,
                height: height
            });
            if (this.split_ratio === CONSOLE_HIDDEN) {
                this.$consoleContainer.hide();
                this.$resizer.c.hide();
                this.$unhider.console.show()
            } else if (this.split_ratio === EDITOR_HIDDEN) {
                this.$editorContainer.hide();
                this.$resizer.c.hide();
                this.$unhider.editor.show()
            }
            console_hpadding = this.$console.innerWidth() - this.$console.width();
            console_vpadding = this.$console.innerHeight() - this.$console.height();
            editor_hpadding = this.$editor.innerWidth() - this.$editor.width();
            editor_vpadding = this.$editor.innerHeight() - this.$editor.height();
            this.$console.css("width", this.$consoleContainer.width() - console_hpadding);
            this.$console.css("height", this.$consoleContainer.height() - console_vpadding);
            this.$editor.css("width", this.$editorContainer.innerWidth() - editor_hpadding);
            this.$editor.css("height", this.$editorContainer.innerHeight() - editor_vpadding);
            if (!this.ISMOBILE) {
                return this.editor.resize()
            }
        },
        changeTitle: function (title) {
            var $title, curr_title;
            $title = $("#title");
            curr_title = $title.text().trim();
            if (!title || curr_title === title) {
                return
            }
            document.title = "repl.it - " + title;
            if (curr_title !== "" && curr_title !== DEFAULT_TITLE) {
                return $title.fadeOut(TITLE_ANIMATION_DURATION, function () {
                    $title.text(title);
                    return $title.fadeIn(TITLE_ANIMATION_DURATION)
                })
            } else {
                console.log(title);
                return $title.text(title)
            }
        }
    });
    $(function () {
        var check_orientation;
        if (REPLIT.ISIOS) {
            $("html, body").css("overflow", "hidden")
        }
        REPLIT.$this.bind("language_loading", function (_, system_name) {
            var $about, $engine, $links, lang;
            REPLIT.$progress.animate({
                opacity: 1
            }, "fast");
            REPLIT.$progressFill.css({
                width: 0
            });
            REPLIT.last_progress_ratio = 0;
            lang = REPLIT.Languages[system_name.toLowerCase()];
            $about = $("#language-about-link");
            $engine = $("#language-engine-link");
            $links = $("#language-engine-link, #language-about-link");
            REPLIT.changeTitle(system_name);
            return $links.animate({
                opacity: 0
            }, "fast", function () {
                $about.text("about " + system_name.toLowerCase());
                $about.attr({
                    href: lang.about_link
                });
                $engine.text(system_name.toLowerCase() + " engine");
                $engine.attr({
                    href: lang.engine_link
                });
                return $links.animate({
                    opacity: 1
                }, "fast")
            })
        });
        REPLIT.$this.bind("language_loaded", function (e, lang_name) {
            REPLIT.OnProgress(100);
            REPLIT.$progress.animate({
                opacity: 0
            }, "fast");
            return REPLIT.changeTitle(lang_name)
        });
        check_orientation = function () {
            var cb;
            cb = function () {
                var width;
                width = document.documentElement.clientWidth;
                REPLIT.min_content_width = width - 2 * RESIZER_WIDTH;
                REPLIT.OnResize();
                return $(window).scrollLeft(0)
            };
            return setTimeout(cb, 300)
        };
        $(window).bind("orientationchange", check_orientation);
        if (REPLIT.ISMOBILE) {
            check_orientation()
        }
        REPLIT.InitDOM();
        return $("#buttons").tooltip({
            selector: ".button",
            placement: "bottom"
        })
    })
}.call(this);
! function () {
    var $;
    $ = jQuery;
    $.extend(REPLIT, {
        Init: function () {
            var _this = this;
            this.jsrepl = new JSREPL({
                input: $.proxy(this.InputCallback, this),
                output: $.proxy(this.OutputCallback, this),
                result: $.proxy(this.ResultCallback, this),
                error: $.proxy(this.ErrorCallback, this),
                progress: $.proxy(this.OnProgress, this),
                timeout: {
                    time: 12e3,
                    callback: function () {
                        var a, code;
                        if (a = confirm("The program is taking too long to finish. Do you want to stop it?")) {
                            code = _this.editor.getSession().getValue();
                            _this.LoadLanguage(_this.current_lang.system_name, function () {
                                return _this.editor.getSession().setValue(code)
                            })
                        }
                        return a
                    }
                }
            });
            this.jqconsole = this.$consoleContainer.jqconsole("", "   ", ".. ");
            this.$console = this.$consoleContainer.find(".jqconsole");
            this.$editor = this.$editorContainer.find("#editor-widget");
            if (!this.ISMOBILE) {
                this.editor = ace.edit("editor-widget");
                this.editor.setTheme("ace/theme/textmate");
                this.editor.renderer.setHScrollBarAlwaysVisible(false);
                this.$run.click(function () {
                    if (_this.jqconsole.state === 2) {
                        _this.jqconsole.AbortPrompt();
                        return _this.Evaluate(REPLIT.editor.getSession().getValue())
                    }
                });
                this.editor.commands.addCommand({
                    name: "run",
                    bindKey: {
                        win: "Ctrl-Return",
                        mac: "Command-Return",
                        sebder: "editor"
                    },
                    exec: function () {
                        _this.$run.click();
                        return setTimeout(function () {
                            return _this.editor.focus()
                        }, 0)
                    }
                })
            }
            this.current_lang = null;
            this.current_lang_name = null;
            return this.inited = true
        },
        LoadLanguage: function (lang_name, callback) {
            var EditSession, UndoManager, ace_mode, ace_mode_ajax, close, index, open, session, textMode, _i, _len, _ref, _ref1, _this = this;
            if (callback == null) {
                callback = $.noop
            }
            this.$this.trigger("language_loading", [lang_name]);
            this.current_lang = this.jsrepl.getLangConfig(lang_name.toLowerCase());
            this.current_lang.system_name = lang_name;
            if (!this.ISMOBILE) {
                EditSession = require("ace/edit_session").EditSession;
                UndoManager = require("ace/undomanager").UndoManager;
                session = new EditSession("");
                session.setUndoManager(new UndoManager);
                ace_mode = this.Languages[lang_name.toLowerCase()].ace_mode;
                if (ace_mode != null) {
                    ace_mode_ajax = $.getScript(ace_mode.script, function () {
                        var mode;
                        mode = require(ace_mode.module).Mode;
                        session.setMode(new mode);
                        session.setUseWrapMode(true);
                        return _this.editor.setSession(session)
                    })
                } else {
                    ace_mode_ajax = jQuery.Deferred().resolve();
                    textMode = require("ace/mode/text").Mode;
                    session.setMode(new textMode);
                    this.editor.setSession(session)
                }
            }
            this.jqconsole.Reset();
            _ref = this.current_lang.matchings;
            for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
                _ref1 = _ref[index], open = _ref1[0], close = _ref1[1];
                this.jqconsole.RegisterMatching(open, close, "matching-" + index)
            }
            this.jqconsole.RegisterShortcut("Z", function () {
                _this.jqconsole.AbortPrompt();
                return _this.StartPrompt()
            });
            this.jqconsole.RegisterShortcut("L", function () {
                return _this.OpenPage("languages")
            });
            this.jqconsole.RegisterShortcut("G", function () {
                return _this.OpenPage("examples")
            });
            this.jqconsole.RegisterShortcut("H", function () {
                return _this.OpenPage("help")
            });
            this.jqconsole.RegisterShortcut("S", function () {
                return $("#button-save").click()
            });
            this.jqconsole.RegisterShortcut("A", function () {
                return _this.jqconsole.MoveToStart()
            });
            this.jqconsole.RegisterShortcut("E", function () {
                return _this.jqconsole.MoveToEnd()
            });
            return this.jsrepl.loadLanguage(lang_name.toLowerCase(), function () {
                return $.when(ace_mode_ajax).then(function () {
                    _this.StartPrompt();
                    _this.$this.trigger("language_loaded", [lang_name]);
                    _this.jqconsole.Write(_this.Languages[lang_name.toLowerCase()].header + "\n");
                    return callback()
                })
            })
        },
        ResultCallback: function (result) {
            if (result) {
                if (result[-1] !== "\n") {
                    result = result + "\n"
                }
                this.jqconsole.Write("=> " + result, "result")
            }
            this.StartPrompt();
            return this.$this.trigger("result", [result])
        },
        ErrorCallback: function (error) {
            if (typeof error === "object") {
                error = error.message
            }
            if (error[-1] !== "\n") {
                error = error + "\n"
            }
            this.jqconsole.Write(String(error), "error");
            this.StartPrompt();
            return this.$this.trigger("error", [error])
        },
        OutputCallback: function (output, cls) {
            if (output) {
                this.jqconsole.Write(output, cls);
                this.$this.trigger("output", [output]);
                return void 0
            }
        },
        InputCallback: function (callback) {
            var _this = this;
            this.jqconsole.Input(function (result) {
                try {
                    callback(result);
                    return _this.$this.trigger("input", [result])
                } catch (e) {
                    return _this.ErrorCallback(e)
                }
            });
            this.$this.trigger("input_request", [callback]);
            return void 0
        },
        Evaluate: function (command) {
            if (command) {
                this.jsrepl["eval"](command);
                return this.$this.trigger("eval", [command])
            } else {
                return this.StartPrompt()
            }
        },
        StartPrompt: function () {
            return this.jqconsole.Prompt(true, $.proxy(this.Evaluate, this), this.jsrepl.checkLineEnd, true)
        }
    });
    $(function () {
        return REPLIT.Init()
    })
}.call(this);
! function () {
    var $, ALLOWED_IN_MODAL, ANIMATION_DURATION, FIRST_LOAD, KEY_ESCAPE, PAGES, __indexOf = [].indexOf || function (item) {
            for (var i = 0, l = this.length; i < l; i++) {
                if (i in this && this[i] === item) return i
            }
            return -1
        };
    $ = jQuery;
    ANIMATION_DURATION = 300;
    KEY_ESCAPE = 27;
    FIRST_LOAD = true;
    PAGES = {
        workspace: {
            id: "content-workspace",
            min_width: 500,
            width: 1e3,
            max_width: 3e3,
            path: "/"
        },
        languages: {
            id: "content-languages",
            min_width: 1080,
            width: 1080,
            max_width: 1400,
            path: "/languages"
        },
        examples: {
            id: "content-examples",
            min_width: 1e3,
            width: 1e3,
            max_width: 1400,
            path: "/examples"
        },
        help: {
            id: "content-help",
            min_width: 1e3,
            width: 1e3,
            max_width: 1400,
            path: "/help"
        },
        about: {
            id: "content-about",
            min_width: 600,
            max_width: 600,
            width: 600,
            path: "/about"
        },
        DEFAULT: "workspace"
    };
    ALLOWED_IN_MODAL = ["help", "about", "languages"];
    $.extend(REPLIT, {
        PAGES: PAGES,
        modal: false,
        Modal: function (modal) {
            this.modal = modal
        },
        LoadExamples: function (file, container, callback) {
            var $examples_container, _this = this;
            $examples_container = $("#examples-" + container);
            $(".example-group").remove();
            return $.get(file, function (contents) {
                var code, example_element, index, name, raw_examples, total, _results;
                raw_examples = contents.split(/\*{60,}/);
                index = 0;
                total = Math.floor(raw_examples.length / 2);
                _results = [];
                while (index + 1 < raw_examples.length) {
                    name = raw_examples[index].replace(/^\s+|\s+$/g, "");
                    code = raw_examples[index + 1].replace(/^\s+|\s+$/g, "");
                    example_element = $('<div class="example-group example-' + total + '">\n  <div class="example-group-header">' + name + "</div>\n  <code>" + code + "</code>\n</div>");
                    $examples_container.append(example_element);
                    example_element.click(function () {
                        return callback($("code", this).text())
                    });
                    _results.push(index += 2)
                }
                return _results
            })
        },
        page_stack: [],
        changing_page: false,
        OpenPage: function (page_name, callback) {
            var current_page, done, index, lang_name, new_title, outerWidth, page, _this = this;
            if (callback == null) {
                callback = $.noop
            }
            if (this.modal && __indexOf.call(ALLOWED_IN_MODAL, page_name) < 0) {
                return
            }
            page = PAGES[page_name];
            current_page = this.page_stack[this.page_stack.length - 1];
            if (!page || current_page === page_name) {
                return this.changing_page = false
            } else if (this.changing_page) {
                $(".page").stop(true, true);
                this.$container.stop(true, true);
                this.changing_page = false;
                return this.OpenPage(page_name)
            } else {
                this.changing_page = true;
                lang_name = this.current_lang_name ? this.Languages[this.current_lang_name.toLowerCase()].name : "";
                if (page_name !== "workspace") {
                    new_title = page.$elem.find(".content-title").hide().text();
                    REPLIT.changeTitle(new_title)
                } else {
                    REPLIT.changeTitle(REPLIT.current_lang_name)
                }
                this.min_content_width = this.ISMOBILE ? document.documentElement.clientWidth - 2 * this.RESIZER_WIDTH : page.min_width;
                this.max_content_width = page.max_width;
                if (FIRST_LOAD && page_name === "workspace") {
                    FIRST_LOAD = false;
                    page.width = document.documentElement.clientWidth - this.DEFAULT_CONTENT_PADDING
                }
                this.content_padding = document.documentElement.clientWidth - page.width;
                index = this.page_stack.indexOf(page_name);
                if (index > -1) {
                    this.page_stack.splice(index, 1)
                }
                this.page_stack.push(page_name);
                outerWidth = page.width;
                if (page_name !== "workspace") {
                    outerWidth += 2 * this.RESIZER_WIDTH
                }
                done = function () {
                    _this.changing_page = false;
                    page.$elem.focus();
                    return callback()
                };
                if (current_page) {
                    PAGES[current_page].width = $(".page:visible").width();
                    if (current_page === "workspace") {
                        PAGES[current_page].width += 2 * this.RESIZER_WIDTH
                    }
                    return PAGES[current_page].$elem.fadeOut(ANIMATION_DURATION, function () {
                        return _this.$container.animate({
                            width: outerWidth
                        }, ANIMATION_DURATION, function () {
                            page.$elem.css({
                                width: page.width,
                                display: "block",
                                opacity: 0
                            });
                            _this.OnResize();
                            return page.$elem.animate({
                                opacity: 1
                            }, ANIMATION_DURATION, done)
                        })
                    })
                } else {
                    this.$container.css({
                        width: outerWidth
                    });
                    page.$elem.css({
                        width: page.width,
                        display: "block"
                    });
                    this.OnResize();
                    return done()
                }
            }
        },
        CloseLastPage: function () {
            var closed_page;
            if (this.changing_page) {
                return
            }
            if (this.page_stack.length <= 1) {
                return Router.navigate("/")
            } else {
                closed_page = this.page_stack[this.page_stack.length - 1];
                Router.navigate(PAGES[this.page_stack[this.page_stack.length - 2]].path);
                return this.page_stack.splice(this.page_stack.indexOf(closed_page), 1)
            }
        }
    });
    $(function () {
        var $body, name, settings;
        REPLIT.$this.bind("language_loading", function (_, system_name) {
            var examples;
            examples = REPLIT.Languages[system_name.toLowerCase()].examples;
            if (!REPLIT.ISMOBILE) {
                REPLIT.LoadExamples(examples.editor, "editor", function (example) {
                    REPLIT.editor.getSession().doc.setValue(example);
                    return REPLIT.OpenPage("workspace", function () {
                        return REPLIT.editor.focus()
                    })
                })
            }
            return REPLIT.LoadExamples(examples.console, "console", function (example) {
                REPLIT.jqconsole.SetPromptText(example);
                return REPLIT.OpenPage("workspace", function () {
                    return REPLIT.jqconsole.Focus()
                })
            })
        });
        for (name in PAGES) {
            settings = PAGES[name];
            settings.$elem = $("#" + settings.id);
            if (REPLIT.ISMOBILE && name !== "workspace") {
                settings.width = 0
            }
        }
        $body = $("body");
        $body.delegate(".page-close", "click", function () {
            return REPLIT.CloseLastPage()
        });
        $(window).keydown(function (e) {
            if (e.which === KEY_ESCAPE && $(".page:visible") !== "#content-workspace") {
                return REPLIT.CloseLastPage()
            }
        });
        return $("#content-languages").keypress(function (e) {
            var letter;
            if (e.shiftKey || e.ctrlKey || e.metaKey) {
                return
            }
            letter = String.fromCharCode(e.which).toLowerCase();
            return $("#content-languages li a").each(function () {
                if ($("em", $(this)).text().toLowerCase() === letter) {
                    this.click();
                    return false
                }
            })
        })
    })
}.call(this);
! function () {
    var loc, replace_base;
    $(function () {
        var first_load;
        page("/", function () {
            return REPLIT.OpenPage("workspace")
        });
        page("/examples", function (context, next) {
            if (REPLIT.current_lang != null && REPLIT.jqconsole.GetState() === "prompt") {
                $("#examples-editor").toggle(REPLIT.split_ratio !== REPLIT.EDITOR_HIDDEN);
                $("#examples-console").toggle(REPLIT.split_ratio !== REPLIT.CONSOLE_HIDDEN);
                return REPLIT.OpenPage("examples")
            } else {
                return Router.navigate("/")
            }
        });
        page("/about", function () {
            return REPLIT.OpenPage("about")
        });
        page("/help", function () {
            return REPLIT.OpenPage("help")
        });
        page("/languages", function () {
            return REPLIT.OpenPage("languages")
        });
        page("/languages/:lang", function (context) {
            var lang, old_lang;
            REPLIT.url_language = true;
            if (lang = context.params.lang) {
                old_lang = REPLIT.current_lang_name;
                REPLIT.current_lang_name = lang;
                REPLIT.OpenPage("workspace");
                if (old_lang !== lang) {
                    return REPLIT.LoadLanguage(lang)
                }
            }
        });
        first_load = true;
        page("/:name/:num?/:page_name?", function (context) {
            var base, name, num, page_name, _ref;
            if (!first_load) {
                return window.location.reload()
            } else {
                _ref = context.params, name = _ref.name, num = _ref.num, page_name = _ref.page_name;
                if (num && !num.match(/\d+/)) {
                    page_name = num;
                    num = null
                }
                first_load = false;
                base = "/" + name;
                if (num) {
                    base += "/" + num
                }
                Router.change_base(base, false);
                if (page_name) {
                    return page("/" + page_name)
                } else {
                    return REPLIT.OpenPage("workspace")
                }
            }
        });
        return page()
    });
    loc = window.location;
    replace_base = function (href, old_base, new_base) {
        href = href.replace(old_base, "");
        if (href[0] === "/") {
            href = href.substr(1)
        }
        href = "" + new_base + "/" + href;
        return "/" + href.split("/").filter(function (p) {
            return !!p
        }).join("/")
    };
    window.Router = {
        base: "/",
        navigate: function (path, context) {
            if (loc.pathname !== path) {
                return page(path)
            }
        },
        change_base: function (path, navigate) {
            var old_base;
            if (navigate == null) {
                navigate = true
            }
            if (path === this.base) {
                return
            }
            old_base = this.base;
            this.base = path;
            $("a").each(function () {
                var href;
                href = $(this).attr("href");
                if (href[0] === "/") {
                    return $(this).attr("href", replace_base(href, old_base, path))
                }
            });
            page.base(this.base);
            if (navigate) {
                return page(this.base)
            }
        }
    }
}.call(this);
! function () {
    var $, SHARE_TEMPLATE, WAIT_BETWEEN_SAVES, reset_state;
    $ = jQuery;
    WAIT_BETWEEN_SAVES = 2e3;
    SHARE_TEMPLATE = {
        twitter: function () {
            var related, text, uri, url;
            text = "Check out my REPL session - ";
            related = "replit";
            url = window.location.href;
            uri = $.param({
                text: text,
                url: url,
                related: related
            });
            return '<a href="https://twitter.com/share?' + uri + '" target="_blank"></a>'
        },
        facebook: function () {
            return "<a href=\"javascript:var d=document,f='http://www.facebook.com/share',l=d.location,e=encodeURIComponent,p='.php?src=bm&v=4&i=1315186262&u='+e(l.href)+'&t='+e(d.title);1;try{if (!/^(.*.)?facebook.[^.]*$/.test(l.host))throw(0);share_internal_bookmarklet(p)}catch(z) {a=function() {if (!window.open(f+'r'+p,'sharer','toolbar=0,status=0,resizable=1,width=626,height=436'))l.href=f+p};if (/Firefox/.test(navigator.userAgent))setTimeout(a,0);else{a()}}void(0)\"></a>"
        },
        gplus: function () {
            var text;
            text = "Check out my REPL session - " + window.location.href;
            text = encodeURI(text);
            return '<a href="https://m.google.com/app/plus/x/bggo8s9j8yqo/?v=compose&content=' + text + '&login=1&pli=1&hideloc=1" target="_blank"></a>'
        }
    };
    $.extend(REPLIT, {
        session: {
            eval_history: []
        }
    });
    reset_state = function (e, lang_name) {
        localStorage.setItem("lang_name", lang_name);
        $("#replay-button").hide();
        this.session = {};
        this.session.eval_history = [];
        return Router.change_base("/")
    };
    $(function () {
        var bindSaveButton, lang_name, saveSession, unbindSaveButton;
        if (typeof REPLIT_DATA !== "undefined" && REPLIT_DATA !== null) {
            REPLIT.current_lang_name = REPLIT_DATA.language;
            REPLIT.LoadLanguage(REPLIT_DATA.language, function () {
                if (!REPLIT.ISMOBILE) {
                    REPLIT.editor.getSession().setValue(REPLIT_DATA.editor_text)
                }
                REPLIT.session.id = REPLIT_DATA.session_id;
                REPLIT.session.rid = REPLIT_DATA.revision_id;
                REPLIT.session.saved_eval_history = REPLIT_DATA.eval_history;
                $("#replay-button").show();
                delete window["REPLIT_DATA"];
                return REPLIT.$this.bind("language_loaded", reset_state)
            })
        } else if (!REPLIT.url_language) {
            REPLIT.$this.bind("language_loaded", reset_state);
            lang_name = localStorage.getItem("lang_name");
            if (lang_name != null) {
                REPLIT.loading_saved_lang = true;
                REPLIT.current_lang_name = lang_name;
                $(function () {
                    return REPLIT.LoadLanguage(lang_name)
                })
            } else {
                $("#languages-back").bind("click.language_modal", function (e) {
                    e.stopImmediatePropagation();
                    return false
                });
                $("#content-languages .language-group li").bind("click.language_modal", function (e) {
                    return REPLIT.Modal(false)
                });
                REPLIT.$this.bind("language_loaded.language_modal", function (e) {
                    return $("#languages-back").unbind("click.language_modal")
                });
                Router.navigate("/languages");
                REPLIT.Modal(true)
            }
        }
        $("#replay-button").click(function (e) {
            var handler, history, index, input_lock, input_unlock, locked, locked_queue;
            history = REPLIT.session.saved_eval_history;
            locked = false;
            locked_queue = [];
            index = -1;
            handler = function () {
                var _multiline;
                if (!locked) {
                    index++;
                    if (history[index] != null) {
                        REPLIT.jqconsole.SetPromptText(history[index]);
                        _multiline = REPLIT.jqconsole.multiline_callback;
                        REPLIT.jqconsole.multiline_callback = void 0;
                        REPLIT.jqconsole._HandleEnter();
                        return REPLIT.jqconsole.multiline_callback = _multiline
                    } else {
                        REPLIT.$this.unbind("result", handler);
                        REPLIT.$this.unbind("error", handler);
                        return delete REPLIT.session["saved_eval_history"]
                    }
                } else {
                    return locked_queue.push(handler)
                }
            };
            input_lock = function () {
                return locked = true
            };
            input_unlock = function () {
                var fn;
                locked = false;
                fn = locked_queue.shift();
                if (fn != null) {
                    return setTimeout(fn, 100)
                }
            };
            REPLIT.$this.bind("result", handler);
            REPLIT.$this.bind("error", handler);
            REPLIT.$this.bind("input", input_unlock);
            REPLIT.$this.bind("input_request", input_lock);
            handler();
            return $(this).hide()
        });
        saveSession = function (e) {
            var post_data;
            if (!(REPLIT.current_lang != null)) {
                return
            }
            post_data = {
                language: REPLIT.current_lang.system_name,
                editor_text: !REPLIT.ISMOBILE ? REPLIT.editor.getSession().getValue() : void 0,
                eval_history: JSON.stringify(REPLIT.session.eval_history),
                console_dump: REPLIT.jqconsole.Dump()
            };
            if (REPLIT.session.id != null) {
                post_data.id = REPLIT.session.id
            }
            return $.post("/save", post_data, function (data) {
                var $savebox, revision_id, session_id;
                session_id = data.session_id, revision_id = data.revision_id;
                $savebox = $("#save-box");
                if (revision_id > 0) {
                    Router.change_base("/" + session_id + "/" + revision_id)
                } else {
                    Router.change_base("/" + session_id)
                }
                REPLIT.session.id = session_id;
                REPLIT.session.rid = revision_id;
                $savebox.find("li.twitter a").replaceWith(SHARE_TEMPLATE.twitter());
                $savebox.find("li.facebook a").replaceWith(SHARE_TEMPLATE.facebook());
                $savebox.find("li.gplus a").replaceWith(SHARE_TEMPLATE.gplus());
                $savebox.find("input").val(window.location.href);
                $savebox.find(".downloads a.editor").attr("href", "/download/editor/" + session_id + "/" + revision_id + "/");
                $savebox.find(".downloads a.repl").attr("href", "/download/repl/" + session_id + "/" + revision_id + "/");
                $savebox.slideDown();
                $savebox.click(function (e) {
                    return e.stopPropagation()
                });
                $("body").bind("click.closesave", function () {
                    $savebox.slideUp();
                    return $("body").unbind("click.closesave")
                });
                unbindSaveButton();
                return setTimeout(bindSaveButton, WAIT_BETWEEN_SAVES)
            })
        };
        bindSaveButton = function () {
            return $("#button-save").click(saveSession)
        };
        unbindSaveButton = function () {
            return $("#button-save").unbind("click")
        };
        bindSaveButton();
        $("#save-box input").click(function () {
            return $(this).select()
        });
        return REPLIT.$this.bind("eval", function (e, command) {
            return REPLIT.session.eval_history.push(command)
        })
    })
}.call(this);
! function () {
    var _ref;
    if (!(this.REPLIT != null)) {
        this.REPLIT = exports
    }
    this.REPLIT.Languages = {
        qbasic: {
            name: "QBasic",
            tagline: "Structured programming for beginners.",
            shortcut: "Q",
            about_link: "http://en.wikipedia.org/wiki/QBasic",
            engine_link: "https://github.com/replit/jsrepl/tree/master/extern/qb.js",
            examples: {
                editor: "/langs/qbasic/examples-editor.html",
                console: "/langs/qbasic/examples-console.html"
            },
            header: "QBasic (qb.js)\nCopyright (c) 2010 Steve Hanov"
        },
        forth: {
            name: "Forth",
            tagline: "An interactive stack-oriented language.",
            shortcut: "h",
            about_link: "http://en.wikipedia.org/wiki/Forth_(programming_language)",
            engine_link: "https://github.com/replit/jsrepl/blob/master/extern/jsforth/jsforth.js",
            examples: {
                editor: "/langs/forth/examples-editor.html",
                console: "/langs/forth/examples-console.html"
            },
            header: "JS-Forth 0.5200804171342\nhttp://www.forthfreak.net/jsforth.html\nThis program is published under the GPL.",
            ace_mode: {
                script: "/lib/ace/mode-forth.js",
                module: "ace/mode/forth"
            }
        },
        lolcode: {
            name: "LOLCODE",
            tagline: "The basic language of lolcats.",
            shortcut: "O",
            about_link: "http://lolcode.com/specs/1.2",
            engine_link: "https://github.com/replit/lol-coffee",
            examples: {
                editor: "/langs/lolcode/examples-editor.html",
                console: "/langs/lolcode/examples-console.html"
            },
            header: "LOLCODE v1.2 (lol-coffee)\nCopyright (c) 2011 Max Shawabkeh"
        },
        brainfuck: {
            name: "Brainfuck",
            tagline: "A pure Turing machine controller.",
            shortcut: "f",
            about_link: "http://en.wikipedia.org/wiki/Brainfuck",
            engine_link: "https://github.com/replit/bfjs",
            examples: {
                editor: "/langs/brainfuck/examples-editor.html",
                console: "/langs/brainfuck/examples-console.html"
            },
            header: "Brainfuck, bfjs\nCopyright (c) 2011 Amjad Masad"
        },
        emoticon: {
            name: "Emoticon",
            tagline: "Programming with an extra dose of smile.",
            shortcut: "E",
            about_link: "http://www.teuton.org/~stranger/code/emoticon/manual.php",
            engine_link: "https://github.com/replit/emoticoffee",
            examples: {
                editor: "/langs/emoticon/examples-editor.html",
                console: "/langs/emoticon/examples-console.html"
            },
            header: "Emoticon v1.5 (emoticoffee)\nCopyright (c) 2011 Amjad Masad"
        },
        bloop: {
            name: "Bloop",
            tagline: "Nothing but bounded loops.",
            shortcut: "B",
            about_link: "http://en.wikipedia.org/wiki/BlooP_and_FlooP",
            engine_link: "https://github.com/replit/jsrepl/blob/master/extern/bloop/bloop.js",
            examples: {
                editor: "/langs/bloop/examples-editor.html",
                console: "/langs/bloop/examples-console.html"
            },
            header: "BlooPjs\nCopyright (c) 2005 Tim Cameron Ryan\nBased on Perl code by John Cowan, 1994"
        },
        unlambda: {
            name: "Unlambda",
            tagline: "Functional purity given form.",
            shortcut: "U",
            about_link: "http://en.wikipedia.org/wiki/Unlambda",
            engine_link: "https://github.com/replit/unlambda-coffee",
            examples: {
                editor: "/langs/unlambda/examples-editor.html",
                console: "/langs/unlambda/examples-console.html"
            },
            header: "Unlambda v2.0 (unlambda-coffee)\nCopyright (c) 2011 Max Shawabkeh"
        },
        javascript: {
            name: "JavaScript",
            tagline: "The de facto language of the Web.",
            shortcut: "J",
            about_link: "http://en.wikipedia.org/wiki/Javascript",
            engine_link: "http://en.wikipedia.org/wiki/JavaScript_engine#JavaScript_engines",
            examples: {
                editor: "/langs/javascript/examples-editor.html",
                console: "/langs/javascript/examples-console.html"
            },
            ace_mode: {
                script: "/lib/ace/mode-javascript.js",
                module: "ace/mode/javascript"
            },
            header: "Native " + (typeof $ !== "undefined" && $ !== null ? $.browser.webkit ? navigator.userAgent.match(/Android/) ? "Android" : navigator.userAgent.match(/Chrome/) ? "Chrome" : "WebKit" : $.browser.opera ? "Opera" : $.browser.msie ? "Internet Explorer" : $.browser.mozilla ? "Mozilla Firefox" : "Browser" : "Unknown") + " JavaScript.\nCopyright (c) 2013 " + ((typeof navigator !== "undefined" && navigator !== null ? (_ref = navigator.vendor) != null ? _ref.replace(/\.$/, "") : void 0 : void 0) || (typeof $ !== "undefined" && $ !== null ? $.browser.webkit ? "Apple Inc" : $.browser.opera ? "Opera Software ASA" : $.browser.msie ? "Microsoft" : $.browser.mozilla ? "Mozilla Foundation" : "Browser Vendor" : ""))
        },
        traceur: {
            name: "Javascript.next",
            tagline: "The JavaScript of tomorrow.",
            shortcut: "n",
            about_link: "http://wiki.ecmascript.org/doku.php?id=harmony:harmony",
            engine_link: "http://code.google.com/p/traceur-compiler/",
            examples: {
                editor: "/langs/traceur/examples-editor.html",
                console: "/langs/traceur/examples-console.html"
            },
            header: "Traceur Compiler v0.10\nCopyright (c) 2011 Google Inc."
        },
        coffeescript: {
            name: "CoffeeScript",
            tagline: "Unfancy JavaScript.",
            shortcut: "C",
            about_link: "http://jashkenas.github.com/coffee-script/",
            engine_link: "https://github.com/jashkenas/coffee-script/",
            examples: {
                editor: "/langs/coffee-script/examples-editor.html",
                console: "/langs/coffee-script/examples-console.html"
            },
            ace_mode: {
                script: "/lib/ace/mode-coffee.js",
                module: "ace/mode/coffee"
            },
            header: "CoffeeScript v1.3.1\nCopyright (c) 2011, Jeremy Ashkenas"
        },
        kaffeine: {
            name: "Kaffeine",
            tagline: "Extended JavaScript for pros.",
            shortcut: "K",
            about_link: "http://weepy.github.com/kaffeine/",
            engine_link: "https://github.com/weepy/kaffeine",
            examples: {
                editor: "/langs/kaffeine/examples-editor.html",
                console: "/langs/kaffeine/examples-console.html"
            },
            header: "| |/ /__ _ / _|/ _|___(_)_ _  ___\n| ' </ _` |  _|  _/ -_) | ' \\/ -_)\n|_|\\_\\__,_|_| |_| \\___|_|_||_\\___|\nVersion 0.0.4, Copyright (c) 2010 Jonah Fox"
        },
        move: {
            name: "Move",
            tagline: "The easy way to program the web.",
            shortcut: "M",
            about_link: "http://movelang.org/",
            engine_link: "https://github.com/rsms/move",
            examples: {
                editor: "/langs/move/examples-editor.html",
                console: "/langs/move/examples-console.html"
            },
            header: "Move v0.4.3\nCopyright (c) 2011 Rasmus Andersson"
        },
        scheme: {
            name: "Scheme",
            tagline: "An elegant dynamic dialect of Lisp.",
            shortcut: "S",
            about_link: "http://en.wikipedia.org/wiki/Scheme_(programming_language)",
            engine_link: "https://github.com/yhara/biwascheme",
            examples: {
                editor: "/langs/scheme/examples-editor.html",
                console: "/langs/scheme/examples-console.html"
            },
            ace_mode: {
                script: "/lib/ace/mode-scheme.js",
                module: "ace/mode/scheme"
            },
            header: "BiwaScheme Interpreter version 0.5.7\nCopyright (C) 2007-2010 Yutaka HARA and the BiwaScheme team"
        },
        lua: {
            name: "Lua",
            tagline: "A lightweight multi-paradigm scripting language.",
            shortcut: "L",
            about_link: "http://en.wikipedia.org/wiki/Lua_(programming_language)",
            engine_link: "https://github.com/replit/jsrepl/tree/master/extern/lua",
            examples: {
                editor: "/langs/lua/examples-editor.html",
                console: "/langs/lua/examples-console.html"
            },
            ace_mode: {
                script: "/lib/ace/mode-lua.js",
                module: "ace/mode/lua"
            },
            header: "Lua 5.1  Copyright (C) 1994-2006 Lua.org, PUC-Rio\n[GCC 4.2.1 (LLVM, Emscripten 1.5)] on linux2"
        },
        python: {
            name: "Python",
            tagline: "A dynamic language emphasizing readability.",
            shortcut: "P",
            about_link: "http://en.wikipedia.org/wiki/Python_(programming_language)",
            engine_link: "https://github.com/replit/empythoned",
            examples: {
                editor: "/langs/python/examples-editor.html",
                console: "/langs/python/examples-console.html"
            },
            ace_mode: {
                script: "/lib/ace/mode-python.js",
                module: "ace/mode/python"
            },
            header: "Python 2.7.2 (default, Jul 20 2011, 02:32:18)\n[GCC 4.2.1 (LLVM, Emscripten 1.5, Empythoned)] on linux2"
        },
        ruby: {
            name: "Ruby (beta)",
            tagline: "A natural dynamic object-oriented language.",
            shortcut: "R",
            about_link: "http://en.wikipedia.org/wiki/Ruby_(programming_language)",
            engine_link: "https://github.com/replit/emscripted-ruby",
            examples: {
                editor: "/langs/ruby/examples-editor.html",
                console: "/langs/ruby/examples-console.html"
            },
            ace_mode: {
                script: "/lib/ace/mode-ruby.js",
                module: "ace/mode/ruby"
            },
            header: "Ruby 1.8.7 (2008-05-31 patchlevel 0) [x86-linux]\n[GCC 4.2.1 (LLVM, Emscripten 1.5, Emscripted-Ruby)]"
        },
        roy: {
            name: "Roy",
            tagline: "Small functional language that compiles to JavaScript.",
            shortcut: "y",
            about_link: "http://roy.brianmckenna.org/",
            engine_link: "https://github.com/pufuwozu/roy",
            examples: {
                editor: "/langs/roy/examples-editor.html",
                console: "/langs/roy/examples-console.html"
            },
            header: "Roy 0.1.3\nCopyright (C) 2011 Brian McKenna"
        }
    }
}.call(this);
! function () {
    var $;
    $ = jQuery;
    $.extend(REPLIT, {
        language_start_time: null,
        InitAnalytics: function () {
            var first_script, ga_script;
            window._gaq.push(["_setAccount", "UA-25629695-1"]);
            window._gaq.push(["_setDomainName", "none"]);
            window._gaq.push(["_setAllowLinker", true]);
            window._gaq.push(["_trackPageview"]);
            ga_script = document.createElement("script");
            ga_script.type = "text/javascript";
            ga_script.async = true;
            ga_script.src = "http://www.google-analytics.com/ga.js";
            first_script = document.getElementsByTagName("script")[0];
            return first_script.parentNode.insertBefore(ga_script, first_script)
        }
    });
    $(function () {
        window._gaq = window._gaq || [];
        $(window).load(REPLIT.InitAnalytics);
        REPLIT.$this.bind("language_loading", function (_, system_name) {
            REPLIT.language_start_time = Date.now();
            return window._gaq.push(["_trackEvent", "language", "loading", system_name])
        });
        REPLIT.$this.bind("language_loaded", function (_, system_name) {
            var event, time_taken;
            if (REPLIT.language_start_time != null) {
                time_taken = Date.now() - REPLIT.language_start_time;
                event = REPLIT.loading_saved_lang ? "reloaded" : "loaded";
                REPLIT.loading_saved_lang = false;
                return window._gaq.push(["_trackEvent", "language", event, system_name, time_taken])
            }
        });
        $("#button-languages").click(function () {
            return window._gaq.push(["_trackEvent", "button", "languages"])
        });
        $("#button-examples").click(function () {
            return window._gaq.push(["_trackEvent", "button", "examples"])
        });
        $("#button-save").click(function () {
            return window._gaq.push(["_trackEvent", "button", "save"])
        });
        $("#button-help").click(function () {
            return window._gaq.push(["_trackEvent", "button", "help"])
        });
        $("#link-about").click(function () {
            return window._gaq.push(["_trackEvent", "link", "about"])
        });
        $("#link-source-code").click(function () {
            return window._gaq.push(["_trackEvent", "link", "source"])
        });
        $("#language-about-link").click(function () {
            return window._gaq.push(["_trackEvent", "link", "language"])
        });
        return $("#language-engine-link").click(function () {
            return window._gaq.push(["_trackEvent", "link", "engine"])
        })
    })
}.call(this);