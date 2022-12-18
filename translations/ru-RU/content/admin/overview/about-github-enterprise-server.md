---
title: О сервере GitHub Enterprise
intro: "{% data variables.product.product_name %}\_— это платформа разработки программного обеспечения, которую можно разместить в частной среде."
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 4bad34abbe05947ad5528e1ff3edf706872801c7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097852'
---
## Сведения о {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} Ваша команда может использовать {% data variables.product.product_name %} для создания и доставки программного обеспечения с помощью системы управления версиями Git, мощных API, средств повышения производительности и совместной работы, а также интеграции. Разработчики, знакомые с {% data variables.product.prodname_dotcom_the_website %}, могут легко подключить и использовать знакомые функции и рабочие процессы. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data reusables.enterprise.github-distributes-ghes %} Дополнительные сведения см. в разделе [Обзор системы](/admin/overview/system-overview).

Вы можете развернуть {% data variables.product.product_name %} в локальной среде или в поддерживаемой облачной среде.

## Поддерживаемые среды для развертывания

Вы можете развернуть {% data variables.product.product_name %} в гипервизоре виртуализации в локальном центре обработки данных или в общедоступной облачной службе.

{% data variables.product.company_short %} поддерживает следующие гипервизоры виртуализации для локального развертывания.

- Microsoft Hyper-V
- OpenStack KVM
- VMware ESXi

{% data variables.product.company_short %} поддерживает следующие службы для облачного развертывания.

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

Дополнительные сведения см. в разделе [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance).

## Сведения о выпусках и обновлениях

{% data reusables.enterprise.constantly-improving %} Вы несете ответственность за обновление экземпляра. Дополнительные сведения см. в разделе [Выпуски {% data variables.product.product_name %}](/admin/all-releases).

## Сведения об администрировании

Вы можете настроить и отслеживать {% data variables.product.product_name %} с помощью браузера, административного доступа по протоколу SSH и REST API или API GraphQL. По данным {% data variables.product.company_short %}, пользователи с опытом администрирования Linux более успешны при развертывании и обслуживании {% data variables.product.product_name %}.

Вы можете предоставить определенным сотрудникам административный доступ к {% data variables.product.product_name %}, чтобы они могли настроить внешнюю проверку подлинности, настроить экземпляр в соответствии с потребностями разработчика и отслеживать активность и производительность экземпляра. Чтобы обеспечить соответствие бизнес-правилам или нормативным ограничениям, администраторы могут настроить политики, управляющие тем, как пользователи используют {% данных variables.location.product_location %}. Дополнительные сведения см. в следующих руководствах.

- [Сведения о проверке подлинности для вашей организации](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)
- [Настройка предприятия](/admin/configuration/configuring-your-enterprise)
- [Сведения об API {% data variables.product.prodname_enterprise %}](/admin/overview/about-the-github-enterprise-api)
- [Мониторинг устройства](/admin/enterprise-management/monitoring-your-appliance)
- [Мониторинг активности на предприятии](/admin/monitoring-activity-in-your-enterprise)
- [Сведения о корпоративных политиках](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)

## Сведения о дополнительных функциях

Вы можете настроить дополнительные функции для {% data variables.product.product_name %}, которые улучшают жизненный цикл разработки программного обеспечения для вашего предприятия.

| Компонент | Описание | Дополнительные сведения |
| :- | :- | :- |
| {% data variables.product.prodname_actions %} | Автоматизация рабочих процессов CI/CD и разработки | [Сведения о {% data variables.product.prodname_actions %} для предприятий](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) |
| {% data variables.product.prodname_github_connect %} | Ограниченные преимущества {% data variables.product.prodname_dotcom_the_website %} | [Сведения о {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) |
| {% data variables.product.prodname_GH_advanced_security %} | Повышение безопасности и качества кода | [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) |
| {% data variables.product.prodname_registry %} | Размещение пакетов программного обеспечения для предприятия | [Введение в {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages) |

## О топологиях развертывания

По умолчанию {% data variables.product.product_name %} выполняется как автономный экземпляр. Вы можете повысить надежность и производительность {% data variables.product.product_name %}, используя другую топологию для развертывания.

- Чтобы смягчить последствия сбоев системы или сети, можно развернуть пассивный экземпляр реплики. Во время сбоя, влияющего на основной экземпляр, можно вручную выполнить отработку отказа в экземпляр реплики. Дополнительные сведения см. в разделе [сведения о настройке высокого уровня доступности](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration).
- Вы можете настроить несколько активных реплик для повышения производительности для разработчиков, географически удаленных от основного экземпляра. Дополнительные сведения см. в статье "[Сведения о георепликации](/admin/enterprise-management/configuring-high-availability/about-geo-replication)".
- Некоторые предприятия с десятками тысяч разработчиков могут использовать конфигурацию кластера, которая масштабируется горизонтально, а не вертикально. Дополнительные сведения см. в разделе [Сведения о кластеризации](/admin/enterprise-management/configuring-clustering/about-clustering).

## Резервное копирование и аварийное восстановление

Для защиты от потери данных или сбоев служб для разработчиков {% data variables.product.company_short %}настоятельно рекомендует создать план аварийного восстановления. Вы можете создать резервную копию конфигурации и пользовательских данных экземпляра, развернув и настроив хост-систему Linux или Unix с помощью {% data variables.product.prodname_enterprise_backup_utilities %}. Дополнительные сведения см. в статье "[Настройка резервных копий на устройстве](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

Кроме того, можно настроить пассивный экземпляр реплики для отработки отказа в случае сбоя системы или сети. Дополнительные сведения см. в разделе [Сведения о топологиях развертывания](#about-deployment-topologies).

## О документации

Документация для администраторов и пользователей {% data variables.product.product_name %} доступна на этом сайте: {% data variables.product.prodname_docs %}. 

- [Документация администратора предприятия](/admin)
- [Документация для пользователей](/)

Различные версии {% data variables.product.product_name %} отдельно описаны в документации по {% data variables.product.prodname_docs %}. Дополнительные сведения см. в разделе [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

## Попробуйте {% data variables.product.product_name %}

Вы можете зарегистрироваться для получения бесплатной 45-дневной пробной версии {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Настройка пробной версии {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server).

## Дополнительные сведения

- [Начало работы с {% data variables.product.product_name %}](/get-started/onboarding/getting-started-with-github-enterprise-server)
- [Сведения о {% data variables.contact.github_support %}](/support/learning-about-github-support/about-github-support)
- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) в репозитории `github/roadmap`
