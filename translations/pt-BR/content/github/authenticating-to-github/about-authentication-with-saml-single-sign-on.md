---
title: Sobre a autenticação com SAML SSO
intro: 'You can access {% if currentVersion == "github-ae@latest" %}{% data variables.product.product_location %}{% elsif currentVersion == "free-pro-team@latest" %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% if currentVersion == "github-ae@latest" %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).{% if currentVersion == "free-pro-team@latest" %}To authenticate with the API or Git on the command line when an organization enforces SAML SSO, you must authorize your personal access token or SSH key.{% endif %}'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
  github-ae: '*'
---

{% if currentVersion == "github-ae@latest" %}

SAML SSO allows an enterprise owner to centrally control and secure access to {% data variables.product.product_name %} from a SAML IdP. When you visit {% data variables.product.product_location %} in a browser, {% data variables.product.product_name %} will redirect you to your IdP to authenticate. After you successfully authenticate with an account on the IdP, the IdP redirects you back to {% data variables.product.product_location %}. {% data variables.product.product_name %} validates the response from your IdP, then grants access.

{% data reusables.saml.you-must-periodically-authenticate %}

If you can't access {% data variables.product.product_name %}, contact your local enterprise owner or administrator for {% data variables.product.product_name %}. You may be able to locate contact information for your enterprise by clicking **Support** at the bottom of any page on {% data variables.product.product_name %}. {% data variables.product.company_short %} and {% data variables.contact.github_support %} do not have access to your IdP, and cannot troubleshoot authentication problems.

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.saml.dotcom-saml-explanation %} Os proprietários da organização podem convidar sua conta de usuário em {% data variables.product.prodname_dotcom %} para participar da organização que usa o SSO SAML, o que permite que você contribua com a organização e mantenha sua identidade e contribuições existentes em {% data variables.product.prodname_dotcom %}.

Ao acessar os recursos dentro de uma organização que usa o SSO SAML, o {% data variables.product.prodname_dotcom %} irá redirecionar você para o SAML IdP da organização para que você efetue a autenticação. Depois de efetuar a autenticação com sucesso com sua conta no IdP, este irá redirecionar você de volta para {% data variables.product.prodname_dotcom %}, onde você poderá acessar os recursos da organização.

{% data reusables.saml.outside-collaborators-exemption %}

Se você efetuou a autenticação recentemente com o IdP SAML da sua organização no navegador, você estará automaticamente autorizado ao acessar uma organização do {% data variables.product.prodname_dotcom %} que usa SAML SSO. Se não tiver efetuado a autenticação recentemente com o IdP SAML da sua organização no navegador, você deverá efetuar a autenticação no SAML IdP antes de acessar a organização.

{% data reusables.saml.you-must-periodically-authenticate %}

Para usar a API ou o Git na linha de comando de modo a acessar conteúdo protegido em uma organização que usa SAML SSO, você precisará usar um token de acesso pessoal autorizado por HTTPS ou uma chave SSH autorizada. Os tokens de acesso do {% data variables.product.prodname_oauth_app %} são autorizados por padrão.

Na falta de um token de acesso pessoal ou uma chave SSH, você poderá criar um token de acesso pessoal para a linha de comando ou gerar uma nova chave SSH. Para obter mais informações consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)ou "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent-](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

Para usar uma chave SSH ou um token de acesso pessoal existente ou novo com uma organização que impõe o SAML SSO, você precisará autorizar o token ou a chave SSH para uso com uma organização de logon único de SAML. Para obter mais informações consulte "[Autorizar um token de acesso pessoal para usar com logon único SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" ou "[Autorizando uma chave SSH para uso com o logon único SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

Você deve ter uma sessão de SAML ativa toda vez que autorizar um {% data variables.product.prodname_oauth_app %}.

{% endif %}

### Leia mais

{% if currentVersion == "free-pro-team@latest" %}- "[About identity and access management with SAML single sign-on](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% if currentVersion == "github-ae@latest" %}- "[About identity and access management for your enterprise](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
