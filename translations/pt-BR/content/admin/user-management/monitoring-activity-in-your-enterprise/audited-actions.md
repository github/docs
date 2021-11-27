---
title: Ações auditadas
intro: Você pode pesquisar uma série de ações no log de auditoria.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Security
---

## Autenticação

| Ação                                 | Descrição                                                                                                                     |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `oauth_access.create`                | Um [token de acesso OAuth][] foi [gerado][generate token] para uma conta de usuário.                                          |
| `oauth_access.destroy`               | Um [token de acesso OAuth][] foi excluído de uma conta de usuário.                                                            |
| `oauth_application.destroy`          | Um [aplicativo OAuth][] foi excluído de uma organização ou conta de usuário.                                                  |
| `oauth_application.reset_secret`     | A chave secreta de um [aplicativo OAuth][] foi redefinida.                                                                    |
| `oauth_application.transfer`         | Um [aplicativo OAuth][] foi transferido de uma organização ou conta de usuário para outra.                                    |
| `public_key.create`                  | Uma chave SSH foi [adicionada][add key] a uma conta de usuário ou uma [chave de implantação][] foi adicionada ao repositório. |
| `public_key.delete`                  | Uma chave SSH foi removida de uma conta de usuário ou uma [chave de implantação][] foi removida de um repositório.            |
| `public_key.update`                  | A chave SSH de uma conta de usuário ou a [chave de implantação de um repositório][] foi atualizada.{% ifversion ghes %}
| `two_factor_authentication.enabled`  | A [autenticação de dois fatores][2fa] foi habilitada para uma conta de usuário.                                               |
| `two_factor_authentication.disabled` | [A autenticação de dois fatores][2fa] foi desabilitada para uma conta de usuário.{% endif %}

{% ifversion ghes %}
## {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

## Hooks

| Ação                  | Descrição                                           |
| --------------------- | --------------------------------------------------- |
| `hook.create`         | Um novo hook foi adicionado ao repositório.         |
| `hook.config_changed` | A configuração de um hook foi alterada.             |
| `hook.destroy`        | Um hook foi excluído.                               |
| `hook.events_changed` | Os eventos configurados de um hook foram alterados. |

## Configurações da empresa

| Ação                                                    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion ghes > 3.0 or ghae-next %}
| `business.advanced_security_policy_update`              | Um administrador do site cria, atualiza ou remove uma política para {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_advanced_security %} na sua empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".{% endif %}
| `business.clear_members_can_create_repos`               | Um administrador do site elimina uma restrição de criação de repositórios em organizações da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".{% ifversion ghes > 3.1 %}
| `business.referrer_override_enable`                     | Um administrador do site habilita a substituição da política de indicação. Para obter mais informações, consulte "[Configurando a política de indicação para sua empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)".                                                                                                                                                                             |
| `business.referrer_override_disable`                    | O administrador de um site desabilita a substituição de política de indicação. Para obter mais informações, consulte "[Configurando a política de indicação para sua empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)".{% endif %}
| `business.update_member_repository_creation_permission` | Um administrador do site restringe a criação de repositórios em organizações da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".{% ifversion ghes %}
| `enterprise.config.lock_anonymous_git_access`           | Um administrador do site bloqueia acessos de leitura anônimos do Git para impedir que os administradores do repositório alterem as configurações de acessos de leitura anônimos do Git existentes nos repositórios da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)". |
| `enterprise.config.unlock_anonymous_git_access`         | Um administrador do site desbloqueia acessos de leitura anônimos do Git para permitir que administradores alterem as configurações de acessos de leitura anônimos do Git existentes nos repositórios da empresa. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".{% endif %}

{% ifversion ghae %}

## Listas de permissão de IP

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

## Problemas

| Ação                   | Descrição                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `issue.update`         | O texto de um problema (comentário inicial) foi alterado.                                                                                                        |
| `issue_comment.update` | Um comentário em um problema (que não seja o inicial) foi alterado.                                                                                              |
| `issue.destroy`        | Um problema foi excluído do repositório. Para obter mais informações, consulte "[Excluir uma problema](/github/managing-your-work-on-github/deleting-an-issue)". |

## Organizações

| Ação               | Descrição                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `org.async_delete` | Um usuário iniciou um trabalho em segundo plano para excluir uma organização.                                                                                                                                                                    |
| `org.delete`       | Uma organização foi excluída por um trabalho de segundo plano iniciado pelo usuário.{% ifversion not ghae %}
| `org.transform`    | A conta de usuário foi convertida em organização. Para obter mais informações, consulte "[Converter um usuário em uma organização](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)."{% endif %}

