---
title: Работа с реестром RubyGems
intro: 'Вы можете настроить в RubyGems публикацию пакетов в {% data variables.product.prodname_registry %} и использование пакетов, хранящихся в {% data variables.product.prodname_registry %}, в качестве зависимостей в проекте Ruby с использованием Bundler.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: RubyGems registry
ms.openlocfilehash: 514a50358bf8171b3ea8d13b01375306e784e63f
ms.sourcegitcommit: cea091b5171ad05f18b3d35fa063cfea8aea12c4
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/17/2022
ms.locfileid: '148172148'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Предварительные требования

- Необходимо иметь RubyGems 2.4.1 или более поздней версии. Чтобы узнать версию RubyGems, выполните следующую команду:

  ```shell
  $ gem --version
  ```

- Необходимо иметь Bundler 1.6.4 или более поздней версии. Чтобы узнать версию Bundler, выполните следующую команду:

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

## Проверка подлинности в {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Проверка подлинности с помощью {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Для публикации и установки gems можно настроить RubyGems или Bundler для проверки подлинности в {% data variables.product.prodname_registry %} с помощью {% data variables.product.pat_generic %}.

Чтобы опубликовать новые драгоценные камни, необходимо пройти проверку подлинности в {% data variables.product.prodname_registry %} с помощью RubyGems, изменив файл *~/.gem/credentials* , чтобы включить {% data variables.product.pat_v1 %}. Создайте файл *~/.gem/credentials*, если его не существует.

Например, вы создадите или измените *~/.gem/credentials* , включив следующее, заменив *TOKEN* своим {% data variables.product.pat_generic %}.

```shell
---
:github: Bearer TOKEN
```

Чтобы установить gems, необходимо пройти проверку подлинности в {% data variables.product.prodname_registry %}, обновив источники gem, включив в них `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. Необходимо заменить:
  - `USERNAME` на имя пользователя {% data variables.product.prodname_dotcom %};
  - `TOKEN` с {% data variables.product.pat_v1 %}.
  - `OWNER` на имя учетной записи организации пользователя, которая владеет репозиторием, содержащим ваш проект.{% ifversion ghes %};
  - `REGISTRY-URL` на URL-адрес реестра RubyGems вашего экземпляра. Если в вашем экземпляре включена изоляция поддоменов, используйте `rubygems.HOSTNAME`. Если в вашем экземпляре отключена изоляция поддоменов, используйте `HOSTNAME/_registry/rubygems`. В любом случае замените *HOSTNAME* на имя узла экземпляра {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %}
  - `REGISTRY-URL` на URL-адрес реестра RubyGems вашего экземпляра, `rubygems.HOSTNAME`. Замените *HOSTNAME* именем узла {% data variables.location.product_location %}.
{% endif %}

Если вы хотите, чтобы пакет был доступен глобально, можно выполнить следующую команду, чтобы добавить реестр в качестве источника.
```shell
gem sources --add https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
```

Чтобы пройти проверку подлинности с помощью Bundler, настройте средство bundler для использования {% data variables.product.pat_v1 %}, заменив *USERNAME* именем пользователя {% data variables.product.prodname_dotcom %}, *TOKEN* — {% data variables.product.pat_generic %}, а *OWNER* — именем учетной записи пользователя или организации, которая владеет репозиторием, содержащим проект. {% ifversion ghes %} Замените `REGISTRY-URL` URL-адресом реестра RubyGems экземпляра. Если в вашем экземпляре включена изоляция поддоменов, используйте `rubygems.HOSTNAME`. Если в вашем экземпляре отключена изоляция поддоменов, используйте `HOSTNAME/_registry/rubygems`. В любом случае замените *HOSTNAME* именем узла экземпляра {% data variables.product.prodname_ghe_server %}.{% elsif ghae %}Замените `REGISTRY-URL` на URL-адрес реестра RubyGems вашего экземпляра, `rubygems.HOSTNAME`. Замените *HOSTNAME* именем узла {% data variables.location.product_location %}. {% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER USERNAME:TOKEN
```

