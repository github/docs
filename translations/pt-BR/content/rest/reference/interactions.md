---
title: Interações
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
---

Os usuários interagem com repositórios comentando, abrindo problemas e criando pull requests. As APIs de interações permitem que as pessoas com acesso de proprietário ou administrador restrinjam temporariamente a interação com repositórios públicos para um determinado tipo de usuário.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## organização

A API de Interações da Organização permite que os proprietários da organização restrinjam temporariamente quais tipos de usuário podem comentar, abrir problemas ou criar pull requests nos repositórios públicos da organização. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} na organização.
* {% data reusables.interactions.contributor-user-limit-definition %} na organização.
* {% data reusables.interactions.collaborator-user-limit-definition %} na organização.

Definir o limite de interação no nível da organização sobrescreverá quaisquer limites de interação definidos para repositórios individuais pertencentes à organização. Para definir diferentes limites de interação para repositórios individuais pertencentes à organização, use os pontos de extremidade das interações do [Repositório](#repository).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repositório

A API de Interações do Repositório permite que pessoas com acesso de proprietário ou administrador restrinjam temporariamente qual tipo de usuário pode comentar, abrir problemas ou criar pull requests em um repositório público. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} in the respository.
* {% data reusables.interactions.contributor-user-limit-definition %} in the respository.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the respository.

Se um limite de interação for habilitado para o usuário ou organização proprietária do repositório, o limite não poderá ser alterado para o repositório individual. Em vez disso, use os pontos de extremidade de [Usuário](#user) ou [Organização](#organization) para alterar o limite de interação.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Usuário

A API de Interações do Usuário permite restringir temporariamente que tipo de usuário pode comentar, abrir problemas ou criar pull requests nos seus repositórios públicos. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} de interagir com seus repositórios.
* {% data reusables.interactions.contributor-user-limit-definition %} de interagir com seus repositórios.
* {% data reusables.interactions.collaborator-user-limit-definition %} de interagir com seus repositórios.

Definir o limite de interação no nível do usuário sobrescreverá quaisquer limites de interação definidos para repositórios individuais pertencentes ao usuário. Para definir diferentes limites de interação para repositórios individuais pertencentes ao usuário, use os pontos de extremidade das interações do [Repositório](#repository).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'user' %}{% include rest_operation %}{% endif %}
{% endfor %}
