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

Default community health files are a set of predefined files that provide guidance and templates for maintaining a healthy and collaborative open source project. These files help you automate and standardize various aspects of your project's development and community interaction, promoting transparency, good practices, and collaboration.

You can add default community health files to a public repository called `.github` and {% data variables.product.github %} will use and display default files for any repository owned by the account that does not have its own file of that type in the following order:

* The `.github` folder
* The root of the repository
* The `docs` folder

If no corresponding file is found in the current repository, {% data variables.product.github %} will use the default file from the `.github` repository, following the same order of precedence.

For example, anyone who creates an issue or pull request in a repository that does not have its own `CONTRIBUTING.md` file will see a link to the default `CONTRIBUTING.md` from the `.github` repository. However, if a repository has any files in its own `.github/ISSUE_TEMPLATE` folder, such as issue templates or a `_config.yml` file, none of the contents of the default `.github/ISSUE_TEMPLATE` folder will be used. This allows repository maintainers to override the default files with specific templates or content on per-repository basis.

Storing the files in `.github` repository allows making changes to the defaults just in one place. Additionally, they won’t appear in the file browser or Git history of the individual repositories, and are not included in their clones, packages, or downloads.

{% ifversion fpt or ghec %}

As a repository maintainer, you can use the community standards checklist to see if your project meets the recommended community standards to help people use and contribute to your project. For more information, see [AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories).

{% endif %}

## Supported file types

You can create defaults in your organization or personal account for the following community health files:

| Community health file | Description |
| --- | --- |
|  {% ifversion fpt or ghec %} |
| _CODE_OF_CONDUCT.md_ | A CODE_OF_CONDUCT file defines standards for how to engage in a community. For more information, see [AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project). |
|  {% endif %} |
| _CONTRIBUTING.md_ | A CONTRIBUTING file communicates how people should contribute to your project. For more information, see [AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors). |
| Discussion category forms | Discussion category forms customize the templates that are available for community members to use when they open new discussions in your repository. For more information, see [AUTOTITLE](/discussions/managing-discussions-for-your-community/creating-discussion-category-forms). |
|  {% ifversion fpt or ghec %} |
| _FUNDING.yml_ | A FUNDING file displays a sponsor button in your repository to increase the visibility of funding options for your open source project. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository). |
|  {% endif %} |
| _GOVERNANCE.md_ | A GOVERNANCE file lets people know about how your project is governed. For example, it might discuss project roles and how decisions are made. |
| Issue and pull request templates and _config.yml_ | Issue and pull request templates customize and standardize the information you'd like contributors to include when they open issues and pull requests in your repository. For more information, see [AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates).<br /><br />If an issue template sets a label, that label must be created in your `.github` repository and any repositories where the template will be used. |
| _SECURITY.md_ | A SECURITY file gives instructions on how to report a security vulnerability in your project and description that hyperlinks the file. For more information, see [AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository). |
| _SUPPORT.md_ | A SUPPORT file lets people know about ways to get help with your project. For more information, see [AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-support-resources-to-your-project). |

You cannot create a default license file. License files must be added to individual repositories so the file will be included when a project is cloned, packaged, or downloaded.

## Creating a repository for default files

{% data reusables.repositories.create_new %}
1. Use the **Owner** drop-down menu, and select the organization or personal account you want to create default files for.
   ![Screenshot of the owner menu for a new {% data variables.product.prodname_dotcom %} repository. The menu shows two options, octocat and github.](/assets/images/help/repository/create-repository-owner.png)
1. In the "Repository name" field, type **.github**.
1. Optionally, in the "Description" field, type a description.
1. Make sure the repository status is set to **Public**. A repository for default files cannot be private.
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
1. In the repository, create one of the supported community health files. Issue templates and their configuration file must be in a folder called `.github/ISSUE_TEMPLATE`. All other supported files may be in the root of the repository, the `.github` folder, or the `docs` folder. For more information, see [AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files).
