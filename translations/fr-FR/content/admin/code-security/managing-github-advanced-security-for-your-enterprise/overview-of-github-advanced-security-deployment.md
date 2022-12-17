---
title: Vue d’ensemble du déploiement de GitHub Advanced Security
intro: Aidez votre entreprise à se préparer correctement à l’adoption de {% data variables.product.prodname_GH_advanced_security %} (GHAS) en passant en revue et en comprenant ces bonnes pratiques, ces exemples de déploiement ainsi que notre approche par phases testée en entreprise.
product: '{% data variables.product.prodname_GH_advanced_security %} is a set of security features designed to make enterprise code more secure. It is available for {% data variables.product.prodname_ghe_server %} 3.0 or higher, {% data variables.product.prodname_ghe_cloud %}, and open source repositories. To learn more about the features, included in {% data variables.product.prodname_GH_advanced_security %}, see "[About GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)."'
redirect_from:
- /admin/advanced-security/overview-of-github-advanced-security-deployment
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
ms.openlocfilehash: 9c58cc8cca76a19ccc1aa36770e4cafcf4c9fcc7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145107022"
---
{% data variables.product.prodname_GH_advanced_security %} (GHAS) permet aux équipes de générer un code plus sécurisé et de façon plus rapide à l’aide des outils intégrés comme CodeQL, le moteur d’analyse de code sémantique le plus avancé au monde. GHAS est une suite d’outils qui demande une participation active des développeurs au sein de votre entreprise. Pour bénéficier du meilleur retour sur investissement et bien protéger votre code, vous devez apprendre à utiliser, appliquer et maintenir GHAS.

L’une des principales difficultés auxquelles une entreprise peut être confrontée au moment d’adopter un nouveau logiciel est son processus de déploiement et d’implémentation, mais aussi le changement culturel à opérer pour favoriser l’adhésion de l’organisation nécessaire à la réussite du déploiement.

Pour aider votre entreprise à mieux comprendre et préparer ce processus avec GHAS, cette vue d’ensemble vise à :
  - Vous présenter un aperçu de ce à quoi un déploiement GHAS pourrait ressembler dans votre entreprise.
  - Vous aider à préparer votre entreprise à un déploiement.
  - Partage les bonnes pratiques en vue d’optimiser le déploiement dans votre entreprise.

Pour comprendre les fonctionnalités de sécurité disponibles via {% data variables.product.prodname_GH_advanced_security %}, consultez « [Fonctionnalités de sécurité {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features) ».

## <a name="recommended-phased-approach-for-ghas-rollouts"></a>Approche recommandée par phases pour les déploiements de GHAS

Nous avons créé une approche de déploiement de GHAS par phases qui s’appuie sur les bonnes pratiques du secteur et de GitHub. Vous pouvez utiliser cette approche pour votre déploiement, que ce soit en partenariat avec {% data variables.product.prodname_professional_services %} ou à titre indépendant.

Même si l’approche par phases est recommandée, des ajustements peuvent être apportés pour répondre aux besoins de votre entreprise. Nous vous suggérons aussi d’établir la chronologie de votre déploiement et de votre implémentation et de la respecter. Quand vous vous lancerez dans la planification, vous pourrez vous rapprocher de nous pour identifier l’approche et la chronologie idéales pour votre entreprise.

![Diagramme présentant les trois phases de déploiement de GitHub Advanced Security : Phase 0 : Planification et lancement, Phase 1 : Projets pilotes, Phase 2 : Adhésion de l’organisation et déploiement pour les utilisateurs précoces et Phase 3 : Déploiement complet dans l’organisation et gestion des changements](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


Compte tenu de notre expérience en matière d’accompagnement des clients dans le déploiement de {% data variables.product.prodname_GH_advanced_security %}, la plupart des clients devraient décider de passer par ces phases. Selon les besoins de votre entreprise, vous devrez peut-être adapter cette approche et modifier ou supprimer certaines phases ou étapes.

Pour obtenir un guide détaillé sur l’implémentation de chacune de ces phases, consultez « [Déploiement de {% data variables.product.prodname_GH_advanced_security %} dans votre entreprise](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise) ». La section suivante vous donne un aperçu général de chacune de ces phases.

###  <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 0 : Planification et lancement

L’objectif général de cette phase est de planifier et de préparer votre déploiement, en vérifiant que vous disposez des personnes, des processus et des technologies nécessaires. Vous devez aussi réfléchir aux critères de réussite qui seront utilisés pour mesurer l’adoption et l’utilisation de GHAS dans vos équipes.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %}  Phase 1 : Projets pilotes

Pour commencer à implémenter GHAS, nous vous recommandons de commencer par piloter un déploiement initial dans quelques projets/équipes à fort impact. Cela permettra à un groupe initial au sein de l’entreprise de se familiariser avec GHAS, d’apprendre à activer et à configurer GHAS et de créer une base solide sur GHAS avant de procéder à un déploiement dans le reste de l’entreprise.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %}  Phase 2 : Adhésion organisationnelle et préparation du déploiement

