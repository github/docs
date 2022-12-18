---
title: 사전 수신 후크 작업
intro: 사전 수신 후크는 커밋이 리포지토리에 푸시되기 전에 기여에 대한 규칙을 적용합니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
  - /articles/working-with-pre-receive-hooks
  - /github/collaborating-with-issues-and-pull-requests/working-with-pre-receive-hooks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
versions:
  ghes: '*'
shortTitle: Pre-receive hooks
ms.openlocfilehash: 6ca26aed9e9d92abfb6d742f7f4ca968c442b447
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332594'
---
사전 수신 후크는 리포지토리에 푸시된 코드에 대한 테스트를 실행하여 기여가 리포지토리 또는 조직 정책을 충족하는지 확인합니다. 커밋 내용이 테스트를 통과하면 푸시가 리포지토리로 수락됩니다. 커밋 내용이 테스트를 통과하지 못하면 푸시가 수락되지 않습니다.

푸시가 수락되지 않으면 실패한 사전 수신 후크에 해당하는 오류 메시지가 표시됩니다.

```shell
$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 916 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: always_reject.sh: failed with exit status 1
remote: error: rejecting all pushes
To https://54.204.174.51/hodor/nope.git
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'https://54.204.174.51/hodor/nope.git'
```

![실패한 사전 수신 후크에 대한 오류 메시지](/assets/images/help/pull_requests/pre-receive-hook-failed-error.png)

{% data variables.product.product_name %} 사이트 관리자는 조직 또는 리포지토리에 대한 사전 수신 후크를 만들거나 제거할 수 있으며 조직 또는 리포지토리 관리자가 사전 수신 후크를 사용하거나 사용하지 않도록 허용할 수 있습니다. 자세한 내용은 “[사전 수신 후크를 사용하여 정책 적용](/enterprise/admin/guides/developer-workflow/using-pre-receive-hooks-to-enforce-policy)”을 참조하세요.
