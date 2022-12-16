---
title: Renommage d’un codespace
intro: Vous pouvez utiliser {% data variables.product.prodname_cli %} pour remplacer le nom complet du codespace par un nom de votre choix.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Rename a codespace
ms.openlocfilehash: 83a5ce0064a8f8deed752eaef0cd49be538ff9be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147682502"
---
## À propos du renommage d’un codespace

À chaque codespace est attribué un nom complet généré automatiquement. Si vous avez plusieurs codespaces, le nom complet vous permet de les différencier. Par exemple : `literate space parakeet`. Vous pouvez changer le nom complet de votre codespace.

Pour trouver le nom complet d’un codespace :

- Dans {% data variables.product.product_name %}, affichez votre liste de codespaces sur https://github.com/codespaces.

  ![Capture d’écran de la liste des codespaces dans GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- Dans l’application de bureau {% data variables.product.prodname_vscode %} ou le client web {% data variables.product.prodname_vscode_shortname %}, cliquez sur l’Explorateur distant. Le nom complet est affiché sous le nom du dépôt. Par exemple : `symmetrical space telegram` dans la capture d’écran ci-dessous.

  ![Capture d’écran de l’Explorateur distant dans VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- Dans une fenêtre de terminal sur votre ordinateur local, utilisez cette commande {% data variables.product.prodname_cli %} : `gh codespace list`. 

### Noms de codespace permanents

En plus du nom complet, lorsque vous créez un codespace, un nom permanent lui est également attribué. Le nom est une combinaison de votre descripteur {% data variables.product.company_short %}, du nom du dépôt et de caractères aléatoires. Par exemple : `octocat-myrepo-gmc7`. Vous ne pouvez pas changer ce nom.

Pour trouver le nom permanent d’un codespace :

* Dans {% data variables.product.product_name %}, le nom permanent s’affiche dans une fenêtre contextuelle lorsque vous pointez sur l’option **Ouvrir dans le navigateur** sur https://github.com/codespaces. 

   ![Capture d’écran du nom du codespace affiché lorsque vous pointez dessus](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* Dans un codespace, utilisez cette commande dans le terminal : `echo $CODESPACE_NAME`.
* Dans une fenêtre de terminal sur votre ordinateur local, utilisez cette commande {% data variables.product.prodname_cli %} : `gh codespace list`.

## Renommage d’un codespace

Le changement du nom complet d’un codespace peut être utile si vous avez plusieurs codespaces que vous utiliserez pendant une période prolongée. Un nom approprié vous permet d’identifier un codespace que vous utilisez dans un but précis. Vous pouvez changer le nom complet de votre codespace en utilisant {% data variables.product.prodname_cli %}.

Pour renommer un codespace, utilisez la sous-commande `gh codespace edit` :

```shell
gh codespace edit -c <em>permanent name of the codespace</em> -d <em>new display name</em>
```

Dans cet exemple, remplacez `permanent name of the codespace` par le nom permanent du codespace. Remplacez `new display name` par le nom complet souhaité.