---
title: 암호화된 비밀
intro: '암호화된 비밀을 사용하면 조직{% ifversion fpt or ghes or ghec %}, 리포지토리 또는 리포지토리 환경{% else %} 또는 리포지토리{% endif %}에 중요한 정보를 저장할 수 있습니다.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
  - /actions/reference/encrypted-secrets
  - /actions/managing-workflows/storing-secrets
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4f45a2e0a3ac0c93215f7e4a095c2b8033450808
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162801'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 암호화된 비밀 정보

비밀은 조직, 리포지토리 또는 리포지토리 환경에서 만든 암호화된 환경 변수입니다. 만든 비밀은 {% data variables.product.prodname_actions %} 워크플로에서 사용할 수 있습니다. {% data variables.product.prodname_dotcom %}는 [libsodium 봉인 상자](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)를 사용하여 비밀이 {% data variables.product.prodname_dotcom %}에 도달하기 전에 암호화되고 워크플로에서 사용할 때까지 암호화된 상태로 유지되도록 합니다.

{% data reusables.actions.secrets-org-level-overview %}

환경 수준에서 저장된 비밀의 경우 필요한 검토자가 비밀에 대한 액세스를 제어하도록 설정할 수 있습니다. 승인자가 승인할 때까지 워크플로 작업이 환경 비밀에 액세스할 수 없습니다.

{% ifversion fpt or ghec or ghes > 3.4 %}

{% note %}

**참고**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

### 비밀 이름 지정

{% data reusables.codespaces.secrets-naming %}

  예를 들어 환경 수준에서 만든 비밀에는 해당 환경에서 고유한 이름이 있어야 하고, 리포지토리 수준에서 만든 비밀에는 해당 리포지토리에 고유한 이름이 있어야 하며, 조직 수준에서 만든 비밀에는 해당 수준에서 고유한 이름이 있어야 합니다.

  {% data reusables.codespaces.secret-precedence %} 마찬가지로 조직, 리포지토리 및 환경 모두 이름이 같은 비밀이 있는 경우 환경 수준 암호가 우선적으로 적용됩니다.

{% data variables.product.prodname_dotcom %}가 로그에서 비밀을 수정하도록 하려면 정형 데이터를 비밀 값으로 사용하지 마세요. 예를 들어 JSON 또는 인코딩된 Git BLOB을 포함하는 비밀을 만들지 마세요.

### 비밀에 액세스

작업에 비밀을 사용할 수 있도록 하려면 워크플로 파일에서 비밀을 입력 또는 환경 변수로 설정해야 합니다. 작업의 추가 정보 파일을 검토하여 작업에 예상되는 입력 및 환경 변수에 대해 알아봅니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)”을 참조하세요.

파일을 편집할 수 있는 액세스 권한이 있는 경우 워크플로 파일에서 암호화된 비밀을 사용하고 읽을 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 대한 액세스 권한](/github/getting-started-with-github/access-permissions-on-github)”을 참조하세요.

{% data reusables.actions.secrets-redaction-warning %}

워크플로 실행이 큐에 대기되면 조직 및 리포지토리 비밀을 읽고 환경을 참조하는 작업이 시작될 때 환경 비밀을 읽습니다.

