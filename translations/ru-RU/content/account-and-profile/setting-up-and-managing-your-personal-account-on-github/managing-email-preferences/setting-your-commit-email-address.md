---
title: Указание адреса электронной почты для фиксаций
intro: 'Вы можете задать адрес электронной почты, используемый для создания фиксаций на {% данных variables.location.product_location %} и на компьютере.'
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
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Set commit email address
ms.openlocfilehash: 19e6fd531888ee8be2bf3085ce444c8c4f07e956
ms.sourcegitcommit: 92d785670e6ecd7858e4fe66087ab17e7b7a1741
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/21/2022
ms.locfileid: '148103034'
---
## Сведения об адресах электронной почты для фиксаций

{% данных variables.product.prodname_dotcom %} использует адрес электронной почты фиксации для связывания фиксаций с вашей учетной записью на {% данных variables.location.product_location %}. Вы можете выбрать адрес электронной почты, который будет связан с фиксациями, отправляемыми из командной строки, а также с веб-операциями GIT.

Для веб-операций Git можно задать адрес электронной почты фиксации на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{%endif %}. Для фиксаций, отправляемых из командной строки, можно задать адрес электронной почты для фиксаций в GIT.

{% ifversion fpt or ghec %}Все фиксации, сделанные до изменения адреса электронной почты для фиксаций, будут по-прежнему связаны с предыдущим адресом.{% else %}После изменения адреса электронной почты для фиксаций на {% data variables.product.product_name %} новый адрес будет по умолчанию отображаться во всех будущих веб-операциях GIT. Все фиксации, сделанные до изменения адреса электронной почты для фиксаций, будут по-прежнему связаны с предыдущим адресом.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Примечание**. {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}Если вы не хотите раскрывать личный адрес электронной почты, то можете использовать для фиксаций адрес электронной почты `noreply` из {% data variables.product.product_name %}. Чтобы использовать адрес электронной почты `noreply` для фиксаций, отправляемых из командной строки, укажите его при настройке адреса электронной почты для фиксаций в GIT. Чтобы использовать адрес `noreply` для веб-операций GIT, укажите адрес электронной почты для фиксаций на GitHub и выберите параметр **Не раскрывать мой адрес электронной почты**.

Вы также можете заблокировать отправляемые из командной строки фиксации, в которых раскрывается ваш личный адрес электронной почты. Дополнительные сведения см. в статье [Блокировка отправок из командной строки, которые раскрывают ваши личные адреса электронной почты](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address).{% endif %}

Чтобы убедиться, что фиксации относятся к вам и отображаются в графе вкладов, используйте адрес электронной почты, подключенный к вашей учетной записи на {% данных variables.location.product_location %}{% ifversion fpt или ghec %}, или `noreply` адрес электронной почты, указанный в параметрах электронной почты{% endif %}. {% ifversion not ghae %}Дополнительные сведения см. в статье [Добавление адреса электронной почты в учетную запись {% data variables.product.prodname_dotcom %}](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account).{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Примечание:** Если вы создали учетную запись для {% данных variables.location.product_location %} _после_ 18 июля 2017 г., ваш `noreply` адрес электронной почты для {% данных variables.product.product_name %} — это идентификатор и имя пользователя в форме <code>ID+USERNAME@users.noreply.github.com</code>. Если вы создали учетную запись для {% данных variables.location.product_location %} _до_ 18 июля 2017 г., ваш `noreply` адрес электронной почты от {% данных variables.product.product_name %} имеет значение <code>USERNAME@users.noreply.github.com</code>. Вы можете получить адрес электронной почты `noreply` на основе идентификатора для {% data variables.product.product_name %}, выбрав (или отменив выбор и снова выбрав) параметр **Не раскрывать мой адрес электронной почты** в параметрах электронной почты.

{% endnote %}

Если вы используете `noreply` свой адрес электронной почты для {% данных variables.product.product_name %} для фиксаций, а затем [измените имя пользователя](/articles/changing-your-github-username), эти фиксации не будут связаны с вашей учетной записью на {% данных variables.location.product_location %}. Это не верно в случае, если вы используете адрес `noreply` на основе идентификатора из {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Изменение имени пользователя {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username).{% endif %}

## Указание адреса электронной почты для фиксаций на {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %} {% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## Указание адреса электронной почты для фиксаций в GIT

С помощью команды `git config` можно изменить адрес электронной почты, связанный с фиксациями GIT. Новый указанный адрес электронной почты будет отображаться в любых будущих фиксациях, которые вы отправляете в {% данных variables.location.product_location %} из командной строки. Все фиксации, сделанные до изменения адреса электронной почты для фиксаций, будут по-прежнему связаны с предыдущим адресом.

### Настройка адреса электронной почты для каждого репозитория на компьютере

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "YOUR_EMAIL"
   ```
3. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user-settings.link_email_with_your_account %}

### Настройка адреса электронной почты для одного репозитория

{% данных variables.product.product_name %} использует адрес электронной почты, заданный в локальной конфигурации Git, для связывания фиксаций, отправленных из командной строки с вашей учетной записью на {% данных variables.location.product_location %}.

Вы можете изменить адрес электронной почты, связанный с фиксациями, выполняемыми в одном репозитории. В результате параметры глобальной конфигурации GIT переопределяются только для этого репозитория, но остальные не затрагиваются.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Измените текущий рабочий каталог на локальный репозиторий, в котором необходимо настроить адрес электронной почты, связанный с фиксациями GIT.
3. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "YOUR_EMAIL"
   ```
4. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user-settings.link_email_with_your_account %}
