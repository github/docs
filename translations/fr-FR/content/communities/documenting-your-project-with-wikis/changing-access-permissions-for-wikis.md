---
title: Changement des autorisations d’accès pour les wikis
intro: 'Seuls les collaborateurs de dépôt peuvent modifier le wiki d’un dépôt {% ifversion fpt or ghec or ghes %}public{% endif %} par défaut. Toutefois, vous pouvez autoriser toute personne disposant d’un compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} à modifier votre wiki.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Change access permissions
ms.openlocfilehash: 51a9ec690f0bdad1be302592091565b65e5f9b9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086614'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous Fonctionnalités, désélectionnez **Limiter les modifications aux collaborateurs uniquement**.
   ![Limitation des modifications du wiki](/assets/images/help/wiki/wiki_restrict_editing.png)

## Pour aller plus loin

- « [Désactivation des wikis](/communities/documenting-your-project-with-wikis/disabling-wikis) »