La phase 2 est un récapitulatif des phases précédentes et une préparation pour un déploiement de plus grande envergure dans le reste de l’entreprise. Dans cette phase, l’adhésion organisationnelle peut faire référence à la décision de votre entreprise d’aller de l’avant après les projets pilotes ou à son utilisation et à son adoption de GHAS dans le temps (cas le plus courant). Si votre entreprise décide d’adopter GHAS au fil du temps, la phase 2 peut laisser la place à la phase 3 et au-delà.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %}  Phase 3 : Déploiement complet dans l’organisation et gestion des changements

Dès lors qu’il existe une cohésion dans votre entreprise, vous pouvez commencer à déployer GHAS dans le reste de l’entreprise selon votre plan de déploiement. Au cours de cette phase, il est essentiel de s’assurer qu’un plan a été établi pour les changements organisationnels qu’il peut s’avérer nécessaire d’opérer durant votre déploiement de GHAS et de veiller à ce que les équipes comprennent la nécessité, l’intérêt et l’impact du changement dans les workflows actuels.

## <a name="best-practices-for-a-successful-ghas-rollout"></a>Bonnes pratiques pour un déploiement de GHAS réussi

Nous avons découvert que les entreprises qui avaient réussi leur déploiement de GHAS avaient plusieurs caractéristiques similaires qui favorisent le succès. Pour aider votre entreprise à augmenter les chances de succès dans votre déploiement de GHAS, prenez connaissance de ces bonnes pratiques.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--set-clear-goals-for-your-companys-rollout"></a>{% octicon "checklist" aria-label="The checklist icon" %} Fixer des objectifs clairs pour le déploiement de votre entreprise

Même si la nécessité de fixer des objectifs semble une évidence, nous voyons certaines entreprises s’engager dans des déploiements de GHAS sans objectifs clairement définis. Il est plus difficile pour ces entreprises d’obtenir une véritable adhésion de l’organisation nécessaire à la finalisation du processus de déploiement et d’exploiter toute la valeur de GHAS au sein de l’entreprise.

Au moment de débuter la planification de votre déploiement et de votre implémentation, commencez par décrire les objectifs pour GHAS dans votre entreprise et veillez à les communiquer à votre équipe. Ces objectifs peuvent être très détaillés ou simples, du moment qu’il existe un point de départ et une cohésion. Cela vous aidera à jeter les bases du déploiement de votre entreprise et à établir un plan pour y parvenir. Si vous avez besoin d’aide pour fixer vos objectifs, {% data variables.product.prodname_professional_services %} peut vous faire des suggestions basées sur notre expérience avec votre entreprise et sur nos engagements antérieurs auprès d’autres clients.

