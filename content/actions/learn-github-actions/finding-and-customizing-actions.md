---
title: Finding and customizing actions
shortTitle: Find and customize actions
intro: 'Actions are the building blocks that power your workflow. A workflow can contain actions created by the community, or you can create your own actions directly within your application''s repository. This guide will show you how to discover, use, and customize actions.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

The actions you use in your workflow can be defined in:

- The same repository as your workflow file{% ifversion internal-actions %}
- An internal repository within the same enterprise account that is configured to allow access to workflows{% endif %}
- Any public repository
- A published Docker container image on Docker Hub

{% data variables.product.prodname_marketplace %} is a central location for you to find actions created by the {% data variables.product.prodname_dotcom %} community.{% ifversion fpt or ghec %} [{% data variables.product.prodname_marketplace %} page](https://github.com/marketplace/actions/) enables you to filter for actions by category. {% endif %}

{% data reusables.actions.enterprise-marketplace-actions %}

{% ifversion fpt or ghec %}

## Browsing Marketplace actions in the workflow editor

You can search and browse actions directly in your repository's workflow editor. From the sidebar, you can search for a specific action, view featured actions, and browse featured categories. You can also view the number of stars an action has received from the {% data variables.product.prodname_dotcom %} community.

1. In your repository, browse to the workflow file you want to edit.
1. In the upper right corner of the file view, to open the workflow editor, click {% octicon "pencil" aria-label="Edit file" %}.
   ![Screenshot of a workflow file showing the header section. The pencil icon for editing files is highlighted with a dark orange outline.](/assets/images/help/repository/actions-edit-workflow-file.png)
1. To the right of the editor, use the {% data variables.product.prodname_marketplace %} sidebar to browse actions. Actions with the {% octicon "verified" aria-label="Creator verified by GitHub" %} badge indicate {% data variables.product.prodname_dotcom %} has verified the creator of the action as a partner organization.
   ![Screenshot of a workflow file in edit mode. The right sidebar shows Marketplace actions. A checkmark in a stamp icon, showing that the creator is verified by GitHub, is outlined in orange.](/assets/images/help/repository/actions-marketplace-sidebar.png)

## Adding an action to your workflow

You can add an action to your workflow by referencing the action in your workflow file.

You can view the actions referenced in your {% data variables.product.prodname_actions %} workflows as dependencies in the dependency graph of the repository containing your workflows. For more information, see “[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).”

{% data reusables.actions.actions-redirects-workflows %}

### Adding an action from {% data variables.product.prodname_marketplace %}

An action's listing page includes the action's version and the workflow syntax required to use the action. To keep your workflow stable even when updates are made to an action, you can reference the version of the action to use by specifying the Git or Docker tag number in your workflow file.

1. Navigate to the action you want to use in your workflow.
1. Click to view the full marketplace listing for the action.
1. Under "Installation", click {% octicon "copy" aria-label="Copy to clipboard" %} to copy the workflow syntax.
   ![Screenshot of the marketplace listing for an action. The "Copy to clipboard" icon for the action is highlighted with a dark orange outline.](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Paste the syntax as a new step in your workflow. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps)."
1. If the action requires you to provide inputs, set them in your workflow. For information on inputs an action might require, see "[AUTOTITLE](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)."

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### Adding an action from the same repository

If an action is defined in the same repository where your workflow file uses the action, you can reference the action with either the ‌`{owner}/{repo}@{ref}` or `./path/to/dir` syntax in your workflow file.

Example repository file structure:

```shell
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

Example workflow file:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - uses: {% data reusables.actions.action-checkout %}
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```

The `action.yml` file is used to provide metadata for the action. Learn about the content of this file in "[AUTOTITLE](/actions/creating-actions/metadata-syntax-for-github-actions)."

### Adding an action from a different repository

If an action is defined in a different repository than your workflow file, you can reference the action with the `{owner}/{repo}@{ref}` syntax in your workflow file.

The action must be stored in a public repository{% ifversion internal-actions %} or an internal repository that is configured to allow access to workflows. For more information, see "[AUTOTITLE](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)."{% else %}.{% endif %}

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: {% data reusables.actions.action-setup-node %}
```

### Referencing a container on Docker Hub

If an action is defined in a published Docker container image on Docker Hub, you must reference the action with the `docker://{image}:{tag}` syntax in your workflow file. To protect your code and data, we strongly recommend you verify the integrity of the Docker container image from Docker Hub before using it in your workflow.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

For some examples of Docker actions, see the [Docker-image.yml workflow](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml) and "[AUTOTITLE](/actions/creating-actions/creating-a-docker-container-action)."

## Using release management for your custom actions

The creators of a community action have the option to use tags, branches, or SHA values to manage releases of the action. Similar to any dependency, you should indicate the version of the action you'd like to use based on your comfort with automatically accepting updates to the action.

You will designate the version of the action in your workflow file. Check the action's documentation for information on their approach to release management, and to see which tag, branch, or SHA value to use.

{% note %}

**Note:** We recommend that you use a SHA value when using third-party actions. However, it's important to note {% data variables.product.prodname_dependabot %} will only create {% data variables.product.prodname_dependabot_alerts %} for vulnerable {% data variables.product.prodname_actions %} that use semantic versioning. For more information, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)" and "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

{% endnote %}

### Using tags

Tags are useful for letting you decide when to switch between major and minor versions, but these are more ephemeral and can be moved or deleted by the maintainer. This example demonstrates how to target an action that's been tagged as `v1.0.1`:

```yaml
steps:
  - uses: actions/javascript-action@v1.0.1
```

### Using SHAs

If you need more reliable versioning, you should use the SHA value associated with the version of the action. SHAs are immutable and therefore more reliable than tags or branches. However, this approach means you will not automatically receive updates for an action, including important bug fixes and security updates. You must use a commit's full SHA value, and not an abbreviated value. {% data reusables.actions.actions-pin-commit-sha %} This example targets an action's SHA:

```yaml
steps:
  - uses: actions/javascript-action@a824008085750b8e136effc585c3cd6082bd575f
```

### Using branches

Specifying a target branch for the action means it will always run the version currently on that branch. This approach can create problems if an update to the branch includes breaking changes. This example targets a branch named `@main`:

```yaml
steps:
  - uses: actions/javascript-action@main
```

For more information, see "[AUTOTITLE](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)."

## Using inputs and outputs with an action

An action often accepts or requires inputs and generates outputs that you can use. For example, an action might require you to specify a path to a file, the name of a label, or other data it will use as part of the action processing.

To see the inputs and outputs of an action, check the `action.yml` or `action.yaml` in the root directory of the repository.

In this example `action.yml`, the `inputs` keyword defines a required input called `file-path`, and includes a default value that will be used if none is specified. The `outputs` keyword defines an output called `results-file`, which tells you where to locate the results.

```yaml
name: "Example"
description: "Receives file and generates output"
inputs:
  file-path: # id of input
    description: "Path to test script"
    required: true
    default: "test-file.js"
outputs:
  results-file: # id of output
    description: "Path to results file"
```

{% ifversion ghae %}

## Using the actions included with {% data variables.product.prodname_ghe_managed %}

By default, you can use most of the official {% data variables.product.prodname_dotcom %}-authored actions in {% data variables.product.prodname_ghe_managed %}. For more information, see "[AUTOTITLE](/admin/github-actions/using-github-actions-in-github-ae/using-actions-in-github-ae)."
{% endif %}

## Next steps

To continue learning about {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/learn-github-actions/essential-features-of-github-actions)."
