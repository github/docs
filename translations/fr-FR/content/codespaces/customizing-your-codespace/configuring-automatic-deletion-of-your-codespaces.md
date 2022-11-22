---
title: Configuration de la suppression automatique de vos espaces de code
shortTitle: Configure automatic deletion
intro: "Les codespaces inactifs sont automatiquement supprimés. Vous pouvez choisir la durée pendant laquelle vos espaces de code arrêtés sont conservés, jusqu’à un maximum de 30\_jours."
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5414d2223f490638f27475840a25883e9c353e77
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159696'
---
Par défaut, les {% data variables.product.prodname_github_codespaces %} sont automatiquement supprimés après avoir été arrêtés et être restés inactifs pendant 30 jours.

Toutefois, étant donné que {% data variables.product.prodname_github_codespaces %} entraîne des frais de stockage, vous pouvez préférer réduire la durée de conservation en changeant la durée par défaut dans vos paramètres personnels pour {% data variables.product.prodname_github_codespaces %}. Pour plus d’informations sur les frais de stockage, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing) ».

{% note %}

**Remarque** : Que vous ayez défini ou non une durée de conservation des espaces de code personnels, il est judicieux de prendre l’habitude de supprimer les espaces de code dont vous n’avez plus besoin. Pour plus d’informations, consultez « [Suppression d’un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace) ».

{% endnote %}

La suppression automatique se produit indépendamment du fait qu’un espace de code contient des modifications non poussées. Pour empêcher la suppression automatique d’un espace de code, ouvrez à nouveau l’espace de code. La durée de conservation est réinitialisée chaque fois que vous vous connectez à un espace de code, et le compte à rebours de conservation redémarre lorsque l’espace de code est arrêté.

Si un dépôt appartient à une organisation, l’administrateur de l’organisation peut avoir défini une durée de conservation pour toute l’organisation. Si cette durée est inférieure à la durée de conservation par défaut dans vos paramètres personnels, la durée de conservation de l’organisation s’applique aux espaces de code que vous créez pour ce dépôt. Pour plus d’informations, consultez « [Restriction de la durée de conservation pour les espaces de code](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces) ».

Chaque espace de code a sa propre durée de conservation. Vous pouvez donc avoir des espaces de code avec des durées de conservation différentes. Par exemple, si :
* Vous avez créé un espace de code, modifié votre durée de conservation par défaut, puis créé un autre espace de code.
* Vous avez créé un espace de code à l’aide de {% data variables.product.prodname_cli %} et spécifié une durée de conservation différente.
* Vous avez créé un espace de code à partir d’un dépôt appartenant à l’organisation dont la durée de conservation est configurée pour l’organisation.

{% note %}

**Remarque** : La durée de conservation est spécifiée en jours. Un jour représente une période de 24 heures, en commençant à l’heure de la journée à laquelle vous arrêtez un espace de code.

{% endnote %}

{% webui %}

## Définition d’une durée de conservation par défaut pour vos espaces de code

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Durée de conservation par défaut », entrez le nombre de jours pendant lesquels vous souhaitez que vos espaces de code soient conservés, par défaut, après leur arrêt. 

   ![Sélection de votre durée de conservation](/assets/images/help/codespaces/setting-default-retention.png)

   Vous pouvez définir votre durée de conservation par défaut entre `0` et `30` jours. 

   {% warning %}

   **Avertissement** : La définition de la durée sur `0` entraîne la suppression immédiate de vos espaces de code lorsque vous les arrêtez ou lorsqu’ils expirent en raison d’une absence d’activité. Pour plus d’informations, consultez « [Définition de votre délai d’expiration pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces) ».

   {% endwarning %}
 
1. Cliquez sur **Enregistrer**.

Lorsque vous créez un espace de code à l’aide de {% data variables.product.prodname_cli %}, vous pouvez remplacer cette valeur par défaut. Si vous créez un espace de code dans une organisation qui spécifie une durée de conservation plus courte, la valeur au niveau de l’organisation remplace votre paramètre personnel.

Si vous définissez une durée de conservation de plus d’un jour, vous recevrez une notification par e-mail un jour avant sa suppression. 

## Vérification du temps restant jusqu’à la suppression automatique

Vous pouvez vérifier si un espace de code doit être supprimé automatiquement bientôt. 

Lorsqu’un espace de code inactif approche de la fin de sa durée de conservation, cela est indiqué dans votre liste d’espaces de code sur {% data variables.product.prodname_dotcom %} à l’adresse [https://github.com/codespaces](https://github.com/codespaces).

![Message avant suppression dans la liste des espaces de code sur {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## Définition d’une durée de conservation pour un espace de code

Pour définir la durée de conservation de l’espace de code lorsque vous en créez un, utilisez l’indicateur `--retention-period` avec la sous-commande `codespace create`. Spécifiez la durée en jours. La durée doit être comprise entre 0 et 30 jours.

```shell
gh codespace create --retention-period DAYS
```

Si vous ne spécifiez pas de durée de conservation lorsque vous créez un espace de code, votre durée de conservation par défaut ou la durée de conservation d’une organisation sera utilisée, selon celle qui est la plus faible. Pour plus d’informations sur la définition de votre durée de conservation par défaut, cliquez sur l’onglet « Navigateur web » dans cette page. 

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## Définition de la durée de conservation

Vous pouvez définir votre durée de conservation par défaut dans votre navigateur web, sur {% data variables.product.prodname_dotcom_the_website %}. Sinon, si vous utilisez {% data variables.product.prodname_cli %} pour créer un espace de code, vous pouvez définir une durée de conservation pour cet espace de code particulier. Pour plus d’informations, cliquez sur l’onglet approprié ci-dessus.

## Vérification pour déterminer si les espaces de code seront bientôt supprimés automatiquement

Vous pouvez vérifier, dans l’application de bureau {% data variables.product.prodname_vscode %}, si un espace de code doit être supprimé automatiquement bientôt.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Choisissez **{% data variables.product.prodname_github_codespaces %}** dans le menu déroulant en haut à droite de l’Explorateur distant, s’il n’est pas déjà sélectionné.
1. Sous « GITHUB CODESPACES », positionnez le pointeur de la souris sur l’espace de code qui vous intéresse. Une zone contextuelle s’affiche pour vous montrer des informations sur l’espace de code.

   Si l’espace de code est proche de la fin de sa durée de conservation, une ligne est incluse pour vous indiquer quand l’espace de code sera supprimé.

   ![Informations sur l’espace de code montrant le temps restant jusqu’à la suppression](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
