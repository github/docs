---
title: Sobre o suporte para a Política de Acesso Condicional do seu IdP
shortTitle: Política de acesso condicional
intro: 'Quando sua empresa usa o SSO do OIDC, a {% data variables.product.prodname_dotcom %} validará o acesso à sua empresa e aos seus recursos usando a Política de Acesso Condicional do seu dispositivo (CAP).'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% data reusables.enterprise-accounts.oidc-beta-notice %}

## Sobre o suporte para políticas de acesso condicional

{% data reusables.enterprise-accounts.emu-cap-validates %}

O suporte ao CAP é habilitado automaticamente para qualquer {% data variables.product.prodname_emu_enterprise %} que habilite o SSO do OIDC e não possa ser desabilitado. {% data variables.product.prodname_dotcom %} aplica as condições de IP do seu IdP, mas não as condições de conformidade do dispositivo.

Para obter mais informações sobre o uso do OIDC com {% data variables.product.prodname_emus %}, consulte "[Configurando o OIDC para usuários gerenciados corporativos](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)" e "[Migrando do SAML para o OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)."

## Sobre o uso do CAP com listas de permissão de IP

Recomendamos deasabilitar a lista de permissão da sua conta corporativa e confiar no CAP do seu IdP. Se você habilitar as listas de permissão do IP para sua empresa e também fizer uso do CAP do seu IdP, tanto a lista de permissões de IP quanto o CAP serão aplicados. Se alguma restrição rejeitar o endereço IP de um usuário, ocorrerá uma falha na solicitação. Para obter mais informações sobre a lista de permissão de IP, consulte "[Aplicando políticas de segurança na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)".

## Considerações para integrações e automações

{% data variables.product.prodname_dotcom %} envia o endereço IP originário para o seu IdP para validação com base no seu CAP. Para garantir que as ações e aplicativos não sejam bloqueados pelo CAP do seu IdP, você deverá fazer alterações na sua configuração.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

As ações que usam um token de acesso pessoal provavelmente serão bloqueadas pelo CAP do seu IdP. Recomendamos que os tokens de acesso pessoal sejam criados por uma conta de serviço que é isenta de controles IP no CAP do seu IdP.

Se você não puder usar uma conta de serviço, outra opção para desbloquear ações que usam tokens de acesso pessoal é permitir as faixas IP usadas por {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Sobre os endereços IP do GitHub](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)".

### {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %}

Quando {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} fizerem solicitações em nome de um integrante, {% data variables.product.prodname_dotcom %} enviará o endereço IP do servidor do aplicativo para o seu IdP para validação. Se o endereço IP do servidor do aplicativo não for validado pelo CAP do seu IdP, a solicitação falhará.

Você pode entrar em contato com os proprietários dos aplicativos que deseja usar, pedir suas faixas de IP e configurar o CAP do seu IdP para permitir o acesso a partir dessas faixas de IP. Se você não puder entrar em contato com os proprietários, você poderá revisar seus logins de IdP para revisar os endereços IP vistos nas solicitações e, em seguida, permitir listar esses endereços.

Você também pode habilitar a configuração de lista de permissões para {% data variables.product.prodname_github_apps %} instalado. Quando habilitados, todos os {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} continuarão trabalhando independentemente do endereço IP originário. Para obter mais informações, consulte "[Aplicando políticas de segurança na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)".
