---
title: Сведения о выставлении счетов за GitHub Copilot
intro: 'Если вы хотите использовать {% data variables.product.prodname_copilot %}, вам потребуется подписка на {% data variables.product.prodname_copilot_for_individuals %} в личной учетной записи или организация должна назначить вам место в {% data variables.product.prodname_ghe_cloud %} с подпиской на {% data variables.product.prodname_copilot_for_business %}.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
ms.openlocfilehash: f82f284ac2bdb8a4bc56587ff17826ae7ca96585
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193435'
---
## Сведения о выставлении счетов за {% data variables.product.prodname_copilot %}

Если вы хотите использовать {% data variables.product.prodname_copilot %}, вам потребуется подписка на личную учетную запись {% data variables.product.prodname_dotcom %} или если вы являетесь членом организации {% data variables.product.prodname_ghe_cloud %} с подпиской на {% data variables.product.prodname_copilot_business_short %}, администратор организации должен назначить вам рабочее место. Дополнительные сведения о {% data variables.product.prodname_copilot %} см. в разделе [Сведения о {% data variables.product.prodname_copilot %}](/en/copilot/overview-of-github-copilot/about-github-copilot). 

Дополнительные сведения об управлении {% data variables.product.prodname_copilot %} через {% data variables.product.prodname_ghe_cloud %} см. [в разделе Применение политик для {% data variables.product.prodname_copilot %} на предприятии](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise){% ifversion ghec %}. {% endif %}"{% ifversion fpt %} в документации по {% data variables.product.prodname_ghe_cloud %}. {% endif %}

Перед запуском платной подписки для личной учетной записи можно настроить однократную 60-дневную пробную версию для оценки {% data variables.product.prodname_copilot %}. Чтобы начать использовать пробную версию, понадобится выбрать ежемесячный или годовой период выставления счетов и указать способ оплаты. Если не отменить пробную версию до истечения 60 дней, пробная версия будет автоматически преобразована в платную подписку. Пробную версию {% data variables.product.prodname_copilot %} можно отменить в любое время в течение 60 дней, и плата не будет взиматься. При отмене до окончания пробной версии у вас будет доступ к {% data variables.product.prodname_copilot %} до окончания 60-дневного пробного периода. Дополнительные сведения см. в разделе [Управление подпиской на {% data variables.product.prodname_copilot_for_individuals %}](/en/billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription).

## Цены на {% data variables.product.prodname_copilot_for_individuals %}


Подписка на {% data variables.product.prodname_copilot %} доступна с ежемесячной или ежегодной периодичностью выставления счетов. Если выбрать ежемесячный период выставления счетов, вам будет выставляться счет в размере 10 долл. США за календарный месяц. Если выбрать годовой период выставления счетов, вам будет выставляться счет в размере 100 долл. США в год. Вы можете изменить свой период выставления счетов в любое время, и изменение вступит в силу с начала вашего следующего периода выставления счетов.

Если у вас есть активная подписка {% data variables.product.prodname_copilot %}, а затем назначено рабочее место в рамках подписки {% data variables.product.prodname_copilot_for_business %} в {% data variables.product.prodname_ghe_cloud %}, ваша личная подписка {% data variables.product.prodname_copilot %} будет автоматически отменена. Вы получите пропорциональное возмещение за оставшуюся часть текущего цикла выставления счетов вашей личной подписки. После этого вы сможете продолжать использовать {% data variables.product.prodname_copilot %} в соответствии с политиками, установленными на уровне предприятия или организации.

Бесплатная подписка на {% data variables.product.prodname_copilot %} доступна для проверенных учащихся, преподавателей и пользователей популярных репозиториев с открытым кодом в {% data variables.product.company_short %}. Если вы соответствуете критериям как сопровождающий с открытым исходным кодом, вы будете автоматически уведомлены при посещении страницы подписки {% data variables.product.prodname_copilot %}. Если вы как учащийся сейчас получаете {% data variables.product.prodname_student_pack %}, вам также будет предложена бесплатная подписка при посещении страницы подписки {% data variables.product.prodname_copilot %}. Дополнительные сведения о {% data variables.product.prodname_student_pack %} см. в разделе [Заявка на {% data variables.product.prodname_global_campus %} в качестве учащегося](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student).

{% ifversion ghec %}
## Цены на {% data variables.product.prodname_copilot_for_business %}

Подписка на {% data variables.product.prodname_copilot_for_business %} доступна в течение ежемесячного цикла и оплачивается по цене 19 долл. США за каждого пользователя в месяц. Выставление счетов за {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_ghe_cloud %} обрабатывается в конце каждого цикла выставления счетов. 

Оплачиваемые пользователи рассчитываются на основе количества рабочих мест в {% data variables.product.prodname_copilot %}, назначенных в начале цикла выставления счетов или назначенных в течение цикла выставления счетов. Любое рабочее место, назначаемое частично в рамках цикла выставления счетов, будет пропорционально рассчитано на основе количества дней, оставшихся в цикле. Все назначения рабочих мест, удаленные во время цикла выставления счетов, вступают в силу с начала следующего цикла.

Назначением рабочих мест для {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_ghe_cloud %} управляют администраторы организаций, которым предоставлен доступ к {% data variables.product.prodname_copilot %} на уровне предприятия. Если вы являетесь членом нескольких организаций в рамках одного предприятия, вам могут быть назначены {% data variables.product.prodname_copilot %} рабочие места в нескольких организациях, но счет за ваше предприятие будет выставляться только один раз. Дополнительные сведения см. в разделе [Настройка параметров {% data variables.product.prodname_copilot %} в организации](/enterprise-cloud@latest/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization).

Параметры политики и обзор использования {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_ghe_cloud %} доступны на уровне предприятия. Дополнительные сведения см. [в разделах Применение политик для {% data variables.product.prodname_copilot %} в организации](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise) и [Просмотр использования {% data variables.product.prodname_copilot %}](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage).

{% endif %}
