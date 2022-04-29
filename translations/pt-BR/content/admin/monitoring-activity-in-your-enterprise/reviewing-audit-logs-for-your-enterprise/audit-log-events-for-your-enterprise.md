---
title: Log de eventos de auditoria para sua empresa
intro: Saiba mais sobre os eventos de log de auditoria registrados para sua empresa.
shortTitle: Eventos de log de auditoria
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
---

{%- ifversion fpt or ghec %}
### ações de categoria da `conta`

| Ação                                  | Descrição                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account.billing_plan_change`         | O ciclo de cobrança de uma organização foi alterado. Para obter mais informações, consulte "[Alterando a duração do seu ciclo de cobrança](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle)".                                                                                   |
| `account.plan_change`                 | A assinatura de uma organização foi alterada. Para obter mais informações, consulte[Sobre a cobrança para contas do GitHub](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)".                                                                                                         |
| `account.pending_plan_change`         | Um proprietário ou gerente de cobrança da organização cancelou ou rebaixou uma assinatura paga. Para obter mais informações, consulte "[Como a atualização ou o downgrade afeta o processo de cobrança?](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process)." |
| `account.pending_subscription_change` | Um teste gratuito de {% data variables.product.prodname_marketplace %} foi iniciado ou venceu. Para obter mais informações, consulte[Sobre a cobrança para o GitHub Marketplace](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)".                                             |
{%- endif %}

{%- ifversion fpt or ghec %}
### ações de categoria de `advisory_credit`

| Ação                      | Descrição                                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `advisory_credit.accept`  | Alguém aceitou o crédito por uma consultoria de segurança. Para obter mais informações, consulte "[Editar um consultor de segurança](/github/managing-security-vulnerabilities/editing-a-security-advisory)". |
| `advisory_credit.create`  | O administrador de uma consultoria de segurança adicionou alguém à seção de crédito.                                                                                                                          |
| `advisory_credit.decline` | Alguém recusou o crédito para uma consultoria de segurança.                                                                                                                                                   |
| `advisory_credit.destroy` | O administrador de uma consultoria de segurança removeu alguém da seção de crédito.                                                                                                                           |
{%- endif %}

### Ações de categoria `artefato`

| Ação               | Descrição                                                              |
| ------------------ | ---------------------------------------------------------------------- |
| `artifact.destroy` | Um artefato da execução de fluxo de trabalho foi excluído manualmente. |

{%- ifversion ghec %}
### Ações da categoria `audit_log_streaming`

| Ação                          | Descrição                                                                                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `audit_log_streaming.check`   | Foi realizada uma verificação manual do ponto de extremidae configurado para transmissão de logs de auditoria.                                              |
| `audit_log_streaming.create`  | Um ponto de extremidade foi adicionado ao streaming do log de auditoria.                                                                                    |
| `audit_log_streaming.update`  | Uma configuração de ponto de extremidade foi atualizada para a transmissão do log de auditoria, como a transmissão foi pausada, habilitada ou desabilitada. |
| `audit_log_streaming.destroy` | Um ponto de extremidade da transmissão do log auditoria foi excluído.                                                                                       |
{%- endif %}

{%- ifversion fpt or ghec %}
### ações de categoria de `cobrança`

| Ação                          | Descrição                                                                                                                                                                                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `billing.change_billing_type` | Uma organização alterou a forma como pagou por {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Adicionar ou editar forma de pagamento](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)". |
| `billing.change_email`        | O endereço de e-mail de cobrança de uma organização foi alterado. Para obter mais informações, consulte "[Configurar o e-mail de cobrança](/billing/managing-your-github-billing-settings/setting-your-billing-email)".                                           |
{%- endif %}

### ações da categoria `business`

| Ação                 | Descrição                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `business.add_admin` | Um proprietário da empresa{% ifversion ghes %} ou administrador do site{% endif %} foi adicionado a uma empresa. |
{%- ifversion ghec %}
| `business.add_billing_manager` | Um gerente de cobrança foi adicionado a uma empresa.
{%- endif %}
| `business.add_organization` | Uma organização foi adicionada a uma empresa.
{%- ifversion ghec %}
| `business.add_support_entitlee` | Um direito de suporte foi adicionado a um integrante de uma empresa. Para obter mais informações, consulte "[Gerenciar direitos de suporte para a sua empresa](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".
{%- endif %}
{%- ifversion ghes > 3.0 or ghae %}
| `business.advanced_security_policy_update` | Um proprietário corporativo{% ifversion ghes %} ou administrador de site{% endif %} criou, atualizou ou removeru uma política para {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_advanced_security %} na sua empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{%- endif %}
{%- ifversion ghec %}
| `business.cancel_admin_invitation` | Um convite para alguém ser proprietário{% ifversion ghes %} ou administrador do site{% endif %} de uma empresa foi cancelado. | `business.cancel_billing_manager_invitation` | Um convite para alguém ser um gerente de cobrança de uma empresa foi cancelado.
{%- endif %}
{%- ifversion ghes %}
| `business.clear_actions_settings` | Um proprietário de uma empresa ou administrador de site limpou as configurações da política de {% data variables.product.prodname_actions %} para uma empresa. Para obter mais informações, consulte "[Aplicando as políticas para o GitHub Actions na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".
{%- endif %}
| `business.clear_default_repository_permission` | O proprietário de uma empresa{% ifversion ghes %} ou administrador de site{% endif %} limpou a configuração da política de permissão do repositório de base para uma empresa. Para obter mais informações, consulte "[Aplicando uma política para as permissões do repositório base](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)". | `business.clear_members_can_create_repos`      | O proprietário de uma empresa ou{% ifversion ghes %} administrador de site{% endif %} removeu uma restrição a criação de um repositório nas organizações na empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)". | `business.create`                              | Uma empresa foi criada.
{%- ifversion ghec %}
| `business.disable_saml` | O logon único SAML foi desabilitado para uma empresa.
{%- endif %}
| `business.disable_two_factor_requirement` | O requisito para os integrantes terem a autenticação de dois fatores habilitada para acessar uma empresa foi desabilitado.
{%- ifversion ghec %}
| `business.enable_saml` | O logon único SAML foi habilitado para uma empresa.
{%- endif %}
| `business.enable_two_factor_requirement` | O requisito para os integrantes terem a autenticação de dois fatores habilitada para acessar uma empresa foi desabilitado.
{%- ifversion ghec %}
| `business.enterprise_server_license_download` | Foi feito o download de uma licença de {% data variables.product.prodname_ghe_server %}. | `business.import_license_usage` | As informações do uso da licença foram importadas de uma instância de {% data variables.product.prodname_ghe_server %} para a conta de uma empresa em {% data variables.product.prodname_dotcom_the_website %}. | `business.invite_admin` | Um convite para alguém ser um proprietário corporativo {% ifversion ghes %} ou administrador do site{% endif %} de uma empresa foi enviado. | `business.invite_billing_manager` | Um convite para alguém ser um gerente de cobrança de uma empresa foi enviado.
{%- endif %}
| `business.members_can_update_protected_branches.clear` | Um proprietário de uma empresa{% ifversion ghes %} ou administrador de site{% endif %} cancelou a política de os integrantes de uma empresa poderem atualizar branches protegidos nos repositórios para organizações individuais. Os administradores da organização podem escolher se permitem a atualização das configurações dos branches protegidos. | `business.members_can_update_protected_branches.disable` | A capacidade para os integrantes corporativos de atualizar as regras de proteção do branch foi desabilitada. Apenas os proprietários corporativos podem atualizar branches protegidos. | `business.members_can_update_protected_branches.enable` | A capaccidade de os integrantes da empresa de atualizar as regras de proteção de brenches foi habilitada. Os proprietários e integrantes da empresa podem atualizar branches protegidos. | `business.remove_admin` | O proprietário de uma empresa{% ifversion ghes %} ou administrador de site{% endif %} foi removido de uma empresa.
{%- ifversion ghes > 3.1 %}
| `business.referrer_override_enable` | O proprietário de uma empresa ou administrador de site habilitou a substituição da política de indicador. Para obter mais informações, consulte "[Configurando a política de indicação para sua empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)". | `business.referrer_override_disable` | O proprietário de uma empresa ou administrador de site desabilitou a substituição da política de indicação. Para obter mais informações, consulte "[Configurando a política de indicação para sua empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)".
{%- endif %}
{%- ifversion ghec %}
| `business.remove_billing_manager` | Um gerente de cobrança foi removido de uma empresa. | `business.remove_member` | Um integrante foi removido de uma empresa.
{%- endif %}
| `business.remove_organization` | Uma organização foi removida de uma empresa.
{%- ifversion ghec %}
| `business.remove_support_entitlee` | O direito de um suporte foi removido do integrante de uma empresa. Para obter mais informações, consulte "[Gerenciar direitos de suporte para a sua empresa](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".
{%- endif %}
| `business.rename_slug` | O slug do URL da empresa foi renomeado.
{%- ifversion ghec %}
| `business.revoke_external_identity` | A identidade externa de um membro de uma empresa foi revogada. | `business.revoke_sso_session` | A sessão do logon único SAML para o membro de uma empresa foi revogada.
{%- endif %}
{%- ifversion ghec %}
| `business.set_actions_fork_pr_approvals_policy` | A configuração que exige aprovações para os fluxos de trabalho de bifurcações públicas foi alterada para uma empresa. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)".
{%- endif %}
| `business.set_actions_retention_limit` | O período de retenção para os artefatos e logs de {% data variables.product.prodname_actions %} foi alterdo para uma empresa. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_actions %} em uma empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)".
{%- ifversion ghec or ghes %}
| `business.set_fork_pr_workflows_policy` | A política para os fluxos de trabalho nas bifurcações de repositórios privados foi alterada. Para obter mais informações, consulte "{% ifversion ghec %}[Aplicando políticas para {% data variables.product.prodname_actions %} em uma empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Habilitando fluxos de trabalho para bifurcações do repositório privado](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}".
{%- endif %}
{%- ifversion ghes %}
| `business.update_actions_settings` | O proprietário de uma empresa ou administrador de site atualizou as configurações da política de {% data variables.product.prodname_actions %} para uma empresa. Para obter mais informações, consulte "[Aplicando as políticas para o GitHub Actions na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".
{%- endif %}
| `business.update_default_repository_permission` | A configuração de permissão do repositório de base foi atualizada para todas as organizações em uma empresa. Para obter mais informações, consulte "[Aplicando uma política para as permissões do repositório base](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)". | `business.update_member_repository_creation_permission` | A configuração da criação do repositório foi atualizada para uma empresa. Para obter mais informações, consulte "[Aplicando uma política para a criação de repositório](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)". | `business.update_member_repository_invitation_permission` | A configuração da política para os integrantes da empresa que convidam colaboradores externos foi atualizada. Para obter mais informações, consulte "[Aplicando uma política para convidar colaboradores externos para os repositórios](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)".
{%- ifversion ghec %}
| `business.update_saml_provider_settings` | As configurações do fornecedor do logon único SAML de uma empresa foram alteradas.
{%- endif %}

{%- if secret-scanning-audit-log-custom-patterns %}
### Categoria de ações `business_secret_scanning_custom_pattern`

| Ação | Descrição                                                                                                                                                                                                                                                                                                                                                                                   |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      | `business_secret_scanning_custom_pattern.create` | Um padrão personalizado no nível de uma empresa foi publicado para digitalização de segredo. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account). " |
|      | `business_secret_scanning_custom_pattern.delete` | Um padrão personalizado no nível da empresa foi removido da digitalização de segredo.                                                                                                                                                                                                                                                    |
|      | `business_secret_scanning_custom_pattern.update` | As alterações no padrão personalizado no nível da empresa foram salvas para a digitalização de segredo.                                                                                                                                                                                                                                  |
{%- endif %}

### Ações da categoria `checks`

| Ação                           | Descrição                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checks.auto_trigger_disabled` | A criação automática de conjuntos de verificação foi desabilitada em um repositório na organização ou empresa. Para obter mais informações, consulte "[Atualize as preferências do repositóriopara verificar os itens](/rest/reference/checks#update-repository-preferences-for-check-suites)". |
| `checks.auto_trigger_enabled`  | A criação automática de conjuntos de verificação foi habilitada em um repositório na organização ou empresa. Para obter mais informações, consulte "[Atualize as preferências do repositóriopara verificar os itens](/rest/reference/checks#update-repository-preferences-for-check-suites)".   |
{%- ifversion fpt or ghec %}
| `checks.delete_logs` | Os registros em um conjunto de verificação foram excluídos.
{%- endif %}

{%- ifversion fpt or ghec %}
### ações da categoria `codespaces`

| Ação                                           | Descrição                                                                                                                                                                                                                                    |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `codespaces.connect`                           | Um codespace foi iniciado.                                                                                                                                                                                                                   |
| `codespaces.create`                            | Um usuário [criou um codespace](/github/developing-online-with-codespaces/creating-a-codespace).                                                                                                                                             |
| `codespaces.destroy`                           | Um usuário [excluiu um codespace](/github/developing-online-with-codespaces/deleting-a-codespace).                                                                                                                                           |
| `codespaces.allow_permissions`                 | Um codespace que usa permissões personalizadas do seu arquivo `devcontainer.json` foi iniciado.                                                                                                                                              |
| `codespaces.attempted_to_create_from_prebuild` | Foi realizada uma tentativa de criar um codespace a partir de uma pré-criação.                                                                                                                                                               |
| `codespaces.create_an_org_secret`              | Um usuário criou um [segredo no nível da organização para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)      |
| `codespaces.update_an_org_secret`              | Um usuário atualizou um [segredo no nível da organização para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces). |
| `codespaces.remove_an_org_secret`              | Um usuário removeu um [segredo do nível da organização para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).   |
| `codespaces.manage_access_and_security`        | Um usuário atualizou [quais repositórios um codespace pode acessar](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).                                                                                  |
{%- endif %}

