---
title: GitHub Pages 사이트의 사용자 지정 도메인 관리
intro: '{% data variables.product.prodname_pages %} 사이트의 기본 도메인을 사용자 지정 도메인으로 가리키도록 특정 DNS 레코드 및 리포지토리 설정을 설정하거나 업데이트할 수 있습니다.'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain
  - /articles/setting-up-a-www-subdomain
  - /articles/setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain-and-www-subdomain
  - /articles/adding-a-cname-file-to-your-repository
  - /articles/setting-up-your-pages-site-repository
  - /articles/managing-a-custom-domain-for-your-github-pages-site
  - /github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Manage a custom domain
ms.openlocfilehash: d8c11f50369d27a1bf99b10ba843e1525b3d4014
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181260'
---
리포지토리에 대한 관리자 권한이 있는 사용자는 {% data variables.product.prodname_pages %} 사이트 대한 사용자 지정 도메인을 구성할 수 있습니다.

## 사용자 지정 도메인 구성 정보

DNS 공급자를 사용하여 사용자 지정 도메인을 구성하기 전에 {% data variables.product.prodname_pages %} 사이트에 사용자 지정 도메인을 추가해야 합니다. {% data variables.product.product_name %}에 사용자 지정 도메인을 추가하지 않고 DNS 공급자를 사용하여 사용자 지정 도메인을 구성하면 다른 사용자가 하위 도메인 중 하나에서 사이트를 호스트할 수 있습니다.

{% windows %}

