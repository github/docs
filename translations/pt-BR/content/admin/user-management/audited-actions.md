---
title: Ações auditadas
intro: Você pode pesquisar uma série de ações no log de auditoria.
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
versions:
  enterprise-server: '*'
  github-ae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Security
---

#### Autenticação

| Ação                                 | Descrição                                                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `oauth_access.create`                | Um [token de acesso OAuth][] foi [gerado][generate token] para uma conta de usuário.                                                                         |
| `oauth_access.destroy`               | Um [token de acesso OAuth][] foi excluído de uma conta de usuário.                                                                                           |
| `oauth_application.destroy`          | Um [aplicativo OAuth][] foi excluído de uma organização ou conta de usuário.                                                                                 |
| `oauth_application.reset_secret`     | A chave secreta de um [aplicativo OAuth][] foi redefinida.                                                                                                   |
| `oauth_application.transfer`         | Um [aplicativo OAuth][] foi transferido de uma organização ou conta de usuário para outra.                                                                   |
| `public_key.create`                  | Uma chave SSH foi [adicionada][add key] a uma conta de usuário ou uma [chave de implantação][] foi adicionada ao repositório.                                |
| `public_key.delete`                  | Uma chave SSH foi removida de uma conta de usuário ou uma [chave de implantação][] foi removida de um repositório.                                           |
| `public_key.update`                  | A chave SSH de uma conta de usuário ou a [chave de implantação de um repositório][] foi atualizada.{% if enterpriseServerVersions contains currentVersion %}
| `two_factor_authentication.enabled`  | A [autenticação de dois fatores][2fa] foi habilitada para uma conta de usuário.                                                                              |
| `two_factor_authentication.disabled` | [A autenticação de dois fatores][2fa] foi desabilitada para uma conta de usuário.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
#### {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

#### Hooks

| Ação                  | Descrição                                           |
| --------------------- | --------------------------------------------------- |
| `hook.create`         | Um novo hook foi adicionado ao repositório.         |
| `hook.config_changed` | A configuração de um hook foi alterada.             |
| `hook.destroy`        | Um hook foi excluído.                               |
| `hook.events_changed` | Os eventos configurados de um hook foram alterados. |

#### Configurações da empresa

| Ação                                                    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `business.advanced_security_policy_update`              | Um administrador do site cria, atualiza ou remove uma política para {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_advanced_security %} na sua empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".{% endif %}
| `business.clear_members_can_create_repos`               | Um administrador do site elimina uma restrição de criação de repositórios em organizações da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".                                                                                                                       |
| `business.update_member_repository_creation_permission` | Um administrador do site restringe a criação de repositórios em organizações da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".{% if enterpriseServerVersions contains currentVersion %}
| `enterprise.config.lock_anonymous_git_access`           | Um administrador do site bloqueia acessos de leitura anônimos do Git para impedir que os administradores do repositório alterem as configurações de acessos de leitura anônimos do Git existentes nos repositórios da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)". |
| `enterprise.config.unlock_anonymous_git_access`         | Um administrador do site desbloqueia acessos de leitura anônimos do Git para permitir que administradores alterem as configurações de acessos de leitura anônimos do Git existentes nos repositórios da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".{% endif %}

{% if currentVersion == "github-ae@latest" %}

#### Listas de permissão de IP

|                                       Nome | Descrição                                                                                                              |
| ------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------- |
|               `ip_allow_list_entry.create` | Um endereço IP foi adicionado a uma lista de permissão do IP.                                                          |
|               `ip_allow_list_entry.update` | Um endereço IP ou sua descrição foi alterada.                                                                          |
|              `ip_allow_list_entry.destroy` | Um endereço IP foi excluído de uma lista de permissões de IP.                                                          |
|                     `ip_allow_list.enable` | Uma lista de permissões de IP foi habilitada.                                                                          |
|  `ip_allow_list.enable_for_installed_apps` | Uma lista de permissões de IP foi habilitada para a instalação de {% data variables.product.prodname_github_apps %}. |
|                    `ip_allow_list.disable` | Uma lista de permissões do IP foi desabilitada.                                                                        |
| `ip_allow_list.disable_for_installed_apps` | Uma lista de permissões de IP foi desabilitada para o {% data variables.product.prodname_github_apps %} instalado.   |

{% endif %}

#### Problemas e pull requests

