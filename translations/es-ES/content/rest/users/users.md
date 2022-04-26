---
title: Usuarios
intro: La API de Usuarios te permite obtener información pública y privada sobre el usuario autenticado.
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
