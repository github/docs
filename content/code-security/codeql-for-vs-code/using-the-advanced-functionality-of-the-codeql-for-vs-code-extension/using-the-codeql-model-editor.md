---
title: Using the CodeQL model editor
shortTitle: CodeQL model editor
versions:
  feature: 'codeql-model-packs'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can view, write, and edit {% data variables.product.prodname_codeql %} model packs in {% data variables.product.prodname_vscode %}.'
redirect_from:
  - /code-security/codeql-for-vs-code/using-the-codeql-model-editor
---

{% data reusables.code-scanning.beta-model-packs %}

## About the {% data variables.product.prodname_codeql %} model editor

With {% data variables.product.prodname_codeql %} model packs, you can expand your {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} analysis to recognize custom libraries and frameworks used by your codebase that are not supported by default. With the {% data variables.product.prodname_codeql %} model editor, you can create your own model packs. The model editor guides you through modeling the calls to external dependencies in your application, or fully modeling all the public entry and exit points in an external dependency.

For more information about customizing {% data variables.product.prodname_code_scanning %} analysis with model packs, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup#extending-codeql-coverage-with-codeql-model-packs-in-default-setup)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#extending-codeql-coverage-with-codeql-model-packs)."

When you open the model editor, it analyzes the currently selected {% data variables.product.prodname_codeql %} database and identifies where the application uses external APIs and all public methods. An external (or third-party) API is any API that is not part of the {% data variables.product.prodname_codeql %} database you have selected.

The model editor has two different modes:

* **Application mode** (default view): The editor lists each external framework used by the selected {% data variables.product.prodname_codeql %} database. When you expand a framework, a list of all calls to and from the external API is shown with the options available to model dataflow through each call. This mode is most useful for improving the {% data variables.product.prodname_codeql %} results for a specific codebase.

* **Dependency mode**: The editor identifies all of the publicly accessible APIs in the selected {% data variables.product.prodname_codeql %} database. This view guides you through modeling each public API that the codebase makes available. When you have finished modeling the entire API, you can save the model and use it to improve the {% data variables.product.prodname_codeql %} analysis for all codebases that use the dependency.

