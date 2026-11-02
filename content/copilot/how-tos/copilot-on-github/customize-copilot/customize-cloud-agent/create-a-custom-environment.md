---
title: Creating a custom environment for agents
shortTitle: Create a custom environment
intro: 'Run {% data variables.product.prodname_copilot_short %} sessions with your own tools and dependencies on a Linux machine or codespace.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
---

As an alternative to using {% data variables.product.prodname_actions %} or cloud sandboxes managed by {% data variables.product.github %}, you can provide a custom environment for {% data variables.product.prodname_copilot %} sessions. A custom environment is a Linux machine or codespace running the {% data variables.product.prodname_copilot_short %} host, `copilotd`.

You create the host and register it with your {% data variables.product.github %} account. You can then select it as an environment in a client that supports custom environments. Registration makes an existing host available to clients.

You need a {% data variables.product.prodname_copilot_short %} license and access to custom environments. You are responsible for the machine, its workspace and tools, and keeping the host running and up to date. Closing a client connection does not stop the host or the machine.

## Using a Linux machine

Use {% data variables.copilot.copilot_cli_short %} to run and register the host on a Linux machine.

### 1. Prepare the host

You need a Linux machine and npm or Homebrew to install the prerelease version of {% data variables.copilot.copilot_cli_short %}. For installation requirements and other installation methods, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).

1. On the machine you want to use, prepare the workspace and install the tools and dependencies that your agent sessions need.
1. Install the prerelease version of {% data variables.copilot.copilot_cli_short %} with npm:

   ```shell
   npm install -g @github/copilot@prerelease
   ```

   Alternatively, install it with Homebrew:

   ```shell
   brew install copilot-cli@prerelease
   ```

### 2. Register the host

The host registers as an environment owned by the account you authenticate with.

1. Sign in to {% data variables.product.prodname_dotcom_the_website %} and follow the authentication prompts:

   ```shell
   copilot login
   ```

1. Start {% data variables.copilot.copilot_cli_short %} so that your account settings and feature flags load, then exit the interactive session:

   ```shell
   copilot
   ```

1. Start the environment host. Replace `HOST-NAME` with a name that you will recognize in the environment selector.

   ```shell
   copilot --environment-host "HOST-NAME"
   ```

   The command starts the host and registers the machine under the name you chose. Keep the host running so that clients can connect to it.

### 3. Choose the environment

Connect from a client that supports selecting registered environments.

1. Sign in to the client with the same {% data variables.product.github %} account you used to register the host.
1. Open **Environments** and select the host by the name you registered.

   The client connects to the running host, where your agent sessions execute.

## Using {% data variables.product.prodname_github_codespaces %}

Use a development container feature to start and register the host automatically when your codespace starts. You need access to {% data variables.product.prodname_github_codespaces %}. To use the commands below, you also need an authenticated installation of {% data variables.product.prodname_cli %}.

### 1. Configure the codespace

The development container configuration determines how the host is installed.

1. In your repository, create or edit `.devcontainer/devcontainer.json` to add the host feature. For example:

   ```json
   {
     "image": "mcr.microsoft.com/devcontainers/base:ubuntu",
     "features": {
       "ghcr.io/github/copilot-host/copilotd:0": {}
     }
   }
   ```

1. Optionally, configure the feature for your environment. Use `:prerelease` instead of `:0` for the prerelease channel. To clone additional repositories, add a `repositories` option inside the feature's configuration object:

   ```json
   "ghcr.io/github/copilot-host/copilotd:0": {
     "repositories": "OWNER/REPOSITORY-1,OWNER/REPOSITORY-2"
   }
   ```

   Replace `OWNER/REPOSITORY-1` and `OWNER/REPOSITORY-2` with the owners and names of the repositories to clone.

### 2. Start and register the host

The feature starts `copilotd` and registers the codespace automatically when the container starts.

1. To create a new codespace, commit and push your development container configuration. Then create a codespace on that branch. Replace `OWNER/REPOSITORY` with the repository owner and name, and `BRANCH` with the branch containing your configuration.

   ```shell
   gh codespace create -r OWNER/REPOSITORY -b BRANCH
   ```

   For an existing codespace, rebuild its container instead. Replace `CODESPACE-NAME` with the name of your codespace.

   ```shell
   gh codespace rebuild -c CODESPACE-NAME
   ```

1. Wait for the container to start and the host to register.

### 3. Choose the codespace environment

Use a client that supports selecting registered environments. The token used to sign in to the client must include the `codespace` scope.

1. Sign in to the client with the {% data variables.product.github %} account that owns the codespace.
1. Open **Environments** and select the codespace.

   If the codespace is stopped, connecting wakes it and starts `copilotd` automatically.

To inspect the host logs, run the following command in the codespace:

```shell
tail -F /workspaces/.copilotd/logs/copilotd.log
```
