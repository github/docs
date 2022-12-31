---
title: Configurar tu dirección de correo electrónico de confirmación
intro: You can set the email address that is used to author commits on {% data variables.product.product_location %} and on your computer.
redirect_from:
- /articles/keeping-your-email-address-private
- /articles/setting-your-commit-email-address-on-github
- /articles/about-commit-email-addresses
- /articles/git-email-settings
- /articles/setting-your-email-in-git
- /articles/set-your-user-name-email-and-github-token
- /articles/setting-your-commit-email-address-in-git
- /articles/setting-your-commit-email-address
- /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Set commit email address
ms.openlocfilehash: da47c240cc53e18d5f5537f20dd8c1eb2f4127bf
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092264"
---
## <a name="about-commit-email-addresses"></a>Acerca de las dirección de correo electrónico de confirmación

{% data variables.product.prodname_dotcom %} utiliza tu dirección de correo electrónico para confirmaciones para asociar dichas confirmaciones con tu cuenta de {% data variables.product.product_location %}. Puedes elegir la dirección de correo electrónico que se asociará con las confirmaciones que subes desde la línea de comando y las operaciones de Git con base en la web que realizas.

Para las operaciones de Git basadas en web, puedes configurar tu dirección de correo electrónico para confirmaciones en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Para las confirmaciones que subes desde la línea de comando, puedes configurar tu dirección de correo electrónico de confirmaciones en Git.

{% ifversion fpt or ghec %}Cualquier confirmación que haya realizado antes de cambiar la dirección de correo electrónico de confirmación seguirá asociada a la dirección de correo electrónico anterior.{% else %}Después de cambiar la dirección de correo electrónico de confirmación en {% data variables.product.product_name %}, la nueva dirección de correo electrónico será visible de forma predeterminada en todas las operaciones futuras de Git basadas en web. Cualquier confirmación que realices antes de cambiar tu dirección de correo electrónico de confirmaciones estarán todavía asociada a tu dirección de correo electrónico anterior.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Nota**: {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}Si quiere mantener la dirección de correo electrónico personal como privada, puede usar una dirección `no-reply` de {% data variables.product.product_name %} como dirección de correo electrónico de confirmación. A fin de usar la dirección de correo electrónico `noreply` para las confirmaciones insertadas desde la línea de comandos, úsela al configurar la dirección de correo electrónico de confirmación en Git. A fin de usar la dirección `noreply` para las operaciones de Git basadas en web, configure la dirección de correo electrónico de confirmaciones en GitHub y seleccione **Mantener mi dirección de correo electrónico privada**.

También puedes elegir bloquear las confirmaciones que subes desde la línea de comando que muestra tu dirección de correo electrónico personal. Para más información, vea "[Bloqueo de inserciones de línea de comandos que exponen el correo electrónico personal](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)".{% endif %}

Para garantizar que las confirmaciones se le atribuyan y aparezcan en el gráfico de contribuciones, use una dirección de correo electrónico que esté conectada a la cuenta de {% data variables.product.product_location %}{% ifversion fpt or ghec %}, o a la dirección `noreply` que se le ha proporcionado en la configuración de correo electrónico{% endif %}. {% ifversion not ghae %}Para más información, vea "[Adición de una dirección de correo electrónico a la cuenta de {% data variables.product.prodname_dotcom %}](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)".{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Nota:** Si ha creado la cuenta en {% data variables.product.product_location %} _después_ del 18 de julio de 2017, la dirección de correo electrónico `no-reply` de {% data variables.product.product_name %} es un número de identificador de siete dígitos y el nombre de usuario con el formato <code><em>ID+username</em>@users.noreply.github.com</code>. Si ha creado la cuenta en {% data variables.product.product_location %} _antes_ del 18 de julio de 2017, la dirección de correo electrónico `no-reply` de {% data variables.product.product_name %} es <code><em>username</em>@users.noreply.github.com</code>. Puede obtener una dirección de correo electrónico `no-reply` basada en id. para {% data variables.product.product_name %} si selecciona (o anula la selección y vuelve a seleccionar) **Mantener mi dirección de correo electrónico como privada** en la configuración de correo electrónico.

{% endnote %}

Si usa la dirección de correo electrónico `noreply` para {% data variables.product.product_name %} a fin de realizar confirmaciones y, después, [cambia el nombre de usuario](/articles/changing-your-github-username), esas confirmaciones no se asociarán con la cuenta de {% data variables.product.product_location %}. Esto no aplica si usa la dirección `noreply` basada en id. desde {% data variables.product.product_name %}. Para más información, vea "[Cambio del nombre de usuario de {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username)".{% endif %}

## <a name="setting-your-commit-email-address-on--data-variablesproductprodname_dotcom-"></a>Configurar tu dirección de correo electrónico de confirmación en {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %} {% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## <a name="setting-your-commit-email-address-in-git"></a>Configurar tu dirección de correo electrónico de confirmación en Git

Puede usar el comando `git config` para cambiar la dirección de correo electrónico asociada a las confirmaciones de Git. La nueva dirección de correo electrónico que configure será visible en cualquier confirmación futura que inserte en {% data variables.product.product_location %} desde la línea de comandos. Cualquier confirmación que realices antes de cambiar tu dirección de correo electrónico de confirmaciones estarán todavía asociadas a tu dirección de correo electrónico anterior.

### <a name="setting-your-email-address-for-every-repository-on-your-computer"></a>Configurar tu dirección de correo electrónico para cada repositorio en tu computadora

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user-settings.link_email_with_your_account %}

### <a name="setting-your-email-address-for-a-single-repository"></a>Configurar tu dirección de correo electrónico para un repositorio único

{% data variables.product.product_name %} utiliza la dirección de correo electrónico que se configuró en tus ajustes locales de Git para asociar las confirmaciones que se suben desde la línea de comandos con tu cuenta en {% data variables.product.product_location %}.

Puedes cambiar la dirección de correo electrónico asociada a las confirmaciones que realizas en un repositorio único. Esto sobrescribirá tus ajustes globales de configuración de Git en este repositorio específico, pero no afectará a ningún otro repositorio.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambia el directorio de trabajo actual al repositorio local donde deseas configurar la dirección de correo electrónico que asocias con tus confirmaciones de Git.
3. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user-settings.link_email_with_your_account %}
