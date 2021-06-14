### Resolving conversations

You can resolve a conversation in a pull request if you opened the pull request or if you have write access to the repository where the pull request was opened.

To indicate that a conversation on the **Files changed** tab is complete, click **Resolve conversation**.

![Pull request conversation with Resolve conversation button](/assets/images/help/pull_requests/conversation-with-resolve-button.png)

The entire conversation will be collapsed and marked as resolved, making it easier to find conversations that still need to be addressed.

![Resolved conversation](/assets/images/help/pull_requests/resolved-conversation.png)

If the suggestion in a comment is out of your pull request's scope, you can open a new issue that tracks the feedback and links back to the original comment. For more information, see "[Opening an issue from a comment](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
#### Discovering and navigating conversations

You can discover and navigate to all the conversations in your pull request using the **Conversations** menu that's shown at the top of the **Files Changed** tab.

From this view, you can see which conversations are unresolved, resolved, and outdated. This makes it easy to discover and resolve conversations.

![Showing the conversations menu](/assets/images/help/pull_requests/conversations-menu.png)
{% endif %}
