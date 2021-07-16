gh release create

Create a new release

Synopsis

Create a new GitHub Release for a repository.

A list of asset files may be given to upload to the new release. To define a display label for an asset, append text starting with # after the file name.

If a matching git tag does not yet exist, one will automatically get created from the latest state of the default branch. Use --target to override this. To fetch the new tag locally after the release, do git fetch --tags origin.

To create a release from an annotated git tag, first create one locally with git, push the tag to GitHub, then run this command.

gh release create <tag> [<files>...]
Examples

Interactively create a release
$ gh release create v1.2.3

Non-interactively create a release
$ gh release create v1.2.3 --notes "bugfix release"

Use release notes from a file
$ gh release create v1.2.3 -F changelog.md

Upload all tarballs in a directory as release assets
$ gh release create v1.2.3 ./dist/*.tgz

Upload a release asset with a display label
$ gh release create v1.2.3 '/path/to/asset.zip#My display label'

Options

  -d, --draft             Save the release as a draft instead of publishing it
  -n, --notes string      Release notes
  -F, --notes-file file   Read release notes from file
  -p, --prerelease        Mark the release as a prerelease
      --target branch     Target branch or full commit SHA (default: main branch)
  -t, --title string      Release title
Options inherited from parent commands

      --help                     Show help for command
  -R, --repo [HOST/]OWNER/REPO   Select another repository using the [HOST/]OWNER/REPO format
---
title: Building GitHub Apps
intro: You can build GitHub Apps for yourself or others to use. Learn how to register and set up permissions and authentication options for GitHub Apps.
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/
  - /apps/building-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub Apps
children:
  - /creating-a-github-app
  - /setting-permissions-for-github-apps
  - /managing-allowed-ip-addresses-for-a-github-app
  - /authenticating-with-github-apps
  - /identifying-and-authorizing-users-for-github-apps
  - /rate-limits-for-github-apps
  - /refreshing-user-to-server-access-tokens
  - /creating-a-github-app-from-a-manifest
  - /creating-a-github-app-using-url-parameters
  - /creating-a-custom-badge-for-your-github-app
---

