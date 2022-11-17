---
title: "Phase 2\_: Préparation à l’activation à grande échelle"
intro: 'Lors de cette phase, vous allez préparer les développeurs et collecter des données sur vos dépôts afin d’être sûr que vos équipes sont prêtes et que vous disposez de tout ce dont vous avez besoin pour les programmes pilotes et le déploiement de l’{% data variables.product.prodname_code_scanning %} et de l’{% data variables.product.prodname_secret_scanning %}.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. Preparation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 79368897c125ff23541520a253a34a2aae8c7c27
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108721'
---
{% note %}

Cet article fait partie d’une série sur l’adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle. Pour accéder à l’article précédent de cette série, consultez « [Phase 1 : Aligner sur votre stratégie de déploiement et vos objectifs](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals) ».

{% endnote %}

## Préparation de l’activation de l’{% data variables.product.prodname_code_scanning %}
 
{% data reusables.code-scanning.about-code-scanning %} Pour plus d’informations, consultez « [À propos de l’analyse du code](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning) ».

Le déploiement de l’{% data variables.product.prodname_code_scanning %} sur des centaines de dépôts peut être difficile, en particulier lorsque le déploiement est effectué de manière inefficace. Le suivi de ces étapes vous permettra de garantir l’efficacité et le succès de votre déploiement. Dans le cadre de votre préparation, vous allez travailler avec vos équipes, utiliser l’automatisation pour collecter des données sur vos dépôts et activer l’{% data variables.product.prodname_code_scanning %}. 

### Préparation des équipes pour l’{% data variables.product.prodname_code_scanning %}

Tout d’abord, préparez vos équipes à utiliser l’{% data variables.product.prodname_code_scanning %}. Plus le nombre d’équipes utilisant l’{% data variables.product.prodname_code_scanning %} sera élevé, plus vous aurez de données pour générer des plans de correction et superviser la progression de votre déploiement. Au cours de cette phase, concentrez-vous sur l’utilisation des API et l’exécution d’événements d’activation interne.

Votre objectif principal doit être de préparer le plus d’équipes à utiliser l’{% data variables.product.prodname_code_scanning %} qu’il est possible. Vous pouvez également encourager les équipes à apporter des corrections appropriées, mais nous vous recommandons de privilégier l’activation et l’utilisation de l’{% data variables.product.prodname_code_scanning %} par rapport à la résolution des problèmes au cours de cette phase.
  
### Collecte d’informations sur vos dépôts

Vous pouvez collecter par programmation des informations sur les différents langages de programmation utilisés dans vos dépôts, et utiliser ces données pour activer l’{% data variables.product.prodname_code_scanning %} sur tous les dépôts qui utilisent le même langage, à l’aide de l’API GraphQL de {% data variables.product.product_name %}.

{% note %}

