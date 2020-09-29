---
title: Informationen zu Forks
intro: 'Ein Fork ist eine Kopie eines Repositorys, das Du verwaltest. Mit Forks kannst Du Änderungen an einem Projekt vornehmen, ohne dass sich dies auf das ursprüngliche Repository auswirkt. Du kannst Updates aus dem ursprünglichen Repository abrufen oder Änderungen mit Pull Requests an das Repository senden.'
redirect_from:
  - /articles/about-forks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Das Forking eines Repositorys ist ähnlich wie das Kopieren eines Repositorys, mit zwei wesentlichen Unterschieden:

* Du kannst einen Pull Request verwenden, um Änderungen von Deiner benutzereigenen Fork zum ursprünglichen Repository, auch als *upstream* (vorgelagertes) Repository bekannt, vorzuschlagen.
* Du kannst Änderungen vom vorgelagerten Repository auf Deinen lokalen Fork übertragen, indem Du Deinen Fork mit dem vorgelagerten Repository synchronisierst.

{% data reusables.repositories.you-can-fork %}

{% data reusables.repositories.desktop-fork %}

Das Löschen eines Forks wird das ursprüngliche vorgelagerte Repository nicht löschen. Du kannst beliebige Änderungen an Deiner Fork vornehmen – Mitarbeiter hinzufügen, Dateien umbenennen, {% data variables.product.prodname_pages %} generieren –, ohne Auswirkungen auf das Original.{% if currentVersion == "free-pro-team@latest" %} Du kannst ein geforktes Repository nach dem Löschen nicht wiederherstellen. Weitere Informationen findest Du unter „[Ein gelöschtes Repository wiederherstellen](/articles/restoring-a-deleted-repository)“.{% endif %}

In Open-Source-Projekten werden Forks oft verwendet, um mehrfach Ideen oder Änderungen durchzuspielen, bevor sie an das vorgelagerte Repository zurückgesendet werden. Wenn Du Änderungen in Deiner benutzereigenen Fork vornimmst und einen Pull Request öffnest, die Deine Arbeit mit dem vorgelagerten Repository vergleicht, kannst Du jedem mit Push-Zugriff auf das vorgelagerte Repository die Erlaubnis geben, Änderungen in deinen Pull-Request-Branch zu übertragen. Dies beschleunigt die Zusammenarbeit, indem es den Repository-Betreuern erlaubt, Commits zu erstellen oder Tests vor dem Zusammenführen lokal aus einer benutzereigenen Fork zu Deinem Pull-Request-Branch auszuführen. Du kannst keine Push-Berechtigungen an eine Fork geben, die einer Organisation gehört.

{% data reusables.repositories.private_forks_inherit_permissions %}

Wenn Du ein neues Repository aus dem Inhalt eines bestehenden Repositorys erstellen möchtest, Deine Änderungen aber in Zukunft nicht mit dem vorgelagerten Repository zusammenführen möchtest, kannst Du das Repository duplizieren{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} oder, wenn das Repository eine Vorlage ist, das Repository als Vorlage verwenden{% endif %}. Weitere Informationen findest Du unter „[Ein Repository duplizieren](/articles/duplicating-a-repository)“{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} und „[Ein Repository anhand einer Vorlage erstellen](/articles/creating-a-repository-from-a-template)“{% endif %}.

### Weiterführende Informationen

- „[Informationen zu gemeinschaftlichen Entwicklungsmodellen](/articles/about-collaborative-development-models)“
- „[Einen Pull Request von einem Fork erstellen](/articles/creating-a-pull-request-from-a-fork)“
- [Open-Source-Leitfäden](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
