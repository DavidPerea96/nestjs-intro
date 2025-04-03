'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-4be77b55e39319368ccf6c23a2551b69758863abfec1706698688dbe2390144a5ad34f89c828a3c5827a6814db6a09d954ed71b2d3417981e4dde0f65f9470ed"' : 'data-bs-target="#xs-controllers-links-module-AppModule-4be77b55e39319368ccf6c23a2551b69758863abfec1706698688dbe2390144a5ad34f89c828a3c5827a6814db6a09d954ed71b2d3417981e4dde0f65f9470ed"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4be77b55e39319368ccf6c23a2551b69758863abfec1706698688dbe2390144a5ad34f89c828a3c5827a6814db6a09d954ed71b2d3417981e4dde0f65f9470ed"' :
                                            'id="xs-controllers-links-module-AppModule-4be77b55e39319368ccf6c23a2551b69758863abfec1706698688dbe2390144a5ad34f89c828a3c5827a6814db6a09d954ed71b2d3417981e4dde0f65f9470ed"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-4be77b55e39319368ccf6c23a2551b69758863abfec1706698688dbe2390144a5ad34f89c828a3c5827a6814db6a09d954ed71b2d3417981e4dde0f65f9470ed"' : 'data-bs-target="#xs-injectables-links-module-AppModule-4be77b55e39319368ccf6c23a2551b69758863abfec1706698688dbe2390144a5ad34f89c828a3c5827a6814db6a09d954ed71b2d3417981e4dde0f65f9470ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4be77b55e39319368ccf6c23a2551b69758863abfec1706698688dbe2390144a5ad34f89c828a3c5827a6814db6a09d954ed71b2d3417981e4dde0f65f9470ed"' :
                                        'id="xs-injectables-links-module-AppModule-4be77b55e39319368ccf6c23a2551b69758863abfec1706698688dbe2390144a5ad34f89c828a3c5827a6814db6a09d954ed71b2d3417981e4dde0f65f9470ed"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c51df321d6aca6909353f22fa580d000612ece45869fcf8b393442d087e8a99f69826ccb3aa3fe32f7e7d411922c911a7be7cf34078341c94392d23dee4a33e3"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c51df321d6aca6909353f22fa580d000612ece45869fcf8b393442d087e8a99f69826ccb3aa3fe32f7e7d411922c911a7be7cf34078341c94392d23dee4a33e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c51df321d6aca6909353f22fa580d000612ece45869fcf8b393442d087e8a99f69826ccb3aa3fe32f7e7d411922c911a7be7cf34078341c94392d23dee4a33e3"' :
                                            'id="xs-controllers-links-module-AuthModule-c51df321d6aca6909353f22fa580d000612ece45869fcf8b393442d087e8a99f69826ccb3aa3fe32f7e7d411922c911a7be7cf34078341c94392d23dee4a33e3"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c51df321d6aca6909353f22fa580d000612ece45869fcf8b393442d087e8a99f69826ccb3aa3fe32f7e7d411922c911a7be7cf34078341c94392d23dee4a33e3"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c51df321d6aca6909353f22fa580d000612ece45869fcf8b393442d087e8a99f69826ccb3aa3fe32f7e7d411922c911a7be7cf34078341c94392d23dee4a33e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c51df321d6aca6909353f22fa580d000612ece45869fcf8b393442d087e8a99f69826ccb3aa3fe32f7e7d411922c911a7be7cf34078341c94392d23dee4a33e3"' :
                                        'id="xs-injectables-links-module-AuthModule-c51df321d6aca6909353f22fa580d000612ece45869fcf8b393442d087e8a99f69826ccb3aa3fe32f7e7d411922c911a7be7cf34078341c94392d23dee4a33e3"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-422ba31b04113ea59a30958500a0abda5594cc4f1995462ea38beb08cda9f981b50653ca2d3b355c8ec5bb66077cba6952dfa58e653690bd8e79437caa94f3a7"' : 'data-bs-target="#xs-controllers-links-module-PostModule-422ba31b04113ea59a30958500a0abda5594cc4f1995462ea38beb08cda9f981b50653ca2d3b355c8ec5bb66077cba6952dfa58e653690bd8e79437caa94f3a7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-422ba31b04113ea59a30958500a0abda5594cc4f1995462ea38beb08cda9f981b50653ca2d3b355c8ec5bb66077cba6952dfa58e653690bd8e79437caa94f3a7"' :
                                            'id="xs-controllers-links-module-PostModule-422ba31b04113ea59a30958500a0abda5594cc4f1995462ea38beb08cda9f981b50653ca2d3b355c8ec5bb66077cba6952dfa58e653690bd8e79437caa94f3a7"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-422ba31b04113ea59a30958500a0abda5594cc4f1995462ea38beb08cda9f981b50653ca2d3b355c8ec5bb66077cba6952dfa58e653690bd8e79437caa94f3a7"' : 'data-bs-target="#xs-injectables-links-module-PostModule-422ba31b04113ea59a30958500a0abda5594cc4f1995462ea38beb08cda9f981b50653ca2d3b355c8ec5bb66077cba6952dfa58e653690bd8e79437caa94f3a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-422ba31b04113ea59a30958500a0abda5594cc4f1995462ea38beb08cda9f981b50653ca2d3b355c8ec5bb66077cba6952dfa58e653690bd8e79437caa94f3a7"' :
                                        'id="xs-injectables-links-module-PostModule-422ba31b04113ea59a30958500a0abda5594cc4f1995462ea38beb08cda9f981b50653ca2d3b355c8ec5bb66077cba6952dfa58e653690bd8e79437caa94f3a7"' }>
                                        <li class="link">
                                            <a href="injectables/PostServices.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostServices</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-ce6b37cd15050c9f284fe5c18c0615f52c694bade7ca28f4c1208f8f7b853da96d5184d4e513961fe53bb961483a6e7c0756642c217070c601530799478e1ddc"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-ce6b37cd15050c9f284fe5c18c0615f52c694bade7ca28f4c1208f8f7b853da96d5184d4e513961fe53bb961483a6e7c0756642c217070c601530799478e1ddc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-ce6b37cd15050c9f284fe5c18c0615f52c694bade7ca28f4c1208f8f7b853da96d5184d4e513961fe53bb961483a6e7c0756642c217070c601530799478e1ddc"' :
                                            'id="xs-controllers-links-module-UsersModule-ce6b37cd15050c9f284fe5c18c0615f52c694bade7ca28f4c1208f8f7b853da96d5184d4e513961fe53bb961483a6e7c0756642c217070c601530799478e1ddc"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-ce6b37cd15050c9f284fe5c18c0615f52c694bade7ca28f4c1208f8f7b853da96d5184d4e513961fe53bb961483a6e7c0756642c217070c601530799478e1ddc"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-ce6b37cd15050c9f284fe5c18c0615f52c694bade7ca28f4c1208f8f7b853da96d5184d4e513961fe53bb961483a6e7c0756642c217070c601530799478e1ddc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-ce6b37cd15050c9f284fe5c18c0615f52c694bade7ca28f4c1208f8f7b853da96d5184d4e513961fe53bb961483a6e7c0756642c217070c601530799478e1ddc"' :
                                        'id="xs-injectables-links-module-UsersModule-ce6b37cd15050c9f284fe5c18c0615f52c694bade7ca28f4c1208f8f7b853da96d5184d4e513961fe53bb961483a6e7c0756642c217070c601530799478e1ddc"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserPostDto.html" data-type="entity-link" >CreateUserPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostServices.html" data-type="entity-link" >PostServices</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});