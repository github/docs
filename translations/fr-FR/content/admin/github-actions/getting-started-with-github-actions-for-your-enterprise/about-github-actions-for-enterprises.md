---
title: À propos de GitHub Actions pour les entreprises
shortTitle: About GitHub Actions
intro: '{% data variables.product.prodname_actions %} peut améliorer la productivité des développeurs en automatisant le cycle de développement logiciel de votre entreprise.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 682e5c4bc4b17105df59c4e5474bf46ec11fe211
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160743'
---
## À propos de {% data variables.product.prodname_actions %} pour les entreprises

{% data reusables.actions.about-actions-for-enterprises %}

| Tâche | Plus d’informations |
| ---- | ---------------- |
| Tester et générer automatiquement votre application | « [À propos de l’intégration continue](/actions/automating-builds-and-tests/about-continuous-integration) » | 
| Déployer votre application | « [À propos du déploiement continu](/actions/deployment/about-deployments/about-continuous-deployment) » |
| Empaqueter de manière automatique et sécurisée du code dans des artefacts et des conteneurs | « [À propos de l’empaquetage avec {% data variables.product.prodname_actions %}](/actions/publishing-packages/about-packaging-with-github-actions) » |
| Automatiser vos tâches de gestion de projet | « [Utilisation de {% data variables.product.prodname_actions %} pour la gestion de projet](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management) » |

{% data variables.product.prodname_actions %} permet à votre équipe de travailler plus vite et à grande échelle. Dès que les dépôts volumineux commencent à utiliser {% data variables.product.prodname_actions %}, les équipes fusionnent beaucoup plus de demandes de tirage par jour, et les demandes de tirage sont fusionnées beaucoup plus rapidement. Pour plus d’informations, consultez la section « [Writing and shipping code faster](https://octoverse.github.com/2021/writing-code-faster/#scale-through-automation) » du rapport « The State of the Octoverse ».

Vous pouvez créer vos propres automatisations uniques ou utiliser et adapter les workflows de notre écosystème composé de plus de 10 000 actions créées par les leaders du secteur et par la communauté open source. {% ifversion ghec %} Pour plus d’informations, consultez « [Recherche et personnalisation d’actions](/actions/learn-github-actions/finding-and-customizing-actions) ».{% else %}Vous pouvez contraindre vos développeurs à utiliser les actions qui existent sur {% data variables.location.product_location %}, ou vous pouvez autoriser vos développeurs à accéder aux actions de {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [À propos de l’utilisation d’actions dans votre entreprise](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise) ».{% endif %}

{% data variables.product.prodname_actions %} est adapté aux besoins des développeurs, compte tenu de son intégration dans l’expérience {% data variables.product.product_name %} bien connue.

{% ifversion ghec %}Vous pouvez profiter du caractère pratique des exécuteurs hébergés par {% data variables.product.company_short %}, qui sont gérés et mis à niveau par {% data variables.product.company_short %}, ou vous{% else %}Vous{% endif %} pouvez contrôler votre propre infrastructure CI/CD privée en utilisant des exécuteurs auto-hébergés. Les exécuteurs auto-hébergés vous permettent de déterminer l’environnement exact et les ressources qui constituent vos builds, tests et déploiements, sans exposer votre cycle de développement logiciel sur Internet. Pour plus d’informations, consultez {% ifversion ghec %}« [À propos des exécuteurs hébergés par {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners) » et{% endif %} « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) ».

{% data variables.product.prodname_actions %} permet de mieux contrôler les déploiements. Par exemple, vous pouvez utiliser des environnements pour demander l’approbation d’effectuer un travail, restreindre les branches capables de déclencher un workflow ou limiter l’accès aux secrets.{% ifversion ghec or ghes > 3.4 %} Si vos workflows doivent accéder aux ressources d’un fournisseur de cloud qui prend en charge OpenID Connect (OIDC), vous pouvez configurer vos workflows de sorte qu’ils s’authentifient directement auprès du fournisseur de cloud. OIDC offre des avantages sur le plan de la sécurité avec notamment l’élimination de la nécessité de stocker les informations d’identification sous forme de secrets de longue durée. Pour plus d’informations, consultez « [À propos du renforcement de la sécurité avec OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) ».{% endif %}

{% data variables.product.prodname_actions %} comprend également des outils permettant de régir le cycle de développement logiciel de votre entreprise et de respecter les obligations de conformité. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise) ».

## À propos du démarrage avec {% data variables.product.prodname_actions %}

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %} {% data reusables.actions.ghes-actions-not-enabled-by-default %} Une fois la planification terminée, vous pouvez suivre les instructions pour activer {% data variables.product.prodname_actions %}. Par exemple, vous devrez peut-être mettre à niveau les ressources processeur et mémoire pour {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server) ».

{% else %} Une fois la planification terminée, vous pouvez suivre les instructions pour bien démarrer avec {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez {% ifversion ghec %}« [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_cloud %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud) ».{% elsif ghae %}« [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae) ».{% endif %} {% endif %}

## Pour aller plus loin

- « [Compréhension de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions) »{% ifversion ghec %}
- « [À propos de la facturation de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) »{% endif %}