## Pull requests

| Ação | Descrição | | :- | :- |{% ifversion ghes > 3.1 or ghae-next %} | `pull_request.create` | Um pull request foi criado. Para obter mais informações, consulte "[Criar uma pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)." | | `pull_request.close` | Um pull request foi fechado sem fazer merge. Para obter mais informações, consulte "[Fechar um pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)". | | `pull_request.reopen` | Um pull request foi reaberto após ter sido fechado anteriormente. | | `pull_request.merge` | Um pull request foi mesclado. Para obter mais informações, consulte "[Fazer merge de uma pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)". | | `pull_request.indirect_merge` | Um pull request foi considerado como merge, porque os commits do pull request foram mesclados no branch de destino. | | `pull_request.ready_for_review` | Um pull request foi mercado como pronto para revisão. Para obter mais informações, consulte "[Alterar o stage de um pull request](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)". | | `pull_request.converted_to_draft` | Um pull request foi convertido em rascunho. Para obter mais informações, consulte "[Alterar o stage de um pull request](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)". | | `pull_request.create_review_request` | Uma revisão foi solicitada em um pull request. Para obter mais informações, consulte "[Sobre merges do pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)". | | `pull_request.remove_review_request` | Uma solicitação de revisão foi removida de um pull request. Para obter mais informações, consulte "[Sobre merges do pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)". | | `pull_request_review.submit` | Uma revisão foi enviada para um pull request. Para obter mais informações, consulte "[Sobre merges do pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)". | | `pull_request_review.dismiss` | Uma revisão em um pull request foi ignorada. Para obter mais informações, consulte "[Ignorar uma revisão de pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)". | | `pull_request_review.delete` | Uma revisão em um pull request foi excluída. | | `pull_request_review_comment.create` | O comentário de uma revisão foi adicionado a um ull request. Para obter mais informações, consulte "[Sobre merges do pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)". | | `pull_request_review_comment.update` | O comentário de uma revisão em um pull request foi alterado. |{% endif %} | `pull_request_review_comment.delete` | O comentário de uma revisão em um pull request foi excluído. |

## Branches protegidos

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

## Repositórios

| Ação                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `repo.access`                              | A visibilidade de um repositório alterado para privado{% ifversion ghes %}, público,{% endif %} ou interno.                                                                                                                                                                                                                                                                                                                    |
| `repo.archived`                            | Um repositório foi arquivado. Para obter mais informações, consulte "[Arquivar um repositório de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".                                                                                                                                                                                            |
| `repo.add_member`                          | Um colaborador foi adicionado ao repositório.                                                                                                                                                                                                                                                                                                                                                                                  |
| `repo.config`                              | Um administrador do site bloqueou a opção de forçar pushes. Para obter mais informações, consulte [Bloquear pushes forçados em um repositório](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/).                                                                                                                                                                       |
| `repo.create`                              | Um repositório foi criado.                                                                                                                                                                                                                                                                                                                                                                                                     |
| `repo.destroy`                             | Um repositório foi excluído.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `repo.remove_member`                       | Um colaborador foi removido do repositório.                                                                                                                                                                                                                                                                                                                                                                                    |
| `repo.rename`                              | Um repositório foi renomeado.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `repo.transfer`                            | Um usuário aceitou uma solicitação para receber um repositório transferido.                                                                                                                                                                                                                                                                                                                                                    |
| `repo.transfer_start`                      | Um usuário enviou uma solicitação para transferir um repositório a outro usuário ou organização.                                                                                                                                                                                                                                                                                                                               |
| `repo.unarchived`                          | Um repositório teve o arquivamento cancelado. Para obter mais informações, consulte "[Arquivar um repositório de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".{% ifversion ghes %}
| `repo.config.disable_anonymous_git_access` | O acesso de leitura anônimo do Git está desabilitado em um repositório. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".                                                                                                                                          |
| `repo.config.enable_anonymous_git_access`  | O acesso de leitura anônimo do Git está abilitado em um repositório. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".                                                                                                                                             |
| `repo.config.lock_anonymous_git_access`    | O acesso de leitura anônimo de um repositório do Git está bloqueado, impedindo que os administradores de repositório alterem (habilitem ou desabilitem) essa configuração. Para obter mais informações, consulte "[Impedir os usuários de alterar o acesso de leitura anônimo do Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."                |
| `repo.config.unlock_anonymous_git_access`  | O acesso de leitura anônimo de um repositório do Git está desbloqueado, permitindo que os administradores de repositório alterem (habilitem ou desabilitem) essa configuração. Para obter mais informações, consulte "[Impedir os usuários de alterar o acesso de leitura anônimo do Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."{% endif %}

