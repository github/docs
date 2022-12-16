---
title: Pakete
intro: 'Verwende die REST-API, um mit {% data variables.product.prodname_registry %} zu interagieren.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: a40709d8c51e445fb815c78eadbdb7886b5d60db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192825'
---
## Informationen zu {% data variables.product.prodname_registry %}

Du kannst die REST-API verwenden, um Pakete in deinen {% data variables.product.prodname_dotcom %}-Repositorys und -Organisationen zu verwalten. Weitere Informationen findest du unter [Wiederherstellen und Löschen von Paketen](/packages/learn-github-packages/deleting-and-restoring-a-package).

Um zur Verwaltung von {% data variables.product.prodname_registry %} die REST-API verwenden zu können, musst du dich mithilfe eines {% data variables.product.pat_v1 %} authentifizieren.
  - Um auf Paketmetadaten zuzugreifen, muss dein Token den `read:packages`-Bereich enthalten.
  - Zum Löschen von Paketen und Paketversionen muss dein Token die Bereiche `read:packages` und `delete:packages` enthalten.
  - Zum Wiederherstellen von Paketen und Paketversionen muss dein Token die Bereiche `read:packages` und `write:packages` enthalten.

Wenn sich dein Paket in einer Registrierung befindet, die differenzierte Berechtigungen unterstützt, benötigt dein Token nicht den Bereich `repo`, um auf dieses Paket zuzugreifen oder es zu verwalten. Wenn sich dein Paket in einer Registrierung befindet, die nur repositorybezogene Berechtigungen unterstützt, dann muss dein Token ebenfalls den `repo`-Bereich enthalten, da dein Paket Berechtigungen von einem {% data variables.product.prodname_dotcom %}-Repository erbt. Eine Liste mit Registrierungen, die nur repositorybezogene Berechtigungen unterstützen, findest du unter [Informationen zu Berechtigungen für {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

Um auf Ressourcen in einer Organisation mit aktiviertem einmaligem Anmelden zuzugreifen, musst du einmaliges Anmelden für dein {% data variables.product.pat_v1 %} aktivieren. Weitere Informationen findest du unter [Autorisieren eines {% data variables.product.pat_generic %} für die Verwendung mit SAML Single Sign-On](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}."{% endif %}
