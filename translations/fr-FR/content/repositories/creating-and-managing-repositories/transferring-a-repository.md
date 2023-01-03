---
title: Transfert d’un dépôt
intro: Vous pouvez transférer des référentiels vers d’autres utilisateurs ou comptes d’organisation.
redirect_from:
  - /articles/about-repository-transfers
  - /move-a-repo
  - /moving-a-repo
  - /articles/what-is-transferred-with-a-repository
  - /articles/what-is-transferred-with-a-repo
  - /articles/how-to-transfer-a-repo
  - /articles/how-to-transfer-a-repository
  - /articles/transferring-a-repository-owned-by-your-personal-account
  - /articles/transferring-a-repository-owned-by-your-organization
  - /articles/transferring-a-repository
  - /github/administering-a-repository/transferring-a-repository
  - /github/administering-a-repository/managing-repository-settings/transferring-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f37ebc1492ae26998a596d90734d1d509b8f73c9
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160679'
---
## À propos des transferts de dépôts

Lorsque vous transférez un dépôt vers un nouveau propriétaire, il peut administrer immédiatement le contenu du dépôt, les problèmes, les demandes de tirage, les mises en production, les {% data variables.product.prodname_projects_v1 %} et les paramètres.

Prérequis pour les transferts de dépôts :
- Lorsque vous transférez un dépôt dont vous être propriétaire vers un autre compte personnel, le nouveau propriétaire reçoit un e-mail de confirmation.{% ifversion fpt or ghec %} L’e-mail de confirmation inclut des instructions pour accepter le transfert. Si le nouveau propriétaire n’accepte pas le transfert dans les 24 heures, l’invitation expire.{% endif %}
- Pour transférer un dépôt dont vous être propriétaire vers une organisation, vous devez avoir l’autorisation de créer un dépôt dans l’organisation cible.
- Le compte cible ne doit pas avoir de dépôt portant le même nom, ou une duplication (fork) dans le même réseau.
- Le propriétaire d’origine du dépôt est ajouté en tant que collaborateur sur le dépôt transféré. Les autres collaborateurs du dépôt transféré ne changent pas.{% ifversion ghes < 3.7 or ghae %}
- Les dépôts internes ne peuvent pas être transférés.{% endif %}
- Les duplications privées ne peuvent pas être transférées.
{%- ifversion ghec %}
- Vous ne pouvez pas transférer un dépôt interne d’une organisation appartenant à un compte d’entreprise vers une organisation appartenant à un autre compte d’entreprise.
{%- endif %}

{% ifversion fpt or ghec %} Si vous transférez un dépôt privé vers un compte d’utilisateur ou d’organisation {% data variables.product.prodname_free_user %}, le dépôt perd l’accès aux fonctionnalités telles que les branches protégées et les {% data variables.product.prodname_pages %}. {% data reusables.gated-features.more-info %}{% endif %}

### Qu’est-ce qui est transféré avec un dépôt ?

Lorsque vous transférez un dépôt, ses problèmes, ses demandes de tirage, son wiki, ses étoiles et la liste des personnes qui le surveillent sont également transférés. Si le dépôt transféré contient des webhooks, des services, des secrets ou des clés de déploiement, ils restent associés une fois le transfert terminé. Les informations Git sur les commits, y compris les contributions, sont conservées. De plus :

