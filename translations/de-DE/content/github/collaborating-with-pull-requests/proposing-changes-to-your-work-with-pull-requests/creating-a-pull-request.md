---
title: Pull Request erstellen
intro: 'Erstelle einen Pull Request, um Änderungen an einem Repository vorzuschlagen und um daran mitzuarbeiten. These changes are proposed in a *branch*, which ensures that the default branch only contains finished and approved work.'
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
---

If you want to create a new branch for your pull request and do not have write permissions to the repository, you can fork the repository first. Weitere Informationen findest Du unter „[Einen Pull Request von einem Fork erstellen](/articles/creating-a-pull-request-from-a-fork)“ und „
Informationen zu Forks</a.></p> 

Du kannst festlegen, in welchen Branch Du Deine Änderungen zusammenführen möchtest, wenn Du Deinen Pull Request erstellst. Pull Requests können nur zwischen zwei unterschiedlichen Branches geöffnet werden.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}



## Branch-Bereich und Ziel-Repository ändern

By default, pull requests are based on the parent repository's default branch. Weitere Informationen finden Sie unter „[Informationen zu Branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)“.

Wenn das standardmäßige übergeordnete Repository nicht korrekt ist, kannst Du über die Dropdownlisten sowohl das übergeordnete Repository als auch den Branch ändern. Du kannst über die Dropdownlisten auch Head- und Basis-Branches untereinander austauschen, um Diffs zwischen Referenzpunkten zu erstellen. Referenzen müssen hier Branch-Namen in Deinem GitHub-Repository sein.

![Branches für Pull-Request-Bearbeitung](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

Denke im Hinblick auf Branches daran, dass der *Basis-Branch* der Ort ist, **wo** Änderungen angewendet werden sollen, und der *Head-Branch* das enthält, **was** Du ändern möchtest.

Wenn Du das Basis-Repository änderst, änderst Du auch die Benachrichtigungen für den Pull Request. Jeder, der zum Basis-Repository pushen kann, erhält eine E-Mail-Benachrichtigung und bekommt den neuen Pull Request im Dashboard angezeigt, wenn er sich das nächste Mal anmeldet.

Wenn Du Informationen im Branch-Bereich änderst, werden die Vorschauen für „Commit“ (Commit) und „Files changed“ (Dateien geändert) aktualisiert, um Deinen neuen Bereich anzuzeigen.

{% tip %}

**Tips**:

- Über die Vergleichsansicht kannst Du Vergleiche über einen bestimmten Zeitraum einrichten. Weitere Informationen findest Du unter „[Commits vergleichen](/github/committing-changes-to-your-project/comparing-commits)."
- Projektbetreuer können eine Pull-Request-Vorlage für ein Repository hinzufügen. Vorlagen umfassen Aufforderungen für Informationen im Text eines Pull Requests. Weitere Informationen findest Du unter „[Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates)“

{% endtip %}



## Den Pull Request erstellen

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}

2. Wähle im Menü „Branch“ den Branch aus, der Deine Commits enthält. ![Branch-Dropdownmenü](/assets/images/help/pull_requests/branch-dropdown.png) 
   
   {% data reusables.repositories.new-pull-request %}

4. Wähle im _base_ (Basis) Branch-Dropdownmenü den Branch aus, in den Du Deine Änderungen zusammenführen möchtest. Wähle dann im _compare_ (vergleichen) Branch-Dropdownmenü den Themen-Branch aus, in dem Du die Änderungen vorgenommen hast. ![Dropdown-Menüs zur Auswahl von Basis- und Vergleichs-Branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) 
   
   {% data reusables.repositories.pr-title-description %}
   
   
   
   {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Nachdem Ihr Pull Request geprüft wurde, können Sie ihn [in das Repository mergen](/articles/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a pull request, use the `gh pr create` subcommand.



```shell
gh pr create
```


To assign a pull request to an individual, use the `--assignee` or `-a` flags. You can use `@me` to self-assign the pull request.



```shell
gh pr create --assignee "@octocat"
```


To specify the branch into which you want the pull request merged, use the `--base` or `-B` flags. To specify the branch that contains commits for your pull request, use the `--head` or `-H` flags.



```shell
gh pr create --base my-base-branch --head my-changed-branch
```


To include a title and body for the new pull request, use the `--title` and `--body` flags.



```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```


To mark a pull request as a draft, use the `--draft` flag.



```shell
gh pr create --draft
```


To add a labels or milestones to the new pull request, use the `--label` and `--milestone`  flags.



```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```


To add the new pull request to a specific project, use the `--project` flag.



```shell
gh pr create --project octocat-project
```


To assign an individual or team as reviewers, use the `--reviewer` flag.



```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```


To create the pull request in your default web browser, use the `--web` flag.



```shell
gh pr create --web
```


{% endcli %}

{% desktop %}

{% mac %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."
2. Klicke auf **Create Pull Request** (Pull-Request erstellen). {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}. ![The Create Pull Request button](/assets/images/help/desktop/mac-create-pull-request.png)

4. On {% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes. ![Dropdown-Menüs zur Auswahl von Basis- und Vergleichs-Branches](/assets/images/help/desktop/base-and-compare-branches.png) 
   
   {% data reusables.repositories.pr-title-description %}
   
   
   
   {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."
2. Klicke auf **Create Pull Request** (Pull-Request erstellen). {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}. ![The Create Pull Request button](/assets/images/help/desktop/windows-create-pull-request.png)

3. On {% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes. ![Dropdown-Menüs zur Auswahl von Basis- und Vergleichs-Branches](/assets/images/help/desktop/base-and-compare-branches.png) 
   
   {% data reusables.repositories.pr-title-description %}
   
   
   
   {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt %}

{% codespaces %}

1. Once you've committed changes to your local copy of the repository, click the **Create Pull Request** icon. ![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-pr-button.png)  

1. Check that the local branch and repository you're merging from, and the remote branch and repository you're merging into, are correct. Then give the pull request a title and a description. ![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-pr.png)

1. Klicke auf **Create** (Erstellen).

For more information on creating pull requests in {% data variables.product.prodname_codespaces %}, see "[Using Codespaces for pull requests](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests)."

{% endcodespaces %}

{% endif %}


## Weiterführende Informationen

- „[Einen Pull Request von einem Fork erstellen](/articles/creating-a-pull-request-from-a-fork)“
- „[Den Basis-Branch eines Pull Requests ändern](/articles/changing-the-base-branch-of-a-pull-request)“
- „[Issues und Pull Requests über die Seitenleiste zu einem Projektboard hinzufügen](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)“
- „[Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)“
- "[Assigning issues and pull requests to other GitHub users](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[Writing on GitHub](/github/writing-on-github)"
