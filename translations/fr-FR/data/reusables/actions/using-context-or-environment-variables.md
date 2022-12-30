---
ms.openlocfilehash: c8e09d66bc8f0f35ca319e3650c6913174e59067
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066460"
---
{% data variables.product.prodname_actions %} inclut une collection de variables appelées _contextes_, et une collection similaire de variables appelées _variables d’environnement par défaut_. Ces variables sont destinées à être utilisées à différents stades du workflow.

- **Variables d’environnement par défaut :** ces variables existent uniquement sur l’exécuteur de votre travail. Pour plus d’informations, consultez « [Variables d’environnement par défaut](/actions/reference/environment-variables#default-environment-variables) ».
- **Contextes :** vous pouvez utiliser la plupart des contextes à n’importe quel stade de votre worflow, notamment quand des _variables d’environnement par défaut_ ne sont pas disponibles. Par exemple, vous pouvez utiliser des contextes avec des expressions pour effectuer un traitement initial avant que le travail soit routé vers un exécuteur. Cela vous permet d’utiliser un contexte avec le mot clé conditionnel `if` pour déterminer si une étape doit être exécutée. Une fois le travail en cours d’exécution, vous pouvez également récupérer des variables de contexte à partir de l’exécuteur du travail, par exemple `runner.os`. Pour plus d’informations sur l’emplacement où vous pouvez utiliser divers contextes au sein d’un workflow, consultez « [Disponibilité du contexte](/actions/reference/context-and-expression-syntax-for-github-actions#context-availability) ».

L’exemple suivant montre comment ces différents types de variables d’environnement peuvent être utilisés ensemble dans un travail :

{% raw %}
```yaml
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```
{% endraw %}

Dans cet exemple, l’instruction `if` vérifie le contexte [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) pour déterminer le nom de la branche actuelle. Si le nom est `refs/heads/main`, les étapes suivantes sont exécutées. La vérification `if` est traitée par {% data variables.product.prodname_actions %}, et le travail n’est envoyé à l’exécuteur que si le résultat est `true`. Une fois le travail envoyé à l’exécuteur, l’étape est exécutée et fait référence à la variable d’environnement [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables) de l’exécuteur.
