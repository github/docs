
When using the `push` and `pull_request` events, you can configure a workflow to run based on what file paths are changed. Path filters are not evaluated for pushes of tags.

Use the `paths` filter when you want to include file path patterns or when you want to both include and exclude file path patterns. Use the `paths-ignore` filter when you only want to exclude file path patterns. You cannot use both the `paths` and `paths-ignore` filters for the same event in a workflow.

If you define both `branches`/`branches-ignore` and `paths`, the workflow will only run when both filters are satisfied.

The `paths` and `paths-ignore` keywords accept glob patterns that use the `*` and `**` wildcard characters to match more than one path name. 詳しい情報については、「[フィルタパターンのチートシート](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

#### Example: Including paths

`paths`フィルタのパターンにマッチするパスが1つでもあれば、ワークフローは実行されます。 For example, the following workflow would run anytime you push a JavaScript file (`.js`).

```yaml
on:
  push:
    paths:
      - '**.js'
```

#### Example: Excluding paths

すべてのパス名が `paths-ignore` のパターンと一致する場合、ワークフローは実行されません。 If any path names do not match patterns in `paths-ignore`, even if some path names match the patterns, the workflow will run.

以下のパスフィルタを持つワークフローは、リポジトリのルートにある `docs`ディレクトリ外のファイルを少なくとも1つ含む`push`イベントでのみ実行されます。

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Example: Including and excluding paths

You can not use `paths` and `paths-ignore` to filter the same event in a single workflow. If you want to both include and exclude path patterns for a single event, use the `paths` filter along with the `!` character to indicate which paths should be excluded.

If you define a path with the `!` character, you must also define at least one path without the `!` character. If you only want to exclude paths, use `paths-ignore` instead.

パターンを定義する順序により、結果に違いが生じます:

- 肯定のマッチの後に否定のマッチングパターン（`!`がプレフィックスされている）を置くと、パスが除外されます。
- 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、パスを再び含めます。

この例は、`push`イベントに`sub-project`ディレクトリあるいはそのサブディレクトリ内のファイルが含まれ、そのファイルが`sub-project/docs`ディレクトリ内にあるのでない場合に実行されます。 たとえば`sub-project/index.js`もしくは`sub-project/src/index.js`を変更するプッシュはワークフローを実行させますが、`sub-project/docs/readme.md`だけを変更するプッシュは実行させません。

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

### Git diffの比較

{% note %}

**Note:** If you push more than 1,000 commits, or if {% data variables.product.prodname_dotcom %} does not generate the diff due to a timeout, the workflow will always run.

{% endnote %}

フィルタは、変更されたファイルを`paths-ignore`あるいは`paths`リストに対して評価することによって、ワークフローを実行すべきか判断します。 ファイルが変更されていない場合、ワークフローは実行されません。

{% data variables.product.prodname_dotcom %}はプッシュに対してはツードットdiff、プルリクエストに対してはスリードットdiffを使って変更されたファイルのリストを生成します。
- **プルリクエスト：** スリードットdiffは、トピックブランチの最新バージョンとトピックブランチがベースブランチと最後に同期されたコミットとの比較です。
- **既存のブランチへのプッシュ：** ツードットdiffは、headとベースのSHAを互いに直接比較します。
- **新しいブランチへのプッシュ：** 最も深いプッシュの先祖の親に対するツードットdiffです。

Diffs are limited to 300 files. If there are files changed that aren't matched in the first 300 files returned by the filter, the workflow will not run. You may need to create more specific filters so that the workflow will run automatically.

詳しい情報については「[プルリクエスト中のブランチの比較について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)」を参照してください。
