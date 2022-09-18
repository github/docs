---
title: Como atualizar a NameID do SAML de um usuário
shortTitle: Update SAML NameID
intro: 'Quando um `NameID` da conta muda em seu provedor de identidade (IdP) e a pessoa não puder mais {% ifversion ghes or ghae %}entrar no {% data variables.product.product_location %}{% elsif ghec %}e autenticar para acessar os recursos da sua empresa{% endif %}, você deverá {% ifversion ghec %}entrar em contato com o Suporte do {% data variables.product.company_short %} ou revogar a identidade vinculada da pessoa{% elsif ghes %}atualizar o mapeamento do `NameID` no {% data variables.product.product_location %}{% elsif ghae %}contatar o Suporte do {% data variables.product.company_short %}{% endif %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717898'
---
## Sobre as atualizações da `NameID` do SAML dos usuários

Em algumas situações, pode ser necessário atualizar valores associados à conta de uma pessoa no IdP do SAML. Se esse identificador também for o `NameID` que você usa para autenticação no {% data variables.product.product_name %}, você deverá atualizar o mapeamento `NameID` em sua instância para que a pessoa continue a se autenticar com êxito. Para obter mais informações, confira "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Como atualizar a `NameID` do SAML de um usuário

Proprietários da empresa podem atualizar o `NameID` do SAML de um usuário em uma instância do {% data variables.product.product_name %}.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Na barra lateral esquerda, clique em **Todos os usuários**.
  ![Barra lateral "Todos os usuários" nas configurações de administrador do site](/assets/images/enterprise/site-admin-settings/all-users.png)
3. Na lista de usuários, clique no nome de usuário para o qual deseja atualizar o mapeamento da `NameID`.
  ![Nome de usuário na lista de contas de usuário da instância](/assets/images/enterprise/site-admin-settings/all-users-click-username.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
5. À direita de "Atualizar NameID do SAML", clique em **Editar**.
  ![Botão "Editar" em "Autenticação SAML" e à direita de "Atualizar NameID do SAML"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. No campo "NameID", digite a nova `NameID` para o usuário.
  ![Campo "NameID" na caixa de diálogo modal com a NameID digitada](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Clique em **Atualizar NameID**.
  ![Botão "Atualizar NameID" com o valor da NameID atualizada na caixa de diálogo modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
