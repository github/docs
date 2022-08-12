---
title: Sobre a autenticação com SAML SSO
intro: 'Você pode acessar {% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %}uma organização que usa o logon único SAML (SSO){% endif %} efetuando a autenticação {% ifversion ghae %}com logon único SAML (SSO) {% endif %}através de um provedor de identidade (IdP).'
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

Se você for integrante de um {% data variables.product.prodname_emu_enterprise %}, você usará uma nova conta que será fornecida para você e controlada pela sua empresa. {% data reusables.enterprise-accounts.emu-more-info-account %}

Ao acessar recursos privados dentro de uma organização que usa o SSO SAML, o {% data variables.product.prodname_dotcom %} redirecionará você para o IdP SAML da organização para efetuar a autenticação. Depois de efetuar a autenticação com sucesso com sua conta no IdP, este irá redirecionar você de volta para {% data variables.product.prodname_dotcom %}, onde você poderá acessar os recursos da organização.

{% data reusables.saml.outside-collaborators-exemption %}

Se você efetuou a autenticação recentemente com o IdP SAML da sua organização no navegador, você estará automaticamente autorizado ao acessar uma organização do {% data variables.product.prodname_dotcom %} que usa SAML SSO. Se não tiver efetuado a autenticação recentemente com o IdP SAML da sua organização no navegador, você deverá efetuar a autenticação no SAML IdP antes de acessar a organização.

{% data reusables.saml.you-must-periodically-authenticate %}

## Identidades do SAML vinculadas

Ao efetuar a autenticação com sua conta de IdP e retornar para {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} registrará um link na organização ou empresa entre sua conta pessoal de {% data variables.product.prodname_dotcom %} e a identidade do SAML na qual você efetuou o login.  Essa identidade vinculada é usada para validar a sua associação nessa organização e, dependendo da sua configuração organizacional ou corporativa, também será usada para determinar de quais organizações e equipes você é integrante. Cada conta de {% data variables.product.prodname_dotcom %} pode ser vinculada a exatamente uma identidade SAML por organização. Da mesma forma, cada identidade SAML pode ser vinculada a exatamente uma conta de {% data variables.product.prodname_dotcom %} em uma organização.

Se você entrar com uma identidade de SAML que já está vinculada a outra conta de {% data variables.product.prodname_dotcom %}, você receberá uma mensagem de erro indicando que não pode iniciar sessão com a identidade do SAML. Esta situação pode ocorrer se você estiver tentando usar uma nova conta {% data variables.product.prodname_dotcom %} para trabalhar na sua organização. Se você não pretendia usar essa identidade SAML com essa conta {% data variables.product.prodname_dotcom %}, você deverá sair da identidade do SAML e, em seguida, repetir o login do SAML. Se você quiser usar essa identidade do SAML com a sua conta de {% data variables.product.prodname_dotcom %}, você deverá pedir ao seu administrador para desvincular sua identidade SAML da sua conta antiga, para que possa vinculá-la à sua nova conta.  Dependendo da configuração da sua organização ou empresa, o seu administrador pode precisar também reatribuir a sua identidade dentro do seu provedor SAML.  Para obter mais informações, consulte "[Visualizar e gerenciar o acesso SAML de um integrante à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".

Se a identidade SAML com a qual você se conecta não coincide com a identidade do SAML atualmente vinculada à sua conta de {% data variables.product.prodname_dotcom %}, você receberá uma advertência de que você está prestes a revincular a sua conta. Uma vez que a sua identidade do SAML é usada para governar o acesso e a adesão à equipe, continuar com a nova identidade SAML pode fazer com que você perca o acesso a equipes e organizações dentro de {% data variables.product.prodname_dotcom %}. Só continue se souber que você deveria usar a nova identidade do SAML para autenticação no futuro.

## Autorizando PATs e chaves SSH com SAML SSO

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
