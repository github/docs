---
title: Сведения о версиях документации GitHub
intro: Вы можете прочитать документацию с описанием продукта {% data variables.product.company_short %}, который вы сейчас используете.
versions: '*'
shortTitle: Docs versions
ms.openlocfilehash: 656cb53b79409329299d63e9f77b14a56b809f6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "146681298"
---
## Сведения версиях {% data variables.product.prodname_docs %}

{% data variables.product.company_short %} предлагает различные продукты для размещения кода и совместной работы с кодом. Доступные функции зависят от используемого продукта. Дополнительные сведения см. в разделе [Продукты {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products).

На веб-сайте {% data variables.product.prodname_docs %} представлена документация для всех продуктов {% data variables.product.company_short %}. Если содержимое, которое вы читаете, применяется к нескольким продуктам, для выбора подходящей документации необходимо выбрать продукт, используемый в настоящее время.

В верхней части страницы {% data variables.product.prodname_docs %} выберите продукт из раскрывающегося меню. Если окно браузера является недостаточно широким для отображения полной панели навигации, нажмите на значок {% octicon "three-bars" aria-label="The three bars icon" %}

![Снимок экрана: раскрывающееся меню для выбора просматриваемой версии {% data variables.product.prodname_docs %}](/assets/images/help/docs/version-picker.png)

{% note %}

**Примечание.** Попробуйте изменить версию прямо сейчас. Вы просматриваете версию этой статьи для {% ifversion ghes %}{% else %}{% endif %} {% ifversion fpt %}Free, Pro и Team{% else %}{% data variables.product.product_name %}{% endif %}.

{% endnote %}

## Определение используемого продукта {% data variables.product.company_short %}

Вы можете определить используемый продукт {% data variables.product.company_short %}, просмотрев URL-адрес в адресной строке браузера и заголовок веб-сайта {% data variables.product.prodname_dotcom %}, на котором вы находитесь.

Вы можете использовать более одного продукта {% data variables.product.company_short %}. Например, вы можете вносить свой вклад в открытый код {% data variables.product.prodname_dotcom_the_website %} и совместно работать над кодом в экземпляре {% data variables.product.prodname_ghe_server %} вашего работодателя. В зависимости от проблемы, которую вы пытаетесь решить, может потребоваться просмотреть разные версии одной и той же статьи.

### Планы {% data variables.product.prodname_dotcom_the_website %} или {% data variables.product.prodname_ghe_cloud %}

При доступе к {% data variables.product.prodname_dotcom %} на странице https://github.com вы используете функции плана Free, Pro или Team либо используете {% data variables.product.prodname_ghe_cloud %}.

В широком окне браузера текст за логотипом {% data variables.product.company_short %} в левой части заголовка не отображается.

![Снимок экрана: адресная строка и заголовок {% data variables.product.prodname_dotcom_the_website %} в браузере](/assets/images/help/docs/header-dotcom.png)

В {% data variables.product.prodname_dotcom_the_website %} у каждой учетной записи есть собственный план. С каждой личной учетной записью связан собственный план, предоставляющий доступ к определенным функциям, и с каждой организацией также связан другой собственный план. Если ваша личная учетная запись является участником организации на {% data variables.product.prodname_dotcom_the_website %}, то при использовании ресурсов, принадлежащих этой организации, вы можете получить доступ к другим функциям по сравнению с ресурсами, принадлежащими личной учетной записи. Дополнительные сведения см. в разделе [Типы учетных записей {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts).

Если вы не знаете, использует ли организация {% data variables.product.prodname_ghe_cloud %}, спросите об этом владельца организации. Дополнительные сведения см. в разделе [Просмотр ролей пользователей в организации](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization).

### {% data variables.product.prodname_ghe_server %}

При доступе к данным {% data variables.product.prodname_dotcom %} по URL-адресу, отличному от https://github.com, `https://*.githubenterprise.com`, `https://*.github.us` и `https://*.ghe.com`, вы используете {% data variables.product.prodname_ghe_server %}. Например, вы можете получить доступ к {% data variables.product.prodname_ghe_server %} на сайте `https://github.YOUR-COMPANY-NAME.com`. Администраторы могут выбрать URL-адрес, который не содержит слово "{% data variables.product.company_short %}".

В широком окне браузера после логотипа {% data variables.product.company_short %} в левой части заголовка отображается слово "Enterprise".

![Снимок экрана: адресная строка и заголовок {% data variables.product.prodname_ghe_server %} в браузере](/assets/images/help/docs/header-ghes.png)

Вы можете просмотреть используемую версию {% data variables.product.prodname_ghe_server %} в нижнем колонтитуле любой страницы.

![Снимок экрана: нижний колонтитул {% data variables.product.prodname_ghe_server %} с выделенной версией](/assets/images/help/docs/ghes-version-in-footer.png)

### {% data variables.product.prodname_ghe_managed %}

При доступе к данным {% data variables.product.prodname_dotcom %} по URL-адресу `https://*.githubenterprise.com`, `https://*.github.us` или `https://*.ghe.com` вы используете {% data variables.product.prodname_ghe_managed %}.

В широком окне браузера после логотипа {% data variables.product.company_short %} в заголовке отображаются слова "{% data variables.product.prodname_ghe_managed %}".

![Адресная строка и заголовок {% data variables.product.prodname_ghe_managed %} в браузере](/assets/images/help/docs/header-ghae.png)
