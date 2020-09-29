---
title: Von GitHub unterstützte Subversion-Eigenschaften
intro: 'Verschiedene Subversion-Workflows und -Eigenschaften sind bestehenden Funktionen von {% data variables.product.product_name %} ähnlich.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Ausführbare Dateien (svn:executable)

`svn:executable`-Eigenschaften werden durch direktes Aktualisieren des Dateimodus vor dem Hinzufügen der Datei in das Git-Repository konvertiert.

### MIME-Typen (svn:mime-type)

{% data variables.product.product_name %} zeichnet die „mime-type“-Eigenschaften von Dateien sowie die Commits, durch die sie hinzugefügt wurden, intern auf.

### Ignorieren nicht versionierter Elemente (svn:ignore)

Dateien und Verzeichnisse, die Du in Subversion auf „Ignorieren“ gesetzt hast, verfolgt {% data variables.product.product_name %} intern. Von Subversion-Clients ignorierte Dateien sind völlig unterschiedlich zu den Einträgen in einer *.gitignore*-Datei.

### Derzeit nicht unterstützte Eigenschaften

{% data variables.product.product_name %} unterstützt derzeit weder `svn:externals`, `svn:global-ignores` noch andere oben nicht aufgeführte Eigenschaften, auch keine benutzerdefinierten Eigenschaften.
