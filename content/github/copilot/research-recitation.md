---
title: Research recitation
intro: 'A first look at rote learning in {% data variables.product.prodname_dotcom %} Copilot suggestions.'
redirect_from:
  - /early-access/github/copilot/research-recitation
versions:
  fpt: '*'
---

By: Albert Ziegler (@wunderalbert)

## {% data variables.product.prodname_dotcom %} Copilot: Parrot or Crow?
A first look at rote learning in {% data variables.product.prodname_dotcom %} Copilot suggestions.

## Introduction

{% data variables.product.prodname_dotcom %} Copilot is trained on billions of lines of public code. The suggestions it makes to you are adapted to your code, but the processing behind it is ultimately informed by code written by others.

How direct is the relationship between the suggested code and the code that informed it? In a recent thought-provoking paper<sup id="anchor1">[1](#footnote1)</sup>, Bender, Gebru et al. coined the phrase “stochastic parrots” for artificial intelligence systems like the ones that power {% data variables.product.prodname_dotcom %} Copilot. Or as a fellow machine learning engineer at {% data variables.product.company_short %}<sup id="anchor2">[2](#footnote2)</sup> remarked during a water cooler chat: these systems can feel like ”a toddler with a photographic memory.”

These are deliberate oversimplifications. Many {% data variables.product.prodname_dotcom %} Copilot suggestions feel pretty specifically tailored to the particular code base the user is working on. Often, it looks less like a parrot and more like a crow building novel tools out of small blocks<sup id="anchor3">[3](#footnote3)</sup>. But there’s no denying that {% data variables.product.prodname_dotcom %} Copilot has an impressive memory:

![A movie demonstration of Copilot](/assets/images/help/copilot/resources_recitation_example_zen.gif)

Here, I intentionally directed<sup id="anchor4">[4](#footnote4)</sup> {% data variables.product.prodname_dotcom %} Copilot to recite a well known text it obviously knows by heart. I, too, know a couple of texts by heart. For example, I still remember some poems I learnt in school. Yet no matter the topic, not once have I been tempted to derail a conversation by falling into iambic tetrameter and waxing about daffodils.

So is that (or rather the coding equivalent of it) something {% data variables.product.prodname_dotcom %} Copilot is prone to doing? How many of its suggestions are unique, and how often does it just parrot some likely looking code it has seen during training?

## The Experiment

During {% data variables.product.prodname_dotcom %} Copilot’s early development, nearly 300 employees used it in their daily work as part of an internal trial. This trial provided a good dataset to test for recitation. I wanted to find out how often {% data variables.product.prodname_dotcom %} Copilot gave them a suggestion that was quoted from something it had seen before.

I limited the investigation to Python suggestions with a cutoff on May 7, 2021 (the day we started extracting that data). That left 453,780 suggestions spread out over 396 “user weeks”, i.e. calendar weeks during which a user actively used {% data variables.product.prodname_dotcom %} Copilot on Python code.

### Automatic Filtering

453,780 suggestions are a lot, but many of them can be dismissed immediately. To get to the interesting cases, consider sequences of “words” that occur in the suggestion in the same order as in the code {% data variables.product.prodname_dotcom %} Copilot has been trained on. In this context, punctuation, brackets, or other special characters all count as “words”, while tabs, spaces or even line breaks are ignored completely. After all, a quote is still a quote, whether it’s indented by 1 tab or 8 spaces.

For example, one of {% data variables.product.prodname_dotcom %} Copilot’s suggestions was the following regex for numbers separated by whitespace:

```
r'^\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+'
```

This would be exactly 100 “words” in the sense above, but it’s a particularly dense example: the average non-empty line of code has only 10 “words.” I’ve restricted this investigation to cases where the overlap with the code {% data variables.product.prodname_dotcom %} Copilot was trained on contains at least 60 such “words”. We have to set the cut somewhere, and I think it’s rather rare that shorter sequences would be of great interest. In fact, most of the interesting cases identified later are well clear of that threshold of 60.

If the overlap extends to what the user has already written, that also counts for the length. After all, the user may have written that context with the help of {% data variables.product.prodname_dotcom %} Copilot as well!

In the following example, the user has started writing a very common snippet. {% data variables.product.prodname_dotcom %} Copilot completes it. Even though the completion itself is rather short, together with the already existing code it clears the threshold and is retained. 

![Example code](/assets/images/help/copilot/example_last_straw.png)

This procedure is permissive enough to let many relatively “boring” examples through, like the two above. But it’s still effective at dialing in the human analysis to the interesting cases, sorting out over 99% of Copilot suggestions.

### Manual Bucketing

After filtering, there were 473 suggestions left. But they came in very different forms:

1. Some were basically just repeats of another case that passed filtering. For example, sometimes {% data variables.product.prodname_dotcom %} Copilot makes a suggestion, the developer types a comment line, and {% data variables.product.prodname_dotcom %} Copilot offers a very similar suggestion again. I removed these cases from the analysis as duplicates.
2. Some were long, repetitive sequences. Like the following example, where the repeated blocks of `‘<p>’` are of course found somewhere in the training set: <br>![Example repetitions](/assets/images/help/copilot/example_repetitions.png)<br> Such suggestions can be helpful (test cases, regexes) or not helpful (like this case, I suspect). But in any case, they do not fit the idea of rote learning I had in mind when I started this investigation.
3. Some were standard inventories, like the natural numbers, or the prime numbers, or stock market tickers, or the Greek alphabet: <br>![Example of Greek alphabet](/assets/images/help/copilot/example_greek.png)
4. Some were common, straightforward ways, perhaps even universal ways, of doing things with very few natural degrees of freedom. For example, the middle part of the following strikes me as very much the standard way of using the BeautifulSoup package to parse a wikipedia list. In fact, the best matching snippet found in {% data variables.product.prodname_dotcom %} Copilot's training data<sup id="anchor5">[5](#footnote5)</sup> uses such code to parse a different article and goes on to do different things with the results. <br>![Example of Beautiful Soup](/assets/images/help/copilot/example_beautiful_soup.png) <br>This doesn’t fit my idea of a quote either. It’s a bit like when someone says “I’m taking out the trash; I’ll be back soon” -- that’s a matter of fact statement, not a quote, even though that particular phrase has been uttered many times before.
5. And then there are all other cases. Those with at least some specific overlap in either code or comments. These are what interests me most, and what I’m going to concentrate on from now on.

This bucketing necessarily has some edge cases<sup id="anchor6">[6](#footnote6)</sup>, and your mileage may vary in how you think they should be classified. Maybe you even disagree with the whole set of buckets in the first place.

That’s why we’ve open sourced that dataset<sup id="anchor7">[7](#footnote7)</sup>. So if you feel a bit differently about the bucketing, or if you’re interested in other aspects of GitHub Copilot parroting its training set, you’re very welcome to just ignore my next section and draw your own conclusions.

## Results

![Overview Plot](/assets/images/help/copilot/plot_buckets.png)

For most of {% data variables.product.prodname_dotcom %} Copilot's suggestions, our automatic filter didn’t find any significant overlap with the code used for training. But it did bring 473 cases to our attention. Removing the first bucket (cases that look very similar to other cases) left me with 185 suggestions. Of these, 144 got sorted out in buckets 2 - 4. This left 41 cases in the last bucket, the “recitations”, in the meaning of the term I have in mind.

That corresponds to **1 recitation event every 10 user weeks** (95% confidence interval: 7 - 13 weeks, using a Poisson test).

Of course, this was measured on the {% data variables.product.prodname_dotcom %} and Microsoft developers who tried out {% data variables.product.prodname_dotcom %} Copilot. If your coding behaviour is very different from theirs, your results might differ. In particular, some of these developers are only working part time on Python projects —— I could not distinguish that and so counted everyone who writes some Python in a given week as a user.

1 event in 10 weeks doesn’t sound like a lot, but it’s not 0 either. And I found three things that struck me.

### {% data variables.product.prodname_dotcom %} Copilot quotes when it lacks specific context

If I want to learn the lyrics to a song, I have to listen to it many times. {% data variables.product.prodname_dotcom %} Copilot is no different: to learn a snippet of code by heart, it must see that snippet a lot. Each file is only shown to {% data variables.product.prodname_dotcom %} Copilot once, so the snippet needs to exist in many different files in public code.

Of the 41 main cases we singled out during manual labelling, none appear in less than 10 different files. Most (35 cases) appear over a hundred times. Once, {% data variables.product.prodname_dotcom %} Copilot suggested starting an empty file with something it had even seen more than a whopping 700,000 different times during training -- that was the GNU General Public License.

The following plot shows the number of matched files of the results in bucket 5 (one red mark on the bottom for each result) versus buckets 2-4. I left out bucket 1, which is really just a mix of duplicates of bucket 2-4 cases and duplicates of bucket 5 cases. The inferred distribution is displayed as a red line; it peaks between 100 and 1000 matches.

![Number of Matches Plot](/assets/images/help/copilot/plot_copies.png)

### {% data variables.product.prodname_dotcom %} Copilot mostly quotes in generic contexts

As time goes on, each file becomes unique. But {% data variables.product.prodname_dotcom %} Copilot doesn’t wait for that<sup id="anchor8">[8](#footnote8)</sup>: it will offer its solutions while your file is still extremely generic. And in the absence of anything specific to go on, it’s much more likely to quote from somewhere else than it would be otherwise.

![Context Length Plot](/assets/images/help/copilot/plot_context.png)

Of course, software developers spend most of their time deep inside the files, where the context is unique enough that {% data variables.product.prodname_dotcom %} Copilot will offer unique suggestions. In contrast, the suggestions at the beginning are rather hit-and-miss, since {% data variables.product.prodname_dotcom %} Copilot cannot know what the program will be. But sometimes, especially in toy projects or standalone scripts, a modest amount of context can be enough to hazard a reasonable guess of what the user wanted to do. And sometimes it's still generic enough so that {% data variables.product.prodname_dotcom %} Copilot thinks one of the solutions it knows by heart looks promising:

![Example code](/assets/images/help/copilot/example_robot.png)

This is pretty much directly taken from coursework for a robotics class uploaded in different variations<sup id="anchor9">[9](#footnote9)</sup>.

### Detection is only as good as the tool that does the detecting

In its current form, the filter will turn up a good number of uninteresting cases when applied broadly. But it still should not be too much noise. For the internal users in the experiment, it would have been a bit more than one find per week on average (albeit likely in bursts!). Of these, about 17% (95% confidence interval using a binomial test: 14%-21%) would be in the fifth bucket.

And nothing is ever foolproof of course: so this too can be tricked. Some cases are rather hard to detect by the tool we’re building, but still have an obvious source. To return to the Zen of Python:

![Zen Variation](/assets/images/help/copilot/resources_recitation_example_zen_caw.gif)

## Conclusion and Next Steps

This investigation demonstrates that {% data variables.product.prodname_dotcom %} Copilot _can_ quote a body of code verbatim, but that it rarely does so, and when it does, it mostly quotes code that everybody quotes, and mostly at the beginning of a file, as if to break the ice.

But there’s still one big difference between GitHub Copilot reciting code and me reciting a poem: I _know_ when I’m quoting. I would also like to know when Copilot is echoing existing code rather than coming up with its own ideas. That way, I’m able to look up background information about that code, and to include credit where credit is due.

The answer is obvious: sharing the prefiltering solution we used in this analysis to detect overlap with the training set. When a suggestion contains snippets copied from the training set, the UI should simply tell you where it’s quoted from. You can then either include proper attribution or decide against using that code altogether.

This duplication search is not yet integrated into the technical preview, but we plan to do so. And we will both continue to work on decreasing rates of recitation, and on making its detection more precise.

<br><br>

### Footnotes

<a name="footnote1">1</a>: [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](https://dl.acm.org/doi/10.1145/3442188.3445922) [^](#anchor1)

<a name="footnote2">2</a>: [Tiferet Gazit](https://github.com/tiferet) [^](#anchor2)

<a name="footnote3">3</a>: see von Bayern et al. about the creative wisdom of crows: [Compound tool construction by New Caledonian crows](https://www.nature.com/articles/s41598-018-33458-z) [^](#anchor3)

<a name="footnote4">4</a>: see Carlini et al. about deliberately triggering the recall of training data: [Extracting Training Data from Large Language Models](https://arxiv.org/pdf/2012.07805.pdf) [^](#anchor4)

<a name="footnote5">5</a>: jaeteekae: [DelayedTwitter](https://github.com/jaeteekae/DelayedTwitter/blob/0a0b03de74c03cfbf36877ffded0cb1312d59642/get_top_twitter_accounts.py#L21) [^](#anchor5)

<a name="footnote6">6</a>: Probably not _too_ many though. I’ve asked some developers to help me label the cases, and everyone was prompted to flag up any uncertainty with their judgement. That happened in only 34 cases, i.e. less than 10%. [^](#anchor6)

<a name="footnote7">7</a>: In the [public dataset](/assets/images/help/copilot/matched_snippets.csv), I list the part of Copilot's suggestion that was also found in the training set, how often it was found, and a link to an example where it occurs in public code. For privacy reasons, I don't include the not-matched part of the completion or the code context the user had typed (only an indication of its length). [^](#anchor7)

<a name="footnote8">8</a>: In fact, since this experiment has been made, {% data variables.product.prodname_dotcom %} Copilot _has_ changed to require a minimum file content. So some of the suggestions flagged here would not have been shown by the current version. [^](#anchor8)

<a name="footnote9">9</a>: For example jenevans33: [CS8803-1](https://github.com/jenevans33/CS8803-1/blob/eca1bbc27ca6f7355dbc806b2f95964b59381605/src/Final/ekfcode.py#L23) [^](#anchor9)
