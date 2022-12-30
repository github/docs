---
title: Développement d’une action CLI tierce
shortTitle: CLI setup action
intro: 'Découvrez comment développer une action pour configurer un environnement CLI sur les exécuteurs {% data variables.product.prodname_actions %}.'
redirect_from: []
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Actions
ms.openlocfilehash: c839faa63efd0f8b7f5ab78a81107d27ab93e1c4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086713'
---
## Introduction

Vous pouvez écrire une action pour permettre aux utilisateurs d’accéder à vos serveurs via un environnement CLI configuré sur des exécuteurs {% data variables.product.prodname_actions %}.

Votre action doit :

- Permettre aux utilisateurs de spécifier facilement la version de l’interface CLI à installer
- Prendre en charge plusieurs systèmes d’exploitation
- S’exécuter de manière efficace pour réduire le temps d’exécution et les coûts associés
- Fonctionner sur les exécuteurs auto-hébergés et hébergés dans {% data variables.product.product_name %}
- Tirer parti des outils de la communauté lorsque cela est possible

Cet article explique comment écrire une action qui récupère une version spécifique de votre interface CLI, l’installe, l’ajoute au chemin et (facultativement) la met en cache. Ce type d’action (une action qui configure un outil) est souvent nommé `setup-$TOOL`. 

## Prérequis

Vous devez savoir comment écrire une action personnalisée. Pour plus d’informations, consultez « [À propos des actions personnalisées](/actions/creating-actions/about-custom-actions) ». Pour obtenir un guide plus détaillé sur l’écriture des actions personnalisées, consultez « [Création d’une action JavaScript](/actions/creating-actions/creating-a-javascript-action) ».

## Exemple

Le script suivant montre comment obtenir une version spécifiée par l’utilisateur comme entrée, télécharger et extraire la version spécifique de votre interface CLI, puis ajouter l’interface CLI au chemin.

{% data variables.product.prodname_dotcom %} fournit [`actions/toolkit`](https://github.com/actions/toolkit), qui est un ensemble de packages qui vous aident à créer des actions. Cet exemple utilise les packages [`actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) et [`actions/tool-cache`](https://github.com/actions/toolkit/tree/main/packages/tool-cache).

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool(getDownloadURL());

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
```
{% endraw %}

Pour utiliser ce script, remplacez `getDownloadURL` par une fonction qui télécharge votre interface CLI. Vous devez également créer un fichier de métadonnées d’action (`action.yml`) qui accepte une entrée `version` et qui exécute ce script. Pour plus d’informations sur la création d’une action, consultez « [Création d’une action JavaScript](/actions/creating-actions/creating-a-javascript-action) ».

Pour obtenir un exemple complet de configuration pour cette action, consultez [example-setup-gh](https://github.com/github-developer/example-setup-gh).

## Pour aller plus loin

Ce modèle est utilisé dans plusieurs actions. Pour obtenir d’autres exemples, consultez :

* [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)
* [`google-github-actions/setup-gcloud`](https://github.com/google-github-actions/setup-gcloud)
* [`hashicorp/setup-terraform`](https://github.com/hashicorp/setup-terraform)

