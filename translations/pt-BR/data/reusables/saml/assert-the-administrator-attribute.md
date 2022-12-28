---
ms.openlocfilehash: e26318e1b0d86ee5ec0c486ccaba4f7dbb8e2ed9
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/16/2022
ms.locfileid: "148167067"
---
Para tonar uma pessoa proprietária de uma empresa, você precisa delegar acesso do seu IdP. Se você usar o Azure AD e o SCIM, atribua a função de proprietário da empresa ao usuário. Para outros IdPs, inclua o atributo `administrator` na declaração SAML da conta de usuário no IdP, com o valor igual a `true`. Para obter mais informações sobre proprietários de empresas, confira "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)". Para obter mais informações sobre autenticação e provisionamento usando o Azure AD, confira "[Como configurar a autenticação e o provisionamento para sua empresa usando o Azure AD](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)".