{%- ifversion fpt or ghec %}
### Ações da categoria `commit_comment`

| Ação                     | Descrição                               |
| ------------------------ | --------------------------------------- |
| `commit_comment.destroy` | Um comentário de commit foi excluído.   |
| `commit_comment.update`  | Um comentário de commit foi atualizado. |
{%- endif %}

{%- ifversion ghes %}
### Ações da categoria `config_entry`

| Ação                   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `config_entry.create`  | A definição de uma configuração foi criada. Esses eventos só são visíveis no log de auditoria do administrador do site. O tipo de eventos registrados relaciona-se a:</br>- Configurações e políticas corporativas</br>- Permissões da organização e do repositório</br>- Git, LFS do Git, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, projeto, e configurações de segurança do código.   |
| `config_entry.destroy` | A definição de uma configuração foi excluída. Esses eventos só são visíveis no log de auditoria do administrador do site. O tipo de eventos registrados relaciona-se a:</br>- Configurações e políticas corporativas</br>- Permissões da organização e do repositório</br>- Git, LFS do Git, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, projeto, e configurações de segurança do código. |
| `config_entry.update`  | A definição de uma configuração foi editada. Esses eventos só são visíveis no log de auditoria do administrador do site. O tipo de eventos registrados relaciona-se a:</br>- Configurações e políticas corporativas</br>- Permissões da organização e do repositório</br>- Git, LFS do Git, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, projeto, e configurações de segurança do código.  |
{%- endif %}

{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4864 %}
### ações de categoria de `dependabot_alerts`

| Ação                        | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dependabot_alerts.disable` | O proprietário de uma empresa{% ifversion ghes %} ou administrador do site{% endif %} desabilitou {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios {% ifversion fpt or ghec %}privados existentes{% endif %}. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)". |
| `dependabot_alerts.enable`  | O proprietário de uma empresa{% ifversion ghes %} ou administrador do site{% endif %} habilitou {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios {% ifversion fpt or ghec %}privados existentes{% endif %}.                                                                                                                                                                                                                                 |

### ações de categoria de `dependabot_alerts_new_repos`

| Ação                                  | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dependabot_alerts_new_repos.disable` | O proprietário de uma empresa{% ifversion ghes %} ou administrador do site{% endif %} desabilitou {% data variables.product.prodname_dependabot_alerts %} para todos os novos repositórios {% ifversion fpt or ghec %}privados{% endif %}. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)". |
| `dependabot_alerts_new_repos.enable`  | O proprietário de uma empresa{% ifversion ghes %} ou administrador do site{% endif %} habilitou {% data variables.product.prodname_dependabot_alerts %} para todos os novos repositórios {% ifversion fpt or ghec %}privados{% endif %}.                                                                                                                                                                                                                                 |

### Ações da categoria `dependabot_repository_access`

| Ação                                                | Descrição                                                                                             |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `dependabot_repository_access.repositories_updated` | Os repositórios que {% data variables.product.prodname_dependabot %} podem acessar foram atualizados. |
{%- endif %}

{%- ifversion fpt or ghec or ghes > 3.2 %}
### ações de categoria de `dependabot_security_updates`

| Ação                                  | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dependabot_security_updates.disable` | O proprietário de uma empresa {% ifversion ghes %} ou administrador do site{% endif %} desabilitou {% data variables.product.prodname_dependabot_security_updates %} para todos os repositórios existentes. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)". |
| `dependabot_security_updates.enable`  | O proprietário de uma empresa {% ifversion ghes %} ou administrador do site{% endif %} habilitou {% data variables.product.prodname_dependabot_security_updates %} para todos os repositórios existentes.                                                                                                                                                                                                                                 |

### ações de categoria de `dependabot_security_updates_new_repos`

| Ação                                            | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dependabot_security_updates_new_repos.disable` | O proprietário de uma empresa {% ifversion ghes %} ou administrador do site{% endif %} desabilitou {% data variables.product.prodname_dependabot_security_updates %} para todos os novos repositórios. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)". |
| `dependabot_security_updates_new_repos.enable`  | O proprietário de uma empresa {% ifversion ghes %} ou administrador do site{% endif %} habilitou {% data variables.product.prodname_dependabot_security_updates %} para todos os novos repositórios.                                                                                                                                                                                                                                 |
{%- endif %}

{%- ifversion fpt or ghec or ghes or ghae-issue-4864 %}
### ações de categoria de `dependency_graph`

| Ação                       | Descrição                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dependency_graph.disable` | O proprietário de uma empresa {% ifversion ghes %} ou administrador do site{% endif %} desabilitou o gráfico de dependência para todos os repositórios existentes. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)". |
| `dependency_graph.enable`  | O proprietário de uma empresa {% ifversion ghes %} ou administrador do site{% endif %} habilitou o gráficou de dependência para todos os repositórios existentes.                                                                                                                                                                                                                                |

### ações de categoria de `dependency_graph_new_repos`

| Ação                                 | Descrição                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dependency_graph_new_repos.disable` | O proprietário de uma empresa {% ifversion ghes %} ou administrador do site{% endif %} desabilitou o gráfico de dependência para todos os novos repositórios. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)". |
| `dependency_graph_new_repos.enable`  | O proprietário de uma empresa {% ifversion ghes %} ou administrador do site{% endif %} habilitou o gráficou de dependência para todos os novos repositórios.                                                                                                                                                                                                                                |
{%- endif %}

{%- ifversion fpt or ghec %}
### Ações da categoria `discussion`

| Ação                 | Descrição                               |
| -------------------- | --------------------------------------- |
| `discussion.destroy` | A discussão de uma equipe foi excluída. |

### Ações da categoria `discussion_comment`

| Ação                         | Descrição                                                                                                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `discussion_comment.destroy` | Um [comentário em uma publicação de discussão em equipe foi eliminado](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment). |
| `discussion_comment.update`  | Um [comentário em uma publicação de discussão em equipe foi editado](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).    |

### ações de categoria de `discussion_post`

| Ação                      | Descrição                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `discussion_post.destroy` | Um [post em uma publicação de discussão em equipe foi eliminado](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion). |
| `discussion_post.update`  | Um [post em uma publicação de discussão em equipe foi editado](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).   |

### ações de categoria de `discussion_post_reply`

| Ação                            | Descrição                                                                                                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `discussion_post_reply.destroy` | Uma [resposta a ma publicação de discussão em equipe foi excluído](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment). |
| `discussion_post_reply.update`  | Uma [resposta a ma publicação de discussão em equipe foi editado](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).   |
{%- endif %}

{%- ifversion ghec or ghes %}
### Ações da categoria `dotcom_connection`

| Ação                                     | Descrição                                                                                                                                                    |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dotcom_connection.create`               | Uma conexão de {% data variables.product.prodname_github_connect %} com {% data variables.product.prodname_dotcom_the_website %} foi criada.             |
| `dotcom_connection.destroy`              | Uma conexão de {% data variables.product.prodname_github_connect %} com {% data variables.product.prodname_dotcom_the_website %} foi excluída.           |
| `dotcom_connection.token_updated`        | O token de conexão de {% data variables.product.prodname_github_connect %} para {% data variables.product.prodname_dotcom_the_website %} foi atualizado. |
| `dotcom_connection.upload_license_usage` | O uso da licença de {% data variables.product.prodname_ghe_server %} foi enviado manualmente para {% data variables.product.prodname_ghe_cloud %}.       |
| `dotcom_connection.upload_usage_metrics` | As mpetrica de uso de {% data variables.product.prodname_ghe_server %} foram enviadas para {% data variables.product.prodname_dotcom_the_website %}.     |
{%- endif %}

### Ações da categoria `empresa`

| Ação                                             | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise.config.disable_anonymous_git_access` | Um proprietário corporativo {% ifversion ghes %} ou administrador do site{% endif %} desabilitou acesso de leitura anônimo do Git para repositórios na empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".                                                                                                                            |
| `enterprise.config.enable_anonymous_git_access`  | Um proprietário corporativo {% ifversion ghes %} ou administrador do site{% endif %} habilitou o acesso de leitura anônimo do Git para repositórios na empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".                                                                                                                            |
| `enterprise.config.lock_anonymous_git_access`    | Um proprietário corporativo{% ifversion ghes %} ou administrador do site{% endif %} bloqueou acesso de leitura anônimo do Git para impedir que os administradores do repositório alterem as configurações de acesso de leitura anónimas do Git existentes nos repositórios da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".     |
| `enterprise.config.unlock_anonymous_git_access`  | Um proprietário corporativo{% ifversion ghes %} ou administrador do site{% endif %} desbloqueou acesso de leitura anônimo do Git para permitir que os administradores do repositório alterem as configurações de acesso de leitura anónimas do Git existentes nos repositórios da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)". |
| `enterprise.register_self_hosted_runner`         | Um novo executor auto-hospedado em {% data variables.product.prodname_actions %} foi registrado. Para obter mais informações, consulte "[Adicionar um executor auto-hospedado a um repositório](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository). ".                                                                                                                                                                                                             |
| `enterprise.remove_self_hosted_runner`           | Um executor auto-hospedado em{% data variables.product.prodname_actions %} foi removido. Para obter mais informações, consulte "[Remover um executor de um repositório](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".                                                                                                                                                                                                                                             |
| `enterprise.runner_group_created`                | Um grupo de executor auto-hospedado em{% data variables.product.prodname_actions %} foi criado. Para obter mais informações, consulte "[Criar um grupo de executores auto-hospedados para uma organização](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".                                                                                                                                                               |
| `enterprise.runner_group_removed`                | Um grupo de executor auto-hospedado em{% data variables.product.prodname_actions %} foi removido. Para obter mais informações, consulte "[Remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".                                                                                                                                                                                                    |
| `enterprise.runner_group_renamed`                | Um grupo de executor auto-hospedado em{% data variables.product.prodname_actions %} foi renomeado. Para obter mais informações, consulte "[Alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".                                                                                                                                                      |
| `enterprise.runner_group_updated`                | A configuração de um grupo de executores auto-hospedados de {% data variables.product.prodname_actions %} foi alterada. Para obter mais informações, consulte "[Alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".                                                                                                                                 |
| `enterprise.runner_group_runner_removed`         | A API REST foi usada para remover executor auto-hospedado de {% data variables.product.prodname_actions %} de um grupo. Para obter mais informações, consulte "[Remover um executor auto-hospedado de um grupo para uma organização](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".                                                                                                                                                                                              |
| `enterprise.runner_group_runners_added`          | Um executor auto-hospedado em {% data variables.product.prodname_actions %} foi adicionado a um grupo. Para obter mais informações, consulte [Transferir um executor auto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).                                                                                                                                                                                         |
| `enterprise.runner_group_runners_updated`        | Uma lista de integrantes de um grupo do executor de {% data variables.product.prodname_actions %} foi atualizada. Para obter mais informações, consulte "[Definir executores auto-hospedados em um grupo para uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".                                                                                                                                                                                                          |
{%- ifversion ghec %}
| `enterprise.runner_group_visiblity_updated` | A visibilidade de um grupo de executores auto-hospedados de {% data variables.product.prodname_actions %} foi atualizada por meio da API REST. Para obter mais informações, consulte "[Atualize um grupo de executores auto-hospedados para uma organização](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)".
{%- endif %}
{%- ifversion ghec or ghes > 3.1 or ghae %}
| `enterprise.self_hosted_runner_online` | O aplicativo do executor de {% data variables.product.prodname_actions %} foi iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)". | `enterprise.self_hosted_runner_offline` | O aplicativo do executor de {% data variables.product.prodname_actions %} foi interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
{%- endif %}
{%- ifversion ghec or ghes %}
| `enterprise.self_hosted_runner_updated` | O aplicativo do executor de {% data variables.product.prodname_actions %} foi atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
{%- endif %}

{%- ifversion ghec %}
### Ações da categoria `enterprise_domain`

| Ação                        | Descrição                                                                                                                                                                                                                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise_domain.approve` | Um domínio corporativo foi aprovado para uma empresa. Para obter mais informações, consulte "[Aprovando um domínio para a sua conta corporativa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account)".     |
| `enterprise_domain.create`  | Um domínio corporativo foi adicionado a uma empresa. Para obter mais informações, consulte "[Verificando um domínio para a sua conta corporativa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)".    |
| `enterprise_domain.destroy` | Um domínio corporativo foi removido de uma empresa. Para obter mais informações, consulte "[Removendo um domínio aprovado ou verificado](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain). "                   |
| `enterprise_domain.verify`  | Um domínio corporativo foi verificado para uma empresa. Para obter mais informações, consulte "[Verificando um domínio para a sua conta corporativa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)". |

### Ações da categoria `enterprise_installation`

| Ação                                    | Descrição                                                                                                                                                                              |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise_installation.create`        | O {% data variables.product.prodname_github_app %} associado com uma conexão corporativa de {% data variables.product.prodname_github_connect %} foi criado.                       |
| `enterprise_installation.destroy`       | O {% data variables.product.prodname_github_app %} associado com uma conexão corporativa de {% data variables.product.prodname_github_connect %} foi excluído.                     |
| `enterprise_installation.token_updated` | O token pertencente a {% data variables.product.prodname_github_app %} associado a uma conexão corporativa de {% data variables.product.prodname_github_connect %} foi atualizado. |
{%- endif %}

{%- ifversion fpt or ghec %}
### ações da categoria `ambiente`

