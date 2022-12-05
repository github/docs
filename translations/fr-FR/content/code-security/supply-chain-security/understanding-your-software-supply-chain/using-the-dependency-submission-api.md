---
title: Utilisation de l’API de soumission de dépendances
intro: 'Vous pouvez utiliser l’API de soumission de dépendances pour envoyer des dépendances pour des projets, telles que celles résolues lorsqu’un projet est généré ou compilé.'
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
ms.openlocfilehash: f81967a46763d299afd14727cd884a36cb0b3d9c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880813'
---
{% data reusables.dependency-submission.dependency-submission-api-beta %}

## À propos de l’API de soumission de dépendances

{% data reusables.dependency-submission.about-dependency-submission %}

Les dépendances sont envoyées à l’API de soumission de dépendances sous la forme d’une capture instantanée. Une capture instantanée est un ensemble de dépendances associées à un SHA de commit et à d’autres métadonnées, qui reflète l’état actuel de votre dépôt pour un commit. Pour plus d’informations sur l’API de soumission de dépendances, consultez la [documentation de l’API REST de soumission de dépendances](/rest/dependency-graph/dependency-submission).

## Envoi de dépendances au moment de la génération

Vous pouvez utiliser l’API de soumission de dépendances dans un workflow {% data variables.product.prodname_actions %} pour envoyer des dépendances pour votre projet lorsqu’il est généré. 

### Utilisation d’actions prédéfinies

La façon la plus simple d’utiliser l’API de soumission de dépendances consiste à ajouter une action prédéfinie à votre dépôt qui collecte et convertit la liste des dépendances au format de capture instantanée requis et envoie la liste à l’API. Les actions qui effectuent ces étapes pour différents écosystèmes sont disponibles sur {% data variables.product.prodname_marketplace %} et d’autres actions seront créées au cours de la version bêta et au-delà. Vous trouverez des liens vers les actions actuellement disponibles dans le tableau ci-dessous :

Écosystème | Action |
--- | --- |
Go | [Soumission de dépendance Go](https://github.com/actions/go-dependency-submission)

Par exemple, le workflow [Soumission de dépendance Go](https://github.com/actions/go-dependency-submission) suivant calcule les dépendances d’une cible de génération Go (fichier Go avec une fonction `main`) et envoie la liste à l’API de soumission de dépendances. 

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main
      
# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Envionment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
        
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"
          
      - name: Run snapshot action
        uses: @actions/go-dependency-submission@v1
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go

```
### Création de votre propre action

Vous pouvez également écrire votre propre action pour envoyer des dépendances pour votre projet au moment de la génération. Votre workflow doit :

  1. Générer une liste de dépendances pour votre projet.
  2. Convertir la liste des dépendances au format de capture instantanée accepté par l’API de soumission de dépendances. Pour plus d’informations sur le format, consultez les paramètres de corps de l’opération d’API « Créer une capture instantanée de dépôt » dans la [documentation de l’API REST de soumission de dépendances](/rest/dependency-graph/dependency-submission).
  3. Envoyer la liste mise en forme des dépendances à l’API de soumission de dépendances.

{% data variables.product.product_name %} gère le [Kit de ressources de soumission de dépendances](https://github.com/github/dependency-submission-toolkit), une bibliothèque TypeScript pour vous aider à créer votre propre action GitHub pour envoyer des dépendances à l’API de soumission de dépendances. Pour plus d’informations sur l’écriture d’une action, consultez « [Création d’actions](/actions/creating-actions) ».
