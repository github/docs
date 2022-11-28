---
ms.openlocfilehash: bc73b3b92f131cf0af80606a2650ac5ce898055e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876984"
---
Avant d’activer la synchronisation d’équipe pour Okta, vous ou l’administrateur de votre fournisseur d’identité devez :

- Configurer l’authentification unique SAML et l’intégration SCIM pour votre organisation à l’aide d’Okta. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML et de SCIM à l’aide d’Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta) ».
- Fournir l’URL du locataire pour votre instance Okta.
- Générer un jeton SSWS valide avec des autorisations d’administrateur en lecture seule pour votre installation d’Okta en tant qu’utilisateur du service. Pour plus d’informations, consultez [Créer le jeton](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) et [Utilisateurs du service](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/service-users.htm) dans la documentation Okta.
