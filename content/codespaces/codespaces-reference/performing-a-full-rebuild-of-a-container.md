---
title: Performing a full rebuild of a container
intro: If you are low on disk space, or want to ensure your dev container configuration will work in new codespaces, you can perform a full rebuild of a container.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Full rebuilds
---

## About rebuilding a container

When you work in a codespace, your development environment is a Docker container that runs on a virtual machine. If you make changes to your dev container configuration from within a codespace, and you want to apply those changes to the current codespace, you need to rebuild the container.

By default, when you rebuild a container, {% data variables.product.prodname_github_codespaces %} will speed up the build process by reusing cached images from previous builds of the container. This is usually the quickest way to implement changes to your dev container configuration, for the following reasons.
- {% data variables.product.prodname_github_codespaces %} can reuse images in your cache rather than repulling them from container registries.
- The parts of your dev container configuration that define how the container is built, such as dev container features and Dockerfile instructions, may have already been implemented in image layers in your cache, so you won't need to wait for these processes to run again. (However, commands in your configuration that run after the container is built, such as `onCreateCommand`, will run again.)

Occasionally, you may want to perform a full rebuild of your container. With a full rebuild, {% data variables.product.prodname_github_codespaces %} cleans all Docker containers, images, and volumes from the cache, then rebuilds your container with newly pulled images. All the setup defined in your configuration will run again, generating new image layers. You may want to perform a full rebuild after many iterations of rebuilding your container with cached images, in situations such as the following.

- You want to ensure that the setup defined in your configuration is not dependent on cached images, and will run as required when someone creates a new codespace based on the configuration. For example, a dependency may have been removed from the base image since it was last pulled into your codespace.
- You want to free up the disk space used by your cache, for example if you are low on disk space or want to minimize storage charges. Your image cache might be using a significant amount of disk space if you've changed your base image multiple times, if you've made a large number of iterative changes to your configuration, or if you're running multiple containers with Docker Compose.

## Performing a full rebuild

You can perform a full rebuild in {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.command-pallette %}
1. Start typing "Rebuild" and select **Codespaces: Full Rebuild Container**.

   ![Screenshot of Full Rebuild Container command in the Command Pallette](/assets/images/help/codespaces/codespaces-rebuild-full.png)

## Persisting data over a full rebuild

Any files and folders contained in the `/workspaces` directory of your codespace are always persisted over a rebuild. You do not need to change any settings or add any configuration to retain the contents of this directory over a full rebuild.

If you want to preserve files outside the `/workspaces` directory over a full rebuild, you can create, at the desired location in the container, a symbolic link (symlink) to the persistent directory. For example, in your `/workspaces/.devcontainer` directory, you can create a `config` directory that will be preserved across a rebuild. You can then symlink the `config` directory and its contents as a `postCreateCommand` in your `devcontainer.json` file.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

In the example `postCreate.sh` file below, the contents of the `config` directory are symbolically linked to the home directory.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## Further reading
- [Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)