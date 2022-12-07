---
title: GitHub Actions-Geheimnisse
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: 'Mit der Geheimnis-API von {% data variables.product.prodname_actions %} kannst du Informationen zu verschlüsselten Geheimnissen erstellen, aktualisieren, löschen und abrufen, die in Workflows für {% data variables.product.prodname_actions %} verwendet werden können.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: bd72024abd61feb6b69e3efb09d1ddc2b8f27a23
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061985'
---
## Informationen zur Geheimnis-API

Mit der Geheimnis-API von {% data variables.product.prodname_actions %} kannst du Informationen zu verschlüsselten Geheimnissen erstellen, aktualisieren, löschen und abrufen, die in Workflows für {% data variables.product.prodname_actions %} verwendet werden können. {% data reusables.actions.about-secrets %} Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} müssen zum Verwenden dieser API über die `secrets`-Berechtigung verfügen. Authentifizierte Benutzer müssen für ein Repository die Zugriffsrechte von Mitwirkenden besitzen, um Geheimnisse zu erstellen, zu aktualisieren oder zu lesen.
