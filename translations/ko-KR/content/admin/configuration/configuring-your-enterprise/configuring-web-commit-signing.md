---
title: 웹 커밋 서명 구성
shortTitle: Configure web commit signing
intro: '{% data variables.product.product_name %}의 웹 인터페이스에서 만든 커밋의 자동 서명을 사용하도록 설정할 수 있습니다.'
versions:
  ghes: '>=3.5'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators can configure web commit signing for {% data variables.location.product_location %}.'
ms.openlocfilehash: ae836ff3f1ff9a73a511ec0678a8f5d402792070
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098118'
---
## 웹 커밋 서명 정보

웹 커밋 서명을 사용하도록 설정하면 {% 데이터 variables.product.product_name %}에서 자동으로 GPG를 사용하여 사용자가 {% 데이터 variables.location.product_location %}의 웹 인터페이스에서 만드는 커밋에 서명합니다. {% data variables.product.product_name %}으로 서명한 커밋은 확인됨 상태가 됩니다. 자세한 내용은 “[커밋 서명 확인 정보](/authentication/managing-commit-signature-verification/about-commit-signature-verification)”를 참조하세요.

웹 커밋 서명을 사용하도록 설정하고, 웹 커밋 서명에 사용하는 프라이빗 키를 회전하고, 웹 커밋 서명을 사용하지 않도록 설정할 수 있습니다.

## 웹 커밋 서명을 사용하도록 설정

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
    - 사용자 이름으로 `web-flow`를 사용합니다. 사용할 수 없거나 사용할 수 없는 경우 `web-flow` 새 고유한 사용자 이름을 사용합니다. 이 문서의 다음 단계에서 이 사용자 이름을 사용합니다.
   - {% data variables.enterprise.management_console %}에 정의된 회신 금지 이메일 주소가 있는 경우 해당 이메일 주소를 사용합니다. 그렇지 않은 경우 이메일 주소(예: `web-flow@my-company.com`)를 사용합니다. 이메일 주소는 유효하지 않아도 됩니다.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. 웹 커밋 서명을 사용하도록 설정합니다.

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. 구성을 적용한 다음 구성 실행이 완료될 때까지 기다립니다.

   ```bash{:copy}
   ghe-config-apply
   ```
1. 기본 제공 인증 또는 외부 인증을 통해 {% 데이터 variables.location.product_location %}에 새 사용자를 만듭니다. 자세한 내용은 “[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”를 참조하세요.
   - 사용자의 사용자 이름은 위의 1단계에서 PGP 키를 만들 때 사용한 것과 동일한 사용자 이름이어야 합니다. 예를 들면 다음과 같습니다 `web-flow`. 
   - 사용자의 이메일 주소는 PGP 키를 만들 때 사용한 주소와 동일해야 합니다. {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %} {% data reusables.enterprise_site_admin_settings.email-settings %}
1. "회신 없음 전자 메일 주소"에서 PGP 키를 만들 때 사용한 것과 동일한 전자 메일 주소를 입력합니다. 

   {% note %}

   **참고:** {% 데이터 variables.location.product_location %}에 대해 전자 메일을 사용하도록 설정한 경우에만 "회신 없음 전자 메일 주소" 필드가 표시됩니다. 자세한 내용은 “[알림에 사용할 메일 구성](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise)”을 참조하세요.

   {% endnote %} {% data reusables.enterprise_management_console.save-settings %}

## 웹 커밋 서명에 사용하는 프라이빗 키 회전

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - 예를 들어 `web-flow`웹 커밋 서명 사용자의 사용자 이름을 사용합니다.
   - 예를 들어 `web-flow`웹 커밋 서명 사용자의 전자 메일 주소와 동일해야 하는 {% 데이터 variables.enterprise.management_console %}에 정의된 회신 없음 전자 메일 주소를 사용합니다.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %} {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## 웹 커밋 서명을 사용하지 않도록 설정

{% 데이터 variables.location.product_location %}에 대한 웹 커밋 서명을 사용하지 않도록 설정할 수 있습니다.

1. 관리 셸에서 다음 명령을 실행합니다.

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. 구성을 적용합니다.

   ```bash{:copy}
   ghe-config-apply
   ```
