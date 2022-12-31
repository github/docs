---
title: 개인 계정 데이터의 보관 파일 요청
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
  - /github/understanding-how-github-uses-and-protects-your-data/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user-settings.export-data %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Request account archive
ms.openlocfilehash: f296796810978f6d884fabc699c01fbc3eabf5eb
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878958'
---
{% data variables.product.product_name %}는 개인 계정 작업에서 리포지토리 및 프로필 메타데이터를 저장합니다. {% data variables.product.prodname_dotcom_the_website %}의 설정 또는 사용자 마이그레이션 API를 통해 개인 계정의 데이터를 내보낼 수 있습니다.

내보낼 수 있는 {% data variables.product.product_name %} 저장 데이터에 대한 자세한 내용은 “[사용자 마이그레이션 보관 파일 다운로드](/rest/reference/migrations#download-a-user-migration-archive)” 및 “[{% data variables.product.product_name %}의 데이터 사용 정보](/articles/about-github-s-use-of-your-data)”를 참조하세요.

{% data variables.product.prodname_dotcom_the_website %}의 설정을 통해 개인 데이터 내보내기를 요청하면 {% data variables.product.product_name %}는 개인 데이터를 `tar.gz` 파일로 패키지하고 다운로드 링크가 포함된 기본 메일 주소로 메일을 보냅니다.

기본적으로 다운로드 링크는 7일 후에 만료됩니다. 다운로드 링크가 만료되기 전에 언제든지 사용자 설정에서 링크를 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[개인 계정 데이터 보관 파일에 대한 액세스 삭제](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)”를 참조하세요.

운영 체제에서 기본적으로 `tar.gz` 파일의 압축을 풀 수 없는 경우 타사 도구를 사용하여 보관된 파일을 추출할 수 있습니다. 자세한 내용은 Opensource.com에서 “[How to unzip a tar.gz file](https://opensource.com/article/17/7/how-unzip-targz-file)”(tar.gz 파일의 압축을 해제하는 방법)을 참조하세요.

생성된 `tar.gz` 파일은 데이터 내보내기를 시작할 때 저장된 데이터를 반영합니다.

## 개인 계정 데이터의 보관 파일 다운로드

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. “계정 데이터 내보내기”에서 **내보내기 시작** 또는 **새 내보내기** 를 클릭합니다.
![강조 표시된 개인 데이터 내보내기 시작 단추](/assets/images/help/repository/export-personal-data.png)
![강조 표시된 새 개인 데이터 내보내기 단추](/assets/images/help/repository/new-export.png)
4. 내보내기를 다운로드할 준비가 되면 {% data variables.product.product_name %}에서 기본 메일 주소로 다운로드 링크를 보내드립니다.
5. 메일의 다운로드 링크를 클릭하고 메시지가 표시되면 암호를 다시 입력합니다.
6. 다운로드할 수 있는 `tar.gz` 파일로 리디렉션됩니다.

## 개인 계정 데이터 보관 파일에 대한 액세스 삭제

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. 만료되기 전에 메일로 전송된 다운로드 링크를 사용하지 않도록 설정하려면 “계정 데이터 내보내기”에서 사용하지 않도록 설정할 데이터 내보내기 다운로드를 찾아 **삭제** 를 클릭합니다.
![개인 데이터 내보내기 패키지 삭제 단추가 강조 표시됨](/assets/images/help/repository/delete-export-personal-account-data.png)
