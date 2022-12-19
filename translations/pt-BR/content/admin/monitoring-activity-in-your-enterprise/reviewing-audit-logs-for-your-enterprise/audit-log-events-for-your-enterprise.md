---
title: Auditar eventos de log para sua empresa
intro: Saiba mais sobre os eventos de log de auditoria registrados para sua empresa.
shortTitle: Audit log events
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can interact with the audit log.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/articles/audited-actions
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
  - /admin/user-management/monitoring-activity-in-your-enterprise/audited-actions
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 5a936791aff8706cd04773bb0f7428cd11f29329
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183945'
---
{% ifversion ghec%}
## Sobre a auditoria de eventos de log para sua empresa

O escopo dos eventos exibidos no log de auditoria da sua empresa dependerá se sua empresa usa o {% data variables.product.prodname_emus %}. Para obter mais informações sobre o {% data variables.product.prodname_emus %}, confira "[Sobre o {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".

- Se sua empresa não usar o {% data variables.product.prodname_emus %}, o log de auditoria incluirá apenas eventos relacionados à conta corporativa e às organizações dentro da conta corporativa, listados neste artigo.
- Se a empresa usa {% data variables.product.prodname_emus %}, o log de auditoria também inclui eventos de usuário para {% data variables.enterprise.prodname_managed_users %}, como todas as vezes em que o usuário entra no {% data variables.product.product_name %} e as ações tomadas dentro da conta de usuário. Para obter uma lista desses eventos da conta de usuário, confira "[Como revisar o log de segurança](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log#security-log-actions)".
{% endif %}

{%- ifversion fpt or ghec %}
## Ações da categoria `account`

| Ação | Descrição
|--------|-------------
| `account.billing_plan_change` | O período de cobrança de uma organização foi alterado. Para obter mais informações, confira "[Como alterar a duração do período de cobrança](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle)".
| `account.plan_change` | A assinatura de uma organização foi alterada. Para obter mais informações, confira "[Sobre a cobrança de contas do GitHub](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)".
| `account.pending_plan_change` | Um proprietário ou um gerente de cobrança da organização cancelou uma assinatura paga ou fez downgrade dela. Para obter mais informações, confira "[Como a atualização ou o downgrade afetam o processo de cobrança?](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process)".
| `account.pending_subscription_change` | Uma avaliação gratuita do {% data variables.product.prodname_marketplace %} foi iniciada ou venceu. Para obter mais informações, confira "[Sobre a cobrança do GitHub Marketplace](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)".
{%- endif %}

{%- ifversion fpt or ghec %}
## Ações da categoria `advisory_credit`

| Ação | Descrição
|--------|-------------
| `advisory_credit.accept` | Alguém aceitou um crédito por uma consultoria de segurança. Para obter mais informações, confira "[Como editar uma consultoria de segurança](/github/managing-security-vulnerabilities/editing-a-security-advisory)".
| `advisory_credit.create` | O administrador de uma consultoria de segurança adicionou alguém à seção de crédito.
| `advisory_credit.decline` | Alguém recusou um crédito por uma consultoria de segurança.
| `advisory_credit.destroy` | O administrador de uma consultoria de segurança removeu alguém da seção de crédito.
{%- endif %}

## Ações da categoria `artifact`

| Ação | Descrição
|--------|-------------
| `artifact.destroy`    | Um artefato de execução de fluxo de trabalho foi excluído manualmente.

{%- ifversion audit-log-streaming %}
## Ações da categoria `audit_log_streaming`

| Ação | Descrição
|--------|-------------
| `audit_log_streaming.check` | Foi realizada uma verificação manual do ponto de extremidade configurado para streaming de log de auditoria.
| `audit_log_streaming.create` | Um ponto de extremidade foi adicionado ao streaming de log de auditoria.
| `audit_log_streaming.update` | Uma configuração de ponto de extremidade foi atualizada para o streaming de log de auditoria, como o fluxo foi colocado em pausa, habilitado ou desabilitado.
| `audit_log_streaming.destroy` | Um ponto de extremidade de streaming de log de auditoria foi excluído.
{%- endif %}

{%- ifversion fpt or ghec %}
## Ações da categoria `billing`

| Ação | Descrição
|--------|-------------
| `billing.change_billing_type` | Uma organização alterou a forma de pagamento do {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como adicionar ou editar uma forma de pagamento](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)".
| `billing.change_email` | O endereço de email de cobrança de uma organização foi alterado. Para obter mais informações, confira "[Como definir seu email de cobrança](/billing/managing-your-github-billing-settings/setting-your-billing-email)".
{%- endif %}

## Ações da categoria `business`

| Ação | Descrição
|--------|-------------
| `business.add_admin` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} foi adicionado a uma empresa.
{%- ifversion ghec %} | `business.add_billing_manager` | Um gerente de cobrança foi adicionado a uma empresa.
{%- endif %} | `business.add_organization` | Uma organização foi adicionada a uma empresa.
{%- ifversion ghec %} | `business.add_support_entitlee` | Um direito de suporte foi adicionado a um membro de uma empresa. Para obter mais informações, confira "[Como gerenciar os direitos de suporte para sua empresa](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".
{%- endif %} {%- ifversion ghes or ghae %} | `business.advanced_security_policy_update` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} criou, atualizou ou removeu uma política da {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, confira "[Como impor políticas à {% data variables.product.prodname_advanced_security %} na sua empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{%- endif %} {%- ifversion ghec %} | `business.cancel_admin_invitation` | Um convite para alguém ser proprietário{% ifversion ghes %} ou um administrador do site{% endif %} de uma empresa foi cancelado.
| `business.cancel_billing_manager_invitation` | Um convite para alguém ser um gerente de cobrança de uma empresa foi cancelado.
{%- endif %} {%- ifversion ghes %} | `business.clear_actions_settings` | Um proprietário da empresa ou um administrador do site desmarcou as configurações de política do {% data variables.product.prodname_actions %} de uma empresa. Para obter mais informações, confira "[Como impor políticas do GitHub Actions na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".
{%- endif %} | `business.clear_default_repository_permission` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desmarcou a configuração de política de permissão do repositório base para uma empresa. Para obter mais informações, confira "[Como impor uma política para permissões de repositório base](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)".
| `business.clear_members_can_create_repos`      | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desmarcou uma restrição na criação de repositório em organizações na empresa. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".
| `business.create`                              | Uma empresa foi criada.
{%- ifversion ghec %} | `business.disable_oidc` | O logon único do OIDC foi desabilitado para uma empresa. Para saber mais, confira "[Configurar o OIDC para {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)".
| `business.disable_saml` | O logon único do SAML foi desabilitado para uma empresa.
{%- endif %} | `business.disable_two_factor_requirement` | O requisito para que os membros tenham a autenticação de dois fatores habilitada para acessar uma empresa foi desabilitado.
{%- ifversion ghec %} | `business.enable_oidc` | O logon único do OIDC foi habilitado para uma empresa. Para saber mais, confira "[Configurar o OIDC para {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)".
| `business.enable_saml` | O logon único do SAML foi habilitado para uma empresa.
{%- endif %} | `business.enable_two_factor_requirement` | O requisito para que os membros tenham a autenticação de dois fatores habilitada para acessar uma empresa foi habilitado.
{%- ifversion ghec %} | `business.enterprise_server_license_download` | Uma licença do {% data variables.product.prodname_ghe_server %} foi baixada.
| `business.import_license_usage` | As informações de uso da licença foram importadas de uma instância do {% data variables.product.prodname_ghe_server %} para uma conta corporativa no {% data variables.product.prodname_dotcom_the_website %}.
| `business.invite_admin` | Foi enviado um convite para alguém ser proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} de uma empresa.
| `business.invite_billing_manager` | Foi enviado um convite para alguém ser um gerente de cobrança de uma empresa.
{%- endif %} | `business.members_can_update_protected_branches.clear` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} remove a definição de uma política para saber se os membros de uma empresa podem atualizar os branches protegidos em repositórios para organizações individuais. Os administradores da organização podem escolher se permitirão a atualização das configurações de branches protegidos.
| `business.members_can_update_protected_branches.disable` | A capacidade dos membros da empresa de atualizar as regras de proteção de branch foi desabilitada. Somente os proprietários da empresa podem atualizar os branches protegidos.
| `business.members_can_update_protected_branches.enable` | A capacidade dos membros da empresa de atualizar as regras de proteção de branch foi habilitada. Os proprietários da empresa e os membros podem atualizar os branches protegidos.
| `business.remove_admin` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} foi removido de uma empresa.
{%- ifversion ghes %} | `business.referrer_override_enable` | Um proprietário da empresa ou um administrador do site habilitou a substituição da política de referenciador. Para obter mais informações, confira "[Como configurar a política de referenciador para sua empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)".
| `business.referrer_override_disable` | Um proprietário da empresa ou um administrador do site desabilitou a substituição da política de referenciador. Para obter mais informações, confira "[Como configurar a política de referenciador para sua empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)".
{%- endif %} {%- ifversion ghec %} | `business.remove_billing_manager` | Um gerente de cobrança foi removido de uma empresa.
| `business.remove_member` | Um membro foi removido de uma empresa.
{%- endif %} | `business.remove_organization` | Uma organização foi removida de uma empresa.
{%- ifversion ghec %} | `business.remove_support_entitlee` | Um direito de suporte foi removido de um membro de uma empresa. Para obter mais informações, confira "[Como gerenciar os direitos de suporte para sua empresa](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".
{%- endif %} | `business.rename_slug` | O campo de dados dinâmico da URL da empresa foi renomeado.
{%- ifversion ghec %} | `business.revoke_external_identity` | A identidade externa de um membro em uma empresa foi revogada.
| `business.revoke_sso_session` | A sessão de logon único do SAML para um membro em uma empresa foi revogada.
{%- endif %} {%- ifversion ghec %} | `business.set_actions_fork_pr_approvals_policy` | A configuração para exigir aprovações para fluxos de trabalho em forks públicos foi alterada para uma empresa. Para obter mais informações, confira "[Como impor políticas ao {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)".
{%- endif %} | `business.set_actions_retention_limit` | O período de retenção para artefatos e logs do {% data variables.product.prodname_actions %} foi alterado para uma empresa. Para obter mais informações, confira "[Como impor políticas ao {% data variables.product.prodname_actions %} em uma empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)".
{%- ifversion ghec or ghes %} | `business.set_fork_pr_workflows_policy` | A política para fluxos de trabalho em forks de repositório privado foi alterada. Para obter mais informações, confira "{% ifversion ghec %}[Como impor políticas para {% data variables.product.prodname_actions %} em uma empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Como habilitar fluxos de trabalho para forks de repositório privado](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}".
{%- endif %} {%- ifversion audit-log-sso-response-events %} | `business.sso_response` | Uma resposta de SSO (logon único) do SAML foi gerada quando um membro tentou se autenticar com a sua empresa. Esse evento só está disponível por meio do streaming de log de auditoria e da API REST.
{%- endif %} {%- ifversion ghes %} | `business.update_actions_settings` | Um proprietário da empresa ou um administrador do site atualizou as configurações de política do {% data variables.product.prodname_actions %} de uma empresa. Para obter mais informações, confira "[Como impor políticas do GitHub Actions na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".
{%- endif %} | `business.update_default_repository_permission` | A configuração de permissão do repositório base foi atualizada para todas as organizações em uma empresa. Para obter mais informações, confira "[Como impor uma política para permissões de repositório base](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)".
| `business.update_member_repository_creation_permission` | A configuração de criação do repositório foi atualizada para uma empresa. Para obter mais informações, confira "[Como impor uma política para criação de repositório](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
| `business.update_member_repository_invitation_permission` | A configuração de política para membros da empresa que convidam colaboradores externos para repositórios foi atualizada. Para obter mais informações, confira "[Como impor uma política para convidar colaboradores externos para repositórios](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)".
{%- ifversion ghec %} | `business.update_saml_provider_settings` | As configurações do provedor de logon único do SAML para uma empresa foram atualizadas.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## Ações da categoria `business_advanced_security`

| Ação | Descrição
|--------|-------------
| `business_advanced_security.disabled` | O {% data variables.product.prodname_GH_advanced_security %} foi desabilitado na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_advanced_security.enabled` | O {% data variables.product.prodname_GH_advanced_security %} foi habilitado na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_advanced_security.disabled_for_new_repos` | O {% data variables.product.prodname_GH_advanced_security %} foi desabilitada para novos repositórios da empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_advanced_security.enabled_for_new_repos` | O {% data variables.product.prodname_GH_advanced_security %} foi desabilitado para novos repositórios da empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endif %}

{% ifversion code-security-audit-log-events %}

## Ações da categoria `business_secret_scanning`

| Ação | Descrição
|--------|-------------
| `business_secret_scanning.disable` | O {% data variables.product.prodname_secret_scanning_caps %} foi desabilitado na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning.enable` | O {% data variables.product.prodname_secret_scanning_caps %} foi habilitado na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning.disabled_for_new_repos` | O {% data variables.product.prodname_secret_scanning_caps %} foi desabilitado nos repositórios da empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning.enabled_for_new_repos` | O {% data variables.product.prodname_secret_scanning_caps %} foi desabilitado para novos repositórios na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## Ações da categoria `business_secret_scanning_custom_pattern`

Ação                        | Descrição
----------------------------- | -----------------------------------------------
| `business_secret_scanning_custom_pattern.create` | Um padrão personalizado de nível empresarial foi publicado para verificação de segredos. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account)".
| `business_secret_scanning_custom_pattern.delete` | Um padrão personalizado de nível empresarial foi removido da verificação de segredos.
| `business_secret_scanning_custom_pattern.update` | As alterações em um padrão personalizado de nível empresarial são salvas para a verificação de segredos.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## Ações da categoria `business_secret_scanning_push_protection`

