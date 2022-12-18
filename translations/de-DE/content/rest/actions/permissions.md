---
title: GitHub Actions-Berechtigungen
allowTitleToDifferFromFilename: true
shortTitle: Permissions
intro: 'Mit der Berechtigungs-API von {% data variables.product.prodname_actions %} kannst du festlegen, welche Unternehmen, Organisationen und Repositorys {% data variables.product.prodname_actions %} ausführen dürfen sowie welche Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbaren Workflows{% endif %} ausgeführt werden dürfen.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 33dce77111812ba9cf5b05a170bc713c3506c00e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888598'
---
## Informationen zur Berechtigungs-API

Mit der Berechtigungs-API von {% data variables.product.prodname_actions %} kannst du festlegen, welche Unternehmen, Organisationen und Repositorys {% data variables.product.prodname_actions %} ausführen dürfen sowie welche Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbaren Workflows{% endif %} ausgeführt werden dürfen.{% ifversion fpt or ghec or ghes %} Weitere Informationen findest du unter [Nutzungsbeschränkungen, Abrechnung und Verwaltung](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization).{% endif %}
