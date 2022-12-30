---
title: Introduction de GitHub Actions votre entreprise
shortTitle: Introduce Actions
intro: 'Vous pouvez planifier le déploiement de {% data variables.product.prodname_actions %} dans votre entreprise.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: ddd394e589b3866e80ba024f99bd2394d1743299
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191861'
---
## À propos de {% data variables.product.prodname_actions %} pour les entreprises

{% data reusables.actions.about-actions %} Avec {% data variables.product.prodname_actions %}, votre entreprise peut automatiser, personnaliser et exécuter vos workflows de développement logiciel comme les tests et les déploiements. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_actions %} pour les entreprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) ».

![Diagramme de travaux s’exécutant sur des exécuteurs auto-hébergés](/assets/images/help/images/actions-enterprise-overview.png)

Avant d’introduire {% data variables.product.prodname_actions %} dans une grande entreprise, il est nécessaire de d’abord établir un plan d’adoption et de prendre des décisions sur la manière dont l’entreprise va utiliser {% data variables.product.prodname_actions %} pour répondre aux mieux à ses besoins uniques.

## Gouvernance et conformité

Vous devez établir un plan pour régir l’utilisation de {% data variables.product.prodname_actions %} dans votre entreprise et satisfaire vos obligations de conformité.

Identifiez les actions {% ifversion actions-workflow-policy %}et les workflows réutilisables{% endif %} que vos développeurs seront autorisés à utiliser. {% ifversion ghes %}Tout d’abord, décidez de permettre ou non l’accès aux actions {% ifversion actions-workflow-policy %}et aux workflows réutilisables{% endif %} de l’extérieur de votre instance. {% data reusables.actions.access-actions-on-dotcom %} Pour plus d’informations, consultez « [À propos de l’utilisation d’actions dans votre entreprise](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise) ».

Ensuite,{% else %}Tout d’abord,{% endif %} décidez ou non d’autoriser des actions tierces {% ifversion actions-workflow-policy %} et des workflows réutilisables{% endif %} qui n’ont pas été créé(e)s par {% data variables.product.company_short %}. Vous pouvez configurer les actions {% ifversion actions-workflow-policy %}et les workflows réutilisables{% endif %} qui sont autorisé(e)s à s’exécuter aux niveaux du dépôt, de l’organisation et de l’entreprise et choisir d’autoriser uniquement les actions qui sont créées par {% data variables.product.company_short %}. Si vous autorisez des actions tierces{% ifversion actions-workflow-policy %} et des workflows réutilisables{% endif %}, vous pouvez limiter les actions autorisées à celles qui ont été créées par des créateurs vérifiés ou à une liste d’actions{% ifversion actions-workflow-policy %} et des workflows réutilisables{% endif %} spécifiques. Pour plus d’informations, consultez « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository) », « [Désactivation ou limitation de {% data variables.product.prodname_actions %} pour votre organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization) » et « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise) ».