| Ação | Descrição
|--------|-------------
| `business_secret_scanning_push_protection.disable` | A proteção contra push da {% data variables.product.prodname_secret_scanning %} foi desabilitada na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection.enable` | A proteção contra push da {% data variables.product.prodname_secret_scanning %} foi habilitada na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection.disabled_for_new_repos` | A proteção contra push da {% data variables.product.prodname_secret_scanning %} foi desabilitada para novos repositórios da empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection.enabled_for_new_repos` | A proteção contra push da {% data variables.product.prodname_secret_scanning %} foi habilitada para novos repositórios da empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endif %}

{% ifversion code-security-audit-log-events %}

## Ações da categoria `business_secret_scanning_push_protection_custom_message`

| Ação | Descrição
|--------|-------------
| `business_secret_scanning_push_protection_custom_message.disable` | A mensagem personalizada disparada por uma tentativa de push para um repositório protegido contra push foi desabilitada na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection_custom_message.enable` | A mensagem personalizada disparada por uma tentativa de push para um repositório protegido contra push foi habilitada na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection_custom_message.update` | A mensagem personalizada disparada por uma tentativa de push para um repositório protegido contra push foi atualizada na empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endif %}

## Ações da categoria `checks`

| Ação | Descrição
|--------|-------------
| `checks.auto_trigger_disabled` | A criação automática de conjuntos de verificações foi desabilitada em um repositório na organização ou na empresa. Para obter mais informações, confira "[Atualizar as preferências de conjuntos de verificações do repositório](/rest/reference/checks#update-repository-preferences-for-check-suites)".
| `checks.auto_trigger_enabled` | A criação automática de conjuntos de verificações foi habilitada em um repositório na organização ou na empresa. Para obter mais informações, confira "[Atualizar as preferências de conjuntos de verificações do repositório](/rest/reference/checks#update-repository-preferences-for-check-suites)".
{%- ifversion fpt or ghec %} | `checks.delete_logs` | Os logs de um conjunto de verificações foram excluídos.
{%- endif %}

{%- ifversion fpt or ghec %}
## Ações da categoria `codespaces`

| Ação | Descrição
|--------|-------------
| `codespaces.connect` | Um codespace foi iniciado.
| `codespaces.create` | Um usuário [criou um codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `codespaces.destroy` | Um usuário [excluiu um codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `codespaces.allow_permissions` | Um codespace que usa permissões personalizadas do arquivo `devcontainer.json` foi iniciado.
| `codespaces.attempted_to_create_from_prebuild` | Foi feita uma tentativa de criar um codespace com base em um pré-build.
| `codespaces.create_an_org_secret` | Um usuário criou um [segredo no nível da organização para o {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)
| `codespaces.update_an_org_secret` | Um usuário atualizou um [segredo no nível da organização para o {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.remove_an_org_secret` | Um usuário removeu um [segredo no nível da organização para o {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.manage_access_and_security` | Um usuário atualizou [os repositórios que um codespace pode acessar](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{%- endif %}

{%- ifversion fpt or ghec %}
## Ações da categoria `commit_comment`

| Ação | Descrição
|--------|-------------
| `commit_comment.destroy` | Um comentário sobre um commit foi excluído.
| `commit_comment.update` | Um comentário sobre um commit foi atualizado.
{%- endif %}

{%- ifversion ghes %}
## Ações da categoria `config_entry`

| Ação | Descrição
|--------|-------------
| `config_entry.create` | Uma definição de configuração foi criada. Esses eventos só ficam visíveis no log de auditoria do administrador do site. O tipo de eventos registrados relacionam-se a:</br>– Configurações e políticas empresariais</br>– Permissões e configurações de organização e repositório</br>– Git, Git LFS, projeto do {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %} e configurações de segurança de código.
| `config_entry.destroy` | Uma definição de configuração foi excluída. Esses eventos só ficam visíveis no log de auditoria do administrador do site. O tipo de eventos registrados relacionam-se a:</br>– Configurações e políticas empresariais</br>– Permissões e configurações de organização e repositório</br>– Git, Git LFS, projeto do {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %} e configurações de segurança de código.
| `config_entry.update` | Uma definição de configuração foi editada. Esses eventos só ficam visíveis no log de auditoria do administrador do site. O tipo de eventos registrados relacionam-se a:</br>– Configurações e políticas empresariais</br>– Permissões e configurações de organização e repositório</br>– Git, Git LFS, projeto do {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %} e configurações de segurança de código.
{%- endif %}

## Ações da categoria `dependabot_alerts`

| Ação | Descrição
|--------|-------------
| `dependabot_alerts.disable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desabilitou os {% data variables.product.prodname_dependabot_alerts %} em todos os repositórios {% ifversion fpt or ghec %}privados {% endif %}existentes. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependabot_alerts.enable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} habilitou os {% data variables.product.prodname_dependabot_alerts %} em todos os repositórios {% ifversion fpt or ghec %}privados {% endif %}existentes.

## Ações da categoria `dependabot_alerts_new_repos`

| Ação | Descrição
|--------|-------------
| `dependabot_alerts_new_repos.disable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desabilitou os {% data variables.product.prodname_dependabot_alerts %} em todos os novos repositórios {% ifversion fpt or ghec %}privados {% endif %}. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependabot_alerts_new_repos.enable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} habilitou os {% data variables.product.prodname_dependabot_alerts %} em todos os novos repositórios {% ifversion fpt or ghec %}privados {% endif %}.

## Ações da categoria `dependabot_repository_access`

| Ação | Descrição
|--------|-------------
| `dependabot_repository_access.repositories_updated` | Os repositórios que o {% data variables.product.prodname_dependabot %} pode acessar foram atualizados.

{%- ifversion fpt or ghec or ghes %}
## Ações da categoria `dependabot_security_updates`

| Ação | Descrição
|--------|-------------
| `dependabot_security_updates.disable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desabilitou as {% data variables.product.prodname_dependabot_security_updates %} em todos os repositórios existentes. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependabot_security_updates.enable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} habilitou as {% data variables.product.prodname_dependabot_security_updates %} em todos os repositórios existentes.

## Ações da categoria `dependabot_security_updates_new_repos`

| Ação | Descrição
|--------|-------------
| `dependabot_security_updates_new_repos.disable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desabilitou as {% data variables.product.prodname_dependabot_security_updates %} em todos os novos repositórios. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependabot_security_updates_new_repos.enable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} habilitou as {% data variables.product.prodname_dependabot_security_updates %} em todos os novos repositórios.
{%- endif %}

## Ações da categoria `dependency_graph`

| Ação | Descrição
|--------|-------------
| `dependency_graph.disable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desabilitou o grafo de dependência em todos os repositórios existentes. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependency_graph.enable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} habilitou o grafo de dependência em todos os repositórios existentes.

## Ações da categoria `dependency_graph_new_repos`

| Ação | Descrição
|--------|-------------
| `dependency_graph_new_repos.disable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desabilitou o grafo de dependência em todos os novos repositórios. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependency_graph_new_repos.enable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} habilitou o grafo de dependência em todos os novos repositórios.

{%- ifversion fpt or ghec %}
## Ações da categoria `discussion`

| Ação | Descrição
|--------|-------------
| `discussion.destroy` | Uma discussão em equipe foi excluída.

## Ações da categoria `discussion_comment`

| Ação | Descrição
|--------|-------------
| `discussion_comment.destroy` | Um [comentário sobre uma postagem de discussão em equipe foi excluído](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_comment.update` | Um [comentário sobre uma postagem de discussão em equipe foi editado](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).

## Ações da categoria `discussion_post`

| Ação | Descrição
|--------|-------------
| `discussion_post.destroy` | Uma [postagem de discussão em equipe foi excluída](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).
| `discussion_post.update` | Uma [postagem de discussão em equipe foi editada](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).

## Ações da categoria `discussion_post_reply`

