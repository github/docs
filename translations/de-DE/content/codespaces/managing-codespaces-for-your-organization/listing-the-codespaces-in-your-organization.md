---
title: Auflisten der Codespaces in deiner Organisation
shortTitle: List organization codespaces
intro: Du kannst alle aktuell aktiven oder beendeten Codespaces für deine Organisation auflisten.
permissions: 'To list all of the current codespaces for your organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Administrator
ms.openlocfilehash: e3d475560c76449ed20b70fbce29ef6273f788fc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158629'
---
## Übersicht

Als Organisationsbesitzer können alle aktuell aktiven oder beendeten Codespaces für deine Organisation auflisten. Möglicherweise möchtest du so vorgehen, um zu überprüfen, wie viele Codespaces Benutzer erstellen, um sicherzustellen, dass sie keine unnötigen Kosten verursachen. Informationen zu den Kosten findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

Die einfachste Möglichkeit zum Auflisten der Codespaces für eine Organisation besteht darin, {% data variables.product.prodname_cli %} zu verwenden. Du kannst auch die REST-API verwenden, die weitere Informationen zu jedem Codespace bereitstellt.

Informationen zum Anzeigen der aktuellen Gesamtsumme der {% data variables.product.prodname_codespaces %}-Nutzung für deine Organisation oder dein Unternehmen und zum Generieren eines detaillierten Berichts findest du unter [Anzeigen deiner {% data variables.product.prodname_github_codespaces %}-Nutzung](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).

### Verwenden von {% data variables.product.prodname_cli %} zum Auflisten von Codespaces

Wenn du alle aktuellen Codespaces für eine bestimmte Organisation auflisten möchtest, verwende den folgenden Befehl.

```shell{:copy}
gh codespace list --org ORGANIZATION 
```

Dieser Befehl gibt eine Liste zurück, die die folgenden Informationen für jeden Codespace enthält: 
    - Den Namen und den Anzeigenamen 
    - Den Benutzer, der den Codespace erstellt hat
    - Das Repository und den Branch
    - Den aktuellen Status des Codespace

Wenn du alle aktuellen Codespaces für eine Organisation auflisten möchtest, die von einem bestimmten Benutzer erstellt wurden, verwendest du den folgenden Befehl.

```shell{:copy}
gh codespace list --org ORGANIZATION --user USER
```

{% note %}

**Hinweis**: Ersetze in den oben genannten Befehlen `ORGANIZATION` durch den Namen der Organisation, die du abfragst. Du musst Besitzer der Organisation sein.

{% endnote %}

### Verwenden der REST-API zum Auflisten von Codespaces

Du kannst den API-Endpunkt `/orgs/{org}/codespaces` als alternative Methode zum Auflisten der aktuellen Codespaces für eine Organisation verwenden. Dieser Endpunkt gibt mehr Informationen als {% data variables.product.prodname_cli %} zurück, z. B. die Details des Computertyps.

Weitere Informationen zu diesem Endpunkt findest du unter [Codespaceorganisationen](/rest/codespaces/organizations#list-codespaces-for-the-organization).
