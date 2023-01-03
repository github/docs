---
title: À propos de GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} met des fonctionnalités de sécurité supplémentaires à la disposition des clients sous une licence {% data variables.product.prodname_advanced_security %}.{% ifversion fpt or ghec %} Ces fonctionnalités sont également activées pour les référentiels publics sur {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
ms.openlocfilehash: f98809ffca46dce909b312bf24fbebf9685db3cb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107324'
---
## À propos de {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} a de nombreuses fonctionnalités qui vous aident à améliorer et gérer la qualité de votre code. Certaines d’entre elles sont comprises dans tous les plans{% ifversion not ghae %}, comme le graphe des dépendances et les {% data variables.product.prodname_dependabot_alerts %}{% endif %}. D’autres fonctionnalités de sécurité nécessitent une licence {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} pour s’exécuter sur des dépôts autres que des dépôts publics sur {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion ghes or ghec %}Pour plus d’informations sur l’achat d’une licence pour {% data variables.product.prodname_GH_advanced_security %}, consultez « [À propos de la facturation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) ».{% elsif ghae %}Aucuns frais ne sont facturés pour {% data variables.product.prodname_GH_advanced_security %} sur {% data variables.product.prodname_ghe_managed %} pendant la version bêta.{% elsif fpt %}Pour acheter une licence {% data variables.product.prodname_GH_advanced_security %}, vous devez utiliser {% data variables.product.prodname_enterprise %}. Pour plus d’informations sur la mise à niveau vers {% data variables.product.prodname_enterprise %} avec {% data variables.product.prodname_GH_advanced_security %}, consultez « [Produits de GitHub](/get-started/learning-about-github/githubs-products) » et « [À propos de la facturation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) ».{% endif %}

## À propos des fonctionnalités {% data variables.product.prodname_advanced_security %}

Une licence {% data variables.product.prodname_GH_advanced_security %} fournit les fonctionnalités supplémentaires suivantes :

- **{% data variables.product.prodname_code_scanning_capc %}**  : recherchez les vulnérabilités de sécurité potentielles et les erreurs de codage dans votre code. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning) ».

- **{% data variables.product.prodname_secret_scanning_caps %}**  : détecter les secrets, par exemple les clés et les jetons, qui ont été archivés dans le référentiel.{% ifversion secret-scanning-push-protection %} Si la protection push est activée, détecte également les secrets quand ils sont envoyés (pushed) à votre référentiel. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning) » et « [Protection des poussées avec l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».{% else %} Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning) ».{% endif %}

- **Révision des dépendances** : montrez l’impact complet des changements de dépendances et consultez les détails des versions vulnérables avant de fusionner une demande de tirage. Pour plus d’informations, consultez « [À propos de la révision des dépendances](/code-security/supply-chain-security/about-dependency-review) ».

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **Vue d’ensemble de la sécurité** : passez en revue la configuration et les alertes de sécurité d’une organisation et identifiez les dépôts qui courent le plus de risques. Pour plus d’informations, consultez « [À propos de la vue d’ensemble de la sécurité](/code-security/security-overview/about-the-security-overview) ».
{% endif %}

{% ifversion fpt or ghec %} Le tableau ci-dessous récapitule la disponibilité des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour les dépôts publics et privés.

|                   | Dépôt public           | Dépôt privé sans {% data variables.product.prodname_advanced_security %} | Dépôt privé avec {% data variables.product.prodname_advanced_security %} |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| Analyse du code     | Oui                         | Non                                           | Oui                                        |
| Analyse de secrets   | Oui **(fonctionnalités limitées uniquement)** | Non                                           | Oui                                       |
| Vérification des dépendances | Oui                         | Non                                           | Oui                                       |
{% endif %}

Pour plus d’informations sur les fonctionnalités {% data variables.product.prodname_advanced_security %} en développement, consultez « [Feuille de route publique de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap) ». Pour une vue d’ensemble de toutes les fonctionnalités de sécurité, consultez « [Fonctionnalités de sécurité de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features) ».

{% ifversion fpt or ghec %} Les fonctionnalités {% data variables.product.prodname_GH_advanced_security %} sont activées pour tous les référentiels publics sur {% data variables.product.prodname_dotcom_the_website %}. Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_advanced_security %} peuvent également les activer pour les dépôts privés et internes. {% ifversion fpt %}Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).
{% endif %}

{% ifversion ghes or ghec or ghae %}
## Déploiement de GitHub Advanced Security dans votre entreprise

Pour plus d’informations sur ce que vous devez savoir afin de planifier votre déploiement de {% data variables.product.prodname_GH_advanced_security %} à un niveau global, consultez « [Adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle](/code-security/adopting-github-advanced-security-at-scale) ».

{% endif %}

{% ifversion not fpt %}
## Activation des fonctionnalités {% data variables.product.prodname_advanced_security %}

{%- ifversion ghes %} L’administrateur de site doit activer {% data variables.product.prodname_advanced_security %} pour {% data variables.location.product_location %} avant de pouvoir utiliser ces fonctionnalités. Pour plus d’informations, consultez « [Configuration des fonctionnalités Advanced Security](/admin/configuration/configuring-advanced-security-features).

Une fois votre système configuré, vous pouvez activer et désactiver ces fonctionnalités au niveau de l’organisation ou du dépôt.

{%- elsif ghec %} Pour les dépôts publics, ces fonctionnalités sont activées définitivement et peuvent être désactivées seulement si vous changez la visibilité du projet pour que le code ne soit plus public.

Pour les autres dépôts, une fois que vous avez une licence pour votre compte d’entreprise, vous pouvez activer et désactiver ces fonctionnalités au niveau de l’organisation ou du dépôt.

{%- elsif ghae %} Vous pouvez activer et désactiver ces fonctionnalités au niveau de l’organisation ou du dépôt.
{%- endif %} Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) » et« [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) ».

{% ifversion ghec or ghes %} Si vous avez un compte d’entreprise, l’utilisation de la licence pour l’ensemble de l’entreprise s’affiche dans votre page de licence d’entreprise. Pour plus d’informations, consultez « [Consultation de votre utilisation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage) ».
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## À propos des workflows de démarrage pour {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.starter-workflows-beta %} {% data reusables.advanced-security.starter-workflow-overview %}

Pour plus d’informations sur les workflows de démarrage, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} à partir des workflows de démarrage](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows) » et « [Utilisation des workflows de démarrage](/actions/using-workflows/using-starter-workflows) ».

{% endif %}

{% ifversion ghec or ghes or ghae %}
## Pour aller plus loin

- « [Application de stratégies pour {% data variables.product.prodname_advanced_security %} dans votre compte d’entreprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise) ».

{% endif %} {% endif %}
