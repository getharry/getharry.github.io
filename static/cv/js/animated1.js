!function() {
    function e() {
        u = window.innerWidth,
        v = window.innerHeight,
        g = {
            x: u / 2,
            y: v / 2
        },
        f = document.getElementById("canvas-stage"),
        h = document.getElementById("demo-canvas"),
        h.width = u,
        h.height = v,
        m = h.getContext("2d"),
        w = [];
        for (var e = 0; u > e; e += u / 20) for (var n = 0; v > n; n += v / 20) {
            var t = e + Math.random() * u / 20,
            o = n + Math.random() * v / 20,
            i = {
                x: t,
                originX: t,
                y: o,
                originY: o
            };
            w.push(i)
        }
        for (var a = 0; a < w.length; a++) {
            for (var r = [], c = w[a], l = 0; l < w.length; l++) {
                var y = w[l];
                if (c != y) {
                    for (var p = !1,
                    M = 0; 5 > M; M++) p || void 0 == r[M] && (r[M] = y, p = !0);
                    for (var M = 0; 5 > M; M++) p || s(c, y) < s(c, r[M]) && (r[M] = y, p = !0)
                }
            }
            c.closest = r
        }
        for (var a in w) {
            var b = new d(w[a], 2 + 2 * Math.random(), "rgba(255,255,255,0.3)");
            w[a].circle = b
        }
    }
    function n() {
        "ontouchstart" in window || window.addEventListener("mousemove", t),
        window.addEventListener("scroll", o),
        window.addEventListener("resize", i)
    }
    function t(e) {
        var n = posy = 0;
        e.pageX || e.pageY ? (n = e.pageX, posy = e.pageY) : (e.clientX || e.clientY) && (n = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop),
        g.x = n,
        g.y = posy
    }
    function o() {
        y = document.body.scrollTop > v ? !1 : !0
    }
    function i() {
        u = window.innerWidth,
        v = window.innerHeight,
        h.width = u,
        h.height = v
    }
    function a() {
        r();
        for (var e in w) c(w[e])
    }
    function r() {
        if (y) {
            m.clearRect(0, 0, u, v);
            for (var e in w) Math.abs(s(g, w[e])) < 4e3 ? (w[e].active = .3, w[e].circle.active = .6) : Math.abs(s(g, w[e])) < 2e4 ? (w[e].active = .1, w[e].circle.active = .3) : Math.abs(s(g, w[e])) < 4e4 ? (w[e].active = .02, w[e].circle.active = .1) : (w[e].active = 0, w[e].circle.active = 0),
            l(w[e]),
            w[e].circle.draw()
        }
        requestAnimationFrame(r)
    }
    function c(e) {
        TweenLite.to(e, 1 + 1 * Math.random(), {
            x: e.originX - 50 + 100 * Math.random(),
            y: e.originY - 50 + 100 * Math.random(),
            ease: Circ.easeInOut,
            onComplete: function() {
                c(e)
            }
        })
    }
    function l(e) {
        if (e.active) for (var n in e.closest) m.beginPath(),
        m.moveTo(e.x, e.y),
        m.lineTo(e.closest[n].x, e.closest[n].y),
        m.strokeStyle = "rgba(255,255,255," + e.active + ")",
        m.stroke()
    }
    function d(e, n, t) {
        var o = this; !
        function() {
            o.pos = e || null,
            o.radius = n || null,
            o.color = t || null
        } (),
        this.draw = function() {
            o.active && (m.beginPath(), m.arc(o.pos.x, o.pos.y, o.radius, 0, 2 * Math.PI, !1), m.fillStyle = "rgba(255,255,255," + o.active + ")", m.fill())
        }
    }
    function s(e, n) {
        return Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)
    }
    var u, v, f, h, m, w, g, y = !0;
    e(),
    a(),
    n()
} ();