| Ação                                 | Descrição                                                                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `issue.update`                       | O texto de um problema (comentário inicial) foi alterado.                                                                                                        |
| `issue_comment.update`               | Um comentário em um problema (que não seja o inicial) foi alterado.                                                                                              |
| `pull_request_review_comment.delete` | Foi excluído um comentário em um pull request.                                                                                                                   |
| `issue.destroy`                      | Um problema foi excluído do repositório. Para obter mais informações, consulte "[Excluir uma problema](/github/managing-your-work-on-github/deleting-an-issue)". |

#### Organizações

| Ação               | Descrição                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `org.async_delete` | Um usuário iniciou um trabalho em segundo plano para excluir uma organização.                                                                                                                                                                    |
| `org.delete`       | Uma organização foi excluída por um trabalho de segundo plano iniciado pelo usuário.{% if currentVersion != "github-ae@latest" %}
| `org.transform`    | A conta de usuário foi convertida em organização. Para obter mais informações, consulte "[Converter um usuário em uma organização](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)."{% endif %}

#### Branches protegidos

| Ação                                                               | Descrição                                                                               |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `protected_branch.create`                                          | A proteção do branch está habilitada em um branch.                                      |
| `protected_branch.destroy`                                         | A proteção do branch está desabilitada em um branch.                                    |
| `protected_branch.update_admin_enforced`                           | A proteção do branch é exigida para os administradores do repositório.                  |
| `protected_branch.update_require_code_owner_review`                | A execução da revisão necessária do código do proprietário foi atualizada em um branch. |
| `protected_branch.dismiss_stale_reviews`                           | A exigência de ignorar pull requests obsoletas é atualizada em um branch.               |
| `protected_branch.update_signature_requirement_enforcement_level`  | A exigência de assinatura de commit obrigatória é atualizada em um branch.              |
| `protected_branch.update_pull_request_reviews_enforcement_level`   | A exigência de revisões obrigatórias de pull request é atualizada em um branch.         |
| `protected_branch.update_required_status_checks_enforcement_level` | A exigência de verificações de status obrigatórias é atualizada em um branch.           |
| `protected_branch.rejected_ref_update`                             | Uma tentativa de atualização do branch é rejeitada.                                     |
| `protected_branch.policy_override`                                 | Um requisito de proteção do branch é sobrescrito por um administrador do repositório.   |

#### Repositórios

| Ação                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `repo.access`                              | A visibilidade de um repositório alterado para privado{% if enterpriseServerVersions contains currentVersion %}, público,{% endif %} ou interno.                                                                                                                                                                                                                                                                               |
| `repo.archived`                            | Um repositório foi arquivado. Para obter mais informações, consulte "[Arquivar um repositório de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".                                                                                                                                                                                            |
| `repo.add_member`                          | Um colaborador foi adicionado ao repositório.                                                                                                                                                                                                                                                                                                                                                                                  |
| `repo.config`                              | Um administrador do site bloqueou a opção de forçar pushes. Para obter mais informações, consulte [Bloquear pushes forçados em um repositório](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/).                                                                                                                                                                       |
| `repo.create`                              | Um repositório foi criado.                                                                                                                                                                                                                                                                                                                                                                                                     |
| `repo.destroy`                             | Um repositório foi excluído.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `repo.remove_member`                       | Um colaborador foi removido do repositório.                                                                                                                                                                                                                                                                                                                                                                                    |
| `repo.rename`                              | Um repositório foi renomeado.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `repo.transfer`                            | Um usuário aceitou uma solicitação para receber um repositório transferido.                                                                                                                                                                                                                                                                                                                                                    |
| `repo.transfer_start`                      | Um usuário enviou uma solicitação para transferir um repositório a outro usuário ou organização.                                                                                                                                                                                                                                                                                                                               |
| `repo.unarchived`                          | Um repositório teve o arquivamento cancelado. Para obter mais informações, consulte "[Arquivar um repositório de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".{% if enterpriseServerVersions contains currentVersion %}
| `repo.config.disable_anonymous_git_access` | O acesso de leitura anônimo do Git está desabilitado em um repositório. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".                                                                                                                                          |
| `repo.config.enable_anonymous_git_access`  | O acesso de leitura anônimo do Git está abilitado em um repositório. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".                                                                                                                                             |
| `repo.config.lock_anonymous_git_access`    | O acesso de leitura anônimo de um repositório do Git está bloqueado, impedindo que os administradores de repositório alterem (habilitem ou desabilitem) essa configuração. Para obter mais informações, consulte "[Impedir os usuários de alterar o acesso de leitura anônimo do Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."                |
| `repo.config.unlock_anonymous_git_access`  | O acesso de leitura anônimo de um repositório do Git está desbloqueado, permitindo que os administradores de repositório alterem (habilitem ou desabilitem) essa configuração. Para obter mais informações, consulte "[Impedir os usuários de alterar o acesso de leitura anônimo do Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."{% endif %}

