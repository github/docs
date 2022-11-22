---
ms.openlocfilehash: e26318e1b0d86ee5ec0c486ccaba4f7dbb8e2ed9
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/16/2022
ms.locfileid: "148167069"
---
要使某人成为企业所有者，必须在 IdP 中委派访问权限。 如果使用 Azure AD 和 SCIM，请为用户分配企业所有者角色。 对于其他 IdP，请在 IdP 上的用户帐户的 SAML 断言中包含 `administrator` 属性，其值为 `true`。 有关企业所有者的详细信息，请参阅“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”。 有关使用 Azure AD 进行身份验证和预配的详细信息，请参阅“[使用 Azure AD 为企业配置身份验证和预配](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)”。
