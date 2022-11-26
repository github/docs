---
title: "Сведения о GitHub\_AE"
intro: "{% data variables.product.prodname_ghe_managed %}\_— это улучшенный в плане безопасности и совместимый способ использования {% data variables.product.prodname_dotcom %} в облаке."
versions:
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9e7769fca5b36252fad5566450ba156120491649
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147389854'
---
## Сведения о {% data variables.product.prodname_ghe_managed %}

{% data reusables.github-ae.github-ae-enables-you %} {% data variables.product.prodname_ghe_managed %} является полностью управляемым, надежным и масштабируемым, что позволяет ускорить доставку без ущерба для управления рисками и соответствия требованиям.

{% data variables.product.prodname_ghe_managed %} предлагает одну платформу разработчика от идеи до производства. Вы можете повысить скорость разработки с помощью средств, которые команды знают и любят, при этом поддерживая соответствие отрасли и нормативным требованиям путем использования средств управления безопасностью и доступом, автоматизации рабочих процессов и применения политик. 

{% data reusables.enterprise.about-github-for-enterprises %}

## Высокодоступное глобальное облако

{% data variables.product.prodname_ghe_managed %} — это полностью управляемая служба, размещенная в архитектуре с высоким уровнем доступности. {% data variables.product.prodname_ghe_managed %} размещается глобально в облаке, которое может масштабироваться для поддержки полного жизненного цикла разработки без ограничений. {% data variables.product.prodname_dotcom %} полностью управляет резервными копиями, отработкой отказа и аварийным восстановлением, благодаря чему вам не нужно беспокоиться о службе или данных. 

## Местонахождение данных

Все ваши данные хранятся в выбранном географическом регионе. Вы можете обеспечить соответствие требованиям к месту расположения данных регламента GDPR и стандартам защиты глобальных данных путем сохранения всех данных в выбранном регионе.

## Изолированные учетные записи

По умолчанию все учетные записи разработчика на {% data variables.product.product_name %} полностью изолированы от других служб, включая продукты из {% data variables.product.company_short %}. Вы можете контролировать учетные записи с помощью поставщика удостоверений, в обязательном порядке используя единый вход SAML. SCIM гарантирует, что сотрудники будут иметь доступ только к необходимым ресурсам, в соответствии с определением в центральной системе управления удостоверениями. Дополнительные сведения см. в статье [Управление удостоверениями и доступом для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise).

При необходимости владельцы предприятия могут включить ограниченную интеграцию между {% data variables.product.product_name %} и {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).

## Ограниченный доступ к сети

Защитите доступ к вашему предприятию в {% data variables.product.prodname_ghe_managed %} с ограниченным доступом к сети, чтобы ваши данные были доступны только в вашей сети. Дополнительные сведения см. в разделе [Ограничение сетевого трафика для вашего предприятия](/admin/configuration/restricting-network-traffic-to-your-enterprise).

## Коммерческие и государственные среды

{% data variables.product.prodname_ghe_managed %} доступен в облаке Azure для государственных организаций — доверенном облаке для государственных учреждений США и их партнеров. {% data variables.product.prodname_ghe_managed %} также доступен в коммерческом облаке, так что вы можете выбрать среду размещения, подходящую для вашей организации.

## Аккредитации соответствия требованиям

{% data variables.product.company_short %} постоянно инвестирует средства в рекомендации по безопасности, чтобы гарантировать, что ваши данные в безопасности, ваши разработчики продуктивны, а ваша команда может сосредоточиться на решении проблем. В рамках этого обязательства по обеспечению безопасности {% data variables.product.prodname_ghe_managed %} обеспечивает соответствие следующим аккредитациям.

- Приоритетная авторизация (ATO) для FedRAMP
- SOC 1, SOC 2 Type II и SOC 3
- Сертификации ISO/IEC
   - ISO/IEC 27001:2013 
   - ISO/IEC 27701:2019
   - ISO/IEC 9001:2015
   - ISO/IEC 22301:2019 
   - ISO/IEC 27018:2014 
   - ISO/IEC 20000-1:2018 
   - ISO/IEC 27017:2015

## Дополнительные материалы

- [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)
- [Получение справки из поддержки {% data variables.product.company_short %}](/admin/enterprise-support/receiving-help-from-github-support)
