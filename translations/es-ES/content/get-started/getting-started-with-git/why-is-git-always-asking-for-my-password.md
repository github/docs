---
title: ¿Por qué Git me pregunta siempre mi contraseña?
intro: 'Si Git te solicita el nombre de usuario y la contraseña cada vez que tratas de interactuar con GitHub, probablemente estás usando la URL del clon HTTPS para tu repositorio.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/getting-started-with-git/why-is-git-always-asking-for-my-password
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git passwords
ms.openlocfilehash: 06a8cf617072075f39a880ec58173e7cfbc5bc8a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135804'
---
Utilizar una URL remota de tipo HTTPS tiene algunas ventajas comparadas con el uso de SSH. Es más fácil de configurar que SSH, y habitualmente trabaja mediante cortafuectos y proxies estrictos. Sin embargo, también te solicita que ingreses tus credenciales de {% data variables.product.product_name %} cada vez que extraes o subes un repositorio. 

{% data reusables.user-settings.password-authentication-deprecation %}

Puede evitar que se le pida la contraseña si configura Git para que [almacene en caché las credenciales](/github/getting-started-with-github/caching-your-github-credentials-in-git) de forma automática. Ya que hayas configurado el almacenamiento de credenciales en caché, Git utilizará to token de acceso personal almacenado en caché automáticamente cada que extraigas o subas información a un repositorio utilizando HTTPS.

## Información adicional

- "[Acerca de los repositorios remotos](/github/getting-started-with-github/about-remote-repositories)".
- "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
- "[Adición de la clave SSH al agente ssh](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)"
