---
title: Sobre a autenticação com SAML SSO
intro: 'Você pode acessar uma organização que usa SAML SSO fazendo a autenticação por meio de um provedor de identidade (IdP, Identity Provider). Para efetuar a autenticação com a API ou Git na linha de comando quando uma organização impuser o SAML SSO, você deverá autorizar seu token de acesso pessoal ou chave SSH.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

{% data reusables.saml.dotcom-saml-explanation %} Os proprietários da organização podem convidar sua conta de usuário em {% data variables.product.prodname_dotcom %} para participar da organização que usa o SSO SAML, o que permite que você contribua com a organização e mantenha sua identidade e contribuições existentes em {% data variables.product.prodname_dotcom %}.

Ao acessar os recursos dentro de uma organização que usa o SSO SAML, o {% data variables.product.prodname_dotcom %} irá redirecionar você para o SAML IdP da organização para que você efetue a autenticação. Depois de efetuar a autenticação com sucesso com sua conta no IdP, este irá redirecionar você de volta para {% data variables.product.prodname_dotcom %}, onde você poderá acessar os recursos da organização.

{% data reusables.saml.outside-collaborators-exemption %}

Se você efetuou a autenticação recentemente com o IdP SAML da sua organização no navegador, você estará automaticamente autorizado ao acessar uma organização do {% data variables.product.prodname_dotcom %} que usa SAML SSO. Se não tiver efetuado a autenticação recentemente com o IdP SAML da sua organização no navegador, você deverá efetuar a autenticação no SAML IdP antes de acessar a organização.

Você deve efetuar a autenticação periodicamente com seu SAML IdP para efetuar a autenticação e obter acesso aos recursos da organização no {% data variables.product.prodname_dotcom %}. A duração desse período de login é especificado pelo seu IdP e geralmente é de 24 horas. Esse requisito de login periódico limita a duração do acesso e exige que você identifique-se novamente para continuar. É possível exibir e gerenciar as sessões de SAML ativas nas configurações de segurança. Para obter mais informações, consulte "[Exibir e gerenciar sessões de SAML ativas](/articles/viewing-and-managing-your-active-saml-sessions)".

Para usar a API ou o Git na linha de comando de modo a acessar conteúdo protegido em uma organização que usa SAML SSO, você precisará usar um token de acesso pessoal autorizado por HTTPS ou uma chave SSH autorizada. Os tokens de acesso do {% data variables.product.prodname_oauth_app %} são autorizados por padrão.

Na falta de um token de acesso pessoal ou uma chave SSH, você poderá criar um token de acesso pessoal para a linha de comando ou gerar uma nova chave SSH. Para obter mais informações consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)ou "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent-](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

Para usar uma chave SSH ou um token de acesso pessoal existente ou novo com uma organização que impõe o SAML SSO, você precisará autorizar o token ou a chave SSH para uso com uma organização de logon único de SAML. Para obter mais informações consulte "[Autorizar um token de acesso pessoal para usar com logon único SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" ou "[Autorizando uma chave SSH para uso com o logon único SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

Você deve ter uma sessão de SAML ativa toda vez que autorizar um {% data variables.product.prodname_oauth_app %}.

### Leia mais

- "[Sobre gerenciamento de identidade e acesso com o SAML de logon único](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)"
