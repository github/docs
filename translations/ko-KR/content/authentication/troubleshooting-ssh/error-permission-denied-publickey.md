---
title: '오류: 권한이 거부됨(publickey)'
intro: “사용 권한이 거부됨” 오류는 서버가 연결을 거부했음을 의미합니다. 여러 이유가 있을 수 있으며 가장 일반적인 예시는 아래에 설명되어 있습니다.
redirect_from:
  - /articles/error-permission-denied-publickey
  - /github/authenticating-to-github/error-permission-denied-publickey
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-denied-publickey
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied (publickey)
ms.openlocfilehash: 091bdb97bf473225b2d5115b1df79ccf847d0221
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008988'
---
## Git에서 `sudo` 명령 또는 상승된 권한을 사용해야 하나요?

Git에서 `sudo` 명령 또는 상승된 권한(예: 관리자 권한)을 사용하면 안 됩니다. `sudo`를 사용해야 하는 ‘아주 좋은 이유’가 있는 경우 모든 명령에서 사용해야 합니다(`su`를 사용하여 해당 시점의 셸을 루트로 가져오는 것이 더 좋을 수 있음). `sudo` 없이 [SSH 키를 생성](/articles/generating-an-ssh-key)한 다음, `sudo git push`와 같은 명령을 사용하려고 하면 생성한 것과 동일한 키가 사용되지 않습니다.

## 올바른 서버에 연결하고 있는지 확인합니다.

입력이 힘든 것은 모두가 알고 있습니다. 입력하는 내용에 주의하세요. “githib.com” 또는 “guthub.com”에는 연결할 수 없습니다. 경우에 따라 회사 네트워크에서도 DNS 레코드 확인과 관련된 이슈가 발생할 수 있습니다.

올바른 도메인에 연결하고 있는지 확인하기 위해 다음 명령을 입력할 수 있습니다.

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/YOU/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} port 22.
```

포트 22에서 연결해야 합니다{% ifversion fpt or ghec %}([HTTPS를 통한 SSH](/articles/using-ssh-over-the-https-port)를 사용하도록 설정을 재정의하지 않는 경우){% endif %}.

## 항상 “git” 사용자 사용

원격 URL 연결을 비롯한 모든 연결은 “git” 사용자로 만들어야 합니다. {% data variables.product.product_name %} 사용자 이름을 사용하여 연결하려고 하면 실패합니다.

```shell
$ ssh -T GITHUB-USERNAME@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
연결에 실패하고 {% data variables.product.product_name %} 사용자 이름으로 원격 URL을 사용하는 경우 [“git” 사용자를 사용하도록 원격 URL을 변경](/github/getting-started-with-github/managing-remote-repositories)할 수 있습니다.

다음을 입력하여 연결을 확인해야 합니다.

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated...
```

## 사용 중인 키가 있는지 확인합니다.

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 프라이빗 키가 생성되어 SSH에 로드되었는지 확인합니다. 
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. 프라이빗 키가 생성되어 SSH에 로드되었는지 확인합니다. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 프라이빗 키가 생성되어 SSH에 로드되었는지 확인합니다. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  

{% endlinux %}

`ssh-add` 명령은 숫자와 문자로 이루어진 긴 문자열을 ‘출력해야 합니다’. 아무것도 출력되지 않는 경우 [새 SSH 키를 생성](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)하여 {% data variables.product.product_name %}와 연결해야 합니다.

{% tip %}

**팁**: 대부분의 시스템에서는 기본 프라이빗 키(`~/.ssh/id_rsa` 및 `~/.ssh/identity`)가 SSH 인증 에이전트에 자동으로 추가됩니다. 키를 생성할 때 파일 이름을 재정의하지 않는 한, `ssh-add path/to/key`를 실행할 필요는 없습니다.

{% endtip %}

### 자세한 정보 가져오기

`git@{% data variables.command_line.backticks %}`에 연결을 시도하여 키가 사용되고 있는지 확인할 수도 있습니다.

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/YOU/.ssh/id_rsa type -1
> debug1: identity file /Users/YOU/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/YOU/.ssh/id_dsa type -1
> debug1: identity file /Users/YOU/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/YOU/.ssh/id_rsa
> debug1: Trying private key: /Users/YOU/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

해당 예제에서는 SSH에서 사용할 키가 없었습니다. “ID 파일” 줄의 끝에 있는 “-1”은 SSH에서 사용할 파일을 찾을 수 없었음을 의미합니다. 나중에 “Trying private key(프라이빗 키 시도 중)” 줄도 파일을 찾을 수 없음을 나타냅니다. 파일이 있는 경우 해당 줄은 각각 “1”과 “Offering public key(퍼블릭 키 제공 중)”가 됩니다.

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/YOU/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/YOU/.ssh/id_rsa
```

## 퍼블릭 키가 계정에 연결되었는지 확인합니다.

보안 연결을 설정하려면 {% data variables.product.product_name %}에 퍼블릭 키를 제공해야 합니다.

{% mac %}

1. 터미널을 엽니다.
2. 백그라운드에서 SSH 에이전트를 시작합니다.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. 퍼블릭 키 지문을 찾아서 기록해 둡니다. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. `ssh-add` 명령의 출력과 SSH 키 목록을 비교합니다.
![{% data variables.product.product_name %}의 SSH 키 목록](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. 명령줄을 엽니다.
2. 백그라운드에서 SSH 에이전트를 시작합니다.
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. 퍼블릭 키 지문을 찾아서 기록해 둡니다. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. `ssh-add` 명령의 출력과 SSH 키 목록을 비교합니다.
![{% data variables.product.product_name %}의 SSH 키 목록](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. 터미널을 엽니다.
2. 백그라운드에서 SSH 에이전트를 시작합니다.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. 퍼블릭 키 지문을 찾아서 기록해 둡니다. OpenSSH 6.7 이하를 사용하는 경우:
  ```shell
  $ ssh-add -l
  > 2048 a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 이상을 사용하는 경우:
  ```shell
  $ ssh-add -l -E md5
  > 2048 MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. `ssh-add` 명령의 출력과 SSH 키 목록을 비교합니다.
![{% data variables.product.product_name %}의 SSH 키 목록](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

{% data variables.product.product_name %}에 퍼블릭 키가 표시되지 않는 경우 [{% data variables.product.product_name %}에 SSH 키를 추가](/articles/adding-a-new-ssh-key-to-your-github-account)하여 컴퓨터와 연결해야 합니다.

{% warning %}

**경고**: {% data variables.product.product_name %}에 익숙하지 않은 SSH 키가 표시되는 경우 즉시 삭제하고, 추가 도움이 필요하면 {% data variables.contact.contact_support %}에 문의하세요. 식별되지 않은 퍼블릭 키는 가능한 보안 문제를 나타낼 수 있습니다. 자세한 내용은 “[SSH 키 검토](/articles/reviewing-your-ssh-keys)”를 참조하세요.

{% endwarning %}
