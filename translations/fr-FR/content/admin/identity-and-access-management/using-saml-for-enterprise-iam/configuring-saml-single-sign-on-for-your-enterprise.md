---
title: Configuration d’une authentification unique (SSO) SAML pour votre entreprise
shortTitle: Configure SAML SSO
intro: 'Vous pouvez contrôler et sécuriser l’accès aux {% ifversion ghec %}ressources comme les référentiels, les problèmes et les demandes de tirage au sein des organisations de votre entreprise{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}votre entreprise sur {% data variables.product.prodname_ghe_managed %}{% endif %} en {% ifversion ghec %}appliquant{% elsif ghes or ghae %}la configuration{% endif %} de l’authentification unique (SSO) SAML par le biais de votre fournisseur d’identité (IdP).'
permissions: '{% ifversion ghes %}Site administrators{% elsif ghec or ghae %}Enterprise owners{% endif %} can configure SAML SSO for {% ifversion ghec or ghae %}an enterprise on {% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.product_name %} instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
ms.openlocfilehash: 804ba3b262aae15b862e1a14694b82339c8d34a4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183955'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## À propos de SSO SAML

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

Pour plus d’informations, consultez « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on) ».

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Pour plus d’informations, consultez « [Affichage et gestion de l’accès SAML d’un utilisateur à votre compte d’entreprise](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise) ».

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

{% elsif ghes or ghae %}

L’authentification unique SAML vous permet de contrôler et de sécuriser de manière centralisée l’accès à {% data variables.location.product_location %} à partir de votre fournisseur d’identité SAML. Quand un utilisateur non authentifié accède à {% data variables.location.product_location %} dans un navigateur, {% data variables.product.product_name %} redirige l’utilisateur vers votre fournisseur d’identité SAML pour l’authentification. Une fois que l’utilisateur s’est authentifié avec un compte sur le fournisseur d’identité, celui-ci redirige l’utilisateur vers {% data variables.location.product_location %}. {% data variables.product.product_name %} valide la réponse de votre IdP, puis accorde l’accès à l’utilisateur.

Une fois qu’un utilisateur s’est authentifié correctement sur votre fournisseur d’identité, la session SAML de l’utilisateur pour {% data variables.location.product_location %} est active dans le navigateur pendant 24 heures. Après 24 heures, l’utilisateur doit s’authentifier à nouveau auprès de votre fournisseur d’identité.

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Pour plus d’informations, consultez « [Configuration de l’approvisionnement d’utilisateurs pour votre entreprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise) ».

{% endif %}

{% endif %}

## Fournisseurs d’identité pris en charge

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Considérations relatives aux noms d’utilisateur avec SAML

