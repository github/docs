---
title: Aplicar configurações de segurança na conta corporativa
intro: Os proprietários corporativos podem aplicar determinadas políticas de segurança para todas as organizações pertencentes a uma conta corporativa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - enterprise
---

### Exigir autenticação de dois fatores para organizações na conta corporativa

Os proprietários corporativos podem exigir que integrantes da organização, gerentes de cobrança e colaboradores externos em todas as organizações pertencentes a uma conta corporativa usem autenticação de dois fatores para proteger suas contas pessoais.

Antes de exigir 2FA para todas as organizações pertencentes à conta corporativa, você deve habilitar a autenticação de dois fatores para sua própria conta. Para obter mais informações, consulte "[Proteger sua conta com autenticação de dois fatores (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/)".

{% warning %}

**Avisos:**

- Se você exigir autenticação de dois fatores para a conta corporativa, os integrantes, colaboradores externos e gerentes de cobrança (incluindo contas bot) em todas as organizações pertencentes à conta corporativa que não utilizem 2FA serão removidos da organização e perderão acesso aos repositórios dela. Eles também perderão acesso às bifurcações dos repositórios privados da organização. Se a autenticação de dois fatores for habilitada para a conta pessoal deles em até três meses após a remoção da organização, será possível restabelecer as configurações e os privilégios de acesso deles. Para obter mais informações, consulte "[Restabelecer ex-integrantes da organização](/articles/reinstating-a-former-member-of-your-organization)".
- Qualquer proprietário da organização, integrante, gerente de cobrança ou colaborador externo em qualquer das organizações pertencentes à conta corporativa que desabilite 2FA para a conta pessoal dele depois que você tiver habilitado a autenticação de dois fatores obrigatória será removido automaticamente da organização.
- Se você for o único proprietário de uma conta corporativa que exige autenticação de dois fatores, não poderá desabilitar 2FA para sua conta pessoal sem desabilitar a autenticação de dois fatores obrigatória para a conta corporativa.

{% endwarning %}

Antes de exigir o uso da autenticação de dois fatores, é recomendável notificar os integrantes da organização, colaboradores externos e gerentes de cobrança e pedir que eles configurem 2FA nas contas deles. Os proprietários da organização podem ver se integrantes e colaboradores externos já utilizam 2FA na página People (Pessoas) de cada organização. Para obter mais informações, consulte "[Ver se os usuários na organização têm a 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. Em "Two-factor authentication" (Autenticação de dois fatores), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Two-factor authentication" (Autenticação de dois fatores), selecione **Require two-factor authentication for all organizations in your business** (Exigir autenticação de dois fatores para todas as organizações na empresa) e clique em **Save** (Salvar). ![Caixa de seleção para exigir autenticação de dois fatores](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. Se solicitado, leia as informações sobre os integrantes e colaboradores externos que serão removidos das organizações pertencentes à conta corporativa. Para confirmar a alteração, digite o nome da conta corporativa e clique em **Remove members & require two-factor authentication** (Remover integrantes e exigir autenticação de dois fatores). ![Caixa Confirm two-factor enforcement (Confirmar exigência de dois fatores)](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Como alternativa, se algum integrante ou colaborador externo for removido das organizações pertencentes à conta corporativa, recomendamos enviar um convite para restabelecer os privilégios e o acesso à organização que ele tinha anteriormente. Cada pessoa precisa habilitar a autenticação de dois fatores para poder aceitar o convite.

### Gerenciar endereços IP permitidos para organizações na conta corporativa

Os proprietários de empresas podem restringir o acesso a ativos pertencentes a organizações na conta corporativa, configurando uma lista de permissão de endereços IP específicos. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Você também pode configurar endereços IP permitidos para uma organização individual. Para obter mais informações, consulte "[Gerenciar endereços IP permitidos para a sua organização](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

#### Adicionar endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

#### Habilitar endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. Em "IP allow list" (Lista de permissões IP), selecione **Enable IP allow list** (Habilitar lista de permissões IP). ![Caixa de seleção para permitir endereços IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Clique em **Salvar**.

#### Editar endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Clique em **Atualizar**.

#### Excluir endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

#### Usar {% data variables.product.prodname_actions %} com uma lista endereços IP permitidos

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

### Gerenciar autoridades certificadas de SSH da conta corporativa

Os proprietários corporativos podem adicionar e excluir autoridades certificadas (CAs) de SSH de uma conta corporativa.

Adicionando uma CA de SSH à sua conta corporativa, você pode permitir que integrantes de qualquer organização pertencente à conta corporativa acessem repositórios da organização usando certificados de SSH fornecidos por você. {% data reusables.organizations.can-require-ssh-cert %} Para obter mais informações, consulte "[Sobre autoridades certificadas de SSH](/articles/about-ssh-certificate-authorities)".

#### Adicionar uma autoridade certificada de SSH

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

#### Excluir uma autoridade certificada de SSH

A exclusão de uma CA não pode ser desfeita. Se você quiser usar a mesma CA no futuro, precisará fazer upload dela novamente.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

### Leia mais

- "[Configurar identidade e gerenciamento de acesso para a sua conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account)"
