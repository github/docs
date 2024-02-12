---
title: 'Error: "is not a .ql file, .qls file, a directory, or a query pack specification"'
shortTitle: Not recognized
intro: '{% data variables.product.prodname_codeql %} was unable to locate one of the queries or sets of queries that are specified for analysis.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.code-scanning.beta %}

You will see `Error: "is not a .ql file, .qls file, a directory, or a query pack specification"` if {% data variables.product.prodname_codeql %} is unable to find the named query, query suite, or query pack at the location requested in the workflow. There are two common reasons for this error.

- There is a typo in the workflow.
- A resource the workflow refers to by path was renamed, deleted, or moved to a new location.

After verifying the location of the resource, you can update the workflow to specify the correct location. {% ifversion ghae < 3.6 %}If you run additional queries in Go analysis, you may have been affected by the relocation of the source files. For more information, see [Relocation announcement: `github/codeql-go` moving into `github/codeql`](https://github.com/github/codeql-go/issues/741) in the github/codeql-go repository.{% endif %}
