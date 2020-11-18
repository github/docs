---
title: Solução de Problemas
intro: Aprenda a resolver os problemas mais comuns que as pessoas enfrentam na API REST.
redirect_from:
  - /v3/troubleshooting
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



Se você estiver encontrando algumas situações estranhas na API, aqui está uma lista de resoluções de alguns dos problemas que você pode estar enfrentando.

### Por que estou recebendo um erro `404` em um repositório que existe?

Normalmente, enviamos um erro `404` quando seu cliente não está autenticado corretamente. Nesses casos, você pode esperar ver um `403 Forbidden`. No entanto, como não queremos fornecer _nenhuma_ informação sobre repositórios privados, a API retorna um erro `404`.

Para solucionar o problema, verifique se [você está efetuando a autenticação corretamente](/guides/getting-started/), se [seu token de acesso do OAuth tem os escopos necessários](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) e se as [restrições de aplicativos de terceiros][oap-guide] não estão bloqueando o acesso.

### Por que eu não estou vendo todos os meus resultados?

A maioria das chamadas da API que acessam uma lista de recursos (_por exemplo,_, usuários, issues, _etc._) é compatível com a paginação. Se você está fazendo solicitações e recebendo um conjunto incompleto de resultados, provavelmente você só está vendo a primeira página. Você precisará solicitar as páginas restantes para obter mais resultados.

É importante *não* tentar adivinhar o formato da URL de paginação. Nem todas as chamadas de API usam a mesma estrutura. Em vez disso, extraia as informações de paginação do [Cabeçalho do link](/v3/#pagination), que é enviado com cada solicitação.

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
