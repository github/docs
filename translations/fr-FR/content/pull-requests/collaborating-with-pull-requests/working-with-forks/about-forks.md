---
title: À propos des duplications (fork)
intro: Une duplication est une copie d’un dépôt que vous gérez. Les duplications vous permettent d’apporter des modifications à un projet sans affecter le dépôt d’origine. Vous pouvez extraire des mises à jour du dépôt d’origine ou envoyer des modifications à celui-ci avec des demandes de tirage (pull request).
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 83372d27f052ee8c22730f5ce5d22e9efbf04fbb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158748'
---
La duplication d’un dépôt est similaire à la copie d’un dépôt, à l’exception de deux différences majeures :

* Vous pouvez utiliser une demande de tirage pour suggérer de remplacer votre duplication appartenant à l’utilisateur par le dépôt d’origine dans son instance de GitHub, également appelé dépôt *en amont*.
* Vous pouvez importer des modifications du dépôt en amont dans votre duplication locale en synchronisant votre duplication avec le dépôt en amont.

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

Si vous êtes membre d’une {% data variables.enterprise.prodname_emu_enterprise %}, d’autres restrictions s’appliquent aux dépôts que vous pouvez dupliquer. {% data reusables.enterprise-accounts.emu-forks %} Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

La suppression d’une duplication n’aura pas pour effet de supprimer le dépôt en amont d’origine. Vous pouvez apporter les modifications de votre choix à votre duplication (ajouter des collaborateurs, renommer des fichiers, générer des {% data variables.product.prodname_pages %}) sans que cela ait d’incidence sur l’original.{% ifversion fpt or ghec %} Vous ne pouvez pas restaurer un dépôt dupliqué supprimé. Pour plus d’informations, consultez « [Restauration d’un dépôt supprimé](/articles/restoring-a-deleted-repository) »."{% endif %}

Dans les projets open source, des duplications sont souvent utilisées pour itérer sur des idées ou des modifications avant de les proposer au dépôt amont. Lorsque vous modifiez votre duplication appartenant à un utilisateur et ouvrez une demande de tirage qui compare votre travail au dépôt en amont, vous pouvez donner à toute personne disposant d’un accès push au dépôt en amont l’autorisation d’envoyer (push) des modifications à votre branche de demande de tirage (y compris la suppression de la branche). Cela accélère la collaboration en permettant aux responsables de maintenance du dépôt d’effectuer des validations ou des tests localement sur votre branche de demande de tirage à partir d’une duplication appartenant à un utilisateur avant la fusion. Vous ne pouvez pas accorder d’autorisations d’envoi (push) à une duplication (fork) appartenant à une organisation. 

{% data reusables.repositories.private_forks_inherit_permissions %}

Si vous souhaitez créer un dépôt à partir du contenu d’un dépôt existant, mais ne souhaitez pas fusionner vos modifications en amont à l’avenir, vous pouvez dupliquer le dépôt ou, si celui-ci est un modèle, l’utiliser comme modèle. Pour plus d’informations, consultez « [Duplication d’un dépôt](/articles/duplicating-a-repository) » et « [Création d’un dépôt à partir d’un modèle](/articles/creating-a-repository-from-a-template) ».

## Pour aller plus loin

- « [À propos des modèles de développement collaboratif](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models) »
- « [Création d’une demande de tirage à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) »
- [Guides open source](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
