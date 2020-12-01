---
title: Eine Repository-Vorlage erstellen
intro: 'You can make an existing repository a template, so you and others can generate new repositories with the same directory structure{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}, branches,{% endif %} and files.'
permissions: Jeder, der über Administratorberechtigungen für ein Repository verfügt, kann das Repository zu einer Vorlage machen.
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**Note**: Your template repository cannot include files stored using {% data variables.large_files.product_name_short %}.

{% endnote %}

Um eine Repository-Vorlage zu erstellen, musst Du ein Repository erstellen und es anschließend zu einer Vorlage machen. Weitere Informationen zum Erstellen eines Repositorys findest Du unter „[Ein neues Repository erstellen](/articles/creating-a-new-repository).“

After you make your repository a template, anyone with access to the repository can generate a new repository with the same directory structure and files as your default branch.{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} They can also choose to include all the other branches in your repository.{% endif %} For more information, see "[Creating a repository from a template](/articles/creating-a-repository-from-a-template)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Wähle **Template repository** (Repository-Vorlage) aus. ![Kontrollkästchen zum Umwandeln eines Repositorys in eine Vorlage](/assets/images/help/repository/template-repository-checkbox.png)
