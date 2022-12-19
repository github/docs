---
title: Настройка видимости репозитория
intro: 'Вы можете выбрать, кто может просматривать репозиторий.'
redirect_from:
  - /articles/making-a-private-repository-public
  - /articles/making-a-public-repository-private
  - /articles/converting-a-public-repo-to-a-private-repo
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository visibility
ms.openlocfilehash: 424a2a58cca6fdaff41d252bbfa31a0c7b5971e2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098008'
---
## Сведения об изменении видимости репозитория

Владельцы организации могут разрешить изменять видимость репозитория только себе. Дополнительные сведения см. в разделе [Ограничение на изменение видимости репозитория в организации](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization).

{% ifversion ghec %}

Члены {% данных variables.enterprise.prodname_emu_enterprise %} могут задавать только видимость репозиториев, принадлежащих их личной учетной записи, частным, и репозитории в организациях предприятия могут быть только частными или внутренними. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

{% endif %}

Перед изменением видимости репозитория рекомендуется ознакомиться с приведенными ниже предупреждениями.

{% ifversion ghes or ghae %}

{% warning %}

**Предупреждение**. Изменения видимости большого репозитория или сети репозиториев может повлиять на целостность данных. Изменения видимости также могут иметь непредвиденные последствия для вилок. {% data variables.product.company_short %} рекомендует сделать следующее перед изменением видимости сети репозиториев.

- Подождите период уменьшения активности на {% данных variables.location.product_location %}.

- Прежде чем продолжить, обратитесь к {% ifversion ghes %}администратору сайта{% elsif ghae %}владельцу организации{% endif %}. {% ifversion ghes %}Администратор сайта{% elsif ghae %}Владелец организации{% endif %} может обратиться в {% data variables.contact.contact_ent_support %} за дальнейшими указаниями.

{% endwarning %}

{% endif %}

### Преобразование репозитория в частный
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %} отсоединит общедоступные вилки общедоступного репозитория и поместит их в новую сеть. Общедоступные вилки не становятся частными.{% endif %} {%- ifversion ghes or ghec or ghae %}
* Если сделать внутренний репозиторий частным, {% data variables.product.prodname_dotcom %} удалит вилки, принадлежащие пользователям без доступа к репозиторию, ставшему частным. {% ifversion fpt or ghes or ghec %}Все вилки также станут частными.{% elsif ghae %}Если у внутреннего репозитория есть вилки, они уже являются частными.{% endif %} Дополнительные сведения см. в разделе [Что происходит с вилками при удалении или изменении видимости репозитория?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)
{%- endif %}

{%- ifversion fpt %}
* Если вы используете {% data variables.product.prodname_free_user %} для личных учетных записей или организаций, некоторые функции станут недоступными после изменения видимости репозитория на частную. Публикация всех сайтов {% data variables.product.prodname_pages %} будет автоматически отменена. Если вы добавили личный домен для сайта {% data variables.product.prodname_pages %}, следует удалить или обновить записи DNS, прежде чем делать репозиторий частным, чтобы избежать захвата домена. Дополнительные сведения см. в разделах [Продукты {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products) и [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site).
{%- endif %}

{%- ifversion fpt or ghec %}
* Репозиторий на {% data variables.product.prodname_dotcom %} больше не будет включаться в {% data variables.product.prodname_archive %}. Дополнительные сведения см. в разделе [Сведения об архивации содержимого и данных на {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program).
* Функции {% data variables.product.prodname_GH_advanced_security %}, такие как {% data variables.product.prodname_code_scanning %}, перестанут работать{% ifversion ghec %}, если только репозиторий не принадлежит отделу, входящему в состав организации с лицензией на {% data variables.product.prodname_advanced_security %} и достаточным количеством свободных рабочих мест{% endif %}. {% data reusables.advanced-security.more-info-ghas %} {%- endif %}

{%- ifversion ghes %}
* Анонимный доступ на чтение в GIT больше не доступен. Дополнительные сведения см. в разделе [Включение анонимного доступа на чтение в GIT для репозитория](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository).
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### Преобразование репозитория во внутренний

* Все вилки репозитория останутся в сети репозиториев, и {% data variables.product.product_name %} сохранит связь между корневым репозиторием и вилкой. Дополнительные сведения см. в разделе [Что происходит с вилками при удалении репозитория или изменении видимости?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)

{% endif %}

{% ifversion fpt or ghes or ghec %}

### Преобразование репозитория в общедоступный

* {% data variables.product.product_name %} отсоединит частные вилки и превратит в отдельный частный репозиторий. Дополнительные сведения см. в разделе [Что происходит с вилками при удалении репозитория или изменении видимости?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository){% ifversion fpt or ghec %}
* Если частный репозиторий преобразуется в общедоступный в рамках создания проекта с открытым кодом, ознакомьтесь с [руководствами по открытому коду](http://opensource.guide), чтобы получить полезные советы и рекомендации. Вы также можете пройти бесплатный курс по управлению проектом с открытым кодом в [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). После того как репозиторий станет общедоступным, вы также сможете просмотреть его профиль в сообществе, чтобы узнать, соответствует ли проект рекомендациям для поддержки участников. Дополнительные сведения см. в разделе [Просмотр профиля в сообществе](/articles/viewing-your-community-profile).
* Репозиторий автоматически получит доступ к функциям {% data variables.product.prodname_GH_advanced_security %}.

Сведения о повышении безопасности репозитория см. в разделе [Защита репозитория](/code-security/getting-started/securing-your-repository).{% endif %}

{% endif %}

## Изменение видимости репозитория

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе "Опасная зона" справа от элемента "Изменение видимости репозитория" нажмите кнопку **Изменить видимость**.
   ![Кнопка "Изменить видимость"](/assets/images/help/repository/repo-change-vis.png)
4. Выберите видимость.
{% ifversion fpt or ghec %} ![Диалоговое окно с параметрами видимости репозитория](/assets/images/help/repository/repo-change-select.png){% else %} ![Диалоговое окно с параметрами видимости репозитория](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. Чтобы убедиться в том, что вы изменяете видимость правильного репозитория, введите его имя.
6. Щелкните **Я понимаю, изменить видимость репозитория**.
{% ifversion fpt or ghec %} ![Кнопка для подтверждения изменения видимости репозитория](/assets/images/help/repository/repo-change-confirm.png){% else %} ![Кнопка для подтверждения изменения видимости репозитория](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## Дополнительные материалы
- [Сведения о репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)
