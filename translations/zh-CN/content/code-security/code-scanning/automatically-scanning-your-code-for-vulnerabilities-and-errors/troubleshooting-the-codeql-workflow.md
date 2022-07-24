---
title: Troubleshooting the CodeQL workflow
shortTitle: Troubleshoot CodeQL workflow
intro: 'If you''re having problems with {% data variables.product.prodname_code_scanning %}, you can troubleshoot by using these tips for resolving issues.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
---


{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %}
{% note %}

**Note:** This article describes the features available with the version of the CodeQL action and associated CodeQL CLI bundle included in the initial release of this version of {% data variables.product.product_name %}. If your enterprise uses a more recent version of the CodeQL action, see the [{% data variables.product.prodname_ghe_cloud %} article](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow) for information on the latest features. {% ifversion not ghae %} For information on using the latest version, see "[Configuring code scanning for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)."{% endif %}

{% endnote %}
{% endif %}

## Producing detailed logs for debugging

To produce more detailed logging output, you can enable step debug logging. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5601 %}

## Creating {% data variables.product.prodname_codeql %} debugging artifacts

You can obtain artifacts to help you debug {% data variables.product.prodname_codeql %} by setting a debug configuration flag. Modify the `init` step of your {% data variables.product.prodname_codeql %} workflow file and set `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

The debug artifacts will be uploaded to the workflow run as an artifact named `debug-artifacts`. The data contains the {% data variables.product.prodname_codeql %} logs, {% data variables.product.prodname_codeql %} database(s), and any SARIF file(s) produced by the workflow. 

These artifacts will help you debug problems with {% data variables.product.prodname_codeql %} code scanning. If you contact GitHub support, they might ask for this data.

{% endif %}

## Automatic build for a compiled language fails

If an automatic build of code for a compiled language within your project fails, try the following troubleshooting steps.

- Remove the `autobuild` step from your {% data variables.product.prodname_code_scanning %} workflow and add specific build steps. For information about editing the workflow, see  "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)." For more information about replacing the `autobuild` step, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

- If your workflow doesn't explicitly specify the languages to analyze, {% data variables.product.prodname_codeql %} implicitly detects the supported languages in your code base. In this configuration, out of the compiled languages C/C++, C#, and Java, {% data variables.product.prodname_codeql %} only analyzes the language with the most source files. Edit the workflow and add a matrix specifying the languages you want to analyze. The default CodeQL analysis workflow uses such a matrix.

  The following extracts from a workflow show how you can use a matrix within the job strategy to specify languages, and then reference each language within the "Initialize {% data variables.product.prodname_codeql %}" step:

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  For more information about editing the workflow, see "[Configuring code scanning](/code-security/secure-coding/configuring-code-scanning)."

## No code found during the build

If your workflow fails with an error `No source code was seen during the build` or `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`, this indicates that {% data variables.product.prodname_codeql %} was unable to monitor your code. Several reasons can explain such a failure:

1. The repository may not contain source code that is written in languages supported by {% data variables.product.prodname_codeql %}. Check the list of supported languages and, if this is the case, remove the {% data variables.product.prodname_codeql %} workflow. For more information, see "[About code scanning with CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)

1. Automatic language detection identified a supported language, but there is no analyzable code of that language in the repository. A typical example is when our language detection service finds a file associated with a particular programming language like a `.h`, or `.gyp` file, but no corresponding executable code is present in the repository. To solve the problem, you can manually define the languages you want to analyze by updating the list of languages in the `language` matrix. For example, the following configuration will analyze only Go, and JavaScript.

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   For more information, see the workflow extract in "[Automatic build for a compiled language fails](#automatic-build-for-a-compiled-language-fails)" above.
1. Your {% data variables.product.prodname_code_scanning %} workflow is analyzing a compiled language (C, C++, C#, or Java), but the code was not compiled. By default, the {% data variables.product.prodname_codeql %} analysis workflow contains an `autobuild` step, however, this step represents a best effort process, and may not succeed in building your code, depending on your specific build environment. Compilation may also fail if you have removed the `autobuild` step and did not include build steps manually.  For more information about specifying build steps, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."
1. Your workflow is analyzing a compiled language (C, C++, C#, or Java), but portions of your build are cached to improve performance (most likely to occur with build systems like Gradle or Bazel). Since {% data variables.product.prodname_codeql %} observes the activity of the compiler to understand the data flows in a repository, {% data variables.product.prodname_codeql %} requires a complete build to take place in order to perform analysis. 
1. Your workflow is analyzing a compiled language (C, C++, C#, or Java), but compilation does not occur between the `init` and `analyze` steps in the workflow. {% data variables.product.prodname_codeql %} requires that your build happens in between these two steps in order to observe the activity of the compiler and perform analysis. 
1. Your compiled code (in C, C++, C#, or Java) was compiled successfully, but {% data variables.product.prodname_codeql %} was unable to detect the compiler invocations. The most common causes are:

   * Running your build process in a separate container to {% data variables.product.prodname_codeql %}. For more information, see "[Running CodeQL code scanning in a container](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)."
   * Building using a distributed build system external to GitHub Actions, using a daemon process.
   * {% data variables.product.prodname_codeql %} isn't aware of the specific compiler you are using.

  For .NET Framework projects, and for C# projects using either `dotnet build` or `msbuild`, you should specify `/p:UseSharedCompilation=false` in your workflow's `run` step, when you build your code.
  
  For example, the following configuration for C# will pass the flag during the first build step.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  If you encounter another problem with your specific compiler or configuration, contact {% data variables.contact.contact_support %}.

For more information about specifying build steps, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)." 

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}
## Lines of code scanned are lower than expected

For compiled languages like C/C++, C#, Go, and Java, {% data variables.product.prodname_codeql %} only scans files that are built during the analysis. Therefore the number of lines of code scanned will be lower than expected if some of the source code isn't compiled correctly. This can happen for several reasons:

1. The {% data variables.product.prodname_codeql %} `autobuild` feature uses heuristics to build the code in a repository. However, sometimes this approach results in an incomplete analysis of a repository. For example, when multiple `build.sh` commands exist in a single repository, the analysis may not be complete since the `autobuild` step will only execute one of the commands, and therefore some source files may not be compiled.
1. Some compilers do not work with {% data variables.product.prodname_codeql %} and can cause issues while analyzing the code. For example, Project Lombok uses non-public compiler APIs to modify compiler behavior. The assumptions used in these compiler modifications are not valid for {% data variables.product.prodname_codeql %}'s Java extractor, so the code cannot be analyzed.

If your {% data variables.product.prodname_codeql %} analysis scans fewer lines of code than expected, there are several approaches you can try to make sure all the necessary source files are compiled.

### Replace the `autobuild` step 

Replace the `autobuild` step with the same build commands you would use in production. This makes sure that {% data variables.product.prodname_codeql %} knows exactly how to compile all of the source files you want to scan.
For more information, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)." 

### Inspect the copy of the source files in the {% data variables.product.prodname_codeql %} database
You may be able to understand why some source files haven't been analyzed by inspecting the copy of the source code included with the {% data variables.product.prodname_codeql %} database. To obtain the database from your Actions workflow, modify the `init` step of your {% data variables.product.prodname_codeql %} workflow file and set `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

