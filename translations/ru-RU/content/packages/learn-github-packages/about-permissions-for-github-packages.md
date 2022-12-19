---
title: Сведения о разрешениях для пакетов GitHub
intro: 'Узнайте о том, как управлять разрешениями для пакетов.'
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About permissions
ms.openlocfilehash: 0159cee64d6faaeffe6257c9dc589f9fcda7a0ba
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193084'
---
{% ifversion packages-registries-v2 %} Разрешения для пакетов могут быть ограничены пользователем, организацией или репозиторием.

## Настроенные разрешения для пакетов с областью пользователя или организации

Пакеты с настроенными разрешениями относятся к личной учетной записи пользователя или организации. Вы можете изменять управление доступом и видимость пакета отдельно от репозитория, к которому он подключен (или связан).

Следующие реестры {% data variables.product.prodname_registry %} поддерживают детализированные разрешения.

- {% data variables.product.prodname_container_registry %} {% ifversion packages-npm-v2 %}- npm registry{% endif %} {% ifversion packages-nuget-v2 %}- реестр NuGet{% endif %}

{% endif %}

## Разрешения для пакетов {% ifversion packages-registries-v2 %}с областью действия репозитория {% endif %}

Пакет {% ifversion packages-registries-v2 %}с областью действия репозитория {% endif %} наследует разрешения и видимость репозитория, которому принадлежит пакет. Чтобы найти пакет с областью репозитория, перейдите на главную страницу репозитория и щелкните ссылку **Пакеты** справа на странице. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Подключение репозитория к пакету](/packages/learn-github-packages/connecting-a-repository-to-a-package).{% endif %}

{% ifversion packages-registries-v2 %} Следующие реестры {% data variables.product.prodname_registry %} поддерживают **только** разрешения на уровне репозитория.

{% ifversion not fpt or ghec %}- Реестр Docker (`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}- Реестр npm{% endif %}
- Реестр RubyGems
- Реестр Apache Maven
- Реестр Gradle {% ifversion packages-nuget-v2 %}{% else %}- реестр NuGet{% endif %}

Для {% ifversion ghes %} {% data variables.product.prodname_container_registry %}{% else %}другие реестры{% endif %} можно разрешить ограничить область пакетов пользователем или организацией или связать с репозиторием. {% ifversion docker-ghcr-enterprise-migration %} Сведения о миграции в {% data variables.product.prodname_container_registry %} см. в разделе [Миграция в {% data variables.product.prodname_container_registry %} из реестра Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry). {% endif %}

{% endif %}

{% ifversion packages-registries-v2 %}
## Видимость и права доступа для образов контейнеров

{% data reusables.package_registry.visibility-and-access-permissions %}

Дополнительные сведения см. в разделе [Настройка управления доступом и видимости пакета](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

{% endif %}

## Сведения об областях и разрешениях для реестров пакетов

{% data reusables.package_registry.packages-classic-pat-only %}

Чтобы использовать пакет, размещенный в реестре пакетов, или управлять им, необходимо использовать {% data variables.product.pat_v1 %} с соответствующей областью, а ваша личная учетная запись должна иметь соответствующие разрешения.

Пример:
-  Чтобы скачать и установить пакеты из репозитория, {% data variables.product.pat_v1 %} должен иметь `read:packages` область, а учетная запись пользователя должна иметь разрешение на чтение.
- {% ifversion fpt or ghes or ghec %} Чтобы удалить пакет в {% data variables.product.product_name %}, {% data variables.product.pat_v1 %} должен иметь по крайней `delete:packages` мере область и `read:packages` . Область `repo` также необходима для пакетов с областью репозитория. Дополнительные сведения см. в разделе [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package). {% elsif ghae %} Чтобы удалить указанную версию пакета в {% data variables.product.product_name %}, {% data variables.product.pat_v1 %} должен иметь `delete:packages` область и `repo` . Дополнительные сведения см. в разделе [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}

| Область | Описание | Требуемое разрешение |
| --- | --- | --- |
|`read:packages`| Скачивание и установка пакетов из {% data variables.product.prodname_registry %} | read |
|`write:packages`| Отправка и публикация пакетов в {% data variables.product.prodname_registry %} | запись |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} Удаление пакетов из {% data variables.product.prodname_registry %} {% elsif ghae %} Удаление конкретных версий пакетов из {% data variables.product.prodname_registry %} {% endif %} | admin |
| `repo` | Отправка и удаление пакетов (вместе с `write:packages` или `delete:packages`) | на чтение или администратора |

При создании рабочего процесса {% data variables.product.prodname_actions %} можно использовать `GITHUB_TOKEN` для публикации и установки пакетов в {% data variables.product.prodname_registry %} без необходимости хранить {% data variables.product.pat_generic %} и управлять им.

Дополнительные сведения см. в следующих разделах:{% ifversion fpt or ghec %}
- [Настройка управления доступом и видимости пакета](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility){% endif %}
- [Публикация и установка пакета с помощью {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)
- ["Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token/)"
- [Доступные области](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)

## Поддержка доступа к пакетам в рабочих процессах {% data variables.product.prodname_actions %}

Чтобы рабочие процессы сохраняли доступ к пакетам, убедитесь, что вы используете правильный маркер доступа в рабочем процессе и включили доступ {% data variables.product.prodname_actions %} к пакету.

Дополнительные концептуальные сведения о {% data variables.product.prodname_actions %} или примеры использования пакетов в рабочих процессах см. в разделе [Управление пакетами GitHub с помощью рабочих процессов GitHub Actions](/packages/managing-github-packages-using-github-actions-workflows).

### Маркеры доступа  

- Для публикации пакетов, связанных с репозиторием рабочих процессов, используйте `GITHUB_TOKEN`.
- Чтобы установить пакеты, связанные с другими частными репозиториями, которые `GITHUB_TOKEN` не могут получить доступ, используйте {% data variables.product.pat_v1 %}

Дополнительные сведения о `GITHUB_TOKEN`, используемом в рабочих процессах {% data variables.product.prodname_actions %}, см. в разделе [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

{% ifversion fpt or ghec %}
### Доступ {% data variables.product.prodname_actions %} для образов контейнера

Чтобы рабочие процессы имели доступ к образу контейнера, необходимо включить доступ {% data variables.product.prodname_actions %} к репозиториям, в которых выполняется рабочий процесс. Этот параметр можно найти на странице параметров пакета. Дополнительные сведения см. в разделе [Обеспечение доступа рабочего процесса к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).

{% endif %}
