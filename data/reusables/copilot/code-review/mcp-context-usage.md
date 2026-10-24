{% data variables.copilot.copilot_code-review_short %} is more likely to use this context when:

* Agent skills directories have review-focused names and descriptions, such as `code-review`, that indicate they are intended for pull request review.
* Your agent skills or custom instructions explicitly tell {% data variables.copilot.copilot_code-review_short %} to use specific MCP context.
* Pull request descriptions reference items available through configured MCP servers, such as issue keys or incident IDs.

To verify which MCP context {% data variables.copilot.copilot_code-review_short %} used for a specific review, check if there are attributions at the bottom of each review comment. These attributions reference the specific agent skill or MCP server that {% data variables.copilot.copilot_code-review_short %} used to generate that comment. You can also open the linked review session from the pull request timeline, then check the session logs to see which MCP servers and tools were called.
