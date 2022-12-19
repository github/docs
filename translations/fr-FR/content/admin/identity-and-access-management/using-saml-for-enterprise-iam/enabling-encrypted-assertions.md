---
title: Activation des assertions chiffrées
shortTitle: Enable encrypted assertions
intro: 'Vous pouvez améliorer la sécurité de {% data variables.product.product_location %} avec l’authentification unique SAML en chiffrant les messages envoyés par votre fournisseur d’identité (IdP) SAML.'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
ms.openlocfilehash: ecb60a4398993155fa7498f26e7628660e88e54a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063777'
---
## À propos des assertions chiffrées

Si votre IdP prend en charge le chiffrement des assertions, vous pouvez configurer des assertions chiffrées sur {% data variables.product.product_name %} pour renforcer la sécurité durant le processus d’authentification.

## Prérequis

Pour activer les assertions chiffrées pour l’authentification sur {% data variables.product.product_name %}, vous devez configurer l’authentification SAML, et votre fournisseur d’identité doit prendre en charge les assertions chiffrées.

## Activation des assertions chiffrées

Pour activer les assertions chiffrées, vous devez fournir le certificat public de {% data variables.product.product_location %} à votre IdP et configurer les paramètres de chiffrement correspondant à votre IdP.

{% note %}

**Remarque** : {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. Si vous le souhaitez, activez le débogage SAML. Le débogage SAML enregistre des entrées détaillées dans le journal d’authentification de {% data variables.product.product_name %} et peut vous aider à résoudre les tentatives d’authentification avortées. Pour plus d’informations, consultez « [Résolution des problèmes d’authentification SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging) ».
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Sélectionnez **Exiger des assertions chiffrées**.

   ![Capture d’écran de la case à cocher « Activer les assertions chiffrées » dans la section « Authentification » de la console de gestion](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. À droite de « Certificat de chiffrement », cliquez sur **Télécharger** pour enregistrer une copie du certificat public de {% data variables.product.product_location %} sur votre ordinateur local.

   ![Capture d’écran du bouton « Télécharger » de certificat public pour les assertions chiffrées](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. Connectez-vous à votre IdP SAML en tant qu’administrateur.
1. Dans l’application de {% data variables.product.product_location %}, activez les assertions chiffrées.
   - Notez la méthode de chiffrement et la méthode de transport de clés.
   - Fournissez le certificat public que vous avez téléchargé à l’étape 7.
1. Revenez à la console de gestion sur {% data variables.product.product_location %}.
1. À droite de « Méthode de chiffrement », sélectionnez la méthode de chiffrement de votre IdP notée à l’étape 9.

   ![Capture d’écran de « Méthode de chiffrement » pour les assertions chiffrées](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. À droite de « Méthode de transport de clés », sélectionnez la méthode de transport de clés de votre IdP notée à l’étape 9.

   ![Capture d’écran de « Méthode de transport de clé » pour les assertions chiffrées](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Cliquez sur **Enregistrer les paramètres**.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

Si vous avez activé le débogage SAML pour tester l’authentification avec des assertions chiffrées, désactivez le débogage SAML une fois que vous avez terminé le test. Pour plus d’informations, consultez « [Résolution des problèmes d’authentification SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging) ».
