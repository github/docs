---
title: Suppression d’un codespace
intro: Vous pouvez supprimer un espace de code dont vous n’avez plus besoin.
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Delete a codespace
ms.openlocfilehash: 24b53cc0cead2b6b15894ada4c799abc8e1c6e7a
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188255'
---
Vous pouvez supprimer un codespace de différentes manières : dans le terminal avec {% data variables.product.prodname_cli %}, dans {% data variables.product.prodname_vscode %} ou dans votre navigateur web. Utilisez les onglets de cet article afin d’afficher les instructions pour chaque méthode de suppression de codespace.

{% note %}

**Remarque** : Vous ne pouvez pas supprimer de codespace à partir de JetBrains Gateway, de l’application cliente JetBrains ou de JupyterLab.

{% endnote %}

Il existe des coûts associés au stockage des codespaces. Vous devez donc supprimer tous les codespaces dont vous n’avez plus besoin. Pour plus d’informations, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».

{% data reusables.codespaces.max-number-codespaces %}

## Suppression d’un codespace

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. À droite du codespace à supprimer, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **{% octicon "trash" aria-label="The trash icon" %} Delete**

   ![Bouton Supprimer](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour supprimer un codespace, utilisez la sous-commande `gh codespace delete`, puis choisissez un codespace dans la liste affichée.

```shell
gh codespace delete
```

Si vous avez des modifications non enregistrées, vous êtes invité à confirmer la suppression. Vous pouvez utiliser l’indicateur `--force` pour forcer la suppression, ce qui évite cette invite.

Pour plus d’informations sur cette commande, consultez [le manuel {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## Suppression en bloc de codespaces

{% webui %}

Vous pouvez utiliser {% data variables.product.prodname_cli %} pour supprimer plusieurs ou tous vos codespaces avec une seule commande. Pour plus d’informations, cliquez sur l’onglet « {% data variables.product.prodname_cli %} » en haut de cette page.

{% endwebui %}

{% vscode %}

Vous pouvez utiliser {% data variables.product.prodname_cli %} pour supprimer plusieurs ou tous vos codespaces avec une seule commande. Pour plus d’informations, cliquez sur l’onglet « {% data variables.product.prodname_cli %} » en haut de cette page.

{% endvscode %}


{% cli %}

Vous pouvez supprimer plusieurs ou tous vos codespaces avec une seule commande en utilisant `gh codespace delete` et l’un de ces indicateurs :

`--all` - Supprimer tous vos codespaces.

`--repo REPOSITORY` - Supprimer tous vos codespaces pour ce référentiel. Vous pouvez également utiliser l’indicateur `--days` pour filtrer les codespaces par ancienneté.

`--days NUMBER` - Supprimer tous vos codespaces antérieurs au nombre de jours spécifié. Peut être utilisé avec l’indicateur `--repo`.

Par défaut, vous êtes invité à confirmer la suppression de tous les codespaces contenant des modifications non enregistrées. Vous pouvez utiliser l’indicateur `--force` pour ignorer cette confirmation. 

### Exemple

Supprimez tous les codespaces pour le référentiel `octo-org/octo-repo` que vous avez créé il y a plus de 7 jours.

```
gh codespace delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## Suppression des codespaces de votre organisation

En tant que propriétaire de l’organisation, vous pouvez utiliser {% data variables.product.prodname_cli %} pour supprimer tous les codespaces de votre organisation.

{% webui %}

Pour plus d’informations, cliquez sur l’onglet « {% data variables.product.prodname_cli %} » en haut de cette page.

{% endwebui %}

{% vscode %}

Pour plus d’informations, cliquez sur l’onglet « {% data variables.product.prodname_cli %} » en haut de cette page.

{% endvscode %}

{% cli %}

1. Entrez l’une de ces commandes pour afficher une liste de codespaces.
   * `gh codespace delete --org ORGANIZATION` - Répertorie les codespaces actuels dans l’organisation spécifiée. 
   * `gh codespace delete --org ORGANIZATION --user USER` - Répertorie uniquement les codespaces créés par l’utilisateur spécifié.
   Vous devez être propriétaire de l’organisation spécifiée.
1. Dans la liste des codespaces, accédez au codespace que vous souhaitez supprimer.
1. Pour supprimer le codespace sélectionné, appuyez sur <kbd>Entrer</kbd>.

   Si le codespace contient des modifications non enregistrées, vous êtes invité à confirmer la suppression.

{% endcli %}

Vous pouvez également utiliser l’API REST pour supprimer des codespaces de votre organisation. Pour plus d’informations, consultez « [Organisations des codespaces](/rest/codespaces/organizations#delete-a-codespace-from-the-organization) ».

## Pour aller plus loin
- « [Cycle de vie des codespaces](/codespaces/getting-started/the-codespace-lifecycle) »
- « [Configuration de la suppression automatique de vos codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces) »