This uploads the database as an actions artifact that you can download to your local machine. For more information, see "[Storing workflow artifacts](/actions/guides/storing-workflow-data-as-artifacts)."

The artifact will contain an archived copy of the source files scanned by {% data variables.product.prodname_codeql %} called _src.zip_. If you compare the source code files in the repository and the files in _src.zip_, you can see which types of file are missing. Once you know what types of file are not being analyzed, it is easier to understand how you may need to change the workflow for {% data variables.product.prodname_codeql %} analysis.

## Alerts found in generated code

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## Extraction errors in the database

The {% data variables.product.prodname_codeql %} team constantly works on critical extraction errors to make sure that all source files can be scanned. However, the {% data variables.product.prodname_codeql %} extractors do occasionally generate errors during database creation. {% data variables.product.prodname_codeql %} provides information about extraction errors and warnings generated during database creation in a log file. 
The extraction diagnostics information gives an indication of overall database health. Most extractor errors do not significantly impact the analysis. A small number of extractor errors is healthy and typically indicates a good state of analysis.

However, if you see extractor errors in the overwhelming majority of files that were compiled during database creation, you should look into the errors in more detail to try to understand why some source files weren't extracted properly.

{% else %}
## Portions of my repository were not analyzed using `autobuild`

The {% data variables.product.prodname_codeql %} `autobuild` feature uses heuristics to build the code in a repository, however, sometimes this approach results in incomplete analysis of a repository. For example, when multiple `build.sh` commands exist in a single repository, the analysis may not complete since the `autobuild` step will only execute one of the commands. The solution is to replace the `autobuild` step with build steps which build all of the source code which you wish to analyze. For more information, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."
{% endif %}

## The build takes too long

If your build with {% data variables.product.prodname_codeql %} analysis takes too long to run, there are several approaches you can try to reduce the build time. 

### Increase the memory or cores

If you use self-hosted runners to run {% data variables.product.prodname_codeql %} analysis, you can increase the memory or the number of cores on those runners.

### Use matrix builds to parallelize the analysis

The default {% data variables.product.prodname_codeql_workflow %} uses a matrix of languages, which causes the analysis of each language to run in parallel. If you have specified the languages you want to analyze directly in the "Initialize CodeQL" step, analysis of each language will happen sequentially. To speed up analysis of multiple languages, modify your workflow to use a matrix. For more information, see the workflow extract in "[Automatic build for a compiled language fails](#automatic-build-for-a-compiled-language-fails)" above.

### Reduce the amount of code being analyzed in a single workflow

Analysis time is typically proportional to the amount of code being analyzed. You can reduce the analysis time by reducing the amount of code being analyzed at once, for example, by excluding test code, or breaking analysis into multiple workflows that analyze only a subset of your code at a time.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

