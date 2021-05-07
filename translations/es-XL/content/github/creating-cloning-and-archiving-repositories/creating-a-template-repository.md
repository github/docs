---
title: Creating a template repository
intro: 'You can make an existing repository a template, so you and others can generate new repositories with the same directory structure{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}, branches,{% endif %} and files.'
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: Anyone with admin permissions to a repository can make the repository a template.
topics:
  - Repositories
---

Anyone with admin permissions to a repository can make the repository a template.

To create a template repository, you must create a repository, then make the repository a template. For more information about creating a repository, see "[Creating a new repository](/articles/creating-a-new-repository)."

After you make your repository a template, anyone with access to the repository can generate a new repository with the same directory structure and files as your default branch.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} They can also choose to include all the other branches in your repository.{% endif %} For more information, see "[Creating a repository from a template](/articles/creating-a-repository-from-a-template)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Select **Template repository**.
  ![Checkbox to make a repository a template](/assets/images/help/repository/template-repository-checkbox.png)
