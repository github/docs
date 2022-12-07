---
title: SSH 키 암호 사용
intro: SSH 키를 보호하고 인증 에이전트를 구성하여 SSH 키를 사용할 때마다 암호를 다시 입력할 필요가 없도록 할 수 있습니다.
redirect_from:
  - /ssh-key-passphrases
  - /working-with-key-passphrases
  - /articles/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key passphrases
ms.openlocfilehash: 66c1289e8ebd40520962f01d61837df21eb4b8c9
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009089'
---
## SSH 키의 암호 정보

SSH 키를 사용할 경우 누군가가 컴퓨터에 대한 액세스 권한을 얻으면 공격자는 해당 키를 사용하는 모든 시스템에 대한 액세스 권한도 얻을 수 있습니다. 추가 보안 계층을 추가하려면 SSH 키에 암호를 추가할 수 있습니다. 연결할 때마다 암호를 입력하지 않도록 하려면 SSH 에이전트에 암호를 안전하게 저장할 수 있습니다.

## 암호 추가 또는 변경

다음 명령을 입력하여 키 쌍을 다시 생성하지 않고 기존 프라이빗 키의 암호를 변경할 수 있습니다.

```shell
$ ssh-keygen -p -f ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
> Enter old passphrase: [Type old passphrase]
> Key has comment 'your_email@example.com'
> Enter new passphrase (empty for no passphrase): [Type new passphrase]
> Enter same passphrase again: [Repeat the new passphrase]
> Your identification has been saved with the new passphrase.
```

키에 이미 암호가 있는 경우 새 암호로 변경하기 전에 암호를 입력하라는 메시지가 표시됩니다.

{% windows %}

## Windows용 Git에서 `ssh-agent` 자동 시작

bash 또는 Git 셸을 열 때 `ssh-agent`를 자동으로 실행할 수 있습니다. 다음 줄을 복사하여 Git 셸의 `~/.profile` 또는 `~/.bashrc` 파일에 붙여넣습니다.

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

프라이빗 키가 기본 위치(예: `~/.ssh/id_rsa`) 중 하나에 저장되지 않은 경우 SSH 인증 에이전트에 찾을 위치를 알려야 합니다. ssh-agent에 키를 추가하려면 `ssh-add ~/path/to/my_key`를 입력합니다. 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)”를 참조하세요.

{% tip %}

**팁:** 일정 시간 후에 `ssh-agent`가 키를 잊어버리게 하려면 `ssh-add -t <seconds>`를 실행하여 구성하면 됩니다.

{% endtip %}

이제 Git Bash를 처음 실행하면 암호를 입력하라는 다음과 같은 메시지가 표시됩니다.

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/YOU/.ssh/id_rsa:
> Identity added: /c/Users/YOU/.ssh/id_rsa (/c/Users/YOU/.ssh/id_rsa)
> Welcome to Git (version 1.6.0.2-preview20080923)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

로그 아웃하거나 컴퓨터를 종료하거나 프로세스를 종료할 때까지 `ssh-agent` 프로세스가 계속 실행됩니다.

{% endwindows %}

{% mac %}

## 키 집합에 암호 저장

OS X El Capitan을 통해 Mac OS X Leopard에서 기본 프라이빗 키 파일이 자동으로 처리됩니다.

- *.ssh/id_rsa*
- *.ssh/identity*

키를 처음 사용할 때 암호를 입력하라는 메시지가 표시됩니다. 키 집합을 사용하여 암호를 저장하도록 선택한 경우 다시 입력할 필요가 없습니다.

그렇지 않은 경우 ssh-agent에 키를 추가할 때 키 집합에 암호를 저장할 수 있습니다. 자세한 내용은 “[ssh-agent에 SSH 키 추가](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)”를 참조하세요.

{% endmac %}
