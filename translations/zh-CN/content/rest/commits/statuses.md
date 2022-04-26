---
title: 提交状态
intro: 'The status API allows external services to mark commits with an `error`, `failure`, `pending`, or `success` state, which is then reflected in pull requests involving those commits.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

Statuses can also include an optional `description` and `target_url`, and we highly recommend providing them as they make statuses much more useful in the GitHub UI.

As an example, one common use is for continuous integration services to mark commits as passing or failing builds using status.  The `target_url` would be the full URL to the build output, and the `description` would be the high level summary of what happened with the build.

状态可以包括 `context` 以指示提供该状态的服务是什么。 例如，您可以让持续集成服务推送上下文为 `ci` 的状态，让安全审核工具推送上下文为 `security` 的状态。  You can then use the [Get the combined status for a specific reference](/rest/reference/commits#get-the-combined-status-for-a-specific-reference) to retrieve the whole status for a commit.

Note that the `repo:status` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to statuses **without** also granting access to repository code, while the `repo` scope grants permission to code as well as statuses.

如果您正在开发 GitHub 应用程序，希望提供有关外部服务的更多信息，则可能需要使用[检查 API](/rest/reference/checks)。
