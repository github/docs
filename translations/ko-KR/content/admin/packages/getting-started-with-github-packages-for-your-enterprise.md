---
title: 엔터프라이즈를 위한 GitHub Packages 시작
shortTitle: Getting started with GitHub Packages
intro: '기능을 사용하도록 설정하고, 타사 스토리지를 구성하고, 지원하려는 에코시스템을 구성하고, TLS 인증서를 업데이트하여 {% 데이터 variables.location.product_location %}에서 {% 데이터 variables.product.prodname_registry %} 사용을 시작할 수 있습니다.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
ms.openlocfilehash: d437b69ecbe3a7c3f9221e7495cf8b01b9faa0b3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098677'
---
{% data reusables.package_registry.packages-cluster-support %}

## 1단계: 엔터프라이즈에서 {% data variables.product.prodname_registry %}를 사용할 수 있는지 확인

{% data variables.product.prodname_registry %}는 {% data variables.product.prodname_ghe_server %} 3.0 이상에서 사용할 수 있습니다. 이전 버전의 {% data variables.product.prodname_ghe_server %}를 사용하는 경우 {% data variables.product.prodname_registry %}를 사용하도록 업그레이드해야 합니다. {% data variables.product.prodname_ghe_server %} 인스턴스 업그레이드에 대한 자세한 내용은 “[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”를 참조하세요.
## 2단계: {% data variables.product.prodname_registry %} 사용 및 외부 스토리지 구성

{% data variables.product.prodname_ghe_server %}의 {% data variables.product.prodname_registry %}는 외부 Blob 스토리지를 사용하여 패키지를 저장합니다.

{% 데이터 variables.product.prodname_registry %}에 대해 {% 데이터 variables.location.product_location %}을(를) 사용하도록 설정한 후에는 타사 스토리지 버킷을 준비해야 합니다. 필요한 스토리지 양은 {% data variables.product.prodname_registry %} 사용량에 따라 다르며 설정 지침은 스토리지 공급자에 따라 다를 수 있습니다.

지원되는 외부 스토리지 공급자
- AWS(Amazon Web Services) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

{% data variables.product.prodname_registry %}를 사용하고 타사 스토리지를 구성하려면 다음을 참조하세요.
  - “[AWS에서 GitHub 패키지 사용](/admin/packages/enabling-github-packages-with-aws)”{% ifversion ghes %}
  - “[Azure Blob Storage로 GitHub 패키지 사용](/admin/packages/enabling-github-packages-with-azure-blob-storage)”{% endif %}
  - “[MinIO로 GitHub 패키지 사용 설정](/admin/packages/enabling-github-packages-with-minio)”

## 3단계: 인스턴스에서 지원할 패키지 에코시스템 지정

{% 데이터 variables.location.product_location %}에서 사용하거나 사용하지 않도록 설정하거나 읽기 전용으로 설정할 패키지 에코시스템을 선택합니다. 사용 가능한 옵션은 {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, RubyGems, npm, Apache Maven, Gradle 또는 NuGet입니다.  자세한 내용은 “[엔터프라이즈에 대한 패키지 에코시스템 지원 구성](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)”을 참조하세요.

## 4단계: 필요한 경우 패키지 호스트 URL에 대한 TLS 인증서가 있는지 확인

{% 데이터 variables.location.product_location %}에 대해 하위 도메인 격리를 사용하는 경우 사용 `{% data reusables.package_registry.container-registry-hostname %}`하려는 각 에코시스템에 대한 패키지 호스트 URL을 허용하는 TLS 인증서를 만들고 업로드해야 합니다. 각 패키지 호스트 URL에 `https://`가 포함되어 있는지 확인하세요.

  인증서를 수동으로 만들거나 _Let's Encrypt_ 를 사용할 수 있습니다. 이미 _Let's Encrypt_ 를 사용하는 경우 {% data variables.product.prodname_registry %}를 사용하도록 설정한 다음 새 TLS 인증서를 요청해야 합니다. 패키지 호스트 URL에 대한 자세한 내용은 “[하위 도메인 격리 사용](/enterprise/admin/configuration/enabling-subdomain-isolation)”을 참조하세요. TLS 인증서를 {% data variables.product.product_name %}에 업로드하는 방법에 대한 자세한 내용은 “[TLS 구성](/enterprise/admin/configuration/configuring-tls)”을 참조하세요.

## 5단계: 예약된 이름 확인 및 이름 바꾸기

하위 도메인 격리를 사용하지 않도록 설정된 Docker 에코시스템을 사용하려면 {% 데이터 variables.enterprise.management_console %}에서 Docker 에코시스템 지원을 사용하도록 설정하기 전에 먼저 {% 데이터 variables.location.product_location %}에 이름이 지정된 `v2` 사용자 또는 조직의 이름을 바꿔 **야 합니다**. Docker는 `v2` 계정 이름을 사용하여 Docker API와의 경로 충돌을 관리합니다. 또한 Docker 레지스트리 지원을 사용하도록 설정하면 이 이름을 더 이상 사용할 수 없습니다.

사이트 관리자 대시보드의 “예약된 로그인” 페이지로 이동하여 내부용으로 예약된 전체 로그인 목록을 볼 수 있습니다. 자세한 내용은 “[예약된 로그인](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins)”을 참조하세요.
