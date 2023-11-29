### Troubleshooting the Simple Browser

When you have started a web application in a codespace, you can preview the running application in the Simple Browser embedded in {% data variables.product.prodname_vscode_shortname %}. In some projects, the application automatically opens in a Simple Browser tab in the editor when the application starts. This happens if, in the `devcontainer.json` configuration file for the codespace, the `onAutoForward` property of the port the application runs on is set to `openPreview`.

```json
"portsAttributes": {
  "3000": {
    "label": "Application",
    "onAutoForward": "openPreview"
  }
}
```

If the Simple Browser tab does not open automatically, you can open the Simple Browser manually to view the application.

1. In {% data variables.product.prodname_vscode_shortname %}, click the **Ports** tab.
1. Right-click the port, then click **Preview in Editor**.

   ![Screenshot of the pop-up menu in the {% data variables.product.prodname_vscode_shortname %} Ports tab. The menu entry "Preview in Editor" is highlighted with a dark orange outline.](/assets/images/help/codespaces/preview-in-editor-vscode.png)

#### The simple browser tab does not open automatically

If the `devcontainer.json` configuration file specifies `"onAutoForward": "openPreview"` for a port, but the Simple Browser does not open automatically when an application starts, check that the application has started on the port specified in the configuration. The application might start on a different port if the intended port is busy.

To implement the port configuration specified in `devcontainer.json`, {% data variables.product.prodname_github_codespaces %} writes the configuration to {% data variables.product.prodname_vscode_shortname %}'s `settings.json` file when a codespace is created. You can check that the configuration has been correctly written to `settings.json` in your codespace.

1. In the terminal in your codespace, enter the following command.

   ```bash copy
   cat ~/.vscode-remote/data/Machine/settings.json
   ```

1. Verify that the `settings.json` file contains lines like the following.

   ```json
    "remote.portsAttributes": {
        "3000": {
            "label": "Application",
            "onAutoForward": "openPreview"
        }
    }
    ```

If the `settings.json` file doesn't contain these settings, check whether you have dotfiles enabled, and whether any configuration in your dotfiles is overwriting the `settings.json` file. For more information, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#dotfiles)."

#### The application does not load

Occasionally, you may find that the Simple Browser tab opens, but displays an error page icon or a blank page instead of your running application. This can happen if the web application you are loading includes a content security policy (CSP) that restricts the domains in which the site's pages may be embedded. For more information, see [CSP: frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) on the mdn website.

You may be able to change your application's `frame-ancestors` security policy locally to make the application display in the Simple Browser. Alternatively, if a `frame-ancestors` policy is causing the problem, you should be able to view the application by opening it in a regular browser tab rather than the simple browser. To do this, click the **Ports** tab in {% data variables.product.prodname_vscode_shortname %}, right-click the port, and click **Open in Browser**.
