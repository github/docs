---
title: Prévention des accès non autorisés
intro: 'Vous pouvez être alerté de la survenue d’un incident de sécurité dans le média, avec par exemple la découverte du [bogue Heartbleed](http://heartbleed.com/). De même, votre ordinateur a pu vous avoir été volé alors que vous étiez connecté à {% data variables.product.product_location %}. En pareils cas, le changement de mot de passe peut empêcher tout futur accès indésirable à votre compte et à vos projets.'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/preventing-unauthorized-access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Unauthorized access
ms.openlocfilehash: 2b7a29ad3df05ef758c82330f24fe7568e137130
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086033'
---
{% data variables.product.product_name %} exige l’entrée d’un mot de passe pour effectuer des actions sensibles comme l’ajout de nouvelles clés SSH, l’autorisation d’applications ou la modification de membres d’équipe.

Après avoir modifié votre mot de passe, vous devez effectuer les actions suivantes pour vérifier que votre compte est sécurisé :

- [Activez l’authentification à 2 facteurs](/articles/about-two-factor-authentication) sur votre compte pour que l’accès nécessite plus qu’un mot de passe.
- [Passez en revue vos clés SSH](/articles/reviewing-your-ssh-keys), [déployez des clés](/articles/reviewing-your-deploy-keys) et des [intégrations autorisées](/articles/reviewing-your-authorized-integrations) et révoquez tout accès non autorisé ou inconnu dans vos paramètres SSH et d’applications.
{% ifversion fpt or ghec %}
- [Vérifiez toutes vos adresses e-mail](/articles/verifying-your-email-address). Si un attaquant a ajouté son adresse e-mail à votre compte, il peut les autoriser pour forcer une réinitialisation de mot de passe non souhaitée.
{% endif %}
- [Passez en revue le journal de sécurité de votre compte](/github/authenticating-to-github/reviewing-your-security-log). Il offre une vue d’ensemble des différentes configurations effectuées sur vos dépôts. Par exemple, vous pouvez vérifier qu’aucun dépôt privé n’a été rendu public et qu’aucun dépôt n’a été transféré.
- [Passez en revue les webhooks](/articles/creating-webhooks) sur vos dépôts. Les webhooks peuvent permettre à un attaquant d’intercepter les poussées (push) effectuées sur votre dépôt.
- [Vérifiez qu’aucune clé de déploiement](/guides/managing-deploy-keys/#deploy-keys) n’a été créée. Ceci pourrait permettre à des serveurs externes d’accéder à vos projets.
- Passez en revue les commits récents effectués sur vos dépôts.
- Passez en revue la liste des collaborateurs pour chaque dépôt.
