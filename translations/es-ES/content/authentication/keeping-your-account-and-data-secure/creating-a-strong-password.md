---
title: Crear una contraseña segura
intro: 'Asegura tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} con una contraseña única y fuerte utilizando el administrador de contraseñas.'
redirect_from:
  - /articles/what-is-a-strong-password
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a strong password
ms.openlocfilehash: 97473f9b04c8d033471f89cac9a0b0d08bebcba3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145091823'
---
Debes elegir o generar una contraseña para tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} que tenga por lo menos:
- {% ifversion ghes %}7{% else %}8{% endif %} caracteres de longitud si incluye un número y una letra minúscula, o bien
- 15 caracteres de longitud con cualquier combinación de caracteres

Para preservar la seguridad de tu cuenta, te recomendamos que sigas estas buenas prácticas:
- Use un administrador de contraseñas, como [LastPass](https://lastpass.com/) o [1Password](https://1password.com/), para generar una contraseña de al menos 15 caracteres.
- Genera una contraseña que sea única para {% data variables.product.product_name %}. Si utilizas tu contraseña de {% data variables.product.product_name %} en cualquier otro lugar y el servicio se puso en riesgo, entonces los atacantes y actores malintenconados podrían utilizar dicha información para acceder a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

- Configura la autenticación de dos factores para tu cuenta personal. Para más información, vea "[Acerca de la autenticación en dos fases](/articles/about-two-factor-authentication)".
- Nunca compartas tu contraseña con nadie, aunque se trate de un potencial colaborador. Cada persona debe usar su propia cuenta personal en {% data variables.product.product_name %}. Para más información sobre las formas de colaborar, vea: "[Invitación de colaboradores a un repositorio personal](/articles/inviting-collaborators-to-a-personal-repository)", "[Acerca de los modelos de desarrollo colaborativo](/articles/about-collaborative-development-models/)" o "[Colaboración con grupos en organizaciones](/organizations/collaborating-with-groups-in-organizations/)".

{% data reusables.repositories.blocked-passwords %}

Solo puedes utilizar tu contraseña para ingresar en {% data variables.product.product_name %} a través de tu buscador. Cuadno te atutenticas en {% data variables.product.product_name %} con otros medios, tales como la línea de comandos o la API, debes utilizar otras credenciales. Para más información, vea "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)". 

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## Información adicional

- "[Almacenamiento en caché de las credenciales de {% data variables.product.product_name %} en Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
- "[Protección de la cuenta y los datos](/articles/keeping-your-account-and-data-secure/)"
