---
title: Actualizar la atribución del autor de la confirmación con Importador GitHub
intro: 'Durante una importación, puedes hacer coincidir las confirmaciones de tu repositorio con la cuenta de GitHub del autor de la confirmación.'
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Update author GitHub Importer
ms.openlocfilehash: 900f71e966f8f8f00a4645286b52592abf06ac48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135763'
---
El Importador GitHub busca los usuarios de GitHub cuyas direcciones de correo electrónico coincidan con los autores de las confirmaciones del repositorio que estás importando. Luego puedes conectar una confirmación con su autor utilizando su dirección de correo electrónico o el nombre de usuario de GitHub del autor.

## Actualizar autores de la confirmación

1. Después de que haya importado su repositorio, en la página de estado de importación, haga clic en **Match authors** (Hacer coincidir autores).
![Botón Match authors (Hacer coincidir autores)](/assets/images/help/importer/match-authors-button.png)
2. Junto al autor cuya información quiere actualizar, haga clic en **Connect** (Conectar).
![Lista de autores de la confirmación](/assets/images/help/importer/connect-commit-author.png)
3. Escriba la dirección de correo electrónico o el nombre de usuario de GitHub del autor y presione **Enter** (Entrar).

## Atribuir confirmaciones a un usuario de GitHub con una dirección de correo electrónico pública

Si el autor de una confirmación en su repositorio importado tiene una cuenta de GitHub asociada con la dirección de correo electrónico que ha utilizado para figurar como autor de la confirmación y no ha [establecido su dirección de correo electrónico de confirmaciones como privada](/articles/setting-your-commit-email-address), el Importador GitHub hará coincidir la dirección de correo electrónico asociada a la confirmación con la dirección de correo electrónico pública asociada a su cuenta de GitHub, y atribuirá la confirmación a su cuenta de GitHub.

## Atribuir confirmaciones a un usuario de GitHub sin una dirección de correo electrónico pública

Si el autor de una confirmación en su repositorio importado no ha establecido una dirección de correo electrónico pública en su perfil de GitHub ni ha [establecido su dirección de correo electrónico de confirmaciones como privada](/articles/setting-your-commit-email-address), el Importador GitHub no podrá hacer coincidir la dirección de correo electrónico asociada a la confirmación con su cuenta de GitHub.

El autor de la confirmación puede resolver esto estableciendo su dirección de correo electrónico como privada. Después, sus confirmaciones se atribuirán a `<username>@users.noreply.github.com` y las confirmaciones importadas se asociarán a su cuenta de GitHub.

## Atribuir confirmaciones utilizando una dirección de correo electrónico

Si la dirección de correo electrónico del autor no está asociada a su cuenta de GitHub, podrá [agregar la dirección a su cuenta](/articles/adding-an-email-address-to-your-github-account) después de la importación y las confirmaciones se atribuirán correctamente.

Si el autor no tiene una cuenta de GitHub, el Importador GitHub atribuirá sus confirmaciones a la dirección de correo electrónico asociada a las confirmaciones.

## Información adicional

- "[Acerca de GitHub Importer](/articles/about-github-importer)"
- "[Importar un repositorio con el Importador GitHub](/articles/importing-a-repository-with-github-importer)"
- "[Incorporación de una dirección de correo electrónico a su cuenta](/articles/adding-an-email-address-to-your-github-account/)"
- "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)"
