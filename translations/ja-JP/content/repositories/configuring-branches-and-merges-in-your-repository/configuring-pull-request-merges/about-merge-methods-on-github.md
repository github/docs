---
title: GitHub上のマージ方法について
intro: 'リポジトリへのプッシュアクセスを持つコントリビューターに対し、{% data variables.product.product_location %}上でプルリクエストを様々なマージオプションでマージすることを許可するか、リポジトリへのすべてのプルリクエストに特定のマージ方法を強制することができます。'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
  - /github/administering-a-repository/configuring-pull-request-merges/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: About merge methods
ms.openlocfilehash: 97e8b7159ebadf1fe02ae56f707728c2bc8c439d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882442'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}コミットsquashingあるいはリベースのようなマージの1つの種類を、リポジトリでその方法だけを有効化することで強制できます。

{% ifversion fpt or ghec %} {% note %}

**注:** マージ キューを使用すると、ユーザーがマージ方法を選択することはできなくなります。これはキューによって制御されます。 {% data reusables.pull_requests.merge-queue-references %}

{% endnote %} {% endif %}

{% data reusables.pull_requests.default_merge_option %}

デフォルトのマージ方法では、マージコミットが作成されます。 直線状のコミット履歴を強制して、保護されたブランチにマージコミットをプッシュできないようにすることができます。 詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-linear-history)」を参照してください。

## マージコミットのsquash

{% data reusables.pull_requests.squash_and_merge_summary %}

コミットの squash を有効化する前に、以下の欠点について考慮してください:
- 特定の変更が元々いつ行われたのか、そして squash されたコミットを誰が作成したのかという情報が失われます。
- squash してマージした後もプルリクエストの head ブランチで作業を続け、同じブランチ間に新しいプルリクエストを作成すると、以前 squash してマージしたコミットが新しいプルリクエストにリストされます。 また、連続するプルリクエストごとに繰り返し解決しなければならないコンフリクトが発生する場合もあります。 詳細については、「[pull request のマージについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)」を参照してください。
- "SHA" あるいは "hash" ID を使う Git コマンドの中には、オリジナルのコミット中の SHA ID が失われるので使うことが難しくなるものが生じるかもしれません。 たとえば、[`git rerere`](https://git-scm.com/docs/git-rerere) を使用しても効果がないことがあります。

詳細については、「[pull request にコミットのスカッシュを構成する](/articles/configuring-commit-squashing-for-pull-requests)」を参照してください。

## リベースとコミットのマージ

{% data reusables.pull_requests.rebase_and_merge_summary %}

コミットのリベースを有効化する前に、以下の欠点について考慮してください:
- リポジトリの共同作成者は、コマンド ライン上でリベースし、競合があれば解決し、変更を pull request のトピック ブランチ (あるいはリモートの head ブランチ) へフォース プッシュしなければ、{% data variables.product.product_location %} 上で **リベースとマージ** のオプションを使えるようにならないかもしれません。 フォースプッシュは、コントリビューターが他者が作業のベースとしている作業を上書きすることがないよう、慎重に行わなければなりません。 **リベースとマージ** のオプションが {% data variables.product.product_location %} で無効になる場合や、それを再有効化するワークフローについては、「[pull request のマージについて](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)」を参照してください。
- {% indented_data_reference reusables.pull_requests.rebase_and_merge_verification spaces=3 %}

詳細については、「[pull request にコミットのリベースを構成する](/articles/configuring-commit-rebasing-for-pull-requests)」を参照してください。
