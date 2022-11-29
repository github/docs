---
title: SSH 에이전트 전달 사용
intro: 서버에 대한 배포를 간소화하기 위해 로컬 SSH 키를 안전하게 사용하도록 SSH 에이전트 전달을 설정할 수 있습니다.
redirect_from:
  - /guides/using-ssh-agent-forwarding
  - /v3/guides/using-ssh-agent-forwarding
  - /articles/using-ssh-agent-forwarding
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: SSH agent forwarding
ms.openlocfilehash: b6d812bcaf979980233f99c5f614f480883375cc
ms.sourcegitcommit: 248e974c64f2439c6756a2c644ec77a98b8d3ecd
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/13/2022
ms.locfileid: '148045362'
---
SSH 에이전트 전달을 사용하여 서버에 간단하게 배포할 수 있습니다.  서버에 키(암호 없음)를 두지 않고 로컬 SSH 키를 사용할 수 있습니다.

{% data variables.product.product_name %}과(와) 상호 작용하도록 SSH 키를 이미 설정한 경우 아마 `ssh-agent`에 대해 잘 알고 있을 것입니다. 백그라운드에서 실행되고 키를 메모리에 로드된 상태로 유지하는 프로그램이므로 키를 사용해야 할 때마다 암호를 입력할 필요가 없습니다. 유용한 점은 이미 서버에서 실행 중인 것처럼 서버가 로컬 `ssh-agent`에 액세스하도록 선택할 수 있다는 것입니다. 이는 마치 친구의 컴퓨터를 사용할 수 있도록 친구에게 암호를 입력해 달라고 요청하는 것과 같습니다.

SSH 에이전트 전달에 대한 자세한 설명은 [Steve Friedl의 기술 팁 가이드][tech-tips]를 확인하세요.

## SSH 에이전트 전달 설정

사용자 고유의 SSH 키가 설정되고 작동하는지 확인합니다. 아직 이 작업을 수행하지 않은 경우 [SSH 키 생성에 대한 가이드][generating-keys] 를 사용할 수 있습니다.

터미널에 `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}`을 입력하여 로컬 키가 작동하는지 테스트할 수 있습니다.

```shell
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Attempt to SSH in to github
> Hi USERNAME! You've successfully authenticated, but GitHub does not provide
> shell access.
```

잘 시작하셨습니다. 에이전트가 서버로 전달되도록 SSH를 설정해 보겠습니다.

1. 원하는 텍스트 편집기를 사용하여 `~/.ssh/config`에서 파일을 엽니다. 이 파일이 존재하지 않으면 터미널에 `touch ~/.ssh/config` 를 입력하여 만들 수 있습니다.

2. 다음 텍스트를 파일에 입력하여 서버의 도메인 이름 또는 IP로 `example.com`을 바꿉니다.

        Host example.com
          ForwardAgent yes

{% warning %}

**경고:** 이 설정을 모든 SSH 연결에 적용하기 위해 `Host *` 와일드카드를 사용하려는 경우가 있습니다. SSH로 연결하는 *모든* 서버와 로컬 SSH 키를 공유하게 되므로 이는 좋은 방법이 아닙니다. 서버가 키에 직접 액세스할 수는 없지만 연결이 설정된 동안에는 키를 *귀하로* 사용할 수 있습니다. **신뢰하고, 에이전트 전달에 사용하려는 서버만 추가해야 합니다.**

{% endwarning %}

## SSH 에이전트 전달 테스트

에이전트 전달이 서버에서 작동하는지 테스트하려면 서버에 SSH로 연결하고 `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}`을 한 번 실행힐 수 있습니다.  모두 문제 없이 실행되면 로컬에서 했던 것과 동일한 프롬프트가 다시 표시됩니다.

로컬 키가 사용 중인지 확실하지 않은 경우 서버에서 `SSH_AUTH_SOCK` 변수를 검사할 수도 있습니다.

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/ssh-4hNGMk8AZX/agent.79453
```

변수가 설정되지 않은 경우 에이전트 전달이 작동하지 않음을 의미합니다.

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> [No output]
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Try to SSH to github
> Permission denied (publickey).
```

