If `autobuild` fails, or you want to analyze a different set of source files from those built by the `autobuild` process, you'll need to do the following:

* If your workflow specifies a build mode for the language, change the build mode to `manual`.
* If your workflow contains an `autobuild` step, remove or comment out the `autobuild` step in the workflow.

 Then uncomment the `run` step and manually specify the build process to use. For {% data variables.code-scanning.manual_build_support %}, {% data variables.product.prodname_codeql %} will analyze whatever source code is built by your specified build steps.