Voici quelques exemples schématiques de ce à quoi vos objectifs de déploiement de GHAS pourraient ressembler :
  - **Réduction du nombre de vulnérabilités :** Il peut s’agir d’un objectif général ou la conséquence d’une vulnérabilité importante dont votre entreprise a été victime dernièrement et qui, selon vous, aurait pu être évitée par un outil comme GHAS.
  - **Identification des dépôts à haut risque :** Certaines entreprises peuvent simplement souhaiter cibler les dépôts les plus à risque, prêtes à commencer à corriger les vulnérabilités et à limiter les risques.
  -  **Augmentation du taux de correction :** Cet objectif peut être atteint en incitant les développeurs à adopter les découvertes et en veiller à ce que ces vulnérabilités soient corrigées en temps voulu, empêchant ainsi l’accumulation de la dette de sécurité.  
  - **Respect des exigences de conformité :** Cela peut consister simplement à créer de nouvelles exigences de conformité ou quelque chose de plus spécifique. Un grand nombre d’entreprises du secteur de la santé utilisent GHAS pour empêcher l’exposition des informations personnelles de santé.
  - **Prévention des fuites de secrets :** Il s’agit souvent d’un objectif d’entreprises qui ont subi une fuite de données critiques (ou qui souhaitent l’empêcher) comme des clés logicielles, des données de clients ou financières, etc.
  - **Gestion des dépendances :** Il s’agit souvent d’un objectif pour les entreprises qui ont été victimes d’actes de piratage de dépendances non corrigées ou qui cherchent à éviter ces types d’attaques en mettant à jour les dépendances vulnérables.  

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--establish-clear-communication-and-alignment-between-your-teams"></a>{% octicon "checklist" aria-label="The checklist icon" %} Établir une communication et une cohérence claires entre vos équipes

Une communication et une cohérence claires sont essentielles à la réussite de tout projet, et le déploiement de GHAS n’échappe pas à la règle. Nous avons constaté que dans les entreprises où il existait une communication et une cohésion claires entre les groupes de sécurité et de développement, mais également avec leur commanditaire principal (CISO ou VP), de l’achat de GHAS jusqu’à son déploiement, la réussite du déploiement était souvent au rendez-vous.

En plus de veiller à la cohésion entre ces groupes tout au long de votre déploiement de GHAS, nous vous recommandons de vous concentrer sur plusieurs points spécifiques.

#### <a name="rollout-planning"></a>Planification du déploiement

Comment allez-vous déployer GHAS dans votre entreprise ? Il y aura probablement beaucoup d’idées et de points de vue différents. Voici quelques questions sur lesquelles vous devriez vous pencher et vous accorder avant de passer à l’action :
  - Quelles équipes seront incluses dans le pilote ?
  - Quels projets sont visés dans le pilote ?
  - Comment les projets doivent-ils être hiérarchisés pour le déploiement ?
  - Comment envisagez-vous de mesurer la réussite dans le pilote et au-delà ?
  - Dans quelle mesure vos équipes sont-elles prêtes à opérer des changements au quotidien ? Quelle communication sera mise en place autour de cela ?
  - Comment vos plans de déploiement seront-ils communiqués au sein de l’entreprise ?
  - Comment prévoyez-vous de former vos équipes ?
  - Comment envisagez-vous de gérer les résultats de l’analyse au départ ? (Pour plus d’informations, consultez la section suivante « Traitement des résultats »)

#### <a name="processing-results"></a>Traitement des résultats

Avant que GHAS soit déployé pour vos équipes, il doit exister une cohésion claire sur la façon dont les résultats doivent être gérés dans le temps. Nous vous recommandons dans un premier temps d’envisager les résultats davantage comme une information plutôt qu’un blocage. Il est probable que votre entreprise dispose d’un pipeline CI/CD complet. Nous vous recommandons donc cette approche pour éviter de bloquer le processus de votre entreprise. À mesure que vous vous familiariserez avec le traitement de ces résultats, vous pourrez augmenter progressivement le niveau de restriction jusqu’à un point qui semble plus précis pour votre entreprise.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon---lead-your-rollout-with-both-your-security-and-development-groups"></a>{% octicon "checklist" aria-label="The checklist icon" %}  Mener votre déploiement avec vos groupes de sécurité et de développement

