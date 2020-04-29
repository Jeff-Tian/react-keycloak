![React Keycloak](/art/react-keycloak-logo.png?raw=true 'React Keycloak Logo')

# React Keycloak <!-- omit in toc -->

> React bindings for [Keycloak](https://www.keycloak.org/)

[![NPM (scoped)](https://img.shields.io/npm/v/@keycloak-react/core?label=npm%20%7C%20core)](https://www.npmjs.com/package/@keycloak-react/core)
[![NPM (scoped)](https://img.shields.io/npm/v/@keycloak-react/web?label=npm%20%7C%20web)](https://www.npmjs.com/package/@keycloak-react/web)
[![NPM (scoped)](https://img.shields.io/npm/v/@keycloak-react/nextjs?label=npm%20%7C%20nextjs)](https://www.npmjs.com/package/@keycloak-react/nextjs)
[![NPM (scoped)](https://img.shields.io/npm/v/@keycloak-react/razzle?label=npm%20%7C%20razzle)](https://www.npmjs.com/package/@keycloak-react/razzle)

[![License](https://img.shields.io/github/license/jeff-tian/keycloak-react.svg)](https://github.com/jeff-tian/keycloak-react/blob/master/LICENSE.md)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![Contributors](https://img.shields.io/badge/contributors-2-orange.svg)](#contributors)<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![Gitter](https://img.shields.io/gitter/room/react-keycloak/community)](https://gitter.im/react-keycloak/community)

[![Dependencies](https://img.shields.io/david/jeff-tian/keycloak-react.svg)](https://github.com/jeff-tian/keycloak-react)
[![Build Status](https://travis-ci.com/jeff-tian/keycloak-react.svg?branch=master)](https://travis-ci.com/jeff-tian/keycloak-react)
[![Coverage Status](https://coveralls.io/repos/github/jeff-tian/keycloak-react/badge.svg?branch=master)](https://coveralls.io/github/jeff-tian/keycloak-react?branch=master)
[![Github Issues](https://img.shields.io/github/issues/jeff-tian/keycloak-react.svg)](https://github.com/jeff-tian/keycloak-react/issues)

![npm](https://img.shields.io/npm/dm/@keycloak-react/core)

---

## Table of Contents <!-- omit in toc -->

- [Integrations](#integrations)
  - [React](#react)
  - [NextJS](#nextjs)
  - [Razzle](#razzle)
- [Support](#support)
- [Examples](#examples)
- [Contributors](#contributors)

---

## Integrations

### React

React Keycloak for Web requires:

- React **16.0** or later
- `keycloak-js` **9.0.2** or later

```shell
yarn add @keycloak-react/web
```

or

```shell
npm install --save @keycloak-react/web
```

or as a `UMD` package through `unpkg`

- one for development: https://unpkg.com/@keycloak-react/web@latest/dist/umd/react-keycloak-web.js

- one for production: https://unpkg.com/@keycloak-react/web@latest/dist/umd/react-keycloak-web.min.js

See `@keycloak-react/web` package [README](https://github.com/jeff-tian/keycloak-react/blob/master/packages/web/README.md) for complete documentation.

### NextJS

React Keycloak for NextJS requires:

- React **16.0** or later
- NextJS **9** or later
- `keycloak-js` **9.0.2** or later

```shell
yarn add @keycloak-react/nextjs
```

or

```shell
npm install --save @keycloak-react/nextjs
```

See `@keycloak-react/nextjs` package [README](https://github.com/jeff-tian/keycloak-react/blob/master/packages/nextjs/README.md) for complete documentation.

### Razzle

React Keycloak for Razzle requires:

- React **16.0** or later
- Razzle **3** or later
- `keycloak-js` **9.0.2** or later

```shell
yarn add @keycloak-react/razzle
```

or

```shell
npm install --save @keycloak-react/razzle
```

See `@keycloak-react/razzle` package [README](https://github.com/jeff-tian/keycloak-react/blob/master/packages/razzle/README.md) for complete documentation.

## Support

| version | keycloak-js version |
| ------- | ------------------- |
| v2.0.0+ | 9.0.2+              |
| v1.x    | >=8.0.2 <9.0.2      |

## Examples

See inside `examples` for various demo implementing this library main features.

**Note:** The demo apps are not meant to be **production-ready** nor **starter-kit** s but just a way to show this module components and their usage.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://panz3r.dev"><img src="https://avatars3.githubusercontent.com/u/1754457?v=4" width="100px;" alt=""/><br /><sub><b>Mattia Panzeri</b></sub></a><br /><a href="#ideas-panz3r" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/jeff-tian/keycloak-react/commits?author=panz3r" title="Code">💻</a> <a href="https://github.com/jeff-tian/keycloak-react/commits?author=panz3r" title="Documentation">📖</a> <a href="https://github.com/jeff-tian/keycloak-react/issues?q=author%3Apanz3r" title="Bug reports">🐛</a> <a href="#maintenance-panz3r" title="Maintenance">🚧</a> <a href="#platform-panz3r" title="Packaging/porting to new platform">📦</a> <a href="#question-panz3r" title="Answering Questions">💬</a> <a href="https://github.com/jeff-tian/keycloak-react/pulls?q=is%3Apr+reviewed-by%3Apanz3r" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/jeff-tian/keycloak-react/commits?author=panz3r" title="Tests">⚠️</a> <a href="#example-panz3r" title="Examples">💡</a></td>
    <td align="center"><a href="https://ac-systems.be/"><img src="https://avatars0.githubusercontent.com/u/9079379?v=4" width="100px;" alt=""/><br /><sub><b>JannesD</b></sub></a><br /><a href="https://github.com/jeff-tian/keycloak-react/issues?q=author%3Ajannes-io" title="Bug reports">🐛</a> <a href="https://github.com/jeff-tian/keycloak-react/commits?author=jannes-io" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

---

If you found this project to be helpful, please consider buying me a coffee.

[![buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoff.ee/4f18nT0Nk)
