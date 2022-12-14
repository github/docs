---
title: 리포지토리 표시 유형 설정
intro: 리포지토리를 볼 수 있는 사용자를 선택할 수 있습니다.
redirect_from:
  - /articles/making-a-private-repository-public
  - /articles/making-a-public-repository-private
  - /articles/converting-a-public-repo-to-a-private-repo
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository visibility
ms.openlocfilehash: 424a2a58cca6fdaff41d252bbfa31a0c7b5971e2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098009'
---
## 리포지토리 표시 유형 변경 정보

조직 소유자는 조직 소유자만 리포지토리 표시 유형을 변경하게 할 수 있습니다. 자세한 내용은 “[조직의 리포지토리 표시 여부 변경 제한](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)”을 참조하세요.

{% ifversion ghec %}

{% 데이터 variables.enterprise.prodname_emu_enterprise %}의 구성원은 개인 계정이 소유한 리포지토리의 표시 유형만 프라이빗으로 설정할 수 있으며, 엔터프라이즈 조직의 리포지토리는 프라이빗 또는 내부일 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”를 참조하세요.

{% endif %}

리포지토리의 표시 유형을 변경하기 전에 다음 주의 사항을 검토하는 것이 좋습니다.

{% ifversion ghes or ghae %}

{% warning %}

**경고:** 대규모 리포지토리 또는 리포지토리 네트워크의 표시 유형을 변경하면 데이터 무결성이 영향을 받을 수 있습니다. 표시 유형 변경은 포크에 의도하지 않은 영향을 미칠 수도 있습니다. {% data variables.product.company_short %}에서는 리포지토리 네트워크의 표시 유형을 변경하기 전에 다음을 권장합니다.

- {% 데이터 variables.location.product_location %}에서 활동이 감소될 때까지 기다립니다.

- 계속하기 전에 {% ifversion ghes %}사이트 관리자{% elsif ghae %}엔터프라이즈 소유자{% endif %}에게 문의하세요. {% ifversion ghes %}사이트 관리자{% elsif ghae %}엔터프라이즈 소유자{% endif %}는 {% data variables.contact.contact_ent_support %}에 문의하여 추가 지침을 얻을 수 있습니다.

{% endwarning %}

{% endif %}

### 리포지토리를 프라이빗으로 만들기
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %}은 퍼블릭 리포지토리의 퍼블릭 포크를 분리하여 새 네트워크에 배치합니다. 퍼블릭 포크는 프라이빗이 될 수 없습니다.{% endif %} {%- ifversion ghes or ghec or ghae %}
* 리포지토리의 표시 유형을 내부에서 프라이빗으로 변경하는 경우 {% data variables.product.prodname_dotcom %}은 프라이빗 리포지토리에 새로 액세스하지 않고 사용자에 속하는 모든 포크를 제거합니다. {% ifversion fpt or ghes or ghec %}모든 포크의 표시 유형도 프라이빗으로 변경됩니다.{% elsif ghae %}내부 리포지토리에 포크가 있다면 포크의 표시 유형은 이미 프라이빗 상태입니다.{% endif %} 자세한 내용은 "[리포지토리가 삭제되거나 표시 유형이 변경되면 포크는 어떻게 되나요](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"를 참조하세요.
{%- endif %}

{%- ifversion fpt %}
* 개인 계정 또는 조직에 {% data variables.product.prodname_free_user %}를 사용하는 경우, 표시 유형을 프라이빗으로 변경하면 리포지토리에서 일부 기능을 사용할 수 없습니다. 게시된 {% data variables.product.prodname_pages %} 사이트는 자동으로 미게시 상태가 됩니다. {% data variables.product.prodname_pages %} 사이트에 사용자 지정 도메인을 추가한 경우, 도메인 인수 위험을 방지하려면 리포지토리를 비공개로 만들기 전에 DNS 레코드를 제거하거나 업데이트해야 합니다. 자세한 내용은 "[{% data variables.product.company_short %}의 제품](/get-started/learning-about-github/githubs-products)" 및 "[{% data variables.product.prodname_pages %} 사이트에 대한 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site)"를 참조하세요.
{%- endif %}

