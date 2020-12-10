---
title: Ein „Issue“ (Problem) oder einen Pull-Request erstellen
intro: Du kannst ein „Issue“ (Problem) oder einen Pull-Request erstellen, um Änderungen an einem Projektarchiv vorzuschlagen und gemeinsam daran zu arbeiten.
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Jeder, der Leseberechtigungen für ein Repository besitzt, kann einen Pull Request erstellen. Du benötigst jedoch Schreibberechtigungen, um einen Branch zu erstellen.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
versions:
  free-pro-team: '*'
---

### About issues and pull requests

You can use issues to track ideas, bugs, tasks, and other information that's important to your project. You can create an issue in your project's repository with {% data variables.product.prodname_desktop %}. For more information about issues, see "[About issues](/github/managing-your-work-on-github/about-issues)."

After you create a branch and make changes to files in a project, you can create a pull request. With a pull request, you can propose, discuss, and iterate on changes before you merge the changes into the project. You can create a pull request in your project's repository with {% data variables.product.prodname_desktop %}. Weitere Informationen zu Pull Requests finden Sie unter „[Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)“.

### Vorrausetzungen

Before you create a pull request, you'll need to push changes to a branch on {% data variables.product.prodname_dotcom %}.
- Save and commit any changes on your local branch. Weitere Informationen findest Du unter „[Committen und überprüfen von Änderungen an Deinem Projekt](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)."
- Push your local commits to the remote repository. For more information, see "[Pushing changes to GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)."
- Publish your current branch to {% data variables.product.prodname_dotcom %}. For more information, see "[Managing branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)."

### Einen Issue erstellen

{% mac %}

1. In the menu bar, use the **Repository** drop-down menu, then click **Create Issue on {% data variables.product.prodname_dotcom %}**. ![Repository-Wert im Menü „Branch“](/assets/images/help/desktop/create-issue-mac.png)
2. Auf {% data variables.product.prodname_dotcom %} klickst Du **Get started** (Beginnen), um eine Issue-vorlage zu öffnen oder auf **Open a blank issue** (Leeres Issue öffnen). ![Optionen zum Erstellen eines neuen Issues](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. In the menu bar, use the **Repository** drop-down menu, then click **Create issue on {% data variables.product.prodname_dotcom %}**. ![Der Repository-Wert im Menü „Branch“](/assets/images/help/desktop/create-issue-windows.png)
2. Auf {% data variables.product.prodname_dotcom %} klickst Du **Get started** (Beginnen), um eine Issue-vorlage zu öffnen oder auf **Open a blank issue** (Leeres Issue öffnen). ![Optionen zum Erstellen eines neuen Issues](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Hinweis**: Wenn in Deinem aktuellen Repository Issue-Vorlagen nicht aktiviert sind, leitet Dich {% data variables.product.prodname_desktop %} zu einem leeren Issue auf {% data variables.product.prodname_dotcom %} weiter.

{% endnote %}

### Pull Request erstellen

{% mac %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."
2. Klicke auf **Create Pull Request** (Pull-Request erstellen). {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}. ![The Create Pull Request button](/assets/images/help/desktop/mac-create-pull-request.png)
4. On
{% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes.
  ![Dropdown-Menüs zur Auswahl von Basis- und Vergleichs-Branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."
2. Klicke auf **Create Pull Request** (Pull-Request erstellen). {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}. ![The Create Pull Request button](/assets/images/help/desktop/windows-create-pull-request.png)
3. On
{% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes.
  ![Dropdown-Menüs zur Auswahl von Basis- und Vergleichs-Branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

### Weiterführende Informationen
- "[Issue](/github/getting-started-with-github/github-glossary#issue)" in the {% data variables.product.prodname_dotcom %} glossary
- „[Pull Request](/github/getting-started-with-github/github-glossary#pull-request)“ im {% data variables.product.prodname_dotcom %}-Glossar
- "[Base branch](/github/getting-started-with-github/github-glossary#base-branch)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Topic branch](/github/getting-started-with-github/github-glossary#topic-branch)" in the {% data variables.product.prodname_dotcom %} glossary
