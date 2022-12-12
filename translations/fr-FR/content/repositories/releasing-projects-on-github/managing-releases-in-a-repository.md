---
title: Gestion des mises en production dans un référentiel
intro: Vous pouvez créer des mises en production pour grouper et remettre des itérations d’un projet aux utilisateurs.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
ms.openlocfilehash: d8a5f77941c7c46656c891c0892af95d0b1b8637
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107484'
---
## À propos de la gestion des mises en production

Vous pouvez créer de nouvelles mises en production avec des notes de publication, @mentions des contributeurs et des liens vers des fichiers binaires, ainsi que modifier ou supprimer des mises en production existantes. Vous pouvez également créer, modifier et supprimer des mises en production avec l’API Mises en production. Pour plus d’informations, consultez « [Mises en production](/rest/releases/releases) » dans la documentation de l’API REST.

{% ifversion fpt or ghec %} Vous pouvez également publier une action à partir d’une mise en production spécifique dans {% data variables.product.prodname_marketplace %}. Pour plus d’informations, consultez « [Publication d’une action dans {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace) ».

Vous pouvez choisir si les objets {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) sont inclus ou pas dans les fichiers ZIP et les tarballs créés par {% data variables.product.product_name %} pour chaque mise en production. Pour plus d’informations, consultez « [Gestion des objets {% data variables.large_files.product_name_short %} dans les archives de votre dépôt](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository) ».
{% endif %}

## Création d’une mise en production

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Cliquez sur **Créer un brouillon d’une nouvelle mise en production**.

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}![Bouton Brouillon de mises en production](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Bouton Brouillon de mises en production](/assets/images/help/releases/draft_release_button.png){% endif %}
1. Cliquez sur **Choisir une étiquette**, tapez un numéro de version pour votre mise en production, puis appuyez sur **Entrée**. Vous pouvez aussi sélectionner une étiquette existante.

   ![Entrer une étiquette](/assets/images/help/releases/releases-tag-create.png)
1. Si vous créez une nouvelle étiquette, cliquez sur **Créer une nouvelle étiquette**.

   ![Capture d’écran de la confirmation de la création d’une étiquette](/assets/images/help/releases/releases-tag-create-confirm.png)
   
1. Si vous avez créé une étiquette, utilisez le menu déroulant pour sélectionner la branche qui contient le projet à publier.

   
   ![Capture d’écran de la liste déroulante permettant de choisir une branche](/assets/images/help/releases/releases-choose-branch.png)

   

{%- data reusables.releases.previous-release-tag %}
1. Tapez un titre et une description pour votre mise en production.
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Si vous @mention quelqu’un dans la description, la mise en production publiée inclut une section **Contributeurs** avec une liste d’avatars de tous les utilisateurs mentionnés.
   {%- endif %} {% ifversion fpt or ghec or ghes > 3.3 %} Vous pouvez également générer automatiquement vos notes de publication en cliquant sur {% ifversion previous-release-tag %}**Générer des notes de publication**{% else %}**Générer automatiquement des notes de publication**{% endif %}.{% endif %} {% ifversion previous-release-tag %}

   ![Capture d’écran de la description des mises en production](/assets/images/help/releases/releases_description_auto.png){% else %}

   ![Capture d’écran de la description des mises en production](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}

1. Vous pouvez aussi ajouter des fichiers binaires comme des programmes compilés dans votre mise en production, pour ce faire, faites un glisser-déposer ou sélectionnez les fichiers manuellement dans la boîte Fichiers binaires.

   ![GIF animé de La fourniture d’un DMG avec la mise en production](/assets/images/help/releases/releases_adding_binary.gif)

1. Pour avertir les utilisateurs que la mise en production n’est pas prête pour la production et peut être instable, sélectionnez **Il s’agit d’une préversion**.

   ![Capture d’écran de la case à cocher pour marquer une mise en production en tant que préversion](/assets/images/help/releases/prerelease_checkbox.png)

{%- ifversion releases-set-latest-release %} 
1. Si vous le souhaitez, vous pouvez sélectionner **Définir comme version la plus récente**. Si vous ne sélectionnez pas cette option, l’étiquette de version la plus récente est automatiquement attribuée en fonction du versioning sémantique.

   ![Capture d’écran de la case à cocher pour marquer une mise en production en tant que version la plus récente](/assets/images/help/releases/latest-release-checkbox.png)

