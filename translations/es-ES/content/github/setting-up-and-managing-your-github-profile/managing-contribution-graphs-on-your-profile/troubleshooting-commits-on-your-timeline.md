---
title: Confirmaciones de solución de problemas en tu cronología
intro: 'Puedes ver los detalles de las confirmaciones desde tu cronología del perfil. Si no ves las confirmaciones que esperas en tu perfil o no puedes encontrar los detalles de confirmaciones desde la página de tu perfil, puede que sean diferentes la fecha de la confirmación y el autor de la confirmación.'
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/troubleshooting-commits-on-your-timeline
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

### Comportamiento esperado para ver detalles de confirmaciones

En la cronología de la página de tu perfil, puedes hacer clic en el número de confirmaciones al lado de un repositorio específico para ver más detalles acerca de tus confirmaciones desde ese período de tiempo, incluida una diferencia de cambios específicos hechos en un repositorio.

![Enlace de confirmación en la cronología del perfil](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![Detalles de confirmaciones](/assets/images/help/commits/commit-details.png)

### Detalles de confirmaciones faltantes de las confirmaciones de tu cronología

Si haces clic en un enlace de confirmación desde tu página de perfil y no ves todas las confirmaciones esperadas en la página de confirmaciones del repositorio, es posible que el historial de confirmaciones de Git se haya rescrito y que el autor de la confirmación y la fecha de la confirmación sean diferentes.

![Página del repositorio con el mensaje que dice "no commits found for octocat" (no se encontraron confirmaciones para octocat)](/assets/images/help/repository/no-commits-found.png)

### Cómo utiliza GitHub la fecha de autor y la fecha de confirmación de Git

En Git, la fecha de autor es cuando alguna persona crea por primera vez una confirmación con `git commit`. La fecha de la confirmación es idéntica a la fecha de autor, a menos que alguna persona cambie la fecha de confirmación utilizando `git commit --amend`, un empuje forzado, una rebase u otro comando de Git.

En tu página de perfil, la fecha de autor se utiliza para calcular cuándo se realizó una confirmación. Por otro lado, en un repositorio, la fecha de confirmación se utiliza para calcular cuándo se hizo una confirmación en el repositorio.

La mayoría de las veces, la fecha de autor y la fecha de confirmación son las mismas, pero puedes notar que tu secuencia de confirmaciones no funciona si se modifica el historial de confirmaciones. Para obtener más información, consulta "[¿Por qué mis contribuciones no se muestran en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"

### Ver detalles de confirmaciones faltantes de las confirmaciones de tu cronología

Puedes utilizar el comando `git show` con la marca `--pretty=fuller` para comprobar si la fecha de autor de la confirmación y la fecha de confirmación son diferentes.

```shell
$ git show <em>Your commit SHA number</em> --pretty=fuller
commit <em>Your commit SHA number</em>
Author:     octocat <em>user email</em>
AuthorDate: Tue Apr 03 02:02:30 2018 +0900
Commit:     Sally Johnson <em>user email</em>
CommitDate: Tue Apr 10 06:25:08 2018 +0900
```

Si la fecha de autor y de confirmación son diferentes, puedes cambiar de forma manual la fecha de confirmación en la URL para ver los detalles de la confirmación.

Por ejemplo:
- Esta URL utiliza la fecha de autor del `2018-04-03`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-03T00:00:00Z&until=2018-04-03T23:59:59Z`
- Esta URL utiliza la fecha de confirmación del `2018-04-10`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-10T00:00:00Z&until=2018-04-10T23:59:59Z`

Cuando abres la URL con la fecha de confirmación modificada, puedes ver los detalles de la confirmación.

![Detalles de confirmaciones](/assets/images/help/commits/commit-details.png)

### Confirmaciones esperadas faltantes en tu cronología

Si no estás viendo las confirmaciones esperadas en tu cronología, es posible que el historial de confirmaciones de Git se haya rescrito y que la fecha de autor de la confirmación y la fecha de confirmación sean diferentes. Para conocer otras posibilidades, consulta "[¿Por qué mis contribuciones no se muestran en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
