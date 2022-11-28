---
title: Initialisation de GitHub AE
intro: 'Pour préparer votre entreprise, vous pouvez effectuer la configuration initiale de {% data variables.product.product_name %}.'
versions:
  ghae: '*'
type: how_to
topics:
  - Enterprise
redirect_from:
  - /admin/configuration/initializing-github-ae
  - /enterprise-server@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae
ms.openlocfilehash: a3c32a770bbf58be3589824302fe3a32be0e239a
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167051'
---
## À propos de l’initialisation

Avant de pouvoir initialiser votre entreprise, vous devez acheter {% data variables.product.product_name %}. Pour plus d’informations, contactez l’{% data variables.contact.contact_enterprise_sales %}.

{% data reusables.github-ae.initialize-enterprise %} Vérifiez que les informations que vous fournissez correspondent aux informations du propriétaire de l’entreprise voulues dans le fournisseur d’identité. Pour plus d’informations sur les propriétaires d’entreprise, consultez « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner) ».

{% note %}

**Remarques**:

- Si le mot de passe initial de {% data variables.product.prodname_ghe_managed %} expire avant la fin de l’initialisation, vous pouvez demander une réinitialisation de mot de passe à tout moment à partir de l’e-mail d’invitation.

- Stockez le nom d’utilisateur et le mot de passe initial de {% data variables.product.prodname_ghe_managed %} de manière sécurisée dans un gestionnaire de mots de passe. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

Pendant l’initialisation, le propriétaire de l’entreprise nomme votre entreprise, configure l’authentification unique SAML, crée des stratégies pour toutes les organisations de votre entreprise et configure un contact de support pour vos utilisateurs.

## Prérequis

Pour commencer l’initialisation, vous recevrez un e-mail d’invitation de {% data variables.product.company_short %}. Avant de configurer {% data variables.product.prodname_ghe_managed %}, passez en revue les prérequis suivants.


Pour initialiser {% data variables.location.product_location %}, vous devez disposer d’un fournisseur d’identité SAML. {% data reusables.saml.ae-uses-saml-sso %} Pour connecter votre IdP à votre entreprise durant l’initialisation, vous devez disposer de l’URL de l’ID d’entité (SSO) de votre fournisseur d’identité, de l’URL de l’ID d’émetteur et du certificat de signature publique (codé en Base64). Pour plus d’informations, consultez « [À propos de la gestion des identités et des accès pour votre entreprise](/admin/authentication/about-identity-and-access-management-for-your-enterprise) ».

{% note %}

**Remarque** : {% data reusables.saml.create-a-machine-user %}

{% endnote %}

## Connexion et désignation de votre entreprise

