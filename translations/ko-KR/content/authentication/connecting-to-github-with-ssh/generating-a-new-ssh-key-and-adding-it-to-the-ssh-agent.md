---
title: 새 SSH 키 생성 및 ssh-agent에 추가
intro: 기존 SSH 키를 확인한 후 인증에 사용할 새 SSH 키를 생성한 다음 ssh-agent에 추가할 수 있습니다.
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Generate new SSH key
ms.openlocfilehash: 024d74d62b99b6dd94fcecdc835d6094f83234f4
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118974'
---
## SSH 키 암호 정보

{% data reusables.ssh.about-ssh %} 자세한 내용은 “[SSH 정보](/authentication/connecting-to-github-with-ssh/about-ssh)”를 참조하세요.

SSH 키를 생성할 때 암호를 추가하여 키를 추가로 보호할 수 있습니다. 키를 사용할 때마다 암호를 입력해야 합니다. 키에 암호가 있고 키를 사용할 때마다 암호를 입력하지 않으려는 경우 SSH 에이전트에 키를 추가할 수 있습니다. SSH 에이전트는 SSH 키를 관리하고 암호를 저장합니다.

SSH 키가 아직 없는 경우 인증에 사용할 새 SSH 키를 생성해야 합니다. SSH 키가 이미 있는지 확실하지 않은 경우 기존 키를 확인할 수 있습니다. 자세한 내용은 “[기존 SSH 키 확인](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)”을 참조하세요.

하드웨어 보안 키를 사용하여 {% data variables.product.product_name %}에 인증하려면 하드웨어 보안 키에 대한 새 SSH 키를 생성해야 합니다. 키 쌍으로 인증할 때 하드웨어 보안 키를 컴퓨터에 연결해야 합니다. 자세한 내용은 [ OpenSSH 8.2 릴리스 정보](https://www.openssh.com/txt/release-8.2)를 참조하세요.

## 새 SSH 키 생성

로컬 머신에서 새 SSH 키를 생성할 수 있습니다. 키를 생성한 후 {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}의 계정에 키를 추가하여 SSH를 통한 Git 작업에 대한 인증을 사용하도록 설정할 수 있습니다.

{% ifversion ghes %}

{% data variables.location.product_location %}의 사이트 관리자인 경우 동일한 키를 사용하여 인스턴스에 대한 관리 SSH 액세스 권한을 부여할 수 있습니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”를 참조하세요.

{% endif %}

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data variables.product.product_name %} 이메일 주소로 대체하여 아래 텍스트를 붙여넣습니다.
   {%- ifversion ghae %}  <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   {% note %}

   **참고:** Ed25519 알고리즘을 지원하지 않는 레거시 시스템을 사용하는 경우 다음을 사용합니다.
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}

   그러면 제공된 이메일을 레이블로 사용하여 새 SSH 키가 생성됩니다.
   ```shell
   > Generating public/private ALGORITHM key pair.
   ```
