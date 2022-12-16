---
title: À propos des alertes d’analyse du code
intro: Découvrez les différents types d’alertes d’analyse de code et les informations qui vous aident à comprendre le problème que chaque alerte met en évidence.
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 1e540aa8b061e0bbdd5b7be1a2563cd983cfb753
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881226'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## À propos des alertes d’{% data variables.product.prodname_code_scanning %}

Vous pouvez configurer l’{% data variables.product.prodname_code_scanning %} pour vérifier le code dans un dépôt en utilisant l’analyse {% data variables.product.prodname_codeql %} par défaut, une analyse tierce ou plusieurs types d’analyse. Une fois l’analyse terminée, les alertes résultantes s’affichent côte à côte dans l’affichage de sécurité du dépôt. Les résultats provenant d’outils tiers ou de requêtes personnalisées peuvent ne pas inclure toutes les propriétés que vous voyez pour les alertes détectées par l’analyse {% data variables.product.prodname_codeql %} par défaut de {% data variables.product.company_short %}. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) ».

Par défaut, l’{% data variables.product.prodname_code_scanning %} analyse votre code périodiquement sur la branche par défaut et lors des demandes de tirage (pull request). Pour plus d’informations sur la gestion des alertes sur une demande de tirage, consultez « [Triage des alertes d’{% data variables.product.prodname_code_scanning %} dans les demandes de tirage](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) ».

## À propos des détails des alertes

Chaque alerte met en évidence un problème avec le code et le nom de l’outil qui l’a identifié. Vous pouvez voir la ligne de code qui a déclenché l’alerte ainsi que les propriétés de l’alerte, telles que la gravité de l’alerte, la gravité de sécurité et la nature du problème. Les alertes vous indiquent également quand le problème a été introduit pour la première fois. Pour les alertes identifiées par l’analyse {% data variables.product.prodname_codeql %}, vous voyez également des informations sur la façon de résoudre le problème.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Exemple d’alerte d’{% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png) {% else %} ![Exemple d’alerte d’{% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.4/repository/code-scanning-alert.png) {% endif %}

Si vous configurez l’{% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_codeql %}, vous pouvez également trouver des problèmes de flux de données dans votre code. L’analyse du flux de données détecte les problèmes de sécurité potentiels dans le code, tels que l’utilisation de données non sécurisée, le passage d’arguments dangereux à des fonctions et la fuite d’informations sensibles.

Quand l’{% data variables.product.prodname_code_scanning %} signale des alertes de flux de données, {% data variables.product.prodname_dotcom %} vous montre comment les données transitent par le code. L’{% data variables.product.prodname_code_scanning_capc %} vous permet d’identifier les zones de votre code qui laissent échapper des informations sensibles et qui peuvent être le point d’entrée d’attaques par des utilisateurs malveillants.

### À propos des niveaux de gravité

Les niveaux de gravité d’alerte peuvent être `Error`, `Warning` et `Note`.

Si l’{% data variables.product.prodname_code_scanning %} est activée en tant que vérification de demande de tirage, la vérification échoue si elle détecte des résultats avec une gravité de `error`. Vous pouvez spécifier les niveaux de sévérité des alertes d’analyse de code qui provoquent l’échec de la vérification. Pour plus d’informations, consultez « [Définition des gravités entraînant l’échec de la vérification des demandes de tirage](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure) ».

### À propos des niveaux de gravité de sécurité

L’{% data variables.product.prodname_code_scanning_capc %} affiche les niveaux de gravité de sécurité pour les alertes générées par les requêtes de sécurité. Les niveaux de gravité de sécurité peuvent être `Critical`, `High`, `Medium` ou `Low`.

Pour calculer la gravité de sécurité d’une alerte, nous utilisons des données CVSS (Common Vulnerability Scoring System). CVSS est un framework ouvert pour la communication des caractéristiques et de la gravité des vulnérabilités logicielles et est couramment utilisé par d’autres produits de sécurité pour évaluer les alertes. Pour plus d’informations sur le calcul des niveaux de gravité, consultez [ce billet de blog](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/).

Par défaut, toutes les résultats d’{% data variables.product.prodname_code_scanning %} avec une gravité de sécurité de `Critical` ou `High` entraînent un échec de vérification. Vous pouvez spécifier le niveau de gravité de sécurité pour les résultats d’{% data variables.product.prodname_code_scanning %} qui doit provoquer un échec de vérification. Pour plus d’informations, consultez « [Définition des gravités entraînant l’échec de la vérification des demandes de tirage](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure) ».

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %}
### À propos des origines d’analyse

