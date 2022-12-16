---
title: 엔터프라이즈에 대한 감사 로그 스트리밍
intro: '감사 및 Git 이벤트 데이터를 {% data variables.product.prodname_dotcom %}에서 외부 데이터 관리 시스템으로 스트림할 수 있습니다.'
miniTocMaxHeadingLevel: 3
versions:
  feature: audit-log-streaming
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Stream audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
ms.openlocfilehash: d8397a86be7e1d93bcd063b2713ca4c4f00a5386
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094043'
---
{% ifversion ghes %} {% note %}

**참고:** 감사 로그 스트리밍은 현재 {% data variables.product.product_name %}에 베타에 있으며 변경될 수 있습니다.

{% endnote %} {% endif %}

## 감사 로그 스트리밍 정보

지적 재산권을 보호하고 조직의 규정 준수를 유지하기 위해 스트리밍을 사용하여 감사 로그 데이터의 복사본을 유지하고 모니터링할 수 있습니다. {% data reusables.audit_log.audited-data-list %}

감사 데이터 스트리밍의 이점은 다음과 같습니다.

* **데이터 검색**. 대량의 데이터를 쿼리하기 위해 기본 설정 도구를 사용하여 스트림된 이벤트를 검사할 수 있습니다. 스트림에는 전체 엔터프라이즈 계정에 대한 감사 이벤트와 Git 이벤트가 모두 포함됩니다.{% ifversion pause-audit-log-stream %}
* **데이터 연속성**. 감사 데이터를 손실하지 않고 최대 7일 동안 스트림을 일시 중지할 수 있습니다.{% endif %}
* **데이터 보존**. 내보낸 감사 로그와 Git 이벤트 데이터는 필요한 기간만큼 유지할 수 있습니다.

엔터프라이즈 소유자는 언제든지 스트림을 설정{% ifversion pause-audit-log-stream %}, 일시 중지{% endif %} 또는 삭제할 수 있습니다. 스트림은 엔터프라이즈의 모든 조직에 대한 감사 및 Git 이벤트 데이터를 내보냅니다.

## 감사 로그 스트리밍 설정