| Ação | Descrição
|--------|-------------
| `discussion_post_reply.destroy` | Uma [resposta a uma postagem de discussão em equipe foi excluída](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_post_reply.update` | Uma [resposta a uma postagem de discussão em equipe foi editada](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).
{%- endif %}

{%- ifversion ghec or ghes %}
## Ações da categoria `dotcom_connection`

| Ação | Descrição
|--------|-------------
| `dotcom_connection.create` | Uma conexão do {% data variables.product.prodname_github_connect %} com o {% data variables.product.prodname_dotcom_the_website %} foi criada.
| `dotcom_connection.destroy` | Uma conexão do {% data variables.product.prodname_github_connect %} com o {% data variables.product.prodname_dotcom_the_website %} foi excluída.
| `dotcom_connection.token_updated` | O token de conexão do {% data variables.product.prodname_github_connect %} para o {% data variables.product.prodname_dotcom_the_website %} foi atualizado.
| `dotcom_connection.upload_license_usage` | O uso de licença do {% data variables.product.prodname_ghe_server %} foi carregado manualmente no {% data variables.product.prodname_ghe_cloud %}.
| `dotcom_connection.upload_usage_metrics` | As métricas de uso do {% data variables.product.prodname_ghe_server %} foram carregadas manualmente no {% data variables.product.prodname_dotcom_the_website %}.
{%- endif %}

## Ações da categoria `enterprise`

| Ação | Descrição
|--------|-------------
| `enterprise.config.disable_anonymous_git_access`   | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desabilitou o acesso de leitura anônimo do Git para repositórios na empresa. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".
| `enterprise.config.enable_anonymous_git_access`   | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} habilitou o acesso de leitura anônimo do Git para repositórios na empresa. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".
| `enterprise.config.lock_anonymous_git_access`   | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} bloqueou o acesso de leitura anônimo do Git para impedir que os administradores de repositório alterem as configurações existentes de acesso de leitura anônimo do Git nos repositórios da empresa. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".
| `enterprise.config.unlock_anonymous_git_access` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desbloqueou o acesso de leitura anônimo do Git para permitir que os administradores de repositório alterem as configurações existentes de acesso de leitura anônimo do Git nos repositórios da empresa. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".
| `enterprise.register_self_hosted_runner` | Um novo executor auto-hospedado do {% data variables.product.prodname_actions %} foi registrado. Para obter mais informações, confira "[Como adicionar um executor auto-hospedado a um repositório](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)".
| `enterprise.remove_self_hosted_runner` | Um executor auto-hospedado do {% data variables.product.prodname_actions %} foi removido. Para obter mais informações, confira "[Como remover um executor de um repositório](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".
| `enterprise.runner_group_created` | Um grupo de executores auto-hospedados do {% data variables.product.prodname_actions %} foi criado. Para obter mais informações, confira "[Como criar um grupo de executores auto-hospedados para uma organização](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".
| `enterprise.runner_group_removed` | Um grupo de executores auto-hospedados do {% data variables.product.prodname_actions %} foi removido. Para obter mais informações, confira "[Como remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `enterprise.runner_group_renamed` | Um grupo de executores auto-hospedados do {% data variables.product.prodname_actions %} foi renomeado. Para obter mais informações, confira "[Como alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `enterprise.runner_group_updated` | A configuração de um grupo de executores auto-hospedado do {% data variables.product.prodname_actions %} foi alterada. Para obter mais informações, confira "[Como alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `enterprise.runner_group_runner_removed` |  A API REST foi usada para remover um executor auto-hospedado do {% data variables.product.prodname_actions %} de um grupo. Para obter mais informações, confira "[Remover um executor auto-hospedado de um grupo de uma organização](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".
| `enterprise.runner_group_runners_added` | Um executor auto-hospedado do {% data variables.product.prodname_actions %} foi adicionado a um grupo. Para obter mais informações, confira [Como mover um executor auto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `enterprise.runner_group_runners_updated`|  Uma lista de membros do grupo de executores do {% data variables.product.prodname_actions %} foi atualizada. Para obter mais informações, confira "[Definir executores auto-hospedados em um grupo de uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
{%- ifversion ghec %} | `enterprise.runner_group_visiblity_updated` | A visibilidade de um grupo de executores auto-hospedados do {% data variables.product.prodname_actions %} foi atualizada por meio da API REST. Para obter mais informações, confira "[Atualizar um grupo de executores auto-hospedados de uma organização](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)".
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `enterprise.self_hosted_runner_online` | O aplicativo executor do {% data variables.product.prodname_actions %} foi iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `enterprise.self_hosted_runner_offline` | O aplicativo executor do {% data variables.product.prodname_actions %} foi interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
{%- endif %} {%- ifversion ghec or ghes %} | `enterprise.self_hosted_runner_updated` | O aplicativo executor do {% data variables.product.prodname_actions %} foi atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".
{%- endif %}

{%- ifversion ghec %}
## Ações da categoria `enterprise_domain`

| Ação | Descrição
|--------|-------------
| `enterprise_domain.approve` | Um domínio corporativo foi aprovado para uma empresa. Para obter mais informações, confira "[Como aprovar um domínio para sua conta corporativa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account)".
| `enterprise_domain.create` | Um domínio corporativo foi adicionado a uma empresa. Para obter mais informações, confira "[Como verificar um domínio para sua conta corporativa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)".
| `enterprise_domain.destroy` | Um domínio corporativo foi removido de uma empresa. Para obter mais informações, confira "[Como remover um domínio aprovado ou verificado](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain)".
| `enterprise_domain.verify` | Um domínio corporativo foi verificado para uma empresa. Para obter mais informações, confira "[Como verificar um domínio para sua conta corporativa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)".

## Ações da categoria `enterprise_installation`

| Ação | Descrição
|--------|-------------
| `enterprise_installation.create` | O {% data variables.product.prodname_github_app %} associado a uma conexão corporativa do {% data variables.product.prodname_github_connect %} foi criado.
| `enterprise_installation.destroy` | O {% data variables.product.prodname_github_app %} associado a uma conexão corporativa do {% data variables.product.prodname_github_connect %} foi excluído.
| `enterprise_installation.token_updated` | O token pertencente ao {% data variables.product.prodname_github_app %} associado a uma conexão corporativa do {% data variables.product.prodname_github_connect %} foi atualizado.
{%- endif %}

{%- ifversion fpt or ghec %}
## Ações da categoria `environment`

| Ação | Descrição
|--------|-------------
| `environment.add_protection_rule` | Uma regra de proteção de ambiente do {% data variables.product.prodname_actions %} foi criada por meio da API. Para obter mais informações, confira "[Regras de proteção do ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)".
| `environment.create_actions_secret` | Um segredo foi criado para um ambiente do {% data variables.product.prodname_actions %} por meio da API. Para obter mais informações, confira "[Segredos do ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".
| `environment.delete` | Um ambiente foi excluído por meio da API. Para obter mais informações, confira "[Como excluir um ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment)".
| `environment.remove_actions_secret` | Um segredo foi excluído para um ambiente do {% data variables.product.prodname_actions %} por meio da API. Para obter mais informações, confira "[Segredos do ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".
| `environment.remove_protection_rule` | Uma regra de proteção de ambiente do {% data variables.product.prodname_actions %} foi excluída por meio da API. Para obter mais informações, confira "[Regras de proteção do ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)".
| `environment.update_actions_secret` | Um segredo foi atualizado para um ambiente do {% data variables.product.prodname_actions %} por meio da API. Para obter mais informações, confira "[Segredos do ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".
| `environment.update_protection_rule` | Uma regra de proteção de ambiente do {% data variables.product.prodname_actions %} foi atualizada por meio da API. Para obter mais informações, confira "[Regras de proteção do ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)".
{%- endif %}

{%- ifversion ghae %}
## Ações da categoria `external_group`

| Ação | Descrição
|--------|-------------
| `external_group.delete` | Um grupo do Okta foi excluído. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_group.link` | Um grupo do Okta foi mapeado para uma equipe do {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_group.provision` | Um grupo do Okta foi mapeado para uma equipe no {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_group.unlink` | Um grupo do Okta foi não mapeado de uma equipe do {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_group.update` | As configurações de um grupo do Okta foram atualizadas. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

## Ações da categoria `external_identity`
| Ação | Descrição
|--------|-------------
| `external_identity.deprovision` | Um usuário foi removido de um grupo do Okta e, posteriormente, desprovisionado do {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_identity.provision` | Um usuário do Okta foi adicionado a um grupo do Okta e, posteriormente, provisionado na equipe mapeada no {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_identity.update` | As configurações de um usuário do Okta foram atualizadas. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
{%- endif %}

## Ações da categoria `gist`

| Ação | Descrição
|--------|-------------
| `gist.create` | Um gist é criado.
| `gist.destroy` | Um gist é excluído.
| `gist.visibility_change` | A visibilidade de um gist é alterada.

{% ifversion git-events-audit-log %}
## Ações da categoria `git`

{% ifversion enable-git-events %} Para ver as ações de categoria do `git`, você precisa habilitar os eventos do Git no log de auditoria. Para obter mais informações, confira "[Como configurar o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise#managing-git-events-in-the-audit-log)".
{% endif %}

{% data reusables.audit_log.git-events-not-in-search-results %}

| Ação | Descrição
|--------|-------------
| `git.clone` | Um repositório foi clonado.
| `git.fetch` | As alterações foram buscadas de um repositório.
| `git.push`  | As alterações foram enviadas por push para um repositório.
{% endif %}

## Ações da categoria `hook`

| Ação | Descrição
|--------|-------------
{%- ifversion ghes or ghae %} | `hook.active_changed`             | O status ativo de um gancho foi atualizado.
{%- endif %} | `hook.config_changed`             | A configuração de um gancho foi alterada.
| `hook.create`                     | Um novo gancho foi adicionado.
| `hook.destroy`                    | Um gancho foi excluído.
| `hook.events_changed`             | Os eventos configurados de um gancho foram alterados.

## Ações da categoria `integration`

| Ação | Descrição
|--------|-------------
| `integration.create` | Uma integração foi criada.
| `integration.destroy` | Uma integração foi excluída.
| `integration.manager_added` | Um membro de uma empresa ou uma organização foi adicionado como gerente de integração.
| `integration.manager_removed` | Um membro de uma empresa ou uma organização foi removido da função de gerente de integração.
| `integration.transfer` | A propriedade de uma integração foi transferida para outro usuário ou outra organização.
| `integration.remove_client_secret` | Um segredo do cliente para uma integração foi removido.
| `integration.revoke_all_tokens` | Todos os tokens de usuário para uma integração foram solicitados a serem revogados.
| `integration.revoke_tokens` | Os tokens de uma integração foram revogados.

## Ações da categoria `integration_installation`

| Ação | Descrição
|--------|-------------
| `integration_installation.contact_email_changed` | Um email de contato para uma integração foi alterado.
| `integration_installation.create` | Uma integração foi instalada.
| `integration_installation.destroy` | Uma integração foi desinstalada.
| `integration_installation.repositories_added` | Os repositórios foram adicionados a uma integração.
| `integration_installation.repositories_removed` | Os repositórios foram removidos de uma integração.
{%- ifversion fpt or ghec %} | `integration_installation.suspend` | Uma integração foi suspensa.
| `integration_installation.unsuspend` | Uma integração teve a suspensão cancelada.
{%- endif %} | `integration_installation.version_updated` | As permissões para uma integração foram atualizadas.

## Ações da categoria `integration_installation_request`

| Ação | Descrição
|--------|-------------
| `integration_installation_request.create` | Um membro solicitou a um proprietário a instalação de uma integração para uso em uma empresa ou uma organização.
| `integration_installation_request.close` | Uma solicitação para instalar uma integração para uso em uma empresa ou uma organização foi aprovada ou negada por um proprietário ou cancelada pelo membro que abriu a solicitação.

{%- ifversion ghec or ghae %}
## Ações da categoria `ip_allow_list`

| Ação | Descrição
|--------|-------------
| `ip_allow_list.enable`               | Uma lista de permissões de IP foi habilitada.
| `ip_allow_list.enable_for_installed_apps` | Uma lista de permissões de IP foi habilitada para a instalação de {% data variables.product.prodname_github_apps %}.
| `ip_allow_list.disable`              | Uma lista de permissões do IP foi desabilitada.
| `ip_allow_list.disable_for_installed_apps` | Uma lista de permissões de IP foi desabilitada para o {% data variables.product.prodname_github_apps %} instalado.

## Ações da categoria `ip_allow_list_entry`

| Ação | Descrição
|--------|-------------
| `ip_allow_list_entry.create` | Um endereço IP foi adicionado a uma lista de permissão do IP.
| `ip_allow_list_entry.update` | Um endereço IP ou sua descrição foi alterada.
| `ip_allow_list_entry.destroy` | Um endereço IP foi excluído de uma lista de permissões de IP.
{%- endif %}

## Ações da categoria `issue`

| Ação | Descrição
|--------|-------------
| `issue.destroy`                      | Um problema foi excluído do repositório. Para obter mais informações, confira "[Como excluir um problema](/issues/tracking-your-work-with-issues/deleting-an-issue)".
| `issue.pinned`                       | Um problema foi fixado em um repositório. Para obter mais informações, confira "[Como fixar um problema no seu repositório](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)".
| `issue.transfer`                     | Um problema foi transferido para outro repositório. Para obter mais informações, confira "[Como transferir um problema para outro repositório](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)".
| `issue.unpinned`                     | Um problema foi desafixado de um repositório. Para obter mais informações, confira "[Como fixar um problema no seu repositório](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)".

## Ações da categoria `issue_comment`

| Ação | Descrição
|--------|-------------
| `issue_comment.destroy`  | Um comentário sobre um problema foi excluído do repositório.
| `issue_comment.pinned`   | Um comentário sobre um problema foi fixado a um repositório.
| `issue_comment.unpinned` | Um comentário sobre um problema foi desafixado de um repositório.
| `issue_comment.update`   | Um comentário em um problema (que não seja o inicial) foi alterado.

## Ações da categoria `issues`

| Ação | Descrição
|--------|-------------
| `issues.deletes_disabled` | A capacidade dos membros da empresa de excluir problemas foi desabilitada. Os membros não podem excluir problemas em nenhuma organização de uma empresa. Para obter mais informações, confira "[Como impor uma política para excluir problemas](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)".
| `issues.deletes_enabled` | A capacidade dos membros da empresa de excluir problemas foi habilitada. Os membros podem excluir problemas em qualquer organização de uma empresa. Para obter mais informações, confira "[Como impor uma política para excluir problemas](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)".
| `issues.deletes_policy_cleared` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desmarcou a configuração de política para permitir que os membros excluam problemas em uma empresa. Para obter mais informações, confira "[Como impor uma política para excluir problemas](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)".

{%- ifversion fpt or ghec %}
## Ações da categoria `marketplace_agreement_signature`

| Ação | Descrição
|--------|-------------
| `marketplace_agreement_signature.create` | Um usuário assinou o Contrato de Desenvolvedor do {% data variables.product.prodname_marketplace %} em nome de uma organização.

## Ações da categoria `marketplace_listing`

| Ação | Descrição
|--------|-------------
| `marketplace_listing.approve` | Uma listagem foi aprovada para inclusão no {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.change_category` | Uma categoria para uma listagem de um aplicativo no {% data variables.product.prodname_marketplace %} foi alterada.
| `marketplace_listing.create` | Uma listagem de um aplicativo no {% data variables.product.prodname_marketplace %} foi criada.
| `marketplace_listing.delist` | Uma listagem foi removida do {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.redraft` | Uma listagem foi enviada novamente ao estado de rascunho.
| `marketplace_listing.reject` | Uma listagem não foi aceita para inclusão no {% data variables.product.prodname_marketplace %}.
{%- endif %}

## Ações da categoria `members_can_create_pages`

| Ação | Descrição
|--------|-------------
| `members_can_create_pages.disable` | A capacidade dos membros de publicar {% data variables.product.prodname_pages %} foi desabilitada. Os membros não podem publicar {% data variables.product.prodname_pages %} em uma organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
| `members_can_create_pages.enable` | A capacidade dos membros de publicar {% data variables.product.prodname_pages %} foi habilitada. Os membros podem publicar {% data variables.product.prodname_pages %} em uma organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".

## Ações da categoria `members_can_create_private_pages`

| Ação | Descrição
|--------|-------------
| `members_can_create_private_pages.disable` | A capacidade dos membros de publicar {% data variables.product.prodname_pages %} privadas foi desabilitada. Os membros não podem publicar {% data variables.product.prodname_pages %} privadas em uma organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
| `members_can_create_private_pages.enable` |  A capacidade dos membros de publicar {% data variables.product.prodname_pages %} privadas foi habilitada. Os membros podem publicar {% data variables.product.prodname_pages %} privadas em uma organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".

## Ações da categoria `members_can_create_public_pages`

| Ação | Descrição
|--------|-------------
| `members_can_create_public_pages.disable` |  A capacidade dos membros de publicar {% data variables.product.prodname_pages %} públicas foi desabilitada. Os membros não podem publicar {% data variables.product.prodname_pages %} públicas em uma organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
| `members_can_create_public_pages.enable` |  A capacidade dos membros de publicar {% data variables.product.prodname_pages %} públicas foi habilitada. Os membros podem publicar {% data variables.product.prodname_pages %} públicas em uma organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".

{%- ifversion ghec or ghes or ghae %}
## Ações da categoria `members_can_delete_repos`

| Ação | Descrição
|--------|-------------
| `members_can_delete_repos.clear` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desmarcou a configuração de política para excluir ou transferir repositórios em qualquer organização em uma empresa. Para obter mais informações, confira "[Como impor uma política para exclusão e transferência de repositório](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)".
| `members_can_delete_repos.disable` | A capacidade dos membros da empresa de excluir repositórios foi desabilitada. Os membros não podem excluir nem transferir repositórios em nenhuma organização de uma empresa. Para obter mais informações, confira "[Como impor uma política para exclusão e transferência de repositório](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)".
| `members_can_delete_repos.enable` |  A capacidade dos membros da empresa de excluir repositórios foi habilitada. Os membros podem excluir ou transferir repositórios em qualquer organização de uma empresa. Para obter mais informações, confira "[Como impor uma política para exclusão e transferência de repositório](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)".

## Ações da categoria `members_can_view_dependency_insights`

| Ação | Descrição
|--------|-------------
| `members_can_view_dependency_insights.clear` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desmarcou a configuração de política para exibir insights de dependência em qualquer organização de uma empresa.{% ifversion ghec %} Para obter mais informações, confira "[Como impor uma política de visibilidade dos insights de dependência](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)".{% endif %}
| `members_can_view_dependency_insights.disable` | A capacidade dos membros da empresa de ver insights de dependência foi desabilitada. Os membros não podem ver insights de dependência em qualquer organização de uma empresa.{% ifversion ghec %} Para obter mais informações, confira "[Como impor uma política de visibilidade dos insights de dependência](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)".{% endif %}
| `members_can_view_dependency_insights.enable` |  A capacidade dos membros da empresa de ver insights de dependência foi habilitada. Os membros podem ver insights de dependência em qualquer organização de uma empresa.{% ifversion ghec %} Para obter mais informações, confira "[Como impor uma política de visibilidade dos insights de dependência](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)".{% endif %}

## Ações da categoria `migration`

| Ação | Descrição
|--------|-------------
| `migration.create` | Foi criado um arquivo de migração para transferência de dados de um local de *origem* (como uma organização do {% data variables.product.prodname_dotcom_the_website %} ou uma instância do {% data variables.product.prodname_ghe_server %}) para uma instância de *destino* do {% data variables.product.prodname_ghe_server %}.
| `migration.destroy_file` | Foi excluído um arquivo de migração para transferência de dados de um local de *origem* (como uma organização do {% data variables.product.prodname_dotcom_the_website %} ou uma instância do {% data variables.product.prodname_ghe_server %}) para uma instância de *destino* do {% data variables.product.prodname_ghe_server %}.
|  `migration.download` | Foi baixado um arquivo de migração para transferência de dados de um local de *origem* (como uma organização do {% data variables.product.prodname_dotcom_the_website %} ou uma instância do {% data variables.product.prodname_ghe_server %}) para uma instância de *destino* do {% data variables.product.prodname_ghe_server %}.
{%- endif %}

## Ações da categoria `oauth_access`

| Ação | Descrição
|--------|-------------
`oauth_access.create`   | Um [token de acesso OAuth][] foi gerado para uma conta de usuário. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
`oauth_access.destroy`  | Um [token de acesso OAuth][] foi excluído de uma conta de usuário.

  [token de acesso OAuth]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

## Ações da categoria `oauth_application`

| Ação | Descrição
|--------|-------------
| `oauth_application.create`           | Um [aplicativo OAuth][] foi criado para uma conta de usuário ou uma organização.
| `oauth_application.destroy`          | Um [aplicativo OAuth][] foi excluído de uma conta de usuário ou uma organização.
{%- ifversion fpt or ghec %} | `oauth_application.generate_client_secret`   | A chave secreta de um [aplicativo OAuth][] foi gerada.
| `oauth_application.remove_client_secret`     | A chave secreta de um [aplicativo OAuth][] foi excluída.
{%- endif %} | `oauth_application.reset_secret`      | A chave secreta de um [aplicativo OAuth][] foi redefinida.
{%- ifversion fpt or ghec %} | `oauth_application.revoke_all_tokens` | Todos os tokens de usuário de um [aplicativo OAuth][] foram solicitados a serem revogados.
{%- endif %} | `oauth_application.revoke_tokens`     | Os tokens de um [aplicativo OAuth][] foram revogados.
| `oauth_application.transfer`          | Um [aplicativo OAuth][] foi transferido de uma conta de usuário ou de uma organização para outra.
{%- ifversion ghes or ghae %} | `oauth_application.unsuspend`         | Um [aplicativo OAuth][] teve a suspensão cancelada para uma conta de usuário ou uma organização.
{%- endif %}

  [Aplicativo OAuth]: /guides/basics-of-authentication/#registering-your-app

{%- ifversion fpt or ghec %}
## Ações da categoria `oauth_authorization`

| Ação | Descrição
|--------|-------------
| `oauth_authorization.create`          | Uma autorização para um aplicativo OAuth foi criada. Para obter mais informações, confira "[Como autorizar aplicativos OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".
| `oauth_authorization.destroy`          | Uma autorização para um aplicativo OAuth foi excluída. Para obter mais informações, confira "[Como autorizar aplicativos OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".
| `oauth_authorization.update`          | Uma autorização para um aplicativo OAuth foi atualizada. Para obter mais informações, confira "[Como autorizar aplicativos OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".
{%- endif %}

## Ações da categoria `org`

| Ação | Descrição
|--------|-------------
| `org.accept_business_invitation` | Um convite enviado a uma organização para ingressar em uma empresa foi aceito. {% ifversion ghec %}Para obter mais informações, confira "[Como convidar uma organização a ingressar na sua conta corporativa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)".{% endif %}
| `org.add_billing_manager` | Um gerente de cobrança foi adicionado a uma organização. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como adicionar um gerente de cobrança à sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".{% endif %}
| `org.add_member` | Um usuário ingressou em uma organização.
| `org.advanced_security_disabled_for_new_repos` | A {% data variables.product.prodname_GH_advanced_security %} foi desabilitada para todos os novos repositórios de uma organização.
| `org.advanced_security_disabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} foi desabilitada para todos os repositórios de uma organização.
| `org.advanced_security_enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} foi habilitada para novos repositórios de uma organização.
| `org.advanced_security_enabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} foi habilitada para todos os repositórios de uma organização.
| `org.advanced_security_policy_selected_member_disabled` | Um proprietário da empresa impediu que os recursos de {% data variables.product.prodname_GH_advanced_security %} fossem habilitados para os repositórios pertencentes à organização. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_selected_member_enabled` | Um proprietário corporativo permitiu que recursos da {% data variables.product.prodname_GH_advanced_security %} fossem habilitados para os repositórios pertencentes à organização. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_update` | O proprietário de uma organização atualizou políticas para {% data variables.product.prodname_GH_advanced_security %} em uma empresa. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.async_delete` | Um usuário iniciou um trabalho em segundo plano para excluir uma organização.
{%- ifversion ghec %} | `org.audit_log_export` | Um proprietário da organização criou uma exportação do log de auditoria da organização. Se a exportação incluir uma consulta, o log relacionará a consulta usada e o número de entradas do log de auditoria que correspondem à consulta. Para obter mais informações, confira "[Como exportar a atividade de log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)".
{%- endif %} | `org.block_user` | Um proprietário da organização impediu um usuário de acessar os repositórios da organização. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como bloquear um usuário da sua organização](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".{% endif %} | `org.cancel_business_invitation` | Um convite para uma organização ingressar em uma empresa foi revogado. {% ifversion ghec %}Para obter mais informações, confira "[Como convidar uma organização a ingressar na sua conta corporativa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)".{% endif %} | `org.cancel_invitation` | Um convite enviado a um usuário para ingressar em uma organização foi revogado.
| `org.clear_actions_settings` | Um proprietário da organização desmarcou as configurações de política do {% data variables.product.prodname_actions %} de uma organização. Para obter mais informações, confira "[Como gerenciar as permissões do GitHub Actions da sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)".
| `org.clear_default_repository_permission` | Um proprietário da organização desmarcou a configuração de política de permissão do repositório base de uma organização. Para obter mais informações, confira "[Como definir as permissões base](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)".
| `org.clear_member_team_creation_permission` | Um proprietário da organização desmarcou a nova configuração de criação de equipes de uma organização. Para obter mais informações, confira "[Como definir as permissões de criação de equipe na sua organização](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)".
| `org.clear_reader_discussion_creation_permission` | Um proprietário da organização desmarcou a nova configuração de criação de discussões para uma organização. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como permitir ou não permitir que usuários com acesso de leitura criem discussões](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)".{% endif %} | `org.clear_members_can_create_repos`                 | Um proprietário da organização desmarcou uma restrição de criação de repositório em uma organização. Para obter mais informações, confira "[Como restringir a criação de repositório na sua organização](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)".
| `org.clear_members_can_invite_outside_collaborators` | Um proprietário da organização desmarcou a política de convite de colaboradores externos de uma organização. Para obter mais informações, confira "[Como definir permissões para adicionar colaboradores externos](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)".
| `org.clear_new_repository_default_branch_setting`    | Um proprietário da organização desmarcou o nome do branch padrão para a configuração de novos repositórios de uma organização. Para obter mais informações, confira "[Como definir o nome do branch padrão](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name)".
{%- ifversion fpt or ghec %} | `org.codespaces_trusted_repo_access_granted`         | O {% data variables.product.prodname_github_codespaces %} recebeu acesso de repositório confiável a todos os outros repositórios de uma organização. Para obter mais informações, confira "[Como gerenciar o acesso ao repositório para os codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)".
| `org.codespaces_trusted_repo_access_revoked`         | O acesso de repositório confiável do {% data variables.product.prodname_github_codespaces %} a todos os outros repositórios em uma organização foi revogado. Para obter mais informações, confira "[Como gerenciar o acesso ao repositório para os codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)".
{%- endif %}                                                                                                             | | `org.config.disable_collaborators_only` | O limite de interação somente para colaboradores de uma organização foi desabilitado. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como limitar as interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.disable_contributors_only` | O limite de interação somente para colaboradores anteriores de uma organização foi desabilitado. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como limitar as interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.disable_sockpuppet_disallowed` | O limite de interação somente para usuários existentes de uma organização foi desabilitado. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como limitar as interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.enable_collaborators_only` | O limite de interação somente para colaboradores de uma organização foi habilitado. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como limitar as interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.enable_contributors_only` | O limite de interação somente para colaboradores anteriores de uma organização foi habilitado. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como limitar as interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.enable_sockpuppet_disallowed` | O limite de interação somente para usuários existentes de uma organização foi habilitado. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como limitar as interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.confirm_business_invitation` | Um convite para uma organização ingressar em uma empresa foi confirmado. {% ifversion ghec %}Para obter mais informações, confira "[Como convidar uma organização a ingressar na sua conta corporativa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)".{% endif %} | `org.create` | Uma organização foi criada. Para obter mais informações, confira "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".
{%- ifversion fpt or ghec or ghes %} | `org.create_actions_secret` | Um segredo do {% data variables.product.prodname_actions %} foi criado para uma organização. Para obter mais informações, confira "[Como criar segredos criptografados para uma organização](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)".
{%- endif %} | `org.create_integration_secret` | Um segredo de integração do {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou do {% data variables.product.prodname_github_codespaces %}{% endif %} foi criado para uma organização.
| `org.delete`       | Uma organização foi excluída por um trabalho em segundo plano iniciado pelo usuário.
| `org.disable_member_team_creation_permission` | Um proprietário da organização limitou a criação de equipes aos proprietários. Para obter mais informações, confira "[Como definir as permissões de criação de equipe na sua organização](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)".
| `org.disable_reader_discussion_creation_permission` | Um proprietário da organização limitou a criação de discussões para usuários com, pelo menos, a permissão de triagem em uma organização. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como permitir ou não permitir que usuários com acesso de leitura criem discussões](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)".{% endif %} {%- ifversion fpt or ghec %} | `org.disable_oauth_app_restrictions` | As restrições de acesso a aplicativos de terceiros de uma organização foram desabilitadas. Para obter mais informações, confira "[Como desabilitar as restrições de acesso do aplicativo OAuth da sua organização](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization)".
{%- endif %} {%- ifversion ghec %} | `org.disable_saml` | Um proprietário da organização desabilitou o logon único do SAML de uma organização.
{%- endif %} {%- ifversion not ghae %} | `org.disable_two_factor_requirement` | Um proprietário da organização desabilitou um requisito de autenticação de dois fatores para todos os membros{% ifversion fpt or ghec %}, gerentes de cobrança{% endif %} e colaboradores externos de uma organização.
{%- endif %} | `org.display_commenter_full_name_disabled` | Um proprietário da organização desabilitou a exibição do nome completo do autor de um comentário em uma organização. Os membros não podem ver o nome completo do autor de um comentário.
| `org.display_commenter_full_name_enabled` | Um proprietário da organização habilitou a exibição do nome completo do autor de um comentário em uma organização. Os membros podem ver o nome completo do autor de um comentário.
| `org.enable_member_team_creation_permission` | Um proprietário da organização permitiu aos membros criar equipes. Para obter mais informações, confira "[Como definir as permissões de criação de equipe na sua organização](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)".
| `org.enable_reader_discussion_creation_permission` | Um proprietário da organização permitiu aos usuários com acesso de leitura criar discussões em uma organização. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como permitir ou não permitir que usuários com acesso de leitura criem discussões](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)".{% endif %} {%- ifversion fpt or ghec %} | `org.enable_oauth_app_restrictions` | As restrições de acesso a aplicativos de terceiros de uma organização foram habilitadas. Para obter mais informações, confira "[Como habilitar as restrições de acesso do aplicativo OAuth da sua organização](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization)".
{%- endif %} {%- ifversion ghec %} | `org.enable_saml` | Um proprietário da organização [habilitou o logon único do SAML](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) de uma organização.
{%- endif %} {%- ifversion not ghae %} | `org.enable_two_factor_requirement` | Um proprietário da organização exige a autenticação de dois fatores para todos os membros{% ifversion fpt or ghec %}, gerentes de cobrança{% endif %} e colaboradores externos de uma organização.
{%- endif %} | `org.integration_manager_added` | Um proprietário da organização permitiu a um membro acesso para gerenciar todos os Aplicativos do GitHub pertencentes a uma organização.
| `org.integration_manager_removed` | Um proprietário da organização removeu o acesso para gerenciar todos os Aplicativos GitHub pertencentes a uma organização de um membro da organização.
| `org.invite_member` | Um novo usuário foi convidado a ingressar em uma organização. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como convidar usuários a ingressar na sua organização](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".{% endif %} | `org.invite_to_business` | Uma organização foi convidada a ingressar em uma empresa.
| `org.members_can_update_protected_branches.clear` | Um proprietário da organização removeu a definição de uma política para indicar se os membros de uma organização podem atualizar branches protegidos em repositórios de uma organização. Os administradores da organização podem escolher se permitirão a atualização das configurações de branches protegidos.
| `org.members_can_update_protected_branches.disable` | A capacidade dos membros da empresa de atualizar branches protegidos foi desabilitada. Somente os proprietários da empresa podem atualizar os branches protegidos.
| `org.members_can_update_protected_branches.enable` | A capacidade dos membros da empresa de atualizar branches protegidos foi habilitada. Os membros de uma organização podem atualizar branches protegidos.
{%- ifversion fpt or ghec %} | `org.oauth_app_access_approved` | Um proprietário [permitiu à organização acesso a um {% data variables.product.prodname_oauth_app %}](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
| `org.oauth_app_access_denied` | Um proprietário [desabilitou o acesso do {% data variables.product.prodname_oauth_app %} previamente aprovado](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization) a uma organização.
| `org.oauth_app_access_requested` | Um membro da organização solicitou a um proprietário a permissão de um acesso do {% data variables.product.prodname_oauth_app %} a uma organização.
{%- endif %} | `org.recreate` | Uma organização foi restaurada.
| `org.register_self_hosted_runner` | Um novo executor auto-hospedado foi registrado. Para obter mais informações, confira "[Como adicionar um executor auto-hospedado a uma organização](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)".
| `org.remove_actions_secret` | Um segredo do {% data variables.product.prodname_actions %} foi removido.
| `org.remove_integration_secret` | Um segredo de integração do {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou dos {% data variables.product.prodname_github_codespaces %}{% endif %} foi removido de uma organização.
| `org.remove_billing_manager` | Um proprietário removeu um gerente de cobrança de uma organização. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como remover um gerente de cobrança da sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization)"{% endif %}{% ifversion not ghae %} ou quando a [autenticação de dois fatores era obrigatória em uma organização](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) e um gerente de cobrança não usava a 2FA ou a desabilitava.{% endif %} | `org.remove_member` | Um [proprietário removeu um membro de uma organização](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %} ou quando [a autenticação de dois fatores era obrigatória em uma organização](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) e um membro da organização não usava a 2FA ou a desabilitava{% endif %}. Além disso, um [membro da organização se removeu](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) de uma organização.
| `org.remove_outside_collaborator` | Um proprietário removeu um colaborador externo de uma organização{% ifversion not ghae %} ou quando [a autenticação de dois fatores era obrigatória em uma organização](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) e um colaborador externo não usava a 2FA ou a desabilitava{% endif %}.
| `org.remove_self_hosted_runner` | Um executor auto-hospedado foi removido. Para obter mais informações, confira "[Como remover um executor de uma organização](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)".
| `org.rename` | Uma organização foi renomeada.
| `org.restore_member` | Um membro da organização foi restaurado. Para obter mais informações, confira "[Como restabelecer um ex-membro da sua organização](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)".
{%- ifversion ghec %} | `org.revoke_external_identity` | Um proprietário da organização revogou a identidade vinculada de um membro. Para obter mais informações, confira "[Como exibir e gerenciar o acesso SAML de um membro à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".
| `org.revoke_sso_session` | Um proprietário da organização revogou a sessão do SAML de um membro. Para obter mais informações, confira "[Como exibir e gerenciar o acesso SAML de um membro à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".
{%- endif %} | `org.runner_group_created` | Um grupo de executores auto-hospedados foi criado. Para obter mais informações, confira "[Como criar um grupo de executores auto-hospedados para uma organização](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".
| `org.runner_group_removed` | Um grupo de executores auto-hospedados foi removido. Para obter mais informações, confira "[Como remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
{%- ifversion fpt or ghec %} | `org.runner_group_renamed` | Um grupo de executores auto-hospedados foi renomeado. Para obter mais informações, confira "[Como alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
{%- endif %} | `org.runner_group_updated` | A configuração de um grupo de executores auto-hospedados foi alterada. Para obter mais informações, confira "[Como alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `org.runner_group_runner_removed` | A API REST foi usada para remover um executor auto-hospedado de um grupo. Para obter mais informações, confira "[Remover um executor auto-hospedado de um grupo de uma organização](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".
| `org.runner_group_runners_added` | Um executor auto-hospedado foi adicionado a um grupo. Para obter mais informações, confira [Como mover um executor auto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `org.runner_group_runners_updated`| A lista de membros de um grupo de executores foi atualizada. Para obter mais informações, confira "[Definir executores auto-hospedados em um grupo de uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
{%- ifversion fpt or ghec %} | `org.runner_group_visiblity_updated` | A visibilidade de um grupo de executores auto-hospedados foi atualizada por meio da API REST. Para obter mais informações, confira "[Atualizar um grupo de executores auto-hospedados de uma organização](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)".
{%- endif %} {%- ifversion code-security-audit-log-events %} | `org.secret_scanning_push_protection_custom_message_disabled` | A mensagem personalizada disparada por uma tentativa de push para um repositório protegido contra push foi desabilitada na organização. Para obter mais informações, confira "[Como proteger pushes com a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
| `org.secret_scanning_push_protection_custom_message_enabled` | A mensagem personalizada disparada por uma tentativa de push para um repositório protegido contra push foi habilitada na organização. Para obter mais informações, confira "[Como proteger pushes com a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
| `org.secret_scanning_push_protection_custom_message_updated` | A mensagem personalizada disparada por uma tentativa de push para um repositório protegido contra push foi atualizada na organização. Para obter mais informações, confira "[Como proteger pushes com a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org.secret_scanning_push_protection_disable` | Um proprietário ou um administrador da organização desabilitou uma proteção de push para a verificação de segredos. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
| `org.secret_scanning_push_protection_enable` | Um proprietário ou um administrador da organização habilitou uma proteção por push para a verificação de segredos.
{%- endif %} | `org.self_hosted_runner_online` | O aplicativo executor foi iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `org.self_hosted_runner_offline` | O aplicativo executor foi interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
{%- ifversion fpt or ghec or ghes %} | `org.self_hosted_runner_updated` | O aplicativo executor foi atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".
{%- endif %} {%- ifversion fpt or ghec %} | `org.set_actions_fork_pr_approvals_policy` | A configuração para exigir aprovações para fluxos de trabalho de forks públicos foi alterada para uma organização. Para obter mais informações, confira "[Como exigir a aprovação para fluxos de trabalho em forks públicos](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)".
{%- endif %} | `org.set_actions_retention_limit` | O período de retenção para artefatos e logs do {% data variables.product.prodname_actions %} em uma organização foi alterado. Para obter mais informações, confira "[Como configurar o período de retenção dos artefatos e dos logs do {% data variables.product.prodname_actions %} na sua organização](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)".
{%- ifversion fpt or ghec or ghes %} | `org.set_fork_pr_workflows_policy` | A política para fluxos de trabalho em forks de repositório privado foi alterada. Para obter mais informações, confira "[Como habilitar fluxos de trabalho para forks de repositório privado](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)".
{%- endif %} {%- ifversion ghes or audit-log-sso-response-events %} | `org.sso_response` | Uma resposta de SSO (logon único) do SAML foi gerada quando um membro tentou se autenticar com a sua organização. Esse evento só está disponível por meio do streaming de log de auditoria e da API REST.
{%- endif %} {%- ifversion ghec %} | `org.transfer` | Uma organização foi transferida entre contas corporativas. Para obter mais informações, confira "[Como adicionar organizações à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)".
{%- endif %} {%- ifversion not ghae %} | `org.transform`    | Uma conta de usuário foi convertida em uma organização. Para obter mais informações, confira "[Como converter um usuário em uma organização](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)".
{%- endif %} | `org.unblock_user` | Um proprietário da organização desbloqueou um usuário de uma organização. {% ifversion fpt or ghec %}Para obter mais informações, confira "[Como desbloquear um usuário da sua organização](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)".{% endif %} {%- ifversion fpt or ghec or ghes %} | `org.update_actions_secret` | Um segredo do {% data variables.product.prodname_actions %} foi atualizado.
{%- endif %} | `org.update_integration_secret` | Um segredo de integração do {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou do {% data variables.product.prodname_github_codespaces %}{% endif %} foi atualizado para uma organização.
| `org.update_default_repository_permission` | Um proprietário da organização alterou o nível de permissão do repositório padrão para os membros da organização.
| `org.update_member` | Um proprietário da organização alterou a função de uma pessoa de proprietário para membro ou de membro para proprietário.
| `org.update_member_repository_creation_permission` | Um proprietário da organização alterou a permissão para criar repositórios para os membros da organização.
| `org.update_member_repository_invitation_permission` | Um proprietário da organização alterou a configuração de política para os membros da organização convidarem colaboradores externos para repositórios. Para obter mais informações, confira "[Como definir permissões para adicionar colaboradores externos](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)".
| `org.update_new_repository_default_branch_setting` | Um proprietário da organização alterou o nome do branch padrão para os novos repositórios da organização. Para obter mais informações, confira "[Como gerenciar o nome do branch padrão para repositórios na sua organização](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)".
{%- ifversion ghec or ghae %} | `org.update_saml_provider_settings` | As configurações do provedor SAML de uma organização foram atualizadas.
| `org.update_terms_of_service` | Uma organização foi alterada entre os Termos de Serviço Padrão e os Termos de Serviço Corporativos. {% ifversion ghec %}Para obter mais informações, confira "[Como atualizar para os Termos de Serviço Corporativos](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service)".{% endif %} {%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Ações da categoria `org_credential_authorization`

| Ação | Descrição
|--------|-------------
| `org_credential_authorization.deauthorized` | Um membro desautorizou as credenciais para uso com o logon único do SAML. {% ifversion ghec or ghae %}Para obter mais informações, confira "[Como se autenticar com o logon único do SAML](/authentication/authenticating-with-saml-single-sign-on)".{% endif %}
| `org_credential_authorization.grant` | Um membro autorizou as credenciais para uso com o logon único do SAML. {% ifversion ghec or ghae %}Para obter mais informações, confira "[Como se autenticar com o logon único do SAML](/authentication/authenticating-with-saml-single-sign-on)".{% endif %}
| `org_credential_authorization.revoke` | Um proprietário revogou as credenciais autorizadas. {% ifversion ghec %}Para obter mais informações, confira "[Como ver e gerenciar suas sessões ativas do SAML ](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)".{% endif %}
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## Ações da categoria `org_secret_scanning_custom_pattern`

| Ação | Descrição
|--------|---------------
| `org_secret_scanning_custom_pattern.create` | Um padrão personalizado foi publicado para a verificação de segredos em uma organização. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)".
| `org_secret_scanning_custom_pattern.delete` | Um padrão personalizado foi removido da verificação de segredos em uma organização. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)".
| `org_secret_scanning_custom_pattern.update` |As alterações em um padrão personalizado são salvas para a verificação de segredos em uma organização. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)".
{%- endif %}

## Ações da categoria `organization_default_label`

| Ação | Descrição
|--------|-------------
| `organization_default_label.create` | Um rótulo padrão para repositórios em uma organização foi criado. Para obter mais informações, confira "[Como criar um rótulo padrão](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label)".
| `organization_default_label.update` | Um rótulo padrão para repositórios em uma organização foi editado. Para obter mais informações, confira "[Como editar um rótulo padrão](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label)".
| `organization_default_label.destroy` | Um rótulo padrão para repositórios em uma organização foi excluído. Para obter mais informações, confira "[Como excluir um rótulo padrão](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label)".

{%- ifversion fpt or ghec or ghes %}
## Ações da categoria `organization_domain`

| Ação | Descrição
|--------|-------------
| `organization_domain.approve` | Um domínio corporativo foi aprovado para uma organização. Para obter mais informações, confira "[Como aprovar um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization)".
| `organization_domain.create` | Um domínio corporativo foi adicionado a uma organização. Para obter mais informações, confira "[Como verificar um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)".
| `organization_domain.destroy` | Um domínio corporativo foi removido de uma organização. Para obter mais informações, confira "[Como remover um domínio aprovado ou verificado](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain)".
| `organization_domain.verify` | Um domínio corporativo foi verificado para uma organização. Para obter mais informações, confira "[Como verificar um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)".

## Ações da categoria `organization_projects_change`

| Ação | Descrição
|--------|-------------
| `organization_projects_change.clear` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desmarcou a configuração de política para quadros de projetos em toda a organização em uma empresa. Para obter mais informações, confira "[Impor políticas para projetos na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)".
| `organization_projects_change.disable` | Os projetos da organização foram desabilitados para todas as organizações de uma empresa. Para obter mais informações, confira "[Impor políticas para projetos na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)".
| `organization_projects_change.enable` | Os projetos da organização foram habilitados para todas as organizações de uma empresa. Para obter mais informações, confira "[Impor políticas para projetos na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)".
{%- endif %}

## Ações da categoria `packages`

| Ação | Descrição
|--------|-------------
| `packages.insecure_hash` | O Maven publicou um hash não seguro para uma versão específica do pacote.
| `packages.package_deleted` | Um pacote foi excluído de uma organização.{% ifversion fpt or ghec or ghes %} Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}
| `packages.package_published` | Um pacote foi publicado ou publicado novamente em uma organização.
| `packages.package_restored` | Um pacote inteiro foi restaurado.{% ifversion fpt or ghec or ghes %} Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}
| `packages.package_version_deleted` | Uma versão específica do pacote foi excluída.{% ifversion fpt or ghec or ghes %} Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}
| `packages.package_version_published` | Uma versão específica do pacote foi publicada ou publicada novamente em um pacote.
| `packages.package_version_restored` | Uma versão específica do pacote foi excluída.{% ifversion fpt or ghec or ghes %} Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}
| `packages.part_upload` | Uma versão específica do pacote foi parcialmente carregada em uma organização.
| `packages.upstream_package_fetched` | Uma versão específica do pacote foi buscada do proxy upstream do npm.
| `packages.version_download` | Uma versão específica do pacote foi baixada.
| `packages.version_upload` | Uma versão específica do pacote foi carregada.

