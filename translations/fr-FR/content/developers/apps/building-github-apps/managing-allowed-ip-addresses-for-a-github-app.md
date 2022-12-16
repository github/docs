---
title: "Gestion des adresses\_IP autorisées pour une application GitHub"
intro: 'Vous pouvez ajouter une liste verte d’adresses IP dans votre {% data variables.product.prodname_github_app %} pour empêcher votre application d’être bloquée par la propre liste verte d’une organisation.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage allowed IP addresses
ms.openlocfilehash: 1df357700bec03b86ad0008b2d31fc9db537fe74
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147707290'
---
## À propos des listes vertes d’adresses IP pour les {% data variables.product.prodname_github_apps %}

Les propriétaires d’entreprise et d’organisation peuvent restreindre l’accès aux ressources en configurant une liste verte d’adresses IP. Cette liste spécifie les adresses IP autorisées à se connecter. Pour plus d’informations, consultez « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise) ».

Quand une organisation dispose d’une liste verte, les applications tierces qui se connectent via une {% data variables.product.prodname_github_app %} se voient refuser l’accès, sauf si les deux conditions suivantes sont vraies :

* Le créateur de l’{% data variables.product.prodname_github_app %} a configuré une liste verte pour l’application. Celle liste spécifie les adresses IP autorisées pour l’exécution de son application. Pour plus d’informations sur la façon de procéder, consultez les détails ci-dessous.
* Le propriétaire de l’organisation a choisi d’autoriser l’ajout de la liste verte de l’{% data variables.product.prodname_github_app %} à sa propre liste verte d’adresses. Pour plus d’informations, consultez « [Gestion des adresses IP autorisées pour votre organisation](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %} » dans la documentation de {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

{% data reusables.apps.ip-allow-list-only-apps %}

## Ajout d’une liste verte d’adresses IP à une {% data variables.product.prodname_github_app %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
1. Faites défiler l’affichage jusqu’à la section « Liste verte d’adresses IP ».
![Section d’informations de base pour votre application GitHub](/assets/images/github-apps/github-apps-allow-list-empty.png) {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} La description est fournie à titre de référence et n’est pas utilisée dans la liste verte des organisations où l’{% data variables.product.prodname_github_app %} est installée. À la place, les listes vertes d’organisation incluent la description « Géré par l’application GitHub NOM ».
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
