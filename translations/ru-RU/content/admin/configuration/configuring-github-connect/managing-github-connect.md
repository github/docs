---
title: Управление GitHub Connect
shortTitle: Manage GitHub Connect
intro: 'Вы можете включить {% data variables.product.prodname_github_connect %} доступ к дополнительным функциям и рабочим процессам для {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
ms.openlocfilehash: 30a170543b63c390aa8975b1ca57c265bc7fa8fa
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160657'
---
{% data reusables.github-connect.beta %}

## Сведения о {% data variables.product.prodname_github_connect %}

Вы можете получить доступ к дополнительным функциям и рабочим процессам в {% data variables.location.product_location %}, включив {% data variables.product.prodname_github_connect %}. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).

При включении {% data variables.product.prodname_github_connect %} вы настраиваете подключение между {% data variables.location.product_location %} и учетной записью организации или предприятия в {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %}

При включении {% data variables.product.prodname_github_connect %} создается {% data variables.product.prodname_github_app %}, принадлежащее организационной или корпоративной учетной записи в {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.product_name %} использует учетные данные {% data variables.product.prodname_github_app %}, чтобы отправлять запросы в {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %} {% data variables.product.prodname_ghe_server %} хранит учетные данные из {% data variables.product.prodname_github_app %}. Следующие учетные данные будут реплицированы на все узлы в среде высокого уровня доступности или кластерной среде и хранятся в любых резервных копиях, включая моментальные снимки, созданные {% data variables.product.prodname_enterprise_backup_utilities %}.
- Маркер проверки подлинности, действительный в течение одного часа
- Закрытый ключ, который используется для создания нового маркера проверки подлинности {% endif %}

## Предварительные требования

Для использования {% data variables.product.prodname_github_connect %} вам необходима организационная или корпоративная учетная запись в {% data variables.product.prodname_dotcom_the_website %}, которая использует {% data variables.product.prodname_ghe_cloud %}. Возможно, у вас уже есть облако {% data variables.product.prodname_ghe_cloud %}, включенное в ваш план. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %} Если ваша учетная запись организации или предприятия в {% data variables.product.prodname_dotcom_the_website %} использует списки разрешенных IP-адресов, необходимо добавить IP-адрес или сеть для {% data variables.location.product_location %} в список разрешенных IP-адресов в {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в разделах [Управление разрешенными IP-адресами для вашей организации](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) и [Обеспечение применения политик параметров безопасности в вашем предприятии](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise) в документации {% data variables.product.prodname_ghe_cloud %}.

Для настройки подключения конфигурация прокси-сервера должна разрешать подключение к `github.com`, `api.github.com` и `uploads.github.com`. Дополнительные сведения см. в разделе [Подключение с использованием исходящего веб-прокси-сервера](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server).
{% endif %}

## Включение {% data variables.product.prodname_github_connect %}

Владельцы предприятия, являющиеся также владельцами организационной или корпоративной учетной записи, которая использует {% data variables.product.prodname_ghe_cloud %}, могут включать {% data variables.product.prodname_github_connect %}.

Если вы подключаете {% data variables.location.product_location %} к организации на {% data variables.product.prodname_ghe_cloud %}, которая не принадлежит корпоративной учетной записи, необходимо войти в {% data variables.product.prodname_dotcom_the_website %} в качестве владельца организации.

Если вы подключаете {% data variables.location.product_location %} к организации на {% data variables.product.prodname_ghe_cloud %}, принадлежащей корпоративной учетной записи, или к самой корпоративной учетной записи, необходимо войти в {% data variables.product.prodname_dotcom_the_website %} в качестве владельца предприятия.

{% ifversion ghes %}
1. Войдите в {% data variables.location.product_location %} и {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Войдите в {% data variables.location.product_location %} и {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. В разделе "{% data variables.product.prodname_github_connect %} еще не включен" нажмите **Включить {% data variables.product.prodname_github_connect %}** . Нажимая **Включить {% data variables.product.prodname_github_connect %}** , вы соглашаетесь с <a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">условиями для дополнительных продуктов и компонентов {% data variables.product.prodname_dotcom %}</a>.
{% ifversion ghes %} ![Кнопка "Включить GitHub Connect"](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %} ![Кнопка "Включить GitHub Connect"](/assets/images/enterprise/github-ae/enable-github-connect-button.png) {% endif %}
1. Рядом с корпоративной учетной записью или организацией, которую вы хотите подключить, нажмите **Подключить**.
  ![Кнопка "Подключить" рядом с корпоративной учетной записью или организацией](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Отключение {% data variables.product.prodname_github_connect %}

Владельцы предприятия могут отключить {% data variables.product.prodname_github_connect %}.

При отключении от {% data variables.product.prodname_ghe_cloud %} {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} удаляется из вашей корпоративной учетной записи или организации, а учетные данные, хранящиеся в {% data variables.location.product_location %}, удаляются.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Рядом с корпоративной учетной записью или организацией, которую вы хотите отключить, нажмите **Отключить {% data variables.product.prodname_github_connect %}** .
{% ifversion ghes %} ![Кнопка "Отключить GitHub Connect" рядом с корпоративной учетной записью или именем организации](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Прочтите сведения об отключении и нажмите кнопку **Отключить {% data variables.product.prodname_github_connect %}** .
  ![Модальное окно с предупреждающей информацией об отключении и кнопкой подтверждения](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)  
{% else %} ![Кнопка "Отключить GitHub Connect" рядом с корпоративной учетной записью или именем организации](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Прочтите сведения об отключении и нажмите кнопку **Отключить {% data variables.product.prodname_github_connect %}** .
  ![Модальное окно с предупреждающей информацией об отключении и кнопкой подтверждения](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png) {% endif %} 
