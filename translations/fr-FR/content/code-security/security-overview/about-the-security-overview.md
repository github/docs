---
title: À propos de la vue d'ensemble de la sécurité
intro: 'Vous pouvez afficher, filtrer et trier des alertes de sécurité pour les référentiels appartenant à votre organisation ou votre équipe dans les pages Vue d’ensemble de la sécurité.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: About the security overview
ms.openlocfilehash: 0e634bafbb699d27588312b57084b557a3c82ca1
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163751'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## À propos de la vue d'ensemble de la sécurité

{% data reusables.security-overview.about-the-security-overview %} {% ifversion fpt %}Pour plus d’informations, consultez [la documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %} La vue d’ensemble de la sécurité montre quelles fonctionnalités de sécurité sont activées pour les dépôts et consolident les alertes pour chaque fonctionnalité. 

- Les informations sur les risques et la couverture des fonctionnalités et des alertes {% data variables.product.prodname_dependabot %} s’affichent pour tous les dépôts. 
- Les informations sur les risques et la couverture des fonctionnalités {% data variables.product.prodname_GH_advanced_security %}, comme {% data variables.product.prodname_code_scanning %} et {% data variables.product.prodname_secret_scanning %}, s’affichent uniquement pour les entreprises qui utilisent {% data variables.product.prodname_GH_advanced_security %}.

Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies) » et « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) ».

## À propos du filtrage et du tri des alertes

La vue d’ensemble de la sécurité fournit un moyen puissant de comprendre la sécurité d’un groupe de dépôts. Les vues sont interactives avec des filtres qui vous permettent d’explorer les données agrégées et d’identifier les sources de risque élevé ou de faible couverture des fonctionnalités. Lorsque vous appliquez plusieurs filtres pour vous concentrer sur des zones d’intérêt plus étroites, les données de la vue changent pour refléter votre sélection. Pour plus d’informations, consultez « [Filtrage des alertes dans la vue d’ensemble de la sécurité](/code-security/security-overview/filtering-alerts-in-the-security-overview) ».

{% ifversion security-overview-alert-views %} Il existe également des vues dédiées pour chaque type d’alerte de sécurité que vous pouvez utiliser afin de limiter votre analyse à un ensemble spécifique d’alertes, puis affiner davantage les résultats avec une plage de filtres propres à chaque vue. Par exemple, dans la vue des alertes {% data variables.product.prodname_secret_scanning %}, vous pouvez utiliser le filtre `Secret type` pour voir uniquement les alertes {% data variables.product.prodname_secret_scanning %} pour un secret spécifique, comme un GitHub {% data variables.product.pat_generic %}.
{% endif %}

{% note %}

**Remarque :** La vue d’ensemble de la sécurité affiche les alertes actives déclenchées par les fonctionnalités de sécurité. S’il n’y a pas d’alertes dans la vue d’ensemble de la sécurité d’un dépôt, des vulnérabilités de sécurité non détectées ou des erreurs de code peuvent toujours exister.

{% endnote %}

## À propos de la vue d’ensemble de la sécurité au niveau de l’organisation

{% data reusables.security-overview.beta-org-risk-coverage %}

Vous trouverez la vue d’ensemble de la sécurité sous l’onglet **Sécurité** pour toute organisation appartenant à une entreprise. Chaque vue affiche des données agrégées que vous pouvez explorer, à mesure que vous ajoutez chaque filtre, les données sont mises à jour pour refléter les dépôts ou les alertes que vous avez sélectionnés.

L’équipe en charge de la sécurité des applications au sein de votre entreprise peut utiliser différentes vues pour effectuer des analyses générales et spécifiques de l’état de la sécurité de votre organisation. {% ifversion security-overview-org-risk-coverage %}Par exemple, l’équipe peut utiliser la page « Couverture de la sécurité » pour superviser l’adoption des fonctionnalités au sein de votre organisation ou dans une équipe spécifique lorsque vous déployez {% data variables.product.prodname_GH_advanced_security %}, ou utiliser la page « Risque de sécurité » pour identifier les dépôts avec plus de cinq alertes {% data variables.product.prodname_secret_scanning %} ouvertes.{% else %}Par exemple, l’équipe peut utiliser la page de la vue d’ensemble pour superviser l’adoption des fonctionnalités au sein de votre organisation ou dans une équipe spécifique lorsque vous déployez {% data variables.product.prodname_GH_advanced_security %} dans votre entreprise, ou pour examiner toutes les alertes d’un type et d’un niveau de gravité spécifiques dans tous les dépôts de votre organisation.{% endif %}

Les propriétaires d’organisations et les gestionnaires de sécurité pour les organisations disposent d’un accès à la vue d’ensemble de la sécurité pour leur organisation. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}Les membres de l’organisation peuvent aussi accéder à la vue d’ensemble de la sécurité au niveau de l’organisation pour afficher les résultats des référentiels pour lesquels ils disposent de privilèges d’administrateur ou d’un accès aux alertes de sécurité. Pour plus d’informations sur la gestion de l’accès aux alertes de sécurité, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre référentiel](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) ».{% endif %}

{% ifversion security-overview-org-risk-coverage %}
### Vue Risque de sécurité

Cette vue affiche des données sur les dépôts affectés par différents types d’alerte de sécurité. 

