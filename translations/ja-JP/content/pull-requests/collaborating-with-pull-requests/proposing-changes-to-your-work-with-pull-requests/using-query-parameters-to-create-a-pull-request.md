---
title: Using query parameters to create a pull request
intro: Use query parameters to create custom URLs to open pull requests with pre-populated fields.
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

You can use query parameters to open pull requests. Query parameters are optional parts of a URL you can customize to share a specific web page view, such as search filter results or a pull request template on {% data variables.product.prodname_dotcom %}. 独自のクエリパラメータを作成するには、キーと値のペアをマッチさせなければなりません。

{% tip %}

**Tip:** You can also create pull request templates that open with default labels, assignees, and an pull request title. 詳しい情報については「[有益なIssueとPull Requestを促進するためのテンプレートの利用](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。

{% endtip %}

クエリパラメータを使うには、同等のアクションを行うための適切な権限を持っていなければなりません。 For example, you must have permission to add a label to a pull request to use the `labels` query parameter. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

クエリパラメータを使うのに不正なURLを作成したり、適切な権限を持っていなかったりした場合には、そのURLに対して`404 Not Found`エラーページが返されます。 サーバーの限度を超えるURLを作成すると、そのURLは`414 URI Too Long`エラーページを返します。

| クエリパラメータ     | サンプル                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` creates a pull request that compares the base branch `main` and head branch `my-branch`. The `quick_pull=1` query brings you directly to the "Open a pull request" page.                                                                                                                                                                                                                                         |
| `title`      | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix+report` creates a pull request with the label "bug" and title "Bug fix."                                                                                                                                                                                                                                                                                                         |
| `body`       | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` creates a pull request with the title "Bug fix" and the comment "Describe the fix" in the pull request body.                                                                                                                                                                                                                                                        |
| `labels`     | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` creates a pull request with the labels "help wanted" and "bug".                                                                                                                                                                                                                                                                                                                       |
| `マイルストーン`    | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` creates a pull request with the milestone "testing milestones."                                                                                                                                                                                                                                                                                                                 |
| `assignees`  | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` creates a pull request and assigns it to @octocat.                                                                                                                                                                                                                                                                                                                                         |
| `projects`   | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` creates a pull request with the title "Bug fix" and adds it to the organization's project board 1.                                                                                                                                                                                                                                                                     |
| `template`   | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` creates a pull request with a template in the pull request body. The `template` query parameter works with templates stored in a `PULL_REQUEST_TEMPLATE` subdirectory within the root, `docs/` or `.github/` directory in a repository. 詳しい情報については「[有益なIssueとPull Requestを促進するためのテンプレートの利用](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。 |
