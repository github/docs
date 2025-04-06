---
title: Creating workflow templates for your organization
shortTitle: Create workflow templates
intro: Learn how you can create workflow templates to help people in your team add new workflows more easily.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
  - /actions/learn-github-actions/creating-workflow-templates
  - /actions/learn-github-actions/creating-starter-workflows-for-your-organization
  - /actions/using-workflows/creating-starter-workflows-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.workflow-templates-categories %}

> [!NOTE]
> Because workflow templates require a public `.github` repository, they are not available for {% data variables.product.prodname_emus %}.

## Creating a workflow template

Workflow templates can be created by users with write access to the organization's _public_ `.github` repository. These can then be used by organization members who have permission to create workflows.

{% ifversion fpt %}
Workflow templates created by users can only be used to create workflows in public repositories. Organizations using {% data variables.product.prodname_ghe_cloud %} can also use workflow templates to create workflows in private repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/using-workflows/creating-starter-workflows-for-your-organization).
{% endif %}

{% note %}

**Note:** To avoid duplication among workflow templates you can call reusable workflows from within a workflow. This can help make your workflows easier to maintain. For more information, see "[AUTOTITLE](/actions/using-workflows/reusing-workflows)."

{% endnote %}

This procedure demonstrates how to create a workflow template and metadata file. The metadata file describes how the workflow templates will be presented to users when they are creating a new workflow.

1. If it doesn't already exist, create a new _public_ repository named `.github` in your organization.
1. Create a directory named `workflow-templates`.
1. Create your new workflow file inside the `workflow-templates` directory.

   If you need to refer to a repository's default branch, you can use the `$default-branch` placeholder. When a workflow is created the placeholder will be automatically replaced with the name of the repository's default branch.

   {% ifversion ghes %}
   {% note %}

   **Note:** The following values in the `runs-on` key are also treated as placeholders:

   * "ubuntu-latest" is replaced with "[ self-hosted ]"
   * "windows-latest" is replaced with "[ self-hosted, windows ]"
   * "macos-latest" is replaced with "[ self-hosted, macOS ]"

   {% endnote %}{% endif %}

   For example, this file named `octo-organization-ci.yml` demonstrates a basic workflow.

   ```yaml copy
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: {% data reusables.actions.action-checkout %}

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```

1. Create a metadata file inside the `workflow-templates` directory. The metadata file must have the same name as the workflow file, but instead of the `.yml` extension, it must be appended with `.properties.json`. For example, this file named `octo-organization-ci.properties.json` contains the metadata for a workflow file named `octo-organization-ci.yml`:

   ```json copy
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI workflow template.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```

   * `name` - **Required.** The name of the workflow. This is displayed in the list of available workflows.
   * `description` - **Required.** The description of the workflow. This is displayed in the list of available workflows.
   * `iconName` - **Optional.** Specifies an icon for the workflow that is displayed in the list of workflows. `iconName` can one of the following types:
     * An SVG file that is stored in the `workflow-templates` directory. To reference a file, the value must be the file name without the file extension. For example, an SVG file named `example-icon.svg` is referenced as `example-icon`.
     * An icon from {% data variables.product.prodname_dotcom %}'s set of [Octicons](https://primer.style/octicons/). To reference an octicon, the value must be `octicon <icon name>`. For example, `octicon smiley`.
   * `categories` - **Optional.** Defines the categories that the workflow is shown under. You can use category names from the following lists:
     * General category names from the [starter-workflows](https://github.com/actions/starter-workflows/blob/main/README.md#categories) repository.
     * Linguist languages from the list in the [linguist](https://github.com/github-linguist/linguist/blob/master/lib/linguist/languages.yml) repository.
     * Supported tech stacks from the list in the [starter-workflows](https://github.com/github-starter-workflows/repo-analysis-partner/blob/main/tech_stacks.yml) repository.

   * `filePatterns` - **Optional.** Allows the workflow to be used if the user's repository has a file in its root directory that matches a defined regular expression.

To add another workflow template, add your files to the same `workflow-templates` directory.

## Next steps

To continue learning about {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/learn-github-actions/using-starter-workflows)."
