---
title: Installation des applications GitHub
intro: 'Lorsque votre application est publique, tout le monde peut utiliser {% ifversion fpt or ghec %} {% data variables.product.prodname_marketplace %} ou {% endif %}une URL d’installation pour installer l’application dans son dépôt. Lorsque votre application est privée, vous pouvez uniquement installer l’application sur les dépôts dont vous êtes propriétaire.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 4244e1e4aacbcc5f7e0f16092df9823ce5832f0a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086413'
---
{% note %}

**Remarque :** Votre {% data variables.product.prodname_github_app %} aura accès à tous les référentiels créés par l’application, même si quelqu’un installe uniquement votre application sur les référentiels sélectionnés.

{% endnote %}

## Installation de votre application GitHub privée sur votre référentiel

Une fois que vous avez créé une application GitHub privée, vous pouvez l’installer sur l’un de vos référentiels d’organisation ou d’utilisateurs. Pour plus d’informations, consultez « [Flux d’installation privée](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow) ».

1. Dans la [page des paramètres des applications GitHub](https://github.com/settings/apps), sélectionnez votre application.
2. Dans la barre latérale gauche, cliquez sur **Installer l’application**.
3. Cliquez sur **Installer** en regard de l’organisation ou du compte personnel contenant le référentiel approprié.
4. Installez l’application sur tous les référentiels ou sélectionnez des référentiels.
![Autorisations d’installation d’applications](/assets/images/install_permissions.png)
5. Une fois l’installation terminée, vous verrez les options de configuration de l’application sur votre compte sélectionné. Vous pouvez apporter des modifications ici ou répéter les étapes précédentes pour installer l’application sur un autre compte.

{% ifversion fpt or ghec %}
## Offre de votre application dans la Place de marché GitHub

Vous pouvez proposer une version payante ou gratuite de votre application dans [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace), où les utilisateurs peuvent rechercher et afficher des détails sur votre application. {% data variables.product.prodname_marketplace %} installe automatiquement une application GitHub lorsqu’une commande est terminée.

Consultez « [Bien démarrer avec la Place de marché GitHub](/marketplace/getting-started/) » pour en savoir plus sur la façon de répertorier votre application sur {% data variables.product.prodname_marketplace %}.

Pour en savoir plus sur la façon dont les utilisateurs peuvent installer votre application à partir de {% data variables.product.prodname_marketplace %}, consultez « [Achat et installation d’applications dans la Place de marché GitHub](/articles/purchasing-and-installing-apps-in-github-marketplace) ».

{% endif %}

## Autoriser les utilisateurs à installer votre application publique sur leur référentiel

Vous pouvez autoriser d’autres utilisateurs à installer votre application publique en fournissant l’URL d’installation dans des emplacements tels que la page d’accueil de votre application. Vous pouvez ensuite pointer vers la page d’accueil de votre application à partir de la page d’arrivée de GitHub.

 Si vous migrez d’une application OAuth vers une application GitHub, vous pouvez utiliser des paramètres de requête pour présélectionner les référentiels et le compte lors de l’installation de l’application GitHub. Pour en savoir plus, consultez « [Migration d’applications OAuth vers des applications GitHub](/apps/migrating-oauth-apps-to-github-apps/) ».

Ces étapes supposent que vous avez [généré un {% data variables.product.prodname_github_app %}](/apps/building-github-apps/) :

1. Dans la [page des paramètres des applications GitHub](https://github.com/settings/apps), sélectionnez l’application publique que vous souhaitez configurer pour que d’autres utilisateurs puissent l’installer.
2. Dans « URL de la page d’accueil », tapez l’URL de la page d’accueil de votre application, puis cliquez sur **Enregistrer les modifications**.
![URL de la page d’accueil](/assets/images/github-apps/github_apps_homepageURL.png)
3. GitHub fournit une page d’arrivée pour votre application qui inclut un lien vers l'« URL de la page d’accueil » de votre application. Pour visiter la page d’arrivée de GitHub, copiez l’URL du lien public et collez-la dans un navigateur.
![Lien public](/assets/images/github-apps/github_apps_public_link.png)
4. Créez une page d’accueil pour votre application qui inclut l’URL d’installation de l’application : `{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`.

## Autorisation des utilisateurs lors de l’installation

Vous pouvez simplifier le processus d’autorisation en l’effectuant lors de l’installation de l’application. Pour ce faire, sélectionnez **Demander une autorisation utilisateur (OAuth) lors de l’installation** pendant la création ou la modification de votre application dans GitHub. Pour en savoir plus, consultez « [Création d’une application GitHub](/apps/building-github-apps/creating-a-github-app/) ».

Une fois qu’une personne a installé votre application, vous devez obtenir un jeton d’accès pour l’utilisateur. Pour en savoir plus, consultez les étapes 2 et 3 de l’article « [Identification des utilisateurs sur votre site](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site) ».
## Conservation de l’état d’une application pendant l’installation

Vous pouvez fournir un paramètre `state` dans l’URL d’installation d’une application pour conserver l’état de la page de l’application et renvoyer les personnes à cet état une fois qu’elles ont installé, authentifié ou accepté les mises à jour de votre application GitHub. Par exemple, vous pouvez utiliser `state` pour mettre en corrélation une installation sur un utilisateur ou un compte.

Pour conserver un état, ajoutez-le à l’URL d’installation :

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