{% ifversion actions-workflow-policy %} ![ Capture d’écran de stratégies {% data variables.product.prodname_actions %} ](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![Capture d’écran de stratégies {% data variables.product.prodname_actions %} ](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}

{% ifversion ghec or ghes > 3.4 %} Envisagez de combiner OpenID Connect (OIDC) avec des workflows réutilisables pour appliquer des déploiements cohérents dans votre dépôt, organisation ou entreprise. Pour cela, vous pouvez définir des conditions d’approbation au niveau de rôles cloud en fonction de workflows réutilisables. Pour plus d’informations, consultez « [Utilisation d’OpenID Connect avec des workflows réutilisables](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows) ».
{% endif %}

Vous pouvez accéder à des informations sur l’activité relative à {% data variables.product.prodname_actions %} dans les journaux d’audit de votre entreprise. Si vos besoins métier nécessitent de conserver ces informations plus longtemps que les données des journaux d’audit, réfléchissez à la façon dont vous allez exporter et stocker ces données en dehors de {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez {% ifversion ghec %}« [Activité d’exportation des journaux d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise) » et « [Streaming du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) ». {% else %}{% ifversion audit-log-streaming %}« [Streaming du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) » et {% endif %}« [Transfert de journaux](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding) ». {% endif %}

![Entrées de journal d’audit](/assets/images/help/repository/audit-log-entries.png)

## Sécurité

Vous devez réfléchir à votre approche pour renforcer la sécurité de {% data variables.product.prodname_actions %}.

### Renforcement de la sécurité des différents workflows et dépôts

Établissez un plan pour renforcer les bonnes pratiques de sécurité pour les personnes qui utilisent les fonctionnalités de {% data variables.product.prodname_actions %} au sein de votre entreprise. Pour plus d’informations sur ces pratiques, consultez « [Renforcement de la sécurité pour {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions) ».

Vous pouvez aussi encourager la réutilisation des workflows qui ont déjà été évalués sur la plan de la sécurité. Pour plus d’informations, consultez « [Inner sourcing](#innersourcing) ».

### Sécurisation de l’accès aux secrets et aux ressources de déploiement

Vous devez prévoir où vous allez stocker vos secrets. Nous vous recommandons de stocker les secrets dans {% data variables.product.prodname_dotcom %}, mais vous pouvez choisir de les stocker chez un fournisseur de cloud.

Dans {% data variables.product.prodname_dotcom %}, vous pouvez stocker les secrets au niveau du dépôt ou de l’organisation. Les secrets au niveau du dépôt peuvent être limités aux workflows de certains environnements, par exemple de production ou de test. Pour plus d’informations, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

![Capture d’écran d’une liste de secrets](/assets/images/help/settings/actions-org-secrets-list.png) Vous devez envisager d’ajouter une protection par approbation manuelle pour les environnements sensibles, de sorte que les workflows soient obligatoirement approuvés avant d’accéder aux secrets des environnements. Pour plus d’informations, consultez « [Utilisation d’environnements pour les déploiements](/actions/deployment/targeting-different-environments/using-environments-for-deployment) ».

### Considérations de sécurité pour les actions tierces

Se procurer des actions sur des dépôts tiers de {% data variables.product.prodname_dotcom %} comporte un risque significatif. Si vous autorisez des actions tierces, vous avez tout intérêt à créer des directives internes qui encouragent votre équipe à suivre les bonnes pratiques, notamment en faisant correspondre les actions à un SHA de commit complet. Pour plus d’informations, consultez « [Utilisation d’actions tierces](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions) ».

## Inner sourcing

Réfléchissez à la façon dont votre entreprise peut utiliser les fonctionnalités de {% data variables.product.prodname_actions %} pour l’inner sourcing de l’automatisation. L’inner sourcing est un moyen d’incorporer les avantages des méthodologies open source dans votre cycle de développement logiciel interne. Pour plus d’informations, consultez [An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/) dans {% data variables.product.company_short %} Resources.

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.reusable-workflows-enterprise-beta %} Avec les workflows réutilisables, votre équipe peut appeler un workflow partir d’un autre workflow, ce qui évite une duplication exacte. Les workflows réutilisables favorisent les bonnes pratiques en aidant votre équipe à utiliser des workflows bien conçus et déjà testés. Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/learn-github-actions/reusing-workflows) ».
{% endif %}

Pour offrir aux développeurs un point de départ pour l’élaboration de nouveaux workflows, vous pouvez utiliser des workflows de démarrage. Non seulement ils font gagner du temps aux développeurs, mais ils favorisent également la cohérence et les bonnes pratiques à l’échelle de votre entreprise. Pour plus d’informations, consultez « [Création de workflows de démarrage pour votre organisation](/actions/learn-github-actions/creating-starter-workflows-for-your-organization) ».

{% ifversion not internal-actions %} Chaque fois que vos développeurs de workflows souhaitent utiliser une action stockée dans un dépôt privé, ils doivent d’abord configurer le workflow pour cloner le dépôt. Pour réduire le nombre de dépôts à cloner, envisagez de regrouper les actions couramment utilisées dans un même dépôt. Pour plus d’informations, consultez « [À propos des actions personnalisées](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action) ».
{% endif %}

## Gestion des ressources

Vous devez réfléchir à la façon dont vous allez gérer les ressources nécessaires à l’utilisation de {% data variables.product.prodname_actions %}.

{% ifversion ghes %}
### Configuration matérielle requise

Vous devrez peut-être mettre à niveau les ressources processeur et mémoire pour {% data variables.location.product_location %} de façon à gérer la charge de {% data variables.product.prodname_actions %} sans occasionner de perte de performances. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements) ».
{% endif %}

### Exécuteurs

Les workflows {% data variables.product.prodname_actions %} nécessitent des exécuteurs. {% ifversion ghec %} Vous pouvez choisir d’utiliser des exécuteurs hébergés par {% data variables.product.prodname_dotcom %} ou des exécuteurs auto-hébergés. Les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} sont pratiques dans le sens où ils sont gérées par {% data variables.product.company_short %}, qui assure la maintenance et les mises à niveau à votre place. Cependant, vous pouvez voir dans les exécuteurs auto-hébergés une solution si vous avez besoin d’exécuter un workflow appelé à accéder à des ressources situées derrière votre pare-feu ou si vous souhaitez pouvoir mieux contrôler les ressources, la configuration ou l’emplacement géographique de vos ordinateurs exécuteurs. Pour plus d’informations, consultez « [À propos des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners) » et « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) ».{% else %} Vous serez appelé à héberger vos propres exécuteurs en installant l’application d’exécuteur auto-hébergé {% data variables.product.prodname_actions %} sur vos propres machines. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) ».{% endif %}

