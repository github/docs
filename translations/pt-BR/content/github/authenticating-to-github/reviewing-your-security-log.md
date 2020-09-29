---
title: Revisar seus logs de segurança
intro: Você pode revisar o log de segurança da sua conta de usuário para entender melhor as ações que você realizou e ações realizadas por outras pessoas que envolvem você.
redirect_from:
  - /articles/reviewing-your-security-log
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acessar o log de segurança

O log de segurança lista todas as ações realizadas nos últimos 90 dias{% if currentVersion ver_lt "enterprise-server@2.20" %}, até 50{% endif %}.

{% data reusables.user_settings.access_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
2. Na barra lateral de configurações do usuário, clique em **log de segurança**. ![Aba do log de segurança](/assets/images/help/settings/audit-log-tab.png)
{% else %}
{% data reusables.user_settings.security %}
3. O log é exibido em "Security history" (Histórico de segurança). ![Log de segurança](/assets/images/help/settings/user_security_log.png)
4. Clique em uma entrada para ver mais informações sobre o evento. ![Log de segurança](/assets/images/help/settings/user_security_history_action.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Pesquisar no seu registro de segurança

{% data reusables.audit_log.audit-log-search %}

#### Pesquisar com base na ação
{% else %}
### Entender eventos no seu log de segurança

As ações listadas no seu log de segurança são agrupadas nas categorias a seguir: ^\\{% endif %}
| Nome da categoria                 | Descrição                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| `account_recovery_token`          | Contém todas as atividade relacionadas a [adicionar um token de recuperação](/articles/configuring-two-factor-authentication-recovery-methods).                                                                                                                                                                                                                                               |
| `cobrança`                        | Contém todas as atividades relacionadas às suas informações de cobrança.                                                                                                                                                                                                                                                                                                                      |
| `marketplace_agreement_signature` | Contém todas as atividades relacionadas à assinatura do Contrato de desenvolvedor do {% data variables.product.prodname_marketplace %}.                                                                                                                                                                                                                                                  |
| `marketplace_listing`             | Contém todas as atividades relacionadas aos aplicativos listados no {% data variables.product.prodname_marketplace %}.{% endif %}
| `oauth_access`                    | Contém todas as atividades relacionadas aos [{% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps) com os quais você se conectou.{% if currentVersion == "free-pro-team@latest" %}
| `payment_method`                  | Contém todas as atividades relacionadas ao pagamento da sua assinatura do {% data variables.product.prodname_dotcom %}.{% endif %}
| `profile_picture`                 | Contém todas as atividades relacionadas à imagem do seu perfil.                                                                                                                                                                                                                                                                                                                               |
| `project`                         | Contém todas as atividades relacionadas aos quadros de projeto.                                                                                                                                                                                                                                                                                                                               |
| `public_key`                      | Contém todas as atividades relacionadas às [chaves SSH públicas](/articles/adding-a-new-ssh-key-to-your-github-account).                                                                                                                                                                                                                                                                      |
| `repo`                            | Contém todas as atividades relacionadas aos repositórios que você possui.{% if currentVersion == "free-pro-team@latest" %}
| `sponsors`                        | Contém todos os eventos relacionados ao {% data variables.product.prodname_sponsors %} e botões de patrocinador (consulte "[Sobre {% data variables.product.prodname_sponsors %}](/articles/about-github-sponsors)" e "[Exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% if currentVersion != "free-pro-team@latest" %}
| `equipe`                          | Contém todas as atividades relacionadas a equipes das quais você faz parte.{% endif %}
| `two_factor_authentication`       | Contém todas as atividades relacionadas à [autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa).                                                                                                                                                                                                                                                 |
| `usuário`                         | Contém todas as atividades relacionadas à sua conta.                                                                                                                                                                                                                                                                                                                                          |

Uma descrição dos eventos nessas categoria é exibida abaixo.

{% if currentVersion == "free-pro-team@latest" %}

#### Categoria `account_recovery_token`

| Ação          | Descrição                                                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| confirm       | Acionada quando você [armazena um novo token com um provedor de recuperação](/articles/configuring-two-factor-authentication-recovery-methods). |
| recover       | Acionada quando você [resgata um token de recuperação de conta](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).            |
| recover_error | Acionada quando um token é usado, mas o {% data variables.product.prodname_dotcom %} não consegue validá-lo.                               |

#### Categoria `billing`

| Ação                  | Descrição                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| change_billing_type | Acionada quando você [altera o modo de pagamento](/articles/adding-or-editing-a-payment-method) do {% data variables.product.prodname_dotcom %}. |
| change_email          | Acionada quando você [altera o endereço de e-mail](/articles/changing-your-primary-email-address).                                                    |

#### Categoria `marketplace_agreement_signature`

| Ação   | Descrição                                                                                                          |
| ------ | ------------------------------------------------------------------------------------------------------------------ |
| create | Acionada quando você assina o Contrato de desenvolvedor do {% data variables.product.prodname_marketplace %}. |

#### Categoria `marketplace_listing`

| Ação    | Descrição                                                                                                         |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| aprovar | Acionada quando sua lista é aprovada para inclusão no {% data variables.product.prodname_marketplace %}.     |
| create  | Acionada quando você cria uma lista para seu app no {% data variables.product.prodname_marketplace %}.       |
| delist  | Acionada quando sua lista é removida do {% data variables.product.prodname_marketplace %}.                   |
| redraft | Triggered when your listing is sent back to draft state.                                                          |
| reject  | Acionada quando sua lista não é aprovada para inclusão no {% data variables.product.prodname_marketplace %}. |

{% endif %}

#### Categoria `oauth_access`

| Ação    | Descrição                                                                                                                                                         |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| create  | Acionada quando você [concede acesso a um {% data variables.product.prodname_oauth_app %}](/articles/authorizing-oauth-apps).                              |
| destroy | Acionada quando você [revoga o acesso de um {% data variables.product.prodname_oauth_app %}a sua conta](/articles/reviewing-your-authorized-integrations). |

{% if currentVersion == "free-pro-team@latest" %}

#### Categoria `payment_method`

| Ação   | Descrição                                                                                                  |
| ------ | ---------------------------------------------------------------------------------------------------------- |
| clear  | Acionada quando [um método de pagamento](/articles/removing-a-payment-method) registrado é removido.       |
| create | Acionada quando um novo método de pagamento, como um novo cartão de crédito ou conta PayPal, é adicionado. |
| update | Acionada quando um método de pagamento é atualizado.                                                       |

{% endif %}

#### Categoria `profile_picture`

| Ação   | Descrição                                                                                                 |
| ------ | --------------------------------------------------------------------------------------------------------- |
| update | Acionada quando você [configura ou atualiza sua foto do perfil](/articles/setting-your-profile-picture/). |

#### Categoria `project`

| Ação                     | Descrição                                                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `create`                 | Acionada quando um quadro de projeto é criado.                                                                                  |
| `rename`                 | Acionada quando um quadro de projeto é renomeado.                                                                               |
| `update`                 | Acionada quando um quadro de projeto é atualizado.                                                                              |
| `delete`                 | Acionada quando um quadro de projeto é excluído.                                                                                |
| `link`                   | Acionada quando um repositório é vinculado a um quadro de projeto.                                                              |
| `unlink`                 | Acionada quando um repositório é desvinculado de um quadro de projeto.                                                          |
| `project.access`         | Acionada quando a visibilidade de um quadro de projeto é alterada.                                                              |
| `update_user_permission` | Acionada quando um colaborador externo é adicionado ou removido de um quadro de projeto ou tem seu nível de permissão alterado. |

#### Categoria `public_key`

| Ação   | Descrição                                                                                                                                                                        |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| create | Acionada quando você [adiciona uma nova chave SSH pública a sua conta do {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account). |
| delete | Acionada quando você [remove uma chave SSH pública da sua conta do {% data variables.product.product_name %}](/articles/reviewing-your-ssh-keys).                           |

#### Categoria `repo`

| Ação                                  | Descrição                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| access                                | Acionada quando um repositório seu é [alterado de "privado" para "público"](/articles/making-a-private-repository-public) (ou vice-versa).                                                                                                                                                                                                             |
| add_member                            | Acionada quando um usuário do {% data variables.product.product_name %} {% if currentVersion == "free-pro-team@latest" %}[é convidado para ter acesso de colaboração](/articles/inviting-collaborators-to-a-personal-repository){% else %}[recebe acesso de colaboração](/articles/inviting-collaborators-to-a-personal-repository){% endif %} em um repositório. |
| add_topic                             | Acionada quando um proprietário do repositório [adiciona um tópico](/articles/classifying-your-repository-with-topics) a um repositório.                                                                                                                                                                                                               |
| archived                              | Acionada quando um proprietário do repositório [arquiva um repositório](/articles/about-archiving-repositories).{% if currentVersion != "free-pro-team@latest" %}
| config.disable_anonymous_git_access | Acionada quando um [acesso de leitura anônimo do Git é desabilitado](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) em um repositório público.                                                                                                                                                      |
| config.enable_anonymous_git_access  | Acionada quando um [acesso de leitura anônimo do Git é habilitado](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) em um repositório público.                                                                                                                                                        |
| config.lock_anonymous_git_access    | Acionada quando a [configuração de acesso de leitura anônimo do Git de um repositório é bloqueada](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).                                                                                                                              |
| config.unlock_anonymous_git_access  | Acionada quando a [configuração de acesso de leitura anônimo do Git de um repositório é desbloqueada](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| create                                | Acionada quando [um repositório é criado](/articles/creating-a-new-repository).                                                                                                                                                                                                                                                                        |
| destroy                               | Acionada quando [um repositório é excluído](/articles/deleting-a-repository).{% if currentVersion == "free-pro-team@latest" %}
| desabilitar                           | Acionada quando um repositório é desabilitado (por exemplo, por [recursos financeiros insuficientes](/articles/unlocking-a-locked-account)).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| habilitar                             | Acionada quando um repositório é habilitado novamente.{% endif %}
| remove_member                         | Acionada quando um usuário do {% data variables.product.product_name %} é [removido de um repositório como um colaborador](/articles/removing-a-collaborator-from-a-personal-repository).                                                                                                                                                         |
| remove_topic                          | Acionada quando um proprietário do repositório remove um tópico de um repositório.                                                                                                                                                                                                                                                                     |
| rename                                | Acionada quando [um repositório é renomeado](/articles/renaming-a-repository).                                                                                                                                                                                                                                                                         |
| transferir                            | Acionada quando [um repositório é transferido](/articles/how-to-transfer-a-repository).                                                                                                                                                                                                                                                                |
| transfer_start                        | Acionada quando uma transferência de repositório está prestes a ocorrer.                                                                                                                                                                                                                                                                               |
| unarchived                            | Acionada quando um proprietário do repositório desarquiva um repositório.                                                                                                                                                                                                                                                                              |

{% if currentVersion == "free-pro-team@latest" %}
#### Categoria `sponsors`

| Ação                                            | Descrição                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| repo_funding_link_button_toggle             | Acionada quando você habilita ou desabilita um botão de patrocinador no repositório (consulte "[Exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)")                                                                                                                                            |
| repo_funding_links_file_action              | Acionada quando você altera o arquivo FUNDING no repositório (consulte "[Exibir botão de patrocinador no repositório](/articles/displaying-a-sponsor-button-in-your-repository)")                                                                                                                                                                          |
| sponsor_sponsorship_cancel                    | Acionada quando você cancela um patrocínio (consulte "[Fazer downgrade de um patrocínio](/articles/downgrading-a-sponsorship)")                                                                                                                                                                                                                            |
| sponsor_sponsorship_create                    | Acionadas quando você patrocina um desenvolvedor (consulte "[Patrocinar um colaborador de código aberto](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor#sponsoring-a-developer)")                                                                                                                 |
| sponsor_sponsorship_preference_change         | Acionada quando você altera o recebimento de atualizações de e-mail de um desenvolvedor patrocinado (consulte "[Gerenciar o patrocínio](/articles/managing-your-sponsorship)")                                                                                                                                                                             |
| sponsor_sponsorship_tier_change               | Acionada quando você faz upgrade ou downgrade do patrocínio (consulte "[Atualizar um patrocínio](/articles/upgrading-a-sponsorship)" e "[Fazer downgrade de um patrocínio](/articles/downgrading-a-sponsorship)")                                                                                                                                          |
| sponsored_developer_approve                   | Acionada quando sua conta do {% data variables.product.prodname_sponsors %} é aprovada (ver "[Configuração de {% data variables.product.prodname_sponsors %} para sua conta de usuário](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                                    |
| sponsored_developer_create                    | Acionada quando sua conta de {% data variables.product.prodname_sponsors %} é criada (consulte "[Configurar {% data variables.product.prodname_sponsors %} para sua conta de usuário](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                                      |
| sponsored_developer_profile_update            | Acionada quando você edita seu perfil de desenvolvedor patrocinado (consulte "[Editar informações de perfil para {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/editing-your-profile-details-for-github-sponsors)")                                                                |
| sponsored_developer_request_approval          | Acionada quando você enviar seu aplicativo para {% data variables.product.prodname_sponsors %} para aprovação (consulte "[Configurar {% data variables.product.prodname_sponsors %} para sua conta de usuário](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")             |
| sponsored_developer_tier_description_update | Acionada quando você altera a descrição de um nível de patrocínio (consulte "[Alterar níveis de patrocínio](/articles/changing-your-sponsorship-tiers)")                                                                                                                                                                                                   |
| sponsored_developer_update_newsletter_send  | Acionada quando você envia uma atualização por e-mail aos patrocinadores (consulte "[Entrar em contato com os patrocinadores](/articles/contacting-your-sponsors)")                                                                                                                                                                                        |
| waitlist_invite_sponsored_developer           | Acionada quando você é convidado a juntar-se a {% data variables.product.prodname_sponsors %} a partir da lista de espera (consulte "[Configurar {% data variables.product.prodname_sponsors %} para sua conta de usuário](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)") |
| waitlist_join                                   | Acionada quando você se junta à lista de espera para tornar-se um desenvolvedor patrocinado (consulte "[Configurar {% data variables.product.prodname_sponsors %} para sua conta de usuário](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                                    |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### A categoria `successor_invitation`

| Ação     | Descrição                                                                                                                                                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aceitar  | Acionada quando você aceita um convite de sucessão (consulte "[Manter a continuidade da propriedade dos repositórios da conta do seu usuário](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
| cancelar | Acionado quando você cancela um convite de sucessão (consulte"[Manter a continuidade da propriedade dos repositórios da conta do seu usuário](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
| create   | Acionado quando você cria um convite de sucessão (consulte "[Manter a continuidade da propriedade dos repositórios da conta do usuário](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")       |
| recusar  | Acionado quando você recusa um convite de sucessão (consulte "[Manter a continuidade da propriedade dos repositórios da conta do usuário](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")     |
| revogar  | Acionado quando você revoga um convite de sucessão (consulte "[Manter a continuidade da propriedade dos repositórios da sua conta de usuário](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
{% endif %}

{% if currentVersion != "free-pro-team@latest" %}

#### Categoria `team`

| Ação              | Descrição                                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| add_member        | Acionada quando um integrante de uma organização à qual você pertence [adiciona você em uma equipe](/articles/adding-organization-members-to-a-team).    |
| add_repository    | Acionada quando uma equipe da qual você faz parte recebe o controle de um repositório.                                                                   |
| create            | Acionada quando uma equipe é criada em uma organização à qual você pertence.                                                                             |
| destroy           | Acionada quando uma equipe da qual você faz parte é excluída da organização.                                                                             |
| remove_member     | Acionada quando um integrante de uma organização é [removido de uma equipe](/articles/removing-organization-members-from-a-team) da qual você faz parte. |
| remove_repository | Acionada quando um repositório deixa de ser controlado por uma equipe.                                                                                   |

{% endif %}

#### Categoria `two_factor_authentication`

| Ação     | Descrição                                                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| enabled  | Acionada quando a [autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) é habilitada. |
| disabled | Acionada quando a autenticação de dois fatores é desabilitada.                                                                     |

#### Categoria `user`

| Ação                               | Descrição                                                                                                                                                                           |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| add_email                          | Acionada quando você [adiciona um novo endereço de e-mail](/articles/changing-your-primary-email-address).                                                                          |
| create                             | Acionada quando você cria uma conta de usuário.                                                                                                                                     |
| remove_email                       | Acionada quando você remove um endereço de e-mail.                                                                                                                                  |
| rename                             | Acionada quando você renomeia sua conta.                                                                                                                                            |
| change_password                    | Acionada quando você altera a senha.                                                                                                                                                |
| forgot_password                    | Acionada quando você solicita [a redefinição da senha](/articles/how-can-i-reset-my-password).                                                                                      |
| login                              | Acionada quando você faz login no {% data variables.product.product_location %}.                                                                                               |
| failed_login                       | Acionada quando você não consegue fazer login.                                                                                                                                      |
| two_factor_requested             | Acionada quando o {% data variables.product.product_name %} solicita o [código da autenticação de dois fatores](/articles/accessing-github-using-two-factor-authentication).   |
| show_private_contributions_count | Acionada quando você [exibe contribuições privadas no seu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).                                      |
| hide_private_contributions_count | Acionada quando você [oculta as contribuições privadas no seu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% if currentVersion == "free-pro-team@latest" %}
| report_content                     | Acionada quando você [denuncia um problema ou uma pull request, ou um comentário em um problema, uma pull request, ou commit](/articles/reporting-abuse-or-spam).{% endif %}

#### Categoria `user_status`

| Ação    | Descrição                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| update  | Acionada quando você configura ou altera o status no perfil. Para obter mais informações, consulte "[Configurar um status](/articles/personalizing-your-profile/#setting-a-status)". |
| destroy | Acionada quando você remove o status no perfil.                                                                                                                                      |

{% if currentVersion == "free-pro-team@latest" %}

### Exportar o seu log de segurança

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}