Vous pouvez mettre en place plusieurs configurations d’analyse du code sur un dépôt, en utilisant différents outils et en ciblant différents langages ou zones du code. Chaque configuration de l’analyse du code est l’origine de l’analyse pour toutes les alertes qu’elle génère. Par exemple, une alerte générée en utilisant l’analyse CodeQL par défaut avec GitHub Actions a une origine d’analyse différente d’une alerte générée en externe et chargée via l’API d’analyse du code.

Si vous utilisez plusieurs configurations pour analyser un fichier, les problèmes détectés par la même requête sont signalés en tant qu’alertes avec plusieurs origines d’analyse. Si une alerte a plusieurs origines d’analyse, une icône {% octicon "workflow" aria-label="The workflow icon" %} s’affiche en regard de n’importe quelle branche pertinente dans la section **Branches affectées** sur le côté droit de la page d’alerte. Vous pouvez pointer sur l’icône {% octicon "workflow" aria-label="The workflow icon" %} pour afficher les noms de chaque origine d’analyse et l’état de l’alerte pour cette origine d’analyse. Vous pouvez également afficher l’historique de l’apparition des alertes dans chaque origine d’analyse dans la chronologie de la page d’alerte. Si une alerte n’a qu’une seule origine d’analyse, aucune information sur les origines d’analyse n’est affichée dans la page d’alerte.

![Alerte d’analyse du code avec plusieurs origines d’analyse](/assets/images/help/repository/code-scanning-analysis-origins.png)

{% note %}

**Remarque :** Parfois, une alerte d’analyse du code s’affiche comme corrigée pour une origine d’analyse, mais elle est toujours ouverte pour une deuxième origine d’analyse. Vous pouvez résoudre ce problème en réexécutant la deuxième configuration d’analyse du code afin de mettre à jour l’état d’alerte pour cette origine d’analyse.

{% endnote %}

{% endif %}
### À propos des étiquettes pour les alertes introuvables dans le code de l’application

{% data variables.product.product_name %} affecte une étiquette de catégorie aux alertes introuvables dans le code de l’application. L’étiquette est liée à l’emplacement de l’alerte.

- **Généré** : code généré par le processus de génération
- **Test** : code de test
- **Bibliothèque** : bibliothèque ou code tiers
- **Documentation** : Documentation

L’{% data variables.product.prodname_code_scanning_capc %} classe les fichiers par chemin de fichier. Vous ne pouvez pas classer manuellement les fichiers sources.

Voici un exemple tiré de la liste d’alertes d’{% data variables.product.prodname_code_scanning %} qui illustre une alerte marquée comme se produisant dans le code de la bibliothèque.

![Alerte de bibliothèque d’analyse du code dans la liste](/assets/images/help/repository/code-scanning-library-alert-index.png)

Dans la page d’alerte, vous pouvez voir que le chemin de fichier est marqué en tant que code de bibliothèque (étiquette `Library`).

![Détails de l’alerte de bibliothèque d’analyse du code](/assets/images/help/repository/code-scanning-library-alert-show.png)

{% ifversion codeql-ml-queries %}

## À propos des alertes expérimentales

{% data reusables.code-scanning.beta-codeql-ml-queries %}

Dans les dépôts qui exécutent l’{% data variables.product.prodname_code_scanning %} en utilisant l’action {% data variables.product.prodname_codeql %}, vous pouvez voir certaines alertes marquées comme expérimentales. Il s’agit d’alertes qui ont été trouvées avec un modèle Machine Learning pour étendre les fonctionnalités d’une requête {% data variables.product.prodname_codeql %} existantes.

