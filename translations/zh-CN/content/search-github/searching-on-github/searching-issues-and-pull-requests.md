---
title: 搜索议题和拉取请求
intro: '您可以在 {% data variables.product.product_name %} 上搜索代码，并使用这些代码搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-issues
  - /articles/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: 搜索议题和 PR
---

您可以在所有 {% data variables.product.product_name %} 内全局搜索议题和拉取请求，也可以在特定组织内搜索议题和拉取请求。 更多信息请参阅“[关于在 {% data variables.product.company_short %} 上搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。

{% tip %}

**提示：**{% ifversion ghes or ghae %}
  - 本文章包含在 {% data variables.product.prodname_dotcom %}.com 网站上的示例搜索，但您可以在 {% data variables.product.product_location %} 上使用相同的搜索过滤器。{% endif %}
  - 有关可以添加到任何搜索限定符以进一步改善结果的搜索语法列表，请参阅“[了解搜索语法](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)”。
  - 对多个字词的搜索词使用引号。 例如，如果要搜索具有标签 "In progress" 的议题，可搜索 `label:"in progress"`。 搜索不区分大小写。
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

## 仅搜索议题或拉取请求

默认情况下，{% data variables.product.product_name %} 搜索将返回议题和拉取请求。 但您可以使用 `type` 或 `is` 限定符将搜索结果限制为仅议题或拉取请求。

| 限定符          | 示例                                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:pr`    | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) 匹配含有 "cat" 字样的拉取请求。                                                                  |
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) 匹配含有 "github" 字样且由 @defunkt 评论的议题。 |
| `is:pr`      | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) 匹配含有 "event" 字样的拉取请求。                                                       |
| `is:issue`   | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) 匹配具有标签 "bug" 的已关闭议题。                  |

## 按标题、正文或评论搜索

通过 `in` 限定符，您可以将搜索限制为标题、正文、评论或这些的任意组合。 如果省略此限定符，则标题、正文和评论全部搜索。

| 限定符           | 示例                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| `in:title`    | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) 匹配其标题中含有 "warning" 的议题。          |
| `in:body`     | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) 匹配其标题或正文中含有 "error" 的议题。 |
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) 匹配其评论中提及 "shipit" 的议题。        |

## 在用户或组织的仓库内搜索

要在特定用户或组织拥有的所有仓库中搜索议题和拉取请求，您可以使用 `user` 或 `org` 限定符。 要在特定仓库中搜索议题和拉取请求，您可以使用 `repo` 限定符。

{% data reusables.pull_requests.large-search-workaround %}


| 限定符                       | 示例                                                                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) 匹配含有 "ubuntu" 字样、来自 @defunkt 拥有的仓库的议题。                                                          |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) 匹配 GitHub 组织拥有的仓库中的议题。                                                                             |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) 匹配来自 @mozilla 的 shumway 项目、在 2012 年 3 月之前创建的议题。 |



## 按开放或关闭状态搜索

您可以使用 `state` 或 `is` 限定符基于议题和拉取请求处于打开还是关闭状态进行过滤。

| 限定符            | 示例                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `state:open`   | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) 匹配提及 @vmg 且含有 "libraries" 字样的开放议题。 |
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) 匹配正文中含有 "design" 字样的已关闭议题。                     |
| `is:open`      | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) 匹配含有 "performance" 字样的开放议题。                                 |
| `is:closed`    | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) 匹配含有 "android" 字样的已关闭议题和拉取请求。                                              |

## 按仓库可见性过滤

您可以使用 `is` 限定符，按包含议题和拉取请求的仓库的可见性进行过滤。 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。

| Qualifier  | Example | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) matches issues and pull requests in public repositories.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) matches issues and pull requests in internal repositories.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) matches issues and pull requests that contain the word "cupcake" in private repositories you can access.

## 按作者搜索

`author` 限定符查找由特定用户或集成帐户创建的议题和拉取请求。

| 限定符                       | 示例                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) 匹配含有 "cool" 字样、由 @gjtorikian 创建的议题和拉取请求。           |
|                           | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) 匹配由 @mdo 撰写、正文中含有 "bootstrap" 字样的议题。 |
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) 匹配由名为 "robot" 的集成帐户创建的议题。                                    |

## 按受理人搜索

`assignee` 限定符查找分配给特定用户的议题和拉取请求。 您无法搜索具有 _any_ 受理人的议题和拉取请求，但可以搜索[没有受理人的议题和拉取请求](#search-by-missing-metadata)。

| 限定符                       | 示例                                                                                                                                                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) 匹配分配给 @vmg 的 libgit2 项目 libgit2 中的议题和拉取请求。 |

## 按提及搜索

`mentions` 限定符查找提及特定用户的议题。 更多信息请参阅“[提及人员和团队](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)”。

| 限定符                       | 示例                                                                                                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>mentions:<em>USERNAME</em></code> | [**`resque mentions:defunkt`**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) matches issues with the word "resque" that mention @defunkt. |

## 按团队提及搜索

对于您所属的组织和团队，您可以使用 `team` 限定符查找提及该组织内特定团队的议题或拉取请求。 将这些示例名称替换为您的组织和团队的名称以执行搜索。

| 限定符                       | 示例                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------- |
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **`team:jekyll/owners`** matches issues where the `@jekyll/owners` team is mentioned. |
|                           | **team:myorg/ops is:open is:pr** 匹配提及 `@myorg/ops` 团队的打开拉取请求。                         |

## 按评论者搜索

`commenter` 限定符查找含有来自特定用户评论的议题。

| 限定符                       | 示例                                                                                                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) 匹配位于 GitHub 拥有的仓库中、含有 "github" 字样且由 @defunkt 评论的议题。 |

## 按议题或拉取请求中涉及的用户搜索

您可以使用 `involves` 限定符查找以某种方式涉及特定用户的议题。 `involves` 限定符是单一用户 `author`、`assignee`、`mentions` 和 `commenter` 限定符之间的逻辑 OR（或）。 换句话说，此限定符查找由特定用户创建、分配给该用户、提及该用户或由该用户评论的议题和拉取请求。

| 限定符                       | 示例                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** 匹配涉及 @defunkt 或 @jlord 的议题。                |
|                           | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) 匹配涉及 @mdo 且正文中未包含 "bootstrap" 字样的议题。 |

{% ifversion fpt or ghes or ghae or ghec %}
## 搜索链接的议题和拉取请求
您可以将结果缩小到仅包括通过关闭引用链接到拉取请求的议题，或者链接到拉取请求可能关闭的议题的拉取请求。

| 限定符             | 示例                                                                                                                                                                                            |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `linked:pr`     | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) 匹配 `desktop/desktop` 仓库中通过关闭引用链接到拉取请求的开放议题。                          |
| `linked:issue`  | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) 匹配 `desktop/desktop` 仓库中链接到拉取请求可能已关闭的议题的已关闭拉取请求。           |
| `-linked:pr`    | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) 匹配 `desktop/desktop` 仓库中未通过关闭引用链接到拉取请求的开放议题。                       |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) 匹配 `desktop/desktop` 仓库中未链接至拉取请求可能关闭的议题的开放拉取请求。 
{% endif %}

## 按标签搜索

您可以使用 `label` 限定符按标签缩小结果范围。 由于议题可有多个标签，因此您可为每个议题列出单独的限定符。

| 限定符                        | 示例                                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) 匹配标签为 "help wanted"、位于 Ruby 仓库中的议题。                                 |
|                            | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) 匹配正文中含有 "broken" 字样、没有 "bug" 标签但*有* "priority" 标签的议题。                  |
|                            | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) matches issues with the labels "bug" and "resolved."{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
|                            | [**label:bug label:resolved**](https://github.com/search?q=label%3Abug%2Cresolved&type=Issues) 匹配含有 "bug" 或 "resolved" 标签的议题。{% endif %}

## 按里程碑搜索

`milestone` 限定符查找作为仓库内[里程碑](/articles/about-milestones)组成部分的议题或拉取请求。

| 限定符                        | 示例                                                                                                                                        |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) 匹配位于名为 "overhaul" 的里程碑中的议题。 |
|                            | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) 匹配位于名为 "bug fix" 的里程碑中的议题。    |

## 按项目板搜索

您可以使用 `project` 限定符查找与仓库或组织中特定[项目板](/articles/about-project-boards/)关联的议题。 必须按项目板编号搜索项目板。 您可在项目板 URL 的末尾找到项目板编号。

| 限定符                        | 示例                                                                    |
| -------------------------- | --------------------------------------------------------------------- |
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** 匹配 GitHub 拥有的、与组织项目板 57 关联的议题。                  |
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** 匹配与 @github 的 linguist 仓库中的项目板 1 关联的议题。 |

## 按提交状态搜索

您可以基于提交的状态过滤拉取请求。 This is especially useful if you are using [the Status API](/rest/reference/commits#commit-statuses) or a CI service.

| 限定符              | 示例                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) 匹配在状态为待定的 Go 仓库中打开的拉取请求。                                                        |
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) 匹配正文中含有 "finally" 字样、具有成功状态的打开拉取请求。       |
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) 匹配在 2015 年 5 月打开、具有失败状态的拉取请求。 |

## 按提交 SHA 搜索

如果您知道提交的特定 SHA 哈希，您可以使用它来搜索包含该 SHA 的拉取请求。 SHA 语法必须至少 7 个字符。

| 限定符                        | 示例                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) 匹配具有开头为 `e1109ab` 的提交 SHA 的拉取请求。                                      |
|                            | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) 匹配具有开头为 `0eff326d6213c` 的提交 SHA 的合并拉取请求。 |

## 按分支名称搜索

您可以基于拉取请求来自的分支（"head" 分支）或其合并到的分支（"base" 分支）来过滤拉取请求。

| 限定符                        | 示例                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) 匹配从名称以 "change" 字样开头的已关闭分支打开的拉取请求。 |
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) 匹配合并到 `gh-pages` 分支中的拉取请求。                                                     |

## 按语言搜索

通过 `language` 限定符，您可以搜索以特定语言编写的仓库内的议题和拉取请求。

| 限定符                        | 示例                                                                                                                     |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) 匹配 Ruby 仓库中的开放议题。 |

## 按评论数量搜索

您可以使用 `comments` 限定符以及[大于、小于和范围限定符](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)以按评论数量搜索。

| 限定符                        | 示例                                                                                                                                        |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) 匹配具有超过 100 条评论的已关闭议题。 |
|                            | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) 匹配具有 500 到 1,000 条评论的议题。                           |

## 按交互数量搜索

您可以使用 `interactions` 限定符以及[大于、小于和范围限定符](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)按交互数量过滤议题和拉取请求。 交互数量是对议题或拉取请求的反应和评论数量。

| 限定符                        | 示例                                                                                                                |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) 匹配超过 2000 个交互的拉取请求或议题。 |
|                            | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) 匹配 500 至 1,000 个交互的拉取请求或议题。    |

## 按反应数量搜索

您可以使用 `reactions` 限定符以及 [大于、小于和范围限定符](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)按反应数量过滤议题和拉取请求。

| 限定符                        | 示例                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) 匹配超过 1000 个反应的议题。 |
|                            | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) 匹配 500 至 1000 个反应的议题。                 |

## 搜索草稿拉取请求
您可以过滤草稿拉取请求。 更多信息请参阅“[关于拉取请求](/articles/about-pull-requests#draft-pull-requests)”。

| 限定符        | 示例 | ------------- | -------------{% ifversion fpt or ghes or ghae or ghec %} | `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) 匹配拉取请求草稿。 | `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) 匹配可供审查的拉取请求。{% else %} | `is:draft` | [**is:draft**](https://github.com/search?q=is%3Adraft) 匹配拉取请求草稿。{% endif %}

## 按拉取请求审查状态和审查者搜索

您可以基于拉取请求的[审查状态](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)（_无_、_必需_、_批准_或_请求更改_）、按审查者和请求的审查者过滤拉取请求。

| 限定符                        | 示例                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `review:none`              | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) 匹配尚未审查的拉取请求。                                                                                                                                                                                                                                                                        |
| `review:required`          | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) 匹配需要审查然后才能合并的拉取请求。                                                                                                                                                                                                                                                          |
| `review:approved`          | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) 匹配审查者已批准的拉取请求。                                                                                                                                                                                                                                                              |
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) 匹配审查者已请求更改的拉取请求。                                                                                                                                                                                                                                          |
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) 匹配特定人员审查的拉取请求。                                                                                                                                                                                                                                                |
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) 匹配特定人员申请审查的拉取请求。 申请的审查者在其审查拉取请求后不再在搜索结果中列出。 If the requested person is on a team that is requested for review, then review requests for that team will also appear in the search results.{% ifversion fpt or ghae-issue-5181 or ghes > 3.2 or ghec %}
| <code>user-review-requested:@me</code> | [**type:pr user-review-requested:@me**](https://github.com/search?q=is%3Apr+user-review-requested%3A%40me+) matches pull requests that you have directly been asked to review.{% endif %}
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:atom/design**](https://github.com/search?q=type%3Apr+team-review-requested%3Aatom%2Fdesign&type=Issues) 匹配已审查团队 `atom/design` 请求的拉取请求。 申请的审查者在其审查拉取请求后不再在搜索结果中列出。                                                                                                                                                                                            |

## 按议题或拉取请求创建或上次更新的时间搜索

您可以基于创建时间或上次更新时间过滤议题。 对于议题创建，您可以使用 `created` 限定符；要了解议题上次更新的时间，您要使用 `updated` 限定符。

两者均采用日期作为参数。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符                        | 示例                                                                                                                                                                            |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) 匹配以 C# 编写的仓库中 2011 年以前创建的开放议题。 |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) 匹配 2013 年 2 月后更新的、正文中含有 "weird" 字样的议题。           |

## 按议题或拉取请求关闭的时间搜索

您可以使用 `closed` 限定符基于议题和拉取请求关闭的时间进行过滤。

此限定符采用日期作为其参数。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符                        | 示例                                                                                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) 匹配 2014 年 6 月 11 日后关闭的 Swift 中的议题和拉取请求。                |
|                            | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) 匹配 2012 年 10 月后关闭、正文中含有 "data" 字样的议题和拉取请求。 |

## 按拉取请求合并的时间搜索

您可以使用 `merged` 限定符基于拉取请求合并的时间进行过滤。

此限定符采用日期作为其参数。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符                        | 示例                                                                                                                                                                                                                      |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>merged:<em>YYYY-MM-DD</em></code> | [**`language:javascript merged:<2011-01-01`**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) matches pull requests in JavaScript repositories that were merged before 2011. |
|                            | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) 匹配 2014 年 5 月之后合并、标题中含有 "fast" 字样、以 Ruby 编写的拉取请求。             |

## 基于拉取请求是否已合并搜索

您可以使用 `is` 限定符基于拉取请求已合并还是未合并进行过滤。

| 限定符           | 示例                                                                                                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:merged`   | [**bug is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) matches merged pull requests with the word "bug." |
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) 匹配含有 "error" 字样的已关闭议题和拉取请求。                                |

