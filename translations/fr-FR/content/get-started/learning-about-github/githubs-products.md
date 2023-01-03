---
title: Produits de GitHub
intro: 'Vue d’ensemble des produits et des plans tarifaires de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
  - /github/getting-started-with-github/githubs-products
  - /github/getting-started-with-github/learning-about-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: e2965befe319637296361e270646cd331478ae44
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159660'
---
## À propos des produits de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} propose des produits gratuits et payants pour le stockage du code et la collaboration sur ce code. Certains produits s’appliquent uniquement aux comptes personnels, tandis que d’autres plans s’appliquent uniquement aux comptes d’organisation et d’entreprise. Pour plus d’informations sur les comptes, consultez « [Types de comptes {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts) ».

Vous pouvez voir les prix et la liste complète des fonctionnalités de chaque produit sur <{% data variables.product.pricing_url %}>. {% data reusables.products.product-roadmap %}

Quand vous lisez {% data variables.product.prodname_docs %}, veillez à sélectionner la version qui correspond à votre produit. Pour plus d’informations, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs) ».

## {% data variables.product.prodname_free_user %} pour les comptes personnels

Avec {% data variables.product.prodname_free_team %} pour les comptes personnels, vous pouvez travailler avec un nombre illimité de collaborateurs sur un nombre illimité de référentiels publics avec un ensemble de fonctionnalités complet et sur un nombre illimité de référentiels privés avec un ensemble de fonctionnalités limité.

Avec {% data variables.product.prodname_free_user %}, votre compte personnel comprend :
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- Application de l’authentification à 2 facteurs
- 2 000 minutes {% data variables.product.prodname_actions %} par mois 
- 500 Mo de stockage {% data variables.product.prodname_registry %} {% ifversion fpt or ghec%}
- 120 heures de base {% data variables.product.prodname_github_codespaces %} par mois
- 15 Go de stockage {% data variables.product.prodname_github_codespaces %} par mois {% endif %}

## {% data variables.product.prodname_pro %}

En plus des fonctionnalités disponibles avec {% data variables.product.prodname_free_user %} pour les comptes personnels, {% data variables.product.prodname_pro %} comprend :
- {% data variables.contact.github_support %} par e-mail
- 3 000 minutes {% data variables.product.prodname_actions %} par mois 
- 2 Go de stockage {% data variables.product.prodname_registry %} {% ifversion fpt or ghec%}
- 180 heures de base {% data variables.product.prodname_github_codespaces %} par mois
- 20 Go de stockage {% data variables.product.prodname_github_codespaces %} par mois {% endif %}
- Outils avancés et insights dans les dépôts privés :
  - Réviseurs de demandes de tirage (pull request) obligatoires
  - Réviseurs de demandes de tirage (pull request) multiples
  - Branches protégées
  - Propriétaires du code
  - Références automatiquement liées
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Graphes des insights du dépôt : Pulse, contributeurs, trafic, commits, fréquence du code, réseau et duplications (fork)

## {% data variables.product.prodname_free_team %} pour les organisations

Avec {% data variables.product.prodname_free_team %} pour les organisations, vous pouvez travailler avec un nombre illimité de collaborateurs sur un nombre illimité de dépôts publics avec un ensemble de fonctionnalités complet ou sur un nombre illimité de dépôts privés avec un ensemble de fonctionnalités limité.

En plus des fonctionnalités disponibles avec {% data variables.product.prodname_free_user %} pour les comptes personnels, {% data variables.product.prodname_free_team %} pour les organisations comprend :
- {% data variables.product.prodname_gcf %}
- Discussions d’équipe
- Contrôles d’accès d’équipe pour la gestion des groupes
- 2 000 minutes {% data variables.product.prodname_actions %} par mois 
- 500 Mo de stockage {% data variables.product.prodname_registry %} 

## {% data variables.product.prodname_team %}