공급자에 대한 지침에 따라 {% data variables.product.product_name %}에 대한 감사 로그 스트림을 설정합니다.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Azure Blob Storage](#setting-up-streaming-to-azure-blob-storage)
- [Azure Event Hubs](#setting-up-streaming-to-azure-event-hubs){% ifversion streaming-datadog %}
- [Datadog](#setting-up-streaming-to-datadog){% endif %}
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Amazon S3으로 스트리밍 설정

{% ifversion streaming-oidc-s3 %} 액세스 키를 사용하여 S3에 스트리밍을 설정하거나 OIDC(OpenID Connect)를 사용하여 {% data variables.product.product_name %}에 수명이 긴 비밀을 저장하지 않도록 할 수 있습니다.

- [액세스 키를 사용하여 S3으로 스트리밍 설정](#setting-up-streaming-to-s3-with-access-keys)
- [OpenID Connect를 사용하여 S3으로 스트리밍 설정](#setting-up-streaming-to-s3-with-openid-connect)
- [OpenID Connect를 사용하여 S3으로 스트리밍을 사용하지 않도록 설정](#disabling-streaming-to-s3-with-openid-connect)

#### 액세스 키를 사용하여 S3으로 스트리밍 설정
{% endif %}

감사 로그를 Amazon의 S3 엔드포인트로 스트림하려면 버킷 및 액세스 키가 있어야 합니다. 자세한 내용은 AWS 설명서의 [Amazon S3 버킷 만들기, 구성, 사용](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html)을 참조하세요. 감사 로그 정보를 보호하기 위해 버킷에 대한 퍼블릭 액세스를 차단해야 합니다. 

{% data variables.product.prodname_dotcom %}에서 감사 로그 스트리밍을 설정하려면 다음 항목이 필요합니다.
* Amazon S3 버킷의 이름
* AWS 액세스 키 ID
* AWS 비밀 키

액세스 키 ID 및 비밀 키를 만들거나 액세스하는 방법에 대한 자세한 내용은 AWS 설명서의 [AWS 자격 증명 이해 및 가져오기](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)를 참조하세요.

{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}{% ifversion streaming-oidc-s3 %}
1. “인증”에서 **액세스 키** 를 클릭합니다.

   ![Amazon S3으로 스트리밍하기 위한 인증 옵션의 스크린샷](/assets/images/help/enterprises/audit-log-streaming-s3-access-keys.png){% endif %}
1. 스트림 설정을 구성합니다.

   - “버킷”에서 스트리밍할 버킷의 이름을 입력합니다. 예: `auditlog-streaming-test`.
   - “액세스 키 ID”에서 액세스 키 ID를 입력합니다. 예: `ABCAIOSFODNN7EXAMPLE1`.
   - “비밀 키”에서 비밀 키를 입력합니다. 예: `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-oidc-s3 %}
#### OpenID Connect를 사용하여 S3으로 스트리밍 설정

1. AWS에서 {% data variables.product.prodname_dotcom %} OIDC 공급자를 IAM에 추가합니다. 자세한 내용은 AWS 설명서에서 [OIDC(OpenID Connect) ID 공급자 만들기](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)를 참조하세요.

   - 공급자 URL의 경우 `https://oidc-configuration.audit-log.githubusercontent.com`을 사용합니다.
   - “대상 그룹”의 경우 `sts.amazonaws.com`을 사용합니다.
1. 버킷을 만들고 버킷에 대한 퍼블릭 액세스를 차단합니다. 자세한 내용은 AWS 설명서의 [Amazon S3 버킷 만들기, 구성, 사용](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html)을 참조하세요.
1. 다음 JSON을 복사하고 버킷의 이름으로 바꿔 {% 데이터 variables.product.company_short %}이 `EXAMPLE-BUCKET` (가) 버킷에 쓸 수 있도록 하는 정책을 만듭니다. {% 데이터 variables.product.prodname_dotcom %}에는 이 JSON의 권한만 필요합니다.

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::EXAMPLE-BUCKET/*"
        }
      ]
   }
   ```
   자세한 내용은 AWS 설명서의 [IAM 정책 만들기](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html)를 참조하세요.
1. {% data variables.product.prodname_dotcom %} IdP에 대한 역할 및 신뢰 정책을 구성합니다. 자세한 내용은 AWS 설명서에서 [웹 ID 또는 OpenID Connect Federation(콘솔)에 대한 역할 만들기](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html)를 참조하세요.
  
   - 버킷에 대한 쓰기를 허용하도록 위에서 만든 사용 권한 정책을 추가합니다.
   - 신뢰 관계를 편집하여 유효성 검사 조건에 `sub` 필드를 추가하고 `ENTERPRISE`를 엔터프라이즈 이름으로 바꿉니다.
     ```
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```
   - 만든 역할의 ARN(Amazon Resource Name)을 기록해 둡니다.
{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}
1. “인증”에서 **OpenID Connect** 를 클릭합니다.

   ![Amazon S3으로 스트리밍하기 위한 인증 옵션의 스크린샷](/assets/images/help/enterprises/audit-log-streaming-s3-oidc.png)
1. 스트림 설정을 구성합니다.

   - “버킷”에서 스트리밍할 버킷의 이름을 입력합니다. 예: `auditlog-streaming-test`.
   - “ARN 역할” 아래에 앞에서 적어 두던 ARN 역할을 입력합니다. 예: `arn:aws::iam::1234567890:role/github-audit-log-streaming-role`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

#### OpenID Connect를 사용하여 S3으로 스트리밍을 사용하지 않도록 설정

OIDC의 보안 취약성 검색과 같은 이유로 OIDC를 사용하여 S3으로 스트리밍을 사용하지 않도록 설정하려면 스트리밍을 설정할 때 AWS에서 만든 {% data variables.product.prodname_dotcom %} OIDC 공급자를 삭제합니다. 자세한 내용은 AWS 설명서에서 [OIDC(OpenID Connect) ID 공급자 만들기](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)를 참조하세요.

그런 다음, 취약성이 해결될 때까지 액세스 키를 사용하여 스트리밍을 설정합니다. 자세한 내용은 “[액세스 키를 사용하여 S3으로 스트리밍 설정](#setting-up-streaming-to-s3-with-access-keys)”을 참조하세요.

{% endif %}

### Azure Blob Storage로 스트리밍 설정

{% data variables.product.prodname_dotcom %}에서 스트림을 설정하기 전에 먼저 Microsoft Azure에서 스토리지 계정과 컨테이너를 만들어야 합니다. 자세한 내용은 Microsoft 설명서의 "[Azure Blob Storage 소개](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)"를 참조하세요. 

{% data variables.product.prodname_dotcom %}에서 스트림을 구성하려면 SAS 토큰의 URL이 필요합니다.

**Microsoft Azure Portal**:
1. 홈페이지에서 **스토리지 계정** 을 클릭합니다.
2. 사용하려는 스토리지 계정의 이름을 클릭한 다음, **컨테이너** 를 클릭합니다.
   
   ![Azure의 컨테이너 링크](/assets/images/azure/azure-storage-containers.png)

1. 사용하려는 컨테이너의 이름을 클릭합니다.
1. **공유 액세스 토큰** 을 클릭합니다. 
   
   ![Azure의 공유 액세스 토큰 링크](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. **권한** 드롭다운 메뉴에서 `Create` 및 `Write`만 허용하도록 권한을 변경합니다.
   
   ![권한 드롭다운 메뉴](/assets/images/azure/azure-storage-permissions.png)

1. 비밀 회전 정책을 준수하는 만료 날짜를 설정합니다.
1. **SAS 토큰 및 URL 생성** 을 클릭합니다.
1. 표시된 **Blob SAS URL** 필드의 값을 복사합니다. 이 URL은 {% data variables.product.prodname_dotcom %}에서 사용합니다.

**On {% data variables.product.prodname_dotcom %}** : {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **스트림 구성** 을 클릭하고, **Azure Blob Storage** 를 선택합니다.
   
   ![드롭다운 메뉴에서 Azure Blob Storage 선택](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. 구성 페이지에서 Azure에 복사한 Blob SAS URL을 입력합니다. **컨테이너** 필드는 URL에 따라 자동으로 채워집니다.

   ![스트림 설정 입력](/assets/images/help/enterprises/audit-stream-add-azureblob.png)
  
1. **엔드포인트 확인** 을 클릭하여 {% data variables.product.prodname_dotcom %}에서 Azure Blob Storage 엔드포인트에 연결하고 쓸 수 있는지 확인합니다.
   
   ![엔드포인트 확인](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Azure Event Hubs로 스트리밍 설정

{% data variables.product.prodname_dotcom %}에서 스트림을 설정하기 전에 먼저 Microsoft Azure에 이벤트 허브 네임스페이스가 있어야 합니다. 다음으로, 이벤트 허브 인스턴스를 네임스페이스 내에 만들어야 합니다. 이 이벤트 허브 인스턴스의 세부 정보는 스트림을 설정할 때 필요합니다. 자세한 내용은 Microsoft 설명서의 "[빠른 시작: Azure Portal을 사용하여 이벤트 허브 만들기](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)"를 참조하세요. 

이벤트 허브에 대한 두 가지 정보, 즉 인스턴스 이름과 연결 문자열이 필요합니다. 

**Microsoft Azure Portal**:
1. "Event Hubs"를 검색합니다.

   ![Azure Portal 검색 상자](/assets/images/azure/azure-resources-search.png )

1. **Event Hubs** 를 선택합니다. 이벤트 허브의 이름이 나열됩니다. 
   
   ![이벤트 허브 목록](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. 스트림하려는 이벤트 허브의 이름을 적어 둡니다.
1. 필요한 이벤트 허브를 클릭합니다. 그런 다음, 왼쪽 메뉴에서 **공유 액세스 정책** 을 선택합니다.
1. 정책 목록에서 공유 액세스 정책을 선택하거나 새 정책을 만듭니다.
   
   ![공유 액세스 정책 목록](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. **연결 문자열-기본 키** 필드의 오른쪽에 있는 단추를 클릭하여 연결 문자열을 복사합니다.
   
   ![이벤트 허브 연결 문자열](/assets/images/help/enterprises/azure-connection-string.png)

**On {% data variables.product.prodname_dotcom %}** : {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **스트림 구성** 을 클릭하고, **Azure Event Hubs** 를 선택합니다.
   
   ![드롭다운 메뉴에서 Azure Events Hub 선택](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. 구성 페이지에서 다음을 입력합니다.
   * Azure Event Hubs 인스턴스의 이름
   * 연결 문자열입니다.
  
   ![스트림 설정 입력](/assets/images/help/enterprises/audit-stream-add-azure.png)
   
1. **엔드포인트 확인** 을 클릭하여 {% data variables.product.prodname_dotcom %}에서 Azure Events Hub 엔드포인트에 연결하고 쓸 수 있는지 확인합니다.
   
   ![엔드포인트 확인](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-datadog %}
### Datadog로 스트리밍 설정

Datadog에 대한 스트리밍을 설정하려면 Datadog에서 클라이언트 토큰 또는 API 키를 만든 다음 인증을 위해 토큰을 사용하여 {% data variables.product.product_name %}에서 감사 로그 스트리밍을 구성해야 합니다. Datadog에서 버킷 또는 다른 스토리지 컨테이너를 만들 필요가 없습니다.

Datadog에 대한 스트리밍을 설정한 후 “github.audit.streaming”으로 필터링하여 감사 로그 데이터를 볼 수 있습니다. 자세한 내용은 [로그 관리](https://docs.datadoghq.com/logs/)를 참조하세요.

1. Datadog 계정이 아직 없는 경우 하나 만듭니다.
1. Datadog에서 클라이언트 토큰 또는 API 키를 생성한 다음 **키 복사** 를 클릭합니다. 자세한 내용은 Datadog Docs의 [API 및 애플리케이션 키](https://docs.datadoghq.com/account_management/api-app-keys/)를 참조하세요. {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **스트림 구성** 드롭다운 메뉴를 선택하고 **Datadog** 를 클릭합니다.
   
   ![“Datadog”가 강조 표시된 “스트림 구성” 드롭다운 메뉴의 스크린샷](/assets/images/help/enterprises/audit-stream-choice-datadog.png)
1. "토큰"에서 이전에 복사한 토큰을 붙여 넣습니다.

   ![“토큰” 필드의 스크린샷](/assets/images/help/enterprises/audit-stream-datadog-token.png)
1. “사이트” 드롭다운 메뉴를 선택하고 Datadog 사이트를 클릭합니다. Datadog 사이트를 확인하려면 Datadog URL을 Datadog Docs의 [Datadog 사이트](https://docs.datadoghq.com/getting_started/site/) 내 테이블과 비교합니다.

   ![“사이트” 드롭다운 메뉴의 스크린샷](/assets/images/help/enterprises/audit-stream-datadog-site.png)
1. {% data variables.product.prodname_dotcom %}가 Datadog 엔드포인트에 연결하고 쓸 수 있는지 확인하려면 **엔드포인트 확인** 을 클릭합니다.
   
   ![엔드포인트 확인](/assets/images/help/enterprises/audit-stream-check.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}
1. 몇 분 후 Datadog의 **로그** 탭에 감사 로그 데이터가 표시되는지 확인합니다. 감사 로그 데이터가 표시되지 않으면 {% data variables.product.prodname_dotcom %}에서 토큰 및 사이트가 올바른지 확인합니다.
{% endif %}

### Google Cloud Storage로 스트리밍 설정

Google Cloud Storage로 스트림하도록 설정하려면 적절한 자격 증명 및 권한을 사용하여 Google Cloud에서 서비스 계정을 만든 다음, 인증을 위해 서비스 계정의 자격 증명을 사용하여 {% data variables.product.product_name %}에서 감사 로그 스트리밍을 구성해야 합니다.

1. Google Cloud에 대한 서비스 계정을 만듭니다. 서비스 계정에 대한 액세스 제어 또는 IAM 역할을 설정할 필요가 없습니다. 자세한 내용은 Google Cloud 설명서의 [서비스 계정 만들기 및 관리](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating)를 참조하세요.
1. 서비스 계정에 대한 JSON 키를 만들고, 해당 키를 안전하게 저장합니다. 자세한 내용은 Google Cloud 설명서의 [서비스 계정 키 만들기 및 관리](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating)를 참조하세요.
1. 아직 만들지 않은 경우 버킷을 만듭니다. 자세한 내용은 Google Cloud 설명서의 [스토리지 버킷 만들기](https://cloud.google.com/storage/docs/creating-buckets)를 참조하세요.
1. 버킷에 대한 스토리지 개체 작성자 역할을 서비스 계정에 부여합니다. 자세한 내용은 Google Cloud 설명서의 [Cloud IAM 권한 사용](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add)을 참조하세요.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. 스트림 구성 드롭다운 메뉴를 선택하고, **Google Cloud Storage** 를 클릭합니다.

   !["스트림 구성" 드롭다운 메뉴의 스크린샷](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. "버킷" 아래에서 Google Cloud Storage 버킷의 이름을 입력합니다.

   !["버킷" 텍스트 필드의 스크린샷](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. "JSON 자격 증명" 아래에서 서비스 계정의 JSON 키에 대한 파일의 전체 콘텐츠를 붙여넣습니다.

   !["JSON 자격 증명" 텍스트 필드의 스크린샷](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. {% data variables.product.prodname_dotcom %}에서 Google Cloud Storage 버킷에 연결하고 쓸 수 있는지 확인하려면 **엔드포인트 확인** 을 클릭합니다. 

   !["엔드포인트 확인" 단추의 스크린샷](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Splunk로 스트리밍 설정

감사 로그를 Splunk의 HEC(HTTP 이벤트 수집기) 엔드포인트로 스트림하려면 엔드포인트가 HTTPS 연결을 허용하도록 구성되어 있는지 확인해야 합니다. 자세한 내용은 Splunk 설명서의 [Splunk Web에서 HTTP 이벤트 수집기 설정 및 사용](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector)을 참조하세요.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **스트림 구성** 을 클릭하고, **Splunk** 를 선택합니다.
   
   ![드롭다운 메뉴에서 Splunk 선택](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. 구성 페이지에서 다음을 입력합니다.
   * 스트림하려는 애플리케이션이 호스트되는 도메인
  
     Splunk Cloud를 사용하는 경우 `Domain`는 `http-inputs-<host>`여야 합니다. 여기서 `host`는 Splunk Cloud에서 사용하는 도메인입니다. 예: `http-inputs-mycompany.splunkcloud.com` 

   * 애플리케이션에서 데이터를 허용하는 포트<br>

     Splunk Cloud를 사용하는 경우 `Port`는 `443`이어야 합니다(포트 구성을 변경하지 않은 경우). Splunk Cloud 평가판 버전을 사용하는 경우 `Port`는 `8088`이어야 합니다.

   * {% data variables.product.prodname_dotcom %}에서 타사 애플리케이션에 인증하는 데 사용할 수 있는 토큰
  
   ![스트림 설정 입력](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. **SSL 확인 사용** 확인란을 선택된 상태로 둡니다.

    감사 로그는 항상 암호화된 데이터로 스트림되지만, 이 옵션을 선택하면 {% data variables.product.prodname_dotcom %}에서 이벤트를 전달할 때 Splunk 인스턴스의 SSL 인증서를 확인합니다. SSL 확인은 이벤트가 URL 엔드포인트에 안전하게 전달되도록 하는 데 도움이 됩니다. 이 옵션의 선택을 취소할 수 있지만, SSL 확인이 사용하도록 설정된 상태로 두는 것이 좋습니다.
1. **엔드포인트 확인** 을 클릭하여 {% data variables.product.prodname_dotcom %}에서 Splunk 엔드포인트에 연결하고 쓸 수 있는지 확인합니다.
   ![엔드포인트 확인](/assets/images/help/enterprises/audit-stream-check-splunk.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion pause-audit-log-stream %}
## 감사 로그 스트리밍 일시 중지

스트림을 일시 중지하면 감사 데이터를 손실하지 않고 수신 애플리케이션에 대한 유지 관리를 수행할 수 있습니다. 감사 로그는 {% 데이터 variables.location.product_location %}에 최대 7일 동안 저장되며 스트림을 일시 중지하면 내보내집니다.

{% ifversion streaming-datadog %} Datadog는 과거 최대 18시간의 로그만 허용합니다. 18시간 이상 Datadog 엔드포인트로 스트림을 일시 중지하는 경우 스트리밍을 다시 시작하면 Datadog에서 허용하지 않는 로그가 손실될 위험이 있습니다.
{% endif %}

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **스트림 일시 중지** 를 클릭합니다.
   
   ![스트림 일시 중지](/assets/images/help/enterprises/audit-stream-pause.png)

1. 확인 메시지가 표시됩니다. **스트림 일시 중지** 를 클릭하여 확인합니다.

애플리케이션에서 감사 로그를 다시 받을 준비가 되면 **스트림 다시 시작** 을 클릭하여 감사 로그 스트리밍을 다시 시작합니다.
{% endif %}

## 감사 로그 스트림 삭제

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **스트림 삭제** 를 클릭합니다.
   
   ![스트림 삭제](/assets/images/help/enterprises/audit-stream-delete.png)

1. 확인 메시지가 표시됩니다. **스트림 삭제** 를 클릭하여 확인합니다.
