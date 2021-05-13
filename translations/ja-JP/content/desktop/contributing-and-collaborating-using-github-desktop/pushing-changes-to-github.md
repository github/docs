---
title: GitHub に変更をプッシュする
shortTitle: 変更をプッシュする
intro: 'プロジェクトへの変更をローカルにコミットするときに、それらの変更を {% data variables.product.prodname_dotcom %} にプッシュして、他の人がリモートリポジトリから変更にアクセスできるようにすることができます。'
permissions: People with write permissions can push changes to a repository.
redirect_from:
  - /desktop/contributing-to-projects/pushing-changes-to-github
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_dotcom %} への変更のプッシュについて

変更をプッシュすると、ローカルリポジトリ内のコミットされた変更が {% data variables.product.prodname_dotcom %} のリモートリポジトリに送信されます。 プロジェクトをローカルで変更し、他のユーザが変更にアクセスできるようにするには、変更を {% data variables.product.prodname_dotcom %} にプッシュする必要があります。

変更をプッシュする前に、ローカルブランチを更新して、リモートリポジトリに追加されたコミットを含める必要があります。 ローカルブランチ上にないリモートで誰かがコミットを行った場合、{% data variables.product.prodname_desktop %} は、マージコンフリクトを避けるために変更をプッシュする前に、新しいコミットをフェッチするように求めます。 詳しい情報については、「[ブランチを同期する](/desktop/contributing-to-projects/syncing-your-branch)」を参照してください。

{% data reusables.desktop.protected-branches %}

### {% data variables.product.prodname_dotcom %} への変更をプッシュする

{% note %}

**注釈:** {% data variables.product.prodname_desktop %} は、一定の制限を超えるとプッシュを拒否します。

- プッシュに {% data variables.large_files.max_github_size %} を超える大きなファイルが含まれている。
- プッシュの合計サイズが {% data variables.large_files.max_file_size %} を超えている。

大きなファイルを追跡するように {% data variables.large_files.product_name_long %} を設定すると、通常は拒否される大きなファイルをプッシュできます。 詳しい情報については、「[{% data variables.large_files.product_name_long %} および {% data variables.product.prodname_desktop %} について](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)」を参照してください。

{% endnote %}

{% data reusables.desktop.push-origin %}
2. {% data variables.product.prodname_desktop %} からリモートから新しいコミットをフェッチするように求められたら、[**Fetch**] をクリックします。 ![[Fetch] ボタン](/assets/images/help/desktop/fetch-newer-commits.png)
3. 必要に応じて、[**Create Pull Request**] をクリックしてプルリクエストを開き、変更を共同で行います。 詳しい情報については、「[Issue またはプルリクエストを作成する](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)」を参照してください。 ![[Create Pull Request] ボタン](/assets/images/help/desktop/create-pull-request.png)

### 参考リンク
- {% data variables.product.prodname_dotcom %} 用語集の「[プッシュ](/github/getting-started-with-github/github-glossary/#push)」
- 「[プロジェクトの変更をコミットしてレビューする](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)」
