---
title: About READMEs
intro: 'You can add a README file to your repository to tell other people why your project is useful, what they can do with your project, and how they can use it.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About READMEs

{% data reusables.repositories.about-READMEs %}

For more information about providing guidelines for your project, see {% ifversion fpt or ghec %}"[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" and {% endif %}"[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions)."

A README is often the first item a visitor will see when visiting your repository. README files typically include information on:
- What the project does
- Why the project is useful
- How users can get started with the project
- Where users can get help with your project
- Who maintains and contributes to the project

If you put your README file in your repository's hidden `.github`, root, or `docs` directory, {% data variables.product.product_name %} will recognize and automatically surface your README to repository visitors.

If a repository contains more than one README file, then the file shown is chosen from locations in the following order: the `.github` directory, then the repository's root directory, and finally the `docs` directory.

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

## Auto-generated table of contents for README files

For the rendered view of any Markdown file in a repository, including README files, {% data variables.product.product_name %} will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the {% octicon "list-unordered" aria-label="Table of Contents" %}  menu icon at the top left of the rendered page.

![Screenshot of the README for a repository. In the upper-left corner, a dropdown menu, labeled with a list icon, is expanded to show a table of contents.](/assets/images/help/repository/readme-automatic-toc.png)

## Section links in README files and blob pages

{% data reusables.repositories.section-links %}

## Relative links and image paths in README files

{% data reusables.repositories.relative-links %}

## Wikis

A README should contain only the necessary information for developers to get started using and contributing to your project. Longer documentation is best suited for wikis. For more information, see "[AUTOTITLE](/communities/documenting-your-project-with-wikis/about-wikis)."

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)"
- 18F's "[Making READMEs readable](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)"
{%- ifversion fpt or ghec %}
- "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/adding-a-codespaces-badge)"
{%- endif %}
