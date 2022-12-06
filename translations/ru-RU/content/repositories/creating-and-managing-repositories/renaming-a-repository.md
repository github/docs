---
title: Переименование репозитория
intro: 'Вы можете переименовать любой репозиторий, если вы являетесь владельцем организации или имеете права администратора для репозитория.'
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: d0067d96dce2f2cf9fe8bb2dd519668780d861ff
ms.sourcegitcommit: bd8b3e152f17d90acf222a0d50ba9595184c1f5f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111676'
---
При переименовании репозитория все существующие сведения, за исключением URL-адресов сайта проекта, автоматически перенаправляются на новое имя, в том числе:

* Проблемы
* Вики
* Звезды
* Подписчики

Дополнительные сведения о сайтах проектов см. в разделе [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

Помимо перенаправления веб-трафика все операции `git clone`, `git fetch` или `git push`, предназначенные для предыдущего расположения, будет продолжать выполняться в новом расположении. Однако во избежание путаницы настоятельно рекомендуется обновить все существующие локальные клоны, указав новый URL-адрес репозитория. Для этого можно выполнить в командной строке команду `git remote`:

```shell
$ git remote set-url origin NEW_URL
```

Дополнительные сведения см. в разделе [Управление удаленными репозиториями](/github/getting-started-with-github/managing-remote-repositories).

{% ifversion fpt or ghec %}

Если вы планируете переименовать репозиторий с сайтом {% data variables.product.prodname_pages %}, рекомендуется использовать личный домен для сайта. Это гарантирует, что переименование не повлияет на URL-адрес сайта. Дополнительные сведения см. в разделе [Сведения о личных доменах и сайте {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages). 

{% endif %}

{% note %}

**Примечание.** {% data variables.product.prodname_dotcom %} не перенаправляет вызовы действию, размещенному в переименованном репозитории. Любой рабочий процесс, использующий это действие, завершится ошибкой `repository not found`. Вместо этого создайте репозиторий и действие с новым именем и заархивируйте старый репозиторий. Дополнительные сведения см. в разделе [Архивирование репозиториев](/repositories/archiving-a-github-repository/archiving-repositories).

{% endnote %}

{% warning %}

**Предупреждение.** Если вы создадите новый репозиторий в учетной записи в будущем, не используйте исходное имя переименованного репозитория, В этом случае перенаправления в переименованный репозиторий больше не будут работать.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе **Имя репозитория** введите новое имя репозитория.
   ![Переименование репозитория](/assets/images/help/repository/repository-name-change.png)
4. Выберите **Переименовать**. Готово!
