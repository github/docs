---
title: Prise en charge de SARIF pour l’analyse du code
shortTitle: SARIF support
intro: 'Pour afficher les résultats d’un outil d’analyse statique tiers dans votre référentiel sur {% data variables.product.prodname_dotcom %}, vous devez stocker vos résultats dans un fichier SARIF qui prend en charge un sous-ensemble spécifique du schéma JSON SARIF 2.1.0 pour {% data variables.product.prodname_code_scanning %}. Si vous utilisez le moteur d’analyse statique par défaut {% data variables.product.prodname_codeql %}, alors vos résultats s’afficheront dans votre référentiel sur {% data variables.product.prodname_dotcom %} automatiquement.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning
  - /code-security/secure-coding/sarif-support-for-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/sarif-support-for-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - SARIF
ms.openlocfilehash: 98d0e4620d240c3e1863aaee6f57a5834c86018b
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162790'
---
{% data reusables.code-scanning.beta %}

## À propos de la prise en charge de SARIF

SARIF (Static Analysis Results Interchange Format) est une [norme OASIS](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) qui définit un format de fichier de sortie. La norme SARIF est utilisée pour simplifier la façon dont les outils d’analyse statique partagent leurs résultats. {% data variables.product.prodname_code_scanning_capc %} prend en charge un sous-ensemble du schéma JSON SARIF 2.1.0.

Pour charger un fichier SARIF à partir d’un moteur d’analyse de code statique tiers, vous devez vous assurer que les fichiers chargés utilisent la version SARIF 2.1.0. {% data variables.product.prodname_dotcom %} analyse le fichier SARIF et affiche des alertes en utilisant les résultats dans votre dépôt dans le cadre de l’expérience d’{% data variables.product.prodname_code_scanning %}. Pour plus d’informations, consultez « [Chargement d’un fichier SARIF sur {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github) ». Pour plus d’informations sur le schéma JSON SARIF 2.1.0, consultez [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json).

Si vous utilisez {% data variables.product.prodname_actions %} avec le {% data variables.code-scanning.codeql_workflow %}{% ifversion codeql-runner-supported %}, utilisez l’{% data variables.code-scanning.codeql_runner %},{% endif %} ou utilisez l’{% data variables.product.prodname_codeql_cli %}, les résultats de l’{% data variables.product.prodname_code_scanning %} utilisent automatiquement le sous-ensemble pris en charge de SARIF 2.1.0. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) »{% ifversion codeql-runner-supported %}, « [Exécution de l’{% data variables.code-scanning.codeql_runner %} dans votre système CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system) »{% endif %} ou « [Installation de l’interface CLI CodeQL dans votre système CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system) ».

