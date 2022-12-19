---
title: Accès à votre compte d’entreprise si votre fournisseur d’identité n’est pas disponible
shortTitle: Access your enterprise account
intro: 'Vous pouvez vous connecter à {% data variables.product.product_name %} même si votre fournisseur d’identité n’est pas disponible en contournant l’authentification unique (SSO) avec un code de récupération.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
ms.openlocfilehash: d13a4cd336e67ab62087530b00cad8fd6939d64b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578803'
---
Vous pouvez utiliser un code de récupération pour accéder à votre compte d’entreprise quand une erreur de configuration d’authentification ou un problème avec votre fournisseur d’identité (IdP) vous empêche d’utiliser l’authentification unique. 

Pour accéder à votre compte d’entreprise de cette façon, vous devez avoir téléchargé et stocké les codes de récupération pour votre entreprise. Pour plus d’informations, consultez « [Téléchargement des codes de récupération de votre compte d’entreprise pour l’authentification unique](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes) ».

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Remarque :** Si votre entreprise utilise {% data variables.product.prodname_emus %}, vous devez vous connecter en tant qu’utilisateur de configuration pour utiliser un code de récupération.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