## Ferramentas de administração do site

| Ação                    | Descrição                                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `staff.disable_repo`    | Um administrador do site desabilitou o acesso a um repositório e a todas as suas bifurcações.                              |
| `staff.enable_repo`     | Um administrador do site reabilitou o acesso a um repositório e a todas as suas bifurcações.{% ifversion ghes > 3.2 %}
| `staff.exit_fake_login` | O administrador de um site ancerrou uma sessão de representação em {% data variables.product.product_name %}.              |
| `staff.fake_login`      | Um administrador do site efetu ou o login em {% data variables.product.product_name %} como outro usuário.{% endif %}
| `staff.repo_unlock`     | Um administrador do site desbloqueou (obteve acesso total temporariamente a) um dos repositórios privados de um usuário.   |
| `staff.unlock`          | Um administrador do site desbloqueou (obteve acesso total temporariamente a) todos os repositórios privados de um usuário. |

## Equipes

| Ação                      | Descrição                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| `team.create`             | Um repositório ou conta de usuário foi adicionado a uma equipe.                                        |
| `team.delete`             | Uma conta de usuário ou repositório foi removido de uma equipe.{% ifversion ghes or ghae %}
| `team.demote_maintainer`  | A categoria de um usuário foi rebaixada para de mantenedor da equipe para membro da equipe.{% endif %}
| `team.destroy`            | Uma equipe foi excluída.{% ifversion ghes or ghae %}
| `team.promote_maintainer` | Um usuário foi promovido de membro da equipe para mantenedor da equipe.{% endif %}

## Usuários

| Ação                            | Descrição                                                                                                                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `user.add_email`                | Um endereço de e-mail foi adicionado a uma conta de usuário.                                                                                                                                     |
| `user.async_delete`             | Um trabalho assíncrono foi iniciado para destruir uma conta de usuário, eventualmente acionando `user.delete`.{% ifversion ghes %}
| `user.change_password`          | Um usuário alterou sua senha.{% endif %}
| `user.create`                   | Uma nova conta de usuário foi criada.                                                                                                                                                            |
| `user.delete`                   | Uma conta de usuário foi destruída por um trabalho assíncrono.                                                                                                                                   |
| `user.demote`                   | Um administrador do site foi rebaixado a uma conta de usuário regular.                                                                                                                           |
| `user.destroy`                  | Um usuário excluiu a sua conta, acionando `user.async_delete`.{% ifversion ghes %}
| `user.failed_login`             | Um usuário tentou fazer login com nome de usuário, senha ou código de autenticação de dois fatores incorretos.                                                                                   |
| `user.forgot_password`          | Um usuário solicitou uma redefinição de senha através da página de login.{% endif %}
| `user.login`                    | Um usuário iniciou a sessão.{% ifversion ghes or ghae %}
| `user.mandatory_message_viewed` | Um usuário visualiza uma mensagem obrigatória (ver "[Personalizar mensagens de usuário](/admin/user-management/customizing-user-messages-for-your-enterprise)" para obter detalhes). {% endif %}
| `user.promote`                  | Uma conta de usuário regular foi promovida a administrador do site.                                                                                                                              |
| `user.remove_email`             | Um endereço de e-mail foi removido de uma conta de usuário.                                                                                                                                      |
| `user.rename`                   | Um nome de usuário foi alterado.                                                                                                                                                                 |
| `user.suspend`                  | Uma conta de usuário foi suspensa por um administrador do site.{% ifversion ghes %}
| `user.two_factor_requested`     | Um código de autenticação de dois fatores foi solicitado de um usuário.{% endif %}
| `user.unsuspend`                | Uma conta de usuário teve a suspensão cancelada por um administrador do site.                                                                                                                    |

{% ifversion ghes > 3.1 or ghae-issue-1157 %}
## Fluxos de trabalho

{% data reusables.actions.actions-audit-events-workflow %}
{% endif %}

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [chave de implantação]: /guides/managing-deploy-keys/#deploy-keys
  [chave de implantação de um repositório]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [token de acesso OAuth]: /developers/apps/authorizing-oauth-apps
  [aplicativo OAuth]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
  [2fa]: /articles/about-two-factor-authentication