- Utilisez les listes déroulantes **Type** et **Équipes** pour ajouter les filtres de type de dépôt et d’équipe.
- Cliquez sur **Alertes ouvertes** ou **Dépôts affectés** pour afficher uniquement les dépôts avec un type spécifique d’alerte de sécurité.

En outre, lorsque vous cliquez dans la zone de recherche, une liste de l’ensemble complet des filtres disponibles s’affiche.

![Capture d’écran de la vue Risque de sécurité pour une organisation](/assets/images/help/security-overview/security-risk-view.png)

### Vue Couverture de la sécurité

Cette vue montre les données sur les dépôts qui utilisent des fonctionnalités de sécurité. 

- Utilisez les listes déroulantes **Type** et **Équipes** pour ajouter les filtres de type de dépôt et d’équipe.
- Cliquez sur **Alertes activées** et les autres fonctionnalités répertoriées dans l’en-tête pour afficher uniquement les dépôts avec ces fonctionnalités activées.
- Remplacez n’importe quel filtre `FEATURE:enabled` par `FEATURE:not-enabled` dans la zone de recherche pour afficher les dépôts qui n’ont pas activé une fonctionnalité.
- Pour n’importe quel dépôt, cliquez sur les points de suspension ( **...** ) puis sur **Paramètres de sécurité** pour activer des fonctionnalités supplémentaires.

En outre, lorsque vous cliquez dans la zone de recherche, une liste de l’ensemble complet des filtres disponibles s’affiche.

![Capture d’écran de la vue Couverture de sécurité pour une organisation](/assets/images/help/security-overview/security-coverage-view.png)

{% else %}

### Comprendre la principale vue d’ensemble de la sécurité

![Capture d’écran de la vue d’ensemble de la sécurité pour une organisation](/assets/images/help/security-overview/security-overview-org-legacy.png)

Pour chaque dépôt dans la vue d’ensemble de la sécurité, vous voyez des icônes pour chaque type de fonctionnalité de sécurité et le nombre d’alertes par type. Si une fonctionnalité de sécurité n’est pas activée pour un dépôt, l’icône de cette fonctionnalité est grisée. En outre, un score de risque est calculé pour chaque dépôt en fonction de son analyse du code ainsi que de ses alertes Dependabot et d’analyse des secrets. Ce score est en version bêta et doit être utilisé avec précaution. Son algorithme et son approche sont susceptibles de changer.

![Icônes dans la vue d’ensemble de la sécurité](/assets/images/help/security-overview/security-overview-icons.png)

| Icône | Signification |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | Alertes d’{% data variables.product.prodname_code_scanning_capc %}. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning) ». |
| {% octicon "key" aria-label="Secret scanning alerts" %} | Alertes d’{% data variables.product.prodname_secret_scanning_caps %}. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning) ». |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) ». |
| {% octicon "check" aria-label="Check" %} | La fonctionnalité de sécurité est activée, mais ne déclenche pas d’alertes dans ce dépôt. |
| {% octicon "x" aria-label="x" %} | La fonctionnalité de sécurité n’est pas prise en charge dans ce dépôt. |

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## À propos de la vue d’ensemble de la sécurité au niveau de l’entreprise

Vous trouverez la vue d’ensemble de la sécurité sous l’onglet **Sécurité du code** pour votre entreprise. Chaque vue d’ensemble affiche des informations de sécurité agrégées et propres au dépôt pour votre entreprise. Vous pouvez afficher les référentiels appartenant à votre entreprise qui comportent des alertes de sécurité, afficher toutes les alertes de sécurité, ou les alertes spécifiques à une fonction de sécurité de votre entreprise.

Les propriétaires d’entreprise peuvent afficher les alertes des organisations dont ils sont propriétaires ou gestionnaire de sécurité.{% ifversion ghec or ghes > 3.5 or ghae > 3.5 %} Les propriétaires d’entreprise peuvent rejoindre une organisation en tant que propriétaire d’organisation pour voir l’ensemble des alertes dans la vue d’ensemble de la sécurité au niveau de l’entreprise. Pour plus d’informations, consultez « [Gestion de votre rôle dans une organisation appartenant à votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise) ».{% endif %}

Les propriétaires d’organisations et les gestionnaires de sécurité pour les organisations dans une entreprise disposent d’un accès à la vue d’ensemble de la sécurité au niveau de l’entreprise. Ils peuvent afficher les référentiels et les alertes pour les organisations auxquelles ils ont un accès total.
{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## À propos de la vue d’ensemble de la sécurité au niveau de l’équipe

Vous trouverez la vue d’ensemble de la sécurité sous l’onglet **Sécurité** pour toute équipe au sein d’une organisation appartenant à une entreprise.

Au niveau de l’équipe, la vue d’ensemble de la sécurité affiche des informations de sécurité propres au dépôt pour les dépôts pour lesquels l’équipe a des privilèges d’administrateur. Pour plus d’informations, consultez « [Gestion de l’accès d’une équipe au dépôt d’une organisation](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) ».
{% endif %}

## Pour aller plus loin

- « [Sécurisation de votre dépôt](/code-security/getting-started/securing-your-repository) »
- « [Sécurisation de votre organisation](/code-security/getting-started/securing-your-organization) »
- « [Introduction à l’adoption de GitHub Advanced Security à grande échelle](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale) » {% endif %}
