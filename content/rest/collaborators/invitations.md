---
title: Repository invitations
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: Use the REST API to view and manage invitations to collaborate on a repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About repository invitations

You can view and manage invitations to collaborate on a repository. The invited users (or external services on behalf of invited users) can choose to accept or decline the invitations.

To add a user as a collaborator, use the Collaborators endpoints instead. For more information, see "[Add a repository collaborator](/rest/collaborators/collaborators#add-a-repository-collaborator)."

Note that the `repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted
access to invitations **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as invitations.
