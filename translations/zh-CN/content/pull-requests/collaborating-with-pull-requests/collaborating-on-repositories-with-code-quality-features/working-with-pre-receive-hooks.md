---
title: 使用预接收挂钩
intro: '*预接收挂钩*在将提交推送到仓库之前强制实施贡献规则。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
  - /articles/working-with-pre-receive-hooks
  - /github/collaborating-with-issues-and-pull-requests/working-with-pre-receive-hooks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
versions:
  ghes: '*'
shortTitle: 预接收挂钩
---

预接收挂钩对推送到仓库的代码运行测试，以确保贡献符合仓库或组织策略。 如果提交内容通过测试，将接受推送进入仓库。 如果提交内容未通过测试，将不接受推送。

如果不接受推送，您将看到对应失败预接收挂钩的错误消息。

```shell
$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 916 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: always_reject.sh: failed with exit status 1
remote: error: rejecting all pushes
To https://54.204.174.51/hodor/nope.git
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'https://54.204.174.51/hodor/nope.git'
```

![失败预接收挂钩的错误消息](/assets/images/help/pull_requests/pre-receive-hook-failed-error.png)

您的 {% data variables.product.product_name %} 站点管理员可以创建和删除组织或仓库的预接收挂钩，并可允许组织或仓库管理员启用或禁用预接收挂钩。 更多信息请参阅“[使用预接收挂钩来强制实施策略](/enterprise/admin/guides/developer-workflow/using-pre-receive-hooks-to-enforce-policy)”。
