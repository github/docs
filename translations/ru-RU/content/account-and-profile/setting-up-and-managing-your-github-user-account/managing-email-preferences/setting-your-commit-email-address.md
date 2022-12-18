---
title: Указание адреса электронной почты для фиксаций
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
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092265"
---
## <a name="about-commit-email-addresses"></a>Сведения об адресах электронной почты для фиксаций

{% data variables.product.prodname_dotcom %} использует адрес электронной почты для фиксаций с целью привязки фиксаций к вашей учетной записи на {% data variables.product.product_location %}. Вы можете выбрать адрес электронной почты, который будет связан с фиксациями, отправляемыми из командной строки, а также с веб-операциями GIT.

Для веб-операций GIT можно задать адрес электронной почты для фиксаций на {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Для фиксаций, отправляемых из командной строки, можно задать адрес электронной почты для фиксаций в GIT.

{% ifversion fpt or ghec %}Все фиксации, сделанные до изменения адреса электронной почты для фиксаций, будут по-прежнему связаны с предыдущим адресом.{% else %}После изменения адреса электронной почты для фиксаций на {% data variables.product.product_name %} новый адрес будет по умолчанию отображаться во всех будущих веб-операциях GIT. Все фиксации, сделанные до изменения адреса электронной почты для фиксаций, будут по-прежнему связаны с предыдущим адресом.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Примечание**. {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}Если вы не хотите раскрывать личный адрес электронной почты, то можете использовать для фиксаций адрес электронной почты `no-reply` из {% data variables.product.product_name %}. Чтобы использовать адрес электронной почты `noreply` для фиксаций, отправляемых из командной строки, укажите его при настройке адреса электронной почты для фиксаций в GIT. Чтобы использовать адрес `noreply` для веб-операций GIT, укажите адрес электронной почты для фиксаций на GitHub и выберите параметр **Не раскрывать мой адрес электронной почты**.

Вы также можете заблокировать отправляемые из командной строки фиксации, в которых раскрывается ваш личный адрес электронной почты. Дополнительные сведения см. в разделе [Блокировка отправок из командной строки, которые раскрывают ваши личные адреса электронной почты](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address).{% endif %}

Чтобы фиксации приписывались вам и отображались в вашем графе вкладов, используйте адрес электронной почты, связанный с вашей учетной записью на {% data variables.product.product_location %}{% ifversion fpt or ghec %}, или адрес электронной почты `noreply`, указанный в ваших параметрах электронной почты{% endif %}. {% ifversion not ghae %}Дополнительные сведения см. в разделе [Добавление адреса электронной почты в учетную запись {% data variables.product.prodname_dotcom %}](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account).{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Примечание**. Если вы создали учетную запись на {% data variables.product.product_location %} _после_ 18 июля 2017 г., адрес электронной почты `no-reply` для {% data variables.product.product_name %} представляет собой идентификационный номер из семи цифр и имя пользователя в формате <code><em>ID+username</em>@users.noreply.github.com</code>. Если вы создали учетную запись на {% data variables.product.product_location %} _до_ 18 июля 2017 г., адрес электронной почты `no-reply` из {% data variables.product.product_name %} имеет формат <code><em>username</em>@users.noreply.github.com</code>. Вы можете получить адрес электронной почты `no-reply` на основе идентификатора для {% data variables.product.product_name %}, выбрав (или отменив выбор и снова выбрав) параметр **Не раскрывать мой адрес электронной почты** в параметрах электронной почты.

{% endnote %}

Если вы используете адрес электронной почты `noreply` для {% data variables.product.product_name %} для выполнения фиксаций, то после [изменения имени пользователя](/articles/changing-your-github-username) эти фиксации перестанут быть связаны с вашей учетной записью на {% data variables.product.product_location %}. Это не верно в случае, если вы используете адрес `noreply` на основе идентификатора из {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Изменение имени пользователя {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username).{% endif %}

## <a name="setting-your-commit-email-address-on--data-variablesproductprodname_dotcom-"></a>Указание адреса электронной почты для фиксаций на {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %} {% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## <a name="setting-your-commit-email-address-in-git"></a>Указание адреса электронной почты для фиксаций в GIT

С помощью команды `git config` можно изменить адрес электронной почты, связанный с фиксациями GIT. Новое адрес электронной почты будет отображаться в любых будущих фиксациях, отправляемых в {% data variables.product.product_location %} из командной строки. Все фиксации, сделанные до изменения адреса электронной почты для фиксаций, будут по-прежнему связаны с предыдущим адресом.

### <a name="setting-your-email-address-for-every-repository-on-your-computer"></a>Настройка адреса электронной почты для каждого репозитория на компьютере

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

### <a name="setting-your-email-address-for-a-single-repository"></a>Настройка адреса электронной почты для одного репозитория

{% data variables.product.product_name %} использует адрес электронной почты, заданный в локальной конфигурации GIT, для привязки фиксаций, отправляемых из командной строки, к вашей учетной записи на {% data variables.product.product_location %}.

Вы можете изменить адрес электронной почты, связанный с фиксациями, выполняемыми в одном репозитории. В результате параметры глобальной конфигурации GIT переопределяются только для этого репозитория, но остальные не затрагиваются.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Измените текущий рабочий каталог на локальный репозиторий, в котором необходимо настроить адрес электронной почты, связанный с фиксациями GIT.
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
