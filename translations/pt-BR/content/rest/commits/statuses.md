---
title: Status do commit
intro: 'The Commit status API allows external services to mark commits with a status, which is then reflected in pull requests involving those commits.'
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

## About the Commit statuses API

The Commit status API allows external services to mark commits with an `error`, `failure`, `pending`, or `success` state, which is then reflected in pull requests involving those commits. Statuses can also include an optional `description` and `target_url`, and we highly recommend providing them as they make statuses much more useful in the GitHub UI.

As an example, one common use is for continuous integration services to mark commits as passing or failing builds using status.  The `target_url` would be the full URL to the build output, and the `description` would be the high level summary of what happened with the build.

Os status podem incluir um `contexto` para indicar qual serviço está fornecendo esse status. Por exemplo, você pode fazer com que o seu serviço de integração contínua faça push status com um contexto de `ci`, e uma ferramenta de auditoria de segurança faça push dos status com um contexto de `segurança`.  You can then use the [Get the combined status for a specific reference](/rest/reference/commits#get-the-combined-status-for-a-specific-reference) to retrieve the whole status for a commit.

Note that the `repo:status` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to statuses **without** also granting access to repository code, while the `repo` scope grants permission to code as well as statuses.

Se você está desenvolvendo um aplicativo GitHub e deseja fornecer informações mais detalhadas sobre um serviço externo, você deverá usar a [API de verificação](/rest/reference/checks).
