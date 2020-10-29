# Node Versions

In [development](contributing/development.md) enviroments this site will run on Node.js versions `12 - 14`.

In [staging and production](contributing/deployments.md) environments this site runs on Node.js 14, the [Active LTS version](https://nodejs.org/en/about/releases/) from 2020-10-27 to 2021-10-26).

When updating to a new Node.js version, consider the following files:

- [ ] The `engines.node` entry in `package.json`
- [ ] The `.node-version` file used by [nodenv](https://github.com/nodenv/nodenv), a tool for managing multiple Node.js versions on your machine.
- [ ] The `.github/*.workflow` Actions files
- [ ] The `Dockerfile` that can be used for deployments
- [ ] The `contributing/development.md` guide
- [ ] The `contributing/node-versions.md` file

## `nodenv`

[nodenv](https://github.com/nodenv/nodenv) is a tool for managing multiple Node.js versions on your local machine. It is **not required** to run this app, but you may already have it installed if you've worked on other projects that use Node.js.

If you're using macOS, run this command to get the latest:

```sh
brew upgrade nodenv node-build
```

If you see a warning like this one, run the suggested command:

```sh
# You should change the ownership of these directories to your user.
sudo chown -R $(whoami) /usr/local/sbin
```

If you're using another operating system, or did not use Homebrew to install nodenv, see these [upgrade instructions](https://github.com/nodenv/nodenv#installation).

To install Node.js 14 and make it your default version, run this command:

```sh
nodenv install 14.13.0 && nodenv global 14.13.0
```

You may sometimes see a warning when running npm scripts with nodenv:

```sh
npm WARN lifecycle The node binary used for scripts is [...] but npm is using [...]
```

This is due to nodenv's overriding behavior. To silence this harmless warning, the [nodenv docs](https://github.com/nodenv/nodenv/wiki/FAQ#npm-warning-about-mismatched-binaries) recommend running the following command from any directory:

```sh
npm config set scripts-prepend-node-path auto
```