Vous pouvez charger plusieurs fichiers SARIF pour le même commit et afficher les données de chaque fichier en tant que résultats d’{% data variables.product.prodname_code_scanning %}. Quand vous chargez plusieurs fichiers SARIF pour un commit, vous devez indiquer une « catégorie » pour chaque analyse. La façon de spécifier une catégorie varie selon la méthode d’analyse :
- Si vous utilisez l’{% data variables.product.prodname_codeql_cli %} directement, transmettez l’argument `--sarif-category` à la commande `codeql database analyze` quand vous générez des fichiers SARIF. Pour plus d’informations, consultez « [Configuration de l’interface CLI de CodeQL dans votre système CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#about-generating-code-scanning-results-with-codeql-cli) ».
- Si vous utilisez {% data variables.product.prodname_actions %} avec `codeql-action/analyze`, la catégorie est définie automatiquement à partir du nom du workflow et de toutes les variables de matrice (généralement, `language`). Vous pouvez à la place spécifier une entrée `category` pour l’action, ce qui est utile quand vous analysez différentes sections d’un monodépôt dans un seul workflow.
- Si vous utilisez {% data variables.product.prodname_actions %} pour charger des résultats à partir d’autres outils d’analyse statique, vous devez spécifier une entrée `category` si vous chargez plusieurs fichiers de résultats pour le même outil dans un workflow. Pour plus d’informations, consultez « [Chargement d’une {% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_actions %}](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions) ».
- Si vous n’utilisez pas l’une de ces approches, vous devez spécifier un `runAutomationDetails.id` unique dans chaque fichier SARIF à charger. Pour plus d’informations sur cette propriété, consultez [Objet `runAutomationDetails`](#runautomationdetails-object) plus bas.

Si vous chargez un deuxième fichier SARIF pour un commit avec la même catégorie et à partir du même outil, les résultats précédents sont remplacés. Toutefois, si vous essayez de charger plusieurs fichiers SARIF pour le même outil et la même catégorie dans une seule exécution de workflow {% data variables.product.prodname_actions %}, la configuration incorrecte est détectée et l’exécution échoue.

{% data variables.product.prodname_dotcom %} utilise les propriétés dans le fichier SARIF pour afficher les alertes. Par exemple, les propriétés `shortDescription` et `fullDescription` apparaissent en haut d’une alerte d’{% data variables.product.prodname_code_scanning %}. La propriété `location` permet à {% data variables.product.prodname_dotcom %} d’afficher les annotations dans votre fichier de code. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) ».

Si vous débutez avec SARIF et que vous souhaitez en savoir plus, consultez le dépôt [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) de Microsoft.

## Fourniture de données pour suivre les alertes d’{% data variables.product.prodname_code_scanning %} entre les exécutions

À chaque fois que les résultats d’une nouvelle analyse du code sont chargés, ils sont traités et les alertes sont ajoutées au référentiel. Pour empêcher les alertes en double pour le même problème, l’{% data variables.product.prodname_code_scanning %} utilise des empreintes digitales pour faire correspondre les résultats entre les différentes exécutions afin qu’ils ne s’affichent qu’une seule fois dans la dernière exécution de la branche sélectionnée. Cela permet de faire correspondre les alertes à la ligne de code correcte quand les fichiers sont modifiés. La valeur `ruleID` d’un résultat doit être la même dans toute l’analyse.
 
### Signalement de chemins de fichiers cohérents

Le chemin de fichier doit être cohérent d’une exécution à l’autre pour permettre un calcul d’une empreinte digitale stable. Si les chemins de fichier diffèrent pour le même résultat, chaque fois qu’une nouvelle analyse est créée, l’ancienne est fermée. Il existe alors plusieurs alertes pour le même résultat.

### Inclusion de données pour la génération d’empreintes digitales

{% data variables.product.prodname_dotcom %} utilise la propriété `partialFingerprints` de la norme OASIS pour détecter quand deux résultats sont logiquement identiques. Pour plus d’informations, consultez l’entrée « [partialFingerprints property](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611) » dans la documentation OASIS.

Les fichiers SARIF créés par le {% data variables.code-scanning.codeql_workflow %}, {% ifversion codeql-runner-supported %}en utilisant l’{% data variables.code-scanning.codeql_runner %}, {% endif %}ou en utilisant à l’{% data variables.product.prodname_codeql_cli %} incluent des données d’empreinte digitale. Si vous chargez un fichier SARIF à l’aide de l’action `upload-sarif` et que ces données sont manquantes, {% data variables.product.prodname_dotcom %} tente de renseigner le champ `partialFingerprints` à partir des fichiers sources. Pour plus d’informations sur le chargement des résultats, consultez « [Chargement d’un fichier SARIF sur {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions) ».

Si vous chargez un fichier SARIF sans données d’empreinte digitale en utilisant le point de terminaison de l’API `/code-scanning/sarifs`, les alertes d’{% data variables.product.prodname_code_scanning %} sont traitées et affichées, mais les utilisateurs peuvent voir des alertes en double. Pour éviter de voir des alertes en double, vous devez calculer les données d’empreinte digitale et renseigner la propriété `partialFingerprints` avant de charger le fichier SARIF. Le script que l’action `upload-sarif` utilise peut être un point de départ utile : https://github.com/github/codeql-action/blob/main/src/fingerprints.ts. Pour plus d’informations sur l’API, consultez « [Charger une analyse en tant que données SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data) ».

## Présentation des règles et des résultats

Les fichiers SARIF prennent en charge les règles et les résultats. Les informations stockées dans ces éléments sont similaires, mais ont des buts différents.

- Les règles sont un tableau d’objets `reportingDescriptor` qui sont inclus dans l’objet `toolComponent`. C’est là que vous stockez les détails des règles exécutées pendant l’analyse. Les informations contenues dans ces objets doivent changer rarement, généralement lorsque vous mettez à jour l’outil.

- Les résultats sont stockés sous forme d’une série d’objets `result` sous `results` dans l’objet `run`. Chaque objet `result` contient les détails d’une alerte dans le codebase. Dans l’objet `results`, vous pouvez référencer la règle qui a détecté l’alerte.

Lorsque vous comparez les fichiers SARIF générés en analysant différents codebases avec le même outil et les mêmes règles, vous devriez voir des différences dans les résultats des analyses, mais pas dans les règles.

## Spécification de la racine des fichiers sources

L’{% data variables.product.prodname_code_scanning_capc %} interprète les résultats signalés avec des chemins relatifs comme relatifs à la racine du dépôt analysé. Si un résultat contient un URI absolu, l’URI est converti en URI relatif. L’URI relatif peut ensuite être mis en correspondance avec un fichier commité dans le dépôt.

Vous pouvez fournir la racine source pour la conversion de l’URI absolu vers l’URI relatif de l’une des manières suivantes.

- Entrée [`checkout_path`](https://github.com/github/codeql-action/blob/c2c0a2908e95769d01b907f9930050ecb5cf050d/analyze/action.yml#L44-L47) dans l’action `github/codeql-action/analyze`
- Paramètre `checkout_uri` du point de terminaison de l’API de chargement SARIF. Pour plus d’informations, consultez « [{% data variables.product.prodname_code_scanning_capc %}](/rest/code-scanning#upload-an-analysis-as-sarif-data) » dans la documentation de l’API REST
- Propriété [`invocation.workingDirectory.uri`](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc9244365) dans le fichier SARIF

Si vous fournissez une racine source, tout emplacement d’un artefact spécifié à l’aide d’un URI absolu doit utiliser le même schéma d’URI. En cas d’incompatibilité entre le schéma d’URI de la racine source et une ou plusieurs des URI absolus, le chargement est rejeté.

Par exemple, un fichier SARIF est chargé à l’aide de la racine source `file:///github/workspace`. 

```
# Conversion of absolute URIs to relative URIs for location artifacts

file:///github/workspace/src/main.go -> src/main.go
file:///tmp/go-build/tmp.go          -> file:///tmp/go-build/tmp.go
```

Le fichier est correctement chargé car les deux URI absolus utilisent le même schéma d’URI que la racine source.

## Validation de votre fichier SARIF

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

Vous pouvez vérifier qu’un fichier SARIF est compatible avec l’{% data variables.product.prodname_code_scanning %} en le testant par rapport aux règles d’ingestion {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez le [validateur SARIF de Microsoft](https://sarifweb.azurewebsites.net/).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## Propriétés du fichier de sortie SARIF prises en charge

Si vous utilisez un moteur d’analyse de code autre que {% data variables.product.prodname_codeql %}, vous pouvez passer en revue les propriétés SARIF prises en charge pour optimiser l’affichage de vos résultats d’analyse sur {% data variables.product.prodname_dotcom %}.

{% note %}

**Remarque :** Vous devez fournir une valeur explicite pour toute propriété marquée comme « obligatoire ». La chaîne vide n’est pas prise en charge pour les propriétés obligatoires.

{% endnote %}

Tout fichier de sortie SARIF 2.1.0 valide peut être chargé. Toutefois, l’{% data variables.product.prodname_code_scanning %} n’utilise que les propriétés prises en charge suivantes.

### l'objet `sarifLog`

| Nom | Description |
|----|----|
|  `$schema` | **Obligatoire.** URI du schéma JSON SARIF pour la version 2.1.0. Par exemple : `https://json.schemastore.org/sarif-2.1.0.json`. |
| `version` | **Obligatoire.** L’{% data variables.product.prodname_code_scanning_capc %} prend uniquement en charge la version SARIF `2.1.0`.
| `runs[]` | **Obligatoire.** Un fichier SARIF contient un tableau d’une ou plusieurs exécutions. Chaque exécution représente une seule exécution d’un outil d’analyse. Pour plus d’informations sur un `run`, consultez [Objet `run`](#run-object).

### l'objet `run`

L’{% data variables.product.prodname_code_scanning_capc %} utilise l’objet `run` pour filtrer les résultats par outil et fournir des informations sur la source d’un résultat. L’objet `run` contient l’objet de composant d’outil `tool.driver`, qui contient des informations sur l’outil qui a généré les résultats. Chaque `run` ne peut avoir des résultats que pour un seul outil d’analyse.

| Nom | Description |
|----|----|
| `tool.driver` | **Obligatoire.** Objet `toolComponent` qui décrit l’outil d’analyse. Pour plus d’informations, consultez l’[objet `toolComponent`](#toolcomponent-object). |
| `tool.extensions[]` | **Facultatif.** Tableau d’objets `toolComponent` qui représentent l’ensemble des plug-ins ou extensions utilisés par l’outil pendant l’analyse. Pour plus d’informations, consultez l’[objet `toolComponent`](#toolcomponent-object). |
| `invocation.workingDirectory.uri` | **Facultatif.** Ce champ est utilisé uniquement lorsque `checkout_uri` (API de chargement SARIF uniquement) ou `checkout_path` ({% data variables.product.prodname_actions %} uniquement) ne sont pas fournis. La valeur est utilisée pour convertir les URI absolus utilisés dans des [objets`physicalLocation`](#physicallocation-object) en URI relatifs. Pour plus d’informations, consultez « [Spécification de la racine des fichiers sources](#specifying-the-root-for-source-files) ».|
| `results[]` | **Obligatoire.** Résultats de l’outil d’analyse. L’{% data variables.product.prodname_code_scanning_capc %} affiche les résultats sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez l’[objet `result`](#result-object).

### l'objet `toolComponent`

| Nom | Description |
|----|----|
| `name` | **Obligatoire.** Nom de l’outil d’analyse. L’{% data variables.product.prodname_code_scanning_capc %} affiche le nom sur {% data variables.product.prodname_dotcom %} pour vous permettre de filtrer les résultats par outil. |
| `version` | **Facultatif.** Version de l’outil d’analyse. L’{% data variables.product.prodname_code_scanning_capc %} utilise le numéro de version pour suivre quand les résultats peuvent avoir changé en raison d’une modification de version d’outil plutôt que d’une modification du code en cours d’analyse. Si le fichier SARIF inclut le champ `semanticVersion`, `version` n’est pas utilisé par l’{% data variables.product.prodname_code_scanning %}. |
| `semanticVersion` | **Facultatif.** Version de l’outil d’analyse, spécifiée par le format de la Gestion sémantique de version 2.0. L’{% data variables.product.prodname_code_scanning_capc %} utilise le numéro de version pour suivre quand les résultats peuvent avoir changé en raison d’une modification de version d’outil plutôt que d’une modification du code en cours d’analyse. Si le fichier SARIF inclut le champ `semanticVersion`, `version` n’est pas utilisé par l’{% data variables.product.prodname_code_scanning %}. Pour plus d’informations, consultez « [Gestion sémantique de version 2.0.0](https://semver.org/) » dans la documentation sur la Gestion sémantique de version. |
| `rules[]` | **Obligatoire.** Tableau d’objets `reportingDescriptor` qui représentent des règles. L’outil d’analyse utilise des règles pour rechercher les problèmes dans le code en cours d’analyse. Pour plus d’informations, consultez l’[objet `reportingDescriptor`](#reportingdescriptor-object). |

### l'objet `reportingDescriptor`

C’est là que vous stockez les détails des règles exécutées pendant l’analyse. Les informations contenues dans ces objets doivent changer rarement, généralement lorsque vous mettez à jour l’outil. Pour plus d’informations, consultez « [Présentation des règles et des résultats](#understanding-rules-and-results) » ci-dessus.

| Nom | Description |
|----|----|
| `id` |  **Obligatoire.** Identificateur unique de la règle. L’`id` est référencé à partir d’autres parties du fichier SARIF et peut être utilisé par l’{% data variables.product.prodname_code_scanning %} pour afficher des URL sur {% data variables.product.prodname_dotcom %}. |
| `name` | **Facultatif.** nom de la règle. L’{% data variables.product.prodname_code_scanning_capc %} affiche le nom pour permettre le filtrage des résultats par règle sur {% data variables.product.prodname_dotcom %}. |
| `shortDescription.text` | **Obligatoire.** Description concise de la règle. L’{% data variables.product.prodname_code_scanning_capc %} affiche la brève description sur {% data variables.product.prodname_dotcom %} en regard des résultats associés.
| `fullDescription.text` | **Obligatoire.** Description de la règle. L’{% data variables.product.prodname_code_scanning_capc %} affiche la description complète sur {% data variables.product.prodname_dotcom %} en regard des résultats associés. Le nombre maximal de caractères est de 1000.
| `defaultConfiguration.level` | **Facultatif.** Niveau de gravité par défaut de la règle. L’{% data variables.product.prodname_code_scanning_capc %} utilise des niveaux de gravité pour vous aider à comprendre dans quelle mesure le résultat est critique pour une règle donnée. Cette valeur peut être remplacée par l’attribut `level` de l’objet `result`. Pour plus d’informations, consultez l’[objet `result`](#result-object). Par défaut : `warning`.
| `help.text` | **Obligatoire.** Documentation de la règle au format texte. L’{% data variables.product.prodname_code_scanning_capc %} affiche cette documentation d’aide en regard des résultats associés.
| `help.markdown` | **Recommandé.** Documentation de la règle au format Markdown. L’{% data variables.product.prodname_code_scanning_capc %} affiche cette documentation d’aide en regard des résultats associés. Quand la documentation `help.markdown` est disponible, elle s’affiche à la place de la documentation `help.text`.
| `properties.tags[]` | **Facultatif.** Tableau de chaînes. L’{% data variables.product.prodname_code_scanning_capc %} utilise `tags` pour vous permettre de filtrer les résultats sur {% data variables.product.prodname_dotcom %}. Par exemple, il est possible de filtrer tous les résultats qui ont l’étiquette `security`.
| `properties.precision` | **Recommandé.** Chaîne qui indique la fréquence à laquelle les résultats indiqués par cette règle sont vrais. Par exemple, si vous savez qu’une règle a un taux de faux positifs élevé, la précision doit être `low`. L’{% data variables.product.prodname_code_scanning_capc %} classe les résultats par précision sur {% data variables.product.prodname_dotcom %}, en affichant en premier les résultats ayant les `level` et `precision` les plus élevés. Peut avoir l’une des valeurs suivantes : `very-high`, `high`, `medium` ou `low`. 
| `properties.problem.severity` | **Recommandé.** Chaîne qui indique le niveau de gravité des alertes générées par une requête autre qu’une requête de sécurité. Avec la propriété `properties.precision`, cette chaîne détermine si les résultats sont affichés par défaut sur {% data variables.product.prodname_dotcom %} de telle sorte que les résultats ayant les `problem.severity` et `precision` les plus élevés soient affichés en premier. Peut avoir l’une des valeurs suivantes : `error`, `warning` ou `recommendation`.
| `properties.security-severity` | **Recommandé.** Chaîne représentant un score qui indique le niveau de gravité, compris entre 0.0 et 10.0, pour les requêtes de sécurité (`@tags` inclut `security`). Avec la propriété `properties.precision`, cette chaîne détermine si les résultats sont affichés par défaut sur {% data variables.product.prodname_dotcom %} de telle sorte que les résultats ayant les `security-severity` et `precision` les plus élevés soient affichés en premier. L’{% data variables.product.prodname_code_scanning_capc %} traduit les scores numériques comme suit : `critical` au-dessus de 9.0, `high`entre 7.0 et 8.9, `medium` entre 4.0 et 6.9 et `low` si le score est inférieur ou égal à 3.9. 

### l'objet `result`

Chaque objet `result` contient les détails d’une alerte dans le codebase. Dans l’objet `results`, vous pouvez référencer la règle qui a détecté l’alerte. Pour plus d’informations, consultez « [Présentation des règles et des résultats](#understanding-rules-and-results) » ci-dessus.

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| Nom | Description |
|----|----|
| `ruleId`| **Facultatif.** Identificateur unique de la règle (`reportingDescriptor.id`). Pour plus d’informations, consultez l’[objet `reportingDescriptor`](#reportingdescriptor-object). L’{% data variables.product.prodname_code_scanning_capc %} utilise l’identificateur de la règle pour filtrer les résultats par règle sur {% data variables.product.prodname_dotcom %}.
| `ruleIndex`| **Facultatif.** Index de la règle associée (objet `reportingDescriptor`) dans le tableau `rules` de composants d’outil. Pour plus d’informations, consultez l’[objet `run`](#run-object). La plage autorisée pour cette propriété est comprise entre 0 et 2^63 - 1.
| `rule`| **Facultatif.** Référence utilisée pour localiser la règle (descripteur de création de rapports) pour ce résultat. Pour plus d’informations, consultez l’[objet `reportingDescriptor`](#reportingdescriptor-object).
| `level`| **Facultatif.** Gravité du résultat. Ce niveau remplace la gravité par défaut définie par la règle. L’{% data variables.product.prodname_code_scanning_capc %} utilise le niveau pour filtrer les résultats par gravité sur {% data variables.product.prodname_dotcom %}.
| `message.text`| **Obligatoire.** Message qui décrit le résultat. L’{% data variables.product.prodname_code_scanning_capc %} affiche le texte du message comme titre du résultat. Seule la première phrase du message s’affiche quand l’espace visible est limité.
| `locations[]`| **Obligatoire.** Ensemble d’emplacements où le résultat a été détecté, dans la limite de 10. Un seul emplacement doit être inclus, sauf si le problème ne peut être corrigé qu’en effectuant une modification à chaque emplacement spécifié. **Remarque :** Au moins un emplacement est requis pour que l’{% data variables.product.prodname_code_scanning %} affiche un résultat. L’{% data variables.product.prodname_code_scanning_capc %} utilise cette propriété pour décider quel fichier annoter avec le résultat. Seule la première valeur de ce tableau est utilisée. Toutes les autres valeurs sont ignorées.
| `partialFingerprints`| **Obligatoire.** Ensemble de chaînes utilisées pour suivre l’identité unique du résultat. L’{% data variables.product.prodname_code_scanning_capc %} utilise `partialFingerprints` pour identifier avec précision quels résultats sont identiques entre les commits et les branches. L’{% data variables.product.prodname_code_scanning_capc %} tente d’utiliser `partialFingerprints` s’ils existent. Si vous chargez des fichiers SARIF tiers avec l’`upload-action`, l’action crée des `partialFingerprints` pour vous quand elles ne sont pas incluses dans le fichier SARIF. Pour plus d’informations, consultez « [Fourniture de données pour suivre les alertes d’analyse de code entre les exécutions](#providing-data-to-track-code-scanning-alerts-across-runs) ».  **Remarque :** L’{% data variables.product.prodname_code_scanning_capc %} utilise uniquement le `primaryLocationLineHash`.
| `codeFlows[].threadFlows[].locations[]`| **Facultatif.** Tableau d’objets `location` pour un objet `threadFlow`, qui décrit la progression d’un programme via un thread d’exécution. Un objet `codeFlow` décrit un modèle d’exécution de code utilisé pour détecter un résultat. Si des flux de code sont fournis, l’{% data variables.product.prodname_code_scanning %} les développe sur {% data variables.product.prodname_dotcom %} pour le résultat approprié. Pour plus d’informations, consultez l’[objet `location`](#location-object).
| `relatedLocations[]`| Ensemble d’emplacements pertinents pour ce résultat. L’{% data variables.product.prodname_code_scanning_capc %} établit un lien avec les emplacements associés quand ils sont incorporés dans le message de résultat. Pour plus d’informations, consultez l’[objet `location`](#location-object).

### l'objet `location`

Emplacement dans un artefact de programmation, tel qu’un fichier dans le dépôt ou un fichier qui a été produit lors d’une génération.

| Nom | Description |
|----|----|
| `location.id` | **Facultatif.** Identificateur unique qui distingue cet emplacement de tous les autres emplacements au sein d’un objet de résultat unique. La plage autorisée pour cette propriété est comprise entre 0 et 2^63 - 1.
| `location.physicalLocation` | **Obligatoire.** Identifie l’artefact et la région. Pour plus d’informations, consultez l’objet [`physicalLocation`](#physicallocation-object).
| `location.message.text` | **Facultatif.** Message correspondant à l’emplacement.

### l'objet `physicalLocation`

| Nom | Description |
|----|----|
| `artifactLocation.uri`| **Obligatoire.** URI indiquant l’emplacement d’un artefact, généralement un fichier dans le dépôt ou produit lors une génération. Pour obtenir des résultats optimaux, nous recommandons qu’un chemin relatif à partir de la racine du dépôt GitHub soit analysé. Par exemple : `src/main.js`. Pour plus d’informations sur les URI d’artefact, consultez « [Spécification de la racine des fichiers sources](#specifying-the-root-for-source-files) ».|
| `region.startLine` | **Obligatoire.** Numéro de ligne du premier caractère de la région.
| `region.startColumn` | **Obligatoire.** Numéro de colonne du premier caractère de la région.
| `region.endLine` | **Obligatoire.** Numéro de ligne du dernier caractère de la région.
| `region.endColumn` | **Obligatoire.** Numéro de colonne du caractère qui suit la fin de la région.

### l'objet `runAutomationDetails`

L’objet `runAutomationDetails` contient des informations qui spécifient l’identité d’une exécution.

{% note %}

**Remarque :** `runAutomationDetails` est un objet SARIF v2.1.0. Si vous utilisez l’{% data variables.product.prodname_codeql_cli %}, vous pouvez spécifier la version de SARIF à utiliser. L’objet équivalent à `runAutomationDetails` est `<run>.automationId` pour SARIF v1 et `<run>.automationLogicalId` pour SARIF v2.

{% endnote %}

| Nom | Description |
|----|----|
| `id`| **Facultatif.** Chaîne qui identifie la catégorie de l’analyse et l’ID d’exécution. Utilisez cette option si vous souhaitez charger plusieurs fichiers SARIF pour les mêmes outil et commit, mais pour différents langages ou différentes parties du code. |

L’utilisation de l’objet `runAutomationDetails` est facultative.

Le champ `id` peut inclure une catégorie d’analyse et un ID d’exécution. Nous n’utilisons pas la partie d’ID d’exécution du champ `id`, mais nous la stockons.

Utilisez la catégorie pour distinguer plusieurs analyses pour le même outil ou le même commit, mais effectuées dans différents langages ou différentes parties du code. Utilisez l’ID d’exécution pour identifier l’exécution spécifique de l’analyse, telle que la date d’exécution de l’analyse.

`id` est interprété comme `category/run-id`. Si `id` ne contient aucune barre oblique (`/`), la chaîne entière est le `run_id` et la `category` est vide. Sinon, `category` est tout ce qui se trouve dans la chaîne jusqu’à la dernière barre oblique, tandis que `run_id` est tout ce qui se trouve après.

| `id` | catégorie | `run_id` |
|----|----|----|
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 2021-02-01
| my-analysis/tool1/ | my-analysis/tool1 | _Aucun `run-id`_
| my-analysis pour tool1 | _Aucune catégorie_ | my-analysis pour tool1

- L’exécution dont l’`id` est « my-analysis/tool1/2021-02-01 » appartient à la catégorie « my-analysis/tool1 ». Il s’agit probablement de l’exécution du 2 février 2021.
- L’exécution dont l’`id` est « my-analysis/tool1/ » appartient à la catégorie « my-analysis/tool1 », mais n’est pas distinguée des autres exécutions de cette catégorie.
- L’exécution dont l’`id` est « my-analysis for tool1 » a un identificateur unique, mais il est impossible de déduire si elle appartient à telle ou telle catégorie.

Pour plus d’informations sur l’objet `runAutomationDetails` et le champ `id`, consultez [l’objet runAutomationDetails](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479) dans la documentation OASIS.

Notez que le reste des champs pris en charge est ignoré.

## Exemples de fichiers de sortie SARIF

Ces exemples de fichiers de sortie SARIF affichent des propriétés prises en charge et des exemples de valeurs.

### Exemple avec les propriétés minimales requises

Ce fichier de sortie SARIF contient des exemples de valeurs pour illustrer les propriétés qui sont indispensables aux résultats d’{% data variables.product.prodname_code_scanning %}. Si vous supprimez des propriétés, que vous omettez des valeurs ou que vous utilisez une chaîne vide, ces données ne s’affichent pas correctement ou ne sont pas synchronisées sur {% data variables.product.prodname_dotcom %}. 

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "rules": [
            {
              "id": "R01"
                      ...
              "properties" : {
                 "id" : "java/unsafe-deserialization",
                 "kind" : "path-problem",
                 "name" : "...",
                 "problem.severity" : "error",
                 "security-severity" : "9.8",
               }
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "R01",
          "message": {
            "text": "Result text. This result does not have a rule associated."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "fileURI"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1"
          }
        }
      ]
    }
  ]
}
```

### Exemple montrant toutes les propriétés SARIF prises en charge

Ce fichier de sortie SARIF contient des exemples de valeurs pour illustrer toutes les propriétés SARIF prises en charge pour l’{% data variables.product.prodname_code_scanning %}.

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "semanticVersion": "2.0.0",
          "rules": [
            {
              "id": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
              "name": "js/unused-local-variable",
              "shortDescription": {
                "text": "Unused variable, import, function or class"
              },
              "fullDescription": {
                "text": "Unused variables, imports, functions or classes may be a symptom of a bug and should be examined carefully."
              },
              "defaultConfiguration": {
                "level": "note"
              },
              "properties": {
                "tags": [
                  "maintainability"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
              "name": "js/inconsistent-use-of-new",
              "shortDescription": {
                "text": "Inconsistent use of 'new'"
              },
              "fullDescription": {
                "text": "If a function is intended to be a constructor, it should always be invoked with 'new'. Otherwise, it should always be invoked as a normal function, that is, without 'new'."
              },
              "properties": {
                "tags": [
                  "reliability",
                  "correctness",
                  "language-features"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "R01"
            }
          ]
        }
      },
      "automationDetails": {
        "id": "my-category/"
      },
      "results": [
        {
          "ruleId": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
          "ruleIndex": 0,
          "message": {
            "text": "Unused variable foo."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "main.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1",
            "primaryLocationStartColumnFingerprint": "4"
          }
        },
        {
          "ruleId": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
          "ruleIndex": 1,
          "message": {
            "text": "Function resolvingPromise is sometimes invoked as a constructor (for example [here](1)), and sometimes as a normal function (for example [here](2))."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/promises.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "5061c3315a741b7d:1",
            "primaryLocationStartColumnFingerprint": "7"
          },
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/ParseObject.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2281,
                  "startColumn": 33,
                  "endColumn": 55
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/LiveQueryClient.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 166
                }
              },
              "message": {
                "text": "here"
              }
            }
          ]
        },
        {
          "ruleId": "R01",
          "message": {
            "text": "Specifying both [ruleIndex](1) and [ruleID](2) might lead to inconsistencies."
          },
          "level": "error",
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 54,
                  "startColumn": 10,
                  "endLine": 55,
                  "endColumn": 25
                }
              }
            }
          ],
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 81,
                  "startColumn": 10,
                  "endColumn": 18
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 82,
                  "startColumn": 10,
                  "endColumn": 21
                }
              },
              "message": {
                "text": "here"
              }
            }
          ],
          "codeFlows": [
            {
              "threadFlows": [
                {
                  "locations": [
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "startLine": 11,
                            "endLine": 29,
                            "startColumn": 10,
                            "endColumn": 18
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        },
                        "message": {
                          "text": "Rule has index 0"
                        }
                      }
                    },
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "endColumn": 47,
                            "startColumn": 12,
                            "startLine": 12
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "ABC:2"
          }
        }
      ],
      "columnKind": "utf16CodeUnits"
    }
  ]
}
```

