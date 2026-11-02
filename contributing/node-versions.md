# Node Versions

This site will run on the Node.js version specified in `package.json`.

When updating to a new Node.js version, consider the following files:

- [ ] The `engines.node` entry in `package.json` and `package-lock.json`
- [ ] The `.github/workflows/*.yml` Actions files that pin a Node version (grep for `node-version`)
- [ ] The `Dockerfile` that can be used for deployments, including its minimum Node version check
- [ ] The `.devcontainer/Dockerfile` and `.devcontainer/devcontainer.json` files
- [ ] The `Dockerfile.openapi_decorator` file
- [ ] The `contributing/development.md` guide
- [ ] The `contributing/node-versions.md` file

## Install Node.js locally

You don't need a Node version manager, but it makes switching versions easier. We recommend [fnm](https://github.com/Schniz/fnm).

1. Install fnm. On macOS, run `brew install fnm`. For other systems, see the [fnm installation docs](https://github.com/Schniz/fnm#installation).
1. Set up your shell. For Zsh, add this line to `~/.zshrc`. For Bash, add it to `~/.bashrc` and change `zsh` to `bash`. For other shells, see [fnm shell setup](https://github.com/Schniz/fnm#shell-setup).

   ```shell
   eval "$(fnm env --use-on-cd --shell zsh)"
   ```

1. Open a new terminal. Install the latest major version listed in `engines.node` in `package.json`, make it your default, and switch to it. For example, for Node.js 26:

   ```shell
   fnm install 26
   fnm default 26
   fnm use 26
   ```

1. Run `node --version` to check. If you see a different version, another version manager may be active in your shell. Check your shell profile.
