---
title: SSH キーの削除または紛失
intro: 'セキュリティ上の理由から、過去 1 年間使用されていない SSH キーを {% data variables.product.prodname_dotcom %}は自動的に削除します。'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/troubleshooting-ssh/deleted-or-missing-ssh-keys
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Deleted or missing SSH keys
ms.openlocfilehash: aa26a5bf39db3f41aa3c3aa01f59c392a42f467f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088224'
---
{% data variables.product.prodname_dotcom %}は使われていない SSH キーを自動的に削除し、アカウントを安全に保ちます。たとえば退職者が出たときやコンピューターを紛失したときです。

アカウントのセキュリティログを見ると、SSH キーが 1 年間使われていないか確認できます。 詳細については、「[セキュリティ ログの確認](/articles/reviewing-your-security-log/)」を参照してください。

使われていない SSH キーが削除されると、新しい SSH キーを生成して、アカウントに関連付ける必要があります。 詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)」および「[GitHub アカウントへの新しい SSH キーの追加](/articles/adding-a-new-ssh-key-to-your-github-account/)」を参照してください。
