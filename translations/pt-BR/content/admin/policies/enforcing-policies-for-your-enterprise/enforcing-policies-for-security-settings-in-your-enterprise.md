---
title: Aplicando políticas para configurações de segurança na sua empresa
intro: É possível impor políticas para gerenciar as configurações de segurança nas organizações da sua empresa ou permitir que as políticas sejam definidas em cada organização.
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Políticas de configurações de segurança
---

## Sobre políticas para configurações de segurança na sua empresa

É possível aplicar políticas para controlar as configurações de segurança das organizações pertencentes à sua empresa em {% data variables.product.product_name %}. Por padrão, os proprietários da organização podem gerenciar as configurações de segurança. Para obter mais informações, consulte "[Mantendo sua organização segura](/organizations/keeping-your-organization-secure)".

{% ifversion ghec or ghes %}

## Exigir autenticação de dois fatores para organizações na sua empresa

Os proprietários corporativos podem exigir que integrantes da organização, gerentes de cobrança e colaboradores externos em todas as organizações pertencentes a uma empresa usem autenticação de dois fatores para proteger suas contas de usuário.

Antes de poder exigir a autenticação 2FA para todas as organizações pertencentes à sua empresa, você deve habilitar a autenticação de dois fatores para a sua própria conta. Para obter mais informações, consulte "[Proteger sua conta com autenticação de dois fatores (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/)".

{% warning %}

**Avisos:**

- Se você exigir autenticação de dois fatores para a sua empresa, os integrantes, colaboradores externos e gerentes de cobrança (incluindo contas bot) em todas as organizações pertencentes à sua empresa que não utilizem 2FA serão removidos da organização e perderão acesso aos repositórios dela. Eles também perderão acesso às bifurcações dos repositórios privados da organização. Você pode restabelecer seus privilégios de acesso e configurações se eles permitirem a autenticação de dois fatores para sua conta dentro de três meses após sua remoção de sua organização. Para obter mais informações, consulte "[Restabelecer ex-integrantes da organização](/articles/reinstating-a-former-member-of-your-organization)".
- Qualquer proprietário da organização, integrante, gerente de cobrança ou colaborador externo em qualquer das organizações pertencentes à sua empresa que desabilite a 2FA para a conta dele depois que você tiver habilitado a autenticação de dois fatores obrigatória será removido automaticamente da organização.
- Se você for o único proprietário de uma empresa que exige autenticação de dois fatores, não poderá desabilitar 2FA para sua conta de usuário sem desabilitar a autenticação de dois fatores obrigatória para a empresa.

{% endwarning %}

Antes de exigir o uso da autenticação de dois fatores, é recomendável notificar os integrantes da organização, colaboradores externos e gerentes de cobrança e pedir que eles configurem 2FA nas contas deles. Os proprietários da organização podem ver se integrantes e colaboradores externos já utilizam 2FA na página People (Pessoas) de cada organização. Para obter mais informações, consulte "[Ver se os usuários na organização têm a 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. Em "Two-factor authentication" (Autenticação de dois fatores), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Two-factor authentication" (Autenticação de dois fatores), selecione **Require two-factor authentication for all organizations in your business** (Exigir autenticação de dois fatores para todas as organizações na empresa) e clique em **Save** (Salvar). ![Caixa de seleção para exigir autenticação de dois fatores](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. Se solicitado, leia as informações sobre os integrantes e colaboradores externos que serão removidos das organizações pertencentes à sua empresa. Para confirmar a alteração, digite o nome da sua empresa e clique em **Remover integrantes& exigir autenticação de dois fatores**. ![Caixa Confirm two-factor enforcement (Confirmar exigência de dois fatores)](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Como alternativa, se algum integrante ou colaborador externo for removido das organizações pertencentes à sua empresa, recomendamos enviar um convite para restabelecer os privilégios e o acesso à organização que ele tinha anteriormente. Cada pessoa precisa habilitar a autenticação de dois fatores para poder aceitar o convite.

{% endif %}

{% ifversion ghec or ghae %}

## Gerenciar endereços IP permitidos para organizações na sua empresa

{% ifversion ghae %}

Você pode restringir o tráfego de rede para a sua empresa em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Restringir tráfego de rede para a sua empresa](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)".

{% elsif ghec %}

Os proprietários de empresas podem restringir o acesso a ativos privados pertencentes a organizações em uma empresa, configurando uma lista de permissão de endereços IP específicos. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

Você também pode configurar endereços IP permitidos para uma organização individual. Para obter mais informações, consulte "[Gerenciar endereços IP permitidos para a sua organização](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

### Adicionar endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Permitindo acesso de {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Habilitar endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. Em "IP allow list" (Lista de permissões IP), selecione **Enable IP allow list** (Habilitar lista de permissões IP). ![Caixa de seleção para permitir endereços IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Clique em **Salvar**.

### Editar endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Clique em **Atualizar**.

### Excluir endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### Usar {% data variables.product.prodname_actions %} com uma lista endereços IP permitidos

{% data reusables.actions.ip-allow-list-self-hosted-runners %}

{% endif %}

{% endif %}

## Gerenciando as autoridades de certificados de SSH da sua empresa

Você pode usar as autoridades de certificados SSH (CA) para permitir que os integrantes de qualquer organização pertencente à sua empresa acessem os repositórios da organização usando certificados SSH que você fornecer. {% data reusables.organizations.can-require-ssh-cert %} Para obter mais informações, consulte "[Sobre autoridades certificadas de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".

{% data reusables.organizations.add-extension-to-cert %}

### Adicionar uma autoridade certificada de SSH

Se você precisar de certificados SSH para sua empresa, os integrantes da empresa deverão usar um URL especial para operações do Git por meio do SSH. Para obter mais informações, consulte "[Sobre autoridades certificadas SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### Excluir uma autoridade certificada de SSH

A exclusão de uma CA não pode ser desfeita. Se você quiser usar a mesma CA no futuro, precisará fazer upload dela novamente.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

{% ifversion ghec or ghae %}
## Leia mais

- "[Sobre a identidade e gerenciamento de acesso da sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)"{% ifversion ghec %}
- "[Relatórios de conformidade para a sua empresa](/admin/overview/accessing-compliance-reports-for-your-enterprise)"{% endif %}
{% endif %}
