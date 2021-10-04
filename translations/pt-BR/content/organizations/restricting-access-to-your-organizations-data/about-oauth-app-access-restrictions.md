---
title: Sobre restrições de acesso do aplicativo OAuth
intro: 'Organizations can choose which {% data variables.product.prodname_oauth_apps %} have access to their repositories and other resources by enabling {% data variables.product.prodname_oauth_app %} access restrictions.'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
  - /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Acesso ao aplicativo OAuth
---

## Sobre restrições de acesso do aplicativo OAuth

Quando as restrições de acesso do {% data variables.product.prodname_oauth_app %} são habilitadas, os integrantes da organização não podem autorizar o acesso do {% data variables.product.prodname_oauth_app %} aos recursos da organização. Organization members can request owner approval for {% data variables.product.prodname_oauth_apps %} they'd like to use, and organization owners receive a notification of pending requests.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Dica**: quando uma organização não configura as restrições de acesso do {% data variables.product.prodname_oauth_app %}, qualquer {% data variables.product.prodname_oauth_app %} autorizado por um integrante da organização também pode acessar os recursos privados da organização.

{% endtip %}

To further protect your organization's resources, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes security features like SAML single sign-on. {% data reusables.enterprise.link-to-ghec-trial %}

## Configurar as restrições de acesso do {% data variables.product.prodname_oauth_app %}

Quando um proprietário da organização configura as restrições de acesso do {% data variables.product.prodname_oauth_app %} pela primeira vez:

- Os **aplicativos que a organização possui** recebem acesso automaticamente aos recursos da organização.
- **{% data variables.product.prodname_oauth_apps %}** immediately lose access to the organization's resources.
- As **chaves SSH criadas antes de fevereiro de 2014** perdem imediatamente o acesso aos recursos da organização (isso inclui chaves de implantação e usuário).
- **SSH keys created by {% data variables.product.prodname_oauth_apps %} during or after February 2014** immediately lose access to the organization's resources.
- **Hook deliveries from private organization repositories** will no longer be sent to unapproved {% data variables.product.prodname_oauth_apps %}.
- **API access** to private organization resources is not available for unapproved {% data variables.product.prodname_oauth_apps %}. Além disso, não há ações de criação, atualização ou exclusão com privilégios em recursos de organização pública.
- Os **hooks criados pelos usuários e antes de maio de 2014** não serão afetados.
- As **bifurcações privadas dos repositórios de propriedade da organização** estão sujeitas às restrições de acesso da organização.

## Resolver falhas de acesso de SSH

Quando uma chave SSH criada antes de fevereiro de 2014 perde acesso a uma organização com restrições de acesso do {% data variables.product.prodname_oauth_app %} habilitadas, as tentativas de acesso subsequentes do SSH falharão. Os usuários encontrarão uma mensagem de erro direcionando-as a uma URL onde podem aprovar a chave ou fazer upload de uma chave confiável.

## Webhooks

Quando um {% data variables.product.prodname_oauth_app %} receber acesso à organização depois que as restrições forem habilitadas, os webhooks preexistentes criados por esse {% data variables.product.prodname_oauth_app %} retomarão o envio.

Quando uma organização remover o acesso de um {% data variables.product.prodname_oauth_app %} anteriormente aprovado, todos os webhooks preexistentes criados por esse aplicativo não serão mais enviados (esses hooks serão desabilitados, mas não excluídos).

## Reabilitando restrições de acesso

Se uma organização desabilitar as restrições de acesso do {% data variables.product.prodname_oauth_app %} e, posteriormente, reabilitá-las, os {% data variables.product.prodname_oauth_app %}s anteriormente aprovados receberão acesso automaticamente aos recursos da organização.

## Leia mais

- "[Habilitar restrições de acesso do {% data variables.product.prodname_oauth_app %} para sua organização](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[Approving {% data variables.product.prodname_oauth_apps %} for your organization](/articles/approving-oauth-apps-for-your-organization)"
- "[Revisar integrações instaladas da sua organização](/articles/reviewing-your-organization-s-installed-integrations)"
- "[Negar acesso ao {% data variables.product.prodname_oauth_app %} anteriormente aprovado para sua organização](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[Desabilitar restrições de acesso do {% data variables.product.prodname_oauth_app %} para sua organização](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[Requesting organization approval for {% data variables.product.prodname_oauth_apps %}](/articles/requesting-organization-approval-for-oauth-apps)"
- "[Autorizar {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"