{%- ifversion fpt or ghec %}
## Ações da categoria `pages_protected_domain`

| Ação | Descrição
|--------|-------------
| `pages_protected_domain.create` | Um domínio verificado do {% data variables.product.prodname_pages %} foi criado para uma organização ou uma empresa. Para obter mais informações, confira "[Como verificar seu domínio personalizado do {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)".
| `pages_protected_domain.delete` | Um domínio verificado do {% data variables.product.prodname_pages %} foi excluído de uma organização ou uma empresa. Para obter mais informações, confira "[Como verificar seu domínio personalizado do {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)".
| `pages_protected_domain.verify`  | Um domínio do {% data variables.product.prodname_pages %} foi verificado para uma organização ou uma empresa. Para obter mais informações, confira "[Como verificar seu domínio personalizado do {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)".

## Ações da categoria `payment_method`

| Ação | Descrição
|--------|-------------
| `payment_method.create` | Uma nova forma de pagamento foi adicionada, como um novo cartão de crédito ou uma conta do PayPal.
| `payment_method.remove` | Uma forma de pagamento foi removida.
| `payment_method.update` | Uma forma de pagamento existente foi atualizada.

## Ações da categoria `prebuild_configuration`

| Ação | Descrição
|--------|-------------
| `prebuild_configuration.create` | Uma configuração de pré-build dos {% data variables.product.prodname_github_codespaces %} para um repositório foi criada. Para obter mais informações, confira "[Sobre as pré-compilações de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".
| `prebuild_configuration.destroy` | Uma configuração de pré-build dos {% data variables.product.prodname_github_codespaces %} para um repositório foi excluída. Para obter mais informações, confira "[Sobre as pré-compilações de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".
| `prebuild_configuration.run_triggered` | Um usuário iniciou a execução de uma configuração de pré-build dos {% data variables.product.prodname_github_codespaces %} para um branch de repositório. Para obter mais informações, confira "[Sobre as pré-compilações de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".
| `prebuild_configuration.update` | Uma configuração de pré-build dos {% data variables.product.prodname_github_codespaces %} para um repositório foi editada. Para obter mais informações, confira "[Sobre as pré-compilações de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".
{%- endif %}

