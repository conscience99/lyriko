(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    100: function (e, t, s) {
      "use strict";
      s.r(t);
      var c = s(1),
        a = s(17),
        n = s.n(a),
        i = s(101),
        r = (s(46), s(2)),
        o = s.p + "static/media/logo.180d59c5.png",
        l = (s(47), s(16)),
        j = s(6),
        d = s(10),
        u = s(102),
        b = (s(48), s(49), s(4)),
        h = s(3),
        m = s(0),
        O = function (e) {
          var t = e.logo,
            s = e.openMobileMenu,
            c = e.handleMobileMenuOpen,
            a = e.user,
            n = e.logout;
          return Object(m.jsxs)("nav", {
            className: "nav-wrapper",
            children: [
              Object(m.jsxs)("div", {
                className: "main-nav",
                children: [
                  Object(m.jsxs)("div", {
                    className: "brand-wrapper",
                    onClick: function () {
                      window.location.href = "/";
                    },
                    children: [
                      Object(m.jsx)("img", {
                        className: "brand-img",
                        src: t,
                        alt: "Lyriko Logo",
                      }),
                      Object(m.jsx)("span", {
                        className: "brand-name-nav",
                        children: "Lyriko",
                      }),
                    ],
                  }),
                  Object(m.jsxs)("div", {
                    className: "nav-links-wrapper",
                    children: [
                      Object(m.jsxs)("ul", {
                        className: "nav-links",
                        children: [
                          Object(m.jsx)("li", {
                            className: "nav-link",
                            children: Object(m.jsx)(j.b, {
                              to: "/watchlist",
                              onClick: function () {
                                return c();
                              },
                              children: Object(m.jsxs)("span", {
                                className: "nav-link-item",
                                children: [
                                  Object(m.jsx)(b.a, {
                                    className: "nav-link-icon",
                                    icon: h.k,
                                  }),
                                  "Watchlist",
                                ],
                              }),
                            }),
                          }),
                          Object(m.jsx)("li", {
                            className: "nav-link",
                            children: Object(m.jsx)(j.b, {
                              to: "/history",
                              onClick: function () {
                                return c();
                              },
                              children: Object(m.jsxs)("span", {
                                className: "nav-link-item",
                                children: [
                                  Object(m.jsx)(b.a, {
                                    className: "nav-link-icon",
                                    icon: h.l,
                                  }),
                                  "History",
                                ],
                              }),
                            }),
                          }),
                          Object(m.jsxs)("li", {
                            className: "nav-account",
                            children: [
                              Object(m.jsxs)(j.b, {
                                to: a.user ? "" : "/login",
                                className: "nav-account-item",
                                onClick: function () {
                                  return c();
                                },
                                children: [
                                  Object(m.jsx)(b.a, {
                                    className: "nav-account-icon",
                                    icon: h.y,
                                  }),
                                  a.user
                                    ? " ".concat(a.user.username)
                                    : "Login",
                                ],
                              }),
                              a.user
                                ? Object(m.jsx)("div", {
                                    className: "sub-acct-menu",
                                    children: Object(m.jsxs)("ul", {
                                      className: "drop-sub-acct-menu",
                                      children: [
                                        Object(m.jsxs)("li", {
                                          onClick: function () {
                                            return n();
                                          },
                                          children: [
                                            Object(m.jsx)(b.a, { icon: h.r }),
                                            " Logout",
                                          ],
                                        }),
                                        Object(m.jsx)("li", {
                                          children: Object(m.jsxs)(j.b, {
                                            to: "/user/account",
                                            children: [
                                              Object(m.jsx)(b.a, { icon: h.u }),
                                              " Account",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  })
                                : "",
                            ],
                          }),
                        ],
                      }),
                      Object(m.jsx)("div", {
                        className: "menu-bars",
                        children: s
                          ? Object(m.jsx)(b.a, { onClick: c, icon: h.s })
                          : Object(m.jsx)(b.a, { onClick: c, icon: h.b }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(m.jsx)("div", {
                className: s ? "mobile-menu open" : "mobile-menu close",
                children: Object(m.jsxs)("ul", {
                  className: s
                    ? "nav-links-mobile open"
                    : "nav-links-mobile close",
                  children: [
                    Object(m.jsx)("li", {
                      className: "nav-link-mobile",
                      children: Object(m.jsx)(j.b, {
                        to: "/watchlist",
                        onClick: function () {
                          return c();
                        },
                        children: Object(m.jsxs)("span", {
                          className: "nav-link-item-mobile",
                          children: [
                            Object(m.jsx)(b.a, {
                              className: "nav-link-icon-mobile",
                              icon: h.k,
                            }),
                            "Watchlist",
                          ],
                        }),
                      }),
                    }),
                    Object(m.jsx)("li", {
                      className: "nav-link-mobile",
                      children: Object(m.jsx)(j.b, {
                        to: "/history",
                        onClick: function () {
                          return c();
                        },
                        children: Object(m.jsxs)("span", {
                          className: "nav-link-item-mobile",
                          children: [
                            Object(m.jsx)(b.a, {
                              className: "nav-link-icon-mobile",
                              icon: h.l,
                            }),
                            "History",
                          ],
                        }),
                      }),
                    }),
                    a.user
                      ? Object(m.jsx)("li", {
                          className: "nav-link-mobile bottom",
                          children: Object(m.jsxs)(j.b, {
                            to: "/user/account",
                            className: "nav-link-item-mobile",
                            onClick: function () {
                              return c();
                            },
                            children: [
                              Object(m.jsx)(b.a, {
                                className: "nav-link-icon-mobile",
                                icon: h.u,
                              }),
                              "Account",
                            ],
                          }),
                        })
                      : "",
                    Object(m.jsx)("li", {
                      className: "nav-link-mobile bottom",
                      children: Object(m.jsxs)(j.b, {
                        to: a.user ? "" : "/login",
                        className: "nav-link-item-mobile",
                        onClick: function () {
                          !(function () {
                            if (!a.user) return !1;
                            n();
                          })(),
                            c();
                        },
                        children: [
                          Object(m.jsx)(b.a, {
                            className: "nav-link-icon-mobile",
                            icon: h.y,
                          }),
                          a.user ? "Logout ".concat(a.user.username) : "Login",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        p =
          (s(58),
          function (e) {
            var t = e.logo;
            e.user, e.logout;
            return Object(m.jsx)("footer", {
              className: "footer",
              children: Object(m.jsxs)("div", {
                className: "main-footer",
                children: [
                  Object(m.jsx)("div", {
                    className: "about-brand",
                    children: Object(m.jsx)("div", {
                      className: "_brand",
                      children: Object(m.jsxs)("div", {
                        className: "about-text",
                        children: [
                          Object(m.jsxs)("div", {
                            className: "abt-brd-wrap",
                            children: [
                              Object(m.jsx)("img", {
                                className: "brand-logo",
                                src: t,
                              }),
                              Object(m.jsx)("span", {
                                className: "brand-name",
                                children: "Lyriko",
                              }),
                            ],
                          }),
                          Object(m.jsxs)("p", {
                            className: "about-txt",
                            children: [
                              " Lyriko is just another music lyrics\nprovider, but with little differnece.\nLyriko allows you to find lyrics of\nalmost any song, which is quite\nusual, but also allows you to add\nlyrics to your watchlist to view later,\nexport to pdf and also copy to\nclipboard very easily! Lyriko also logs\nyour history so you can get back\nto your viewed lyrics later with ease!",
                              " ",
                              Object(m.jsx)("span", {
                                className: "abt-txt-rdmr",
                                children: "Read more",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(m.jsxs)("div", {
                    className: "useful-links",
                    children: [
                      Object(m.jsxs)("h3", {
                        className: "useful-link-txt",
                        children: [
                          "Useful Links ",
                          Object(m.jsx)(b.a, { icon: h.n }),
                        ],
                      }),
                      Object(m.jsx)("div", {
                        className: "footer-links-wraper",
                        children: Object(m.jsxs)("ul", {
                          className: "footer-link",
                          children: [
                            Object(m.jsx)("li", {
                              className: "footer-link-item",
                              children: Object(m.jsxs)(j.b, {
                                to: "/walkthrough",
                                children: [
                                  Object(m.jsx)(b.a, {
                                    className: "footer-link-icon",
                                    icon: h.c,
                                  }),
                                  "Walk through",
                                ],
                              }),
                            }),
                            Object(m.jsx)("li", {
                              className: "footer-link-item",
                              children: Object(m.jsxs)(j.b, {
                                to: "/watchlist",
                                children: [
                                  Object(m.jsx)(b.a, {
                                    className: "footer-link-icon",
                                    icon: h.k,
                                  }),
                                  "Watchlist",
                                ],
                              }),
                            }),
                            Object(m.jsx)("li", {
                              className: "footer-link-item",
                              children: Object(m.jsxs)(j.b, {
                                to: "/history",
                                children: [
                                  Object(m.jsx)(b.a, {
                                    className: "footer-link-icon",
                                    icon: h.l,
                                  }),
                                  "History",
                                ],
                              }),
                            }),
                            Object(m.jsx)("li", {
                              className: "footer-link-item",
                              children: Object(m.jsxs)(j.b, {
                                to: "/contact",
                                children: [
                                  Object(m.jsx)(b.a, {
                                    className: "footer-link-icon",
                                    icon: h.w,
                                  }),
                                  "Contact",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(m.jsxs)("div", {
                    className: "footer-bottom",
                    children: [
                      Object(m.jsx)("p", {
                        className: "copyright",
                        children: "Lyrico 2021\xa9",
                      }),
                      Object(m.jsxs)("p", {
                        className: "maker",
                        children: [
                          "Made with",
                          " ",
                          Object(m.jsx)(b.a, {
                            style: { color: "red" },
                            icon: h.k,
                          }),
                          " by Conscience",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        x = s(39),
        f = s.n(x),
        v =
          (s(59),
          function (e) {
            var t = e.getLyrics,
              s = e.openMobileMenu,
              a = e.random,
              n = Object(c.useState)(""),
              i = Object(r.a)(n, 2),
              o = i[0],
              l = i[1],
              j = Object(c.useState)(""),
              d = Object(r.a)(j, 2),
              u = d[0],
              O = d[1],
              p = Object(c.useState)(!1),
              x = Object(r.a)(p, 2),
              v = x[0],
              N = x[1],
              y = Object(c.useState)(""),
              g = Object(r.a)(y, 2),
              k = g[0],
              w = g[1],
              S = function (e, s) {
                return "" !== s && "" !== e && (t(e, s), O(""), void l(""));
              },
              C = function (e) {
                "Title" == e
                  ? o.length <= 2
                    ? N(!1)
                    : o.length >= 2 &&
                      fetch("https://lyriko.herokuapp.com/api/suggest", {
                        method: "POST",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({ type: "title", title: o }),
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          w(e.suggestions),
                            e.suggestions.length >= 1
                              ? N(!0)
                              : e.suggestions < 1 && N(!1);
                        })
                  : u.length <= 2
                  ? N(!1)
                  : u.length >= 2 &&
                    fetch("https://lyriko.herokuapp.com/api/suggest", {
                      method: "POST",
                      headers: { "Content-type": "application/json" },
                      body: JSON.stringify({ type: "artist", artist: u }),
                    })
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        w(e.suggestions),
                          e.suggestions.length >= 1
                            ? N(!0)
                            : e.suggestions < 1 && N(!1);
                      });
              };
            return Object(m.jsxs)("div", {
              className: "request-form",
              children: [
                Object(m.jsxs)("div", {
                  className: "r-form-wrapper",
                  children: [
                    Object(m.jsxs)("div", {
                      className: "request-form-title",
                      children: [
                        Object(m.jsx)("div", {
                          children: Object(m.jsx)(b.a, {
                            role: "icon",
                            className: "f-t-icon",
                            icon: h.o,
                          }),
                        }),
                        Object(m.jsx)("div", {
                          children: Object(m.jsx)("input", {
                            className: "form-title",
                            type: "text",
                            value: o,
                            onChange: function (e) {
                              l(e.target.value);
                            },
                            onKeyUp: function () {
                              C("Title");
                            },
                            placeholder: "Song",
                          }),
                        }),
                      ],
                    }),
                    Object(m.jsxs)("div", {
                      className: "request-form-artist",
                      children: [
                        Object(m.jsx)("div", {
                          children: Object(m.jsx)(b.a, {
                            className: "f-a-icon",
                            icon: h.e,
                          }),
                        }),
                        Object(m.jsx)("div", {
                          children: Object(m.jsx)("input", {
                            className: "form-artist",
                            value: u,
                            onChange: function (e) {
                              O(e.target.value);
                            },
                            onKeyUp: function () {
                              C("Artist");
                            },
                            type: "text",
                            placeholder: "Artist",
                          }),
                        }),
                      ],
                    }),
                    Object(m.jsx)("button", {
                      className: "d-r-f-button",
                      onClick: function () {
                        return S(u, o);
                      },
                      children: Object(m.jsx)(b.a, {
                        className: "d-f-s-icon",
                        icon: h.q,
                      }),
                    }),
                    Object(m.jsx)("button", {
                      className: "d-r-f-button",
                      onClick: function () {
                        return a();
                      },
                      children: Object(m.jsx)(b.a, {
                        className: "d-f-s-icon",
                        icon: h.p,
                      }),
                    }),
                  ],
                }),
                Object(m.jsx)("div", {
                  className: v
                    ? "suggestion-wrapper drop"
                    : "suggestion-wrapper",
                  children: s
                    ? ""
                    : Object(m.jsx)("div", {
                        className: "suggestion",
                        children: Object(m.jsx)("ul", {
                          className: "suggestion-list",
                          children: k
                            ? k.map(function (e) {
                                return Object(m.jsxs)(
                                  "li",
                                  {
                                    className: "suggestion-list-item",
                                    onClick: function () {
                                      S(e.artist, e.title), N(!1);
                                    },
                                    children: [
                                      Object(m.jsx)(b.a, {
                                        className: "s-icon",
                                        icon: h.o,
                                      }),
                                      Object(m.jsx)(f.a, {
                                        highlightClassName: "present-txt",
                                        searchWords: ["".concat(o)],
                                        autoEscape: !0,
                                        textToHighlight: e.title,
                                      }),
                                      Object(m.jsx)("span", {
                                        className: "s-artist",
                                        children: e.artist,
                                      }),
                                    ],
                                  },
                                  e.id
                                );
                              })
                            : "",
                        }),
                      }),
                }),
                Object(m.jsx)("div", {
                  className: "request-form-button",
                  children: Object(m.jsxs)("button", {
                    className: "r-f-button",
                    onClick: function () {
                      return S(u, o);
                    },
                    children: [
                      Object(m.jsx)(b.a, { className: "f-s-icon", icon: h.q }),
                      " Search",
                    ],
                  }),
                }),
              ],
            });
          }),
        N = (s(60), s(11)),
        y = function (e) {
          var t = e.lyrics,
            s = e.notFound,
            c = e.lyricsLoading,
            a = e.random,
            n = e.watchlisted,
            i = e.removeWatchlist,
            r = e.addWatchlist;
          return Object(m.jsx)("div", {
            className: "lyrics-main",
            children: Object(m.jsx)("div", {
              className: "lyrics-wrapper",
              children: Object(m.jsxs)("div", {
                className: "lyrics",
                children: [
                  Object(m.jsx)("div", {
                    children: c
                      ? Object(m.jsx)("div", {
                          className: "loader",
                          children: Object(m.jsx)(N.ScaleLoader, {
                            color: "#e9042a",
                            loading: c,
                            height: 55,
                            width: 25,
                            radius: 5,
                          }),
                        })
                      : Object(m.jsxs)("div", {
                          children: [
                            Object(m.jsx)("div", {
                              className: "lyrics-title-wrapper",
                              children: Object(m.jsx)("div", {
                                className: "lyrics-title",
                                children: Object(m.jsx)("span", {
                                  children: t ? t.title : "",
                                }),
                              }),
                            }),
                            Object(m.jsx)("div", {
                              className: "lyrics-artist-wrapper",
                              children: Object(m.jsx)("div", {
                                className: "lyrics-artist",
                                children: Object(m.jsx)("span", {
                                  children: t ? t.artist : "",
                                }),
                              }),
                            }),
                            Object(m.jsxs)("div", {
                              className: "lyrics-text-wrapper",
                              children: [
                                Object(m.jsx)("div", {
                                  className: "lyrics-text",
                                  children: Object(m.jsx)("p", {
                                    className: "l-txt",
                                    children: t ? t.body : "",
                                  }),
                                }),
                                Object(m.jsx)("br", {}),
                              ],
                            }),
                            t
                              ? Object(m.jsx)("div", {
                                  className: "lyrics-footer-wrapper",
                                  children: Object(m.jsxs)("div", {
                                    className: "lyrics-footer",
                                    children: [
                                      Object(m.jsx)("div", {
                                        className: "lyrics-footer-item",
                                        children: Object(m.jsx)("i", {
                                          style: {
                                            color:
                                              "true" === n ? "red" : "white",
                                          },
                                          onClick: function () {
                                            "true" === n ? i(t.id) : r(t.id);
                                          },
                                          children: Object(m.jsx)(b.a, {
                                            icon: h.k,
                                          }),
                                        }),
                                      }),
                                      Object(m.jsx)("div", {
                                        className: "lyrics-footer-item",
                                        children: Object(m.jsx)("i", {
                                          children: Object(m.jsx)(b.a, {
                                            icon: h.i,
                                          }),
                                        }),
                                      }),
                                      Object(m.jsx)("div", {
                                        className: "lyrics-footer-item",
                                        children: Object(m.jsx)("i", {
                                          children: Object(m.jsx)(b.a, {
                                            icon: h.f,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                })
                              : "",
                          ],
                        }),
                  }),
                  s
                    ? Object(m.jsx)("div", {
                        className: "not-found-wrapper",
                        children: Object(m.jsxs)("div", {
                          className: "not-found",
                          children: [
                            Object(m.jsx)("div", {
                              className: "s-txt-wr",
                              children: Object(m.jsx)("span", {
                                children:
                                  "Sorry, we could not get that lyrics :(",
                              }),
                            }),
                            Object(m.jsx)("div", {
                              className: "shuffle-wrpper",
                              onClick: function () {
                                return a();
                              },
                              children: Object(m.jsxs)("div", {
                                className: "shuffle",
                                children: [
                                  Object(m.jsx)("div", {
                                    className: "random-icon",
                                    children: Object(m.jsx)(b.a, { icon: h.p }),
                                  }),
                                  Object(m.jsx)("div", {
                                    className: "random-txt",
                                    children: "Click me to get random lyrics",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      })
                    : "",
                ],
              }),
            }),
          });
        },
        g =
          (s(87),
          function (e) {
            var t = e.recent,
              s = (e.getLyrics, e.loading);
            return Object(m.jsx)("div", {
              className: "recent-wrapper",
              children: Object(m.jsxs)("div", {
                className: "recent",
                children: [
                  Object(m.jsx)("div", {
                    className: "recent-header-wrapper",
                    children: Object(m.jsx)("div", {
                      className: "recent-header",
                      children: Object(m.jsxs)("div", {
                        className: "recent-title",
                        children: [
                          Object(m.jsx)(b.a, {
                            icon: h.q,
                            className: "title-icon",
                          }),
                          Object(m.jsx)("span", {
                            className: "t-title",
                            children: "Recently searched this week...",
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(m.jsx)("div", { className: "line-spacer" }),
                  Object(m.jsx)("div", {
                    className: "recent-body-wrapper",
                    children: Object(m.jsx)("div", {
                      className: "recent-body",
                      children: Object(m.jsx)("div", {
                        className: "recent-list-wrapper",
                        children: Object(m.jsx)("div", {
                          className: "recent-list",
                          children: s
                            ? Object(m.jsx)("div", {
                                className: "loader",
                                children: Object(m.jsx)(N.ScaleLoader, {
                                  color: "#e9042a",
                                  loading: s,
                                  height: 55,
                                  width: 25,
                                  radius: 5,
                                }),
                              })
                            : Object(m.jsx)("div", {
                                children: Object(m.jsx)("ul", {
                                  className: "t-list",
                                  children: t
                                    ? t.map(function (e, t) {
                                        return Object(m.jsx)(
                                          "div",
                                          {
                                            className: "r-list-item-wrapper",
                                            children: Object(m.jsx)("li", {
                                              className: "r-list-item",
                                              children: Object(m.jsxs)(j.b, {
                                                to: "/lyrics/"
                                                  .concat(
                                                    Object(l.a)(e.artist),
                                                    "/"
                                                  )
                                                  .concat(Object(l.a)(e.title)),
                                                children: [
                                                  Object(m.jsx)(b.a, {
                                                    className: "r-l-i",
                                                    icon: h.o,
                                                  }),
                                                  " ",
                                                  e.title.replace("-", " "),
                                                  " ",
                                                  Object(m.jsx)("span", {
                                                    className: "r-l-a",
                                                    children: e.artist.replace(
                                                      "-",
                                                      " "
                                                    ),
                                                  }),
                                                  " ",
                                                ],
                                              }),
                                            }),
                                          },
                                          t
                                        );
                                      })
                                    : "",
                                }),
                              }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            });
          }),
        k =
          (s(88),
          function (e) {
            var t = e.trending,
              s = (e.getLyrics, e.loading);
            return Object(m.jsx)("div", {
              className: "trending-wrapper",
              children: Object(m.jsxs)("div", {
                className: "trending",
                children: [
                  Object(m.jsx)("div", {
                    className: "trending-header-wrapper",
                    children: Object(m.jsx)("div", {
                      className: "trending-header",
                      children: Object(m.jsxs)("div", {
                        className: "trending-title",
                        children: [
                          Object(m.jsx)(b.a, {
                            icon: h.j,
                            className: "title-icon",
                          }),
                          Object(m.jsx)("span", {
                            className: "t-title",
                            children: "Trending...",
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(m.jsx)("div", { className: "line-spacer" }),
                  Object(m.jsx)("div", {
                    className: "trending-body-wrapper",
                    children: Object(m.jsx)("div", {
                      className: "trending-body",
                      children: Object(m.jsx)("div", {
                        className: "trending-list-wrapper",
                        children: Object(m.jsx)("div", {
                          className: "trending-list",
                          children: s
                            ? Object(m.jsx)("div", {
                                className: "loader",
                                children: Object(m.jsx)(N.ScaleLoader, {
                                  color: "#e9042a",
                                  loading: s,
                                  height: 55,
                                  width: 25,
                                  radius: 5,
                                }),
                              })
                            : Object(m.jsx)("div", {
                                children: Object(m.jsx)("ul", {
                                  className: "t-list",
                                  children: t
                                    ? t.map(function (e) {
                                        return Object(m.jsx)(
                                          "div",
                                          {
                                            className: "t-list-item-wrapper",
                                            children: Object(m.jsx)("li", {
                                              className: "t-list-item",
                                              children: Object(m.jsxs)(j.b, {
                                                to: "/lyrics/"
                                                  .concat(e.artist_slug, "/")
                                                  .concat(e.title_slug),
                                                children: [
                                                  Object(m.jsx)(b.a, {
                                                    className: "t-l-i",
                                                    icon: h.o,
                                                  }),
                                                  " ",
                                                  e.title,
                                                  " ",
                                                  Object(m.jsx)("span", {
                                                    className: "t-l-a",
                                                    children: e.artist,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          },
                                          e.id
                                        );
                                      })
                                    : "",
                                }),
                              }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            });
          }),
        w = (s(89), s(15)),
        S = function (e) {
          var t = e.user,
            s = e.token,
            a = e.setUser,
            n = Object(c.useState)(),
            i = Object(r.a)(n, 2),
            o = i[0],
            l = i[1],
            d = Object(c.useState)(),
            u = Object(r.a)(d, 2),
            O = u[0],
            p = u[1],
            x = Object(c.useState)(),
            f = Object(r.a)(x, 2),
            v = f[0],
            y = f[1],
            g = Object(c.useState)(),
            k = Object(r.a)(g, 2),
            S = k[0],
            C = k[1],
            T = Object(c.useState)(),
            L = Object(r.a)(T, 2),
            _ = L[0],
            P = L[1],
            U = Object(c.useState)(!1),
            E = Object(r.a)(U, 2),
            q = E[0],
            A = E[1],
            J = Object(c.useState)(!1),
            z = Object(r.a)(J, 2),
            D = z[0],
            W = z[1],
            M = Object(c.useState)(!0),
            I = Object(r.a)(M, 2),
            F = I[0],
            K = I[1],
            R = Object(c.useState)(!0),
            H = Object(r.a)(R, 2),
            V = H[0],
            G = H[1],
            Z = Object(w.useToasts)().addToast;
          Object(c.useEffect)(function () {
            $();
          }, []);
          var $ = function () {
              if (t.user) {
                var e = ""
                  .concat(t.user.first_name, " ")
                  .concat(t.user.last_name);
                l(e),
                  y(t.user.last_name),
                  p(t.user.first_name),
                  P(t.user.username),
                  C(t.user.email);
              }
            },
            B = function (e) {
              (document.querySelector("#".concat(e)).style.borderColor = "red"),
                setTimeout(function () {
                  document.querySelector("#".concat(e)).style.borderColor =
                    "#001a63";
                }, 2e3);
            };
          return Object(m.jsx)("div", {
            className: "account-set-container",
            children: Object(m.jsx)("div", {
              className: "account-set-wrapper",
              children: Object(m.jsxs)("div", {
                className: "account-set",
                children: [
                  Object(m.jsxs)("div", {
                    className: "header-container",
                    children: [
                      " ",
                      Object(m.jsx)("h1", {
                        className: "acct-title",
                        children: "Account",
                      }),
                      Object(m.jsx)("div", {
                        className: "acc-loader",
                        children: Object(m.jsx)(N.ScaleLoader, {
                          color: "#e9042a",
                          loading: D,
                        }),
                      }),
                      Object(m.jsx)("div", {
                        className: "top-right-acct",
                        children: Object(m.jsx)("span", {
                          onClick: function () {
                            q
                              ? S.length < 1
                                ? B("e-editing")
                                : F
                                ? _.length < 1
                                  ? B("u-editing")
                                  : V
                                  ? (W(!0),
                                    setTimeout(function () {
                                      fetch(
                                        "https://lyriko.herokuapp.com/api/user/acct/modify/",
                                        {
                                          method: "POST",
                                          headers: {
                                            "Content-type": "application/json",
                                            Authorization: "Token ".concat(s),
                                          },
                                          body: JSON.stringify({
                                            email: S,
                                            first_name: O,
                                            last_name: v,
                                            username: _,
                                          }),
                                        }
                                      )
                                        .then(function (e) {
                                          return e.json();
                                        })
                                        .then(function (e) {
                                          if ((console.log(e), e.user)) {
                                            W(!1),
                                              a("user", e.user),
                                              Z("Changes made!", {
                                                appearance: "success",
                                                autoDismiss: !0,
                                              }),
                                              A(!1);
                                            var t = ""
                                              .concat(e.user.first_name, " ")
                                              .concat(e.user.last_name);
                                            l(t),
                                              y(e.user.last_name),
                                              p(e.user.first_name),
                                              P(e.user.username),
                                              C(e.user.email);
                                          } else W(!1), Z("Unknown Error", { appearance: "error", autoDismiss: !0 });
                                        });
                                    }, 1e3))
                                  : B("u-editing")
                                : B("e-editing")
                              : A(!0);
                          },
                          children: q ? "Save" : "Edit",
                        }),
                      }),
                    ],
                  }),
                  Object(m.jsx)("div", {
                    className: "account-set-body",
                    children: Object(m.jsxs)("div", {
                      className: "account-set-main",
                      children: [
                        Object(m.jsx)("div", {
                          className: "ava-wrap",
                          children: Object(m.jsxs)("div", {
                            className: "ava",
                            children: [
                              Object(m.jsx)("div", {
                                className: "r-va",
                                children: Object(m.jsx)("span", {
                                  className: "user-icon-o",
                                  children: Object(m.jsx)(b.a, {
                                    className: "user--icon",
                                    icon: h.y,
                                  }),
                                }),
                              }),
                              Object(m.jsx)("div", {
                                className: "name-wrapper",
                                children: q
                                  ? Object(m.jsxs)("div", {
                                      className: "editing-name-wr",
                                      children: [
                                        Object(m.jsx)("div", {
                                          className: "i-1",
                                          children: Object(m.jsx)("input", {
                                            className: "editing-name",
                                            type: "name",
                                            placeholder: "First Name",
                                            value: O,
                                            onChange: function (e) {
                                              return p(e.target.value);
                                            },
                                          }),
                                        }),
                                        Object(m.jsx)("div", {
                                          className: "i-2",
                                          children: Object(m.jsx)("input", {
                                            className: "editing-name",
                                            type: "name",
                                            placeholder: "Last Name",
                                            value: v,
                                            onChange: function (e) {
                                              return y(e.target.value);
                                            },
                                          }),
                                        }),
                                      ],
                                    })
                                  : Object(m.jsx)("div", {
                                      className: "name",
                                      children: o,
                                    }),
                              }),
                              Object(m.jsx)("hr", {}),
                            ],
                          }),
                        }),
                        Object(m.jsx)("br", {}),
                        Object(m.jsxs)("div", {
                          className: "details",
                          children: [
                            Object(m.jsx)("div", {
                              className: "email-details",
                              children: q
                                ? Object(m.jsxs)("div", {
                                    id: "e-editing",
                                    className: "editing",
                                    children: [
                                      Object(m.jsx)("div", {
                                        className: "e-i-w",
                                        children: Object(m.jsx)(b.a, {
                                          icon: h.g,
                                        }),
                                      }),
                                      Object(m.jsx)("div", {
                                        className: "e-input",
                                        children: Object(m.jsx)("input", {
                                          className: "editing-input",
                                          type: "email",
                                          value: S,
                                          onChange: function (e) {
                                            return C(e.target.value);
                                          },
                                          onKeyUp: function () {
                                            return (
                                              _.match(
                                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                              ) || K(!1),
                                              void (S.indexOf("@") < 3 ||
                                              S.lastIndexOf(".") <
                                                S.indexOf("@") + 2 ||
                                              S.lastIndexOf(".") + 2 >=
                                                S.length ||
                                              S.lastIndexOf(".") -
                                                S.indexOf("@") <=
                                                2 ||
                                              S.substring(0, 1).match(
                                                /[0-9]/
                                              ) ||
                                              S.includes(" ")
                                                ? K(!1)
                                                : K(!0))
                                            );
                                          },
                                        }),
                                      }),
                                    ],
                                  })
                                : Object(m.jsxs)("p", {
                                    children: [
                                      Object(m.jsx)(b.a, { icon: h.g }),
                                      " ",
                                      Object(m.jsx)("b", {
                                        children: t.user.email,
                                      }),
                                    ],
                                  }),
                            }),
                            Object(m.jsx)("div", {
                              className: "username-details",
                              children: q
                                ? Object(m.jsxs)("div", {
                                    id: "u-editing",
                                    className: "editing",
                                    children: [
                                      Object(m.jsx)("div", {
                                        className: "e-i-w",
                                        children: Object(m.jsx)(b.a, {
                                          icon: h.x,
                                        }),
                                      }),
                                      Object(m.jsx)("div", {
                                        className: "u-input",
                                        children: Object(m.jsx)("input", {
                                          className: "editing-input",
                                          type: "name",
                                          value: _,
                                          onChange: function (e) {
                                            return P(e.target.value);
                                          },
                                          onKeyUp: function () {
                                            _.match(/^[a-z0-9_-]{4,16}$/)
                                              ? G(!0)
                                              : G(!1);
                                          },
                                        }),
                                      }),
                                    ],
                                  })
                                : Object(m.jsxs)("p", {
                                    children: [
                                      Object(m.jsx)(b.a, { icon: h.x }),
                                      " ",
                                      Object(m.jsx)("b", {
                                        children: t.user.username,
                                      }),
                                    ],
                                  }),
                            }),
                            Object(m.jsx)("hr", {}),
                            Object(m.jsx)("br", {}),
                            Object(m.jsx)("div", {
                              className: "pass-details",
                              children: Object(m.jsx)("p", {
                                children: Object(m.jsxs)(j.b, {
                                  to: "/user/account/change-password",
                                  children: [
                                    Object(m.jsx)(b.a, { icon: h.m }),
                                    " Change password",
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        C = function (e) {
          e.token;
          var t = Object(c.useState)(""),
            s = Object(r.a)(t, 2),
            a = s[0],
            n = s[1],
            i = Object(c.useState)(""),
            o = Object(r.a)(i, 2),
            l = o[0],
            j = o[1],
            d = Object(c.useState)(),
            u = Object(r.a)(d, 2),
            O = u[0],
            p = u[1],
            x = Object(c.useState)(),
            f = Object(r.a)(x, 2),
            v = (f[0], f[1], Object(c.useState)()),
            N = Object(r.a)(v, 2),
            y = N[0],
            g = N[1],
            k = Object(c.useState)(),
            S = Object(r.a)(k, 2),
            C = (S[0], S[1], Object(c.useState)()),
            T = Object(r.a)(C, 2),
            L = (T[0], T[1], Object(c.useState)("")),
            _ = Object(r.a)(L, 2),
            P = _[0],
            U = _[1],
            E = Object(c.useState)(""),
            q = Object(r.a)(E, 2),
            A = q[0],
            J = q[1],
            z = Object(c.useState)(!0),
            D = Object(r.a)(z, 2),
            W = D[0],
            M = D[1],
            I = Object(c.useState)(),
            F = Object(r.a)(I, 2),
            K = F[0],
            R = F[1],
            H = Object(c.useState)(),
            V = Object(r.a)(H, 2),
            G = V[0],
            Z = V[1],
            $ = Object(c.useState)(),
            B = Object(r.a)($, 2),
            Y = (B[0], B[1]),
            Q = Object(c.useState)(),
            X = Object(r.a)(Q, 2),
            ee = (X[0], X[1]),
            te = Object(w.useToasts)().addToast,
            se = function (e) {
              (document.querySelector("#".concat(e)).style.borderColor = "red"),
                setTimeout(function () {
                  document.querySelector("#".concat(e)).style.borderColor =
                    "#706d6d";
                }, 2e3);
            },
            ce = function () {
              p(P === A);
            },
            ae = function () {
              if ("" === a) return se("email"), !1;
              fetch("https://lyriko.herokuapp.com/api/sendcode", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ email: a }),
              })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  if (e.success)
                    te("Email sent to ".concat(a), {
                      appearance: "success",
                      autoDismiss: !0,
                    }),
                      M(!1),
                      R(!0);
                  else {
                    if ("User not found." === e.error) return se("email"), !1;
                    te("Error occured", {
                      appearance: "error",
                      autoDismiss: !0,
                    }),
                      M(!1),
                      R(!0);
                  }
                });
            };
          return Object(m.jsx)("div", {
            className: "signup-form",
            children: Object(m.jsxs)("form", {
              className: "form",
              children: [
                Object(m.jsx)("div", {
                  className: "header",
                  children: Object(m.jsx)("h3", {
                    children: "Recover Account",
                  }),
                }),
                Object(m.jsxs)("div", {
                  className: "name-inputs-wrapper",
                  children: [
                    W
                      ? Object(m.jsxs)("div", {
                          className: "name-inputs",
                          children: [
                            Object(m.jsxs)("div", {
                              className: "username",
                              children: [
                                Object(m.jsx)("p", {
                                  className: "f-hint",
                                  children: "Enter the email on your account",
                                }),
                                Object(m.jsx)("label", {
                                  className: "form-label",
                                  children: "Email:",
                                }),
                                Object(m.jsx)("input", {
                                  id: "email",
                                  type: "email",
                                  value: a,
                                  onChange: function (e) {
                                    return n(e.target.value);
                                  },
                                  className: "form-control",
                                }),
                              ],
                            }),
                            Object(m.jsx)("div", {
                              className: "sign-up-btn",
                              children: Object(m.jsx)("a", {
                                className: "btn btn-primary",
                                onClick: function () {
                                  return ae();
                                },
                                children: "Confirm",
                              }),
                            }),
                          ],
                        })
                      : "",
                    K
                      ? Object(m.jsxs)("div", {
                          className: "name-inputs",
                          children: [
                            Object(m.jsxs)("div", {
                              className: "username",
                              children: [
                                Object(m.jsxs)("p", {
                                  className: "f-hint",
                                  children: [
                                    "Enter the six digits code sent to ",
                                    a,
                                  ],
                                }),
                                Object(m.jsx)("label", {
                                  className: "form-label",
                                  children: "Verification Code:",
                                }),
                                Object(m.jsx)("input", {
                                  id: "code",
                                  type: "text",
                                  value: l,
                                  onChange: function (e) {
                                    return j(e.target.value);
                                  },
                                  className: "form-control",
                                }),
                              ],
                            }),
                            Object(m.jsx)("div", {
                              className: "sign-up-btn",
                              children: Object(m.jsx)("a", {
                                className: "btn btn-primary",
                                onClick: function () {
                                  return (function () {
                                    if (l.length < 1)
                                      return (
                                        Y(!0),
                                        ee("This field is required."),
                                        se("code"),
                                        !1
                                      );
                                    fetch(
                                      "https://lyriko.herokuapp.com/api/user/acct/verify/",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          code: l,
                                          email: a,
                                        }),
                                      }
                                    )
                                      .then(function (e) {
                                        return e.json();
                                      })
                                      .then(function (e) {
                                        if (e.msg)
                                          R(!1),
                                            Z(!0),
                                            te("Confirmed!", {
                                              appearance: "success",
                                              autoDismiss: !0,
                                            });
                                        else if (e.error)
                                          return (
                                            se("code"), ee("Invalid code"), !1
                                          );
                                      });
                                  })();
                                },
                                children: "Verify",
                              }),
                            }),
                            Object(m.jsx)("div", {
                              className: "resent-area",
                              children: Object(m.jsxs)("p", {
                                children: [
                                  "Didn't get any code?",
                                  " ",
                                  Object(m.jsx)("span", {
                                    className: "r-link",
                                    onClick: function () {
                                      ae();
                                    },
                                    children: "Retry",
                                  }),
                                  ".",
                                ],
                              }),
                            }),
                          ],
                        })
                      : "",
                    G
                      ? Object(m.jsxs)("div", {
                          children: [
                            Object(m.jsx)("p", {
                              className: "f-hint",
                              children: "Create new password",
                            }),
                            Object(m.jsxs)("div", {
                              className: "password",
                              children: [
                                Object(m.jsxs)("label", {
                                  className: "form-label",
                                  children: [
                                    "New Password",
                                    " ",
                                    "" !== P
                                      ? Object(m.jsx)(b.a, {
                                          icon: y ? h.d : h.t,
                                          className: y ? "check" : "times",
                                        })
                                      : "",
                                  ],
                                }),
                                Object(m.jsx)("input", {
                                  id: "pass",
                                  value: P,
                                  placeholder: "Min len: six chars",
                                  type: "password",
                                  className: "form-control",
                                  onChange: function (e) {
                                    return U(e.target.value);
                                  },
                                  onKeyUp: function () {
                                    !P.match(/[a-z]/g) ||
                                    !P.match(/[0-9]/g) ||
                                    P.length < 6
                                      ? g(!1)
                                      : g(!0),
                                      ce();
                                  },
                                }),
                              ],
                            }),
                            Object(m.jsxs)("div", {
                              className: "c-password",
                              children: [
                                Object(m.jsxs)("label", {
                                  className: "form-label",
                                  children: [
                                    "Re-type Password",
                                    " ",
                                    "" != A
                                      ? Object(m.jsx)(b.a, {
                                          icon: O ? h.d : h.t,
                                          className: O ? "check" : "times",
                                        })
                                      : "",
                                  ],
                                }),
                                Object(m.jsx)("input", {
                                  id: "cpass",
                                  type: "password",
                                  value: A,
                                  className: "form-control",
                                  onChange: function (e) {
                                    return J(e.target.value);
                                  },
                                  onKeyUp: function () {
                                    return ce();
                                  },
                                }),
                              ],
                            }),
                            Object(m.jsx)("div", {
                              className: "sign-up-btn",
                              children: Object(m.jsx)("a", {
                                className: "btn btn-primary",
                                onClick: function () {
                                  return y
                                    ? O
                                      ? void fetch(
                                          "https://lyriko.herokuapp.com/api/user/change-password/",
                                          {
                                            method: "POST",
                                            headers: {
                                              "Content-type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              access: "code",
                                              new_password: P,
                                              email: a,
                                            }),
                                          }
                                        )
                                          .then(function (e) {
                                            return e.json();
                                          })
                                          .then(function (e) {
                                            e.msg &&
                                              (te("Password changed!", {
                                                appearance: "success",
                                                autoDismiss: !0,
                                              }),
                                              (window.location.href = "/"));
                                          })
                                      : (se("pass"), se("cpass"), !1)
                                    : (se("pass"), !1);
                                },
                                children: "Submit",
                              }),
                            }),
                          ],
                        })
                      : "",
                  ],
                }),
              ],
            }),
          });
        },
        T = function (e) {
          var t = e.setToken,
            s = e.setUser,
            a = Object(c.useState)(""),
            n = Object(r.a)(a, 2),
            i = n[0],
            o = n[1],
            l = Object(c.useState)(""),
            d = Object(r.a)(l, 2),
            u = d[0],
            O = d[1],
            p = Object(c.useState)(""),
            x = Object(r.a)(p, 2),
            f = x[0],
            v = x[1],
            N = Object(c.useState)(""),
            y = Object(r.a)(N, 2),
            g = y[0],
            k = y[1],
            w = Object(c.useState)(""),
            S = Object(r.a)(w, 2),
            C = S[0],
            T = S[1],
            L = Object(c.useState)(""),
            _ = Object(r.a)(L, 2),
            P = _[0],
            U = _[1];
          document.title = "Login - Lyriko";
          var E = function (e) {
            (document.querySelector("#".concat(e)).style.borderColor = "red"),
              setTimeout(function () {
                document.querySelector("#".concat(e)).style.borderColor =
                  "#706d6d";
              }, 2e3);
          };
          return Object(m.jsx)("div", {
            className: "signup-form",
            children: Object(m.jsxs)("form", {
              className: "form",
              children: [
                Object(m.jsxs)("div", {
                  className: "header",
                  children: [
                    Object(m.jsx)("h3", { children: "Login" }),
                    Object(m.jsxs)("p", {
                      children: [
                        "Don't have an account?",
                        " ",
                        Object(m.jsx)(j.b, {
                          to: "/signup",
                          className: "login-link",
                          children: "Sign up.",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(m.jsx)("div", {
                  className: "name-inputs-wrapper",
                  children: Object(m.jsx)("div", {
                    className: "name-inputs",
                    children: Object(m.jsxs)("div", {
                      className: "username",
                      children: [
                        Object(m.jsx)("label", {
                          className: "form-label",
                          children: "Username or Email",
                        }),
                        Object(m.jsx)("input", {
                          id: "username",
                          type: "name",
                          value: u,
                          onChange: function (e) {
                            return O(e.target.value);
                          },
                          className: "form-control",
                        }),
                        f
                          ? Object(m.jsxs)("span", {
                              className: "error-msg",
                              children: [
                                Object(m.jsx)(b.a, { icon: h.h }),
                                " ",
                                C,
                              ],
                            })
                          : "",
                      ],
                    }),
                  }),
                }),
                Object(m.jsx)("div", {
                  className: "email-pass-wrapper",
                  children: Object(m.jsxs)("div", {
                    className: "email-pass-inputs",
                    children: [
                      Object(m.jsxs)("div", {
                        className: "password",
                        children: [
                          Object(m.jsx)("label", {
                            className: "form-label",
                            children: "Password",
                          }),
                          Object(m.jsx)("input", {
                            id: "pass",
                            value: i,
                            type: "password",
                            className: "form-control",
                            onChange: function (e) {
                              return o(e.target.value);
                            },
                          }),
                          g
                            ? Object(m.jsxs)("span", {
                                className: "error-msg",
                                children: [
                                  Object(m.jsx)(b.a, { icon: h.h }),
                                  " ",
                                  P,
                                ],
                              })
                            : "",
                        ],
                      }),
                      Object(m.jsx)("div", {
                        className: "sign-up-btn",
                        children: Object(m.jsx)("a", {
                          className: "btn btn-primary",
                          onClick: function () {
                            v(!1),
                              k(!1),
                              "" === u && (E("username"), v(!0), T("Required")),
                              "" === i
                                ? (E("pass"), k(!0), U("Required"))
                                : fetch(
                                    "https://lyriko.herokuapp.com/api/signin",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-type": "application/json",
                                      },
                                      body: JSON.stringify({
                                        username: u,
                                        email_username: u,
                                        password: i,
                                      }),
                                    }
                                  )
                                    .then(function (e) {
                                      return e.json();
                                    })
                                    .then(function (e) {
                                      e.error
                                        ? ("Incorrect password" === e.error &&
                                            (k(!0), U(e.error)),
                                          "User not found." === e.error &&
                                            (E("username"), v(!0), T(e.error)))
                                        : (t("auth", e.token),
                                          s("user", e.user),
                                          (window.location.href = "/"));
                                    });
                          },
                          children: "Login",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        L =
          (s(96),
          function (e) {
            var t = e.setToken,
              s = e.setUser,
              a = e.token,
              n = Object(c.useState)(""),
              i = Object(r.a)(n, 2),
              o = i[0],
              l = i[1],
              d = Object(c.useState)(""),
              u = Object(r.a)(d, 2),
              O = u[0],
              p = u[1],
              x = Object(c.useState)(""),
              f = Object(r.a)(x, 2),
              v = f[0],
              N = f[1],
              y = Object(c.useState)(""),
              g = Object(r.a)(y, 2),
              k = g[0],
              S = g[1],
              C = Object(c.useState)(""),
              T = Object(r.a)(C, 2),
              L = T[0],
              _ = T[1],
              P = Object(c.useState)(""),
              U = Object(r.a)(P, 2),
              E = U[0],
              q = U[1],
              A = Object(c.useState)(""),
              J = Object(r.a)(A, 2),
              z = J[0],
              D = J[1],
              W = Object(c.useState)(""),
              M = Object(r.a)(W, 2),
              I = M[0],
              F = M[1],
              K = Object(c.useState)(""),
              R = Object(r.a)(K, 2),
              H = R[0],
              V = R[1],
              G = Object(c.useState)(!1),
              Z = Object(r.a)(G, 2),
              $ = Z[0],
              B = Z[1],
              Y = Object(c.useState)(""),
              Q = Object(r.a)(Y, 2),
              X = Q[0],
              ee = Q[1],
              te = Object(c.useState)(""),
              se = Object(r.a)(te, 2),
              ce = se[0],
              ae = se[1],
              ne = Object(c.useState)(""),
              ie = Object(r.a)(ne, 2),
              re = ie[0],
              oe = ie[1],
              le = Object(c.useState)(""),
              je = Object(r.a)(le, 2),
              de = je[0],
              ue = je[1],
              be = Object(c.useState)(""),
              he = Object(r.a)(be, 2),
              me = he[0],
              Oe = he[1],
              pe = Object(c.useState)(!1),
              xe = Object(r.a)(pe, 2),
              fe = xe[0],
              ve = xe[1],
              Ne = Object(c.useState)(""),
              ye = Object(r.a)(Ne, 2),
              ge = ye[0],
              ke = ye[1],
              we = Object(c.useState)(""),
              Se = Object(r.a)(we, 2),
              Ce = Se[0],
              Te = Se[1],
              Le = Object(c.useState)(!1),
              _e = Object(r.a)(Le, 2),
              Pe = _e[0],
              Ue = _e[1],
              Ee = Object(w.useToasts)().addToast;
            document.title = "Join - Lyriko";
            var qe = function () {
                ee(o === O);
              },
              Ae = function (e) {
                (document.querySelector("#".concat(e)).style.borderColor =
                  "red"),
                  setTimeout(function () {
                    document.querySelector("#".concat(e)).style.borderColor =
                      "#706d6d";
                  }, 2e3);
              };
            return Object(m.jsx)("div", {
              className: "signup-form",
              children: Object(m.jsx)("form", {
                className: "form",
                children: Pe
                  ? Object(m.jsx)("div", {
                      children: Object(m.jsxs)("div", {
                        className: "verification_area",
                        children: [
                          Object(m.jsx)("div", {
                            className: "header",
                            children: Object(m.jsxs)("p", {
                              children: [
                                "Enter the code sent to ",
                                L,
                                " to complete signup.",
                              ],
                            }),
                          }),
                          Object(m.jsx)("div", {
                            className: "code-input",
                            children: Object(m.jsx)("input", {
                              id: "code",
                              type: "text",
                              placeholder: "eg: 123456",
                              className: "form-control",
                              value: Ce,
                              onChange: function (e) {
                                return Te(e.target.value);
                              },
                            }),
                          }),
                          fe
                            ? Object(m.jsxs)("div", {
                                className: "code-error",
                                children: [
                                  Object(m.jsx)(b.a, { icon: h.h }),
                                  ge,
                                ],
                              })
                            : "",
                          Object(m.jsx)("div", {
                            className: "verification-btn",
                            children: Object(m.jsx)("a", {
                              className: "btn btn-primary",
                              onClick: function () {
                                return (function () {
                                  if (Ce.length < 1)
                                    return (
                                      ve(!0),
                                      ke("This field is required."),
                                      Ae("code"),
                                      !1
                                    );
                                  fetch(
                                    "https://lyriko.herokuapp.com/api/verifycode",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-type": "application/json",
                                        Authorization: "Token ".concat(a.auth),
                                      },
                                      body: JSON.stringify({ code: Ce }),
                                    }
                                  )
                                    .then(function (e) {
                                      return e.json();
                                    })
                                    .then(function (e) {
                                      if (!e.msg)
                                        return (
                                          Ae("code"), ke("Invalid code"), !1
                                        );
                                      Ee("Verified!", {
                                        appearance: "success",
                                        autoDismiss: !0,
                                      }),
                                        (window.location.href = "/");
                                    });
                                })();
                              },
                              children: "Verify",
                            }),
                          }),
                          Object(m.jsx)("div", {
                            className: "resent-area",
                            children: Object(m.jsxs)("p", {
                              children: [
                                "Didn't get any code?",
                                " ",
                                Object(m.jsx)("span", {
                                  className: "r-link",
                                  onClick: function () {
                                    fetch(
                                      "https://lyriko.herokuapp.com/api/sendcode",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-type": "application/json",
                                          Authorization: "Token ".concat(
                                            a.auth
                                          ),
                                        },
                                        body: JSON.stringify({ email: L }),
                                      }
                                    )
                                      .then(function (e) {
                                        return e.json();
                                      })
                                      .then(function (e) {
                                        if (!e.success)
                                          return (
                                            Ee("Faild. Try again", {
                                              appearance: "success",
                                              autoDismiss: !0,
                                            }),
                                            !1
                                          );
                                        Ee("Email sent to".concat(L), {
                                          appearance: "success",
                                          autoDismiss: !0,
                                        });
                                      });
                                  },
                                  children: "Retry",
                                }),
                                ".",
                              ],
                            }),
                          }),
                        ],
                      }),
                    })
                  : Object(m.jsxs)("div", {
                      children: [
                        Object(m.jsxs)("div", {
                          className: "header",
                          children: [
                            Object(m.jsx)("h3", { children: "Sign up" }),
                            Object(m.jsxs)("p", {
                              children: [
                                "Already have an account?",
                                " ",
                                Object(m.jsx)(j.b, {
                                  to: "/login",
                                  className: "login-link",
                                  children: "Login.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(m.jsx)("div", {
                          className: "name-inputs-wrapper",
                          children: Object(m.jsxs)("div", {
                            className: "name-inputs",
                            children: [
                              Object(m.jsxs)("div", {
                                className: "first-name",
                                children: [
                                  Object(m.jsx)("label", {
                                    className: "form-label",
                                    children: "First name",
                                  }),
                                  Object(m.jsx)("input", {
                                    placeholder: "John",
                                    value: v,
                                    type: "name",
                                    className: "form-control",
                                    id: "first-name",
                                    onChange: function (e) {
                                      return N(e.target.value);
                                    },
                                  }),
                                ],
                              }),
                              Object(m.jsxs)("div", {
                                className: "last-name",
                                children: [
                                  Object(m.jsx)("label", {
                                    className: "form-label",
                                    children: "Last name",
                                  }),
                                  Object(m.jsx)("input", {
                                    id: "last-name",
                                    placeholder: "Doe",
                                    value: k,
                                    type: "name",
                                    className: "form-control",
                                    onChange: function (e) {
                                      return S(e.target.value);
                                    },
                                  }),
                                ],
                              }),
                              Object(m.jsxs)("div", {
                                className: "username",
                                children: [
                                  Object(m.jsxs)("label", {
                                    className: "form-label",
                                    children: [
                                      "Choose Username*",
                                      " ",
                                      "" != E
                                        ? Object(m.jsx)(b.a, {
                                            icon: z ? h.d : h.t,
                                            className: z ? "check" : "times",
                                          })
                                        : "",
                                    ],
                                  }),
                                  Object(m.jsx)("input", {
                                    id: "username",
                                    type: "name",
                                    value: E,
                                    onChange: function (e) {
                                      return q(e.target.value);
                                    },
                                    onKeyUp: function () {
                                      E.match(/^[a-z0-9_-]{4,16}$/)
                                        ? D(!0)
                                        : D(!1);
                                    },
                                    className: "form-control",
                                  }),
                                  ce
                                    ? Object(m.jsxs)("span", {
                                        className: "error-msg",
                                        children: [
                                          Object(m.jsx)(b.a, { icon: h.h }),
                                          " ",
                                          de,
                                        ],
                                      })
                                    : "",
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(m.jsx)("div", {
                          className: "email-pass-wrapper",
                          children: Object(m.jsxs)("div", {
                            className: "email-pass-inputs",
                            children: [
                              Object(m.jsxs)("div", {
                                className: "email",
                                children: [
                                  Object(m.jsxs)("label", {
                                    className: "form-label",
                                    children: [
                                      "Email Address*",
                                      " ",
                                      "" !== L
                                        ? Object(m.jsx)(b.a, {
                                            icon: I ? h.d : h.t,
                                            className: I ? "check" : "times",
                                          })
                                        : "",
                                    ],
                                  }),
                                  Object(m.jsx)("input", {
                                    id: "email",
                                    value: L,
                                    placeholder: "email@example.com",
                                    type: "email",
                                    className: "form-control",
                                    onChange: function (e) {
                                      return _(e.target.value);
                                    },
                                    onKeyUp: function () {
                                      return (
                                        E.match(
                                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        ) || F(!1),
                                        void (L.indexOf("@") < 3 ||
                                        L.lastIndexOf(".") <
                                          L.indexOf("@") + 2 ||
                                        L.lastIndexOf(".") + 2 >= L.length ||
                                        L.lastIndexOf(".") - L.indexOf("@") <=
                                          2 ||
                                        L.substring(0, 1).match(/[0-9]/) ||
                                        L.includes(" ")
                                          ? F(!1)
                                          : F(!0))
                                      );
                                    },
                                  }),
                                  re
                                    ? Object(m.jsxs)("span", {
                                        className: "error-msg",
                                        children: [
                                          Object(m.jsx)(b.a, { icon: h.h }),
                                          " ",
                                          me,
                                        ],
                                      })
                                    : "",
                                ],
                              }),
                              Object(m.jsxs)("div", {
                                className: "password",
                                children: [
                                  Object(m.jsxs)("label", {
                                    className: "form-label",
                                    children: [
                                      "Choose Password*",
                                      " ",
                                      "" !== o
                                        ? Object(m.jsx)(b.a, {
                                            icon: H ? h.d : h.t,
                                            className: H ? "check" : "times",
                                          })
                                        : "",
                                    ],
                                  }),
                                  Object(m.jsx)("input", {
                                    id: "pass",
                                    value: o,
                                    placeholder: "Min len: six chars",
                                    type: "password",
                                    className: "form-control",
                                    onChange: function (e) {
                                      return l(e.target.value);
                                    },
                                    onKeyUp: function () {
                                      !o.match(/[a-z]/g) ||
                                      !o.match(/[0-9]/g) ||
                                      o.length < 6
                                        ? V(!1)
                                        : V(!0),
                                        qe();
                                    },
                                  }),
                                ],
                              }),
                              Object(m.jsxs)("div", {
                                className: "c-password",
                                children: [
                                  Object(m.jsxs)("label", {
                                    className: "form-label",
                                    children: [
                                      "Confirm Password*",
                                      " ",
                                      "" != O
                                        ? Object(m.jsx)(b.a, {
                                            icon: X ? h.d : h.t,
                                            className: X ? "check" : "times",
                                          })
                                        : "",
                                    ],
                                  }),
                                  Object(m.jsx)("input", {
                                    id: "cpass",
                                    type: "password",
                                    value: O,
                                    className: "form-control",
                                    onChange: function (e) {
                                      return p(e.target.value);
                                    },
                                    onKeyUp: function () {
                                      return qe();
                                    },
                                  }),
                                ],
                              }),
                              Object(m.jsxs)("div", {
                                className: "form-check",
                                children: [
                                  Object(m.jsx)("input", {
                                    checked: $,
                                    onChange: function (e) {
                                      B(!$);
                                    },
                                    className: "form-check-input",
                                    type: "checkbox",
                                    value: "",
                                    id: "flexCheckDefault",
                                  }),
                                  Object(m.jsx)("label", {
                                    id: "t-c-txt",
                                    className: "form-check-label",
                                    htmlFor: "flexCheckDefault",
                                    children: "Agree to Terms and Conditions",
                                  }),
                                ],
                              }),
                              Object(m.jsx)("div", {
                                className: "sign-up-btn",
                                children: Object(m.jsx)("a", {
                                  className: "btn btn-primary",
                                  onClick: function () {
                                    "" !== L && I
                                      ? "" !== E && z
                                        ? "" !== o && H
                                          ? O !== o
                                            ? (Ae("pass"), Ae("cpass"))
                                            : $
                                            ? fetch(
                                                "https://lyriko.herokuapp.com/api/signup",
                                                {
                                                  method: "POST",
                                                  headers: {
                                                    "Content-type":
                                                      "application/json",
                                                  },
                                                  body: JSON.stringify({
                                                    first_name: v,
                                                    last_name: k,
                                                    username: E,
                                                    email: L,
                                                    password: o,
                                                    email_username: L,
                                                  }),
                                                }
                                              )
                                                .then(function (e) {
                                                  return e.json();
                                                })
                                                .then(function (e) {
                                                  e.username &&
                                                    (ae(!0),
                                                    ue(
                                                      "Username already taken."
                                                    ),
                                                    Ae("username")),
                                                    e.email
                                                      ? (oe(!0),
                                                        Oe(
                                                          "Email already taken."
                                                        ),
                                                        Ae("email"))
                                                      : (t("auth", e.token),
                                                        s("user", e.user),
                                                        Ee(
                                                          "Succcess! Enter code to continue.",
                                                          {
                                                            appearance:
                                                              "success",
                                                            autoDismiss: !0,
                                                          }
                                                        ),
                                                        t("auth", e.token),
                                                        s("user", e.user),
                                                        Ue(!0));
                                                })
                                            : ((document.querySelector(
                                                "#t-c-txt"
                                              ).style.color = "#db0226"),
                                              setTimeout(function () {
                                                document.querySelector(
                                                  "#t-c-txt"
                                                ).style.color = "#b6b6b6";
                                              }, 2e3))
                                          : Ae("pass")
                                        : Ae("username")
                                      : Ae("email");
                                  },
                                  children: "Sign Up",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
              }),
            });
          }),
        _ =
          (s(97),
          function (e) {
            var t = e.history,
              s = e.loading,
              a = e.user,
              n = e.getHistory;
            return (
              (document.title = "History -Lyriko"),
              Object(c.useEffect)(function () {
                window.scrollTo({ top: 0 }), n();
              }, []),
              Object(m.jsx)("div", {
                className: "history-container",
                children: Object(m.jsx)("div", {
                  className: "history-wrapper",
                  children: Object(m.jsxs)("div", {
                    className: "history",
                    children: [
                      Object(m.jsxs)("div", {
                        className: "header-container",
                        children: [
                          " ",
                          Object(m.jsx)("h1", { children: "History" }),
                        ],
                      }),
                      Object(m.jsx)("div", {
                        className: "history-body",
                        children: Object(m.jsx)("div", {
                          className: "history-main",
                          children: Object(m.jsx)("div", {
                            children: Object(m.jsx)("div", {
                              className: "history-list",
                              children: s
                                ? Object(m.jsx)("div", {
                                    className: "loader",
                                    children: Object(m.jsx)(N.ScaleLoader, {
                                      color: "#e9042a",
                                      loading: s,
                                      height: 55,
                                      width: 25,
                                      radius: 5,
                                    }),
                                  })
                                : Object(m.jsx)("div", {
                                    children:
                                      a.user && t
                                        ? Object(m.jsxs)("div", {
                                            children: [
                                              t.length >= 1
                                                ? t.map(function (e, t) {
                                                    return Object(m.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "history-list-item",
                                                        children: [
                                                          Object(m.jsx)("div", {
                                                            className:
                                                              "main-wa",
                                                            children: Object(
                                                              m.jsxs
                                                            )(j.b, {
                                                              to: "/lyrics/"
                                                                .concat(
                                                                  Object(l.a)(
                                                                    e.artist
                                                                  ),
                                                                  "/"
                                                                )
                                                                .concat(
                                                                  Object(l.a)(
                                                                    e.title
                                                                  )
                                                                ),
                                                              children: [
                                                                Object(
                                                                  m.jsx
                                                                )(b.a, {
                                                                  icon: h.o,
                                                                  className:
                                                                    "t-l-i",
                                                                }),
                                                                e.title,
                                                                Object(
                                                                  m.jsx
                                                                )("span", {
                                                                  className:
                                                                    "t-l-a",
                                                                  children:
                                                                    e.artist,
                                                                }),
                                                              ],
                                                            }),
                                                          }),
                                                          Object(m.jsx)("div", {
                                                            className:
                                                              "icon-wr",
                                                            children: Object(
                                                              m.jsx
                                                            )(b.a, {
                                                              className:
                                                                "de-ic",
                                                              icon: h.v,
                                                            }),
                                                          }),
                                                        ],
                                                      },
                                                      t
                                                    );
                                                  })
                                                : Object(m.jsx)("div", {
                                                    className: "empty-text",
                                                    children: Object(m.jsx)(
                                                      "p",
                                                      { children: "Empty" }
                                                    ),
                                                  }),
                                              " ",
                                            ],
                                          })
                                        : Object(m.jsx)("div", {
                                            children: Object(m.jsx)("div", {
                                              className: "empty-text",
                                              children: Object(m.jsxs)("p", {
                                                children: [
                                                  Object(m.jsx)(j.b, {
                                                    to: "/login",
                                                    children: "Login",
                                                  }),
                                                  " to view your history.",
                                                ],
                                              }),
                                            }),
                                          }),
                                  }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          }),
        P =
          (s(98),
          function (e) {
            var t = e.watchlist,
              s = e.removeWatchlist,
              a = e.loading,
              n = e.user,
              i = e.getWatchlist;
            return (
              (document.title = "Watchlist - Lyriko"),
              Object(c.useEffect)(function () {
                i();
              }, []),
              window.scrollTo({ top: 0, behavior: "smooth" }),
              Object(m.jsx)("div", {
                className: "watchlist-container",
                children: Object(m.jsx)("div", {
                  className: "watchlist-wrapper",
                  children: Object(m.jsxs)("div", {
                    className: "watchlist",
                    children: [
                      Object(m.jsxs)("div", {
                        className: "header-container",
                        children: [
                          " ",
                          Object(m.jsx)("h1", { children: "Watchlist" }),
                        ],
                      }),
                      Object(m.jsx)("div", {
                        className: "watchlist-body",
                        children: Object(m.jsx)("div", {
                          className: "watchlist-main",
                          children: Object(m.jsx)("div", {
                            children: Object(m.jsx)("div", {
                              className: "watchlist-list",
                              children: a
                                ? Object(m.jsx)("div", {
                                    className: "loader",
                                    children: Object(m.jsx)(N.ScaleLoader, {
                                      color: "#e9042a",
                                      loading: a,
                                      height: 55,
                                      width: 25,
                                      radius: 5,
                                    }),
                                  })
                                : Object(m.jsx)("div", {
                                    children:
                                      n.user && t
                                        ? Object(m.jsx)("div", {
                                            children:
                                              t.length >= 1
                                                ? t.map(function (e, t) {
                                                    return Object(m.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "watchlist-list-item",
                                                        children: [
                                                          Object(m.jsx)("div", {
                                                            className:
                                                              "main-wa",
                                                            children: Object(
                                                              m.jsxs
                                                            )(j.b, {
                                                              to: "/lyrics/"
                                                                .concat(
                                                                  e.artist_slug,
                                                                  "/"
                                                                )
                                                                .concat(
                                                                  e.title_slug
                                                                ),
                                                              children: [
                                                                Object(
                                                                  m.jsx
                                                                )(b.a, {
                                                                  icon: h.o,
                                                                  className:
                                                                    "t-l-i",
                                                                }),
                                                                e.title,
                                                                Object(
                                                                  m.jsx
                                                                )("span", {
                                                                  className:
                                                                    "t-l-a",
                                                                  children:
                                                                    e.artist,
                                                                }),
                                                              ],
                                                            }),
                                                          }),
                                                          Object(m.jsx)("div", {
                                                            className:
                                                              "icon-wr",
                                                            children: Object(
                                                              m.jsx
                                                            )(b.a, {
                                                              className:
                                                                "de-ic",
                                                              icon: h.v,
                                                              onClick: function () {
                                                                return s(e.id);
                                                              },
                                                            }),
                                                          }),
                                                        ],
                                                      },
                                                      t
                                                    );
                                                  })
                                                : Object(m.jsx)("div", {
                                                    className: "empty-text",
                                                    children: Object(m.jsx)(
                                                      "p",
                                                      { children: "Empty" }
                                                    ),
                                                  }),
                                          })
                                        : Object(m.jsx)("div", {
                                            children: Object(m.jsx)("div", {
                                              className: "empty-text",
                                              children: Object(m.jsxs)("p", {
                                                children: [
                                                  Object(m.jsx)(j.b, {
                                                    to: "/login",
                                                    children: "Login",
                                                  }),
                                                  " to view your watchlist.",
                                                ],
                                              }),
                                            }),
                                          }),
                                  }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          }),
        U =
          (s(99),
          function (e) {
            var t = e.user,
              s = e.token,
              a = e.addWatchlist,
              n = e.removeWatchlist,
              i = Object(d.e)(),
              o = i.artist,
              j = i.title,
              u = Object(c.useState)(),
              O = Object(r.a)(u, 2),
              p = O[0],
              x = O[1],
              f = Object(c.useState)(),
              v = Object(r.a)(f, 2),
              y = v[0],
              g = v[1],
              k = Object(c.useState)(),
              w = Object(r.a)(k, 2),
              S = w[0],
              C = w[1],
              T = Object(c.useState)(),
              L = Object(r.a)(T, 2),
              _ = L[0],
              P = L[1];
            Object(c.useEffect)(function () {
              U(o, j), E(), window.scrollTo({ top: 0, behavior: "smooth" });
            }, []);
            var U = function (e, s) {
                var c = Object(l.a)(e),
                  a = Object(l.a)(s);
                g(!0),
                  C(!1),
                  setTimeout(function () {
                    fetch(
                      "https://lyriko.herokuapp.com/api/lyrics/"
                        .concat(c, "/")
                        .concat(a),
                      {
                        method: "POST",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({
                          artist: e.replace(
                            /(^\w{1})|(\s+\w{1})/g,
                            function (e) {
                              return e.toUpperCase();
                            }
                          ),
                          title: s.replace(
                            /(^\w{1})|(\s+\w{1})/g,
                            function (e) {
                              return e.toUpperCase();
                            }
                          ),
                          username: t.user ? t.user.username : "",
                        }),
                      }
                    )
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        e.error
                          ? (C(!0), x(), g(!1))
                          : (x(e.lyrics),
                            (document.title = ""
                              .concat(e.lyrics.title, " - ")
                              .concat(e.lyrics.artist, " - Lyriko")),
                            C(!1),
                            g(!1));
                      });
                  }, 1e3);
              },
              E = function () {
                if (p) {
                  if (!t.user) return !1;
                  fetch("https://lyriko.herokuapp.com/api/checksavelist/", {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                      Authorization: "Token ".concat(s.auth),
                    },
                    body: JSON.stringify({ lyrics_id: p.id }),
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      P(e.watchlisted);
                    });
                }
              };
            return (
              E(),
              Object(m.jsx)("div", {
                className: "Lyrics1-main",
                children: Object(m.jsx)("div", {
                  className: "Lyrics1-wrapper",
                  children: Object(m.jsxs)("div", {
                    className: "Lyrics1",
                    children: [
                      Object(m.jsx)("div", {
                        children: y
                          ? Object(m.jsx)("div", {
                              className: "loader",
                              children: Object(m.jsx)(N.ScaleLoader, {
                                color: "#e9042a",
                                loading: y,
                                height: 55,
                                width: 25,
                                radius: 5,
                              }),
                            })
                          : Object(m.jsxs)("div", {
                              children: [
                                Object(m.jsx)("div", {
                                  className: "Lyrics1-title-wrapper",
                                  children: Object(m.jsx)("div", {
                                    className: "Lyrics1-title",
                                    children: Object(m.jsx)("span", {
                                      children: p ? p.title : "",
                                    }),
                                  }),
                                }),
                                Object(m.jsx)("div", {
                                  className: "Lyrics1-artist-wrapper",
                                  children: Object(m.jsx)("div", {
                                    className: "Lyrics1-artist",
                                    children: Object(m.jsx)("span", {
                                      children: p ? p.artist : "",
                                    }),
                                  }),
                                }),
                                Object(m.jsx)("div", { className: "l-line" }),
                                Object(m.jsxs)("div", {
                                  className: "Lyrics1-text-wrapper",
                                  children: [
                                    Object(m.jsx)("div", {
                                      className: "Lyrics1-text",
                                      children: Object(m.jsx)("p", {
                                        className: "l-txt",
                                        children: p ? p.body : "",
                                      }),
                                    }),
                                    Object(m.jsx)("br", {}),
                                  ],
                                }),
                                Object(m.jsx)("div", { className: "l-line" }),
                                p
                                  ? Object(m.jsx)("div", {
                                      className: "Lyrics1-footer-wrapper",
                                      children: Object(m.jsxs)("div", {
                                        className: "Lyrics1-footer",
                                        children: [
                                          Object(m.jsx)("div", {
                                            className: "Lyrics1-footer-item",
                                            children: Object(m.jsx)("i", {
                                              style: {
                                                color:
                                                  "true" === _
                                                    ? "red"
                                                    : "white",
                                              },
                                              onClick: function () {
                                                "true" === _
                                                  ? n(p.id)
                                                  : a(p.id);
                                              },
                                              children: Object(m.jsx)(b.a, {
                                                icon: h.k,
                                              }),
                                            }),
                                          }),
                                          Object(m.jsx)("div", {
                                            className: "Lyrics1-footer-item",
                                            children: Object(m.jsx)("i", {
                                              children: Object(m.jsx)(b.a, {
                                                icon: h.i,
                                              }),
                                            }),
                                          }),
                                          Object(m.jsx)("div", {
                                            className: "Lyrics1-footer-item",
                                            children: Object(m.jsx)("i", {
                                              children: Object(m.jsx)(b.a, {
                                                icon: h.f,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    })
                                  : "",
                              ],
                            }),
                      }),
                      S
                        ? Object(m.jsx)("div", {
                            className: "not-found-wrapper",
                            children: Object(m.jsxs)("div", {
                              className: "not-found",
                              children: [
                                Object(m.jsx)("div", {
                                  className: "s-txt-wr",
                                  children: Object(m.jsx)("span", {
                                    children:
                                      "Sorry, we could not get that lyrics :(",
                                  }),
                                }),
                                Object(m.jsx)("div", {
                                  className: "shuffle-wrpper",
                                  onClick: function () {
                                    return window.history.back();
                                  },
                                  children: Object(m.jsxs)("div", {
                                    className: "shuffle",
                                    children: [
                                      Object(m.jsx)("div", {
                                        className: "random-icon",
                                        children: Object(m.jsx)(b.a, {
                                          icon: h.a,
                                        }),
                                      }),
                                      Object(m.jsx)("div", {
                                        className: "random-txt",
                                        children: "Click me to get back",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          })
                        : "",
                    ],
                  }),
                }),
              })
            );
          }),
        E = function (e) {
          var t = e.user,
            s = e.token,
            a = e.is_authenticated,
            n = e.is_verified,
            i = (e.setVerified, Object(c.useState)("")),
            o = Object(r.a)(i, 2),
            l = o[0],
            j = o[1],
            d = Object(c.useState)(!1),
            u = Object(r.a)(d, 2),
            O = u[0],
            p = u[1],
            x = Object(c.useState)(""),
            f = Object(r.a)(x, 2),
            v = f[0],
            N = f[1],
            y = Object(w.useToasts)().addToast,
            g = Object(c.useState)(""),
            k = Object(r.a)(g, 2),
            S = k[0],
            C = k[1],
            T = function (e) {
              (document.querySelector("#".concat(e)).style.borderColor = "red"),
                setTimeout(function () {
                  document.querySelector("#".concat(e)).style.borderColor =
                    "#706d6d";
                }, 2e3);
            };
          Object(c.useEffect)(function () {
            s.auth && C(t.user.email), L(t.user.email);
          }, []);
          var L = function (e) {
            a &&
              fetch("https://lyriko.herokuapp.com/api/sendcode", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                  Authorization: "Token ".concat(s.auth),
                },
                body: JSON.stringify({ email: e }),
              })
                .then(function (e) {
                  return e.json();
                })
                .then(function (t) {
                  if (!t.success)
                    return (
                      y("Faild. Try again", {
                        appearance: "error",
                        autoDismiss: !0,
                      }),
                      !1
                    );
                  y("Code sent to ".concat(e), {
                    appearance: "success",
                    autoDismiss: !0,
                  });
                });
          };
          return Object(m.jsx)("div", {
            children: a
              ? Object(m.jsx)("div", {
                  className: "signup-form",
                  children: Object(m.jsx)("form", {
                    className: "form",
                    children: Object(m.jsxs)("div", {
                      className: "verification_area",
                      children: [
                        Object(m.jsx)("div", {
                          className: "header",
                          children: Object(m.jsxs)("p", {
                            children: [
                              "Enter the six digits code sent to ",
                              S,
                              " to continue.",
                            ],
                          }),
                        }),
                        Object(m.jsx)("div", {
                          className: "code-input",
                          children: Object(m.jsx)("input", {
                            id: "code",
                            type: "text",
                            placeholder: "eg: 123456",
                            className: "form-control",
                            value: l,
                            onChange: function (e) {
                              return j(e.target.value);
                            },
                          }),
                        }),
                        O
                          ? Object(m.jsxs)("div", {
                              className: "code-error",
                              children: [Object(m.jsx)(b.a, { icon: h.h }), v],
                            })
                          : "",
                        Object(m.jsx)("div", {
                          className: "verification-btn",
                          children: Object(m.jsx)("a", {
                            className: "btn btn-primary",
                            onClick: function () {
                              return (function () {
                                if (l.length < 1)
                                  return (
                                    p(!0),
                                    N("This field is required."),
                                    T("code"),
                                    !1
                                  );
                                fetch(
                                  "https://lyriko.herokuapp.com/api/verifycode",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-type": "application/json",
                                      Authorization: "Token ".concat(s.auth),
                                    },
                                    body: JSON.stringify({ code: l }),
                                  }
                                )
                                  .then(function (e) {
                                    return e.json();
                                  })
                                  .then(function (e) {
                                    if (!e.msg)
                                      return T("code"), N("Invalid code"), !1;
                                    y("Verified!", {
                                      appearance: "success",
                                      autoDismiss: !0,
                                    }),
                                      (window.location.href = "/");
                                  });
                              })();
                            },
                            children: "Verify",
                          }),
                        }),
                        Object(m.jsx)("div", {
                          className: "resent-area",
                          children: Object(m.jsxs)("p", {
                            children: [
                              "Didn't get any code?",
                              " ",
                              Object(m.jsx)("span", {
                                className: "r-link",
                                onClick: function () {
                                  L(S);
                                },
                                children: "Retry",
                              }),
                              ".",
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                })
              : Object(m.jsx)("div", {
                  children: n
                    ? Object(m.jsxs)("div", {
                        children: [
                          Object(m.jsx)("h1", { children: "404" }),
                          Object(m.jsx)("h5", { children: "Page not found." }),
                        ],
                      })
                    : "",
                }),
          });
        },
        q = function (e) {
          var t = e.token,
            s = Object(c.useState)(""),
            a = Object(r.a)(s, 2),
            n = a[0],
            i = a[1],
            o = Object(c.useState)(""),
            l = Object(r.a)(o, 2),
            d = l[0],
            u = l[1],
            O = Object(c.useState)(""),
            p = Object(r.a)(O, 2),
            x = p[0],
            f = p[1],
            v = Object(c.useState)(""),
            N = Object(r.a)(v, 2),
            y = N[0],
            g = N[1],
            k = Object(c.useState)(""),
            S = Object(r.a)(k, 2),
            C = S[0],
            T = S[1],
            L = Object(c.useState)(),
            _ = Object(r.a)(L, 2),
            P = _[0],
            U = _[1],
            E = Object(c.useState)(),
            q = Object(r.a)(E, 2),
            A = q[0],
            J = (q[1], Object(c.useState)()),
            z = Object(r.a)(J, 2),
            D = z[0],
            W = (z[1], Object(c.useState)()),
            M = Object(r.a)(W, 2),
            I = M[0],
            F = M[1],
            K = Object(c.useState)(),
            R = Object(r.a)(K, 2),
            H = R[0],
            V = (R[1], Object(w.useToasts)().addToast),
            G = function (e) {
              (document.querySelector("#".concat(e)).style.borderColor = "red"),
                setTimeout(function () {
                  document.querySelector("#".concat(e)).style.borderColor =
                    "#706d6d";
                }, 2e3);
            },
            Z = function () {
              F(y === C);
            };
          return Object(m.jsx)("div", {
            className: "signup-form",
            children: Object(m.jsxs)("form", {
              className: "form",
              children: [
                Object(m.jsxs)("div", {
                  className: "header",
                  children: [
                    Object(m.jsx)("h3", { children: "Change your password" }),
                    Object(m.jsx)("p", {
                      children: Object(m.jsx)(j.b, {
                        to: "/auth/user/forgot-password",
                        className: "login-link",
                        children: "Forgot your password?",
                      }),
                    }),
                  ],
                }),
                Object(m.jsx)("div", {
                  className: "name-inputs-wrapper",
                  children: Object(m.jsx)("div", {
                    className: "name-inputs",
                    children: Object(m.jsxs)("div", {
                      className: "username",
                      children: [
                        Object(m.jsx)("label", {
                          className: "form-label",
                          children: "Current Password",
                        }),
                        Object(m.jsx)("input", {
                          id: "cr-pass",
                          type: "password",
                          value: n,
                          onChange: function (e) {
                            return i(e.target.value);
                          },
                          className: "form-control",
                        }),
                        d
                          ? Object(m.jsxs)("span", {
                              className: "error-msg",
                              children: [
                                Object(m.jsx)(b.a, { icon: h.h }),
                                " ",
                                x,
                              ],
                            })
                          : "",
                      ],
                    }),
                  }),
                }),
                Object(m.jsx)("div", {
                  className: "email-pass-wrapper",
                  children: Object(m.jsxs)("div", {
                    className: "email-pass-inputs",
                    children: [
                      Object(m.jsxs)("div", {
                        className: "password",
                        children: [
                          Object(m.jsxs)("label", {
                            className: "form-label",
                            children: [
                              "New Password",
                              " ",
                              "" !== y
                                ? Object(m.jsx)(b.a, {
                                    icon: P ? h.d : h.t,
                                    className: P ? "check" : "times",
                                  })
                                : "",
                            ],
                          }),
                          Object(m.jsx)("input", {
                            id: "pass",
                            value: y,
                            type: "password",
                            className: "form-control",
                            onKeyUp: function () {
                              !y.match(/[a-z]/g) ||
                              !y.match(/[0-9]/g) ||
                              y.length < 6
                                ? U(!1)
                                : U(!0),
                                Z();
                            },
                            onChange: function (e) {
                              g(e.target.value);
                            },
                          }),
                          A
                            ? Object(m.jsxs)("span", {
                                className: "error-msg",
                                children: [
                                  Object(m.jsx)(b.a, { icon: h.h }),
                                  " ",
                                  D,
                                ],
                              })
                            : "",
                        ],
                      }),
                      Object(m.jsxs)("div", {
                        className: "password",
                        children: [
                          Object(m.jsxs)("label", {
                            className: "form-label",
                            children: [
                              "Retype New Password",
                              " ",
                              "" != C
                                ? Object(m.jsx)(b.a, {
                                    icon: I ? h.d : h.t,
                                    className: I ? "check" : "times",
                                  })
                                : "",
                              " ",
                            ],
                          }),
                          Object(m.jsx)("input", {
                            id: "cpass",
                            value: C,
                            type: "password",
                            className: "form-control",
                            onKeyUp: function () {
                              return Z();
                            },
                            onChange: function (e) {
                              return T(e.target.value);
                            },
                          }),
                          H
                            ? Object(m.jsxs)("span", {
                                className: "error-msg",
                                children: [
                                  Object(m.jsx)(b.a, { icon: h.h }),
                                  H,
                                ],
                              })
                            : "",
                        ],
                      }),
                      Object(m.jsx)("div", {
                        className: "sign-up-btn",
                        children: Object(m.jsx)("a", {
                          className: "btn btn-primary",
                          onClick: function () {
                            "" === n
                              ? G("cr-pass")
                              : P
                              ? I
                                ? fetch(
                                    "https://lyriko.herokuapp.com/api/user/change-password/",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-type": "application/json",
                                        Authorization: "Token ".concat(t),
                                      },
                                      body: JSON.stringify({
                                        access: "current_password",
                                        current_password: n,
                                        new_password: y,
                                      }),
                                    }
                                  )
                                    .then(function (e) {
                                      return e.json();
                                    })
                                    .then(function (e) {
                                      e.error
                                        ? (G("cr-pass"),
                                          u(!0),
                                          f("Incorrect password"))
                                        : (V("Password changed!", {
                                            appearance: "success",
                                            autoDismiss: !0,
                                          }),
                                          setTimeout(function () {
                                            window.location.href = "/";
                                          }, 1e3));
                                    })
                                : G("cpass")
                              : G("pass");
                          },
                          children: "Change Password",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      var A = function () {
          var e = Object(c.useState)(!1),
            t = Object(r.a)(e, 2),
            s = t[0],
            a = t[1],
            n = Object(c.useState)(),
            i = Object(r.a)(n, 2),
            x = i[0],
            f = i[1],
            N = Object(c.useState)(),
            w = Object(r.a)(N, 2),
            A = w[0],
            J = w[1],
            z = Object(c.useState)(),
            D = Object(r.a)(z, 2),
            W = D[0],
            M = D[1],
            I = Object(c.useState)(),
            F = Object(r.a)(I, 2),
            K = F[0],
            R = F[1],
            H = Object(u.a)(["auth"]),
            V = Object(r.a)(H, 3),
            G = V[0],
            Z = V[1],
            $ = V[2],
            B = Object(u.a)(["user"]),
            Y = Object(r.a)(B, 3),
            Q = Y[0],
            X = Y[1],
            ee = Y[2],
            te = Object(c.useState)(),
            se = Object(r.a)(te, 2),
            ce = se[0],
            ae = se[1],
            ne = Object(c.useState)(""),
            ie = Object(r.a)(ne, 2),
            re = ie[0],
            oe = ie[1],
            le = Object(c.useState)([]),
            je = Object(r.a)(le, 2),
            de = je[0],
            ue = je[1],
            be = Object(c.useState)([]),
            he = Object(r.a)(be, 2),
            me = he[0],
            Oe = he[1],
            pe = Object(c.useState)(),
            xe = Object(r.a)(pe, 2),
            fe = xe[0],
            ve = xe[1],
            Ne = Object(c.useState)(!1),
            ye = Object(r.a)(Ne, 2),
            ge = ye[0],
            ke = ye[1],
            we = Object(c.useState)(!1),
            Se = Object(r.a)(we, 2),
            Ce = Se[0],
            Te = Se[1],
            Le = Object(c.useState)(!1),
            _e = Object(r.a)(Le, 2),
            Pe = _e[0],
            Ue = _e[1],
            Ee = Object(c.useState)(!1),
            qe = Object(r.a)(Ee, 2),
            Ae = qe[0],
            Je = qe[1],
            ze = Object(c.useState)(!1),
            De = Object(r.a)(ze, 2),
            We = De[0],
            Me = De[1];
          Object(c.useEffect)(
            function () {
              Ke(), Ve(), He(), Ge(), Fe(), Be(), Ie();
            },
            [G.token]
          );
          var Ie = function () {
              void 0 !== G.auth &&
                fetch("https://lyriko.herokuapp.com/api/user", {
                  headers: { Authorization: "Token ".concat(G.auth) },
                })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    X("user", e.user);
                  });
            },
            Fe = function () {
              void 0 !== G.auth || void 0 !== Q.user ? ae(!0) : ae(!1);
            },
            Ke = function () {
              Q.user &&
                Q.user.is_verified &&
                (!0 === Q.user.is_verified
                  ? oe(!0)
                  : !1 === Q.user.is_verified && oe(!1));
            },
            Re = function () {
              oe(!0);
            };
          !(function () {
            if (x) {
              if (!ce) return !1;
              fetch("https://lyriko.herokuapp.com/api/checksavelist/", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                  Authorization: "Token ".concat(G.auth),
                },
                body: JSON.stringify({ lyrics_id: x.id }),
              })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  ve(e.watchlisted);
                });
            }
          })();
          var He = function () {
              ke(!0),
                setTimeout(function () {
                  fetch("https://lyriko.herokuapp.com/api/recent", {
                    method: "GET",
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      M(e.recent), ke(!1);
                    });
                }, 2e3);
            },
            Ve = function () {
              Me(!0),
                setTimeout(function () {
                  fetch("https://lyriko.herokuapp.com/api/trending", {
                    method: "GET",
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      J(e.top), ke(!1), Me(!1);
                    });
                }, 3e3);
            },
            Ge = function () {
              Te(!0),
                setTimeout(function () {
                  fetch("https://lyriko.herokuapp.com/api/random", {
                    method: "get",
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      f(e.lyrics),
                        (document.title = ""
                          .concat(e.lyrics.title, " - ")
                          .concat(e.lyrics.artist, " - Lyriko")),
                        R(!1),
                        Te(!1);
                    });
                }, 1e3);
            },
            Ze = function (e, t) {
              var s = Object(l.a)(e),
                c = Object(l.a)(t);
              Te(!0),
                setTimeout(function () {
                  fetch(
                    "https://lyriko.herokuapp.com/api/lyrics/"
                      .concat(s, "/")
                      .concat(c),
                    {
                      method: "POST",
                      headers: { "Content-type": "application/json" },
                      body: JSON.stringify({
                        artist: e.replace(/(^\w{1})|(\s+\w{1})/g, function (e) {
                          return e.toUpperCase();
                        }),
                        title: t.replace(/(^\w{1})|(\s+\w{1})/g, function (e) {
                          return e.toUpperCase();
                        }),
                        username: Q.user ? Q.user.username : "",
                      }),
                    }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      e.error
                        ? (R(!0), f())
                        : (f(e.lyrics),
                          (document.title = ""
                            .concat(e.lyrics.title, " - ")
                            .concat(e.lyrics.artist, " - Lyriko")),
                          R(!1),
                          Te(!1));
                    });
                }, 1e3);
            },
            $e = function () {
              ee("user"), $("auth"), ae(!1), (window.location.href = "/login");
            },
            Be = function () {
              Ue(!0),
                setTimeout(function () {
                  if (void 0 === G.auth) return Ue(!1), !1;
                  fetch("https://lyriko.herokuapp.com/api/search-history", {
                    method: "GET",
                    headers: {
                      "Content-type": "application/json",
                      Authorization: "Token ".concat(G.auth),
                    },
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      ue(e.search_history), Ue(!1);
                    });
                }, 1e3);
            },
            Ye = function () {
              Je(!0),
                setTimeout(function () {
                  if (void 0 === G.auth) return Je(!1), !1;
                  fetch("https://lyriko.herokuapp.com/api/lyrics/savelist/", {
                    method: "GET",
                    headers: {
                      "Content-type": "application/json",
                      Authorization: "Token ".concat(G.auth),
                    },
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      Oe(e.lyrics), console.log(e.lyrics), Je(!1);
                    });
                }, 1e3);
            },
            Qe = function (e) {
              ce
                ? fetch(
                    "https://lyriko.herokuapp.com/api/lyrics/savelist/add/",
                    {
                      method: "POST",
                      headers: {
                        "Content-type": "application/json",
                        Authorization: "Token ".concat(G.auth),
                      },
                      body: JSON.stringify({ lyrics_id: e }),
                    }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      e.Error || Oe(e.save_list);
                    })
                : (window.location.href = "/login");
            },
            Xe = function (e) {
              ce
                ? fetch(
                    "https://lyriko.herokuapp.com/api/lyrics/savelist/remove/",
                    {
                      method: "POST",
                      headers: {
                        "Content-type": "application/json",
                        Authorization: "Token ".concat(G.auth),
                      },
                      body: JSON.stringify({ lyrics_id: e }),
                    }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      e.Error || Oe(e.save_list);
                    })
                : (window.location.href = "/login");
            };
          return Object(m.jsx)(j.a, {
            children: Object(m.jsxs)("div", {
              className: "App",
              children: [
                Object(m.jsx)("div", {
                  className: "top",
                  children: Object(m.jsx)(O, {
                    handleMobileMenuOpen: function () {
                      a(!s);
                    },
                    openMobileMenu: s,
                    logo: o,
                    is_athenticated: ce,
                    user: Q,
                    logout: $e,
                  }),
                }),
                Object(m.jsxs)("div", {
                  className: "middle",
                  children: [
                    Object(m.jsx)(d.a, {
                      path: "/",
                      exact: !0,
                      render: function (e) {
                        return Object(m.jsxs)("div", {
                          className: "middle-wrap",
                          children: [
                            void 0 !== G.auth
                              ? Object(m.jsx)("div", {
                                  children:
                                    !1 === Q.user.is_verified
                                      ? Object(m.jsx)("div", {
                                          className: "_alert_not_verified",
                                          children: Object(m.jsxs)("p", {
                                            children: [
                                              Object(m.jsx)(b.a, { icon: h.h }),
                                              " Your email is not yet verified.",
                                              Object(m.jsxs)(j.b, {
                                                to: "/user/auth/verify",
                                                children: [
                                                  " ",
                                                  Object(m.jsx)("span", {
                                                    className: "vlink",
                                                    children:
                                                      " Click to verify",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        })
                                      : "",
                                })
                              : "",
                            Object(m.jsx)("div", {
                              className: "request-form-wrapper",
                              children: Object(m.jsx)(v, {
                                openMobileMenu: s,
                                getLyrics: Ze,
                                random: Ge,
                                token: G,
                              }),
                            }),
                            Object(m.jsxs)("div", {
                              className: "main",
                              children: [
                                Object(m.jsx)("div", {
                                  className: "m-l-wrapper",
                                  children: Object(m.jsx)(y, {
                                    lyrics: x,
                                    notFound: K,
                                    random: Ge,
                                    removeWatchlist: Xe,
                                    addWatchlist: Qe,
                                    watchlisted: fe,
                                    lyricsLoading: Ce,
                                  }),
                                }),
                                Object(m.jsx)("div", {
                                  className: "m-t-wrapper",
                                  children: Object(m.jsx)(k, {
                                    getLyrics: Ze,
                                    trending: A,
                                    loading: We,
                                  }),
                                }),
                                Object(m.jsx)("div", {
                                  className: "m-r-wrapper",
                                  children: Object(m.jsx)(g, {
                                    getLyrics: Ze,
                                    recent: W,
                                    loading: ge,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        });
                      },
                    }),
                    Object(m.jsx)(d.a, {
                      path: "/signup",
                      exact: !0,
                      render: function (e) {
                        return Object(m.jsx)(L, {
                          setToken: Z,
                          setUser: X,
                          token: G,
                          handleVerify: Re,
                        });
                      },
                    }),
                    Object(m.jsx)(d.a, {
                      path: "/history",
                      exact: !0,
                      render: function (e) {
                        return Object(m.jsx)(_, {
                          history: de,
                          user: Q,
                          getLyrics: Ze,
                          getHistory: Be,
                          loading: Pe,
                        });
                      },
                    }),
                    Object(m.jsx)(d.a, {
                      path: "/watchlist",
                      exact: !0,
                      render: function (e) {
                        return Object(m.jsx)(P, {
                          watchlist: me,
                          user: Q,
                          getLyrics: Ze,
                          removeWatchlist: Xe,
                          loading: Ae,
                          getWatchlist: Ye,
                        });
                      },
                    }),
                    Object(m.jsx)(d.a, {
                      path: "/login",
                      exact: !0,
                      render: function (e) {
                        return Object(m.jsx)(T, { setToken: Z, setUser: X });
                      },
                    }),
                    Object(m.jsx)(d.a, {
                      path: "/lyrics/:artist/:title",
                      children: Object(m.jsx)(U, {
                        lyrics: x,
                        removeWatchlist: Xe,
                        addWatchlist: Qe,
                        watchlisted: fe,
                        token: G,
                        user: Q,
                      }),
                    }),
                    Object(m.jsx)(d.a, {
                      exact: !0,
                      path: "/user/auth/verify",
                      children: Object(m.jsx)(E, {
                        user: Q,
                        token: G,
                        is_authenticated: ce,
                        is_verified: re,
                        requestUser: Ie,
                      }),
                    }),
                    Object(m.jsx)(d.a, {
                      path: "/user/account",
                      exact: !0,
                      children: Object(m.jsx)(S, {
                        user: Q,
                        token: G.auth,
                        setUser: X,
                      }),
                    }),
                    Object(m.jsx)(d.a, {
                      exact: !0,
                      path: "/user/account/change-password",
                      children: Object(m.jsx)(q, { token: G.auth }),
                    }),
                    Object(m.jsx)(d.a, {
                      exact: !0,
                      path: "/auth/user/forgot-password",
                      children: Object(m.jsx)(C, { token: G.auth }),
                    }),
                  ],
                }),
                Object(m.jsx)("div", {
                  className: "bottom",
                  children: Object(m.jsx)(p, { logout: $e, user: Q, logo: o }),
                }),
              ],
            }),
          });
        },
        J = function (e) {
          e &&
            e instanceof Function &&
            s
              .e(3)
              .then(s.bind(null, 103))
              .then(function (t) {
                var s = t.getCLS,
                  c = t.getFID,
                  a = t.getFCP,
                  n = t.getLCP,
                  i = t.getTTFB;
                s(e), c(e), a(e), n(e), i(e);
              });
        };
      n.a.render(
        Object(m.jsx)(i.a, {
          children: Object(m.jsx)(w.ToastProvider, {
            placement: "bottom-right",
            children: Object(m.jsx)(A, {}),
          }),
        }),
        document.getElementById("root")
      ),
        J();
    },
    46: function (e, t, s) {},
    47: function (e, t, s) {},
    49: function (e, t, s) {},
    58: function (e, t, s) {},
    59: function (e, t, s) {},
    60: function (e, t, s) {},
    87: function (e, t, s) {},
    88: function (e, t, s) {},
    89: function (e, t, s) {},
    96: function (e, t, s) {},
    97: function (e, t, s) {},
    98: function (e, t, s) {},
    99: function (e, t, s) {},
  },
  [[100, 1, 2]],
]);
//# sourceMappingURL=main.abdde459.chunk.js.map
