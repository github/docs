---
title: Troubleshooting rules
intro: 'Learn how to troubleshoot rulesets when you''re contributing to a repository.'
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  feature: repo-rules
topics:
  - Repositories
shortTitle: Troubleshooting
---

If you cannot perform an action in a repository and want to know why, you can view the active rulesets targeting the branch or tag you're working with. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-rulesets-for-a-repository)."

Depending on which rules are active, you may need to edit your commit history locally before you can push your commits to the remote branch. For example, if a branch requires commits to be signed, you can update your signing settings, then use an interactive rebase on your local branch to rewrite your Git history with signed commits. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-signed-commits)" and "[AUTOTITLE](/get-started/using-git/using-git-rebase-on-the-command-line)."

If a branch or tag is targeted by rules restricting the metadata of commits, your commits may be rejected if part of the commit's metadata does not match a certain pattern. For example, you might need to add an issue number to the start of your commit message, or change the name of a new branch or tag you're trying to push to the repository. If your commits are rejected, you will see a message telling you the pattern the relevant metadata needs to match. As with signed commits, you may need to perform a rebase to squash the commits or rewrite each commit individually. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#metadata-restrictions)."
