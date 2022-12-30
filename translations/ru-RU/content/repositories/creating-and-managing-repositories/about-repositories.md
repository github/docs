---
title: Сведения о репозиториях
intro: Репозиторий содержит все файлы проекта и журнал редакций для каждого файла. Вы можете обсудить работу над проектом и управлять ею в репозитории.
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 95e4033aa41f7920b5447554773dc61a181f5861
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163508'
---
## Сведения о репозиториях

Вы можете быть единоличным владельцем репозиториев по отдельности или владеть ими совместно с другими сотрудниками организации.

Вы можете ограничить доступ к репозиторию, выбрав его видимость. Дополнительные сведения см. в разделе [Сведения о видимости репозитория](#about-repository-visibility).

Если репозиторий принадлежит вам, вы можете предоставить другим пользователям доступ с правами участника совместной работы, чтобы они могли совместно работать над проектом. Если репозиторий принадлежит организации, вы можете предоставить членам организации разрешения на доступ к репозиторию. Дополнительные сведения см. в разделах [Уровни разрешений для репозитория личной учетной записи](/articles/permission-levels-for-a-user-account-repository/) и [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% ifversion fpt or ghec %} При использовании {% data variables.product.prodname_free_team %} для личных учетных записей и организаций вы можете работать с неограниченным числом участников совместной работы в неограниченном количестве общедоступных репозиториев с полным набором функций, а также в неограниченном количестве частных репозиториев с ограниченным набором функций. Чтобы получить расширенные средства для частных репозиториев, можно выполнить обновление до {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} или {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %} {% else %} Каждый пользователь и каждая организация могут владеть неограниченным количеством репозиториев и приглашать в них неограниченное количество участников совместной работы.
{% endif %}

Репозитории можно использовать для совместной работы с другими пользователями и управления ею.
- С помощью проблем можно собирать отзывы пользователей, сообщать об ошибках в программном обеспечении и упорядочивать задачи. Дополнительные сведения см. в разделе [Сведения о проблемах](/github/managing-your-work-on-github/about-issues).{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- С помощью запросов на вытягивание можно предлагать изменения в репозитории. Дополнительные сведения см. в разделе [Сведения о запросах на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-requests).
- С помощью досок проектов можно упорядочивать проблемы и запросы на вытягивание, а также ранжировать их по приоритету. Дополнительные сведения см. в разделе [О панелях проектов](/github/managing-your-work-on-github/about-project-boards).

{% data reusables.repositories.repo-size-limit %}

Сведения о том, как использовать репозитории наиболее эффективно, см. в разделе [Рекомендации по использованию репозиториев](/repositories/creating-and-managing-repositories/best-practices-for-repositories).

## Видимость репозитория

Вы можете настроить доступ к репозиторию, выбрав его видимость: {% ifversion ghes or ghec %}общедоступный, внутренний или частный{% elsif ghae %}частный или внутренний{% else %} общедоступный или частный{% endif %}.

{% ifversion fpt or ghec or ghes %}

При создании репозитория можно сделать его общедоступным или частным.{% ifversion ghec or ghes %} Если вы создаете репозиторий в организации{% ifversion ghec %}, принадлежащей корпоративной учетной записи{% endif %}, вы также можете сделать репозиторий внутренним.{% endif %}{% endif %}{% ifversion fpt %} Репозитории в организациях, использующих {% data variables.product.prodname_ghe_cloud %}, которые принадлежат корпоративной учетной записи, также могут создаваться как внутренние. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

При создании репозитория, принадлежащего личной учетной записи, он всегда будет частным. При создании репозитория, принадлежащего организации, вы можете сделать его частным или внутренним.

{% endif %}

{%- ifversion fpt or ghec %}
- Общедоступные репозитории доступны всем в Интернете.
- Частные репозитории доступны только вам, пользователям, которым вы явно предоставили доступ, и, в случае с репозиториями организации, определенным ее сотрудникам.
{%- elsif ghes %}
- Если {% data variables.location.product_location %} не находится в частном режиме или за брандмауэром, общедоступные репозитории будут доступны всем пользователям в Интернете. В противном случае общедоступные репозитории будут доступны всем пользователям, использующим {% data variables.location.product_location %}, включая внешних участников совместной работы.
- Частные репозитории доступны только вам, пользователям, которым вы явно предоставили доступ, и, в случае с репозиториями организации, определенным ее сотрудникам.
{%- elsif ghae %}
- Частные репозитории доступны только вам, пользователям, которым вы явно предоставили доступ, и, в случае с репозиториями организации, определенным ее сотрудникам.
{%- endif %} {%- ifversion ghec or ghes or ghae %}
- Внутренние репозитории доступны всем сотрудникам предприятия. Дополнительные сведения см. в разделе [Сведения о внутренних репозиториях](#about-internal-repositories).
{%- endif %}

Владельцы организации всегда имеют доступ к каждому созданному в ней репозиторию. Дополнительные сведения см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Пользователи с разрешениями администратора репозитория могут изменить его видимость. Дополнительные сведения см. в разделе [Настройка видимости репозитория](/github/administering-a-repository/setting-repository-visibility).

{% ifversion ghes or ghec or ghae %}
## Сведения о внутренних репозиториях

{% data reusables.repositories.about-internal-repos %} Дополнительные сведения об InnerSource см. в техническом документе {% data variables.product.prodname_dotcom %} [Введение в InnerSource](https://resources.github.com/whitepapers/introduction-to-innersource/).

{% ifversion ghec %} {% note %}

**Примечание:** Создавать внутренние репозитории можно только при использовании {% data variables.product.prodname_ghe_cloud %} с корпоративной учетной записью. Корпоративная учетная запись — это отдельный тип учетной записи, который обеспечивает центральную точку управления для нескольких организаций. Дополнительные сведения см. в разделе [Типы учетной записи {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts).

{% endnote %} {% endif %}

Все сотрудники предприятия имеют разрешения на чтение внутреннего репозитория, но внутренние репозитории недоступны пользователям {% ifversion fpt or ghec %}за пределами предприятия{% else %}, которые не являются сотрудниками какого-либо отдела{% endif %}, включая внешних участников совместной работы в репозиториях отделов. Дополнительные сведения см. в разделах [Роли в организации](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members) и [Роли в репозитории организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% ifversion ghes %} {% note %}

**Примечание**. Пользователь должен работать в отделе, чтобы быть сотрудником предприятия и иметь доступ к внутренним репозиториям. Если пользователь в {% data variables.location.product_location %} не является членом какой-либо организации, он не будет иметь доступа к внутренним репозиториям.

{% endnote %} {% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %}Если ваше предприятие не использует {% data variables.product.prodname_emus %}, сотрудники{% else %}Сотрудники{% endif %} предприятия могут создать вилку любого внутреннего репозитория, принадлежащего организации, на предприятии. Репозиторий с созданной вилкой будет принадлежать личной учетной записи и будет частным. Когда пользователь покидает отдел предприятия, то его вилки внутренних репозиториев удаляются автоматически.

{% ifversion ghec %} {% note %}

**Примечание.** {% data variables.enterprise.prodname_managed_users_caps %} не может создать вилку внутренних репозиториев. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts).

{% endnote %} {% endif %} {% endif %}

## Ограничения на просмотр содержимого и различий в репозитории

Некоторые типы ресурсов могут быть довольно большими, требуя сложной обработки на {% data variables.product.product_name %}. Для обеспечения выполнения запросов в разумные сроки установлены ограничения.

Большинство приведенных ниже ограничений относятся как к {% data variables.product.product_name %}, так и к API.

### Ограничения на текст

Текстовые файлы размером более **512 КБ** всегда отображаются как обычный текст. В коде не выделяется синтаксис, а текстовые файлы не преобразуются в HTML (например, Markdown, AsciiDoc *и т. д.* ).

Текстовые файлы размером более **5 МБ** доступны только через необработанные URL-адреса, которые предоставляются через `{% data variables.product.raw_github_com %}`, например `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Чтобы получить необработанный URL-адрес файла, нажмите кнопку **Необработанный**.

### Ограничения на различия

Так как различия могут стать очень большими, на различия в фиксациях, запросах на вытягивание и представлениях сравнения налагаются указанные ниже ограничения.

- В запросе на вытягивание общий объем необработанных данных различий не может превышать *20 000 загружаемых строк* или *1 МБ*.
- Объем необработанных данных различий в одном файле не может превышать *20 000 загружаемых строк* или *500 КБ*. Для одного файла автоматически загружаются *четыреста строк* или *20 КБ*.
- Максимальное количество файлов в одном различии ограничено *300*.
- Максимальное число отрисовываемых файлов (например, изображений, PDF-файлов и файлов GeoJSON) в одном различии ограничено *25*.

Некоторые части ограниченного различия могут отображаться, но всё свыше ограничения не отображается.

### Ограничения на списки фиксаций

На страницах представлений сравнения и запросов на вытягивание отображается список фиксаций между версиями `base` и `head`. Эти списки ограничены **250** фиксациями. Если это ограничение превышено, в примечании сообщается о наличии дополнительных фиксаций (но они не отображаются).

## Дополнительные материалы

- [Сведения о вилках](/github/collaborating-with-pull-requests/working-with-forks/about-forks)
- [Совместная работа над проблемами и запросами на вытягивание](/categories/collaborating-with-issues-and-pull-requests)
- [Управление работой над {% data variables.product.prodname_dotcom %}](/categories/managing-your-work-on-github/)
- [Администрирование репозитория](/categories/administering-a-repository)
- [Визуализация данных репозитория с помощью графов](/categories/visualizing-repository-data-with-graphs/)
- [Сведения о вики-сайтах](/communities/documenting-your-project-with-wikis/about-wikis)
- [Глоссарий {% data variables.product.prodname_dotcom %}](/articles/github-glossary)
