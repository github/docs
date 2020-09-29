---
title: Criar um repositório somente com problemas
intro: 'O {% data variables.product.product_name %} não fornece permissões de acesso somente a problemas, mas você pode fazer isso usando um segundo repositório que contenha apenas os problemas.'
redirect_from:
  - /articles/issues-only-access-permissions/
  - /articles/is-there-issues-only-access-to-organization-repositories/
  - /articles/creating-an-issues-only-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

1. Crie um repositório **privado** para hospedar o código-fonte do seu projeto.
2. Crie um segundo repositório com as permissões que deseja para hospedar o rastreador de problema.
3. Adicione um arquivo LEIAME ao repositório de problemas explicando a finalidade desse repositório e vinculando-o à seção de problemas.
4. Defina colaboradores ou equipes para fornecer acesso aos repositórios conforme desejado.

Os usuários com acesso de gravação a ambos podem fazer referência e fechar problemas nos repositórios, mas aqueles sem as permissões necessárias verão referências que contêm informações mínimas.

Por exemplo, se você fizesse push de um commit no branch padrão do repositório privado com a mensagem `Fixes organization/public-repo#12`, o problema seria fechado, mas apenas os usuários com as permissões adequadas veriam a referência entre repositórios indicando o commit que fechou o problema. Sem as permissões, uma referência continua aparecendo, mas os detalhes são omitidos.
