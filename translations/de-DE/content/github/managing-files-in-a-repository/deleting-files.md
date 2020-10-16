---
title: Dateien löschen
intro: 'Sie können jede beliebige Datei in Ihren Repositorys auf {% data variables.product.product_name %} löschen.'
redirect_from:
  - /articles/deleting-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tipp:** Wenn Du versuchst, eine Datei in einem Repository zu löschen, zu dem Du keinen Zugriff hast, erstellen wir einen Fork des Projekts unter Deinem Benutzerkonto und helfen Dir nach dem Commit Deiner Änderung, einen [Pull Request](/articles/about-pull-requests) an das Original-Repository zu senden.

{% endtip %}

1. Navigiere zu der Datei in Deinem Repository, die Du löschen möchtest.
2. At the top of the file, click
{% octicon "trashcan" aria-label="The trashcan icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% danger %}

**Achtung:** Da es sich bei Git um ein Quellcode-Verwaltungssystem handelt, ist immer eine Sicherung vorhanden, falls Du die Datei zu einem späteren Zeitpunkt wiederherstellen musst. Wenn Du aus irgendeinem Grund eine Datei *wirklich* **komplett** aus einem Repository entfernen musst, weil beispielsweise eine vertrauliche Datei versehentlich freigegeben wurde, befolge die Anweisungen in [unserem Artikel zum Löschen vertraulicher Daten](/articles/removing-sensitive-data-from-a-repository).

{% enddanger %}
