---
title: Ссылки и цитирование содержимого
intro: Можно использовать сторонние средства для цитирования и создания ссылки на содержимое на GitHub.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/referencing-and-citing-content
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Reference & cite content
ms.openlocfilehash: 8630d83f90cc702a4be910264584ad57a988ff59
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099228'
---
## Выдача постоянного идентификатора репозитория с помощью Zenodo

Чтобы упростить ссылки на репозитории в академической литературе, можно создать постоянные идентификаторы, также называемые цифровыми идентификаторами объектов (DOI). Средство архивации данных [Zenodo](https://zenodo.org/about) можно использовать для архивации репозитория на {% ifversion ghae %}{% данных variables.product.product_name %}{% еще %}{% данных variables.location.product_location %}{%endif %} и выдачи doI для архива.

{% tip %}

**Советы**
- Zenodo может получить доступ только к общедоступным репозиториям, поэтому следует убедиться, что репозиторий, который нужно архивировать, является [общедоступным](/articles/making-a-private-repository-public).
- Если необходимо архивировать репозиторий, принадлежащий организации, владельцу организации может потребоваться [одобрить доступ](/articles/approving-oauth-apps-for-your-organization) для приложения Zenodo.
- Обязательно нужно включить в репозиторий [лицензию](/articles/open-source-licensing), чтобы читатели знали, как они могут повторно использовать свою работу.

{% endtip %}

1. Перейдите на [Zenodo](http://zenodo.org/).
2. В вернем левом углу экрана щелкните **Войти**. ![Кнопка входа в Zenodo](/assets/images/help/repository/zenodo_login.png)
3. Щелкните **Войти с помощью GitHub**. ![Вход в Zenodo с помощью GitHub](/assets/images/help/repository/zenodo_login_with_github.png)
4. Проверьте сведения о правах доступа,затем щелкните **Авторизовать приложение**. ![Авторизация Zenodo](/assets/images/help/repository/zenodo_authorize.png)
5. Перейдите на [страницу Zenodo GitHub](https://zenodo.org/account/settings/github/). ![Страница Zenodo GitHub](/assets/images/help/repository/zenodo_github_page.png)
6. Справа от имени репозитория, который нужно архивировать, переключите кнопку с **Выкл.** на **Вкл.** , чтобы включить его для архивации. ![Включение архивации Zenodo в репозитории](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo архивирует репозиторий и выдает новый DOI каждый раз при создании нового [выпуска](/articles/about-releases/) {% data variables.product.product_name %}. Следуйте шагам, описанным в разделе [Создание выпусков](/articles/creating-releases/), чтобы создать новый выпуск.

## Публикация и цитирование материалов исследований с помощью Figshare

Академические сотрудники могут использовать службу управления данными [Figshare](http://figshare.com) для публикации и цитирования материалов исследований. Дополнительные сведения см. на [сайте поддержки Figshare](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
