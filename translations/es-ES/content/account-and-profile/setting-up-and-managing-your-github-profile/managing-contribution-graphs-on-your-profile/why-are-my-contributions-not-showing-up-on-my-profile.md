---
title: ¿Por qué mis contribuciones no aparecen en mi perfil?
intro: Aprende sobre las razones habituales por las cuales podrían faltar contribuciones en tu gráfica.
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Contribuciones faltantes
---

## Acerca de tu gráfica de contribuciones

Your profile contributions graph is a record of contributions you've made to repositories {% ifversion ghae %}owned by{% else %}on{% endif %} {% data variables.product.product_location %}. Las contribuciones son registros horarios de acuerdo a la zona horaria universal coordinada (UTC) en lugar de tu zona horaria local. Las contribuciones solo se cuentan si cumplen con determinados criterios. En algunos casos, necesitamos reconstruir tu gráfico para que aparezcan las contribuciones.

## Contribuciones que se cuentan

### Propuestas, solicitudes de cambios y debates

Las propuestas, solicitudes de cambios y debates aparecerán en tu gráfica de contribuciones si se abrieron en un repositorio independiente y no en una bifurcación.

### Confirmaciones
Las confirmaciones aparecerán en tu gráfico de contribución si cumplen **todas** las condiciones a continuación:
- The email address used for the commits is associated with your account on {% data variables.product.product_location %}.
- Las confirmaciones se hicieron en un repositorio independiente, no en una bifurcación.
- Las confirmaciones se hicieron:
  - En la rama predeterminada del repositorio
  - En la rama `gh-pages` (para los repositorios con sitios de proyecto)

Para obtener más información sobre los sitios de proyecto, consulta la sección "[Acerca de las {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Asimismo, **al menos una** de las siguientes afirmaciones debe ser verdadera:
- Eres un colaborador en el repositorio o eres miembro de la organización a la que pertenece el repositorio.
- Has bifurcado el repositorio.
- Has abierto una solicitud de extracción o una propuesta en el repositorio.
- Has destacado el repositorio.

## Razones comunes por las que las contribuciones no se cuentan

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### La confirmación se hizo hace menos de 24 horas

Después de hacer una confirmación que cumpla con los requisitos para contar como una contribución, es posible que debas esperar hasta 24 horas para que aparezca la contribución en tu gráfico de contribución.

### Tu correo electrónico de confirmaciones de Git no está conectado a tu cuenta

Commits must be made with an email address that is connected to your account on {% data variables.product.product_location %}{% ifversion fpt or ghec %}, or the {% data variables.product.prodname_dotcom %}-provided `noreply` email address provided to you in your email settings,{% endif %} in order to appear on your contributions graph.{% ifversion fpt or ghec %} For more information about `noreply` email addresses, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)."{% endif %}

Puedes verificar la dirección de correo electrónico para una confirmación si agregas `.patch` al final de la URL de la confirmación, por ejemplo <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] índice actualizado para un mejor mensaje de bienvenida
```

La dirección de correo electrónico en el campo `From: (Desde:)` es la dirección que se estableció en los [parámetros de configuración de Git local](/articles/set-up-git). En este ejemplo, la dirección de correo electrónico que se usó para la confirmación es `octocat@nowhere.com`.

If the email address used for the commit is not connected to your account on {% data variables.product.product_location %}, {% ifversion ghae %}change the email address used to author commits in Git. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %}you must [add the email address](/articles/adding-an-email-address-to-your-github-account) to your account on {% data variables.product.product_location %}. Tu gráfica de contribuciones se reconstruirá automáticamente cuando agregues la nueva dirección.{% endif %}

{% warning %}

**Warning**: Generic email addresses, such as `jane@computer.local`, cannot be added to {% data variables.product.prodname_dotcom %} accounts. If you use such an email for your commits, the commits will not be linked to your {% data variables.product.prodname_dotcom %} profile and will not show up in your contribution graph.

{% endwarning %}

### La confirmación no se hizo en la rama predeterminada o en la rama `gh-pages`

Las confirmaciones solo se cuentan si se realizan en la rama predeterminada o en la rama `gh-pages` (para los repositorios con sitios de proyecto). Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Si tus confirmaciones están en una rama que no es una rama predeterminada ni es la rama `gh-pages` y te gustaría que contaran para tus contribuciones, necesitarás realizar las siguientes acciones:
- [Abre una solicitud de extracción](/articles/creating-a-pull-request) para obtener la fusión de tus cambios en la rama predeterminada o la rama `gh-pages`.
- [Cambia la rama predeterminada](/github/administering-a-repository/changing-the-default-branch) del repositorio.

{% warning %}

**Warning**: Changing the default branch of the repository will change it for all repository collaborators. Realiza esta acción solamente si quieres que la nueva rama se convierta en la base respecto de todas las confirmaciones y las solicitudes de extracción que se harán en el futuro.

{% endwarning %}

### La confirmación se hizo en una bifurcación

Las confirmaciones que se hicieron en una bifurcación no contarán para tus contribuciones. Para hacer que cuenten, debes realizar una de las siguientes acciones:
- [Abre una solicitud de extracción](/articles/creating-a-pull-request) para que se fusionen tus cambios en el repositorio padre.
- To detach the fork and turn it into a standalone repository on {% data variables.product.product_location %}, contact {% data variables.contact.contact_support %}. If the fork has forks of its own, let {% data variables.contact.contact_support %} know if the forks should move with your repository into a new network or remain in the current network. Para obtener más información, consulta "[Acerca de las bifurcaciones](/articles/about-forks/)."

## Leer más

- "[Divulgar u ocultar tus contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Ver las contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)"
