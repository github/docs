---
title: GitHub Enterprise 服务等级协议
redirect_from:
  - /github-enterprise-cloud-addendum/
  - /github-business-cloud-addendum/
  - /articles/github-enterprise-cloud-addendum
versions:
  free-pro-team: '*'
---

**Short version:** GitHub guarantees a 99.9% quarterly uptime commitment for the applicable GitHub service (the “**Service Level**” or “**SLA**”). 如果 GitHub 不符合 SLA，则客户将有权获得客户帐户的服务积分（“**服务积分**”）。

For definitions of each Service feature (“**Service Feature**”) and to review historical and current Uptime, visit the [GitHub Status Page](https://www.githubstatus.com/). 本 SLA 中使用但未定义的大写术语采用客户适用协议中赋予的含义。

## 正常运行时间保证

“**Uptime**” is the percentage of total possible minutes the applicable GitHub service was available in a given calendar quarter. GitHub commits to maintain at least 99.9% Uptime for the applicable GitHub service. The Uptime calculation for each Service Feature that may be included with the applicable GitHub service is described below (“**Uptime Calculation**”). 如果 GitHub 不符合 SLA，客户将有权根据以下计算（“**服务积分计算**”）获得服务积分。 请注意，停机时间不会同时或以同样的方式影响每个客户。

| **服务功能**                                                                                                                                                 | **正常运行时间计算**                                                                                                                                                    | **定义**                                                                                                                                          | **服务积分计算**                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Issues**,<br>**Pull&nbsp;Requests**,<br>**Git&nbsp;Operations**,<br>**API&nbsp;Requests**,<br>**Webhooks**,<br>**Pages** | （日历季度的总分钟数 - 停机时间）/日历季度的总分钟数                                                                                                                                    | “**停机时间**”是指发生以下任一情况的时间段 (a) 在给定分钟内任何服务功能的错误率超过百分之五 (5%)；或 (b) 经 GitHub 的内部和外部监控系统组合确定，服务不可用。                                                   | 服务积分索赔可能基于以下计算方法中的一种（而非两种）： <ul><li>10% of the amount Customer paid for a Service Feature in a calendar quarter where the Uptime for that Service Feature was less than or equal to 99.9%, but greater than 99.0%. <BR><BR>或 <BR><BR></li><li>如果在一个日历季度内，服务功能的正常运行时间低于 99.0%，则结果为客户为该服务功能所支付金额的 25%。</li></ul> | |
| **操作**                                                                                                                                                   | （总触发执行数 - 不可用执行数）/（总触发执行数）x 100                                                                                                                                 | “**总触发执行数**”是客户在一个日历季度内触发的所有操作的执行总数。 <br><br>“**不可用执行数**”是指在一个日历季度内，总触发执行数中未能运行的执行总数。  在触发器被成功触发五 (5) 分钟后，如果操作历史记录日志未捕获任何输出，则执行失败。  | 同上                                                    |
| **包**                                                                                                                                                    | 传输正常运行时间 = 同“操作” <br> <br> 存储正常运行时间 = 100% - 平均错误率* <br> <br> *正常运行时间计算不包括不计入总存储事务或失败存储事务的公共使用和存储事务（包括预身份验证失败；身份验证失败；存储帐户的尝试事务超过其指定配额）。 | “**错误率**”是在设定的时间间隔（当前设置为一小时）内，失败的存储事务总数除以总存储事务数。 如果在给定的一小时间隔内总存储事务数为零，则该间隔的错误率为 0％。 <br><br>“**平均错误率**”是日历季度内每个小时的错误率之和除以日历季度的总小时数。 | 同上                                                    |

## 排除
Excluded from the Uptime Calculation are Service Feature failures resulting from (i) Customer’s acts, omissions, or misuse of the applicable GitHub service including violations of the Agreement; (ii) failure of Customer’s internet connectivity; (iii) factors outside GitHub's reasonable control, including force majeure events; or (iv) Customer’s equipment, services, or other technology.

## 服务积分兑换
如果 GitHub 不符合此 SLA，则客户必须在该日历季度结束后的三十 (30) 天内向 GitHub 提出书面申请才能兑换服务积分。 Written requests for Service Credits redemption and GitHub Enterprise Cloud custom monthly or quarterly reports should be sent to [GitHub Support](https://support.github.com/contact).

服务积分可以采取退款或贷记给客户帐户的形式，不能兑换为现金，每个日历季度的上限为九十 (90) 天的付费服务，要求客户已支付任何未结发票， 并在客户与 GitHub 的协议终止后过期。 服务积分是针对 GitHub 未能履行此 SLA 中任何义务的唯一和排他性补救措施。 
