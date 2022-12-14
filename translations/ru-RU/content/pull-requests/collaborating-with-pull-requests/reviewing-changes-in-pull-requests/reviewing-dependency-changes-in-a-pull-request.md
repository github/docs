---
title: Проверка изменений зависимостей в запросе на вытягивание
intro: 'Если запрос на вытягивание содержит изменения зависимостей, можно просмотреть сводку изменений, чтобы узнать о наличии известных уязвимостей в любой из зависимостей.'
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
shortTitle: Review dependency changes
ms.openlocfilehash: 34cefbae8b7ccfd32773a47de2509a6eccc7a799
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106608'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

## Сведения о проверке зависимостей

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %}Прежде чем использовать проверку зависимостей в частном репозитории, необходимо включить граф зависимостей. Дополнительные сведения см. в разделе [Изучение зависимостей репозитория](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository).{% endif %}

{% ifversion ghes %} Прежде чем использовать проверку зависимостей, необходимо включить граф зависимостей и подключить {% данных variables.location.product_location %} к {% данных variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в разделе [Включение оповещений об уязвимых зависимостях на {% data variables.product.prodname_ghe_server %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server).{% endif %}

Проверка зависимостей позволяет осуществлять "сдвиг влево". С помощью полученной прогнозной информации можно устранять уязвимости в зависимостях перед их попаданием в рабочую среду. Дополнительные сведения см. в статье "[Сведения о проверке зависимостей](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion fpt или ghec или ghes > 3,5 или ghae > 3,5 %}

Вы можете использовать {% data variables.product.prodname_dependency_review_action %}, чтобы обеспечить проверки зависимостей в запросах на вытягивание репозитория. {% data reusables.dependency-review.dependency-review-action-overview %}

{% ifversion dependency-review-action-configuration %} Вы можете настроить {% data variables.product.prodname_dependency_review_action %} в соответствии с потребностями, указав тип уязвимости зависимости, которую вы хотите поймать. Дополнительные сведения см. в статье [Настройка проверки зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action). {% endif %}

{% endif %}
## Проверка зависимостей в запросе на вытягивание

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}

1. Если запрос на вытягивание содержит много файлов, используйте раскрывающееся меню **Фильтр файлов**, чтобы свернуть все файлы, для которых не регистрируются зависимости. Это позволит сосредоточиться на изменениях зависимостей.

   ![Меню фильтра файлов](/assets/images/help/pull_requests/file-filter-menu-json.png) Проверка зависимостей дает более ясное представление о том, что изменилось в больших файлах блокировок, где исходный различие по умолчанию не отображается.

  {% note %}

   **Примечание**. Расширенные различия при проверке зависимостей недоступны для зафиксированных статических файлов JavaScript, таких как `jquery.js`.

   {% endnote %}

1. Справа от заголовка файла манифеста или блокировок откройте проверку зависимостей, нажав кнопку расширенных различий  **{% octicon "file" aria-label="The rich diff icon" %}** .

   ![Кнопка расширенных различий](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. Проверьте зависимости, перечисленные в проверке зависимостей.

   ![Предупреждения об уязвимостях при проверке зависимостей](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   Все добавленные или измененные зависимости с уязвимостями приводятся в начале списка и упорядочены сначала по степени серьезности, а затем по имени зависимости. Это означает, что зависимости с наивысшей степенью серьезности всегда находятся вверху списка проверки зависимостей. Другие зависимости перечислены в алфавитном порядке по именам.

   Значок рядом с каждой зависимостью указывает, была ли зависимость добавлена (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), обновлена (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>) или удалена (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) в этом запросе на вытягивание.

   Помимо этого, включаются следующие сведения:

   * версия или диапазон версий новой, обновленной или удаленной зависимости;
   * для определенной версии зависимости:
      * возраст этого выпуска зависимости;
      * количество проектов, зависящих от этого программного обеспечения; эти сведения берутся из графа зависимостей; проверка количества зависимых проектов может помочь избежать случайного добавления неправильной зависимости;
      * лицензия, используемая этой зависимостью, если эта информация доступна. Она полезна, если вы хотите избежать использования в проекте кода с определенными лицензиями.

   Если зависимость имеет известную уязвимость, в предупреждающее сообщение включаются следующие сведения:

   * краткое описание уязвимости;
   * идентификационный номер CVE (распространенные уязвимости) или {% data variables.product.prodname_security_advisories %} (GHSA); щелкнув этот идентификатор, можно узнать больше об уязвимости;
   * степень серьезности уязвимости;
   * версия зависимости, в которой уязвимость была устранена. Если вы проверяете запрос на вытягивание для кого-либо, то можете попросить участника обновить зависимость до исправленной версии или более позднего выпуска.

{% data reusables.repositories.return-to-source-diff %}
