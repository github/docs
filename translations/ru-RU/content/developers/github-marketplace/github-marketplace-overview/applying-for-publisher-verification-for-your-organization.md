---
title: Подача заявки на подтверждение издателя для вашей организации
intro: 'Чтобы предлагать платные планы для приложения или добавить эмблему Marketplace в описание приложения, необходимо пройти процесс проверки издателя для вашей организации.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
redirect_from:
  - /developers/github-marketplace/applying-for-publisher-verification-for-your-organization
shortTitle: Publisher verification
ms.openlocfilehash: 34085acb78eba5057cea382ab250e4704dd958d1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089722'
---
Подтверждение издателя позволяет убедиться в том, что у {% data variables.product.prodname_dotcom %} есть возможность связи с вами, что вы включили двухфакторную проверку подлинности для организации и что домен вашей организации подтвержден.

После проверки организации вы можете публиковать платные планы для вашего приложения. Дополнительные сведения см. в разделе [Настройка тарифных планов для описания](/developers/github-marketplace/setting-pricing-plans-for-your-listing).

Чтобы можно было предложить платные планы для приложения, оно должно принадлежать организации, в которой у вас есть разрешения владельца. Если приложение в настоящее время принадлежит личной учетной записи, вам потребуется передать права владения приложением организации. Дополнительные сведения см. в разделе [Передача права владения приложением GitHub](/developers/apps/transferring-ownership-of-a-github-app) или [Передача владения приложением OAuth](/developers/apps/transferring-ownership-of-an-oauth-app).

## Запрос подтверждения издателя


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. На левой боковой панели щелкните **Developer settings** (Параметры разработчика).
  ![Пункт "Параметры разработчика" на боковой панели параметров организации](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. В разделе "Параметры разработчика" щелкните **Подтверждение издателя**.
  ![Пункт "Подтверждение издателя" на боковой панели параметров организации](/assets/images/marketplace/publisher-verification-settings-option.png)
1. В разделе "Подтверждение издателя" заполните сведения в контрольном списке:
   - Убедитесь в том, что основные сведения профиля указаны и точны. Кроме того, убедитесь в том, что вы указали самый подходящий адрес электронной почты для получения поддержки и новостей от {% data variables.product.company_short %}.
   - Убедитесь в том, что для организации включена двухфакторная проверка подлинности. Дополнительные сведения см. в разделе [Настройка требования двухфакторной проверки подлинности в организации](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization).
   - Отправьте подтвержденный домен и убедитесь в том, что на странице профиля организации отображается эмблема "Подтверждено". Связанные сведения см. в разделе [Проверка или утверждение домена для вашей организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

  ![Контрольный список подтверждения издателя](/assets/images/marketplace/publisher-verification-checklist.png)

2. Щелкните **Запросить подтверждение**. {% data variables.product.company_short %} проверит ваши сведения и сообщит о завершения подтверждения издателя.

## Дополнительные материалы

Сведения о процессе публикации приложений см. в разделе [Сведения о GitHub Marketplace](/developers/github-marketplace/about-github-marketplace).
