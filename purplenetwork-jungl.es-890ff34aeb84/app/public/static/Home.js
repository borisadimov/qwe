(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    10: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return o;
      }),
        n.d(t, "a", function() {
          return i;
        });
      var o = { power3InOut: "power3.inOut", power3Out: "power3.out" },
        i = { introDuration: 0.4, changeSectionDuration: 0.3 };
    },
    15: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      });
      var o = n(6),
        i = n.n(o),
        a = n(11),
        r = n.n(a),
        s = (function() {
          function e() {
            i()(this, e);
          }
          return (
            r()(e, null, [
              {
                key: "init",
                value: function(e) {
                  console.log(e);
                }
              }
            ]),
            e
          );
        })();
    },
    17: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      });
      var o = n(6),
        i = n.n(o),
        a = n(7),
        r = n(10),
        s = function e(t) {
          var n = this,
            o = t.onClick;
          i()(this, e),
            (this.show = function() {
              a.a.to(n.domElement, {
                duration: r.a.introDuration,
                opacity: 1,
                x: 122,
                ease: r.b.power3InOut
              });
            }),
            (this.hide = function() {
              a.a.to(n.domElement, {
                duration: r.a.introDuration,
                opacity: 0,
                x: 0,
                ease: r.b.power3InOut
              });
            }),
            (this.visible = function(e) {
              a.a.to(n.domElement, {
                duration: 0.35,
                opacity: e ? 1 : 0,
                ease: r.b.power3InOut
              });
            }),
            (this.domElement = document.querySelector(".js-logo")),
            this.domElement.addEventListener("click", o);
        };
    },
    18: function(e, t, n) {
      "use strict";
      var o = n(6),
        i = n.n(o),
        a = n(11),
        r = n.n(a),
        s = n(7),
        c = n(19),
        l = n.n(c),
        u = function e(t) {
          var n = this,
            o = t.currentStep,
            a = void 0 === o ? 0 : o,
            r = t.onClick;
          i()(this, e),
            (this.update = function(e) {
              var t = e.oldStep,
                o = e.currentStep;
              if (t >= 0) {
                var i = n.paginationText[t],
                  a = n.paginationText[t + 1],
                  r = n.paginationText[o],
                  c = n.paginationText[o + 1];
                i.parentNode.classList.remove("is-active"),
                  r.parentNode.classList.add("is-active"),
                  a && s.a.to(a, { duration: 0.3, width: 0 }),
                  s.a.to(c, {
                    duration: 0.3,
                    width: window.innerWidth < 768 ? 0 : "auto"
                  });
              } else {
                var l = n.paginationText[o - 1],
                  u = n.paginationText[o],
                  d = n.paginationText[o + 1];
                l.parentNode.classList.remove("is-active"),
                  u.parentNode.classList.add("is-active"),
                  s.a.to(u, { duration: 0.3, width: 0 }),
                  d &&
                    s.a.to(d, {
                      duration: 0.3,
                      width: window.innerWidth < 768 ? 0 : "auto"
                    });
              }
            }),
            (this.onClick = r),
            (this.paginationText = document.querySelectorAll(
              ".js-form-pagination-text"
            )),
            (this.paginationDot = Object.values(
              document.querySelectorAll(".js-form-pagination-dot")
            )),
            this.paginationDot.map(function(e, t) {
              e.addEventListener("click", function() {
                n.onClick(t);
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
              n.loader.pause(),
                n.loader.seek(0),
                s.a.set(n.paginationDot, { opacity: 1 });
            }),
            this
          );
        },
        d = n(28),
        m = function e(t) {
          var n = this,
            o = t.app;
          return (
            i()(this, e),
            (this.addError = function(e) {
              n.app.form.classList.add(n.app.errorClassName),
                (n.app.errorMessage = e);
            }),
            (this.removeError = function() {
              n.app.form.classList.remove(n.app.errorClassName);
            }),
            (this.checkRequired = function(e) {
              return (
                !(!e || "" === e) ||
                (n.addError(n.app.steps[n.app.currentStep].errors.required), !1)
              );
            }),
            (this.checkName = function() {
              var e = n.app.input.value;
              return !!n.checkRequired(e) && e;
            }),
            (this.checkEmail = function() {
              var e = n.app.input.value;
              return (
                !!n.checkRequired(e) &&
                (Object(d.validateEmail)(e)
                  ? e
                  : (n.addError(n.app.steps[n.app.currentStep].errors.invalid),
                    !1))
              );
            }),
            (this.checkPhone = function() {
              var e = n.app.input.value;
              return e && "" !== e
                ? n.__validatePhone(e)
                  ? e
                  : (n.addError(n.app.steps[n.app.currentStep].errors.invalid),
                    !1)
                : "";
            }),
            (this.checkMessage = function() {
              var e = n.app.textarea.value;
              return !!n.checkRequired(e) && e;
            }),
            (this.checkLastStep = function() {
              var e = n.app.checkBox.checked;
              return (
                e || n.addError(n.app.steps[n.app.currentStep].errors.required),
                !e || "1"
              );
            }),
            (this.watchPhoneChange = function() {
              var e = n.app.input,
                t = e.value,
                o = 12;
              "+" === t.substr(0, 1)
                ? ((t =
                    "+" +
                    (t = (t = t.substr(1, t.length))
                      .replace(/\s+/g, "-")
                      .replace(/[^0-9-]/g, "")
                      .replace(/-+/g, "")).substr(0, t.length)),
                  (o = 15))
                : (t = (t = t
                    .replace(/\s+/g, "-")
                    .replace(/[^0-9-]/g, "")
                    .replace(/-+/g, "")).substr(0, t.length)),
                (t = t.length <= o ? t : t.substr(0, o)),
                (e.value = t);
            }),
            (this.__validatePhone = function(e) {
              var t = e.length > 6;
              return (
                "+" !== e.substr(0, 1) &&
                  3 !== parseInt(e.substr(0, 1)) &&
                  0 !== parseInt(e.substr(0, 1)) &&
                  (t = !1),
                t
              );
            }),
            (this.app = o),
            this
          );
        },
        h = function e(t) {
          var n = t.app;
          return (
            i()(this, e),
            [
              {
                field: "name",
                type: "text",
                check: function() {
                  return n.validator.checkName();
                },
                errors: { required: errMsgNameMandatory }
              },
              {
                field: "email",
                type: "email",
                check: function() {
                  return n.validator.checkEmail();
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
                  return n.validator.checkPhone();
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
                  return n.validator.checkMessage();
                },
                errors: { required: errMsgMessageMandatory }
              },
              {
                field: "privacy",
                type: "checkbox",
                check: function() {
                  return n.validator.checkLastStep();
                },
                errors: { required: errMsgPrivacyMandatory }
              }
            ]
          );
        },
        p = n(8);
      n.d(t, "a", function() {
        return f;
      });
      var f = (function() {
        function e(t) {
          var n = this,
            o = t.onResultCallback;
          i()(this, e),
            (this.reset = function() {
              Object.keys(n.formData).map(function(e) {
                delete n.formData[e];
              });
              var e = n.currentStep;
              setTimeout(function() {
                (n.textarea.value = ""),
                  (n.checkBox.checked = !1),
                  n.form.classList.remove("is-submitted"),
                  n.form.classList.remove("has-textarea"),
                  n.form.classList.remove("is-last-step"),
                  n.form.classList.add("has-captcha"),
                  s.a.set(n.captcha, { clearProps: "all" }),
                  (n.sendButton.disabled = !n.checkBox.checked),
                  window.grecaptcha.reset(),
                  n.hideLastStep(),
                  n.hideResult(),
                  s.a.set(n.fieldSet, {
                    marginBottom: window.innerWidth < 768 ? "94px" : "154px"
                  }),
                  n.validator.removeError(),
                  0 !== e &&
                    n.pagination.update({ oldStep: e, currentStep: 0 }),
                  s.a.set(n.labels, { clearProps: "all" });
              }, 300);
              var t = n.currentStep;
              (n.currentStep = 0), n.transformInput(t);
            }),
            (this.checkForm = function() {
              var e = n.steps[n.currentStep],
                t = e.check();
              if (!1 !== t) {
                if (
                  ((n.formData[e.field] = t),
                  n.currentStep === n.steps.length - 1)
                )
                  return window.grecaptcha.execute();
                (n.currentStep = n.currentStep + 1), n.transformInput();
              }
            }),
            (this.addListeners = function() {
              n.form.addEventListener("submit", function(e) {
                return e.preventDefault(), n.checkForm(), !1;
              });
              var e = ["focus", "input", "change"];
              [n.input, n.textarea, n.checkBox].map(function(t) {
                return e.map(function(e) {
                  return t.addEventListener(e, n.validator.removeError);
                });
              }),
                n.checkBox.addEventListener("change", function() {
                  n.showCaptcha();
                });
            }),
            (this.transformInput = function(e) {
              var t = n.steps[n.currentStep],
                o = window.innerWidth < 768 ? 34 : 38,
                i = "".concat(n.currentStep * -o, "px");
              if (
                (s.a.to(n.labels, { duration: 0.3, y: i }),
                (n.input.value = n.formData[t.field] || ""),
                n.input.blur(),
                "checkbox" === t.type)
              )
                return (
                  n.pagination.update({
                    oldStep: e,
                    currentStep: n.currentStep
                  }),
                  n.showLastStep()
                );
              e === n.steps.length - 1 && n.hideLastStep(),
                (n.input.type = t.type),
                n.pagination.update({ oldStep: e, currentStep: n.currentStep }),
                "tel" === t.type
                  ? n.input.addEventListener(
                      "input",
                      n.validator.watchPhoneChange
                    )
                  : n.input.removeEventListener(
                      "input",
                      n.validator.watchPhoneChange
                    ),
                "textarea" === t.type
                  ? (n.textarea.focus(), n.form.classList.add("has-textarea"))
                  : (n.input.focus(), n.form.classList.remove("has-textarea")),
                0 == n.currentStep
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
              n.form.classList.add("is-last-step");
              var e = "94px";
              n.form.classList.contains("has-captcha") && (e = "154px"),
                s.a.to(n.fieldSet, { duration: 0.3, marginBottom: e }),
                s.a.to(n.inputs, {
                  duration: 0.3,
                  y: "-10px",
                  opacity: 0,
                  pointerEvents: "none"
                }),
                s.a.to(n.lastStep, {
                  duration: 0.3,
                  y: p.a.isMobile ? "-160px" : "-150px",
                  opacity: 1,
                  pointerEvents: "all"
                });
            }),
            (this.hideLastStep = function() {
              n.form.classList.remove("is-last-step"),
                s.a.to(n.fieldSet, { duration: 0.3, marginBottom: 0 }),
                s.a.to(n.inputs, {
                  duration: 0.3,
                  y: 0,
                  opacity: 1,
                  pointerEvents: "all"
                }),
                s.a.to(n.lastStep, {
                  duration: 0.3,
                  y: 0,
                  opacity: 0,
                  pointerEvents: "none"
                });
            }),
            (this.showCaptcha = function() {
              (n.sendButton.disabled = !n.checkBox.checked),
                n.checkBox.checked &&
                  (n.form.classList.add("has-captcha"),
                  s.a.to(n.fieldSet, {
                    duration: 0.3,
                    marginBottom: window.innerWidth < 768 ? "94px" : "154px",
                    onComplete: function() {
                      n.captcha.hasChildNodes() ||
                        window.grecaptcha.render(n.captcha, {
                          sitekey: window.recaptchaKey,
                          size: "invisible",
                          badge: "inline",
                          callback: function(e) {
                            (n.formData.captcha = e), n.sendForm();
                          }
                        }),
                        s.a.to(n.captcha, { duration: 0.3, height: "auto" });
                    }
                  }));
            }),
            (this.sendForm = function() {
              n.lockForm(),
                n.pagination.loader.play(),
                l()({
                  method: "post",
                  url: window.apiUrl,
                  config: {
                    headers: {
                      "Content-Type": "application/json",
                      "cache-control": "no-cache"
                    }
                  },
                  data: n.formData
                })
                  .then(function() {
                    n.pagination.loader.stop(), n.showResult(), n.unlockForm();
                  })
                  .catch(function(e) {
                    n.validator.addError(e),
                      n.pagination.loader.stop(),
                      n.unlockForm();
                  });
            }),
            (this.lockForm = function() {
              n.form.classList.add("is-submitted"),
                (n.sendButton.disabled = !0);
            }),
            (this.unlockForm = function() {
              n.form.classList.remove("is-submitted"),
                (n.sendButton.disabled = !1);
            }),
            (this.showResult = function() {
              s.a.to([n.toHideOnResult], {
                duration: 0.3,
                opacity: 0,
                pointerEvents: "none"
              }),
                s.a
                  .to(n.result, {
                    duration: 0.3,
                    y: 0,
                    opacity: 1,
                    pointerEvents: "all"
                  })
                  .then(function() {
                    null !== n.onResultCallback && n.onResultCallback();
                  });
            }),
            (this.hideResult = function() {
              s.a.set([n.toHideOnResult], { clearProps: "all" }),
                s.a.set(n.result, { clearProps: "all" });
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
            (this.onResultCallback = o),
            (this.steps = new h({ app: this })),
            (this.validator = new m({ app: this })),
            (this.pagination = new u({
              onClick: function(e) {
                var t = n.currentStep;
                e < t
                  ? ((n.currentStep = e), n.transformInput(t))
                  : e > t && n.checkForm();
              }
            })),
            this.addListeners();
        }
        return (
          r()(e, [
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
              set: function(e) {
                this.formErrorMessage.innerHTML = e;
              }
            }
          ]),
          e
        );
      })();
    },
    60: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n(52),
        i = n.n(o),
        a = n(6),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(13),
        u = n.n(l),
        d = n(12),
        m = n.n(d),
        h = n(14),
        p = n.n(h),
        f = n(15),
        b = {
          sections: [
            {
              id: "play",
              title: "PLAY",
              titleStyle: "vertical",
              theme: "black",
              titlePosition: "back",
              hasPagination: !1
            },
            {
              id: "study",
              title: "STUDY",
              titleStyle: "horizontal",
              theme: "white",
              titlePosition: "front",
              hasPagination: !0,
              animReversable: !0,
              background1Animation: {
                desktop: {
                  x: -75,
                  y: -317,
                  rotation: 60,
                  scale: 1,
                  opacity: 0.5
                },
                mobile: {
                  x: -138,
                  y: 25,
                  rotation: -30,
                  scale: 0.54,
                  opacity: 0.5
                }
              },
              background2Animation: {
                desktop: {
                  x: -106,
                  y: 422,
                  rotation: -60,
                  scale: 1,
                  opacity: 0.5
                },
                mobile: {
                  x: 195,
                  y: 193,
                  rotation: 30,
                  scale: 0.54,
                  opacity: 0.5
                }
              }
            },
            {
              id: "think",
              title: "THINK",
              titleStyle: "horizontal",
              theme: "white",
              titlePosition: "front",
              hasPagination: !0,
              animReversable: !0,
              background1Animation: {
                desktop: {
                  x: 190,
                  y: -362,
                  rotation: -90,
                  scale: 1,
                  opacity: 0.5
                },
                mobile: {
                  x: -210,
                  y: -60,
                  rotation: 90,
                  scale: 0.68,
                  opacity: 0.5
                }
              },
              background2Animation: {
                desktop: {
                  x: -134,
                  y: 298,
                  rotation: 90,
                  scale: 0.54,
                  opacity: 0.5
                },
                mobile: {
                  x: -47,
                  y: 185,
                  rotation: 90,
                  scale: 0.6,
                  opacity: 0.5
                }
              }
            },
            {
              id: "move",
              title: "MOVE",
              titleStyle: "horizontal",
              theme: "white",
              titlePosition: "front",
              hasPagination: !0,
              animReversable: !1,
              background1Animation: {
                desktop: {
                  x: -497,
                  y: 430,
                  rotation: 0,
                  scale: 1,
                  opacity: 0.5
                },
                mobile: {
                  x: -231,
                  y: 212,
                  rotation: 0,
                  scale: 0.47,
                  opacity: 0.5
                }
              },
              background2Animation: {
                desktop: {
                  x: 492,
                  y: -450,
                  rotation: 180,
                  scale: 0.88,
                  opacity: 0.5
                },
                mobile: {
                  x: 289,
                  y: -339,
                  rotation: 180,
                  scale: 0.47,
                  opacity: 0.5
                }
              },
              background1ExitAnimation: {
                desktop: {
                  x: 462,
                  y: -440,
                  rotation: 0,
                  scale: 1,
                  opacity: 0.5
                },
                mobile: {
                  x: 280,
                  y: -345,
                  rotation: 0,
                  scale: 0.47,
                  opacity: 0.5
                }
              },
              background2ExitAnimation: {
                desktop: {
                  x: -334,
                  y: 392,
                  rotation: 180,
                  scale: 0.88,
                  opacity: 0.5
                },
                mobile: {
                  x: -210,
                  y: 185,
                  rotation: 180,
                  scale: 0.47,
                  opacity: 0.5
                }
              }
            },
            {
              id: "connect",
              title: "CONNECT",
              titleStyle: "horizontal",
              theme: "white",
              titlePosition: "front",
              hasPagination: !0,
              animReversable: !0,
              background1Animation: {
                desktop: {
                  x: 42,
                  y: -365,
                  rotation: -30,
                  scale: 0.54,
                  opacity: 0.5
                },
                mobile: {
                  x: -228,
                  y: 25,
                  rotation: 0,
                  scale: 0.57,
                  opacity: 0.5
                }
              },
              background2Animation: {
                desktop: {
                  x: -50,
                  y: 383,
                  rotation: -30,
                  scale: 0.54,
                  opacity: 0.5
                },
                mobile: {
                  x: 230,
                  y: -60,
                  rotation: 0,
                  scale: 0.6,
                  opacity: 0.5
                }
              }
            },
            {
              id: "contact",
              title: "CONTACT",
              titleStyle: "horizontal",
              theme: "white",
              titlePosition: "back",
              hasPagination: !1
            }
          ]
        },
        y = n(8),
        v = n(7),
        g = n(10);
      v.a.registerPlugin(window.DrawSVGPlugin);
      var w = function e(t) {
          var n = t.onComplete;
          r()(this, e);
          var o = document.querySelector(".js-app"),
            i = document.querySelector(".js-intro-logo");
          (i.style.opacity = 1),
            Promise.resolve([])
              .then(function() {
                return v.a.from(i.children, {
                  duration: g.a.introDuration,
                  drawSVG: 0,
                  ease: "none"
                });
              })
              .then(function() {
                return (
                  v.a.to(Object.values(i.children).splice(1), {
                    duration: 0.5,
                    fill: "#FFFFFF",
                    ease: "none"
                  }) &&
                  v.a.to(i.children[0], {
                    duration: 0.5,
                    fill: "#0BFFAE",
                    ease: "none"
                  })
                );
              })
              .then(function() {
                return v.a.to(i.parentNode, {
                  duration: g.a.introDuration,
                  opacity: 0,
                  y: -0.5 * window.innerHeight,
                  ease: g.b.power3InOut,
                  onStart: function() {
                    "function" == typeof n && n();
                  }
                });
              })
              .then(function() {
                o.removeChild(i.parentNode);
              });
        },
        S = {
          show: function(e) {
            var t = e.$dom;
            (t.style.pointerEvents = "none"),
              (t.parentElement.style.pointerEvents = "none"),
              v.a.to(t, {
                duration: g.a.introDuration,
                x: -80,
                opacity: 1,
                ease: g.b.power3InOut,
                onComplete: function() {
                  (t.style.pointerEvents = "all"),
                    (t.parentElement.style.pointerEvents = "all");
                }
              });
          },
          hide: function(e) {
            var t = e.$dom;
            (t.style.pointerEvents = "none"),
              (t.parentElement.style.pointerEvents = "none"),
              v.a.to(t, {
                duration: g.a.introDuration,
                x: 0,
                opacity: 0,
                ease: g.b.power3InOut
              });
          },
          fadeIn: function(e) {
            var t = e.$dom;
            v.a.to(t, { duration: 0.3, opacity: 1, ease: g.b.power3InOut });
          },
          fadeOut: function(e) {
            var t = e.$dom;
            v.a.to(t, { duration: 0.3, opacity: 0, ease: g.b.power3InOut });
          },
          setVisible: function(e) {
            var t = e.$dom;
            (t.style.pointerEvents = "none"),
              v.a.to(t, {
                duration: 0.35,
                opacity: 1,
                ease: g.b.power3InOut,
                onComplete: function() {
                  t.style.pointerEvents = "all";
                }
              });
          },
          setHidden: function(e) {
            var t = e.$dom;
            (t.style.pointerEvents = "none"),
              v.a.to(t, {
                duration: 0.35,
                opacity: 0,
                ease: g.b.power3InOut,
                onComplete: function() {
                  t.style.pointerEvents = "all";
                }
              });
          },
          close: function(e) {
            var t = e.$dom,
              n = e.$hamburger,
              o = e.$footerDom,
              i = e.$backgroundDom;
            (n.style.pointerEvents = "none"),
              v.a
                .to([t, o], {
                  duration: 0.25,
                  stagger: -0.1,
                  opacity: 0,
                  x: "100px",
                  ease: g.b.power3InOut
                })
                .then(function() {
                  document.body.classList.remove("has-menu"),
                    (n.style.pointerEvents = "all");
                }),
              v.a.to(i, { duration: 0.25, delay: 0.5, scale: 0, y: -130 });
          },
          open: function(e) {
            var t = e.$dom,
              n = e.$hamburger,
              o = e.$footerDom,
              i = e.$backgroundDom;
            (n.style.pointerEvents = "none"),
              document.body.classList.add("has-menu");
            var a = (2 * window.innerWidth - 280) / 260,
              r = (2 * window.innerHeight - 280) / 260;
            y.a.isMobile
              ? ((a = (2.5 * window.innerWidth) / 260),
                (r = (2.5 * window.innerHeight) / 260))
              : (y.a.isTablet || y.a.hasTouch) &&
                (y.a.isPortrait
                  ? ((a = (1.75 * window.innerWidth - 280) / 260),
                    (r = (1.75 * window.innerHeight - 280) / 260))
                  : ((a = (2 * window.innerWidth - 280) / 260),
                    (r = (2 * window.innerHeight - 280) / 260))),
              v.a
                .to([t, o], {
                  duration: 0.25,
                  stagger: 0.1,
                  opacity: 1,
                  x: 0,
                  ease: g.b.power3InOut
                })
                .then(function() {
                  n.style.pointerEvents = "all";
                }),
              v.a.to(i, {
                duration: 0.2,
                scale: Math.max(a, r),
                y: 0.35 * window.innerHeight
              });
          },
          mouseOver: function(e) {
            var t = e.$dom;
            return v.a.to(t, {
              duration: 0.3,
              scale: 1,
              ease: g.b.power3InOut,
              paused: !0
            });
          }
        },
        E = function e(t) {
          var n = this,
            o = t.onClick,
            i = t.onOpen,
            a = t.onClose;
          r()(this, e),
            (this.initListeners = function() {
              y.a.isMobileOrTablet ||
                (n.hamburgerParentDomElement.addEventListener(
                  "mouseenter",
                  function() {
                    n.animationOver.play();
                  }
                ),
                n.hamburgerParentDomElement.addEventListener(
                  "mouseleave",
                  function() {
                    n.animationOver.reverse();
                  }
                )),
                n.hamburgerParentDomElement.addEventListener(
                  "click",
                  function() {
                    document.body.classList.contains("has-menu")
                      ? (S.close({
                          $dom: n.nav.children,
                          $hamburger: n.hamburgerDomElement,
                          $footerDom: n.footer,
                          $backgroundDom: n.backgroundDomElement
                        }),
                        n.closeCallback())
                      : (S.open({
                          $dom: n.nav.children,
                          $hamburger: n.hamburgerDomElement,
                          $footerDom: n.footer,
                          $backgroundDom: n.backgroundDomElement
                        }),
                        n.openCallback());
                  }
                ),
                window.addEventListener("keyup", function(e) {
                  "Escape" === e.code &&
                    document.body.classList.contains("has-menu") &&
                    n.hamburgerParentDomElement.click();
                }),
                Object.values(n.nav.children).map(function(e) {
                  e.addEventListener("click", n.__onItemClick);
                }),
                Object.values(n.footerNav.querySelectorAll("a")).map(function(
                  e
                ) {
                  e.addEventListener("click", n.__foterItemClick);
                }),
                document
                  .querySelector(".js-main-menu-link")
                  .addEventListener("click", n.__onItemClick);
            }),
            (this.show = function() {
              S.show({ $dom: n.hamburgerDomElement });
            }),
            (this.hide = function() {
              S.hide({ $dom: n.hamburgerDomElement });
            }),
            (this.fadeIn = function() {
              S.fadeIn({ $dom: n.hamburgerDomElement });
            }),
            (this.fadeOut = function() {
              S.fadeOut({ $dom: n.hamburgerDomElement });
            }),
            (this.close = function() {
              S.close({
                $dom: n.nav.children,
                $hamburger: n.hamburgerDomElement,
                $backgroundDom: n.backgroundDomElement
              });
            }),
            (this.visible = function(e) {
              e
                ? S.setVisible({ $dom: n.hamburgerDomElement })
                : S.setHidden({ $dom: n.hamburgerDomElement });
            }),
            (this.selectMenuItem = function() {
              var e = n.nav.querySelector(".selected"),
                t = n.nav.querySelector(
                  "[data-id=".concat(y.a.selectedSection.id, "]")
                );
              e && e.classList.remove("selected"),
                t
                  ? ((n.selectedItem = t),
                    n.selectedItem.classList.add("selected"))
                  : (n.selectedItem = null),
                n.close();
            }),
            (this.resize = function() {}),
            (this.__foterItemClick = function(e) {
              e.preventDefault();
              var t = e.target;
              document.body.classList.contains("has-menu") &&
                n.hamburgerParentDomElement.click();
              var o = y.a.getSectionById(t.getAttribute("data-id"));
              return null !== o && n.clickCallback(o, "down"), !1;
            }),
            (this.__onItemClick = function(e) {
              e.preventDefault();
              var t = e.target,
                o = n.__getItemIndex(t),
                i =
                  (null !== n.selectedItem
                    ? n.__getItemIndex(n.selectedItem)
                    : -1) > o
                    ? "down"
                    : "up",
                a = y.a.getSectionById(t.getAttribute("data-id"));
              return (
                n.hamburgerParentDomElement.click(),
                null !== a && n.clickCallback(a, i),
                !1
              );
            }),
            (this.__getItemIndex = function(e) {
              return Array.from(e.parentElement.children).indexOf(e);
            }),
            (this.backgroundDomElement = document.querySelector(
              ".js-menu-background"
            )),
            (this.backgroundHoverDomElement = document.querySelector(
              ".js-menu-over-bg"
            )),
            (this.hamburgerDomElement = document.querySelector(
              ".js-hamburger"
            )),
            (this.hamburgerParentDomElement = document.querySelector(
              ".js-hamburger"
            ).parentElement),
            (this.nav = document.querySelector(".js-main-menu")),
            (this.footerNav = document.querySelector(".js-main-menu-footer")),
            (this.footer = document.querySelector(".js-menu-footer")),
            (this.clickCallback = o),
            (this.openCallback = i),
            (this.closeCallback = a),
            (this.selectedItem = null),
            v.a.set(this.backgroundDomElement, {
              transformOrigin: "50% 50%",
              x: 130,
              y: -130,
              scale: 0,
              display: "block"
            }),
            v.a.set(this.backgroundHoverDomElement, {
              transformOrigin: "50% 50%",
              x: 130,
              y: -130,
              scale: 0,
              display: "block"
            }),
            (this.animationOver = S.mouseOver({
              $dom: this.backgroundHoverDomElement
            })),
            this.initListeners(),
            y.a.isMobile &&
              window.innerHeight <= 600 &&
              ((this.footer.style.bottom = "calc(50vh + 38px)"),
              (this.footer.style.fontSize = "8px"),
              (this.footer.style.lineHeight = "12px"));
        },
        k = n(56),
        x = n.n(k),
        O = function e(t) {
          var n = this,
            o = t.onWheelStart;
          r()(this, e),
            (this.initEventListener = function() {
              var e = document.querySelector(
                ".js-section[data-id=".concat(y.a.selectedSection.id, "]")
              );
              null !== e &&
                e.addEventListener("wheel", n.__manageEvent, { passive: !0 });
            }),
            (this.__manageEvent = function(e) {
              switch ((e.stopPropagation(), n.__getDirection(e))) {
                case "up":
                  null !== y.a.selectedSection.prevSection &&
                    n.__dispatchEvent(e);
                  break;
                case "down":
                  null !== y.a.selectedSection.nextSection &&
                    n.__dispatchEvent(e);
              }
              return !1;
            }),
            (this.__dispatchEvent = function(e) {
              return (
                e.target
                  .closest(".js-section")
                  .removeEventListener("wheel", n.__manageEvent),
                null !== n.wheelStartCallback && n.wheelStartCallback(e),
                !1
              );
            }),
            (this.__getDirection = function(e) {
              return y.a.hasTouch
                ? 16 === e.direction
                  ? "up"
                  : "down"
                : e.deltaY < 0
                ? "up"
                : "down";
            }),
            (this.marker = !0),
            (this.counter1 = 0),
            this.counter2,
            (this.interval = 50),
            (this.wheelStartCallback = o);
        },
        D = function e(t) {
          var n = this;
          r()(this, e),
            (this.initEventListeners = function() {
              y.a.hasTouch
                ? n.touchGesture.on("swipe", n.__manageEvent)
                : n.wheelManager.initEventListener(),
                window.addEventListener("keyup", n.__manageKeyEvent);
            }),
            (this.removeEventListeners = function() {
              y.a.hasTouch && n.touchGesture.off("swipe", n.__manageEvent),
                window.removeEventListener("keyup", n.__manageKeyEvent);
            }),
            (this.__manageKeyEvent = function(e) {
              switch (e.code) {
                case "ArrowDown":
                case "ArrowRight":
                  n.__manageEvent(e, "down");
                  break;
                case "ArrowUp":
                case "ArrowLeft":
                  n.__manageEvent(e, "up");
              }
            }),
            (this.__manageEvent = function(e, t) {
              document.body.classList.contains("has-menu") || n.__slideTo(e, t);
            }),
            (this.__getDirection = function(e) {
              return y.a.hasTouch
                ? 16 === e.direction
                  ? "up"
                  : "down"
                : e.deltaY < 0
                ? "up"
                : "down";
            }),
            (this.__slideTo = function(e, t) {
              var o = t || n.__getDirection(e),
                i = null;
              "down" == o
                ? (i = y.a.selectedSection.nextSection)
                : "up" == o && (i = y.a.selectedSection.prevSection),
                y.a.selectedSection !== i && null !== i && n.onChange(i, o);
            }),
            (this.onChange = t.onChange),
            (this.wheelManager = null),
            y.a.hasTouch
              ? ((this.touchGesture = new x.a.Manager(document.body)),
                this.touchGesture.add(
                  new x.a.Swipe({ direction: x.a.DIRECTION_VERTICAL })
                ))
              : (this.wheelManager = new O({
                  onWheelStart: this.__manageEvent
                }));
        },
        I = {
          show: function(e) {
            (e.style.visibility = "visible"), (e.style.display = "block");
            var t = 0;
            switch (y.a.isMobile) {
              case !0:
                (t = -(window.innerHeight / 2 + 0.5 * e.clientHeight) - 66),
                  (t -= (-30 * window.innerHeight) / 667);
                break;
              case !1:
              default:
                t = -0.5 * e.clientHeight;
            }
            v.a.to(e, {
              duration: g.a.introDuration,
              opacity: 1,
              y: t,
              ease: g.b.power3InOut
            });
          },
          fadeIn: function(e) {
            var t = e.$dom;
            v.a.to(t, { duration: 0.35, opacity: 1, ease: g.b.power3InOut });
          },
          fadeOut: function(e) {
            var t = e.$dom;
            v.a.to(t, { duration: 0.35, opacity: 0, ease: g.b.power3InOut });
          },
          desktopWordsAnimations: {
            letMovement: v.a.to(document.querySelector(".js-title-let"), {
              duration: 0.4,
              x: -202,
              y: 70,
              ease: g.b.power3InOut,
              paused: !0
            }),
            dynMovement: v.a.to(document.querySelector(".js-title-dynamic"), {
              duration: 0.4,
              x: -58,
              y: 4,
              ease: g.b.power3InOut,
              paused: !0
            }),
            outMovement: v.a.to(document.querySelector(".js-title-out"), {
              duration: 0.4,
              x: 68,
              y: -66,
              ease: g.b.power3InOut,
              paused: !0
            }),
            thereMovement: v.a.to(document.querySelector(".js-title-there"), {
              duration: 0.4,
              x: 192,
              y: -134,
              ease: g.b.power3InOut,
              paused: !0
            })
          },
          mobileWordsAnimations: {
            letMovement: v.a.to(document.querySelector(".js-title-let"), {
              duration: 0.3,
              right: "100px",
              top: "42px",
              ease: g.b.power3InOut,
              paused: !0
            }),
            dynMovement: v.a.to(document.querySelector(".js-title-dynamic"), {
              duration: 0.3,
              right: "141px",
              top: "108px",
              ease: g.b.power3InOut,
              paused: !0
            }),
            outMovement: v.a.to(document.querySelector(".js-title-out"), {
              duration: 0.3,
              right: "86px",
              top: "180px",
              ease: g.b.power3InOut,
              paused: !0
            }),
            thereMovement: v.a.to(document.querySelector(".js-title-there"), {
              duration: 0.3,
              right: "110px",
              top: "246px",
              ease: g.b.power3InOut,
              paused: !0
            })
          },
          updateWordsSpacing: function() {
            v.a.to(document.querySelector(".js-title-let"), {
              duration: 0.4,
              x: "connect" == y.a.selectedSection.id ? -236 : -202,
              ease: g.b.power3InOut
            }),
              v.a.to(document.querySelector(".js-title-out"), {
                duration: 0.4,
                x: "connect" == y.a.selectedSection.id ? 104 : 68,
                ease: g.b.power3InOut
              }),
              v.a.to(document.querySelector(".js-title-there"), {
                duration: 0.4,
                x: "connect" == y.a.selectedSection.id ? 225 : 192,
                ease: g.b.power3InOut
              });
          },
          fadeWord: function(e) {
            var t = e.$actual,
              n = e.$next,
              o = e.callback;
            v.a.to(t, {
              duration: 0.35,
              opacity: 0,
              ease: g.b.power3InOut,
              delay: 0,
              onComplete: function() {
                t.style.visibility = "hidden";
              }
            }),
              v.a.to(n, {
                duration: 0.35,
                opacity: 1,
                ease: g.b.power3InOut,
                delay: 0,
                onStart: function() {
                  (n.style.display = "block"), (n.style.visibility = "visible");
                },
                onComplete: o
              });
          },
          slideWord: function(e) {
            var t = e.$actual,
              n = e.$next,
              o = e.direction,
              i = e.callback,
              a = "up" == o ? -100 : 100;
            v.a.to(t, {
              duration: g.a.changeSectionDuration,
              y: -1 * a,
              opacity: 0,
              ease: g.b.power3InOut,
              onComplete: function() {
                (t.style.visibility = "hidden"),
                  t.classList.remove("is-visible"),
                  v.a.set(t, { clearProps: "all" });
              }
            }),
              v.a.set(n, { clearProps: "all" }),
              v.a.set(n, { y: a }),
              v.a.to(n, {
                duration: g.a.changeSectionDuration,
                y: 0,
                opacity: 1,
                ease: g.b.power3InOut,
                onStart: function() {
                  (n.style.display = "block"),
                    (n.style.visibility = "visible"),
                    n.classList.add("is-visible");
                },
                onComplete: i
              });
          },
          turnColor: function(e) {
            var t = e.color1,
              n = e.color2;
            v.a.to(":root", {
              duration: 0.4,
              "--gradientColor1": t,
              "--gradientColor2": n,
              ease: g.b.power3InOut
            });
          },
          colorizeDynamicWord: function(e) {
            var t = e.color;
            v.a.to(document.querySelectorAll(".js-title-dynamic span"), {
              duration: 0.4,
              color: t,
              ease: g.b.power3InOut
            });
          },
          updateSubLine: function(e) {
            var t = e.$lineDom,
              n = e.$textDom,
              o = e.isMobile,
              i = e.speed,
              a = 0;
            null !== n && ((a = n.clientWidth), (a += o ? 8 : 17)),
              v.a.to(t, {
                duration: i || 0.35,
                opacity: 1,
                ease: g.b.power3InOut,
                width: a
              });
          },
          hideSublineForBlob: function(e) {
            var t = e.$dom;
            v.a.to(t, {
              duration: 0.35,
              opacity: 0,
              width: 0,
              ease: g.b.power3InOut
            });
          },
          hideStaticWords: function() {
            v.a.to(document.querySelector(".js-title-let"), {
              duration: 0.35,
              opacity: 0,
              ease: g.b.power3InOut
            }),
              v.a.to(document.querySelector(".js-title-out"), {
                duration: 0.35,
                opacity: 0,
                ease: g.b.power3InOut
              }),
              v.a.to(document.querySelector(".js-title-there"), {
                duration: 0.35,
                opacity: 0,
                ease: g.b.power3InOut
              });
          },
          showStaticWords: function() {
            v.a.to(document.querySelector(".js-title-let"), {
              duration: 0.35,
              opacity: 1,
              ease: g.b.power3InOut
            }),
              v.a.to(document.querySelector(".js-title-out"), {
                duration: 0.35,
                opacity: 1,
                ease: g.b.power3InOut
              }),
              v.a.to(document.querySelector(".js-title-there"), {
                duration: 0.35,
                opacity: 1,
                ease: g.b.power3InOut
              });
          }
        },
        _ = function e(t) {
          var n = this,
            o = t.overCallback,
            i = t.outCallback,
            a = t.toggleCallback;
          r()(this, e),
            (this.show = function() {
              I.show(n.domElement);
            }),
            (this.fadeIn = function() {
              I.fadeIn({ $dom: n.domElement }),
                (n.style = y.a.selectedSection.titleStyle);
            }),
            (this.fadeOut = function() {
              I.fadeOut({ $dom: n.domElement }),
                (n.style = y.a.selectedSection.titleStyle);
            }),
            (this.animate = function(e) {
              if (y.a.selectedSection.titleStyle != n.style)
                switch (y.a.selectedSection.titleStyle) {
                  case "horizontal":
                    n.__horizontalize();
                    break;
                  case "vertical":
                  default:
                    n.__verticalize();
                }
              else n.__changeWordBySlide(e);
              n.updateSubline();
            }),
            (this.black = function() {
              I.turnColor({ color1: 0, color2: 0 });
            }),
            (this.white = function() {
              I.turnColor({ color1: 0, color2: 255 });
            }),
            (this.convertToBlobTitle = function() {
              n.white(),
                I.turnColor({ color1: 255, color2: 255 }),
                I.colorizeDynamicWord({ color: "#0bffae" }),
                I.hideSublineForBlob({ $dom: n.sublineDomElement });
            }),
            (this.convertToStandardTitle = function() {
              n.black(),
                I.colorizeDynamicWord({ color: "#000000" }),
                I.updateSubLine({
                  $lineDom: n.sublineDomElement,
                  $textDom: document.querySelector(
                    ".js-title-vertical-item[data-id=".concat(
                      y.a.selectedSection.id,
                      "] span"
                    )
                  ),
                  isMobile: y.a.isMobile
                });
            }),
            (this.showStaticWords = function() {
              I.showStaticWords();
            }),
            (this.hideStaticWords = function() {
              y.a.isMobile && I.hideStaticWords();
            }),
            (this.bringTo = function(e) {
              setTimeout(function() {
                switch (e) {
                  case "back":
                    n.domElement.classList.remove("maintitle__front");
                    break;
                  case "front":
                  default:
                    n.domElement.classList.add("maintitle__front");
                }
              }, 100);
            }),
            (this.resize = function() {
              y.a.isMobile ||
                v.a.set(n.domElement, { x: window.innerWidth / 2 });
            }),
            (this.__horizontalize = function() {
              y.a.isMobile
                ? (I.mobileWordsAnimations.letMovement.play(),
                  I.mobileWordsAnimations.dynMovement.play(),
                  I.mobileWordsAnimations.outMovement.play(),
                  I.mobileWordsAnimations.thereMovement.play())
                : (I.desktopWordsAnimations.letMovement.play(),
                  I.desktopWordsAnimations.dynMovement.play(),
                  I.desktopWordsAnimations.outMovement.play(),
                  I.desktopWordsAnimations.thereMovement
                    .play()
                    .then(function() {
                      I.updateWordsSpacing();
                    })),
                n.__changeWordByFade(),
                (n.style = "horizontal");
            }),
            (this.__verticalize = function() {
              y.a.isMobile
                ? (I.mobileWordsAnimations.letMovement.reverse(),
                  I.mobileWordsAnimations.dynMovement.reverse(),
                  I.mobileWordsAnimations.outMovement.reverse(),
                  I.mobileWordsAnimations.thereMovement.reverse())
                : (I.desktopWordsAnimations.letMovement.reverse(),
                  I.desktopWordsAnimations.dynMovement.reverse(),
                  I.desktopWordsAnimations.outMovement.reverse(),
                  I.desktopWordsAnimations.thereMovement.reverse()),
                n.__changeWordByFade(),
                (n.style = "vertical");
            }),
            (this.__changeWordBySlide = function(e) {
              var t = document.querySelector(
                ".js-title-vertical-item[data-id=".concat(
                  y.a.selectedSection.id,
                  "]"
                )
              );
              n.actualWordDomElement !== t &&
                (y.a.isMobile || I.updateWordsSpacing(),
                null !== t &&
                  I.slideWord({
                    $actual: n.actualWordDomElement,
                    $next: t,
                    direction: e,
                    callback: function() {
                      n.actualWordDomElement = t;
                    }
                  }));
            }),
            (this.__changeWordByFade = function() {
              var e = document.querySelector(
                ".js-title-vertical-item[data-id=".concat(
                  y.a.selectedSection.id,
                  "]"
                )
              );
              n.actualWordDomElement !== e &&
                I.fadeWord({
                  $actual: n.actualWordDomElement,
                  $next: e,
                  callback: function() {
                    n.actualWordDomElement = e;
                  }
                });
            }),
            (this.updateSubline = function(e) {
              var t = document.querySelector(
                ".js-title-vertical-item[data-id=".concat(
                  y.a.selectedSection.id,
                  "] span"
                )
              );
              I.updateSubLine({
                $lineDom: n.sublineDomElement,
                $textDom: t,
                isMobile: y.a.isMobile,
                speed: e
              });
            }),
            (this.style = "vertical"),
            (this.domElement = document.querySelector(".js-title")),
            (this.actualWordDomElement = document.querySelector(
              '.js-title-vertical-item[data-id="play"]'
            )),
            (this.sublineDomElement = document.querySelector(
              ".js-title-subline"
            )),
            y.a.isMobileOrTablet
              ? (this.domElement.addEventListener("click", a),
                Object.values(
                  document.querySelectorAll(".js-fake-blob-title")
                ).map(function(e) {
                  e.addEventListener("click", function(e) {
                    n.domElement.classList.toggle("maintitle--blob"), a(e);
                  });
                }))
              : (Object.values(
                  document.querySelectorAll(".js-fake-blob-title")
                ).map(function(e) {
                  e.addEventListener("mouseover", function(e) {
                    n.domElement.classList.add("maintitle--blob"),
                      e.target.classList.add("is-hidden"),
                      o(e);
                  });
                }),
                this.domElement
                  .querySelector(".js-title-dynamic")
                  .addEventListener("mouseout", function(e) {
                    var t = document.querySelector(
                      ".js-fake-blob-title.is-hidden"
                    );
                    n.domElement.classList.remove("maintitle--blob"),
                      null !== t &&
                        setTimeout(function() {
                          t.classList.remove("is-hidden");
                        }, 150),
                      i(e);
                  }));
        },
        L = n(16),
        M = n.n(L),
        $ = n(30),
        C = n.n($),
        T = {
          showDescription: function(e) {
            v.a.to(e, {
              duration: 0.35,
              opacity: 1,
              ease: g.b.power3InOut,
              onStart: function() {
                (e.style.display = "block"), (e.style.visibility = "visible");
              }
            });
          },
          hideDescription: function(e) {
            var t = e.$dom,
              n = e.callback;
            v.a
              .to(t, { duration: 0.35, opacity: 0, ease: g.b.power3InOut })
              .then(function() {
                (t.style.display = "none"),
                  (t.style.visibility = "hidden"),
                  void 0 !== n && n();
              });
          },
          enter: function(e) {
            var t = e.$dom,
              n = e.settings;
            return v.a.from(t, {
              duration: g.a.changeSectionDuration,
              x: n.x,
              y: n.y,
              scale: n.scale,
              rotation: n.rotation,
              ease: g.b.power3InOut,
              opacity: n.opacity,
              onStart: function() {
                v.a.set(t, { visibility: "visible" });
              },
              paused: !0
            });
          },
          exit: function(e) {
            var t = e.$dom,
              n = e.settings;
            return v.a.to(t, {
              duration: g.a.changeSectionDuration,
              x: n.x,
              y: n.y,
              scale: n.scale,
              rotation: n.rotation,
              ease: g.b.power3InOut,
              opacity: n.opacity
            });
          },
          fadeIn: function(e) {
            var t = e.$dom;
            v.a.to(t, { duration: 0.35, opacity: 1, ease: g.b.power3InOut });
          },
          fadeOut: function(e) {
            var t = e.$dom;
            v.a.to(t, { duration: 0.35, opacity: 0, ease: g.b.power3InOut });
          },
          hideIcons: function(e) {
            var t = e.$dom;
            return v.a.to(t, {
              duration: 0.35,
              opacity: 0,
              ease: g.b.power3InOut,
              paused: !0
            });
          }
        },
        q = function e(t) {
          var n = this,
            o = t.$img,
            i = t.clickCallback;
          r()(this, e),
            (this.show = function() {
              n.__prepareForShow(),
                n.maskAnimation.play(),
                n.imageAnimation.play(),
                (n.isOpened = !0);
            }),
            (this.hide = function() {
              null !== n.maskAnimation &&
                null !== n.imageAnimation &&
                (n.maskAnimation.reverse(),
                n.imageAnimation.reverse(),
                (n.isOpened = !1));
            }),
            (this.resize = function() {
              if (n.isOpened) {
                var e = n.__prepareValues({ reset: !1 });
                v.a.set(n.domElement, {
                  x: e.position.x,
                  y: e.position.y,
                  scale: e.scale
                });
              }
            }),
            (this.__prepareForShow = function() {
              v.a.set(n.domElement, { clearProps: "all" }),
                v.a.set(n.imgElement, { clearProps: "all" });
              var e = n.__prepareValues({ reset: !0 });
              (n.maskAnimation = v.a.to(n.domElement, {
                duration: 0.35,
                x: e.position.x,
                y: e.position.y,
                scale: e.scale,
                ease: g.b.power3InOut
              })),
                (n.imageAnimation = v.a.to(n.imgElement, {
                  duration: 0.35,
                  opacity: 1,
                  ease: g.b.power3InOut
                }));
            }),
            (this.__prepareValues = function(e) {
              var t = e.reset,
                o = null,
                i = n.__getPosition(),
                a = y.a.isMobileOrTabletPortrait ? 50 : 155,
                r = y.a.isMobileOrTabletPortrait ? 300 : 70;
              if (t)
                if (n.isIOSChrome)
                  (o = n.__getSafariCenter()),
                    v.a.set(n.domElement, {
                      transformOrigin: "".concat(o.x, "px ").concat(o.y, "px"),
                      x: 0,
                      y: 0,
                      scale: 0
                    });
                else
                  switch (y.a.browser.getBrowserName().toLowerCase()) {
                    case "firefox":
                    case "safari":
                      (o = n.__getSafariCenter()),
                        v.a.set(n.domElement, {
                          transformOrigin: ""
                            .concat(o.x, "px ")
                            .concat(o.y, "px"),
                          x: 0,
                          y: 0,
                          scale: 0
                        });
                      break;
                    case "chrome":
                    default:
                      (o = n.__getCenter()),
                        v.a.set(n.domElement, {
                          transformOrigin: ""
                            .concat(o.x, "% ")
                            .concat(o.y, "%"),
                          x: i.x,
                          y: i.y,
                          scale: 0
                        });
                  }
              return (
                y.a.isMobile &&
                  window.innerHeight <= 600 &&
                  ((a += 100), (r += 20)),
                { position: { x: i.x + a, y: i.y + r }, scale: n.__getScale() }
              );
            }),
            (this.__getPosition = function() {
              return {
                x:
                  (window.innerWidth -
                    n.domElement.getAttribute("data-original-width")) /
                  2,
                y:
                  (window.innerHeight -
                    n.domElement.getAttribute("data-original-height")) /
                  2
              };
            }),
            (this.__getScale = function() {
              return Math.max(
                window.innerWidth / n.domElement.getAttribute("data-scale-w"),
                window.innerHeight / n.domElement.getAttribute("data-scale-h")
              );
            }),
            (this.__getSafariCenter = function() {
              var e = document
                .querySelector(".js-title-dynamic")
                .getBoundingClientRect();
              return { x: e.x + e.width / 2, y: e.y + e.height / 2 };
            }),
            (this.__getCenter = function() {
              var e = document
                  .querySelector(".js-title-dynamic")
                  .getBoundingClientRect(),
                t = e.x + e.width / 2,
                n = e.y + 35;
              return {
                x: ((t / window.innerWidth) * 100).toFixed(2),
                y: ((n / window.innerHeight) * 100).toFixed(2)
              };
            }),
            (this.domElement = document.querySelector("#blob")),
            (this.imgElement = o),
            (this.maskAnimation = null),
            (this.imageAnimation = null),
            (this.isOpened = !1),
            (this.isIOSChrome = !1),
            y.a.isMobile &&
              "chrome" == y.a.browser.parsedResult.browser.name.toLowerCase() &&
              (this.isIOSChrome = !0),
            null !== this.imgElement &&
              this.imgElement.addEventListener("click", i);
        },
        j = (function() {
          function e(t) {
            var n = this;
            r()(this, e),
              (this.showIcons = function() {
                n.hideIconsAnimation.reverse();
              }),
              (this.hideIcons = function() {
                n.hideIconsAnimation.play();
              }),
              (this.activate = function() {
                if (y.a.isMobile) n.domElement.classList.add("is-active");
                else
                  switch (y.a.browser.parsedResult.browser.name.toLowerCase()) {
                    case "firefox":
                    case "safari":
                      setTimeout(function() {
                        n.domElement.classList.add("is-active");
                      }, 700);
                      break;
                    case "chrome":
                    default:
                      n.domElement.classList.add("is-active");
                  }
              }),
              (this.deactivate = function() {
                n.domElement.classList.remove("is-active");
              }),
              (this.resize = function() {
                n.blob.resize();
              }),
              (this.data = t),
              (this.nextSection = null),
              (this.prevSection = null),
              (this.domElement = document.querySelector(
                ".js-section[data-id=".concat(this.data.id)
              )),
              (this.descriptionDomElement = this.domElement.querySelector(
                ".js-description"
              )),
              (this.hideIconsAnimation = T.hideIcons({
                $dom: this.domElement.querySelector(".background__icons")
              })),
              "play" !== this.id &&
                ((this.ico1DomElement = this.domElement.querySelector(
                  ".js-icon-".concat(this.id, "-1")
                )),
                (this.ico2DomElement = this.domElement.querySelector(
                  ".js-icon-".concat(this.id, "-2")
                )),
                (this.blob = new q({
                  $img: this.domElement.querySelector(".js-blob-image"),
                  clickCallback: this.data.blobCallback
                })));
          }
          return (
            c()(e, [
              {
                key: "enter",
                value: function(e) {
                  y.a.isMobile ||
                    null === this.descriptionDomElement ||
                    T.showDescription(this.descriptionDomElement),
                    T.fadeIn({ $dom: this.domElement }),
                    "play" !== this.id && "contact" !== this.id
                      ? (void 0 === this.anim1 &&
                          ((this.anim1 = T.enter({
                            $dom: this.ico1DomElement,
                            settings: y.a.isMobile
                              ? this.data.background1Animation.mobile
                              : this.data.background1Animation.desktop
                          })),
                          (this.anim2 = T.enter({
                            $dom: this.ico2DomElement,
                            settings: y.a.isMobile
                              ? this.data.background2Animation.mobile
                              : this.data.background2Animation.desktop
                          }))),
                        this.anim1.play(),
                        this.anim2.play().then(function() {
                          void 0 !== e && e();
                        }))
                      : void 0 !== e && e();
                }
              },
              {
                key: "exit",
                value: function(e) {
                  var t = this;
                  y.a.isMobile ||
                    null === this.descriptionDomElement ||
                    T.hideDescription({ $dom: this.descriptionDomElement }),
                    "play" !== this.id && "contact" !== this.id
                      ? this.data.animReversable
                        ? (this.anim1.reverse(),
                          this.anim2.reverse().then(function() {
                            void 0 !== e && e(), t.deactivate();
                          }))
                        : (T.exit({
                            $dom: this.ico1DomElement,
                            settings: y.a.isMobile
                              ? this.data.background1ExitAnimation.mobile
                              : this.data.background1ExitAnimation.desktop
                          }).then(function() {
                            t.anim1.pause(0);
                          }),
                          T.exit({
                            $dom: this.ico2DomElement,
                            settings: y.a.isMobile
                              ? this.data.background2ExitAnimation.mobile
                              : this.data.background2ExitAnimation.desktop
                          }).then(function() {
                            void 0 !== e && e(),
                              t.anim2.pause(0),
                              t.deactivate();
                          }))
                      : void 0 !== e && (e(), this.deactivate());
                }
              },
              {
                key: "fadeOut",
                value: function() {
                  T.fadeOut({ $dom: this.domElement });
                }
              },
              {
                key: "showBlob",
                value: function() {
                  void 0 !== this.blob && (this.blob.show(), this.hideIcons());
                }
              },
              {
                key: "hideBlob",
                value: function() {
                  void 0 !== this.blob && (this.blob.hide(), this.showIcons());
                }
              },
              {
                key: "id",
                get: function() {
                  return this.data.id;
                }
              },
              {
                key: "titlePosition",
                get: function() {
                  return this.data.titlePosition;
                }
              },
              {
                key: "titleStyle",
                get: function() {
                  return this.data.titleStyle;
                }
              },
              {
                key: "theme",
                get: function() {
                  return this.data.theme;
                }
              },
              {
                key: "hasPagination",
                get: function() {
                  return this.data.hasPagination;
                }
              }
            ]),
            e
          );
        })();
      function A() {
        return {
          leaf1: { rotate: -20, x: -70, y: 40, scale: 0.9 },
          leaf2: { rotate: 20, x: 50, y: 40, scale: 0.9 },
          leaf3: {
            rotate: y.a.isMobileOrTabletPortrait ? 10 : 20,
            x: y.a.isMobileOrTabletPortrait ? 50 : 76,
            y: y.a.isMobileOrTabletPortrait ? 60 : 72,
            scale: 0.9
          },
          leaf4: {
            rotate: -20,
            x: y.a.isMobileOrTabletPortrait ? -50 : -30,
            y: 140,
            scale: 0.9
          }
        };
      }
      var P = {
          openLeaf: function(e) {
            var t = e.$dom,
              n = v.a.timeline({ paused: !0 }),
              o = A();
            return (
              v.a.set(t.children[0], { transformOrigin: "50% 50%" }),
              v.a.set(t.children[1], { transformOrigin: "50% 50%" }),
              v.a.set(t.children[2], { transformOrigin: "50% 50%" }),
              v.a.set(t.children[3], { transformOrigin: "50% 50%" }),
              n
                .to(t.children[0], {
                  duration: 0.4,
                  rotate: o.leaf1.rotate + "deg",
                  x: o.leaf1.x,
                  y: o.leaf1.y,
                  scale: o.leaf1.scale,
                  fill: "#ffffff",
                  ease: g.b.power3InOut
                })
                .to(
                  t.children[1],
                  {
                    duration: 0.4,
                    rotate: o.leaf2.rotate + "deg",
                    x: o.leaf2.x,
                    y: o.leaf2.y,
                    scale: o.leaf2.scale,
                    fill: "#ffffff",
                    ease: g.b.power3InOut
                  },
                  "-=0.4"
                )
                .to(
                  t.children[2],
                  {
                    duration: 0.4,
                    rotate: o.leaf3.rotate + "deg",
                    x: o.leaf3.x,
                    y: o.leaf3.y,
                    scale: o.leaf3.scale,
                    fill: "#ffffff",
                    ease: g.b.power3InOut
                  },
                  "-=0.4"
                )
                .to(
                  t.children[3],
                  {
                    duration: 0.4,
                    rotate: o.leaf4.rotate + "deg",
                    x: o.leaf4.x,
                    y: o.leaf4.y,
                    scale: o.leaf4.scale,
                    fill: "#ffffff",
                    ease: g.b.power3InOut
                  },
                  "-=0.4"
                ),
              n
            );
          },
          enter: function(e) {
            var t = e.$dom,
              n = y.a.isMobileOrTabletPortrait ? -450 : -806,
              o = 1,
              i = (100 * o - 100) / 2;
            return (
              y.a.isMobile ||
                ((o = window.innerHeight / 700),
                (n = "-".concat(100 + i, "%"))),
              y.a.isTablet &&
                y.a.isPortrait &&
                ((o = window.innerHeight / 700),
                (n = "-".concat(100 + i - 10, "%"))),
              v.a.to(t, {
                duration: g.a.introDuration + 0.05,
                y: n,
                scale: o,
                ease: g.b.power3InOut,
                paused: !0,
                onStart: function() {
                  v.a.set(t, { visibility: "visible" });
                }
              })
            );
          },
          resizeOpenLeaf: function(e) {
            var t,
              n,
              o,
              i = e.$dom,
              a =
                ((t = y.a.isMobileOrTabletPortrait ? -450 : -806),
                (o = (100 * (n = 1) - 100) / 2),
                y.a.isMobile ||
                  ((n = window.innerHeight / 700),
                  (t = "-".concat(100 + o, "%"))),
                y.a.isTablet &&
                  y.a.isPortrait &&
                  ((n = window.innerHeight / 700),
                  (t = "-".concat(100 + o - 10, "%"))),
                { scale: n, y: t }),
              r = A();
            v.a.set(i.parentElement, { y: a.y, scale: a.scale }),
              v.a.set(i.children[0], {
                rotate: r.leaf1.rotate + "deg",
                x: r.leaf1.x,
                y: r.leaf1.y,
                scale: r.leaf1.scale
              }),
              v.a.set(i.children[1], {
                rotate: r.leaf2.rotate + "deg",
                x: r.leaf2.x,
                y: r.leaf2.y,
                scale: r.leaf2.scale
              }),
              v.a.set(i.children[2], {
                rotate: "".concat(r.leaf3.rotate, "deg"),
                x: r.leaf3.x,
                y: r.leaf3.y,
                scale: r.leaf3.scale
              }),
              v.a.set(i.children[3], {
                rotate: r.leaf4.rotate + "deg",
                x: r.leaf4.x,
                y: r.leaf4.y,
                scale: r.leaf4.scale
              });
          }
        },
        W = (function(e) {
          function t(e) {
            var n;
            return (
              r()(this, t),
              ((n = u()(this, m()(t).call(this, e))).enter = function(e) {
                (n.isLeafOpened = !1),
                  (n.enterAnimation = P.enter({ $dom: n.leaf.parentElement })),
                  n.enterAnimation.play().then(function() {
                    n.activeDomElement.addEventListener(
                      "mouseover",
                      n.__onMouseOver
                    ),
                      n.activeDomElement.addEventListener(
                        "mouseout",
                        n.__onMouseOut
                      ),
                      (n.firstEnter = !0),
                      setTimeout(function() {
                        n.__repositionFakeTitle();
                      }, 200),
                      e && e();
                  }),
                  y.a.hasTouch && setTimeout(n.__onMouseOver, 500),
                  C()(m()(t.prototype), "enter", M()(n)).call(M()(n));
              }),
              (n.exit = function(e) {
                n.activeDomElement.removeEventListener(
                  "mouseover",
                  n.__onMouseOver
                ),
                  n.activeDomElement.removeEventListener(
                    "mouseout",
                    n.__onMouseOut
                  ),
                  n.enterAnimation.reverse().then(function() {
                    y.a.isMobile || n.openLeafAnimation.reverse();
                  }),
                  C()(m()(t.prototype), "exit", M()(n)).call(M()(n), e);
              }),
              (n.resize = function() {
                n.__repositionFakeTitle(),
                  n.isLeafOpened && P.resizeOpenLeaf({ $dom: n.leaf });
              }),
              (n.__repositionFakeTitle = function() {
                var e = n.activeDomElement.getBoundingClientRect(),
                  t = document
                    .querySelector(".js-scroll-suggestion")
                    .getBoundingClientRect(),
                  o = t.y - e.y + t.height,
                  i = o - 400;
                (i = 70 + i / 2),
                  (n.activeDomElement.style.height = "".concat(o, "px")),
                  (n.activeDomElement.style.top = "calc(50% + ".concat(
                    i,
                    "px)"
                  ));
              }),
              (n.__onMouseOver = function() {
                n.mouseOverCallback(),
                  n.openLeafAnimation.play().then(function() {
                    n.isLeafOpened = !0;
                  });
              }),
              (n.__onMouseOut = function() {
                n.mouseOutCallback(),
                  n.openLeafAnimation.reverse().then(function() {
                    n.isLeafOpened = !0;
                  });
              }),
              (n.isLeafOpened = !1),
              (n.firstEnter = !1),
              (n.mouseOverCallback = null),
              (n.mouseOutCallback = null),
              (n.leaf = document.querySelector(".js-leaf")),
              (n.activeDomElement = document.querySelector(".js-play-active")),
              (n.openLeafAnimation = P.openLeaf({ $dom: n.leaf })),
              (n.enterAnimation = P.enter({ $dom: n.leaf.parentElement })),
              n
            );
          }
          return p()(t, e), t;
        })(j),
        B = function e() {
          var t = this;
          r()(this, e),
            (this.black = function() {
              document.body.classList.remove("is-white"),
                v.a.to(t.domElement, {
                  duration: 0.4,
                  backgroundColor: "#000",
                  ease: g.b.power3InOut
                });
            }),
            (this.white = function() {
              document.body.classList.add("is-white"),
                v.a.to(t.domElement, {
                  duration: 0.4,
                  backgroundColor: "#fff",
                  ease: g.b.power3InOut
                });
            }),
            (this.domElement = document.querySelector("body"));
        },
        H = n(17),
        R = {
          show: function(e) {
            var t = e.$dom,
              n = e.$barDom;
            v.a.to(n, { duration: 0.35, opacity: 1, ease: g.b.power3InOut }),
              v.a
                .to(t, { duration: 0.35, opacity: 1, ease: g.b.power3InOut })
                .then(function() {
                  v.a.set(t, { pointerEvents: "all" });
                });
          },
          hide: function(e) {
            var t = e.$dom,
              n = e.$barDom;
            v.a.to(n, { duration: 0.35, opacity: 0, ease: g.b.power3InOut }),
              v.a.to(t, {
                duration: 0.35,
                opacity: 0,
                ease: g.b.power3InOut,
                onStart: function() {
                  v.a.set(t, { pointerEvents: "none" });
                }
              });
          },
          selectItem: function(e) {
            var t = e.$dom,
              n = e.$lineDom,
              o = e.$barDom,
              i = e.height,
              a =
                t.getBoundingClientRect().y -
                t.parentElement.getBoundingClientRect().y +
                t.getBoundingClientRect().height;
            v.a.to(t, { duration: 0.3, opacity: 1, ease: g.b.power3InOut }),
              v.a.to(n, { duration: 0.3, y: a, ease: g.b.power3InOut }),
              v.a.to(o.children[0], {
                duration: 0.5,
                scaleY: i,
                ease: g.b.power3InOut
              });
          },
          deselectItem: function(e) {
            var t = e.$dom;
            v.a.to(t, { duration: 0.3, opacity: 0.2, ease: g.b.power3InOut });
          }
        },
        F = function e(t) {
          var n = this,
            o = t.onClick;
          r()(this, e),
            (this.show = function() {
              R.show({ $dom: n.numbersDomElement, $barDom: n.barDomElement }),
                n.update();
            }),
            (this.hide = function() {
              R.hide({ $dom: n.numbersDomElement, $barDom: n.barDomElement }),
                n.deselectItem();
            }),
            (this.update = function() {
              if (y.a.selectedSection.hasPagination) {
                var e = n.numbersDomElement.querySelector(
                  "[data-id=".concat(y.a.selectedSection.id, "]")
                );
                n.deselectItem(), (n.selectedItemDomElement = e);
                var t =
                  (n.__getItemIndex(n.selectedItemDomElement) + 1) /
                  n.items.length;
                R.selectItem({
                  $dom: n.selectedItemDomElement,
                  $lineDom: n.sublineDomElement,
                  $barDom: n.barDomElement,
                  height: t
                });
              }
            }),
            (this.deselectItem = function() {
              null !== n.selectedItemDomElement &&
                R.deselectItem({ $dom: n.selectedItemDomElement });
            }),
            (this.__onNumberClick = function(e) {
              var t = e.target,
                o = n.__getItemIndex(t),
                i =
                  (null !== n.selectedItemDomElement
                    ? n.__getItemIndex(n.selectedItemDomElement)
                    : -1) > o
                    ? "down"
                    : "up",
                a = y.a.getSectionById(t.getAttribute("data-id"));
              n.onClick(a, i);
            }),
            (this.__getItemIndex = function(e) {
              return Array.from(e.parentElement.children).indexOf(e);
            }),
            (this.barDomElement = document.querySelector(".js-bar-filler")),
            (this.numbersDomElement = document.querySelector(
              ".js-numbers-pagination"
            )),
            (this.sublineDomElement = document.querySelector(
              ".js-numbers-pagination-line"
            )),
            (this.selectedItemDomElement = null),
            (this.onClick = o),
            (this.items = this.numbersDomElement.querySelectorAll(
              ".pagination__item"
            )),
            Object.values(this.items).map(function(e) {
              e.addEventListener("click", n.__onNumberClick);
            }),
            v.a.set(this.barDomElement.children[0], {
              scaleX: 1,
              scaleY: 0,
              transformOrigin: "0% 0%"
            });
        },
        z = {
          show: function(e) {
            var t = e.$dom;
            return v.a.to(t, {
              duration: g.a.introDuration,
              opacity: 1,
              ease: g.b.power3InOut
            });
          },
          hide: function(e) {
            var t = e.$dom;
            return v.a.to(t, {
              duration: 0.35,
              opacity: 0,
              ease: g.b.power3InOut
            });
          },
          playVersion: function(e) {
            var t = e.$dom,
              n = e.$playDom,
              o =
                -window.innerHeight / 2 +
                document.querySelector(".js-title").getBoundingClientRect()
                  .height +
                30;
            y.a.isMobile
              ? (o = window.innerHeight <= 600 ? 30 : 0)
              : (y.a.isTablet || y.a.hasTouch) &&
                (o = y.a.isPortrait ? -215 : -115),
              v.a.to(t, {
                duration: 0.35,
                opacity: 1,
                y: o,
                ease: g.b.power3InOut
              }),
              v.a.to(n, { duration: 0.35, opacity: 1, ease: g.b.power3InOut });
          },
          playVersion2: function(e) {
            var t = e.$dom,
              n = e.$playDom,
              o = -135;
            y.a.isMobile
              ? (o = window.innerHeight <= 600 ? -60 : -100)
              : (y.a.isTablet || y.a.hasTouch) &&
                (o = y.a.isPortrait ? -215 : -115),
              v.a.to(t, {
                duration: 0.35,
                opacity: 1,
                y: o,
                ease: g.b.power3InOut
              }),
              v.a.to(n, { duration: 0.35, opacity: 1, ease: g.b.power3InOut });
          },
          connectVersion: function(e) {
            var t = e.$dom,
              n = e.$contactDom,
              o = e.$standardDom,
              i = e.$playDom;
            v.a.to(t, { duration: 0.35, opacity: 1, ease: g.b.power3InOut }),
              v.a.to(n, { duration: 0.35, opacity: 1, ease: g.b.power3InOut }),
              v.a.to(o, { duration: 0.35, opacity: 0, ease: g.b.power3InOut }),
              v.a.to(i, { duration: 0.35, opacity: 0, ease: g.b.power3InOut });
          },
          otherSectionsVersion: function(e) {
            var t = e.$dom,
              n = e.$standardDom,
              o = -85;
            y.a.isMobileOrTablet && window.innerHeight <= 600 && (o = -100),
              v.a.to(t, {
                duration: 0.35,
                opacity: 0.3,
                y: o,
                ease: g.b.power3InOut
              }),
              v.a.to(n, { duration: 0.35, opacity: 1, ease: g.b.power3InOut });
          }
        },
        N = function e(t) {
          var n = this,
            o = t.onClick;
          r()(this, e),
            (this.show = function() {
              z.show({ $dom: n.domElement }).then(function() {
                n.domElement.classList.remove("no-events");
              });
            }),
            (this.hide = function() {
              z.hide({ $dom: n.domElement }).then(function() {
                n.domElement.classList.add("no-events");
              });
            }),
            (this.update = function() {
              switch (y.a.selectedSection.id) {
                case "play":
                  z.playVersion({
                    $dom: n.domElement,
                    $playDom: n.playDomElement
                  }),
                    z.hide({ $dom: n.contactDomElement }),
                    z.hide({ $dom: n.standardDomElement });
                  break;
                case "connect":
                  y.a.isMobileOrTabletPortrait
                    ? n.hide()
                    : z.connectVersion({
                        $dom: n.domElement,
                        $contactDom: n.contactDomElement,
                        $standardDom: n.standardDomElement,
                        $playDom: n.playDomElement
                      });
                  break;
                case "contact":
                  n.hide();
                  break;
                default:
                  y.a.isMobileOrTabletPortrait
                    ? n.hide()
                    : (z.otherSectionsVersion({
                        $dom: n.domElement,
                        $standardDom: n.standardDomElement
                      }),
                      z.hide({ $dom: n.contactDomElement }),
                      z.hide({ $dom: n.playDomElement }));
              }
            }),
            (this.domElement = document.querySelector(".js-scroll-suggestion")),
            (this.playDomElement = this.domElement.querySelector(
              ".js-scroll-suggestion-play"
            )),
            (this.standardDomElement = this.domElement.querySelector(
              ".js-scroll-suggestion-standard"
            )),
            (this.contactDomElement = this.domElement.querySelector(
              ".js-scroll-suggestion-contact"
            )),
            this.domElement.addEventListener("click", function() {
              o(y.a.selectedSection.nextSection, "down");
            }),
            Object.values(document.querySelectorAll(".js-fake-scroll")).map(
              function(e) {
                e.addEventListener("click", function() {
                  o(y.a.selectedSection.nextSection, "down");
                });
              }
            );
        },
        V = {
          enter: function(e) {
            var t = e.$dom;
            return v.a.from(t, {
              duration: 0.35,
              opacity: 0,
              y: "100%",
              ease: g.b.power3InOut,
              paused: !0,
              onStart: function() {
                v.a.set(t, { visibility: "visible" });
              }
            });
          }
        },
        G = (function(e) {
          function t(e) {
            var n,
              o = e.data,
              i = e.backHandler;
            return (
              r()(this, t),
              ((n = u()(this, m()(t).call(this, o))).enter = function(e) {
                n.enterAnimation.play(),
                  C()(m()(t.prototype), "enter", M()(n)).call(M()(n), e);
              }),
              (n.exit = function(e) {
                n.enterAnimation.reverse().then(function() {
                  C()(m()(t.prototype), "exit", M()(n)).call(M()(n), e);
                });
              }),
              (n.backHandler = i),
              (n.enterAnimation = V.enter({ $dom: n.domElement })),
              (n.backDomElement = document.querySelector(".js-contact-back")),
              n.backDomElement.addEventListener("click", n.backHandler),
              n
            );
          }
          return p()(t, e), t;
        })(j),
        Y = n(18),
        K = function e() {
          var t = this;
          r()(this, e),
            (this.checkOrientation = function() {
              var e = !1;
              screen.orientation
                ? (e = 0 !== screen.orientation.angle)
                : void 0 !== window.orientation &&
                  (e = 90 == window.orientation || -90 == window.orientation),
                e ? t.show() : t.hide();
            }),
            (this.show = function() {
              t.domElement.classList.add("is-visible");
            }),
            (this.hide = function() {
              t.domElement.classList.remove("is-visible");
            }),
            (this.domElement = document.querySelector(".js-rotate")),
            y.a.isMobile &&
              (window.addEventListener(
                "orientationchange",
                this.checkOrientation
              ),
              this.checkOrientation());
        };
      n.d(t, "default", function() {
        return U;
      });
      var U = (function(e) {
        function t() {
          return r()(this, t), u()(this, m()(t).apply(this, arguments));
        }
        return (
          p()(t, e),
          c()(t, null, [
            {
              key: "init",
              value: function() {
                var e = this;
                this.__createSections(),
                  (this.prevSection = null),
                  (this.title = new _({
                    overCallback: this.showBlob,
                    outCallback: this.hideBlob,
                    toggleCallback: this.toggleBlobForMobile
                  })),
                  (this.background = new B()),
                  (this.slider = new D({ onChange: this.goTo })),
                  (this.menu = new E({
                    onClick: this.goTo,
                    onOpen: this.__onMenuOpen,
                    onClose: this.__onMenuClose
                  })),
                  (this.headerLogo = new H.a({
                    onClick: function() {
                      e.goTo(y.a.sections[0], "up");
                    }
                  })),
                  (this.pagination = new F({ onClick: this.goTo })),
                  (this.scrollSuggestion = new N({ onClick: this.goTo })),
                  (this.form = new Y.a({
                    onResultCallback: this.slider.initEventListeners
                  })),
                  new K(),
                  (this.intro = new w({ onComplete: this.showFirstSection })),
                  (window.onbeforeunload = function() {
                    this.document.body.innerHTML = "";
                  }),
                  (window.onresize = this.resize),
                  (window.onorientationchange = this.resize);
              }
            }
          ]),
          t
        );
      })(f.a);
      (U.showFirstSection = function() {
        var e = document.querySelector(".js-content");
        document.body.classList.add("app-is-ready"),
          (e.style.opacity = 1),
          (e.style.pointerEvents = "all"),
          e.classList.add("is-active"),
          U.menu.show(),
          U.headerLogo.show(),
          U.title.show(),
          y.a.sections[0].activate(),
          y.a.sections[0].enter(),
          U.setThemeBlack(),
          U.scrollSuggestion.show(),
          U.scrollSuggestion.update(),
          U.slider.initEventListeners();
      }),
        (U.goTo = function(e, t) {
          if (e != y.a.selectedSection) {
            switch (
              (U.slider.removeEventListeners(),
              U.updateBlobStatus(),
              (U.prevSection = y.a.selectedSection),
              (y.a.selectedSection = e),
              U.menu.selectMenuItem(),
              e.id)
            ) {
              case "contact":
                U.goToContact();
                break;
              case "play":
                U.goToPlay(t);
                break;
              default:
                U.goToSection(t);
            }
            U.scrollSuggestion.update();
          }
        }),
        (U.goToPlay = function(e) {
          U.title.animate(e),
            U.title.fadeIn(),
            U.prevSection.exit(function() {
              U.title.bringTo(y.a.selectedSection.titlePosition);
            }),
            y.a.isMobile ? U.setThemeWhite() : U.setThemeBlack(),
            U.pagination.hide(),
            y.a.selectedSection.enter(function() {
              U.slider.initEventListeners(), y.a.selectedSection.activate();
            }),
            U.menu.show(),
            U.headerLogo.show();
        }),
        (U.goToContact = function() {
          (y.a.selectedSection.prevSection = U.prevSection),
            U.slider.removeEventListeners(),
            U.prevSection.fadeOut(),
            U.title.bringTo(y.a.selectedSection.titlePosition),
            U.title.fadeOut(),
            U.pagination.hide(),
            U.scrollSuggestion.hide(),
            (y.a.isMobile || y.a.isTablet || y.a.hasTouch) &&
              (U.menu.hide(), U.headerLogo.hide()),
            U.setThemeWhite(),
            y.a.selectedSection.enter(function() {
              y.a.selectedSection.activate(),
                U.prevSection.exit(function() {
                  U.title.bringTo(y.a.selectedSection.titlePosition);
                });
            });
        }),
        (U.goToSection = function(e) {
          "contact" !== U.prevSection.id
            ? U.title.animate(e)
            : (U.title.animate(e), U.title.fadeIn(), U.title.updateSubline(0)),
            U.pagination.show(),
            U.prevSection.exit(function() {
              U.title.bringTo(y.a.selectedSection.titlePosition);
            }),
            y.a.selectedSection.enter(function() {
              U.slider.initEventListeners(), y.a.selectedSection.activate();
            }),
            U.menu.show(),
            U.headerLogo.show(),
            U.setThemeWhite();
        }),
        (U.setThemeBlack = function() {
          U.background.black(), U.title.white();
        }),
        (U.setThemeWhite = function() {
          U.background.white(), U.title.black();
        }),
        (U.updateBlobStatus = function() {
          if (y.a.isBlobVisible)
            switch (y.a.isMobile) {
              case !0:
                U.toggleBlobForMobile();
                break;
              case !1:
                U.hideBlob();
            }
        }),
        (U.showBlob = function() {
          y.a.selectedSection.showBlob(),
            U.title.convertToBlobTitle(),
            U.pagination.hide(),
            U.slider.removeEventListeners(),
            y.a.isMobileOrTabletPortrait || U.menu.fadeOut();
        }),
        (U.hideBlob = function() {
          y.a.selectedSection.hideBlob(),
            U.title.convertToStandardTitle(),
            U.pagination.show(),
            U.slider.initEventListeners(),
            y.a.isMobileOrTabletPortrait || U.menu.fadeIn();
        }),
        (U.toggleBlobForMobile = function() {
          y.a.isBlobVisible
            ? (U.hideBlob(), U.title.showStaticWords())
            : (U.showBlob(), U.title.hideStaticWords()),
            (y.a.isBlobVisible = !y.a.isBlobVisible);
        }),
        (U.resize = function() {
          if (
            (U.title && U.title.resize(),
            (document.body.style.maxHeight = "".concat(
              window.innerHeight,
              "px"
            )),
            y.a.isMobile &&
              y.a.isSafariMobile &&
              setTimeout(function() {
                document.body.style.maxHeight = "".concat(
                  window.innerHeight,
                  "px"
                );
              }, 500),
            y.a.selectedSection.resize(),
            y.a.isTablet && y.a.isBlobVisible)
          )
            switch (y.a.isPortrait) {
              case !0:
                U.menu.fadeIn();
                break;
              case !1:
              default:
                U.menu.fadeOut();
            }
          U.scrollSuggestion.update();
        }),
        (U.__createSections = function() {
          var e = !0,
            t = !1,
            n = void 0;
          try {
            for (
              var o,
                a = function() {
                  var e = o.value,
                    t = null;
                  switch (((e.blobCallback = U.updateBlobStatus), e.id)) {
                    case "play":
                      ((t = new W(e)).mouseOverCallback = U.setThemeWhite),
                        (t.mouseOutCallback = U.setThemeBlack);
                      break;
                    case "contact":
                      t = new G({
                        data: e,
                        backHandler: function() {
                          U.form.isLastStep && U.form.reset(),
                            U.goTo(t.prevSection, "up");
                        }
                      });
                      break;
                    default:
                      t = new j(e);
                  }
                  y.a.sections.push(t);
                },
                r = b.sections[Symbol.iterator]();
              !(e = (o = r.next()).done);
              e = !0
            )
              a();
          } catch (e) {
            (t = !0), (n = e);
          } finally {
            try {
              e || null == r.return || r.return();
            } finally {
              if (t) throw n;
            }
          }
          var s = !0,
            c = !1,
            l = void 0;
          try {
            for (
              var u, d = y.a.sections.entries()[Symbol.iterator]();
              !(s = (u = d.next()).done);
              s = !0
            ) {
              var m = i()(u.value, 2),
                h = m[0],
                p = m[1];
              h < y.a.sections.length - 1 &&
                (p.nextSection = y.a.sections[h + 1]),
                h > 1 && (p.prevSection = y.a.sections[h - 1]);
            }
          } catch (e) {
            (c = !0), (l = e);
          } finally {
            try {
              s || null == d.return || d.return();
            } finally {
              if (c) throw l;
            }
          }
          y.a.selectedSection = y.a.sections[0];
        }),
        (U.__onMenuOpen = function() {
          U.pagination.hide(), y.a.selectedSection.hideIcons();
        }),
        (U.__onMenuClose = function() {
          y.a.selectedSection.hasPagination && U.pagination.show(),
            y.a.selectedSection.showIcons();
        });
    },
    8: function(e, t, n) {
      "use strict";
      var o = n(29),
        i = n.n(o),
        a = {
          selectedSetionIndex: null,
          selectedSection: null,
          sections: [],
          isBlobVisible: !1,
          contentDomElement: document.querySelector(".js-content"),
          browser: i.a.getParser(window.navigator.userAgent),
          get isMobile() {
            var e = !1;
            switch (
              i.a.getParser(window.navigator.userAgent).parsedResult.platform
                .type
            ) {
              case "mobile":
                e = !0;
                break;
              case "tablet":
              default:
                e = !1;
            }
            return "ontouchstart" in window && e;
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
            var e = !1;
            return (
              screen.orientation
                ? (e = 0 !== screen.orientation.angle)
                : void 0 !== window.orientation &&
                  (e = 90 == window.orientation || -90 == window.orientation),
              e
            );
          },
          get isPortrait() {
            var e = !1;
            return (
              screen.orientation
                ? (e = 0 == screen.orientation.angle)
                : void 0 !== window.orientation &&
                  (e = 90 !== window.orientation && -90 !== window.orientation),
              e
            );
          },
          get hasTouch() {
            return "ontouchstart" in window;
          },
          get isSafariMobile() {
            var e = i.a.getParser(window.navigator.userAgent);
            return (
              "ios" == e.parsedResult.os.name.toLowerCase() &&
              "safari" == e.parsedResult.browser.name.toLowerCase()
            );
          },
          getSectionById: function(e) {
            var t = !0,
              n = !1,
              o = void 0;
            try {
              for (
                var i, r = a.sections[Symbol.iterator]();
                !(t = (i = r.next()).done);
                t = !0
              ) {
                var s = i.value;
                if (s.id == e) return s;
              }
            } catch (e) {
              (n = !0), (o = e);
            } finally {
              try {
                t || null == r.return || r.return();
              } finally {
                if (n) throw o;
              }
            }
            return null;
          }
        };
      t.a = a;
    }
  }
]);