- Si le dépôt transféré est une duplication, il reste associé au dépôt en amont.
- Si le dépôt transféré comporte des duplications, celles-ci restent associées au dépôt une fois le transfert terminé.
- Si le dépôt transféré utilise {% data variables.large_files.product_name_long %}, tous les objets {% data variables.large_files.product_name_short %} sont automatiquement déplacés. Ce transfert se produit en arrière-plan. Par conséquent, si vous avez un grand nombre d’objets {% data variables.large_files.product_name_short %} ou si les objets {% data variables.large_files.product_name_short %} sont volumineux, le transfert peut prendre un certain temps.{% ifversion fpt or ghec %} Avant de transférer un dépôt qui utilise {% data variables.large_files.product_name_short %}, vérifiez que le compte de réception dispose de suffisamment de packs de données pour stocker les objets {% data variables.large_files.product_name_short %} que vous déplacerez. Pour plus d’informations sur l’ajout de stockage pour les comptes personnels, consultez « [Mise à niveau de {% data variables.large_files.product_name_long %}](/articles/upgrading-git-large-file-storage) ».{% endif %}
- Lorsqu’un dépôt est transféré entre deux comptes personnels, les affectations de problème sont laissées intactes. Lorsque vous transférez un dépôt d’un compte personnel vers une organisation, les problèmes affectés aux membres de l’organisation restent intacts et tous les autres destinataires de problèmes sont effacés. Seuls les propriétaires de l’organisation sont autorisés à créer des affectations de problème. Lorsque vous transférez un dépôt d’une organisation vers un compte personnel, seuls les problèmes affectés au propriétaire du dépôt sont conservés et tous les autres destinataires de problèmes sont effacés.
- Si le dépôt transféré contient un site {% data variables.product.prodname_pages %}, les liens vers le dépôt Git sur le web et via une activité Git sont redirigés. Toutefois, nous ne redirigeons pas les {% data variables.product.prodname_pages %} associées au dépôt.
- Tous les liens vers l’emplacement précédent du dépôt sont automatiquement redirigés vers le nouvel emplacement. Lorsque vous utilisez `git clone`, `git fetch` ou `git push` sur un dépôt transféré, ces commandes redirigent vers le nouvel emplacement ou la nouvelle URL du dépôt. Toutefois, pour éviter toute confusion, nous vous recommandons vivement de mettre à jour tous les clones locaux existants de façon à ce qu’ils pointent vers la nouvelle URL du dépôt. Pour ce faire, vous pouvez utiliser `git remote` sur la ligne de commande :

  ```shell
  $ git remote set-url origin NEW_URL
  ```

  {% warning %}

  **Avertissement** : Si vous créez un dépôt sous votre compte, ne réutilisez pas le nom d’origine du dépôt transféré. Si vous le faites, les redirections vers le dépôt transféré ne fonctionneront plus.

  {% endwarning %}

- Lorsque vous transférez un dépôt d’une organisation vers un compte personnel, les collaborateurs en lecture seule du dépôt ne sont pas transférés. Cela est dû au fait que les collaborateurs ne peuvent pas avoir accès en lecture seule à des dépôts appartenant à un compte personnel. Pour plus d’informations sur les niveaux d’autorisation de dépôt, consultez « [Niveaux d’autorisation pour un dépôt de compte personnel](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository) » et « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».{% ifversion fpt or ghec %}
- Les commanditaires qui ont accès au dépôt par le biais d’un niveau de parrainage peuvent être affectés. Pour plus d’informations, consultez « [Ajout d’un dépôt à un niveau de parrainage](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier) ».{% endif %}

Pour plus d’informations, consultez « [Gestion des dépôts distants](/github/getting-started-with-github/managing-remote-repositories) ».

### Transferts de dépôts et organisations

Pour transférer des dépôts vers une organisation, vous devez disposer d’autorisations de création de dépôt dans l’organisation réceptrice. Si les propriétaires d’organisation ont désactivé la création de dépôts par les membres de l’organisation, seuls les propriétaires d’organisation peuvent transférer des dépôts hors ou dans l’organisation.

Une fois qu’un dépôt a été transféré vers une organisation, les paramètres d’autorisation de dépôt par défaut de l’organisation et les privilèges d’appartenance par défaut s’appliquent au dépôt transféré.

## Transfert d’un dépôt appartenant à votre compte personnel

Vous pouvez transférer votre dépôt vers n’importe quel compte personnel qui accepte votre transfert de dépôt. Lorsqu’un dépôt est transféré entre deux comptes personnels, le propriétaire du dépôt d’origine et les collaborateurs sont automatiquement ajoutés en tant que collaborateurs au nouveau dépôt.

{% ifversion fpt or ghec %}Si vous avez publié un site {% data variables.product.prodname_pages %} dans un dépôt privé et ajouté un domaine personnalisé, avant de transférer le dépôt, vous pouvez supprimer ou mettre à jour vos enregistrements DNS afin d’éviter le risque de prise de contrôle du domaine. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site) ».{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}

## Transfert d’un dépôt appartenant à votre organisation

Si vous disposez d’autorisations de propriétaire dans une organisation ou d’autorisations d’administrateur sur l’un de ses dépôts, vous pouvez transférer un dépôt appartenant à votre organisation vers votre compte personnel ou vers une autre organisation.

1. Connectez-vous à votre compte personnel disposant d’autorisations d’administrateur ou de propriétaire dans l’organisation propriétaire du dépôt.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}
