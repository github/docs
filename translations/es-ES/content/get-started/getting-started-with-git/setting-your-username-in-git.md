---
title: Configurar tu nombre de usuario en Git
intro: 'Git utiliza un nombre de usuario para asociar las confirmaciones con una identidad. El nombre de usuario de Git no es tu mismo nombre de usuario de {% data variables.product.product_name %}.'
redirect_from:
  - /articles/setting-your-username-in-git
  - /github/using-git/setting-your-username-in-git
  - /github/getting-started-with-github/setting-your-username-in-git
  - /github/getting-started-with-github/getting-started-with-git/setting-your-username-in-git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Set your username
ms.openlocfilehash: c713f21fdf91269764dd97f15770e7996bf9f4f0
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135817'
---
## Acerca de los nombres de usuario de Git
Puede cambiar el nombre asociado a las confirmaciones de Git mediante el comando `git config`. El nuevo nombre que configures será visible en cualquier confirmación futura que subas a {% data variables.product.product_name %} desde la línea de comando. Si deseas mantener tu nombre real privado, puedes utilizar cualquier texto como nombre de usuario de Git.

El cambio del nombre asociado a las confirmaciones de Git con `git config` solo afectará a las confirmaciones futuras y no cambiará el nombre que se usa en las anteriores.

## Establecimiento del nombre de usuario de Git para *todos* los repositorios del equipo

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

## Configurar tu nombre de usuario de Git para un repositorio único

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Cambia el directorio de trabajo actual al repositorio local donde deseas configurar el nombre que está asociado con tus confirmaciones de Git.

3. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
   ```

## Información adicional

- "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)"
- ["Configuración de Git" en el libro _Git de Pro_](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
