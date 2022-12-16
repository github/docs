---
title: Устранение ошибок Dependabot
intro: 'Иногда {% data variables.product.prodname_dependabot %} не удается создать запрос на вытягивание для обновления зависимостей. Вы можете просмотреть ошибку и разблокировать {% data variables.product.prodname_dependabot %}.'
shortTitle: Troubleshoot errors
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
ms.openlocfilehash: 21b7c2b2e6c613d4443b54404dfc120bd8ac00e2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110147'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения об ошибках {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Если {% data variables.product.prodname_dependabot %} не может вызывать запрос на включение внесенных изменений, это отмечается как ошибка.

## {% data variables.product.prodname_dependabot_security_updates %} — использование для исследования ошибок

Если для {% data variables.product.prodname_dependabot %} блокируется возможность создать запрос на включение внесенных изменений для исправления ошибки в оповещении {% data variables.product.prodname_dependabot %}, этот инструмент публикует сообщение об ошибке в оповещении. В представлении {% data variables.product.prodname_dependabot_alerts %} отображается список всех оповещений, которые еще не разрешены. Чтобы получить доступ к представлению оповещений, щелкните **{% data variables.product.prodname_dependabot_alerts %}** на вкладке **Безопасность** репозитория. Если был создан запрос на включение внесенных изменений, который исправит уязвимую зависимость, оповещение содержит ссылку на этот запрос.

