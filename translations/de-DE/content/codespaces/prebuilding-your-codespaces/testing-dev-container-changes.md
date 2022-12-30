---
title: Testen von Änderungen der Dev-Containerkonfiguration für einen Branch mit Prebuildunterstützung
shortTitle: Test dev container changes
allowTitleToDifferFromFilename: true
intro: 'Wenn du die Konfiguration des Entwicklungscontainers für einen Branch änderst, der für Prebuilds aktiviert ist, musst du deine Änderungen in einem Codespace testen.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
ms.openlocfilehash: 29b44d0fb0b3bb3211f0c204cc7e99e39ab89b79
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159566'
---
Alle Änderungen, die du an der Dev-Containerkonfiguration für einen Branch mit Prebuildunterstützung vornimmst, führen zu einer Aktualisierung der Codespacekonfiguration und des zugeordneten Prebuilds. Daher ist es wichtig, solche Änderungen in einem Codespace von einem Testbranch aus zu testen, bevor du deine Änderungen an einen aktiv verwendeten Branch deines Repositorys committest. Dadurch wird sichergestellt, dass du keine Breaking Changes für dein Team einführst.

Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

## Testen von Änderungen an der Dev-Containerkonfiguration

1. Erstelle einen Codespace aus dem Branch mit Prebuildunterstützung, dessen Dev-Container du ändern möchtest. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).
1. Checke im Codespace einen Testbranch aus. Weitere Informationen findest du unter [Verwenden der Quellcodeverwaltung in deinem Codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches).
1. Nimm die erforderlichen Änderungen an der Dev-Containerkonfiguration vor.
1. Wende die Änderungen an, indem du den Container neu erstellst. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace).
1. Nachdem alles gut aussieht, solltest du auch einen neuen Codespace von deinem Testbranch aus erstellen, um sicherzustellen, dass alles funktioniert. Anschließend kannst du deine Änderungen an den Standardbranch deines Repositorys oder einen aktiven Featurebranch committen, um eine Aktualisierung des Prebuilds für diesen Branch auszulösen.

   {% note %}
   
   **Hinweis**: Das Erstellen dieses Codespace dauert länger als üblich, da er nicht aus einem Prebuild erstellt wird.
   
   {% endnote %}