#### Ferramentas de administração do site

| Ação                 | Descrição                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `staff.disable_repo` | Um administrador do site desabilitou o acesso a um repositório e a todas as suas bifurcações.                              |
| `staff.enable_repo`  | Um administrador do site habilitou novamente o acesso a um repositório e a todas as suas bifurcações.                      |
| `staff.fake_login`   | Um administrador do site fez login no {% data variables.product.product_name %} como outro usuário.                        |
| `staff.repo_unlock`  | Um administrador do site desbloqueou (obteve acesso total temporariamente a) um dos repositórios privados de um usuário.   |
| `staff.unlock`       | Um administrador do site desbloqueou (obteve acesso total temporariamente a) todos os repositórios privados de um usuário. |

#### Equipes

| Ação                      | Descrição                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `team.create`             | Um repositório ou conta de usuário foi adicionado a uma equipe.                                                                                     |
| `team.delete`             | Uma conta ou repositório foi removido de uma equipe.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `team.demote_maintainer`  | A categoria de um usuário foi rebaixada para de mantenedor da equipe para membro da equipe.{% endif %}
| `team.destroy`            | Uma equipe foi excluída.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `team.promote_maintainer` | Um usuário foi promovido de membro da equipe para mantenedor da equipe.{% endif %}


#### Usuários

| Ação                            | Descrição                                                                                                                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `user.add_email`                | Um endereço de e-mail foi adicionado a uma conta de usuário.                                                                                                                                     |
| `user.async_delete`             | Um trabalho assíncrono foi iniciado para destruir uma conta de usuário, eventualmente acionando `user.delete`.{% if enterpriseServerVersions contains currentVersion %}
| `user.change_password`          | Um usuário alterou sua senha.{% endif %}
| `user.create`                   | Uma nova conta de usuário foi criada.                                                                                                                                                            |
| `user.delete`                   | Uma conta de usuário foi destruída por um trabalho assíncrono.                                                                                                                                   |
| `user.demote`                   | Um administrador do site foi rebaixado a uma conta de usuário regular.                                                                                                                           |
| `user.destroy`                  | Um usuário excluiu a sua conta, acionando `user.async_delete`.{% if enterpriseServerVersions contains currentVersion %}
| `user.failed_login`             | Um usuário tentou fazer login com nome de usuário, senha ou código de autenticação de dois fatores incorretos.                                                                                   |
| `user.forgot_password`          | Um usuário solicitou uma redefinição de senha através da página de login.{% endif %}
| `user.login`                    | Um usuário iniciou a sessão.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `user.mandatory_message_viewed` | Um usuário visualiza uma mensagem obrigatória (ver "[Personalizar mensagens de usuário](/admin/user-management/customizing-user-messages-for-your-enterprise)" para obter detalhes). {% endif %}
| `user.promote`                  | Uma conta de usuário regular foi promovida a administrador do site.                                                                                                                              |
| `user.remove_email`             | Um endereço de e-mail foi removido de uma conta de usuário.                                                                                                                                      |
| `user.rename`                   | Um nome de usuário foi alterado.                                                                                                                                                                 |
| `user.suspend`                  | Uma conta de usuário foi suspensa por um administrador do site.{% if enterpriseServerVersions contains currentVersion %}
| `user.two_factor_requested`     | Um código de autenticação de dois fatores foi solicitado de um usuário.{% endif %}
| `user.unsuspend`                | Uma conta de usuário teve a suspensão cancelada por um administrador do site.                                                                                                                    |

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [chave de implantação]: /guides/managing-deploy-keys/#deploy-keys
  [chave de implantação de um repositório]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [token de acesso OAuth]: /developers/apps/authorizing-oauth-apps
  [aplicativo OAuth]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
  [2fa]: /articles/about-two-factor-authentication
