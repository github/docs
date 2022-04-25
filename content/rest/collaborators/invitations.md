---
title: Invitations
intro: 'The Repository Invitations API allows users or external services to invite other users to collaborate on a repo.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

The invited users (or external services on behalf of invited users) can choose to accept or decline the invitations.

Note that the `repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted
access to invitations **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as invitations.

### Invite a user to a repository		

Use the API endpoint for adding a collaborator. For more information, see "[Add a repository collaborator](/rest/collaborators/collaborators#add-a-repository-collaborator)."