---
title: Gestion de la vérification GPG pour Codespaces
intro: Vous pouvez autoriser {% data variables.product.company_short %} à utiliser automatiquement GPG pour signer les commits que vous effectuez dans vos codespaces, de sorte que les autres utilisateurs aient la garantie que les modifications proviennent d’une source approuvée.
product: '{% data reusables.gated-features.codespaces %}'
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
shortTitle: GPG verification
ms.openlocfilehash: 588082ccd4d861afd8fc78b3b56ae22a06ba72d9
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145106509"
---
Lorsque la vérification GPG est activée, {% data variables.product.company_short %} signe automatiquement les validations effectuées dans {% data variables.product.prodname_codespaces %}. Elles présentent alors l’état vérifié sur {% data variables.product.product_name %}. Par défaut, la vérification GPG est désactivée pour les codespaces que vous créez. Vous pouvez choisir d’autoriser la vérification GPG pour tous les référentiels ou pour des référentiels spécifiques. N’activez la vérification GPG que pour les référentiels que vous approuvez. Pour plus d’informations sur les validations signées par {% data variables.product.product_name %}, consultez « [À propos de la vérification de signature des validations](/github/authenticating-to-github/about-commit-signature-verification) ».

Une fois activée, la vérification GPG prend immédiatement effet pour tous vos codespaces.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Vérification GPG », sélectionnez le paramètre souhaité pour la vérification GPG.
  ![Cases d’option pour gérer la vérification GPG](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. Si vous avez choisi « Référentiels sélectionnés », sélectionnez le menu déroulant, puis cliquez sur un référentiel pour lequel vous voulez activer la vérification GPG. Répétez l’opération pour tous les référentiels souhaités.
  ![Menu déroulant « Référentiels sélectionnés »](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


{% note %}

**Remarque :** Une fois que vous avez activé la vérification GPG pour {% data variables.product.prodname_codespaces %}, vous devez également ajouter `-S` à chaque validation pour qu’elle soit signée. Pour cela, vérifiez que l’option « Git : Activer la signature des validations » est activée dans les Paramètres de {% data variables.product.prodname_vscode %}.

{% endnote %}
