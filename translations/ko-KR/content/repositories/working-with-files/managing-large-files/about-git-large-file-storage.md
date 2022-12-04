---
title: Git Large File Storage 정보
intro: '{% data variables.product.product_name %}은(는) 리포지토리에 허용되는 파일의 크기를 제한합니다. 이 제한을 넘어 파일을 추적하려면 {% data variables.large_files.product_name_long %}을(를) 사용할 수 있습니다.'
redirect_from:
  - /articles/about-large-file-storage
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/about-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git Large File Storage
ms.openlocfilehash: f0ab54791645dc5c36cce2880ba3ae5c9b705f35
ms.sourcegitcommit: 06726d24e73f1175f10749d6fdcf143d6094c9a5
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118750'
---
## {% data variables.large_files.product_name_long %} 정보

{% data variables.large_files.product_name_short %}은(는) 파일에 대한 참조를 리포지토리에 저장하여 대용량 파일을 처리하지만 실제 파일 자체는 처리하지 않습니다. Git의 아키텍처를 해결하기 위해 {% data variables.large_files.product_name_short %}은(는) 실제 파일(다른 곳에 저장됨)에 대한 참조 역할을 하는 포인터 파일을 만듭니다. {% data variables.product.product_name %}은(는) 리포지토리에서 이 포인터 파일을 관리합니다. 리포지토리를 복제할 때 {% data variables.product.product_name %}은(는) 포인터 파일을 맵으로 사용하여 대용량 파일을 찾습니다.

{% ifversion fpt or ghec %} {% data variables.large_files.product_name_short %}을(를) 사용하여 다음까지 파일을 저장할 수 있습니다.

| 제품 | 최대 파일 크기 |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 2GB |
| {% data variables.product.prodname_pro %} | 2GB |
| {% data variables.product.prodname_team %} | 4GB |
| {% data variables.product.prodname_ghe_cloud %} | 5GB |{% else %}
{% data variables.large_files.product_name_short %}을(를) 사용하여 리포지토리에 최대 5GB의 파일을 저장할 수 있습니다.
{% endif %} 

{% data reusables.repositories.git-lfs %}

{% data variables.large_files.product_name_short %}을(를) {% data variables.product.prodname_desktop %}와(과) 함께 사용할 수도 있습니다. {% data variables.product.prodname_desktop %}에서 Git LFS 리포지토리를 복제하는 방법에 대한 자세한 내용은 “[GitHub 리포지토리를 GitHub Desktop으로 복제](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)”를 참조하세요.

{% data reusables.large_files.can-include-lfs-objects-archives %}

## 포인터 파일 형식

{% data variables.large_files.product_name_short %}의 포인터 파일은 다음과 같습니다.

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

사용 중인 {% data variables.large_files.product_name_short %}의 `version`을(를) 추적한 다음 파일(`oid`)에 대한 고유 식별자를 추적합니다. 또한 최종 파일의 `size`을(를) 저장합니다.

{% note %}

**참고**:
- {% data variables.large_files.product_name_short %}은(는) {% data variables.product.prodname_pages %} 사이트에서 사용할 수 없습니다.
- {% data variables.large_files.product_name_short %}은(는) 템플릿 리포지토리와 함께 사용할 수 없습니다.
  
{% endnote %}

## 추가 참고 자료

- “[{% data variables.large_files.product_name_long %}와(과) 협업](/articles/collaboration-with-git-large-file-storage)”
