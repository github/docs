---
title: "Phase 6\_: Déployer et mettre à l’échelle l’analyse des secrets"
intro: 'Pour la phase finale, vous allez vous concentrer sur le déploiement de l’{% data variables.product.prodname_secret_scanning %}. L’{% data variables.product.prodname_secret_scanning_caps %} est un outil plus simple à déployer que l’{% data variables.product.prodname_code_scanning %} car elle nécessite moins de configuration, mais il est essentiel d’avoir une stratégie de gestion des résultats nouveaux et anciens.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 6. Rollout secret scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 15254d9a4d490f6eeff566cd71d94da7c6e8c467
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158756'
---
{% note %}

Cet article fait partie d’une série sur l’adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle. Pour accéder à l’article précédent de cette série, consultez « [Phase 5 : Déployer et mettre à l’échelle l’analyse du code](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning) ».

{% endnote %}

Vous pouvez activer l’analyse des secrets pour des dépôts individuels ou pour tous les dépôts d’une organisation. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) » ou « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

Cet article décrit un processus de haut niveau axé sur l’activation de l’{% data variables.product.prodname_secret_scanning %} pour tous les dépôts d’une organisation. Les principes décrits dans cet article peuvent toujours être appliqués même si vous utilisez une approche plus échelonnée de l’activation de l’{% data variables.product.prodname_secret_scanning %} pour des dépôts individuels. 

### 1. Se concentrer sur les secrets nouvellement commités

Lorsque vous activez l’{% data variables.product.prodname_secret_scanning %}, vous devez vous concentrer sur la correction des informations d’identification nouvellement commitées détectées par l’analyse des secrets. Si vous vous concentrez sur le nettoyage des informations d’identification commitées, les développeurs pourraient continuer à pousser accidentellement de nouvelles informations d’identification, ce qui signifie que votre quantité totale de secrets resterait autour du même niveau, et ne diminuerait pas comme prévu. C’est pourquoi il est essentiel d’empêcher la fuite des nouvelles informations d’identification avant de se concentrer sur la révocation des secrets actuels.

Il existe quelques approches pour traiter les informations d’identification nouvellement commitées. Voici un exemple de l’une de ces approches :

1. **Notifier** : utilisez des webhooks pour veiller à ce que les nouvelles alertes de secret soient vues par les bonnes équipes le plus rapidement possible. Un webhook se déclenche lorsqu’une alerte de secret est créée, résolue ou rouverte. Vous pouvez ensuite analyser la charge utile de webhook, et l’intégrer aux outils que votre équipe et vous-même utilisez, par exemple Slack, Teams, Splunk ou e-mail. Pour plus d’informations, consultez « [À propos des webhooks](/developers/webhooks-and-events/webhooks/about-webhooks) » et « [Événements et charges utiles de webhook ».](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert)
2. **Suivi** : Créez un processus général de correction qui fonctionne pour tous les types de secrets. Par exemple, vous pourriez contacter le développeur qui a commité le secret et son responsable technique sur ce projet, en mettant en évidence les dangers liés au commit des secrets sur GitHub, et en leur demandant de révoquer et de mettre à jour le secret détecté.

  {% note %}
  
  **Remarque :** Vous pouvez automatiser cette étape. Pour les grandes entreprises et les organisations ayant des centaines de dépôts, le suivi manuel n’est pas réalisable. Vous pourriez incorporer l’automatisation dans le processus de webhook défini à la première étape. La charge utile de webhook contient des informations sur le dépôt et l’organisation concernant le secret fuité. À l’aide de ces informations, vous pouvez contacter les chargés de maintenance actuels sur le dépôt, et créer un e-mail/message destiné aux personnes responsables ou signaler un problème.
  
  {% endnote %} 
3. **Éduquer** : créez un document de formation interne affecté au développeur qui a commité le secret. Dans ce document de formation, vous pouvez expliquer les risques créés par le commit des secrets, et diriger le développeur vers vos bonnes pratiques en matière d’utilisation sécurisée des secrets lors du développement. Si le développeur n’apprend pas de cette expérience et continue à valider des secrets, vous pourriez créer un processus d’escalade, mais l’éducation fonctionne généralement bien.

Répétez les deux dernières étapes pour toute nouvelle fuite de secrets. Ce processus encourage les développeurs à assumer la responsabilité de la gestion des secrets utilisés dans leur code de manière sécurisée, et vous permet de mesurer la réduction des secrets nouvellement commités.

{% note %}

