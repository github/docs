---
title: Working with pre-receive hooks
intro: '*Pre-receive hooks* enforce rules for contributions before commits may be pushed to a repository.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
  - /articles/working-with-pre-receive-hooks
  - /github/collaborating-with-issues-and-pull-requests/working-with-pre-receive-hooks
versions:
  ghes: '*'
shortTitle: Pre-receive hooks
---
Pre-receive hooks run tests on code pushed to a repository to ensure contributions meet repository or organization policy. If the commit contents pass the tests, the push will be accepted into the repository. If the commit contents do not pass the tests, the push will not be accepted.

If your push isn't accepted, you'll see an error message corresponding to the failed pre-receive hook.

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

![Error message for failed pre-receive hook](/assets/images/help/pull_requests/pre-receive-hook-failed-error.png)

Your {% data variables.product.product_name %} site administrator can create and remove pre-receive hooks for your organization or repository, and may allow organization or repository administrators to enable or disable pre-receive hooks. For more information, see "[Using pre-receive hooks to enforce policy](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/using-pre-receive-hooks-to-enforce-policy)."
