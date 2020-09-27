---
name: Enterprise Release issue
about: Playbook for releasing new Enterprise versions
title: ''
labels: engineering
assignees: ''
---

- [ ] Prepend the new version string to the `supported` array in [lib/enterprise-server-releases.js](lib/enterprise-server-releases.js)
- [ ] Run `npm run sync-search` to generate and upload new Algolia indices in each supported language for the new GHE version. You can also run `npm run sync-search-dry-run` to do a test build of all the indices without actually uploading anything to Algolia's servers. See [search.md#development](https://github.com/github/docs-internal/blob/main/search.md#development) for more details.
- [ ] Run `script/update-enterprise-dates.js` to get the latest Enterprise release and deprecation dates.

**Note**: The `update-enterprise-dates.js` script requires that you have a GitHub Personal Access Token in a `.env` file. See [script/README.md](https://github.com/github/docs-internal/blob/main/script/README.md#additional-scripts) for details.

cc @github/docs-engineering
