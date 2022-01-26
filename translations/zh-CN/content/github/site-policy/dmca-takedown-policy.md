---
title: DMCA 删除政策
redirect_from:
  - /dmca
  - /dmca-takedown
  - /dmca-takedown-policy
  - /articles/dmca-takedown
  - /articles/dmca-takedown-policy
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

欢迎阅读 GitHub 的《千禧年数字版权法案》（通常称为 "DMCA"）指南。 本页面并非该法案的综合入门读物。 但是，如果您收到针对您在 GitHub 上所发布内容的 DMCA 删除通知，或者您是要发出此类通知的权利持有者，此页面将有助于您了解该法案以及我们遵守该法案的政策。

（如果只想提交通知，您可以跳到“[G. 提交通告](#g-submitting-notices)。”）

与所有法律事务一样，就您的具体问题或情况咨询专业人员始终是最好的方式。 我们强烈建议您在采取任何可能影响您权利的行动之前这样做。 本指南不是法律意见，也不应作为法律意见。

## 什么是 DMCA？

要了解 DMCA 及其制定的一些政策方针，考虑一下它颁布之前的现实情况，或许有助于理解。

DMCA 为托管用户生成内容的服务提供商提供了安全港。 仅仅一项侵犯版权的索赔就可能导致高达 150,000 美元的法定赔偿，因此，对用户生成的内容承担责任可能对服务提供商非常不利。 如果面向数以百万计的用户，这种潜在损失将不可估量，可以说，假如没有 DMCA，则 YouTube、Facebook 或 GitHub 等云计算和用户生成内容的网站可能就[不会存在](https://arstechnica.com/tech-policy/2015/04/how-the-dmca-made-youtube/)（或者至少会将部分成本转嫁给用户）。

DMCA 通过为托管涉嫌侵权用户生成内容的互联网服务提供商建立[版权责任安全港](https://www.copyright.gov/title17/92chap5.html#512)，解决了这一问题。 从本质上讲，只要服务提供商遵守 DMCA 的通知和删除规则，就不会对基于用户生成内容的侵权行为承担责任。 因此，对 GitHub 而言，保持其 DMCA 安全港状态非常重要。

DMCA 还禁止[规避技术措施](https://www.copyright.gov/title17/92chap12.html)，以有效控制访问受版权保护的作品。

## DMCA 通知概述

DMCA 规定了两个简单直接的程序，所有 GitHub 用户都应了解：(i) 版权持有者要求删除内容的[删除通知](/articles/guide-to-submitting-a-dmca-takedown-notice)程序；(ii) 内容被误删时用户要求恢复内容的[反通知](/articles/guide-to-submitting-a-dmca-counter-notice)程序。

DMCA [删除通知](/articles/guide-to-submitting-a-dmca-takedown-notice)供版权所有者用于要求 GitHub 删除他们认为侵权的内容。 如果您是软件设计师或开发者，可能每天都会创建版权内容。 如果其他人以未经授权的方式在 GitHub 上使用您的版权内容，您可以向我们发送 DMCA 删除通知，要求更改或删除侵权内容。

另一方面，[反通知](/articles/guide-to-submitting-a-dmca-counter-notice)可用于纠正错误。 发送删除通知的人可能没有版权，或者没有意识到您拥有许可，或者在删除通知中犯了其他错误。 由于 GitHub 往往不知道通知是否有误，因此您可以通过 DMCA 反通知告诉我们并要求我们恢复内容。

DMCA 通知和删除流程仅适用于有关侵犯版权的投诉。 通过我们 DMCA 流程发送的通知必须指明涉嫌侵权的版权作品。 此流程不能用于其他投诉，如有关涉嫌[商标侵权](/articles/github-trademark-policy/)或[敏感数据](/articles/github-sensitive-data-removal-policy/)的投诉；我们为这些情况另外提供了不同的流程。

## A. 此流程实际上是如何运作的？

DMCA 框架有点像课堂上传纸条。 版权所有者向 GitHub 提交对某个用户的投诉。 如果书写正确，我们会将该投诉转达给用户。 如果用户对投诉有异议，他们可以回传“纸条”表达异议。 除了确定通知是否符合 DMCA 的最低要求外，GitHub 在此过程中几乎不行使酌处权。 当事方（及其律师）应负责评估其投诉的合理性，并注意，此类通知受伪证处罚条款约束。

以下是此流程的基本步骤。

1. **版权所有者调查。**版权所有者务必进行初步调查，以确认 (a) 他们拥有原始作品的版权，以及 (b) GitHub 上的内容未经授权且侵权。 这包括确认该使用不符合[合理使用](https://www.lumendatabase.org/topics/22)的条件。 如果特定使用符合以下条件，可能属于合理使用：只使用少量版权内容、以变换方式使用内容、用于教育目的或以上条件的某些组合。 由于代码本身适合于这些用途，但每个用例都有所不同，因此必须单独考虑。
> **示例：**Acme Web Company 的一名员工在某个 GitHub 仓库中发现其公司的一些代码。 Acme Web Company 已将其源代码许可给几个受信任的合作伙伴。 在发出删除通知之前，Acme 应认真查看这些许可及其协议，以确认 GitHub 上的代码未在这些授权之列。

2. **版权所有者发送通知。**进行调查后，版权所有者编写[删除通知](/articles/guide-to-submitting-a-dmca-takedown-notice)并将其发送到 GitHub。 如果根据法律要求，该删除通知足够详细（如[操作指南](/articles/guide-to-submitting-a-dmca-takedown-notice)中所述），我们会[将该通知发布](#d-transparency)到我们的[公共仓库](https://github.com/github/dmca)中，并将链接传送给受影响的用户。

3. **GitHub 要求用户进行更改。**如果通知指出仓库或包的整个内容都侵权，我们将跳到步骤 6 并迅速禁用整个仓库或包。 否则，由于 GitHub 无法禁止访问仓库中的特定文件，我们将联系创建该仓库的用户，给他们 1 个工作日左右的时间来删除或修改通知中指定的内容。 如果我们给用户进行更改的机会，我们会通知版权所有者。 由于包是不可变的，如果只有包的一部分侵权，GitHub 将需要禁用整个包，但我们允许在删除侵权部分后恢复。

4. **用户向 GitHub 通知更改。**如果用户选择进行指定的更改，则*必须*在大约 1 个工作日内告知我们。 如果没有，我们将禁用仓库（如步骤 6 所述）。 如果用户通知我们已进行更改，我们将进行核实然后通知版权所有者。

5. **版权所有者修改或撤回通知。**用户进行更改后，版权所有者必须进行审查，如果认为更改不充分，他们可以重申或修改其删除通知。 除非版权所有者联系我们以重申原删除通知或提交修改的通知，否则 GitHub 不会采取任何进一步行动。 如果版权所有者对更改感到满意，他们可以提交正式的撤回声明，或者什么都不做。 静默期超过两周，GitHub 将解释为默示撤回删除通知。

6. **GitHub 可能禁止访问内容。**在以下情况下，GitHub 将禁用用户内容：(i) 版权所有者声称对用户整个仓库或包的内容都拥有版权（如步骤 3 所述）；(ii) 用户在获得更改机会后没有进行任何更改（如步骤 4 所述）；或 (iii) 版权所有者在用户有机会进行更改后重申了删除通知。 如果版权所有者选择*修改*通知，我们将回到步骤 2，将修改的通知当作新通知来重复这个流程。

7. **用户可发送反通知。**我们鼓励用户在其内容被禁用后就其选择权咨询律师。 如果用户认为其内容是由于错误或错误指认而被禁用，他们可以向我们发送[反通知](/articles/guide-to-submitting-a-dmca-counter-notice)。 与原通知一样，我们将确保反通知足够详细（如[操作指南](/articles/guide-to-submitting-a-dmca-counter-notice)中所述）。 如果是，我们会将其[发布](#d-transparency)到我们的[公共仓库](https://github.com/github/dmca)，然后向版权所有者发送链接以传达该通知。

8. **版权所有者可提出法律诉讼。**如果版权所有者在收到反通知后，希望继续禁用内容，则他们需要发起法律诉讼，寻求通过法院命令制止用户从事与 GitHub 上的内容相关的侵权活动。 也就是说，用户可能会被起诉。 如果版权所有者在 10-14 天内没有向 GitHub 发出通知（发送向主管法院提交的有效法律投诉的副本），GitHub 将重新启用被禁用的内容。

## B. 复刻呢？ （或如何处理复刻？）

GitHub 的最佳功能之一是用户能够“复刻”彼此的仓库。 这意味着什么？ 从本质上讲，这意味着用户可以将 GitHub 上的项目复制到自己的仓库中。 在许可或法律允许的情况下，用户可以对复刻进行更改，然后将其推送到主项目或只保留为自己的项目变体。 每个此类副本都是原仓库的[复刻](/articles/github-glossary#fork)，或者说原仓库也可以称为复刻的“父仓库”。

GitHub 在禁用父仓库时*不会*自动禁用复刻。 这是因为复刻属于不同的用户，可能进行了重大更改，也可能获得了许可或者其使用方式符合合理使用原则。 GitHub 不会对复刻进行任何独立调查。 我们希望版权所有者进行这种调查，如果他们认为复刻也侵权，则应在其删除通知中明确包括这些复刻。

在极少数情况下，您可能在正被复刻的完整仓库中指称侵权。 如果您在提交通知时发现该仓库的所有现有复刻涉嫌侵权，我们将在处理通知时处理对该网络中所有复刻的有效索赔。 我们这样做是考虑到所有新建复刻都可能包含相同的内容。 此外，如果所报告的包含涉嫌侵权内容的网络大于一百 (100) 个仓库，从而很难全面审查，并且您在通知中指出：“根据您审查的代表性复刻数量，我相信所有或大多数复刻的侵权程度与父仓库相同”，则我们可能会考虑禁用整个网络。 你的宣誓声明将适用于此声明。

## C. 规避索赔呢？

DMCA 禁止[规避技术措施](https://www.copyright.gov/title17/92chap12.html)，以有效控制访问受版权保护的作品。 鉴于这些类型的索赔往往技术性很强，GitHub 要求索赔人提供[关于这些索赔的详细信息](/github/site-policy/guide-to-submitting-a-dmca-takedown-notice#complaints-about-anti-circumvention-technology)，我们进行了更广泛的审查。

规避索赔必须包括以下关于技术措施以及被告项目规避这些措施的方式的详细信息。 具体而言，给 GitHub 的通知必须包括详细的说明，描述：
1. 技术措施是什么；
2. 它们如何有效控制对受版权保护材料的访问；以及
3. 被告项目是如何设计来规避他们以前描述的技术保护措施的。

GitHub 将仔细审查规避索赔，包括技术和法律专家提出的索赔要求。 在技术审查中，我们将设法核实有关技术保护措施的运作方式以及据称项目绕过这些措施的方式的细节。 在法律审查中，我们将设法确保索赔不超出 DMCA 的界限。 如果无法确定索赔是否有效，我们将在开发人员端进行错误检查，并且保留内容。 如果索赔人希望跟进更多细节，我们将重新开始审查进程，以评估经修订的索赔。

如果我们的专家确定索赔是完整、合法和技术上合法的，我们将联系仓库所有者，让他们有机会对索赔作出回应或更改仓库以避免撤除。 如果他们不回应，我们将尝试再次联系仓库所有者，然后再采取任何进一步的步骤。 换句话说，我们不会在未尝试联系存储库所有者以给他们先回应或更改机会的情况下，根据规避技术的主张直接禁用仓库。 如果我们无法通过先联系仓库所有者来解决问题，即使内容已禁用，如果他们希望有机会对索赔提出异议、向我们提交其他事实或进行更改以恢复内容，我们也始终乐于考虑仓库所有者的回应。 当我们需要禁用内容时，我们将在法律允许的范围内确保仓库所有者能够导出其议题，并提取不包含所谓的规避代码的其他仓库数据。

请注意，我们对规避技术的审查流程不适用于违反我们可接受使用政策限制的内容，禁止共享未经授权的产品许可密钥、生成未经授权的产品许可密钥的软件或绕过产品许可密钥检查的软件。 虽然这些类型的索赔也可能违反 DMCA 关于规避技术的规定，但这些索赔通常很简单，不需要额外的技术和法律审查。 然而，如果索赔并不简单，例如在越狱的情况下，规避技术索赔审查程序将适用。

当 GitHub 根据我们的规避技术索赔审查流程处理 DMCA 拆解时，我们将转介仓库所有者通过 [GitHub 的开发人员防御基金](https://github.blog/2021-07-27-github-developer-rights-fellowship-stanford-law-school/)免费获得独立法律咨询。

## D. 如果我无意中错过了更改时限怎么办？

我们知道，有许多现实原因导致您无法在我们禁用您的仓库之前提供的大约 1 个工作日时限内进行更改。 可能我们的邮件被标记为垃圾邮件，可能您正在度假，可能您不经常查看电子邮件帐户，或者您只是很忙。 我们理解。 如果您回复我们表示您愿意更改，但因为某些原因错过了第一次机会，我们会重新启用仓库，再次提供大约 1 个工作日的时间让您进行更改。 同样，要在大约 1 个工作日的时限之后让仓库保持启用状态，您必须在完成更改后通知我们，如上文的[步骤 A.4](#a-how-does-this-actually-work) 所述。 请注意，我们只提供这一次额外机会。

## E. 透明

我们认为，透明是一种美德。 公众应该知道 GitHub 会删除哪些内容以及原因。 知情的公众可以注意到并发现那些在不透明系统中无法注意到的潜在问题。 我们会在 <https://github.com/github/dmca> 上发布我们收到的任何法律通知（包括原通知、反通知或撤回声明）的删节版。 我们不会公布您的个人联系信息；我们会在发布通知之前删除个人信息（URL 中用户名除外）。 但是我们不会删节通知中的任何其他信息，除非您明确要求我们删除。 以下是一些已发布的[通知](https://github.com/github/dmca/blob/master/2014/2014-05-28-Delicious-Brains.md)和[反通知](https://github.com/github/dmca/blob/master/2014/2014-05-01-Pushwoosh-SDK-counternotice.md)的示例，供您参考。 我们删除内容时，会在其位置发布指向相关通知的链接。

另请注意，尽管我们不会公开发布未删节的通知，但我们可能会向权利受影响的任何相关方直接提供相关通知的完整未删节版。

## F. 屡次侵权

GitHub 的政策是，在适当的情况下，自行决定禁用和终止可能侵犯 GitHub 或其他方的版权或其他知识产权的用户帐户。

## G. 提交通知

如果您准备提交通知或反通知：
- [如何提交 DMCA 通知](/articles/guide-to-submitting-a-dmca-takedown-notice)
- [如何提交 DMCA 反通知](/articles/guide-to-submitting-a-dmca-counter-notice)

## 深入了解并发表意见

在互联网上随便逛一逛，就不难发现有关版权系统，特别是有关 DMCA 的评论和批评。 虽然 GitHub 承认并赞赏 DMCA 在促进在线创新方面发挥的重要作用，但我们认为，版权法或许需要打一两个补丁——如果不推出全新版本的话。 在软件方面，我们不断改进和更新我们的代码。 想想自 1998 年 DMCA 面世以来，技术的变化可谓翻天覆地。 更新这些适用于软件的法律难道不是理所当然的吗？

我们并不认为存在解答一切的魔方。 但如果您感兴趣，这里有一些学术文章和博客的链接，我们发现其中有不少关于改革的意见和建议：

- [Unintended Consequences: Twelve Years Under the DMCA](https://www.eff.org/wp/unintended-consequences-under-dmca) (Electronic Frontier Foundation)
- [Statutory Damages in Copyright Law: A Remedy in Need of Reform](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1375604) (William & Mary Law Review)
- [Is the Term of Protection of Copyright Too Long?](https://the1709blog.blogspot.com/2012/11/is-term-of-protection-of-copyright-too.html) (The 1709 Blog)
- [If We're Going to Change DMCA's 'Notice & Takedown,' Let's Focus on How Widely It's Abused](https://www.techdirt.com/articles/20140314/11350426579/if-were-going-to-change-dmcas-notice-takedown-lets-focus-how-widely-its-abused.shtml) (TechDirt)
- [Opportunities for Copyright Reform](https://www.cato-unbound.org/issues/january-2013/opportunities-copyright-reform) (Cato Unbound)
- [Fair Use Doctrine and the Digital Millennium Copyright Act: Does Fair Use Exist on the Internet Under the DMCA?](https://digitalcommons.law.scu.edu/lawreview/vol42/iss1/6/) (Santa Clara Law Review)

GitHub 不一定支持这些文章中的任何观点。 我们提供链接的目的是鼓励您了解更多信息，形成自己的观点，然后联系您选举的代表（例如[美国 国会](https://www.govtrack.us/congress/members)或[欧盟 议会](https://www.europarl.europa.eu/meps/en/home)的官员），以求实现您认为应该进行的任何更改。
