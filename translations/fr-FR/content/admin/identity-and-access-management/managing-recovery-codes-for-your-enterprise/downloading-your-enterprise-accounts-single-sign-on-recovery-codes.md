---
title: Téléchargement des codes de récupération de votre compte d’entreprise pour l’authentification unique
shortTitle: Download recovery codes
intro: 'Pour vous assurer que vous pouvez accéder à {% data variables.product.product_name %} si votre fournisseur d’identité (IdP) n’est pas disponible, vous devez télécharger les codes de récupération de l’authentification unique de votre compte d’entreprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
ms.openlocfilehash: 82f44654b18a36d2fb29797fe8b6e0426785522b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147063593'
---
Si votre fournisseur d’identité n’est pas disponible, vous pouvez utiliser un code de récupération pour vous connecter et accéder à votre entreprise sur {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Accès à votre compte d’entreprise si votre fournisseur d’identité n’est pas disponible](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable) ».

Si vous n’avez pas enregistré vos codes de récupération quand vous avez configuré l’authentification unique, vous pouvez toujours y accéder à partir des paramètres de votre entreprise.



{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. Sous{% ifversion oidc-for-emu %} soit{% endif %} « Exiger l’authentification SAML »{% ifversion oidc-for-emu %} ou « Exiger l’authentification OIDC »{% endif %}, cliquez sur **Enregistrer vos codes de récupération**. {% ifversion oidc-for-emu %} {% note %}
  
  **Remarque :** L’authentification unique OIDC est disponible uniquement pour {% data variables.product.prodname_emus %}. Pour plus d’informations, consultez « [À propos des utilisateurs d’entreprise managés](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users) ».
  
  {% endnote %}{% endif %}
  
  ![Capture d’écran du bouton pour tester la configuration SAML avant de l’appliquer](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. Pour enregistrer vos codes de récupération, cliquez sur **Télécharger**, **Imprimer** ou **Copier**.
  ![Capture d’écran des boutons pour télécharger, imprimer ou copier vos codes de récupération](/assets/images/help/saml/saml_recovery_code_options.png)
