---
title: Usuários
intro: A API de Usuários permite obter informações públicas e privadas sobre o usuário autenticado.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Muitos dos recursos na API de usuários fornecem um atalho para obter informações sobre o usuário autenticado atualmente. Se uma URL de solicitação não incluir um parâmetro `{username}`, a resposta será para o usuário conectado (e você deve passar [informações de autenticação](/rest/overview/resources-in-the-rest-api#authentication) com sua solicitação).{% ifversion fpt or ghes or ghec %} Informações privadas adicionais, como se um usuário tem autenticação de dois fatores habilitada, estão incluídas quando a autenticação é efetuada por meio da autenticação básica ou OAuth com o escopo do `usuário` .{% endif %}
