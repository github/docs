---
title: À propos du serveur GitHub Enterprise
intro: '{% data variables.product.product_name %} est une plateforme de développement logiciel que vous pouvez héberger dans un environnement privé.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 2622e3708cc31b24fe39929da68ba5dc8e864d88
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147877156'
---
## À propos de {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} Votre équipe peut utiliser {% data variables.product.product_name %} pour générer et expédier des logiciels à l’aide du contrôle de version Git, des API puissantes, des outils de productivité et de collaboration et des intégrations. Les développeurs familiarisés avec {% data variables.product.prodname_dotcom_the_website %} peuvent intégrer et contribuer en toute transparence à l’aide de fonctionnalités et de workflows familiers. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data reusables.enterprise.github-distributes-ghes %} Pour plus d’informations, consultez « [Vue d’ensemble du système](/admin/overview/system-overview) ».

Vous pouvez choisir de déployer {% data variables.product.product_name %} localement ou dans un environnement cloud pris en charge.

## Environnements pour le déploiement pris en charge

Vous pouvez déployer {% data variables.product.product_name %} sur un hyperviseur de virtualisation au sein de votre centre de données local ou sur un service cloud public.

{% data variables.product.company_short %} prend en charge les hyperviseurs de virtualisation suivants pour le déploiement local.

- Microsoft Hyper-V.
- OpenStack KVM
- VMware ESXi

{% data variables.product.company_short %} prend en charge les services suivants pour le déploiement cloud.

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

Pour plus d’informations, consultez « [Configuration d’une instance {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance) ».

## À propos des mises en production et des mises à niveau

{% data reusables.enterprise.constantly-improving %} Vous êtes responsable des mises à niveau vers votre instance. Pour plus d’informations, consultez « [{% data variables.product.product_name %} mises en production](/admin/all-releases) ».

## À propos de l’administration

Vous pouvez configurer et analyser {% data variables.product.product_name %} via le navigateur, l’accès SSH administratif et les API REST ou GraphQL. {% data variables.product.company_short %} a constaté que les personnes disposant de l’expérience d’administration Linux sont plus performantes avec le déploiement et la maintenance de {% data variables.product.product_name %}.

Vous pouvez accorder à certains employés un accès administratif à {% data variables.product.product_name %}, afin qu’ils puissent configurer l’authentification externe, configurer l’instance pour répondre aux besoins des développeurs et analyser l’activité et le niveau de performance de l’instance. Pour garantir la conformité aux règles d’entreprise ou aux restrictions réglementaires, les administrateurs peuvent configurer des stratégies qui contrôlent la façon dont les utilisateurs utilisent {% data variables.product.product_location %}. Pour plus d'informations, consultez les articles suivants.

- « [À propos de l’authentification de votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise) »
- « [Configuration de votre entreprise](/admin/configuration/configuring-your-enterprise) »
- « [À propos de l’API {% data variables.product.prodname_enterprise %}](/admin/overview/about-the-github-enterprise-api) »
- « [Monitoring de votre appliance](/admin/enterprise-management/monitoring-your-appliance) »
- « [Monitoring de l’activité dans votre entreprise](/admin/monitoring-activity-in-your-enterprise) »
- « [À propos des stratégies d’entreprise](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies) »

## À propos des fonctionnalités facultatives

Vous pouvez configurer des fonctionnalités facultatives pour {% data variables.product.product_name %} qui améliorent le cycle de vie du développement logiciel pour votre entreprise.

| Fonctionnalité | Description | Plus d’informations |
| :- | :- | :- |
| {% data variables.product.prodname_actions %} | Automatiser les workflows CI/CD et de développement | « [À propos de {% data variables.product.prodname_actions %} pour les entreprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) » |
| {% data variables.product.prodname_github_connect %} | Tirer parti de la puissance de {% data variables.product.prodname_dotcom_the_website %} de manière limitée | « [À propos de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) » |
| {% data variables.product.prodname_GH_advanced_security %} | Améliorer la sécurité et la qualité du code | « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) » |
| {% data variables.product.prodname_registry %} | Héberger des packages logiciels pour votre entreprise | « [Introduction à {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages) » |

## À propos des topologies de déploiement

Par défaut, {% data variables.product.product_name %} s’exécute en tant qu’instance autonome. Vous pouvez augmenter la fiabilité et le niveau de performance de {% data variables.product.product_name %} à l’aide d’une topologie différente pour votre déploiement.

- Pour atténuer l’impact des défaillances du système ou du réseau, vous pouvez déployer une instance de réplica passif. Lors d’une panne qui affecte votre instance principale, vous pouvez basculer manuellement vers l’instance de réplica. Pour plus d’informations, consultez « [À propos de la configuration à haute disponibilité](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration) ».
- Vous pouvez configurer plusieurs réplicas actifs pour améliorer le niveau de performance des développeurs qui sont géographiquement éloignés de votre instance principale. Pour plus d’informations, consultez « [À propos de la géoréplication](/admin/enterprise-management/configuring-high-availability/about-geo-replication) ».
- Certaines entreprises avec des dizaines de milliers de développeurs peuvent tirer parti d’une configuration de cluster qui se met à l’échelle horizontalement au lieu de verticalement. Pour plus d’informations, consultez « [À propos du clustering](/admin/enterprise-management/configuring-clustering/about-clustering) ».

## À propos des sauvegardes et de la récupération d'urgence

Pour vous protéger contre la perte de données ou les interruptions de service pour vos développeurs, {% data variables.product.company_short %} recommande vivement d’établir un plan de récupération d’urgence. Vous pouvez sauvegarder la configuration de votre instance et les données utilisateur en déployant et en configurant un système hôte Linux ou Unix avec {% data variables.product.prodname_enterprise_backup_utilities %}. Pour plus d’informations, consultez « [Configuration des sauvegardes sur votre appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance) ».

En outre, vous pouvez configurer une instance de réplica passif pour basculer en cas de défaillance du système ou du réseau. Pour plus d’informations, consultez « [À propos des topologies de déploiement](#about-deployment-topologies) ».

## À propos de la documentation

La documentation pour les administrateurs et les utilisateurs de {% data variables.product.product_name %} est disponible sur ce site, {% data variables.product.prodname_docs %}. 

- [Documentation pour les administrateurs d’entreprise](/admin)
- [Documentation utilisateur](/)

Différentes versions de {% data variables.product.product_name %} sont reflétées séparément dans la documentation sur {% data variables.product.prodname_docs %}. Pour plus d’informations, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs) ».

## Essai de {% data variables.product.product_name %}

Vous pouvez vous inscrire à un essai gratuit de 45 jours de {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Configuration d’un essai de {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server) ».

## Pour aller plus loin

- « [Bien démarrer avec {% data variables.product.product_name %}](/get-started/onboarding/getting-started-with-github-enterprise-server) »
- « [À propos de {% data variables.contact.github_support %}](/support/learning-about-github-support/about-github-support) »
- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) dans le dépôt `github/roadmap`
