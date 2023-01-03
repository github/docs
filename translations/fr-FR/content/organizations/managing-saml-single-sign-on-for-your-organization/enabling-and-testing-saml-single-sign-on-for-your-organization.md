---
title: Activation et test de l’authentification unique SAML pour votre organisation
intro: Les propriétaires et administrateurs de l’organisation peuvent activer l’authentification unique SAML pour ajouter une couche supplémentaire de sécurité à leur organisation.
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enable & test SAML SSO
ms.openlocfilehash: cbdf8c92ca61f9836876c34ae9dd3b9be0cd7ee4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184058'
---
## À propos de l’authentification unique SAML

Vous pouvez activer l’authentification unique SAML dans votre organisation sans exiger de tous les membres qu’ils l’utilisent. Activer sans l’appliquer l’authentification unique SAML dans votre organisation peut faciliter l’adoption de l’authentification unique SAML au sein de votre organisation. Une fois qu’une majorité des membres de votre organisation utilisent l’authentification unique SAML, vous pouvez l’appliquer au sein de votre organisation.

{% data reusables.saml.ghec-only %}

Si vous activez sans l’appliquer l’authentification unique SAML, les membres de l’organisation qui choisissent de ne pas l’utiliser peuvent rester membres de l’organisation. Pour plus d’informations sur l’application de l’authentification unique SAML, consultez « [Application de l’authentification unique SAML pour votre organisation](/articles/enforcing-saml-single-sign-on-for-your-organization) ».

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

## Activation et test de l’authentification unique SAML pour votre organisation

Avant d’appliquer l’authentification unique SAML dans votre organisation, assurez-vous que vous avez préparé celle-ci. Pour plus d’informations, consultez « [Préparation à l’application de l’authentification unique SAML dans votre organisation](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization) ».

Pour plus d’informations sur les fournisseurs d’identité (IDP) que {% data variables.product.company_short %} prend en charge pour l’authentification unique SAML, consultez « [Connexion de votre fournisseur d’identité à votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization) ».

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. Sous « Authentification unique SAML », sélectionnez **Activer l’authentification SAML**.
![Case à cocher pour activer l’authentification unique SAML](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **Remarque :** après avoir activé l’authentification unique SAML, vous pouvez télécharger vos codes de récupération d’authentification unique afin de pouvoir accéder à votre organisation même si votre fournisseur d’identité est indisponible. Pour plus d’informations, consultez « [Téléchargement des codes de récupération d’authentification unique SAML de votre organisation](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes) ».

  {% endnote %}

6. Dans le champ « URL d’authentification », tapez le point de terminaison HTTP de votre fournisseur d’identité pour les demandes d’authentification unique. Cette valeur est disponible dans votre configuration de fournisseur d’identité.
![Champ de l’URL vers laquelle les membres seront transférés au moment de la connexion](/assets/images/help/saml/saml_sign_on_url.png)
7. Dans le champ « Émetteur », tapez éventuellement le nom de votre émetteur SAML. Cela vérifie l’authenticité des messages envoyés.
![Champ du nom de l’émetteur SAML](/assets/images/help/saml/saml_issuer.png)
8. Sous « Certificat public », collez un certificat pour vérifier les réponses SAML.
![Champ du certificat public de votre fournisseur d’identité](/assets/images/help/saml/saml_public_certificate.png)
9. Cliquez sur {% octicon "pencil" aria-label="The edit icon" %}, puis, dans les listes déroulantes Méthode de signature et Méthode Digest, choisissez l’algorithme de hachage que votre émetteur SAML utilise pour vérifier l’intégrité des demandes.
![Listes déroulantes pour les algorithmes de hachage des méthodes de signature et Digest utilisés par votre émetteur SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Avant d’activer l’authentification unique SAML pour votre organisation, cliquez sur **Tester la configuration SAML** pour vous assurer que les informations que vous avez entrées sont correctes. ![Bouton pour tester la configuration SAML avant de l’appliquer](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **Conseil :** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. Pour appliquer l’authentification unique SAML et supprimer tous les membres de l’organisation qui n’ont pas été authentifiés via votre fournisseur d’identité, sélectionnez **Exiger l’authentification SSO SAML pour tous les membres de l’organisation _nom de l’organisation_**. Pour plus d’informations sur l’application de l’authentification unique SAML, consultez « [Application de l’authentification unique SAML pour votre organisation](/articles/enforcing-saml-single-sign-on-for-your-organization) ».
![Case à cocher pour exiger l’authentification unique SAML pour votre organisation ](/assets/images/help/saml/saml_require_saml_sso.png)
12. Cliquez sur **Enregistrer**.
![Bouton pour enregistrer les paramètres de SSO SAML](/assets/images/help/saml/saml_save.png)

## Pour aller plus loin

- « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on) »
- « [Référence de configuration SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference) »
