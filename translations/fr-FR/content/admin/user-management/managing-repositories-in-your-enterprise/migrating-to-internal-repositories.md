---
title: Migration vers des dépôts internes
intro: 'Vous pouvez effectuer une migration vers des dépôts internes pour unifier l’expérience innersource pour les développeurs utilisant à la fois {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/migrating-to-internal-repositories
  - /enterprise/admin/user-management/migrating-to-internal-repositories
  - /admin/user-management/migrating-to-internal-repositories
permissions: Site administrators can migrate to internal repositories.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Privacy
  - Repositories
  - Security
shortTitle: Internal repository migration
ms.openlocfilehash: 66a535d8fd2e20cbcc78791588ca2b50ae8ede79
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147876999'
---
## À propos des dépôts internes

Les dépôts internes sont disponibles dans {% data variables.product.prodname_ghe_server %} à partir de la version 2.20. {% data reusables.repositories.about-internal-repos %} Pour plus d’informations, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) ».

Dans les prochaines versions de {% data variables.product.prodname_ghe_server %}, nous ajusterons le fonctionnement de la visibilité des dépôts pour harmoniser la signification des termes « public », « interne » et « privé » entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %} pour les développeurs.

Pour vous préparer à ces modifications, si le mode privé est activé, vous pouvez exécuter une migration sur votre instance pour convertir des dépôts publics en dépôts internes. Cette migration est facultative pour le moment. Vous pouvez ainsi tester les modifications sur une instance hors production. La migration deviendra obligatoire ultérieurement.

Quand vous exécutez la migration, tous les dépôts publics appartenant à des organisations sur votre instance deviennent des dépôts internes. Si certains de ces dépôts ont des duplications (fork), elles deviennent privées. Les dépôts privés restent privés.

Tous les dépôts publics appartenant à des comptes d’utilisateur sur votre instance deviennent des dépôts privés. Si certains de ces dépôts ont des duplications, elles deviennent également privées. Le propriétaire de chaque duplication reçoit des autorisations de lecture sur le parent de la duplication.

L’accès en lecture anonyme Git sera désactivé pour chaque dépôt public qui devient interne ou privé.

Si, actuellement, la visibilité des dépôts par défaut est publique, elle devient interne. Si elle est privée, elle ne change pas. Vous pouvez modifier la visibilité par défaut à tout moment. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-the-default-visibility-of-new-repositories-in-your-enterprise) ».

La stratégie de création de dépôt pour l’instance change : les dépôts privés et internes sont autorisés et non plus les dépôts publics. Vous pouvez mettre à jour la stratégie à tout moment. Pour plus d’informations, consultez « [Restriction de la création de dépôt dans vos instances](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance) ».

Si le mode privé n’est pas activé, le script de migration n’aura aucun effet.

## Exécution de la migration

1. Connectez-vous à l’interpréteur de commandes d’administration. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/enterprise/admin/installation/accessing-the-administrative-shell-ssh) ».
{% ifversion ghes or ghae %}
2. Exécutez la commande de migration.

   ```shell
   github-env bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w |  tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```

{% else %}
2. Accédez au répertoire `/data/github/current`.
   ```shell
   cd /data/github/current
   ```
3. Exécutez la commande de migration.
   ```shell
   sudo bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w | tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```
{% endif %}

La sortie de journal apparaît dans le terminal et dans le journal `/tmp/convert_public_ghes_repos_to_internal.log`.

## Pour aller plus loin

- « [Activation du mode privé](/enterprise/admin/installation/enabling-private-mode) »
