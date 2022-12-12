---
title: GitHub Enterprise Server 정보
intro: '{% data variables.product.product_name %}는 프라이빗 환경에서 호스트할 수 있는 소프트웨어 개발 플랫폼입니다.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 4bad34abbe05947ad5528e1ff3edf706872801c7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097853'
---
## {% data variables.product.product_name %} 정보

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} 팀은 {% data variables.product.product_name %}를 사용하여 Git 버전 제어, 강력한 API, 생산성 및 공동 작업 도구 및 통합을 사용하여 소프트웨어를 빌드하고 제공할 수 있습니다. {% data variables.product.prodname_dotcom_the_website %}에 익숙한 개발자는 익숙한 기능과 워크플로를 사용하여 원활하게 온보딩하고 기여할 수 있습니다. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data reusables.enterprise.github-distributes-ghes %} 자세한 내용은 “[시스템 개요](/admin/overview/system-overview)”를 참조하세요.

{% data variables.product.product_name %}를 온-프레미스 또는 지원되는 클라우드 환경에 배포하도록 선택할 수 있습니다.

## 배포를 위한 지원되는 환경

{% data variables.product.product_name %}를 온-프레미스 데이터 센터 내의 가상화 하이퍼바이저 또는 퍼블릭 클라우드 서비스에 배포할 수 있습니다.

{% data variables.product.company_short %}는 온-프레미스 배포를 위해 다음과 같은 가상화 하이퍼바이저를 지원합니다.

- Microsoft Hyper-V
- OpenStack KVM
- VMware ESXi

{% data variables.product.company_short %}는 클라우드 배포를 위해 다음 서비스를 지원합니다.

- Amazon Web Services(AWS)
- Google Cloud Platform(GCP)
- Microsoft Azure

자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/admin/installation/setting-up-a-github-enterprise-server-instance)”을 참조하세요.

## 릴리스 및 업그레이드 정보

{% data reusables.enterprise.constantly-improving %} 인스턴스로 업그레이드하는 것은 사용자의 책임입니다. 자세한 내용은 “[{% data variables.product.product_name %} 릴리스](/admin/all-releases)”를 참조하세요.

## 관리 정보

브라우저, 관리 SSH 액세스, REST 또는 GraphQL API를 통해 {% data variables.product.product_name %}를 구성하고 모니터링할 수 있습니다. {% data variables.product.company_short %}는 Linux 관리 환경의 사용자가 {% data variables.product.product_name %}의 배포 및 유지 관리를 보다 성공적으로 수행했다는 사실을 확인했습니다.

특정 직원에게 {% data variables.product.product_name %}에 대한 관리 액세스 권한을 부여하여 외부 인증을 설정하고, 개발자 요구를 충족하도록 인스턴스를 구성하고, 인스턴스의 활동 및 성능을 모니터링하도록 할 수 있습니다. 관리자는 비즈니스 규칙 또는 규정 제한을 준수하기 위해 사용자가 {% 데이터 variables.location.product_location %}을(를) 사용하는 방법을 제어하는 정책을 구성할 수 있습니다. 자세한 내용은 다음 문서를 참조하세요.