**Remarque :** Les organisations plus avancées peuvent souhaiter effectuer une correction automatique de certains types de secrets. Il existe une initiative open source appelée [GitHub Secret Scanner Auto Remediator](https://github.com/NickLiffen/GSSAR), que vous pouvez déployer dans votre environnement AWS, Azure ou GCP, et adapter afin de révoquer automatiquement certains types de secrets en fonction de ce que vous définissez comme le plus critique. Il s’agit également d’un excellent moyen de réagir aux nouveaux secrets commités avec une approche plus automatisée.

{% endnote %}

### 2. Corriger les secrets précédemment commités, en commençant par le plus critique

Une fois que vous avez établi un processus pour superviser, notifier et corriger les secrets récemment publiés, vous pouvez commencer à travailler sur les secrets commités avant l’introduction de {% data variables.product.prodname_GH_advanced_security %}.

La façon dont vous définissez vos secrets les plus critiques dépend des processus et des intégrations de votre organisation. Par exemple, une entreprise ne se souciera probablement pas d’un secret relatif à un webhook entrant Slack si elle n’utilise pas Slack. Vous trouverez peut-être utile de commencer par vous concentrer sur les cinq principaux types d’informations d’identification critiques pour votre organisation.

Une fois que vous avez choisi les types de secrets, vous pouvez effectuer les opérations suivantes :

1. Définissez un processus pour corriger chaque type de secret. La procédure réelle pour chaque type de secret est souvent radicalement différente. Notez le processus pour chaque type de secret dans un document ou une base de connaissances interne.
  
  {% note %}
  
  **Remarque :** Lorsque vous créez le processus de révocation de secrets, essayez d’attribuer la responsabilité de la révocation des secrets à l’équipe qui tient à jour le dépôt plutôt qu’à une équipe centrale. L’un des principes de GHAS est que les développeurs doivent assumer la possession de la sécurité et la responsabilité de la résolution des problèmes de sécurité, en particulier s’ils les ont créés.

  {% endnote %}

2. Une fois que vous avez créé le processus que les équipes suivront pour révoquer les informations d’identification, vous pouvez collecter des informations sur les types de secrets et d’autres métadonnées associées aux secrets fuités afin de pouvoir identifier à qui communiquer le nouveau processus.
  
  {% ifversion not ghae %}
  
  Vous pouvez utiliser la vue d’ensemble de la sécurité pour collecter ces informations. Pour plus d’informations sur l’utilisation de la vue d’ensemble de la sécurité, consultez « [Filtrage des alertes dans les vues d’ensemble de la sécurité](/code-security/security-overview/filtering-alerts-in-the-security-overview) ».
  
  {% endif %}
  
  Voici quelques informations que vous souhaiterez peut-être collecter :
  
    - Organisation
    - Référentiel
    - Type de secret
    - Valeur du secret
    - Chargés de maintenance sur le dépôt à contacter
  
  {% note %}
  
  **Remarque :** Utilisez l’interface utilisateur si vous avez peu de secrets fuités de ce type. Si vous avez des centaines de secrets fuités, utilisez l’API pour collecter des informations. Pour plus d’informations, consultez « [API REST d’analyse des secrets](/rest/reference/secret-scanning) ».
    
  {% endnote %}

3. Après avoir collecté des informations sur les secrets fuités, créez un plan de communication ciblé pour les utilisateurs qui tiennent à jour les dépôts affectés par chaque type de secret. Vous pouvez utiliser l’e-mail, la messagerie, ou même créer des problèmes GitHub dans les dépôts affectés. Si vous pouvez utiliser des API fournies par ces outils pour envoyer les communications de manière automatisée, cela vous simplifiera la mise à l’échelle entre plusieurs types de secrets.

### 3. Étendre le programme afin d’inclure davantage de types de secrets et de modèles personnalisés

Vous pouvez maintenant aller au-delà des cinq types de secrets les plus critiques afin de créer une liste plus exhaustive, avec un focus supplémentaire sur l’éducation. Vous pouvez répéter l’étape précédente, en corrigeant les secrets précédemment commités, pour les différents types de secrets ciblés.

Vous pouvez également inclure davantage de modèles personnalisés compilés lors des phases antérieures, et inviter les équipes de sécurité et les équipes de développement à soumettre davantage de modèles, en établissant un processus de soumission de nouveaux modèles à mesure que de nouveaux types de secrets sont créés. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning) ».

{% ifversion secret-scanning-push-protection %}

Vous pouvez également activer la protection de poussée avec l’analyse des secrets. Une fois activée, l’analyse des secrets vérifie les poussées afin de détecter les secrets à haute confiance, et bloque la poussée. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#using-secret-scanning-as-a-push-protection-from-the-command-line) ».

{% endif %}

À mesure que vous continuez à créer vos processus de correction pour d’autres types de secrets, commencez à créer du matériel de formation proactif qui peut être partagé avec tous les développeurs de GitHub dans votre organisation. Jusqu’à ce stade, une grande partie du focus a porté sur la réactivité. Ce serait maintenant une excellente idée de mettre l’accent sur l’aspect proactif, et d’encourager les développeurs à ne pas du tout pousser d’informations d’identification vers GitHub. Cela peut être réalisé de plusieurs façons, mais la création d’un court document expliquant les risques et les raisons serait un excellent point de départ.

{% note %}

Ceci est le dernier article d’une série sur l’adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle. Si vous avez des questions ou avez besoin de support, consultez la section sur {% data variables.contact.github_support %} et {% data variables.product.prodname_professional_services_team %} dans « [Introduction à l’adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale#github-support-and-professional-services) ».

{% endnote %}
