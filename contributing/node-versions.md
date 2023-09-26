# Node Versions

This site will run on the Node.js version specified in `package.json`.

When updating to a new Node.js version, consider the following files:

- [ ] The `engines.node` entry in `package.json`
- [ ] The `.github/*.workflow` Actions files
- [ ] The `Dockerfile` that can be used for deployments
- [ ] The `contributing/development.md` guide
- [ ] The `contributing/node-versions.md` file

## `nodenv`

[nodenv](https://github.com/nodenv/nodenv) is a tool for managing multiple Node.js versions on your local machine. It is **not required** to run this app, but you may already have it installed if you've worked on other projects that use Node.js.

If you're using macOS, run this command to get the latest:

```shell
brew upgrade nodenv node-build
```

If you see a warning like this one, run the suggested command:

```shell
# You should change the ownership of these directories to your user.
sudo chown -R $(whoami) /usr/local/sbin
```

If you're using another operating system, or did not use Homebrew to install nodenv, see these [upgrade instructions](https://github.com/nodenv/nodenv#installation).

To install Node.js and make it your default version, run this command:

```shell
# Set VERSION= based on package.json#engines
nodenv install $VERSION && nodenv global $VERSION
```

You may sometimes see a warning when running npm scripts with nodenv:

```shell
npm WARN lifecycle The node binary used for scripts is [...] but npm is using [...]
```

This is due to nodenv's overriding behavior. To silence this harmless warning, the [nodenv docs](https://github.com/nodenv/nodenv/wiki/FAQ#npm-warning-about-mismatched-binaries) recommend running the following command from any directory:

```shell
npm config set scripts-prepend-node-path auto
```