## 基于仓库是否已存档搜索

`archived` 限定符基于议题或拉取请求是否位于已存档仓库中过滤结果。

| 限定符              | 示例                                                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) 匹配您具有访问权限的已存档仓库中含有 "GNOME" 字样的议题和拉取请求。   |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) 匹配您具有访问权限的未存档仓库中含有 "GNOME" 字样的议题和拉取请求。 |

## 基于对话是否已锁定搜索

您可以使用 `is` 限定符搜索具有已锁定对话的议题或拉取请求。 更多信息请参阅“[锁定对话](/communities/moderating-comments-and-conversations/locking-conversations)”。

| 限定符           | 示例                                                                                                                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:locked`   | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) 匹配未存档仓库中具有已锁定对话且含有 "code of conduct" 字样的议题或拉取请求。 |
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) 匹配未存档仓库中具有未锁定对话且含有 "code of conduct" 字样的议题或拉取请求。        |

## 按缺少的元数据搜索

您可以使用 `no` 限定符缩小搜索缺少特定元数据的议题和拉取请求的范围。 该元数据包括：

* 标签
* 里程碑
* 受理人
* 项目

| 限定符            | 示例                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `no:label`     | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) 匹配没有任何标签且含有 "priority" 字样的议题和拉取请求。                                                                        |
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) 匹配未与含有 "sprint" 字样的里程碑关联的议题。                                                  |
| `no:assignee`  | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) 匹配未与受理人关联、含有 "important" 字样且位于 Java 仓库中的议题。 |
| `no:project`   | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) 匹配未与项目板关联、含有 "build" 字样的议题。                                                                  |

## 延伸阅读

- “[排序搜索结果](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
