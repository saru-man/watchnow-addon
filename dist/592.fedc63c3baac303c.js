'use strict';
((typeof self < 'u' ? self : this).webpackChunkplugin =
  (typeof self < 'u' ? self : this).webpackChunkplugin || []).push([
  [592],
  {
    592: (h, s, t) => {
      t.r(s), t.d(s, { mdTransitionAnimation: () => T });
      var o = t(412),
        d = t(382);
      const T = (y, i) => {
        var a, l, r;
        const c = '40px',
          m = 'back' === i.direction,
          f = i.leavingEl,
          g = (0, d.g)(i.enteringEl),
          E = g.querySelector('ion-toolbar'),
          n = (0, o.c)();
        if (
          (n.addElement(g).fill('both').beforeRemoveClass('ion-page-invisible'),
          m
            ? n
                .duration((null !== (a = i.duration) && void 0 !== a ? a : 0) || 200)
                .easing('cubic-bezier(0.47,0,0.745,0.715)')
            : n
                .duration((null !== (l = i.duration) && void 0 !== l ? l : 0) || 280)
                .easing('cubic-bezier(0.36,0.66,0.04,1)')
                .fromTo('transform', `translateY(${c})`, 'translateY(0px)')
                .fromTo('opacity', 0.01, 1),
          E)
        ) {
          const e = (0, o.c)();
          e.addElement(E), n.addAnimation(e);
        }
        if (f && m) {
          n.duration((null !== (r = i.duration) && void 0 !== r ? r : 0) || 200).easing(
            'cubic-bezier(0.47,0,0.745,0.715)',
          );
          const e = (0, o.c)();
          e
            .addElement((0, d.g)(f))
            .onFinish((v) => {
              1 === v && e.elements.length > 0 && e.elements[0].style.setProperty('display', 'none');
            })
            .fromTo('transform', 'translateY(0px)', `translateY(${c})`)
            .fromTo('opacity', 1, 0),
            n.addAnimation(e);
        }
        return n;
      };
    },
  },
]);
