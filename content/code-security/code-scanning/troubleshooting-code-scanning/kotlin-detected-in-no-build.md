---
title: 'Warning: Detected X Kotlin files in your project that could not be processed without a build'
shortTitle: Kotlin detected in no build
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_codeql %} databases can be created for Java without building the code, but Kotlin files are excluded unless the code is built.'
versions:
  feature: codeql-no-build
---

## About this warning

```text
Warning: Detected X Kotlin files in your project that could not be processed without a build. To process these files...
```

This warning is reported when Kotlin files are detected in a repository that ran {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for Java using the build mode of `none` (default setup), or if you run the {% data variables.product.prodname_codeql_cli %} using `--build-mode none` for a repository containing Java and Kotlin files.

## Confirming the cause of the warning

This warning is only displayed when the build mode of `none` is used for a repository with both Java and Kotlin files.

The {% data variables.product.prodname_codeql %} action and {% data variables.product.prodname_codeql_cli %} support a build mode of `none` for Java. This provides an easy way to enable analysis for Java code without building the codebase. However, Kotlin files are not included in the resulting {% data variables.product.prodname_codeql %} database.

You can verify the presence of Kotlin files by looking at the repository or pull request that triggered the warning. The `none` build mode is used only in the following circumstances:

* {% data variables.product.prodname_code_scanning_caps %} was enabled for the repository before Kotlin code was added and after the new mode was introduced (previously it would have used the `autobuild` mode).
* The {% data variables.product.prodname_codeql %} workflow specifies a build mode of `none` for the repository (check for `build-mode: none`).
* The {% data variables.product.prodname_codeql_cli %} is called without a `--command` and with `--build-mode none`.

## Fixing the problem

You may not want to analyze the Kotlin files, in which case you can ignore the warning message.

If you want to update the analysis to also include Kotlin files, then {% data variables.product.prodname_codeql %} will need to build the Java and Kotlin code.

### {% data variables.product.prodname_code_scanning_caps %} default setup

1. Wait until the Kotlin code is merged into the default branch for the repository.
1. Disable and then re-enable default setup on the "Settings" page for your repository.

This will trigger a new analysis using automatic build detection. See "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)" and "[Building Java and Kotlin](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#building-java-and-kotlin)."

If the automatic build detection fails, you will need to use advanced setup with the correct build commands for the project to analyze both languages.

### {% data variables.product.prodname_code_scanning_caps %} advanced setup

If you already use advanced setup, you can edit the {% data variables.product.prodname_codeql %} workflow and change the build mode for `java-kotlin` from `none` to either `autobuild` to automatically build your project, or `manual` to specify your own build steps. "[Building Java and Kotlin](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#building-java-and-kotlin)."

If you need to convert from default setup to advanced setup, you need enable advanced setup on the on the "Settings" page for your repository and create a {% data variables.product.prodname_codeql %} workflow. Then you can define a `manual` build mode for `java-kotlin` and define the build commands for the project.

### Running the {% data variables.product.prodname_codeql_cli %} directly

Update your calls to run the {% data variables.product.prodname_codeql_cli %} for the repository and pull requests to replace `--build-mode none` by `--build-mode autobuild` to try the automatic build detection. If automatic build detection is unsuccessful, remove the `--build-mode` option and include one or more `--command` options detailing the build script or steps required to build the project.

## Further reading

* "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning)"
* "[Building Java and Kotlin](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#building-java-and-kotlin){% ifversion codeql-no-build %}
* "[CodeQL build modes](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#codeql-build-modes)"{% elsif ghes %}
* "[Adding build steps for a compiled language](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#adding-build-steps-for-a-compiled-language)"{% endif %}
