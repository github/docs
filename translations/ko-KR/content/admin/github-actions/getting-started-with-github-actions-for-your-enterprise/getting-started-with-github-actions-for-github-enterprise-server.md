---
title: GitHub Enterprise Server용 GitHub Actions 시작
shortTitle: Get started
intro: '처음으로 {% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %}를 사용하도록 설정하고 구성하는 방법을 알아봅니다.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: a48e562898eb4c82b9027ee56ed52b71e7c5ebc7
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192971'
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_ghe_server %}의 {% data variables.product.prodname_actions %} 정보

이 문서에서는 사이트 관리자가 {% data variables.product.prodname_actions %}를 사용하도록 {% data variables.product.prodname_ghe_server %}를 구성하는 방법을 설명합니다.

{% data reusables.actions.ghes-actions-not-enabled-by-default %} 인스턴스에 성능 저하를 일으키지 않고 {% data variables.product.prodname_actions %}의 로드를 처리할 수 있는 적절한 CPU 및 메모리 리소스가 있는지 확인하고 해당 리소스를 늘릴 수 있는지 확인해야 합니다. 또한 워크플로 실행에 의해 생성된 아티팩트{% ifversion actions-caching %} 및 캐시{% endif %} 저장하는 데 필요한 Blob Storage에 사용할 스토리지 공급자를 결정해야 합니다. 그런 다음 엔터프라이즈에 {% data variables.product.prodname_actions %}를 사용하도록 설정하고, 액세스 권한을 관리하고, 자체 호스트된 실행기를 추가하여 워크플로를 실행합니다.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## 하드웨어 요구 사항 검토

{%- ifversion ghes < 3.6 %}

{% data variables.location.product_location %}에 사용할 수 있는 CPU 및 메모리 리소스는 성능 손실 없이 동시에 실행할 수 있는 작업 수를 결정합니다. {% data reusables.actions.minimum-hardware %}

성능 손실 없이 실행되는 동시 작업의 최대 수량은 작업 기간, 아티팩트 사용량, Actions를 실행하는 리포지토리 수 및 인스턴스가 수행하는 Actions와 관련이 없는 다른 작업의 양과 같은 요인에 따라 달라집니다. GitHub 내부 테스트는 다양한 CPU 및 메모리 구성에서 GitHub Enterprise Server에 대한 다음과 같은 성능 목표를 보여 줍니다.

{% endif %}

{%- ifversion ghes > 3.5 %}

{% data variables.location.product_location %}에 사용할 수 있는 CPU 및 메모리 리소스는 성능 손실 없이 구성할 수 있는 실행기 수를 결정합니다. {% data reusables.actions.minimum-hardware %}

성능 손실 없는 연결된 실행기의 최대 수량은 작업 기간, 아티팩트 사용량, Actions를 실행하는 리포지토리 수 및 인스턴스가 수행하는 Actions와 관련이 없는 다른 작업의 양과 같은 요인에 따라 달라집니다. GitHub 내부 테스트는 다양한 CPU 및 메모리 구성에서 GitHub Enterprise Server에 대한 다음과 같은 성능 목표를 보여 줍니다.

{% endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

최대 동시성은 여러 리포지토리, 약 10분의 작업 기간 및 10MB 아티팩트 업로드를 사용하여 측정되었습니다. 인스턴스의 전체 활동 수준에 따라 성능이 다를 수 있습니다.

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

최대 동시성은 여러 리포지토리, 약 10분의 작업 기간 및 10MB 아티팩트 업로드를 사용하여 측정되었습니다. 인스턴스의 전체 활동 수준에 따라 성능이 다를 수 있습니다.

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

{% data variables.product.company_short %}는 여러 리포지토리, 작업 기간 10분, 아티팩트 업로드 10MB를 사용하여 최대 동시성을 측정했습니다. 인스턴스의 전체 활동 수준에 따라 성능이 다를 수 있습니다.

{% note %}

**참고:** {% data variables.product.prodname_ghe_server %} 3.5부터 {% data variables.product.company_short %}의 내부 테스트는 일반적인 고객 구성을 더 잘 반영하기 위해 3세대 CPU를 사용합니다. 이러한 CPU 변경은 이 버전의 {% data variables.product.prodname_ghe_server %}에서 성능 목표 변경 내용 중 일부를 나타냅니다.

{% endnote %}

{%- endif %}

{%- ifversion ghes > 3.5 %}


| vCPU | 메모리 | 최대 연결 실행기 |
| :---| :--- | :--- |
| 8   | 64GB  | 실행기 740개 |
| 32  | 160 GB | 실행기 2700개 |
| 96  | 384 GB | 실행기 7000개 |
| 128 | 512 GB | 실행기 7000개 |

{% data variables.product.company_short %}는 여러 리포지토리, 작업 기간 10분, 아티팩트 업로드 10MB를 사용하여 최대 연결 실행기를 측정했습니다. 인스턴스의 전체 활동 수준에 따라 성능이 다를 수 있습니다.

{% note %}

**참고:**

- {% data variables.product.prodname_ghe_server %} 3.6부터 {% data variables.product.company_short %}에서는 동시 작업이 아닌 연결된 실행기를 문서화합니다. 연결된 실행기는 사용자가 연결할 수 있으며 활용할 것으로 예상되는 대부분의 실행기를 나타냅니다. 또한 활용할 것으로 예상되는 것보다 많은 실행기를 연결하면 성능에 부정적인 영향을 줄 수 있습니다.

- {% data variables.product.prodname_ghe_server %} 3.5부터 {% data variables.product.company_short %}의 내부 테스트는 일반적인 고객 구성을 더 잘 반영하기 위해 3세대 CPU를 사용합니다. 이러한 CPU 변경은 이 버전의 {% data variables.product.prodname_ghe_server %}에서 성능 목표 변경 내용 중 일부를 나타냅니다.
{% endnote %} {%- endif %}

기존 인스턴스의 사용자에 대해 {% data variables.product.prodname_actions %}를 사용하도록 설정할 계획인 경우 인스턴스의 사용자 및 자동화의 활동 수준을 검토하고 사용자에게 적절한 CPU 및 메모리를 프로비저닝했는지 확인합니다. {% data variables.product.prodname_ghe_server %}의 용량 및 성능을 모니터링하는 방법에 대한 자세한 내용은 “[어플라이언스 모니터링](/admin/enterprise-management/monitoring-your-appliance)”을 참조하세요.

{% data variables.location.product_location %}의 최소 하드웨어 요구 사항에 대한 자세한 내용은 인스턴스 플랫폼에 대한 하드웨어 고려 사항을 참조하세요.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

필요에 따라 {% data variables.product.prodname_actions %}에 대한 속도 제한을 구성하여 {% data variables.location.product_location %}에서 리소스 사용을 제한할 수 있습니다. 자세한 내용은 “[속도 제한 구성](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions)”을 참조하세요.

{% endif %}

## 외부 스토리지 요구 사항

{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %}를 사용하도록 설정하려면 외부 Blob Storage에 액세스할 수 있어야 합니다.

{% data reusables.actions.enterprise-storage-contents %} 필요한 스토리지의 양은 {% data variables.product.prodname_actions %}의 사용량에 따라 달라집니다. 단일 외부 스토리지 구성만 지원되며 동시에 여러 스토리지 공급자를 사용할 수 없습니다.

리포지토리의 파일 구조에 있는 워크플로 파일과 같은 다른 모든 {% 데이터 variables.product.prodname_actions %} 데이터는 {% data variables.location.product_location %}의 데이터 스토리지 볼륨에 저장됩니다.

{% data variables.product.prodname_actions %}는 다음 스토리지 공급자를 지원합니다.

* Azure Blob Storage
* Amazon S3 {%- ifversion actions-ghes-gcp-storage %}
* Google Cloud Storage {%- endif %}
* S3 호환 MinIO 클러스터

{% note %}

**참고:** 이들은 {% data variables.product.company_short %}에서 지원하고 도움을 제공할 수 있는 유일한 스토리지 공급자입니다.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

## 네트워킹 고려 사항

{% data reusables.actions.proxy-considerations %} {% data variables.product.prodname_ghe_server %}에서 프록시를 사용하는 방법에 대한 자세한 내용은 “[아웃바운드 웹 프록시 서버 구성](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)”을 참조하세요.

{% ifversion ghes %}

## 스토리지 공급자에서 {% data variables.product.prodname_actions %} 사용

선택한 스토리지 공급자에서 {% data variables.product.prodname_actions %}를 사용하도록 설정하려면 아래 절차 중 하나를 따르세요.

* [Azure Blob Storage에서 GitHub Actions 사용](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)
* [Amazon S3 스토리지로 GitHub Actions 사용](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage) {%- ifversion actions-ghes-gcp-storage %}
* [Google Cloud Storage](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-google-cloud-storage) {%- endif %}를 사용하여 GitHub Actions 사용
* [MinIO 스토리지를 사용하여 GitHub Actions 사용](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-storage)

## 엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 액세스 권한 관리

정책을 사용하여 {% data variables.product.prodname_actions %}에 대한 액세스를 관리할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 GitHub Actions 정책 적용](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)”을 참조하세요.

## 자체 호스트된 실행기 추가

{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_actions %} 워크플로를 실행하려면 자체 호스트된 실행기를 추가해야 합니다. 엔터프라이즈, 조직 또는 리포지토리 수준에서 자체 호스트된 실행기를 추가할 수 있습니다. 자세한 내용은 “[자체 호스트된 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.

## 엔터프라이즈에서 사용할 수 있는 작업 관리

엔터프라이즈에서 사용자가 사용할 수 있는 작업을 제어할 수 있습니다. 여기에는 {% data variables.product.prodname_dotcom_the_website %}의 작업에 자동으로 액세스하기 위해 {% data variables.product.prodname_github_connect %}를 설정하거나 {% data variables.product.prodname_dotcom_the_website %}의 작업을 수동으로 동기화하는 작업이 포함됩니다.

자세한 내용은 “[엔터프라이즈에서 작업 사용 정보](/admin/github-actions/about-using-actions-in-your-enterprise)”를 참조하세요.

{% data reusables.actions.general-security-hardening %}

{% endif %}

## 예약된 이름

엔터프라이즈에서 {% data variables.product.prodname_actions %}를 사용하도록 설정하면 `github` 및 `actions`라는 두 개의 조직이 만들어집니다. 기업에서 이미 `github` 조직 이름을 사용하는 경우(또는 `github-org` 또한 사용 중인 경우 `github-github-org`) `github-org`가 대신 사용됩니다. 기업에서 이미 `actions` 조직 이름을 사용하는 경우(또는 `github-actions` 또한 사용 중인 경우 `github-actions-org`) `github-actions`가 대신 사용됩니다. 작업을 사용하도록 설정하면 이름을 더 이상 사용할 수 없습니다.
