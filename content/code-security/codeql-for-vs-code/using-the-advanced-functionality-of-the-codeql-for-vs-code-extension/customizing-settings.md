---
title: Customizing settings
shortTitle: Customize settings
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can edit the settings for the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension to suit your needs.'
redirect_from:
  - /code-security/codeql-for-vs-code/customizing-settings
---

## About settings in the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension

You can change numerous settings for the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension, including:

- Which version of the {% data variables.product.prodname_codeql_cli %} the extension uses.
- How the extension displays previous queries.
- How the extension runs queries.

## Editing settings

1. Open the "Extensions" view and right-click **{% data variables.product.prodname_codeql %}**, then click **Extension Settings**.

   ![Screenshot of the "Extensions" view, with the right-click menu displayed and "Extension Settings" outlined in dark orange.](/assets/images/help/security/codeql-for-vs-code-extensions-view.png)

1. In the Settings window, edit settings as desired. The new settings are saved automatically.

   ![Screenshot of the CodeQL for VS Code Extension Settings window displayed inside VS Code.](/assets/images/help/security/codeql-for-vs-code-extension-settings.png)

{% note %}

**Note:** Alternatively, you can edit the settings in JSON format by opening the {% data variables.product.prodname_vscode_command_palette_shortname %} and selecting **Preferences: Open User Settings (JSON)**.

{% endnote %}

### Choosing a version of the {% data variables.product.prodname_codeql_cli %}

To override the default behavior and use a specific version of the {% data variables.product.prodname_codeql_cli %}, you can specify the {% data variables.product.prodname_codeql_cli %} "Executable Path" in the extension settings, and point it to your existing copy of the {% data variables.product.prodname_codeql_cli %}. That is, the file named `codeql` (Linux and macOS), or `codeql.exe` (Windows). For more information about the default behavior, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/configuring-access-to-the-codeql-cli)."

### Changing the labels of query history items

The query history "Format" setting controls how the extension lists queries in the query history. By default, each item has a label with the following format:

```bash
QUERY-NAME on DATABASE-NAME - QUERY-STATUS NUMBER-OF-RESULTS [QUERY-RUNTIME]
```

To override the default label, you can specify a different format for the query history items.

### Changing the retention period for query history items

By default, items in the "Query History" view are retained for 30 days. You can set a different time to live (TTL) by changing the "Query History: Ttl" setting. To retain items indefinitely, set the value to 0.

### Configuring settings for running queries locally

There are a number of settings under "Running Queries". For example, if your queries run too slowly and time out frequently, you may want to increase the memory by changing the "Running Queries: Memory" setting.

If you want to examine query performance, enable the "Running Queries: Debug" setting to include timing and tuple counts. This will then be shown in the logs in the {% data variables.product.prodname_codeql %} "Query Server" tab of the "Output" view. The tuple count is useful because it indicates the size of the [predicates](https://codeql.github.com/docs/ql-language-reference/predicates/#predicates) computed by the query.

To save query server logs in a custom location, edit the "Running Queries: Custom Log Directory" setting. If you use a custom log directory, the extension saves the logs permanently, instead of deleting them automatically after each workspace session. This is useful if you want to investigate these logs to improve the performance of your queries.

### Configuring settings for variant analysis

{% ifversion codeql-vs-code-mrva %}

There are a number of settings under "Variant Analysis" that you can use to define or edit lists of {% data variables.product.company_short %} repositories for variant analysis, and change to a different controller repository. For information on the purpose and requirements for a controller repository, see "[AUTOTITLE](/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries-at-scale-with-multi-repository-variant-analysis)."

{% endif %}

You can also edit the items shown in the "Variant Analysis Repositories" view by editing a file in your {% data variables.product.prodname_vscode %} workspace called `databases.json`. This file contains a JSON representation of all the items displayed in the view. To open your `databases.json` file in an editor window, click the **{ }** icon in the top right of the "Variant Analysis Repositories" view. You can then see a structured representation of the repositories, organizations and lists in your view. For example:

```json
{
  "version": 1,
  "databases": {
    "variantAnalysis": {
      "repositoryLists": [
        {
          "name": "My favorite JavaScript repos",
          "repositories": [
            "facebook/react",
            "babel/babel",
            "angular/angular"
          ]
        }
      ],
      "owners": [
        "microsoft"
      ],
      "repositories": [
        "apache/hadoop"
      ]
    }
  },
  "selected": {
    "kind": "variantAnalysisSystemDefinedList",
    "listName": "top_10"
  }
}
```

You can change the items shown in the view or add new items by directly editing this file.

### Configuring settings for adding databases

To automatically add database source folders to your workspace, you can enable the "Adding Databases: Add Database Source to Workspace" setting.

This setting is disabled by default. You may want to enable the setting if you regularly browse the source code of databases (for example, to view the abstract syntax tree of the code). For more information, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/exploring-the-structure-of-your-source-code)."

{% note %}

If you are in a single-folder workspace, adding database source folders will cause the workspace to reload as a multi-root workspace. This may cause query history and database lists to reset.

Before enabling this setting, we recommend that you save your workspace as a multi-root workspace. For more information, see [Multi-root Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces) in the {% data variables.product.prodname_vscode %} documentation.

{% endnote %}

### Configuring settings for testing queries locally

To increase the number of threads used for testing queries, you can update the "Running Tests: Number Of Threads" setting.

To pass additional arguments to the {% data variables.product.prodname_codeql_cli %} when running tests, you can update the "Running Tests: Additional Test Arguments" setting. For more information about the available arguments, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/test-run/)."

### Configuring settings for telemetry and data collection

You can configure whether the {% data variables.product.prodname_codeql %} extension collects telemetry data. This is disabled by default. For more information, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/telemetry-in-codeql-for-visual-studio-code)."

## Further reading

- [User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings) in the {% data variables.product.prodname_vscode %} documentation
