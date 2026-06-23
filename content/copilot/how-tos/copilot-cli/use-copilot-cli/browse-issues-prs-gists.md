---
title: Browsing issues, pull requests, and gists from {% data variables.copilot.copilot_cli %}
shortTitle: Browse issues, PRs, gists
allowTitleToDifferFromFilename: true
intro: 'Use the tabs in an interactive {% data variables.copilot.copilot_cli_short %} session to browse issues, pull requests and gists, without leaving the terminal.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

By default, interactive {% data variables.copilot.copilot_cli_short %} sessions for Git repositories have four tabs at the top of the screen:
* **Session**: The regular chat experience where you enter prompts for {% data variables.product.prodname_copilot_short %}.
* **Issues**: Open issues in the current repository on {% data variables.product.prodname_dotcom %}.
* **Pull requests**: Open pull requests in the current repository on {% data variables.product.prodname_dotcom %}.
* **Gists**: Your gists on {% data variables.product.prodname_dotcom %}.

The **Issues**, **Pull requests**, and **Gists** tabs let you browse content from {% data variables.product.prodname_dotcom_the_website %} without having to switch to a browser. This is useful when you want to:

* **Find an issue or pull request to work on**.
* **Pull an item into your chat** — quickly insert a reference to the selected item into the prompt box so that you can ask {% data variables.product.prodname_copilot_short %} to investigate, fix, comment on, or review it.
* **Jump to an item on {% data variables.product.prodname_dotcom_the_website %}** — for example when you want to comment on an issue, merge a pull request, or edit a gist.

> [!NOTE]
> The **Issues** and **Pull requests** tabs are only shown when {% data variables.copilot.copilot_cli_short %} is running inside a {% data variables.product.prodname_dotcom %} repository. In other directories, only the **Session** and **Gists** tabs are shown.

## Switching between tabs

* Press <kbd>Tab</kbd> to move to the next tab.
* Press <kbd>Shift</kbd>+<kbd>Tab</kbd> to move to the previous tab.
* Use the mouse to click on a tab to switch to it.

> [!NOTE]
> Clicking tabs requires mouse support. This is enabled by default but can be disabled with the `--no-mouse` command-line option. Use the `--mouse=on` option to re-enable mouse support if it has been disabled.

Tab switching is paused while another part of the CLI—such as the slash command picker—is observing your keystrokes.

## Common keyboard controls

The **Issues**, **Pull requests**, and **Gists** tabs all use the same controls. Regardless of which of these tabs you're on:

* Use the up and down arrow keys to highlight an item in the list.
* Use the left and right arrow keys to navigate between pages in a list.
* Press <kbd>Enter</kbd> to display a detailed view of the highlighted item. Press <kbd>Esc</kbd> in the details view to return to the list.
* Press <kbd>o</kbd> to open the highlighted item (or, in the detailed view, the current item) on {% data variables.product.prodname_dotcom_the_website %}.
* Press <kbd>c</kbd> to insert a reference to the item into the prompt input area and jump back to the **Session** tab.
* Press <kbd>/</kbd> (on the **Issues** and **Pull requests** tabs) to search {% data variables.product.prodname_dotcom %} with a custom query. Type a query, press <kbd>Enter</kbd> to run it, and <kbd>Esc</kbd> to cancel or clear it.

