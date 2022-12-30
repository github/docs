---
title: Переход на внутренние репозитории
intro: 'Вы можете выполнить миграцию во внутренние репозитории, чтобы унифицировать взаимодействие с внутренним источником для разработчиков с помощью {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/migrating-to-internal-repositories
  - /enterprise/admin/user-management/migrating-to-internal-repositories
  - /admin/user-management/migrating-to-internal-repositories
permissions: Site administrators can migrate to internal repositories.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Privacy
  - Repositories
  - Security
shortTitle: Internal repository migration
ms.openlocfilehash: 66a535d8fd2e20cbcc78791588ca2b50ae8ede79
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878769'
---
## Сведения о внутренних репозиториях

Внутренние репозитории доступны в {% data variables.product.prodname_ghe_server %} 2,20+. {% data reusables.repositories.about-internal-repos %} Дополнительные сведения см. в разделе [Сведения о репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

В будущих выпусках {% data variables.product.prodname_ghe_server %} мы настроим видимость репозитория, чтобы термины «общедоступный», «внутренний» и «частный» использовались в одном и том же значении для разработчиков в {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}.

Чтобы подготовиться к этим изменениям, когда у вас включен режим «Частный», можно выполнить миграцию для экземпляра, чтобы преобразовать общедоступные репозитории во внутренние. В настоящее время такая миграция является необязательной, чтобы можно было протестировать изменения в нерабочих экземплярах. Миграция станет обязательной в будущем.

При выполнении миграции все общедоступные репозитории, принадлежащие организациям в вашем экземпляре, будут преобразованы во внутренние репозитории. Если у любого из этих репозиториев есть вилки, эти вилки станут частными. Частные репозитории останутся частными.

Все общедоступные репозитории, принадлежащие учетным записям пользователей в вашем экземпляре, станут частными репозиториями. Если у любого из этих репозиториев есть вилки, эти вилки также станут частными. Владельцу каждой вилки будут предоставлены разрешения на чтение для родительского элемента.

Анонимный доступ на чтение для Git будет отключен для всех общедоступных репозиториев, которые преобразуются во внутренние или частные репозитории.

Если для репозиториев в настоящее время по умолчанию используется настройка видимости «Общедоступный», значение по умолчанию изменится на «Внутренний». Если текущее значение по умолчанию — «Закрытый», оно не изменится. Настройку по умолчанию можно изменить в любой момент. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-the-default-visibility-of-new-repositories-in-your-enterprise).

Политика создания репозитория для экземпляра будет изменена, чтобы отключить общедоступные репозитории и разрешить использовать частные и внутренние репозитории. Политику можно обновить в любое время. Дополнительные сведения см. в разделе [Ограничение создания репозиториев в экземплярах](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance).

Если у вас не включен режим «Частный», сценарий миграции не сработает.

## Запуск миграции

1. Подключение к административной оболочке. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/enterprise/admin/installation/accessing-the-administrative-shell-ssh).
{% ifversion ghes or ghae %}
2. Выполните команду переноса.

   ```shell
   github-env bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w |  tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```

{% else %}
2. Перейдите к каталогу `/data/github/current`.
   ```shell
   cd /data/github/current
   ```
3. Выполните команду переноса.
   ```shell
   sudo bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w | tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```
{% endif %}

Выходные данные журнала будут отображаться в терминале и `/tmp/convert_public_ghes_repos_to_internal.log`.

## Дополнительные материалы

- [Включение частного режима](/enterprise/admin/installation/enabling-private-mode)
