---
title: ¿Por qué mis contribuciones no aparecen en mi perfil?
intro: 'Tu gráfico de contribución de perfil es un registro de las contribuciones que hiciste a los repositorios {% data variables.product.product_name %}. Las contribuciones son registros horarios de acuerdo a la zona horaria universal coordinada (UTC) en lugar de tu zona horaria local. Las contribuciones solo se cuentan si cumplen con determinados criterios. En algunos casos, necesitamos reconstruir tu gráfico para que aparezcan las contribuciones.'
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

### Contribuciones que se cuentan

#### Propuestas y solicitudes de extracción

Las propuestas y las solicitudes de extracción aparecerán en tu gráfico de contribución si se abrieron en un repositorio independiente, no en una bifurcación.

#### Confirmaciones
Las confirmaciones aparecerán en tu gráfico de contribución si cumplen **todas** las condiciones a continuación:
- La dirección de correo electrónico que se usa para las confirmaciones se asocia con tu cuenta {% data variables.product.product_name %}.
- Las confirmaciones se hicieron en un repositorio independiente, no en una bifurcación.
- Las confirmaciones se hicieron:
  - En la rama predeterminada del repositorio
  - En la rama `gh-pages` (para los repositorios con sitios de proyecto)

Para obtener más información sobre los sitios del proyecto, consulta "[Acerca de {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)"

Asimismo, **al menos una** de las siguientes afirmaciones debe ser verdadera:
- Eres un colaborador en el repositorio o eres miembro de la organización a la que pertenece el repositorio.
- Has bifurcado el repositorio.
- Has abierto una solicitud de extracción o una propuesta en el repositorio.
- Has destacado el repositorio.
{% if currentVersion != "free-pro-team@latest" %}
### Razones comunes por las que las contribuciones no se cuentan

{% data reusables.pull_requests.pull_request_merges_and_contributions %}{% endif %}

#### La confirmación se hizo hace menos de 24 horas

Después de hacer una confirmación que cumpla con los requisitos para contar como una contribución, es posible que debas esperar hasta 24 horas para que aparezca la contribución en tu gráfico de contribución.

#### No has agregado tu correo electrónico de confirmación de Git a tu perfil

Las confirmaciones deben realizarse con una dirección de correo electrónico que se haya agregado a tu cuenta de {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}, o con la dirección de correo electrónico de `noreply` que te proporcionó {% data variables.product.product_name %} en la configuración de tu correo electrónico,{% endif %} para que aparezca en tu gráfica de contribuciones.{% if currentVersion == "free-pro-team@latest" %} Para obtener más información acerca de las direcciones de correo electrónico de tipo `noreply`, consulta la sección "[Configurar tus direcciones de correo para las confirmaciones](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)".{% endif %}

You can check the email address used for a commit by adding `.patch` to the end of a commit URL, e.g. <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] índice actualizado para un mejor mensaje de bienvenida
```

La dirección de correo electrónico en el campo `From: (Desde:)` es la dirección que se estableció en los [parámetros de configuración de Git local](/articles/set-up-git). En este ejemplo, la dirección de correo electrónico que se usó para la confirmación es `octocat@nowhere.com`.

Si la dirección de correo electrónico que se usó para la confirmación no se agregó a tu perfil {% data variables.product.product_name %}, debes [agregar la dirección de correo electrónico](/articles/adding-an-email-address-to-your-github-account) a tu cuenta {% data variables.product.product_name %}. Tu gráfico de contribución será reconstruido automáticamente cuando agregues la nueva dirección.

{% warning %}

Las direcciones de correo electrónico generales, tales como `jane@computer.local`, no se pueden agregar a las cuentas {% data variables.product.product_name %}. Si usas un correo electrónico de ese estilo para tus confirmaciones, las confirmaciones no se vincularán a tu perfil {% data variables.product.product_name %} y no aparecerán en tu gráfico de contribución.

{% endwarning %}

#### La confirmación no se hizo en la rama predeterminada o en la rama `gh-pages`

Las confirmaciones solo se cuentan si se realizan en la rama predeterminada o en la rama `gh-pages` (para los repositorios con sitios de proyecto). Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Si tus confirmaciones están en una rama que no es una rama predeterminada ni es la rama `gh-pages` y te gustaría que contaran para tus contribuciones, necesitarás realizar las siguientes acciones:
- [Abre una solicitud de extracción](/articles/creating-a-pull-request) para obtener la fusión de tus cambios en la rama predeterminada o la rama `gh-pages`.
- [Cambiar la rama por defecto](/articles/setting-the-default-branch) del repositorio.

{% warning %}

Cambiar la rama por defecto del repositorio la cambiará para todos los colaboradores del repositorio. Realiza esta acción solamente si quieres que la nueva rama se convierta en la base respecto de todas las confirmaciones y las solicitudes de extracción que se harán en el futuro.

{% endwarning %}

#### La confirmación se hizo en una bifurcación

Las confirmaciones que se hicieron en una bifurcación no contarán para tus contribuciones. Para hacer que cuenten, debes realizar una de las siguientes acciones:
- [Abre una solicitud de extracción](/articles/creating-a-pull-request) para que se fusionen tus cambios en el repositorio padre.
- Para desconectar la bifurcación y convertirla en un repositorio independiente en {% data variables.product.product_name %}, contacta {% data variables.contact.contact_support %}. Si la bifurcación tiene a su vez más bifurcaciones, indica a {% data variables.contact.github_support %} si éstas deberán moverse junto con tu repositorio a una nueva red o permanecer en la actual. Para obtener más información, consulta "[Acerca de las bifurcaciones](/articles/about-forks/)."

### Leer más

- "[Divulgar u ocultar tus contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Ver las contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)"
