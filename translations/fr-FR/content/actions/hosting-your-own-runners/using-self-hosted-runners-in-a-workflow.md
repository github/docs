---
title: Utilisation d’exécuteurs auto-hébergés dans un workflow
intro: 'Pour utiliser des exécuteurs auto-hébergés dans un workflow, vous pouvez utiliser des étiquettes pour spécifier le type d’exécuteur pour un travail.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Use runners in a workflow
ms.openlocfilehash: 5c0ff57f5b3eda79e3fcf8b09706ed19f981b8ae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573416'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Pour obtenir des informations sur la création d’étiquettes personnalisées et par défaut, consultez « [Utilisation d’étiquettes avec des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners) ».

## Utilisation d’exécuteurs auto-hébergés dans un workflow

Les étiquettes vous permettent d’envoyer des travaux de workflow à des types spécifiques d’exécuteurs auto-hébergés, en fonction de leurs caractéristiques partagées. Par exemple, si votre travail nécessite un composant matériel ou un package logiciel particulier, vous pouvez affecter une étiquette personnalisée à un exécuteur, puis configurer votre travail pour qu’il s’exécute uniquement sur les exécuteurs dotés de cette étiquette.

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) ».

## Utilisation d’étiquettes par défaut pour router les travaux

Un exécuteur auto-hébergé reçoit automatiquement certaines étiquettes lorsqu’il est ajouté à {% data variables.product.prodname_actions %}. Elles indiquent son système d’exploitation et sa plateforme matérielle :

* `self-hosted` : étiquette par défaut appliquée à tous les exécuteurs auto-hébergés.
* `linux`, `windows` ou `macOS` : selon le système d’exploitation.
* `x64`, `ARM` ou `ARM64` : selon l’architecture matérielle.

Vous pouvez utiliser le code YAML de votre workflow pour envoyer des travaux à une combinaison de ces étiquettes. Dans cet exemple, un exécuteur auto-hébergé qui correspond aux trois étiquettes est autorisé à exécuter le travail :

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` – Exécuter ce travail sur un exécuteur auto-hébergé.
- `linux` – Utiliser uniquement un exécuteur Linux.
- `ARM64` – Utiliser uniquement un exécuteur basé sur du matériel ARM64.

Les étiquettes par défaut sont fixes et ne peuvent pas être modifiées ni supprimées. Envisagez d’utiliser des étiquettes personnalisées si vous avez besoin de plus de contrôle sur le routage des travaux.

## Utilisation d’étiquettes personnalisées pour router les travaux

Vous pouvez créer des étiquettes personnalisées et les affecter à vos exécuteurs auto-hébergés à tout moment. Les étiquettes personnalisées vous permettent d’envoyer des travaux à des types particuliers d’exécuteurs auto-hébergés, selon la manière dont ils sont étiquetés. 

Par exemple, si vous avez un travail qui requiert un type spécifique de matériel graphique, vous pouvez créer une étiquette personnalisée appelée `gpu` et l’affecter aux exécuteurs sur lesquels le matériel est installé. Un exécuteur auto-hébergé qui correspond à toutes les étiquettes attribuées sera alors autorisé à exécuter le travail. 

Cet exemple montre un travail qui combine des étiquettes par défaut et personnalisées :

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` – Exécuter ce travail sur un exécuteur auto-hébergé.
- `linux` – Utiliser uniquement un exécuteur Linux.
- `x64` – Utiliser uniquement un exécuteur basé sur du matériel x64.
- `gpu` – Cette étiquette personnalisée a été affectée manuellement aux exécuteurs auto-hébergés sur lesquels le matériel GPU est installé. 

Ces étiquettes fonctionnent par accumulation, si bien qu’un exécuteur auto-hébergé doit avoir les quatre étiquettes pour pouvoir traiter le travail.

## Priorité de routage pour les exécuteurs auto-hébergés

Lors du routage d’un travail vers un exécuteur auto-hébergé, {% data variables.product.prodname_dotcom %} recherche un exécuteur correspondant aux étiquettes `runs-on` du travail :

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
- Si {% data variables.product.prodname_dotcom %} trouve un exécuteur en ligne et inactif qui correspond aux étiquettes `runs-on` du travail, le travail est ensuite affecté et envoyé à l’exécuteur.
  - Si l’exécuteur ne récupère pas le travail affecté dans un délai de 60 secondes, le travail est remis en file d’attente afin qu’un nouvel exécuteur puisse l’accepter.
- Si {% data variables.product.prodname_dotcom %} ne trouve pas d’exécuteur en ligne et inactif correspondant aux étiquettes `runs-on` du travail, le travail reste en file d’attente jusqu’à ce qu’un exécuteur soit en ligne.
- Si le travail reste en file d’attente plus de 24 heures, il échoue.
{% elsif ghes = 3.3 %}
- {% data variables.product.prodname_dotcom %} recherche d’abord un exécuteur au niveau du dépôt, puis au niveau de l’organisation, puis au niveau de l’entreprise.
- Si {% data variables.product.prodname_dotcom %} trouve un exécuteur en ligne et inactif à un certain niveau qui correspond aux étiquettes `runs-on` du travail, le travail est affecté et envoyé à cet exécuteur.
  - Si l’exécuteur ne récupère pas le travail affecté dans un délai de 60 secondes, le travail est mis en file d’attente à tous les niveaux, dans l’attente de la mise en ligne d’un exécuteur correspondant, d’un niveau quelconque, qui récupère le travail.
- Si {% data variables.product.prodname_dotcom %} ne trouve pas d’exécuteur en ligne et inactif à un niveau quelconque, le travail est mis en file d’attente à tous les niveaux, dans l’attente de la mise en ligne d’un exécuteur correspondant, d’un niveau quelconque, qui récupère le travail.
- Si le travail reste en file d’attente plus de 24 heures, il échoue.
{% else %}
1. {% data variables.product.prodname_dotcom %} recherche d’abord un exécuteur au niveau du dépôt, puis au niveau de l’organisation, puis au niveau de l’entreprise.
2. Le travail est ensuite envoyé au premier exécuteur correspondant en ligne et inactif.
   - Si tous les exécuteurs en ligne correspondants sont occupés, le travail est mis en file d’attente au niveau comptant le plus grand nombre d’exécuteurs en ligne correspondants.
   - Si tous les exécuteurs correspondants sont hors connexion, le travail est mis en file d’attente au niveau comptant le plus grand nombre d’exécuteurs hors connexion correspondants.
   - S’il n’existe aucun exécuteur correspondant à aucun niveau, le travail échoue.
   - Si le travail reste en file d’attente plus de 24 heures, il échoue.
{% endif %}
