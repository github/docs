---
title: Creating a repository from a template
intro: You can generate a new repository with the same directory structure and files as an existing repository.
redirect_from:
  - /articles/creating-a-repository-from-a-template
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About repository templates

Anyone with read permissions to a template repository can create a repository from that template. For more information, see "[Creating a template repository](/articles/creating-a-template-repository)."

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create a repository from a template using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
You can choose to include the directory structure and files from only the default branch of the template repository or to include all branches.
{% endif %}

Creating a repository from a template is similar to forking a repository, but there are important differences:
- A new fork includes the entire commit history of the parent repository, while a repository created from a template starts with a single commit.
- Commits to a fork don't appear in your contributions graph, while commits to a repository created from a template do appear in your contribution graph.
- A fork can be a temporary way to contribute code to an existing project, while creating a repository from a template starts a new project quickly.

For more information about forks, see "[About forks](/articles/about-forks)."

### Creating a repository from a template

{% data reusables.repositories.navigate-to-repo %}
2. Above the file list, click **Use this template**. ![Use this template button](/assets/images/help/repository/use-this-template-button.png)
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
6. Optionally, to include the directory structure and files from all branches in the template, and not just the default branch, select **Include all branches**. ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
{% data reusables.repositories.select-marketplace-apps %}
8. Click **Create repository from template**.