For the full set of keypresses you can use, see [Keyboard reference](#keyboard-reference) at the end of this article.

## Browsing issues

The **Issues** tab lists the **open** issues in the current repository that involve you—issues you authored, were assigned, were mentioned in, or commented on. Each row shows the issue title, the issue number, the author, and how long ago the issue was opened.

The {% data variables.product.prodname_dotcom %} search query used to populate the list is shown above it. Press <kbd>a</kbd> to toggle between showing only issues that involve you and showing every open issue in the repository.

Pressing <kbd>c</kbd> inserts a reference to the issue into the prompt box on the **Session** tab. You can then enter a prompt that relates to this issue. For example:

```copilot
#1234 suggest a fix for this bug
```

## Browsing pull requests

The **Pull requests** tab lists the **open** pull requests in the current repository that involve you—pull requests you authored, were assigned, were mentioned in, were asked to review, or commented on. Each row shows the pull request title, number, author, and how long ago the pull request was opened.

The {% data variables.product.prodname_dotcom %} search query used to populate the list is shown above it. Press <kbd>a</kbd> to toggle between showing only pull requests that involve you and showing every open pull request in the repository.

Pressing <kbd>c</kbd> inserts a reference to the pull request into the prompt box on the **Session** tab. You can then enter a prompt that relates to this pull request. For example:

```copilot
#5678 check this out and run tests
```

## Searching issues and pull requests

By default, the **Issues** and **Pull requests** tabs show items that involve you. Press <kbd>a</kbd> to toggle between this (`involves:@me`) and all open items.

To run your own search, press <kbd>/</kbd>. An inline search box opens where you can type a {% data variables.product.prodname_dotcom %} search query, then press <kbd>Enter</kbd> to run it.

Press <kbd>Esc</kbd> to cancel while typing, or to clear an applied search and return to the default list.

You can use the same set of search qualifiers that are available on {% data variables.product.prodname_dotcom_the_website %}. See [AUTOTITLE](/search-github/searching-on-github/searching-issues-and-pull-requests).

## Browsing your gists

The **Gists** tab lists the gists owned by the {% data variables.product.prodname_dotcom %} account you are signed in to. Both public and secret gists are shown. Unlike the **Issues** and **Pull requests** tabs, the **Gists** tab is not scoped to a repository—it is always available, regardless of where you started the CLI.

Pressing <kbd>c</kbd> inserts the gist's URL into the prompt box on the **Session** tab. You can then enter a prompt that relates to this gist. For example:

```copilot
https://gist.github.com/USERNAME/GIST-ID summarize this
```

## Modifying issues, pull requests, and gists

The **Issues**, **Pull requests**, and **Gists** tabs are read-only environments. There are two ways you can work on an item you find in one of these tabs:

* **Press <kbd>o</kbd> to open it on {% data variables.product.prodname_dotcom_the_website %}** and use the web UI to modify the item.
* **Press <kbd>c</kbd> to drop a reference into the prompt box** and ask {% data variables.product.prodname_copilot_short %} to perform the activity for you. For example:

  ```copilot
  #1234 add a comment: "Any update on this?"
  ```

  ```copilot
  #5678 merge this
  ```

  ```copilot
  https://gist.github.com/USERNAME/GIST-ID delete this
  ```

## Customizing the tabs

You can reorder, hide, or turn off the tabs in your settings file (`~/.copilot/settings.json`) using the `tabs` object:

```json copy
{
    "tabs": {
        "enabled": true,
        "sort": ["copilot", "pull-requests", "issues", "gists"],
        "hide": ["gists"]
    }
}
```

* `enabled`: set to `false` to turn off the tabbed interface entirely.
* `sort`: the order in which tabs appear. Use the identifiers `copilot` (the **Session** tab), `issues`, `pull-requests`, and `gists`. Any tabs you omit keep their default order after the ones you list. Unknown identifiers are ignored.
* `hide`: tabs to hide, using the same identifiers. The **Session** tab (`copilot`) cannot be hidden.

## Keyboard reference

The footer hint bar in the **Issues**, **Pull requests**, and **Gists** tabs summarizes the available keys:

| Key | Where | Action |
| --- | --- | --- |
| <kbd>Tab</kbd> / <kbd>Shift</kbd>+<kbd>Tab</kbd> | Any home tab | Switch to the next or previous home tab. |
| <kbd>↓</kbd> / <kbd>↑</kbd><br><kbd>j</kbd> / <kbd>k</kbd> | List view | Highlight the next or previous item in a list. |
| <kbd>→</kbd> / <kbd>←</kbd><br><kbd>l</kbd> / <kbd>h</kbd> | List view | Display the next or previous page in a multi-page list. |
| <kbd>Enter</kbd> | List view | Open the details view for the highlighted item. |
| <kbd>o</kbd> | List view or details view | Open the highlighted item on {% data variables.product.prodname_dotcom_the_website %} in your browser. |
| <kbd>c</kbd> | List view or details view | Insert a reference to the item into the prompt input area and jump back to the **Session** tab. |
| <kbd>a</kbd> | List view on **Issues** and **Pull requests** tabs | Toggle between showing only items that involve you and showing every open item in the repository. |
| <kbd>/</kbd> | List view on **Issues** and **Pull requests** tabs | Open a search box. |
| <kbd>Enter</kbd> | Search box | Run the search query. |
| <kbd>Esc</kbd> | Search box / applied search | Cancel the search box, or dismiss the search results. |
| <kbd>Esc</kbd> | Details view | Return to the list view. |
