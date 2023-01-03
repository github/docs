---
title: Gestion des utilisateurs dormants
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
ms.openlocfilehash: 7594a0fc22bef10e84334727ad9e79aa02cd1da6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146680924'
---
{% ifversion ghec %} {% data reusables.enterprise-accounts.dormant-user-release-phase %} {% endif %}

## À propos des utilisateurs dormants

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## Visualisation des utilisateurs dormants

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Dans la barre latérale gauche, cliquez sur **Utilisateurs dormants**.
![Onglet Utilisateurs dormants](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. Pour suspendre tous les utilisateurs dormants figurant dans cette liste, en haut de la page, cliquez sur **Suspendre tous**.
![Bouton Suspendre tous](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## Déterminer si un compte d’utilisateur est dormant

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
5. Dans la section **Informations utilisateur**, un point rouge avec le mot « Dormant » indique que le compte d’utilisateur est dormant et un point vert avec le mot « Actif » indique que le compte d’utilisateur est actif.
![Compte d’utilisateur dormant](/assets/images/enterprise/stafftools/dormant-user.png)
![Compte d’utilisateur actif](/assets/images/enterprise/stafftools/active-user.png)

## Configuration du seuil de dormance

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Sous « Seuil de dormance », utilisez le menu déroulant, puis cliquez sur le seuil de dormance souhaité.
![Menu déroulant Seuil de dormance](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}
## Téléchargement du rapport d’utilisateurs dormants à partir de votre compte d’entreprise

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. Pour télécharger votre rapport Utilisateurs dormants (bêta) comme fichier CSV, sous « Autre », cliquez sur {% octicon "download" aria-label="The Download icon" %} **Télécharger**.
  ![Bouton Télécharger sous « Autre » dans la page Conformité](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

**Conseil :** dans le cadre de l’évaluation de la dormance des utilisateurs, l’activité des utilisateurs est délimitée pour inclure uniquement l’activité des utilisateurs associée aux organisations, référentiels ou événements d’authentification qui sont associés à l’entreprise. Si un utilisateur a par exemple commenté récemment un problème dans un référentiel public qui n’est pas associé à l’entreprise, il peut être considéré comme dormant. Toutefois, s’il a commenté récemment un problème dans un référentiel public associé à une organisation de votre entreprise, il n’est pas considéré comme dormant et n’est pas indiqué dans le rapport des utilisateurs dormants.

Dans le cas d’événements d’authentification web, seuls les événements d’authentification via un domaine d’authentification unique associé à votre entreprise sont considérés comme des activités utilisateur associées à l’entreprise.

{% endtip %}

{% endif %}
