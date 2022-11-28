---
title: Résolution des problèmes de création et de suppression de codespaces
intro: 'Cet article fournit des étapes de résolution des problèmes courants que vous pouvez rencontrer lors de la création ou de la suppression d’un codespace, y compris les problèmes de stockage et de configuration.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 4a12c848fa7400ec336f5ad086eb4d2858a431f0
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180818'
---
## Création de codespaces

### Aucun accès à la création d’un codespace
{% data variables.product.prodname_github_codespaces %} n’est pas disponible pour tous les dépôts. Si les options de création d’un codespace ne sont pas affichées, {% data variables.product.prodname_github_codespaces %} peut ne pas être disponible pour ce dépôt. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#access-to-codespaces) ».

Si votre utilisation incluse mensuelle de {% data variables.product.prodname_github_codespaces %} n’est pas épuisée sur votre compte personnel ou si vous avez configuré un mode de paiement et une limite de dépense, vous pouvez créer des codespaces pour des dépôts publics. Toutefois, vous ne pouvez créer un codespace pour un dépôt privé que si vous pouvez envoyer (push) des modifications au dépôt ou si vous pouvez le dupliquer (fork).

Pour plus d’informations sur l’utilisation incluse pour les comptes personnels et la définition d’une limite de dépense, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) » et « [Gestion des limites de dépense pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces) ».

### Codespace ne s’ouvre pas lors de la création

Si vous créez un codespace et qu’il ne s’ouvre pas :

1. Essayez de recharger la page en cas de problème de mise en cache ou de création de rapports.
2. Accédez à votre page {% data variables.product.prodname_github_codespaces %} : https://github.com/codespaces et vérifiez si le nouveau codespace est répertorié. Le processus a peut-être créé correctement le codespace, mais n’a pas pu être renvoyé à votre navigateur. Si le nouveau codespace est répertorié, vous pouvez l’ouvrir directement à partir de cette page.
3. Réessayez de créer le codespace du référentiel pour exclure un échec de communication temporaire.

Si vous ne pouvez toujours pas créer de codespace pour un dépôt où {% data variables.product.prodname_github_codespaces %} est disponible, {% data reusables.codespaces.contact-support %}

### Échec de la création d’un codespace

Si la création d’un codespace échoue, cela est probablement dû à un problème d’infrastructure temporaire dans le cloud (par exemple, un problème de provisionnement d’une machine virtuelle pour le codespace). Une autre cause d’échec, bien que plus rare, est une opération de génération de conteneur qui prend plus d’une heure. Dans ce cas, la génération est annulée et la création du codespace échoue.

{% note %}

**Remarque :** Un codespace qui n’a pas été correctement créé ne pourra jamais être utilisé et doit être supprimé. Pour plus d’informations, consultez « [Suppression d’un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace) ».

{% endnote %}

Si la création d’un codespace se solde par un échec :

1. Consultez la [Page d’état](https://githubstatus.com) de {% data variables.product.prodname_dotcom %} pour rechercher tout incident actif.
1. Accédez à [votre page {% data variables.product.prodname_github_codespaces %}](https://github.com/codespaces), supprimez le codespace, puis recréez-en un.
1. Si le conteneur est en cours de génération, consultez les journaux en streaming et vérifiez que la génération n’est pas bloquée. Une génération de conteneur qui prend plus d’une heure est annulée et entraîne l’échec de la création.

   Cela se produit notamment quand un script en cours d’exécution affiche une invite et attend la réponse de l’utilisateur. Dans ce cas, supprimez l’invite interactive pour que la génération puisse se terminer sans interaction.

   {% note %}

   **Remarque** : Pour afficher les journaux pendant une génération :
   * Dans le navigateur, cliquez sur **Afficher les journaux**. 

   ![Capture d’écran de l’interface utilisateur web de Codespaces avec le lien Afficher les journaux mis en évidence](/assets/images/help/codespaces/web-ui-view-logs.png)

   * Dans l’application de bureau VS Code, cliquez sur **Génération d’un codespace** dans « Configuration de la connexion à distance ». 

   ![Capture d’écran de VS Code avec le lien Génération d’un codespace mis en évidence](/assets/images/help/codespaces/vs-code-building-codespace.png)

    {% endnote %}
2. Si vous avez un conteneur dont la génération prend beaucoup de temps, envisagez d’utiliser des prébuilds pour accélérer les créations de codespaces. Pour plus d’informations, consultez « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds) ».

## Suppression de codespaces

Un codespace ne peut être supprimé que par :
* La personne qui a créé le codespace
* Un propriétaire d’organisation si le codespace appartient à une organisation
* Suppression automatique à la fin d’une période de conservation 

Pour plus d’informations, consultez « [Suppression d’un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace) » et « [Configuration de la suppression automatique de vos codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces) ».

## Stockage de conteneurs

Lorsque vous créez un codespace, il a une quantité finie de stockage et au fil du temps, il peut être nécessaire de libérer de l’espace. Essayez d’exécuter l’une des commandes suivantes dans le terminal {% data variables.product.prodname_github_codespaces %} pour libérer de l’espace de stockage.

- Supprimez les packages qui ne sont plus utilisés à l’aide de `sudo apt autoremove`.
- Nettoyez le cache apt à l’aide de `sudo apt clean`.
- Consultez les 10 plus grands fichiers du codespace avec`sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Supprimez les fichiers inutiles, tels que les artefacts de build et les journaux.

Quelques options plus destructrices :

- Supprimez les images Docker inutilisées, les réseaux et les conteneurs à l’aide de `docker system prune` (ajoutez `-a` si vous souhaitez supprimer toutes les images et `--volumes` si vous souhaitez supprimer tous les volumes).
- Supprimer les fichiers non suivis de l’arborescence de travail : `git clean -i`.

## Configuration

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```
Passez en revue les journaux de création et mettez à jour la configuration de conteneur de développement si nécessaire. Pour plus d’informations, consultez « [Journaux de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs) ».

Vous pouvez ensuite essayer de redémarrer le codespace ou de regénérer le conteneur. Pour plus d’informations sur la régénération du conteneur, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace) ».
