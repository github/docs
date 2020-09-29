---
title: Sobre restrições de acesso do aplicativo OAuth
intro: 'As organizações podem escolher quais {% data variables.product.prodname_oauth_app %}s terão acesso a seus repositórios e outros recursos habilitando as restrições de acesso do {% data variables.product.prodname_oauth_app %}.'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
versions:
  free-pro-team: '*'
---

Quando as restrições de acesso do {% data variables.product.prodname_oauth_app %} são habilitadas, os integrantes da organização não podem autorizar o acesso do {% data variables.product.prodname_oauth_app %} aos recursos da organização. Os integrantes da organização podem solicitar aprovação do proprietário para os {% data variables.product.prodname_oauth_app %}s que gostariam de usar, e os proprietários da organização recebem uma notificação de solicitações pendentes.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Dica**: quando uma organização não configura as restrições de acesso do {% data variables.product.prodname_oauth_app %}, qualquer {% data variables.product.prodname_oauth_app %} autorizado por um integrante da organização também pode acessar os recursos privados da organização.

{% endtip %}

### Configurar as restrições de acesso do {% data variables.product.prodname_oauth_app %}

Quando um proprietário da organização configura as restrições de acesso do {% data variables.product.prodname_oauth_app %} pela primeira vez:

- Os **aplicativos que a organização possui** recebem acesso automaticamente aos recursos da organização.
- Os **{% data variables.product.prodname_oauth_app %}s** perdem imediatamente o acesso aos recursos da organização.
- As **chaves SSH criadas antes de fevereiro de 2014** perdem imediatamente o acesso aos recursos da organização (isso inclui chaves de implantação e usuário).
- As **chaves SSH criadas pelos {% data variables.product.prodname_oauth_app %} durante ou após fevereiro de 2014** perdem acesso imediatamente aos recursos da organização.
- As **entregas de hook de repositórios da organização privada** não serão mais enviadas a {% data variables.product.prodname_oauth_app %}s não aprovados.
- O **acesso de API** aos recursos da organização privada não é disponibilizado para {% data variables.product.prodname_oauth_app %}s não aprovados. Além disso, não há ações de criação, atualização ou exclusão com privilégios em recursos de organização pública.
- Os **hooks criados pelos usuários e antes de maio de 2014** não serão afetados.
- As **bifurcações privadas dos repositórios de propriedade da organização** estão sujeitas às restrições de acesso da organização.

### Resolver falhas de acesso de SSH

Quando uma chave SSH criada antes de fevereiro de 2014 perde acesso a uma organização com restrições de acesso do {% data variables.product.prodname_oauth_app %} habilitadas, as tentativas de acesso subsequentes do SSH falharão. Os usuários encontrarão uma mensagem de erro direcionando-as a uma URL onde podem aprovar a chave ou fazer upload de uma chave confiável.

### Webhooks

Quando um {% data variables.product.prodname_oauth_app %} receber acesso à organização depois que as restrições forem habilitadas, os webhooks preexistentes criados por esse {% data variables.product.prodname_oauth_app %} retomarão o envio.

Quando uma organização remover o acesso de um {% data variables.product.prodname_oauth_app %} anteriormente aprovado, todos os webhooks preexistentes criados por esse aplicativo não serão mais enviados (esses hooks serão desabilitados, mas não excluídos).

### Reabilitando restrições de acesso

Se uma organização desabilitar as restrições de acesso do {% data variables.product.prodname_oauth_app %} e, posteriormente, reabilitá-las, os {% data variables.product.prodname_oauth_app %}s anteriormente aprovados receberão acesso automaticamente aos recursos da organização.

### Leia mais

- "[Habilitar restrições de acesso do {% data variables.product.prodname_oauth_app %} para sua organização](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[Aprovar {% data variables.product.prodname_oauth_app %} para sua organização](/articles/approving-oauth-apps-for-your-organization)"
- "[Revisar integrações instaladas da sua organização](/articles/reviewing-your-organization-s-installed-integrations)"
- "[Negar acesso ao {% data variables.product.prodname_oauth_app %} anteriormente aprovado para sua organização](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[Desabilitar restrições de acesso do {% data variables.product.prodname_oauth_app %} para sua organização](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[Solicitar aprovação da organização para os {% data variables.product.prodname_oauth_app %}s](/articles/requesting-organization-approval-for-oauth-apps)"
- "[Autorizar {% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps)"