| Ação                                 | Descrição                                                                                                                                                                                                                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `environment.add_protection_rule`    | Uma regra de proteção de ambiente de {% data variables.product.prodname_actions %} foi criada através da API. Para obter mais informações, consulte "[Regras de proteção de ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)".     |
| `environment.create_actions_secret`  | Um segredo foi criado para um ambiente de {% data variables.product.prodname_actions %} através da API. Para obter mais informações, consulte "[Segredos do ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".                              |
| `environment.delete`                 | Um ambiente foi excluído pela API. Para obter mais informações, consulte "["Excluir um ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment)".                                                                                               |
| `environment.remove_actions_secret`  | Um segredo foi excluído para um ambiente de {% data variables.product.prodname_actions %} através da API. Para obter mais informações, consulte "[Segredos do ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".                            |
| `environment.remove_protection_rule` | Uma regra de proteção de ambiente de {% data variables.product.prodname_actions %} foi excluído através da API. Para obter mais informações, consulte "[Regras de proteção de ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)".   |
| `environment.update_actions_secret`  | Um segredo foi atualizado para um ambiente de {% data variables.product.prodname_actions %} através da API. Para obter mais informações, consulte "[Segredos do ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".                          |
| `environment.update_protection_rule` | Uma regra de proteção de ambiente de {% data variables.product.prodname_actions %} foi atualizada através da API. Para obter mais informações, consulte "[Regras de proteção de ambiente](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)". |
{%- endif %}

{%- ifversion ghae %}
### Ações da categoria de `external_group`