{%- ifversion fpt or ghec %}
* {% data variables.product.prodname_dotcom %}은 더 이상 {% data variables.product.prodname_archive %}에 리포지토리를 포함하지 않습니다. 자세한 내용은 "[{% data variables.product.prodname_dotcom %}에서의 콘텐츠 및 데이터 보관 정보](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)"를 참조하세요.
* {% data variables.product.prodname_code_scanning %} 같은 {% data variables.product.prodname_GH_advanced_security %} 기능은 {% data variables.product.prodname_advanced_security %}에 대한 라이선스가 있고 예비 시트가 충분한 엔터프라이즈의 일부인 조직에서 리포지토리를 소유하지 않는 한 작동이 중지됩니다{% ifversion ghec %}{% endif %}. {% data reusables.advanced-security.more-info-ghas %} {%- endif %}

{%- ifversion ghes %}
* 익명 Git 읽기 액세스는 더 이상 사용할 수 없습니다. 자세한 내용은 “[리포지토리에 익명 Git 읽기 권한 사용](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)”을 참조하세요.
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### 리포지토리를 내부에서 만들기

* 리포지토리의 모든 포크는 리포지토리 네트워크에 유지되고 {% data variables.product.product_name %}은 루트 리포지토리와 포크 간의 관계를 유지합니다. 자세한 내용은 "[리포지토리가 삭제되거나 표시 여부가 변경되면 포크는 어떻게 되나요?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"를 참조하세요.

{% endif %}

{% ifversion fpt or ghes or ghec %}

### 리포지토리를 퍼블릭으로 만들기

* {% data variables.product.product_name %}은 프라이빗 포크를 분리하고 독립 실행형 프라이빗 리포지토리로 전환합니다. 자세한 내용은 "[리포지토리가 삭제되거나 표시 여부가 변경되면 포크는 어떻게 되나요?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"를 참조하세요.{% ifversion fpt or ghec %}
* 오픈 소스 프로젝트 생성을 위한 전환의 일환으로 프라이빗 리포지토리를 공용 리포지토리로 변환하는 경우에는 [오픈 소스 가이드](http://opensource.guide)에서 유용한 팁과 지침을 참조하세요. [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})을 사용하여 오픈 소스 프로젝트 관리에 관한 무료 과정을 수강할 수도 있습니다. 리포지토리가 퍼블릭 상태가 되면 사용자는 리포지토리의 커뮤니티 프로필을 보고 프로젝트가 기여자 지원 모범 사례를 충족하는지 확인할 수 있습니다. 자세한 내용은 "[커뮤니티 프로필 보기](/articles/viewing-your-community-profile)"를 참조하세요.
* 리포지토리는 {% data variables.product.prodname_GH_advanced_security %} 기능에 대한 액세스 권한을 자동으로 얻습니다.

리포지토리 보안을 개선하는 자세한 방법은 "[리포지토리 보안](/code-security/getting-started/securing-your-repository)"을 참조하세요.{% endif %}

{% endif %}

## 리포지토리의 표시 유형 변경

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. "위험 영역"에서 "리포지토리 표시 유형 변경"의 오른쪽에 있는 **표시 유형 변경** 을 클릭합니다.
   ![표시 유형 변경 단추](/assets/images/help/repository/repo-change-vis.png)
4. 표시 유형을 선택합니다.
{% ifversion fpt or ghec %} ![리포지토리 표시 유형 옵션 대화 상자](/assets/images/help/repository/repo-change-select.png){% else %} ![리포지토리 표시 유형 옵션 대화 상자](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. 올바른 리포지토리의 표시 유형을 변경하고 있는지 확인하기 위해, 표시 유형을 변경할 리포지토리의 이름을 입력합니다.
6. **이해합니다. 리포지토리 표시 유형을 변경합니다** 를 클릭합니다.
{% ifversion fpt or ghec %} ![리포지토리 표시 유형 변경 확인 단추](/assets/images/help/repository/repo-change-confirm.png){% else %} ![리포지토리 표시 유형 변경 확인 단추](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## 추가 참고 자료
- “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”
