---
title: Informationen zu Forks
intro: Ein Fork ist eine Kopie eines Repositorys, das Du verwaltest. Mit Forks kannst Du Änderungen an einem Projekt vornehmen, ohne dass sich dies auf das ursprüngliche Repository auswirkt. Du kannst Updates aus dem ursprünglichen Repository abrufen oder Änderungen mit Pull Requests an das Repository senden.
redirect_from:
  - /articles/about-forks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Das Forking eines Repositorys ist ähnlich wie das Kopieren eines Repositorys, mit zwei wesentlichen Unterschieden:

* Du kannst einen Pull Request verwenden, um Änderungen von Deiner benutzereigenen Fork zum ursprünglichen Repository, auch als *upstream* (vorgelagertes) Repository bekannt, vorzuschlagen.
* Du kannst Änderungen vom vorgelagerten Repository auf Deinen lokalen Fork übertragen, indem Du Deinen Fork mit dem vorgelagerten Repository synchronisierst.

{% data reusables.repositories.you-can-fork %}

{% data reusables.repositories.desktop-fork %}

Das Löschen eines Forks wird das ursprüngliche vorgelagerte Repository nicht löschen. You can make any changes you want to your fork—add collaborators, rename files, generate {% data variables.product.prodname_pages %}—with no effect on the original.{% if currentVersion == "free-pro-team@latest" %} You cannot restore a deleted forked repository. Weitere Informationen findest Du unter „[Ein gelöschtes Repository wiederherstellen](/articles/restoring-a-deleted-repository)“.{% endif %}

In Open-Source-Projekten werden Forks oft verwendet, um mehrfach Ideen oder Änderungen durchzuspielen, bevor sie an das vorgelagerte Repository zurückgesendet werden. Wenn Du Änderungen in Deiner benutzereigenen Fork vornimmst und einen Pull Request öffnest, die Deine Arbeit mit dem vorgelagerten Repository vergleicht, kannst Du jedem mit Push-Zugriff auf das vorgelagerte Repository die Erlaubnis geben, Änderungen in deinen Pull-Request-Branch zu übertragen. Dies beschleunigt die Zusammenarbeit, indem es den Repository-Betreuern erlaubt, Commits zu erstellen oder Tests vor dem Zusammenführen lokal aus einer benutzereigenen Fork zu Deinem Pull-Request-Branch auszuführen. Du kannst keine Push-Berechtigungen an eine Fork geben, die einer Organisation gehört.

{% data reusables.repositories.private_forks_inherit_permissions %}

If you want to create a new repository from the contents of an existing repository but don't want to merge your changes upstream in the future, you can duplicate the repository or, if the repository is a template, use the repository as a template. Weitere Informationen finden Sie unter „[Ein Repository duplizieren](/articles/duplicating-a-repository)“ und „[Ein Repository anhand einer Vorlage erstellen](/articles/creating-a-repository-from-a-template)“.

### Weiterführende Informationen

- „[Informationen zu gemeinschaftlichen Entwicklungsmodellen](/articles/about-collaborative-development-models)“
- „[Einen Pull Request von einem Fork erstellen](/articles/creating-a-pull-request-from-a-fork)“
- [Open Source Guides](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
