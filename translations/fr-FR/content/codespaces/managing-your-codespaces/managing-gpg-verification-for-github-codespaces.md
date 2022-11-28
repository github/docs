---
title: Gestion de la vérification GPG pour GitHub Codespaces
intro: 'Vous pouvez autoriser {% data variables.product.company_short %} à utiliser automatiquement GPG pour signer les commits que vous effectuez dans vos codespaces, de sorte que les autres utilisateurs aient la garantie que les modifications proviennent d’une source approuvée.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: ff83eba1720a2841747536ec04bfc0b3db055669
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167100'
---
Lorsque la vérification GPG est activée, {% data variables.product.company_short %} signe automatiquement les commits effectués dans {% data variables.product.prodname_github_codespaces %}. Les commits auront alors l’état vérifié dans {% data variables.product.product_name %}. Par défaut, la vérification GPG est désactivée pour les codespaces que vous créez. Vous pouvez choisir d’autoriser la vérification GPG pour tous les référentiels ou pour des référentiels spécifiques. N’activez la vérification GPG que pour les référentiels que vous approuvez. Pour plus d’informations sur les validations signées par {% data variables.product.product_name %}, consultez « [À propos de la vérification de signature des validations](/github/authenticating-to-github/about-commit-signature-verification) ».

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% note %}

**Remarque :** Si vous avez lié un dépôt dotfiles à {% data variables.product.prodname_github_codespaces %}, la configuration Git de vos dotfiles peut entrer en conflit avec la configuration requise par {% data variables.product.prodname_github_codespaces %} pour signer les commits. Pour plus d’informations, consultez « [Résoudre les problèmes liés à la vérification GPG pour {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces) ».

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Vérification GPG », sélectionnez le paramètre souhaité pour la vérification GPG.
  ![Cases d’option pour gérer la vérification GPG](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. Si vous avez choisi « Dépôts sélectionnés », sélectionnez le menu déroulant, puis cliquez sur un dépôt pour lequel vous voulez activer la vérification GPG. Répétez l’opération pour tous les référentiels souhaités.
  ![Menu déroulant « Dépôts sélectionnés »](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


Une fois que vous avez activé la vérification GPG pour {% data variables.product.prodname_github_codespaces %}, tous les commits sont signés par défaut dans vos codespaces.
