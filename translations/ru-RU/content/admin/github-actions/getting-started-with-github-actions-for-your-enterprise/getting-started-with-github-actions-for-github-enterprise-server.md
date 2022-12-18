---
title: Начало работы с GitHub Actions для сервера GitHub Enterprise
shortTitle: Get started
intro: 'Сведения о включении и настройке {% data variables.product.prodname_actions %} в {% data variables.product.prodname_ghe_server %} впервые.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: a48e562898eb4c82b9027ee56ed52b71e7c5ebc7
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192972'
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о {% data variables.product.prodname_actions %} на {% data variables.product.prodname_ghe_server %}

В этой статье объясняется, как администраторы сайта могут настроить {% data variables.product.prodname_ghe_server %} для использования {% data variables.product.prodname_actions %}.

{% data reusables.actions.ghes-actions-not-enabled-by-default %} Вам нужно будет определить, имеет ли экземпляр достаточно ресурсов ЦП и памяти для обработки нагрузки из {% data variables.product.prodname_actions %} без потери производительности и, возможно, увеличить эти ресурсы. Вам также необходимо решить, какой поставщик хранилища вы будете использовать для хранилища больших двоичных объектов, необходимого для хранения артефактов{% ifversion actions-caching %} и кэшей{% endif %}, созданных в ходе выполнения рабочего процесса. Затем вы можете включить {% data variables.product.prodname_actions %} для вашего предприятия, управлять правами доступа и добавлять локальные средства выполнения для выполнения рабочих процессов.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Проверка требований к оборудованию

{%- ifversion ghes < 3.6 %}

Ресурсы ЦП и памяти, доступные {% data variables.location.product_location %}, определяют количество заданий, которые могут выполняться одновременно без потери производительности. {% data reusables.actions.minimum-hardware %}

Максимальное количество параллельных заданий, выполняемых без потери производительности, зависит от таких факторов, как длительность задания, использование артефактов, количество репозиториев, выполняющих Actions, и объема выполняемых экземпляром других работ, не связанных с Actions. Внутреннее тестирование в GitHub показало следующие целевые показатели производительности для сервера GitHub Enterprise в ряде конфигураций ЦП и памяти:

{% endif %}

{%- ifversion ghes > 3.5 %}

Ресурсы ЦП и памяти, доступные для {% data variables.location.product_location %}, определяют количество средств выполнения, которые можно настроить без потери производительности. {% data reusables.actions.minimum-hardware %}

Максимальное количество подключенных средств выполнения тестов, выполняемых без потери производительности, зависит от таких факторов, как длительность задания, использование артефактов, количество репозиториев, выполняющих Actions, и объема выполняемых экземпляром других работ, не связанных с Actions. Внутреннее тестирование в GitHub показало следующие целевые показатели производительности для сервера GitHub Enterprise в ряде конфигураций ЦП и памяти:

{% endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

Максимальный параллелизм измерялся с использованием нескольких репозиториев, заданий продолжительностью приблизительно 10 минут и отправок артефактов размером 10 МБ. Производительность может отличаться в зависимости от общих уровней активности в экземпляре.

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

Максимальный параллелизм измерялся с использованием нескольких репозиториев, заданий продолжительностью приблизительно 10 минут и отправок артефактов размером 10 МБ. Производительность может отличаться в зависимости от общих уровней активности в экземпляре.

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

{% data variables.product.company_short %} измерил максимальный параллелизм с использованием нескольких репозиториев с продолжительностью задания около 10 минут и передачей артефактов размером 10 МБ. Производительность может отличаться в зависимости от общих уровней активности в экземпляре.

{% note %}

**Примечание**. Начиная с {% data variables.product.prodname_ghe_server %} 3.5, для внутреннего тестирования {% data variables.product.company_short %} используются ЦП 3-го поколения, чтобы лучше отразить типичную конфигурацию пользователя. Это изменение ЦП представляет собой небольшую часть изменений целевых показателей производительности в этой версии {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{%- endif %}

{%- ifversion ghes > 3.5 %}


| Число виртуальных ЦП | Память | Максимальное количество подключенных средств выполнения тестов |
| :---| :--- | :--- |
| 8   | 64 ГБ  | Средств выполнения тестов: 740 |
| 32  | 160 ГБ | Средств выполнения тестов: 2700 |
| 96  | 384 ГБ | Средств выполнения тестов: 7000 |
| 128 | 512 ГБ | Средств выполнения тестов: 7000 |

{% data variables.product.company_short %} измерил максимальное количество подключенных средств выполнения тестов с использованием нескольких репозиториев с продолжительностью задания около 10 минут и передачей артефактов размером 10 МБ. Производительность может отличаться в зависимости от общих уровней активности в экземпляре.

{% note %}

**Примечания.**

- Начиная с {% data variables.product.prodname_ghe_server %} 3.6, {% data variables.product.company_short %} документирует подключенные средства выполнения тестов, а не параллельные задания. Подключенные средства выполнения тестов представляют собой большинство средств выполнения тестов, которые можно подключить и ожидать для использования. Следует также отметить, что подключение большего числа средств выполнения тестов, чем можно ожидать для использования, может негативно повлиять на производительность.

- Начиная с {% data variables.product.prodname_ghe_server %} 3.5, для внутреннего тестирования {% data variables.product.company_short %} используются ЦП 3-го поколения, чтобы лучше отразить типичную конфигурацию пользователя. Это изменение ЦП представляет собой небольшую часть изменений целевых показателей производительности в этой версии {% data variables.product.prodname_ghe_server %}.
{% endnote %} {%- endif %}

Если вы планируете включить {% data variables.product.prodname_actions %} для пользователей существующего экземпляра, проверьте уровни активности пользователей и автоматизаций в экземпляре и убедитесь, что вы подготовили достаточный ресурс ЦП и памяти для пользователей. Дополнительные сведения о мониторинге емкости и производительности {% data variables.product.prodname_ghe_server %} см. в разделе [Мониторинг устройства](/admin/enterprise-management/monitoring-your-appliance).

Дополнительные сведения о минимальных требованиях к оборудованию для {% data variables.location.product_location %} см. в разделе Рекомендации по оборудованию для платформы экземпляра.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

При необходимости можно ограничить потребление ресурсов {% data variables.location.product_location %}, настроив ограничение скорости для {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Настройка ограничений скорости](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions).

{% endif %}

## Требования к внешнему хранилищу

Чтобы включить {% data variables.product.prodname_actions %} в {% data variables.product.prodname_ghe_server %}, необходимо иметь доступ к внешнему хранилищу BLOB-объектов.

{% data reusables.actions.enterprise-storage-contents %} Требуемый объем хранилища зависит от использования {% data variables.product.prodname_actions %}. Поддерживается только одна конфигурация внешнего хранилища, и вы не можете одновременно использовать несколько поставщиков хранилища.

Все остальные данные {% data variables.product.prodname_actions %}, такие как файлы рабочих процессов в структуре файлов репозитория, хранятся в томе хранилища данных для {% data variables.location.product_location %}.

{% data variables.product.prodname_actions %} поддерживает следующие поставщики хранилищ.

* Хранилище BLOB-объектов Azure
* Amazon S3 {%- ifversion actions-ghes-gcp-storage %}
* Google Cloud Storage {%- endif %}
* Кластер MinIO, совместимый с S3

{% note %}

**Примечание.** Это единственные поставщики хранилища, которые поддерживаются {% data variables.product.company_short %}, и по которым оказывается помощь.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

## Рекомендации по работе с сетями

{% data reusables.actions.proxy-considerations %} Дополнительные сведения об использовании прокси-сервера с {% data variables.product.prodname_ghe_server %} см. в разделе [Настройка исходящего веб-прокси-сервера](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server).

{% ifversion ghes %}

## Включение {% data variables.product.prodname_actions %} с вашим поставщиком хранилища

Выполните одну из приведенных ниже процедур, чтобы включить {% data variables.product.prodname_actions %} с выбранным вами поставщиком хранилища.

* [Включение GitHub Actions с хранилищем BLOB-объектов Azure](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)
* [Включение GitHub Actions с помощью хранилища Amazon S3](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage) {%- ifversion actions-ghes-gcp-storage %}
* [Включение GitHub Actions с помощью Google Cloud Storage](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-google-cloud-storage) {%- endif %}
* [Включение GitHub Actions с хранилищем MinIO](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-storage)

## Управление правами доступа для {% data variables.product.prodname_actions %} в вашей организации

Для управления доступом к {% data variables.product.prodname_actions %} вы можете использовать политики. Дополнительные сведения см. в разделе [Применение политик GitHub Actions для вашего предприятия](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise).

## Добавление локальных средств выполнения

{% data reusables.actions.enterprise-github-hosted-runners %}

Для запуска рабочих процессов {% data variables.product.prodname_actions %} необходимо добавить локальные средства выполнения. Вы можете добавлять локальные средства выполнения на уровне предприятия, организации или репозитория. Дополнительные сведения см. в разделе [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).

## Управление действиями, которые можно использовать в предприятии

Вы можете управлять действиями, которые пользователи могут использовать в вашем предприятии. Сюда входит настройка {% data variables.product.prodname_github_connect %} для автоматического доступа к действиям из {% data variables.product.prodname_dotcom_the_website %} или синхронизация действий вручную из {% data variables.product.prodname_dotcom_the_website %}.

Дополнительные сведения см. в разделе [Сведения об использовании действий в организации](/admin/github-actions/about-using-actions-in-your-enterprise).

{% data reusables.actions.general-security-hardening %}

{% endif %}

## Зарезервированные имена

При включении {% data variables.product.prodname_actions %} для предприятия создаются две организации, `github` и `actions`. Если ваше предприятие уже использует имя организации `github`, то вместо него будет использоваться `github-org` (или `github-github-org`, если `github-org` тоже используется). Если ваше предприятие уже использует имя организации `actions`, то вместо него будет использоваться `github-actions` (или `github-actions-org`, если `github-actions` тоже используется). После включения действий вы больше не сможете где-либо использовать эти имена.
