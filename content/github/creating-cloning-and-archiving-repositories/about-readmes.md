---
title: About READMEs
intro: 'You can add a README file to your repository to tell other people why your project is useful, what they can do with your project, and how they can use it.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages/
  - /articles/relative-links-in-readmes/
  - /articles/about-readmes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

### About READMEs

You can add a README file to a repository to communicate important information about your project. A README, along with a repository license{% if currentVersion == "free-pro-team@latest" %}, contribution guidelines, and a code of conduct{% elsif enterpriseServerVersions contains currentVersion %} and contribution guidelines{% endif %}, communicates expectations for your project and helps you manage contributions.

For more information about providing guidelines for your project, see {% if currentVersion == "free-pro-team@latest" %}"[Adding a code of conduct to your project](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" and {% endif %}"[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)."

A README is often the first item a visitor will see when visiting your repository. README files typically include information on:
- What the project does
- Why the project is useful
- How users can get started with the project
- Where users can get help with your project
- Who maintains and contributes to the project

If you put your README file in your repository's root, `docs`, or hidden `.github` directory, {% data variables.product.product_name %} will recognize and automatically surface your README to repository visitors.

![Main page of the github/scientist repository and its README file](/assets/images/help/repository/repo-with-readme.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21"%}

{% data reusables.profile.profile-readme %}

{% endif %}

![README file on your username/username repository](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

### Section links in README files and blob pages

Many projects use a table of contents at the start of a README to direct users to different sections of the file. {% data reusables.repositories.section-links %}

### Relative links and image paths in README files

{% data reusables.repositories.relative-links %}

### Further reading

- "[Adding a file to a repository](/articles/adding-a-file-to-a-repository)"
- 18F's "[Making READMEs readable](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)"
