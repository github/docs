---
title: 'Error: "No source code was seen during the build"'
shortTitle: 'No source code seen during build'
intro: 'When {% data variables.product.prodname_codeql %} fails to find any source code, you need to resolve this problem to unblock {% data variables.product.prodname_code_scanning %} analysis.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

<!-- CodeQL CLI depends on a short URL generated from this article's URL. If this article's URL ever changes, make sure to update the short URL https://gh.io/troubleshooting-code-scanning/no-source-code-seen-during-build. https://thehub.github.com/it/how-to/url-shortening -->

If your workflow fails with `Error: "No source code was seen during the build"` or `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`, this indicates that {% data variables.product.prodname_codeql %} was unable to monitor your code. There are six possible reasons for this:

1. _No supported languages:_ The repository may not contain source code that is written in languages supported by {% data variables.product.prodname_codeql %}. Check the list of supported languages and, if this is the case, remove the {% data variables.product.prodname_codeql %} workflow. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql)."

1. _No analyzable code of the detected languages:_ Automatic language detection identified a supported language, but there is no analyzable code of that language in the repository. A typical example is when our language detection service finds a file associated with a particular programming language like a `.h`, or `.gyp` file, but no corresponding executable code is present in the repository. To solve the problem, you can manually define the languages you want to analyze by updating the list of languages in the `language` matrix. For example, the following configuration will analyze only Go, and JavaScript.

   ```yaml
   strategy:
     fail-fast: false
     matrix:
       # Override automatic language detection by changing the list below.
       # Supported options are listed in a comment in the default workflow.
       language: ['go', {% ifversion codeql-language-identifiers-311 %}'javascript-typescript'{% else %}'javascript' {% endif %}]
   ```

   For more information, see the workflow extract in "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/some-languages-were-not-analyzed)".

1. _Compilation of a compiled language failed:_ Your {% data variables.product.prodname_code_scanning %} workflow tries to compile a compiled language (C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} or Java), but the code was not compiled. {% ifversion codeql-no-build %}When a workflow specifies `build-mode: autobuild` for a language or contains an `autobuild` step,{% elsif ghes %}By default, the {% data variables.product.prodname_codeql %} analysis workflow contains an `autobuild` step and{% endif %} {% data variables.product.prodname_codeql %} makes a best effort to detect a suitable build method and build your code. The `autobuild` process may not succeed in building your code, depending on your specific build environment. Compilation may also fail if you have removed the `autobuild` step and did not include build steps manually.  For more information about defining build steps, see {% ifversion codeql-no-build %}"[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#using-build-mode-manual-and-specifying-build-steps){% elsif ghes %}"[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#adding-build-steps-for-a-compiled-language){% endif %}."

1. _Cached components not detected:_ Your workflow builds a compiled language (C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} or Java) to create a {% data variables.product.prodname_codeql %} database for analysis, but portions of your build are cached to improve performance (most likely to occur with build systems like Gradle or Bazel). Since {% data variables.product.prodname_codeql %} observes the activity of the compiler to understand the data flows in a repository, {% data variables.product.prodname_codeql %} requires a complete build to take place in order to perform analysis.

1. _Compilation outside `init` and `analyze` steps:_ Your workflow builds a compiled language (C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} or Java), but compilation does not occur between the `init` and `analyze` steps in the workflow. {% data variables.product.prodname_codeql %} requires that your build happens in between these two steps in order to observe the activity of the compiler and perform analysis.

1. _Compilation not detected by {% data variables.product.prodname_codeql %}:_ Your compiled code (in C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} or Java) was compiled successfully, but {% data variables.product.prodname_codeql %} was unable to detect the compiler invocations. The most common causes are:

   * Running your build process in a separate container to {% data variables.product.prodname_codeql %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/running-codeql-code-scanning-in-a-container)."
   * Building using a distributed build system external to GitHub Actions, using a daemon process.
   * {% data variables.product.prodname_codeql %} isn't aware of the specific compiler you are using.

  If you encounter another problem with your specific compiler or configuration, contact {% data variables.contact.contact_support %}.

For more information about specifying build steps, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#adding-build-steps-for-a-compiled-language)."
