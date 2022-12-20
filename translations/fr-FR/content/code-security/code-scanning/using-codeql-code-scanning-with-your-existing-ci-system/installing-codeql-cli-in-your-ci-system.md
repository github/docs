---
title: Installation de l’interface CLI de CodeQL dans votre système CI
shortTitle: Install CodeQL CLI
intro: 'Vous pouvez installer l’interface {% data variables.product.prodname_codeql_cli %} et l’utiliser pour effectuer une {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} dans un système d’intégration continue tiers.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
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
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
ms.openlocfilehash: 3d7c7dc3451b844b33fe0b14fd07f9a18ec81b10
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884541'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## À propos de l’{% data variables.product.prodname_codeql_cli %} pour l’{% data variables.product.prodname_code_scanning %}

Vous pouvez utiliser l’{% data variables.product.prodname_codeql_cli %} pour exécuter l’{% data variables.product.prodname_code_scanning %} sur le code que vous traitez dans un système d’intégration continue (CI) tiers. {% data reusables.code-scanning.about-code-scanning %} Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql) ». Pour obtenir les spécifications recommandées (RAM, cœurs de processeur et disque) pour l’exécution de l’analyse {% data variables.product.prodname_codeql %}, consultez « [Ressources matérielles recommandées pour l’exécution de {% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql) ».

{% data reusables.code-scanning.what-is-codeql-cli %}

Vous pouvez également utiliser {% data variables.product.prodname_actions %} pour exécuter l’{% data variables.product.prodname_code_scanning %} dans {% data variables.product.product_name %}. Pour plus d’informations sur l’{% data variables.product.prodname_code_scanning %} avec des actions, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) ». Pour obtenir une vue d’ensemble des options pour les systèmes CI, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %} CodeQL dans votre système CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system) ».

{% data reusables.code-scanning.licensing-note %}

## Téléchargement de l’{% data variables.product.prodname_codeql_cli %}

Vous devez télécharger le bundle {% data variables.product.prodname_codeql %} à partir de https://github.com/github/codeql-action/releases. Le bundle contient :

- L’{% data variables.product.prodname_codeql_cli %}
- Une version compatible des requêtes et des bibliothèques de https://github.com/github/codeql
- Versions précompilées de toutes les requêtes incluses dans le bundle

{% ifversion ghes or ghae %}

{% note %} Pour {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }},{% endif %}, nous recommandons {% data variables.product.prodname_codeql_cli %} version {% data variables.product.codeql_cli_ghes_recommended_version %}.
{% endnote %}

{% endif %}

Vous devez toujours utiliser le bundle {% data variables.product.prodname_codeql %}, car cela garantit la compatibilité et offre de meilleures performances qu’un téléchargement de l’{% data variables.product.prodname_codeql_cli %} et une extraction des requêtes {% data variables.product.prodname_codeql %} à part. Si vous envisagez d’exécuter l’interface CLI sur une seule plateforme, téléchargez le fichier `codeql-bundle-PLATFORM.tar.gz` approprié. Vous pouvez également télécharger `codeql-bundle.tar.gz` qui contient l’interface CLI pour toutes les plateformes prises en charge.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## Configuration de l’{% data variables.product.prodname_codeql_cli %} dans votre système CI

Vous devez rendre le contenu complet du bundle de l’{% data variables.product.prodname_codeql_cli %} disponible pour chaque serveur CI sur lequel vous souhaitez exécuter l’{% data variables.product.prodname_code_scanning %} CodeQL. Par exemple, vous pouvez configurer chaque serveur pour copier le bundle à partir d’un emplacement central interne et l’extraire. Vous pouvez également utiliser l’API REST pour obtenir le bundle directement à partir de {% data variables.product.prodname_dotcom %}, bénéficiant ainsi des dernières améliorations apportées aux requêtes. Les mises à jour de l’{% data variables.product.prodname_codeql_cli %} sont publiées toutes les 2 à 3 semaines. Par exemple :

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ./codeql-bundle-linux64.tar.gz
```

Après avoir extrait le bundle de l’{% data variables.product.prodname_codeql_cli %}, vous pouvez exécuter l’exécutable `codeql` sur le serveur :

- En exécutant `/<extraction-root>/codeql/codeql`, où `<extraction-root>` est le dossier dans lequel vous avez extrait le bundle de l’{% data variables.product.prodname_codeql_cli %}.
- En ajoutant `/<extraction-root>/codeql` à votre `PATH`, afin de pouvoir exécuter le fichier exécutable uniquement comme `codeql`.

## Test de la configuration de l’{% data variables.product.prodname_codeql_cli %}

Après avoir extrait le bundle de l’{% data variables.product.prodname_codeql_cli %}, vous pouvez exécuter la commande suivante pour vérifier que l’interface CLI est correctement configurée pour créer et analyser des bases de données.

- `codeql resolve qlpacks` si `/<extraction-root>/codeql` est dans le `PATH`.
- Sinon, `/<extraction-root>/codeql/codeql resolve qlpacks`.

**Extrait de la sortie réussie :**
```
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

Vous devez vérifier que la sortie contient les langages attendus et que l’emplacement du répertoire des fichiers qlpack est correct. L’emplacement doit se trouver dans le bundle de l’{% data variables.product.prodname_codeql_cli %} extrait, indiqué ci-dessus sous la forme `<extraction root>`, sauf si vous utilisez une extraction de `github/codeql`. Si l’{% data variables.product.prodname_codeql_cli %} ne peut pas localiser les qlpacks pour les langages attendus, vérifiez que vous avez téléchargé le bundle {% data variables.product.prodname_codeql %} et non une copie autonome de l’{% data variables.product.prodname_codeql_cli %}.

## Génération d’un jeton pour l’authentification auprès de {% data variables.product.product_name %}

Chaque serveur CI a besoin d’une {% data variables.product.prodname_github_app %} ou d’un jeton d’accès personnel qui permette à l’{% data variables.product.prodname_codeql_cli %} de charger les résultats sur {% data variables.product.product_name %}. Vous devez utiliser un jeton d’accès ou une {% data variables.product.prodname_github_app %} avec l’autorisation d’écriture `security_events`. Si les serveurs CI utilisent déjà un jeton avec cette étendue pour extraire les dépôts à partir de {% data variables.product.product_name %}, vous pouvez éventuellement autoriser l’{% data variables.product.prodname_codeql_cli %} à utiliser le même jeton. Sinon, vous devez créer un jeton avec l’autorisation d’accès en écriture `security_events` et l’ajouter au magasin de secrets du système CI. Pour plus d’informations, consultez « [Génération d’{% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps) » et « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».

## Étapes suivantes

Vous êtes maintenant prêt à configurer le système CI pour exécuter l’analyse {% data variables.product.prodname_codeql %}, générer des résultats et les charger sur {% data variables.product.product_name %}, où ils seront mis en correspondance avec une branche ou une demande de tirage (pull request) et affichés en tant qu’alertes d’{% data variables.product.prodname_code_scanning %}. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_codeql_cli %} dans votre système CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system) ».
