---
title: Organization のチーム作成権限を設定する
intro: Organization のメンバーが Team を作成できるように許可する、もしくは Organization のオーナーのみ Team を作成できるように制限することができます。
redirect_from:
  - /articles/setting-team-creation-permissions-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/setting-team-creation-permissions-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict team creation
ms.openlocfilehash: 5a75d7a6b81422c6d0ad0a5d027d2b86feff49db
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119237'
---
Organization のオーナーは Team の作成権限を設定できます。

Team の作成権限を設定しなかった場合、デフォルトでは、すべての Organization メンバーが Team を作成できるようになります。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. [Team 作成ルール] で、 **[Team の作成をメンバーに許可する]** を選択または選択解除します。
![Team の作成をメンバーに許可するためのチェックボックス](/assets/images/help/organizations/allow-members-to-create-teams.png)
6. **[保存]** をクリックします。