## Публикация пакета

{% data reusables.package_registry.default-name %} Например, при публикации `<GEM NAME>` в организацию `octo-org` {% data variables.product.prodname_registry %} публикует gem-пакет в репозитории `octo-org/<GEM NAME>`. Дополнительные сведения о создании gem-пакетов см. в разделе [Создание собственного gem-пакета](http://guides.rubygems.org/make-your-own-gem/) в документации по RubyGems.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Создайте пакет из *gemspec*, чтобы создать пакет *GEM*.
  ```
  gem build <GEM NAME>.gemspec
  ```
3. Опубликуйте пакет в {% data variables.product.prodname_registry %}, заменив `OWNER` на имя учетной записи пользователя или организации, которая владеет репозиторием, содержащим проект, а `<GEM NAME>` — на имя gem-пакета.{% ifversion ghes %} Замените `REGISTRY-URL` на URL-адрес реестра RubyGems вашего экземпляра. Если в вашем экземпляре включена изоляция поддоменов, используйте `rubygems.HOSTNAME`. Если в вашем экземпляре отключена изоляция поддоменов, используйте `HOSTNAME/_registry/rubygems`. В любом случае замените *HOSTNAME* именем узла экземпляра {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Замените `REGISTRY-URL` на URL-адрес реестра RubyGems вашего экземпляра, `rubygems.HOSTNAME`. Замените *HOSTNAME* именем узла {% data variables.location.product_location %}. {% endif %}

  ```
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER \
  <GEM NAME>-0.0.1.gem
  ```

## Публикация нескольких пакетов в одном репозитории

Чтобы опубликовать несколько gem-пакетов в одном репозитории, можно включить URL-адрес репозитория {% data variables.product.prodname_dotcom %} в поле `github_repo` файла `gem.metadata`. Если включить это поле, {% data variables.product.prodname_dotcom %} сопоставляет репозиторий на основе этого значения, а не использует имя gem. {% ifversion ghes or ghae %} Замените *HOSTNAME* именем узла {% data variables.location.product_location %}. {% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Установка пакета

Можно использовать gem-пакеты из {% data variables.product.prodname_registry %} так же, как вы используете gem-пакеты из *rubygems.org*. Необходимо пройти проверку подлинности в {% data variables.product.prodname_registry %} путем добавления пользователя или организации {% data variables.product.prodname_dotcom %} в качестве источника в файле *~/.gemrc* или с помощью Bundler и редактирования файла *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. Для Bundler добавьте пользователя или организацию {% data variables.product.prodname_dotcom %} в качестве источника в файл *Gemfile*, чтобы получать gem-пакеты из этого нового источника. Например, можно добавить новый блок `source` в файл *Gemfile*, который использует {% data variables.product.prodname_registry %} только для указанных пакетов, заменив *GEM NAME* пакетом, который требуется устанавливать из {% data variables.product.prodname_registry %}, а *OWNER* — пользователем или организацией, которая владеет репозиторием, содержащим gem-пакет, который требуется установить.{% ifversion ghes %} Замените `REGISTRY-URL` на URL-адрес реестра RubyGems вашего экземпляра. Если в вашем экземпляре включена изоляция поддоменов, используйте `rubygems.HOSTNAME`. Если в вашем экземпляре отключена изоляция поддоменов, используйте `HOSTNAME/_registry/rubygems`. В любом случае замените *HOSTNAME* именем узла экземпляра {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Замените `REGISTRY-URL` на URL-адрес реестра RubyGems вашего экземпляра, `rubygems.HOSTNAME`. Замените *HOSTNAME* именем узла {% data variables.location.product_location %}. {% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. Для версий Bundler, ниже 1.7.0, необходимо добавить новый глобальный `source`. Дополнительные сведения об использовании Bundler см. в [документации bundler.io](https://bundler.io/gemfile.html).

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Установите пакет:
  ```
  $ gem install <GEM NAME> --version "0.1.1"
  ```

## Дополнительные материалы

- "[Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package)"