**Remarque :** Pour collecter ces données sans exécuter manuellement les requêtes GraphQL décrites dans cet article, vous pouvez utiliser notre outil disponible publiquement. Pour plus d’informations, consultez le dépôt sur l’[outil ghas-enablement](https://github.com/NickLiffen/ghas-enablement).

{% endnote %}

Si vous souhaitez collecter des informations à partir de dépôts appartenant à plusieurs organisations de votre entreprise, vous pouvez utiliser la requête ci-dessous pour obtenir les noms de vos organisations, puis les alimenter dans la requête de dépôt. Remplacez OCTO-ENTERPRISE par le nom de votre entreprise.

```graphql
query {
  enterprise(slug: "OCTO-ENTERPRISE") {
    organizations(first: 100) {
      totalCount
      nodes {
        name
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Vous pouvez identifier quels dépôts utilisent quels langages en regroupant les dépôts par langage au niveau de l’organisation. Vous pouvez modifier l’exemple de requête GraphQL ci-dessous, en remplaçant OCTO-ORG par le nom de l’organisation.

```graphql
query {
  organization(login: "OCTO-ORG") { 
    repositories(first: 100) {
      totalCount
      nodes {
        nameWithOwner
        languages(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Pour plus d’informations sur l’exécution de requêtes GraphQL, consultez « [Formation d’appels avec GraphQL](/graphql/guides/forming-calls-with-graphql) ».

Ensuite, convertissez les données de la requête GraphQL en un format lisible, tel qu’une table.

| Langage                | Nombre de dépôts | Noms des dépôts                           |
|-------------------------|-----------------|-----------------------------------------|
| JavaScript (TypeScript) | 4212            | org/repo<br /> org/repo |
| Python                  | 2012            | org/repo<br /> org/repo |
| Go                      | 983             | org/repo<br /> org/repo |
| Java                    | 412             | org/repo<br /> org/repo |
| Swift                   | 111             | org/repo<br /> org/repo |
| Kotlin                  | 82              | org/repo<br /> org/repo |
| C                       | 12              | org/repo<br /> org/repo |

Vous pouvez filtrer les langages qui ne sont actuellement pas pris en charge par {% data variables.product.prodname_GH_advanced_security %} afin de les exclure de ce tableau.

Si vous avez des dépôts avec plusieurs langages, vous pouvez mettre en forme les résultats GraphQL comme indiqué dans le tableau ci-dessous. Filtrez les langages qui ne sont pas pris en charge, mais conservez tous les dépôts avec au moins un langage pris en charge. Vous pouvez activer l’{% data variables.product.prodname_code_scanning %} sur ces dépôts, et tous les langages pris en charge seront analysés.

| Langue(s)            | Nombre de dépôts | Noms des dépôts                            |
|------------------------|-----------------|------------------------------------------|
| JavaScript/Python/Go   | 16              | org/repo <br /> org/repo |
| Rust/TypeScript/Python | 12              | org/repo <br /> org/repo |

Savoir quels dépôts utilisent quels langages vous aidera à identifier les dépôts candidats pour les programmes pilotes lors de la phase 3, et vous préparera à activer l’{% data variables.product.prodname_code_scanning %} dans tous les dépôts, un langage à la fois, lors de la phase 5.

{% ifversion ghes %}

### Activation de l’{% data variables.product.prodname_code_scanning %} pour votre appliance

Avant de pouvoir poursuivre les programmes pilotes et déployer l’{% data variables.product.prodname_code_scanning %} dans votre entreprise, vous devez d’abord activer l’{% data variables.product.prodname_code_scanning %} pour votre appliance. Pour plus d’informations, consultez « [Configuration de l’analyse du code pour votre appliance](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance) ».

{% endif %}

## Préparation de l’activation de l’{% data variables.product.prodname_secret_scanning %}

Si un projet communique avec un service externe, il se peut qu’il utilise un jeton ou une clé privée pour l’authentification. Si vous archivez un secret dans un dépôt, toute personne disposant d’un accès en lecture au dépôt peut l’utiliser pour accéder au service externe avec vos privilèges. L’{% data variables.product.prodname_secret_scanning_caps %} analysera l’intégralité de votre historique Git sur toutes les branches présentes dans vos dépôts {% data variables.product.prodname_dotcom %} pour les secrets, et vous avertira{% ifversion secret-scanning-push-protection %} ou bloquera la poussée contenant le secret{% endif %}. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/code-security/secret-scanning/about-secret-scanning) ».

### Considérations lors de l’activation de l’{% data variables.product.prodname_secret_scanning %}

La fonctionnalité d’{% data variables.product.prodname_secret_scanning %} de {% data variables.product.product_name %} est légèrement différente de l’{% data variables.product.prodname_code_scanning %} car elle ne nécessite aucune configuration spécifique par langage de programmation ou par dépôt, et moins de configuration globale pour commencer. Cela signifie que l’activation de l’{% data variables.product.prodname_secret_scanning %} au niveau de l’organisation peut être simple, mais le fait de cliquer sur **Activer tout** au niveau de l’organisation et de cocher l’option **Activer automatiquement l’{% data variables.product.prodname_secret_scanning %} pour chaque nouveau dépôt** a des effets en aval que vous devez connaître :

- **Consommation de licence**  
  L’activation de l’{% data variables.product.prodname_secret_scanning %} pour tous les dépôts consomme toutes vos licences, même si personne n’utilise l’analyse du code. Ce ne pose pas de souci, sauf si vous envisagez d’augmenter le nombre de développeurs actifs dans votre organisation. Si le nombre de développeurs actifs est susceptible d’augmenter au cours des prochains mois, vous risquez de dépasser votre limite de licence et de ne pas pouvoir utiliser {% data variables.product.prodname_GH_advanced_security %} sur les dépôts nouvellement créés.
- **Volume initial élevé de secrets détectés**  
  Si vous activez l’{% data variables.product.prodname_secret_scanning %} sur une grande organisation, préparez-vous à voir un grand nombre de secrets trouvés. Parfois, cela provoque un choc pour les organisations et l’alarme est déclenchée. Si vous souhaitez activer l’{% data variables.product.prodname_secret_scanning %} sur tous les dépôts à la fois, planifiez la façon dont vous répondrez aux alertes multiples au sein de l’organisation.

L’{% data variables.product.prodname_secret_scanning_caps %} peut être activée pour des dépôts individuels. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_secret_scanning %} pour vos dépôts](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories) ». L’{% data variables.product.prodname_secret_scanning_caps %} peut également être activée pour tous les dépôts de votre organisation, comme décrit ci-dessus. Pour plus d’informations sur l’activation pour tous les dépôts, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization) ».

### Modèles personnalisés pour l’{% data variables.product.prodname_secret_scanning %}

{% ifversion ghae %} {% note %}

**Remarque :** Les modèles personnalisés pour l’{% data variables.product.prodname_secret_scanning %} sont en version bêta et sont soumis à modification.

{% endnote %} {% endif %}

L’{% data variables.product.prodname_secret_scanning_caps %} détecte un grand nombre de modèles par défaut, mais peut également être configurée pour détecter des modèles personnalisés, tels que les formats de secrets propres à votre infrastructure ou utilisés par les intégrateurs, que l’{% data variables.product.prodname_secret_scanning %} de {% data variables.product.product_name %} ne détecte pas actuellement. Pour plus d’informations sur les secrets pris en charge pour les modèles de partenaire, consultez « [Modèles d’analyse des secrets](/code-security/secret-scanning/secret-scanning-patterns) ». 

Lorsque vous auditez vos dépôts et discutez avec les équipes de sécurité et de développement, créez une liste des types de secrets que vous utiliserez ultérieurement pour configurer des modèles personnalisés pour l’{% data variables.product.prodname_secret_scanning %}. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning) ».


{% note %}

Pour accéder à l’article suivant de cette série, consultez « [Phase 3 : Programmes pilotes](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs) ».

{% endnote %}