{%- ifversion ghes %}
## Ações da categoria `pre_receive_environment`

| Ação | Descrição
| ------ | -----------
| `pre_receive_environment.create` | Um ambiente de gancho de pré-recebimento foi criado. Para obter mais informações, confira "[Como criar um ambiente de gancho de pré-recebimento](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)".
| `pre_receive_environment.destroy` | Um ambiente de gancho de pré-recebimento foi excluído. Para obter mais informações, confira "[Como criar um ambiente de gancho de pré-recebimento](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)".
| `pre_receive_environment.download` | Um ambiente de gancho de pré-recebimento foi baixado. Para obter mais informações, confira "[Como criar um ambiente de gancho de pré-recebimento](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)".
| `pre_receive_environment.update` | Um ambiente de gancho de pré-recebimento foi atualizado. Para obter mais informações, confira "[Como criar um ambiente de gancho de pré-recebimento](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)".

## Ações da categoria `pre_receive_hook`

| Ação | Descrição
|--------|-------------
| `pre_receive_hook.create` | Um gancho de pré-recebimento foi criado. Para obter mais informações, confira "[Como criar ganchos de pré-recebimento](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks)".
| `pre_receive_hook.destroy` | Um gancho de pré-recebimento foi excluído. Para obter mais informações, confira "[Como excluir ganchos de pré-recebimento](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks)".
| `pre_receive_hook.enforcement` | Uma configuração de imposição de gancho de pré-recebimento que permite que os administradores do repositório e da organização substituam a configuração do gancho foi habilitada ou desabilitada. Para obter mais informações, confira "[Como gerenciar ganchos de pré-recebimento no dispositivo GitHub Enterprise Server](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance)".
| `pre_receive_hook.rejected_push` | Um gancho de pré-recebimento rejeitou um push.
| `pre_receive_hook.update` | Um gancho de pré-recebimento foi criado. Para obter mais informações, confira "[Como editar ganchos de pré-recebimento](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks)".
| `pre_receive_hook.warned_push` | Um gancho de pré-recebimento forneceu um aviso sobre um push.
{%- endif %}

## Ações da categoria `private_repository_forking`

