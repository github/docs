---
title: HTTPS를 사용하여 GitHub Pages 사이트 보호
intro: 'HTTPS는 다른 사용자가 사이트에 대한 트래픽을 스누핑 또는 변조하지 못하도록 하는 암호화 계층을 추가합니다. {% data variables.product.prodname_pages %} 사이트에 HTTPS를 적용하여 모든 HTTP 요청을 HTTPS로 투명하게 리디렉션할 수 있습니다.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Secure site with HTTPS
ms.openlocfilehash: 34ecec8e187efb117e09e61f85768fc203404ab3
ms.sourcegitcommit: 7e6836f8cb3b981939bf934e735e7eced8133b05
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/12/2022
ms.locfileid: '148022526'
---
리포지토리에 대한 관리자 권한이 있는 사용자는 {% data variables.product.prodname_pages %} 사이트에 HTTPS를 적용할 수 있습니다.

## HTTPS 및 {% data variables.product.prodname_pages %} 정보

사용자 지정 도메인으로 올바르게 구성된 사이트를 포함하여 모든 {% data variables.product.prodname_pages %} 사이트는 HTTPS 및 HTTPS 적용을 지원합니다. 사용자 지정 도메인에 대한 자세한 내용은 “[사용자 지정 도메인 및 {% data variables.product.prodname_pages %} 정보](/articles/about-custom-domains-and-github-pages)” 및 “[사용자 지정 도메인 및 {% data variables.product.prodname_pages %}의 문제 해결](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)”을 참조하세요.

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% note %}

**참고:** RFC3280은 일반 이름의 최대 길이가 64자여야 한다고 명시합니다. 따라서 인증서를 성공적으로 만들려면 {% data variables.product.prodname_pages %} 사이트의 전체 도메인 이름이 64자 미만이어야 합니다.

{% endnote %}

## {% data variables.product.prodname_pages %} 사이트에 HTTPS 적용

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. “{% data variables.product.prodname_pages %}”에서 **HTTPS 적용** 을 선택합니다.
  ![HTTPS 적용 확인란](/assets/images/help/pages/enforce-https-checkbox.png)

## 인증서 프로비전 문제 해결("인증서가 아직 생성되지 않았습니다." 오류)

페이지 설정에서 사용자 지정 도메인을 설정하거나 변경하면 자동 DNS 검사가 시작됩니다. 이 검사는 DNS 설정이 {% data variables.product.prodname_dotcom %}에서 인증서를 자동으로 가져오도록 구성되어 있는지 확인합니다. 확인에 성공하면 {% data variables.product.prodname_dotcom %}는 [Let's Encrypt](https://letsencrypt.org/)에서 TLS 인증서를 요청하는 작업을 큐에 대기시킵니다. 유효한 인증서를 받으면 {% data variables.product.prodname_dotcom %}가 페이지에 대한 TLS 종료를 처리하는 서버에 인증서를 자동으로 업로드합니다. 이 프로세스가 성공적으로 완료되면 사용자 지정 도메인 이름 옆에 확인 표시가 표시됩니다.

프로세스에 다소 시간이 걸릴 수 있습니다. **저장** 을 클릭하고 몇 분 후에도 프로세스가 완료되지 않은 경우 사용자 지정 도메인 이름 옆에 있는 **제거** 를 클릭해 보세요. 도메인 이름을 다시 입력하고 **저장** 을 다시 클릭합니다. 그러면 프로비저닝 프로세스가 취소되고 다시 시작됩니다.

## 혼합 콘텐츠 문제 해결

{% data variables.product.prodname_pages %} 사이트에서 HTTPS를 사용하도록 설정했지만 사이트의 HTML이 여전히 HTTP를 통해 이미지, CSS 또는 JavaScript를 참조하는 경우 사이트는 *혼합 콘텐츠* 를 제공하고 있는 것입니다. 혼합 콘텐츠를 제공하면 사이트의 보안이 저하되고 자산 로드에 문제가 발생할 수 있습니다.

사이트의 혼합 콘텐츠를 제거하려면 사이트의 HTML에서 `http://`를 `https://`로 변경하여 모든 자산이 HTTPS를 통해 제공되는지 확인합니다.

자산은 일반적으로 다음 위치에서 찾을 수 있습니다.
- 사이트에서 Jekyll을 사용하는 경우 HTML 파일은 *_layouts* 폴더에 있을 수 있습니다.
- CSS는 일반적으로 HTML 파일의 `<head>` 섹션에 있습니다.
- JavaScript는 일반적으로 `<head>` 섹션 또는 닫는 `</body>` 태그 바로 앞에 있습니다.
- 이미지는 종종 `<body>` 섹션에서 찾을 수 있습니다.

{% tip %}

**팁:** 사이트의 원본 파일에서 자산을 찾을 수 없는 경우 텍스트 편집기 또는 {% data variables.product.product_name %}에서 `http`에 대한 사이트의 원본 파일을 검색해 보세요.

{% endtip %}

### HTML 파일에서 참조되는 자산의 예

| 자산 형식 | HTTP                                      | HTTPS                             |
|:----------:|:-----------------------------------------:|:---------------------------------:|
| CSS        | `<link rel="stylesheet" href="http://example.com/css/main.css">` | `<link rel="stylesheet" href="https://example.com/css/main.css">`
| JavaScript   |  `<script type="text/javascript" src="http://example.com/js/main.js"></script>`  |   `<script type="text/javascript" src="https://example.com/js/main.js"></script>`
| 이미지        |  `<a href="http://www.somesite.com"><img src="http://www.example.com/logo.jpg" alt="Logo"></a>`  | `<a href="https://www.somesite.com"><img src="https://www.example.com/logo.jpg" alt="Logo"></a>`  
