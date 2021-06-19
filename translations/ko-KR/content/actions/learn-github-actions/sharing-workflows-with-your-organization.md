---
title: Sharing workflows with your organization
shortTitle: Sharing workflows with your organization
intro: 'Learn how you can use organization features to collaborate with your team, by sharing workflow templates, secrets, and self-hosted runners.'
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 개요

If you need to share workflows and other {% data variables.product.prodname_actions %} features with your team, then consider collaborating within a {% data variables.product.prodname_dotcom %} organization. An organization allows you to centrally store and manage secrets, artifacts, and self-hosted runners. You can also create workflow templates in the `.github` repository and share them with other users in your organization.

### Creating a workflow template

Workflow templates can be created by users with write access to the organization's `.github` repository. The templates can then be used by organization members who have permission to create workflows. Workflow templates can be used to create new workflows in an organizations' public repositories; to use templates to create workflows in private repositories, the organization must be part of an enterprise plan.

This procedure demonstrates how to create a workflow template and metadata file. The metadata file describes how the template is presented to users when they are creating a new workflow.

1. If it doesn't already exist, create a new public repository named `.github` in your organization.
2. Create a directory named `workflow-templates`.
3. Create your new workflow file inside the `workflow-templates` directory.

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
4. Create a metadata file inside the `workflow-templates` directory. The metadata file must have the same name as the workflow file, but instead of the `.yml` extension, it must be appended with `.properties.json`. For example, this file named `octo-organization-ci.properties.json` contains the metadata for a workflow file named `octo-organization-ci.yml`:
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

### Using a workflow template from your organization

This procedure demonstrates how a member of your organization can find and use a workflow template to create a new workflow. An organization's workflow templates can be used by anyone who is a member of the organization.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. If your repository already has existing workflows: In the upper-left corner, click **New workflow**. ![Create a new workflow](/assets/images/help/repository/actions-new-workflow.png)
1. Your organization's workflow templates are located in their own section titled "Workflows created by _organization name_". Under the name of the template you'd like to use, click **Set up this workflow**. ![Set up this workflow](/assets/images/help/settings/actions-create-starter-workflow.png)


### Sharing secrets within an organization

You can centrally manage your secrets within an organization, and then make them available to selected repositories. This also means that you can update a secret in one location, and have the change apply to all repository workflows that use the secret.

When creating a secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Click **New secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. Click **Add secret**.

### Share self-hosted runners within an organization

Organization admins can add their self-hosted runners to groups, and then create policies that control which repositories can access the group.

For more information, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."


### 다음 단계

To continue learning about {% data variables.product.prodname_actions %}, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)."
