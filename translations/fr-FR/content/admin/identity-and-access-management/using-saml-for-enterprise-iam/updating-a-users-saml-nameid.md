---
title: Mise à jour du paramètre NameID SAML d’un utilisateur
shortTitle: Update SAML NameID
intro: 'Quand le `NameID` d’un compte change au niveau de votre fournisseur d’identité (IdP) et que la personne ne peut plus {% ifversion ghes or ghae %}se connecter à {% data variables.product.product_location %}{% elsif ghec %}s’authentifier pour accéder aux ressources de votre entreprise{% endif %}, vous devez {% ifversion ghec %}contacter {% data variables.product.company_short %} le support ou révoquer l’identité liée de la personne{% elsif ghes %}mettre à jour le mappage de `NameID` sur {% data variables.product.product_location %}{% elsif ghae %}contacter {% data variables.product.company_short %} le support{% endif %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 7a151143219fc0885861beedb69a2608983c5588
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717900'
---
## À propos des mises à jour du paramètre `NameID` SAML des utilisateurs

Dans certains cas, vous pouvez être amené à mettre à jour les valeurs associées au compte d’une personne sur votre fournisseur d’identité SAML. Si cet identificateur est également le paramètre `NameID` que vous utilisez pour l’authentification sur {% data variables.product.product_name %}, vous devez mettre à jour le mappage de `NameID` sur votre instance afin que la personne puisse continuer à s’authentifier correctement. Pour plus d’informations, consultez « [Considérations relatives au nom d’utilisateur pour l’authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication) ».

## Mise à jour du `NameID` SAML d’un utilisateur

Les propriétaires d’entreprise peuvent mettre à jour un paramètre `NameID` SAML d’un utilisateur sur une instance {% data variables.product.product_name %}.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Dans la barre latéral de gauche, cliquez sur **Tous les utilisateurs**.
  ![Élément « Tous les utilisateurs » dans les paramètres d’administrateur de site de la barre latérale](/assets/images/enterprise/site-admin-settings/all-users.png)
3. Dans la liste des utilisateurs, cliquez sur le nom d’utilisateur pour lequel vous souhaitez mettre à jour le mappage de `NameID`.
  ![Nom d’utilisateur dans la liste des comptes d’utilisateurs de l’instance](/assets/images/enterprise/site-admin-settings/all-users-click-username.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
5. À droite de « Mettre à jour le NameID SAML », cliquez sur **Modifier**.
  ![Bouton « Modifier » sous « Authentification SAML » et à droite de « Mettre à jour le NameID SAML »](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. Dans le champ « NameID », tapez le nouveau `NameID` de l’utilisateur.
  ![Champ « NameID » dans la boîte de dialogue modale avec le NameID tapé](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Cliquez sur **Mettre à jour le NameID**.
  ![Bouton « Mettre à jour le NameID » sous la valeur mise à jour du NameID dans la boîte de dialogue modale](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
