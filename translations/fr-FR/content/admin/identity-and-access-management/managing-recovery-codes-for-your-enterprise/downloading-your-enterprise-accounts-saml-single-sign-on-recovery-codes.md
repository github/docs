---
title: Téléchargement des codes de récupération de votre compte d’entreprise pour l’authentification unique SAML
shortTitle: Download recovery codes
intro: To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account's SAML single sign-on (SSO) recovery codes.
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
ms.openlocfilehash: cd06d34b2dbf3e0c3b0a96bc3b92b2fb2b78e080
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104905"
---
Si votre fournisseur d’identité n’est pas disponible, vous pouvez utiliser un code de récupération pour vous connecter et accéder à votre entreprise sur {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Accès à votre compte d’entreprise si votre fournisseur d’identité n’est pas disponible](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable) ».

Si vous n’avez pas enregistré vos codes de récupération quand vous avez configuré l’authentification unique SAML, vous pouvez toujours y accéder à partir des paramètres de votre entreprise.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. Sous « Exiger l’authentification SAML », cliquez sur **Enregistrer vos codes de récupération**.
![Capture d’écran du bouton pour tester la configuration SAML avant de l’appliquer](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. Pour enregistrer vos codes de récupération, cliquez sur **Télécharger**, **Imprimer** ou **Copier**.
![Capture d’écran des boutons pour télécharger, imprimer ou copier vos codes de récupération](/assets/images/help/saml/saml_recovery_code_options.png)
