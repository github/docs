---
title: Pull Request erstellen
intro: 'Erstelle einen Pull Request, um Änderungen an einem Repository vorzuschlagen und um daran mitzuarbeiten. These changes are proposed in a *branch*, which ensures that the default branch only contains finished and approved work.'
redirect_from:
  - /articles/creating-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Jeder, der Leseberechtigungen für ein Repository besitzt, kann einen Pull Request erstellen. Du benötigst jedoch Schreibberechtigungen, um einen Branch zu erstellen. Wenn Du einen neuen Branch für Deinen Pull Request erstellen möchtest, aber keine Schreibberechtigung hast, kannst Du das Repository zunächst forken. Weitere Informationen findest Du unter „[Einen Pull Request von einem Fork erstellen](/articles/creating-a-pull-request-from-a-fork)“ und „
Informationen zu Forks</a.></p> 

Du kannst festlegen, in welchen Branch Du Deine Änderungen zusammenführen möchtest, wenn Du Deinen Pull Request erstellst. Pull Requests können nur zwischen zwei unterschiedlichen Branches geöffnet werden.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}



### Branch-Bereich und Ziel-Repository ändern

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



### Den Pull Request erstellen

{% tip %}

**Tipp**: Du kannst auch {% data variables.product.prodname_desktop %} verwenden, um einen Pull Request zu erstellen. Weitere Informationen findest Du unter „[Issue oder Pull Request erstellen](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)“ in der {% data variables.product.prodname_desktop %}-Dokumentation.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}

2. Wähle im Menü „Branch“ den Branch aus, der Deine Commits enthält. ![Branch-Dropdownmenü](/assets/images/help/pull_requests/branch-dropdown.png) 
   
   {% data reusables.repositories.new-pull-request %}

4. Wähle im _base_ (Basis) Branch-Dropdownmenü den Branch aus, in den Du Deine Änderungen zusammenführen möchtest. Wähle dann im _compare_ (vergleichen) Branch-Dropdownmenü den Themen-Branch aus, in dem Du die Änderungen vorgenommen hast. ![Dropdown-Menüs zur Auswahl von Basis- und Vergleichs-Branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) 
   
   {% data reusables.repositories.pr-title-description %}
   
   
   
   {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Nachdem Dein Pull Request geprüft wurde, kann er [in das Repository zusammengeführt werden](/articles/merging-a-pull-request).



### Weiterführende Informationen

- „[Einen Pull Request von einem Fork erstellen](/articles/creating-a-pull-request-from-a-fork)“
- „[Den Basis-Branch eines Pull Requests ändern](/articles/changing-the-base-branch-of-a-pull-request)“
- „[Issues und Pull Requests über die Seitenleiste zu einem Projektboard hinzufügen](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)“
