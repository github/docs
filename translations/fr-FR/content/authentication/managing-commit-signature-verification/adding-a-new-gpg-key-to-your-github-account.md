---
title: Ajout d’une nouvelle clé GPG à votre compte GitHub
intro: Pour configurer votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} pour utiliser votre clé GPG nouvelle (ou existante), vous avez également besoin de la clé de votre compte.
redirect_from:
- /articles/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Add a new GPG key
ms.openlocfilehash: 73d58f3194e2ba37b38ce8e4b80de6b78888bbff
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145085989"
---
Avant d’ajouter une nouvelle clé GPG à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, vous devez :
- [Vérifier les clés GPG existantes](/articles/checking-for-existing-gpg-keys)
- [Générer et copier une nouvelle clé GPG](/articles/generating-a-new-gpg-key)

Vous pouvez ajouter plusieurs clés publiques à votre compte GitHub. Les validations signées par l’une des clés privées correspondantes s’afficheront comme vérifiées. Si vous supprimez une clé publique, les validations signées par la clé privée correspondante ne s’afficheront plus comme vérifiées.

{% data reusables.gpg.supported-gpg-key-algorithms %}

Pour la vérification d’une signature, nous extrayons la signature et essayons d’analyser son ID de clé. Nous mettons en correspondance l’ID de clé avec les clés chargées sur {% data variables.product.product_name %}. Tant que vous n’avez pas chargé votre clé GPG sur {% data variables.product.product_name %}, nous ne pouvons pas vérifier vos signatures.

## <a name="adding-a-gpg-key"></a>Ajout d’une clé GPG

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Cliquez sur **Nouvelle clé GPG**.
   ![Bouton Nouvelle clé GPG](/assets/images/help/settings/gpg-add-gpg-key.png)
4. Dans le champ « Clé », collez la clé GPG que vous avez copiée quand vous avez [généré votre clé GPG](/articles/generating-a-new-gpg-key).
   ![Champ Clé](/assets/images/help/settings/gpg-key-paste.png)
5. Cliquez sur **Ajouter une clé GPG**.
   ![Bouton Ajouter une clé](/assets/images/help/settings/gpg-add-key.png)
6. Pour confirmer l’action, entrez votre mot de passe {% data variables.product.product_name %}.

## <a name="further-reading"></a>Pour aller plus loin

* « [Vérification des clés GPG existantes](/articles/checking-for-existing-gpg-keys) »
* « [Génération d’une nouvelle clé GPG](/articles/generating-a-new-gpg-key) »
* « [Informer Git de l’utilisation de votre clé de signature](/articles/telling-git-about-your-signing-key) »
* « [Association d’un e-mail à votre clé GPG](/articles/associating-an-email-with-your-gpg-key) »
* « [Signature de commits et d’étiquettes avec des clés GPG](/articles/signing-commits-and-tags-using-gpg) »
