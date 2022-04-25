---
title: Alterando a configuração do SAML de uma organização para uma conta corporativa
intro: Aprenda as considerações especiais e as práticas recomendas para substituir uma configuração do SAML no nível da organização por uma configuração do SAML de nível corporativo.
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
  - Organizations
type: how_to
shortTitle: Da organização à empresa
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
---

## Sobre o logon único SAML para contas corporativas

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %}

Ao configurar o SAML SSO no nível da organização, cada uma deverpa ser configurada com um inquilino de SSO único no seu IdP, o que significa que os seus integrantes serão associados a um registro de identidade do SAML único para cada organização com a qual tenham efetuado a autenticação com sucesso. Se você configurar o SAML SSO para a sua conta corporativa, cada integrante da empresa terá uma identidade do SAML utilizada para todas as organizações pertencentes à conta corporativa.

Depois de configurar o SAML SSO para a conta corporativa, a nova configuração irá substituir todas as configurações do SAML SSO existentes para as organizações pertencentes à conta corporativa.

Os integrantes da empresa não serão notificados quando um proprietário corporativo permitir o SAML para a conta corporativa. Se o SAML SSO foi aplicado anteriormente no nível da organização, os integrantes não deverão ver uma grande diferença ao acessar diretamente os recursos da organização. Continuará sendo solicitado que os integrantes efetuem a autenticação por meio do SAML. Se os membros acessarem os recursos da organização por meio do painel do IdP, eles deverão clicar na nova seção do aplicativo de nível corporativo, em vez de clicar na seção antiga para o aplicativo de nível da organização. Em seguida, os integrantes poderão escolher a organização a qual acessar.

Todos os tokens de acesso pessoal (PATs), chaves SSH, {% data variables.product.prodname_oauth_apps %} e {% data variables.product.prodname_github_apps %} que foram previamente autorizados para a organização continuarão sendo autorizados para a organização. No entanto, os integrantes deverão autorizar todos os PATs, chaves SSH, {% data variables.product.prodname_oauth_apps %} e {% data variables.product.prodname_github_apps %} que nunca foram autorizados para uso com o SAML SSO para a organização.

O provisionamento do SCIM não é atualmente compatível quando o SAML SSO está configurado para uma conta corporativa. Se você estiver usando atualmente o SCIM para uma organização pertencente à sua conta corporativa, você perderá essa funcionalidade ao mudar para uma configuração de nível corporativo.

Não é necessário remover nenhuma configuração do SAML no nível da organização antes de configurar o SAML SSO para a sua conta corporativa, mas talvez você deva considerar fazer isso. Se o SAML for desabilitado para a conta corporativa no futuro, todas as configurações restantes do SAML entrarão em vigor. A remoção das configurações ao nível da organização pode evitar problemas inesperados no futuro.

## Alterando a configuração do SAML de uma organização para uma conta corporativa

1. Aplique o SAML SSO na sua conta corporativa, certificando-se de que todos os integrantes da organização recebam o acesso ao aplicativo do IdP que está sendo usado para a conta corporativa. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".
1. Opcionalmente, remova qualquer configuração existente do SAML para as organizações pertencentes à conta corporativa. Para ajudar você a decidir se deseja remover as configurações, consulte "[Sobre o logon único SAML para contas corporativas](#about-saml-single-sign-on-for-enterprise-accounts)".
1. Se você manteve as configurações do SAML no nível da organização, para evitar confusão, considere ocultar o botão para os aplicativos noe nível da organização no seu IdP.
1. Informe os integrantes da sua empresa sobre a alteração.
   -  Os integrantes não poderão mais acessar as suas organizações clicando no aplicativo SAML para a organização no painel do IdP. Eles deverão usar o novo aplicativo configurado para a conta corporativa.
   - Os integrantes deverão autorizar todos PATs ou chaves SSH que não tenham sido previamente autorizadas para uso com o SAML SSO para a sua organização. Para mais informações consulte "[Autorizar um token de acesso pessoal para usar com o logon único SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" e "[Autorizar uma chave SSH para uso com o logon único SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."
   - É possível que os integrantes tenham de reautorizar {% data variables.product.prodname_oauth_apps %} que foram autorizados anteriormente para a organização. Para obter mais informações, consulte "[Sobre a autenticação com logon único SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)".
