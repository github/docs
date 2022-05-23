---
title: Repository invitations
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: 'The Repository invitations API allows you to view and manage invitations to collaborate on a repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Repository invitations API

The Repository invitations API allows you to view and manage invitations to collaborate on a repository. The invited users (or external services on behalf of invited users) can choose to accept or decline the invitations.

To add a user as a collaborator, use the Collaborators API instead. For more information, see "[Add a repository collaborator](/rest/collaborators/collaborators#add-a-repository-collaborator)."

Note that the `repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted
access to invitations **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as invitations.