| Ação                       | Descrição                                                                                                                                                                                                                                                                                                                                    |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `external_group.delete`    | Um grupo do Okta foi excluído. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".                                                                                    |
| `external_group.link`      | Um grupo do Okta foi mapeado com uma equipe de {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".               |
| `external_group.provision` | Um grupo do Okta foi mapeado com uma equipe em {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".               |
| `external_group.unlink`    | O mapeamento do grupo do Okta foi cancelado de uma equipe de {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)". |
| `external_group.update`    | As onfigurações de um grupo do Okta foram atualizadas. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".                                                            |

### ações de categoria de `external_identity`
| Ação                            | Descrição                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `external_identity.deprovision` | Um usuário foi removido de um grupo do Okta e foi subsequentemente desprovisionado de {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".                      |
| `external_identity.provision`   | Um usuário do Okta foi adicionado a um grupo do Okta e foi posteriormente provisionado à equipe mapeada em {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)". |
| `external_identity.update`      | As configurações do Okta foram atualizadas. Para obter mais informações, consulte "[Mapeando grupos do Okta nas equipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".                                                                                                                     |
{%- endif %}

### Ações da categoria `gist`

| Ação                     | Descrição                               |
| ------------------------ | --------------------------------------- |
| `gist.create`            | Um gist foi criado.                     |
| `gist.destroy`           | Um gist foi excluído.                   |
| `gist.visibility_change` | A visibilidade de um gist foi alterada. |

{% ifversion ghec or ghes > 3.4 or ghae-issue-6724 %}
### ações da categoria `git`

| Ação        | Descrição                                                  |
| ----------- | ---------------------------------------------------------- |
| `git.clone` | Um repositório foi clonado.                                |
| `git.fetch` | As alterações foram obtidas de um repositório.             |
| `git.push`  | As alterações foram enviadas por push para um repositório. |
{% endif %}

### ações de categoria de `hook`

| Ação | Descrição |
| ---- | --------- |
|      |           |
{%- ifversion ghes or ghae %}
| `hook.active_changed`             | O status ativo de um hook foi atualizado.
{%- endif %}
| `hook.config_changed`             | A configuração do hook foi alterada. | `hook.create`                     | Um novo hook foi adicionado. | `hook.destroy`                    | Um hook foi excluído. | `hook.events_changed`             | Os eventos configurados de um hook foram alterados.

### Ações da categoria `integration`

| Ação                               | Descrição                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| `integration.create`               | Uma integração foi criada.                                                                  |
| `integration.destroy`              | Uma integração foi excluída.                                                                |
| `integration.manager_added`        | Um integrante de uma empresa ou organização foi adicionado como um gerente de integração.   |
| `integration.manager_removed`      | Um integrante de uma empresa ou organização foi removido do papel de gerente de integração. |
| `integration.transfer`             | A propriedade de uma integração foi transferida para outro usuário ou organização.          |
| `integration.remove_client_secret` | O segredo de um cliente para uma integração foi removido.                                   |
| `integration.revoke_all_tokens`    | Silicitou-se que todos os tokens de usuário para uma integração fossem revogados.           |
| `integration.revoke_tokens`        | O(s) token(s) para uma integração foi(foram) revogado(s).                                   |

### Ações da categoria `integration_installation`

| Ação                                             | Descrição                                              |
| ------------------------------------------------ | ------------------------------------------------------ |
| `integration_installation.contact_email_changed` | Um e-mail de contato para uma integração foi alterado. |
| `integration_installation.create`                | Uma integração foi instalada.                          |
| `integration_installation.destroy`               | Uma integração foi desinstalada.                       |
| `integration_installation.repositories_added`    | Os repositórios foram adicionados a uma integração.    |
| `integration_installation.repositories_removed`  | Os repositórios foram removidos de uma integração.     |
{%- ifversion fpt or ghec %}
| `integration_installation.suspend` | Uma integração foi suspensa. | `integration_installation.unsuspend` | A suspensão de uma integração foi cancelada.
{%- endif %}
| `integration_installation.version_updated` | As permissões para uma integração foram atualizadas.

### ações de categoria de `integration_installation_request`

| Ação                                      | Descrição                                                                                                                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `integration_installation_request.create` | Um integrante solicitou que um proprietário instale uma integração para uso em uma empresa ou organização.                                                                              |
| `integration_installation_request.close`  | Uma solicitação para instalar uma integração para uso em uma empresa ou organização foi ou aprovada ou negada por um proprietário ou cancelada pelo integrante que abriu a solicitação. |

{%- ifversion ghec or ghae %}
### Ações da categoria `ip_allow_list`

| Ação                                       | Descrição                                                                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `ip_allow_list.enable`                     | Uma lista de permissões de IP foi habilitada.                                                                          |
| `ip_allow_list.enable_for_installed_apps`  | Uma lista de permissões de IP foi habilitada para a instalação de {% data variables.product.prodname_github_apps %}. |
| `ip_allow_list.disable`                    | Uma lista de permissões do IP foi desabilitada.                                                                        |
| `ip_allow_list.disable_for_installed_apps` | Uma lista de permissões de IP foi desabilitada para o {% data variables.product.prodname_github_apps %} instalado.   |

### Ações da categoria `ip_allow_list_entry`

| Ação                          | Descrição                                                     |
| ----------------------------- | ------------------------------------------------------------- |
| `ip_allow_list_entry.create`  | Um endereço IP foi adicionado a uma lista de permissão do IP. |
| `ip_allow_list_entry.update`  | Um endereço IP ou sua descrição foi alterada.                 |
| `ip_allow_list_entry.destroy` | Um endereço IP foi excluído de uma lista de permissões de IP. |
{%- endif %}

### ações de categoria de `problema`

| Ação             | Descrição                                                                                                                                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `issue.destroy`  | Um problema foi excluído do repositório. Para obter mais informações, consulte "[Excluir uma problema](/issues/tracking-your-work-with-issues/deleting-an-issue)".                                                               |
| `issue.pinned`   | Um problema foi fixado em um repositório. Para obter mais informações, consulte "[Fixar um problema no seu repositório](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)".                            |
| `issue.transfer` | Um problema foi transferido para outro repositório. Para obter mais informações, consulte "[Transferir um problema para outro repositório](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)". |
| `issue.unpinned` | Um problema foi desfixado de um repositório. Para obter mais informações, consulte "[Fixar um problema no seu repositório](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)".                         |

### Ações da categoria `issue_comment`

| Ação                     | Descrição                                                           |
| ------------------------ | ------------------------------------------------------------------- |
| `issue_comment.destroy`  | Um comentário sobre um problema foi excluído do repositório.        |
| `issue_comment.pinned`   | Um comentário sobre um problema foi fixado em um repositório.       |
| `issue_comment.unpinned` | Um comentário sobre um problema foi desafixado de um repositório.   |
| `issue_comment.update`   | Um comentário em um problema (que não seja o inicial) foi alterado. |

### Ações da categoria `problemas`

| Ação                            | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `issues.deletes_disabled`       | A capacidade de os integrantes da empresa de excluir problemas foi desabilitada. Os membros não podem excluir problemas de nenhuma organização em uma empresa. Para obter mais informações, consulte "[Aplicando uma política para excluir problemas](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)".                           |
| `issues.deletes_enabled`        | A capacidade de os integrantes da empresa de excluir problemas foi habilitada. Os membros podem excluir problemas de nenhuma organização em uma empresa. Para obter mais informações, consulte "[Aplicando uma política para excluir problemas](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)".                                 |
| `issues.deletes_policy_cleared` | Um proprietário corporativo{% ifversion ghes %} ou administrador do site{% endif %} limpou a configuração da política para permitir que os integrantes excluam problemas em uma empresa. Para obter mais informações, consulte "[Aplicando uma política para excluir problemas](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)". |

{%- ifversion fpt or ghec %}
### ações de categoria de `marketplace_agreement_signature`

| Ação                                     | Descrição                                                                                                                     |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `marketplace_agreement_signature.create` | Um usuário assinou o Acordo de Desenvolvedor de {% data variables.product.prodname_marketplace %} em nome de uma organização. |

### ações de categoria de `marketplace_listing`

| Ação                                  | Descrição                                                                                                         |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `marketplace_listing.approve`         | Um anúncio foi aprovado para inclusão em {% data variables.product.prodname_marketplace %}.                       |
| `marketplace_listing.change_category` | Uma categoria para um anúncio de um aplicativo em {% data variables.product.prodname_marketplace %} foi alterada. |
| `marketplace_listing.create`          | Um anúncio para um aplicativo em {% data variables.product.prodname_marketplace %} foi criado.                    |
| `marketplace_listing.delist`          | Um anúncio foi removido de {% data variables.product.prodname_marketplace %}.                                     |
| `marketplace_listing.redraft`         | Uma listagem foi enviada de volta para o estado rascunho.                                                         |
| `marketplace_listing.reject`          | A inclusão de uma listagem não foi aceita em {% data variables.product.prodname_marketplace %}.                   |
{%- endif %}

### ações de categoria de `members_can_create_pages`

| Ação                               | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `members_can_create_pages.disable` | A capacidade de os integrantes de publicar {% data variables.product.prodname_pages %} foi desabilitada. Os integrantes não podem publicar {% data variables.product.prodname_pages %} em uma organização. Para obter mais informações, consulte "[Gerenciando a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)". |
| `members_can_create_pages.enable`  | A capacidade de os integrantes de publicar {% data variables.product.prodname_pages %} foi habilitada. Os integrantes podem publicar {% data variables.product.prodname_pages %} em uma organização. Para obter mais informações, consulte "[Gerenciando a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".       |

### Ações da categoria `members_can_create_private_pages`

| Ação                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `members_can_create_private_pages.disable` | A capacidade de os integrantes de publicar {% data variables.product.prodname_pages %} privado foi desabilitada. Os integrantes não podem publicar {% data variables.product.prodname_pages %} privado em uma organização. Para obter mais informações, consulte "[Gerenciando a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)". |
| `members_can_create_private_pages.enable`  | A capacidade de os integrantes de publicar {% data variables.product.prodname_pages %} privado foi habilitada. Os integrantes podem publicar {% data variables.product.prodname_pages %} privado em uma organização. Para obter mais informações, consulte "[Gerenciando a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".       |

### Ações da categoria `members_can_create_public_pages`

| Ação                                      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `members_can_create_public_pages.disable` | A capacidade de os integrantes de publicar {% data variables.product.prodname_pages %} público foi desabilitada. Os integrantes não podem publicar {% data variables.product.prodname_pages %} público em uma organização. Para obter mais informações, consulte "[Gerenciando a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)". |
| `members_can_create_public_pages.enable`  | A capacidade de os integrantes de publicar {% data variables.product.prodname_pages %} público foi habilitada. Os integrantes podem publicar {% data variables.product.prodname_pages %} público em uma organização. Para obter mais informações, consulte "[Gerenciando a publicação de sites do GitHub Pages para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".       |

{%- ifversion ghec or ghes or ghae %}
### Ações da categoria `members_can_delete_repos`

| Ação                               | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `members_can_delete_repos.clear`   | O proprietário de uma empresa{% ifversion ghes %} ou administrador do site{% endif %} limpou a configuração de política para excluir ou transferir repositórios em qualquer organização em uma empresa. Para obter mais informações, consulte "[Aplicando uma política para a exclusão e transferência](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)". |
| `members_can_delete_repos.disable` | A capacidade de os integrantes da empresa de excluir repositórios foi desabilitada. Os membros não podem excluir ou transferir repositórios de nenhuma organização em uma empresa. Para obter mais informações, consulte "[Aplicando uma política para a exclusão e transferência](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)".                      |
| `members_can_delete_repos.enable`  | A capacidade de os integrantes da empresa de excluir repositórios foi habilitada. Os membros podem excluir ou transferir repositórios de nenhuma organização em uma empresa. Para obter mais informações, consulte "[Aplicando uma política para a exclusão e transferência](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)".                            |

### Ações da categoria `members_can_view_dependency_insights`

| Ação                                           | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `members_can_view_dependency_insights.clear`   | Um proprietário da empresa{% ifversion ghes %} ou administrador do site{% endif %} limpou a configuração da política para visualizar insights de dependência em qualquer organização de uma empresa.{% ifversion ghec %} Para obter mais informações, consulte "[Aplicando uma política de visibilidade de insights de dependência](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)".{% endif %}
| `members_can_view_dependency_insights.disable` | A habilidade para os integrantes da empresa para visualizar insights de dependência foi desativada. Os integrantes não podem ver insights de dependência em qualquer organização de uma empresa.{% ifversion ghec %} Para obter mais informações, consulte "[Aplicando uma política de visibilidade de insights de dependência](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)"{% endif %}
| `members_can_view_dependency_insights.enable`  | A habilidade para os integrantes da empresa para visualizar insights de dependência foi habilitada. Os integrantes podem ver insights de dependência em qualquer organização de uma empresa.{% ifversion ghec %} Para obter mais informações, consulte "[Aplicando uma política de visibilidade de insights de dependência](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)"{% endif %}

### Ações da categoria `migration`

| Ação                     | Descrição                                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `migration.create`       | Um arquivo de migração foi criado para transferência de dados da localidade *fonte* (como uma organização de {% data variables.product.prodname_dotcom_the_website %} ou uma instância de {% data variables.product.prodname_ghe_server %}) para um *destino* da instância de {% data variables.product.prodname_ghe_server %}.            |
| `migration.destroy_file` | Um arquivo de migração para transferência de dados da localidade *fonte* (como uma organização de {% data variables.product.prodname_dotcom_the_website %} ou uma instância de {% data variables.product.prodname_ghe_server %}) para um *destino* da instância de{% data variables.product.prodname_ghe_server %} instância foi excluído. |
| `migration.download`     | Um arquivo de migração para transferência de dados da localidade *fonte* (como uma organização de {% data variables.product.prodname_dotcom_the_website %} ou uma instância de {% data variables.product.prodname_ghe_server %}) para um *destino* da instância de{% data variables.product.prodname_ghe_server %} instância foi baixado.  |
{%- endif %}

### ações de categoria`Oauth_access`

| Ação | Descrição |
| ---- | --------- |
|      |           |


`oauth_access.create`   | Um [token de acesso do OAuth][] foi gerado para a conta de um usuário. Para obter mais informações, consulte "[Criando um token de acesso pessoal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)." `oauth_access.destroy`  | Um [token de acesso do OAuth][] foi excluído da conta de um usuário.

### ações da categoria `oauth_application`

| Ação                        | Descrição                                                                       |
| --------------------------- | ------------------------------------------------------------------------------- |
| `oauth_application.create`  | Um aplicativo do [OAuth][] foi criado para uma conta de usuário ou organização. |
| `oauth_application.destroy` | Um [aplicativo OAuth][] foi excluído de uma organização ou conta de usuário.    |
{%- ifversion fpt or ghec %}
| `oauth_application.generate_client_secret`   | A chave do segredo de um [aplicativo do OAuth ][] foi gerada. | `oauth_application.remove_client_secret`     | A chave do segredo de um [aplicativo OAuth application][]foi excluída.
{%- endif %}
| `oauth_application.reset_secret`     | A chave do segredo de um [aplicativo OAuth application][]foi redefinida.
{%- ifversion fpt or ghec %}
| `oauth_application.revoke_all_tokens` | Solicitou-se que todos os tokens para um [aplicativo OAuth][] fossem revogados.
{%- endif %}
| `oauth_application.revoke_tokens`     | O(s) token(s) para um [aplicativo OAuth ][] were foi(foram) removido(s). | `oauth_application.transfer`          | Um [aplicativo OAuth][] foi transferido da conta de um usuário ou organização para outro.
{%- ifversion ghes or ghae %}
| `oauth_application.unsuspend`         | Um [aplicativo OAuth][] foi suspenso para a conta de um usuário ou organização.
{%- endif %}

{%- ifversion fpt or ghec %}
### Ações da categoria `oauth_authorization`

| Ação                          | Descrição                                                                                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `oauth_authorization.create`  | Uma autorização para um aplicativo OAuth foi criada. Para obter mais informações, consulte "[Autorizar aplicativos OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".     |
| `oauth_authorization.destroy` | Uma autorização para um aplicativo OAuth foi excluída. Para obter mais informações, consulte "[Autorizar aplicativos OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".   |
| `oauth_authorization.update`  | Uma autorização para um aplicativo OAuth foi atualizada. Para obter mais informações, consulte "[Autorizar aplicativos OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)". |
{%- endif %}

### ações de categoria de `org`

| Ação                                                                                                                                                                                                                                                                                                           | Descrição                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `org.accept_business_invitation`                                                                                                                                                                                                                                                                               | Um convite enviado para uma organização para participar de uma empresa foi aceito. |
| {% ifversion ghec %}Para obter mais informações, consulte "[Convidar uma organização para participar da sua conta corporativa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)".{% endif %} |                                                                                    |
| `org.add_billing_manager`                                                                                                                                                                                                                                                                                      | Um gerente de cobrança foi adicionado a uma organização.                           |
| {% ifversion fpt or ghec %}Para obter mais informações, consulte "[Adicionando um gerente de cobrança à sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".{% endif %}                                                    |                                                                                    |
| `org.add_member`                                                                                                                                                                                                                                                                                               | Um usuário entrou em uma organização.                                              |
{%- ifversion ghes > 3.0 or ghae or ghec %}
| `org.advanced_security_disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} foi desabilitado para novos repositórios em uma organização. | `org.advanced_security_disabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} foi desabilitado para todos os repositórios em uma organização. | `org.advanced_security_enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} foi habilitado para novos repositórios em uma organização. | `org.advanced_security_enabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} foi habilitado para todos os repositórios em uma organização. | `org.advanced_security_policy_selected_member_disabled` | O proprietário de uma empresa evitou que as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} fossem habilitadas para os repositórios pertencentes à organização. {% data reusables.advanced-security.more-information-about-enforcement-policy %} | `org.advanced_security_policy_selected_member_enabled` | O proprietário de uma empresa permitiu que as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} fossem habilitadas para repositórios pertencentes à organização. {% data reusables.advanced-security.more-information-about-enforcement-policy %} | `org.advanced_security_policy_update` | O proprietário de uma organização atualizou as políticas para {% data variables.product.prodname_GH_advanced_security %} em uma empresa. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
{%- endif %}
| `org.async_delete` | Um usuário iniciou um trabalho em segundo plano para excluir uma organização.
{%- ifversion ghec %}
| `org.audit_log_export` | O proprietário de uma organização criou uma exportação do log de auditoria da organização. Se a exportação incluir uma consulta, o log relacionará a consulta usada e o número de entradas do log de auditoria que correspondem à consulta. Para obter mais informações, consulte "[Exportando atividades de registro de auditoria para a sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)".
{%- endif %}
| `org.block_user` | O proprietário de uma organização bloqueou um usuário de acessar os repositórios da organização. |{% ifversion fpt or ghec %}Para obter mais informações, consulte "[Bloqueando um usuário ds sua organização](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)"{% endif %}| | `org.cancel_business_invitation` | Um convite para uma organização juntar-se a uma empresa foi revogado. |{% ifversion ghec %}Para obter mais informações, consulte "[Convidando uma organização para participar da sua conta corporativa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)"{% endif %}| | `org.cancel_invitation` | Um convite enviado a um usuário para ingressar em uma organização foi revogado. | `org.clear_actions_settings` | O proprietário de uma organização apagou as configurações da política de {% data variables.product.prodname_actions %} para uma organização. Para obter mais informações, consulte "[Gerenciando as permissões do GitHub Actions para sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)". | `org.clear_default_repository_permission` | O proprietário de uma organização limpou a configuração da política de permissão do repositório de base para uma organização. Para obter mais informações, consulte "[Definindo permissões de base](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)". | `org.clear_member_team_creation_permission` | O proprietário de uma organização limpou a configuração de de criação de novas equipes para uma organização. Para obter mais informações, consulte "[Configurar permissões de criação de equipes na organização](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)". | `org.clear_reader_discussion_creation_permission` | O proprietário de uma organização limpou a criação de novas discussões para uma organização. |{% ifversion fpt or ghec %}Para obter mais informações, consulte "[Permitindo ou proibindo usuários com acesso de leitura de criar discussões](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)"{% endif %}| | `org.clear_members_can_create_repos`                 | O proprietário de uma organização apagou uma restrição à criação de repositórios em uma organização. Para obter mais informações, consulte "[Restringir a criação de repositórios na organização](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)". | `org.clear_members_can_invite_outside_collaborators` | O proprietário de uma organização apagou a política de convite de colaboradores externos para uma organização. Para obter mais informações, consulte "[Configurar permissões para adicionar colaboradores externos](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)". | `org.clear_new_repository_default_branch_setting`    | O proprietário de uma organização apagou o nome do branch padrão para a configuração de novos repositórios para uma organização. Para obter mais informações, consulte "[Definindo o nome padrão do branch](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name)".
{%- ifversion fpt or ghec %}
| `org.codespaces_trusted_repo_access_granted`         | {% data variables.product.prodname_codespaces %} foi concedido acesso confiável ao repositório a todos os outros repositórios em uma organização. Para obter mais informações, consulte "[Gerenciar acesso ao repositório para os codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)". | `org.codespaces_trusted_repo_access_revoked`         | {% data variables.product.prodname_codespaces %} acesso confiável ao repositório para todos os outros repositórios de uma organização foi revogado. Para obter mais informações, consulte "[Gerenciar acesso ao repositório para os codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)".
{%- endif %}
| `org.config.disable_collaborators_only` | The interaction limit for collaborators only for an organization was disabled. |{% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}| | `org.config.disable_contributors_only` | The interaction limit for prior contributors only for an organization was disabled. |{% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}| | `org.config.disable_sockpuppet_disallowed` | The interaction limit for existing users only for an organization was disabled. |{% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}| | `org.config.enable_collaborators_only` | The interaction limit for collaborators only for an organization was enabled. |{% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}| | `org.config.enable_contributors_only` | The interaction limit for prior contributors only for an organization was enabled. |{% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}| | `org.config.enable_sockpuppet_disallowed` | The interaction limit for existing users only for an organization was enabled. |{% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}| | `org.confirm_business_invitation` | An invitation for an organization to join an enterprise was confirmed. |{% ifversion ghec %}For more information, see "[Inviting an organization to join your enterprise account](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)."{% endif %}| | `org.create` | An organization was created. Para obter mais informações, consulte "[Criar uma nova organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".
{%- ifversion fpt or ghec or ghes %}
| `org.create_actions_secret` | A {% data variables.product.prodname_actions %} secret was created for an organization. Para obter mais informações, consulte "[Criar segredos criptografados para uma organização](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)".
{%- endif %}
| `org.create_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was created for an organization. | `org.delete`       | An organization was deleted by a user-initiated background job. | `org.disable_member_team_creation_permission` | An organization owner limited team creation to owners. Para obter mais informações, consulte "[Configurar permissões de criação de equipes na organização](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)". | `org.disable_reader_discussion_creation_permission` | An organization owner limited discussion creation to users with at least triage permission in an organization. {% ifversion fpt or ghec %}For more information, see "[Allowing or disallowing users with read access to create discussions](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)."{% endif %}
{%- ifversion fpt or ghec %}
| `org.disable_oauth_app_restrictions` | Third-party application access restrictions for an organization were disabled. Para obter mais informações, consulte "[Desabilitando restrições de acesso ao aplicativo OAuth para sua organização](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization)".
{%- endif %}
{%- ifversion ghec %}
| `org.disable_saml` | O proprietário de uma organização desabilitou o logon único SAML para uma organização.
{%- endif %}
{%- ifversion not ghae %}
| `org.disable_two_factor_requirement` | An organization owner disabled a two-factor authentication requirement for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.
{%- endif %}
| `org.display_commenter_full_name_disabled` | An organization owner disabled the display of a commenter's full name in an organization. Members cannot see a comment author's full name. | `org.display_commenter_full_name_enabled` | An organization owner enabled the display of a commenter's full name in an organization. Members can see a comment author's full name. | `org.enable_member_team_creation_permission` | An organization owner allowed members to create teams. Para obter mais informações, consulte "[Configurar permissões de criação de equipes na organização](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)". | `org.enable_reader_discussion_creation_permission` | An organization owner allowed users with read access to create discussions in an organization. {% ifversion fpt or ghec %}For more information, see "[Allowing or disallowing users with read access to create discussions](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)."{% endif %}
{%- ifversion fpt or ghec %}
| `org.enable_oauth_app_restrictions` | Third-party application access restrictions for an organization were enabled. For more information, see "[Enabling OAuth App access restrictions for your organization](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization)."
{%- endif %}
{%- ifversion ghec %}
| `org.enable_saml` | An organization owner [enabled SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) for an organization.
{%- endif %}
{%- ifversion not ghae %}
| `org.enable_two_factor_requirement` | An organization owner requires two-factor authentication for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.
{%- endif %}
| `org.integration_manager_added` | An organization owner granted a member access to manage all GitHub Apps owned by an organization. | `org.integration_manager_removed` | An organization owner removed access to manage all GitHub Apps owned by an organization from an organization member. | `org.invite_member` | A new user was invited to join an organization. |{% ifversion fpt or ghec %}For more information, see "[Inviting users to join your organization](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)."{% endif %}| | `org.invite_to_business` | An organization was invited to join an enterprise. | `org.members_can_update_protected_branches.clear` | An organization owner unset a policy for whether members of an organization can update protected branches on repositories in an organization. Os administradores da organização podem escolher se permitem a atualização das configurações dos branches protegidos. | `org.members_can_update_protected_branches.disable` | The ability for enterprise members to update protected branches was disabled. Apenas os proprietários corporativos podem atualizar branches protegidos. | `org.members_can_update_protected_branches.enable` |  The ability for enterprise members to update protected branches was enabled. Members of an organization can update protected branches.
{%- ifversion fpt or ghec %}
| `org.oauth_app_access_approved` | An owner [granted organization access to an {% data variables.product.prodname_oauth_app %}](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization). | `org.oauth_app_access_denied` | An owner [disabled a previously approved {% data variables.product.prodname_oauth_app %}'s access](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization) to an organization. | `org.oauth_app_access_requested` | An organization member requested that an owner grant an {% data variables.product.prodname_oauth_app %} access to an organization.
{%- endif %}
| `org.recreate` | An organization was restored. | `org.register_self_hosted_runner` | A new self-hosted runner was registered. Para obter mais informações, consulte "[Adicionar um executor auto-hospedado a uma organização](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)". | `org.remove_actions_secret` | A {% data variables.product.prodname_actions %} secret was removed. | `org.remove_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was removed from an organization. | `org.remove_billing_manager` | An owner removed a billing manager from an organization. |{% ifversion fpt or ghec %}For more information, see "[Removing a billing manager from your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization)"{% endif %}{% ifversion not ghae %} or when [two-factor authentication was required in an organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and a billing manager didn't use 2FA or disabled 2FA.{% endif %}| | `org.remove_member` | An [owner removed a member from an organization](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %} or when [two-factor authentication was required in an organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and an organization member doesn't use 2FA or disabled 2FA{% endif %}. Also an [organization member removed themselves](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/removing-yourself-from-an-organization) from an organization. | `org.remove_outside_collaborator` | An owner removed an outside collaborator from an organization{% ifversion not ghae %} or when [two-factor authentication was required in an organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and an outside collaborator didn't use 2FA or disabled 2FA{% endif %}. | `org.remove_self_hosted_runner` | A self-hosted runner was removed. Para obter mais informações, consulte "[Remover um executor de uma organização](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)." | `org.rename` | An organization was renamed. | `org.restore_member` | An organization member was restored. For more information, see "[Reinstating a former member of your organization](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)."
{%- ifversion ghec %}
| `org.revoke_external_identity` | An organization owner revoked a member's linked identity. Para obter mais informações, consulte "[Visualizar e gerenciar o acesso SAML de um integrante à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)". | `org.revoke_sso_session` | An organization owner revoked a member's SAML session. Para obter mais informações, consulte "[Visualizar e gerenciar o acesso SAML de um integrante à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".
{%- endif %}
| `org.runner_group_created` | A self-hosted runner group was created. Para obter mais informações, consulte "[Criar um grupo de executores auto-hospedados para uma organização](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)". | `org.runner_group_removed` | A self-hosted runner group was removed. Para obter mais informações, consulte "[Remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
{%- ifversion fpt or ghec %}
| `org.runner_group_renamed` | A self-hosted runner group was renamed. Para obter mais informações, consulte "[Alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
{%- endif %}
| `org.runner_group_updated` | The configuration of a self-hosted runner group was changed. Para obter mais informações, consulte "[Alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)". | `org.runner_group_runner_removed` |  The REST API was used to remove a self-hosted runner from a group. Para obter mais informações, consulte "[Remover um executor auto-hospedado de um grupo para uma organização](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)". | `org.runner_group_runners_added` | A self-hosted runner was added to a group. Para obter mais informações, consulte [Transferir um executor auto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group). | `org.runner_group_runners_updated`|  A runner group's list of members was updated. Para obter mais informações, consulte "[Definir executores auto-hospedados em um grupo para uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
{%- ifversion fpt or ghec %}
| `org.runner_group_visiblity_updated` | The visibility of a self-hosted runner group was updated via the REST API. Para obter mais informações, consulte "[Atualize um grupo de executores auto-hospedados para uma organização](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)".
{%- endif %}
{%- if secret-scanning-audit-log-custom-patterns %}
| `org.secret_scanning_push_protection_disable` | An organization owner or administrator disabled push protection for secret scanning. Para obter mais informações, consulte "[Protegendo pushes com digitalização de segredo](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)". | `org.secret_scanning_push_protection_enable` | An organization owner or administrator enabled push protection for secret scanning.
{%- endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
| `org.self_hosted_runner_online` | The runner application was started. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)". | `org.self_hosted_runner_offline` | The runner application was stopped. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
{%- endif %}
{%- ifversion fpt or ghec or ghes %}
| `org.self_hosted_runner_updated` | The runner application was updated. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
{%- endif %}
{%- ifversion fpt or ghec %}
| `org.set_actions_fork_pr_approvals_policy` | The setting for requiring approvals for workflows from public forks was changed for an organization. For more information, see "[Requiring approval for workflows from public forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)."
{%- endif %}
| `org.set_actions_retention_limit` | The retention period for {% data variables.product.prodname_actions %} artifacts and logs in an organization was changed. For more information, see "[Configuring the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your organization](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)."
{%- ifversion fpt or ghec or ghes %}
| `org.set_fork_pr_workflows_policy` | The policy for workflows on private repository forks was changed. For more information, see "[Enabling workflows for private repository forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)."
{%- endif %}
{%- ifversion ghes %}
| `org.sso_response` | A SAML single sign-on response was generated when a member attempted to authenticate with an organization.
{%- endif %}
{%- ifversion not ghae %}
| `org.transform`    | A user account was converted into an organization. For more information, see "[Converting a user into an organization](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)."
{%- endif %}
| `org.unblock_user` | An organization owner unblocked a user from an organization. {% ifversion fpt or ghec %}For more information, see "[Unblocking a user from your organization](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)."{% endif %}
{%- ifversion fpt or ghec or ghes %}
| `org.update_actions_secret` | A {% data variables.product.prodname_actions %} secret was updated.
{%- endif %}
| `org.update_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was updated for an organization. | `org.update_default_repository_permission` | An organization owner changed the default repository permission level for organization members. | `org.update_member` | An organization owner changed a person's role from owner to member or member to owner. | `org.update_member_repository_creation_permission` | An organization owner changed the create repository permission for organization members. | `org.update_member_repository_invitation_permission` | An organization owner changed the policy setting for organization members inviting outside collaborators to repositories. Para obter mais informações, consulte "[Configurar permissões para adicionar colaboradores externos](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)". | `org.update_new_repository_default_branch_setting` | An organization owner changed the name of the default branch for new repositories in the organization. Para obter mais informações, consulte "[Gerenciar o nome do branch padrão para repositórios na sua organização](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)".
{%- ifversion ghec or ghae %}
| `org.update_saml_provider_settings` | An organization's SAML provider settings were updated. | `org.update_terms_of_service` | An organization changed between the Standard Terms of Service and the Corporate Terms of Service. {% ifversion ghec %}For more information, see "[Upgrading to the Corporate Terms of Service](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service)."{% endif %}
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
### ações da categoria `org_credential_authorization`

| Ação                                                                                                                                                                   | Descrição                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org_credential_authorization.deauthorized`                                                                                                                            | A member deauthorized credentials for use with SAML single sign-on.                                                                                                                                                                                                                                 |
| {% ifversion ghec or ghae %}For more information, see "[Authenticating with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on)."{% endif %} |                                                                                                                                                                                                                                                                                                     |
| `org_credential_authorization.grant`                                                                                                                                   | A member authorized credentials for use with SAML single sign-on.                                                                                                                                                                                                                                   |
| {% ifversion ghec or ghae %}For more information, see "[Authenticating with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on)."{% endif %} |                                                                                                                                                                                                                                                                                                     |
| `org_credential_authorization.revoke`                                                                                                                                  | An owner revoked authorized credentials. {% ifversion ghec %}For more information, see "[Viewing and managing your active SAML sessions](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)."{% endif %}
{%- endif %}

{%- if secret-scanning-audit-log-custom-patterns %}
### Ações da categoria `org_secret_scanning_custom_pattern`

| Ação                                        | Descrição                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org_secret_scanning_custom_pattern.create` | A custom pattern is published for secret scanning in an organization. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization). " |
| `org_secret_scanning_custom_pattern.delete` | A custom pattern is removed from secret scanning in an organization. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern). "                      |
| `org_secret_scanning_custom_pattern.update` | Changes to a custom pattern are saved for secret scanning in an organization. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern). "              |
{%- endif %}

### `organization_default_label` category actions

| Ação                                 | Descrição                                                                                                                                                                                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organization_default_label.create`  | A default label for repositories in an organization was created. For more information, see "[Creating a default label](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label)." |
| `organization_default_label.update`  | A default label for repositories in an organization was edited. For more information, see "[Editing a default label](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label)."    |
| `organization_default_label.destroy` | A default label for repositories in an organization was deleted. For more information, see "[Deleting a default label](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label)." |

{%- ifversion fpt or ghec or ghes > 3.1 %}
### `organization_domain` category actions

| Ação                          | Descrição                                                                                                                                                                                                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organization_domain.approve` | An enterprise domain was approved for an organization. For more information, see "[Approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization)."                |
| `organization_domain.create`  | An enterprise domain was added to an organization. For more information, see "[Verifying a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)."                    |
| `organization_domain.destroy` | An enterprise domain was removed from an organization. Para obter mais informações, consulte "[Removendo um domínio aprovado ou verificado](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain). " |
| `organization_domain.verify`  | An enterprise domain was verified for an organization. For more information, see "[Verifying a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)."                |

### `organization_projects_change` category actions

| Ação                                   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organization_projects_change.clear`   | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} cleared the policy setting for organization-wide project boards in an enterprise. For more information, see "[Enforcing a policy for organization-wide project boards](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)." |
| `organization_projects_change.disable` | Organization projects were disabled for all organizations in an enterprise. For more information, see "[Enforcing a policy for organization-wide project boards](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)."                                                                                |
| `organization_projects_change.enable`  | Organization projects were enabled for all organizations in an enterprise. For more information, see "[Enforcing a policy for organization-wide project boards](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)."                                                                                 |
{%- endif %}

{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
### Ações da categoria `pacotes`

| Ação                                 | Descrição                                                                                                                                                                                                                         |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages.insecure_hash`             | Maven published an insecure hash for a specific package version.                                                                                                                                                                  |
| `packages.package_deleted`           | A package was deleted from an organization.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `packages.package_published`         | A package was published or republished to an organization.                                                                                                                                                                        |
| `packages.package_restored`          | An entire package was restored.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `packages.package_version_deleted`   | A specific package version was deleted.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `packages.package_version_published` | A specific package version was published or republished to a package.                                                                                                                                                             |
| `packages.package_version_restored`  | A specific package version was deleted.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `packages.part_upload`               | A specific package version was partially uploaded to an organization.                                                                                                                                                             |
| `packages.upstream_package_fetched`  | A specific package version was fetched from the npm upstream proxy.                                                                                                                                                               |
| `packages.version_download`          | A specific package version was downloaded.                                                                                                                                                                                        |
| `packages.version_upload`            | A specific package version was uploaded.                                                                                                                                                                                          |
{%- endif %}

{%- ifversion fpt or ghec %}
### `pages_protected_domain` category actions

| Ação                            | Descrição                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pages_protected_domain.create` | A {% data variables.product.prodname_pages %} verified domain was created for an organization or enterprise. Para obter mais informações, consulte "[Verificando o seu domínio personalizado para {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."  |
| `pages_protected_domain.delete` | A {% data variables.product.prodname_pages %} verified domain was deleted from an organization or enterprise. Para obter mais informações, consulte "[Verificando o seu domínio personalizado para {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)." |
| `pages_protected_domain.verify` | A {% data variables.product.prodname_pages %} domain was verified for an organization or enterprise. Para obter mais informações, consulte "[Verificando o seu domínio personalizado para {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."          |

### ações de categoria `payment_method`

| Ação                    | Descrição                                                                    |
| ----------------------- | ---------------------------------------------------------------------------- |
| `payment_method.create` | A new payment method was added, such as a new credit card or PayPal account. |
| `payment_method.remove` | A payment method was removed.                                                |
| `payment_method.update` | An existing payment method was updated.                                      |

### `prebuild_configuration` category actions

| Ação                                   | Descrição                                                                                                                                                                                                                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prebuild_configuration.create`        | A {% data variables.product.prodname_codespaces %} prebuild configuration for a repository was created. Para obter mais informações, consulte[Sobre as pré-criações de codespaces](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds)".                      |
| `prebuild_configuration.destroy`       | A {% data variables.product.prodname_codespaces %} prebuild configuration for a repository was deleted. Para obter mais informações, consulte[Sobre as pré-criações de codespaces](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds)".                      |
| `prebuild_configuration.run_triggered` | A user initiated a run of a {% data variables.product.prodname_codespaces %} prebuild configuration for a repository branch. Para obter mais informações, consulte[Sobre as pré-criações de codespaces](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds)". |
| `prebuild_configuration.update`        | A {% data variables.product.prodname_codespaces %} prebuild configuration for a repository was edited. Para obter mais informações, consulte[Sobre as pré-criações de codespaces](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds)".                       |
{%- endif %}

{%- ifversion ghes %}
### `pre_receive_environment` category actions

| Ação                               | Descrição                                                                                                                                                                                                              |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pre_receive_environment.create`   | A pre-receive hook environment was created. For more information, see "[Creating a pre-receive hook environment](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)."    |
| `pre_receive_environment.destroy`  | A pre-receive hook environment was deleted. For more information, see "[Creating a pre-receive hook environment](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)."    |
| `pre_receive_environment.download` | A pre-receive hook environment was downloaded. For more information, see "[Creating a pre-receive hook environment](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)." |
| `pre_receive_environment.update`   | A pre-receive hook environment was updated. For more information, see "[Creating a pre-receive hook environment](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)."    |

### `pre_receive_hook` category actions

| Ação                             | Descrição                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pre_receive_hook.create`        | A pre-receive hook was created. For more information, see "[Creating pre-receive hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks)."                                                                                                                                       |
| `pre_receive_hook.destroy`       | A pre-receive hook was deleted. For more information, see "[Deleting pre-receive hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks)."                                                                                                                                       |
| `pre_receive_hook.enforcement`   | A pre-receive hook enforcement setting allowing repository and organization administrators to override the hook configuration was enabled or disabled. For more information, see "[Managing pre-receive hooks on the GitHub Enterprise Server appliance](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance)." |
| `pre_receive_hook.rejected_push` | A pre-receive hook rejected a push.                                                                                                                                                                                                                                                                                                                                                      |
| `pre_receive_hook.update`        | A pre-receive hook was created. For more information, see "[Editing pre-receive hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks)."                                                                                                                                         |
| `pre_receive_hook.warned_push`   | A pre-receive hook warned about a push.                                                                                                                                                                                                                                                                                                                                                  |
{%- endif %}

### `private_repository_forking` category actions

| Ação                                 | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `private_repository_forking.clear`   | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} cleared the policy setting for allowing forks of private and internal repositories, for a repository, organization or enterprise. For more information, see "[Managing the forking policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), "[Managing the forking policy for your organization](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) and for enterprises "[Enforcing a policy for forking private or internal repositories](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)."                                                                     |
| `private_repository_forking.disable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} disabled the policy setting for allowing forks of private and internal repositories, for a repository, organization or enterprise. Private and internal repositories are never allowed  to be forked. For more information, see "[Managing the forking policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), "[Managing the forking policy for your organization](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) and for enterprises "[Enforcing a policy for forking private or internal repositories](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)." |
| `private_repository_forking.enable`  | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} enabled the policy setting for allowing forks of private and internal repositories, for a repository, organization or enterprise. Private and internal repositories are always allowed to be forked. For more information, see "[Managing the forking policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), "[Managing the forking policy for your organization](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) and for enterprises "[Enforcing a policy for forking private or internal repositories](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)."  |

