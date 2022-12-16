---
title: GitHub Desktop에서의 알림 구성
shortTitle: Configuring notifications
intro: '{% data variables.product.prodname_desktop %}은 끌어오기 요청 분기에서 발생하는 이벤트에 대한 알림을 최신 상태로 유지합니다.'
versions:
  fpt: '*'
ms.openlocfilehash: e7d99c4c81b64facae41b7697cde9d454e15e96a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060436'
---
## {% data variables.product.prodname_desktop %}에서의 알림 정보

{% data variables.product.prodname_desktop %}은 현재 선택된 리포지토리에서 발생하는 이벤트에 대한 시스템 알림을 표시합니다. 알림은 다음과 같은 경우에 표시됩니다.

- 끌어오기 요청 검사에 실패했습니다.
- 끌어오기 요청 검토에는 주석, 승인 또는 요청된 변경 내용이 남아 있습니다.

알림을 클릭하면 애플리케이션 포커스가 {% data variables.product.prodname_desktop %}으로 전환되어 더욱 자세한 정보를 제공합니다.

## 끌어오기 요청 검사 실패에 대한 알림

끌어오기 요청 분기를 변경하면 검사 실패 시 알림이 표시됩니다.

![끌어오기 요청 검사 실패 알림](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

알림을 클릭하면 검사 세부 정보가 포함된 대화 상자가 표시됩니다. 검사가 실패한 이유를 검토한 후에는 검사를 다시 실행하거나, 끌어오기 요청 분기로 신속하게 전환하여 오류 수정을 시작할 수 있습니다. 자세한 내용은 "[GitHub Desktop에서 검사 보기 및 다시 실행](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)"을 참조하세요.

![검사 실패 대화 상자](/assets/images/help/desktop/checks-failed-dialog.png)
## 끌어오기 요청 검토 알림

{% data variables.product.prodname_desktop %}은 팀 동료가 끌어오기 요청의 변경 내용을 승인, 주석 처리 또는 요청할 때 시스템 알림을 표시합니다. 끌어오기 요청에 대한 자세한 내용은 "[끌어오기 요청 검토 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)"를 참조하세요.

![끌어오기 요청 검토 알림](/assets/images/help/desktop/pull-request-review-notification.png)

알림을 클릭하면 애플리케이션 포커스가 {% data variables.product.prodname_desktop %}으로 전환되어 끌어오기 요청 검토 주석에 관한 더 자세한 정보를 제공합니다.

![끌어오기 요청 검토 대화 상자](/assets/images/help/desktop/pull-request-review-dialog.png)
## 알림 사용

{% data variables.product.prodname_desktop %}에 시스템 알림을 사용하지 않도록 설정한 경우에는 아래 단계에 따라 사용하도록 설정할 수 있습니다.

{% mac %}

1. **Apple** 메뉴를 클릭한 다음 **시스템 기본 설정** 을 선택합니다.
2. **알림 및 포커스** 를 선택합니다.
3. 애플리케이션 목록에서 **{% data variables.product.prodname_desktop %}** 을 선택합니다.
4. **알림 허용** 을 클릭합니다.

![macOS 알림 및 포커스](/assets/images/help/desktop/mac-enable-notifications.png)

macOS 시스템 알림에 대한 자세한 내용은 "[Mac에서 알림 사용](https://support.apple.com/en-us/HT204079)"을 참조하세요.

{% endmac %}

{% windows %}

1. **시작** 메뉴를 열고 **설정** 을 선택합니다.
2. **시스템** 을 선택한 다음 **알림** 을 클릭합니다.
3. 애플리케이션 목록에서 **{% data variables.product.prodname_desktop %}** 을 찾고 **켜기** 를 클릭합니다.

![Windows 알림 사용](/assets/images/help/desktop/windows-enable-notifications.png)

Windows 시스템 알림에 대한 자세한 내용은 "[Windows에서의 알림 설정 변경](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)"을 참조하세요.

{% endwindows %}
