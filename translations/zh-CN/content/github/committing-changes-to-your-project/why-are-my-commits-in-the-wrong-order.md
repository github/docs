---
title: 为什么我的提交顺序不正确？
intro: 如果您通过 `git rebase` 或强制推送来重写提交历史记录，可能会发现打开拉取请求时提交顺序不正确。
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

GitHub 强调将拉取请求视为讨论的空间。 其所有方面（评论、引用和提交）均按时间顺序显示。 [执行变基时](/articles/about-git-rebase)重写 Git 提交历史记录会更改时空连续体，这意味着提交可能不会按您预期的方式在 GitHub 界面中显示。

如果想要按顺序查看提交，我们建议不要使用 `git rebase`。 不过请放心，尽管您看到的内容没有按时间顺序排列，但不会破坏任何内容！