| Ação | Descrição
|--------|-------------
| `private_repository_forking.clear` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desmarcou a configuração de política para permitir forks de repositórios privados e internos, para um repositório, uma organização ou uma empresa. Para obter mais informações, confira "[Como gerenciar a política de criação de fork do seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)" [Como gerenciar a política de criação de fork da sua organização](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) e, para empresas, "[Como impor uma política para criação de fork de repositórios privados ou internos](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)".
| `private_repository_forking.disable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} desabilitou a configuração de política para permitir forks de repositórios privados e internos, para um repositório, uma organização ou uma empresa. Os repositórios privados e internos nunca podem ter forks. Para obter mais informações, confira "[Como gerenciar a política de criação de fork do seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)" [Como gerenciar a política de criação de fork da sua organização](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) e, para empresas, "[Como impor uma política para criação de fork de repositórios privados ou internos](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)".
| `private_repository_forking.enable` | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} habilitou a configuração de política para permitir forks de repositórios privados e internos, para um repositório, uma organização ou uma empresa. Os repositórios privados e internos sempre têm permissão para terem forks. Para obter mais informações, confira "[Como gerenciar a política de criação de fork do seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)" [Como gerenciar a política de criação de fork da sua organização](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) e, para empresas, "[Como impor uma política para criação de fork de repositórios privados ou internos](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)".

{%- ifversion fpt or ghec %}
## Ações da categoria `profile_picture`

| Ação | Descrição
|--------|-------------
| `profile_picture.update` | Uma imagem de perfil foi atualizada.
{%- endif %}

## Ações da categoria `project`

| Ação | Descrição
|--------|-------------
| `project.access` | A visibilidade de um quadro de projetos foi alterada. Para obter mais informações, confira "[Como alterar a visibilidade do quadro de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)".
| `project.close` | Um quadro de projetos foi fechado. Para obter mais informações, confira "[Como fechar um quadro de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)".
| `project.create` | Um quadro de projetos foi criado. Para obter mais informações, confira "[Como criar um quadro de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)".
| `project.delete` | Um quadro de projetos foi excluído. Para obter mais informações, confira "[Como excluir um quadro de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)".
| `project.link` | Um repositório estava vinculado a um quadro de projetos. Para obter mais informações, confira "[Como vincular um repositório a um quadro de projeto](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)".
| `project.open` | Um quadro de projetos foi reaberto. Para obter mais informações, confira "[Como reabrir um quadro de projetos fechado](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board)".
| `project.rename` | Um quadro de projetos foi renomeado. Para obter mais informações, confira "[Como editar um quadro de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)".
| `project.unlink` | Um repositório foi desvinculado de um quadro de projetos. Para obter mais informações, confira "[Como vincular um repositório a um quadro de projeto](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)".
| `project.update_org_permission` | A permissão de nível base do projeto para todos os membros da organização foi alterada ou removida. Para obter mais informações, confira "[Como gerenciar o acesso a um quadro de projetos para membros da organização](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)".
| `project.update_team_permission` | O nível de permissão do quadro de projetos de uma equipe foi alterado ou quando uma equipe foi adicionada ou removida de um quadro de projetos. Para obter mais informações, confira "[Como gerenciar o acesso de uma equipe a um quadro de projetos da organização](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)".
| `project.update_user_permission` | Um membro da organização ou um colaborador externo foi adicionado ou removido de um quadro de projetos ou teve o nível de permissão alterado. Para obter mais informações, confira "[Como gerenciar o acesso de uma pessoa a um quadro de projetos da organização](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)".

{%- ifversion projects-v2 %}
## Ações da categoria `project_field`

| Ação | Descrição
|--------|-------------
| `project_field.create` | Um campo foi criado em um quadro de projetos. Para obter mais informações, confira "[Noções básicas sobre tipos de campo](/issues/planning-and-tracking-with-projects/understanding-field-types)".
| `project_field.delete` | Um campo foi excluído em um quadro de projetos. Para obter mais informações, confira "[Como excluir campos](/issues/planning-and-tracking-with-projects/understanding-field-types/deleting-fields)".

## Ações da categoria `project_view`

| Ação | Descrição
|--------|-------------
| `project_view.create` | Uma exibição foi criada em um quadro de projetos. Para obter mais informações, confira "[Como gerenciar suas exibições](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)".
| `project_view.delete` | Uma exibição foi excluída de um quadro de projetos. Para obter mais informações, confira "[Como gerenciar suas exibições](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)".
{%- endif %}

## Ações da categoria `protected_branch`

| Ação | Descrição
|--------|-------------
| `protected_branch.create ` | A proteção do branch foi habilitada em um branch.
| `protected_branch.destroy` | A proteção do branch foi desabilitada em um branch.
| `protected_branch.dismiss_stale_reviews ` | A imposição de ignorar solicitações de pull obsoletas foi atualizada em um branch.
{%- ifversion ghes %} | `protected_branch.dismissal_restricted_users_teams` | A imposição de restringir usuários e/ou equipes que podem ignorar revisões foi atualizada em um branch.
{%- endif %} | `protected_branch.policy_override ` | Um requisito de proteção de branch foi substituído por um administrador do repositório.
| `protected_branch.rejected_ref_update ` | Uma tentativa de atualização do branch foi rejeitada.
| `protected_branch.required_status_override` | O requisito de proteção de branch de verificações de status obrigatórias foi substituído por um administrador do repositório.
| `protected_branch.review_policy_and_required_status_override` | As revisões obrigatórias e os requisitos de proteção de branch de verificações de status obrigatórias foram substituídos por um administrador do repositório.
| `protected_branch.review_policy_override` | O requisito de proteção de branch de revisões obrigatórias foi substituído por um administrador do repositório.
| `protected_branch.update_admin_enforced ` | A proteção do branch foi imposta aos administradores do repositório.
{%- ifversion ghes %} | `protected_branch.update_allow_deletions_enforcement_level` | A imposição de permitir que usuários com acesso de push excluam branches correspondentes foi atualizada em um branch.
| `protected_branch.update_allow_force_pushes_enforcement_level` | A imposição de permitir pushes forçados para todos os usuários com acesso de push foi atualizada em um branch.
| `protected_branch.update_linear_history_requirement_enforcement_level` | A imposição da exigir um histórico linear de commits foi atualizada em um branch.
{%- endif %} | `protected_branch.update_pull_request_reviews_enforcement_level ` | A imposição de revisões obrigatórias de solicitação de pull foi atualizada em um branch. Pode ser `0`(desativado), `1`(não administradores) ou `2`(todos).
| `protected_branch.update_require_code_owner_review ` | A imposição da revisão obrigatória do proprietário do código foi atualizada em um branch.
| `protected_branch.update_required_approving_review_count` | A imposição do número obrigatório de aprovações antes de a mesclagem ser atualizada em um branch.
| `protected_branch.update_required_status_checks_enforcement_level ` | A imposição de verificações de status obrigatórias foi atualizada em um branch.
| `protected_branch.update_signature_requirement_enforcement_level ` | A imposição de assinaturas de commit obrigatórias foi atualizada em um branch.
| `protected_branch.update_strict_required_status_checks_policy` | A imposição de verificações de status obrigatórias foi atualizada em um branch.
| `protected_branch.update_name` | Um padrão de nome de branch foi atualizado para um branch.

## Ações da categoria `public_key`

| Ação | Descrição
|--------|-------------
| `public_key.create` | Uma chave SSH foi [adicionada][add key] a uma conta de usuário ou uma [chave de implantação][] foi adicionada a um repositório.
| `public_key.delete` | Uma chave SSH foi removida de uma conta de usuário ou uma [chave de implantação][] foi removida de um repositório.
| `public_key.update` | A chave SSH de uma conta de usuário ou a [chave de implantação][] de um repositório não foi atualizada.
| `public_key.unverification_failure` | Não foi possível cancelar a verificação da chave SSH de uma conta de usuário ou da [chave de implantação][] de um repositório.
| `public_key.unverify` | Foi cancelada a verificação da chave SSH de uma conta de usuário ou da [chave de implantação][] de um repositório.
| `public_key.verification_failure` | A chave SSH de uma conta de usuário ou a [chave de implantação][] de um repositório não pôde ser verificada.
| `public_key.verify` | A chave SSH de uma conta de usuário ou a [chave de implantação][] de um repositório foi verificada.

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [chave de implantação]: /developers/overview/managing-deploy-keys#deploy-keys

## Ações da categoria `pull_request`

| Ação | Descrição
|--------|-------------
| `pull_request.close` | Uma solicitação de pull foi fechada sem ser mesclada. Para obter mais informações, confira "[Como fechar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)".
| `pull_request.converted_to_draft` | Uma solicitação de pull foi convertida em um rascunho. Para obter mais informações, confira "[Como alterar a fase de uma solicitação de pull](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)".
| `pull_request.create` | Uma solicitação de pull foi criada. Para obter mais informações, confira "[Como criar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)".
| `pull_request.create_review_request` | Uma revisão foi solicitada em uma solicitação de pull. Para obter mais informações, confira "[Sobre as revisões de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".
| `pull_request.in_progress` | Uma solicitação de pull foi marcada como em andamento.
| `pull_request.indirect_merge` | Uma solicitação de pull foi considerada mesclada porque os commits da solicitação de pull foram mesclados no branch de destino.
| `pull_request.merge` | Uma solicitação de pull foi mesclada. Para obter mais informações, confira "[Como mesclar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)".
| `pull_request.ready_for_review` | Uma solicitação de pull foi marcada como pronta para revisão. Para obter mais informações, confira "[Como alterar a fase de uma solicitação de pull](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)".
| `pull_request.remove_review_request` | Uma solicitação de revisão foi removida de uma solicitação de pull. Para obter mais informações, confira "[Sobre as revisões de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".
| `pull_request.reopen` | Uma solicitação de pull foi reaberta depois de ter sido fechada anteriormente.
| `pull_request_review.delete` | Uma revisão de uma solicitação de pull foi excluída.
| `pull_request_review.dismiss` | Uma revisão de uma solicitação de pull foi ignorada. Para obter mais informações, confira "[Como ignorar uma revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".
| `pull_request_review.submit` | Uma revisão foi enviada para uma solicitação de pull. Para obter mais informações, confira "[Sobre as revisões de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".

## Ações da categoria `pull_request_review`

| Ação | Descrição
|--------|-------------
| `pull_request_review.delete` | Uma revisão de uma solicitação de pull foi excluída.
| `pull_request_review.dismiss` | Uma revisão de uma solicitação de pull foi ignorada. Para obter mais informações, confira "[Como ignorar uma revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".
| `pull_request_review.submit` | Uma revisão em uma solicitação de pull foi enviada. Para obter mais informações, confira "[Como enviar sua revisão](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review)".

## Ações da categoria `pull_request_review_comment`

| Ação | Descrição
|--------|-------------
| `pull_request_review_comment.create` | Um comentário de revisão foi adicionado a uma solicitação de pull. Para obter mais informações, confira "[Sobre as revisões de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".
| `pull_request_review_comment.delete` | Um comentário de revisão em uma solicitação de pull foi excluído.
| `pull_request_review_comment.update` | Um comentário de revisão em uma solicitação de pull foi alterado.

## Ações da categoria `repo`

| Ação | Descrição
|--------|-------------
| `repo.access`         | A visibilidade de um repositório foi alterada para privada{%- ifversion ghes %}, pública,{% endif %} ou interna.
| `repo.actions_enabled` | O {% data variables.product.prodname_actions %} foi habilitado em um repositório.
| `repo.add_member`     | Um colaborador foi adicionado ao repositório.
| `repo.add_topic`     | Um tópico foi adicionado a um repositório.
| `repo.advanced_security_disabled` | A {% data variables.product.prodname_GH_advanced_security %} foi desabilitada para um repositório.
| `repo.advanced_security_enabled` | A {% data variables.product.prodname_GH_advanced_security %} foi habilitada para um repositório.
| `repo.advanced_security_policy_selected_member_disabled` | Um administrador de repositório impediu que os recursos de {% data variables.product.prodname_GH_advanced_security %} fossem habilitados para um repositório.
| `repo.advanced_security_policy_selected_member_enabled` | Um administrador de repositório permitiu que os recursos de {% data variables.product.prodname_GH_advanced_security %} fossem habilitados para um repositório.
| `repo.archived`       | Um repositório foi arquivado. Para obter mais informações, confira "[Como arquivar um repositório do {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".
| `repo.code_scanning_analysis_deleted` | A análise de verificação de código de um repositório foi excluída. Para obter mais informações, confira "[Excluir uma análise de verificação de código de um repositório](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository)".
| `repo.change_merge_setting` | As opções de mesclagem da solicitação de pull foram alteradas para um repositório.
| `repo.clear_actions_settings` | Um administrador de repositório desmarcou as configurações de política do {% data variables.product.prodname_actions %} de um repositório.
| `repo.config`         | Um administrador de repositório bloqueou os pushes forçados. Para obter mais informações, confira [Bloquear pushes forçados para um repositório](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/) para um repositório.
{%- ifversion fpt or ghec %} | `repo.config.disable_collaborators_only` | O limite de interação somente para colaboradores foi desabilitado. Para obter mais informações, confira "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.disable_contributors_only` | O limite de interação somente para colaboradores anteriores foi desabilitado em um repositório. Para obter mais informações, confira "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.disable_sockpuppet_disallowed` | O limite de interação somente para usuários existentes foi desabilitado em um repositório. Para obter mais informações, confira "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.enable_collaborators_only` | O limite de interação somente para colaboradores foi habilitado em um repositório. Os usuários que não são colaboradores nem membros da organização não puderam interagir com um repositório por uma duração definida. Para obter mais informações, confira "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.enable_contributors_only` | O limite de interação somente para colaboradores anteriores foi habilitado em um repositório. Os usuários que não são colaboradores anteriores, colaboradores ou membros da organização não puderam interagir com um repositório por uma duração definida. Para obter mais informações, confira "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.enable_sockpuppet_disallowed` | O limite de interação para usuários existentes foi habilitado em um repositório. Os novos usuários não podem interagir com um repositório por uma duração definida. Os usuários existentes do repositório, os colaboradores ou os membros da organização podem interagir com um repositório. Para obter mais informações, confira "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
{%- endif %} {%- ifversion ghes %} | `repo.config.disable_anonymous_git_access`| O acesso de leitura anônimo do Git foi desabilitado para um repositório. Para obter mais informações, confira "[Como habilitar o acesso de leitura anônimo do Git para um repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)".
| `repo.config.enable_anonymous_git_access` | O acesso de leitura anônimo do Git foi habilitado em um repositório. Para obter mais informações, confira "[Como habilitar o acesso de leitura anônimo do Git para um repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)".
| `repo.config.lock_anonymous_git_access` | O acesso de leitura anônimo do Git de um repositório foi bloqueado, impedindo que os administradores de repositório alterem (habilitem ou desabilitem) essa configuração. Para obter mais informações, confira "[Como impedir que os usuários alterem o acesso de leitura anônimo do Git](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)".
| `repo.config.unlock_anonymous_git_access` | O acesso de leitura anônimo do Git de um repositório foi desbloqueado, permitindo que os administradores de repositório alterem (habilitem ou desabilitem) essa configuração. Para obter mais informações, confira "[Como impedir que os usuários alterem o acesso de leitura anônimo do Git](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)".
{%- endif %} | `repo.create` | Um repositório foi criado.
| `repo.create_actions_secret` | Um segredo do {% data variables.product.prodname_actions %} foi criado para um repositório. Para obter mais informações, confira "[Como criar segredos criptografados para um repositório](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".
| `repo.create_integration_secret` | Um segredo de integração do {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou do {% data variables.product.prodname_github_codespaces %}{% endif %} foi criado para um repositório.
| `repo.destroy` | Um repositório foi excluído.
{%- ifversion ghes %} | `repo.disk_archive`  | Um repositório foi arquivado em disco. Para obter mais informações, confira "[Como arquivar repositórios](/repositories/archiving-a-github-repository/archiving-repositories)".
{%- endif %} | `repo.download_zip` | Um arquivo de código-fonte de um repositório foi baixado como um arquivo zip.
| `repo.pages_cname` | Um domínio personalizado do {% data variables.product.prodname_pages %} foi modificado em um repositório.
| `repo.pages_create` | Um site do {% data variables.product.prodname_pages %} foi criado.
| `repo.pages_destroy` | Um site do {% data variables.product.prodname_pages %} foi excluído.
| `repo.pages_https_redirect_disabled` | Os redirecionamentos HTTPS foram desabilitados para um site do {% data variables.product.prodname_pages %}.
| `repo.pages_https_redirect_enabled` | Os redirecionamentos HTTPS foram habilitados para um site do {% data variables.product.prodname_pages %}.
| `repo.pages_source` | A origem de um site do {% data variables.product.prodname_pages %} foi modificada.
| `repo.pages_private` | A visibilidade de um site do {% data variables.product.prodname_pages %} foi alterada para privada.
| `repo.pages_public` | A visibilidade de um site do {% data variables.product.prodname_pages %} foi alterada para pública.
| `repo.register_self_hosted_runner` | Um novo executor auto-hospedado foi registrado. Para obter mais informações, confira "[Como adicionar um executor auto-hospedado a um repositório](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)".
| `repo.remove_self_hosted_runner` | Um executor auto-hospedado foi removido. Para obter mais informações, confira "[Como remover um executor de um repositório](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".
| `repo.remove_actions_secret` | Um segredo do {% data variables.product.prodname_actions %} foi excluído de um repositório.
| `repo.remove_integration_secret` | Um segredo de integração do {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou do {% data variables.product.prodname_github_codespaces %}{% endif %} foi excluído de um repositório.
| `repo.remove_member` | Um colaborador foi removido de um repositório.
| `repo.remove_topic` | Um tópico foi removido de um repositório.
| `repo.rename` | Um repositório foi renomeado.
{%- ifversion fpt or ghec %} | `repo.set_actions_fork_pr_approvals_policy` | A configuração para exigir aprovações para fluxos de trabalho de forks públicos foi alterada para um repositório. Para obter mais informações, confira "[Como configurar a aprovação obrigatória para fluxos de trabalho em forks públicos](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)".
{%- endif %} | `repo.set_actions_retention_limit` | O período de retenção para artefatos e logs do {% data variables.product.prodname_actions %} em um repositório foi alterado. Para obter mais informações, confira "[Como configurar o período de retenção dos artefatos e dos logs do {% data variables.product.prodname_actions %} no seu repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)".
| `repo.self_hosted_runner_online` | O aplicativo executor foi iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `repo.self_hosted_runner_offline` | O aplicativo executor foi interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `repo.self_hosted_runner_updated` | O aplicativo executor foi atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".
| `repo.staff_unlock` | Um administrador da empresa ou uma equipe do GitHub (com a permissão de um administrador de repositório) desbloqueou temporariamente o repositório.
| `repo.transfer` | Um usuário aceitou uma solicitação para receber um repositório transferido.
| `repo.transfer_outgoing` | Um repositório foi transferido para outra rede de repositório.
| `repo.transfer_start` | Um usuário enviou uma solicitação para transferir um repositório para outro usuário ou outra organização.
| `repo.unarchived` | Um repositório teve o arquivamento cancelado. Para obter mais informações, confira "[Como arquivar um repositório do {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".
| `repo.update_actions_settings` | Um administrador de repositório alterou as configurações de política do {% data variables.product.prodname_actions %} de um repositório.
| `repo.update_actions_secret` | Um segredo do {% data variables.product.prodname_actions %} foi atualizado.
| `repo.update_actions_access_settings` | A configuração usada para controlar como um repositório foi usado pelos fluxos de trabalho do {% data variables.product.prodname_actions %} em outros repositórios foi alterada.
| `repo.update_default_branch` | O branch padrão de um repositório foi alterado.
| `repo.update_integration_secret` | Um segredo de integração do {% data variables.product.prodname_dependabot %} ou do {% data variables.product.prodname_github_codespaces %} foi atualizado em um repositório.
| `repo.update_member` | A permissão de um usuário em um repositório foi alterada.

{%- ifversion fpt or ghec %}
## Ações da categoria `repository_advisory`

| Ação | Descrição
|--------|-------------
| `repository_advisory.close` | Alguém fechou uma consultoria de segurança. Para obter mais informações, confira "[Sobre os avisos de segurança do {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
| `repository_advisory.cve_request` | Alguém solicitou um número de CVE (Vulnerabilidades e Exposições Comuns) do {% data variables.product.prodname_dotcom %} para um rascunho de consultoria de segurança.
| `repository_advisory.github_broadcast` | O {% data variables.product.prodname_dotcom %} disponibilizou uma consultoria de segurança como pública no {% data variables.product.prodname_advisory_database %}.
| `repository_advisory.github_withdraw` | O {% data variables.product.prodname_dotcom %} retirou uma consultoria de segurança que foi publicada por engano.
| `repository_advisory.open` | Alguém abriu um rascunho de consultoria de segurança.
| `repository_advisory.publish` | Alguém publicou uma consultoria de segurança.
| `repository_advisory.reopen` | Alguém reabriu uma consultoria de segurança como rascunho.
| `repository_advisory.update` | Alguém editou um rascunho ou publicou uma consultoria de segurança.

## Ações da categoria `repository_content_analysis`

| Ação | Descrição
|--------|-------------
| `repository_content_analysis.enable` | Um proprietário da organização ou um administrador de repositório [habilitou as configurações de uso de dados de um repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `repository_content_analysis.disable` | Um proprietário da organização ou um administrador de repositório [desabilitou as configurações de uso de dados de um repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

## Ações da categoria `repository_dependency_graph`

| Ação | Descrição
|--------|-------------
| `repository_dependency_graph.disable` | Um proprietário ou um administrador de repositório desabilitou o grafo de dependência de um repositório privado. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| `repository_dependency_graph.enable` | Um proprietário ou um administrador de repositório habilitou o grafo de dependência de um repositório privado.
{%- endif %}

## Ações da categoria `repository_image`

| Ação | Descrição
|--------|-------------
| `repository_image.create` | Uma imagem para representar um repositório foi carregada.
| `repository_image.destroy` | Uma imagem para representar um repositório foi excluída.

## Ações da categoria `repository_invitation`

| Ação | Descrição
|--------|-------------
| `repository_invitation.accept` | Um convite para ingressar em um repositório foi aceito.
| `repository_invitation.create` | Um convite para ingressar em um repositório foi enviado.
| `repository_invitation.reject` | Um convite para ingressar em um repositório foi cancelado.

## Ações da categoria `repository_projects_change`

| Ação | Descrição
|--------|-------------
| `repository_projects_change.clear` | A política de projetos do repositório foi removida de uma organização ou de todas as organizações da empresa. Os administradores da organização já podem controlar as configurações de projetos do repositório. Para obter mais informações, confira "[Como impor políticas para projetos na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)".
| `repository_projects_change.disable` | Os projetos de repositório foram desabilitados para um repositório, todos os repositórios de uma organização ou todas as organizações de uma empresa.
| `repository_projects_change.enable` | Os projetos de repositório foram habilitados para um repositório, todos os repositórios de uma organização ou todas as organizações de uma empresa.

{%- ifversion ghec or ghes or ghae %}
## Ações da categoria `repository_secret_scanning`

| Ação | Descrição
|--------|-------------
| `repository_secret_scanning.disable` | Um proprietário ou um administrador de repositório desabilitou a verificação de segredos para um repositório {% ifversion ghec %}privado ou interno {% endif %}. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)".
| `repository_secret_scanning.enable` | Um proprietário ou um administrador de repositório habilitou a verificação de segredos para um repositório {% ifversion ghec %}privado ou interno {% endif %}.
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}

## Ações da categoria `repository_secret_scanning_custom_pattern`

| Ação | Descrição
|------------------|-------------------
| `repository_secret_scanning_custom_pattern.create` | Um padrão personalizado foi publicado para a verificação de segredos em um repositório. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)".
| `repository_secret_scanning_custom_pattern.delete` | Um padrão personalizado foi removido da verificação de segredos em um repositório. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)".
| `repository_secret_scanning_custom_pattern.update` | As alterações em um padrão personalizado são salvas para a verificação de segredos em um repositório. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)".