De nombreuses entreprises mènent leurs efforts de déploiement de GHAS avec leur groupe de sécurité. Souvent, les équipes de développement ne sont pas incluses dans le processus de déploiement tant que le pilote n’est pas terminé. Cependant, nous avons constaté que les entreprises qui menaient leurs déploiements avec leurs équipes de sécurité et de développement avaient tendance à mieux réussir leur déploiement GHAS.

Pourquoi ? GHAS a une approche de la sécurité logicielle qui est axée sur le développeur en s’intégrant parfaitement dans le workflow du développeur. Le fait de ne pas avoir une représentation clé de votre groupe de développement au début du processus augmente le risque de votre déploiement et crée des obstacles à l’adhésion de l’organisation.

Quand les groupes de développement sont impliqués à un stade plus précoce (idéalement dès l’achat), les groupes de sécurité et de développement peuvent parvenir à une cohésion tôt dans le processus. Cela permet d’éliminer les silos entre les deux groupes, de développer et renforcer leurs relations de travail, et cela évite l’impression courante de cloisonnement entre les groupes. Tout cela concourt à soutenir l’objectif global d’aider les entreprises à changer et à commencer à utiliser GHAS pour se préoccuper des problèmes de sécurité plus tôt dans le processus de développement.

#### <a name="-octicon-people-aria-labelthe-people-icon--recommended-key-roles-for-your-rollout-team"></a>{% octicon "people" aria-label="The people icon" %} Rôles clés recommandés pour votre équipe de déploiement

Nous vous recommandons de doter votre équipe de quelques rôles clés de façon à bien représenter vos groupes tout au long de la planification et de l’exécution de votre déploiement et de votre implémentation.

Nous recommandons vivement de doter votre équipe de déploiement de ces rôles :
- **Commanditaire principal :** Il s’agit souvent du CISO, du CIO, du VP de la sécurité ou du VP de l’ingénierie.
- **Responsable technique de la sécurité :** Le responsable technique de la sécurité assure un support technique au nom de l’équipe de sécurité tout au long du processus d’implémentation.
- **Responsable technique du développement :** Le responsable technique du développement assure le support technique et dirigera probablement l’effort d’implémentation avec l’équipe de développement.  

Nous recommandons aussi de doter votre équipe de déploiement de ces rôles :
- **Chef de projet :** Nous avons constaté que les chances de réussite étaient plus élevées en introduisant un chef de projet le plus tôt possible dans le processus de déploiement.  
- **Ingénieur assurance qualité :** L’inclusion d’un membre de l’équipe Assurance qualité de votre entreprise favorise la prise en compte des changements de processus pour l’équipe AQ.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--understand-key-ghas-facts-to-prevent-common-misconceptions"></a>{% octicon "checklist" aria-label="The checklist icon" %} Comprendre les éléments clés de GHAS pour éviter les erreurs courantes

Avant de s’engager dans l’implémentation de GHAS, il est important de comprendre quelques éléments clés essentiels sur les caractéristiques et les fonctionnalités de GHAS, ceci afin d’éviter de nombreuses erreurs courantes qu’ont pu commettre certaines entreprises au cours de leur déploiement de GHAS.

{% note %}

**Remarque :** Si vous souhaitez approfondir vos connaissances de GHAS, {% data variables.product.prodname_professional_services %} vous propose divers moyens de compléter vos connaissances et votre formation, notamment sur ce dont a besoin votre entreprise pour se préparer à GHAS. Ces offres peuvent prendre la forme d’ateliers, de démonstrations et de bootcamps. Les sujets abordés vont du déploiement de GHAS et de l’utilisation de base de GHAS à des questions plus avancées visant à renforcer les compétences de votre équipe. Pour plus d’informations sur la collaboration avec l’équipe {% data variables.product.prodname_professional_services_team %}, consultez « [{% data variables.product.prodname_professional_services %}](#github-professional-services) ».

{% endnote %}


#### <a name="fact-1-ghas-is-a-suite-of-security-tools-that-require-action-to-protect-your-code"></a>Élément 1 : GHAS est une suite d’outils de sécurité qui nécessitent d’intervenir pour protéger le code.

Il ne s’agit pas d’un logiciel de sécurité que l’on installe et que l’on oublie. Disposer de GHAS ne suffit pas à protéger le code. GHAS est une suite d’outils qui prend toute sa valeur quand elle est configurée, gérée et utilisée dans des workflows quotidiens et en association avec d’autres outils.

#### <a name="fact-2-ghas-will-require-adjustment-out-of-the-box"></a>Élément 2 : GHAS nécessite un paramétrage initial.

Une fois que GHAS a été installé dans vos dépôts, vous devez passer par des étapes supplémentaires pour vérifier qu’il répond aux besoins de votre entreprise. L’analyse du code en particulier nécessite une configuration supplémentaire pour affiner les résultats, par exemple en personnalisant ce que les analyses signalent afin d’ajuster ce qui sera récupéré dans les analyses ultérieures. De nombreux clients constatent que les analyses initiales ne renvoient pas de résultats ou que les résultats ne sont pas pertinents par rapport au modèle de menace de l’application et qu’elles doivent être adaptées aux besoins de leur entreprise.

#### <a name="fact-3-ghas-tools-are-most-effective-when-used-together-but-the-most-effective-appsec-programs-involve-the-use-of-additional-toolsactivities"></a>Élément 3 : Les outils GHAS sont plus efficaces quand ils sont utilisés ensemble, mais les programmes de sécurité des applications les plus efficaces impliquent l’utilisation d’outils/activités supplémentaires.

GHAS est plus efficace quand tous les outils sont utilisés ensemble. Quand les entreprises intègrent GHAS avec d’autres outils et activités, tels que des tests d’intrusion et des analyses dynamiques, le programme de sécurité des applications gagne encore en efficacité. Nous vous recommandons de toujours utiliser plusieurs couches de protection.

#### <a name="fact-4-not-all-companies-will-useneed-custom--data-variablesproductprodname_codeql--queries-but-they-can--help-you-customizetarget-scan-results"></a>Élément 4 : Toutes les entreprises n’utilisent pas/n’ont pas besoin de requêtes {% data variables.product.prodname_codeql %} personnalisées, mais elles peuvent aider à personnaliser/cibler les résultats d’analyse.

L’analyse du code repose sur {% data variables.product.prodname_codeql %}, le moteur d’analyse de code le plus puissant au monde. Bien que de nombreuses entreprises soient enthousiastes à l’idée de pouvoir écrire des requêtes personnalisées, pour une grande proportion de nos clients, le jeu de requêtes de base et les requêtes supplémentaires disponibles auprès de la communauté sont généralement plus que suffisants. Cependant, beaucoup d’entreprises peuvent juger nécessaire d’utiliser des requêtes {% data variables.product.prodname_codeql %} personnalisées pour réduire les taux de faux positifs dans les résultats ou d’élaborer de nouvelles requêtes pour cibler les résultats dont a besoin l’entreprise.

Ainsi, si votre entreprise souhaite écrire des requêtes {% data variables.product.prodname_codeql %} personnalisées, nous vous recommandons de mener à bien le déploiement et l’implémentation de GHAS avant d’explorer les requêtes personnalisées.

{% note %}

**Remarque :** Il est essentiel que votre entreprise dispose d’une assise solide sur GHAS avant de se plonger plus profondément dans les pratiques de sécurité plus avancées.

{% endnote %}

Une fois que votre entreprise est prête, notre équipe Customer Success peut vous aider à appréhender les conditions à remplir et à déterminer si le recours aux requêtes personnalisées se justifie dans votre entreprise.  

#### <a name="fact-5--data-variablesproductprodname_codeql--scans-the-whole-code-base-not-just-the-changes-made-in-a-pull-request"></a>Élément 5 : {% data variables.product.prodname_codeql %} analyse l’ensemble du codebase, et pas seulement les modifications apportées dans une demande de tirage (pull request).

Quand l’analyse du code est exécutée à partir d’une demande de tirage, l’analyse porte sur le codebase complet et pas seulement sur les modifications apportées à la demande de tirage. Bien que cela puisse parfois paraître inutile, il s’agit d’une étape importante pour vérifier que la modification a été examinée par rapport à toutes les interactions dans le codebase.

## <a name="examples-of-successful--data-variablesproductprodname_gh_advanced_security--rollouts"></a>Exemples de déploiements réussis de {% data variables.product.prodname_GH_advanced_security %}

Maintenant que vous avez une vision plus nette des éléments qui favorisent la réussite du déploiement et de l’implémentation de GHAS, voici quelques exemples de déploiements réussis par nos clients. Même si votre entreprise se trouve dans une région différente, {% data variables.product.prodname_dotcom %} peut vous aider à personnaliser votre trajectoire en fonction des besoins de votre déploiement.

### <a name="example-rollout-for-a-mid-sized-healthcare-technology-company"></a>Exemple de déploiement pour une entreprise technologique de taille moyenne spécialisée dans la santé  

Une entreprise technologique de taille moyenne spécialisée dans la santé et basée à San Francisco a mené à bien un processus de déploiement de GHAS. Bien qu’elle n’avait pas un grand nombre de dépôts à activer, l’entreprise avait besoin d’une équipe bien organisée et en phase pour le déploiement, avec un contact clé clairement établi pour travailler avec {% data variables.product.prodname_dotcom %} à la résolution des problèmes éventuels pendant le processus. Cela lui a permis de boucler le déploiement en deux mois.

De plus, le fait de disposer d’une équipe de développement engagée a permis à l’entreprise de charger des équipes d’utiliser l’analyse du code au niveau des demandes de tirage à la suite du déploiement.

### <a name="example-rollout-for-a-mid-sized-data-platform-company"></a>Exemple de déploiement pour une entreprise de plateforme de données de taille moyenne

Une entreprise de plateforme de données globales a grandement bénéficié de GHAS jusqu’à présent. Elle a achevé l’implémentation initiale et chemine actuellement dans le processus de déploiement. Cette entreprise est mature dans sa posture et ses dispositifs de sécurité, et il existe une grande cohésion en son sein. Très autonome dans son mode de fonctionnement, elle a pu mener à bien son déploiement avec rapidité et aisance.

La forte cohésion, l’efficacité des opérations et la maturité des dispositifs de sécurité de l’entreprise lui ont permis d’implémenter rapidement GHAS et d’établir une bonne assise pour {% data variables.product.prodname_codeql %}. Depuis son implémentation, elle peut à présent activer automatiquement {% data variables.product.prodname_codeql %} dans différents dépôts.

Outre sa maturité technique et sécuritaire, une autre facteur essentiel à la réussite de cette entreprise a été de disposer d’un propriétaire de projet et d’un point de contact unique dans son équipe pour faire avancer le projet. Le fait d’avoir eu un contact clé a été non seulement crucial, mais ses grandes compétents ont aussi directement contribué à la réussite du déploiement.

## <a name="prerequisites-for-your-company-before-rolling-out-ghas"></a>Conditions préalables au déploiement de GHAS dans votre entreprise

{% data variables.product.prodname_professional_services %} offre des ressources d’aide supplémentaires pour permettre à votre entreprise de disséquer et de comprendre ces conditions préalables et de la préparer au processus d’implémentation de GHAS.

 ### <a name="cicd-systems-and-process"></a>Systèmes et processus CI/CD

Si votre entreprise n’a pas encore investi dans des systèmes et des processus d’intégration continue ou de livraison continue (CI/CD) ou qu’elle ne les a pas encore été implémentés, nous vous recommandons de le faire en même que vous passez à GHAS. S’agissant potentiellement d’un changement important pour votre entreprise, nous pouvons collaborer avec vous pour vous communiquer des suggestions et des conseils pour l’implémentation d’un système CI/CD et vous préconiser une formation qui pourrait s’avérer nécessaire.

### <a name="requirements-to-install--data-variablesproductprodname_gh_advanced_security-"></a>Conditions à remplir pour l’installation de {% data variables.product.prodname_GH_advanced_security %}

Différents voies sont possibles pour l’installation de GHAS au sein de votre entreprise, selon les technologies qu’elle utilise. Cette section décrit brièvement des différentes voies qui s’offrent à votre entreprise.

{% ifversion ghes %}

#### <a name="-data-variablesproductprodname_ghe_server-"></a>{% data variables.product.prodname_ghe_server %}

Il est important que vous choisissiez une version de {% data variables.product.prodname_ghe_server %} (GHES) qui répondra aux besoins de votre entreprise.

Si vous utilisez une ancienne version de GHES (antérieure à la version 3.0) et que vous souhaitez procéder à une mise à niveau, vous devrez satisfaire certaines exigences avant de passer à la mise à niveau. Pour plus d'informations, consultez les pages suivantes :
  - « [Mise à niveau de {% data variables.product.prodname_ghe_server %}](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server) »
  - « [Conditions à remplir pour la mise à niveau](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements) »

Si vous utilisez un système CI/CD tiers et que vous souhaitez utiliser l’{% data variables.product.prodname_code_scanning %}, vérifiez que vous avez téléchargé {% data variables.product.prodname_codeql_cli %}. Pour plus d’informations, consultez « [À propos de l’analyse du code CodeQL dans votre système CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system) ».

Si vous avez recours à {% data variables.product.prodname_professional_services %} pour votre déploiement de GHAS, préparez-vous à discuter longuement de ces éléments à l’occasion de votre réunion de lancement.

{% endif %}

{% ifversion ghec %}

#### <a name="-data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %}

Si vous êtes un client {% data variables.product.prodname_ghe_cloud %} (GHEC), vous aurez des prérequis à respecter selon le système CI/CD que vous envisagez d’utiliser.

Utilisation de {% data variables.product.prodname_actions %} pour votre système CI/CD :
- Pour permettre l’intégration et l’utilisation de l’{% data variables.product.prodname_code_scanning %}, vous devez maîtriser les bases de {% data variables.product.prodname_actions %} avant de procéder à votre installation.

Utilisation d’un outil tiers pour le système CI/CD :
- Pour intégrer {% data variables.product.prodname_codeql_cli %}, vous devez maîtriser les bases du système CI/CD, mais aussi de *nix et de Windows (savoir notamment comment les commandes sont exécutées et comment les échecs et les réussites sont signalés). Pour plus d’informations sur l’intégration d’un outil tiers, consultez « [Utilisation de l’analyse du code CodeQL avec votre système CI existant](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system) ».

{% endif %}

## <a name="partnering-with-github-for-your-rollout"></a>Partenariat avec GitHub pour votre déploiement

Pendant votre préparation de l’implémentation de GHAS, il est important de déterminer ce dont votre entreprise aura besoin pour réussir ce projet. Nos implémentations de GHAS les plus réussies reposent sur des responsabilités partagées entre GitHub et nos clients tout au long du processus avec une partie prenante clairement identifiée chez le client propriétaire du projet.

#### <a name="success-model-for-customer-and-github-responsibilities"></a>Modèle de réussite pour les responsabilités des clients et de GitHub

**Responsabilités des clients**
- Respect des prérequis liés à l’infrastructure et aux processus
- Gestion du déploiement et de l’implémentation, dont la planification et l’exécution
- Formation interne
- (Facultatif) Contribution à la communauté GitHub en mettant à disposition des requêtes {% data variables.product.prodname_codeql %}

**Responsabilités de GitHub**

- Maintenance et améliorations des fonctionnalités, telles que {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_GH_advanced_security %}
- Prestation, maintenance et mise à disposition des services suivants : {% data variables.product.prodname_dotcom %} Docs, {% data variables.product.prodname_dotcom %} Community, {% data variables.product.prodname_dotcom %} Support

{% note %}

**Remarque :**  {% data variables.product.prodname_professional_services %} peut aider les clients à assumer leurs responsabilités. Pour en savoir plus, consultez « [Services et support GitHub](#github-services-and-support) ».

{% endnote %}

## <a name="-data-variablesproductprodname_dotcom--services-and-support"></a>Support {% data variables.product.prodname_dotcom %}

### <a name="-data-variablesproductprodname_dotcom--support"></a>Support {% data variables.product.prodname_dotcom %}

Si vous rencontrez des problèmes pendant l’implémentation, vous pouvez chercher des solutions dans notre documentation complète ou contacter l’équipe de support technique {% data variables.product.prodname_dotcom %}}, qui se compose de techniciens très compétents capables de vous aider à résoudre le problème en question. Pour plus d’informations, consultez « [Support GitHub Enterprise](https://enterprise.github.com/support) ».

En outre, vous pouvez aussi essayer d’interroger [ {% data variables.product.prodname_gcf %}](https://github.community/).

Si vous avez acheté un plan de support Premium, vous pouvez soumettre votre ticket sur le [portail de support Premium](https://enterprise.github.com/support). Si vous ne savez pas avec certitude quel plan de support vous avez acheté, vous pouvez contacter votre représentant commercial ou examiner les différentes options de plans.

Pour plus d’informations sur les options de plans de support Premium, consultez :
  - « [Support Premium](https://github.com/premium-support) » {% ifversion ghec %}
  - « [À propos du support premium GitHub pour {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud) »{% endif %}{% ifversion ghes %}
  - « [À propos du support premium GitHub pour {% data variables.product.prodname_ghe_server %}](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server) »{% endif %}

### <a name="-data-variablesproductprodname_professional_services-"></a>{% data variables.product.prodname_professional_services %}

Notre équipe {% data variables.product.prodname_professional_services_team %} peut coopérer avec vous pour un déploiement et une implémentation réussis de {% data variables.product.prodname_GH_advanced_security %}. Nous vous proposons diverses options quant au type d’aide et de support dont vous pensez avoir besoin pour votre implémentation. Nous avons également des formations et des bootcamps à vous proposer pour aider votre entreprise à optimiser la valeur de GHAS.

Si vous souhaitez collaborer avec notre équipe {% data variables.product.prodname_professional_services_team %} pour votre implémentation, nous vous recommandons de commencer à réfléchir à la conception et à l’infrastructure de votre système, ainsi qu’au nombre de dépôts que vous souhaitez configurer avec GHAS, avant de commencer ces conversations. Par ailleurs, commencez à réfléchir aux objectifs liés à ce déploiement.

L’implémentation n’est qu’une étape dans un parcours axé sur la sécurité où vous apprendrez à utiliser GHAS. Une fois que vous aurez terminé l’implémentation, vous devrez en apprendre davantage concernant le déploiement dans votre infrastructure et vos codebases. Entretenez-vous avec votre représentant commercial pour plus d’informations sur les différentes options proposées par {% data variables.product.prodname_professional_services_team %}.

Si vous avez choisi au départ de ne pas faire appel à d’autres services, mais que vous jugez avoir besoin d’un support supplémentaire au début de votre implémentation, contactez votre représentant commercial pour discuter des options de services en vue de faciliter votre implémentation.
