---
title: Customizing the development environment for GitHub Copilot coding agent
shortTitle: Customize the agent environment
intro: 'Learn how to customize {% data variables.product.prodname_copilot %}''s development environment with additional tools.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /early-access/copilot/coding-agent/customizing-copilot-coding-agents-development-environment
  - /copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/customizing-the-development-environment-for-copilot-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/customize-the-agent-environment
  - /copilot/how-tos/agents/coding-agent/customize-the-agent-environment
contentType: how-tos
category: 
  - Configure Copilot
---

## About customizing {% data variables.copilot.copilot_coding_agent %}'s development environment

While working on a task, {% data variables.product.prodname_copilot_short %} has access to its own ephemeral development environment, powered by {% data variables.product.prodname_actions %}, where it can explore your code, make changes, execute automated tests and linters and more.

You can customize {% data variables.product.prodname_copilot_short %}'s environment to:

* [Preinstall tools or dependencies in {% data variables.product.prodname_copilot_short %}'s environment](#preinstalling-tools-or-dependencies-in-copilots-environment)
* [Set environment variables in {% data variables.product.prodname_copilot_short %}'s environment](#setting-environment-variables-in-copilots-environment)
* [Upgrade from standard {% data variables.product.github %}-hosted {% data variables.product.prodname_actions %} runners to larger runners](#upgrading-to-larger-github-hosted-github-actions-runners)
* [Run on your ARC-based {% data variables.product.prodname_actions %} self-hosted runners](#using-self-hosted-github-actions-runners-with-arc)
* [Enable Git Large File Storage (LFS)](#enabling-git-large-file-storage-lfs)
* [Disable or customize the agent's firewall](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent).

## Preinstalling tools or dependencies in {% data variables.product.prodname_copilot_short %}'s environment

In its ephemeral development environment, {% data variables.product.prodname_copilot_short %} can build or compile your project and run automated tests, linters and other tools. To do this, it will need to install your project's dependencies.

{% data variables.product.prodname_copilot_short %} can discover and install these dependencies itself via a process of trial and error, but this can be slow and unreliable, given the non-deterministic nature of large language models (LLMs), and in some cases, it may be completely unable to download these dependencies—for example, if they are private.

Instead, you can preconfigure {% data variables.product.prodname_copilot_short %}'s environment before the agent starts by creating a special {% data variables.product.prodname_actions %} workflow file, located at `.github/workflows/copilot-setup-steps.yml` within your repository.

A `copilot-setup-steps.yml` file looks like a normal {% data variables.product.prodname_actions %} workflow file, but must contain a single `copilot-setup-steps` job. This job will be executed in {% data variables.product.prodname_actions %} before {% data variables.product.prodname_copilot_short %} starts working. For more information on {% data variables.product.prodname_actions %} workflow files, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions).

> [!NOTE]
> The `copilot-setup-steps.yml` workflow won't trigger unless it's present on your default branch.

Here is a simple example of a `copilot-setup-steps.yml` file for a TypeScript project that clones the project, installs Node.js and downloads and caches the project's dependencies. You should customize this to fit your own project's language(s) and dependencies:

```yaml copy
name: "Copilot Setup Steps"

# Automatically run the setup steps when they are changed to allow for easy validation, and
# allow manual testing through the repository's "Actions" tab
on:
  workflow_dispatch:
  push:
    paths:
      - .github/workflows/copilot-setup-steps.yml
  pull_request:
    paths:
      - .github/workflows/copilot-setup-steps.yml

jobs:
  # The job MUST be called `copilot-setup-steps` or it will not be picked up by Copilot.
  copilot-setup-steps:
    runs-on: ubuntu-latest

    # Set the permissions to the lowest permissions possible needed for your steps.
    # Copilot will be given its own token for its operations.
    permissions:
      # If you want to clone the repository as part of your setup steps, for example to install dependencies, you'll need the `contents: read` permission. If you don't clone the repository in your setup steps, Copilot will do this for you automatically after the steps complete.
      contents: read

    # You can define any steps you want, and they will run before the agent starts.
    # If you do not check out your code, Copilot will do this for you.
    steps:
      - name: Checkout code
        uses: {% data reusables.actions.action-checkout %}

      - name: Set up Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: "20"
          cache: "npm"

      - name: Install JavaScript dependencies
        run: npm ci
```

In your `copilot-setup-steps.yml` file, you can only customize the following settings of the `copilot-setup-steps` job. If you try to customize other settings, your changes will be ignored.

* `steps` (see above)
* `permissions` (see above)
* `runs-on` (see below)
* `services`
* `snapshot`
* `timeout-minutes` (maximum value: `59`)

For more information on these options, see [AUTOTITLE](/actions/writing-workflows/workflow-syntax-for-github-actions#jobs).

Any value that is set for the `fetch-depth` option of the `actions/checkout` action will be overridden to allow the agent to rollback commits upon request, while mitigating security risks. For more information, see [`actions/checkout/README.md`](https://github.com/actions/checkout/blob/main/README.md).

Your `copilot-setup-steps.yml` file will automatically be run as a normal {% data variables.product.prodname_actions %} workflow when changes are made, so you can see if it runs successfully. This will show alongside other checks in a pull request where you create or modify the file.

Once you have merged the yml file into your default branch, you can manually run the workflow from the repository's **Actions** tab at any time to check that everything works as expected. For more information, see [AUTOTITLE](/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/manually-running-a-workflow).

When {% data variables.product.prodname_copilot_short %} starts work, your setup steps will be run, and updates will show in the session logs. See [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/tracking-copilots-sessions).

If any setup step fails by returning a non-zero exit code, {% data variables.product.prodname_copilot_short %} will skip the remaining setup steps and begin working with the current state of its development environment.

## Setting environment variables in {% data variables.product.prodname_copilot_short %}'s environment

You may want to set environment variables in {% data variables.product.prodname_copilot_short %}'s environment to configure or authenticate tools or dependencies that it has access to.

To set an environment variable for {% data variables.product.prodname_copilot_short %}, create a {% data variables.product.prodname_actions %} variable or secret in the `copilot` environment. If the value contains sensitive information, for example a password or API key, it's best to use a {% data variables.product.prodname_actions %} secret.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. Click the `copilot` environment.
1. To add a secret, under "Environment secrets," click **Add environment secret**. To add a variable, under "Environment variables," click **Add environment variable**.
1. Fill in the "Name" and "Value" fields, and then click **Add secret** or **Add variable** as appropriate.

## Upgrading to larger {% data variables.product.prodname_dotcom %}-hosted {% data variables.product.prodname_actions %} runners

By default, {% data variables.product.prodname_copilot_short %} works in a standard {% data variables.product.prodname_actions %} runner with limited resources.

You can choose instead to use larger runners with more advanced features—for example more RAM, CPU and disk space and advanced networking controls. You may want to upgrade to a larger runner if you see poor performance—for example when downloading dependencies or running tests. For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners).

Before {% data variables.product.prodname_copilot_short %} can use larger runners, you must first add one or more larger runners and then configure your repository to use them. See [AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners). Once you have done this, you can use the `copilot-setup-steps.yml` file to tell {% data variables.product.prodname_copilot_short %} to use the larger runners.

To use larger runners, set the `runs-on` step of the `copilot-setup-steps` job to the label and/or group for the larger runners you want {% data variables.product.prodname_copilot_short %} to use. For more information on specifying larger runners with `runs-on`, see [AUTOTITLE](/actions/using-github-hosted-runners/running-jobs-on-larger-runners).

```yaml
# ...

jobs:
  copilot-setup-steps:
    runs-on: ubuntu-4-core
    # ...
```

> [!NOTE]
> * {% data variables.copilot.copilot_coding_agent %} is only compatible with Ubuntu x64 Linux runners. Runners with Windows, macOS or other operating systems are not supported.

## Using self-hosted {% data variables.product.prodname_actions %} runners with ARC

You can run {% data variables.copilot.copilot_coding_agent %} on self-hosted runners powered by ARC (Actions Runner Controller). You must first set up ARC-managed scale sets in your environment. For more information on ARC, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller).

> [!WARNING]
> ARC is the only officially supported solution for self-hosting {% data variables.copilot.copilot_coding_agent %}. For security reasons, we do not recommend using non-ARC self-hosted runners with {% data variables.copilot.copilot_coding_agent %}.

> [!NOTE]
> {% data variables.copilot.copilot_coding_agent %} is only compatible with Ubuntu x64 Linux runners. Runners with Windows, macOS or other operating systems are not supported.

1. Configure network security controls for your {% data variables.product.prodname_actions %} runners to ensure that {% data variables.copilot.copilot_coding_agent %} does not have open access to your network or the public internet. 

    You must configure your firewall to allow connections to the [standard hosts required for {% data variables.product.prodname_actions %} self-hosted runners](/actions/reference/runners/self-hosted-runners#accessible-domains-by-function), plus the following hosts:

    * `api.githubcopilot.com`
    * `uploads.github.com`
    * `user-images.githubusercontent.com`

1. Disable {% data variables.copilot.copilot_coding_agent %}'s integrated firewall in your repository settings. The firewall is not compatible with self-hosted runners. Unless this is disabled, use of {% data variables.copilot.copilot_coding_agent %} will be blocked. For more information, see [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent).
1. In your `copilot-setup-steps.yml` file, set the `runs-on` attribute to your ARC-managed scale set name:

   ```yaml
   # ...

   jobs:
     copilot-setup-steps:
       runs-on: arc-scale-set-name
       # ...
   ```

1. If you want to configure a proxy server for {% data variables.copilot.copilot_coding_agent %}'s connections to the internet, configure the following environment variables as appropriate:

    {% data reusables.actions.actions-proxy-environment-variables-table %}
    | `ssl_cert_file`    | The path to the SSL certificate presented by your proxy server. You will need to configure this if your proxy intercepts SSL connections. | `/path/to/key.pem`                               |
    | `node_extra_ca_certs`    | The path to the SSL certificate presented by your proxy server. You will need to configure this if your proxy intercepts SSL connections. | `/path/to/key.pem`                               |

    You can set these environment variables by following the [instructions above](#setting-environment-variables-in-copilots-environment), or by baking the environment variables into your custom runner image. For more information on building a custom image, see [AUTOTITLE](/actions/concepts/runners/actions-runner-controller#creating-your-own-runner-image).

## Enabling Git Large File Storage (LFS)

If you use Git Large File Storage (LFS) to store large files in your repository, you will need to customize {% data variables.product.prodname_copilot_short %}'s environment to install Git LFS and fetch LFS objects.

To enable Git LFS, add a `actions/checkout` step to your `copilot-setup-steps` job with the `lfs` option set to `true`.

```yaml copy
# ...

jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest
    permissions:
      contents: read # for actions/checkout
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          lfs: true
```

## Further reading

* [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent)