## Ações da categoria `repository_secret_scanning_push_protection`

| Ação | Descrição
|------------------|-------------------
| `repository_secret_scanning_push_protection.disable` | Um proprietário ou um administrador de repositório desabilitou a verificação de segredos para um repositório. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
| `repository_secret_scanning_push_protection.enable` | Um proprietário ou um administrador de repositório habilitou a verificação de segredos para um repositório. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
{%- endif %}
## Ações da categoria `repository_visibility_change`

| Ação | Descrição
|--------|-------------
| `repository_visibility_change.clear` | A configuração de alteração da visibilidade do repositório foi desmarcada de uma organização ou de uma empresa. Para obter mais informações, confira "[Como restringir as alterações de visibilidade do repositório na sua organização](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)" e "[Como impor uma política para alterações na visibilidade do repositório](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility) de uma empresa".
| `repository_visibility_change.disable` | A capacidade dos membros da empresa de atualizar a visibilidade de um repositório foi desabilitada. Os membros não podem alterar a visibilidade do repositório em uma organização ou em todas as organizações de uma empresa.
| `repository_visibility_change.enable` | A capacidade dos membros da empresa de atualizar a visibilidade de um repositório foi habilitada. Os membros podem alterar a visibilidade do repositório em uma organização ou em todas as organizações de uma empresa.

## Ações da categoria `repository_vulnerability_alert`

| Ação | Descrição
|--------|-------------
| `repository_vulnerability_alert.create` | O {% data variables.product.product_name %} criou um alerta do {% data variables.product.prodname_dependabot %} para um repositório que usa uma dependência insegura. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".
| `repository_vulnerability_alert.dismiss` | Um proprietário da organização ou um administrador de repositório ignorou um alerta do {% data variables.product.prodname_dependabot %} sobre uma dependência vulnerável{% ifversion GH-advisory-db-supports-malware %} ou um malware{% endif %}.
| `repository_vulnerability_alert.resolve` | Alguém com acesso de gravação a um repositório efetuou push de alterações para atualizar e resolver um alerta do {% data variables.product.prodname_dependabot %} em uma dependência de projeto.

{%- ifversion fpt or ghec %}
## Ações da categoria `repository_vulnerability_alerts`

| Ação | Descrição
|--------|-------------
| `repository_vulnerability_alerts.authorized_users_teams` | Um proprietário da organização ou um administrador de repositório atualizou a lista de pessoas ou de equipes autorizadas a receber {% data variables.product.prodname_dependabot_alerts %} para o repositório. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
| `repository_vulnerability_alerts.disable` | Um proprietário ou um administrador de repositório desabilitou os {% data variables.product.prodname_dependabot_alerts %}.
| `repository_vulnerability_alerts.enable` | Um proprietário ou um administrador de repositório habilitou os {% data variables.product.prodname_dependabot_alerts %}.
{%- endif %}

## Ações da categoria `required_status_check`

| Ação | Descrição
|--------|-------------
| `required_status_check.create` | Uma verificação de status foi marcada como obrigatória para um branch protegido. Para obter mais informações, confira "[Exigir as verificações de status antes da mesclagem](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)".
| `required_status_check.destroy` | Uma verificação de status deixou de ser marcada como obrigatória para um branch protegido. Para obter mais informações, confira "[Exigir as verificações de status antes da mesclagem](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)".

{%- ifversion ghec or ghes %}
## Ações da categoria `restrict_notification_delivery`

| Ação | Descrição
|--------|-------------
| `restrict_notification_delivery.enable` | As restrições de notificação por email de uma organização ou uma empresa foram habilitadas. Para obter mais informações, confira "[Como restringir notificações por email para sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)" e "[Como restringir notificações por email para sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".
| `restrict_notification_delivery.disable` | As restrições de notificação por email de uma organização ou uma empresa foram desabilitadas. Para obter mais informações, confira "[Como restringir notificações por email para sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)" e "[Como restringir notificações por email para sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".
{%- endif %}

{%- ifversion custom-repository-roles %}
## Ações da categoria `role`

| Ação | Descrição
|--------|-------------
|`create` | Um proprietário da organização criou uma função de repositório personalizada. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
|`destroy` | Um proprietário da organização excluiu uma função de repositório personalizada. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
|`update` | Um proprietário da organização editou uma função de repositório personalizada existente. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Ações da categoria `secret_scanning`

| Ação | Descrição
|--------|-------------
| `secret_scanning.disable` | Um proprietário da organização desabilitou a verificação de segredos em todos os repositórios existentes{% ifversion ghec %} privados ou internos{% endif %}. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)".
| `secret_scanning.enable` | Um proprietário da organização habilitou a verificação de segredos em todos os repositórios existentes{% ifversion ghec %} privados ou internos{% endif %}.

{% ifversion secret-scanning-alert-audit-log %}
## Ações da categoria `secret_scanning_alert`

| Ação | Descrição
|------------------|-------------------
| `secret_scanning_alert.create` | {% data variables.product.prodname_dotcom %} detectou um segredo e criou um alerta de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".
| `secret_scanning_alert.reopen` | Um usuário reabriu um alerta de {% data variables.product.prodname_secret_scanning %}.
| `secret_scanning_alert.resolve` | Um usuário resolveu um alerta de {% data variables.product.prodname_secret_scanning %}.
{% endif %}

## Ações da categoria `secret_scanning_new_repos`

| Ação | Descrição
|--------|-------------
| `secret_scanning_new_repos.disable` | Um proprietário da organização desabilitou a verificação de segredos em todos os novos repositórios{% ifversion ghec %} privados ou internos{% endif %}. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)".
| `secret_scanning_new_repos.enable` | Um proprietário da organização habilitou a verificação de segredos em todos os novos repositórios{% ifversion ghec %} privados ou internos{% endif %}.
{%- endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
## Ações da categoria `secret_scanning_push_protection`

| Ação | Descrição
|--------|-------------
| `bypass` | Disparado quando um usuário ignora a proteção de push em um segredo detectado pela verificação de segredos. Para obter mais informações, confira "[Como ignorar a proteção de push para um segredo](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)".{% endif %}

{%- ifversion ghec or ghes or ghae %}
## Ações da categoria `security_key`

| Ação | Descrição
|--------|-------------
| `security_key.register` | Uma chave de segurança foi registrada para uma conta.
| `security_key.remove` | Uma chave de segurança foi removida de uma conta.
{%- endif %}

{%- ifversion fpt or ghec %}
## Ações da categoria `sponsors`

| Ação | Descrição
|--------|-------------
| `sponsors.agreement_sign` | Um contrato do {% data variables.product.prodname_sponsors %} foi assinado em nome de uma organização.
| `sponsors.custom_amount_settings_change` | Os valores personalizados do {% data variables.product.prodname_sponsors %} foram habilitados ou desabilitados ou o valor personalizado sugerido foi alterado. Para obter mais informações, confira "[Como gerenciar suas camadas de patrocínio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)".
| `sponsors.fiscal_host_change` | O host fiscal de uma listagem do {% data variables.product.prodname_sponsors %} foi atualizado.
| `sponsors.withdraw_agreement_signature` | Uma assinatura foi retirada de um contrato do {% data variables.product.prodname_sponsors %} que se aplica a uma organização.
| `sponsors.repo_funding_links_file_action` | O arquivo FUNDING em um repositório foi alterado. Para obter mais informações, confira "[Como exibir um botão de patrocinador no seu repositório](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)".
| `sponsors.sponsor_sponsorship_cancel` | Um patrocínio foi cancelado. Para obter mais informações, confira "[Como fazer downgrade de um patrocínio](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)".
| `sponsors.sponsor_sponsorship_create` | Um patrocínio foi criado com o patrocínio de uma conta. Para obter mais informações, confira "[Como patrocinar um colaborador de código aberto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)".
| `sponsors.sponsor_sponsorship_payment_complete` | Depois que você patrocina uma conta e um pagamento é processado, o pagamento do patrocínio é marcado como concluído. Para obter mais informações, confira "[Como patrocinar um colaborador de código aberto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)".
| `sponsors.sponsor_sponsorship_preference_change` | A opção de receber atualizações por email de uma conta patrocinada foi alterada. Para obter mais informações, confira "[Como gerenciar seu patrocínio](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)".
| `sponsors.sponsor_sponsorship_tier_change` | Foi feito upgrade ou downgrade de um patrocínio. Para obter mais informações, confira "[Como fazer upgrade de um patrocínio](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)" e "[Como fazer downgrade de um patrocínio](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)".
| `sponsors.sponsored_developer_approve` | Uma conta do {% data variables.product.prodname_sponsors %} foi aprovada. Para obter mais informações, confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)".
| `sponsors.sponsored_developer_create` | Uma conta do {% data variables.product.prodname_sponsors %} foi criada. Para obter mais informações, confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)".
| `sponsors.sponsored_developer_disable` | Uma conta do {% data variables.product.prodname_sponsors %} foi desabilitada.
| `sponsors.sponsored_developer_profile_update` | Você edita um perfil da organização patrocinada. Para obter mais informações, confira "[Como editar os detalhes do seu perfil do {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)".
| `sponsors.sponsored_developer_redraft` | Uma conta do {% data variables.product.prodname_sponsors %} foi retornada ao estado de rascunho do estado aprovado.
| `sponsors.sponsored_developer_request_approval` | Um aplicativo para o {% data variables.product.prodname_sponsors %} foi enviado para aprovação. Para obter mais informações, confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)".
| `sponsors.sponsored_developer_tier_description_update` | A descrição de uma camada de patrocínio foi alterada. Para obter mais informações, confira "[Como gerenciar suas camadas de patrocínio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)".
| `sponsors.update_tier_welcome_message` | A mensagem de boas-vindas para uma camada do {% data variables.product.prodname_sponsors %} de uma organização foi atualizada.
| `sponsors.update_tier_repository` | Uma camada do {% data variables.product.prodname_sponsors %} alterou o acesso de um repositório.
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Ações da categoria `ssh_certificate_authority`

