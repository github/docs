---
title: Usuários
redirect_from:
  - /v3/users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Muitos dos recursos na API de usuários fornecem um atalho para obter informações sobre o usuário autenticado atualmente. Se uma URL de solicitação não incluir um parâmetro `{username}`, a resposta será para o usuário conectado (e você deve passar [as informações de autenticação](/rest/overview/resources-in-the-rest-api#authentication) com a sua solicitação). Informações privadas adicionais, como, por exemplo, se um usuário tem autenticação de dois fatores habilitada, são incluídas quando autenticadas através da autenticação básica ou do OAuth com o escopo `usuário`.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Bloquear usuários

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

## E-mails

O gerenciamento de endereços de e-mail através da API requer que você efetue a autenticação por meio de autenticação básica, ou através do OAuth com um escopo correto para o ponto de extremidade.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'emails' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Seguidores

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'followers' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Chaves SSH do Git

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Chaves GPG

Os dados retornados no campo de resposta `public_key` não são uma chave com formato GPG. Quando um usuário faz o upload de uma chave GPG, ela é analisada e a chave pública criptográfica é extraída e armazenada. Essa chave criptográfica é o que é retornado pelas APIs nesta página. Esta chave não é adequada para ser usada diretamente por programas como o GPG.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'gpg-keys' %}{% include rest_operation %}{% endif %}
{% endfor %}
