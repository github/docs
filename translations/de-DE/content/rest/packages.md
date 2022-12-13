---
title: Pakete
intro: 'Mit der {% data variables.product.prodname_registry %}-API kannst du Pakete für deine {% data variables.product.prodname_dotcom %}-Repositorys und Organisationen verwalten.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: 5edb7e30b296626a53fdc41806bcfba88718e6b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147059922'
---
## Informationen zur {% data variables.product.prodname_registry %}-API

Mit der {% data variables.product.prodname_registry %}-API kannst du Pakete mithilfe der REST-API verwalten. Weitere Informationen zum Wiederherstellen oder Löschen von Paketen findest du unter [Wiederherstellen und Löschen von Paketen](/packages/learn-github-packages/deleting-and-restoring-a-package).

Um diese API zu verwenden, musst du dich über ein persönliches Zugriffstoken authentifizieren. 
  - Um auf Paketmetadaten zuzugreifen, muss dein Token den `read:packages`-Bereich enthalten.
  - Zum Löschen von Paketen und Paketversionen muss dein Token die Bereiche `read:packages` und `delete:packages` enthalten.
  - Zum Wiederherstellen von Paketen und Paketversionen muss dein Token die Bereiche `read:packages` und `write:packages` enthalten.

Wenn dein `package_type` `npm`, `maven`, `rubygems` oder `nuget` lautet, muss dein Token ebenfalls den `repo`-Bereich enthalten, da dein Paket Berechtigungen von einem {% data variables.product.prodname_dotcom %}-Repository erbt. Wenn sich dein Paket im {% data variables.product.prodname_container_registry %} befindet, ist dein `package_type` `container`, und dein Token benötigt den Bereich `repo` nicht, um auf `package_type` zuzugreifen und ihn zu verwalten. `container`-Pakete bieten detaillierte Berechtigungen, die von einem Repository getrennt sind. Weitere Informationen findest du unter [Informationen zu Berechtigungen für {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries).

Wenn du die {% data variables.product.prodname_registry %}-API verwenden möchtest, um auf Ressourcen in einer Organisation mit aktiviertem SSO zuzugreifen, musst du das einmalige Anmelden (SSO) für dein persönliches Zugriffstoken aktivieren. Weitere Informationen findest du unter [Autorisieren eines persönlichen Zugriffstokens für die Verwendung mit SAML Single Sign-On](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}
