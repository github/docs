---
title: LDAP
intro: 'Você pode usar a API LDAP para atualizar as relações de conta entre um usuário ou equipe {% data variables.product.product_name %} e sua entrada LDAP vinculada ou enfileirar uma nova sincronização.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Com os endpoints de mapeamento LDAP, você é capaz de atualizar o Nome Distinto (DN) para o qual um usuário ou uma equipe mapeia. Note que os endpoints LDAP são geralmente eficazes apenas se o seu aplicativo de {% data variables.product.product_name %} tiver [Sincronização LDAP habilitada](/enterprise/admin/authentication/using-ldap). O endpoint [mapeamento LDAP de atualização para um usuário](#update-ldap-mapping-for-a-user) pode ser usado quando o LDAP é habilitado, mesmo que a sincronização LDAP esteja desativada.
