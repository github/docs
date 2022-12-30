---
title: Création d’une validation pour le compte d’une organisation
intro: 'Vous pouvez créer des commits pour le compte d’une organisation en ajoutant un code de fin au message du commit. Les commits attribués à une organisation incluent un badge `on-behalf-of` sur {% data variables.product.product_name %}.'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: On behalf of an organization
ms.openlocfilehash: 31b8a6b8d1824fa960fb32fa5fd7b4c28625037c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132548'
---
{% note %}

**Remarque :** la possibilité de créer une validation pour le compte d’une organisation est actuellement en version bêta publique et sujette à modification.

{% endnote %}

Pour créer des validations au nom d’une organisation :

- Vous devez être membre de l’organisation indiquée dans le code de fin
- Vous devez signer la validation
- Votre e-mail de validation et l’e-mail de l’organisation doivent se trouver dans un domaine vérifié par l’organisation
- Votre message de validation doit se terminer par le code de fin de la validation `on-behalf-of: @org <name@organization.com>`
  - `org` correspond à la connexion de l’organisation
  - `name@organization.com` correspond au domaine de l’organisation

Les organisations peuvent utiliser l’e-mail `name@organization.com` comme point de contact public pour les efforts open source.

## Création de validations avec un badge `on-behalf-of` sur la ligne de commande

1. Entrez votre message de validation ainsi qu’une description courte et explicite de vos modifications. Après votre description de validation, plutôt qu’un guillemet fermant, ajoutez deux lignes vides.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Conseil :** si vous utilisez un éditeur de texte sur la ligne de commande pour entrer votre message de validation, vérifiez qu’il existe bien deux nouvelles lignes entre la fin de votre description de validation et le code de fin de la validation `on-behalf-of:`.

  {% endtip %}

2. Sur la ligne suivante du message de validation, entrez `on-behalf-of: @org <name@organization.com>`, puis un guillemet fermant.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

La nouvelle validation, le message et le badge s’affichent sur {% data variables.product.product_location %} lors de l’envoi (push) suivant. Pour plus d’informations, consultez « [Envoi de modifications à un référentiel distant](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) ».

## Création de validations avec un badge `on-behalf-of` sur {% data variables.product.product_name %}

Après avoir apporté des modifications à un fichier à l’aide de l’éditeur web sur {% data variables.product.product_name %}, vous pouvez créer une validation pour le compte de votre organisation en ajoutant un code de fin `on-behalf-of:` au message de la validation.

1. Une fois vos modifications apportées, en bas de la page, entrez un message de validation court et explicite décrivant ces modifications.
  ![Message de validation pour votre modification](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. Dans la zone de texte située sous votre message de validation, ajoutez `on-behalf-of: @org <name@organization.com>`.

  ![Exemple de code de fin de message de validation dans la deuxième zone de texte de message de validation](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. Cliquez sur **Valider les modifications** ou **Proposer des modifications**.

La nouvelle validation, le message et le badge s’affichent sur {% data variables.product.product_location %}.

## Pour aller plus loin

- « [Affichage des contributions sur votre profil](/articles/viewing-contributions-on-your-profile) »
- « [Pourquoi mes contributions ne s’affichent-elles pas sur mon profil ?](/articles/why-are-my-contributions-not-showing-up-on-my-profile) »
- « [Affichage des contributeurs d’un projet](/articles/viewing-a-projects-contributors) »
- « [Modification d’un message de validation](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message) »
