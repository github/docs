---
title: Revisar seus logs de segurança
intro: Você pode revisar o log de segurança de sua conta pessoal para entender melhor as ações executadas e as ações que envolvem você executadas por outras pessoas.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-your-security-log
  - /github/authenticating-to-github/reviewing-your-security-log
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Security log
ms.openlocfilehash: af0c238e3bda40874ed09d6afb402cc6934e7c4b
ms.sourcegitcommit: 5b0becac9098ab45c2204882d719f5cf17bfff18
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120844'
---
## Acessar o log de segurança

O log de segurança lista todas as ações realizadas nos últimos 90 dias.

{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. Na seção "Arquivos" da barra lateral, clique em **{% octicon "log" aria-label="The log icon" %} Log de segurança**.
{% else %}
1. Na barra lateral das configurações de usuário, clique em **Log de segurança**.
  ![Guia Log de segurança](/assets/images/help/settings/audit-log-tab.png) {% endif %}

## Pesquisar no seu registro de segurança

{% data reusables.audit_log.audit-log-search %}

### Pesquisar com base na ação

Os eventos listados no seu registro de segurança são acionados por suas ações. As ações são agrupadas nas seguintes categorias:

| Nome da categoria | Descrição |------------------|-------------------{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Contém todas as atividades relacionadas às suas informações de cobrança.
| [`codespaces`](#codespaces-category-actions) | Contém todas as atividades relacionadas ao {% data variables.product.prodname_github_codespaces %}. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces)".
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contém todas as atividades relacionadas à assinatura do Contrato de Desenvolvedor do {% data variables.product.prodname_marketplace %}.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Contém todas as atividades relacionadas aos aplicativos de listagem no {% data variables.product.prodname_marketplace %}.{% endif %} | [`oauth_access`](#oauth_access-category-actions) | Contém todas as atividades relacionadas aos [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) aos quais você está conectado.{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Contém todas as atividades relacionadas ao pagamento da assinatura do {% data variables.product.prodname_dotcom %}.{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Contém todas as atividades relacionadas a {% data variables.product.pat_v2 %}s. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".{% endif %} | [`profile_picture`](#profile_picture-category-actions) | Contém todas as atividades relacionadas à sua imagem de perfil.
| [`project`](#project-category-actions) | Contém todas as atividades relacionadas aos quadros de projetos.
| [`public_key`](#public_key-category-actions) | Contém todas as atividades relacionadas às [suas chave SSH públicas](/articles/adding-a-new-ssh-key-to-your-github-account).
| [`repo`](#repo-category-actions) | Contém todas as atividades relacionadas aos repositórios dos quais você é o proprietário.{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Contém todos os eventos relacionados ao {% data variables.product.prodname_sponsors %} e os botões de patrocinador (confira "[Sobre o {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)" e "[Como exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% ifversion ghes or ghae %} | [`team`](#team-category-actions) | Contém todas as atividades relacionadas às equipes das quais você faz parte.{% endif %}{% ifversion not ghae %} | [`two_factor_authentication`](#two_factor_authentication-category-actions) | Contém todas as atividades relacionadas à [autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa).{% endif %} | [`user`](#user-category-actions) | Contém todas as atividades relacionadas à sua conta.

{% ifversion fpt or ghec %}

## Exportar o seu log de segurança

{% data reusables.audit_log.export-log %} {% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## Ações do log de segurança

Uma visão geral de algumas das ações mais comuns que são registradas como eventos no log de segurança.

{% ifversion fpt or ghec %}

### Ações da categoria `billing`

| Ação | Descrição
|------------------|-------------------
| `change_billing_type` | Disparada quando você [altera a forma de pagamento](/articles/adding-or-editing-a-payment-method) do {% data variables.product.prodname_dotcom %}.
| `change_email` | Disparada quando você [altera seu endereço de email](/articles/changing-your-primary-email-address).

### Ações da categoria `codespaces`

| Ação | Descrição
|------------------|-------------------
| `create` | Disparada quando você [cria um codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Acionada ao retomar um codespace suspenso.
| `delete` | Disparada quando você [exclui um codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `manage_access_and_security` | Disparada quando você atualiza [os repositórios aos quais um codespace tem acesso](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
| `trusted_repositories_access_update` | Disparada quando você altera a [configuração de acesso e de segurança da sua conta pessoal do {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).

### Ações da categoria `marketplace_agreement_signature`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando você assina o Contrato de desenvolvedor do {% data variables.product.prodname_marketplace %}.

### Ações da categoria `marketplace_listing`

| Ação | Descrição
|------------------|-------------------
| `approve` | Acionada quando sua lista é aprovada para inclusão no {% data variables.product.prodname_marketplace %}.
| `create` | Acionada quando você cria uma lista para seu app no {% data variables.product.prodname_marketplace %}.
| `delist` | Acionada quando sua lista é removida do {% data variables.product.prodname_marketplace %}.
| `redraft` | Triggered when your listing is sent back to draft state.
| `reject` | Acionada quando sua lista não é aprovada para inclusão no {% data variables.product.prodname_marketplace %}.

{% endif %}

### Ações da categoria `oauth_authorization`

| Ação | Descrição
|------------------|-------------------
| `create` | Disparada quando você [permite acesso a um {% data variables.product.prodname_oauth_app %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps).
| `destroy` | Disparada quando você [revoga o acesso de um {% data variables.product.prodname_oauth_app %} à sua conta](/articles/reviewing-your-authorized-integrations) e quando [as autorizações são revogadas ou vencem](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

{% ifversion fpt or ghec %}

### Ações da categoria `payment_method`

| Ação | Descrição
|------------------|-------------------
| `create` | Acionada quando um novo método de pagamento, como um novo cartão de crédito ou conta PayPal, é adicionado.
| `update` | Acionada quando um método de pagamento é atualizado.

{% endif %}

{% ifversion pat-v2 %}

### Ações da categoria `personal_access_token`

| Ação | Descrição
|------------------|-------------------
| `access_granted` | Disparada quando um {% data variables.product.pat_v2 %} que você criou recebe acesso aos recursos.
| `access_revoked` | Disparada quando um {% data variables.product.pat_v2 %} que você criou é revogado. O token ainda pode ler recursos públicos da organização.
| `create` | Disparada quando você cria um {% data variables.product.pat_v2 %}.
| `credential_regenerated` | Disparada quando você regenera um {% data variables.product.pat_v2 %}.
| `destroy` | Disparada quando você exclui um {% data variables.product.pat_v2 %}.
| `request_cancelled` | Disparada quando você cancela uma solicitação pendente para que o {% data variables.product.pat_v2 %} acesse os recursos da organização.
| `request_created` | Disparada quando você cria um {% data variables.product.pat_v2 %} para acessar recursos da organização e a organização requer aprovação para que um {% data variables.product.pat_v2 %} possa acessar recursos da organização.
| `request_denied` | Disparada quando a solicitação para que o {% data variables.product.pat_v2 %} acesse os recursos da organização é negada. Para obter mais informações, confira "[Como gerenciar solicitações de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)".

{% endif %}

### Ações da categoria `profile_picture`

| Ação | Descrição
|------------------|-------------------
| `update` | Disparada quando você [define ou atualiza a foto do seu perfil](/articles/setting-your-profile-picture/).

### Ações da categoria `project`

| Ação | Descrição
|--------------------|---------------------
| `access` | Acionada quando a visibilidade de um quadro de projeto é alterada.
| `create` | Acionada quando um quadro de projeto é criado.
| `rename` | Acionada quando um quadro de projeto é renomeado.
| `update` | Acionada quando um quadro de projeto é atualizado.
| `delete` | Acionada quando um quadro de projeto é excluído.
| `link`   | Acionada quando um repositório é vinculado a um quadro de projeto.
| `unlink` | Acionada quando um repositório é desvinculado de um quadro de projeto.
| `update_user_permission` | Acionada quando um colaborador externo é adicionado ou removido de um quadro de projeto ou tem seu nível de permissão alterado.

### Ações da categoria `public_key`

| Ação | Descrição
|------------------|-------------------
| `create` | Disparada quando você [adiciona uma nova chave SSH pública à conta no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/articles/adding-a-new-ssh-key-to-your-github-account).
| `delete` | Disparada quando você [remove uma nova chave SSH pública da conta no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/articles/reviewing-your-ssh-keys).

### Ações da categoria `repo`

| Ação | Descrição
|------------------|-------------------
| `access` | Disparada quando um repositório do qual você é o proprietário é [alternado de "privado" para "público"](/articles/making-a-private-repository-public) (ou vice-versa).
| `add_member` | Disparada quando um usuário do {% data variables.product.product_name %} {% ifversion fpt or ghec %}[é convidado a ter acesso de colaboração](/articles/inviting-collaborators-to-a-personal-repository){% else %}[recebe acesso de colaboração](/articles/inviting-collaborators-to-a-personal-repository){% endif %} em um repositório.
| `add_topic` | Disparada quando um proprietário do repositório [adiciona um tópico](/articles/classifying-your-repository-with-topics) a um repositório.
| `archived` | Disparada quando um proprietário do repositório [arquiva um repositório](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Disparada quando o [acesso de leitura anônimo do Git é desabilitado](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) em um repositório público.
| `config.enable_anonymous_git_access` | Disparada quando o [acesso de leitura anônimo do Git é habilitado](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) em um repositório público.
| `config.lock_anonymous_git_access` | Disparada quando a [configuração de acesso de leitura anônimo do Git de um repositório é bloqueada](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
| `config.unlock_anonymous_git_access` | Disparada quando a [configuração de acesso de leitura anônimo do Git de um repositório é desbloqueada](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create` | Disparada quando [um repositório é criado](/articles/creating-a-new-repository).
| `destroy` |  Disparada quando [um repositório é excluído](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Disparada quando um repositório é desabilitado (por exemplo, por [fundos insuficientes](/articles/unlocking-a-locked-account)).{% endif %}{% ifversion fpt or ghec %}
| `download_zip` | Disparada quando um arquivo ZIP ou TAR de um repositório é baixado.
| `enable` | Acionada quando um repositório é habilitado novamente.{% endif %}
| `remove_member` | Disparada quando um usuário do {% data variables.product.product_name %} é [removido de um repositório como colaborador](/articles/removing-a-collaborator-from-a-personal-repository).
| `remove_topic` | Acionada quando um proprietário do repositório remove um tópico de um repositório.
| `rename` | Disparada quando [um repositório é renomeado](/articles/renaming-a-repository).
| `staff_unlock` | Acionada quando um proprietário da empresa ou {% data variables.contact.github_support %} (com permissão de um administrador de repositório) desbloqueou temporariamente o repositório. A visibilidade do repositório não é alterada.
| `transfer` | Disparada quando [um repositório é transferido](/articles/how-to-transfer-a-repository).
| `transfer_start` | Acionada quando uma transferência de repositório está prestes a ocorrer.
| `unarchived` | Acionada quando um proprietário do repositório desarquiva um repositório.

{% ifversion fpt or ghec %}
### Ações da categoria `sponsors`

| Ação | Descrição
|------------------|-------------------
| `custom_amount_settings_change` | Disparada quando você habilita ou desabilita valores personalizados ou quando você altera o valor personalizado sugerido (confira "[Como gerenciar suas camadas de patrocínio](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")
| `repo_funding_links_file_action` | Disparada quando você altera o arquivo FUNDING no seu repositório (confira "[Como exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)")
| `sponsor_sponsorship_cancel` | Disparada quando você cancela um patrocínio (confira "[Como fazer o downgrade de um patrocínio](/articles/downgrading-a-sponsorship)")
| `sponsor_sponsorship_create` | Disparada quando você patrocina uma conta (confira "[Como patrocinar um colaborador de código aberto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_payment_complete` | Disparada depois que você patrocina uma conta e seu pagamento é processado (confira "[Como patrocinar um colaborador de código aberto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_preference_change` | Disparada quando você altera a configuração de recebimento de atualizações por email de um desenvolvedor patrocinado (confira "[Como gerenciar seu patrocínio](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")
| `sponsor_sponsorship_tier_change` | Disparada quando você faz upgrade ou downgrade do seu patrocínio (confira "[Como fazer upgrade de um patrocínio](/articles/upgrading-a-sponsorship)" e "[Como fazer downgrade de um patrocínio](/articles/downgrading-a-sponsorship)")
| `sponsored_developer_approve` | Disparada quando sua conta do {% data variables.product.prodname_sponsors %} é aprovada (veja "[Como configurar o {% data variables.product.prodname_sponsors %} para sua conta pessoal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `sponsored_developer_create` | Disparada quando sua conta do {% data variables.product.prodname_sponsors %} é criada (veja "[Como configurar o {% data variables.product.prodname_sponsors %} para sua conta pessoal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `sponsored_developer_disable` | Acionada quando sua conta {% data variables.product.prodname_sponsors %} está desabilitado
| `sponsored_developer_redraft` | Acionada quando sua conta de {% data variables.product.prodname_sponsors %} é retornada ao estado de rascunho a partir do estado aprovado
| `sponsored_developer_profile_update` | Disparada quando você edita seu perfil de desenvolvedor patrocinado (confira "[Como editar os detalhes do seu perfil no {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")
| `sponsored_developer_request_approval` | Disparada quando você envia seu aplicativo ao {% data variables.product.prodname_sponsors %} para aprovação (confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua conta pessoal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `sponsored_developer_tier_description_update` | Disparada quando você altera a descrição de uma camada de patrocínio (confira "[Como gerenciar suas camadas de patrocínio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")
| `sponsored_developer_update_newsletter_send` | Disparada quando você envia uma atualização de email para seus patrocinadores (confira "[Como entrar em contato com seus patrocinadores](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")
| `waitlist_invite_sponsored_developer` | Disparada quando você é convidado a entrar na lista de espera do {% data variables.product.prodname_sponsors %} (confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua conta pessoal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `waitlist_join` | Disparada quando você entra na lista de espera para se tornar um desenvolvedor patrocinado (confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua conta pessoal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
{% endif %}

{% ifversion fpt or ghec %}
### Ações da categoria `successor_invitation`

| Ação | Descrição
|------------------|-------------------
| `accept` | Disparada quando você aceita um convite de sucessão (confira "[Como manter a continuidade da propriedade dos repositórios da sua conta pessoal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `cancel` | Disparada quando você cancela um convite de sucessão (confira "[Como manter a continuidade da propriedade dos repositórios da sua conta pessoal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `create` | Disparada quando você cria um convite de sucessão (confira "[Como manter a continuidade da propriedade dos repositórios da sua conta pessoal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `decline` | Disparada quando você recusa um convite de sucessão (confira "[Como manter a continuidade da propriedade dos repositórios da sua conta pessoal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `revoke` | Disparada quando você revoga um convite de sucessão (confira "[Como manter a continuidade da propriedade dos repositórios da sua conta pessoal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
{% endif %}

{% ifversion ghes or ghae %}

### Ações da categoria `team`

| Ação | Descrição
|------------------|-------------------
| `add_member` | Disparada quando um membro de uma organização à qual você pertence [adiciona você a uma equipe](/articles/adding-organization-members-to-a-team).
| `add_repository` | Acionada quando uma equipe da qual você faz parte recebe o controle de um repositório.
| `create` | Acionada quando uma equipe é criada em uma organização à qual você pertence.
| `destroy` | Acionada quando uma equipe da qual você faz parte é excluída da organização.
| `remove_member` | Disparada quando um membro de uma organização é [removido de uma equipe](/articles/removing-organization-members-from-a-team) da qual você é membro.
| `remove_repository` | Acionada quando um repositório deixa de ser controlado por uma equipe.

{% endif %}

{% ifversion not ghae %}
### Ações da categoria `two_factor_authentication`

| Ação | Descrição
|------------------|-------------------
| `enabled` | Disparada quando a [autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) é habilitada.
| `disabled` | Acionada quando a autenticação de dois fatores é desabilitada.
{% endif %}

### Ações da categoria `user`

| Ação | Descrição
|--------------------|---------------------
| `add_email` | Disparada quando você {% ifversion not ghae %}[adiciona um novo endereço de email](/articles/changing-your-primary-email-address){% else %}adiciona um novo endereço de email{% endif %}.{% ifversion fpt or ghec %}
| `codespaces_trusted_repo_access_granted` | Disparada quando você [permite que os codespaces criados para um repositório acessem outros repositórios pertencentes à sua conta pessoal](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
| `codespaces_trusted_repo_access_revoked` | Disparada quando você [não permite que os codespaces criados para um repositório acessem outros repositórios pertencentes à sua conta pessoal](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). {% endif %}
| `create` | Disparada quando você cria uma conta pessoal.{% ifversion not ghae %}
| `change_password` | Acionada quando você altera a senha.
| `forgot_password` | Disparada quando você solicita [uma redefinição de senha](/articles/how-can-i-reset-my-password).{% endif %}
| `hide_private_contributions_count` | Disparada quando você [oculta as contribuições privadas no seu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `login` | Disparada quando você entra em {% data variables.location.product_location %}.{% ifversion ghes or ghae %}
`mandatory_message_viewed`   | Disparada quando você vê uma mensagem obrigatória (confira "[Como personalizar mensagens do usuário](/admin/user-management/customizing-user-messages-for-your-enterprise)" para obter detalhes) | {% endif %}
| `failed_login` | Acionada quando você não consegue fazer login.
| `remove_email` | Acionada quando você remove um endereço de e-mail.
| `rename` | Disparada quando você renomeia sua conta.{% ifversion fpt or ghec %}
| `report_content` | Disparada quando você [relata um problema ou uma solicitação de pull ou um comentário sobre um problema, uma solicitação de pull ou um commit](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %}
| `show_private_contributions_count` | Disparada quando você [divulga as contribuições particulares no seu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% ifversion not ghae %}
| `two_factor_requested` | Disparada quando o {% data variables.product.product_name %} solicita [seu código de autenticação de dois fatores](/articles/accessing-github-using-two-factor-authentication).{% endif %}

### Ações da categoria `user_status`

| Ação | Descrição
|--------------------|---------------------
| `update` | Acionada quando você configura ou altera o status no perfil. Para obter mais informações, confira "[Como configurar um status](/articles/personalizing-your-profile/#setting-a-status)".
| `destroy` | Acionada quando você remove o status no perfil.
