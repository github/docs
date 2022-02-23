---
title: Codespaces
intro: 'The {% data variables.product.prodname_codespaces %} API enables you to manage your codespaces using the REST API.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% data reusables.codespaces.codespaces-api-beta-note %}

La API de {% data variables.product.prodname_codespaces %} te permite administrar las {% data variables.product.prodname_codespaces %} utilizando la API de REST. This API is available for authenticated users and OAuth Apps, but not GitHub Apps. Para obtener más información, consulta la sección "[{% data variables.product.prodname_codespaces %}](/codespaces)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Machines
The Machines API allows a user to determine which machine types are available to create a codespace, either on a given repository or as an authenticated user. For more information, see "[About machine types](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)."

También puedes utilizar esta información cuando cambies la máquina de un codespace existente actualizando su propiedad de `machine`. La actualización de la máquina tomará lugar la siguiente vez que el codespace se reinicie. Para obtener más información, consulta la sección "[Cambiar el tipo de máquina de tu codespace](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)".
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'machines' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Secretos
La API de secretos permite que un usuario cree, liste y borre secretos (tales como los tokens de acceso para los servicios en la nube) así como asignar secretos a los repositorios a los que el usuario tenga acceso. Estos secretos se hacen disponibles para el codespace en el tiempo de ejecución. Para obtener más información, consulta la sección "[Administrar los secretos cifrados para tu codespace](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'secrets' %}{% include rest_operation %}{% endif %}
{% endfor %}
