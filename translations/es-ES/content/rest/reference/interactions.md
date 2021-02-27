---
title: Interacciones
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
---

Los usuarios interactuan con los repositorios al comentar, abrir informes de problemas y crear solicitudes de extracción. La API de interacciones permite a las personas con acceso de propietario o de administrador restringir la interacción con los repositorios públicos temporalmente a un tipo específico de usuario.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Organización

La API de Interacciones Organizacionales permite a los propietarios el restringir temporalmente qué tipo de usuariopuede comentar, abrir propuestas, o crear solicitudes de cambios en los repositorios públicos de la organización. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en la organización.
* {% data reusables.interactions.contributor-user-limit-definition %} en la organización.
* {% data reusables.interactions.collaborator-user-limit-definition %} en la organización.

Configurar el límite de interacciones a nivel organizacional sobreescribirá cualquier límite de interacción que se haya configurado para los repositorios individuales que pertenezcan a la organización. Para configurar los límites de interacción para los repositorios individuales que pertenezcan a la organización, mejor utiliza la terminal de interaciones del [Repositorio](#repository).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repositorio

La API de interacciones de repositorio permite a las personas con acceso administrativo o de propietario restringir temporalmente qué tipo de usuario puede comentar, abrir propuestas, o crear solicitudes de cambios en un repositorio privado. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en el repositorio.
* {% data reusables.interactions.contributor-user-limit-definition %} en el repositorio.
* {% data reusables.interactions.collaborator-user-limit-definition %} en el repositorio.

Si se habilita un límite de interacción para el usuario u organización a la que pertenece el repositorio, éste no podrá cambiarse para el repositorio individual. En su lugar, utiliza las terminales de interacciones de [Usuario](#user) o de [Organización](#organization) para cambiar el límite de interacción.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Usuario

La API de interacciones de usuario te permite restringir temporalmente qué tipo de usuario puede comentar, abrir propuestas, o crear solicitudes de cambio en tus repositorios públicos. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} de interactuar con tus repositorios.
* {% data reusables.interactions.contributor-user-limit-definition %} de interactuar con tus repositorios.
* {% data reusables.interactions.collaborator-user-limit-definition %} de interactuar con tus repositorios.

El configurar el límite de interacción a nivel de usuario sobreescribirá cualquier límite de interacción que se configure para los repositorios individuales que le pertenezcan a éste. Para configurar límites de interacción diferentes para los repositorios individuales que pertenezcan al usuario, utiliza la terminal de interacciones de [Repositorio](#repository) en su lugar.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'user' %}{% include rest_operation %}{% endif %}
{% endfor %}