REST API를 사용하여 비밀을 관리할 수도 있습니다. 자세한 내용은 “[비밀](/rest/reference/actions#secrets)”을 참조하세요.

### 자격 증명 권한 제한

자격 증명을 생성할 때 가능한 최소 권한을 부여하는 것이 좋습니다. 예를 들어 개인 자격 증명을 사용하는 대신 [배포 키](/developers/overview/managing-deploy-keys#deploy-keys) 또는 서비스 계정을 사용합니다. 필요한 모든 경우 읽기 전용 권한을 부여하고 가능한 한 액세스를 제한하는 것이 좋습니다. {% data variables.product.pat_v1 %}을(를) 생성할 때 필요한 범위 중 가장 적은 범위를 선택합니다. {% ifversion pat-v2 %} {% data variables.product.pat_v2 %}을(를) 생성할 때 필요한 최소 리포지토리 액세스를 선택합니다. {% endif %}

{% note %}

**참고:** REST API를 사용하여 비밀을 관리할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 비밀 API](/rest/reference/actions#secrets)”를 참조하세요.

{% endnote %}

## 리포지토리에 대한 암호화된 비밀 만들기

{% data reusables.actions.permissions-statement-secrets-repository %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-secret %}
1. **새 리포지토리 비밀** 을 선택합니다.
1. **이름** 입력 상자에 비밀의 이름을 입력합니다.
1. 비밀 값을 입력합니다.
1. **비밀 추가** 를 클릭합니다.

리포지토리에 환경 비밀이 있거나 부모 조직의 비밀에 액세스할 수 있는 경우 해당 비밀도 이 페이지에 나열됩니다.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

리포지토리 비밀을 추가하려면 `gh secret set` 하위 명령을 사용합니다. `secret-name`을 비밀의 이름으로 바꿉니다.

```shell
gh secret set SECRET_NAME
```

CLI는 비밀 값을 입력하라는 메시지를 표시합니다. 또는 파일에서 비밀 값을 읽을 수 있습니다.

```shell
gh secret set SECRET_NAME < secret.txt
```

리포지토리에 대한 모든 비밀을 나열하려면 `gh secret list` 하위 명령을 사용합니다.

{% endcli %}

## 환경에 대한 암호화된 비밀 만들기

{% data reusables.actions.permissions-statement-secrets-environment %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. 비밀을 추가할 환경을 클릭합니다.
2. **환경 비밀** 에서 **비밀 추가** 를 클릭합니다.
3. **이름** 입력 상자에 비밀의 이름을 입력합니다.
4. 비밀 값을 입력합니다.
5. **비밀 추가** 를 클릭합니다.

{% endwebui %}

{% cli %}

환경에 대한 비밀을 추가하려면 환경 이름 뒤에 `--env`또는 `-e` 플래그가 있는 `gh secret set` 하위 명령을 사용합니다.

```shell
gh secret set --env ENV_NAME SECRET_NAME
```

환경에 대한 비밀을 나열하려면 환경 이름 뒤에 `--env`또는 `-e` 플래그가 있는 `gh secret list` 하위 명령을 사용합니다.

```shell
gh secret list --env ENV_NAME
```

{% endcli %}

## 조직에 대한 암호화된 비밀 만들기

조직에서 비밀을 만들 때 정책을 사용하여 해당 비밀에 액세스할 수 있는 리포지토리를 제한할 수 있습니다. 예를 들어 모든 리포지토리에 대한 액세스 권한을 부여하거나 프라이빗 리포지토리 또는 지정된 리포지토리 목록에 대해서만 액세스를 제한할 수 있습니다.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% webui %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. **새 조직 비밀** 을 클릭합니다.
1. **이름** 입력 상자에 비밀의 이름을 입력합니다.
1. **값** 필드에 비밀 값을 입력합니다.
1. **리포지토리 액세스** 드롭다운 목록에서 액세스 정책을 선택합니다.
1. **비밀 추가** 를 클릭합니다.

{% endwebui %}

{% cli %}

{% note %}

**참고:** 기본적으로 {% data variables.product.prodname_cli %}은 `repo` 범위와 `read:org` 범위를 인증합니다. 조직 비밀을 관리하려면 `admin:org` 범위에 추가로 권한을 부여해야 합니다.

```
gh auth login --scopes "admin:org"
```

{% endnote %}

조직에 대한 비밀을 추가하려면 조직 이름 뒤에 `--org` 또는 `-o` 플래그가 있는 `gh secret set` 하위 명령을 사용합니다.

```shell
gh secret set --org ORG_NAME SECRET_NAME
```

기본적으로 비밀은 프라이빗 리포지토리에서만 사용할 수 있습니다. 조직 내의 모든 리포지토리에서 비밀을 사용할 수 있도록 지정하려면 `--visibility` 또는 `-v` 플래그를 사용합니다.

```shell
gh secret set --org ORG_NAME SECRET_NAME --visibility all
```

조직 내의 선택된 리포지토리에서 비밀을 사용할 수 있도록 지정하려면 `--repos` 또는 `-r` 플래그를 사용합니다.

```shell
gh secret set --org ORG_NAME SECRET_NAME --repos REPO-NAME-1, REPO-NAME-2"
```

조직에 대한 비밀을 나열하려면 조직 이름 뒤에 `--org` 또는 `-o` 플래그가 있는 `gh secret list` 하위 명령을 사용합니다.

```shell
gh secret list --org ORG_NAME
```

{% endcli %}

## 조직 수준 비밀에 대한 액세스 검토

조직의 비밀에 적용되는 액세스 정책을 확인할 수 있습니다.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. 비밀 목록에는 구성된 사용 권한 및 정책이 포함됩니다. 예: ![비밀 목록](/assets/images/help/settings/actions-org-secrets-list.png)
1. 각 비밀에 대해 구성된 권한에 대한 자세한 내용을 보려면 **업데이트** 를 클릭하세요.

## 워크플로에서 암호화된 암호 사용

{% note %}

**참고:**

* {% data reusables.actions.forked-secrets %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

* 비밀은 재사용 가능한 워크플로에 자동으로 전달되지 않습니다. 자세한 내용은 “[워크플로 다시 사용](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow)”을 참조하세요.

{% endif %}

{% endnote %}

입력 또는 환경 변수로 비밀을 사용하여 작업을 제공하려면 `secrets` 컨텍스트를 사용하여 리포지토리에서 만든 비밀에 액세스할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)” 및 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”을 참조하세요.

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

비밀은 `if:` 조건에서 직접 참조할 수 없습니다. 대신 비밀을 작업 수준 환경 변수로 설정한 다음 환경 변수를 참조하여 작업의 단계를 조건부로 실행하는 것이 좋습니다. 자세한 내용은 “[컨텍스트 가용성](/actions/learn-github-actions/contexts#context-availability)” 및 [`jobs.<job_id>.steps[*].if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif)를 참조하세요.

비밀이 설정되지 않은 경우 비밀을 참조하는 식의 반환 값(예: 예제의 {% raw %}`${{ secrets.SuperSecret }}`{% endraw %})은 빈 문자열이 됩니다.

가능하면 명령줄에서 프로세스 간에 비밀을 전달하지 마세요. 명령줄 프로세스는 다른 사용자에게 표시되거나(`ps` 명령을 사용) [보안 감사 이벤트](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing)에 의해 캡처될 수 있습니다. 비밀을 보호하려면 환경 변수, `STDIN` 또는 대상 프로세스에서 지원하는 기타 메커니즘을 사용하는 것이 좋습니다.

명령줄 내에서 비밀을 전달해야 하는 경우 적절한 따옴표로 묶습니다. 비밀에는 의도치 않게 셸에 영향을 줄 수 있는 특수 문자가 포함되어 있는 경우가 많습니다. 특수 문자를 이스케이프하려면 환경 변수와 함께 따옴표를 사용합니다. 예를 들면 다음과 같습니다.

### npm을 사용한 예제

{% raw %}
```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

### PowerShell을 사용한 예제

{% raw %}
```yaml
steps:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

### Cmd.exe를 사용한 예제

{% raw %}
```yaml
steps:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

## 비밀에 대한 제한

최대 1,000개의 조직 비밀, 100개의 리포지토리 비밀 및 100개의 환경 비밀을 저장할 수 있습니다.

리포지토리에서 만든 워크플로는 다음과 같은 수의 비밀에 액세스할 수 있습니다.

* 리포지토리 비밀 100개 전부.
* 리포지토리에 100개를 초과하는 조직 비밀에 대한 액세스 권한이 할당된 경우 워크플로는 처음 100개의 조직 비밀만 사용할 수 있습니다(비밀 이름을 기준으로 사전순으로 정렬됨).
* 환경 비밀 100개 전부.

비밀의 크기는 64KB로 제한됩니다. 더 큰 비밀을 저장하려면 아래의 “[큰 비밀 저장](#storing-large-secrets)” 해결 방법을 참조하세요.

### 큰 비밀 저장

64KB보다 큰 비밀을 사용하려면 해결 방법을 사용하여 암호화된 비밀을 리포지토리에 저장하고 암호 해독 암호를 {% data variables.product.prodname_dotcom %}에 비밀로 저장할 수 있습니다. 예를 들어 `gpg`를 사용하여 {% data variables.product.prodname_dotcom %}의 리포지토리에 암호화된 파일을 체크 인하기 전에 로컬에서 비밀이 포함된 파일을 암호화할 수 있습니다. 자세한 내용은 [gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html)를 참조하세요.

{% warning %}

**경고**: 워크플로가 실행될 때 비밀이 인쇄되지 않도록 주의하세요. 이 해결 방법을 사용하는 경우 {% data variables.product.prodname_dotcom %}은 로그에 인쇄된 비밀을 수정하지 않습니다.

{% endwarning %}

1. 터미널에서 다음 명령을 실행하여 `gpg` 및 AES256 암호 알고리즘을 사용하여 암호가 포함된 파일을 암호화합니다. 이 예제에서 `my_secret.json`은 비밀을 포함하는 파일입니다.

   ```bash
   gpg --symmetric --cipher-algo AES256 my_secret.json
   ```

1. 테이블 이름을 입력하라는 메시지가 표시됩니다. 암호를 값으로 사용하는 {% data variables.product.prodname_dotcom %}에 새 비밀을 만들어야 하므로 암호를 기억하세요.

1. 암호를 포함하는 새 비밀을 만듭니다. 예를 들어 `LARGE_SECRET_PASSPHRASE`라는 이름으로 새 비밀을 만들고 비밀 값을 위 단계에서 사용한 암호로 설정합니다.

1. 암호화된 파일을 리포지토리의 경로에 복사하고 커밋합니다. 이 예제에서 암호화된 파일은 `my_secret.json.gpg`입니다.

   {% warning %}

   **경고**: `.gpg` 파일 확장자로 끝나는 암호화된 `my_secret.json.gpg` 파일을 복사하고 암호화되지 않은 `my_secret.json` 파일은 복사하지 **않습니다**.

   {% endwarning %}

   ```bash
   git add my_secret.json.gpg
   git commit -m "Add new encrypted secret JSON file"
   ```

1. 리포지토리에서 비밀 파일의 암호를 해독하는 셸 스크립트를 만듭니다. 이 예제에서 스크립트 이름은 `decrypt_secret.sh`입니다.

   ```bash
   #!/bin/sh

   # Decrypt the file
   mkdir $HOME/secrets
   # --batch to prevent interactive command
   # --yes to assume "yes" for questions
   gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
   --output $HOME/secrets/my_secret.json my_secret.json.gpg
   ```

1. 리포지토리에 체크 인하기 전에 셸 스크립트가 실행 가능한지 확인합니다.

   ```bash
   chmod +x decrypt_secret.sh
   git add decrypt_secret.sh
   git commit -m "Add new decryption script"
   git push
   ```

1. {% data variables.product.prodname_actions %} 워크플로에서 `step`을 사용하여 셸 스크립트를 호출하고 암호를 해독합니다. 워크플로가 실행되는 환경에서 리포지토리의 복사본을 만들려면 [`actions/checkout`](https://github.com/actions/checkout) 작업을 사용해야 합니다. 리포지토리의 루트에 상대적인 `run` 명령을 사용하여 셸 스크립트를 참조합니다.

   ```yaml
   name: Workflows with large secrets
 
   on: push
 
   jobs:
     my-job:
       name: My Job
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Decrypt large secret
           run: ./decrypt_secret.sh
           env:
             LARGE_SECRET_PASSPHRASE: {% raw %}${{ secrets.LARGE_SECRET_PASSPHRASE }}{% endraw %}
         # This command is just an example to show your secret being printed
         # Ensure you remove any print statements of your secrets. GitHub does
         # not hide secrets that use this workaround.
         - name: Test printing your secret (Remove this step in production)
           run: cat $HOME/secrets/my_secret.json
   ```

## Base64 이진 BLOB을 비밀로 저장

Base64 인코딩을 사용하여 작은 이진 BLOB을 비밀로 저장할 수 있습니다. 그런 다음 워크플로에서 비밀을 참조하고 실행기에서 사용하기 위해 디코딩할 수 있습니다. 크기 제한은 [“비밀에 대한 제한”](/actions/security-guides/encrypted-secrets#limits-for-secrets)을 참조하세요.

{% note %}

**참고**: Base64는 이진 파일만 텍스트로 변환하며 실제 암호화를 대체할 수 없습니다.

{% endnote %}

1. 파일을 Base64 문자열로 인코딩하는 데 `base64`를 사용합니다. 예를 들면 다음과 같습니다.

   ```
   $ base64 -i cert.der -o cert.base64
   ```

1. Base64 문자열을 포함하는 비밀을 만듭니다. 예를 들면 다음과 같습니다.

   ```
   $ gh secret set CERTIFICATE_BASE64 < cert.base64
   ✓ Set secret CERTIFICATE_BASE64 for octocat/octorepo
   ```

1. 실행기에서 Base64 문자열에 액세스하려면 비밀을 `base64 --decode`으로 파이프합니다.  예를 들어: 

   ```yaml
   name: Retrieve Base64 secret
   on:
     push:
       branches: [ octo-branch ]
   jobs:
     decode-secret:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Retrieve the secret and decode it to a file
           env:
             {% raw %}CERTIFICATE_BASE64: ${{ secrets.CERTIFICATE_BASE64 }}{% endraw %}
           run: |
             echo $CERTIFICATE_BASE64 | base64 --decode > cert.der
         - name: Show certificate information
           run: |
             openssl x509 -in cert.der -inform DER -text -noout
   ```
