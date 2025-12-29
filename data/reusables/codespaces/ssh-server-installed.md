The codespace you connect to must be running an SSH server. The default dev container image includes an SSH server, which is started automatically. If your codespaces are not created from the default image, you can install and start an SSH server by adding the following to the `features` object in your `devcontainer.json` file.

```jsonc
"features": {
    // ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    // ...
}
```