"키를 저장할 파일을 입력하라"는 메시지가 표시되면 **Enter** 키를 눌러 기본 파일 위치를 적용할 수 있습니다. 이전에 SSH 키를 만든 경우 ssh-keygen은 다른 키를 다시 작성하도록 요청할 수 있습니다. 이 경우 사용자 지정 명명된 SSH 키를 만드는 것이 좋습니다. 이렇게 하려면 기본 파일 위치를 입력하고 id_ssh_keyname 사용자 지정 키 이름으로 바꿉니다.


   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM: [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/ALGORITHM):[Press enter]
   ```

   {% endlinux %}

4. 프롬프트에 보안 암호를 입력합니다. 자세한 내용은 “[SSH 키 암호 사용](/articles/working-with-ssh-key-passphrases)”을 참조하세요.
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

## ssh-agent에 SSH 키 추가

키를 관리하기 위해 ssh-agent에 새 SSH 키를 추가하기 전에 기존 SSH 키를 확인하고 새 SSH 키를 생성해야 합니다. <span class="platform-mac">에이전트에 SSH 키를 추가할 때 [macports](https://www.macports.org/), [homebrew](http://brew.sh/) 또는 기타 외부 원본에서 설치한 애플리케이션이 아닌 기본 macOS `ssh-add` 명령을 사용합니다.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. macOS Sierra 10.12.2 이상을 사용하는 경우 ssh-agent에 키를 자동으로 로드하고 키 집합에 암호를 저장하도록 `~/.ssh/config` 파일을 수정해야 합니다.

   * 먼저 `~/.ssh/config` 파일이 기본 위치에 있는지 확인합니다.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/YOU/.ssh/config does not exist.
     ```

   * 파일이 없으면 파일을 만듭니다.

     ```shell
     $ touch ~/.ssh/config
     ```

   * `~/.ssh/config` 파일을 열고 다음 줄을 포함하도록 파일을 수정합니다. SSH 키 파일에 예제 코드와 다른 이름 또는 경로가 있는 경우 현재 설정과 일치하도록 파일 이름 또는 경로를 수정합니다.

     ```
     Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **참고:**

     - 키에 암호를 추가하지 않도록 선택한 경우 `UseKeychain` 줄을 생략해야 합니다.

     - `Bad configuration option: usekeychain` 오류가 표시되면 구성의 `Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}` 섹션에 줄을 추가합니다.

       ```
       Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. ssh-agent에 SSH 프라이빗 키를 추가하고 키 집합에 암호를 저장합니다. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add --apple-use-keychain ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
  ```
  {% note %}

   **참고:** ssh-agent에 SSH 키를 추가할 때 옵션은 `--apple-use-keychain` 암호를 키 집합에 저장합니다. 키에 암호를 추가하지 않기로 선택한 경우 `--apple-use-keychain` 옵션 없이 명령을 실행합니다.

   옵션은 `--apple-use-keychain` Apple의 표준 버전에 있습니다 `ssh-add`. 몬테레이 이전 MacOS 버전(12.0) `--apple-use-keychain` 에서 및 `--apple-load-keychain` 플래그는 구문 `-K` 과 `-A`를 각각 사용했습니다.

  Apple의 표준 버전 `ssh-add` 이 설치되어 있지 않으면 오류가 발생할 수 있습니다. 자세한 내용은 "[오류: ssh-add: 잘못된 옵션 -- K](/articles/error-ssh-add-illegal-option-k)"를 참조하세요.


   {% endnote %}

4. {% data variables.product.product_name %}의 계정에 SSH 키를 추가합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정에 새 SSH 키 추가](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)”를 참조하세요.

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. ssh-agent가 실행 중인지 확인합니다. “[SSH 키 암호 사용](/articles/working-with-ssh-key-passphrases)”의 “ssh-agent 자동 시작” 지침을 사용하거나 다음과 같이 수동으로 시작할 수 있습니다.
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. ssh-agent에 SSH 프라이빗 키를 추가합니다. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. {% data variables.product.product_name %}의 계정에 SSH 키를 추가합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정에 새 SSH 키 추가](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)”를 참조하세요.

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. ssh-agent에 SSH 프라이빗 키를 추가합니다. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. {% data variables.product.product_name %}의 계정에 SSH 키를 추가합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정에 새 SSH 키 추가](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)”를 참조하세요.

{% endlinux %}

## 하드웨어 보안 키에 대한 새 SSH 키 생성

macOS나 Linux를 사용하는 경우 새 SSH 키를 생성하기 전에 SSH 클라이언트를 업데이트하거나 새 SSH 클라이언트를 설치해야 할 수 있습니다. 자세한 내용은 “[오류: 알 수 없는 키 유형](/github/authenticating-to-github/error-unknown-key-type)”을 참조하세요.

1. 컴퓨터에 하드웨어 보안 키를 삽입합니다.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. {% data variables.product.product_name %} 계정의 이메일 주소로 대체하여 아래 텍스트를 붙여넣습니다.
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "YOUR_EMAIL"
   ```

   {%- ifversion not ghae %} {% note %}

   **참고:** 명령이 실패하고 `invalid format` 또는 `feature not supported,` 오류가 발생하는 경우 Ed25519 알고리즘을 지원하지 않는 하드웨어 보안 키를 사용하고 있을 수 있습니다. 대신 다음 명령을 사용합니다.
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}
4. 메시지가 표시되면 하드웨어 보안 키의 단추를 터치합니다.
5. “Enter a file in which to save the key”(키를 저장할 파일 입력)라는 메시지가 표시되면 Enter 키를 눌러 기본 파일 위치를 적용합니다.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endlinux %}

6. 암호를 입력하라는 메시지가 표시되면 **Enter** 키를 누릅니다.
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```
7. {% data variables.product.prodname_dotcom %}의 계정에 SSH 키를 추가합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정에 새 SSH 키 추가](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)”를 참조하세요.
