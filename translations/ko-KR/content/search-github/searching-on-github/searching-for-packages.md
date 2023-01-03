---
title: 패키지 검색
intro: '{% data variables.product.product_name %}에 대한 패키지를 검색하고 검색 한정자를 사용하여 결과의 범위를 좁힐 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
permissions: Anyone can search for packages they have access to.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-for-packages
  - /github/searching-for-information-on-github/searching-on-github/searching-for-packages
ms.openlocfilehash: de7a348b20f18315c58ab13b2e19f0b162b9b792
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118895'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## 패키지 검색 정보

모든 {% data variables.product.product_name %}에서 전역적으로 패키지를 검색하거나 특정 조직 내에서 패키지를 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”를 참조하세요.

{% ifversion ghes %} {% data variables.product.prodname_github_connect %}를 사용하는 경우에도 {% data variables.product.prodname_dotcom_the_website %}가 아니라 {% data variables.product.product_name %}에서만 패키지를 검색할 수 있습니다.
{% endif %}

{% data reusables.search.syntax_tips %}

## 사용자 또는 조직의 패키지 내에서 검색

특정 사용자 또는 조직이 소유한 패키지를 찾으려면 `user` 또는 `org` 한정자를 사용합니다.

| 한정자        | 예제
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [ **`user:codertocat`**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages)는 @codertocat이 소유한 패키지와 일치
| <code>org:<em>ORGNAME</em></code> | [ **`org:github`**](https://github.com/search?q=org%3Agithub&type=RegistryPackages)는 {% data variables.product.prodname_dotcom %} 조직이 소유한 패키지와 일치

## 패키지 표시 여부별 필터링

패키지가 퍼블릭인지 프라이빗인지에 따라 검색을 필터링하려면 `is` 한정자를 사용합니다.

| 한정자  | 예제 |
| ------------- | -------------
| `is:public`| [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages)는 “angular”라는 단어가 포함된 퍼블릭 패키지와 일치
| `is:private`| [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages)는 “php”라는 단어가 포함된 프라이빗 패키지와 일치