If you split your analysis into multiple workflows as described above, we still recommend that you have at least one workflow which runs on a `schedule` which analyzes all of the code in your repository. Because {% data variables.product.prodname_codeql %} analyzes data flows between components, some complex security behaviors may only be detected on a complete build.

### Run only during a `schedule` event

If your analysis is still too slow to be run during `push` or `pull_request` events, then you may want to only trigger analysis on the `schedule` event. For more information, see "[Events](/actions/learn-github-actions/introduction-to-github-actions#events)."

### Check which query suites the workflow runs

By default, there are three main query suites available for each language. If you have optimized the CodeQL database build and the process is still too long, you could reduce the number of queries you run. The default query suite is run automatically; it contains the fastest security queries with the lowest rates of false positive results. 

You may be running extra queries or query suites in addition to the default queries. Check whether the workflow defines an additional query suite or additional queries to run using the `queries` element. You can experiment with disabling the additional query suite or queries. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)."

{% ifversion codeql-ml-queries %}
{% note %}

**Note:** If you run the `security-extended` or `security-and-quality` query suite for JavaScript, then some queries use experimental technology. For more information, see "[About code scanning alerts](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)."
{% endnote %}
{% endif %}

{% ifversion fpt or ghec %}
## Results differ between analysis platforms

If you are analyzing code written in Python, you may see different results depending on whether you run the {% data variables.product.prodname_codeql_workflow %} on Linux, macOS, or Windows.

On GitHub-hosted runners that use Linux, the {% data variables.product.prodname_codeql_workflow %} tries to install and analyze Python dependencies, which could lead to more results. To disable the auto-install, add `setup-python-dependencies: false` to the "Initialize CodeQL" step of the workflow. For more information about configuring the analysis of Python dependencies, see "[Analyzing Python dependencies](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)."

{% endif %}

## Error: "Server error"

If the run of a workflow for {% data variables.product.prodname_code_scanning %} fails due to a server error, try running the workflow again. If the problem persists, contact {% data variables.contact.contact_support %}.

## Error: "Out of disk" or "Out of memory"

On very large projects, {% data variables.product.prodname_codeql %} may run out of disk or memory on the runner.
{% ifversion fpt or ghec %}If you encounter this issue on a hosted {% data variables.product.prodname_actions %} runner, contact {% data variables.contact.contact_support %} so that we can investigate the problem.
{% else %}If you encounter this issue, try increasing the memory on the runner.{% endif %}

{% ifversion fpt or ghec %}
## Error: 403 "Resource not accessible by integration" when using {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} is considered untrusted when it triggers a workflow run, and the workflow will run with read-only scopes. Uploading {% data variables.product.prodname_code_scanning %} results for a branch usually requires the `security_events: write` scope. However, {% data variables.product.prodname_code_scanning %} always allows the uploading of results when the `pull_request` event triggers the action run. This is why, for {% data variables.product.prodname_dependabot %} branches, we recommend you use the `pull_request` event instead of the `push` event.

A simple approach is to run on pushes to the default branch and any other important long-running branches, as well as pull requests opened against this set of branches:
```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```
An alternative approach is to run on all pushes except for {% data variables.product.prodname_dependabot %} branches:
```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### Analysis still failing on the default branch

If the {% data variables.product.prodname_codeql_workflow %} still fails on a commit made on the default branch, you need to check:
- whether {% data variables.product.prodname_dependabot %} authored the commit
- whether the pull request that includes the commit has been merged using `@dependabot squash and merge`

This type of merge commit is authored by {% data variables.product.prodname_dependabot %} and therefore, any workflows running on the commit will have read-only permissions. If you enabled {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} security updates or version updates on your repository, we recommend you avoid using the {% data variables.product.prodname_dependabot %} `@dependabot squash and merge` command. Instead, you can enable auto-merge for your repository. This means that pull requests will be automatically merged when all required reviews are met and status checks have passed. For more information about enabling auto-merge, see "[Automatically merging a pull request](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)."
{% endif %}

## Error: "is not a .ql file, .qls file, a directory, or a query pack specification"

You will see this error if CodeQL is unable to find the named query, query suite, or query pack at the location requested in the workflow. There are two common reasons for this error.

- There is a typo in the workflow.
- A resource the workflow refers to by path was renamed, deleted, or moved to a new location.

After verifying the location of the resource, you can update the workflow to specify the correct location. If you run additional queries in Go analysis, you may have been affected by the relocation of the source files. For more information, see [Relocation announcement: `github/codeql-go` moving into `github/codeql`](https://github.com/github/codeql-go/issues/741) in the github/codeql-go repository.

## Warning: "git checkout HEAD^2 is no longer necessary"

If you're using an old {% data variables.product.prodname_codeql %} workflow you may get the following warning in the output from the "Initialize {% data variables.product.prodname_codeql %}" action:

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Fix this by removing the following lines from the {% data variables.product.prodname_codeql %} workflow. These lines were included in the `steps` section of the `Analyze` job in initial versions of the {% data variables.product.prodname_codeql %} workflow.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

The revised `steps` section of the workflow will look like this:

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

For more information about editing the {% data variables.product.prodname_codeql %} workflow file, see  "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)."
