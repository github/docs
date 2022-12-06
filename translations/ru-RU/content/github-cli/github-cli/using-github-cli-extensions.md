---
title: Использование расширений GitHub CLI
intro: 'Узнайте, как использовать пользовательские расширения, написанные другими пользователями {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: bd7a637b98cba071befd4a30ee1e450acdb70c39
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009215'
---
## Сведения о расширениях {% data variables.product.prodname_cli %}

{% note %}

**Примечание.** Расширения за пределами {% data variables.product.product_name %} и {% data variables.product.prodname_cli %} не сертифицированы {% data variables.product.product_name %} и регулируются отдельными условиями предоставления услуг, политикой конфиденциальности и документацией по поддержке. Чтобы снизить риск при использовании сторонних расширений, выполните аудит исходного кода расширения перед установкой или обновлением расширения.

{% endnote %}

{% data reusables.cli.cli-extensions %} Дополнительные сведения о создании расширений {% data variables.product.prodname_cli %} см. в статье [Создание расширений {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions).

Расширения устанавливаются локально и ограничены пользователем. Таким образом, если вы обращаетесь к {% data variables.product.prodname_cli %} с другого компьютера или другой пользователь обращается к {% data variables.product.prodname_cli %} с того же компьютера, расширение будет недоступно.

## Поиск расширений

Расширения можно найти, просмотрев [репозитории с темой `gh-extension`](https://github.com/topics/gh-extension).

## Установка расширений

Чтобы установить расширение, используйте подкоманду `extensions install`. Замените параметр `repo` на репозиторий расширения. Можно использовать полный URL-адрес, например `https://github.com/octocat/gh-whoami`, или только владельца и репозитория, например `octocat/gh-whoami`.

Если используется владелец и репозиторий, `gh`установит расширение с использованием имени узла, к которому `gh` в настоящее время выполняет проверку подлинности. Формат полного URL-адреса полезен при установке расширений с другого узла. Например, пользователи на {% data variables.product.prodname_ghe_server %} должны использовать полный URL-адрес репозитория, чтобы установить расширения с {% data variables.product.prodname_dotcom_the_website %} или любого другого узла.

Чтобы установить расширение в разработке из текущего каталога, используйте `.` в качестве значения для параметра `repo`.

```shell
gh extension install REPO
```

Если у вас уже установлено расширение с тем же именем, команда завершится ошибкой. Например, если вы уже установили `octocat/gh-whoami`, то необходимо его удалить перед установкой `hubot/gh-whoami`.

## Отображение установленных расширений

Чтобы просмотреть все установленные расширения, используйте подкоманду `extensions list`. В выходных данных также будет указано, для каких расширений доступны обновления.

```shell
gh extension list
```

## Обновление расширений

Чтобы обновить расширение, используйте подкоманду `extensions upgrade`. Замените параметр `extension` на имя расширения.

```shell
gh extension upgrade EXTENSION
```

Чтобы обновить все установленные расширения, используйте флаг `--all`.

```shell
gh extension upgrade --all
```

## Удаление расширений

Чтобы удалить расширение, используйте подкоманду `extensions remove`. Замените параметр `extension` на имя расширения.

```shell
gh extension remove EXTENSION
```
