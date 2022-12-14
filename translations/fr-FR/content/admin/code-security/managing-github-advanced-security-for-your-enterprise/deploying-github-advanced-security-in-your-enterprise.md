---
title: Déploiement de GitHub Advanced Security dans votre entreprise
intro: Découvrez comment planifier, préparer et implémenter une approche par phases pour le déploiement de {% data variables.product.prodname_GH_advanced_security %} (GHAS) dans votre entreprise.
product: '{% data reusables.gated-features.advanced-security %}'
redirect_from:
- /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
- Advanced Security
- Code scanning
- Enterprise
- Security
ms.openlocfilehash: 7990891fd4b90127ae5f32aa262d6c096d23acab
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147060753"
---
## <a name="overview-of-the-deployment-process"></a>Vue d’ensemble du processus de déploiement

{% data reusables.security.overview-of-phased-approach-for-ghas-rollout %}

Pour obtenir un résumé général de ces différentes phases, consultez « [Vue d’ensemble du déploiement de {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/overview-of-github-advanced-security-deployment) ».

Avant de commencer votre déploiement, nous vous recommandons de passer en revue les prérequis pour l’installation de GHAS ainsi que les bonnes pratiques pour son déploiement dans « [Vue d’ensemble du déploiement de {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/overview-of-github-advanced-security-deployment) ».

## <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 0 : Planification et lancement

{% note %}

{% octicon "clock" aria-label="Clock" %} **Durée estimée :** Nous estimons que la phase 0 peut durer entre environ 1 et 4 semaines. Cette fourchette peut varier en fonction de vos besoins de mise en production et des approbations nécessaires dont votre entreprise peut avoir besoin pour le plan de déploiement.

{% endnote %}

L’objectif de la phase de planification et de lancement est de vérifier que les personnes, les processus et les technologies sont prêts pour l’implémentation de GHAS.

Pour vous aider à obtenir l’adhésion du principal commanditaire, nous vous recommandons de vous préparer et de vous mettre en phase sur un plan de déploiement et sur les objectifs avant de diffuser GHAS dans votre entreprise.

Au titre d’une stratégie de déploiement par phases, nous vous recommandons d’identifier les équipes ou les applications à fort impact et critiques qui devraient rejoindre GHAS avant le reste de l’entreprise.

Si un déploiement par phases ne convient pas pour votre entreprise, vous pouvez passer à la [phase de projet pilote](#--phase-1-pilot-projects).

Si vous utilisez {% data variables.product.prodname_professional_services %}, au cours de cette phase, vous devrez aussi établir un plan qui fixe les axes de collaboration entre les équipes tout au long du processus de déploiement et d’implémentation. L’équipe {% data variables.product.prodname_professional_services_team %} peut vous aider à créer le plan de déploiement par phases et les objectifs, si nécessaire.

### <a name="step-1-kickoff-meeting-with--data-variablesproductprodname_professional_services--optional"></a>Étape 1 : Réunion de lancement avec {% data variables.product.prodname_professional_services %} (facultatif)

Si vous avez souscrit à {% data variables.product.prodname_professional_services %}, vous allez commencer le processus de déploiement et d’implémentation en rencontrant votre représentant Services.

Si vous n’avez pas souscrit à {% data variables.product.prodname_professional_services %}, vous pouvez passer à l’étape suivante.

L’objectif de cette réunion est de communiquer aux deux équipes les informations nécessaires pour commencer à élaborer un plan de déploiement et d’implémentation optimal pour votre entreprise. En guise de préparatifs à cette réunion, nous avons créé une enquête qui nous aidera à mieux préparer la discussion. Votre représentant Services vous soumettra cette enquête.

Pour vous aider à préparer cette réunion initiale, passez en revue les points suivants.

-  Détermination des conditions pour une collaboration optimale entre votre entreprise et {% data variables.product.prodname_professional_services %}
  - Définition des attentes sur la façon d’exploiter au mieux le service par rapport aux heures/jours achetés
  - Plans de communication/fréquence des réunions
  - Rôles et responsabilités
- Analyse du fonctionnement de GHAS dans le cycle de vie de développement logiciel (SDLC). Votre représentant {% data variables.product.prodname_professional_services %} vous expliquera comment fonctionne GHAS.
- Passage en revue des bonnes pratiques pour le déploiement de GHAS. Cela est proposé en guise de remise à niveau si votre équipe le juge utile ou si votre entreprise n’a pas participé à l’exercice de preuve de concept (POC). Ce passage en revue s’accompagne d’une discussion sur votre programme de sécurité des applications existant et sur son niveau de maturité par rapport au modèle de maturité DevSecOps, par exemple.
-  Détermination des étapes suivantes de votre déploiement GHAS. Votre représentant {% data variables.product.prodname_professional_services %} vous décrira les prochaines étapes et le soutien que vous pouvez attendre de votre partenariat.

Pour vous aider à planifier votre stratégie de déploiement, vous pouvez aussi vous attendre à aborder les points suivants :
  - Combien d’équipes seront mises à contribution ?
  - Quelle est l’anatomie des dépôts des équipes ? (Pile technique, outils actuels, etc.)
    - Certains de ces points ont peut-être déjà été abordés au cours de l’exercice Preuve de concept si votre entreprise y a participé. Si ce n’est pas le cas, c’est le moment d’en discuter.
   - Quel est le niveau d’adoption attendu : organique, assisté ou non organique ?
   - À quoi ressemble l’adoption assistée du point de vue de l’allocation de ressources et de la documentation ?
   - Comment gérerez-vous par la suite l’adoption non organique ? (Par exemple, en procédant à l’application d’une stratégie ou en utilisant des workflows gérés de manière centralisée.)

### <a name="step-2-internal-kickoff-at-your-company"></a>Étape 2 : Lancement interne dans votre entreprise

Que votre entreprise choisisse ou non d’utiliser {% data variables.product.prodname_professional_services %}, nous vous recommandons toujours d’attendre que vos propres équipes soient en phase avant de tenir votre propre réunion de lancement.

À l’occasion de cette réunion de lancement, il est important de s’assurer que les objectifs et les attentes sont bien compris et qu’un plan est prévu pour passer au déploiement et à l’implémentation.

Par ailleurs, c’est un moment propice pour commencer à réfléchir à la formation et à la préparation de votre équipe afin qu’elle dispose des bons outils et des compétences pour faciliter le déploiement et l’implémentation de GHAS.

#### <a name="topics-for-your-internal-kickoff-meeting"></a>Questions à traiter lors de votre réunion de lancement interne

Si vous n’avez pas déjà traité ces questions avec le même groupe lors de votre réunion de lancement avec {% data variables.product.prodname_professional_services %}, nous vous recommandons de les aborder à l’occasion de votre réunion de lancement interne dans votre entreprise.

- Quelles sont les métriques de réussite de votre entreprise, comment prévoyez-vous de les mesurer et d’en rendre compte ?
  - Si vous n’avez pas déterminé cela, faites-le. Sinon, communiquez ces éléments et parlez de la façon dont vous prévoyez de fournir des informations sur la progression en fonction des données.
- Analyse de la façon dont GHAS s’inscrit dans le cadre du cycle de vie du développement logiciel et de ce qu’il est censé apporter à votre entreprise.
- Analyse des bonnes pratiques si votre entreprise n’a pas participé à l’exercice Preuve de concept (ou une remise à niveau si votre équipe juge utile de faire cette analyse)
  - Comment se situent-elles par rapport à votre programme de sécurité des applications existant ?
- Discussion autour de la meilleure façon d’optimiser le travail de votre équipe interne tout au long du déploiement et de l’implémentation.
  - Mettez-vous d’accord sur les plans de communication et la fréquence des réunions pour votre équipe interne
  - Passez en revue les tâches à effectuer pour mener à bien le déploiement et l’implémentation, en définissant les rôles et les responsabilités. Nous avons décrit la majorité des tâches dans cet article, mais il se peut que votre entreprise impose d’autres tâches qui ne figurent pas ici.
  - Envisagez d’établir un programme optimal pour une activation à l’échelle
  - Commencez à discuter des délais de réalisation des tâches
- Détermination des approches de déploiement idéales pour votre entreprise. Cette démarche consiste notamment à comprendre quelques aspects importants :
  - Combien d’équipes seront mises à contribution ? Cela a peut-être déjà été abordé au cours de l’exercice Preuve de concept (POC) si votre entreprise y a participé. Si ce n’est pas le cas, c’est le moment d’en discuter.
  - Parmi les applications critiques identifiées pour le déploiement initial, combien d’entre elles sont basées sur une technologie prise en charge par GHAS ?
  - Quelle est l’ampleur des préparatifs que l’organisation doit entreprendre ? Pour en savoir plus, consultez « [Phase 2](#--phase-2-organizational-buy-in--rollout-preparation) ».

### <a name="step-3-prepare-your-rollout--implementation-plan-and-goals"></a>Étape 3 : Préparer votre plan et vos objectifs de déploiement et d’implémentation

Avant de pouvoir aller de l’avant avec les projets pilotes de la première phase du lancement, il est essentiel de s’assurer qu’un plan de déploiement et des objectifs métier ont été établis pour la façon dont votre entreprise envisage la suite.

Si vous utilisez {% data variables.product.prodname_professional_services %}, ces services peuvent jouer un rôle important dans la création de ce plan.

Si vous travaillez de manière indépendante, cette section décrit les éléments que vous devez veiller à intégrer à votre plan pour vous préparer à aller de l’avant.

Plans pour mener à bien les changements de processus (si nécessaire) et former les membres de l’équipe, le cas échéant :
  - Affectation documentée des rôles et des responsabilités aux membres de l’équipe. Pour plus d’informations sur les autorisations nécessaires pour chaque fonctionnalité, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features) ».
  - Plan documenté des tâches et de la chronologie/délais, dans la mesure du possible. Il doit englober les changements d’infrastructure, les changements de processus/la formation et toutes les phases suivantes d’activation de GHAS, prévoyant des délais pour les corrections et les ajustements de configuration nécessaires. Pour plus d’informations, consultez « [Phase 1 : Projets pilotes](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise#--phase-1-pilot-projects) » ci-dessous.
  - Plan hiérarchisé déterminant les projets/équipes pour lesquels GHAS sera activé en premier et plans suivants déterminant les projets/équipes qui accéderont aux phases suivantes
  - Métriques de réussite basées sur les objectifs métier. Il s’agira d’un point de référence crucial à la suite des projets pilotes pour obtenir l’adhésion en vue du déploiement complet.

{% note %}

**Remarque :** Pour faire en sorte que la sensibilisation, l’adhésion et l’adoption soient partagées dans tous les groupes au sein de votre entreprise, il est important de fixer des attentes réalistes concernant le calendrier de déploiement et l’impact sur l’infrastructure, les processus et les workflows de développement courants de votre entreprise. Pour un déploiement plus fluide et abouti, vérifiez que vos équipes de sécurité et de développement ont conscience de l’impact de GHAS.

{% endnote %}

{% ifversion ghes %}

S’agissant des clients {% data variables.product.prodname_ghe_server %}, pour vérifier que votre instance peut prendre en charge le déploiement et l’implémentation de GHAS, examinez les points suivants :

- Même si la mise à niveau vers GHES 3.0 n’est pas obligatoire, vous devez procéder à une mise à niveau vers GHES 3.0 ou une version supérieure pour tirer parti d’ensembles de fonctionnalités comme l’analyse du code et {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Mise à niveau de {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server) ».

- Dans une configuration à haute disponibilité, une appliance {% data variables.product.prodname_ghe_server %} secondaire entièrement redondante reste synchronisée avec l’appliance principale via la réplication de tous les magasins de données principaux. Pour plus d’informations sur la configuration de la haute disponibilité, consultez « [Configuration de la haute disponibilité](/admin/enterprise-management/configuring-high-availability) ».

- Pour faciliter les discussions concernant les éventuelles modifications à apporter à l’installation de votre entreprise, vous pouvez consulter la vue d’ensemble du système {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Vue d’ensemble du système](/admin/overview/system-overview) ».

{% endif %}

### <a name="step-4-establish-a-baseline-of-organizational-insights"></a>Étape 4 : Établir une base de référence d’insights organisationnels

Avant de lancer les projets pilotes de l’entreprise, il est essentiel d’avoir défini une base de référence correspondant à l’état de l’entreprise à cet instant ainsi que des métriques de réussite claires afin de mesurer la progression des projets pilotes.

Votre entreprise aura probablement des objectifs métier clés qui devront être mesurés, mais il existe d’autres mesures que nous pouvons identifier pour aider à évaluer la réussite de votre pilote.

Les métriques suivantes peuvent servir de point de départ :
  - Temps moyen de correction des vulnérabilités GHAS par rapport aux outils et pratiques précédents utilisés par les projets pilotes/les équipes.
  - Résultats de l’intégration de l’analyse du code pour les X applications les plus importantes.
  - Nombre d’applications ayant des tests de sécurité des applications statiques (SAST) intégrés par rapport à la période antérieure à l’engagement.

Si vous avez participé à l’exercice POC avant d’acheter GHAS, ces objectifs peuvent vous sembler familiers. Ces critères de réussite englobent plusieurs objectifs pour les rôles généraux suivants :
  - Équipes d’implémentation et d’administration
  - Sécurité/Responsables de la sécurité des systèmes d’information (CISO)
  - Équipes de développement d’applications

Si vous souhaitez aller plus loin, vous pouvez envisager d’utiliser le modèle DSOMM (DevSecOps Maturity Model) d’OWASP pour atteindre une maturité de niveau 1. Le modèle DSOMM compte quatre critères d’évaluation principaux :

- **Profondeur statique :** En quoi l’analyse statique du code que vous effectuez dans le pipeline d’intégration continue de sécurité des applications est exhaustive
- **Profondeur dynamique :** En quoi l’analyse dynamique qui est exécutée dans le pipeline d’intégration continue de sécurité des applications est exhaustive
- **Intensité :** Fréquence de votre planification des analyses de sécurité s’exécutant dans le pipeline d’intégration continue de sécurité des applications
- **Consolidation :** Votre workflow de correction pour le traitement des résultats et l’exhaustivité des processus

Pour plus d’informations sur cette approche et pour savoir comment l’implémenter dans GHAS, vous pouvez télécharger notre livre blanc « [Achieving DevSecOps Maturity with GitHub](https://resources.github.com/whitepapers/achieving-devsecops-maturity-github/) ».

En tenant compte des objectifs plus globaux de votre entreprise et des niveaux actuels de maturité DevSecOps, nous pouvons vous aider à déterminer comment mesurer au mieux la progression et la réussite de votre pilote.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %}  Phase 1 : Projets pilotes

{% note %}

{% octicon "clock" aria-label="Clock" %} **Durée estimée :** Nous estimons que la phase 1 peut durer entre environ 2 et 3 semaines, voire plus. Cette fourchette peut varier en grande partie selon la complexité de l’infrastructure ou des systèmes de votre entreprise, des processus internes de gestion/approbation de ces modifications et selon que des changements de processus organisationnels plus importants sont nécessaires pour avancer avec GHAS.

{% endnote %}

Pour commencer à activer GHAS dans l’entreprise, nous vous recommandons de commencer par piloter un déploiement initial dans quelques projets ou équipes à fort impact. Cela permettra à un groupe initial au sein de l’entreprise de se familiariser avec GHAS et de créer une base solide sur GHAS avant de procéder à un déploiement dans le reste de l’entreprise.

Avant de lancer vos projets pilotes, nous vous recommandons de planifier des réunions de contrôle pour vos équipes, par exemple une réunion initiale, une analyse à mi-chemin et une session de clôture à la fin du pilote. Ces réunions de contrôle vous aideront à apporter tous les ajustements nécessaires et à vous assurer que vos équipes sont préparées et en mesure de mener à bien le pilote.

Ces étapes vous aideront à activer GHAS dans votre entreprise, à commencer à utiliser ses fonctionnalités et à analyser les résultats.

Si vous utilisez {% data variables.product.prodname_professional_services %}, vous pouvez bénéficier d’une assistance supplémentaire via ce processus avec des sessions d’intégration, des ateliers GHAS et la résolution des problèmes, selon les besoins.

### <a name="step-1-ghas-set-up--installation"></a>Étape 1 : Installation et configuration de GHAS

{% ifversion ghes %}

Si vous n’avez pas déjà activé GHAS pour votre instance {% data variables.product.prodname_ghe_server %}, consultez « [Activation de GitHub Advanced Security pour votre entreprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise) ».

{% endif %}

Vous devez activer GHAS pour chaque projet pilote en activant la fonctionnalité GHAS pour chaque dépôt ou pour tous les dépôts au sein des organisations prenant part au projet. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) » ou « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

L’installation et la configuration de GHAS est en grande partie centrée sur l’activation et la configuration de l’analyse du code dans votre entreprise et dans vos dépôts.

L’analyse du code vous permet d’analyser le code dans un dépôt {% data variables.product.prodname_dotcom %} pour rechercher des vulnérabilités de sécurité et des erreurs de codage. L’analyse du code permet de rechercher, de trier et de hiérarchiser les correctifs pour les problèmes existants à l’intérieur de votre code, mais aussi d’empêcher les développeurs d’en introduire de nouveaux qui pourraient arriver en production. Pour plus d’informations, consultez « [À propos de l’analyse du code](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning) ».

### <a name="step-2-set-up--data-variablesproductprodname_code_scanning_capc-"></a>Étape 2 : Configuration de {% data variables.product.prodname_code_scanning_capc %}

{% ifversion ghes %}

Pour activer l’{% data variables.product.prodname_code_scanning %} dans votre instance {% data variables.product.prodname_ghe_server %}, consultez « [Configuration de l’analyse du code pour votre appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance) ».

{% endif %}

Pour configurer l’analyse du code, vous devez déterminer si vous exécuterez l’analyse du code avec [{% data variables.product.prodname_actions %}](#using-github-actions-for-code-scanning) ou avec votre propre [système d’intégration continue tiers](#using-a-third-party-ci-system-with-the-codeql-cli-for-code-scanning).

#### <a name="using--data-variablesproductprodname_actions--for--data-variablesproductprodname_code_scanning-"></a>Utilisation de {% data variables.product.prodname_actions %} pour l’{% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Pour configurer l’analyse du code avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}, vous devez provisionner un ou plusieurs exécuteurs {% data variables.product.prodname_actions %} auto-hébergées dans votre environnement. Pour plus d’informations, consultez « [Configuration d’un exécuteur auto-hébergé](/admin/advanced-security/configuring-code-scanning-for-your-appliance#running-code-scanning-using-github-actions) ».

{% endif %}

Pour {% data variables.product.prodname_ghe_cloud %}, vous pouvez commencer à créer un workflow {% data variables.product.prodname_actions %} à l’aide de l’[action CodeQL](https://github.com/github/codeql-action/) pour exécuter l’analyse du code dans un dépôt. Par défaut, l’{% data variables.product.prodname_code_scanning_capc %} utilise des [exécuteurs hébergés par GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners), mais si vous envisagez d’héberger votre propre exécuteur avec vos propres spécifications matérielles, vous pouvez personnaliser cela. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners) ».

Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez :
  - « [Découvrir GitHub Actions](/actions/learn-github-actions) »
  - « [Comprendre GitHub Actions](/actions/learn-github-actions/understanding-github-actions) »
  - « [Événements déclencheurs de workflows](/actions/learn-github-actions/events-that-trigger-workflows) »
  - « [Aide-mémoire de modèle de filtre](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet) »

#### <a name="using-a-third-party-ci-system-with-the-codeql-cli-for--data-variablesproductprodname_code_scanning-"></a>Utilisation d’un système d’intégration continue tiers avec CodeQL CLI pour l’{% data variables.product.prodname_code_scanning %}

Si vous n’utilisez pas {% data variables.product.prodname_actions %} et que vous disposez de votre propre système d’intégration continue, vous pouvez utiliser CodeQL CLI pour effectuer l’analyse du code CodeQL dans un système d’intégration continue tiers.

Pour plus d'informations, consultez les pages suivantes :
  - « [À propos de l’analyse du code CodeQL dans votre système d’intégration continue](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system) »

### <a name="step-3-enable--data-variablesproductprodname_code_scanning_capc--in-repositories"></a>Étape 3 : Activer l’{% data variables.product.prodname_code_scanning_capc %} dans les dépôts

Si vous déployez GHAS en suivant une approche par phases, nous vous recommandons d’activer l’{% data variables.product.prodname_code_scanning %} dépôt par dépôt dans le cadre de votre plan de déploiement. Pour plus d’informations, consultez « [Configuration de l’analyse du code pour un dépôt](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) ».

Si vous ne prévoyez pas de suivre une approche de déploiement par phases et que vous souhaitez activer l’analyse du code pour un grand nombre de dépôts, vous pouvez scripter le processus.

Pour voir un exemple de script qui ouvre des demandes de tirage (pull requests) en vue d’ajouter un workflow {% data variables.product.prodname_actions %} à plusieurs dépôts, consultez le dépôt [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) pour obtenir un exemple utilisant PowerShell, ou [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) pour les équipes qui n’ont pas PowerShell et qui souhaitent utiliser NodeJS.

### <a name="step-4-run-code-scans-and-review-your-results"></a>Étape 4 : Exécuter des analyses de code et examiner les résultats

En ayant l’analyse du code activée dans les dépôts nécessaires, vous pouvez aider vos équipes de développement à comprendre comment exécuter des analyses de code et des rapports, à consulter les rapports et à traiter les résultats.

#### <a name="-data-variablesproductprodname_code_scanning_capc-"></a>{% data variables.product.prodname_code_scanning_capc %}

Avec l’analyse du code, vous pouvez non seulement détecter les vulnérabilités et les erreurs dans le code de votre projet sur GitHub, mais aussi examiner, trier, comprendre et résoudre les alertes d’{% data variables.product.prodname_code_scanning %} associées.

Quand l’analyse du code identifie un problème dans une demande de tirage, vous pouvez passer en revue le code mis en surbrillance et résoudre l’alerte. Pour plus d’informations, consultez « [Triage des alertes d’{% data variables.product.prodname_code_scanning %} dans les demandes de tirage](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests) ».

Si vous disposez d’une autorisation d’accès en écriture à un dépôt, vous pouvez gérer les alertes d’analyse du code pour ce dépôt. Avec l’autorisation d’accès en écriture sur un dépôt, {% ifversion delete-code-scanning-alerts %}vous pouvez voir, corriger, ignorer ou supprimer les alertes {% else %}vous pouvez voir, corriger ou ignorer les alertes{% endif %} liées à des vulnérabilités ou des erreurs potentielles dans le code de votre dépôt. Pour plus d’informations, consultez « [Gestion des alertes d’analyse du code pour votre dépôt](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository) ».

#### <a name="generate-reports-of--data-variablesproductprodname_code_scanning--alerts"></a>Générer des rapports d’alertes d’{% data variables.product.prodname_code_scanning %}

Si vous souhaitez créer un rapport de vos alertes d’analyse de code, vous pouvez utiliser l’API {% data variables.product.prodname_code_scanning_capc %}. Pour plus d’informations, consultez « [API d’{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning) ».

Pour obtenir un exemple d’utilisation de l’API {% data variables.product.prodname_code_scanning_capc %}, consultez le dépôt [`get-code-scanning-alerts-in-org-sample`](https://github.com/jhutchings1/get-code-scanning-alerts-in-org-sample).

### <a name="step-5-configure--data-variablesproductprodname_code_scanning_capc--to-fine-tune-your-results"></a>Étape 5 : Configurer {% data variables.product.prodname_code_scanning_capc %} pour affiner vos résultats

Quand vous exécutez des analyses de code initiales, vous pouvez constater qu’aucun résultat n’est trouvé ou qu’un nombre de résultats retournés est inhabituel. Vous pouvez ajuster ce qui sera marqué dans les futures analyses.

Pour plus d’informations, consultez « [Configuration de l’analyse du code](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning) ».

Si votre entreprise souhaite utiliser d’autres outils d’analyse de code tiers avec l’analyse du code GitHub, vous pouvez utiliser des actions pour exécuter ces outils dans GitHub. Vous pouvez aussi charger les résultats générés par des outils tiers sous forme de fichiers SARIF à des fins d’analyse du code. Pour plus d’informations, consultez « [Intégration à l’analyse du code](/code-security/code-scanning/integrating-with-code-scanning) ».

### <a name="step-6-set-up-secret-scanning"></a>Étape 6 : Configurer l’analyse des secrets

GitHub analyse les types de secrets connus dans les dépôts pour éviter une utilisation frauduleuse des secrets commités accidentellement.

{% ifversion ghes %}

Pour activer l’analyse des secrets pour votre instance {% data variables.product.prodname_ghe_server %} , consultez « [Configuration de l’analyse des secrets pour votre appliance](/admin/advanced-security/configuring-secret-scanning-for-your-appliance) ».

{% endif %}

Vous devez activer l’analyse des secrets pour chaque projet pilote en activant la fonctionnalité pour chaque dépôt ou pour tous les dépôts au sein des organisations prenant part au projet. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) » ou « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

Pour savoir comment consulter et fermer les alertes pour les secrets archivés dans votre dépôt, consultez « [Gestion des alertes de l’analyse des secrets](/code-security/secret-scanning/managing-alerts-from-secret-scanning) ».

### <a name="step-7-set-up-dependency-management"></a>Étape 7 : Configuration de la gestion des dépendances

GitHub vous évite d’utiliser des logiciels tiers qui contiennent des vulnérabilités connues. Nous fournissons les outils suivants pour la mise à jour des dépendances vulnérables{% ifversion GH-advisory-db-supports-malware %} et la suppression des logiciels malveillants{% endif %}.

| Outil de gestion des dépendances | Description |
|----|----|
| Alertes Dependabot | Vous pouvez suivre les dépendances de votre dépôt et recevoir des alertes Dependabot quand votre entreprise détecte des dépendances non sécurisées. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies) ». |
| Graphe de dépendances | Le graphe de dépendances est un résumé des fichiers manifeste et des fichiers de verrouillage stockés dans un dépôt. Il vous montre les écosystèmes et les packages dont dépend votre codebase (ses dépendances) et les dépôts et les packages qui dépendent de votre projet (ses dépendants). Pour plus d’informations, consultez « [À propos du graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) ». |{% ifversion ghes or ghec %}
| Révision des dépendances | Si une demande de tirage contient des modifications de dépendances, vous pouvez afficher un résumé de ce qui a changé et déterminer s’il existe des vulnérabilités connues dans l’une des dépendances. Pour plus d’informations, consultez « [À propos de la révision des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) » ou « [Examen des modifications de dépendances dans une demande de tirage](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request) ». | {% endif %} {% ifversion ghec or ghes > 3.2 %}
| Mises à jour de sécurité Dependabot | Dependabot peut corriger automatiquement les dépendances vulnérables en formulant des demandes de tirage avec des mises à jour de sécurité. Pour plus d’informations, consultez « [À propos des mises à jour de sécurité Dependabot](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) ». |
| À propos des mises à jour de version Dependabot | Dependabot permet de tenir à jour les packages que vous utilisez avec les dernières versions. Pour plus d’informations, consultez « [À propos des mises à jour de version Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates) ». | {% endif %}

{% data reusables.dependabot.beta-security-and-version-updates-onboarding %}

### <a name="step-8-establish-a-remediation-process"></a>Étape 8 : Établir un processus de correction

Une fois que vos équipes ont réussi à exécuter des analyses, à identifier des vulnérabilités et des dépendances et à exploiter les résultats de chaque fonctionnalité de sécurité, l’étape suivante consiste à corriger les vulnérabilités identifiées dans leurs processus de développement normaux sans faire appel à votre équipe de sécurité.

Cela signifie que les équipes de développement doivent savoir utiliser les fonctionnalités de GHAS tout au long du processus de développement, exécuter des analyses, lire les rapports, exploiter les résultats et corriger les vulnérabilités dans le cadre de leurs workflows de développement normaux, sans passer par une phase de sécurité distincte à la fin du développement ou sans avoir besoin de faire appel à votre équipe de sécurité pour interpréter les rapports/résultats.

### <a name="step-9-set-up-custom-analysis-if-needed"></a>Étape 9 : Configurer une analyse personnalisée si nécessaire

L’analyse personnalisée est une utilisation de l’analyse du code plus poussée et facultative qui s’avère utile quand le jeu de requêtes par défaut (et de la communauté) disponible ne suffit pas et que des requêtes CodeQL personnalisées sont nécessaires. Le besoin en requêtes personnalisées est rare.

L’utilisation de requêtes personnalisées vise à identifier les alertes de sécurité personnalisées ou à aider les développeurs à suivre des standards de codage en détectant certains modèles de code.

Si votre entreprise souhaite écrire des requêtes CodeQL personnalisées, elle doit remplir certaines conditions.

Si votre équipe peut fournir des exemples de vulnérabilités existantes qu’elle souhaite trouver via CodeQL, informez-en l’équipe GitHub. Nous organiserons une session d’introduction pour examiner les principes de base du langage et discuter de la façon de résoudre l’un de vos problèmes. Si vous souhaitez en savoir plus sur CodeQL, nous proposons des options d’engagement supplémentaires pour couvrir d’autres sujets et permettre à votre équipe de créer ses propres requêtes.

Pour plus d’informations sur les [requêtes CodeQL](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/), consultez notre [documentation CodeQL](https://codeql.github.com/docs/codeql-overview/) ou contactez votre représentant commercial ou l’équipe {% data variables.product.prodname_professional_services %}.

### <a name="step-10-create--maintain-documentation"></a>Étape 10 : Créer et tenir à jour une documentation

Tout au long de la phase pilote, il est essentiel de créer et de tenir à jour une documentation interne de haute qualité sur l’infrastructure et les changements de processus apportés au sein de votre entreprise et sur les enseignements tirés du processus pilote et des changements de configuration apportés à mesure que vos équipes ont progressé dans le processus de déploiement et d’implémentation.

Une documentation approfondie et complète permet de faire des phases restantes de votre déploiement un processus plus reproductible.
Une bonne documentation est aussi l’assurance que les nouvelles équipes pourront être intégrées de manière cohérente tout au long du processus de déploiement et à mesure que de nouveaux membres rejoindront vos équipes.

Le déploiement et l’implémentation ne marquent pas la fin d’une bonne documentation. La documentation la plus utile est activement mise à jour et évolue à mesure que vos équipes gagnent en expérience dans l’utilisation de GHAS et que leurs besoins augmentent.

Outre la documentation, nous recommandons à votre entreprise d’offrir à vos équipes la possibilité de bénéficier d’un support et de conseils efficaces tout au long du déploiement, de l’implémentation et au-delà. Selon le niveau de changement que doit opérer votre entreprise pour faciliter le déploiement et l’implémentation de GHAS, le fait d’avoir des équipes bien épaulées vous aidera à garantir une adoption réussie dans le workflow quotidien des équipes de développement.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %}  Phase 2 : Adhésion organisationnelle et préparation du déploiement

{% note %}

{% octicon "clock" aria-label="Clock" %} **Durée estimée :** Nous estimons que la phase 2 peut durer entre environ une semaine et un mois ou plus. Cette fourchette peut varier grandement en fonction des processus d’approbation internes de votre entreprise.

{% endnote %}

L’un des principaux objectifs de cette phase est de veiller à obtenir l’adhésion organisationnelle pour faire du déploiement complet de GHAS une réussite.

Au cours de cette phase, votre entreprise examine les résultats des projets pilotes pour déterminer s’ils ont abouti, évalue les ajustements qui peuvent s’avérer nécessaires et juge si l’entreprise est prête à avancer dans le déploiement.

Selon le processus d’approbation de votre entreprise, l’adhésion organisationnelle du principal commanditaire peut être nécessaire pour aller de l’avant. Dans la plupart des cas, l’adhésion organisationnelle de vos équipes est nécessaire pour commencer à profiter des avantages de GHAS dans votre entreprise.

Avant de passer à la phase suivante du déploiement de GHAS à l’échelon plus large de l’entreprise, des modifications sont souvent apportées au plan de déploiement d’origine en tenant compte des enseignements du pilote.

Selon leur impact, les changements d’avoir être répercutés dans la documentation pour que celle-ci reste à jour pour la suite du déploiement.

Si ce n’est pas déjà le cas, nous vous recommandons également de prendre en compte dans votre plan la formation des équipes ou de leurs membres qui seront initiés à GHAS dans les phases suivantes de votre déploiement.

### <a name="step-1-organize-results"></a>Étape 1 : Organiser les résultats

À l’issue de la phase 1, {% ifversion ghes %} GHAS doit avoir été activé dans votre instance {% data variables.product.prodname_ghe_server %} et vos équipes {% endif %} doivent avoir pu utiliser avec succès toutes les fonctionnalités clés de GHAS, en ayant éventuellement apporté des changements à la configuration pour optimiser les résultats. Si votre entreprise a clairement défini des métriques de réussite dans la phase 0, vous devriez pouvoir évaluer la réussite de votre pilote en mesurant ces métriques.

Il est important de revoir vos métriques de base au moment de la préparation des résultats de façon à mettre en évidence la progression graduelle en fonction des métriques recueillies à partir du pilote par rapport à vos objectifs métier d’origine. Si vous avez besoin d’aide à ce niveau, GitHub peut vérifier que votre entreprise dispose des métriques appropriées pour mesurer votre progression. Pour plus d’informations sur l’aide disponible, consultez « [Services et support GitHub](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support) ».

### <a name="step-2-secure-organizational-buy-in"></a>Étape 2 : Obtenir l’adhésion organisationnelle

L’adhésion organisationnelle varie en fonction de divers facteurs, notamment de la taille de votre entreprise, du processus d’approbation ou même du niveau de modification nécessaire pour déployer GHAS.

Pour certaines entreprises, une seule réunion peut suffire à obtenir l’adhésion, mais pour d’autres, ce processus peut prendre du temps (des semaines voire des mois). L’adhésion peut nécessiter l’approbation de votre commanditaire principal ou l’adoption de GHAS dans les workflows quotidiens de vos équipes.

La durée de cette phase dépend entièrement de votre entreprise et de la vitesse à quelle elle entend procéder. Dans la mesure du possible, nous vous recommandons de faire appel à GitHub afin de bénéficier de son support ou de ses services afin d’obtenir des réponses à vos interrogations ainsi que des recommandations susceptibles de vous aider dans ce processus. Pour plus d’informations sur l’aide disponible, consultez « [Services et support GitHub](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support) ».

### <a name="step-3-revise-and-update-documentation"></a>Étape 3 : Réviser et mettre à jour la documentation

Passez en revue les résultats et les découvertes de vos projets pilotes ainsi que les besoins des équipes restantes de votre entreprise. En fonction de vos découvertes et de l’analyse des besoins, mettez à jour/révisez votre documentation.

Nous avons constaté qu’il est essentiel de veiller à ce que votre documentation soit à jour avant de poursuivre le déploiement dans le reste de l’entreprise.

### <a name="step-4-prepare-a-full-rollout-plan-for-your-company"></a>Étape 4 : Préparer un plan de déploiement complet pour votre entreprise

À partir des enseignements que vous avez tirés de vos projets pilotes, mettez à jour le plan de déploiement que vous avez conçu à l’étape 0. Pour préparer le déploiement dans votre entreprise, réfléchissez à la formation dont vos équipes auront besoin, par exemple une formation sur l’utilisation de GHAS, les changements de processus ou une formation sur la migration si votre entreprise migre vers GitHub.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %}  Phase 3 : Déploiement complet dans l’organisation et gestion des changements

{% note %}

{% octicon "clock" aria-label="Clock" %} **Durée estimée :** Nous estimons que la phase 3 peut durer entre 2 semaines et plusieurs mois. Cette fourchette peut varier grandement selon la taille de votre entreprise, le nombre de dépôts/équipes, l’ampleur des changements que signifie le déploiement de GHAS pour votre entreprise, etc.

{% endnote %}

Une fois que votre entreprise s’est alignée sur les résultats et les découvertes de vos projets pilotes et que toutes les étapes de préparation du déploiement ont été effectuées depuis la phase 2, vous pouvez passer au déploiement complet dans votre entreprise en suivant votre plan.

### <a name="step-1-evaluate-your-rollout-as-you-go"></a>Étape 1 : Évaluer votre déploiement au fur et à mesure

Si vous déployez GHAS selon une approche par phases, nous vous recommandons de faire une courte pause et de réaliser une évaluation sommaire après avoir déployé GHAS dans une partie différente de votre entreprise pour vous assurer que le déploiement s’opère en douceur. Le but de votre évaluation peut être de s’assurer que les équipes ont les moyens d’agir et qu’elles sont bien formées, que les besoins uniques de configuration de GHAS sont satisfaits et que les plans et la documentation peuvent être ajustés selon les besoins.

### <a name="step-2-set-up-any-needed-training"></a>Étape 2 : Définir les besoins en formation

Si vous prévoyez de déployer GHAS pour des équipes non visées par le projet pilote, il est important de vérifier que les équipes sont formées ou qu’il existe des ressources de formation vers lesquelles elles pourront se tourner en cas de besoin.

D’après nos observations, voici les principaux domaines dans lesquels les entreprises ont généralement besoin d’une aide supplémentaire :
  - formation sur GHAS
  - formation pour les nouveaux clients de GitHub
  - formation sur la migration vers GitHub

Notre équipe {% data variables.product.prodname_professional_services_team %} offre un large éventail de services de formation, de bootcamps et de conseils généraux pour assister vos équipes tout au long du processus de déploiement et d’implémentation. Pour plus d’informations, consultez « [Services et support GitHub](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support) ».

Voici un récapitulatif de la documentation de support GitHub disponible pour vos équipes.

Pour obtenir de la documentation sur l’activation de GHAS, consultez :
  - « [Activation des fonctionnalités Advanced Security](/get-started/learning-about-github/about-github-advanced-security) »
  - « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) »
  - « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) »

Pour obtenir de la documentation sur la migration vers GitHub, consultez :
  - « [Importation de code source dans GitHub](/github/importing-your-projects-to-github/importing-source-code-to-github) »

Pour obtenir de la documentation sur la prise en main de GitHub, consultez :
  - « [Bien démarrer](/get-started) »

### <a name="step-3-help-your-company-manage-change"></a>Étape 3 : Aider votre entreprise à gérer le changement

À l’étape 4 de la phase 2, nous vous avons recommandé de mettre à jour le plan de déploiement initial en tenant compte des enseignements que vous aviez tirés des projets pilotes. Continuez à mettre à jour votre plan à mesure que vous implémentez les changements organisationnels nécessaires à la réussite du déploiement de GHAS dans votre entreprise.

La réussite des déploiements de GHAS et l’adoption des bonnes pratiques dans les workflows quotidiens dépendent de la capacité de vos équipes à comprendre la nécessité d’inclure de la sécurité dans leur travail.

### <a name="step-4-continued-customization"></a>Étape 4 : Personnalisation continue

Le déploiement de GHAS dans votre entreprise ne marque pas pour autant la fin de sa configuration et sa personnalisation. Vous devez continuer de personnaliser la configuration au fil du temps de sorte que GHAS continue de répondre aux besoins évolutifs de votre entreprise.

À mesure qu’elle gagnera en expérience et en compétences dans l’utilisation de GHAS, votre équipe aura d’autres occasions de pousser la personnalisation.
