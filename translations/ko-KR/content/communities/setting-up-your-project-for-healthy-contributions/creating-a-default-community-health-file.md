---
title: Creating a default community health file
intro: 'You can create default community health files, such as CONTRIBUTING and CODE_OF_CONDUCT. Default files will be used for any public repository owned by the account that does not contain its own file of that type.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Community
---

### About default community health files

You can add default community health files to the root of a public repository called `.github` that is owned by an organization{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}.

{% data variables.product.product_name %} will use and display default files for any public repository owned by the account that does not have its own file of that type in any of the following places:
- the root of the repository
- the `.github` folder
- the `docs` folder

For example, anyone who creates an issue or pull request in a public repository that does not have its own CONTRIBUTING file will see a link to the default CONTRIBUTING file. If a repository has any files in its own `.github/ISSUE_TEMPLATE` folder{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}, including issue templates or a *config.yml* file,{% endif %} none of the contents of the default `.github/ISSUE_TEMPLATE` folder will be used.

Default files are not included in clones, packages, or downloads of individual repositories because they are stored only in the `.github` repository.

### Supported file types

You can create defaults in your organization{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %} for the following community health files:

| Community health file                                                                                                                                                                                   | 설명                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                                                                                                                  | A CODE_OF_CONDUCT file defines standards for how to engage in a community. For more information, see "[Adding a code of conduct to your project](/articles/adding-a-code-of-conduct-to-your-project/)."{% endif %}
| *CONTRIBUTING.md*                                                                                                                                                                                       | A CONTRIBUTING file communicates how people should contribute to your project. For more information, see "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors/)."{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                                                                                                           | A FUNDING file displays a sponsor button in your repository to increase the visibility of funding options for your open source project. For more information, see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)."{% endif %}
| Issue and pull request templates{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and *config.yml*{% endif %} | Issue and pull request templates customize and standardize the information you'd like contributors to include when they open issues and pull requests in your repository. For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates/)."{% if currentVersion == "free-pro-team@latest" %}
| *SECURITY.md*                                                                                                                                                                                           | A SECURITY file gives instructions for how to responsibly report a security vulnerability in your project. For more information, see "[Adding a security policy to your repository](/articles/adding-a-security-policy-to-your-repository)."{% endif %}
| *SUPPORT.md*                                                                                                                                                                                            | A SUPPORT file lets people know about ways to get help with your project. For more information, see "[Adding support resources to your project](/articles/adding-support-resources-to-your-project/)."                                                                                                                                              |

You cannot create a default license file. License files must be added to individual repositories so the file will be included when a project is cloned, packaged, or downloaded.

### Creating a repository for default files

{% data reusables.repositories.create_new %}
2. Use the **Owner** drop-down menu, and select the organization{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %} you want to create default files for. ![Owner drop-down menu](/assets/images/help/repository/create-repository-owner.png)
3. Type **.github** as the name for your repository, and an optional description. ![Create repository field](/assets/images/help/repository/default-file-repository-name.png)
4. Make sure the repository status is set to **Public** (a repository for default files cannot be private). ![Radio buttons to select private or public status](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. In the repository, create one of the supported community health files. Issue templates{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and their configuration file{% endif %} must be in a folder called `.github/ISSUE_TEMPLATE`. All other supported files must be in the root of the repository. For more information, see "[Creating new files](/articles/creating-new-files/)."
