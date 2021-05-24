---
title: Sobre a autenticação com SAML SSO
intro: 'Você pode acessar {% if currentVersion == "github-ae@latest" %}{% data variables.product.product_location %}{% elsif currentVersion == "free-pro-team@latest" %}uma organização que usa o logon único SAML (SSO){% endif %} efetuando a autenticação {% if currentVersion == "github-ae@latest" %}com o logon único SAML (SSO) {% endif %}através de um provedor de identidade (IdP).{% if currentVersion == "free-pro-team@latest" %} Após efetuar a autenticação com o IdP em {% data variables.product.product_name %}, você deve autorizar qualquer token de acesso pessoal, chave SSH, ou {% data variables.product.prodname_oauth_app %} que deseja acessar os recursos da organização.{% endif %}'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - SSO
---
### Sobre autenticação com SSO do SAML

{% if currentVersion == "github-ae@latest" %}

O SAML SSO permite que um proprietário corporativo realize o controle central e proteja o acesso para {% data variables.product.product_name %} a partir de um IdP do SAML. Ao acessar {% data variables.product.product_location %} em um navegador, {% data variables.product.product_name %} irá redirecioná-lo para seu IdP para efetuar a autenticação. Depois de concluir a autenticação com sucesso com uma conta no IdP, este irá redirecionar você de volta para {% data variables.product.product_location %}. {% data variables.product.product_name %} valida a resposta do seu IpD e, em seguida, concede acesso.

{% data reusables.saml.you-must-periodically-authenticate %}

Se você não puder acessar {% data variables.product.product_name %}, entre em contato com o proprietário da empresa local ou administrador para {% data variables.product.product_name %}. Você pode conseguir localizar informações de contato para sua empresa clicando em **Suporte** na parte inferior de qualquer página em {% data variables.product.product_name %}. {% data variables.product.company_short %} e {% data variables.contact.github_support %} não têm acesso ao seu IdP e não podem solucionar problemas de autenticação.

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.saml.dotcom-saml-explanation %} Os proprietários da organização podem convidar sua conta de usuário em {% data variables.product.prodname_dotcom %} para participar da organização que usa o SSO SAML, o que permite que você contribua com a organização e mantenha sua identidade e contribuições existentes em {% data variables.product.prodname_dotcom %}.

Ao acessar os recursos dentro de uma organização que usa o SSO SAML, o {% data variables.product.prodname_dotcom %} irá redirecionar você para o SAML IdP da organização para que você efetue a autenticação. Depois de efetuar a autenticação com sucesso com sua conta no IdP, este irá redirecionar você de volta para {% data variables.product.prodname_dotcom %}, onde você poderá acessar os recursos da organização.

{% data reusables.saml.outside-collaborators-exemption %}

Se você efetuou a autenticação recentemente com o IdP SAML da sua organização no navegador, você estará automaticamente autorizado ao acessar uma organização do {% data variables.product.prodname_dotcom %} que usa SAML SSO. Se não tiver efetuado a autenticação recentemente com o IdP SAML da sua organização no navegador, você deverá efetuar a autenticação no SAML IdP antes de acessar a organização.

{% data reusables.saml.you-must-periodically-authenticate %}

Para usar a API ou o Git na linha de comando de modo a acessar conteúdo protegido em uma organização que usa SAML SSO, você precisará usar um token de acesso pessoal autorizado por HTTPS ou uma chave SSH autorizada.

Na falta de um token de acesso pessoal ou uma chave SSH, você poderá criar um token de acesso pessoal para a linha de comando ou gerar uma nova chave SSH. Para obter mais informações consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)ou "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent-](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

Para usar um token novo ou existente de acesso pessoal ou chave SSH com uma organização que usa ou impõe o SSO do SAML, você precisará autorizar o token ou autorizar a chave SSH para uso com uma organização de SSO do SAML. Para obter mais informações consulte "[Autorizar um token de acesso pessoal para usar com logon único SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" ou "[Autorizando uma chave SSH para uso com o logon único SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

### Sobre {% data variables.product.prodname_oauth_apps %} e SSO do SAML

Você deve ter uma sessão do SAML ativa toda vez que autorizar um {% data variables.product.prodname_oauth_app %} para acessar uma organização que usa ou aplica o SSO do SAML.

Após o proprietário de uma empresa ou organização habilitar ou aplicar o SSO do SAML para uma organização, você deverá autorizar novamente qualquer {% data variables.product.prodname_oauth_app %} que você autorizou anteriormente a acessar a organização. Para visualizar {% data variables.product.prodname_oauth_apps %} que você autorizou ou ou autorizar novamente um {% data variables.product.prodname_oauth_app %}, acesse a sua página de [{% data variables.product.prodname_oauth_apps %}](https://github.com/settings/applications).

{% endif %}

### Leia mais

{% if currentVersion == "free-pro-team@latest" %}- "[Sobre identidade e gerenciamento de acesso com logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% if currentVersion == "github-ae@latest" %}- "[Sobre identidade e gerenciamento de acesso para a sua empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