{% ifversion ghec %}Si vous utilisez {% data variables.product.prodname_emus %}, {% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Pour plus d’informations, consultez « [Considérations relatives au nom d’utilisateur pour une authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication) ».

## Application d’une authentification unique SAML pour les organisations dans votre compte d’entreprise

Lorsque vous appliquez une authentification unique SAML pour votre entreprise, la configuration de l’entreprise remplace toutes les configurations SAML existantes au niveau de l’organisation. {% data reusables.saml.switching-from-org-to-enterprise %} Pour plus d’informations, consultez « [Basculement de votre configuration SAML d’une organisation vers un compte d’entreprise](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account) ».

Lorsque vous appliquez une authentification unique SAML pour une organisation, {% data variables.product.company_short %} supprime tous les membres de l’organisation qui ne se sont pas authentifiés avec succès auprès votre fournisseur d’identité SAML. Lorsque vous avez besoin d’une SSO SAML pour votre entreprise, {% data variables.product.company_short %} ne supprime pas les membres de l’entreprise qui ne se sont pas authentifiés avec succès auprès de votre fournisseur d’identité SAML. La prochaine fois qu’un membre accédera aux ressources de l’entreprise, il devra s’authentifier auprès de votre fournisseur d’identité SAML.

Pour plus d’informations sur l’activation de SAML à l’aide d’Okta, consultez « [Configuration de l’authentification unique SAML pour votre compte d’entreprise à l’aide d’Okta](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Sous « Authentification unique SAML », sélectionnez **Exiger l’authentification SAML**.
  ![Case à cocher pour activer l’authentification unique SAML](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. Dans le champ **URL d’authentification**, tapez le point de terminaison HTTP de votre fournisseur d’identité pour les demandes d’authentification unique. Cette valeur est disponible dans votre configuration de fournisseur d’identité.
![Champ de l’URL vers laquelle les membres seront transférés au moment de la connexion](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Si vous le souhaitez, dans le champ **Émetteur**, tapez l’URL de votre émetteur SAML pour vérifier l’authenticité des messages envoyés.
![Champ du nom de l’émetteur SAML](/assets/images/help/saml/saml_issuer.png)
8. Sous **Certificat public**, collez un certificat pour vérifier les réponses SAML.
![Champ du certificat public de votre fournisseur d’identité](/assets/images/help/saml/saml_public_certificate.png)
9. Pour vérifier l’intégrité des demandes de votre émetteur SAML, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}. Ensuite, dans les listes déroulantes « Méthode de signature » et « Méthode Digest », choisissez l’algorithme de hachage utilisé par votre émetteur SAML.
![Listes déroulantes pour les algorithmes de hachage des méthodes de signature et Digest utilisés par votre émetteur SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Avant d’activer une SSO SAML pour votre entreprise, cliquez sur **Tester la configuration SAML** pour vous assurer que les informations que vous avez entrées sont correctes. ![Bouton pour tester la configuration SAML avant de l’appliquer](/assets/images/help/saml/saml_test.png)
11. Cliquez sur **Enregistrer**.
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## Configuration d’une SSO SAML

Vous pouvez activer ou désactiver l’authentification SAML pour {% data variables.location.product_location %} ou modifier une configuration existante. Vous pouvez afficher et modifier les paramètres d’authentification pour {% data variables.product.product_name %} dans la console de gestion. Pour plus d’informations, consultez « [Accès à la console de gestion](/admin/configuration/configuring-your-enterprise/accessing-the-management-console) ».

{% note %}

**Remarque** : {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Sélectionnez **SAML**.
   
   ![Capture d’écran de l’option permettant d’activer l’authentification SAML dans la console de gestion](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Capture d’écran de l’option permettant d’activer l’authentification intégrée en dehors de l’IdP SAML](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Vous pouvez éventuellement activer l’authentification SSO de réponse non sollicitée en sélectionnant **Authentification unique initiée par le fournisseur d’identité**. Par défaut, {% data variables.product.prodname_ghe_server %} répond à une demande non sollicitée initiée par un fournisseur d’identité par un `AuthnRequest` retourné à ce dernier.

   ![Capture d’écran de l’option permettant d’activer la réponse non sollicitée initiée par le fournisseur d’identité](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Remarque** : Nous vous recommandons de laisser cette valeur **non sélectionnée**. Cette fonctionnalité doit être activée **uniquement** dans le rare cas où votre implémentation SAML ne prend pas en charge l’authentification unique initiée par le fournisseur de services, et quand cela vous a été conseillé par le {% data variables.contact.enterprise_support %}.

   {% endtip %}

1. Sélectionnez **Désactiver la rétrogradation/promotion de l’administrateur** si vous **ne souhaitez pas** que votre fournisseur SAML détermine les droits d’administrateur pour les utilisateurs de {% data variables.location.product_location %}.

   ![Capture d’écran de l’option pour la prise en compte de l’attribut « administrator » de l’IdP afin d’activer ou de désactiver les droits d’administration](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png) {%- ifversion ghes > 3.3 %}
1. Si vous le souhaitez, pour autoriser {% data variables.location.product_location %} à recevoir des assertions chiffrées de votre IdP SAML, sélectionnez **Exiger des assertions chiffrées**. Vous devez vérifier que votre IdP prend en charge les assertions chiffrées et que les méthodes de chiffrement et de transport de clés dans la console de gestion correspondent aux valeurs configurées au niveau de votre IdP. Vous devez également fournir le certificat public de {% data variables.location.product_location %} à votre IdP. Pour plus d’informations, consultez « [Activation des assertions chiffrées](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions) ».

   ![Capture d’écran de la case à cocher « Activer les assertions chiffrées » dans la section « Authentification » de la console de gestion](/assets/images/help/saml/management-console-enable-encrypted-assertions.png) {%- endif %}
1. Dans le champ **URL de l’authentification unique**, tapez le point de terminaison HTTP ou HTTPS au niveau de votre IdP pour les demandes d’authentification unique. Cette valeur est fournie par la configuration de votre IdP. Si l’hôte est disponible uniquement à partir de votre réseau interne, vous devez peut-être [configurer {% data variables.location.product_location %} pour utiliser des serveurs de noms internes](/enterprise/admin/guides/installation/configuring-dns-nameservers/).

   ![Capture d’écran du champ de texte pour l’URL d’authentification unique](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. Dans le champ **Émetteur**, tapez éventuellement le nom de votre émetteur SAML. Cette action permet de vérifier l’authenticité des messages envoyés à {% data variables.location.product_location %}.

   ![Capture d’écran du champ de texte pour l’URL de l’émetteur SAML](/assets/images/enterprise/management-console/saml-issuer.png)
1. Dans les menus déroulants **Méthode de signature** et **Méthode de synthèse**, choisissez l’algorithme de hachage utilisé par votre émetteur SAML pour vérifier l’intégrité des requêtes provenant de {% data variables.location.product_location %}. Spécifiez le format via le menu déroulant **Format de l’identificateur de nom**.

   ![Capture d’écran des menus déroulants permettant de sélectionner la méthode de signature et la méthode digest](/assets/images/enterprise/management-console/saml-method.png)
1. Sous **Certificat de vérification**, cliquez sur **Choisir un fichier** et choisissez un certificat pour valider les réponses SAML de l’IdP.

   ![Capture d’écran du bouton permettant de charger un certificat de validation de l’IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. Modifiez les noms d’attributs SAML pour les faire correspondre à votre IdP si nécessaire, ou acceptez les noms par défaut.

   ![Capture d’écran des champs de saisie des attributs SAML supplémentaires](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## Activation d’une SSO SAML

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Les fournisseurs d’identité suivants fournissent de la documentation sur la configuration d’une SSO SAML pour {% data variables.product.product_name %}. Si votre fournisseur d’identité n’est pas répertorié, contactez votre fournisseur d’identité pour demander un support pour {% data variables.product.product_name %}.

 | Fournisseur d’identité | Plus d’informations |
 | :- | :- |
 | Azure AD | « [Configuration de l’authentification et de l’approvisionnement pour votre entreprise à l’aide d’Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad) » |
| Okta | « [Configuration de l’authentification et de l’approvisionnement pour votre entreprise à l’aide d’Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta) » |

Lors de l’initialisation de {% data variables.product.product_name %}, vous devez configurer {% data variables.product.product_name %} en tant que fournisseur de services SAML sur votre fournisseur d’identité. Vous devez entrer quelques valeurs uniques sur votre fournisseur d’identité pour configurer {% data variables.product.product_name %} comme fournisseur de services valide. Pour plus d’informations, consultez la « [Référence de configuration SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata) ».

## Modification de la configuration de la SSO SAML

Si les détails de votre fournisseur d’identité changent, vous devez modifier la configuration de l’authentification unique SAML pour {% data variables.location.product_location %}. Par exemple, si le certificat de votre fournisseur d’identité expire, vous pouvez modifier la valeur du certificat public.

{% ifversion ghae %}

{% note %}

**Remarque** : {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %} 

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Sous « Authentification unique SAML », tapez les nouveaux détails de votre fournisseur d’identité.
  ![Champs d’entrée de texte avec les détails du fournisseur d’identité pour la configuration d’une SSO SAML pour une entreprise](/assets/images/help/saml/ae-edit-idp-details.png)
1. Si vous le souhaitez, cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour configurer une nouvelle signature ou une méthode Digest.
  ![Icône Modifier pour modifier la signature et la méthode Digest](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - Utilisez les menus déroulants et choisissez la nouvelle signature ou la méthode Digest.
      ![Menus déroulants pour choisir une nouvelle signature ou une méthode Digest](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. Pour vérifier que les informations que vous avez entrées sont correctes, cliquez sur **Tester la configuration SAML**.
  ![Bouton « Tester la configuration SAML »](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. Cliquez sur **Enregistrer**.
    ![Bouton « Enregistrer » pour la configuration d’une SSO SAML](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. Si vous le souhaitez, pour provisionner et déprovisionner automatiquement des comptes d’utilisateur pour {% data variables.location.product_location %}, reconfigurez l’attribution d’utilisateurs avec SCIM. Pour plus d’informations, consultez « [Configuration de l’approvisionnement d’utilisateurs pour votre entreprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise) ».

{% endif %}

{% ifversion ghae %}

## Activation d’une SSO SAML

{% warning %}

**Avertissement** : si vous désactivez l’authentification unique SAML pour {% data variables.location.product_location %}, les utilisateurs sans session d’authentification unique SAML existante ne peuvent pas se connecter à {% data variables.location.product_location %}. Les sessions SSO SAML sur {% data variables.location.product_location %} se terminent au bout de 24 heures.

{% endwarning %}

{% note %}

**Remarque** : {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Sous « Authentification unique SAML », désactivez **Activer l’authentification SAML**.
  ![Case à cocher pour « Activer l’authentification SAML »](/assets/images/help/saml/ae-saml-disabled.png)
1. Pour désactiver la SSO SAML et exiger une connexion avec le compte d’utilisateur intégré que vous avez créé lors de l’initialisation, cliquez sur **Enregistrer**.
    ![Bouton « Enregistrer » pour la configuration d’une SSO SAML](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}

{% ifversion ghec or ghes %}

## Pour aller plus loin

{%- ifversion ghec %}
- « [Gestion de l’authentification unique SAML pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization) » {%- endif %} {%- ifversion ghes %}
- « [Promotion ou rétrogradation d’un administrateur de site](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator) » {%- endif %}

{% endif %}
