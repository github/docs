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

Você também pode configurar endereços IP permitidos para uma organização individual. Para obter mais informações, consulte "[Gerenciar endereços IP permitidos para a sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization)".

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

### Habilitar logon único de SAML para organizações na conta corporativa

{% data reusables.saml.dotcom-saml-explanation %} Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com o logon único SAML](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)".

Os proprietários empresariais podem ativar o SAML SSO e autenticação centralizada através de um IdP de SAML em todas as organizações que pertencem a uma conta corporativa. Depois que você habilita o SAML SSO para a conta corporativa, ele é habilitado por padrão para todas as organizações pertencentes a ela. Todos os integrantes deverão autenticar usando o SAML SSO para obter acesso às organizações de que fazem parte, e os proprietários corporativos precisarão autenticar usando o SAML SSO ao acessar uma conta corporativa.

{% data reusables.saml.about-saml-access-enterprise-account %} Para obter mais informações, consulte "[Visualizar e gerenciar o acesso de SAML de um usuário à sua conta corporativa](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)".

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} Se você não estiver participando do beta privado, o SCIM não será compatível para as contas corporativas. Para obter mais informações, consulte "[Gerenciar o provisionamento de usuários para organizações na sua conta corporativa](#managing-user-provisioning-for-organizations-in-your-enterprise-account)".

{% note %}

**Observação**: se você habilitar a autenticação com logon único SAML para a conta corporativa, as configurações SAML existentes no nível da organização serão substituídas.

{% endnote %}

Para obter informações mais detalhadas sobre como ativar o SAML usando o Okta, consulte "[Configurar o logon único SAML e SCIM para a sua conta corporativa usando o Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "SAML single sign-on" (Logon único de SAML), selecione **Enable SAML authentication** (Habilitar autenticação SAML). ![Caixa de seleção para habilitar SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. No campo **Sign on URL** (URL de logon), digite o ponto de extremidade HTTPS do seu IdP para solicitações de logon único. Esse valor está disponível na configuração do IdP. ![Campo referente à URL para a qual os integrantes serão encaminhados ao entrarem](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Como alternativa, no campo **Issuer** (Emissor), digite o nome do emissor de SAML. Isso confirma a autenticidade das mensagens enviadas. ![Campo referente ao nome do emissor de SAML](/assets/images/help/saml/saml_issuer.png)
8. Em **Public Certificate** (Certificado público), cole um certificado para verificar as respostas de SAML. ![Campo referente ao certificado público do seu provedor de identidade](/assets/images/help/saml/saml_public_certificate.png)
9. Para verificar a integridade das solicitações do emissor de SAML, clique em {% octicon "pencil" aria-label="The edit icon" %}. Em seguida, nos menus suspensos Signature Method (Método de assinatura) e Digest Method (Método de compilação), escolha o algoritmo de hash usado pelo emissor de SAML. ![Menus suspensos Signature Method (Método de assinatura) e Digest Method (Método de compilação) para os algoritmos de hash usados pelo emissor de SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar o SAML SSO para sua empresa, clique em **Test SAML configuration** (Testar configuração de SAML) para garantir que as informações que você digitou estão corretas. ![Botão para testar a configuração de SAML antes da aplicação](/assets/images/help/saml/saml_test.png)
11. Clique em **Salvar**.

### Gerenciar o provisionamento de usuários para organizações na conta corporativa

Os proprietários das empresas podem gerenciar a participação na organização de uma conta corporativa diretamente de um provedor de identidade (IdP).

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} Opcionalmente, você também pode habilitar o provisionamento de SAML e, separadamente, o desprovisionamento.

Se você configurar o SCIM no seu IdP, toda vez que fizer alterações na associação do grupo no seu IdP, este fará uma chamada de SCIM para {% data variables.product.prodname_dotcom %} afim de atualizar a associação da organização correspondente. Se você ativar o provisionamento de SAML, toda vez que um integrante da empresa acessar um recurso protegido pela configuração de SAML da conta corporativa, essa declaração de SAML irá acionar o provisionamento.

Para cada chamada de SCIM ou declaração de SAML, {% data variables.product.product_name %} irá verificar os grupos de IdP aos quais o usuário pertence e executar as operações a seguir:

- Se o usuário for integrante de um grupo de IdP que corresponde a uma organização pertencente à conta corporativa e o usuário não for, atualmente, um membro dessa organização, adicione o usuário à organização (declaração de SAML) ou envie um convite por e-mail para participar da organização (chamada de SCIM).
- Cancele quaisquer convites existentes para o usuário juntar-se a uma organização que pertencem à conta corporativa.

Para cada chamada de SCIM e, no caso de habilitar o desprovisionamento de SAML, em cada declaração de SAML, o {% data variables.product.product_name %} também executará a operação a seguir:

- Se o usuário não for membro de um grupo de IdP que corresponde a uma organização pertencente à sua conta corporativa, e o usuário for, atualmente, um integrante dessa organização, remova o usuário da organização.

Se desprovisionamento remover o último proprietário de uma organização, a organização ficará sem proprietário. Os proprietários das empresas podem assumir a propriedade de organizações sem proprietários. Para obter mais informações, consulte "[Gerenciar organizações sem proprietários na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/managing-unowned-organizations-in-your-enterprise-account)".

Para habilitar o provisionamento de usuários para sua conta corporativa usando o Okta, consulte "[Configurar o logon único SAML e SCIM para a sua conta corporativa usando o Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)".

### Gerenciar a sincronização de equipes para organizações na conta corporativa

Os proprietários das empresas podem habilitar a sincronização de equipes entre um IdP e {% data variables.product.product_name %} para permitir que os proprietários da organização e os mantenedores de equipe conectem equipes nas organizações pertencentes à sua conta corporativa com grupos de IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

Você pode usar a sincronização de equipes com a sua conta corporativa com o Azure AD.

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Você também pode configurar e gerenciar a sincronização da equipe para uma organização individual. Para obter mais informações, consulte "[Gerenciar a sincronização de equipe para a sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)".

#### Pré-requisitos

Antes de poder habilitar a sincronização de equipes para a sua conta corporativa:
  - Você ou o administrador do Azure AD deve ser um administrador global ou um administrador com função privilegiada no Azure AD.
  - Você deve habilitar o logon único SAML para organizações na conta corporativa com o IdP compatível. Para obter mais informações, consulte "[Habilitar o logon único SAML para organizações na conta corporativa](#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)".
  - Você deve efetuar a autenticação na sua conta corporativa usando o SAML SSO e o IdP compatível. Para obter mais informações, consulte "[Autenticar com logon único de SAML](/articles/authenticating-with-saml-single-sign-on)".

#### Gerenciar a sincronização de equipe para o Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Revise as informações do locatário do provedor de identidade que você deseja conectar à conta corporativa e clique em **Aprovar**. ![Solicitação pendente para habilitar a sincronização de equipes para um determinado encarregado do IdP com opção de aprovar ou cancelar a solicitação](/assets/images/help/teams/approve-team-synchronization.png)
8. Para desativar a sincronização de equipe, clique **Desativar sincronização de equipe**. ![Desabilitar a sincronização de equipes](/assets/images/help/teams/disable-team-synchronization.png)

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
