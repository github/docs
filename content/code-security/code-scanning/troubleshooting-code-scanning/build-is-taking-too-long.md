---
title: 'Code scanning analysis takes too long'
shortTitle: 'Analysis takes too long'
intro: 'You can fine tune {% data variables.product.prodname_codeql %} to minimize analysis time.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.codeql-action-version-ghes %}

If your build with {% data variables.product.prodname_codeql %} analysis takes too long to run, there are several approaches you can try to reduce the build time.

## Increase the memory or cores

If you use self-hosted runners to run {% data variables.product.prodname_codeql %} analysis, you can increase the memory or the number of cores on those runners.

## Use matrix builds to parallelize the analysis

The default {% data variables.code-scanning.codeql_workflow %} uses a matrix of languages, which causes the analysis of each language to run in parallel. If you have specified the languages you want to analyze directly in the "Initialize CodeQL" step, analysis of each language will happen sequentially. To speed up analysis of multiple languages, modify your workflow to use a matrix. For more information, see the workflow extract in "[Automatic build for a compiled language fails](#automatic-build-for-a-compiled-language-fails)" above.

## Reduce the amount of code being analyzed in a single workflow

Analysis time is typically proportional to the amount of code being analyzed. You can reduce the analysis time by reducing the amount of code being analyzed at once, for example, by excluding test code, or breaking analysis into multiple workflows that analyze only a subset of your code at a time.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

If you split your analysis into multiple workflows as described above, we still recommend that you have at least one workflow which runs on a `schedule` which analyzes all of the code in your repository. Because {% data variables.product.prodname_codeql %} analyzes data flows between components, some complex security behaviors may only be detected on a complete build.

## Run only during a `schedule` event

If your analysis is still too slow to be run during `push` or `pull_request` events, then you may want to only trigger analysis on the `schedule` event. For more information, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions#events)."

## Check which query suites the workflow runs

By default, there are three main query suites available for each language. If you have optimized the {% data variables.product.prodname_codeql %} database build and the process is still too long, you could reduce the number of queries you run. The default query suite is run automatically; it contains the fastest security queries with the lowest rates of false positive results.

You may be running extra queries or query suites in addition to the default queries. Check whether the workflow defines an additional query suite or additional queries to run using the `queries` element. You can experiment with disabling the additional query suite or queries. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning#using-queries-in-ql-packs)."

{% ifversion codeql-ml-queries %}
{% note %}

**Note:** If you run the `security-extended` or `security-and-quality` query suite for JavaScript, then some queries use experimental technology. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)."
{% endnote %}
{% endif %}