`dig` DNS 레코드의 올바른 구성을 확인하는 데 사용할 수 있는 명령은 Windows에 포함되지 않습니다. DNS 레코드가 올바르게 구성되었는지 확인하려면 먼저 [BIND](https://www.isc.org/bind/)를 설치해야 합니다.

{% endwindows %}

{% note %}

**참고:** DNS 변경 내용을 적용하는 데 최대 24시간이 걸릴 수 있습니다.

{% endnote %}

## 하위 도메인 구성

`www.example.com` 또는 `blog.example.com`과 같은 `www` 또는 사용자 지정 하위 도메인을 설정하려면 리포지토리 설정에서 도메인을 추가해야 합니다. 그런 다음 DNS 공급자를 사용하여 CNAME 레코드를 구성합니다.

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. “사용자 지정 도메인”에서 사용자 지정 도메인을 입력한 다음 **저장** 을 클릭합니다. 분기에서 사이트를 게시하는 경우 원본 분기의 루트에 `CNAME` 파일을 추가하는 커밋이 만들어집니다. 사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 사용하여 사이트를 게시하는 경우 `CNAME` 파일이 만들어지지 않습니다. 게시 원본에 대한 자세한 내용은 “[GitHub Pages 사이트의 게시 원본 구성](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)”을 참조하세요.
  ![사용자 지정 도메인 저장 단추](/assets/images/help/pages/save-custom-subdomain.png)

  {% note %}
  
  **참고:** 사용자 지정 도메인이 국제화된 도메인 이름인 경우 Punycode 인코딩 버전을 입력해야 합니다.
  
  Punycodes에 대한 자세한 내용은 [국제화된 도메인 이름을 참조하세요](https://en.wikipedia.org/wiki/Internationalized_domain_name).
  
  {% endnote %}

5. DNS 공급자로 이동하여 하위 도메인을 사이트의 기본 도메인으로 가리키는 `CNAME` 레코드를 만듭니다. 예를 들어, 사용자 사이트에 하위 도메인 `www.example.com`을 사용하려는 경우 `www.example.com`이 `<user>.github.io`를 가리킨다는 `CNAME` 레코드를 만듭니다. 조직 사이트에 하위 도메인 `another.example.com`을 사용하려는 경우 `another.example.com`이 `<organization>.github.io`를 가리킨다는 `CNAME` 레코드를 만듭니다. `CNAME` 레코드는 리포지토리 이름을 제외하고 항상 `<user>.github.io` 또는 `<organization>.github.io`를 가리킵니다. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. DNS 레코드가 올바르게 구성되었는지 확인하려면 `dig` 명령을 사용하여 _WWW.EXAMPLE.COM_ 하위 도메인으로 바꿉니다.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM.                    IN      A
    > WWW.EXAMPLE.COM.             3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER .
    > GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## apex 도메인 구성

Apex 도메인을 설정하려면, `example.com` 리포지토리 설정에서 사용자 지정 도메인을 구성하고 DNS 공급자와 함께 `ALIAS`, `ANAME`, 또는 `A` 레코드 중 하나 이상을 구성해야 합니다.

{% data reusables.pages.www-and-apex-domain-recommendation %} 자세한 내용은 “[하위 도메인 구성](#configuring-a-subdomain)”을 참조하세요.

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. “사용자 지정 도메인”에서 사용자 지정 도메인을 입력한 다음 **저장** 을 클릭합니다. 분기에서 사이트를 게시하는 경우 원본 분기의 루트에 `CNAME` 파일을 추가하는 커밋이 만들어집니다. 사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 사용하여 사이트를 게시하는 경우 `CNAME` 파일이 만들어지지 않습니다. 게시 원본에 대한 자세한 내용은 “[GitHub Pages 사이트의 게시 원본 구성](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)”을 참조하세요.
  ![사용자 지정 도메인 저장 단추](/assets/images/help/pages/save-custom-apex-domain.png)
5. DNS 공급자로 이동하여 `ALIAS`, `ANAME` 또는 `A` 레코드를 만듭니다. IPv6 지원에 대한 `AAAA` 레코드를 만들 수도 있습니다. {% data reusables.pages.contact-dns-provider %}
    - `ALIAS` 또는 `ANAME` 레코드를 만들도록 apex 도메인이 사이트의 기본 도메인을 가리킵니다. {% data reusables.pages.default-domain-information %}
    - `A` 레코드를 만들도록 apex 도메인이 {% data variables.product.prodname_pages %}에 대한 IP 주소를 가리킵니다.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
    - `AAAA` 레코드를 만들도록 apex 도메인이 {% data variables.product.prodname_pages %}에 대한 IP 주소를 가리킵니다.
      ```shell
      2606:50c0:8000::153
      2606:50c0:8001::153
      2606:50c0:8002::153
      2606:50c0:8003::153
      ```

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. DNS 레코드가 올바르게 구성되었는지 확인하려면 `dig` 명령을 사용하여 _WWW.EXAMPLE.COM_ 을 하위 도메인으로 바꿉니다. 결과가 위 {% data variables.product.prodname_pages %}의 IP 주소와 일치하는지 확인합니다.
   - `A` 레코드의 경우
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t A
    > EXAMPLE.COM    3600    IN A     185.199.108.153
    > EXAMPLE.COM    3600    IN A     185.199.109.153
    > EXAMPLE.COM    3600    IN A     185.199.110.153
    > EXAMPLE.COM    3600    IN A     185.199.111.153
    ```
   - `AAAA` 레코드의 경우
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t AAAA
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8000::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8001::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8002::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8003::153
    ```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## apex 도메인 및 `www` 하위 도메인 변형 구성

apex 도메인을 사용하는 경우 {% data variables.product.prodname_pages %} 사이트를 구성하여 apex 도메인과 해당 도메인의 `www` 하위 도메인 변형 모두에서 콘텐츠를 호스트하는 것이 좋습니다.

apex 도메인과 함께 `www` 하위 도메인을 설정하려면 먼저 DNS 공급자를 사용하여 `ALIAS`, `ANAME` 또는 `A` 레코드를 만들어 apex 도메인을 구성해야 합니다. 자세한 내용은 [apex 도메인 구성](#configuring-an-apex-domain)을 참조하세요.

apex 도메인을 구성한 후에는 DNS 공급자를 사용하여 CNAME 레코드를 구성해야 합니다.

1. DNS 공급자로 이동하여 `www.example.com`이 사이트 `<user>.github.io` 또는 `<organization>.github.io`의 기본 도메인을 가리키는 `CNAME` 레코드를 만듭니다. 리포지토리 이름은 포함하지 마세요. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}
2. DNS 레코드가 올바르게 구성되었는지 확인하려면 `dig` 명령을 사용하여 _WWW.EXAMPLE.COM_ 을 `www` 하위 도메인으로 바꿉니다.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM                     IN      A
    > WWW.EXAMPLE.COM.              3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER.
    > GITHUB-PAGES-SERVER.         22      IN      A       192.0.2.1
```
## 사용자 지정 도메인 제거

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. “사용자 지정 도메인”에서 **제거** 를 클릭합니다.
  ![사용자 지정 도메인 저장 단추](/assets/images/help/pages/remove-custom-domain.png)

## 사용자 지정 도메인 보호

{% data reusables.pages.secure-your-domain %} 자세한 내용은 “[{% data variables.product.prodname_pages %}에 대한 사용자 지정 도메인 확인](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”을 확인하세요.

## 추가 참고 자료

- “[사용자 지정 도메인 및 {% data variables.product.prodname_pages %}의 문제 해결](/articles/troubleshooting-custom-domains-and-github-pages)”을 참조하세요.
