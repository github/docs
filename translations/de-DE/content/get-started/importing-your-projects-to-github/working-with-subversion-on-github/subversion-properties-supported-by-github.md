---
title: Von GitHub unterstützte Subversion-Eigenschaften
intro: 'Verschiedene Subversion-Workflows und -Eigenschaften sind bestehenden Funktionen von {% data variables.product.product_name %} ähnlich.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/subversion-properties-supported-by-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Properties supported by GitHub
ms.openlocfilehash: 48c041509100455f6ffcf02d262fd12eafbbffbc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131222'
---
## Ausführbare Dateien (`svn:executable`)

Eigenschaften vom Typ `svn:executable` werden durch direktes Aktualisieren des Dateimodus vor dem Hinzufügen der Datei in das Git-Repository konvertiert.

## MIME-Typen (`svn:mime-type`)

{% data variables.product.product_name %} zeichnet die „mime-type“-Eigenschaften von Dateien sowie die Commits, durch die sie hinzugefügt wurden, intern auf.

## Ignorieren nicht versionierter Elemente (`svn:ignore`)

Dateien und Verzeichnisse, die du in Subversion auf „Ignorieren“ gesetzt hast, zeichnet {% data variables.product.product_name %} intern auf. Von Subversion-Clients ignorierte Dateien werden getrennt von den Einträgen einer Datei vom Typ *.gitignore* behandelt.

## Derzeit nicht unterstützte Eigenschaften

`svn:externals`, `svn:global-ignores` und andere weiter oben nicht aufgeführte Eigenschaften (einschließlich benutzerdefinierter Eigenschaften) werden derzeit von {% data variables.product.product_name %} nicht unterstützt.