{%- ifversion fpt or ghec %}
### ações de categoria `profile_picture`

| Ação                     | Descrição                      |
| ------------------------ | ------------------------------ |
| `profile_picture.update` | A profile picture was updated. |
{%- endif %}

### ações de categoria `project`

| Ação                             | Descrição                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project.access`                 | A project board visibility was changed. For more information, see "[Changing project board visibility](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)."                                                                                                                                                    |
| `project.close`                  | A project board was closed. For more information, see "[Closing a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)."                                                                                                                                                                                    |
| `project.create`                 | A project board was created. For more information, see "[Creating a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)."                                                                                                                                                                                 |
| `project.delete`                 | A project board was deleted. For more information, see "[Deleting a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)."                                                                                                                                                                                 |
| `project.link`                   | A repository was linked to a project board. For more information, see "[Linking a repository to a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)."                                                                                                                                    |
| `project.open`                   | A project board was reopened. For more information, see "[Reopening a closed project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board)."                                                                                                                                                                |
| `project.rename`                 | A project board was renamed. For more information, see "[Editing a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)."                                                                                                                                                                                   |
| `project.unlink`                 | A repository was unlinked from a project board. For more information, see "[Linking a repository to a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)."                                                                                                                                |
| `project.update_org_permission`  | The project's base-level permission for all organization members was changed or removed. For more information, see "[Managing access to a project board for organization members](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)."                                                    |
| `project.update_team_permission` | A team's project board permission level was changed or when a team was added or removed from a project board. For more information, see "[Managing team access to an organization project board](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)."                                           |
| `project.update_user_permission` | An organization member or outside collaborator was added to or removed from a project board or had their permission level changed. For more information, see "[Managing an individual’s access to an organization project board](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)." |

{%- ifversion fpt or ghec %}
### `project_field` category actions

| Ação                   | Descrição                                                                                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project_field.create` | A field was created in a project board. For more information, see "[Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-fields)." |
| `project_field.delete` | A field was deleted in a project board. For more information, see "[Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-fields)." |

