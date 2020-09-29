---
title: Troubleshooting code scanning
shortTitle: 문제 해결
intro: 'You can see tips to resolve common issues with {% data variables.product.prodname_code_scanning %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Automatic build for a compiled language fails

If an automatic build of code for a compiled language within your project fails, try the following troubleshooting steps.

- Remove the `autobuild` step from your {% data variables.product.prodname_code_scanning %} workflow and add specific build steps. For information about editing the workflow, see  "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)." For more information about replacing the `autobuild` step, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages#adding-build-steps-for-a-compiled-language)."
- If the repository for your project contains code in a specific language that does not build, disable automatic language detection in your {% data variables.product.prodname_code_scanning %} workflow and specify only the languages you want to build. For more information, see  "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#overriding-automatic-language-detection)."

### No code found during the build

If your workflow fails with an error `No source code was seen during the build` or `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`, this indicates that {% data variables.product.prodname_codeql %} was unable to trace your code. Several reasons can explain such a failure:

1. Automatic language detection identified a supported language, but there is no analyzable code of that language in the repository. A typical example is when our language detection service finds a file associated with a particular programming language like a `.h`, or `.gyp` file, but no corresponding executable code is present in the repository. To solve the problem, you can manually define the languages you want to analyze by updating the `init` step to specify the supported languages that are present in your repository. For example, the following configuration will analyze only Go, and JavaScript.

   ```yaml
   - name: Initialize CodeQL
     uses: github/codeql-action/init@v1
     with:
      languages: go, javascript # Other options are csharp, python, cpp, java
   ```
