---
title: Best practices for repositories
shortTitle: Best practices
intro: Learn how to use repositories effectively and securely.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
---

## Create a README file

To make it easier for people to understand and navigate your work, we recommend that you create a README file for every repository.

{% data reusables.repositories.about-READMEs %} For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).

## Secure your repository

You should secure your repository using {% data variables.product.github %}'s available security features to protect your code from vulnerabilities, unauthorized access, and other potential security threats. At a minimum, you should enable the following features{% ifversion fpt or ghec %}, which are available for **free for public repositories**{% endif %}:

* **{% data variables.product.prodname_dependabot_alerts %}** notify you of security vulnerabilities in your project's dependency network, so that you can update the affected dependency to a more secure version.
* **{% data variables.product.prodname_secret_scanning_caps %}** scans your repository for secrets (such as API keys and tokens) and alerts you if a secret is found, so that you can remove the secret from your repository.
* **Push protection** prevents you (and your collaborators) from introducing secrets to the repository in the first place, by blocking pushes containing supported secrets.
* **{% data variables.product.prodname_code_scanning_caps %}** identifies vulnerabilities and errors in your repository's code, so that you can fix these issues early and prevent a vulnerability or error being exploited by malicious actors.

Additionally, you might also consider:

* Adding a `SECURITY.md` file to your repository. The `SECURITY.md` file provides instructions to collaborators on how to report security vulnerabilities found in your project and encourages responsible disclosure.{% ifversion fpt or ghec %}
* Enabling "Private vulnerability reporting" for the repository, which lets collaborators and security researchers privately disclose vulnerabilities found in your repository to you.{% endif %}

For more information, see [AUTOTITLE](/code-security/getting-started/quickstart-for-securing-your-repository).

## Favor branching over forking

To streamline collaboration, we recommend that regular collaborators work from a single repository, creating pull requests between branches instead of between repositories. Forking is best suited for accepting contributions from people that are unaffiliated with a project, such as open-source contributors.

To maintain quality of important branches, such as `main`, while using a branching workflow, you can use protected branches with required status checks and pull request reviews. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

## Use {% data variables.large_files.product_name_long %}

To optimize performance, {% data variables.product.prodname_dotcom %} limits the sizes of files allowed in repositories. For more information, see [AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github).

To track large files in a Git repository, we recommend using {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). For more information, see [AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage).
