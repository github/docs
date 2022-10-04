---
title: 查看项目的贡献者
intro: '可以查看向存储库{% ifversion fpt or ghec %}及其依赖项{% endif %}贡献提交的人员。'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph
  - /articles/viewing-contribution-activity-in-a-repository
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View project contributors
ms.openlocfilehash: a5c3c5e1cb83039003b42a0526a49cb1db039888
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369159'
---
## 关于贡献者

可以在参与者图中查看存储库 {% ifversion ghes or ghae %} 的前 100 名参与者，包括提交共同作者、{% endif %}。 合并提交和空提交不会计为此图的贡献。

{% ifversion fpt or ghec %} 你还可以查看已参与项目的 Python 依赖项的人员列表。 若要访问此社区参与者列表，请访问 `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`。
{% endif %}

## 访问贡献者图

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 在左侧边栏中，单击“参与者”。
  ![“参与者”选项卡](/assets/images/help/graphs/contributors_tab.png)
4. （可选）要查看特定时间段内的贡献者，单击然后拖动，直到选择时间段。 贡献者图在每个周日汇总每周提交数，因此您设置的时间段必须包括周日。
  ![参与者图中的选定时间范围](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

## 贡献者疑难解答

如果您没有在仓库的贡献者图中显示，可能是因为：
- 您并非前 100 名贡献者之一。
- 您的提交尚未合并到默认分支。
- 您用于创作提交的电子邮件地址未连接到到您的 {% data variables.product.product_name %} 帐户。

{% tip %}

提示：若要列出存储库中的所有提交参与者，请参阅“[列表存储库参与者](/rest/repos/repos#list-repository-contributors)”。

{% endtip %}

如果仓库中的所有提交均位于非默认分支中，则您不在贡献者图中。 例如，图中不包含 `gh-pages` 分支上的提交，除非 `gh-pages` 是存储库的默认分支。 要将您的提交合并到默认分支，您可以创建拉取请求。 有关详细信息，请参阅“[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”。

如果您用于创作提交的电子邮件地址未连接到您的 {% data variables.product.product_name %} 帐户，则提交不会链接到您的帐户，并且您不会在贡献者图中显示。 有关详细信息，请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address){% ifversion not ghae %}”和“[将电子邮件地址添加到 {% data variables.product.prodname_dotcom %} 帐户](/articles/adding-an-email-address-to-your-github-account){% endif %}”。
