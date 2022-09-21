---
title: Exibir endereços IP no log de auditoria da sua empresa
intro: Você pode exibir o endereço IP de origem para eventos no log de auditoria da sua empresa.
shortTitle: IP addresses in audit log
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
ms.openlocfilehash: 7dad3642866b637432442591d8e5714e3db6f59f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508072'
---
## Sobre a exibição de endereços IP no log de auditoria

Por padrão, o {% data variables.product.product_name %} não exibe o endereço IP de origem para eventos no log de auditoria da sua empresa. Opcionalmente, para garantir a conformidade e responder a ameaças, você pode exibir o endereço IP completo associado ao ator responsável por cada evento. Normalmente, os atores são usuários, mas também podem ser aplicativos ou integrações.

Você é responsável por cumprir todas as obrigações legais que acompanham a exibição ou o armazenamento de endereços IP exibidos no log de auditoria da sua empresa.

Se você optar por exibir endereços IP, eles só aparecerão no log de auditoria da sua empresa. Os endereços IP não serão exibidos para eventos nos logs de auditoria de organizações individuais pertencentes à sua empresa. Para obter mais informações sobre os logs de auditoria da sua organização, confira "[Como revisar o log de auditoria para sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)".

Você pode exibir endereços IP no log de auditoria independentemente do método de autenticação usado para sua empresa no {% data variables.product.product_location %}. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

Quando qualquer pessoa cria uma conta no {% data variables.product.product_location %}, a pessoa concorda com a coleta de informações básicas do {% data variables.product.company_short %} sobre conexões com serviços do {% data variables.product.company_short %}, incluindo o endereço IP de origem. Para obter mais informações, confira "[Política de Privacidade do GitHub](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information)".

## Eventos que exibem endereços IP no log de auditoria

O {% data variables.product.product_name %} exibe um endereço IP no log de auditoria quando um membro da empresa interage com um recurso pertencente à sua empresa ou a uma organização em sua empresa. Por exemplo, você verá um endereço IP para eventos auditados envolvendo um repositório interno ou privado pertencente a uma organização em sua empresa ou recursos associados a esses repositórios, como um problema, uma solicitação de pull, uma ação ou um projeto.

Se os membros da sua empresa acessarem o {% data variables.product.product_location %} com contas pessoais que eles gerenciam, porque você não usa o {% data variables.product.prodname_emus %}, o {% data variables.product.product_name %} não exibirá um evento ou endereço IP no log de auditoria para as ações a seguir.
  
- Autenticação no {% data variables.product.product_location %}
- Interações com um recurso pertencente à conta pessoal, incluindo repositório, gist ou projeto
- Interações com um repositório público de propriedade de uma organização em sua empresa

## Habilitar a exibição de endereços IP no log de auditoria

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Em "Log de auditoria", clique em **Divulgação do IP de origem**.

   ![Captura de tela da guia "Divulgação do IP de origem"](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. Em "Divulgar endereços IP de ator nos logs de auditoria", selecione **Habilitar divulgação do IP de origem**.

   ![Captura de tela da caixa de seleção para habilitar a exibição de endereços IP nos logs de auditoria](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. Clique em **Save** (Salvar).

Depois de habilitar o recurso, você poderá acessar o log de auditoria para exibir eventos que incluem endereços IP. Para obter mais informações, confira "[Como acessar o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)".
