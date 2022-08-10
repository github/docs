---
title: Sobre a autenticação com SAML SSO
intro: 'You can access {% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% ifversion ghae %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: logon único SAML
---

## Sobre autenticação com SSO do SAML

{% ifversion ghae %}

O SAML SSO permite que um proprietário corporativo realize o controle central e proteja o acesso para {% data variables.product.product_name %} a partir de um IdP do SAML. Ao acessar {% data variables.product.product_location %} em um navegador, {% data variables.product.product_name %} irá redirecioná-lo para seu IdP para efetuar a autenticação. Depois de concluir a autenticação com sucesso com uma conta no IdP, este irá redirecionar você de volta para {% data variables.product.product_location %}. {% data variables.product.product_name %} valida a resposta do seu IpD e, em seguida, concede acesso.

{% data reusables.saml.you-must-periodically-authenticate %}

Se você não puder acessar {% data variables.product.product_name %}, entre em contato com o proprietário da empresa local ou administrador para {% data variables.product.product_name %}. Você pode conseguir localizar informações de contato para sua empresa clicando em **Suporte** na parte inferior de qualquer página em {% data variables.product.product_name %}. {% data variables.product.company_short %} e {% data variables.contact.github_support %} não têm acesso ao seu IdP e não podem solucionar problemas de autenticação.

{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Os proprietários da organização podem convidar sua conta pessoal em {% data variables.product.prodname_dotcom %} para participar da organização que usa o SSO SAML, o que permite que você contribua com a organização e mantenha sua identidade e contribuições existentes em {% data variables.product.prodname_dotcom %}.

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you will instead use a new account that is provisioned for you and controlled by your enterprise. {% data reusables.enterprise-accounts.emu-more-info-account %}

When you access private resources within an organization that uses SAML SSO, {% data variables.product.prodname_dotcom %} will redirect you to the organization's SAML IdP to authenticate. Depois de efetuar a autenticação com sucesso com sua conta no IdP, este irá redirecionar você de volta para {% data variables.product.prodname_dotcom %}, onde você poderá acessar os recursos da organização.

{% data reusables.saml.outside-collaborators-exemption %}

Se você efetuou a autenticação recentemente com o IdP SAML da sua organização no navegador, você estará automaticamente autorizado ao acessar uma organização do {% data variables.product.prodname_dotcom %} que usa SAML SSO. Se não tiver efetuado a autenticação recentemente com o IdP SAML da sua organização no navegador, você deverá efetuar a autenticação no SAML IdP antes de acessar a organização.

{% data reusables.saml.you-must-periodically-authenticate %}

## Linked SAML identities

When you authenticate with your IdP account and return to {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} will record a link in the organization or enterprise between your {% data variables.product.prodname_dotcom %} personal account and the SAML identity you signed into.  This linked identity is used to validate your membership in that organization, and depending on your organization or enterprise setup, is also used to determine which organizations and teams you're a member of as well. Each {% data variables.product.prodname_dotcom %} account can be linked to exactly one SAML identity per organization. Likewise, each SAML identity can be linked to exactly one {% data variables.product.prodname_dotcom %} account in an organization.

If you sign in with a SAML identity that is already linked to another {% data variables.product.prodname_dotcom %} account, you will receive an error message indicating that you cannot sign in with that SAML identity. This situation can occur if you are attempting to use a new {% data variables.product.prodname_dotcom %} account to work inside of your organization. If you didn't intend to use that SAML identity with that {% data variables.product.prodname_dotcom %} account, then you'll need to sign out of that SAML identity and then repeat the SAML login. If you do want to use that SAML identity with your {% data variables.product.prodname_dotcom %} account, you'll need to ask your admin to unlink your SAML identity from your old account, so that you can link it to your new account.  Depending on the setup of your organization or enterprise, your admin may also need to reassign your identity within your SAML provider.  Para obter mais informações, consulte "[Visualizar e gerenciar o acesso SAML de um integrante à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".

If the SAML identity you sign in with does not match the SAML identity that is currently linked to your {% data variables.product.prodname_dotcom %} account, you'll receive a warning that you are about to relink your account. Because your SAML identity is used to govern access and team membership, continuing with the new SAML identity can cause you to lose access to teams and organizations inside of {% data variables.product.prodname_dotcom %}. Only continue if you know that you're supposed to use that new SAML identity for authentication in the future.

## Authorizing PATs and SSH keys with SAML SSO

Para usar a API ou o Git na linha de comando de modo a acessar conteúdo protegido em uma organização que usa SAML SSO, você precisará usar um token de acesso pessoal autorizado por HTTPS ou uma chave SSH autorizada.

Na falta de um token de acesso pessoal ou uma chave SSH, você poderá criar um token de acesso pessoal para a linha de comando ou gerar uma nova chave SSH. Para obter mais informações consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)ou "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent-](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

Para usar um token novo ou existente de acesso pessoal ou chave SSH com uma organização que usa ou impõe o SSO do SAML, você precisará autorizar o token ou autorizar a chave SSH para uso com uma organização de SSO do SAML. Para obter mais informações consulte "[Autorizar um token de acesso pessoal para usar com logon único SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" ou "[Autorizando uma chave SSH para uso com o logon único SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

## Sobre {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} e SAML SSO

Você deve ter uma sessão do SAML ativa toda vez que autorizar um {% data variables.product.prodname_oauth_app %} ou {% data variables.product.prodname_github_app %} para acessar uma organização que usa ou aplica o SAML SSO. Você pode criar uma sessão do SAML ativa, acessando `https://github.com/orgs/ORGANIZATION-NAME/sso` no seu navegador.

Após o proprietário de uma empresa ou organização permitir ou aplicar o SAML SSO para uma organização, e depois de efetuar a autenticação por meio do SAML pela primeira vez, você deverá autorizar novamente todos os {% data variables.product.prodname_oauth_apps %} ou {% data variables.product.prodname_github_apps %} que você autorizou anteriormente a acessar a organização.

Para ver o {% data variables.product.prodname_oauth_apps %} que você autorizou, acesse a sua [página de {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/applications). Para ver o {% data variables.product.prodname_github_apps %} que você autorizou, acesse a sua [página de {% data variables.product.prodname_github_apps %}](https://github.com/settings/apps/authorizations).

{% endif %}

## Leia mais

{% ifversion ghec %}- "[Sobre identidade e gerenciamento de acesso com logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% ifversion ghae %}- "[Sobre identidade e gerenciamento de acesso para a sua empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
