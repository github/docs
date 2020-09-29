---
title: Sharing workflow templates within your organization
intro: You can create a standardized set of workflow templates specifically for your organization. Organization members can then use the templates when creating new workflows in the organizations repositories.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Workflow templates can be created by users with write access to the organization's `.github` repository. The templates can then be used by organization members who have permission to create workflows.

Workflow templates can be used to create new workflows in an organizations' public repositories; to use templates to create workflows in private repositories, the organization must be part of an enterprise or GitHub One plan.

### Creating a workflow template

This procedure demonstrates how to create a workflow template and metadata file. The metadata file describes how the template is presented to users when they are creating a new workflow.

1. If it doesn't already exist, create a new public repository named `.github` in your organization.
1. Create a directory named `workflow-templates`.
1. Create your new workflow file inside the `workflow-templates` directory.

   If you need to refer to a repository's default branch, you can use the `$default-branch` placeholder. When a workflow is created using your template, the placeholder will be automatically replaced with the name of the repository's default branch.

   For example, this file named `octo-organization-ci.yml` demonstrates a basic workflow.

   ```yaml
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
       - uses: actions/checkout@v2

       - name: Run a one-line script
         run: echo Hello from Octo Organization
   ```
1. Create a metadata file inside the `workflow-templates` directory. The metadata file must have the same name as the workflow file, but instead of the `.yml` extension, it must be appended with `.properties.json`. For example, this file named `octo-organization-ci.properties.json` contains the metadata for a workflow file named `octo-organization-ci.yml`:
   ```yaml
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
   * `name` - **Required.** The name of the workflow template. This is displayed in the list of available templates.
   * `description` - **Required.** The description of the workflow template. This is displayed in the list of available templates.
   * `iconName` - **Required.** Defines an icon for the workflow's entry in the template list. The `iconName` must be an SVG icon of the same name, and must be stored in the `workflow-templates` directory. For example, a SVG file named `example-icon.svg` is referenced as `example-icon`.
   * `categories` - **Optional.** Defines the language category of the workflow. When a user views the available templates, those templates that match the same language will feature more prominently. For information on the available language categories, see https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Optional.** Allows the template to be used if the user's repository has a file in its root directory that matches a defined regular expression.

To add another workflow template, add your files to the same `workflow-templates` directory. 예시:

![Workflow template files](/assets/images/help/images/workflow-template-files.png)

### Using a workflow template

This procedure demonstrates how a member of your organization can find and use a workflow template to create a new workflow. An organization's workflow templates can be used by anyone who is a member of the organization.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. If your repository already has existing workflows: In the upper-left corner, click **New workflow**. ![Create a new workflow](/assets/images/help/repository/actions-new-workflow.png)
1. Your organization's workflow templates are located in their own section titled "Workflows created by _organization name_". Under the name of the template you'd like to use, click **Set up this workflow**. ![Set up this workflow](/assets/images/help/settings/actions-create-starter-workflow.png)
