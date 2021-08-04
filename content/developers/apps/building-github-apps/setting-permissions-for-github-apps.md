---
title: Setting permissions for GitHub Apps
intro: '{% data reusables.shortdesc.permissions_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-permissions-for-github-apps/
  - /apps/building-github-apps/permissions-for-github-apps/
  - /apps/building-github-apps/setting-permissions-for-github-apps
  - /developers/apps/setting-permissions-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub Apps
shortTitle: Set permissions
---
GitHub Apps don't have any permissions by default. When you create a GitHub App, you can select the permissions it needs to access end user data. Permissions can also be added and removed. For more information, see "[Editing a GitHub App's permissions](/apps/managing-github-apps/editing-a-github-app-s-permissions/)."
name: Pull request labeler

on: [ pull_request_target ]

permissions:
  contents: read
  pull-requests: write

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/labeler@v2
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
