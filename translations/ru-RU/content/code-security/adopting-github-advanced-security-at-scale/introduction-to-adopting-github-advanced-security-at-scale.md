---
title: Общие сведения о внедрении GitHub Advanced Security в большом масштабе
intro: 'Вы можете внедрить {% data variables.product.prodname_GH_advanced_security %} в компании в большом масштабе, следуя рекомендациям отрасли и GitHub.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introduction
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
ms.openlocfilehash: f42a461b3c53565725d6909680fa8e6a202c0439
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110094'
---
## Об этих статьях

{% data variables.product.prodname_GH_advanced_security %} (GHAS) позволяет командам разработчиков писать более безопасный код с помощью интегрированных инструментов, включая сканирование секретов и проверку кода с помощью CodeQL. Сведения о возможностях обеспечения безопасности, доступных в {% data variables.product.prodname_GH_advanced_security %}, см. в разделе [Сведения о GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security).

GHAS — это набор средств, требующих активного использования со стороны разработчиков в организации. Чтобы добиться максимальной рентабельности инвестиций, специалисты вашей организации должны научиться использовать и применять средства GHAS, а также обеспечивать их надлежащее обслуживание.


Мы создали поэтапный подход к развертыванию GHAS на основе лучших отраслевых методик и рекомендаций GitHub. Мы ожидаем, что большинство клиентов будут следовать этим этапам, основываясь на нашем опыте, который помогает клиентам в успешном развертывании {% data variables.product.prodname_GH_advanced_security %}. Но может потребоваться скорректировать этот подход в соответствии с потребностями вашей компании. 

Включение GHAS в крупной организации можно разбить на шесть основных этапов.

1. [**Согласование стратегии и целей развертывания**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals). Подумайте о том, как будет выглядеть успех, и согласуйте пути реализации GHAS в вашей компании. Этот этап может занять всего несколько дней или неделю, но он закладывает твердый фундамент для остальной части развертывания.
  
2. [**Подготовка к включению в большом масштабе**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale). Подготовка разработчиков, сбор данных о репозиториях и подготовка к следующему этапу.
  
3. [**Пилотные программы**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs). При необходимости выполните пилотное развертывание для нескольких проектов и команд с высоким уровнем влияния. Это позволит первой группе в вашей компании ознакомиться с GHAS до того, как вы развернете ее для остальных сотрудников. 
  
4. [**Создание внутренней документации**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation) Создайте внутреннюю документацию и ознакомьте с ней потребителей GHAS. Без надлежащей документации для разработчиков, инженеров по безопасности и других пользователей, которые будут использовать GHAS, ценность развертывания значительно снизится.
  
5. [**Развертывание и масштабирование {% data variables.product.prodname_code_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning). Использование доступных API для автоматического развертывания {% data variables.product.prodname_code_scanning %} по командам и по языкам в организации с помощью собранных ранее данных репозиториев.
  
6. [**Развертывание и масштабирование {% data variables.product.prodname_secret_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning). Развертывание {% data variables.product.prodname_secret_scanning %}, которое требует меньше усилий по конфигурации и которое, следовательно, проще внедрить, чем {% data variables.product.prodname_code_scanning %}. Но по-прежнему очень важно иметь стратегию обработки новых и старых результатов.

## {% data variables.contact.github_support %} и {% data variables.product.prodname_professional_services_team %}

Если вы столкнулись с проблемами или возникли какие-либо вопросы во время реализации, вы можете поискать решение в нашей документации или обратиться в {% data variables.contact.github_support %}. Дополнительные сведения см. в разделе [Сведения о службе поддержки GitHub](/support/learning-about-github-support/about-github-support).

Если вам нужно сопровождение на протяжении всего процесса развертывания, {% data variables.product.prodname_professional_services %} может помочь вам в успешном развертывании и реализации {% data variables.product.prodname_GH_advanced_security %}. Мы предлагаем различные варианты сопровождения и поддержки. У нас также есть учебные курсы, которые помогут вашей компании оптимизировать ценность от {% data variables.product.prodname_GH_advanced_security %}.

Обратитесь к своему торговому представителю, чтобы получить дополнительные сведения обо всех доступных вариантах профессионального обслуживания. За дополнительными сведениями обратитесь в {% data variables.contact.contact_enterprise_sales %}.

{% note %}

Первая статья этой серии: [Этап 1. Согласование стратегии и целей развертывания](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals).

{% endnote %}
