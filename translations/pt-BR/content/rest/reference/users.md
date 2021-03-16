---
title: Usuários
redirect_from:
  - /v3/users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Muitos dos recursos na API de usuários fornecem um atalho para obter informações sobre o usuário autenticado atualmente. Se uma URL de solicitação não incluir um parâmetro `{username}`, a resposta será para o usuário conectado (e você deve passar [informações de autenticação](/rest/overview/resources-in-the-rest-api#authentication) com sua solicitação).{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} Informações privadas adicionais, como se um usuário tem autenticação de dois fatores habilitada, estão incluídas quando a autenticação é efetuada por meio da autenticação básica ou OAuth com o escopo do `usuário` .{% endif %}

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Bloquear usuários

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
## E-mails

O gerenciamento de endereços de e-mail através da API requer que você efetue a autenticação por meio de autenticação básica, ou através do OAuth com um escopo correto para o ponto de extremidade.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'emails' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

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