### `project_view` category actions

| Ação                  | Descrição                                                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `project_view.create` | A view was created in a project board. For more information, see "[Customizing your project (beta) views](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#creating-a-project-view)." |
| `project_view.delete` | A view was deleted in a project board. For more information, see "[Customizing your project (beta) views](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#deleting-a-saved-view)."   |
{%- endif %}

### ações da categoria `protected_branch`

| Ação                                     | Descrição                                                              |
| ---------------------------------------- | ---------------------------------------------------------------------- |
| `protected_branch.create`                | Branch protection was enabled on a branch.                             |
| `protected_branch.destroy`               | Branch protection was disabled on a branch.                            |
| `protected_branch.dismiss_stale_reviews` | Enforcement of dismissing stale pull requests was updated on a branch. |
{%- ifversion ghes %}
| `protected_branch.dismissal_restricted_users_teams` | Enforcement of restricting users and/or teams who can dismiss reviews was updated on a branch.
{%- endif %}
| `protected_branch.policy_override` | A branch protection requirement was overridden by a repository administrator. | `protected_branch.rejected_ref_update` | A branch update attempt was rejected. | `protected_branch.required_status_override` | The required status checks branch protection requirement was overridden by a repository administrator. | `protected_branch.review_policy_and_required_status_override` | The required reviews and required status checks branch protection requirements were overridden by a repository administrator. | `protected_branch.review_policy_override` | The required reviews branch protection requirement was overridden by a repository administrator. | `protected_branch.update_admin_enforced` | Branch protection was enforced for repository administrators.
{%- ifversion ghes %}
| `protected_branch.update_allow_deletions_enforcement_level` | Enforcement of allowing users with push access to delete matching branches was updated on a branch. | `protected_branch.update_allow_force_pushes_enforcement_level` | Enforcement of allowing force pushes for all users with push access was updated on a branch. | `protected_branch.update_linear_history_requirement_enforcement_level` | Enforcement of requiring linear commit history was updated on a branch.
{%- endif %}
| `protected_branch.update_pull_request_reviews_enforcement_level` | Enforcement of required pull request reviews was updated on a branch. Pode ser `0`(desativado), `1`(não administrador), `2`(todos). | `protected_branch.update_require_code_owner_review` | Enforcement of required code owner review was updated on a branch. | `protected_branch.update_required_approving_review_count` | Enforcement of the required number of approvals before merging was updated on a branch. | `protected_branch.update_required_status_checks_enforcement_level` | Enforcement of required status checks was updated on a branch. | `protected_branch.update_signature_requirement_enforcement_level` | Enforcement of required commit signing was updated on a branch. | `protected_branch.update_strict_required_status_checks_policy` | Enforcement of required status checks was updated on a branch. | `protected_branch.update_name` | A branch name pattern was updated for a branch.

### ações de categoria `public_key`

| Ação                                | Descrição                                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| `public_key.create`                 | An SSH key was [added][add key] to a user account or a [deploy key][] was added to a repository. |
| `public_key.delete`                 | An SSH key was removed from a user account or a [deploy key][] was removed from a repository.    |
| `public_key.update`                 | A user account's SSH key or a repository's [deploy key][] was updated.                           |
| `public_key.unverification_failure` | A user account's SSH key or a repository's [deploy key][] was unable to be unverified.           |
| `public_key.unverify`               | A user account's SSH key or a repository's [deploy key][] was unverified.                        |
| `public_key.verification_failure`   | A user account's SSH key or a repository's [deploy key][] was unable to be verified.             |
| `public_key.verify`                 | A user account's SSH key or a repository's [deploy key][] was verified.                          |

{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
### ações da categoria `pull_request`

| Ação                                 | Descrição                                                                                                                                                                                                                                                                                                |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pull_request.close`                 | A pull request was closed without being merged. For more information, see "[Closing a pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)."                                                                                  |
| `pull_request.converted_to_draft`    | A pull request was converted to a draft. For more information, see "[Changing the stage of a pull request](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)."                       |
| `pull_request.create`                | A pull request was created. For more information, see "[Creating a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."                                                                                            |
| `pull_request.create_review_request` | A review was requested on a pull request. Para obter mais informações, consulte "[Sobre merges do pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".                                                                         |
| `pull_request.in_progress`           | A pull request was marked as in progress.                                                                                                                                                                                                                                                                |
| `pull_request.indirect_merge`        | A pull request was considered merged because the pull request's commits were merged into the target branch.                                                                                                                                                                                              |
| `pull_request.merge`                 | A pull request was merged. Para obter mais informações, consulte "[Fazer merge de uma pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)".                                                                                  |
| `pull_request.ready_for_review`      | A pull request was marked as ready for review. Para obter mais informações, consulte "[Alterar o stage de um pull request](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)". |
| `pull_request.remove_review_request` | A review request was removed from a pull request. Para obter mais informações, consulte "[Sobre merges do pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".                                                                 |
| `pull_request.reopen`                | A pull request was reopened after previously being closed.                                                                                                                                                                                                                                               |
| `pull_request_review.delete`         | A review on a pull request was deleted.                                                                                                                                                                                                                                                                  |
| `pull_request_review.dismiss`        | A review on a pull request was dismissed. Para obter mais informações, consulte "[Ignorar uma revisão de pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".                                                            |
| `pull_request_review.submit`         | A review was submitted for a pull request. Para obter mais informações, consulte "[Sobre merges do pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".                                                                        |

### Ações da categoria `pull_request_review`

| Ação                          | Descrição                                                                                                                                                                                                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pull_request_review.delete`  | A review on a pull request was deleted.                                                                                                                                                                                                                 |
| `pull_request_review.dismiss` | A review on a pull request was dismissed. Para obter mais informações, consulte "[Ignorar uma revisão de pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".           |
| `pull_request_review.submit`  | A review on a pull request was submitted. For more information, see "[Submitting your review](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review)." |

### Ações da categoria `pull_request_review_comment`

| Ação                                 | Descrição                                                                                                                                                                                                                            |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pull_request_review_comment.create` | A review comment was added to a pull request. Para obter mais informações, consulte "[Sobre merges do pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)". |
| `pull_request_review_comment.delete` | A review comment on a pull request was deleted.                                                                                                                                                                                      |
| `pull_request_review_comment.update` | A review comment on a pull request was changed.                                                                                                                                                                                      |
{%- endif %}

### ações de categoria `repo`

| Ação                                                     | Descrição                                                                                                                                                                                                                                     |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo.access`                                            | A visibilidade de um repositório alterado para privado{%- ifversion ghes %}, público,{% endif %} ou interno.                                                                                                                                  |
| `repo.actions_enabled`                                   | {% data variables.product.prodname_actions %} was enabled for a repository.                                                                                                                                                                   |
| `repo.add_member`                                        | Um colaborador foi adicionado ao repositório.                                                                                                                                                                                                 |
| `repo.add_topic`                                         | A topic was added to a repository.                                                                                                                                                                                                            |
| `repo.advanced_security_disabled`                        | {% data variables.product.prodname_GH_advanced_security %} was disabled for a repository.                                                                                                                                                   |
| `repo.advanced_security_enabled`                         | {% data variables.product.prodname_GH_advanced_security %} was enabled for a repository.                                                                                                                                                    |
| `repo.advanced_security_policy_selected_member_disabled` | A repository administrator prevented {% data variables.product.prodname_GH_advanced_security %} features from being enabled for a repository.                                                                                               |
| `repo.advanced_security_policy_selected_member_enabled`  | A repository administrator allowed {% data variables.product.prodname_GH_advanced_security %} features to be enabled for a repository.                                                                                                      |
| `repo.archived`                                          | Um repositório foi arquivado. Para obter mais informações, consulte "[Arquivar um repositório de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".           |
| `repo.code_scanning_analysis_deleted`                    | Code scanning analysis for a repository was deleted. For more information, see "[Delete a code scanning analysis from a repository](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository)."                        |
| `repo.change_merge_setting`                              | Pull request merge options were changed for a repository.                                                                                                                                                                                     |
| `repo.clear_actions_settings`                            | A repository administrator cleared {% data variables.product.prodname_actions %} policy settings for a repository.                                                                                                                            |
| `repo.config`                                            | A repository administrator blocked force pushes. Para obter mais informações, consulte [Bloquear pushes forçados em um repositório](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/). |
{%- ifversion fpt or ghec %}
| `repo.config.disable_collaborators_only` | The interaction limit for collaborators only was disabled. Para obter mais informações, consulte "[Restringir interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)". | `repo.config.disable_contributors_only` | The interaction limit for prior contributors only was disabled in a repository. Para obter mais informações, consulte "[Restringir interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)". | `repo.config.disable_sockpuppet_disallowed` | The interaction limit for existing users only was disabled in a repository. Para obter mais informações, consulte "[Restringir interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)". | `repo.config.enable_collaborators_only` | The interaction limit for collaborators only was enabled in a repository. Users that are not collaborators or organization members were unable to interact with a repository for a set duration. Para obter mais informações, consulte "[Restringir interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)". | `repo.config.enable_contributors_only` | The interaction limit for prior contributors only was enabled in a repository. Users that are not prior contributors, collaborators or organization members were unable to interact with a repository for a set duration. Para obter mais informações, consulte "[Restringir interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)". | `repo.config.enable_sockpuppet_disallowed` | The interaction limit for existing users was enabled in a repository. New users aren't able to interact with a repository for a set duration. Existing users of the repository, contributors, collaborators or organization members are able to interact with a repository. Para obter mais informações, consulte "[Restringir interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
{%- endif %}
{%- ifversion ghes %}
| `repo.config.disable_anonymous_git_access`| Anonymous Git read access was disabled for a repository. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)". | `repo.config.enable_anonymous_git_access` | Anonymous Git read access was enabled for a repository. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)". | `repo.config.lock_anonymous_git_access` | A repository's anonymous Git read access setting was locked, preventing repository administrators from changing (enabling or disabling) this setting. Para obter mais informações, consulte "[Impedir os usuários de alterarem o acesso de leitura anônimo do Git](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)". | `repo.config.unlock_anonymous_git_access` | A repository's anonymous Git read access setting was unlocked, allowing repository administrators to change (enable or disable) this setting. Para obter mais informações, consulte "[Impedir os usuários de alterarem o acesso de leitura anônimo do Git](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)".
{%- endif %}
| `repo.create` | A repository was created. | `repo.create_actions_secret` | A {% data variables.product.prodname_actions %} secret was created for a repository. Para obter mais informações, consulte "[Criar segredos criptografados para um repositório](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)". | `repo.create_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was created for a repository. | `repo.destroy` | A repository was deleted.
{%- ifversion ghes %}
| `repo.disk_archive`  | A repository was archived on disk. Para obter mais informações, consulte "[Arquivando repositórios](/repositories/archiving-a-github-repository/archiving-repositories)".
{%- endif %}
| `repo.download_zip` | A source code archive of a repository was downloaded as a ZIP file. | `repo.pages_cname` | A {% data variables.product.prodname_pages %} custom domain was modified in a repository. | `repo.pages_create` | A {% data variables.product.prodname_pages %} site was created. | `repo.pages_destroy` | A {% data variables.product.prodname_pages %} site was deleted. | `repo.pages_https_redirect_disabled` | HTTPS redirects were disabled for a {% data variables.product.prodname_pages %} site. | `repo.pages_https_redirect_enabled` | HTTPS redirects were enabled for a {% data variables.product.prodname_pages %} site. | `repo.pages_source` | A {% data variables.product.prodname_pages %} source was modified. | `repo.pages_private` | A {% data variables.product.prodname_pages %} site visibility was changed to private. | `repo.pages_public` | A {% data variables.product.prodname_pages %} site visibility was changed to public. | `repo.register_self_hosted_runner` | A new self-hosted runner was registered. Para obter mais informações, consulte "[Adicionar um executor auto-hospedado a um repositório](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository). ". | `repo.remove_self_hosted_runner` | A self-hosted runner was removed. Para obter mais informações, consulte "[Remover um executor de um repositório](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)". | `repo.remove_actions_secret` | A {% data variables.product.prodname_actions %} secret was deleted for a repository. | `repo.remove_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was deleted for a repository. | `repo.remove_member` | A collaborator was removed from a repository. | `repo.remove_topic` | A topic was removed from a repository. | `repo.rename` | A repository was renamed.
{%- ifversion fpt or ghec %}
| `repo.set_actions_fork_pr_approvals_policy` | The setting for requiring approvals for workflows from public forks was changed for a repository. For more information, see "[Configuring required approval for workflows from public forks](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)."
{%- endif %}
| `repo.set_actions_retention_limit` | The retention period for {% data variables.product.prodname_actions %} artifacts and logs in a repository was changed. Para obter mais informações, consulte "[Configurar o período de retenção para artefatos e registros de {% data variables.product.prodname_actions %} no seu repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository).
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
| `repo.self_hosted_runner_online` | The runner application was started. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)". | `repo.self_hosted_runner_offline` | The runner application was stopped. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)". | `repo.self_hosted_runner_updated` | The runner application was updated. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
{%- endif %}
| `repo.staff_unlock` | An enterprise administrator or GitHub staff (with permission from a repository administrator) temporarily unlocked the repository. | `repo.transfer` | A user accepted a request to receive a transferred repository. | `repo.transfer_outgoing` | A repository was transferred to another repository network. | `repo.transfer_start` | A user sent a request to transfer a repository to another user or organization. | `repo.unarchived` | A repository was unarchived. Para obter mais informações, consulte "[Arquivar um repositório de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)". | `repo.update_actions_settings` | A repository administrator changed {% data variables.product.prodname_actions %} policy settings for a repository. | `repo.update_actions_secret` | A {% data variables.product.prodname_actions %} secret was updated. | `repo.update_actions_access_settings` | The setting to control how a repository was used by {% data variables.product.prodname_actions %} workflows in other repositories was changed. | `repo.update_default_branch` | The default branch for a repository was changed. | `repo.update_integration_secret` | A {% data variables.product.prodname_dependabot %} or {% data variables.product.prodname_codespaces %} integration secret was updated for a repository. | `repo.update_member` | A user's permission to a repository was changed.

