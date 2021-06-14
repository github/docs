---
title: 共同開発モデルについて
intro: プルリクエストの使い方は、プロジェクトで使う開発モデルのタイプによります。 You can use the fork and pull model or the shared repository model.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models/
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### Fork and pull model

In the fork and pull model, anyone can fork an existing repository and push changes to their personal fork. ユーザが所有するフォークにプッシュする際に、ソースリポジトリへのアクセス許可は必要ありません。 プロジェクトのメンテナーは、その変更をソースリポジトリにプルできます。 ユーザが所有するフォークのブランチからソース（上流）のリポジトリのブランチへの変更を提案するプルリクエストをオープンすると、上流のリポジトリへのプッシュアクセスを持つすべてのユーザがプルリクエストに変更を加えられるようにすることができます。  このモデルは、新しいコントリビュータにとって摩擦が減り、事前に調整することなく人々が独立して作業できることから、オープンソースプロジェクトでよく使われます。

{% tip %}

**ヒント：**{% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning-lab %}

{% endtip %}

### Shared repository model

共有リポジトリモデルでは、コラボレータは単一の共有リポジトリへのプッシュアクセスが許可され、変更の必要がある場合にはトピックブランチが作成されます。 このモデルでは、メインの開発ブランチに変更がマージされる前に、一連の変更についてコードレビューと一般的な議論を始めることができるので、プルリクエストが役に立ちます。 このモデルは、プライベートなプロジェクトで協力する小さなTeamやOrganizationで普及しています。

### 参考リンク

- [プルリクエストについて](/articles/about-pull-requests)
- [フォークからプルリクエストを作成する](/articles/creating-a-pull-request-from-a-fork)
- [フォークから作成されたプルリクエストブランチへの変更を許可する](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
