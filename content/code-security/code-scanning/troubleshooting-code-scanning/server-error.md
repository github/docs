---
title: 'Error: "Server error"'
shortTitle: 'Server error'
intro: 'If you see this error, it may be transient. Check the current {% data variables.product.prodname_actions %} service status, and try running your workflow again.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
---

## About this error

```text
Server error
```

If the run of a workflow for {% data variables.product.prodname_code_scanning %} fails due to a server error, this may be due to a transient communication issue.

## Confirming the cause of the error

You can check the current "Actions" service status on the [Status Dashboard](https://www.githubstatus.com/).

## Fixing the problem

Try running the workflow again. If the problem persists, contact {% data variables.contact.contact_support %}.
