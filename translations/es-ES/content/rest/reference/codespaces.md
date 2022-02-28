---
title: Codespaces
intro: 'La API de {% data variables.product.prodname_codespaces %} te permite administrar tus codespaces utilizando la API de REST.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% data reusables.codespaces.codespaces-api-beta-note %}

La API de {% data variables.product.prodname_codespaces %} te permite administrar las {% data variables.product.prodname_codespaces %} utilizando la API de REST. Esta API se encuentra disponible para los usuarios autenticados y las Apps de OAuth, pero no para las GitHub Apps. Para obtener más información, consulta la sección "[{% data variables.product.prodname_codespaces %}](/codespaces)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Máquinas
La API de máquinas permite que un usuario determine qué tipos de máquina están disponibles para crear un codespace, ya sea en un repositorio definido o como un usuario autenticado. Para obtener más información, consulta la sección "[Acerca de los tipos de máquina](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)".

También puedes utilizar esta información cuando cambies la máquina de un codespace existente actualizando su propiedad de `machine`. La actualización de la máquina tomará lugar la siguiente vez que el codespace se reinicie. Para obtener más información, consulta la sección "[Cambiar el tipo de máquina de tu codespace](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)".
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'machines' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Secretos
La API de secretos permite que un usuario cree, liste y borre secretos (tales como los tokens de acceso para los servicios en la nube) así como asignar secretos a los repositorios a los que el usuario tenga acceso. Estos secretos se hacen disponibles para el codespace en el tiempo de ejecución. Para obtener más información, consulta la sección "[Administrar los secretos cifrados para tu codespace](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'secrets' %}{% include rest_operation %}{% endif %}
{% endfor %}
