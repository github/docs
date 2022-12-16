---
title: Pakete anzeigen
intro: 'Du kannst Details zu Paketen sehen, die in einem Repository veröffentlicht wurden, und die Ergebnisse nach Organisation oder Benutzer einschränken.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4fe01f80ec64f8029b1b2bce1d776da4eddfbd75
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192841'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Pakete eines Repository einsehen

Ob du ein Paket anzeigen kannst, hängt von mehreren Faktoren ab. Du kannst standardmäßig alle Pakete anzeigen, die du veröffentlicht hast.

{% ifversion packages-registries-v2 %} Repositorybezogene Pakete erben die Berechtigungen und Sichtbarkeit des Repositorys, in dessen Besitz sie sich befinden. Einige Registrierungen unterstützen **nur** repositorybezogene Pakete. Eine Liste dieser Registrierungen findest du unter [Informationen zu Berechtigungen für {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

Mit anderen Registrierungen kannst du präzise Berechtigungen gewähren und Sichtbarkeitseinstellungen festlegen, die für jedes Paket angepasst werden können, das sich im Besitz eines persönlichen Benutzer- oder Organisationskontos befindet. Du kannst präzise Berechtigungen verwenden oder das Paket mit einem Repository verbinden und die Berechtigungen des Repositorys erben. Weitere Informationen findest du unter [Verbinden eines Repositorys mit einem Paket](/packages/learn-github-packages/connecting-a-repository-to-a-package) und [Konfigurieren der Zugriffssteuerung und Sichtbarkeit eines Pakets](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

{% else %}

Pakete erben ihre Berechtigungen und Sichtbarkeit von dem Repository, in dem sie gehostet werden. Weitere Informationen findest du unter [Informationen zu Berechtigungen für {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages).

{% endif %}

{% data reusables.package_registry.package-page-info %}

## Pakete eines Repository einsehen

Du kannst ein Paket in einem bestimmten Repository suchen und anzeigen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Pakete einer Organisation einsehen

Du kannst ein Paket suchen und anzeigen, das sich in den Repositorys einer Organisation befindet, zu der du gehörst.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Klicke unter dem Namen deiner Organisation auf {% octicon "package" aria-label="The package icon" %} **Pakete**.
{% data reusables.package_registry.navigate-to-packages %}

## Deine Pakete einsehen

Du kannst alle Pakete suchen und anzeigen, die du in allen Organisationen und Repositorys veröffentlicht hast. 

{% data reusables.profile.access_profile %}
2. Klicke oben auf der Profilseite im Hauptnavigationsbereich auf **Pakete**.
  ![Projektregisterkarte](/assets/images/help/package-registry/user-packages-tab.png) {% data reusables.package_registry.navigate-to-packages %}

## Weiterführende Themen

- [Suchen nach Paketen](/search-github/searching-on-github/searching-for-packages)
