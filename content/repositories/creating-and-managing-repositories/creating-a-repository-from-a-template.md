---
title: Creating a repository from a template
intro: You can generate a new repository with the same directory structure and files as an existing repository.
permissions: 'Anyone with read access to a template repository can create a repository from that template.'
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create from a template
---
## About repository templates

{% data reusables.repositories.about-template-repositories %} For more information about creation of a repository template, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)."

{% tip %}

**Tip**: You can also create a repository from a template using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

You can choose to include the directory structure and files from only the default branch of the template repository or to include all branches. Branches created from a template have unrelated histories, which means you cannot create pull requests or merge between the branches.

Creating a repository from a template is similar to forking a repository, but there are important differences:
* A new fork includes the entire commit history of the parent repository, while a repository created from a template starts with a single commit.
* Commits to a fork don't appear in your contributions graph, while commits to a repository created from a template do appear in your contribution graph.
* A fork can be a temporary way to contribute code to an existing project, while creating a repository from a template starts a new project quickly.

For more information about forks, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

## Creating a repository from a template

{% data reusables.repositories.navigate-to-repo %}
1. Above the file list, click **Use this template**.
{% ifversion fpt or ghec %}
1. Select **Create a new repository**.

   ![Screenshot of the "Use this template" button and the dropdown menu expanded to show the "Open in a codespace" option.](/assets/images/help/repository/use-this-template-button.png)

   {% note %}

   **Note:** Alternatively, you can open the template in a codespace and publish your work to a new repository later. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)."

   {% endnote %}
{% endif %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
1. Optionally, to include the directory structure and files from all branches in the template, and not just the default branch, select **Include all branches**.
{% data reusables.repositories.select-marketplace-apps %}
1. Click **Create repository from template**.