## SSH 에이전트 전달 문제 해결

다음은 SSH 에이전트 전달 문제를 해결할 때 유의해야 할 몇 가지 사항입니다.

### 코드를 체크 아웃하려면 SSH URL을 사용해야 합니다.

SSH 전달은 HTTP(s) URL이 아니라 SSH URL에서만 작동합니다. 서버에서 `.git/config` 파일을 확인하고 URL이 아래와 같은 SSH 스타일 URL인지 확인합니다.

```shell
[remote "origin"]
  url = git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}:YOUR_ACCOUNT/YOUR_PROJECT.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

### SSH 키는 로컬로 작동해야 합니다.

에이전트 전달을 통해 키를 작동하려면 키가 먼저 로컬에서 작동해야 합니다. [SSH 키 생성에 대한 가이드][generating-keys]는 SSH 키를 로컬로 설정하는 데 유용할 수 있습니다.

### 시스템에서 SSH 에이전트 전달을 허용해야 합니다.

경우에 따라 시스템 구성은 SSH 에이전트 전달을 허용하지 않습니다. 터미널에 다음 명령을 입력하여 시스템 구성 파일이 사용 중인지 확인할 수 있습니다.

```shell
$ ssh -v URL
# Connect to the specified URL with verbose debug output
> OpenSSH_8.1p1, LibreSSL 2.7.3</span>
> debug1: Reading configuration data /Users/YOU/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

위의 예제에서 파일 `~/.ssh/config`가 먼저 로드된 다음 `/etc/ssh_config`를 읽습니다.  다음 명령을 실행하여 이 파일이 옵션을 재정의하는지 검사할 수 있습니다.

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

이 예제에서 `/etc/ssh_config` 파일은 특히 `ForwardAgent no`를 나타내는데, 이는 에이전트 전달을 차단하는 방법입니다. 파일에서 이 줄을 삭제하면 에이전트 전달이 다시 한 번 작동하게 됩니다.

### 서버에서 인바운드 연결에 대한 SSH 에이전트 전달을 허용해야 합니다.

서버에서 에이전트 전달이 차단될 수도 있습니다. 서버에 SSH로 연결하고 `sshd_config`를 실행하여 에이전트 전달이 허용되는지 확인할 수 있습니다. 이 명령의 출력은 `AllowAgentForwarding`이 설정되었음을 나타내야 합니다.

### 로컬 `ssh-agent`가 실행 중이어야 합니다.

대부분의 컴퓨터에서 운영 체제가 `ssh-agent`를 자동으로 시작합니다.  그러나 Windows에서는 이 작업을 수동으로 수행해야 합니다. [Git Bash를 열 때마다 `ssh-agent`를 시작하는 방법에 대한 가이드][autolaunch-ssh-agent]가 있습니다.

`ssh-agent`가 컴퓨터에서 실행 중인지 확인하려면 터미널에 다음 명령을 입력합니다.

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

### 키를 `ssh-agent`에 사용할 수 있어야 합니다.

다음 명령을 실행하여 키가 `ssh-agent`에 표시되는지 확인할 수 있습니다.

```shell
ssh-add -L
```

명령을 통해 사용할 수 있는 ID가 없다고 표시되면 키를 추가해야 합니다.

```shell
$ ssh-add YOUR-KEY
```

{% tip %}

macOS에서 재부팅하는 동안 `ssh-agent`가 다시 시작되면 이 키를 “잊어버리게” 됩니다. 하지만 다음 명령을 사용하여 SSH 키를 키 집합으로 가져올 수 있습니다.

```shell
$ ssh-add --apple-use-keychain YOUR-KEY
```

몬테레이 이전 MacOS 버전(12.0)의 `--apple-use-keychain`경우 대신 사용합니다`-K`. 자세한 내용은 “[ssh-agent에 SSH 키 추가](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)”를 참조하세요.

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[ssh-passphrases]: /ssh-key-passphrases/
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
