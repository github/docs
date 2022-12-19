---
title: Téléchargement des codes de récupération d’authentification unique SAML de votre organisation
intro: 'Les administrateurs de l’organisation doivent télécharger les codes de récupération d’authentification unique SAML de leur organisation pour s’assurer qu’ils peuvent accéder à {% data variables.product.product_name %} même si le fournisseur d’identité pour l’organisation n’est pas disponible.'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Download SAML recovery codes
ms.openlocfilehash: 9b17e3e4fc20cc9eaedf59afe45e393054d7d8e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109429'
---
Les codes de récupération ne doivent pas être partagés ni distribués. Nous vous recommandons de les enregistrer à l’aide d’un gestionnaire de mots de passe comme [LastPass](https://lastpass.com/) ou [1Password](https://1password.com/).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. Sous « Authentification unique SAML », dans la note relative aux codes de récupération, cliquez sur **Enregistrer vos codes de récupération**.
![Lien pour afficher et enregistrer vos codes de récupération](/assets/images/help/saml/saml_recovery_codes.png)
6. Enregistrez vos codes de récupération en cliquant sur **Télécharger**, **Imprimer** ou **Copier**.
![Capture d’écran des boutons pour télécharger, imprimer ou copier vos codes de récupération](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **Remarque :** vos codes de récupération vous aident à revenir aux données {% data variables.product.product_name %} si votre fournisseur d’identité n’est pas disponible. Si vous générez de nouveaux codes de récupération, les codes de récupération affichés dans la page « Codes de récupération d’authentification unique » sont automatiquement mis à jour.

  {% endnote %}

7. Quand vous avez utilisé un code de récupération pour récupérer l’accès à {% data variables.product.product_name %}, il ne peut plus être réutilisé. L’accès à {% data variables.product.product_name %} est disponible uniquement pendant 24 heures avant que vous soyez invité à vous connecter à l’aide de l’authentification unique.

## Pour aller plus loin

- « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on) »
- « [Accès à votre organisation si votre fournisseur d’identité est indisponible »](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)
