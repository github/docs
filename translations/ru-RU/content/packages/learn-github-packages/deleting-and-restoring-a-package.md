---
title: Удаление и восстановление пакета
intro: 'Сведения о том, как удалить или восстановить пакет.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
  ghae: '*'
shortTitle: Delete & restore a package
ms.openlocfilehash: 57f90bb6dbcda759e90444a40c7deef84d907b9c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193076'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Поддержка удаления и восстановления пакетов в {% data variables.product.prodname_dotcom %}

При наличии необходимых прав доступа в {% data variables.product.prodname_dotcom %} вы можете удалять следующие объекты:
- весь частный пакет;
- весь общедоступный пакет, если количество скачиваний любой версии этого пакета не превышает 5000;
- определенную версию частного пакета;
- определенную версию общедоступного пакета, если количество скачиваний этой версии пакета не превышает 5000.

{% note %}

**Примечание**.
- Нельзя удалить общедоступный пакет, если какая-либо версия этого пакета скачивалась более 5000 раз. В этом сценарии обратитесь в [поддержку GitHub](https://support.github.com/contact?tags=docs-packages) для получения дополнительной помощи.
- При удалении общедоступных пакетов следует помнить, что вы можете прервать работу проектов, зависящих от этого пакета.

{% endnote %}

В {% data variables.product.prodname_dotcom %}можно также восстановить весь пакет или какую-либо его версию, если:
- восстановление пакета выполняется в течение 30 дней после его удаления;
- пространство имен пакета по-прежнему доступно и не используется для нового пакета.

## Поддержка API пакетов

{% data reusables.package_registry.packages-classic-pat-only %}

{% ifversion fpt or ghec %}

Для управления пакетами можно использовать REST API. Дополнительные сведения см. в разделе [API {% data variables.product.prodname_registry %}](/rest/reference/packages).

{% endif %}

{% data reusables.package_registry.about-graphql-support %}

## Необходимые разрешения для удаления или восстановления пакета

{% ifversion packages-registries-v2 %} С помощью реестров, поддерживающих детализированные разрешения, можно разрешить ограничить область пакетов пользователем или организацией или связать их с репозиторием.

Чтобы удалить пакет, имеющий детализированные разрешения, отдельные от репозитория, например образы контейнеров, хранящиеся в {% ifversion ghes %}`https://containers.HOSTNAME/OWNER/PACKAGE-NAME`{% else %}`https://ghcr.io/OWNER/PACKAGE-NAME`{% endif %}{% ifversion packages-npm-v2 %} или пакеты, хранящиеся в `https://npm.pkg.github.com/OWNER/PACKAGE-NAME`{% endif %}, необходимо иметь доступ администратора к пакету. Дополнительные сведения см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages).

Пакеты, наследующие права доступа от репозиториев, можно удалять, если у вас есть разрешения администратора для репозитория.

Некоторые реестры поддерживают **только** пакеты с областью действия репозитория. Список этих реестров см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

{% else %}

Вы можете удалить пакет, если у вас есть разрешения администратора для репозитория, в котором он опубликован.

{% endif %}

## Удаление версии пакета

### Удаление версии пакета {% ifversion packages-registries-v2 %}с областью действия репозитория {% endif %}в {% data variables.product.prodname_dotcom %}