2. Your {% data variables.product.prodname_code_scanning %} workflow is analyzing a compiled language (C, C++, C#, or Java), but the code was not compiled. By default, the {% data variables.product.prodname_codeql %} analysis workflow contains an `autobuild` step, however, this step represents a best effort process, and may not succeed in building your code, depending on your specific build environment. Compilation may also fail if you have removed the `autobuild` step and did not include build steps manually.  For more information about specifying build steps, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages#adding-build-steps-for-a-compiled-language)."
3. Your workflow is analyzing a compiled language (C, C++, C#, or Java), but portions of your build are cached to improve performance (most likely to occur with build systems like Gradle or Bazel). Since {% data variables.product.prodname_codeql %} observes the activity of the compiler to understand the data flows in a repository, {% data variables.product.prodname_codeql %} requires a complete build to take place in order to perform analysis.
4. Your workflow is analyzing a compiled language (C, C++, C#, or Java), but compilation does not occur between the `init` and `analyze` steps in the workflow. {% data variables.product.prodname_codeql %} requires that your build happens in between these two steps in order to observe the activity of the compiler and perform analysis.
5. Your compiled code (in C, C++, C#, or Java) was compiled successfully, but {% data variables.product.prodname_codeql %} was unable to detect the compiler invocations. The most common causes are certain configuration options like running your build process in a container, if you're building using a distributed build system external to {% data variables.product.prodname_actions %} using a daemon process, or if {% data variables.product.prodname_codeql %} isn't aware of the specific compiler you are using.
    1. For C# projects using either `dotnet build` or `msbuild` which target .NET Core 2, you should specify `/p:UseSharedCompilation=false` in your workflow's `run` step, when you build your code. The `UseSharedCompilation` flag isn't necessary for .NET Core 3.0 and later.

       For example, the following configuration will pass the flag during the first build step.

       ```yaml
       - run: |
           dotnet build /p:UseSharedCompilation=false
       ```
    2. If you encounter another problem with your specific compiler or configuration, contact {% data variables.contact.contact_support %}.

For more information about specifying build steps, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

### Portions of my repository were not analyzed using `autobuild`

The {% data variables.product.prodname_codeql %} `autobuild` feature uses heuristics to build the code in a repository, however, sometimes this approach results in incomplete analysis of a repository. For example, when multiple `build.sh` commands exist in a single repository, the analysis may not complete since the `autobuild` step will only execute one of the commands. The solution is to replace the `autobuild` step with build steps which build all of the source code which you wish to analyze. Alternatively, if more than one compiled language is present in your repository and you want {% data variables.product.prodname_code_scanning %} to analyze all these compiled languages, you can use a build matrix in your workflow. {% if currentVersion ver_gt "enterprise-server@2.21" %}To use a build matrix, you should make sure that {% data variables.product.prodname_actions %} is enabled on {% data variables.product.product_location_enterprise %}. {% endif %}For more information, see "[Configuring a build matrix](/actions/configuring-and-managing-workflows/configuring-a-workflow#configuring-a-build-matrix)" and "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

### Error: "Server error"

If the run of a workflow for {% data variables.product.prodname_code_scanning %} fails due to a server error, try running the workflow again. If the problem persists, contact {% data variables.contact.contact_support %}.

### Error: "Out of disk" or "Out of memory"

On very large projects, {% data variables.product.prodname_codeql %} may run out of disk or memory on the runner.
{% if currentVersion == "free-pro-team@latest" %}If you encounter this issue on a hosted {% data variables.product.prodname_actions %} runner, contact {% data variables.contact.contact_support %} so that we can investigate the problem.
{% else %}If you encounter this issue, try increasing the memory on the runner.{% endif %}

### The build takes too long

If your build with {% data variables.product.prodname_codeql %} analysis takes too long to run, there are several approaches you can try to reduce the build time.

#### Increase the memory or cores

If you use self-hosted runners to run {% data variables.product.prodname_codeql %} analysis, you can increase the memory or the number of cores on those runners.

#### Use matrix builds to parallelize the analysis

By default, {% data variables.product.prodname_codeql %} performs analysis of each language sequentially, which can impact performance, especially for repositories with more than one language. You can speed analysis up by using a build matrix that splits the analysis by language. {% if currentVersion ver_gt "enterprise-server@2.21" %}To use a build matrix, you should make sure that {% data variables.product.prodname_actions %} is enabled on {% data variables.product.product_location_enterprise %}. {% endif %}For more information, see "[Configuring a build matrix](/actions/configuring-and-managing-workflows/configuring-a-workflow#configuring-a-build-matrix)."

For example, the workflow below will be run with one job for JavaScript analysis, and another job for Go analysis.

```yaml

name: "Code Scanning - Action"

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  CodeQL-Build:

    strategy:
      fail-fast: false
      matrix:
        language: [ 'go', 'javascript']

    # CodeQL runs on ubuntu-latest, windows-latest, and macos-latest
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v1
      with:
        languages: ${{ matrix.language }}

    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
    # If this step fails, then you should remove it and run the build manually (see below).
    - name: Autobuild
      uses: github/codeql-action/autobuild@v1

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v1
```

#### Reduce the amount of code being analyzed in a single workflow

Analysis time is typically proportional to the amount of code being analyzed. You can reduce the analysis time by reducing the amount of code being analyzed at once, for example, by excluding test code, or breaking analysis into multiple workflows that analyze only a subset of your code at a time.

For compiled languages like Java, C, C++, and C#, {% data variables.product.prodname_codeql %} analyzes all of the code which was built during the workflow run. To limit the amount of code being analyzed, build only the code which you wish to analyze by specifying your own build steps in a `run` block. You can combine specifying your own build steps with using the `paths` or `paths-ignore` filters on the `pull_request` and `push` events to ensure that your workflow only runs when specific code is changed. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)."

For interpreted languages like Go, JavaScript, Python, and TypeScript, that {% data variables.product.prodname_codeql %} analyzes without a specific build, you can specify additional configuration options to limit the amount of code to analyze. For more information, see "[Specifying directories to scan](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#specifying-directories-to-scan)."

If you split your analysis into multiple workflows as described above, we still recommend that you have at least one workflow which runs on a `schedule` which analyzes all of the code in your repository. Because {% data variables.product.prodname_codeql %} analyzes data flows between components, some complex security behaviors may only be detected on a complete build.

#### Run only during a `schedule` event

If your analysis is still too slow to be run during `push` or `pull_request` events, then you may want to only trigger analysis on the `schedule` event. For more information, see "[Triggering a workflow with events](/actions/configuring-and-managing-workflows/configuring-a-workflow#triggering-a-workflow-with-events)."
