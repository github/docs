---
title: Exibindo endereços IP no log de auditoria da sua empresa
intro: Você pode exibir o endereço IP de origem para eventos no log de auditoria da sua empresa.
shortTitle: Endereços IP no log de auditoria
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
---

{% note %}

**Observação:** A exibição de endereços IP no log de auditoria corporativa está atualmente em beta público e está sujeita a alterações.

{% endnote %}

## Sobre a exibição de endereços IP no log de auditoria

Por padrão, {% data variables.product.product_name %} não exibe o endereço IP de origem para eventos no registro de auditoria da sua empresa. Opcionalmente, para garantir a conformidade e responder a ameaças, você pode exibir o endereço IP completo associado ao criador responsável por cada evento. De modo geral, os criadores são usuários, mas também podem ser aplicativos ou integrações.

Você é responsável por cumprir todas as obrigações legais que acompanhem a visualização ou armazenamento de endereços IP exibidos no registro de auditoria da sua empresa.

Se você optar por exibir endereços IP, os endereços IP só aparecerão no log de auditoria da sua empresa. Os endereços IP não aparecerão para eventos nos logs de auditoria de organizações individuais de propriedade de sua empresa. Para obter mais informações sobre logs de auditoria da organização, consulte "[Revisando o log de auditoria para sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)."

Você pode exibir endereços IP no log de auditoria, independentemente do método de autenticação que você usa para sua empresa em {% data variables.product.product_location %}. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

Quando alguém cria uma conta em {% data variables.product.product_location %}, a pessoa concorda com a coleção de informações básicas de {% data variables.product.company_short %} sobre conexões aos serviços de {% data variables.product.company_short %}, incluindo o endereço IP de origem. Para obter mais informações, consulte "[Declaração de Privacidade do GitHub](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information)."

## Eventos que exibem endereços IP no log de auditoria

{% data variables.product.product_name %} exibe um endereço IP no log de auditoria quando um integrante da empresa interage com um recurso de sua empresa ou uma organização em sua empresa. Por exemplo, você verá um endereço IP para eventos auditados envolvendo um repositório interno ou privado de propriedade de uma organização em sua empresa, ou recursos associados a esses repositórios, como um problema, pull request, ação ou projeto.

Se os integrantes da sua empresa acessarem {% data variables.product.product_location %} com contas pessoais que gerenciam, como você não usa {% data variables.product.prodname_emus %}, {% data variables.product.product_name %} não exibirá um endereço de evento ou IP no log de auditoria para as seguintes ações.

- Autenticação em {% data variables.product.product_location %}
- Interações com um recurso de propriedade da conta pessoal, incluindo um repositório, gist ou projeto
- Interações com um repositório público pertencente a uma organização da sua empresa

## Habilitando a exibição de endereços IP no log de auditoria

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Em "Log de auditoria", clique em **Divulgação do IP da origem**.

   ![Captura de tela da aba "Divulgação do IP de origem"](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. Em "Divulgar endereços IP do criador nos logs de auditoria", selecione **Habilitar a divulgação do IP de origem**.

   ![Captura de tela da caixa de seleção para habilitar a exibição de endereços IP nos logs de auditoria](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. Clique em **Salvar**.

Após habilitar o recurso, você pode acessar o log de auditoria para ver os eventos que incluem endereços IP. Para obter mais informações, consulte[Acessando o log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)".