{% ifversion ghec %} Si vous utilisez des exécuteurs auto-hébergés, vous devez choisir entre utiliser des machines physiques, des machines virtuelles ou des conteneurs.{% else %}Déterminez si vous voulez utiliser des machines physiques, des machines virtuelles ou des conteneurs pour vos exécuteurs auto-hébergés.{% endif %} Les machines physiques conservent les restes des travaux précédents, tout comme les machines virtuelles, à moins que vous utilisiez une nouvelle image pour chaque travail ou que vous nettoyiez les machines après chaque exécution de travail. Si vous optez pour les conteneurs, sachez que la mise à jour automatique des exécuteurs arrête les conteneurs, ce qui peut entraîner l’échec des workflows. Vous devez trouver une solution à ce problème en empêchant les mises à jour automatiques ou en ignorant la commande afin de tuer le conteneur.

Vous devez aussi choisir à quel emplacement ajouter chaque exécuteur. Vous pouvez ajouter un exécuteur auto-hébergé à un dépôt individuel ou mettre l’exécuteur à la disposition d’une organisation entière ou de l’ensemble de votre entreprise. En ajoutant les exécuteurs au niveau de l’organisation ou de l’entreprise, vous pouvez en assurer le partage et ainsi contribuer à réduire la taille de votre infrastructure d’exécuteurs. Vous pouvez utiliser des stratégies pour limiter l’accès aux exécuteurs auto-hébergés aux niveaux de l’organisation et de l’entreprise en affectant des groupes d’exécuteurs à des dépôts ou des organisations spécifiques. Pour plus d’informations, consultez « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) » et « [Gestion de l’accès aux exécuteurs auto-hébergés en utilisant des groupes](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups) ».

{% ifversion ghec or ghes %} Envisagez d’utiliser la mise à l’échelle automatique pour augmenter ou diminuer automatiquement le nombre d’exécuteurs auto-hébergés disponibles. Pour plus d’informations, consultez « [Mise à l’échelle automatique avec des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners) ».
{% endif %}

Enfin, envisagez de renforcer la sécurité pour les exécuteurs auto-hébergés. Pour plus d’informations, consultez « [Renforcement de la sécurité pour {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners) ».

### Stockage

{% data reusables.actions.about-artifacts %} Pour plus d’informations, consultez « [Stockage des données de workflow sous forme d’artefacts](/actions/advanced-guides/storing-workflow-data-as-artifacts) ». 

{% ifversion actions-caching %}{% data variables.product.prodname_actions %} a également un système de mise en cache que vous pouvez utiliser pour mettre en cache les dépendances afin d’accélérer les exécutions de workflow. Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».{% endif %}

{% ifversion ghes %} Vous devez configurer le stockage d’objets blob externes pour les artefacts de workflow{% ifversion actions-caching %}, les caches{% endif %} et d’autres journaux de workflow. Déterminez quel fournisseur de stockage pris en charge votre entreprise utilisera. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements) ».
{% endif %}

{% ifversion ghec or ghes %}

Vous pouvez utiliser les paramètres de stratégie pour {% data variables.product.prodname_actions %} afin de personnaliser le stockage des artefacts de workflow{% ifversion actions-caching %}, les caches{% endif %} et la conservation des journaux. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise) ».

{% endif %}

{% ifversion ghec %} Même si un certain volume de stockage est inclus dans votre abonnement, l’ajout d’espace de stockage supplémentaire se répercutera sur votre facture. Vous devez prévoir ce coût. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) ».
{% endif %}

## Suivi de l'utilisation

Vous devez envisager de planifier le suivi de l’utilisation de {% data variables.product.prodname_actions %} pour connaître notamment à quelle fréquence les workflows sont exécutés, combien d’exécutions aboutissent et combien échouent et quels dépôts utilisent quels workflows.

{% ifversion ghec %} Des détails sur l’utilisation du stockage et du transfert de données de {% data variables.product.prodname_actions %} pour chaque organisation de votre entreprise sont visibles dans vos paramètres de facturation. Pour plus d’informations, consultez « [Consultation de votre utilisation de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account) ».

Pour obtenir des données d’utilisation plus détaillées, vous{% else %}Vous{% endif %} pouvez utiliser des webhooks pour vous abonner à des informations sur les travaux et les exécutions de workflows. Pour plus d’informations, consultez « [À propos des webhooks](/developers/webhooks-and-events/webhooks/about-webhooks) ».

Réfléchissez à la façon dont votre entreprise peut transmettre les informations de ces webhooks dans un système d’archivage de données. Vous pouvez envisager d’utiliser « CEDAR.GitHub.Collector », outil open source qui collecte et traite les données de webhooks de {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez le [dépôt `Microsoft/CEDAR.GitHub.Collector`](https://github.com/microsoft/CEDAR.GitHub.Collector/).

Vous devez aussi prévoir comment vous allez permettre à vos équipes d’obtenir les données dont elles ont besoin depuis votre système d’archivage.