1. Suivez les instructions fournies dans votre e-mail de bienvenue pour accéder à votre entreprise.
2. Tapez vos informations d’identification sous « Changer de mot de passe », puis cliquez sur **Changer de mot de passe**.
3. Sous « Quel nom voulez-vous donner à votre compte d’entreprise ? », tapez le nom de l’entreprise, puis cliquez sur **Enregistrer et continuer**.
  ![Bouton « Enregistrer et continuer » pour nommer une entreprise](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

## Connexion de votre IdP à votre entreprise

Pour configurer l’authentification pour {% data variables.product.product_name %}, vous devez fournir à {% data variables.product.product_name %} les détails de votre IdP SAML. {% data variables.product.company_short %} recommande d’utiliser Azure AD comme IdP. Pour plus d’informations, consultez « [Configuration de l’authentification et du provisionnement avec votre fournisseur d’identité](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider) ».

1. À droite de « Configurer votre fournisseur d’identité », cliquez sur **Configurer**.
  ![Bouton « Configurer » pour la configuration de l’IdP](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. Sous « URL de connexion », copiez et collez l’URL de votre IdP SAML.
  ![Champ de texte pour l’URL de connexion de l’IdP SAML](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. Sous « Émetteur », copiez et collez l’URL d’émetteur de IdP SAML.
  ![Champ de texte pour l’URL d’émetteur de l’IdP SAML](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. Sous « Certificat public », copiez et collez le certificat public de votre IdP SAML.
  ![Champ de texte pour le certificat public du fournisseur d’identité SAML](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. Cliquez sur **Tester la configuration SAML** pour vérifier que les informations que vous avez entrées sont correctes.
  ![Bouton « Tester la configuration SAML »](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. Cliquez sur **Enregistrer**.
  ![Bouton « Enregistrer » pour la configuration de l’IdP](/assets/images/enterprise/configuration/ae-save.png)
1. {% data reusables.saml.assert-the-administrator-attribute %}

## Définition de vos stratégies d’entreprise

La configuration de stratégies vous permet de définir des limites dans la gestion des dépôts et des organisations de votre entreprise. Elles peuvent être reconfigurées après le processus d’initialisation.

1. À droite de « Définir vos stratégies d’entreprise », cliquez sur **Configurer**.
  ![Bouton « Configurer » pour la configuration de stratégies](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. Sous « Autorisations de dépôt par défaut », utilisez le menu déroulant et cliquez sur un niveau d’autorisation par défaut pour les dépôts de votre entreprise. Si une personne dispose de plusieurs voies d’accès à une organisation, à titre individuel, par équipe ou en tant que membre d’organisation, le niveau d’autorisation le plus élevé remplace tous les niveaux d’autorisation inférieurs. Pour permettre à des organisations au sein de votre entreprise de définir leurs autorisations de dépôt par défaut, cliquez sur **Aucune stratégie**
  ![Menu déroulant des options d’autorisations de dépôt par défaut](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png)
3. Sous « Création de dépôt », indiquez si vous souhaitez autoriser les membres à créer des dépôts. Pour autoriser des organisations au sein de votre entreprise de définir des autorisations, cliquez sur **Aucune stratégie**.
  ![Bouton « Les membres peuvent créer des dépôts » pour la configuration de stratégies d’entreprise](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. Sous « Duplication (fork) de dépôt », indiquez si vous autorisez la duplication (fork) des dépôts privés et internes. Pour permettre à des organisations au sein de votre entreprise de définir des autorisations, cliquez sur **Aucune stratégie**
  ![Menu déroulant des options d’autorisations de duplication (fork) de dépôt](/assets/images/enterprise/configuration/ae-repository-forking-menu.png)
5. Sous « Invitations de dépôt », indiquez si les membres ou les propriétaires d’organisation peuvent inviter des collaborateurs dans des dépôts. Pour permettre à des organisations au sein de votre entreprise de définir des autorisations, cliquez sur **Aucune stratégie**
  ![Menu déroulant des options d’autorisations d’invitation de dépôt](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png)
6. Sous « Visibilité de dépôt par défaut », utilisez le menu déroulant et cliquez sur le paramètre de visibilité par défaut pour les nouveaux dépôts.
  ![Menu déroulant des options de visibilité de dépôt par défaut](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. Sous « Les utilisateurs peuvent créer des organisations », utilisez le menu déroulant pour activer ou désactiver l’accès à la création d’organisations pour les membres de l’entreprise.
  ![Menu déroulant des options d’autorisations de création de dépôt](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. Sous « Envois (push) forcés », utilisez le menu déroulant et choisissez d’autoriser ou de bloquer les envois (push) forcés.
  ![Menu déroulant des options de configuration des envois (push) forcés](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. Sous « Accès SSH Git », utilisez le menu déroulant et choisissez d’activer ou non l’accès SSH Git pour tous les dépôts de l’entreprise.
  ![Menu déroulant des options d’accès SSH Git](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. Cliquez sur **Enregistrer**
  ![Bouton « Enregistrer » pour la configuration des stratégies d’entreprise](/assets/images/enterprise/configuration/ae-save.png)
11. Pour réinitialiser toutes les sélections, cliquez sur « Réinitialiser les stratégies par défaut ».
  ![Lien pour réinitialiser toutes les stratégies par défaut](/assets/images/enterprise/configuration/ae-reset-default-options.png)

## Définition du mode de contact de votre support interne

Vous pouvez configurer la méthode que devront employer vos utilisateurs pour contacter votre équipe de support interne. Elle peut être reconfigurée après le processus d’initialisation.

1. À droite de « Contact de support interne », cliquez sur **Configurer**.
  ![Bouton « Configurer » pour la configuration du contact de support interne](/assets/images/enterprise/configuration/ae-support-configure.png)
2. Sous « Contact de support interne », sélectionnez la méthode qui devront employer les utilisateurs de votre entreprise pour contacter le support (URL ou adresse e-mail). Tapez ensuite les informations de contact du support.
  ![Champ de texte pour l’URL de contact du support interne](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. Cliquez sur **Enregistrer**.
  ![Bouton « Enregistrer » pour la configuration du mode de contact du support de l’entreprise](/assets/images/enterprise/configuration/ae-save.png)

## Définition de vos paramètres d’e-mail

Une fois l’initialisation terminée, vous pouvez reconfigurer tous les paramètres après le processus d’initialisation. Pour plus d’informations, consultez « [Configuration de l’e-mail pour les notifications](/admin/configuration/configuring-email-for-notifications) ».

1. À droite de « Configurer les paramètres d’e-mail », cliquez sur **Configurer**.
  ![Bouton « Configurer » pour la configuration des paramètres d’e-mail](/assets/images/enterprise/configuration/ae-email-configure.png)
2. Sélectionnez **Activer l’e-mail**. Cela active les e-mails sortants et entrants, mais pour que les e-mails entrants fonctionnent, vous devez aussi configurer vos paramètres DNS. Pour plus d’informations, consultez « [Configuration des paramètres DNS et de pare-feu pour autoriser les e-mails entrants](/admin/configuration/configuring-email-for-notifications#configuring-dns-and-firewall-settings-to-allow-incoming-emails) ».
 ![Case à cocher « Activer » pour la configuration des paramètres d’e-mail](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Renseignez les paramètres de votre serveur de messagerie :
    - Dans le champ **Adresse du serveur**, tapez l’adresse de votre serveur SMTP.
    - Dans le champ **Port**, tapez le port utilisé par votre serveur SMTP pour l’envoi d’e-mail.
    - Dans le champ **Domaine**, tapez le nom de domaine que votre serveur SMTP enverra avec une réponse HELO, le cas échéant.
    - Dans la liste déroulante **Authentification**, choisissez le type de chiffrement utilisé par votre serveur SMTP.
    - Dans le champ **Adresse e-mail sans réponse**, tapez l’adresse e-mail à utiliser dans les champs De et À pour tous les e-mails de notification.

4. Si vous souhaitez ignorer tous les e-mails entrants qui sont adressés à l’adresse e-mail sans réponse, sélectionnez **Ignorer les e-mails adressés à l’adresse e-mail sans réponse**.
  ![Case à cocher « Ignorer » pour la configuration des paramètres d’e-mail](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Cliquez sur **Tester les paramètres d’e-mail**.
  ![Bouton « Tester les paramètres d’e-mail » pour la configuration des paramètres d’e-mail](/assets/images/enterprise/configuration/ae-test-email.png)
6. Sous « Envoyer un e-mail de test à », tapez l’adresse e-mail à laquelle vous souhaitez envoyer un e-mail de test, puis cliquez sur **Envoyer l’e-mail de test**.
  ![Bouton « Envoyer un e-mail de test » pour la configuration des paramètres d’e-mail](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Cliquez sur **Enregistrer**.
  ![Bouton « Enregistrer » pour la configuration du mode de contact du support de l’entreprise](/assets/images/enterprise/configuration/ae-save.png)
