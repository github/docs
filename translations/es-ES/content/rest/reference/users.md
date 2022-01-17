---
title: Usuarios
intro: La API de Usuarios te permite obtener información pública y privada sobre el usuario autenticado.
redirect_from:
  - /v3/users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Muchos de los recursos en la API de los usuarios proporcionan un atajo para obtener información acerca del usuario autenticado actualmente. Si una URL de solicitud no incluye un parámetro de `{username}`, entonces la respuesta será para el usuario que inició sesión (y debes pasar la [información de autenticación](/rest/overview/resources-in-the-rest-api#authentication) con tu solicitud).{% ifversion fpt or ghes or ghec %} La información privada adicional, tal como si un usuario tiene habilitada la autenticación bifactorial, se incluye cuando se está autenticado con la autenticación básica o a través de OAuth, con el alcance de `user`.{% endif %}

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt or ghec %}
## Bloquear usuarios

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghes or ghec %}
## Emails (Correos electrónicos)

Administrar las direcciones de correo electrónico a través de la API requiere que ingreses con la autenticación básica o con OAuth con un alcance correcto para la terminal.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'emails' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Seguidores

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'followers' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Llaves SSH de Git

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Claves GPG

Los datos que se devuelven en el campo de respuesta de `public_key` no son una llave con formato de GPG. Cuando un usuario carga una llave GPG, se interpreta y la llave pública criptográfica se extrae y se almacena. Esta llave criptográfica es lo que devuelven las API en esta página. Esta llave no es apta para utilizarse directamente con programas como GPG.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'gpg-keys' %}{% include rest_operation %}{% endif %}
{% endfor %}
