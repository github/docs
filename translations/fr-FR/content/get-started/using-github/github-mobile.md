---
title: GitHub Mobile
intro: 'Triez, collaborez et gérez votre travail dans {% data variables.product.product_name %} depuis votre appareil mobile.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
ms.openlocfilehash: a9af0848fdc26c5efd3dfb2d00076e3af5fb00bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508447'
---
## À propos de {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} vous permet d’effectuer un travail à fort impact sur {% data variables.product.product_name %} rapidement et n’importe où. {% data variables.product.prodname_mobile %} est un moyen sûr et sécurisé d’accéder à vos données {% data variables.product.product_name %} par le biais d’une application cliente tierce approuvée.

Avec {% data variables.product.prodname_mobile %}, vous pouvez :

- Gérer, trier et effacer les notifications.
- Lire, réviser et collaborer sur des problèmes et des demandes de tirage (pull requests).
- Rechercher, parcourir et interagir avec des utilisateurs, des dépôts et des organisations.
- Recevoir une notification Push lorsque quelqu’un mentionne votre nom d’utilisateur {% ifversion fpt or ghec %}- Sécuriser votre compte GitHub.com avec l’authentification à 2 facteurs
- Vérifier vos tentatives de connexion sur les appareils non reconnus{% endif %}

Pour plus d’informations sur les notifications pour {% data variables.product.prodname_mobile %}, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile) ».

{% ifversion fpt or ghec %}- Pour plus d’informations sur l’authentification à 2 facteurs à l’aide de {% data variables.product.prodname_mobile %}, consultez « [Configuration de {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) et [Authentification à l’aide de {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication##verifying-with-github-mobile) ». {% endif %}

## Installation de {% data variables.product.prodname_mobile %}

Pour installer {% data variables.product.prodname_mobile %} pour Android ou iOS, consultez [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

## Gérer des comptes

Vous pouvez être connecté simultanément à mobile avec un compte personnel sur {% data variables.product.prodname_dotcom_the_website %} et un compte personnel sur {% data variables.product.prodname_ghe_server %}. Pour plus d’informations sur nos différents produits, consultez «  [Produits de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products) ».

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} peut ne pas fonctionner avec votre entreprise si vous êtes tenu d’accéder à votre entreprise via un VPN.

### Prérequis

Vous devez installer {% data variables.product.prodname_mobile %} 1.4 ou version ultérieure sur votre appareil pour utiliser {% data variables.product.prodname_mobile %} avec {% data variables.product.prodname_ghe_server %}.

Pour utiliser {% data variables.product.prodname_mobile %} avec {% data variables.product.prodname_ghe_server %}, {% data variables.product.product_location %} doit être version 3.0 ou ultérieure, et le propriétaire de votre entreprise doit activer la prise en charge mobile de votre entreprise. Pour plus d’informations, consultez {% ifversion ghes %}« [Notes de publication](/enterprise-server/admin/release-notes) » et {% endif %}« [Gestion de {% data variables.product.prodname_mobile %} pour votre entreprise]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise){% ifversion not ghes %} » dans la documentation {% data variables.product.prodname_ghe_server %}.{% else %}. » {% endif %}

Pendant la version bêta pour {% data variables.product.prodname_mobile %} avec {% data variables.product.prodname_ghe_server %}, vous devez être connecté avec un compte personnel sur {% data variables.product.prodname_dotcom_the_website %}.

### Ajout, basculement ou déconnexion de comptes

Vous pouvez vous connecter à mobile avec un compte personnel sur {% data variables.product.prodname_ghe_server %}. En bas de l’application, appuyez longuement sur {% octicon "person" aria-label="The person icon" %} **Profil**, puis appuyez sur {% octicon "plus" aria-label="The plus icon" %} **Ajouter un compte d’entreprise**. Suivez les invites pour vous connecter.

Une fois connecté à mobile avec un compte personnel sur {% data variables.product.prodname_ghe_server %}, vous pouvez basculer entre le compte et votre compte sur {% data variables.product.prodname_dotcom_the_website %}. En bas de l’application, appuyez longuement sur {% octicon "person" aria-label="The person icon" %} **Profil**, puis appuyez sur le compte vers lequel vous souhaitez basculer.

Si vous n’avez plus besoin d’accéder aux données de votre compte personnel sur {% data variables.product.prodname_ghe_server %} à partir de {% data variables.product.prodname_mobile %}, vous pouvez vous déconnecter du compte. En bas de l’application, appuyez longuement sur {% octicon "person" aria-label="The person icon" %} **Profil**, balayez vers la gauche sur le compte pour vous déconnecter, puis appuyez sur **Se déconnecter**.

## Langues prises en charge pour {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} est disponible dans les langues suivantes.

- Anglais
- Japonais
- Portugais brésilien
- Chinois simplifié
- Espagnol

Si vous configurez la langue de votre appareil sur l’une des langues prises en charge, {% data variables.product.prodname_mobile %} utilisera par défaut cette langue. Vous pouvez changer la langue de {% data variables.product.prodname_mobile %} dans le menu **Paramètres** de {% data variables.product.prodname_mobile %}.

## Gestion des liens universels pour {% data variables.product.prodname_mobile %} sur iOS

{% data variables.product.prodname_mobile %} active automatiquement les liens universels pour iOS. Lorsque vous appuyez sur un lien {% data variables.product.product_name %}, l’URL de destination s’ouvre dans {% data variables.product.prodname_mobile %} au lieu de Safari. Pour plus d’informations, consultez [Liens universels](https://developer.apple.com/ios/universal-links/) sur le site Développeur Apple.

Pour désactiver les liens universels, appuyez longuement sur un lien {% data variables.product.product_name %}, puis appuyez sur **Ouvrir**. Chaque fois que vous appuierez sur un lien {% data variables.product.product_name %} à l’avenir, l’URL de destination s’ouvrira dans Safari au lieu de {% data variables.product.prodname_mobile %}.

Pour réactiver les liens universels, appuyez longuement sur un lien {% data variables.product.product_name %}, puis appuyez sur **Ouvrir dans {% data variables.product.prodname_dotcom %}** .

## Partage de commentaires

Vous pouvez envoyer des demandes de fonctionnalités ou d’autres commentaires pour {% data variables.product.prodname_mobile %} sur [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/mobile).

## Renoncer aux versions bêta pour iOS

Si vous testez une version bêta de {% data variables.product.prodname_mobile %} pour iOS à l’aide de TestFlight, vous pouvez quitter la version bêta à tout moment.

1. Sur votre appareil iOS, ouvrez l’application TestFlight.
2. Sous « Applications », appuyez sur **{% data variables.product.prodname_dotcom %}** .
3. En bas de la page, appuyez sur **Arrêter le test**.
