---
title: コントリビューションがプロフィールに表示されないのはなぜですか？
intro: コントリビューション グラフにコントリビューションが表示されない可能性がある一般的な理由について説明します。
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Missing contributions
ms.openlocfilehash: dbdf99a77c423774c03f69d21542f8174e813bc6
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127660'
---
## コントリビューション グラフについて

プロファイル コントリビューション グラフは、{% data variables.location.product_location %} {% ifversion ghae %}が所有する{% else %}の{% endif %}リポジトリへのコントリビューションの記録です。 ローカルタイムゾーンではなく、協定世界時 (UTC) に従って、コントリビューションにタイムスタンプが付けられます。 コントリビューションは、一定の基準を満たしている場合にのみカウントされます。 場合によっては、コントリビューションを表示するためにグラフを再構築する必要があります。

SAML シングル サインオン (SSO) を使用する組織に所属しており、アクティブな SSO セッションがない場合は、プロファイルで組織からのコントリビューション アクティビティを表示できません。 組織の外部からプロファイルを表示しているユーザーには、組織のコントリビューション アクティビティの匿名化されたコントリビューション アクティビティが表示されます。

## カウントされるコントリビューション

### Issue、プルリクエスト、ディスカッション

Issue、プルリクエスト、およびディスカッションは、フォークではなくスタンドアロンリポジトリで開かれた場合、コントリビューショングラフに表示されます。

### コミット
コミットは、次の **すべて** の条件を満たしている場合にコントリビューション グラフに表示されます。
- コミットに使用されたメール アドレスが、{% data variables.location.product_location %} のアカウントに関連付けられている。
- コミットが、フォークではなくスタンドアロンのリポジトリで行われた場合。
- コミットが以下で行われた場合:
  - リポジトリのデフォルトブランチ内
  - `gh-pages` ブランチ内 (プロジェクト サイトを持つリポジトリの場合)

プロジェクト サイトの詳細については、「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

さらに、次のうち **少なくとも 1 つ** に該当する必要があります。
- リポジトリのコラボレーターであるか、またはリポジトリを所有する Organization のメンバーであること。
- リポジトリをフォークしたこと。
- リポジトリでプルリクエストまたは Issue を開いていること。
- リポジトリに Star を付けたこと。

## コントリビューションがカウントされない一般的な理由

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### コミットしてからまだ 24 時間経過していない

コントリビューションとしてカウントするための要件を満たすコミットを行った後、コントリビューションがコントリビューショングラフに表示されるまで、最大 24 時間待つ必要があります。

### ローカルの Git コミットメールがアカウントに接続されていない

コミットをコントリビューション グラフに表示するには、{% data variables.location.product_location %}{% ifversion fpt or ghec %} のアカウントに接続されているメール アドレス、またはメール設定で示されている {% data variables.product.prodname_dotcom %} 指定の `noreply` メール アドレス{% endif %}を使用して行う必要があります。{% ifversion fpt or ghec %} `noreply` メール アドレスについて詳しくは、「[コミット メール アドレスを設定する](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)」を参照してください。{% endif %}

コミット URL の末尾に `.patch` を追加することで、コミットに使用されるメール アドレスを確認できます (例: <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>)。

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

`From:` フィールドのメール アドレスは、[ローカル Git 構成設定](/articles/set-up-git)で設定されたアドレスです。 この例では、コミットに使用されるメール アドレスは `octocat@nowhere.com` です。

コミットに使用されるメール アドレスが {% data variables.location.product_location %} のアカウントに接続されていない場合は、{% ifversion ghae %}Git でコミットを作成するために使用されるメール アドレスを変更します。 詳しくは、「[コミット メール アドレスを設定する](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)」を参照してください。{% else %}{% data variables.location.product_location %} のアカウントに[メール アドレスを追加する](/articles/adding-an-email-address-to-your-github-account)必要があります。 新しいアドレスを追加すると、 コントリビューショングラフが自動的に再構築されます。{% endif %}

{% ifversion fpt or ghec %} {% note %}

**注**: {% data variables.enterprise.prodname_managed_user %} を使用する場合、複数のメール アドレスが ID プロバイダー (IdP) に登録されていても、アカウントにさらにメール アドレスを追加することはできません。 したがって、IdP に登録されているプライマリ メール アドレスで作成されたコミットのみを、{% data variables.enterprise.prodname_managed_user %} に関連付けることができます。

{% endnote %} {% endif %}

汎用メール アドレス (`jane@computer.local` など) は、{% data variables.product.prodname_dotcom %} アカウントに追加してコミットにリンクすることはできません。 汎用メール アドレスを使用してコミットを作成した場合、そのコミットは {% data variables.product.prodname_dotcom %} プロファイルにリンクされず、コントリビューション グラフに表示されません。

### 既定または `gh-pages` ブランチでコミットが行われなかった

コミットは、既定のブランチまたは `gh-pages` ブランチ (プロジェクト サイトを持つリポジトリの場合) で行われた場合にのみカウントされます。 詳細については、「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

コミットが既定以外または `gh-pages` 以外のブランチにあり、コントリビューションにカウントする場合は、以下のうち 1 つを行う必要があります。
- [pull request を開き](/articles/creating-a-pull-request)、変更を既定のブランチまたは `gh-pages` ブランチにマージします。
- リポジトリの[既定のブランチを変更](/github/administering-a-repository/changing-the-default-branch)します。

{% warning %}

**警告**: リポジトリの既定のブランチを変更すると、すべてのリポジトリ コラボレーターに対しても変更されます。 これを行うのは、新しいブランチを将来のすべてのプルリクエストとコミットが行われるベースにしたい場合だけにしてください。

{% endwarning %}

### コミットがフォークで行われました

フォークで行われたコミットは、 コントリビューションにはカウントされません。 カウントには、次のいずれかを実行する必要があります:
- [pull request を開き](/articles/creating-a-pull-request)、変更を親リポジトリにマージします。
- フォークをデタッチして、{% data variables.location.product_location %} 上のスタンドアロン リポジトリに変換するために、{% data variables.contact.contact_support %} に連絡してください。 フォークに独自のフォークがある場合は、フォークがリポジトリと一緒に新しいネットワークに移動するのか、現在のネットワークに残るのかを {% data variables.contact.contact_support %} に連絡してください。 詳細については、「[フォークについて](/articles/about-forks/)」を参照してください。

## 参考資料

- "[プライベート コントリビューションをプロフィールで公開または非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[プロフィール ページでコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)"
