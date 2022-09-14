---
title: ¿Por qué mis confirmaciones están vinculadas al usuario incorrecto?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} usa la dirección de correo electrónico en el encabezado de la confirmación para vincular la confirmación con un usuario de GitHub. Si tus confirmaciones se están vinculando con otro usuario, o no se están vinculando con ningún usuario, es posible que necesites cambiar tus parámetros de configuración de Git local{% ifversion not ghae %}, agregar una dirección de correo electrónico a las configuraciones de tu cuenta de correo electrónico, o ambos{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Linked to wrong user
ms.openlocfilehash: 80a871c85aca151f06ca04d1d48d016bd14ed47f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883039'
---
{% tip %}

**Nota**: Si las confirmaciones se vinculan a otro usuario, no significa que el usuario pueda acceder al repositorio. Un usuario solo puede acceder a un repositorio de tu propiedad si lo agregas como colaborador o lo agregas a un equipo que tiene acceso al repositorio.

{% endtip %}

## Las confirmaciones se vinculan con otro usuario

Si tus confirmaciones están vinculadas a otro usuario, eso significa que la dirección de correo electrónico en tus ajustes de configuración locales de git están conectados a esa cuenta de usuario en {% data variables.product.product_name %}. En este caso, puede cambiar el correo electrónico en los valores de la configuración local de Git{% ifversion ghae %} por la dirección asociada a la cuenta en {% data variables.product.product_name %} para vincular las confirmaciones futuras. Las confirmaciones antiguas no se vincularán. Para más información, vea "[Configuración de la dirección de correo electrónico de confirmación](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)".{% else %} y agregue la nueva dirección de correo electrónico a la cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para vincular las confirmaciones futuras a la cuenta.

1. Para cambiar la dirección de correo electrónico en la configuración local de Git, siga los pasos descritos en "[Configuración de la dirección de correo electrónico de confirmación](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". Si trabajas en máquinas múltiples, necesitarás cambiar esta configuración en cada una de ellas.
2. Agregue la dirección de correo electrónico del paso 2 a la configuración de la cuenta mediante los pasos descritos en "[Adición de una dirección de correo electrónico a la cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account)".{% endif %}

Las confirmaciones que haces desde este punto en adelante se vincularán con tu cuenta.

## Las confirmaciones no se vinculan con ningún usuario

Si tus confirmaciones de cambios no se vinculan con ningún usuario, el nombre del autor de las mismas no se mostrará como un enlace a un perfil de usuario.

Para revisar la dirección de correo electrónico que se usó para esas confirmaciones y conectar las confirmaciones con tu cuenta, sigue los siguientes pasos:

1. Desplázate hasta la confirmación haciendo clic en el enlace del mensaje de confirmación.
![Vínculo del mensaje de confirmación](/assets/images/help/commits/commit-msg-link.png)
2. Para leer un mensaje sobre porqué la confirmación no se ha vinculado, desplace el mouse sobre el signo {% octicon "question" aria-label="Question mark" %} de color azul a la derecha del nombre de usuario.
![Mensaje sobre la confirmación](/assets/images/help/commits/commit-hover-msg.png)

  - **Autor desconocido (con una dirección de correo electrónico)** Si ve este mensaje con una dirección de correo electrónico, la dirección que ha usado para crear la confirmación no está conectada a la cuenta de {% data variables.product.product_name %}. {% ifversion not ghae %}Para vincular las confirmaciones, [agrega la dirección de correo electrónico a la configuración de correo electrónico de GitHub](/articles/adding-an-email-address-to-your-github-account).{% endif %}{% ifversion not ghae %} Si la dirección de correo electrónico tiene un Gravatar asociado, el Gravatar se mostrará junto a la confirmación, en lugar del Octocat de color gris predeterminado.{% endif %}
  - **Autor desconocido (sin dirección de correo electrónico)** Si ve este mensaje sin una dirección de correo electrónico, ha usado una dirección de correo electrónico genérica que no se puede conectar a la cuenta de {% data variables.product.product_name %}.{% ifversion not ghae %} Tendrá que [establecer la dirección de correo electrónico de confirmación en Git](/articles/setting-your-commit-email-address) y, después, [agregar la nueva dirección a la configuración de correo electrónico de GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular las confirmaciones futuras. No se vincularán las confirmaciones antiguas.{% endif %}
  - **Correo electrónico no válido** La dirección de correo electrónico de la configuración local de Git está en blanco o no tiene el formato de una dirección de correo electrónico.{% ifversion not ghae %} Tendrá que [establecer la dirección de correo electrónico de confirmación en Git](/articles/setting-your-commit-email-address) y, después, [agregar la nueva dirección a la configuración de correo electrónico de GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular las confirmaciones futuras. No se vincularán las confirmaciones antiguas.{% endif %}

{% ifversion ghae %} Puede cambiar el correo electrónico en la configuración local de Git por la dirección asociada a la cuenta para vincular las confirmaciones futuras. Las confirmaciones antiguas no se vincularán. Para más información, vea "[Configuración de la dirección de correo electrónico de confirmación](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)".
{% endif %}

{% warning %}

Si tu configuración de Git local contiene una dirección de correo electrónico general, o una dirección de correo electrónico que ya se adjuntó a la cuenta de otro usuario, entonces tus confirmaciones anteriores no se vincularán a tu cuenta. Si bien Git te permite cambiar la dirección de correo electrónico que usaste para confirmaciones anteriores, desaconsejamos esto totalmente, en especial en un repositorio compartido.

{% endwarning %}

## Información adicional

* "[Búsqueda de confirmaciones](/search-github/searching-on-github/searching-commits)"
