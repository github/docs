---
title: Dockerfile support for GitHub Actions
shortTitle: Docker
intro: 'When creating a `Dockerfile` for a Docker container action, you should be aware of how some Docker instructions interact with GitHub Actions and an action''s metadata file.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'reference'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### About Dockerfile instructions

A `Dockerfile` contains instructions and arguments that define the contents and startup behavior of a Docker container. For more information about the instructions Docker supports, see "[Dockerfile reference](https://docs.docker.com/engine/reference/builder/)" in the Docker documentation.

### Dockerfile instructions and overrides

Some Docker instructions interact with GitHub Actions, and an action's metadata file can override some Docker instructions. Ensure that you are familiar with how your Dockerfile interacts with {% data variables.product.prodname_actions %} to prevent any unexpected behavior.

#### USER

Docker actions must be run by the default Docker user (root). Do not use the `USER` instruction in your `Dockerfile`, because you won't be able to access the `GITHUB_WORKSPACE`. For more information, see "[Using environment variables](/actions/configuring-and-managing-workflows/using-environment-variables)" and [USER reference](https://docs.docker.com/engine/reference/builder/#user) in the Docker documentation.

#### FROM

The first instruction in the `Dockerfile` must be `FROM`, which selects a Docker base image. For more information, see the [FROM reference](https://docs.docker.com/engine/reference/builder/#from) in the Docker documentation.

These are some best practices when setting the `FROM` argument:

- It's recommended to use official Docker images. For example, `python` or `ruby`.
- Use a version tag if it exists, preferably with a major version. For example, use `node:10` instead of `node:latest`.
- It's recommended to use Docker images based on the [Debian](https://www.debian.org/) operating system.

#### WORKDIR

{% data variables.product.product_name %} sets the working directory path in the `GITHUB_WORKSPACE` environment variable. It's recommended to not use the `WORKDIR` instruction in your `Dockerfile`. Before the action executes, {% data variables.product.product_name %} will mount the `GITHUB_WORKSPACE` directory on top of anything that was at that location in the Docker image and set `GITHUB_WORKSPACE` as the working directory. For more information, see "[Using environment variables](/actions/configuring-and-managing-workflows/using-environment-variables)" and the [WORKDIR reference](https://docs.docker.com/engine/reference/builder/#workdir) in the Docker documentation.

#### ENTRYPOINT

If you define `entrypoint` in an action's metadata file, it will override the `ENTRYPOINT` defined in the `Dockerfile`. For more information, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)."

The Docker `ENTRYPOINT` instruction has a _shell_ form and _exec_ form. The Docker `ENTRYPOINT` documentation recommends using the _exec_ form of the `ENTRYPOINT` instruction. For more information about _exec_ and _shell_ form, see the [ENTRYPOINT reference](https://docs.docker.com/engine/reference/builder/#entrypoint) in the Docker documentation.

If you configure your container to use the _exec_ form of the `ENTRYPOINT` instruction, the `args` configured in the action's metadata file won't run in a command shell. If the action's `args` contain an environment variable, the variable will not be substituted. For example, using the following _exec_ format will not print the value stored in `$GITHUB_SHA`, but will instead print `"$GITHUB_SHA"`.

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 If you want variable substitution, then either use the _shell_ form or execute a shell directly. For example, using the following _exec_ format, you can execute a shell to print the value stored in the `GITHUB_SHA` environment variable.

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 To supply `args` defined in the action's metadata file to a Docker container that uses the _exec_ form in the `ENTRYPOINT`, we recommend creating a shell script called `entrypoint.sh` that you call from the `ENTRYPOINT` instruction:

##### Example *Dockerfile*

```dockerfile
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

##### Example *entrypoint.sh* file

Using the example Dockerfile above, {% data variables.product.product_name %} will send the `args` configured in the action's metadata file as arguments to `entrypoint.sh`. Add the `#!/bin/sh` [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) at the top of the `entrypoint.sh` file to explicitly use the system's [POSIX](https://en.wikipedia.org/wiki/POSIX)-compliant shell.

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

Your code must be executable. Make sure the `entrypoint.sh` file has `execute` permissions before using it in a workflow. You can modify the permission from your terminal using this command:
  ``` sh
  chmod +x entrypoint.sh
  ```

When an `ENTRYPOINT` shell script is not executable, you'll receive an error similar to this:

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

#### CMD

If you define `args` in the action's metadata file, `args` will override the `CMD` instruction specified in the `Dockerfile`. For more information, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)".

If you use `CMD` in your `Dockerfile`, follow these guidelines:

{% data reusables.github-actions.dockerfile-guidelines %}

### Supported Linux capabilities

{% data variables.product.prodname_actions %} supports the default Linux capabilities that Docker supports. Capabilities can't be added or removed. For more information about the default Linux capabilities that Docker supports, see "[Runtime privilege and Linux capabilities](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)" in the Docker documentation. To learn more about Linux capabilities, see "[Overview of Linux capabilities](http://man7.org/linux/man-pages/man7/capabilities.7.html)" in the Linux man-pages.
