---
title: Сведения о глобальных рекомендациях по безопасности
intro: 'Глобальная база данных безопасности находится в {% data variables.product.prodname_advisory_database %}, которая содержит cvEs и рекомендации по безопасности, инициированные {% data variables.product.company_short %}, влияющие на открытый код мире. Вы можете внести свой вклад в улучшение глобальных рекомендаций.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: d28de180b9fee592dcba89d03ca537d4ffd2d9eb
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114090'
---
## Сведения о глобальных рекомендациях по безопасности

{% ifversion fpt or ghec %} Существует два типа рекомендаций: глобальные рекомендации по безопасности и рекомендации по безопасности репозитория. Дополнительные сведения о рекомендациях по безопасности репозитория см. в разделе [Сведения о рекомендациях по безопасности репозитория](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories). {% endif %}

Рекомендации по глобальной безопасности сгруппированы в две категории: рекомендации, проверенные {% data variables.product.company_short %}, и непросмотренные рекомендации.
- Рекомендации, проверенные в {% data variables.product.company_short %}, связаны с уязвимостями системы безопасности{% ifversion GH-advisory-db-supports-malware %} или вредоносными программами{% endif %} и предназначены для пакетов в экосистемах, которые мы поддерживаем.
- Непроверенные рекомендации — это уязвимости в системе безопасности, которые мы автоматически публикуем в {% data variables.product.prodname_advisory_database %} непосредственно из веб-канала Национальной базы данных уязвимостей. 

Дополнительные сведения о {% data variables.product.prodname_advisory_database %} см. [в разделе Сведения о {% data variables.product.prodname_advisory_database %}](/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database).

{% data reusables.security-advisory.global-advisories %}

Каждая рекомендация по репозиторию проверяется группой курирования {% data variables.product.prodname_security %} для рассмотрения в качестве глобальной рекомендации. Мы публикуем рекомендации по безопасности для всех экосистем, поддерживаемых схемой зависимостей, в {% data variables.product.prodname_advisory_database %} в [github.com/advisories](https://github.com/advisories).

Вы можете получить доступ к любым рекомендациям в {% data variables.product.prodname_advisory_database %}. Дополнительные сведения см. в разделе [Обзор рекомендаций по безопасности в базе данных рекомендаций GitHub](/code-security/security-advisories/global-security-advisories/browsing-security-advisories-in-the-github-advisory-database).

Вы можете предложить улучшения для любой рекомендации в {% data variables.product.prodname_advisory_database %}. Дополнительные сведения см. в разделе [Редактирование рекомендаций по безопасности в {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).
