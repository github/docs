---
title: Настройка пробной версии GitHub Enterprise Cloud
intro: 'Можно бесплатно ознакомиться с возможностями {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
ms.openlocfilehash: a50aebc43ba5d674af132786ffb75e5fb3029aeb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183991'
---
{% data reusables.enterprise.ghec-cta-button %}


## Сведения о {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_ghe_cloud %} — это план для крупных предприятий или команд, которые совместно работают на {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.organizations.about-organizations %} Дополнительные сведения об учетных записях см. в разделе [Типы учетных записей {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts).

Организации могут использовать бесплатный план {% data variables.product.prodname_free_team %} с ограниченными возможностями. Для получения дополнительных возможностей, таких как единый вход SAML, управление доступом к {% data variables.product.prodname_pages %} и минуты использования {% data variables.product.prodname_actions %}, необходимо выполнить обновление до {% data variables.product.prodname_ghe_cloud %}. Подробный список возможностей, доступных в {% data variables.product.prodname_ghe_cloud %}, см. на [странице с ценами](https://github.com/pricing).

Вы можете настроить пробную версию {% data variables.product.prodname_ghe_cloud %}, чтобы испытать эти дополнительные возможности в новой или существующей учетной записи организации.

Пробные версии также доступны для {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [Настройка пробной версии {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server).

{% data reusables.products.which-product-to-use %}

## Сведения о пробных версиях {% data variables.product.prodname_ghe_cloud %}

Вы можете настроить 30-дневную пробную версию {% data variables.product.prodname_ghe_cloud %} и оценить ее работу. Для пробной версии не нужно указывать метод оплаты, если в организацию не добавляются приложения {% data variables.product.prodname_marketplace %}, требующие метода оплаты. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_marketplace %}](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/).

Пробная версия включает 50 рабочих мест. Если вам нужно больше рабочих мест для оценки {% data variables.product.prodname_ghe_cloud %}, обратитесь в {% data variables.contact.contact_enterprise_sales %}. По завершении периода пробного использования можно выбрать другое количество рабочих мест.

{% data reusables.saml.saml-accounts %}

Дополнительные сведения см. в разделе [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion not ghec %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

{% data variables.product.prodname_emus %} не входит в бесплатную пробную версию {% data variables.product.prodname_ghe_cloud %}. Если вас интересует {% data variables.product.prodname_emus %}, обратитесь в [отдел продаж {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

## Настройка пробной версии {% data variables.product.prodname_ghe_cloud %}

Прежде чем начинать пробное использование {% data variables.product.prodname_ghe_cloud %}, необходимо войти в личную учетную запись. Если у вас еще нет личной учетной записи на {% data variables.product.prodname_dotcom_the_website %}, ее необходимо создать. Дополнительные сведения см. в разделе [Регистрация для новой учетной записи {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/articles/signing-up-for-a-new-github-account).

1. Перейдите к [{% data variables.product.prodname_dotcom %} для предприятий](https://github.com/enterprise).
1. Нажмите кнопку **Начать бесплатный пробный период**.
   ![Кнопка "Начать бесплатный пробный период"](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Нажмите кнопку **Enterprise Cloud**.
   ![Кнопка Enterprise Cloud](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Следуйте инструкциям, чтобы настроить пробную версию.

## Изучение {% data variables.product.prodname_ghe_cloud %}

После настройки пробной версии можно изучить {% data variables.product.prodname_ghe_cloud %}, выполнив рекомендуемые задачи на вкладке "Обзор" организации. Если вы ранее закрыли задачи, можно получить к ним доступ еще раз, нажав кнопку **Начало работы с предлагаемыми задачами** в верхней части страницы.

![Кнопка "Начало работы с предлагаемыми задачами"](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.enterprise.best-practices %}

{% data reusables.products.product-roadmap %}

## Завершение пробного периода

Вы можете купить {% data variables.product.prodname_enterprise %} в любой момент во время пробного периода. При приобретении {% data variables.product.prodname_enterprise %} пробный период завершается, ограничение в 50 рабочих мест снимается и инициируется процесс оплаты.

Если вы не приобрели {% data variables.product.prodname_enterprise %}, пробная версия будет продолжаться до окончания 30-дневного периода. Вы не можете завершить пробную версию раньше. По завершении пробной версии ваша организация будет понижена. Если вы использовали пробную версию в существующей организации, она будет переведена на продукт, который использовался до пробной версии. Если вы создали новую организацию для пробной версии, она будет переведена на {% data variables.product.prodname_free_team %}. 

Ваша организация потеряет доступ к любым функциям, которые не включены в новый план, например к дополнительным функциям, таким как {% data variables.product.prodname_pages %} для частных репозиториев. Если вы не планируете переходить на план более высокого уровня, то, чтобы не потерять доступ к расширенным функциям, можно сделать соответствующие репозитории общедоступными до окончания пробного периода. Дополнительные сведения см. в разделе [Настройка видимости репозитория](/articles/setting-repository-visibility).

При понижении уровня также отключаются все параметры SAML, настроенные в течение пробного периода. Если позднее вы приобретете {% data variables.product.prodname_enterprise %}, параметры SAML будут снова включены для пользователей в вашей организации для проверки подлинности.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
5. В разделе "Бесплатная пробная версия {% data variables.product.prodname_ghe_cloud %}" нажмите кнопку **Купить Enterprise** или **Вернуться на Team**.
  ![Кнопки "Купить Enterprise" и "Вернуться на Team"](/assets/images/help/organizations/finish-trial-buttons.png)
6. Следуйте инструкциям, чтобы указать метод оплаты, а затем нажмите кнопку **Отправить**.
