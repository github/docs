---
title: Résolution des problèmes liés à l’exécuteur CodeQL dans votre système CI
shortTitle: Troubleshoot CodeQL runner
intro: 'Si vous rencontrez des problèmes avec l’{% data variables.code-scanning.codeql_runner %}, vous pouvez les résoudre en utilisant ces conseils.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/troubleshooting-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Troubleshooting
  - Integration
  - CI
ms.openlocfilehash: b241e0c01b463a46a1eb3b47b68ba0283a94609d
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161159'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

## La commande `init` prend trop de temps

Avant que l’{% data variables.code-scanning.codeql_runner %} ne puisse générer et analyser du code, il doit accéder au bundle {% data variables.product.prodname_codeql %}, qui contient l’interface CLI {% data variables.product.prodname_codeql %} et les bibliothèques {% data variables.product.prodname_codeql %}.

Quand vous utilisez l’{% data variables.code-scanning.codeql_runner %} pour la première fois sur votre machine, la commande `init` y télécharge le bundle {% data variables.product.prodname_codeql %}. Ce téléchargement peut prendre quelques minutes.
Le bundle {% data variables.product.prodname_codeql %} est mis en cache entre les exécutions, donc si vous réutilisez l’{% data variables.code-scanning.codeql_runner %} sur la même machine, il ne retélécharge pas le bundle {% data variables.product.prodname_codeql %}.

Pour éviter ce téléchargement automatique, vous pouvez télécharger manuellement le bundle {% data variables.product.prodname_codeql %} sur votre machine et spécifier le chemin en utilisant l’indicateur `--codeql-path` de la commande `init`.

## Aucun code trouvé pendant la génération

Si la commande `analyze` pour l’{% data variables.code-scanning.codeql_runner %} échoue avec une erreur `No source code was seen during the build`, cela indique que {% data variables.product.prodname_codeql %} n’a pas pu superviser votre code. Plusieurs raisons peuvent expliquer un tel échec.

1. La détection automatique du langage a identifié un langage pris en charge, mais il n’existe aucun code analysable de ce langage dans le dépôt. Par exemple, notre service de détection de langage trouve un fichier associé à un langage de programmation particulier, tel qu’un fichier `.h`ou `.gyp`, mais aucun code exécutable correspondant n’est présent dans le dépôt. Pour résoudre le problème, vous pouvez définir manuellement les langages que vous souhaitez analyser en utilisant l’indicateur `--languages` de la commande `init`. Pour plus d’informations, consultez « [Configuration de l’{% data variables.code-scanning.codeql_runner %} dans votre système CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system) ».

1. Vous analysez un langage compilé sans utiliser la commande `autobuild` et vous exécutez les étapes de génération vous-même après l’étape `init`. Pour que la génération fonctionne, vous devez configurer l’environnement de sorte que l’{% data variables.code-scanning.codeql_runner %} puisse superviser le processus de génération. La commande `init` génère des instructions sur la façon d’exporter les variables d’environnement requises. Vous pouvez donc copier et exécuter le script après avoir exécuté la commande `init`.
   - Sur macOS et Linux :
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - Sur Windows, avec l’interpréteur de commandes (`cmd`) ou un fichier de commandes (`.bat`) :
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - Sur Windows, avec PowerShell :
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   Les variables d’environnement sont également stockées dans le fichier `codeql-runner/codeql-env.json`. Ce fichier contient un seul objet JSON qui mappe les clés de variable d’environnement aux valeurs. Si vous ne pouvez pas exécuter le script généré par la commande `init`, vous pouvez utiliser les données au format JSON à la place.

   {% note %}

   **Remarque :** Si vous avez utilisé l’indicateur `--temp-dir` de la commande `init` afin de spécifier un répertoire personnalisé pour les fichiers temporaires, le chemin des fichiers `codeql-env` peut être différent.

   {% endnote %}

1. Vous analysez un langage compilé sur macOS sans utiliser la commande `autobuild` et vous exécutez les étapes de génération vous-même après l’étape `init`. Si SIP (System Integrity Protection) est activé, ce qui correspond au paramétrage par défaut sur les versions récentes d’OSX, l’analyse peut échouer. Pour résoudre ce problème, préfixez la commande de génération avec la variable d’environnement `$CODEQL_RUNNER`. 
   Par exemple, si votre commande de génération est `cmd arg1 arg2`, vous devez exécuter `$CODEQL_RUNNER cmd arg1 arg2`.

1. Le code est généré dans un conteneur ou sur une machine distincte. Si vous utilisez une build conteneurisée ou que vous externalisez la build sur une autre machine, veillez à exécuter l’{% data variables.code-scanning.codeql_runner %} dans le conteneur ou sur la machine où votre tâche de génération a lieu. Pour plus d’informations, consultez « [Exécution de l’analyse du code CodeQL dans un conteneur](/code-security/secure-coding/running-codeql-code-scanning-in-a-container) ».
