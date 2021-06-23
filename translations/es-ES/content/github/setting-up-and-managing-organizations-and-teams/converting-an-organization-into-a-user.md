---
title: Convertir una organización en un usuario
intro: 'No es posible convertir una organización en una cuenta de usuario personal, pero puedes crear una nueva cuenta de usuario y transferirle los repositorios de la organización.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - equipos
---

{% if currentVersion == "free-pro-team@latest" %}

1. [Regístrate](/articles/signing-up-for-a-new-github-account) para una nueva cuenta de usuario de GitHub.
2. [Cambia el rol de usuario a un propietario](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} para la nueva cuenta de usuario.
4. [Transfiere cada repositorio de la organización](/articles/how-to-transfer-a-repository) a la nueva cuenta de usuario.
5. [Elimina la organización](/articles/deleting-an-organization-account).
6. [Cambia el nombre del usuario](/articles/changing-your-github-username) por el nombre de la organización.

{% else %}

1. Inicia sesión para una nueva cuenta de usuario de GitHub Enterprise.
2. [Cambia el rol de usuario a un propietario](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} para la nueva cuenta de usuario.
4. [Transfiere cada repositorio de la organización](/articles/how-to-transfer-a-repository) a la nueva cuenta de usuario.
5. [Elimina la organización](/articles/deleting-an-organization-account).
6. [Cambia el nombre del usuario](/articles/changing-your-github-username) por el nombre de la organización.

{% endif %}
