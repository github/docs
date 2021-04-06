---
title: Änderungsverlauf eines Wikis anzeigen
intro: 'Da es sich bei Wikis um Git-Repositorys handelt, ist jede von Dir vorgenommene Änderung ein Commit, den Du anzeigen kannst.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - community
---

### Wiki-Verlauf anzeigen

Zum Wiki-Verlauf zählen:
- Der Benutzer, der die Änderung durchgeführt hat
- Die von ihm bereitgestellte Commit-Mitteilung
- Der Zeitpunkt der Änderung

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Navigiere auf der Wiki-Seitenleiste zur Seite, deren Verlauf Du anzeigen möchtest.
4. Klicke im oberen Bereich des Wikis auf den Revisionslink. ![Wiki-Revisionslink](/assets/images/help/wiki/wiki_revision_link.png)

### Vorherigen Inhalt anzeigen

In der Wiki-Verlaufstabelle kannst Du auf einen [SHA-1-Hash](http://en.wikipedia.org/wiki/SHA-1) klicken (die Reihe von Buchstaben und Zahlen ganz rechts), um zu sehen, wie eine Wiki-Seite zu einem bestimmten Zeitpunkt aussah.

![Wiki-SHA-Nummer](/assets/images/help/wiki/wiki_sha_number.png)

### Zwei Revisionen vergleichen

1. Wähle zwei Zeilen aus, die verglichen werden sollen.
2. Klicke im oberen Bereich der Verlaufstabelle auf **Compare Revisions** (Revisionen vergleichen). ![Wiki-Schaltfläche „compare revisions" (Vergleichen von Revisionen)](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Du wirst ein Diff der Änderungen sehen, das aufzeigt, welche Zeilen hinzugefügt, entfernt und geändert wurden.

### Vorherige Änderungen rückgängig machen

Du kannst nur dann Änderungen rückgängig machen, wenn Du berechtigt bist, das Wiki zu bearbeiten.

1. Wähle eine Zeile aus, die zurückgesetzt werden soll.
2. Klicke im oberen Bereich der Verlaufstabelle auf **Compare Revisions** (Revisionen vergleichen). ![Wiki-Schaltfläche „compare revisions" (Vergleichen von Revisionen)](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Du wirst ein Diff der Änderungen sehen, das aufzeigt, welche Zeilen hinzugefügt, entfernt und geändert wurden. ![Wiki-Revisions-Diff](/assets/images/help/wiki/wiki_revision_diff.png)
4. Um die neuere Änderungen rückgängig zu machen, klicke auf **Revert Changes** (Änderungen rückgängig machen). ![Wiki-Schaltfläche „revert changes" (Änderungen rückgängig machen)](/assets/images/help/wiki/wiki_revert_changes.png)
