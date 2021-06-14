---
title: Ein Repository nur für Issues erstellen
intro: '{% data variables.product.product_name %} bietet keine Berechtigungen für den Zugriff ausschließlich auf Issues. Sie können zu diesem Zweck aber ein zweites Repository erstellen, das nur die Issues enthält.'
redirect_from:
  - /articles/issues-only-access-permissions/
  - /articles/is-there-issues-only-access-to-organization-repositories/
  - /articles/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

1. Erstelle ein **privates** Repository, um den Quellcode von Deinem Projekt zu verwalten.
2. Erstelle ein zweites Repository mit den gewünschten Berechtigungen, um den Issue-Tracker zu hosten.
3. Füge eine README-Datei zum Issues-Repository hinzu, in der Du den Zweck dieses Repositorys erläuterst und zum Issues-Abschnitt verknüpfst.
4. Lege Deine Mitarbeiter oder Teams fest, um den Zugriff auf die Repositorys wie gewünscht zu verwalten.

Benutzer mit Schreibzugriff auf beide Repositorys können zwischen den Repositorys auf Issues verweisen und Issues schließen. Benutzer ohne die erforderlichen Berechtigungen sehen nur Verweise mit sehr wenigen Informationen.

Wenn Du beispielsweise einen Commit mit der Mitteilung `Fixes organization/public-repo#12` an den Standardbranch des privaten Repositorys übertragen würdest, würde der Issue geschlossen, aber nur Benutzer mit den entsprechenden Berechtigungen könnten den Repository-übergreifenden Verweis auf den Commit sehen, der den Issue geschlossen hat. Benutzern ohne diese Berechtigungen wird ein Verweis angezeigt, aber ohne detaillierte Angaben.
