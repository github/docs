---
title: Création d’une validation avec plusieurs auteurs
intro: 'Vous pouvez attribuer un commit à plusieurs auteurs en ajoutant un ou plusieurs codes de fin `Co-authored-by` au message du commit. Les commits co-créés sont visibles sur {% data variables.product.product_name %}{% ifversion ghes or ghae %} et peuvent être inclus dans le graphe de contributions de profil et les statistiques du dépôt{% endif %}.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: With multiple authors
ms.openlocfilehash: 4aa5b707e75480ead830e680151064db5f278557
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132539'
---
## Informations de co-auteur requises

Avant d’ajouter un co-auteur à une validation, vous devez connaître l’adresse e-mail à utiliser pour chaque co-auteur. Pour que la validation du co-auteur soit prise en compte en tant que contribution, vous devez utiliser l’adresse e-mail associée à son compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

{% ifversion fpt or ghec %}

Si une personne choisit de ne pas divulguer son adresse e-mail, vous devez utiliser l'adresse `no-reply` fournie par {% data variables.product.product_name %} pour protéger sa vie privée. Sinon, l'adresse e-mail du co-auteur sera disponible au public dans le message de validation. Si vous ne souhaitez pas divulguer votre adresse e-mail, vous pouvez choisir d’utiliser une adresse e-mail `no-reply` fournie par {% data variables.product.product_name %} pour les opérations Git et demander à d’autres co-auteurs de répertorier votre adresse e-mail `no-reply` dans les codes de fin de validation.

Pour plus d’informations, consultez « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address) ».

  {% tip %}

  **Conseil :** vous pouvez aider un co-auteur à trouver son adresse e-mail préférée en partageant ces informations :
  - Pour trouver votre adresse `no-reply` fournie par {% data variables.product.product_name %}, accédez à votre page de paramètres de messagerie sous « Laisser mon adresse e-mail privée ».
  - Pour trouver l’adresse e-mail utilisée pour configurer Git sur votre ordinateur, exécutez-`git config user.email` sur la ligne de commande.

  {% endtip %}

{% endif %}

## Création de validations co-créées à l’aide de {% data variables.product.prodname_desktop %}

Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour créer une validation avec un co-auteur. Pour plus d’informations, consultez « [Écrire un message de validation et envoyer (push) vos modifications](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes) » et [{% data variables.product.prodname_desktop %}](https://desktop.github.com).

![Ajouter un co-auteur au message de validation](/assets/images/help/desktop/co-authors-demo-hq.gif)

## Création de validations co-créées sur la ligne de commande

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. Entrez votre message de validation ainsi qu’une description courte et explicite de vos modifications. Après votre description de validation, plutôt qu’un guillemet fermant, ajoutez deux lignes vides.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Conseil :** si vous utilisez un éditeur de texte sur la ligne de commande pour entrer votre message de validation, vérifiez qu’il existe bien deux nouvelles lignes entre la fin de votre description de validation et le code de fin de la validation `Co-authored-by:`.

  {% endtip %}

3. Sur la ligne suivante du message de validation, entrez `Co-authored-by: name <name@example.com>` avec les informations spécifiques pour chaque co-auteur. Après les informations de co-auteur, ajoutez un guillemet fermant.

  Si vous ajoutez plusieurs co-auteurs, donnez à chacun sa propre ligne et son propre code de fin de validation `Co-authored-by:`.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

La nouvelle validation et le message s’affichent sur {% data variables.product.product_location %} lors de l’envoi (push) suivant. Pour plus d’informations, consultez « [Envoi de modifications à un référentiel distant](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) ».

## Création de validations co-créées sur {% data variables.product.product_name %}

Après avoir apporté des modifications à un fichier à l’aide de l’éditeur web sur {% data variables.product.product_name %}, vous pouvez créer une validation co-créée en ajoutant un code de fin `Co-authored-by:` au message de la validation.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. Une fois vos modifications apportées, en bas de la page, entrez un message de validation court et explicite décrivant ces modifications.
  ![Message de validation pour votre modification](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. Dans la zone de texte située sous votre message de validation, ajoutez `Co-authored-by: name <name@example.com>` avec les informations spécifiques pour chaque co-auteur. Si vous ajoutez plusieurs co-auteurs, donnez à chacun sa propre ligne et son propre code de fin de validation `Co-authored-by:`.

  ![Exemple de code de fin de co-auteur de message de validation dans la deuxième zone de texte de message de validation](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. Cliquez sur **Valider les modifications** ou **Proposer des modifications**.

La nouvelle validation et le message s’affichent sur {% data variables.product.product_location %}.

## Pour aller plus loin
{% ifversion ghes or ghae %}
- « [Affichage des contributions sur votre profil](/articles/viewing-contributions-on-your-profile) »
- « [Pourquoi mes contributions ne s’affichent-elles pas sur mon profil ?](/articles/why-are-my-contributions-not-showing-up-on-my-profile) »{% endif %}
- « [Affichage des contributeurs d’un projet](/articles/viewing-a-projects-contributors) »
- « [Modification d’un message de validation](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message) »
- « [Révision et validation des modifications de votre projet](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes) » dans la documentation {% data variables.product.prodname_desktop %}
