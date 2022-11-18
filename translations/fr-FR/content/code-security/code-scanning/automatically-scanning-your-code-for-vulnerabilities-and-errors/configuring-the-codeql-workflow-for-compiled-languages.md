---
title: Configuration du workflow CodeQL pour les langages compilés
shortTitle: Configure compiled languages
intro: 'Vous pouvez configurer la façon dont {% data variables.product.prodname_dotcom %} utilise le {% data variables.code-scanning.codeql_workflow %} pour analyser le code écrit dans des langages compilés pour détecter les vulnérabilités et les erreurs.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
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
  - Repositories
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 91983e79a6381b4a38cbb1de4f6d7f228637b192
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161198'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## À propos du {% data variables.code-scanning.codeql_workflow %} et des langages compilés

Vous configurez {% data variables.product.prodname_dotcom %} afin d’exécuter l’{% data variables.product.prodname_code_scanning %} pour votre dépôt en ajoutant un workflow {% data variables.product.prodname_actions %} à ce dernier. Pour l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %}, vous ajoutez le {% data variables.code-scanning.codeql_workflow %}. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) ».

{% data reusables.code-scanning.edit-workflow %} Pour obtenir des informations générales sur la configuration de l’{% data variables.product.prodname_code_scanning %} et la modification des fichiers de workflow, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning) » et « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

##  À propos de la génération automatique pour {% data variables.product.prodname_codeql %}

L’{% data variables.product.prodname_code_scanning_capc %} fonctionne en exécutant des requêtes sur une ou plusieurs bases de données. Chaque base de données contient une représentation de tout le code dans un langage unique au sein de votre dépôt.   
Pour les langages compilés C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} et Java, le processus de remplissage de cette base de données implique la génération du code et l’extraction des données. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

Si votre workflow utilise une matrice `language`, `autobuild` tente de générer chacun des langages compilés listés dans la matrice. Sans matrice, `autobuild` tente de générer le langage compilé pris en charge qui a le plus grand nombre de fichiers sources dans le dépôt. À l’exception de Go, l’analyse d’autres langages compilés dans votre dépôt échoue, sauf si vous fournissez des commandes de build explicites.

{% note %}

{% ifversion ghae %} **Remarque** : {% data reusables.actions.self-hosted-runners-software %} {% else %} **Remarque** : Si vous utilisez des exécuteurs auto-hébergés pour {% data variables.product.prodname_actions %}, vous devrez peut-être installer des logiciels supplémentaires pour utiliser le processus `autobuild`. En outre, si votre dépôt nécessite une version spécifique d’un outil de génération, vous devrez peut-être l’installer manuellement. Pour plus d’informations, consultez « [Spécifications pour les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) ».
{% endif %}

{% endnote %}

### C/C++

| Type de système pris en charge | Nom système |
|----|----|
| Système d’exploitation | Windows, macOS et Linux |
| Système de build | Windows : scripts MSbuild et de build<br/>Linux et macOS : Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild et scripts de build |

Le comportement de l’étape `autobuild` varie en fonction du système d’exploitation sur lequel l’extraction s’exécute. Sur Windows, l’étape `autobuild` tente de détecter automatiquement une méthode de génération appropriée pour C/C++ en utilisant l’approche suivante :

1. Appeler `MSBuild.exe` sur le fichier solution (`.sln`) ou projet (`.vcxproj`) le plus proche de la racine.
Si `autobuild` détecte plusieurs fichiers solution ou projet à la même profondeur (la plus courte) à partir du répertoire de niveau supérieur, il tente de les générer tous.
2. Appeler un script qui ressemble à un script de build : _build.bat_, _build.cmd_ et _build.exe_ (dans cet ordre).

Sur Linux et macOS, l’étape `autobuild` passe en revue les fichiers présents dans le dépôt pour déterminer le système de build utilisé :

1. Rechercher un système de build dans le répertoire racine.
2. Si aucun répertoire n’est trouvé, rechercher un répertoire unique avec un système de build pour C/C++.
3. Exécuter une commande appropriée pour configurer le système. 

### C#

| Type de système pris en charge | Nom système |
|----|----|
| Système d’exploitation | Windows et Linux |
| Système de build | .NET et MSbuild ainsi que les scripts de build |

Le processus `autobuild` tente de détecter automatiquement une méthode de génération appropriée pour C# en utilisant l’approche suivante :

