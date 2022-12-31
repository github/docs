---
title: À propos de GitHub pour les entreprises
intro: 'Les entreprises peuvent utiliser les produits d’entreprise de {% data variables.product.prodname_dotcom %} pour améliorer l’ensemble du cycle de vie de développement de logiciels.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: dbba8a55fd0ac20c97039de05aa629dea7048626
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192648'
---
## À propos de {% data variables.product.prodname_dotcom %} pour les entreprises

{% data variables.product.prodname_dotcom %} est une plateforme de développement complète pour créer, mettre à l’échelle et fournir des logiciels sécurisés. Les entreprises utilisent notre suite de produits pour prendre en charge l’ensemble du cycle de vie du développement de logiciels, accélérer la vitesse de développement et améliorer la qualité du code.

Les développeurs peuvent stocker et contrôler votre code source dans des dépôts, en utilisant des problèmes et des projets pour planifier et suivre leur travail. Ils peuvent coder dans un environnement de développement hébergé dans le cloud, {% data variables.product.prodname_github_codespaces %}, puis passer en revue les modifications de code avec des demandes de tirage, en utilisant des fonctionnalités de sécurité du code pour conserver les secrets et les vulnérabilités en dehors de votre codebase. Enfin, vous pouvez automatiser votre pipeline de génération, de test et de déploiement avec {% data variables.product.prodname_actions %} et héberger des packages logiciels avec {% data variables.product.prodname_registry %}.

Quand les entreprises adoptent {% data variables.product.prodname_enterprise %}, leur retour sur investissement (ROI) est élevé. Par exemple, leurs développeurs gagnent 45 minutes par jour, et le temps d’intégration et de formation est réduit de 40 %. Pour plus d’informations, consultez [L’impact économique total de {% data variables.product.prodname_enterprise %}](https://resources.github.com/forrester/).

Pour simplifier l’administration de toutes les phases du cycle de vie de développement de logiciels, nous fournissons un seul point de visibilité et de gestion appelé compte d’entreprise. Les comptes d’entreprise vous permettent de gérer la facturation et les paramètres, d’appliquer une stratégie et d’auditer les personnes ayant accès aux ressources de votre entreprise. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) ».

Si vous le souhaitez, vous pouvez ajouter des fonctionnalités de sécurité du code supplémentaires avec {% data variables.product.prodname_GH_advanced_security %} ainsi que des options de prise en charge améliorées avec {% data variables.contact.premium_support %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) et « [À propos de {% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %} » dans la documentation de {% data variables.product.prodname_ghe_cloud %}.{% else %}. »{% endif %}

## À propos des options de déploiement

Quand vous achetez {% data variables.product.prodname_enterprise %}, vous obtenez l’accès à la fois à {% data variables.product.prodname_ghe_cloud %} et à {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_ghe_cloud %} est un ensemble de fonctionnalités avancées sur {% data variables.product.prodname_dotcom_the_website %}, tandis que {% data variables.product.prodname_ghe_server %} est une plateforme auto-hébergée. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %} » dans la documentation de {% data variables.product.prodname_ghe_server %}.{% else %} ».{% endif %}

Pour {% data variables.product.prodname_ghe_cloud %}, vous pouvez autoriser les développeurs à créer et gérer leurs propres comptes personnels, ou vous pouvez utiliser {% data variables.product.prodname_emus %}, qui vous permet de créer et de gérer les comptes d’utilisateur pour vos développeurs. Pour plus d’informations, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise) ».

{% data variables.product.prodname_ghe_managed %} est en disponibilité limitée pour des clients sélectionnés avec des exigences strictes en matière de sécurité et de conformité. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %} » dans la documentation de {% data variables.product.prodname_ghe_managed %}.{% else %} ».{% endif %}

Vous pouvez tirer parti de la puissance de {% data variables.product.prodname_dotcom_the_website %} même lors de l’utilisation de {% data variables.product.prodname_ghe_server %} ou de {% data variables.product.prodname_ghe_managed %} en activant {% data variables.product.prodname_github_connect %}, qui vous permet de configurer des fonctionnalités et des workflows supplémentaires comme des {% data variables.product.prodname_dependabot_alerts %} pour les dépendances non sécurisées.{% ifversion ghec %}

- « [À propos de {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect) » dans la documentation de {% data variables.product.prodname_ghe_server %}
- « [À propos de {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect) » dans la documentation de {% data variables.product.prodname_ghe_managed %}{% else %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) ».{% endif %}

## Pour aller plus loin

- [Comparer {% data variables.product.prodname_dotcom %} à d’autres solutions DevOps](https://resources.github.com/devops/tools/compare/) dans les ressources de {% data variables.product.company_short %}
