---
title: Sobre a autenticação com SAML SSO
intro: 'Você pode acessar {% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %}uma organização que usa o logon único SAML (SSO){% endif %} efetuando a autenticação {% ifversion ghae %}com o logon único SAML (SSO) {% endif %}por meio de um provedor de identidade (IdP).{% ifversion ghec %} Depois de efetuar a autenticação com o IdP em {% data variables.product.product_name %}, você deverá autorizar qualquer token de acesso pessoal, Chave SSH, ou {% data variables.product.prodname_oauth_app %} que você gostaria de acessar os recursos da organização.{% endif %}'
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

Se você for integrante de um {% data variables.product.prodname_emu_enterprise %}, você usará uma nova conta que lhe será fornecida. {% data reusables.enterprise-accounts.emu-more-info-account %}


Ao acessar os recursos dentro de uma organização que usa o SSO SAML, o {% data variables.product.prodname_dotcom %} irá redirecionar você para o SAML IdP da organização para que você efetue a autenticação. Depois de efetuar a autenticação com sucesso com sua conta no IdP, este irá redirecionar você de volta para {% data variables.product.prodname_dotcom %}, onde você poderá acessar os recursos da organização.

{% data reusables.saml.outside-collaborators-exemption %}

Se você efetuou a autenticação recentemente com o IdP SAML da sua organização no navegador, você estará automaticamente autorizado ao acessar uma organização do {% data variables.product.prodname_dotcom %} que usa SAML SSO. Se não tiver efetuado a autenticação recentemente com o IdP SAML da sua organização no navegador, você deverá efetuar a autenticação no SAML IdP antes de acessar a organização.

{% data reusables.saml.you-must-periodically-authenticate %}

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
