---
title: Modification du type de machine pour votre espace de code
shortTitle: Change the machine type
intro: 'Vous pouvez changer le type de machine qui exécute votre codespace, afin d’utiliser les ressources appropriées pour le travail que vous faites.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 618b031ce0c23c2b4eba52157fca2a6625fe3dfd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108309'
---
## À propos des types de machines

{% note %}

**Remarque :** Vous ne pouvez sélectionner ou modifier le type de machine que si vous êtes membre d’une organisation à l’aide de {% data variables.product.prodname_github_codespaces %} et que vous créez un codespace sur un référentiel appartenant à cette organisation.

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %} Vous pouvez choisir un autre type de machine quand vous créez un espace de code ou à tout moment après avoir créé un espace de code. 

Pour plus d’informations sur le choix d’un type de machine quand vous créez un espace de code, consultez « [Création d’un espace de code](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace) ».

## Changement du type de machine

{% note %}

**Remarque** : {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   Le type de machine actuel s’affiche pour chacun de vos espaces de code.

   ![Liste « Vos espaces de code »](/assets/images/help/codespaces/your-codespaces-list.png)

1. Cliquez sur les points de suspension ( **...** ) à droite de l’espace de code que vous souhaitez modifier.
1. Cliquez sur **Modifier le type de machine**.

   ![Option de menu « Modifier le type de machine »](/assets/images/help/codespaces/change-machine-type-menu-option.png)
1. Si plusieurs types de machines sont disponibles pour votre espace de code, choisissez le type de machine que vous souhaitez utiliser.

   ![Boîte de dialogue montrant les types de machines disponibles à choisir](/assets/images/help/codespaces/change-machine-type-choice.png)
1. Cliquez sur **Mettre à jour l’espace de code**. 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

Vous pouvez utiliser la commande `gh codespace edit --machine MACHINE-TYPE-NAME` {% data variables.product.prodname_cli %} pour changer le type de machine d’un codespace. Pour utiliser cette commande, vous devez d’abord déterminer les types de machine disponibles pour votre codespace.

1. Pour voir votre liste de codespaces, dans un terminal, entrez la commande suivante.
   
   ```
   gh codespace list
   ```
1. Vous pouvez aussi entrer la commande suivante afin de rechercher le type de machine actuel pour un codespace.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME
   ```

   Remplacez `CODESPACE-NAME` par le nom permanent du codespace, par exemple `octocat-myrepo-gmc7`. Les noms permanents sont listés sous la colonne **NAME** dans la liste retournée par `gh codespace list`.

   Si vous êtes invité à demander l’étendue du `codespace`, suivez les instructions du terminal.

   Les détails de la machine actuelle sont listés sous le champ `machine`.
1. Afin de rechercher les types de machine disponibles pour un codespace, entrez la commande suivante.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   Remplacez `CODESPACE-NAME` par le nom permanent du codespace, par exemple `octocat-myrepo-gmc7`.
1. Afin de changer le type de machine pour un codespace, entrez la commande suivante.

   ```
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   Remplacez `MACHINE-TYPE-NAME` par le nom d’un type de machine disponible pour votre codespace, par exemple `standardLinux32gb`. 
1. En utilisant les touches de direction, accédez au codespace que vous voulez changer, puis appuyez sur <kbd>Entrée</kbd>.

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## Pour aller plus loin

- « [Machines de codespaces](/rest/codespaces/machines) » dans la documentation de l’API REST
- [`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit) dans le manuel {% data variables.product.prodname_cli %}

{% endcli %}