![Представление {% data variables.product.prodname_dependabot_alerts %} со ссылкой на запрос на включение внесенных изменений](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

Существует несколько причин, по которым в оповещении может не быть ссылки на запрос на вытягивание:

1. {% data variables.product.prodname_dependabot_security_updates %} не включены по умолчанию для репозитория;
{% ifversion GH-advisory-db-supports-malware %}
1. Оповещение оповещает о вредоносных программах и об отсутствии защищенной версии пакета.
{% endif %}
1. оповещение относится к косвенной или транзитивной зависимости, которая явно не определена в файле блокировки;
1. {% data variables.product.prodname_dependabot %} не может создать запрос на включение внесенных изменений из-за ошибки.

Если {% data variables.product.prodname_dependabot %} не может создать запрос на включение внесенных изменений из-за ошибки, вы можете просмотреть сведения об ошибке можно, нажав на оповещение.

## {% data variables.product.prodname_dependabot_version_updates %} — использование для исследования ошибок

Если {% data variables.product.prodname_dependabot %} не может создать запрос на включение внесенных изменений для обновления зависимости в экосистеме, этот инструмент публикует значок ошибки в файле манифеста. Файлы манифеста, управляемые {% data variables.product.prodname_dependabot %}, перечислены на вкладке {% data variables.product.prodname_dependabot %}. Чтобы открыть эту вкладку, на вкладке **Аналитика** в репозитории выберите **Схема зависимостей** и перейдите на вкладку **{% data variables.product.prodname_dependabot %}** .

![Представление {% data variables.product.prodname_dependabot %} с ошибкой](/assets/images/help/dependabot/dependabot-tab-view-error.png)

{% ifversion fpt or ghec %}

Чтобы просмотреть файл журнала для любого файла манифеста, щелкните ссылку **Последняя проверка — TIME назад**. При отображении файла журнала для манифеста со значком ошибки (например, Maven на снимке экрана выше), также отображаются все ошибки.

![Ошибка обновления версии и запись журнала для {% data variables.product.prodname_dependabot %} ](/assets/images/help/dependabot/dependabot-version-update-error.png)

{% else %}

Чтобы просмотреть журналы для любого файла манифеста, щелкните ссылку **Последняя проверка — TIME назад** и выберите **Просмотреть журналы**.

![Ошибка обновления версии и запись журнала для {% data variables.product.prodname_dependabot %} ](/assets/images/enterprise/3.3/dependabot/dependabot-version-update-error.png)

{% endif %}

## Общие сведения об ошибках {% data variables.product.prodname_dependabot %}

Запросы на включение внесенных изменений для обновлений безопасности позволяют обновить уязвимую зависимость до минимальной версии, в которой эта уязвимость устранена. Запросы на включение внесенных изменений для обновлений версий, напротив, позволяют обновить зависимость до последней версии, разрешенной в манифесте пакета и файлах конфигурации {% data variables.product.prodname_dependabot %}. Следовательно, некоторые ошибки относятся только к одному типу обновления.

### {% data variables.product.prodname_dependabot %} не удается обновить ЗАВИСИМОСТЬ до версии без уязвимостей

**Только для обновлений системы безопасности.** {% data variables.product.prodname_dependabot %} не может создать запрос на включение внесенных изменений, чтобы обновить уязвимую зависимость до безопасной версии, не нарушив другие зависимости в схеме зависимостей для этого репозитория.

Каждое приложение с зависимостями имеет схему зависимостей, то есть направленный ациклический граф всех версий пакета, от которых приложение зависит напрямую или косвенно. При каждом обновлении какой-либо зависимости целостность этой схемы не должна нарушаться, в противном случае не удастся выполнить сборку приложения. Если в какой-либо экосистеме, например в npm и RubyGems, имеется глубокая и сложная схема зависимостей, зачастую невозможно обновить одну зависимость без обновления всей экосистемы.

Лучший способ избежать этой проблемы — использовать самые последние версии, например, включив обновление версий. Это повышает вероятность того, что уязвимость в одной зависимости может быть устранена простым обновлением, которое не нарушит схему зависимостей. Дополнительные сведения: [Настройка обновлений версии {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).{% ifversion dependabot-security-updates-unlock-transitive-dependencies %}

### {% data variables.product.prodname_dependabot %} пытается обновить зависимости без предупреждения

**Только для обновлений системы безопасности.** {% data variables.product.prodname_dependabot %} обновляет явно определенные уязвимые транзитивные зависимости для всех экосистем. Для npm {% data variables.product.prodname_dependabot %} создаст запрос на вытягивание, который также обновляет родительскую зависимость, если это единственный способ исправить транзитивную.

Например, проект может иметь зависимость от `A` версии `~2.0.0`, которая имеет транзитивную зависимость от `B` версии `~1.0.0`, разрешенной в `1.0.1`.
```
my project
|
--> A (2.0.0) [~2.0.0]
       |
       --> B (1.0.1) [~1.0.0]
```       
Если появилась уязвимость для `B` версий `<2.0.0` и доступно исправление для версии `2.0.0`, то {% data variables.product.prodname_dependabot %} попытается обновить `B`, но это окажется невозможным из-за установленного `A` ограничения, позволяющего использовать только более ранние, уязвимые версии. Чтобы устранить уязвимость, {% data variables.product.prodname_dependabot %} будет проверять наличие обновлений для зависимости `A`, которые позволят использовать исправленную версию `B`. 

{% data variables.product.prodname_dependabot %} автоматически создает запрос на вытягивание, который обновляет как заблокированные родительские, так и дочерние транзитивные зависимости.{% endif %}

### {% data variables.product.prodname_dependabot %} не может выполнить обновление до нужной версии, так как для последней версии уже есть открытый запрос на включение внесенных изменений

**Только для обновлений системы безопасности.** {% data variables.product.prodname_dependabot %} не создаст запрос на включение внесенных изменений, чтобы обновить уязвимую зависимость до безопасной версии, так как уже имеется открытый запрос на включение внесенных изменений для обновления этой зависимости. Эта ошибка возникает при обнаружении уязвимости в одной зависимости, когда уже существует открытый запрос на включение внесенных изменений для обновления этой зависимости до последней версии.

Существует два варианта: просмотрите открытый запрос на включение внесенных изменений и выполните его слияние, когда убедитесь, что это изменение безопасно, или закройте этот запрос и инициируйте новый для обновления безопасности. Дополнительные сведения см. в разделе "[Активация запроса на включение внесенных изменений в {% data variables.product.prodname_dependabot %} вручную](#triggering-a-dependabot-pull-request-manually)".

### Истекло время ожидания для {% data variables.product.prodname_dependabot %} во время обновления

Для оценки необходимого обновления и подготовки запроса на включение внесенных изменений инструменту {% data variables.product.prodname_dependabot %} потребовалось больше времени, чем разрешено. Эта ошибка обычно встречается только для больших репозиториев с множеством файлов манифестов, например npm или проектов yarn monorepo с сотнями файлов *package.json*. Обновления экосистемы Composer также требуют больше времени для оценки и срок ожидания для них может истекать.

Эту ошибку трудно устранить. Если время ожидания для обновления версии истекает, можно указать наиболее важные зависимости, которые нужно обновить, с помощью параметра `allow` или с помощью параметра `ignore` исключить обновление некоторых зависимостей. При обновлении конфигурации {% data variables.product.prodname_dependabot %} сможет просмотреть обновление версии и создать запрос на включение внесенных изменений, когда появится доступное время.

Вы можете снизить вероятность истечения времени ожидания для обновления безопасности истекает, обеспечив постоянно обновление зависимостей, например, включив обновление версий. Дополнительные сведения см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).

### {% data variables.product.prodname_dependabot %} не удается открыть новые запросы на включение внесенных изменений

Существует ограничение на количество открытых запросов на включение внесенных изменений, которые может создавать {% data variables.product.prodname_dependabot %}. По достижении этого лимита новые запросы на включение внесенных изменений не открываются и возникает эта ошибка. Лучший способ устранить ее — проверить некоторые открытые запросы на включение внесенных изменений и выполнить их слияние.

У запросов на включение внесенных изменений, связанных с безопасностью и обновлением версий, разные ограничения, поэтому открытые запросы на включение внесенных изменений для обновления версий не могут блокировать создание запроса на включение внесенных изменений для обновления безопасности. Максимальное число запросов на включение внесенных изменений для обновлений безопасности равно 10. По умолчанию ограничение для обновления версий равно 5, но его можно изменить с помощью параметра `open-pull-requests-limit` в файле конфигурации. Дополнительные сведения см. в разделе [Параметры конфигурации для файла dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit).

Лучший способ устранить эту ошибку — выполнить слияние или закрыть некоторые существующие запросы на включение внесенных изменений и запустить новый запрос на включение внесенных изменений вручную. Дополнительные сведения см. в разделе "[Активация запроса на включение внесенных изменений в {% data variables.product.prodname_dependabot %} вручную](#triggering-a-dependabot-pull-request-manually)".

### {% data variables.product.prodname_dependabot %} не может разрешить зависимости или получить к ним доступ

Если {% data variables.product.prodname_dependabot %} пытается проверить, нужно ли обновить ссылки на зависимости в репозитории, но не может получить доступ к одному или нескольким файлам, на которые указывают ссылки, операция завершится сообщением об ошибке "{% data variables.product.prodname_dependabot %} не может разрешить файлы зависимостей LANGUAGE". Тип ошибки API: `git_dependencies_not_reachable`.

Аналогично, если {% data variables.product.prodname_dependabot %} не может получить доступ к частному реестру пакетов, в котором находится зависимость, возникает одна из следующих ошибок:

*   "Dependabot не может получить доступ к зависимости в частном реестре пакетов"<br>
   (Тип ошибки API: `private_source_not_reachable`)
*   "Dependabot не может пройти проверку подлинности в частном реестре пакетов"<br>
   (Тип ошибки API:`private_source_authentication_failure`)
*   "Время ожидания доступа к частному реестру пакетов для Dependabot истекло"<br>
   (Тип ошибки API:`private_source_timed_out`)
*   "Dependabot не удалось проверить сертификат для частного реестра пакетов"<br>
   (Тип ошибки API:`private_source_certificate_failure`)

Чтобы {% data variables.product.prodname_dependabot %} мог обновить ссылки на зависимости, все эти зависимости должны быть размещены в доступных расположениях. 

**Только обновление версий.** {% data reusables.dependabot.private-dependencies-note %} Кроме того, {% data variables.product.prodname_dependabot %} не поддерживает частные зависимости {% data variables.product.prodname_dotcom %} для всех менеджеров пакетов. Дополнительные сведения см. в разделе [Сведения об обновлениях версий Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems).

## Активация запроса на включение внесенных изменений в {% data variables.product.prodname_dependabot %} вручную

Если разблокировать {% data variables.product.prodname_dependabot %}, можно вручную заново попытаться создать запрос на включение внесенных изменений.

- **Обновления безопасности** — откройте оповещение {% data variables.product.prodname_dependabot %}, в котором показана исправленная ошибка, и нажмите кнопку **Создать обновление безопасности {% data variables.product.prodname_dependabot %}** .
- **Обновления версий** — на вкладке **Аналитика** для репозитория выберите **Схема зависимостей** и перейдите на вкладку **Dependabot**. Нажмите кнопку **Последняя проверка *TIME* назад**, чтобы просмотреть файл журнала, созданный инструментом {% data variables.product.prodname_dependabot %} во время последней проверки обновлений версии. Щелкните ссылку **Проверка обновлений**.

## Дополнительные материалы

- "[Устранение неполадок в схеме зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"
- [Устранение неполадок обнаружения уязвимых зависимостей](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)
