---
title: Настройка кэша репозитория
intro: 'Вы можете настроить кэш репозитория для {% data variables.product.product_name %}, создав новый экземпляр, подключив кэш репозитория к основному экземпляру и настроив репликацию сетей репозитория в кэш репозитория.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
ms.openlocfilehash: 682e169c55ef7ded453934720bf47f8843bc4acc
ms.sourcegitcommit: 1d757a4f3e1947fdd3868208b63041de30c9f60c
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/03/2022
ms.locfileid: '148132382'
---
{% data reusables.enterprise.repository-caching-release-phase %}

## Сведения о конфигурации для кэширования репозитория

{% data reusables.enterprise.repository-caching-config-summary %} Затем можно настроить политики расположения данных, определяющие, какие сети репозитория реплицируются в кэш репозитория.

Кэширование репозитория не поддерживается при кластеризации.

## DNS для кэшей репозитория

Основной экземпляр и кэш репозитория должны иметь разные DNS-имена. Например, если основной экземпляр находится в `github.example.com`, вы можете присвоить кэшу имя `europe-ci.github.example.com` или `github.asia.example.com`.

Чтобы компьютеры CI извлекали данные из кэша репозитория вместо основного экземпляра, можно использовать параметр конфигурации Git `url.<base>.insteadOf`. Дополнительные сведения см. в разделе [`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf) документации. 

Например, глобальный `.gitconfig` для компьютера CI будет включать эти строки.

```
[url "https://europe-ci.github.example.com/"]
    insteadOf = https://github.example.com/
```

Затем, когда ему будет предложено получить `https://github.example.com/myorg/myrepo`, Git вместо этого будет извлекать данные из `https://europe-ci.github.example.com/myorg/myrepo`.

## Настройка кэша репозитория

{% ifversion ghes = 3.3 %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. Чтобы включить кэширование репозитория, выполните следующую команду.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. Настройте новый экземпляр {% data variables.product.prodname_ghe_server %} на нужной платформе. Этот экземпляр будет кэшем репозитория. Дополнительные сведения см. в разделе [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
{% data reusables.enterprise_installation.replica-steps %}
1. Подключитесь к IP-адресу кэша репозитория с помощью SSH.

   ```shell
   $ ssh -p 122 admin@REPLICA-IP
   ```
{%- ifversion ghes = 3.3 %}
1. В реплике кэша включите флаг компонента для кэширования репозитория.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %} {% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Чтобы проверить подключение к основному устройству и включить режим реплики для кэша репозитория, выполните `ghe-repl-setup` еще раз.

   ```shell
   $ ghe-repl-setup PRIMARY-IP
   ```

{% ifversion ghes < 3.6 %}
1. Задайте `cache-location` для кэша репозитория, заменив *CACHE-LOCATION* буквенно-цифровым идентификатором, например регионом, в котором развернут кэш. Также задайте имя центра обработки данных для этого кэша; новые кэши будут пытаться присвоить начальное значение из другого кэша в том же центре обработки данных.

   ```shell
   $ ghe-repl-node --cache CACHE-LOCATION --datacenter REPLICA-DC-NAME
   ```
{% else %}
1. Чтобы настроить кэш репозитория, используйте `ghe-repl-node` команду и включите необходимые параметры.
    - Задайте `cache-location` для кэша репозитория, заменив *CACHE-LOCATION* буквенно-цифровым идентификатором, например регионом, в котором развернут кэш.  Значение *CACHE-LOCATION* не должно быть поддоменов, зарезервированных для использования с изоляцией поддомена, например `assets` или `media`.  Список зарезервированных имен см. в разделе [Включение изоляции поддомена](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation).
    - `cache-domain` Задайте для кэша репозитория, заменив *EXTERNAL-CACHE-DOMAIN* именем узла, которое клиенты Git будут использовать для доступа к кэшу репозитория. Если не указать `cache-domain`, {% data variables.product.product_name %} будет добавлять значение *CACHE-LOCATION* в качестве поддомена к имени узла, настроенного для вашего экземпляра. Дополнительные сведения см. в разделе [Настройка имени узла](/admin/configuration/configuring-network-settings/configuring-a-hostname).
    - Новые кэши будут пытаться заполнить из другого кэша в том же центре обработки данных. `datacenter` Задайте для кэша репозитория, заменив *REPLICA-DC-NAME* именем центра обработки данных, в котором развертывается узел.

    ```shell
    $ ghe-repl-node --cache CACHE-LOCATION --cache-domain EXTERNAL-CACHE-DOMAIN --datacenter REPLICA-DC-NAME
    ```
{% endif %}

{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}
1. Чтобы включить репликацию сетей репозитория в кэш репозитория, задайте политику расположения данных. Дополнительные сведения см. в разделе [Политики расположения данных](#data-location-policies).

## Политики расположения данных

Вы можете управлять расположением данных, настроив политики расположения данных для репозиториев с помощью команды `spokesctl cache-policy`. Политики расположения данных определяют, какие сети репозитория реплицируются в кэши репозитория. По умолчанию сети репозитория не будут реплицироваться в кэши репозитория, пока не будет настроена политика расположения данных.

Политики расположения данных влияют только на содержимое Git. Содержимое в базе данных, например проблемы и комментарии к запросу на вытягивание, будет реплицировано на все узлы независимо от политики.

{% note %}

**Примечание.** Политики расположения данных не совпадают с политиками управления доступом. Необходимо использовать роли репозитория для управления доступом пользователей к репозиторию. Дополнительные сведения о ролях репозитория см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% endnote %} 

Политику можно настроить для репликации всех сетей с флагом `--default`. Например, эта команда создаст политику для репликации одной копии каждой сети репозитория в набор кэшей репозитория, который имеет `cache_location` «kansas».

 ```
 $ ghe-spokesctl cache-policy set --default 1 kansas
 ```

Чтобы настроить репликацию для сети репозитория, укажите репозиторий, который является корневым для сети. Сеть репозитория включает репозиторий и все вилки репозитория. Невозможно реплицировать часть сети без репликации всей сети.

```
$ ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

Вы можете переопределить политику, которая реплицирует все сети и исключить определенные сети, указав для сети число реплик, равное нулю. Например, эта команда указывает, что любой кэш репозитория в расположении «kansas» не может содержать копии этой сети.

```
$ ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

Счетчики реплик со значением больше 1 в заданном расположении кэша не поддерживаются.
