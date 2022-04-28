---
title: Usuários
intro: The Users migrations API is only available to authenticated account owners.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Para obter mais informações, consulte "[Outros métodos de autenticação](/rest/overview/other-authentication-methods)".

{% data variables.migrations.user_migrations_intro %} Para obter uma lista dos dados de migração que você pode baixar, consulte "[Fazer download de um arquivo de migração do usuário](#download-a-user-migration-archive)".

Para fazer o download de um arquivo, você deverá iniciar uma migração de usuário primeiro. Uma vez que o status da migração é `exportado`, você pode fazer o download da migração.

Ao criar um arquivo de migração, ele ficará disponível para download por sete dias. No entanto, você pode excluir o arquivo de migração do usuário mais cedo, se desejar. Você pode desbloquear o repositório quando a migração for `exportada` para começar a usar seu repositório novamente ou excluir o repositório se não precisar mais dos dados do código-fonte.
