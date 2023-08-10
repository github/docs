---
title: Best practices for repositories
shortTitle: Best practices
intro: Learn how to use repositories most effectively.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## Create a README file

To make it easier for people to understand and navigate your work, we recommend that you create a README file for every repository.

{% data reusables.repositories.about-READMEs %} For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."

## Favor branching over forking

To streamline collaboration, we recommend that regular collaborators work from a single repository, creating pull requests between branches instead of between repositories. Forking is best suited for accepting contributions from people that are unaffiliated with a project, such as open-source contributors.

To maintain quality of important branches, such as `main`, while using a branching workflow, you can use protected branches with required status checks and pull request reviews. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

## Use {% data variables.large_files.product_name_long %}

To optimize performance, {% data variables.location.product_location %} limits the sizes of files allowed in repositories. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github)."

To track large files in a Git repository, we recommend using {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)."
