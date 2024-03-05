---
title: Code scanning analysis takes too long
shortTitle: Analysis takes too long
intro: 'You can fine tune your {% data variables.product.prodname_code_scanning %} configuration to minimize analysis time.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/troubleshooting-code-scanning/build-is-taking-too-long
---

{% data reusables.code-scanning.codeql-action-version-ghes %}

There are several approaches you can try to reduce the build time in a {% data variables.product.prodname_code_scanning %} analysis.

## Increase the memory or cores

{% ifversion fpt or ghec %}

If you're using {% data variables.product.company_short %}-hosted runners for your {% data variables.product.prodname_code_scanning %} analysis, consider upgrading to {% data variables.actions.hosted_runners %}. These are {% data variables.product.company_short %}-hosted runners with more RAM, CPU, and disk space than standard runners. For more information about {% data variables.actions.hosted_runners %} and {% data variables.product.prodname_code_scanning %}, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners)" and "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/configuring-larger-runners-for-default-setup)."

If you're using self-hosted runners to run {% data variables.product.prodname_code_scanning %} analysis, you can increase the memory or the number of cores on those runners. If you're using {% data variables.product.prodname_codeql %} with advanced setup for your analysis, review the recommended hardware resources for {% data variables.product.prodname_codeql %} to make sure your self-hosted runners meet those requirements. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql)."

{% elsif ghes %}

You can increase the memory or disk space available on your runners. If you're using {% data variables.product.prodname_codeql %} for your {% data variables.product.prodname_code_scanning %} analysis, you can review the recommended hardware resources for {% data variables.product.prodname_codeql %} to make sure your runners meet those requirements. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql)."

{% endif %}

## Use matrix builds to parallelize the analysis

To speed up analysis of workflows that involve multiple jobs, you can modify your workflow to use a matrix. For more information, see "[AUTOTITLE](/actions/using-jobs/using-a-matrix-for-your-jobs)."

The default {% data variables.code-scanning.codeql_workflow %} uses a matrix of languages, which causes the analysis of each language to run in parallel. However, if you're using {% data variables.product.prodname_codeql %} with advanced setup and you have specified the languages you want to analyze directly in the "Initialize CodeQL" step, analysis of each language will happen sequentially. In this configuration, you can speed up your analysis by modifying your advanced setup workflow to use a matrix. For an example, see the workflow extract in "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/some-languages-were-not-analyzed)."

## Reduce the amount of code being analyzed in a single workflow

Analysis time is typically proportional to the amount of code being analyzed. If you're using {% data variables.product.prodname_codeql %} with advanced setup, you can reduce the analysis time by reducing the amount of code being analyzed at once. For example, by excluding test code, or breaking analysis into multiple workflows that analyze only a subset of your code at a time.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

If you split your {% data variables.product.prodname_codeql %} analysis into multiple workflows, we still recommend that you have at least one workflow which runs on a `schedule` which analyzes all of the code in your repository. Because {% data variables.product.prodname_codeql %} analyzes data flows between components, some complex security behaviors may only be detected on a complete build.

## Run only during a `schedule` event

You may find that your analysis is slow during `push` or `pull_request` events. If so, you can set your analysis to only trigger on the `schedule` event. If you're using {% data variables.product.prodname_codeql %} for your {% data variables.product.prodname_code_scanning %} analysis, you can configure this with an advanced setup workflow, but not in default setup. For more information, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions#events)."

## Check which queries or rules the workflow runs

Another option to reduce analysis time is to run only the queries or rules that you consider critical in workflows that run on pull requests. If you use a third-party tool for {% data variables.product.prodname_code_scanning %}, you should refer to the documentation for the tool.

In {% data variables.product.prodname_codeql %}, there are two main query suites available for each language. If you have optimized the {% data variables.product.prodname_codeql %} database build and the process is still too long, you could reduce the number of queries you run. The default query suite is run automatically: it provides the best possible compromise between quality and speed.

If you're using {% data variables.product.prodname_codeql %} with advanced setup, you may be running extra queries or query suites in addition to the default queries. Check whether the workflow defines an additional query suite or additional queries to run using the `queries` element. You can experiment with disabling the additional query suite or queries. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs)."
