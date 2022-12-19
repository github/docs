---
title: Personnalisation du profil de votre organisation
intro: Vous pouvez partager des informations sur votre organisation en personnalisant le profil de votre organisation.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
topics:
  - Organizations
shortTitle: Customize organization profile
ms.openlocfilehash: 66f234427f6e47213578e8f906e123d98c07a092
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147447929'
---
## À propos de la page du profil de votre organisation

{% ifversion org-profile-pin-private %} Vous pouvez personnaliser la page de présentation de votre organisation pour montrer un fichier README et les dépôts épinglés dédiés aux utilisateurs publics ou aux membres de l’organisation.

![Image d’une page de profil d’organisation publique](/assets/images/help/organizations/public_profile.png)

Les membres de votre organisation qui sont connectés à {% data variables.product.prodname_dotcom %} peuvent sélectionner une vue `member` ou `public` du fichier README et les dépôts épinglés quand ils visitent la page du profil de votre organisation. 

![Image d’un changement de contexte de vue de page de profil d’organisation publique](/assets/images/help/organizations/profile_view_switcher_public.png)

Par défaut, la vue est définie sur `member` si un fichier README réservé aux membres ou des dépôts épinglés réservés aux membres sont présents. Sinon, elle est définie sur `public`.

![Image d’une page de profil d’organisation réservée aux membres](/assets/images/help/organizations/member_only_profile.png)

Les utilisateurs qui ne sont pas membres de votre organisation voient une vue `public`.

### Dépôts épinglés

Vous pouvez permettre aux utilisateurs d’accéder facilement aux dépôts importants ou fréquemment utilisés en choisissant jusqu’à six dépôts pour les utilisateurs publics et six dépôts pour les membres de l’organisation. Une fois que vous avez épinglé des dépôts au profil de votre organisation, la section « Épinglé » s’affiche au-dessus de la section « Dépôts » de la page du profil.

Seuls les propriétaires d’organisation peuvent épingler des dépôts. Pour plus d’informations, consultez « [Épinglage de dépôts au profil de votre organisation](#pinning-repositories-to-your-organizations-profile) ».

### Fichiers README du profil de l’organisation

{% endif %}

Vous pouvez partager des informations sur la façon d’interagir avec votre organisation en créant un fichier README du profil de l’organisation pour les utilisateurs publics et les membres de l’organisation. {% data variables.product.prodname_dotcom %} affiche le fichier README de votre profil d’organisation dans l’onglet « Vue d’ensemble » de votre organisation.

Vous pouvez choisir les informations à inclure dans le fichier README de votre profil d’organisation. Voici quelques exemples d’informations qui peuvent être utiles.

- Section « À propos » qui décrit votre organisation
- Conseils pour obtenir de l’aide dans l’organisation

Vous pouvez mettre en forme le texte et inclure des emojis, des images et des fichiers GIF dans le fichier README de votre profil d’organisation en utilisant {% data variables.product.company_short %} Flavored Markdown. Pour plus d’informations, consultez « [Bien démarrer avec l’écriture et la mise en forme sur {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github) ».

## Ajout d’un fichier README de profil d’organisation publique

1. Si votre organisation n’a pas encore de dépôt `.github` ​​public, créez un dépôt `.github` public.
2. Dans le dépôt `.github` ​​de votre organisation, créez un fichier `README.md` dans le dossier `profile`.
3. Commitez les modifications apportées au fichier `README.md`. Le contenu du fichier `README.md` apparaît sur le profil public de votre organisation.

   ![Image du fichier README public d’une organisation](/assets/images/help/organizations/org_public_readme.png)

{% ifversion org-profile-pin-private %}

## Ajout d’un fichier README de profil d’organisation réservé aux membres

1. Si votre organisation n’a pas encore de dépôt `.github-private`, créez un dépôt privé appelé `.github-private`. 
2. Dans le dépôt `.github-private` ​​de votre organisation, créez un fichier `README.md` dans le dossier `profile`.
3. Commitez les modifications apportées au fichier `README.md`. Le contenu du fichier `README.md` s’affiche dans la vue de membre du profil de votre organisation.

   ![Image d’un fichier README réservé aux membres de l’organisation](/assets/images/help/organizations/org_member_readme.png)

## Épinglage de dépôts au profil de votre organisation

Vous pouvez épingler les dépôts que vous souhaitez mettre en avant, notamment ceux fréquemment utilisés, dans la page de profil de votre organisation. Pour choisir les dépôts à épingler au profil de votre organisation, vous devez être propriétaire de l’organisation.

1. Accédez à la page du profil de votre organisation.
2. Dans la barre latérale droite de la page, dans le lien « Afficher en tant que » {% octicon "eye" aria-label="The eye octicon" %}, choisissez la vue de profil **Public** ou **Membre** dans le menu déroulant.

   ![Image de la liste déroulante de la vue du profil de l’organisation](/assets/images/help/organizations/org_profile_view.png)

3. Dans la section des dépôts épinglés, sélectionnez **Personnaliser les épingles**.

   ![Image du lien Personnaliser les épingles](/assets/images/help/organizations/customize_pins_link.png)

   - Si vous n’avez pas encore épinglé de dépôts au profil de votre organisation, cliquez plutôt sur **épingler des dépôts** dans la barre latérale droite de la page du profil.
   ![Image du lien « épingler des dépôts » dans la barre latérale droite](/assets/images/help/organizations/pin_repositories_link.png)

4. Dans la boîte de dialogue « Modifier les dépôts épinglés », sélectionnez une combinaison de dépôts publics, {% ifversion not fpt %}privés ou internes{% else %}ou privés{% endif %} à afficher (six au maximum).

   ![Image de la boîte de dialogue des dépôts épinglés](/assets/images/help/organizations/pinned_repo_dialog.png)

5. Cliquez sur **Enregistrer les épingles**.

{% endif %}
