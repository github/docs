---
title: Informationen zu Mergekonflikten
intro: 'Zu Mergekonflikten kommt es, wenn Du Branches zusammenführst, die konkurrierende Commits haben, und Git Deine Hilfe benötigt, um zu entscheiden, welche Änderungen in den endgültigen Merge aufgenommen werden sollen.'
redirect_from:
  - /articles/about-merge-conflicts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Oft kann Git Unterschiede zwischen Branches beheben und diese automatisch zusammenführen. In der Regel liegen die Änderungen in verschiedenen Zeilen oder sogar in verschiedenen Dateien vor, was das Zusammenführen für Computer leicht verständlich macht. Manchmal gibt es jedoch konkurrierende Änderungen, die Git ohne Deine Hilfe nicht bewältigen kann. Häufig treten Mergekonflikte auf, wenn Personen unterschiedliche Änderungen an derselben Zeile derselben Datei vornehmen, oder wenn eine Person eine Datei bearbeitet und eine andere Person dieselbe Datei löscht.

Sie müssen alle Mergekonflikte lösen, bevor Sie einen Pull Request auf {% data variables.product.product_name %} mergen können. Wenn Du in Deinem Pull Request einen Mergekonflikt zwischen dem Vergleichsbranch und dem Basisbranch hast, kannst Du eine Liste der Dateien mit in Konflikt stehenden Änderungen oberhalb der Schaltfläche **Merge pull request** (Pull Request zusammenführen) ansehen. Die Schaltfläche **Merge pull request** (Pull Request zusammenführen) wird erst aktiviert, wenn Du alle Konflikte zwischen dem Vergleichsbranch und dem Basisbranch gelöst hast.

![Fehlermeldung bei Mergekonflikten](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

### Mergekonflikte beheben

Um einen Mergekonflikt zu beheben, musst Du die Konfliktdatei manuell bearbeiten, um die Änderungen auszuwählen, die Du beim endgültigen Merge beibehalten möchtest. Es gibt verschiedene Möglichkeiten, einen Mergekonflikt zu beheben:

- Wenn Ihr Mergekonflikt durch konkurrierende Zeilenänderungen verursacht wird, z. B. wenn Personen unterschiedliche Änderungen an derselben Zeile derselben Datei auf verschiedenen Branches in Ihrem Git-Repository vornehmen, können Sie ihn mit dem Konflikteditor von {% data variables.product.product_name %} beheben. Weitere Informationen findest Du unter „[Einen Mergekonflikt auf {% data variables.product.prodname_dotcom %} beheben](/articles/resolving-a-merge-conflict-on-github).“
- Bei allen anderen Arten von Mergekonflikten musst Du den Mergekonflikt in einem lokalen Klon des Repositorys beheben und die Änderung an Deinen Branch auf {% data variables.product.product_name %} übertragen. Zum Übertragen der Änderung kannst Du die Befehlszeile oder ein Tool wie [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) verwenden. Weitere Informationen findest Du unter „[Einen Mergekonflikt in der Befehlszeile beheben](/articles/resolving-a-merge-conflict-using-the-command-line).“

Wenn Sie einen Mergekonflikt in der Befehlszeile haben, können Sie Ihre lokalen Änderungen erst an {% data variables.product.product_name %} pushen, wenn Sie den Mergekonflikt lokal auf Ihrem Computer behoben haben. Wenn Du versuchst, Branches mit einem Mergekonflikt in der Befehlszeile zusammenzuführen, wird Ihnen eine Fehlermeldung angezeigt. Weitere Informationen findest Du unter „[Einen Mergekonflikt in der Befehlszeile beheben](/articles/resolving-a-merge-conflict-using-the-command-line/).“
```shell
$ git merge <em>BRANCH-NAME</em>
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

### Weiterführende Informationen

- „[Informationen zum Zusammenführen von Pull Requests](/articles/about-pull-request-merges/)“
- „[Informationen zu Pull Requests](/articles/about-pull-requests/)“
- „[Einen Mergekonflikt in der Befehlszeile beheben](/articles/resolving-a-merge-conflict-using-the-command-line)“
- „[Einen Mergekonflikt auf GitHub beheben](/articles/resolving-a-merge-conflict-on-github)“
