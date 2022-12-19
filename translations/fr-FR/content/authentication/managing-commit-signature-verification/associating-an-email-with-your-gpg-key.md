---
title: Association d’un e-mail à votre clé GPG
intro: 'Votre clé GPG doit être associée à une adresse e-mail vérifiée par {% data variables.product.product_name %} qui correspond à votre identité de commiteur.'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/associating-an-email-with-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Associate email with GPG key
ms.openlocfilehash: d36c053e1df0c329fb8d4607b1338c49414e76de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369280'
---
{% note %}

Si vous utilisez une clé GPG qui correspond à votre identité de commiteur et à votre adresse e-mail vérifiée associées à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, vous pouvez commencer à signer des commits et des étiquettes.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
4. Entrez `gpg --edit-key GPG key ID` en indiquant l’ID de clé GPG que vous souhaitez utiliser. Dans l’exemple suivant, l’ID de clé GPG est `3AA5C34371567BD2` :
  ```shell
  $ gpg --edit-key <em>3AA5C34371567BD2</em>
  ```
5. Entrez `gpg> adduid` pour ajouter les détails de l’ID utilisateur.
  ```shell
  $ gpg> adduid
  ```
6. Suivez les invites pour fournir votre nom réel, votre adresse e-mail et d’éventuels commentaires. Vous pouvez modifier vos entrées en choisissant `N`, `C` ou `E`. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} Pour plus d’informations, consultez « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address) ».{% endif %}
  ```shell
  Real Name: <em>Octocat</em>
  Email address: <em>octocat@github.com</em>
  Comment: <em>GitHub key</em>
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. Entrez `O` pour confirmer vos sélections.
8. Entrez la phrase secrète de votre clé.
9. Entrez `gpg> save` pour enregistrer les modifications.
  ```shell
  $ gpg> save
  ```
10. Entrez `gpg --armor --export GPG key ID` en indiquant l’ID de clé GPG que vous souhaitez utiliser. Dans l’exemple suivant, l’ID de clé GPG est `3AA5C34371567BD2` :
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Prints the GPG key, in ASCII armor format
  ```
11. Chargez la clé GPG en [l’ajoutant à votre compte GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Pour aller plus loin

- « [Vérification des clés GPG existantes](/articles/checking-for-existing-gpg-keys) »
- « [Génération d’une nouvelle clé GPG](/articles/generating-a-new-gpg-key) »
- « [Utilisation d’une adresse e-mail vérifiée dans votre clé GPG](/articles/using-a-verified-email-address-in-your-gpg-key) »
- « [Ajout d’une clé GPG à votre compte GitHub](/articles/adding-a-gpg-key-to-your-github-account) »
- « [Signature de commits](/articles/signing-commits) »
- « [Signature d’étiquettes](/articles/signing-tags) »
