---
title: Eliminación de la cuenta personal
intro: Puedes eliminar tu cuenta personal de {% data variables.product.product_name %} en cualquier momento.
redirect_from:
- /articles/deleting-a-user-account
- /articles/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Delete your personal account
ms.openlocfilehash: 4c02698cbe312d3f13553e49dd324fde4f3ad7bb
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145165261"
---
Al eliminar tu cuenta personal se eliminan todos los repositorios, bifurcaciones de repositorios privados, wikis, incidencias, solicitudes de incorporación de cambios y páginas que sean propiedad de tu cuenta. {% ifversion fpt or ghec %} No se eliminarán las incidencias ni las solicitudes de incorporación de cambios que haya creado, ni los comentarios que haya hecho en repositorios que sean propiedad de otros usuarios. En lugar de eliminarlos, se los asociará con nuestro [Usuario fantasma](https://github.com/ghost).{% else %}No se eliminarán las incidencias ni las solicitudes de incorporación de cambios que haya creado, ni los comentarios que haya hecho en repositorios que sean propiedad de otros usuarios.{% endif %}

{% ifversion fpt or ghec %} Dejaremos de cobrarte cuando borras tu cuenta. La dirección asociada con la cuenta se hace disponible para utilizarse con una cuenta diferente en {% data variables.product.product_location %}. Después de 90 días, el nombre de cuenta también pone disponible para que cualquiera con una cuenta nueva lo utilice. {% endif %}

Si eres el único propietario de una organización, debes transferir la propiedad a otra persona o eliminar la organización primero para que puedas eliminar tu cuenta personal. Si hay otros propietarios de la organización, debes eliminarte de la organización primero para que puedas eliminar tu cuenta personal.

Para más información, consulte:
- "[Transferencia de la propiedad de la organización](/articles/transferring-organization-ownership)"
- "[Eliminación de una cuenta de organización](/articles/deleting-an-organization-account)"
- "[Eliminarse a sí mismo de una organización](/articles/removing-yourself-from-an-organization/)"

## <a name="back-up-your-account-data"></a>Copias de seguridad de los datos de tu cuenta

Antes de eliminar tu cuenta personal, haz una copia de todos los repositorios, bifurcaciones privadas, wikis, incidencias y solicitudes de incorporación de cambios que sean propiedad de tu cuenta.

{% warning %}

**Advertencia**: Una vez que tu cuenta personal se ha eliminado, GitHub no puede restaurar su contenido.

{% endwarning %}

## <a name="delete-your-personal-account"></a>Eliminación de la cuenta personal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. En la parte inferior de la página de configuración de la cuenta, en "Delete account" (Eliminar cuenta), haga clic en **Delete your account** (Eliminar su cuenta). Antes de poder eliminar la cuenta personal:
    - Si eres el único propietario de la organización, debes transferir la propiedad a otra persona o eliminar tu organización.
    - Si hay otros propietarios de la organización dentro de la organización, debes eliminarte de la organización.
   ![Botón para la eliminación de la cuenta](/assets/images/help/settings/settings-account-delete.png)
4. En el cuadro de diálogo "Make sure you want to do this" (Asegúrese de que quiere hacer esto), complete los pasos para confirmar que entiende lo que sucede cuando se elimina la cuenta: ![Cuadro de diálogo de confirmación para eliminar la cuenta](/assets/images/help/settings/settings-account-deleteconfirm.png) {% ifversion fpt or ghec %}- Recuerde que todos los repositorios, bifurcaciones de repositorios privados, wikis, problemas, solicitudes de incorporación de cambios y sitios de {% data variables.product.prodname_pages %} que pertenecen a su cuenta se eliminarán y la facturación finalizará inmediatamente. Además, su nombre de usuario estará disponible para cualquier persona para su uso en {% data variables.product.product_name %} pasados 90 días.
  {% else %}-Recuerda que se eliminarán todos los repositorios, bifurcaciones de repositorios privados, wikis, propuestas, solicitudes de extracción y páginas que sean propiedad de tu cuenta, y tu nombre de usuario pasará a estar disponible para que cualquier otra persona lo use en {% data variables.product.product_name %}.
  {% endif %}- En el primer campo, escribe tu nombre de usuario de {% data variables.product.product_name %} o tu correo electrónico.
    - En el segundo campo, escribe la frase que se indica.
