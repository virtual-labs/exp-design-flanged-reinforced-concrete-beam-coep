importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"51b23bc81e6bdda04516f4ca16cb516d","url":"feedback.html"},{"revision":"195b190341b46cd75390f81fb5f180b8","url":"images/flangedBeam1.png"},{"revision":"e6ba37b5fe9518ac968825a6f9784c39","url":"images/flangedBeam2.png"},{"revision":"18fed9c99761e418f8035d4bf737bcb1","url":"images/formula.png"},{"revision":"2d3eb1dcdf907a4a6b1b6934f6e5016f","url":"index.html"},{"revision":"f2dc997e403777e341ed3bd5e418a259","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"a7fbc2b867f29b3a21f648f55e68a600","url":"posttest.html"},{"revision":"aaefe9875d4588a0922143b66cc719db","url":"posttest.json"},{"revision":"c8a0adb34f56d3b27ca27f2ab88c2b40","url":"pretest.html"},{"revision":"d7f25f6061408f62a27997beb5703d81","url":"pretest.json"},{"revision":"a172acc0764829a4db5842472739503d","url":"procedure.html"},{"revision":"a57806ec59182203b48eeef35d007a2a","url":"references.html"},{"revision":"1be417da077137a3d47db72a327e97ae","url":"simulation.html"},{"revision":"3ceb0b1a9d8c79b3f57c8a96dd65de05","url":"simulation/css/header.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"21dcd45bf789c3cff12732588c196c7b","url":"simulation/css/mainPage.css"},{"revision":"e06f4e34bc550bab4673cd3a6b07f13f","url":"simulation/css/pagination.css"},{"revision":"801ebd59f1969ae1b4ff3f8c3ae8182f","url":"simulation/css/rcBeam.css"},{"revision":"84fe91c8ee7795403c54fa2bbb22a249","url":"simulation/css/sidebar.css"},{"revision":"dfbd37cf3a8b590ef65d39a6abfb2e1a","url":"simulation/css/slab.css"},{"revision":"6bb5f08c076e718753e8a435c6beb944","url":"simulation/css/style.css"},{"revision":"f32243e48c4923d6db7f7871490fd64a","url":"simulation/css/toastr.min.css"},{"revision":"d84feb75cc1672322d72c68a635962a2","url":"simulation/images/0.133effectiveDepth.png"},{"revision":"4c9149ae15543de49c3b76facc437307","url":"simulation/images/0.138effectiveDepth.png"},{"revision":"8a3f8f5d2ab333be37fa40cfa98b8956","url":"simulation/images/0.148effectDepth.png"},{"revision":"fd952920385b718a09e2d40ddc46e70c","url":"simulation/images/1WslabPriview.png"},{"revision":"4d51f41f0dacb895b8cab4adc3d9b626","url":"simulation/images/arrowLeft.png"},{"revision":"05af4ddf7bd9f3f61abbbe8a56d7d570","url":"simulation/images/arrowRight.png"},{"revision":"c1dd92b52f1a25dae2b0600990ebb0b8","url":"simulation/images/astFormula.png"},{"revision":"897e237c9bf1b716f5aad93a27399607","url":"simulation/images/back-button.png"},{"revision":"7356e2ff8d51a1368cc8d08cf38688a4","url":"simulation/images/backBTN.png"},{"revision":"0b37d6b08da72b6058bb9a0d84369b12","url":"simulation/images/backword.png"},{"revision":"8d3e8e2efa82774b33ad439623f5a938","url":"simulation/images/bending_moment.png"},{"revision":"aba90d70db60fcdcb764b6f4819f6ef8","url":"simulation/images/bfFormula.png"},{"revision":"692f42d6a53912a23b39708b48cd1ce0","url":"simulation/images/checked.png"},{"revision":"7507ef7138ed540b78ae8a310c73ce1a","url":"simulation/images/COEPlogo.png"},{"revision":"dbc56434ec12120d29f211a56be95323","url":"simulation/images/coverPreview.png"},{"revision":"fe8863e739348706d2d0b83a2c8b2aa3","url":"simulation/images/criticalSection.png"},{"revision":"c8b8a4d5dfd39104c6cd5acdf0fc9bb4","url":"simulation/images/Fbutton1.png"},{"revision":"69a9eb0cd3b5148b9d76e32ed805f25b","url":"simulation/images/interpolationFormula.png"},{"revision":"8944fea3f0f513c7e0e2159ee38473d3","url":"simulation/images/maxShear.png"},{"revision":"324a0ecbc3634220f55a0765bcf3b484","url":"simulation/images/ncalculateFormula.png"},{"revision":"4b4a47eb8413b9a3e5c4be7108164ec0","url":"simulation/images/nValFormula.png"},{"revision":"419b6c5e284514b495a3fcf02371f142","url":"simulation/images/rein.png"},{"revision":"b826d221596919489094008f76408ba1","url":"simulation/images/reinFrame.png"},{"revision":"8ae7775cff153a3c9f05fede844822d6","url":"simulation/images/right-arrow.png"},{"revision":"1f9f0cbab54e8b8c84f0bf243beaf018","url":"simulation/images/shearCritical.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlablogo.jpg"},{"revision":"f092b3f5bfba0485f28cf8a794136a85","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"4f252523d4af0b478c810c2547a63e19","url":"simulation/lib/jquery.js"},{"revision":"220afd743d9e9643852e31a135a9f3ae","url":"simulation/lib/jquery.min.js"},{"revision":"074952d02fd65490bb6e8eb97ed36bcf","url":"simulation/lib/raphael.js"},{"revision":"28c964ed8001f7e9930dc7c0a6daf2e1","url":"simulation/lib/raphael.min.js"},{"revision":"062a017ba84b274ca23f593de5ff0b06","url":"simulation/src/beamDiag.js"},{"revision":"d0831ef7d794db8dc67e995fdb3efb71","url":"simulation/src/calculatePage1.js"},{"revision":"53fbd5aeeaa00dfeced5d79587678983","url":"simulation/src/effectDepthGraph.js"},{"revision":"7d68e207fe6a5c316f3e8daf3961e1ec","url":"simulation/src/flangedBeamConfig.js"},{"revision":"cf48e963788d900eeba5209cf1606884","url":"simulation/src/flangedBeamConfigAnim.js"},{"revision":"fef9df9b1526abd7d4ce6dec523e6f3d","url":"simulation/src/flangedConfig2.js"},{"revision":"0b8d161f9604cd7661268ffc53755dcf","url":"simulation/src/pagination.js"},{"revision":"2100daca4862c09ea417bcadac17dd42","url":"simulation/src/rcConfig.js"},{"revision":"cf02474fc3d469114c2168f47751482f","url":"simulation/src/reinStaticAnim.js"},{"revision":"b81aae81bccf72802be893a49a3eee7c","url":"simulation/src/render.js"},{"revision":"ffe7ea8c661d611c319a5cb68d355c3d","url":"simulation/src/secondPageAnim.js"},{"revision":"c31597e6e55519c19521e8252ad2d822","url":"simulation/src/timer.js"},{"revision":"b648915f7cee680fddac2670a61b9b73","url":"simulation/src/toastr.min.js"},{"revision":"461533b6a738120c4570035c358ed9c7","url":"theory.html"},{"revision":"d2302fb67bc8c721397b9089ee5ab501","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );