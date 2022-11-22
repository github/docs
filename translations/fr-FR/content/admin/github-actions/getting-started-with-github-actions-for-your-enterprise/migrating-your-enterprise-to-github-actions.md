---
title: Migration de votre entreprise vers GitHub Actions
shortTitle: Migrate to Actions
intro: 'Découvrez comment planifier une migration vers {% data variables.product.prodname_actions %} pour votre entreprise à partir d’un autre fournisseur.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 332d8af7f1087626509a9c72751882ea11f3072f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159791'
---
## À propos des migrations d’entreprise vers {% data variables.product.prodname_actions %}

Pour migrer votre entreprise vers {% data variables.product.prodname_actions %} à partir d’un système existant, vous pouvez planifier la migration, effectuer la migration, puis mettre hors service les systèmes existants.

Ce guide aborde les points à prendre en considération concernant les migrations. Pour plus d’informations sur l’introduction de {% data variables.product.prodname_actions %} dans votre entreprise, consultez « [Introduction de {% data variables.product.prodname_actions %} dans votre entreprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise) ».

## Planification de votre migration

Avant d’entreprendre la migration de votre entreprise vers {% data variables.product.prodname_actions %}, vous devez identifier les workflows qui seront migrés et la façon dont ces migrations affecteront vos équipes. Vous devrez ensuite réfléchir à la façon vous mènerez à bien ces migrations et à quel moment.

### Appel à des spécialistes de la migration

{% data variables.product.company_short %} peuvent vous apporter une aide pendant votre migration, et vous pouvez aussi tirer profit de l’achat de {% data variables.product.prodname_professional_services %}. Pour plus d’informations, contactez votre représentant dédié ou l’{% data variables.contact.contact_enterprise_sales %}.

### Identification et inventaire des cibles de migration

Avant de pouvoir migrer vers {% data variables.product.prodname_actions %}, vous devez avoir une compréhension exhaustive des workflows qu’utilise votre entreprise dans votre système existant.

Tout d’abord, dressez un inventaire des workflows existants de build et de mise en production dans votre entreprise, collectez des informations sur les workflows qui sont activement utilisés, ceux qui doivent être migrés et ceux qui peuvent être omis.

Ensuite, découvrez les différences entre votre fournisseur actuel et {% data variables.product.prodname_actions %}. Cela vous aidera à évaluer les éventuelles difficultés liées à la migration de chaque workflow, et en quoi votre entreprise pourrait rencontrer des différences sur le plan des fonctionnalités. Pour plus d’informations, consultez « [Migration vers {% data variables.product.prodname_actions %}](/actions/migrating-to-github-actions) ».

Ces informations vous permettront d’identifier les workflows que vous pouvez et souhaitez migrer vers {% data variables.product.prodname_actions %}.

### Déterminer l’impact des migrations sur l’équipe

Quand vous changez les outils qui sont utilisés dans votre entreprise, vous influez sur la façon de travailler de votre équipe. Vous devez réfléchir à la façon dont le déplacement d’un workflow de vos systèmes existants vers {% data variables.product.prodname_actions %} affectera le travail quotidien de vos développeurs.

Identifiez les processus, les intégrations et les outils tiers qui seront affectés par votre migration, puis établissez un plan pour les mises à jour que vous devrez éventuellement effectuer.

Réfléchissez à la façon dont la migration peut affecter vos préoccupations de conformité. Par exemple, vos outils existants d’analyse des informations d’identification et d’analyse de la sécurité sont-ils compatibles avec {% data variables.product.prodname_actions %} ou devrez-vous en utiliser des nouveaux ?

Identifiez les portes et les vérifications dans votre système existant et vérifiez que vous pouvez les implémenter avec {% data variables.product.prodname_actions %}.

### Identification et validation des outils de migration

Les outils de migration automatisée peuvent traduire les workflows de votre entreprise de la syntaxe du système existant vers la syntaxe requise par {% data variables.product.prodname_actions %}. Identifiez des outils tiers ou contactez votre représentant dédié ou encore l’{% data variables.contact.contact_enterprise_sales %} pour savoir quels outils {% data variables.product.company_short %} peut fournir. Par exemple, vous pouvez utiliser {% data variables.product.prodname_actions_importer %} pour planifier vos pipelines CI, les délimiter et les migrer vers {% data variables.product.prodname_actions %} à partir de différents services pris en charge. Pour plus d’informations, consultez « [Automatisation de la migration avec {% data variables.product.prodname_actions_importer %}](/actions/migrating-to-github-actions/automating-migration-with-github-actions-importer) ».

Une fois que vous avez identifié l’outil qui va automatiser vos migrations, validez-le en l’exécutant sur certains workflows de test et en vérifiant que les résultats sont conformes à vos attentes.

Les outils automatisés devraient pouvoir migrer la majorité de vos workflows, mais vous aurez probablement besoin d’en réécrire manuellement un petit nombre. Estimez la quantité de travail manuel que cela implique.

### Choix d’une approche de migration

Identifiez l’approche de migration la mieux adaptée pour votre entreprise. Les petites équipes seront peut-être en mesure de migrer tous leurs workflows en une seule opération, selon une approche de substitution complète. Pour les grandes entreprises, une approche itérative s’avérera sans doute plus réaliste. Vous pouvez choisir de confier la gestion de la migration complète à un organe central ou vous pouvez demander aux différentes équipes s’assurer elles-mêmes la migration de leurs propres workflows.

Nous préconisons une approche itérative qui mêle une gestion active et le libre-service. Commencez par un petit groupe d’utilisateurs précoces qui peuvent faire office de conseillers internes. Identifiez une poignée de workflows suffisamment complets pour représenter l’étendue de votre activité. Collaborez avec vos utilisateurs précoces pour migrer ces workflows vers {% data variables.product.prodname_actions %} en opérant si besoin des itérations. Cela donnera aux autres équipes la confiance nécessaire pour migrer leurs workflows.

Ensuite, mettez {% data variables.product.prodname_actions %} à la disposition de l’ensemble de votre organisation. Prévoyez les ressources nécessaires pour permettre à ces équipes de migrer leurs propres workflows vers {% data variables.product.prodname_actions %}, et informez-les de la mise hors service à venir des systèmes existants. 

Enfin, informez les équipes qui utilisent toujours vos anciens systèmes qu’elles disposent d’un délai précis pour effectuer leurs migrations. Vous pouvez mettre en avant la réussite des autres équipes pour les rassurer quant à la faisabilité et à l’intérêt de la migration.

### Définition de votre programme de migration

Après avoir opté pour une approche de migration, créez une programme décrivant à quel moment chacune de vos équipes migrera ses workflows vers {% data variables.product.prodname_actions %}.

Pour commencer, fixez la date à laquelle votre migration doit être terminée. Par exemple, vous pouvez prévoir de terminer votre migration d’ici la fin du contrat qui vous lie à votre fournisseur actuel.

Ensuite, établissez un programme en collaboration avec vos équipes qui tienne compte de votre échéance sans sacrifier leurs objectifs d’équipe. Examinez la cadence de votre activité et la charge de travail de chaque équipe à laquelle vous demandez de migrer. Coordonnez-vous avec chaque équipe pour comprendre leur programme de livraison et élaborez un plan qui permet à l’équipe de migrer ses workflows à un moment qui ne nuira pas à leurs activités.

## Migration vers {% data variables.product.prodname_actions %}

Dès que vous êtes prêt à lancer votre migration, traduisez vos workflows existants dans la syntaxe {% data variables.product.prodname_actions %} en utilisant les outils automatisés et la réécriture manuelle prévus aux étapes précédentes.

Vous pouvez aussi conserver les anciens artefacts de build de votre système existant, peut-être en écrivant un processus scripté pour archiver les artefacts.

## Mise hors service des systèmes existants

Une fois la migration terminée, vous pouvez penser à la mise hors service de votre système existant.

Vous pouvez exécuter les deux systèmes côte à côte pour un certain temps afin de vérifier que votre configuration {% data variables.product.prodname_actions %} est stable, sans dégradation de l’expérience des développeurs.

Enfin, désactivez et arrêtez les anciens systèmes, puis veillez à ce que personne au sein de l’entreprise ne puisse remettre les anciens systèmes en route.
