---
title: Installieren eines Pakets
intro: 'Du kannst ein Paket aus {% data variables.product.prodname_registry %} installieren und das Paket als Abhängigkeit in deinem eigenen Projekt verwenden.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 86c095ab1eddc969e4e04f3305059678ffcb9c20
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134366'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Informationen zur Paketinstallation

Du kannst {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} durchsuchen, um Pakete in {% data variables.product.prodname_registry %} zu finden, die du in deinem eigenen Projekt installieren kannst. Weitere Information findest du unter [Durchsuchen von {% data variables.product.prodname_registry %} nach Paketen](/search-github/searching-on-github/searching-for-packages).

Nachdem du ein Paket gefunden hast, kannst du die Beschreibung des Pakets sowie die Installations- und Verwendungsanweisungen auf der Seite des Pakets lesen.

## Installieren eines Pakets

Du kannst ein Paket aus {% data variables.product.prodname_registry %} mit jedem {% ifversion fpt or ghae or ghec %}unterstützten Paketclient{% else %}Pakettyp, der für deine Instanz aktiviert wurde{% endif %} installieren, indem du die gleichen allgemeinen Anweisungen befolgst.

1. Befolge die Anweisungen für deinen Paketclient, um dich bei {% data variables.product.prodname_registry %} zu authentifizieren. Weitere Informationen findest du unter [Authentifizieren bei GitHub Packages](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages).
2. Installiere das Paket mithilfe der Anweisungen für deinen Paketclient.

Unter [Arbeiten mit einer {% data variables.product.prodname_registry %}-Registrierung](/packages/working-with-a-github-packages-registry) findest du Anweisungen zu deinem Paketclient.