- “[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”
- “[엔터프라이즈 구성](/admin/configuration/configuring-your-enterprise)”
- “[{% data variables.product.prodname_enterprise %} API 정보](/admin/overview/about-the-github-enterprise-api)”
- “[어플라이언스 모니터링](/admin/enterprise-management/monitoring-your-appliance)”
- “[엔터프라이즈의 작업 모니터링](/admin/monitoring-activity-in-your-enterprise)”
- “[엔터프라이즈 정책 정보](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)”

## 선택적 기능 정보

{% data variables.product.product_name %}에 대해 엔터프라이즈의 소프트웨어 개발 수명 주기를 개선하는 선택적 기능을 구성할 수 있습니다.

| 기능 | 설명 | 자세한 정보 |
| :- | :- | :- |
| {% data variables.product.prodname_actions %} | CI/CD 및 개발 워크플로 자동화 | “[엔터프라이즈용 {% data variables.product.prodname_actions %} 정보](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)” |
| {% data variables.product.prodname_github_connect %} | 제한된 방법으로 {% data variables.product.prodname_dotcom_the_website %}의 기능 활용 | “[{% data variables.product.prodname_github_connect %} 정보](/admin/configuration/configuring-github-connect/about-github-connect)” |
| {% data variables.product.prodname_GH_advanced_security %} | 코드 보안 및 품질 향상 | “[{% data variables.product.prodname_GH_advanced_security %} 정보](/get-started/learning-about-github/about-github-advanced-security)” |
| {% data variables.product.prodname_registry %} | 엔터프라이즈용 호스트 소프트웨어 패키지 | “[{% data variables.product.prodname_registry %} 소개](/packages/learn-github-packages/introduction-to-github-packages)” |

## 배포 토폴로지 정보

기본적으로 {% data variables.product.product_name %}는 독립 실행형 인스턴스로 실행됩니다. 배포에 다른 토폴로지로 사용하여 {% data variables.product.product_name %}의 안정성과 성능을 높일 수 있습니다.

- 시스템 또는 네트워크 오류의 영향을 완화하기 위해 수동 복제본 인스턴스를 배포할 수 있습니다. 주 인스턴스에 영향을 주는 중단 중에 복제본 인스턴스로 수동으로 장애 조치(failover)할 수 있습니다. 자세한 내용은 “[고가용성 구성 정보](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)”를 참조하세요.
- 여러 활성 복제본을 구성하여 주 인스턴스에서 지리적으로 멀리 떨어져 있는 개발자의 성능을 향상시킬 수 있습니다. 자세한 내용은 “[지역 복제 정보](/admin/enterprise-management/configuring-high-availability/about-geo-replication)”를 참조하세요.
- 수만 명의 개발자가 있는 일부 엔터프라이즈는 수직이 아닌 수평으로 스케일링되는 클러스터 구성을 활용할 수 있습니다. 자세한 내용은 “[클러스터링 정보](/admin/enterprise-management/configuring-clustering/about-clustering)”를 참조하세요.

## 백업 및 재해 복구 정보

개발자의 데이터 손실 또는 서비스 중단을 방지하려면 {% data variables.product.company_short %}에서 재해 복구 계획을 수립하는 것이 좋습니다. {% data variables.product.prodname_enterprise_backup_utilities %}를 사용하여 Linux 또는 Unix 호스트 시스템을 배포하고 구성하여 인스턴스의 구성 및 사용자 데이터를 백업할 수 있습니다. 자세한 내용은 “[어플라이언스에서 백업 구성](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)”을 참조하세요.

또한 시스템 또는 네트워크 오류가 발생할 경우 장애 조치되도록 수동 복제본 인스턴스를 구성할 수 있습니다. 자세한 내용은 “[배포 토폴로지 정보](#about-deployment-topologies)”를 참조하세요.

## 설명서 정보

{% data variables.product.product_name %}의 관리자와 사용자 모두를 위한 설명서는 사이트 {% data variables.product.prodname_docs %}에서 사용할 수 있습니다. 

- [엔터프라이즈 관리자 설명서](/admin)
- [사용자 설명서](/):

{% data variables.product.product_name %}의 다른 버전은 {% data variables.product.prodname_docs %}에 대한 설명서에 별도로 반영됩니다. 자세한 내용은 “[{% data variables.product.prodname_docs %} 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”를 참조하세요.

## {% data variables.product.product_name %} 시도

{% data variables.product.product_name %}의 45일 평가판에 등록할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 평가판 설치](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)”를 참조하세요.

## 추가 정보

- “[{% data variables.product.product_name %} 시작](/get-started/onboarding/getting-started-with-github-enterprise-server)”
- “[{% data variables.contact.github_support %} 정보](/support/learning-about-github-support/about-github-support)”
- [ `github/roadmap` 리포지토리의 {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} )
