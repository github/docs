---
title: Résolution des problèmes liés au workflow CodeQL
shortTitle: Troubleshoot CodeQL workflow
intro: 'Si vous rencontrez des problèmes avec {% data variables.product.prodname_code_scanning %}, vous pouvez les résoudre à l’aide de ces conseils.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 4cbf57959776fee375eef2ea08778bf4c66b6324
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161190'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %} {% note %}

**Remarque :** Cet article décrit les fonctionnalités disponibles avec la version de l’action CodeQL et le bundle de l’interface CLI de CodeQL associé inclus dans la mise en production initiale de cette version de {% data variables.product.product_name %}. Si votre entreprise utilise une version plus récente de l’action CodeQL, consultez l’[article {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow) pour plus d’informations sur les dernières fonctionnalités. {% ifversion not ghae %} Pour plus d’informations sur l’utilisation de la dernière version, consultez « [Configuration de l’analyse du code pour votre appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access) »{% endif %}

{% endnote %} {% endif %}

## Production de journaux détaillés pour le débogage

Pour produire une sortie de journalisation plus détaillée, vous pouvez activer la journalisation du débogage par étape. Pour plus d’informations, consultez « [Activation de la journalisation du débogage](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging) ».

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

## Création d’artefacts de débogage {% data variables.product.prodname_codeql %}

Vous pouvez obtenir des artefacts pour vous aider à déboguer {% data variables.product.prodname_codeql %}.
Les artefacts de débogage sont chargés sur l’exécution du workflow en tant qu’artefact nommé `debug-artifacts`. Les données contiennent les journaux {% data variables.product.prodname_codeql %}, la ou les bases de données {% data variables.product.prodname_codeql %} et tout fichier SARIF généré par le workflow.

Ces artefacts vous aident à déboguer les problèmes avec {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. Si vous contactez le support GitHub, il se peut qu’il vous demande ces données.

{% endif %}

{% ifversion codeql-action-debug-logging %}

### Création d’artefacts de débogage {% data variables.product.prodname_codeql %} en réexécutant les travaux avec la journalisation du débogage activée

Vous pouvez créer des artefacts de débogage {% data variables.product.prodname_codeql %} en activant la journalisation du débogage et en réexécutant les travaux. Pour plus d’informations sur la réexécution des workflows et travaux {% data variables.product.prodname_actions %}, consultez « [Réexécution des workflows et des travaux](/actions/managing-workflow-runs/re-running-workflows-and-jobs) ».

Vous devez veiller à sélectionner **Activer la journalisation du débogage**. Cette option permet d’activer la journalisation des diagnostics de l’exécuteur et la journalisation du débogage par étape pour l’exécution. Vous pouvez ensuite télécharger `debug-artifacts` pour de plus amples investigations. Vous n’avez pas besoin de modifier le fichier de workflow lors de la création d’artefacts de débogage {% data variables.product.prodname_codeql %} en réexécutant les travaux.

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

### Création d’artefacts de débogage {% data variables.product.prodname_codeql %} avec un indicateur de workflow

Vous pouvez créer des artefacts de débogage {% data variables.product.prodname_codeql %} en utilisant un indicateur dans votre workflow. Pour ce faire, vous devez modifier l’étape `init` de votre fichier {% data variables.code-scanning.codeql_workflow %} et définir `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

{% endif %}

## Échec de la génération automatique pour un langage compilé

Si une génération automatique de code pour un langage compilé au sein de votre projet échoue, essayez les étapes de résolution de problèmes suivantes.

- Supprimez l’étape `autobuild` de votre workflow d’{% data variables.product.prodname_code_scanning %} et ajoutez des étapes de génération spécifiques. Pour plus d’informations sur la modification du workflow, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow) ». Pour plus d’informations sur le remplacement de l’étape `autobuild`, consultez « [Configuration du workflow {% data variables.product.prodname_codeql %} pour les langages compilés](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language) ».

- Si votre workflow ne spécifie pas explicitement les langages à analyser, {% data variables.product.prodname_codeql %} détecte implicitement les langages pris en charge dans votre base de code. Dans cette configuration, parmi les langages compilés C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} et Java, {% data variables.product.prodname_codeql %} analyse uniquement celui qui a le plus de fichiers sources. Modifiez le workflow et ajoutez une matrice spécifiant les langages que vous souhaitez analyser. Le workflow d’analyse CodeQL par défaut utilise une telle matrice.

  Les extraits suivants d’un workflow montrent comment utiliser une matrice dans la stratégie de travail pour spécifier des langages, puis référencer chaque langage dans l’étape « Initialiser {% data variables.product.prodname_codeql %} » :

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  Pour plus d’informations sur la modification du workflow, consultez « [Configuration de l’analyse du code](/code-security/secure-coding/configuring-code-scanning) ».

## Aucun code trouvé pendant la génération

Si votre workflow échoue avec une erreur `No source code was seen during the build` ou `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`, cela indique que {% data variables.product.prodname_codeql %} n’a pas pu superviser votre code. Plusieurs raisons peuvent expliquer un tel échec :

1. Le dépôt peut ne pas contenir de code source écrit dans des langages pris en charge par {% data variables.product.prodname_codeql %}. Vérifiez la liste des langages pris en charge et, si c’est le cas, supprimez le workflow {% data variables.product.prodname_codeql %}. Pour plus d’informations, consultez « [À propos de l’analyse du code avec CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql) ».

1. La détection automatique du langage a identifié un langage pris en charge, mais il n’existe aucun code analysable de ce langage dans le dépôt. Par exemple, notre service de détection de langage trouve un fichier associé à un langage de programmation particulier, tel qu’un fichier `.h`ou `.gyp`, mais aucun code exécutable correspondant n’est présent dans le dépôt. Pour résoudre le problème, vous pouvez définir manuellement les langages que vous souhaitez analyser en mettant à jour la liste des langages dans la matrice `language`. Par exemple, la configuration suivante analyse uniquement Go et JavaScript.

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   Pour plus d’informations, consultez l’extrait de workflow dans « [Échec de la génération automatique pour un langage compilé](#automatic-build-for-a-compiled-language-fails) » ci-dessus.

1. Votre workflow d’{% data variables.product.prodname_code_scanning %} analyse un langage compilé (C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} ou Java), mais le code n’a pas été compilé. Par défaut, le workflow d’analyse {% data variables.product.prodname_codeql %} contient une étape `autobuild`, mais, suivant votre environnement de génération, il n’est pas garanti que cette étape parvienne à générer votre code. La compilation peut également échouer si vous avez supprimé l’étape `autobuild` et n’avez pas inclus les étapes de génération manuellement.  Pour plus d’informations sur la spécification des étapes de génération, consultez « [Configuration du workflow {% data variables.product.prodname_codeql %} pour les langages compilés](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language) ».
1. Votre workflow analyse un langage compilé (C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} ou Java), mais des parties de votre build sont mises en cache pour améliorer les performances (généralement avec des systèmes de génération comme Gradle ou Bazel). Étant donné que {% data variables.product.prodname_codeql %} observe l’activité du compilateur pour comprendre les flux de données dans un dépôt, {% data variables.product.prodname_codeql %} nécessite qu’une génération complète ait lieu pour effectuer une analyse.
1. Votre workflow analyse un langage compilé (C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} ou Java), mais la compilation ne se produit pas entre les étapes `init` et `analyze` du workflow. {% data variables.product.prodname_codeql %} nécessite que votre génération se produise entre ces deux étapes afin d’observer l’activité du compilateur et d’effectuer une analyse.
1. Votre code compilé (en C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} ou Java) a été compilé, mais {% data variables.product.prodname_codeql %} n’a pas pu détecter les appels du compilateur. Les causes les plus courantes sont :

   - Exécution de votre processus de génération dans un conteneur distinct vers {% data variables.product.prodname_codeql %}. Pour plus d’informations, consultez « [Exécution de l’analyse du code CodeQL dans un conteneur](/code-security/secure-coding/running-codeql-code-scanning-in-a-container) ».
   - Réalisation de la génération avec un système de génération distribué externe à GitHub Actions, utilisant un processus de démon.
   - {% data variables.product.prodname_codeql %} ne sait pas quel est le compilateur que vous utilisez.

  Pour les projets .NET Framework et pour les projets C# utilisant `dotnet build` ou `msbuild`, vous devez spécifier `/p:UseSharedCompilation=false` à l’étape `run` de votre workflow quand vous générez votre code.
  
  Par exemple, la configuration suivante pour C# passe l’indicateur lors de la première étape de génération.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  Si vous rencontrez un autre problème avec votre compilateur ou configuration, contactez le {% data variables.contact.contact_support %}.

Pour plus d’informations sur la spécification des étapes de génération, consultez « [Configuration du workflow {% data variables.product.prodname_codeql %} pour les langages compilés](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language) ».

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}

## Il y a moins de lignes de code analysées que prévu

Pour les langages compilés tels que C/C++, C#, Go et Java, {% data variables.product.prodname_codeql %} analyse uniquement les fichiers générés pendant l’analyse. Ainsi, il y a moins de lignes de code analysées que prévu si une partie du code source n’est pas compilée correctement. Cela peut se produire pour plusieurs raisons :

1. La fonctionnalité `autobuild` de {% data variables.product.prodname_codeql %} utilise des heuristiques pour générer le code dans un dépôt. Toutefois, cette approche entraîne parfois une analyse incomplète d’un dépôt. Par exemple, quand plusieurs commandes `build.sh` existent dans un même dépôt, l’analyse peut ne pas être terminée, car l’étape `autobuild` n’exécute qu’une des commandes, ce qui peut empêcher la compilation de certains fichiers sources.
1. Certains compilateurs ne fonctionnent pas avec {% data variables.product.prodname_codeql %} et peuvent provoquer des problèmes lors de l’analyse du code. Par exemple, Project Lombok utilise des API de compilateur non publiques pour modifier le comportement du compilateur. Les hypothèses utilisées dans ces modifications du compilateur ne sont pas valides pour l’extracteur Java de {% data variables.product.prodname_codeql %}, de sorte que le code ne peut pas être analysé.

Si votre analyse {% data variables.product.prodname_codeql %} analyse moins de lignes de code que prévu, vous pouvez essayer diverses approches pour faire en sorte que tous les fichiers sources nécessaires soient compilés.

### Remplacer l’étape `autobuild`

Remplacez l’étape `autobuild` par les commandes de génération que vous utiliseriez en production. Ainsi, {% data variables.product.prodname_codeql %} sait exactement comment compiler tous les fichiers sources que vous souhaitez analyser.
Pour plus d’informations, consultez « [Configuration du workflow {% data variables.product.prodname_codeql %} pour les langages compilés](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language) ».

### Inspecter la copie des fichiers sources dans la base de données {% data variables.product.prodname_codeql %}

Vous pourriez comprendre pourquoi certains fichiers sources n’ont pas été analysés en inspectant la copie du code source incluse dans la base de données {% data variables.product.prodname_codeql %}. Pour obtenir la base de données à partir de workflow Actions, modifiez l’étape `init` de votre fichier de workflow {% data variables.product.prodname_codeql %} et définissez `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

Cette opération charge la base de données en tant qu’artefact d’actions que vous pouvez télécharger sur votre ordinateur local. Pour plus d’informations, consultez « [Stockage des artefacts de workflow](/actions/guides/storing-workflow-data-as-artifacts) ».

L’artefact contient une copie archivée des fichiers sources analysés par {% data variables.product.prodname_codeql %} appelée _src.zip_. Si vous comparez les fichiers de code source dans le dépôt et les fichiers dans _src.zip_, vous pouvez voir quels types de fichiers sont manquants. Une fois que vous savez quels types de fichiers ne sont pas analysés, il est plus facile de comprendre comment vous devrez peut-être changer le workflow pour l’analyse {% data variables.product.prodname_codeql %}.

## Alertes trouvées dans le code généré

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## Erreurs d’extraction dans la base de données

L’équipe {% data variables.product.prodname_codeql %} travaille constamment sur les erreurs d’extraction critiques afin que tous les fichiers sources puissent être analysés. Toutefois, les extracteurs {% data variables.product.prodname_codeql %} génèrent parfois des erreurs lors de la création de la base de données. {% data variables.product.prodname_codeql %} fournit des informations sur les erreurs d’extraction et les avertissements générés lors de la création de la base de données dans un fichier journal.
Les informations de diagnostic d’extraction indiquent l’intégrité globale de la base de données. La plupart des erreurs d’extraction n’impactent pas considérablement l’analyse. Un petit nombre d’erreurs d’extraction est sain et indique généralement un bon état d’analyse.

Toutefois, si vous voyez des erreurs d’extraction dans une grande majorité des fichiers qui ont été compilés lors de la création de la base de données, vous devez examiner plus en détail les erreurs pour essayer de comprendre pourquoi certains fichiers sources n’ont pas été extraits correctement.

{% else %}

## Des parties de mon dépôt n’ont pas été analysées avec `autobuild`

La fonctionnalité `autobuild` de {% data variables.product.prodname_codeql %} utilise des heuristiques pour générer le code dans un dépôt, mais cette approche entraîne parfois une analyse incomplète d’un dépôt. Par exemple, quand plusieurs commandes `build.sh` existent dans un même dépôt, l’analyse peut ne pas se terminer, car l’étape `autobuild` n’exécute qu’une des commandes. La solution consiste à remplacer l’étape `autobuild` par des étapes de génération qui créent tout le code source que vous souhaitez analyser. Pour plus d’informations, consultez « [Configuration du workflow {% data variables.product.prodname_codeql %} pour les langages compilés](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language) ».
{% endif %}

## La génération prend trop de temps

Si l’exécution de la génération avec l’analyse {% data variables.product.prodname_codeql %} prend trop de temps, vous pouvez essayer de réduire le temps de génération.

### Augmenter la mémoire ou le nombre de cœurs

Si vous utilisez des exécuteurs auto-hébergés pour exécuter l’analyse {% data variables.product.prodname_codeql %}, vous pouvez augmenter la mémoire ou le nombre de cœurs sur ces exécuteurs.

### Utiliser des builds de matrice pour paralléliser l’analyse

Le {% data variables.code-scanning.codeql_workflow %} par défaut utilise une matrice de langages, ce qui entraîne l’exécution parallèle de l’analyse de chaque langage. Si vous avez spécifié les langages que vous souhaitez analyser directement à l’étape « Initialiser CodeQL », l’analyse de chaque langage se produit de manière séquentielle. Pour accélérer l’analyse de plusieurs langages, modifiez votre workflow de manière à utiliser une matrice. Pour plus d’informations, consultez l’extrait de workflow dans « [Échec de la génération automatique pour un langage compilé](#automatic-build-for-a-compiled-language-fails) » ci-dessus.

### Réduire la quantité de code analysée dans un même workflow

La durée de l’analyse est généralement proportionnelle à la quantité de code analysé. Vous pouvez réduire le temps d’analyse en réduisant la quantité de code analysée simultanément, par exemple, en excluant le code de test ou en divisant l’analyse en plusieurs workflows qui analysent uniquement un sous-ensemble de votre code à la fois.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

Si vous divisez votre analyse en plusieurs workflows comme décrit ci-dessus, nous vous recommandons toutefois d’avoir au moins un workflow qui s’exécute sur un `schedule` qui analyse tout le code de votre dépôt. Étant donné que {% data variables.product.prodname_codeql %} analyse les flux de données entre les composants, certains comportements de sécurité complexes peuvent uniquement être détectés sur une génération complète.

### Exécuter uniquement pendant un événement `schedule`

Si votre analyse est encore trop lente pour être exécutée pendant les événements `push` ou `pull_request`, vous pouvez limiter le déclenchement de l’analyse à l’événement `schedule`. Pour plus d’informations, consultez « [Événements](/actions/learn-github-actions/introduction-to-github-actions#events) ».

### Vérifier quelles sont les suites de requêtes exécutées par le workflow

Par défaut, il existe trois suites de requêtes principales disponibles pour chaque langage. Si vous avez optimisé la génération de base de données CodeQL et que le processus est encore trop long, vous pouvez réduire le nombre de requêtes que vous exécutez. La suite de requêtes par défaut est exécutée automatiquement ; elle contient les requêtes de sécurité les plus rapides avec les taux les plus bas de faux résultats positifs.

Vous pouvez exécuter des suites de requêtes ou des requêtes supplémentaires en plus des requêtes par défaut. Vérifiez si le workflow définit l’exécution d’une suite de requêtes supplémentaire ou de requêtes supplémentaires en utilisant l’élément `queries`. Vous pouvez tester la désactivation de la suite de requêtes ou des requêtes supplémentaires. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs) ».

{% ifversion codeql-ml-queries %} {% note %}

**Remarque :** Si vous exécutez la suite de requêtes `security-extended` ou `security-and-quality` pour JavaScript, certaines requêtes utilisent une technologie expérimentale. Pour plus d’informations, consultez « [À propos des alertes d’analyse du code](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts) ».
{% endnote %} {% endif %}

{% ifversion fpt or ghec %}

## Les résultats diffèrent entre les plateformes d’analyse

Si vous analysez du code écrit en Python, vous pouvez voir des résultats différents selon que vous exécutez le {% data variables.code-scanning.codeql_workflow %} sur Linux, macOS ou Windows.

Sur les exécuteurs hébergés par GitHub qui utilisent Linux, le {% data variables.code-scanning.codeql_workflow %} tente d’installer et d’analyser les dépendances Python, ce qui peut entraîner davantage de résultats. Pour désactiver l’installation automatique, ajoutez `setup-python-dependencies: false` à l’étape « Initialize CodeQL » du flux de travail. Pour plus d’informations sur la configuration de l’analyse des dépendances Python, consultez « [Analyse des dépendances Python](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies) ».

{% endif %}

## Erreur : « Erreur de serveur »

Si l’exécution d’un workflow pour l’{% data variables.product.prodname_code_scanning %} échoue en raison d’une erreur de serveur, essayez de réexécuter le workflow. Si le problème persiste, contactez le {% data variables.contact.contact_support %}.

## Erreur : « Espace disque insuffisant » ou « Mémoire insuffisante »

Sur les très grands projets, {% data variables.product.prodname_codeql %} peut manquer d’espace disque ou de mémoire sur l’exécuteur.
{% ifversion fpt or ghec %}Si vous rencontrez ce problème sur un exécuteur {% data variables.product.prodname_actions %} hébergé, contactez le {% data variables.contact.contact_support %} afin que nous puissions examiner le problème.
{% else %}Si vous rencontrez ce problème, essayez d’augmenter la mémoire sur l’exécuteur.{% endif %}

{% ifversion fpt or ghec %}

## Erreur : 403 « Ressource non accessible par intégration » lors de l’utilisation de {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} est considéré comme non approuvé quand il déclenche une exécution de workflow, et le workflow s’exécute avec des étendues en lecture seule. Le chargement des résultats d’{% data variables.product.prodname_code_scanning %} pour une branche nécessite généralement l’étendue `security_events: write`. Toutefois, l’{% data variables.product.prodname_code_scanning %} autorise toujours le chargement des résultats quand l’événement `pull_request` déclenche l’exécution de l’action. C’est pourquoi, dans le cas des branches {% data variables.product.prodname_dependabot %}, nous vous recommandons d’utiliser l’événement `pull_request` au lieu de l’événement `push`.

Une approche simple consiste à exécuter sur les poussées (push) vers la branche par défaut et toutes les autres branches importantes de longue durée ainsi que sur les demandes de tirage (pull request) ouvertes sur cet ensemble de branches.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

Une autre approche consiste à exécuter sur toutes les poussées, à l’exception des branches {% data variables.product.prodname_dependabot %} :

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### Analyse toujours en échec sur la branche par défaut

Si le {% data variables.code-scanning.codeql_workflow %} échoue toujours sur un commit effectué sur la branche par défaut, vous devez vérifier :

- si {% data variables.product.prodname_dependabot %} a créé le commit ;
- Si la demande de tirage qui inclut le commit a été fusionnée à l’aide de `@dependabot squash and merge`.

Ce type de commit de fusion étant créé par {% data variables.product.prodname_dependabot %}, tous les workflows s’exécutant sur le commit ont des autorisations de lecture seule. Si vous avez activé l’{% data variables.product.prodname_code_scanning %} et les mises à jour de sécurité ou de version {% data variables.product.prodname_dependabot %} sur votre dépôt, nous vous recommandons d’éviter d’utiliser la commande {% data variables.product.prodname_dependabot %} `@dependabot squash and merge`. À la place, vous pouvez activer la fusion automatique pour votre référentiel. Cela signifie que les requêtes de tirage seront automatiquement fusionnées lorsque toutes les révisions requises sont satisfaites et que les contrôles d’état ont réussi. Pour plus d’informations sur l’activation de la fusion automatique, consultez « [Fusion automatique d’une demande de tirage](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge) ».
{% endif %}

## Erreur : « n’est pas un fichier.ql, un fichier.qls, un répertoire ou une spécification de pack de requêtes »

Vous verrez cette erreur si CodeQL ne peut pas trouver la requête, la suite de requêtes ou le pack de requêtes nommé à l’emplacement demandé dans le workflow. Il existe deux raisons courantes à cette erreur.

- Il y a une faute de frappe dans le workflow.
- Une ressource à laquelle le workflow fait référence par chemin d’accès a été renommée, supprimée ou déplacée vers un nouvel emplacement.

Après avoir vérifié l’emplacement de la ressource, vous pouvez mettre à jour le workflow pour spécifier l’emplacement correct.

## Avertissement : « Basculement sur une branche git HEAD^2 plus nécessaire »

Si vous utilisez un ancien workflow {% data variables.product.prodname_codeql %}, vous pouvez recevoir l’avertissement suivant dans la sortie de l’action « Initialiser Initialize {% data variables.product.prodname_codeql %} » :

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Pour corriger cela, supprimez les lignes suivantes du workflow {% data variables.product.prodname_codeql %}. Ces lignes ont été incluses dans la section `steps` du travail `Analyze` dans les versions initiales du workflow {% data variables.product.prodname_codeql %}.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

La section `steps` révisée du flux de travail doit ressembler à ceci :

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

Pour plus d’informations sur la modification du fichier de workflow {% data variables.product.prodname_codeql %}, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow) ».
