---
title: Creating a default community health file
intro: 'You can create default community health files, such as CONTRIBUTING and CODE_OF_CONDUCT. Default files will be used for any repository owned by the account that does not contain its own file of that type.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Community health file
---

## About default community health files

You can add default community health files to a public repository called `.github`, in the root of the repository or in the `docs` or `.github` folders.

{% data variables.product.product_name %} will use and display default files for any repository owned by the account that does not have its own file of that type in any of the following places:
- the root of the repository
- the `.github` folder
- the `docs` folder

For example, anyone who creates an issue or pull request in a repository that does not have its own CONTRIBUTING file will see a link to the default CONTRIBUTING file. If a repository has any files in its own `.github/ISSUE_TEMPLATE` folder{% ifversion fpt or ghes or ghec %}, including issue templates or a _config.yml_ file,{% endif %} none of the contents of the default `.github/ISSUE_TEMPLATE` folder will be used.

Default files won’t appear in the file browser or Git history and are not included in clones, packages, or downloads of individual repositories because they are stored only in the `.github` repository.

## Supported file types

You can create defaults in your organization{% ifversion fpt or ghes or ghec %} or personal account{% endif %} for the following community health files:

Community health file | Description
--- | ---{% ifversion fpt or ghec %}
_CODE_OF_CONDUCT.md_ | A CODE_OF_CONDUCT file defines standards for how to engage in a community. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)."{% endif %}
_CONTRIBUTING.md_ | A CONTRIBUTING file communicates how people should contribute to your project. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)."{% ifversion discussion-category-forms %}
Discussion category forms | Discussion category forms customize the templates that are available for community members to use when they open new discussions in your repository. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/creating-discussion-category-forms)."{% endif %}{% ifversion fpt or ghec %}
_FUNDING.yml_ | A FUNDING file displays a sponsor button in your repository to increase the visibility of funding options for your open source project. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)."{% endif %}
_GOVERNANCE.md_ | A GOVERNANCE file lets people know about how your project is governed. For example, it might discuss project roles and how decisions are made.
Issue and pull request templates{% ifversion fpt or ghes or ghec %} and _config.yml_{% endif %} | Issue and pull request templates customize and standardize the information you'd like contributors to include when they open issues and pull requests in your repository. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."{% ifversion fpt or ghes or ghec %}
`SECURITY.md` | A SECURITY file gives instructions for how to report a security vulnerability in your project. For more information, see "[AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository)."{% endif %}
_SUPPORT.md_ | A SUPPORT file lets people know about ways to get help with your project. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-support-resources-to-your-project)."

You cannot create a default license file. License files must be added to individual repositories so the file will be included when a project is cloned, packaged, or downloaded.

## Creating a repository for default files

{% data reusables.repositories.create_new %}
1. Use the **Owner** drop-down menu, and select the organization{% ifversion fpt or ghes or ghec %} or personal account{% endif %} you want to create default files for.
   ![Screenshot of the owner menu for a new {% data variables.product.prodname_dotcom %} repository. The menu shows two options, octocat and github.](/assets/images/help/repository/create-repository-owner.png)
1. In the "Repository name" field, type **.github**.
1. Optionally, in the "Description" field, type a description.
1. Make sure the repository status is set to **Public**. A repository for default files cannot be private.
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
1. In the repository, create one of the supported community health files. Issue templates{% ifversion fpt or ghes or ghec %} and their configuration file{% endif %} must be in a folder called `.github/ISSUE_TEMPLATE`. All other supported files may be in the root of the repository, the `.github` folder, or the `docs` folder. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."
