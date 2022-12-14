---
title: Ajout d’une clé GPG à votre compte GitHub
intro: 'Pour configurer votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} pour utiliser votre clé GPG nouvelle (ou existante), vous avez également besoin de la clé de votre compte.'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
ms.openlocfilehash: db832d4e02ea5f19303b3178fb669967238e661b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369337'
---
## À propos de l’ajout de clés GPG à votre compte

Pour signer des commits associés à votre compte sur {% data variables.product.product_name %}, vous pouvez ajouter une clé GPG publique à votre compte personnel. Avant d’ajouter une clé, vous devez vérifier les clés existantes. Si vous ne trouvez aucune clé existante, vous pouvez en générer une nouvelle et la copier. Pour plus d’informations, consultez « [Vérification des clés GPG existantes](/articles/checking-for-existing-gpg-keys) » et « [Génération d’une nouvelle clé GPG](/articles/generating-a-new-gpg-key) ».

Vous pouvez ajouter plusieurs clés publiques à votre compte sur {% data variables.product.product_name %}. Les validations signées par l’une des clés privées correspondantes s’afficheront comme vérifiées. Si vous supprimez une clé publique, les validations signées par la clé privée correspondante ne s’afficheront plus comme vérifiées.

{% ifversion upload-expired-or-revoked-gpg-key %} Pour vérifier autant de commits que possible, vous pouvez ajouter des clés qui ont expiré et qui sont révoquées. Si la clé satisfait à toutes les autres exigences de la vérification, les commits précédemment signés par l’une des clés privées correspondantes s’affichent comme étant vérifiés et indiquent que leur clé de signature a expiré ou qu’elle est révoquée.

![Commit vérifié dont la clé a expiré](/assets/images/help/settings/gpg-verified-with-expired-key.png) {% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

Lors de la vérification d’une signature, {% data variables.product.product_name %} extrait la signature et tente d’analyser son ID de clé. L’ID de clé est ensuite mis en correspondance avec les clés ajoutées à {% data variables.product.product_name %}. Tant qu’aucune clé GPG correspondante n’a été ajoutée à {% data variables.product.product_name %}, la vérification de vos signatures est impossible.

## Ajout d’une clé GPG

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Cliquez sur **Nouvelle clé GPG**.
   ![Bouton Nouvelle clé GPG](/assets/images/help/settings/gpg-add-gpg-key.png)
4. Dans le champ « Clé », collez la clé GPG que vous avez copiée quand vous avez [généré votre clé GPG](/articles/generating-a-new-gpg-key).
   ![Champ Clé](/assets/images/help/settings/gpg-key-paste.png)
5. Cliquez sur **Ajouter une clé GPG**.
   ![Bouton Ajouter une clé](/assets/images/help/settings/gpg-add-key.png)
6. Pour confirmer l’action, entrez votre mot de passe {% data variables.product.product_name %}.

{% ifversion upload-expired-or-revoked-gpg-key %} {% else %}
## Mise à jour d’une clé GPG expirée

Lors de la vérification d’une signature, {% data variables.product.product_name %} vérifie que la clé n’est pas révoquée ou qu’elle n’a pas expiré. Si votre clé de signature est révoquée ou qu’elle a expiré, {% data variables.product.product_name %} ne peut pas vérifier vos signatures.

Si votre clé a expiré, vous devez [mettre à jour son expiration](https://www.gnupg.org/gph/en/manual.html#AEN329), exporter la nouvelle clé, supprimer la clé qui a expiré dans votre compte sur {% data variables.product.product_name %}, puis ajouter la nouvelle clé à votre compte comme décrit ci-dessus. Vos commits et étiquettes précédentes s’affichent comme étant vérifiés, tant que la clé répond à toutes les autres exigences de vérification.

Si votre clé est révoquée, utilisez la clé primaire ou une autre clé qui n’est pas révoquée pour signer vos commits.

Si votre clé n’est pas valide et que vous n’utilisez pas une autre clé valide dans votre jeu de clés, mais que vous générez une nouvelle clé GPG avec un nouveau jeu d’informations d’identification, vos commits effectués avec la clé révoquée ou expirée continuent de s’afficher comme étant non vérifiés. De plus, vos nouvelles informations d’identification ne peuvent pas signer à nouveau ni vérifier vos anciens commits et étiquettes.
{% endif %}

## Pour aller plus loin

- « [Vérification des clés GPG existantes](/articles/checking-for-existing-gpg-keys) »
- « [Génération d’une nouvelle clé GPG](/articles/generating-a-new-gpg-key) »
- « [Informer Git de l’utilisation de votre clé de signature](/articles/telling-git-about-your-signing-key) »
- « [Association d’un e-mail à votre clé GPG](/articles/associating-an-email-with-your-gpg-key) »
- « [Signature de commits et d’étiquettes avec des clés GPG](/articles/signing-commits-and-tags-using-gpg) »
- « [À propos de la vérification des signatures de commit](/articles/about-commit-signature-verification) »
