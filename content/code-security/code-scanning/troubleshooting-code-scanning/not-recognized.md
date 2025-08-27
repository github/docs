---
title: 'Error: "is not a .ql file, .qls file, a directory, or a query pack specification"'
shortTitle: Not recognized
intro: '{% data variables.product.prodname_codeql %} was unable to locate one of the queries or sets of queries that are specified for analysis.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About this error

```text
Is not a .ql file, .qls file, a directory, or a query pack specification.
```

You will see this error if {% data variables.product.prodname_codeql %} is unable to find the named query, query suite, or query pack at the location requested in the workflow.

## Confirming the cause of the error

There are two common reasons for this error:

* There is a typo in the workflow.
* A resource the workflow refers to by path was renamed, deleted, or moved to a new location.

## Fixing the problem

After verifying the location of the resource, you can update the workflow to specify the correct location.
