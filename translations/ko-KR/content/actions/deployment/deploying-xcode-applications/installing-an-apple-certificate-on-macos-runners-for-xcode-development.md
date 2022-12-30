---
title: Xcode 개발용 macOS 실행기에 Apple 인증서 설치
shortTitle: Sign Xcode applications
intro: '{% data variables.product.prodname_actions %} 실행기에서 Apple 코드 서명 인증서를 설치하여 CI(연속 통합) 워크플로 내에서 Xcode 앱에 서명할 수 있습니다.'
redirect_from:
  - /actions/guides/installing-an-apple-certificate-on-macos-runners-for-xcode-development
  - /actions/deployment/installing-an-apple-certificate-on-macos-runners-for-xcode-development
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Xcode
ms.openlocfilehash: f95de8998d067fcae3829f8f4137c86fdeb92212
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009500'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 {% data variables.product.prodname_actions %} 실행기에 Apple 코드 서명 인증서와 프로비저닝 프로필을 설치하는 CI(연속 통합) 워크플로에 단계를 추가하는 방법을 보여 줍니다. 이렇게 하면 Apple App Store에 게시하거나 테스트 그룹에 배포하기 위해 Xcode 앱에 서명할 수 있습니다.

## 필수 조건

YAML 및 {% data variables.product.prodname_actions %}의 구문에 대해 잘 알고 있어야 합니다. 자세한 내용은 다음을 참조하세요.

- “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”
- “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”

Xcode 앱 빌드 및 서명에 대한 지식이 있어야 합니다. 자세한 내용은 [Apple 개발자 설명서](https://developer.apple.com/documentation/)를 참조하세요.

## 인증서 및 프로비저닝 프로필의 비밀 만들기

서명 프로세스에는 인증서 및 프로비저닝 프로필 저장, 실행기로 전송, 실행기의 키 집합으로 가져오기, 빌드에서 사용이 포함됩니다.

실행기에서 인증서와 프로비저닝 프로필을 사용하려면 {% data variables.product.prodname_dotcom %} 비밀을 사용하는 것이 좋습니다. 비밀을 만들고 워크플로에서 사용하는 방법에 대한 자세한 내용은 “[암호화된 비밀](/actions/reference/encrypted-secrets)”을 참조하세요.

리포지토리 또는 조직에서 다음 항목의 비밀을 만듭니다.

* Apple 서명 인증서.

  - `p12` 인증서 파일입니다. Xcode에서 서명 인증서를 내보내는 방법에 대한 자세한 내용은 [Xcode 설명서](https://help.apple.com/xcode/mac/current/#/dev154b28f09)를 참조하세요.
  
  - 인증서를 비밀로 저장할 때는 Base64로 변환해야 합니다. 이 예제에서 비밀 이름은 `BUILD_CERTIFICATE_BASE64`입니다.

  - 다음 명령을 사용하여 인증서를 Base64로 변환하고 클립보드에 복사합니다.

    ```shell
    base64 BUILD_CERTIFICATE.p12 | pbcopy
    ```
* Apple 서명 인증서 암호.
  - 이 예제에서 비밀 이름은 `P12_PASSWORD`입니다.

* Apple 프로비저닝 프로필.

  - Xcode에서 프로비저닝 프로필을 내보내는 방법에 대한 자세한 내용은 [Xcode 설명서](https://help.apple.com/xcode/mac/current/#/deva899b4fe5)를 참조하세요.

  - 프로비저닝 프로필을 비밀로 저장할 때는 Base64로 변환해야 합니다. 이 예제에서 비밀 이름은 `BUILD_PROVISION_PROFILE_BASE64`입니다.

  - 다음 명령을 사용하여 프로비저닝 프로필을 Base64로 변환하고 클립보드에 복사합니다.
  
    ```shell
    base64 PROVISIONING_PROFILE.mobileprovision | pbcopy
    ```

* 키 집합 암호.

  - 실행기에서 새 키 집합이 생성되므로 새 키 집합의 암호는 새 임의 문자열일 수 있습니다. 이 예제에서 비밀 이름은 `KEYCHAIN_PASSWORD`입니다.

## 워크플로에 단계 추가

이 예제 워크플로에는 {% data variables.product.prodname_dotcom %} 비밀에서 Apple 인증서와 프로비저닝 프로필을 가져와 실행기에 설치하는 단계가 포함되어 있습니다.

```yaml{:copy}
name: App build
on: push

jobs:
  build_with_signing:
    runs-on: macos-latest

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Install the Apple certificate and provisioning profile
        env:
          BUILD_CERTIFICATE_BASE64: {% raw %}${{ secrets.BUILD_CERTIFICATE_BASE64 }}{% endraw %}
          P12_PASSWORD: {% raw %}${{ secrets.P12_PASSWORD }}{% endraw %}
          BUILD_PROVISION_PROFILE_BASE64: {% raw %}${{ secrets.BUILD_PROVISION_PROFILE_BASE64 }}{% endraw %}
          KEYCHAIN_PASSWORD: {% raw %}${{ secrets.KEYCHAIN_PASSWORD }}{% endraw %}
        run: |
          # create variables
          CERTIFICATE_PATH=$RUNNER_TEMP/build_certificate.p12
          PP_PATH=$RUNNER_TEMP/build_pp.mobileprovision
          KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db

          # import certificate and provisioning profile from secrets
          echo -n "$BUILD_CERTIFICATE_BASE64" | base64 --decode --output $CERTIFICATE_PATH
          echo -n "$BUILD_PROVISION_PROFILE_BASE64" | base64 --decode --output $PP_PATH

          # create temporary keychain
          security create-keychain -p "$KEYCHAIN_PASSWORD" $KEYCHAIN_PATH
          security set-keychain-settings -lut 21600 $KEYCHAIN_PATH
          security unlock-keychain -p "$KEYCHAIN_PASSWORD" $KEYCHAIN_PATH

          # import certificate to keychain
          security import $CERTIFICATE_PATH -P "$P12_PASSWORD" -A -t cert -f pkcs12 -k $KEYCHAIN_PATH
          security list-keychain -d user -s $KEYCHAIN_PATH

          # apply provisioning profile
          mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
          cp $PP_PATH ~/Library/MobileDevice/Provisioning\ Profiles
      - name: Build app
        ...
```

## 자체 호스팅 실행기에서 필요한 정리

{% data variables.product.prodname_dotcom %} 호스팅 실행기는 작업 실행이 끝날 때 자동으로 제거되는 격리된 가상 머신입니다. 즉, 작업 중에 실행기에서 사용된 인증서와 프로비저닝 프로필은 작업이 완료될 때 실행기와 함께 제거됩니다.

자체 호스팅 실행기에서는 작업 실행이 끝날 때 `$RUNNER_TEMP` 디렉터리가 정리되지만 키 집합과 프로비저닝 프로필은 실행기에 남아 있을 수 있습니다.

자체 호스팅 실행기를 사용하는 경우 작업이 끝날 때 중요한 파일이 삭제되도록 워크플로에 최종 단계를 추가해야 합니다. 아래 표시된 워크플로 단계는 이 작업을 수행하는 방법의 예입니다.

{% raw %}
```yaml
- name: Clean up keychain and provisioning profile
  if: ${{ always() }}
  run: |
    security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
    rm ~/Library/MobileDevice/Provisioning\ Profiles/build_pp.mobileprovision
```
{% endraw %}
