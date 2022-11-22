---
ms.openlocfilehash: e26318e1b0d86ee5ec0c486ccaba4f7dbb8e2ed9
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/16/2022
ms.locfileid: "148167083"
---
Para convertir a una persona en propietario de la empresa, debes delegar el permiso de propiedad en tu IdP. Si usas Azure AD y SCIM, asigna el rol de propietario de empresa al usuario. Para otros proveedores de identidades, incluye el atributo `administrator` en la aserción de SAML para la cuenta de usuario en el IdP con el valor de `true`. Para obtener más información sobre los propietarios de empresas, consulta "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)". Para más información sobre la autenticación y el aprovisionamiento mediante Azure AD, consulta: "[Configuración de la autenticación y el aprovisionamiento para la empresa mediante Azure AD](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)."