| Ação | Descrição
|--------|-------------
| `ssh_certificate_authority.create` | Uma autoridade de certificação SSH de uma organização ou uma empresa foi criada. Para obter mais informações, confira "[Como gerenciar as autoridades de certificação SSH da sua organização](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" e "[Como gerenciar as autoridades de certificação SSH para sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)".
| `ssh_certificate_authority.destroy` | Uma autoridade de certificação SSH de uma organização ou uma empresa foi excluída. Para obter mais informações, confira "[Como gerenciar as autoridades de certificação SSH da sua organização](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" e "[Como gerenciar as autoridades de certificação SSH para sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)".

## Ações da categoria `ssh_certificate_requirement`

| Ação | Descrição
|--------|-------------
| `ssh_certificate_requirement.enable` | O requisito para que os membros usem certificados SSH para acessar os recursos de uma organização foi habilitado. Para obter mais informações, confira "[Como gerenciar as autoridades de certificação SSH da sua organização](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" e "[Como gerenciar as autoridades de certificação SSH para sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)".
| `ssh_certificate_requirement.disable` | O requisito para que os membros usem certificados SSH para acessar os recursos de uma organização foi desabilitado. Para obter mais informações, confira "[Como gerenciar as autoridades de certificação SSH da sua organização](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" e "[Como gerenciar as autoridades de certificação SSH para sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)".
{%- endif %}

{% ifversion sso-redirect %}
## Ações da categoria `sso_redirect`

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

| Ação | Descrição |
|--------|------------ |
`sso_redirect.enable` | Redirecionamentos automáticos para usuários para SSO (logon único) foram habilitados. |
`sso_redirect.disable` | Redirecionamentos automáticos para usuários para SSO (logon único) foram desabilitados. |

Para obter mais informações, confira "[Como impor políticas para configurações de segurança na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)".
{% endif %}

## Ações da categoria `staff`

| Ação | Descrição
|--------|-------------
| `staff.disable_repo`          | Uma organização{% ifversion ghes %}, um repositório ou um administrador do site{% else %} ou de repositório{% endif %} desabilitou o acesso a um repositório e a todos os respectivos forks.
| `staff.enable_repo`           | Uma organização{% ifversion ghes %}, um repositório ou um administrador do site{% else %} ou de repositório{% endif %} habilitou novamente o acesso a um repositório e a todos os respectivos forks.
{%- ifversion ghes or ghae %} | `staff.exit_fake_login`       | Um proprietário corporativo{% ifversion ghes %} ou um administrador do site{% endif %} encerrou uma sessão de representação no {% data variables.product.product_name %}.
| `staff.fake_login`            | Um proprietário da empresa{% ifversion ghes %} ou um administrador do site{% endif %} entrou no {% data variables.product.product_name %} como outro usuário.
{%- endif %} | `staff.repo_lock`             | Uma organização{% ifversion ghes %}, um repositório ou um administrador do site{% else %} ou de repositório{% endif %} bloqueou (obteve temporariamente acesso completo a) um repositório privado de um usuário.
| `staff.repo_unlock`           | Uma organização{% ifversion ghes %}, um repositório ou um administrador do site{% else %} ou de repositório{% endif %} desbloqueou (encerrou o acesso temporário a) um repositório privado de um usuário.
{%- ifversion ghes %} | `staff.search_audit_log` | Um administrador do site realizou uma pesquisa no log de auditoria do administrador do site.
{%- endif %} | `staff.set_domain_token_expiration` | {% ifversion ghes %}Um administrador do site ou {% endif %}uma equipe do GitHub definiu o tempo de vencimento do código de verificação de uma organização ou de um domínio corporativo. {% ifversion ghec or ghes %}Para obter mais informações, confira "[Como verificar ou aprovar um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" e "[Como verificar ou aprovar um domínio para sua empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %} {%- ifversion ghes %} | `staff.unlock`                | Um administrador do site desbloqueou (ganhou acesso total temporariamente) todos os repositórios privados de um usuário.
{%- endif %} | `staff.unverify_domain` | {% ifversion ghes %}Um administrador do site ou {% endif %}uma equipe do GitHub cancelou a verificação do domínio de uma organização ou de uma empresa. {% ifversion ghec or ghes %}Para obter mais informações, confira "[Como verificar ou aprovar um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" e "[Como verificar ou aprovar um domínio para sua empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %} | `staff.verify_domain` | {% ifversion ghes %} Um administrador do site ou {% endif %}uma equipe do GitHub verificou uma organização ou um domínio corporativo. {% ifversion ghec or ghes %}Para obter mais informações, confira "[Como verificar ou aprovar um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" e "[Como verificar ou aprovar um domínio para sua empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %} {%- ifversion ghes %} | `staff.view_audit_log` | Um administrador do site exibiu o log de auditoria do administrador do site.
{%- endif %}

## Ações da categoria `team`

| Ação | Descrição
|--------|-------------
| `team.add_member` | Um membro de uma organização foi adicionado a uma equipe. Para obter mais informações, confira "[Como adicionar membros da organização a uma equipe](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)".
| `team.add_repository` | Uma equipe recebeu acesso e permissões em um repositório.
| `team.change_parent_team` | Uma equipe filho foi criada ou o pai de uma equipe filho foi alterado. Para obter mais informações, confira "[Como mover uma equipe na hierarquia da sua organização](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)".
| `team.change_privacy` | O nível de privacidade de uma equipe foi alterado. Para obter mais informações, confira "[Como alterar a visibilidade da equipe](/organizations/organizing-members-into-teams/changing-team-visibility)".
| `team.create` | Um repositório ou conta de usuário foi adicionado a uma equipe.
| `team.delete` | Um repositório ou conta de usuário foi removido de uma equipe.
| `team.destroy` | Uma equipe foi excluída.
{%- ifversion ghec or ghes or ghae %} | `team.demote_maintainer` | Um usuário foi rebaixado de mantenedor da equipe a membro da equipe.
| `team.promote_maintainer` | Um usuário foi promovido de membro da equipe a mantenedor da equipe. Para obter mais informações, confira "[Como promover um membro da organização a mantenedor da equipe](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer)".
{%- endif %} | `team.remove_member` | Um membro de uma organização foi removido de uma equipe. Para obter mais informações, confira "[Como remover membros da organização de uma equipe](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)".
| `team.remove_repository` | Um repositório não estava mais sob o controle de uma equipe.
| `team.rename` | O nome de uma equipe foi alterado.
| `team.update_permission` | O acesso de uma equipe foi alterado.
| `team.update_repository_permission` | A permissão de uma equipe em um repositório foi alterada.

## Ações da categoria `team_discussions`

| Ação | Descrição
|--------|-------------
| `team_discussions.clear` | Um proprietário da organização desmarcou a configuração para permitir discussões em equipe de uma organização ou uma empresa.
| `team_discussions.disable` | Um proprietário da organização desabilitou as discussões em equipe para uma organização. Para obter mais informações, confira "[Como desabilitar discussões em equipe da sua organização](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)".
| `team_discussions.enable` | Um proprietário da organização habilitou as discussões em equipe para uma organização.

{%- ifversion ghec %}
## Ações da categoria `team_sync_tenant`

| Ação | Descrição
|--------|-------------
| `team_sync_tenant.disabled` | A sincronização da equipe com um locatário foi desabilitada. Para obter mais informações, confira "[Como gerenciar a sincronização de equipe para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" e "[Como gerenciar a sincronização de equipe para organizações na sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".
| `team_sync_tenant.enabled` | A sincronização da equipe com um locatário foi habilitada. Para obter mais informações, confira "[Como gerenciar a sincronização de equipe para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" e "[Como gerenciar a sincronização de equipe para organizações na sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".
| `team_sync_tenant.update_okta_credentials` | As credenciais do Okta para sincronização da equipe com um locatário foram alteradas.
{%- endif %}

{%- ifversion fpt or ghes %}
## Ações da categoria `two_factor_authentication`

| Ação | Descrição
|--------|-------------
| `two_factor_authentication.disabled` | A [autenticação de dois fatores][2fa] foi desabilitada em uma conta de usuário.
| `two_factor_authentication.enabled`  | A [autenticação de dois fatores][2fa] foi habilitada em uma conta de usuário.
| `two_factor_authentication.password_reset_fallback_sms` | Um código de senha avulsa foi enviado para um número de telefone de fallback da conta de usuário.
| `two_factor_authentication.recovery_codes_regenerated` | Os códigos da recuperação de dois fatores foram regenerados para uma conta de usuário.
| `two_factor_authentication.sign_in_fallback_sms` | Um código de senha avulsa foi enviado para um número de telefone de fallback da conta de usuário.
| `two_factor_authentication.update_fallback` | O fallback de autenticação de dois fatores para uma conta de usuário foi alterado.
{%- endif %}

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication

{%- ifversion fpt or ghes or ghae %}
## Ações da categoria `user`

| Ação | Descrição
|--------|-------------
| `user.add_email`                  | Um endereço de e-mail foi adicionado a uma conta de usuário.
| `user.async_delete`               | Um trabalho assíncrono foi iniciado para destruir uma conta de usuário, disparando no final um evento `user.delete`.
| `user.audit_log_export` | As entradas do log de auditoria foram exportadas.
| `user.block_user` | Um usuário foi bloqueado por outro usuário{% ifversion ghes %} ou um administrador do site{% endif %}.
| `user.change_password`            | Um usuário alterou a própria senha.
| `user.create`                     | Uma nova conta de usuário foi criada.
| `user.creation_rate_limit_exceeded` | A taxa de criação de contas de usuário, aplicativos, problemas, solicitações de pull ou outros recursos excedeu os limites de taxa configurados ou um número excessivo de usuários foram seguidos muito rapidamente.
| `user.delete`                     | Uma conta de usuário foi destruída por um trabalho assíncrono.
{%- ifversion ghes %} | `user.demote`                     | Um administrador do site foi rebaixado a uma conta de usuário comum.
{%- endif %} | `user.destroy`                    | Um usuário excluiu a respectiva conta disparando `user.async_delete`.
| `user.failed_login`               | Um usuário tentou se conectar com um nome de usuário, uma senha ou um código de autenticação de dois fatores incorreto.
| `user.flag_as_large_scale_contributor` | Uma conta de usuário foi sinalizada como um colaborador em grande escala. Somente as contribuições de repositórios públicos dos quais o usuário é o proprietário serão mostradas no grafo de contribuição, a fim de evitar tempos limite.
| `user.forgot_password`            | Um usuário solicitou uma redefinição de senha pela página de entrada.
| `user.hide_private_contributions_count` | Um usuário alterou a visibilidade das respectivas contribuições privadas. O número de contribuições em repositórios privados no perfil do usuário agora está oculto. Para obter mais informações, confira "[Como divulgar ou ocultar suas contribuições privadas no seu perfil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)".
| `user.lockout` | Um usuário foi bloqueado da respectiva conta.
| `user.login`                      | Um usuário se conectou.
{%- ifversion ghes or ghae %} | `user.mandatory_message_viewed`   | Um usuário viu uma mensagem obrigatória. Para obter mais informações, confira "[Como personalizar as mensagens de usuário para sua empresa](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)" para obter detalhes".
{%- endif %} | `user.minimize_comment` | Um comentário feito por um usuário foi minimizado.
{%- ifversion ghes %} | `user.promote`                    | Uma conta de usuário comum foi promovida a um administrador do site.
{%- endif %} | `user.recreate` | A conta de um usuário foi restaurada.
| `user.remove_email`               | Um endereço de email foi removido de uma conta de usuário.
| `user.remove_large_scale_contributor_flag` | Uma conta de usuário não foi mais sinalizada como colaborador em grande escala.
| `user.rename`                     | Um nome de usuário foi alterado.
| `user.reset_password` | Um usuário redefiniu a senha da respectiva conta.
| `user.show_private_contributions_count` | Um usuário alterou a visibilidade das respectivas contribuições privadas. O número de contribuições em repositórios privados no perfil do usuário agora é mostrado. Para obter mais informações, confira "[Como divulgar ou ocultar suas contribuições privadas no seu perfil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)".
| `user.sign_in_from_unrecognized_device` | Um usuário se conectou em um dispositivo não reconhecido.
| `user.sign_in_from_unrecognized_device_and_location` | Um usuário se conectou em um dispositivo e uma localização não reconhecidos.
| `user.sign_in_from_unrecognized_location` | Um usuário se conectou em uma localização não reconhecida.
| `user.suspend`                    | Uma conta de usuário foi suspensa por um proprietário da empresa {% ifversion ghes %} ou um administrador do site{% endif %}.
| `user.two_factor_challenge_failure` | Falha em um desafio de 2FA emitido para uma conta de usuário.
| `user.two_factor_challenge_success` | Êxito em um desafio de 2FA emitido para uma conta de usuário.
| `user.two_factor_recover` | Um usuário usou os códigos de recuperação 2FA.
| `user.two_factor_recovery_codes_downloaded` | Um usuário baixou os códigos de recuperação 2FA para a respectiva conta.
| `user.two_factor_recovery_codes_printed` | Um usuário imprimiu os códigos de recuperação 2FA para a respectiva conta.
| `user.two_factor_recovery_codes_viewed` | Um usuário viu os códigos de recuperação 2FA da respectiva conta.
| `user.two_factor_requested`       | Um usuário recebeu a solicitação do código de autenticação de dois fatores.
| `user.unblock_user` | Um usuário foi desbloqueado por outro usuário{% ifversion ghes %} ou por um administrador do site{% endif %}.
| `user.unminimize_comment` | Um comentário feito por um usuário teve a minimização cancelada.
| `user.unsuspend` | Uma conta de usuário teve a suspensão cancelada por um proprietário da empresa {% ifversion ghes %} ou um administrador do site{% endif %}.
{%- endif %}

{%- ifversion ghec or ghes %}
## Ações da categoria `user_license`

| Ação | Descrição
|--------|-------------
| `user_license.create` | Uma licença de estação para um usuário em uma empresa foi criada.
| `user_license.destroy` | Uma licença de estação para um usuário em uma empresa foi excluída.
| `user_license.update` | Um tipo de licença de estação para um usuário em uma empresa foi alterado.
{%- endif %}

## Ações da categoria `workflows`

{% data reusables.audit_log.audit-log-events-workflows %}
