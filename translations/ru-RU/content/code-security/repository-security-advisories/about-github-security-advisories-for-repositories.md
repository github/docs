---
title: Сведения о рекомендациях по безопасности GitHub для репозиториев
intro: Вы можете использовать {% data variables.product.prodname_security_advisories %} для частного обсуждения, исправления и публикации сведений об уязвимостях безопасности в вашем репозитории.
redirect_from:
- /articles/about-maintainer-security-advisories
- /github/managing-security-vulnerabilities/about-maintainer-security-advisories
- /github/managing-security-vulnerabilities/about-github-security-advisories
- /code-security/security-advisories/about-github-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Security advisories
- Vulnerabilities
- CVEs
shortTitle: Repository security advisories
ms.openlocfilehash: 5c8ad99a2bee30f52a185fa15421bc6b23429fbf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145087578"
---
{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Обзор — {% data variables.product.prodname_security_advisories %}

{% data reusables.security-advisory.disclosing-vulnerabilities %} Дополнительные сведения см. в разделе "[О скоординированном раскрытии уязвимостей системы безопасности](/code-security/repository-security-advisories/about-coordinated-disclosure-of-security-vulnerabilities)".

{% data reusables.security-advisory.security-advisory-overview %}

Используя {% data variables.product.prodname_security_advisories %}, можно:

1. Создать черновик рекомендации по безопасности и с его помощью в частном порядке обсудить влияние уязвимости на проект. Дополнительные сведения см. в статье [Создание рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/creating-a-repository-security-advisory).
2. Осуществляйте закрытую совместную работу для устранения уязвимости во временной частной вилке.
3. Опубликовать рекомендацию по безопасности, чтобы уведомить сообщество об уязвимости после выпуска исправления. Дополнительные сведения см. в статье [Публикация рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/publishing-a-repository-security-advisory).

{% data reusables.repositories.security-advisories-republishing %}

Вы можете поблагодарить лиц, которые внесли свой вклад в создание рекомендации по безопасности. Дополнительные сведения см. в статье [Изменение рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories).

{% data reusables.repositories.security-guidelines %}

Если вы создали рекомендацию по безопасности в репозитории, она останется в репозитории. Мы публикуем рекомендации по безопасности для всех экосистем, поддерживаемых схемой зависимостей, в {% data variables.product.prodname_advisory_database %} в [github.com/advisories](https://github.com/advisories). Любой пользователь может отправить изменение для рекомендации, опубликованной в {% data variables.product.prodname_advisory_database %}. Дополнительные сведения см. в разделе [Редактирование рекомендаций по безопасности в {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).

Если рекомендация по безопасности относится к npm, мы также опубликуем ее в рекомендациях по безопасности для npm. Дополнительные сведения см. в разделе [npmjs.com/advisories](https://www.npmjs.com/advisories).

{% data reusables.repositories.github-security-lab %}

## Идентификационные номера CVE

{% data variables.product.prodname_security_advisories %} основаны на списке распространенных уязвимостей (CVE). Форма рекомендаций по безопасности для {% data variables.product.prodname_dotcom %} — это стандартная форма, соответствующая формату описания CVE. 

{% data variables.product.prodname_dotcom %} — это центр нумерации CVE (CNA), которому разрешено назначать идентификационные номера CVE. Дополнительные сведения см. в разделе "[Сведения о CVE](https://www.cve.org/About/Overview)" и "[Центры нумерации CVE](https://www.cve.org/ProgramOrganization/CNAs)" на веб-сайте CVE.

При создании рекомендации по безопасности для общедоступного репозитория в {% data variables.product.prodname_dotcom %} для уязвимости безопасности можно указать существующий идентификационный номер CVE. {% data reusables.repositories.request-security-advisory-cve-id %}

Когда мы опубликуем рекомендацию по безопасности и {% data variables.product.prodname_dotcom %} присвоит уязвимости идентификационный номер CVE, {% data variables.product.prodname_dotcom %} опубликует CVE в базе данных MITRE.
Дополнительные сведения см. в статье [Публикация рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/publishing-a-repository-security-advisory).

## {% data variables.product.prodname_dependabot_alerts %} для опубликованных рекомендаций по безопасности

{% data reusables.repositories.github-reviews-security-advisories %}
