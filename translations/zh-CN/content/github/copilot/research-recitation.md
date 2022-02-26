---
title: 研究书目
intro: '先看看 {% data variables.product.prodname_dotcom %} Copilot 建议中的机械式学习。'
redirect_from:
  - /early-access/github/copilot/research-recitation
versions:
  fpt: '*'
---

作者：Albert Ziegler (@wunderalbert)

## {% data variables.product.prodname_dotcom %} Copilot：鹦鹉还是乌鸦？
先看看 {% data variables.product.prodname_dotcom %} Copilot 建议中的机械式学习。

## 简介

{% data variables.product.prodname_dotcom %} Copilot 接受了数十亿条公共代码的培训。 它向您提出的建议根据您的代码进行了调整，但其背后的处理最终是由他人编写的代码来告知。

建议的代码与通知它的代码之间的关系有多直接？ 在最近一篇发人深省的论文<sup id="anchor1">[1](#footnote1)</sup>中，Bender、Gebru 等人为人工智能系统创造了“随机鹦鹉”一词，比如那些为 {% data variables.product.prodname_dotcom %} Copilot 提供动力的系统。 或者，正如机器学习工程师 {% data variables.product.company_short %}<sup id="anchor2">[2](#footnote2)</sup> 在一次水冷却器聊天中说：这些系统感觉像是“一个有摄影记忆的蹒跚学步的孩子”。

这些都是故意过于简单化。 许多 {% data variables.product.prodname_dotcom %} Copilot 建议感觉非常具体地适应用户正在工作的特定代码基础。 通常，它看起来不像鹦鹉，更像是乌鸦在用小块<sup id="anchor3">[3](#footnote3)</sup>建造新的工具。 但不可否认，{% data variables.product.prodname_dotcom %} Copilot 有令人印象深刻的记忆：

![Copilot 的影片演示](/assets/images/help/copilot/resources_recitation_example_zen.gif)

在这里，我故意指示<sup id="anchor4">[4](#footnote4)</sup> {% data variables.product.prodname_dotcom %} Copilot 重写众所周知的文字，这显然是心知肚明的。 我心里也知道两份案文。 例如，我仍然记得我在学校学习的诗歌。 然而，不管这个题目如何，我从来都没有被诱惑掉进抑扬格四音步诗和关于水仙花的唱片。

那么 {% data variables.product.prodname_dotcom %} Copilot 很容易操作（更确切地说，其等效编码）吗？ 其建议有多少是独特的，多常只是在培训期间看到一些很可能的外观代码？

## 实验

在 {% data variables.product.prodname_dotcom %} Copilot 的早期开发期间，作为内部试用的一部分，有近 300 名员工将其用于日常工作。 这次试验提供了一个很好的数据集来测试背诵。 我想知道 {% data variables.product.prodname_dotcom %} Copilot 多久向他们提出一项引自以前所见的建议。

2021 年 5 月 7 日（我们开始提取该数据的那一天），我将调查限于 Python 的建议。 这留下了 453,780 条建议，分布在 396 个“用户周”中，即用户在 Python 代码上积极使用 {% data variables.product.prodname_dotcom %} Copilot 的日历周期间。

### 自动过滤

453,780 项建议很多，但其中许多建议可以立即撤销。 要了解有趣的案例，请考虑建议中发生的“单词”序列，这些“单词”的顺序与 Copilot {% data variables.product.prodname_dotcom %} 已接受过培训的代码中顺序相同。 在这种情况下，标点、括号或其他特殊字符都算作“单词”，而标签、空格甚至换行符完全被忽略。 毕竟，引文仍然是引文，无论是缩进 1 个制表符还是 8 个空格。

例如， {% data variables.product.prodname_dotcom %} Copilot 的建议之一是用空格分隔的数字的以下正则表达式：

```
r'^\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+'
```

从上述意义上说，这正好是 100 个“单词”，但这是一个特别密集的例子：平均非空代码行只有 10 个“单词”。 我已将此调查限于与代码 {% data variables.product.prodname_dotcom %} 重叠的案例中至少包含 60 个这样的“单词”。 我们必须在某个地方设置裁剪，我认为较短的序列很少引起极大兴趣。 事实上，后来确定的大多数令人感兴趣的案例都清楚地表明了 60 个单词这一门槛。

如果重叠延伸到用户已经写过的内容，这也是很长的。 毕竟，用户也在 {% data variables.product.prodname_dotcom %} Copilot 的帮助下编写了上下文！

在下列示例中，用户已开始编写非常常见的代码片段。 {% data variables.product.prodname_dotcom %} Copilot 将会完成它。 即使完成工作本身相当短，再加上现有的代码，它清除了阈值值并予以保留。

![示例代码](/assets/images/help/copilot/example_last_straw.png)

这个程序很宽松，足以让许多相对“无聊”的例子通过，如上述两个。 但它仍可将人类分析引入有趣的案例，清理出 99% 以上的 Copilot 建议。

### 手动存储

过滤后还剩下 473 条建议。 但它们的表现形式非常不同：

1. 有些基本上只是重复另一个通过了过滤的案例。 例如，有时 {% data variables.product.prodname_dotcom %} Copilot 提出建议，开发人员键入一个评论行，然后 {% data variables.product.prodname_dotcom %} Copilot 再次提供一个非常相似的建议。 我从分析中删除了这些作为重复项的案例。
2. 有些是长而重复的序列。 像下面的示例一样，在培训集的某个地方当然可以找到重复的 `‘<p>’` 块 ：<br>![Example repetitions](/assets/images/help/copilot/example_repetitions.png)<br> 这样的建议可能会有所帮助（测试案例、正则表达式）或没有帮助（像本案例，我怀疑）。 但无论如何，它们并不符合我开始调查时所想到的死记硬背学习的想法。
3. 有些是标准库存，如自然数字、质数、股市股票代码或希腊字母： <br>![希腊字母示例](/assets/images/help/copilot/example_greek.png)
4. 有些是常见的、直接的方式，甚至是普遍的方式，以很少的自然自由度做事。 例如， 下面的中间部分触发了我使用 BeautifulSoup 包解析维基百科列表的标准方法。 事实上， 在 {% data variables.product.prodname_dotcom %} Copilot 的培训数据<sup id="anchor5">[5](#footnote5)</sup> 中找到的最佳匹配片段使用这种代码解析不同的文章，并继续根据结果做不同的事情。 <br>![Example of Beautiful Soup](/assets/images/help/copilot/example_beautiful_soup.png) <br>这也不符合我对引文的想法。 这有点像有人说“我要把垃圾拿出来；我很快就会回来的”— 这是事实陈述，不是引文，尽管这句话以前已经说过很多次了。
5. 然后还有所有其他情况。 代码或评论中至少有一些特定重叠。 这些是我最感兴趣的，也是我从现在开始要集中精力的。

此存储桶必须有一些边缘案例<sup id="anchor6">[6](#footnote6)</sup>，并且您的里程可能因您认为应分类的方式而有所不同。 也许你甚至一开始就不同意整套存储桶。

这就是为什么我们开放源数据集<sup id="anchor7">[7](#footnote7)</sup>的原因。 所以，如果您储存桶的看法有点不同，或者您对 GitHub Copilot 模仿其训练集的其他方面感兴趣，非常欢迎您忽略我的下一节，并得出自己的结论。

## 结果

![概览图](/assets/images/help/copilot/plot_buckets.png)

对于 {% data variables.product.prodname_dotcom %} Copilot 的大多数建议，我们的自动过滤器没有发现与培训使用的代码有任何明显的重叠。 但它确实提请了我们注意 473 个案例。 删除第一个存储桶（看起来与其他案例非常相似的案例）给我留下了 185 条建议。 其中 144 个被整理在存储桶 2-4。 这在最后一个存储桶中留下了 41 个案例，“背诵”- 我脑子里想着这个词的含义。

这相当于**每 10 个用户周 1 次背诵**（95% 置信间隔：7 - 13 周，使用 Poisson 测试）。

当然，这是由 {% data variables.product.prodname_dotcom %} 和尝试过 {% data variables.product.prodname_dotcom %} Copilot 的 Microsoft 开发者测算的。 如果您的编码行为与他们的编码行为大相径庭，则您的结果可能会有所不同。 特别是，其中一些开发人员只是在 Python 项目上兼职 - 我无法区分这一点，因此将指定周编写一些 Python 的每个人计为一个用户。

10 周内的 1 个事件听起来不多，但也不是 0 个。 我发现有三件事让我印象深刻。

### {% data variables.product.prodname_dotcom %} Copilot 在缺少特定上下文时引用

如果我想学习一首歌的歌词，我必须听很多次。 {% data variables.product.prodname_dotcom %} Copilot 没有什么不同：要从心里学习代码片段，必须多看这个代码片段。 每个文件只显示给 {% data variables.product.prodname_dotcom %} Copilot 一次，因此片段需要存在于公共代码中的许多不同文件中。

在手动标记期间我们挑出的 41 个主要案例中，没有一个出现在少于 10 个不同的文件中。 大多数（35个案例）出现超过一百次。 有一次， {% data variables.product.prodname_dotcom %} Copilot 建议启动一个空文件，它甚至看到超过 70 万次不同的培训时间 - 这是GNU 一般公共许可证。

下图显示了存储桶 5 中结果的匹配文件数（每个结果底部有一个红色标记）与存储桶 2-4 中的匹配文件数。 我忽略了存储桶 1，这真的只是存储桶 2-4 案例与存储桶 5 案例重复项的组合。 推断的分布以红线显示；它在 100 到 1000 个匹配项之间达到峰值。

![匹配图数](/assets/images/help/copilot/plot_copies.png)

### {% data variables.product.prodname_dotcom %} Copilot 大多在通用环境中引用。

随着时间的推移，每个文件都变得独一无二。 但是 {% data variables.product.prodname_dotcom %} Copilot不会等待那个<sup id="anchor8">[8](#footnote8)</sup>：它会提供它的解决方案，而您的文件仍然非常笼统。 在没有任何具体的事情可做时，它更有可能从不同的地方引用。

![上下文长度图](/assets/images/help/copilot/plot_context.png)

当然，软件开发者大部分时间都用在文件内， 上下文的独特性足以保证 {% data variables.product.prodname_dotcom %} Copilot 会提供独特的建议。 相比之下，一开始的建议相当热门，因为 {% data variables.product.prodname_dotcom %} Copilot 不知道程序会是什么。 但有时，特别是在玩具项目或独立脚本中，少量的上下文可能足以危害用户想要做什么的合理猜测。 有时它仍然足够通用， 所以 {% data variables.product.prodname_dotcom %} Copilot 认为它心里知道的解决方案之一看起来很有希望：

![示例代码](/assets/images/help/copilot/example_robot.png)

这几乎直接取自在不同变化中上传的机器人课件<sup id="anchor9">[9](#footnote9)</sup>。

### 检测与检测工具一样好

按照目前的形式，当广泛应用时，过滤器将会发现大量不感兴趣的案例。 但是，它仍然不应该是太多的噪音。 对于实验中的内部用户来说，平均每周发现一个以上的结果（尽管可能有突发！）。 其中，约 17%（使用二元测试的置信区间为 95%：14%-21%）将在第五存储桶。

当然，没有什么是万无一失的：所以这也可以被欺骗。 有些案例很难通过我们正在构建的工具检测，但仍有明显的来源。 返回 Python 的 Zen：

![Zen 变化](/assets/images/help/copilot/resources_recitation_example_zen_caw.gif)

## 结论和后续步骤

这项调查表明， {% data variables.product.prodname_dotcom %} Copilot _可以_逐字引用代码，但它很少这样做，当它这样做时，它大多引用每个人引用的代码，主要是在文件的开头，仿佛打破僵局。

但是 GitHub Copilot 背诵代码和我背诵一首诗之间还有一个很大的区别： 当我引用时_知道_。 我还想知道，Copilot 是在什么时候响应现有的代码，而不是提出自己的想法。 这样，我就能够查找有关该代码的背景信息，并包括到期的信贷。

答案是显而易见的：分享我们在本分析中使用的预过滤解决方案，以发现与培训集的重叠。 当建议包含从训练集复制的代码片段时，UI 应该简单地告诉你它从哪里引用。 然后，您可以包括适当的归因或决定完全不使用该代码。

此重复搜索尚未集成到技术预览中，但我们计划这样做。 我们将继续致力于降低背诵率，并使其检测更加精确。

<br><br>

### 脚注

<a name="footnote1">1</a>： [关于大鹦鹉的危险：语言模型会不会太大？](https://dl.acm.org/doi/10.1145/3442188.3445922) [^](#anchor1)

<a name="footnote2">2</a>: [Tiferet Gazit](https://github.com/tiferet) [^](#anchor2)

<a name="footnote3">3</a>: 查看 von Bayern 等人关于众人的创造性智慧： [New Caledonian 的复合工具构造](https://www.nature.com/articles/s41598-018-33458-z) [^](#anchor3)

<a name="footnote4">4</a>: 查看 Carlini 等人关于故意触发训练数据的回调： [从大语言模型中提取训练数据](https://arxiv.org/pdf/2012.07805.pdf) [^](#anchor4)

<a name="footnote5">5</a>: jaeteekae: [DelayedTwitter](https://github.com/jaeteekae/DelayedTwitter/blob/0a0b03de74c03cfbf36877ffded0cb1312d59642/get_top_twitter_accounts.py#L21) [^](#anchor5)

<a name="footnote6">6</a>：但可能不_太_多。 我已经要求一些开发人员帮我给这些案例贴上标签，提示每个人在判断时标出任何不确定性。 这种情况只发生在 34 个案例中，即不到 10%。 [^](#anchor6)

<a name="footnote7">7</a>：在 [公共数据集](/assets/images/help/copilot/matched_snippets.csv)中，我列出了也在训练组中找到的 Copilot 建议部分，它被发现的频率，以及它与公共代码中示例的链接。 出于隐私原因，我不包括完成的不匹配部分或用户键入的代码上下文（仅表示其长度）。 [^](#anchor7)

<a name="footnote8">8</a>: 事实上，自本次实验以来，{% data variables.product.prodname_dotcom %} Copilot _已_更改以便要求最小的文件内容。 因此，此处标记的一些建议不会显示在当前版本中。 [^](#anchor8)

<a name="footnote9">9</a>：例如 jenevans33：[CS8803-1](https://github.com/jenevans33/CS8803-1/blob/eca1bbc27ca6f7355dbc806b2f95964b59381605/src/Final/ekfcode.py#L23) [^](#anchor9)
