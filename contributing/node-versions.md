## Node Versions

The site currently runs on Node.js v12, the [Active LTS version](https://nodejs.org/en/about/releases/) that will be supported until 2020-10-20.

When updating to a new Node.js version, consider the following files:

- The `engines.node` entry in `package.json`
- The `.node-version` file used by [nodenv](https://github.com/nodenv/nodenv), a tool for managing multiple Node.js versions on your machine.
- The `.github/*.workflow` Actions files
- The `Dockerfile` that can be used for deployments
- This README!

### `nodenv`

[nodenv](https://github.com/nodenv/nodenv) is a tool for managing multiple
Node.js versions on your local machine. It is **not required** to run the
docs-internal app, but you may already have it installed if you've worked on other
internal GitHub projects that use Node.js.

To install Node.js 12 and make it your default version, run this command:

```sh
nodenv install 12.8.0 && nodenv global 12.8.0
```

You may sometimes see a warning when running npm scripts with nodenv:

```sh
npm WARN lifecycle The node binary used for scripts is [...] but npm is using [...]
```

This is due to nodenv's overriding behavior. To silence this harmless warning,
the [nodenv docs](https://github.com/nodenv/nodenv/wiki/FAQ#npm-warning-about-mismatched-binaries)
recommend running the following command from any directory:

```sh
npm config set scripts-prepend-node-path auto
```