1. Appeler `dotnet build` sur le fichier solution (`.sln`) ou projet (`.csproj`) le plus proche de la racine.
2. Appeler `MSbuild` (Linux) ou `MSBuild.exe` (Windows) sur le fichier solution ou projet le plus proche de la racine.
Si `autobuild` détecte plusieurs fichiers solution ou projet à la même profondeur (la plus courte) à partir du répertoire de niveau supérieur, il tente de les générer tous.
3. Appeler un script qui ressemble à un script de build : _build_ et _build.sh_ (dans cet ordre, pour Linux) ou _build.bat_, _build.cmd_ et _build.exe_ (dans cet ordre, pour Windows).

{% ifversion codeql-go-autobuild %}

### Go

| Type de système pris en charge | Nom système |
|----|----|
| Système d’exploitation | Windows, macOS et Linux |
| Système de build | Modules Go, `dep` et Glide, ainsi que des scripts de génération, notamment des scripts Makefiles et Ninja |

Le processus `autobuild` tente de détecter automatiquement un moyen approprié d’installer les dépendances dont un dépôt Go a besoin avant d’extraire tous les fichiers `.go` :

1. Appelez `make`, `ninja`, `./build` ou `./build.sh` (dans cet ordre) jusqu’à ce que l’une de ces commandes réussisse et qu’une commande `go list ./...` ultérieure réussisse également, indiquant que les dépendances nécessaires ont été installées.
2. Si aucune de ces commandes ne réussit, recherchez `go.mod`, `Gopkg.toml` ou `glide.yaml`, et exécutez `go get` (sauf si le vendoring est utilisé), `dep ensure -v` ou `glide install` respectivement pour essayer d’installer les dépendances.
3. Enfin, si les fichiers de configuration de ces gestionnaires de dépendances sont introuvables, réorganisez la structure de répertoires du dépôt pour l’ajouter à `GOPATH` et utilisez `go get` pour installer les dépendances. La structure de répertoires revient à la normale une fois l’extraction terminée.
4. Extrayez tout le code Go dans le dépôt, comme pour l’exécution de `go build ./...`.

{% endif %}

### Java

| Type de système pris en charge | Nom système |
|----|----|
| Système d’exploitation | Windows, macOS et Linux (sans restriction) |
| Système de build | Gradle, Maven et Ant |

Le processus `autobuild` tente de déterminer le système de build pour les codebases Java en appliquant cette stratégie :

1. Rechercher un fichier de build dans le répertoire racine. Rechercher les fichiers de build Gradle, puis Maven, puis Ant.
2. Exécuter le premier fichier de build trouvé. Si les fichiers Gradle et Maven sont présents, le fichier Gradle est utilisé.
3. Sinon, rechercher les fichiers de build dans les sous-répertoires directs du répertoire racine. Si un seul sous-répertoire contient des fichiers de build, exécutez le premier fichier identifié dans ce sous-répertoire (en utilisant la même préférence que pour 1). Si plusieurs sous-répertoires contiennent des fichiers de build, signaler une erreur.

## Ajout des étapes de build pour un langage compilé

{% data reusables.code-scanning.autobuild-add-build-steps %} Pour plus d’informations sur la modification du fichier de workflow, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow) ».

Après avoir supprimé l’étape `autobuild`, supprimez les marques de commentaire de l’étape `run` et ajoutez des commandes de build qui conviennent à votre dépôt. L’étape `run` du workflow exécute des programmes en ligne de commande avec l’interpréteur de commandes du système d’exploitation. Vous pouvez modifier ces commandes et ajouter d’autres commandes pour personnaliser le processus de build.

``` yaml
- run: |
    make bootstrap
    make release
```

Pour plus d’informations sur le mot clé`run`, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ».

Si votre référentiel contient plusieurs langages compilés, vous pouvez spécifier des commandes de build spécifiques à un langage. Par exemple, si votre dépôt contient du code C/C++, C# et Java et que `autobuild` génère correctement le code C/C++ et C#, mais ne parvient pas à générer le code Java, vous pouvez utiliser la configuration suivante dans votre workflow, après l’étape `init`. Cela spécifie les étapes de build pour Java tout en continuant à utiliser `autobuild` pour C/C++ et C# :

```yaml
- if: matrix.language == 'cpp' || matrix.language == 'csharp' 
  name: Autobuild
  uses: {% data reusables.actions.action-codeql-action-autobuild %}

- if: matrix.language == 'java' 
  name: Build Java
  run: |
    make bootstrap
    make release
```

Pour plus d’informations sur l’instruction conditionnelle `if`, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif) ».

Pour obtenir d’autres conseils et astuces sur la raison pour laquelle `autobuild` ne génère pas votre code, consultez « [Résolution des problèmes liés au workflow {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow) ».

Si vous avez ajouté des étapes de génération manuelles pour les langages compilés et que l’{% data variables.product.prodname_code_scanning %} ne fonctionne toujours pas sur votre dépôt, contactez le {% data variables.contact.contact_support %}.
