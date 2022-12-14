---
title: À propos de la vérification des signatures de commit
intro: 'À l’aide de GPG ou S/MIME, vous pouvez signer des étiquettes et validations (commits) localement. Ces étiquettes ou validations (commits) sont marquées comme vérifiées sur {% data variables.product.product_name %} afin que d’autres personnes puissent être certaines que les modifications proviennent d’une source approuvée.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
ms.openlocfilehash: 73f4c4ea28db9c0e9f012a2a9e9aa061d655e093
ms.sourcegitcommit: 6a266bff4d8c9ee928560c3af45eddd7fb4f3a0c
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/26/2022
ms.locfileid: '147409554'
---
## <a name="about-commit-signature-verification"></a>À propos de la vérification des signatures de commit

Vous pouvez signer des commits et des étiquettes localement pour renforcer la confiance des autres utilisateurs quant à l’origine d’une modification que vous avez apportée. Si un commit ou une étiquette a une signature GPG ou S/MIME vérifiable par chiffrement, GitHub marque le commit ou l’étiquette comme {% ifversion fpt or ghec %}« Vérifié » ou « Partiellement vérifié ».{% else %}« Vérifié ».{% endif %}

![Commit vérifié](/assets/images/help/commits/verified-commit.png)

{% ifversion fpt or ghec %} Les commits et étiquettes ont les états de vérification suivants selon que vous avez activé ou non le mode vigilant. Par défaut, le mode vigilant n’est pas activé. Pour plus d’informations sur l’activation du mode vigilant, consultez « [Affichage des états de vérification pour tous vos commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits) ».

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

La signature d’un commit diffère de l’approbation d’un commit. Pour plus d’informations sur l’approbation des commits, consultez « [Gestion de la stratégie d’approbation de commits pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository) ».

### <a name="default-statuses"></a>États par défaut

| Statut         | Description |
| -------------- | ----------- |
| **Verified**   | Le commit est signé et la signature a été vérifiée avec succès.
| **Non vérifié** | Le commit est signé, mais la signature n’a pas pu être vérifiée.
| Pas d’état de vérification | Le commit n’est pas signé.

### <a name="signature-verification-for-rebase-and-merge"></a>Vérification de signature pour le rebasage et la fusion
{% data reusables.pull_requests.rebase_and_merge_verification %}

Pour plus d’informations, consultez « [Rebasing et fusion de vos commits](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits) ».

### <a name="statuses-with-vigilant-mode-enabled"></a>États avec mode vigilant activé

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% else %} Si un commit ou une étiquette a une signature qui ne peut pas être vérifiée, {% data variables.product.product_name %} marque le commit ou l’étiquette comme « Non vérifié ».
{% endif %}

Les administrateurs de dépôt peuvent appliquer la signature de commit nécessaire sur une branche pour bloquer tous les commits qui ne sont pas signés et vérifiés. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-signed-commits) ».

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% ifversion ghes %}Si un administrateur de site a activé la signature de commit web, {% data variables.product.product_name %} utilise automatiquement GPG pour signer les commits que vous effectuez à l’aide de l’interface web. Les commits signés par {% data variables.product.product_name %} ont un état vérifié. Vous pouvez vérifier la signature localement à l’aide de la clé publique disponible à l’adresse `https://HOSTNAME/web-flow.gpg`. Pour plus d’informations, consultez « [Configuration de la signature de commit web](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing) ».
{% else %}{% data variables.product.prodname_dotcom %} utilise automatiquement GPG pour signer les commits que vous effectuez à l’aide de l’interface web. Les commits signés par {% data variables.product.prodname_dotcom %} ont un état vérifié. Vous pouvez vérifier la signature localement à l’aide de la clé publique disponible à l’adresse https://github.com/web-flow.gpg. L’empreinte digitale complète de la clé est `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`.

Vous pouvez également déterminer que {% data variables.product.prodname_dotcom %} signe les validations (commits) que vous effectuez dans {% data variables.product.prodname_github_codespaces %}. Pour plus d’informations sur l’activation de la vérification GPG pour vos codespaces, consultez « [Gestion de la vérification GPG pour {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces). »{% endif %} {% endif %}

## <a name="gpg-commit-signature-verification"></a>Vérification des signatures de commit GPG

Vous pouvez utiliser GPG pour signer des commits avec une clé GPG que vous générez vous-même.

{% data variables.product.product_name %} utilise des bibliothèques OpenPGP pour vérifier que vos commits et étiquettes signés localement sont vérifiables par chiffrement par rapport à une clé publique que vous avez ajoutée à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

Pour signer des commits avec GPG et les faire vérifier sur {% data variables.product.product_name %}, effectuez les étapes suivantes :

1. [Vérifier les clés GPG existantes](/articles/checking-for-existing-gpg-keys)
2. [Générer une nouvelle clé GPG](/articles/generating-a-new-gpg-key)
3. [Ajouter une clé GPG à votre compte GitHub](/articles/adding-a-gpg-key-to-your-github-account)
4. [Informer Git de l’utilisation de votre clé de signature](/articles/telling-git-about-your-signing-key)
5. [Signer les commits](/articles/signing-commits)
6. [Signer les étiquettes](/articles/signing-tags)

## <a name="smime-commit-signature-verification"></a>Vérification des signatures de commit S/MIME

Vous pouvez utiliser S/MIME pour signer des commits avec une clé X.509 émise par votre organisation.

{% data variables.product.product_name %} utilise le [paquet ca-certificates Debian](https://packages.debian.org/bullseye/ca-certificates) (magasin de confiance utilisé par les navigateurs Mozilla) pour vérifier que vos commits et étiquettes signés localement sont vérifiables par chiffrement par rapport à une clé publique dans un certificat racine approuvé.

{% data reusables.gpg.smime-git-version %}

Pour signer des commits avec S/MIME et les faire vérifier sur {% data variables.product.product_name %}, effectuez les étapes suivantes :

1. [Informer Git de l’utilisation de votre clé de signature](/articles/telling-git-about-your-signing-key)
2. [Signer les commits](/articles/signing-commits)
3. [Signer les étiquettes](/articles/signing-tags)

Vous n’avez pas besoin de charger votre clé publique sur {% data variables.product.product_name %}.

{% ifversion fpt or ghec %}
## <a name="signature-verification-for-bots"></a>Vérification de signature pour les bots

Les organisations et {% data variables.product.prodname_github_apps %} qui nécessitent la signature de commit peuvent utiliser des bots pour signer les commits. Si un commit ou une étiquette a une signature de bot vérifiable par chiffrement, {% data variables.product.product_name %} marque le commit ou l’étiquette comme vérifié.

La vérification de signature pour les bots fonctionne uniquement si la demande est vérifiée et authentifiée comme {% data variables.product.prodname_github_app %} ou bot et ne contient aucune information d’auteur personnalisée, aucune information de commiteur personnalisée et aucune information de signature personnalisée (API Commits, par exemple).
{% endif %}

## <a name="further-reading"></a>Pour aller plus loin

- « [Signature de commits](/articles/signing-commits) »
- « [Signature des étiquettes](/articles/signing-tags) »
- « [Résolution des problèmes de vérification de signature de commit](/articles/troubleshooting-commit-signature-verification) »
