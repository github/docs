---
title: 使用自动分级
intro: 您可以通过配置测试在作业仓库中运行，来自动提供对您学生提交的代码的反馈。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can set up and use autograding on assignments in a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
  - /education/manage-coursework-with-github-classroom/use-autograding
ms.openlocfilehash: b3e9b44da93d799972b93a9f6e822b767099fdba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097929'
---
## 关于自动分级

{% data reusables.classroom.about-autograding %}

学生接受作业后，每次推送到作业仓库时，{% data variables.product.prodname_actions %} 都会在包含学生最新代码的 Linux 环境中运行自动分级测试的命令。 {% data variables.product.prodname_classroom %} 为 {% data variables.product.prodname_actions %} 创建必要的工作流程。 您不需要使用 {% data variables.product.prodname_actions %} 的经验便可使用自动分级。

您可以使用测试框架、运行自定义命令、编写输入/输出测试或组合不同的测试方法。 用于自动分级的 Linux 环境包含许多流行的软件工具。 有关详细信息，请参阅“[{% data variables.product.company_short %} 托管运行器规范](/actions/reference/specifications-for-github-hosted-runners#supported-software)”中最新版本的 Ubuntu 的详细信息。

您可以通过导航 {% data variables.product.prodname_classroom %} 中的作业来查看哪些学生通过了自动分级测试的概况。 绿色复选标记表示学生的所有测试都已通过，红色 X 表示学生的部分或所有测试都未通过。 如果您为一个或多个测试评分，则气泡会显示测试的分数以及作业可得最高分数。

![包含自动评分结果的作业概述](/assets/images/help/classroom/assignment-individual-hero.png)

## 评分方法

有两种评分方法：输入/输出测试和运行命令测试。

### 输入/输出测试

输入/输出测试可以选择性运行设置命令，然后向测试命令提供标准输入。 {% data variables.product.prodname_classroom %} 根据预期结果评估测试命令的输出。

| 设置 | 说明 |
| :- | :- |
| **测试名称** | 测试的名称，用于识别日志中的测试 |
| **设置命令** | 可选。 在测试之前运行的命令，如编译或安装 |
| **运行命令** | 运行测试并生成用于评估的标准输出的命令 |
| **输入** | 运行命令的标准输入 |
| 预期输出 | 您要视为运行命令的标准输出的输出 |
| **比较** | 运行命令的输出和预期输出之间的比较类型<br/><br/><ul><li>包括：当预期输出出现在 run 命令的标准输出中的任何位置时<br/>传递</li><li>精确：当预期输出与 run 命令的标准输出完全相同时<br/>传递</li><li>正则表达式：当预期输出中的正则表达式与 run 命令的标准输出匹配时<br/>传递</li></ul> |
| **超时** | 测试在导致失败之前应运行多长时间（分钟） |
| **点** | 可选。 测试从总分中获得的分数 |

### 运行命令测试

运行命令测试运行设置命令，然后运行测试命令。 {% data variables.product.prodname_classroom %} 检查测试命令的退出状态。 退出代码 `0` 会导致成功，任何其他退出代码都会导致失败。

{% data variables.product.prodname_classroom %} 为各种编程语言提供语言特定的运行命令测试预设。 例如，运行节点测试使用 `npm install` 预填充 setup 命令，使用 `npm test` 预填充 test 命令。

| 设置 | 说明 |
| :- | :- |
| **测试名称** | 测试的名称，用于识别日志中的测试 |
| **设置命令** | 可选。 在测试之前运行的命令，如编译或安装 |
| **运行命令** | 运行测试并生成用于评估的退出代码的命令 |
| **超时** | 测试在导致失败之前应运行多长时间（分钟） |
| **点** | 可选。 测试从总分中获得的分数 |

## 配置作业的自动评分测试

您可以在创建新作业时添加自动评分测试。 {% data reusables.classroom.for-more-information-about-assignment-creation %}

您可以添加、编辑或删除现有作业的自动评分测试。 通过课堂 UI 所做的所有更改都将推送到现有的学生资料库，因此在编辑测试时要小心。

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.assignments-click-pencil %}
1. 在左侧边栏中，单击“评分和反馈”。
  ![作业基础知识左侧的“评分和反馈”](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. 添加、编辑或删除自动评分测试。
    - 要添加测试，请在“添加自动评分测试”下选择“添加测试”下拉菜单，然后单击要使用的评分方法。
       ![使用“添加测试”下拉菜单，单击评分方法](/assets/images/help/classroom/autograding-click-grading-method.png)配置测试，然后单击“保存测试用例”。
       ![自动评分测试的“保存测试用例”按钮](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - 要编辑测试，请点击测试名称右侧的 {% octicon "pencil" aria-label="The pencil icon" %}。
        ![用于编辑自动评分测试的铅笔图标](/assets/images/help/classroom/autograding-click-pencil.png)配置测试，然后单击“保存测试用例”。
       ![自动评分测试的“保存测试用例”按钮](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - 要删除测试，请点击测试名称右侧的 {% octicon "trash" aria-label="The trash icon" %}。
        ![用于删除自动评分测试的回收站图标](/assets/images/help/classroom/autograding-click-trash.png)
1. 在页面底部，单击“更新作业”。
  ![页面底部的“更新作业”按钮](/assets/images/help/classroom/assignments-click-update-assignment.png)

## 查看和下载自动分级测试的结果

### 下载自动评分结果

您也可以通过“Download（下载）”按钮下载学生自动评分的 CSV。 这将生成并下载一个包含学生仓库链接、其 {% data variables.product.prodname_dotcom %} 处理、名册标识、提交时间戳和自动评分的CSV。

![选择“下载”按钮，将出现“下载成绩(突出显示)”选项和“下载存储库”的附加选项](/assets/images/help/classroom/download-grades.png)

### 查看单个日志
{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-assignment-in-list %}
1. 在提交的右侧，单击“查看测试”。
  ![作业提交的“查看测试”按钮](/assets/images/help/classroom/assignments-click-view-test.png)
1. 查看测试输出。 有关详细信息，请参阅“[使用工作流运行日志](/actions/managing-workflow-runs/using-workflow-run-logs)”。

## 延伸阅读

- [{% data variables.product.prodname_actions %} 文档](/actions)
