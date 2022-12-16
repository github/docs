---
title: Dependabot-Geheimnisse
shortTitle: Secrets
intro: 'Mit der API für {% data variables.product.prodname_dependabot %}-Geheimnisse kannst du {% data variables.product.prodname_dependabot %}-Geheimnisse für eine Organisation oder ein Repository verwalten und steuern.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 0cabee9ace44e75d8fcd2ce81aa9d7583b39e59d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882287'
---
## Informationen zur API der {% data variables.product.prodname_dependabot %}-Geheimnisse

Mithilfe der API der {% data variables.product.prodname_dependabot %}-Geheimnisse kannst du Informationen zu verschlüsselten Geheimnissen erstellen, aktualisieren, löschen und abrufen. {% data reusables.actions.about-secrets %} Weitere Informationen findest du unter [Erstellen verschlüsselter Geheimnisse für Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} müssen zum Verwenden dieser API über die `dependabot_secrets`-Berechtigung verfügen. Authentifizierte Benutzer müssen für ein Repository die Zugriffsrechte von Mitwirkenden besitzen, um Geheimnisse zu erstellen, zu aktualisieren oder zu lesen.