Чтобы удалить версию пакета {% ifversion packages-registries-v2 %}с областью действия репозитория {% endif %}, необходимо иметь разрешения администратора для репозитория, которому принадлежит пакет. Дополнительные сведения см. в разделе [Необходимые разрешения](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
5. В левой части окна выберите **Управление версиями**.
5. Справа от версии, которую вы хотите удалить, щелкните значок {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} и выберите **Удалить версию**.
  ![Кнопка удаления версии пакета](/assets/images/help/package-registry/delete-container-package-version.png)
6. Чтобы подтвердить удаление, введите имя пакета и выберите **Я понимаю последствия, удалить эту версию**.
  ![Кнопка подтверждения удаления пакета](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### Удаление версии пакета {% ifversion packages-registries-v2 %}repository-scoped{% endif %} с помощью GraphQL

{% data reusables.package_registry.about-graphql-support %} {% ifversion fpt or ghec %} Сведения об использовании REST API см. в разделе [API {% data variables.product.prodname_registry %}](/rest/reference/packages). {% endif %}

Использование изменения `deletePackageVersion` в API GraphQL. Необходимо использовать {% data variables.product.pat_v1 %} с областями `read:packages`, `delete:packages`и `repo` . Дополнительные сведения о {% data variables.product.pat_v1_plural %} см. в разделе [Сведения о {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages).

В следующем примере показано, как удалить версию пакета с помощью `packageVersionId` `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

Чтобы найти все частные пакеты, опубликованные в {% data variables.product.prodname_registry %}, а также идентификаторы версий для этих пакетов, можно использовать подключение `packages` через объект `repository`. Вам потребуется {% data variables.product.pat_v1 %} с областями `read:packages` и `repo` . Дополнительные сведения см. в описании подключения [`packages`](/graphql/reference/objects#repository) или интерфейса [`PackageOwner`](/graphql/reference/interfaces#packageowner).

Дополнительные сведения о мутации `deletePackageVersion` см. в разделе "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

Вы не можете напрямую удалить весь пакет с помощью GraphQL, но если удалить каждую версию пакета, этот пакет больше не будет отображаться в {% data variables.product.product_name %}.

{% endif %}

{% ifversion fpt or ghec %}
### Удаление версии пакета с областью пользователя в {% data variables.product.prodname_dotcom %}

Чтобы удалить определенную версию пакета с областью пользователя в {% data variables.product.prodname_dotcom %}, например образа Docker в `ghcr.io`, выполните следующие действия. О том, как удалить весь пакет, см. в разделе [Удаление всего пакета с областью пользователя в {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github).

Сведения о том, кто может удалять версию пакета, см. в разделе [Необходимые разрешения](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. В левой части окна выберите **Управление версиями**.
5. Справа от версии, которую вы хотите удалить, щелкните значок {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} и выберите **Удалить версию**.
  ![Кнопка удаления версии пакета](/assets/images/help/package-registry/delete-container-package-version.png)
6. Чтобы подтвердить удаление, введите имя пакета и выберите **Я понимаю последствия, удалить эту версию**.
  ![Кнопка подтверждения удаления пакета](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Удаление версии пакета с областью организации в {% data variables.product.prodname_dotcom %}

Чтобы удалить определенную версию пакета с областью организации в {% data variables.product.prodname_dotcom %}, например образа Docker в `ghcr.io`, выполните следующие действия.
О том, как удалить весь пакет, см. в разделе [Удаление всего пакета с областью организации в {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github).

Сведения о том, кто может удалять версию пакета, см. в разделе [Необходимые разрешения для удаления или восстановления пакета](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. В левой части окна выберите **Управление версиями**.
5. Справа от версии, которую вы хотите удалить, щелкните значок {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} и выберите **Удалить версию**.
  ![Кнопка удаления версии пакета](/assets/images/help/package-registry/delete-container-package-version.png)
6. Чтобы подтвердить удаление, введите имя пакета и выберите **Я понимаю последствия, удалить эту версию**.
  ![Кнопка подтверждения удаления версии пакета](/assets/images/help/package-registry/confirm-container-package-version-deletion.png) {% endif %}

## Удаление всего пакета

### Удаление всего пакета с областью репозитория в {% data variables.product.prodname_dotcom %}

Чтобы удалить весь пакет с областью репозитория, необходимо иметь разрешения администратора для репозитория, которому принадлежит пакет. Дополнительные сведения см. в разделе [Необходимые разрешения](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
4. В разделе "Зона опасности" выберите **Удалить этот пакет**.
5. Чтобы подтвердить удаление, просмотрите текст подтверждения, введите имя пакета и нажмите **Я понимаю, удалить этот пакет**.
  ![Кнопка подтверждения удаления пакета](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec %}
### Удаление всего пакета с областью пользователя в {% data variables.product.prodname_dotcom %}

Сведения о том, кто может удалять пакет, см. в разделе [Необходимые разрешения](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. В левой части выберите пункт **Параметры**.
  ![Пункт меню "Параметры"](/assets/images/help/package-registry/options-for-container-settings.png)
6. В разделе "Зона опасности" выберите **Удалить этот пакет**.
  ![Кнопка удаления версии пакета](/assets/images/help/package-registry/delete-container-package-button.png)
6. Чтобы подтвердить удаление, введите имя пакета и выберите **Я понимаю последствия, удалить этот пакет**.
  ![Кнопка подтверждения удаления версии пакета](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Удаление всего пакета с областью организации в {% data variables.product.prodname_dotcom %}

Сведения о том, кто может удалять пакет, см. в разделе [Необходимые разрешения](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. В левой части выберите пункт **Параметры**.
  ![Пункт меню "Параметры"](/assets/images/help/package-registry/options-for-container-settings.png)
6. В разделе "Зона опасности" выберите **Удалить этот пакет**.
  ![Кнопка удаления пакета](/assets/images/help/package-registry/delete-container-package-button.png)
6. Чтобы подтвердить удаление, введите имя пакета и выберите **Я понимаю последствия, удалить этот пакет**.
  ![Кнопка подтверждения удаления пакета](/assets/images/help/package-registry/confirm-container-package-deletion.png) {% endif %}

## Восстановление пакетов

Удаленный пакет или версию пакета можно восстановить, если:
- восстановление пакета выполняется в течение 30 дней после его удаления;
- пространство имен пакета и версии по-прежнему доступно и не используется для нового пакета.

Например, если у вас есть удаленный пакет RubyGems с именем `octo-package`, область которого была ограничена репозиторием `octo-repo-owner/octo-repo`, вы можете восстановить этот пакет только в том случае, если пространство имен `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` пакета по-прежнему доступно, и 30 дней с момента удаления еще не прошли.

{% ifversion fpt or ghec %} Для восстановления удаленного пакета также необходимо выполнить одно из следующих требований к разрешениям.
  - Для пакетов с областью репозитория: требуются права администратора в репозитории, которому принадлежит удаленный пакет.{% ifversion fpt or ghec %}
  - Для пакетов с областью действия учетной записи пользователя: удаленный пакет должен принадлежать вашей личной учетной записи.
  - Для пакетов в области организации: требуются права администратора на удаленный пакет в организации, которой принадлежит этот пакет.{% endif %} {% endif %}

{% ifversion ghae or ghes %} Для удаления пакета вам также необходимы права администратора в репозитории, которому принадлежит удаленный пакет.
{% endif %}

Дополнительные сведения см. в разделе [Необходимые разрешения](#required-permissions-to-delete-or-restore-a-package).

После восстановления пакета он будет использовать то же пространство имен, что и раньше. Если то же самое пространство имен пакета недоступно, вы не сможете восстановить пакет. В таком случае для восстановления удаленного пакета сначала необходимо удалить новый пакет, использующий пространство имен удаленного пакета.

### Восстановление пакета в организации

 Удаленный пакет можно восстановить с помощью параметров учетной записи организации, если пакет находился в репозитории, принадлежащем этой организации{% ifversion fpt or ghec %}, или имел настроенные разрешения и был ограничен областью учетной записи этой организации{% endif %}.

Сведения о том, кто может восстановить пакет в организации, см. в разделе [Необходимые разрешения](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
3. В левой части окна щелкните **Пакеты**.
4. В разделе "Удаленные пакеты" нажмите кнопку **Восстановить** рядом с пакетом, который требуется восстановить.
  ![Кнопка "Восстановить"](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Чтобы подтвердить, введите имя пакета и выберите **Я понимаю последствия, восстановить этот пакет**.
  ![Кнопка подтверждения восстановления пакета](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### Восстановление пакета с областью учетной записи пользователя

Вы можете восстановить удаленный пакет с помощью параметров вашей личной учетной записи, если пакет был в одном из ваших репозиториев или был ограничен областью вашей личной учетной записи. Дополнительные сведения см. в разделе [Необходимые разрешения](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.user-settings.access_settings %}
2. В левой части окна щелкните **Пакеты**.
4. В разделе "Удаленные пакеты" нажмите кнопку **Восстановить** рядом с пакетом, который требуется восстановить.
  ![Кнопка "Восстановить"](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Чтобы подтвердить, введите имя пакета и выберите **Я понимаю последствия, восстановить этот пакет**.
  ![Кнопка подтверждения восстановления пакета](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### Восстановление версии пакета

Версию пакета можно восстановить на целевой странице пакета. Сведения о том, кто может восстановить пакет, см. в разделе [Необходимые разрешения](#required-permissions-to-delete-or-restore-a-package).

1. Перейдите на целевую страницу пакета.
2. Щелкните **Параметры пакета** справа.
2. В левой части окна выберите **Управление версиями**.
3. В правом верхнем углу щелкните раскрывающееся меню "Версии" и выберите **Удалено**.
  ![Раскрывающееся меню "Версии" с удаленной версией](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. Рядом с удаленной версией пакета, которую требуется восстановить, нажмите кнопку **Восстановить**.
  ![Кнопка восстановления рядом с удаленной версией пакета](/assets/images/help/package-registry/restore-package-version.png)
5. Для подтверждения нажмите **Я понимаю последствия, восстановить эту версию.** 
  ![ Подтверждение восстановления версии пакета](/assets/images/help/package-registry/confirm-package-version-restoration.png)