{%- endif %}  
{%- ifversion discussions %}
1. Si vous le souhaitez, si {% data variables.product.prodname_discussions %} est activé dans le référentiel, sélectionnez **Créer une discussion pour cette mise en production**, puis sélectionnez le menu déroulant **Catégorie** et cliquez sur une catégorie pour la discussion sur la mise en production.

   ![Capture d’écran de la case à cocher pour créer une discussion de mise en production et du menu déroulant pour choisir une catégorie](/assets/images/help/releases/create-release-discussion.png)

{%- endif %}
1. Si vous êtes prêt à rendre publique votre mise en production, cliquez sur **Publier la mise en production**. Pour travailler sur la mise en production par la suite, cliquez sur **Enregistrer le brouillon**.
   ![Boutons Publier la mise en production et Enregistrer un brouillon de la mise en production](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghae > 3.3 %} Vous pouvez ensuite afficher vos mises en production publiées ou les brouillons dans le flux de mises en production de votre dépôt. Pour plus d’informations, consultez « [Capture d’écran des mises en production et étiquettes de votre dépôt](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags). »

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %} ![Mise en production publiée avec des contributeurs @mentioned](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% else %} ![Mise en production publiée avec des contributeurs @mentioned](/assets/images/help/releases/releases-overview-with-contributors.png) {% endif %} {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Pour créer une mise en production, utilisez la sous-commande `gh release create`. Remplacez `tag` par l’étiquette souhaitée pour la mise en production.

   ```shell
   gh release create TAG
   ```

2. Suivez les invites interactives. Vous pouvez également spécifier des arguments pour ignorer ces invites. Pour plus d’informations sur les arguments possibles, consultez [le manuel {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_release_create). Par exemple, cette commande crée une préversion avec le titre et les notes spécifiés.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} Si vous @mention des utilisateurs {% data variables.product.product_name %} dans les remarques, la mise en production publiée sur {% data variables.product.prodname_dotcom_the_website %} inclut une section **Contributeurs** avec la liste des avatars de tous les utilisateurs mentionnés.
{% endif %}

{% endcli %}

## Modification d’une mise en production

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. Sur la droite de la page, en regard de la mise en production à modifier, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}.
  ![Modifier une mise en production](/assets/images/help/releases/edit-release-pencil.png) {% else %}
3. Sur la droite de la page, à côté de la mise en production à modifier, cliquez sur **Modifier la mise en production**.
  ![Modifier une mise en production](/assets/images/help/releases/edit-release.png) {% endif %}
4. Modifiez les détails de la mise en production dans le formulaire, puis cliquez sur **Mettre à jour la mise en production**.{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Si vous ajoutez ou supprimez l’un des utilisateurs @mentions GitHub dans la description, ces utilisateurs seront ajoutés ou supprimés de la liste des avatars dans la section **Contributeurs** de la mise en production.{% endif %} ![Mettre à jour une mise en production](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Les mises en production ne peuvent pas être modifiées avec {% data variables.product.prodname_cli %}.

{% endcli %}

## Suppression d’une mise en production

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. Sur la droite de la page, en regard de la mise en production à supprimer, cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
  ![Supprimer une mise en production](/assets/images/help/releases/delete-release-trash.png) {% else %}
3. Cliquez sur le nom de la mise en production que vous souhaitez supprimer.
  ![Lien vers la version d’affichage](/assets/images/help/releases/release-name-link.png)
4. Dans le coin supérieur droite de la page, cliquez sur **Supprimer**.
  ![Bouton Supprimer la mise en production](/assets/images/help/releases/delete-release.png) {% endif %}
5. Cliquez sur **Supprimer cette mise en production**.
  ![Confirmer la suppression de la mise en production](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. Pour supprimer une mise en production, utilisez la sous-commande `gh release delete`. Remplacez `tag` par l’étiquette de la mise en production à supprimer. Utilisez l’indicateur `-y`pour ignorer la confirmation.

   ```shell
   gh release delete TAG -y
   ```

{% endcli %}
