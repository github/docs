---
title: Adding an accessibility page to your repository
intro:  'Add an `ACCESSIBILITY.md` file to make your project''s accessibility information easy to find and give people a clear way to report barriers.'
versions:
  feature: accessibility-pages
shortTitle: Add an accessibility page
category:
  - Set up your project for contributions
---

When a repository contains an `ACCESSIBILITY.md` file, {% data variables.product.github %} displays an **Accessibility** tab on the repository overview and links to the page from the repository's **About** section.

{% data variables.product.github %} looks for the file in the `.github` directory, the repository root, and the `docs` directory, in that order. If the repository does not contain an accessibility page, it can inherit one from a repository named `.github` that is owned by the organization.

An accessibility page can describe your project's accessibility priorities, supported environments, known barriers, contributor expectations, reporting process, ownership, and maintenance.

{% ifversion fpt or ghec %}
## Adding an accessibility page from Community Standards

For a public repository, you can start with the accessibility page template.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
1. In the left sidebar, click **Community Standards**.
1. Under "Additional community file," find "Accessibility," then click **Add** or **Propose**.
1. Replace the instructions in the template with accessibility-related information for your project. The instructions are stored in comments and do not appear when GitHub renders the file.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
{% endif %}

## Creating an accessibility page manually

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type _ACCESSIBILITY.md_. To store the file in the `.github` or `docs` directory, type _.github/ACCESSIBILITY.md_ or _docs/ACCESSIBILITY.md_.
1. On the **Edit new file** tab, add accessibility-related information.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
