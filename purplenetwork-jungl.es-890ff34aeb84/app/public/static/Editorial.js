(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    10: function(t, e, r) {
      "use strict";
      r.d(e, "b", function() {
        return n;
      }),
        r.d(e, "a", function() {
          return i;
        });
      var n = { power3InOut: "power3.inOut", power3Out: "power3.out" },
        i = { introDuration: 0.4, changeSectionDuration: 0.3 };
    },
    15: function(t, e, r) {
      "use strict";
      r.d(e, "a", function() {
        return s;
      });
      var n = r(6),
        i = r.n(n),
        a = r(11),
        o = r.n(a),
        s = (function() {
          function t() {
            i()(this, t);
          }
          return (
            o()(t, null, [
              {
                key: "init",
                value: function(t) {
                  console.log(t);
                }
              }
            ]),
            t
          );
        })();
    },
    17: function(t, e, r) {
      "use strict";
      r.d(e, "a", function() {
        return s;
      });
      var n = r(6),
        i = r.n(n),
        a = r(7),
        o = r(10),
        s = function t(e) {
          var r = this,
            n = e.onClick;
          i()(this, t),
            (this.show = function() {
              a.a.to(r.domElement, {
                duration: o.a.introDuration,
                opacity: 1,
                x: 122,
                ease: o.b.power3InOut
              });
            }),
            (this.hide = function() {
              a.a.to(r.domElement, {
                duration: o.a.introDuration,
                opacity: 0,
                x: 0,
                ease: o.b.power3InOut
              });
            }),
            (this.visible = function(t) {
              a.a.to(r.domElement, {
                duration: 0.35,
                opacity: t ? 1 : 0,
                ease: o.b.power3InOut
              });
            }),
            (this.domElement = document.querySelector(".js-logo")),
            this.domElement.addEventListener("click", n);
        };
    },
    18: function(t, e, r) {
      "use strict";
      var n = r(6),
        i = r.n(n),
        a = r(11),
        o = r.n(a),
        s = r(7),
        c = r(19),
        u = r.n(c),
        l = function t(e) {
          var r = this,
            n = e.currentStep,
            a = void 0 === n ? 0 : n,
            o = e.onClick;
          i()(this, t),
            (this.update = function(t) {
              var e = t.oldStep,
                n = t.currentStep;
              if (e >= 0) {
                var i = r.paginationText[e],
                  a = r.paginationText[e + 1],
                  o = r.paginationText[n],
                  c = r.paginationText[n + 1];
                i.parentNode.classList.remove("is-active"),
                  o.parentNode.classList.add("is-active"),
                  a && s.a.to(a, { duration: 0.3, width: 0 }),
                  s.a.to(c, {
                    duration: 0.3,
                    width: window.innerWidth < 768 ? 0 : "auto"
                  });
              } else {
                var u = r.paginationText[n - 1],
                  l = r.paginationText[n],
                  d = r.paginationText[n + 1];
                u.parentNode.classList.remove("is-active"),
                  l.parentNode.classList.add("is-active"),
                  s.a.to(l, { duration: 0.3, width: 0 }),
                  d &&
                    s.a.to(d, {
                      duration: 0.3,
                      width: window.innerWidth < 768 ? 0 : "auto"
                    });
              }
            }),
            (this.onClick = o),
            (this.paginationText = document.querySelectorAll(
              ".js-form-pagination-text"
            )),
            (this.paginationDot = Object.values(
              document.querySelectorAll(".js-form-pagination-dot")
            )),
            this.paginationDot.map(function(t, e) {
              t.addEventListener("click", function() {
                r.onClick(e);
              });
            });
          var c = this.paginationText[a + 1];
          return (
            s.a.set(c, { width: window.innerWidth < 768 ? 0 : "auto" }),
            (this.loader = s.a.timeline({ paused: !0, repeat: -1, yoyo: !1 })),
            this.loader
              .to(this.paginationDot, {
                duration: 0.3,
                stagger: 0.1,
                opacity: 1,
                clearProps: "all"
              })
              .to(this.paginationDot, {
                duration: 0.3,
                stagger: 0.1,
                opacity: 0.2,
                clearProps: "all"
              }),
            (this.loader.stop = function() {
              r.loader.pause(),
                r.loader.seek(0),
                s.a.set(r.paginationDot, { opacity: 1 });
            }),
            this
          );
        },
        d = r(28),
        p = function t(e) {
          var r = this,
            n = e.app;
          return (
            i()(this, t),
            (this.addError = function(t) {
              r.app.form.classList.add(r.app.errorClassName),
                (r.app.errorMessage = t);
            }),
            (this.removeError = function() {
              r.app.form.classList.remove(r.app.errorClassName);
            }),
            (this.checkRequired = function(t) {
              return (
                !(!t || "" === t) ||
                (r.addError(r.app.steps[r.app.currentStep].errors.required), !1)
              );
            }),
            (this.checkName = function() {
              var t = r.app.input.value;
              return !!r.checkRequired(t) && t;
            }),
            (this.checkEmail = function() {
              var t = r.app.input.value;
              return (
                !!r.checkRequired(t) &&
                (Object(d.validateEmail)(t)
                  ? t
                  : (r.addError(r.app.steps[r.app.currentStep].errors.invalid),
                    !1))
              );
            }),
            (this.checkPhone = function() {
              var t = r.app.input.value;
              return t && "" !== t
                ? r.__validatePhone(t)
                  ? t
                  : (r.addError(r.app.steps[r.app.currentStep].errors.invalid),
                    !1)
                : "";
            }),
            (this.checkMessage = function() {
              var t = r.app.textarea.value;
              return !!r.checkRequired(t) && t;
            }),
            (this.checkLastStep = function() {
              var t = r.app.checkBox.checked;
              return (
                t || r.addError(r.app.steps[r.app.currentStep].errors.required),
                !t || "1"
              );
            }),
            (this.watchPhoneChange = function() {
              var t = r.app.input,
                e = t.value,
                n = 12;
              "+" === e.substr(0, 1)
                ? ((e =
                    "+" +
                    (e = (e = e.substr(1, e.length))
                      .replace(/\s+/g, "-")
                      .replace(/[^0-9-]/g, "")
                      .replace(/-+/g, "")).substr(0, e.length)),
                  (n = 15))
                : (e = (e = e
                    .replace(/\s+/g, "-")
                    .replace(/[^0-9-]/g, "")
                    .replace(/-+/g, "")).substr(0, e.length)),
                (e = e.length <= n ? e : e.substr(0, n)),
                (t.value = e);
            }),
            (this.__validatePhone = function(t) {
              var e = t.length > 6;
              return (
                "+" !== t.substr(0, 1) &&
                  3 !== parseInt(t.substr(0, 1)) &&
                  0 !== parseInt(t.substr(0, 1)) &&
                  (e = !1),
                e
              );
            }),
            (this.app = n),
            this
          );
        },
        h = function t(e) {
          var r = e.app;
          return (
            i()(this, t),
            [
              {
                field: "name",
                type: "text",
                check: function() {
                  return r.validator.checkName();
                },
                errors: { required: errMsgNameMandatory }
              },
              {
                field: "email",
                type: "email",
                check: function() {
                  return r.validator.checkEmail();
                },
                errors: {
                  required: errMsgEmailMandatory,
                  invalid: errMsgEmailNotValid
                }
              },
              {
                field: "phone",
                type: "tel",
                check: function() {
                  return r.validator.checkPhone();
                },
                errors: {
                  required: errMsgPhoneMandatory,
                  invalid: errMsgPhoneNotValid
                }
              },
              {
                field: "message",
                type: "textarea",
                check: function() {
                  return r.validator.checkMessage();
                },
                errors: { required: errMsgMessageMandatory }
              },
              {
                field: "privacy",
                type: "checkbox",
                check: function() {
                  return r.validator.checkLastStep();
                },
                errors: { required: errMsgPrivacyMandatory }
              }
            ]
          );
        },
        f = r(8);
      r.d(e, "a", function() {
        return m;
      });
      var m = (function() {
        function t(e) {
          var r = this,
            n = e.onResultCallback;
          i()(this, t),
            (this.reset = function() {
              Object.keys(r.formData).map(function(t) {
                delete r.formData[t];
              });
              var t = r.currentStep;
              setTimeout(function() {
                (r.textarea.value = ""),
                  (r.checkBox.checked = !1),
                  r.form.classList.remove("is-submitted"),
                  r.form.classList.remove("has-textarea"),
                  r.form.classList.remove("is-last-step"),
                  r.form.classList.add("has-captcha"),
                  s.a.set(r.captcha, { clearProps: "all" }),
                  (r.sendButton.disabled = !r.checkBox.checked),
                  window.grecaptcha.reset(),
                  r.hideLastStep(),
                  r.hideResult(),
                  s.a.set(r.fieldSet, {
                    marginBottom: window.innerWidth < 768 ? "94px" : "154px"
                  }),
                  r.validator.removeError(),
                  0 !== t &&
                    r.pagination.update({ oldStep: t, currentStep: 0 }),
                  s.a.set(r.labels, { clearProps: "all" });
              }, 300);
              var e = r.currentStep;
              (r.currentStep = 0), r.transformInput(e);
            }),
            (this.checkForm = function() {
              var t = r.steps[r.currentStep],
                e = t.check();
              if (!1 !== e) {
                if (
                  ((r.formData[t.field] = e),
                  r.currentStep === r.steps.length - 1)
                )
                  return window.grecaptcha.execute();
                (r.currentStep = r.currentStep + 1), r.transformInput();
              }
            }),
            (this.addListeners = function() {
              r.form.addEventListener("submit", function(t) {
                return t.preventDefault(), r.checkForm(), !1;
              });
              var t = ["focus", "input", "change"];
              [r.input, r.textarea, r.checkBox].map(function(e) {
                return t.map(function(t) {
                  return e.addEventListener(t, r.validator.removeError);
                });
              }),
                r.checkBox.addEventListener("change", function() {
                  r.showCaptcha();
                });
            }),
            (this.transformInput = function(t) {
              var e = r.steps[r.currentStep],
                n = window.innerWidth < 768 ? 34 : 38,
                i = "".concat(r.currentStep * -n, "px");
              if (
                (s.a.to(r.labels, { duration: 0.3, y: i }),
                (r.input.value = r.formData[e.field] || ""),
                r.input.blur(),
                "checkbox" === e.type)
              )
                return (
                  r.pagination.update({
                    oldStep: t,
                    currentStep: r.currentStep
                  }),
                  r.showLastStep()
                );
              t === r.steps.length - 1 && r.hideLastStep(),
                (r.input.type = e.type),
                r.pagination.update({ oldStep: t, currentStep: r.currentStep }),
                "tel" === e.type
                  ? r.input.addEventListener(
                      "input",
                      r.validator.watchPhoneChange
                    )
                  : r.input.removeEventListener(
                      "input",
                      r.validator.watchPhoneChange
                    ),
                "textarea" === e.type
                  ? (r.textarea.focus(), r.form.classList.add("has-textarea"))
                  : (r.input.focus(), r.form.classList.remove("has-textarea")),
                0 == r.currentStep
                  ? s.a.to(".js-form-advice", {
                      duration: 0.4,
                      opacity: 1,
                      y: 0,
                      onStart: function() {
                        document.querySelector(
                          ".js-form-advice"
                        ).style.display = "block";
                      }
                    })
                  : s.a
                      .to(".js-form-advice", {
                        duration: 0.4,
                        opacity: 0,
                        y: 20
                      })
                      .then(function() {
                        document.querySelector(
                          ".js-form-advice"
                        ).style.display = "none";
                      });
            }),
            (this.showLastStep = function() {
              r.form.classList.add("is-last-step");
              var t = "94px";
              r.form.classList.contains("has-captcha") && (t = "154px"),
                s.a.to(r.fieldSet, { duration: 0.3, marginBottom: t }),
                s.a.to(r.inputs, {
                  duration: 0.3,
                  y: "-10px",
                  opacity: 0,
                  pointerEvents: "none"
                }),
                s.a.to(r.lastStep, {
                  duration: 0.3,
                  y: f.a.isMobile ? "-160px" : "-150px",
                  opacity: 1,
                  pointerEvents: "all"
                });
            }),
            (this.hideLastStep = function() {
              r.form.classList.remove("is-last-step"),
                s.a.to(r.fieldSet, { duration: 0.3, marginBottom: 0 }),
                s.a.to(r.inputs, {
                  duration: 0.3,
                  y: 0,
                  opacity: 1,
                  pointerEvents: "all"
                }),
                s.a.to(r.lastStep, {
                  duration: 0.3,
                  y: 0,
                  opacity: 0,
                  pointerEvents: "none"
                });
            }),
            (this.showCaptcha = function() {
              (r.sendButton.disabled = !r.checkBox.checked),
                r.checkBox.checked &&
                  (r.form.classList.add("has-captcha"),
                  s.a.to(r.fieldSet, {
                    duration: 0.3,
                    marginBottom: window.innerWidth < 768 ? "94px" : "154px",
                    onComplete: function() {
                      r.captcha.hasChildNodes() ||
                        window.grecaptcha.render(r.captcha, {
                          sitekey: window.recaptchaKey,
                          size: "invisible",
                          badge: "inline",
                          callback: function(t) {
                            (r.formData.captcha = t), r.sendForm();
                          }
                        }),
                        s.a.to(r.captcha, { duration: 0.3, height: "auto" });
                    }
                  }));
            }),
            (this.sendForm = function() {
              r.lockForm(),
                r.pagination.loader.play(),
                u()({
                  method: "post",
                  url: window.apiUrl,
                  config: {
                    headers: {
                      "Content-Type": "application/json",
                      "cache-control": "no-cache"
                    }
                  },
                  data: r.formData
                })
                  .then(function() {
                    r.pagination.loader.stop(), r.showResult(), r.unlockForm();
                  })
                  .catch(function(t) {
                    r.validator.addError(t),
                      r.pagination.loader.stop(),
                      r.unlockForm();
                  });
            }),
            (this.lockForm = function() {
              r.form.classList.add("is-submitted"),
                (r.sendButton.disabled = !0);
            }),
            (this.unlockForm = function() {
              r.form.classList.remove("is-submitted"),
                (r.sendButton.disabled = !1);
            }),
            (this.showResult = function() {
              s.a.to([r.toHideOnResult], {
                duration: 0.3,
                opacity: 0,
                pointerEvents: "none"
              }),
                s.a
                  .to(r.result, {
                    duration: 0.3,
                    y: 0,
                    opacity: 1,
                    pointerEvents: "all"
                  })
                  .then(function() {
                    null !== r.onResultCallback && r.onResultCallback();
                  });
            }),
            (this.hideResult = function() {
              s.a.set([r.toHideOnResult], { clearProps: "all" }),
                s.a.set(r.result, { clearProps: "all" });
            }),
            (this.form = document.querySelector(".js-form")),
            (this.input = this.form.querySelector("input")),
            (this.textarea = this.form.querySelector("textarea")),
            (this.checkBox = this.form.querySelector('input[type="checkbox"]')),
            (this.formErrorMessage = this.form.querySelector(
              ".js-form-error-message"
            )),
            (this.labels = this.form.querySelector(".js-form-labels")),
            (this.fieldSet = this.form.querySelector(".js-form-fieldset")),
            (this.inputs = this.form.querySelector(".js-form-inputs")),
            (this.lastStep = this.form.querySelector(".js-form-last-step")),
            (this.captcha = this.form.querySelector(".js-captcha")),
            (this.sendButton = this.form.querySelector(".js-form-send")),
            (this.result = this.form.querySelector(".js-form-result")),
            (this.toHideOnResult = this.form.querySelectorAll(
              ".js-form-to-hide-on-result"
            )),
            (this.errorClassName = "has-error"),
            (this.formData = {}),
            (this.currentStep = 0),
            (this.onResultCallback = n),
            (this.steps = new h({ app: this })),
            (this.validator = new p({ app: this })),
            (this.pagination = new l({
              onClick: function(t) {
                var e = r.currentStep;
                t < e
                  ? ((r.currentStep = t), r.transformInput(e))
                  : t > e && r.checkForm();
              }
            })),
            this.addListeners();
        }
        return (
          o()(t, [
            {
              key: "isLastStep",
              get: function() {
                return this.form.classList.contains("is-last-step");
              }
            },
            {
              key: "errorMessage",
              get: function() {
                return this.formErrorMessage.innerHTML;
              },
              set: function(t) {
                this.formErrorMessage.innerHTML = t;
              }
            }
          ]),
          t
        );
      })();
    },
    58: function(t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "default", function() {
          return v;
        });
      var n = r(6),
        i = r.n(n),
        a = r(11),
        o = r.n(a),
        s = r(13),
        c = r.n(s),
        u = r(12),
        l = r.n(u),
        d = r(14),
        p = r.n(d),
        h = r(15),
        f = r(18),
        m = r(17),
        v = (function(t) {
          function e() {
            return i()(this, e), c()(this, l()(e).apply(this, arguments));
          }
          return (
            p()(e, t),
            o()(e, null, [
              {
                key: "init",
                value: function() {
                  var t = this;
                  (document.body.style.backgroundColor = "white"),
                    document.body.classList.add("is-scollable"),
                    (this.headerLogo = new m.a({
                      onClick: function() {
                        return (window.location.href = "/");
                      }
                    })),
                    document.body.classList.add("app-is-ready", "is-white"),
                    this.headerLogo.show(),
                    document.querySelector(".js-tab")
                      ? (this.setActive(window.location.hash),
                        window.addEventListener("resize", function() {
                          var t = document.querySelector(
                            ".js-tab-content .is-active"
                          ).clientHeight;
                          document.querySelector(
                            ".js-tab-content"
                          ).style.height = "".concat(t, "px");
                        }),
                        Object.values(
                          document.querySelectorAll(".js-tab [href]")
                        ).map(function(e) {
                          e.addEventListener("click", function() {
                            var r = e.getAttribute("href");
                            t.setActive(r);
                          });
                        }))
                      : new f.a();
                }
              }
            ]),
            e
          );
        })(h.a);
      v.setActive = function(t) {
        if ("" !== t) {
          document
            .querySelector(".js-tab .is-active")
            .classList.remove("is-active"),
            document
              .querySelector('.js-tab [href="'.concat(t, '"]'))
              .parentNode.classList.add("is-active"),
            document
              .querySelector(".js-tab-content .is-active")
              .classList.remove("is-active"),
            document
              .querySelector('.js-tab-content [data-tab="'.concat(t, '"]'))
              .classList.add("is-active");
          var e = document.querySelector(".js-tab-content .is-active")
            .clientHeight;
          document.querySelector(".js-tab-content").style.height = "".concat(
            e,
            "px"
          );
        } else {
          var r = document.querySelector(".js-tab-content .is-active")
            .clientHeight;
          document.querySelector(".js-tab-content").style.height = "".concat(
            r,
            "px"
          );
        }
      };
    },
    59: function(t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "default", function() {
          return h;
        });
      var n = r(6),
        i = r.n(n),
        a = r(11),
        o = r.n(a),
        s = r(13),
        c = r.n(s),
        u = r(12),
        l = r.n(u),
        d = r(14),
        p = r.n(d),
        h = (function(t) {
          function e() {
            return i()(this, e), c()(this, l()(e).apply(this, arguments));
          }
          return (
            p()(e, t),
            o()(e, null, [
              {
                key: "init",
                value: function() {
                  console.log("privacy page");
                }
              }
            ]),
            e
          );
        })(r(15).a);
    },
    8: function(t, e, r) {
      "use strict";
      var n = r(29),
        i = r.n(n),
        a = {
          selectedSetionIndex: null,
          selectedSection: null,
          sections: [],
          isBlobVisible: !1,
          contentDomElement: document.querySelector(".js-content"),
          browser: i.a.getParser(window.navigator.userAgent),
          get isMobile() {
            var t = !1;
            switch (
              i.a.getParser(window.navigator.userAgent).parsedResult.platform
                .type
            ) {
              case "mobile":
                t = !0;
                break;
              case "tablet":
              default:
                t = !1;
            }
            return "ontouchstart" in window && t;
          },
          get isTablet() {
            return (
              "ontouchstart" in window &&
              "tablet" ==
                i.a.getParser(window.navigator.userAgent).parsedResult.platform
                  .type
            );
          },
          get isMobileOrTablet() {
            return this.isMobile || this.isTablet || this.hasTouch;
          },
          get isMobileOrTabletLandscape() {
            return (
              this.isMobile ||
              (this.isTablet && this.isLandscape) ||
              (this.hasTouch && this.isLandscape)
            );
          },
          get isMobileOrTabletPortrait() {
            return (
              this.isMobile ||
              (this.isTablet && this.isPortrait) ||
              (this.hasTouch && this.isPortrait)
            );
          },
          get isLandscape() {
            var t = !1;
            return (
              screen.orientation
                ? (t = 0 !== screen.orientation.angle)
                : void 0 !== window.orientation &&
                  (t = 90 == window.orientation || -90 == window.orientation),
              t
            );
          },
          get isPortrait() {
            var t = !1;
            return (
              screen.orientation
                ? (t = 0 == screen.orientation.angle)
                : void 0 !== window.orientation &&
                  (t = 90 !== window.orientation && -90 !== window.orientation),
              t
            );
          },
          get hasTouch() {
            return "ontouchstart" in window;
          },
          get isSafariMobile() {
            var t = i.a.getParser(window.navigator.userAgent);
            return (
              "ios" == t.parsedResult.os.name.toLowerCase() &&
              "safari" == t.parsedResult.browser.name.toLowerCase()
            );
          },
          getSectionById: function(t) {
            var e = !0,
              r = !1,
              n = void 0;
            try {
              for (
                var i, o = a.sections[Symbol.iterator]();
                !(e = (i = o.next()).done);
                e = !0
              ) {
                var s = i.value;
                if (s.id == t) return s;
              }
            } catch (t) {
              (r = !0), (n = t);
            } finally {
              try {
                e || null == o.return || o.return();
              } finally {
                if (r) throw n;
              }
            }
            return null;
          }
        };
      e.a = a;
    }
  }
]);
