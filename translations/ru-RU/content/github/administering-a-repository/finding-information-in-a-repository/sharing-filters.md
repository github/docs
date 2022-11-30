---
title: Sharing filters
intro: 'When you filter or sort issues and pull requests, your browser''s URL is automatically updated to match the new view.'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

You can send the URL that issues generates to any user, and they'll be able to see the same filter view that you see.

For example, if you filter on issues assigned to Hubot, and sort on the oldest open issues, your URL would update to something like the following:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

### Дополнительная литература

* "[Filtering issues and pull requests](/articles/filtering-issues-and-pull-requests)"
* "[Sorting issues and pull requests](/articles/sorting-issues-and-pull-requests)"
* "[Using search to filter issues and pull requests](/articles/using-search-to-filter-issues-and-pull-requests)"