![Alerte expérimentale d’analyse du code dans la liste](/assets/images/help/repository/code-scanning-experimental-alert-list.png)

### Avantages de l’utilisation de modèles Machine Learning pour étendre les requêtes

Les requêtes qui utilisent des modèles Machine Learning sont capables de trouver des vulnérabilités dans du code qui a été écrit avec des frameworks et des bibliothèques que n’avait pas inclus l’auteur initial des requêtes.

Chacune des requêtes de sécurité pour {% data variables.product.prodname_codeql %} identifie le code qui est vulnérable à un type spécifique d’attaque. Les chercheurs en sécurité écrivent les requêtes et incluent les frameworks et bibliothèques les plus courants. Ainsi, chaque requête existante trouve des utilisations vulnérables des frameworks et bibliothèques courants. Toutefois, les développeurs utilisent de nombreux frameworks et bibliothèques différents, et une requête gérée manuellement ne peut pas tous les inclure. De ce fait, les requêtes gérées manuellement ne fournissent pas de couverture pour la totalité des frameworks et des bibliothèques.

{% data variables.product.prodname_codeql %} utilise un modèle Machine Learning pour étendre une requête de sécurité existante afin de couvrir un plus large éventail de frameworks et de bibliothèques. Le modèle Machine Learning est entraîné pour détecter les problèmes dans le code qu’il n’a jamais vu auparavant. Les requêtes qui utilisent le modèle trouvent des résultats pour les frameworks et les bibliothèques qui ne sont pas décrits dans la requête d’origine.

### Alertes identifiées avec le Machine Learning

Les alertes trouvées avec un modèle Machine Learning sont marquées comme étant des « alertes expérimentales » pour montrer que la technologie est en cours de développement actif. Ces alertes ont un taux plus élevé de faux résultats positifs que les requêtes sur lesquelles elles sont basées. Le modèle Machine Learning s’améliore en fonction des actions de l’utilisateur telles que le marquage d’un mauvais résultat comme faux positif ou la correction d’un bon résultat.

![Détails d’une alerte expérimentale d’analyse du code](/assets/images/help/repository/code-scanning-experimental-alert-show.png)

## Activation des alertes expérimentales

Les suites de requêtes {% data variables.product.prodname_codeql %} par défaut n’incluent aucune requête qui utilise le Machine Learning pour générer des alertes expérimentales. Pour exécuter des requêtes Machine Learning pendant l’{% data variables.product.prodname_code_scanning %}, vous devez exécuter les requêtes supplémentaires contenues dans l’une des suites de requêtes suivantes.

{% data reusables.code-scanning.codeql-query-suites %}

Quand vous mettez à jour votre workflow pour exécuter une suite de requêtes supplémentaire, le temps d’analyse s’en trouve accru.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Run extended queries including queries using machine learning
    queries: security-extended
```

Pour plus d’informations, consultez « [Configuration de l’analyse du code](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs) ».

## Désactivation des alertes expérimentales

La façon la plus simple de désactiver les requêtes qui utilisent le Machine Learning pour générer des alertes expérimentales consiste à arrêter l’exécution de la suite de requêtes `security-extended` ou `security-and-quality`. Dans l’exemple ci-dessus, vous pouvez commenter la ligne `queries`. Si vous devez continuer à exécuter la suite `security-extended` ou `security-and-quality` et que les requêtes Machine Learning sont à l’origine de problèmes, vous pouvez ouvrir un ticket auprès du [support {% data variables.product.company_short %} ](https://support.github.com/contact) en indiquant les détails suivants.

- Titre du ticket : « {% data variables.product.prodname_code_scanning %} : suppression des alertes expérimentales bêta »
- Spécifiez les détails des dépôts ou des organisations affectés
- Demandez une escalade vers l’équipe d’ingénierie

{% endif %}
