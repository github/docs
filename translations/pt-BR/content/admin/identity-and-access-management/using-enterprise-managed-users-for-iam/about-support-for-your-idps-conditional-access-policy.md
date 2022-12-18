---
title: Sobre o suporte para a Política de Acesso Condicional do IdP
shortTitle: Conditional access policy
intro: 'Quando sua empresa adotar o SSO do OIDC, o {% data variables.product.prodname_dotcom %} poderá validar o acesso à sua empresa e aos recursos dela usando a CAP (Política de Acesso Condicional) do IdP.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: aed7008bd008ccfd6303ccbb36f4d6f3bd7002ca
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179994'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Sobre o suporte a Políticas de Acesso Condicional

{% data reusables.enterprise-accounts.emu-cap-validates %}

O {% data variables.product.product_name %} dá suporte à CAP para qualquer {% data variables.enterprise.prodname_emu_enterprise %} em que o SSO do OIDC esteja habilitado. O {% data variables.product.product_name %} impõe as condições de IP do seu IdP, mas não pode impor as condições de conformidade do seu dispositivo. Os proprietários corporativos podem optar por usar essa configuração de lista de permissões de IP em vez da lista de permissões de IP do {% data variables.product.product_name %}, e podem fazer isso depois que o SSO do OIDC for configurado. Para obter mais informações sobre as listas de permissões de IP, confira "[Como restringir o tráfego de rede com uma lista de permissões de IP](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" e "[Como gerenciar endereços IP permitidos na sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)".


Para obter mais informações sobre como usar o OIDC com o {% data variables.product.prodname_emus %}, confira "[Como configurar o OIDC para usuários gerenciados pela empresa](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)" e "[Como migrar do SAML para o OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)".

## Considerações sobre integrações e automações

{% data variables.product.prodname_dotcom %} envia o endereço IP de origem para seu IdP para validação em relação à sua CAP. Para garantir que ações e aplicativos não sejam bloqueados pela CAP do IdP, você precisará fazer alterações na configuração.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

As ações que usam um {% data variables.product.pat_generic %} provavelmente serão bloqueadas pela CAP do seu IdP. Recomendamos que os {% data variables.product.pat_generic %} sejam criados por uma conta de serviço que fique isenta de controles de IP na CAP do seu IdP. 

Se você não conseguir usar uma conta de serviço, outra opção para desbloquear ações que usam {% data variables.product.pat_generic %} será permitir os intervalos de IP usados pelas {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sobre os endereços IP do GitHub](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)".

### {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} 

Quando o {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} fizerem solicitações em nome de um membro, o {% data variables.product.prodname_dotcom %} enviará o endereço IP do servidor do aplicativo para o IdP para validação. Se o endereço IP do servidor do aplicativo não for validado pela CAP do IdP, a solicitação falhará.

Entre em contato com os proprietários dos aplicativos que deseja usar, solicite seus intervalos de IP e configure a CAP do IdP para permitir o acesso desses intervalos de IP. Se não conseguir contatar os proprietários, você poderá examinar os logs de entrada do IdP para examinar os endereços IP vistos nas solicitações e, em seguida, inserir esses endereços na lista de permissões. 

Se não quiser permitir todos os intervalos de IP para todos os aplicativos da sua empresa, você também poderá isentar os {% data variables.product.prodname_github_apps %} instalados e os {% data variables.product.prodname_oauth_apps %} autorizados da lista de permissões do IdP. Se fizer isso, esses aplicativos seguirão funcionando independentemente do endereço IP de origem. Para obter mais informações, confira "[Como impor políticas para configurações de segurança na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)".