En plus des fonctionnalités disponibles avec {% data variables.product.prodname_free_team %} pour les organisations, {% data variables.product.prodname_team %} comprend :
- {% data variables.contact.github_support %} par e-mail
- 3 000 minutes {% data variables.product.prodname_actions %} par mois 
- 2 Go de stockage {% data variables.product.prodname_registry %} 
- Outils avancés et insights dans les dépôts privés :
  - Réviseurs de demandes de tirage (pull request) obligatoires
  - Réviseurs de demandes de tirage (pull request) multiples
  - Brouillon des demandes de tirage (pull request)
  - Réviseurs de demandes de tirage (pull request) d’équipe
  - Branches protégées
  - Propriétaires du code
  - Rappels planifiés
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Graphes des insights du dépôt : Pulse, contributeurs, trafic, commits, fréquence du code, réseau et duplications (fork) {%- ifversion fpt or ghec %}
- Option permettant d’activer {% data variables.product.prodname_github_codespaces %}
  - Les propriétaires d’organisation peuvent activer {% data variables.product.prodname_github_codespaces %} pour l’organisation en définissant une limite de dépense et en accordant des autorisations utilisateur aux membres de leur organisation. Pour plus d'informations, consultez « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization) ».
{%- endif %}

{% data variables.product.company_short %} facture {% data variables.product.prodname_team %} pour chaque utilisateur. Pour plus d’informations, consultez « [À propos des prix par utilisateur]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion fpt %} ».{% else %} » dans la documentation Free, Pro et Team.{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} comprend deux options de déploiement : hébergé dans le cloud et auto-hébergé. 

En plus des fonctionnalités disponibles avec {% data variables.product.prodname_team %}, {% data variables.product.prodname_enterprise %} comprend :
- {% data variables.contact.enterprise_support %}
- Contrôles supplémentaires de sécurité, de conformité et de déploiement
- Authentification unique SAML
- Provisionnement de l’accès avec SAML ou SCIM
- {% data variables.product.prodname_github_connect %}
- Option d’achat de {% data variables.product.prodname_GH_advanced_security %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security) ».

{% data variables.product.prodname_ghe_cloud %} comprend également :
- {% data variables.contact.enterprise_support %}. Pour plus d’informations, consultez « <a href="/articles/github-enterprise-cloud-support" class="dotcom-only">Support {% data variables.product.prodname_ghe_cloud %}</a> » et « <a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">Annexe {% data variables.product.prodname_ghe_cloud %}</a> ».
- 50 000 minutes {% data variables.product.prodname_actions %} par mois 
- 50 Go de stockage {% data variables.product.prodname_registry %} 
- Contrôle d’accès pour les sites {% data variables.product.prodname_pages %}. Pour plus d’informations, consultez « [Modification de la visibilité de votre site {% data variables.product.prodname_pages %}](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site) ».
- Contrat de niveau de service avec une durée de bon fonctionnement mensuelle de 99,9 %
- Possibilité de configurer votre entreprise pour {% data variables.product.prodname_emus %}, afin de vous permettre de provisionner et de gérer les membres avec votre fournisseur d’identité, et de restreindre les contributions de vos membres à votre entreprise uniquement. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) ».
- Possibilité de gérer de manière centralisée la stratégie et la facturation pour plusieurs organisations {% data variables.product.prodname_dotcom_the_website %} avec un compte d’entreprise. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts) ».

{% data reusables.enterprise.about-github-for-enterprises %}

Vous pouvez configurer un essai gratuit pour évaluer {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [Configuration d’un essai de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/articles/setting-up-a-trial-of-github-enterprise-cloud) ».

Pour plus d’informations sur l’hébergement de votre propre instance de {% data variables.product.prodname_ghe_server %}, notamment la configuration d’un essai, consultez  «[À propos de {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server) ».

## Pour aller plus loin

- « [À propos des prix par utilisateur]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing) »{% ifversion not ghec %} dans la documentation de {% data variables.product.prodname_ghe_cloud %}{% endif %}
