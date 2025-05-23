---
title: Customizing the development environment for Copilot coding agent
shortTitle: Customize the agent environment
intro: "Learn how to customize {% data variables.product.prodname_copilot %}'s development environment with additional tools."
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /early-access/copilot/coding-agent/customizing-copilot-coding-agents-development-environment
---

> [!NOTE]
> {% data reusables.copilot.coding-agent.preview-note-text %}
>
> For more information about {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/about-assigning-tasks-to-copilot).

## About customizing {% data variables.copilot.copilot_coding_agent %}'s development environment

While working on a task, {% data variables.product.prodname_copilot_short %} has access to its own ephemeral development environment, powered by {% data variables.product.prodname_actions %}, where it can explore your code, make changes, execute automated tests and linters and more.

You can customize {% data variables.product.prodname_copilot_short %}'s environment by:

* [Preinstalling tools or dependencies in {% data variables.product.prodname_copilot_short %}'s environment](#preinstalling-tools-or-dependencies-in-copilots-environment).
* [Upgrading from standard {% data variables.product.prodname_dotcom %}-hosted {% data variables.product.prodname_actions %} runners to larger runners](#upgrading-to-larger-github-hosted-github-actions-runners).
* [Disabling or customizing the agent's firewall](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent).

## Preinstalling tools or dependencies in {% data variables.product.prodname_copilot_short %}'s environment

In its ephemeral development environment, {% data variables.product.prodname_copilot_short %} can build or compile your project and run automated tests, linters and other tools. To do this, it will need to install your project's dependencies.

{% data variables.product.prodname_copilot_short %} can discover and install these dependencies itself via a process of trial and error, but this can be slow and unreliable, given the non-deterministic nature of large language models (LLMs), and in some cases, it may be completely unable to download these dependencies—for example, if they are private.

Instead, you can preconfigure {% data variables.product.prodname_copilot_short %}'s environment before the agent starts by creating a special {% data variables.product.prodname_actions %} workflow file, located at `.github/workflows/copilot-setup-steps.yml` within your repository.

A `copilot-setup-steps.yml` file looks like a normal {% data variables.product.prodname_actions %} workflow file, but must contain a single `copilot-setup-steps` job. This job will be executed in {% data variables.product.prodname_actions %} before {% data variables.product.prodname_copilot_short %} starts working. For more information on {% data variables.product.prodname_actions %} workflow files, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions).

Here is a simple example of a `copilot-setup-steps.yml` file for a TypeScript project that clones the project, installs Node.js and downloads and caches the project's dependencies. You should customize this to fit your own project's language(s) and dependencies:

```yaml copy
name: "Copilot Setup Steps"

# Allow testing of the setup steps from your repository's "Actions" tab.
on: workflow_dispatch

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
* `container `
* `services`
* `snapshot`
* `timeout-minutes` (maximum value: `59`)

For more information on these options, see [AUTOTITLE](/actions/writing-workflows/workflow-syntax-for-github-actions#jobs).

Once you have created a `copilot-setup-steps.yml` file and merged it into your default branch, you can manually run the workflow from the repository's **Actions** tab to check that it works. For more information, see [AUTOTITLE](/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/manually-running-a-workflow).

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
> * {% data variables.copilot.copilot_coding_agent %} is only compatible with Ubuntu x86 Linux runners. Runners with Windows, macOS or other operating systems are not supported.
> * Self-hosted {% data variables.product.prodname_actions %} runners are not supported.

## Further reading

* [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent)
