---
title: Team discussions
allowTitleToDifferFromFilename: true
shortTitle: Discussions
intro: 'Use the REST API to get, create, edit, and delete discussion posts on a team''s page.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% ifversion team-discussions-migration %}
{% data reusables.organizations.team-discussions-migration %}
{% endif %}

## About team discussions

You can use team discussions to have conversations that are not specific to a repository or project. Any member of the team's [organization](/rest/reference/orgs) can create and read public discussion posts. For more details, see "[About team discussions](//organizations/collaborating-with-your-team/about-team-discussions/)." To learn more about commenting on a discussion post, see "[Team discussion comments](/rest/teams/discussion-comments)."

{% data reusables.organizations.team-api %}