The rest of this article covers the practical aspects of modelling dependencies using the {% data variables.product.prodname_codeql %} model editor. For technical information, see [Customizing library models for Java and Kotlin](https://codeql.github.com/docs/codeql-language-guides/customizing-library-models-for-java-and-kotlin/){% ifversion fpt or ghec or ghes > 3.14 %}, [Customizing Library Models for Python](https://codeql.github.com/docs/codeql-language-guides/customizing-library-models-for-python/), [Customizing Library Models for Ruby](https://codeql.github.com/docs/codeql-language-guides/customizing-library-models-for-ruby/), and [Customizing library models for C#](https://codeql.github.com/docs/codeql-language-guides/customizing-library-models-for-csharp/){% elsif ghes > 3.12 %}, [Customizing Library Models for Ruby](https://codeql.github.com/docs/codeql-language-guides/customizing-library-models-for-ruby/), and [Customizing library models for C#](https://codeql.github.com/docs/codeql-language-guides/customizing-library-models-for-csharp/){% endif %} in the {% data variables.product.prodname_codeql %} language documentation.

## Displaying the {% data variables.product.prodname_codeql %} model editor

{% note %}

**Note:** To use this beta functionality, install the latest version of the {% data variables.product.prodname_codeql %} extension for {% data variables.product.prodname_vscode %}.

{% endnote %}

1. Open your {% data variables.product.prodname_codeql %} workspace in {% data variables.product.prodname_vscode_shortname %}. For example, the [`vscode-codeql-starter` workspace](https://github.com/github/vscode-codeql-starter). If you are using the starter workspace, update the `ql` submodule from `main` to ensure that you have the queries used to gather data for the model editor.

1. In {% data variables.product.prodname_vscode %}, click **QL** in the left sidebar to display the {% data variables.product.prodname_codeql %} extension.

1. In the "Databases" view, select the {% data variables.product.prodname_codeql %} database that you want to model from.

1. In the {% data variables.product.prodname_codeql %} "Method Modeling" view, click **Start modeling** to display the model editor. Alternatively, use the {% data variables.product.prodname_vscode_command_palette_shortname %} to run the **{% data variables.product.prodname_codeql %}: Open Model Editor (Beta)** command.

1. The {% data variables.product.prodname_codeql %} model editor runs a series of telemetry queries to identify APIs in the code, and the editor is displayed in a new tab.

1. When the telemetry queries are complete, the APIs that have been identified are shown in the editor.

{% tip %}

**Tip:** You can move the {% data variables.product.prodname_codeql %} "Method Modeling" view from the primary sidebar to the secondary sidebar, if you want more space while you are modeling calls or methods. If you close the view, you can reopen it from the "View" menu in {% data variables.product.prodname_vscode_shortname %} and clicking **Open View...**.

{% endtip %}

## Modeling the calls your codebase makes to external APIs

You typically use this approach when you are looking at a specific codebase where you want to improve the precision of {% data variables.product.prodname_codeql %} results. This is useful when the codebase uses frameworks or libraries that are not supported by {% data variables.product.prodname_codeql %}, and if the source code of the framework or library is not included in the analysis.

This section uses an open source Java project called "sofa-jraft" as an example. The experience of modeling calls to external APIs written in other compiled languages is similar.

1. In {% data variables.product.prodname_vscode %}, select the {% data variables.product.prodname_codeql %} database that you want to improve {% data variables.product.prodname_codeql %} coverage for.

1. Display the {% data variables.product.prodname_codeql %} model editor. By default the editor runs in application mode, so the list of external APIs used by the selected codebase is shown.

    ![Screenshot of the "Application mode" view of the CodeQL model pack editor in Visual Studio Code showing two of the external Java frameworks used by the "sofa-jraft" codebase.](/assets/images/help/security/codeql-for-vs-code-model-application-mode.png)

1. Click to expand an external API and view the list of calls from the codebase to the external dependency.

    ![Screenshot of the "Application mode" view of the CodeQL model pack editor in Visual Studio Code showing the calls to the "rocksdbjni" framework ready for modeling. The "View" option for the first call is highlighted with a dark orange outline.](/assets/images/help/security/codeql-for-vs-code-model-application-mode-expanded.png)

1. Click **View** associated with an API call or method to show where it is used in your codebase.

1. The file containing the first call from your codebase to the API is opened, and a {% data variables.product.prodname_codeql %} "Methods Usage" view is displayed in {% data variables.product.prodname_vscode_shortname %} (where the "Problems" and "Terminal" views are usually displayed). The {% data variables.product.prodname_codeql %} "Methods Usage" view lists of all the calls from your code to the API, grouped by method. You can click through each use to decide how to model your use of the method.

1. When you have determined how to model your use of the method, you can select a different model type. Click the dropdown under "Model Type" in the {% data variables.product.prodname_codeql %} "Method Modeling" view of the {% data variables.product.prodname_codeql %} extension. This change is automatically reflected in the main model editor.

1. The remaining fields in that row are updated with the options available for the chosen model type:

   * "Source": choose the "Output" element to model.
   * "Sink": choose the "Input" element to model.
   * "Flow summary": choose the "Input" and "Output" elements to model.

1. Define the "Kind" of dataflow for the model.

1. When you have finished modeling, display the main model editor and click **Save all** or **Save** (shown at the bottom-right of each expanded list of methods). The percentage of methods modeled in the editor is updated.

The models are stored in your workspace at `.github/codeql/extensions/CODEQL-MODEl-PACK`, where `CODEQL-MODEL-PACK` is the name of the {% data variables.product.prodname_codeql %} database that you selected. That is, the name of the repository, hyphen, the language analyzed by {% data variables.product.prodname_codeql %}. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#creating-a-codeql-model-pack)."

The models are stored in a series of YAML data extension files, one for each external API. For example:

```yaml
.github/codeql/extensions/sofa-jraft-java # the model pack directory
    models
        jmh-core.model.yml                  # models calls to jmh-core@1.20
        rocksdbjni.model.yml                # models calls to rocksdbjni@7.7.3
```

## Modeling the public API of a codebase

You typically use this method when you want to model a framework or library that your organization uses in more than one codebase. Once you have finished creating and testing the model, you can publish the {% data variables.product.prodname_codeql %} model pack to the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %} for your whole organization to use.

This section uses an open source Java project called "sofa-jraft" as an example. The experience of modeling calls to external APIs written in other compiled languages is similar.

1. Select the {% data variables.product.prodname_codeql %} database that you want to model.

1. Display the {% data variables.product.prodname_codeql %} model editor. By default the editor runs in application mode. Click **Model as dependency** to display dependency mode. The screen changes to show the public API of the framework or library.

    ![Screenshot of the "Dependency mode" view of the CodeQL model pack editor in Visual Studio Code showing three of the packages published by the "sofa-jraft" codebase.](/assets/images/help/security/codeql-for-vs-code-model-dependency-mode.png)

1. Click to expand a package and view the list of available methods.

1. Click **View** associated with a method to show its definition.

    ![Screenshot of the "Dependency mode" view of the CodeQL model pack editor in Visual Studio Code showing one model for the "com.alipay.sofa.jraft.option.BallotBoxOptions.getClosureQueue()" method. The "+" button is outlined in dark orange. Click this button to create a second model for the method.](/assets/images/help/security/codeql-for-vs-code-model-dependency-mode-expanded.png)

1. When you have determined how to model the method, define the "Model type".

1. The remaining fields in that row are updated with the options available for the chosen model type:

   * "Source": choose the "Output" element to model.
   * "Sink": choose the "Input" element to model.
   * "Flow summary": choose the "Input" and "Output" elements to model.

1. Define the "Kind" of dataflow for the model.

1. When you have finished modeling, click **Save all** or **Save** (shown at the bottom-right of each expanded list of calls). The percentage of calls modeled in the editor is updated.

The models are stored in your workspace at `.github/codeql/extensions/CODEQL-MODEL-PACK`, where `CODEQL-MODEL-PACK` is the name of the {% data variables.product.prodname_codeql %} database that you selected. That is, the name of the repository, hyphen, the language analyzed by {% data variables.product.prodname_codeql %}. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#creating-a-codeql-model-pack)."

The models are stored in a series of YAML data extension files, one for each public method. For example:

```yaml
.github/codeql/extensions/sofa-jraft-java          # the model pack directory
    models
        com.alipay.sofa.jraft.option.model.yml # models public methods in package
        com.alipay.sofa.jraft.rhea.options.model.yml
```

The editor will create a separate model file for each package that you model.

## Modeling methods with multiple potential flows

Some methods support more than one data flow. It is important to model all the data flows for a method, otherwise you cannot detect all the potential problems associated with using the method. First you model one data flow for the method, and then use the **+** button in the method row to specify a second data flow model.

![Screenshot of the "Dependency mode" view of the CodeQL model pack editor in Visual Studio Code showing the public methods available in the "com.alipay.soft.jraft.option" package ready for modeling. The "View" option for the first method is highlighted with a dark orange outline.](/assets/images/help/security/codeql-for-vs-code-model-dependency-mode-plus.png)

## Testing {% data variables.product.prodname_codeql %} model packs in {% data variables.product.prodname_vscode_shortname %}

You can test any {% data variables.product.prodname_codeql %} model packs you create in {% data variables.product.prodname_vscode_shortname %} with the "Running Queries: Use Extension Packs" setting. For more information, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/customizing-settings)." This method works for both databases and for variant analysis repositories.

* To run queries on a {% data variables.product.prodname_codeql %} database with any model packs that are stored within the `.github/codeql/extensions` directory of the workspace, update your `settings.json` file with: `"codeQL.runningQueries.useExtensionPacks": "all",`

* To run queries on a {% data variables.product.prodname_codeql %} database without using model packs, update your `settings.json` file with: `"codeQL.runningQueries.useExtensionPacks": "none",`

If your model is working well, you should see a difference in the results of the two different runs. If you don't see any differences in results, you may need to introduce a known bug to verify that the model behaves as expected.

## Further reading

* [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup#extending-codeql-coverage-with-codeql-model-packs-in-default-setup)
* [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#extending-codeql-coverage-with-codeql-model-packs)
[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs#using-model-packs-to-analyze-calls-to-custom-dependencies).
