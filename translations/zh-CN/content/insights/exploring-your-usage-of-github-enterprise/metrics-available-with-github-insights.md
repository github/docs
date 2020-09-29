---
title: GitHub Insights 可用的指标
product: '{% data reusables.gated-features.github-insights %}'
intro: '{% data variables.product.prodname_insights %} 包括各种指标，便于您了解团队的软件交付流程。'
redirect_from:
  - /github/installing-and-configuring-github-insights/metrics-available-with-github-insights
  - /github/installing-and-configuring-github-insights/key-metrics-for-collaboration-in-pull-requests
versions:
  enterprise-server: '*'
---

### 关于 {% data variables.product.prodname_insights %} 中的指标

{% data reusables.github-insights.key-metrics-and-reports %}

{% data reusables.github-insights.about-key-metrics %} 您可以设定并衡量每个关键指标的目标。 更多信息请参阅“[管理目标](/insights/installing-and-configuring-github-insights/managing-goals)。”

{% data reusables.github-insights.about-reports %}

{% data reusables.github-insights.manage-metrics %}

### 拉取请求中协作的关键指标

拉动请求中协作的关键指标可帮助团队消除流程中的瓶颈，改善协作，并以更高质量更快地交付项目。 改进这些指标可提高团队的生产力。

- [代码审查分布](#code-review-distribution)
- [代码审查周期](#code-review-turnaround)
- [开放时间](#time-to-open)
- [拉取请求大小](#pull-request-size)
- [进行中的工作](#work-in-progress)

#### 代码审查分布

衡量代码审查在整个团队或组织中的分布。 值越接近 1 表示分布越相等。 包括先前打开、审查或评论拉取请求或者提交到分支的成员。

指数等于 1 减去一个组织或团队的代码审查基尼系数。 更多信息请参阅维基百科上的[基尼系数](https://en.wikipedia.org/wiki/Gini_coefficient)。

#### 代码审查周期

审查分配与审查完成之间的时间间隔。

为防止代码审查妨碍团队的运作，组织可以优化其审查分配流程，并为周期时间设定目标。

#### 开放时间

用户首次提交到分支与打开该分支的拉取请求之间的间隔时间。

缩短这段时间便于贡献者在此过程中更早收到反馈意见，留出更多的时间进行协作和迭代。

#### 拉取请求大小

拉取请求的总差异大小（已添加、删除和更改的总行数）。

大型拉取请求在部署到生产时风险更大，审查、合并和发布的难度也更大。 部署合理规模的拉取请求可让您的团队更快、更有信心地体验和销售新功能。

#### 进行中的工作

给定团队或组织打开的拉取请求数量，表示为总数以及向开发者打开的拉取请求数比率。

大型拉请求积压意味着工作可能已经过时，表明团队的工作浪费了。 此指标有助于保持团队的工作重心，同时确保团队中没有人被阻止或负担过重。

### 报告

| 指标                | 描述                                                              |
| ----------------- | --------------------------------------------------------------- |
| 活动                | 活动是指以下任一活动：<ul><li>提交到分支</li><li>打开拉取请求</li><li>关闭拉取请求</li><li>合并拉取请求</li><li>评论拉取请求</li><li>批准拉取请求</li></ul>                            |
| 活动（小时）            | 活动小时是指至少有一个贡献者记录活动的任意小时。                                        |
| 搅动代码              | 搅动代码是在添加或最近更改后三周内更改的代码。 这包括作者或其他贡献者所覆盖的代码行。                     |
| 添加和更改的代码行         | 新增的代码行总数加上更改的代码行数。 您可以包括或排除搅动代码。                                |
| 所有权               | 最后一个贡献者添加或更改的代码行明细百分比，用以添加或更改每行代码。                              |
| 配对                | 修改或删除其他贡献者代码的贡献者。                                               |
| 代码库更改百分比          | 代码库中添加或更改的代码行占代码库中代码总行数的百分比。                                    |
| 新增和更改的代码与搅动代码的百分比 | 添加和更改的代码行数（不包括搅动代码）占添加和更改的代码行总数（包括搅动代码）的百分比。                    |
| 拉取请求打开            | 在选定时间段或图表上显示的时间间隔结束时打开的拉取请求数。                                   |
| 留存率               | 每周后代码库中存在的代码行数百分比，按代码行创建的星期分组。                                  |
| 合并时间              | 在某个分支上第一次提交与该分支上拉取请求合并操作之间的间隔时间。 从拉取请求合并操作的时间戳中减去对分支上第一次提交的时间戳。 |
