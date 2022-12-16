---
title: GitHub の SSH キーフィンガープリント
intro: パブリックキーフィンガープリントを使用して、リモートサーバへの接続を有効にすることができます。
redirect_from:
  - /articles/what-are-github-s-ssh-key-fingerprints
  - /articles/github-s-ssh-key-fingerprints
  - /articles/githubs-ssh-key-fingerprints
  - /github/authenticating-to-github/githubs-ssh-key-fingerprints
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: SSH key fingerprints
ms.openlocfilehash: 153c1b4ac8be917cf111fe8998ac8df8bd1bc7ed
ms.sourcegitcommit: 8c8d8598beeaa4f83b3f30cb160a5288fdb4ef9a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190331'
---
{% data variables.product.prodname_dotcom %} の公開鍵のフィンガープリントは次のとおりです。

- `SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8` (RSA)
- `SHA256:br9IjFspm1vxR3iA35FWE+4VTyz1hYVLIE2t1/CeyWQ` (DSA - 非推奨)
- `SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM` (ECDSA)
- `SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU` (Ed25519)

`~.ssh/known_hosts` ファイルに次の ssh キー エントリを追加して、{% data variables.product.prodname_dotcom %} ホストの手動による検証を回避できます。

```text
github.com ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl
github.com ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBEmKSENjQEezOmxkZMy7opKgwFB9nkt5YRrYMjNuG5N87uRgg6CLrbo5wAdT/y6v0mKV0U2w0WZ2YB/++Tpockg=
github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
```

詳しくは、「[{% data variables.product.prodname_dotcom %} のメタ情報を取得する](/rest/meta#get-github-meta-information)」をご覧ください。