{%- ifversion fpt or ghec %}
### Ações da categoria `repository_advisory`

| Ação                                   | Descrição                                                                                                                                                                                                                                 |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repository_advisory.close`            | Someone closed a security advisory. Para obter mais informações, consulte "[Sobre consultoria de segurança de {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)". |
| `repository_advisory.cve_request`      | Someone requested a CVE (Common Vulnerabilities and Exposures) number from {% data variables.product.prodname_dotcom %} for a draft security advisory.                                                                                    |
| `repository_advisory.github_broadcast` | {% data variables.product.prodname_dotcom %} made a security advisory public in the {% data variables.product.prodname_advisory_database %}.                                                                                            |
| `repository_advisory.github_withdraw`  | {% data variables.product.prodname_dotcom %} withdrew a security advisory that was published in error.                                                                                                                                    |
| `repository_advisory.open`             | Someone opened a draft security advisory.                                                                                                                                                                                                 |
| `repository_advisory.publish`          | Someone publishes a security advisory.                                                                                                                                                                                                    |
| `repository_advisory.reopen`           | Someone reopened as draft security advisory.                                                                                                                                                                                              |
| `repository_advisory.update`           | Someone edited a draft or published security advisory.                                                                                                                                                                                    |

### ações de categoria de `repository_content_analysis`

| Ação                                  | Descrição                                                                                                                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repository_content_analysis.enable`  | An organization owner or repository administrator [enabled data use settings for a private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).  |
| `repository_content_analysis.disable` | An organization owner or repository administrator [disabled data use settings for a private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository). |

### ações de categoria de `repository_dependency_graph`

| Ação                                  | Descrição                                                                                                                                                                                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repository_dependency_graph.disable` | A repository owner or administrator disabled the dependency graph for a private repository. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)". |
| `repository_dependency_graph.enable`  | A repository owner or administrator enabled the dependency graph for a private repository.                                                                                                                                                        |
{%- endif %}

### `repository_image` category actions

| Ação                       | Descrição                                        |
| -------------------------- | ------------------------------------------------ |
| `repository_image.create`  | An image to represent a repository was uploaded. |
| `repository_image.destroy` | An image to represent a repository was deleted.  |

### `repository_invitation` category actions

| Ação                           | Descrição                                        |
| ------------------------------ | ------------------------------------------------ |
| `repository_invitation.accept` | An invitation to join a repository was accepted. |
| `repository_invitation.create` | An invitation to join a repository was sent.     |
| `repository_invitation.reject` | An invitation to join a repository was canceled. |

### `repository_projects_change` category actions

| Ação                                 | Descrição                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `repository_projects_change.clear`   | The repository projects policy was removed for an organization, or all organizations in the enterprise. Organization admins can now control their repository projects settings. For more information, see "[Enforcing project board policies in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise)." |
| `repository_projects_change.disable` | Repository projects were disabled for a repository, all repositories in an organization, or all organizations in an enterprise.                                                                                                                                                                                                                                                |
| `repository_projects_change.enable`  | Repository projects were enabled for a repository, all repositories in an organization, or all organizations in an enterprise.                                                                                                                                                                                                                                                 |

{%- ifversion ghec or ghes or ghae %}
### ações de categoria de `repository_secret_scanning`

| Ação                                 | Descrição                                                                                                                                                                                                                                                            |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repository_secret_scanning.disable` | A repository owner or administrator disabled secret scanning for a {% ifversion ghec %}private or internal {% endif %}repository. Para obter mais informações, consulte "[Sobre a varredura de segredos](/github/administering-a-repository/about-secret-scanning)." |
| `repository_secret_scanning.enable`  | A repository owner or administrator enabled secret scanning for a {% ifversion ghec %}private or internal {% endif %}repository.                                                                                                                                     |
{%- endif %}

{%- if secret-scanning-audit-log-custom-patterns %}

### Ações da categoria `repository_secret_scanning_custom_pattern`

| Ação                                               | Descrição                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repository_secret_scanning_custom_pattern.create` | A custom pattern is published for secret scanning in a repository. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository). " |
| `repository_secret_scanning_custom_pattern.delete` | A custom pattern is removed from secret scanning in a repository. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern). "                   |
| `repository_secret_scanning_custom_pattern.update` | Changes to a custom pattern are saved for secret scanning in a repository. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern). "           |

### ações da categoria `repository_secret_scanning_push_protection`

| Ação                                                 | Descrição                                                                                                                                                                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `repository_secret_scanning_push_protection.disable` | A repository owner or administrator  disabled secret scanning for a repository. Para obter mais informações, consulte "[Protegendo pushes com digitalização de segredo](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)". |
| `repository_secret_scanning_push_protection.enable`  | A repository owner or administrator  enabled secret scanning for a repository. Para obter mais informações, consulte "[Protegendo pushes com digitalização de segredo](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".  |
{%- endif %}
### `repository_visibility_change` category actions

| Ação                                   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repository_visibility_change.clear`   | The repository visibility change setting was cleared for an organization or enterprise. For more information, see "[Restricting repository visibility changes in your organization](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)" and "[Enforcing a policy for changes to repository visibility](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility) for an enterprise." |
| `repository_visibility_change.disable` | The ability for enterprise members to update a repository's visibility was disabled. Members are unable to change repository visibilities in an organization, or all organizations in an enterprise.                                                                                                                                                                                                                                                                                                                                                              |
| `repository_visibility_change.enable`  | The ability for enterprise members to update a repository's visibility was enabled. Members are able to change repository visibilities in an organization, or all organizations in an enterprise.                                                                                                                                                                                                                                                                                                                                                                 |

{%- ifversion fpt or ghec or ghes or ghae-issue-4864 %}
### ações de categoria de `repository_vulnerability_alert`

| Ação                                     | Descrição                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `repository_vulnerability_alert.create`  | {% data variables.product.product_name %} created a {% data variables.product.prodname_dependabot %} alert for a repository that uses a vulnerable dependency. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" |
| `repository_vulnerability_alert.dismiss` | An organization owner or repository administrator dismissed a {% data variables.product.prodname_dependabot %} alert about a vulnerable dependency.                                                                                                                                                                                        |
| `repository_vulnerability_alert.resolve` | Someone with write access to a repository pushed changes to update and resolve a vulnerability in a project dependency.                                                                                                                                                                                                                    |
{%- endif %}

{%- ifversion fpt or ghec %}
### ações da categoria `repository_vulnerability_alerts`

| Ação                                                     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repository_vulnerability_alerts.authorized_users_teams` | An organization owner or repository administrator updated the list of people or teams authorized to receive {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies in the repository. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)". |
| `repository_vulnerability_alerts.disable`                | A repository owner or repository administrator disabled {% data variables.product.prodname_dependabot_alerts %}.                                                                                                                                                                                                                                                                                                                                               |
| `repository_vulnerability_alerts.enable`                 | A repository owner or repository administrator enabled {% data variables.product.prodname_dependabot_alerts %}.                                                                                                                                                                                                                                                                                                                                                |
{%- endif %}

### `required_status_check` category actions

| Ação                            | Descrição                                                                                                                                                                                                                                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `required_status_check.create`  | A status check was marked as required for a protected branch. For more information, see "[Require status checks before merging](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)."           |
| `required_status_check.destroy` | A status check was no longer marked as required for a protected branch. For more information, see "[Require status checks before merging](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)." |

{%- ifversion ghec or ghes > 3.1 %}
### `restrict_notification_delivery` category actions

| Ação                                     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `restrict_notification_delivery.enable`  | Email notification restrictions for an organization or enterprise were enabled. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)" and "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."  |
| `restrict_notification_delivery.disable` | Email notification restrictions for an organization or enterprise were disabled. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)" and "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)." |
{%- endif %}

{%- ifversion ghec or ghes > 3.4 or ghae-issue-6271 %}
### ações da categoria `função`

| Ação      | Descrição                                                                                                                                                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`  | An organization owner created a new custom repository role. Para obter mais informações, consulte "[Gerenciando as funções de repositórios personalizados para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".      |
| `destroy` | An organization owner deleted a custom repository role. Para obter mais informações, consulte "[Gerenciando as funções de repositórios personalizados para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".          |
| `update`  | An organization owner edited an existing custom repository role. Para obter mais informações, consulte "[Gerenciando as funções de repositórios personalizados para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)". |
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
### ações da categoria `secret_scanning`

| Ação                      | Descrição                                                                                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secret_scanning.disable` | An organization owner disabled secret scanning for all existing{% ifversion ghec %} private or internal{% endif %} repositories. Para obter mais informações, consulte "[Sobre a varredura de segredos](/github/administering-a-repository/about-secret-scanning)." |
| `secret_scanning.enable`  | An organization owner enabled secret scanning for all existing{% ifversion ghec %} private or internal{% endif %} repositories.                                                                                                                                     |

### ações da categoria `secret_scanning_new_repos`

| Ação                                | Descrição                                                                                                                                                                                                                                                      |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secret_scanning_new_repos.disable` | An organization owner disabled secret scanning for all new{% ifversion ghec %} private or internal{% endif %} repositories. Para obter mais informações, consulte "[Sobre a varredura de segredos](/github/administering-a-repository/about-secret-scanning)." |
| `secret_scanning_new_repos.enable`  | An organization owner enabled secret scanning for all new{% ifversion ghec %} private or internal{% endif %} repositories.                                                                                                                                     |
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
### `security_key` category actions

| Ação                    | Descrição                                     |
| ----------------------- | --------------------------------------------- |
| `security_key.register` | A security key was registered for an account. |
| `security_key.remove`   | A security key was removed from an account.   |
{%- endif %}

{%- ifversion fpt or ghec %}
### ações de categoria de `patrocinadores`

