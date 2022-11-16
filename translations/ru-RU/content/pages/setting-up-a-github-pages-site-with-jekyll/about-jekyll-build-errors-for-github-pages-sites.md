---
title: Сведения об ошибках сборки Jekyll для сайтов GitHub Pages
intro: 'Если Jekyll обнаруживает ошибку при создании сайта {% data variables.product.prodname_pages %} локально или на {% data variables.product.product_name %}, вы получите сообщение об ошибке, содержащее дополнительные сведения.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages
  - /articles/generic-jekyll-build-failures
  - /articles/about-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Jekyll build errors for Pages
ms.openlocfilehash: c435d7857239ae4a8b1a09c86e10fe12b248a4b2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648242'
---
## Сведения об ошибках сборки Jekyll

{% ifversion pages-custom-workflow %}Если публикация выполняется из ветви, иногда{% else %}Иногда{% endif %} {% data variables.product.prodname_pages %} не предпринимает попытки создать сайт после отправки изменений в источник публикации сайта.{% ifversion fpt or ghec %}
- Пользователь, отправивший изменения, не проверил свой адрес электронной почты. Дополнительные сведения см. в статье [Проверка адреса электронной почты](/articles/verifying-your-email-address).{% endif %}
- Вы выполняете отправку с помощью ключа развертывания. Если вы хотите автоматизировать отправки в репозиторий сайта, можно вместо этого настроить пользователя компьютера. Дополнительные сведения см. в разделе [Управление ключами развертывания](/developers/overview/managing-deploy-keys#machine-users).
- Вы используете службу CI, которая не настроена для сборки источника публикации. Например, Travis CI не будет создавать ветвь `gh-pages`, если вы не добавите эту ветвь в список безопасных объектов. Дополнительные сведения см. в разделе [Настройка сборки](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches) в документации Travis CI или вашей службы CI.

{% note %}

**Примечание.** Публикация изменений на сайте после передачи изменений в {% data variables.product.product_name %} может занять до 10 минут.

{% endnote %}

{% ifversion build-pages-with-actions %} Если Jekyll при попытке сборки сайта обнаружит ошибку, вы получите сообщение об ошибке сборки.
{% else %} Если Jekyll при попытке сборки сайта обнаружит ошибку, вы получите сообщение об ошибке сборки. Существует два основных типа сообщений об ошибках сборки Jekyll.
- Сообщение "Предупреждение о сборке страницы" означает успешное завершение сборки, но, возможно, необходимо внести изменения, чтобы предотвратить будущие проблемы.
- Сообщение "Сбой сборки страницы" означает, что сборка завершилась неудачно. Если Jekyll может обнаружить причину сбоя, появится описательное сообщение об ошибке.
{% endif %}

Дополнительные сведения об устранении ошибок сборки см. в разделе [Устранение ошибок сборки Jekyll для сайтов {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites).

{% ifversion build-pages-with-actions %}
## Просмотр сообщений об ошибках сборки Jekyll с помощью {% data variables.product.prodname_actions %}

По умолчанию ваш сайт {% data variables.product.prodname_pages %} создается и развертывается с помощью рабочего процесса {% data variables.product.prodname_actions %}, если только вы не настроили сайт {% data variables.product.prodname_pages %} для использования другого средства CI. Чтобы найти потенциальные ошибки сборки, можно проверить выполнение рабочего процесса для сайта {% data variables.product.prodname_pages %}, просмотрев выполнение рабочего процесса репозитория. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".  Дополнительные сведения о повторном запуске рабочего процесса в случае ошибки см. в разделе [Повторное выполнение рабочих процессов и заданий](/actions/managing-workflow-runs/re-running-workflows-and-jobs).
{% endif %}

{% ifversion build-pages-with-actions %}{% else %}
## Просмотр сбоев сборки репозитория в {% data variables.product.product_name %}

Вы можете просматривать сбои сборки (но не предупреждения сборки) для сайта в {% data variables.product.product_name %} на вкладке **Параметры** репозитория сайта.
{% endif %}

## Просмотр сообщений об ошибках сборки Jekyll локально

Рекомендуется тестировать сайт локально, так как это позволяет просматривать сообщения об ошибках сборки в командной строке и устранять все сбои сборки перед отправкой изменений в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Локальное тестирование сайта {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll).

## Просмотр сообщений об ошибках сборки Jekyll в запросе на вытягивание

{% ifversion pages-custom-workflow %}Если публикация выполняется из ветви, при{% else %}При{% endif %} создании запроса на вытягивание для обновления источника публикации на {% data variables.product.product_name %} на вкладке **Проверки** запроса на вытягивание можно просмотреть сообщения об ошибках сборки. Дополнительные сведения см. в разделе [Сведения о проверках состояния](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

{% ifversion pages-custom-workflow %}Если публикация выполняется с помощью пользовательского рабочего процесса {% data variables.product.prodname_actions %}, для просмотра сообщений об ошибках сборки в запросе на вытягивание необходимо настроить запуск рабочего процесса по триггеру `pull_request`. В таком случае рекомендуется пропустить все шаги развертывания, если рабочий процесс был активирован событием `pull_request`. Это позволит просматривать ошибки сборки без развертывания на сайте изменений из запроса на вытягивание. Дополнительные сведения см. в статьях "[События, активирующие рабочие процессы](/actions/using-workflows/events-that-trigger-workflows#pull_request)" и "[Выражения](/actions/learn-github-actions/expressions)".{% endif %}

## Просмотр ошибок сборки Jekyll по электронной почте

{% ifversion pages-custom-workflow %}Если публикация выполняется из ветви, при{% else %}При{% endif %} отправке изменений в источник публикации на {% data variables.product.product_name %} {% data variables.product.prodname_pages %} произведет попытку создать сайт. Если сборка завершится неудачно, вы получите сообщение по основному адресу электронной почты. {% data reusables.pages.build-failure-email-server %}

{% ifversion pages-custom-workflow %}Если публикация выполняется с помощью пользовательского рабочего процесса {% data variables.product.prodname_actions %}, для получения сообщений электронной почты об ошибках сборки в запросе на вытягивание необходимо настроить запуск рабочего процесса по триггеру `pull_request`. В таком случае рекомендуется пропустить все шаги развертывания, если рабочий процесс был активирован событием `pull_request`. Это позволит просматривать ошибки сборки без развертывания на сайте изменений из запроса на вытягивание. Дополнительные сведения см. в статьях "[События, активирующие рабочие процессы](/actions/using-workflows/events-that-trigger-workflows#pull_request)" и "[Выражения](/actions/learn-github-actions/expressions)".{% endif %}

## Просмотр сообщений об ошибках сборки Jekyll в запросе на вытягивание с помощью сторонней службы CI

Вы можете настроить стороннюю службу, такую как [Travis CI](https://travis-ci.org/), для отображения сообщений об ошибках после каждой фиксации.

1. Если вы еще этого не сделали, добавьте в корневую папку источника публикации файл с именем _Gemfile_ и со следующим содержимым:
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. Настройте репозиторий сайта для выбранной службы тестирования. Например, чтобы использовать [Travis CI](https://travis-ci.org/), добавьте в корневую папку источника публикации файл с именем _.travis.yml_ и со следующим содержимым:
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. Возможно, потребуется активировать репозиторий со сторонней службой тестирования. Дополнительные сведения см. в документации по вашей службе тестирования.
