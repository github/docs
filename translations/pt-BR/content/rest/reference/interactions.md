---
title: Interações
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
---

Os usuários interagem com repositórios comentando, abrindo problemas e criando pull requests. As APIs de interações permitem que pessoas com acesso de proprietário ou administrador restrinjam temporariamente certos usuários de interagir com repositórios públicos.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## organização

A API de Interações da Organização permite que os proprietários da organização restrinjam temporariamente quais usuários podem comentar, abrir problemas ou criar pull requests nos repositórios públicos da organização. {% data reusables.interactions.interactions-detail %} Veja mais sobre os grupos de usuários do {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} na organização.
* {% data reusables.interactions.contributor-user-limit-definition %} na organização.
* {% data reusables.interactions.collaborator-user-limit-definition %} na organização.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repositório

A API de Interações do Repositório permite que pessoas com acesso de proprietário ou administrador restrinjam temporariamente quais usuários podem comentar, abrir problemas ou criar pull requests em um repositório público. {% data reusables.interactions.interactions-detail %} Veja mais sobre os grupos de usuários do {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} in the respository.
* {% data reusables.interactions.contributor-user-limit-definition %} in the respository.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the respository.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}
