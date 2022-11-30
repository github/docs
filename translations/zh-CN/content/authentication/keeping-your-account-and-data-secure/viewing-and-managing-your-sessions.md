---
title: 查看和管理会话
intro: 可以在设置中查看和撤销活动的会话。
versions:
  feature: device-and-settings-management-page
type: how_to
topics:
  - SSO
shortTitle: Viewing and managing sessions
ms.openlocfilehash: 15a0bdc17a913ceb6da27e8809610306adb1de25
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165575'
---
可以查看已登录到帐户的设备列表，并撤销无法识别的任何会话。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. 在“Web 会话”下，可以看到活动的 Web 会话。
   
   ![活动会话列表的屏幕截图](/assets/images/help/settings/saml-active-sessions.png) {% ifversion fpt or ghec %}在 “{% data variables.product.prodname_mobile %} 会话”下，可以看到通过 {% data variables.product.prodname_mobile %} 应用登录到帐户的设备列表。

   ![活动会话列表的屏幕截图](/assets/images/help/settings/github-mobile-active-sessions.png){% endif %}

1. 若要查看 Web 会话详细信息，请单击“查看更多”。
   
   ![“会话”页的屏幕截图，其中突出显示了用于打开会话详细信息的按钮](/assets/images/help/settings/saml-expand-session-details.png)

1. 若要撤销 Web 会话，请单击“撤销会话”。
    
    ![“会话详细信息”页的屏幕截图，其中突出显示了用于撤销会话的按钮](/assets/images/help/settings/revoke-session.png)

{% ifversion fpt or ghec %}
1. （可选）若要撤销 {% data variables.product.prodname_mobile %} 会话，请返回到“会话概述”页面，然后单击要撤销的设备旁边的“撤销”。 

    {% note %}

    注意：撤销移动会话会使你从该设备上退出 {% data variables.product.prodname_mobile %} 应用程序，并将其作为第二因素选项移除。 

    {% endnote %}

    ![“会话”页的屏幕截图，其中突出显示了用于撤销移动会话的按钮](/assets/images/help/settings/revoke-mobile-session.png)
    
{% endif %}

