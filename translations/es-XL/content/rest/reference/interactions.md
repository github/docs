---
title: Interacciones
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
---

Los usuarios interactuan con los repositorios al comentar, abrir informes de problemas y crear solicitudes de extracción. Las API de interacciones permiten a las personas con acceso adminsitrativo o de propietario resgringir temporalmente a usuarios específicos de la interacción con los repositorios públicos.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Organización

La API de Interacciones de la Organización permite a los propietarios de las organizaciones restringir temporalmente qué usuarios pueden comentar, abrir informes de problemas, o crear solicitudes de extracción en los repositorios públicos de la organización. {% data reusables.interactions.interactions-detail %} Aquí tienes más detalles sobre los grupos de usuarios de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en la organización.
* {% data reusables.interactions.contributor-user-limit-definition %} en la organización.
* {% data reusables.interactions.collaborator-user-limit-definition %} en la organización.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repositorio

La API de interacciones con el repositorio le permite a las personas con acceso administrativo o de propietario restringir temporalmente qué usuarios pueden comentar, abrir informes de problemas, o crear solicitudes de extracción en un repositorio público. {% data reusables.interactions.interactions-detail %} Aquí tienes más detalles sobre los grupos de usuarios de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en el repositorio.
* {% data reusables.interactions.contributor-user-limit-definition %} en el repositorio.
* {% data reusables.interactions.collaborator-user-limit-definition %} en el repositorio.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}
