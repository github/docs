---
title: Настройка источника публикации для сайта GitHub Pages
intro: '{% ifversion pages-custom-workflow %}Можно настроить публикацию сайта {% data variables.product.prodname_pages %} при отправке изменений в определенную ветвь, а также для этого можно создать рабочий процесс {% data variables.product.prodname_actions %}.{% else%}Если для сайта {% data variables.product.prodname_pages %} используется источник публикации по умолчанию, сайт будет публиковаться автоматически. Также можно публиковать сайт из другой ветви или папки.{% endif %}'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Configure publishing source
ms.openlocfilehash: d08b5c150da5be18700312237c374059228c563d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529642'
---
## Сведения об источниках публикаций

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## Публикация из ветви

1. Убедитесь, что в вашем репозитории уже содержится ветвь, которую необходимо использовать в качестве источника публикации.
{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% ifversion pages-custom-workflow %}
1. В разделе "Сборка и развертывание" в пункте "Источник" выберите **Развернуть из ветви**.
1. В разделе "Сборка и развертывание" в пункте "Ветвь" откройте раскрывающееся меню **Нет** или **Ветвь** и выберите источник публикации.

   ![Раскрывающееся меню для выбора источника публикации](/assets/images/help/pages/publishing-source-drop-down.png) {% else %}
3. В разделе {% data variables.product.prodname_pages %} используйте раскрывающееся меню **Нет** или **Ветвь** и выберите источник публикации.
  ![Раскрывающееся меню для выбора источника публикации](/assets/images/help/pages/publishing-source-drop-down.png) {% endif %}
4. При необходимости используйте раскрывающееся меню, чтобы выбрать папку для источника публикации.
  ![Раскрывающееся меню для выбора папки для источника публикации](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Выберите команду **Сохранить**.
  ![Кнопка для сохранения изменений в параметрах источника публикации](/assets/images/help/pages/publishing-source-save.png)

### Устранение неполадок при публикации из ветви

{% data reusables.pages.admin-must-push %}

Если вы выберете папку `docs` в любой ветви в качестве источника публикации, а затем удалите папку `/docs` из этой ветви в репозитории, сайт не будет собран и вы получите сообщение об ошибке сборки страницы для отсутствующей папки `/docs`. Дополнительные сведения см. в разделе [Устранение неполадок сборки Jekyll для сайтов {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder).

{% ifversion build-pages-with-actions %}

Сайт {% data variables.product.prodname_pages %} всегда будет развертываться с помощью выполнения рабочего процесса {% data variables.product.prodname_actions %}, даже если вы настроили сайт {% data variables.product.prodname_pages %} для сборки с использованием другого средства CI. Большинство внешних рабочих процессов CI "развертываются" на GitHub Pages, фиксируя выходные данные сборки в ветви `gh-pages` репозитория и обычно включают файл `.nojekyll`. В этом случае рабочий процесс {% data variables.product.prodname_actions %} обнаружит состояние, что ветвь не нуждается в шаге сборки, и выполнит только шаги, необходимые для развертывания сайта на серверах {% data variables.product.prodname_pages %}.

Чтобы найти потенциальные ошибки со сборкой или развертыванием, можно проверить выполнение рабочего процесса для сайта {% data variables.product.prodname_pages %}, просмотрев выполнение рабочего процесса репозитория. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)". Дополнительные сведения о повторном запуске рабочего процесса в случае ошибки см. в разделе [Повторное выполнение рабочих процессов и заданий](/actions/managing-workflow-runs/re-running-workflows-and-jobs).

{% endif %}

{% ifversion pages-custom-workflow %}

## Публикация с помощью пользовательского рабочего процесса {% data variables.product.prodname_actions %}

{% data reusables.pages.pages-custom-workflow-beta %}

Чтобы настроить публикацию сайта с помощью {% data variables.product.prodname_actions %}, выполните следующие действия:

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. В разделе "Сборка и развертывание" в пункте "Источник" выберите **GitHub Actions**.
1. {% data variables.product.product_name %} предложит несколько начальных рабочих процессов. Если у вас уже есть рабочий процесс для публикации сайта, этот шаг можно пропустить. В противном случае выберите один из вариантов, чтобы создать рабочий процесс {% data variables.product.prodname_actions %}. Дополнительные сведения о создании пользовательских рабочих процессов см. в разделе "[Создание пользовательского рабочего процесса {% data variables.product.prodname_actions %} для публикации сайта](#creating-a-custom-github-actions-workflow-to-publish-your-site)".

   {% data variables.product.prodname_pages %} не связывает определенный рабочий процесс с параметрами {% data variables.product.prodname_pages %}. Однако параметры {% data variables.product.prodname_pages %} будут ссылаться на тот запуск рабочего процесса, который выполнял последнее развертывание вашего сайта.

### Создание пользовательского рабочего процесса {% data variables.product.prodname_actions %} для публикации сайта

Дополнительные сведения о {% data variables.product.prodname_actions %} см. в разделе "[Actions](/actions)".

Во время настройки публикации сайта с помощью {% data variables.product.prodname_actions %} {% data variables.product.product_name %} предложит начальные рабочие процессы, подходящие для распространенных сценариев публикации. Обычно рабочий процесс состоит из следующих действий:

1. Активация при каждой отправке в ветвь репозитория по умолчанию или при каждом открытии, повторном открытии и обновлении запроса на вытягивание, нацеленного на ветвь по умолчанию.
1. Извлечение содержимого репозитория с помощью действия [`actions/checkout`](https://github.com/actions/checkout).
1. Создание статических файлов сайта, если это требуется для вашего сайта.
1. Отправка статических файлов в качестве артефакта с помощью действия [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact).
1. Развертывание артефакта с помощью действия [`actions/deploy-pages`](https://github.com/actions/deploy-pages), если рабочий процесс был активирован отправкой в ветвь по умолчанию. Этот шаг пропускается, если рабочий процесс был активирован запросом на вытягивание.

В начальных рабочих процессах используется среда развертывания под названием `github-pages`. Если в вашем репозитории не содержится среда `github-pages`, она будет создана автоматически. Рекомендуется добавить правило защиты среды, чтобы развертывание в ней могла выполнять только ветвь по умолчанию. Дополнительные сведения см. в разделе [Использование сред для развертывания](/actions/deployment/targeting-different-environments/using-environments-for-deployment).

{% note %}

**Примечание.** Файл `CNAME` в репозитории не добавляет и не удаляет личный домен автоматически. Вместо этого личный домен необходимо настроить в параметрах репозитория или с помощью API. Дополнительные сведения см. в разделе "[Управление личным доменом для сайта GitHub Pages](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" и в [справочной документации по API Pages](/rest/pages#update-information-about-a-github-pages-site).

{% endnote %}

### Устранение неполадок при публикации с помощью пользовательского рабочего процесса {% data variables.product.prodname_actions %}

Сведения об устранении неполадок в рабочем процессе {% data variables.product.prodname_actions %} см. в статье "[Сведения о мониторинге и устранении неполадок](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)".

{% endif %}