| Ação                                                   | Descrição                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sponsors.agreement_sign`                              | A {% data variables.product.prodname_sponsors %} agreement was signed on behalf of an organization.                                                                                                                                                                                                                     |
| `sponsors.custom_amount_settings_change`               | Custom amounts for {% data variables.product.prodname_sponsors %} were enabled or disabled, or the suggested custom amount was changed. For more information, see "[Managing your sponsorship tiers](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)."                        |
| `sponsors.fiscal_host_change`                          | The fiscal host for a {% data variables.product.prodname_sponsors %} listing was updated.                                                                                                                                                                                                                               |
| `sponsors.withdraw_agreement_signature`                | A signature was withdrawn from a {% data variables.product.prodname_sponsors %} agreement that applies to an organization.                                                                                                                                                                                              |
| `sponsors.repo_funding_links_file_action`              | The FUNDING file in a repository was changed. Para obter mais informações, consulte "[Exibir um botão de patrocinador no seu repositório](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)".                                   |
| `sponsors.sponsor_sponsorship_cancel`                  | A sponsorship was canceled. For more information, see "[Downgrading a sponsorship](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)."                                                                                                                                                           |
| `sponsors.sponsor_sponsorship_create`                  | A sponsorship was created, by sponsoring an account. For more information, see "[Sponsoring an open source contributor](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)."                                                                                                          |
| `sponsors.sponsor_sponsorship_payment_complete`        | After you sponsor an account and a payment has been processed, the sponsorship payment was marked as complete. For more information, see "[Sponsoring an open source contributor](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)."                                                |
| `sponsors.sponsor_sponsorship_preference_change`       | The option to receive email updates from a sponsored account was changed. Para obter mais informações, consulte "[Gerenciar o patrocínio](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)".                                                                                                    |
| `sponsors.sponsor_sponsorship_tier_change`             | A sponsorship was upgraded or downgraded. Para obter mais informações, consulte "[Atualizar um patrocínio](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)" e "[Fazer downgrade de um patrocínio](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)".                     |
| `sponsors.sponsored_developer_approve`                 | A {% data variables.product.prodname_sponsors %} account was approved. For more information, see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)."                        |
| `sponsors.sponsored_developer_create`                  | A {% data variables.product.prodname_sponsors %} account was created. For more information, see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)."                         |
| `sponsors.sponsored_developer_disable`                 | A {% data variables.product.prodname_sponsors %} account was disabled.                                                                                                                                                                                                                                                  |
| `sponsors.sponsored_developer_profile_update`          | You edit a sponsored organization profile. For more information, see "[Editing your profile details for {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)."                                                    |
| `sponsors.sponsored_developer_redraft`                 | A {% data variables.product.prodname_sponsors %} account was returned to draft state from approved state.                                                                                                                                                                                                               |
| `sponsors.sponsored_developer_request_approval`        | An application for {% data variables.product.prodname_sponsors %} was submitted for approval. For more information, see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)." |
| `sponsors.sponsored_developer_tier_description_update` | The description for a sponsorship tier was changed. For more information, see "[Managing your sponsorship tiers](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)."                                                                                                            |
| `sponsors.update_tier_welcome_message`                 | The welcome message for a {% data variables.product.prodname_sponsors %} tier for an organization was updated.                                                                                                                                                                                                          |
| `sponsors.update_tier_repository`                      | A {% data variables.product.prodname_sponsors %} tier changed access for a repository.                                                                                                                                                                                                                                  |
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
### `ssh_certificate_authority` category actions

| Ação                                | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ssh_certificate_authority.create`  | An SSH certificate authority for an organization or enterprise was created. For more information, see "[Managing your organization's SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[Managing SSH certificate authorities for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)." |
| `ssh_certificate_authority.destroy` | An SSH certificate authority for an organization or enterprise was deleted. For more information, see "[Managing your organization's SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[Managing SSH certificate authorities for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)." |

### `ssh_certificate_requirement` category actions

| Ação                                  | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ssh_certificate_requirement.enable`  | The requirement for members to use SSH certificates to access an organization resources was enabled. For more information, see "[Managing your organization's SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[Managing SSH certificate authorities for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)."  |
| `ssh_certificate_requirement.disable` | The requirement for members to use SSH certificates to access an organization resources was disabled. For more information, see "[Managing your organization's SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[Managing SSH certificate authorities for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)." |
{%- endif %}

### `staff` category actions

| Ação                 | Descrição                                                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `staff.disable_repo` | An organization{% ifversion ghes %}, repository or site{% else %} or repository{% endif %} administrator disabled access to a repository and all of its forks.   |
| `staff.enable_repo`  | An organization{% ifversion ghes %}, repository or site{% else %} or repository{% endif %} administrator re-enabled access to a repository and all of its forks. |
{%- ifversion ghes > 3.2 or ghae %}
| `staff.exit_fake_login`       | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} ended an impersonation session on {% data variables.product.product_name %}. | `staff.fake_login`            | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} signed into {% data variables.product.product_name %} as another user.
{%- endif %}
| `staff.repo_lock`             | An organization{% ifversion ghes %}, repository or site{% else %} or repository{% endif %} administrator locked (temporarily gained full access to) a user's private repository. | `staff.repo_unlock`           | An organization{% ifversion ghes %}, repository or site{% else %} or repository{% endif %} administrator unlocked (ended their temporary access to) a user's private repository.
{%- ifversion ghes %}
| `staff.search_audit_log` | A site administrator performed a search of the site admin audit log.
{%- endif %}
| `staff.set_domain_token_expiration` | {% ifversion ghes %}A site administrator or {% endif %}GitHub staff set the verification code expiry time for an organization or enterprise domain. {% ifversion ghec or ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" and "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}
{%- ifversion ghes %}
| `staff.unlock`                | A site administrator unlocked (temporarily gained full access to) all of a user's private repositories.
{%- endif %}
| `staff.unverify_domain` | |{% ifversion ghes %}A site administrator or {% endif %}GitHub staff unverified an organization or enterprise domain. {% ifversion ghec or ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" and "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}| | `staff.verify_domain` | {% ifversion ghes %}A site administrator or {% endif %}GitHub staff verified an organization or enterprise domain. {% ifversion ghec or ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" and "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}
{%- ifversion ghes %}
| `staff.view_audit_log` | A site administrator viewed the site admin audit log.
{%- endif %}

### ações de categoria de `equipe`

| Ação                      | Descrição                                                                                                                                                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `team.add_member`         | A member of an organization was added to a team. Para obter mais informações, consulte "[Adicionando integrantes da organização a uma equipe](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)."      |
| `team.add_repository`     | A team was given access and permissions to a repository.                                                                                                                                                                                 |
| `team.change_parent_team` | A child team was created or a child team's parent was changed. For more information, see "[Moving a team in your organization’s hierarchy](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)." |
| `team.change_privacy`     | A team's privacy level was changed. For more information, see "[Changing team visibility](/organizations/organizing-members-into-teams/changing-team-visibility)."                                                                       |
| `team.create`             | Um repositório ou conta de usuário foi adicionado a uma equipe.                                                                                                                                                                          |
| `team.delete`             | Um repositório ou conta de usuário foi removido de uma equipe.                                                                                                                                                                           |
| `team.destroy`            | Uma equipe foi excluída.                                                                                                                                                                                                                 |
{%- ifversion ghec or ghes or ghae %}
| `team.demote_maintainer` | A user was demoted from a team maintainer to a team member. | `team.promote_maintainer` | A user was promoted from a team member to a team maintainer. For more information, see "[Promoting an organization member to team maintainer](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer)."
{%- endif %}
| `team.remove_member` | A member of an organization was removed from a team. For more information, see "[Removing organization members from a team](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)." | `team.remove_repository` | A repository was no longer under a team's control. | `team.rename` | A team's name was changed. | `team.update_permission` | A team's access was changed. | `team.update_repository_permission` | A team's permission to a repository was changed.

### ações de categoria de `team_discussions`

| Ação                       | Descrição                                                                                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `team_discussions.clear`   | An organization owner cleared the setting to allow team discussions for an organization or enterprise.                                                                                                                                              |
| `team_discussions.disable` | An organization owner disabled team discussions for an organization. For more information, see "[Disabling team discussions for your organization](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)." |
| `team_discussions.enable`  | An organization owner enabled team discussions for an organization.                                                                                                                                                                                 |

{%- ifversion ghec %}
### `team_sync_tenant` category actions

| Ação                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `team_sync_tenant.disabled`                | Team synchronization with a tenant was disabled. For more information, see "[Managing team synchronization for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" and "[Managing team synchronization for organizations in your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)." |
| `team_sync_tenant.enabled`                 | Team synchronization with a tenant was enabled. For more information, see "[Managing team synchronization for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" and "[Managing team synchronization for organizations in your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)."  |
| `team_sync_tenant.update_okta_credentials` | The Okta credentials for team synchronization with a tenant were changed.                                                                                                                                                                                                                                                                                                                                                                                                        |
{%- endif %}

{%- ifversion fpt or ghes %}
### ações de categoria`two_factor_authentication`

| Ação                                                    | Descrição                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------- |
| `two_factor_authentication.disabled`                    | [Two-factor authentication][2fa] was disabled for a user account.          |
| `two_factor_authentication.enabled`                     | [Two-factor authentication][2fa] was enabled for a user account.           |
| `two_factor_authentication.password_reset_fallback_sms` | A one-time password code was sent to a user account fallback phone number. |
| `two_factor_authentication.recovery_codes_regenerated`  | Two factor recovery codes were regenerated for a user account.             |
| `two_factor_authentication.sign_in_fallback_sms`        | A one-time password code was sent to a user account fallback phone number. |
| `two_factor_authentication.update_fallback`             | The two-factor authentication fallback for a user account was changed.     |
{%- endif %}

{%- ifversion fpt or ghes or ghae %}
### ações de categoria `user`

| Ação                                | Descrição                                                                                                                                                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user.add_email`                    | Um endereço de e-mail foi adicionado a uma conta de usuário.                                                                                                                    |
| `user.async_delete`                 | An asynchronous job was started to destroy a user account, eventually triggering a `user.delete` event.                                                                         |
| `user.audit_log_export`             | Audit log entries were exported.                                                                                                                                                |
| `user.block_user`                   | A user was blocked by another user{% ifversion ghes %} or a site administrator{% endif %}.                                                                                      |
| `user.change_password`              | Um usuário alterou a própria senha.                                                                                                                                             |
| `user.create`                       | Uma nova conta de usuário foi criada.                                                                                                                                           |
| `user.creation_rate_limit_exceeded` | The rate of creation of user accounts, applications, issues, pull requests or other resources exceeded the configured rate limits, or too many users were followed too quickly. |
| `user.delete`                       | Uma conta de usuário foi destruída por um trabalho assíncrono.                                                                                                                  |
{%- ifversion ghes %}
| `user.demote`                     | A site administrator was demoted to an ordinary user account.
{%- endif %}
| `user.destroy`                    | A user deleted his or her account, triggering `user.async_delete`. | `user.failed_login`               | A user tries to sign in with an incorrect username, password, or two-factor authentication code. | `user.flag_as_large_scale_contributor` | A user account was flagged as a large scale contributor. Only contributions from public repositories the user owns will be shown in their contribution graph, in order to prevent timeouts. | `user.forgot_password`            | A user requested a password reset via the sign-in page. | `user.hide_private_contributions_count` | A user changed the visibility of their private contributions. The number of contributions to private repositories on the user's profile are now hidden. For more information, see "[Publicizing or hiding your private contributions on your profile](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)." | `user.lockout` | A user was locked out of their account. | `user.login`                      | A user signed in.
{%- ifversion ghes or ghae %}
| `user.mandatory_message_viewed`   | A user viewed a mandatory message. For more information see "[Customizing user messages for your enterprise](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)" for details."
{%- endif %}
| `user.minimize_comment` | A comment made by a user was minimized.
{%- ifversion ghes %}
| `user.promote`                    | An ordinary user account was promoted to a site administrator.
{%- endif %}
| `user.recreate` | A user's account was restored. | `user.remove_email`               | An email address was removed from a user account. | `user.remove_large_scale_contributor_flag` | A user account was no longer flagged as a large scale contributor. | `user.rename`                     | A username was changed. | `user.reset_password` | A user reset their account password. | `user.show_private_contributions_count` | A user changed the visibility of their private contributions. The number of contributions to private repositories on the user's profile are now shown. For more information, see "[Publicizing or hiding your private contributions on your profile](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)." | `user.sign_in_from_unrecognized_device` | A user signed in from an unrecognized device. | `user.sign_in_from_unrecognized_device_and_location` | A user signed in from an unrecognized device and location. | `user.sign_in_from_unrecognized_location` | A user signed in from an unrecognized location. | `user.suspend`                    | A user account was suspended by an enterprise owner {% ifversion ghes %} or site administrator{% endif %}. | `user.two_factor_challenge_failure` | A 2FA challenge issued for a user account failed. | `user.two_factor_challenge_success` | A 2FA challenge issued for a user account succeeded. | `user.two_factor_recover` | A user used their 2FA recovery codes. | `user.two_factor_recovery_codes_downloaded` | A user downloaded 2FA recovery codes for their account. | `user.two_factor_recovery_codes_printed` | A user printed 2FA recovery codes for their account. | `user.two_factor_recovery_codes_viewed` | A user viewed 2FA recovery codes for their account. | `user.two_factor_requested`       | A user was prompted for a two-factor authentication code. | `user.unblock_user` | A user was unblocked another user{% ifversion ghes %} or a site administrator{% endif %}. | `user.unminimize_comment` | A comment made by a user was unminimized. | `user.unsuspend` | A user account was unsuspended by an enterprise owner {% ifversion ghes %} or site administrator{% endif %}.
{%- endif %}

{%- ifversion ghec or ghes %}
### `user_license` category actions

| Ação                   | Descrição                                                    |
| ---------------------- | ------------------------------------------------------------ |
| `user_license.create`  | A seat license for a user in an enterprise was created.      |
| `user_license.destroy` | A seat license for a user in an enterprise was deleted.      |
| `user_license.update`  | A seat license type for a user in an enterprise was changed. |
{%- endif %}

{% ifversion fpt or ghec or ghes > 3.1 or ghae %}
### Ações da categoria `fluxos de trabalho`

{% data reusables.audit_log.audit-log-events-workflows %}
{%- endif %}

  [token de acesso do OAuth]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

  [OAuth]: /guides/basics-of-authentication/#registering-your-app

  [aplicativo OAuth]: /guides/basics-of-authentication/#registering-your-app

  [aplicativo do OAuth ]: /guides/basics-of-authentication/#registering-your-app

  [aplicativo OAuth application]: /guides/basics-of-authentication/#registering-your-app

  [aplicativo OAuth ]: /guides/basics-of-authentication/#registering-your-app

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [deploy key]: /developers/overview/managing-deploy-keys#deploy-keys

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication
