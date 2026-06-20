{% data variables.copilot.copilot_code-review_short %} is more likely to use this context when:

* Agent skills directories have review-focused names and descriptions, such as `code-review`, that indicate they are intended for pull request review.
* Your agent skills or custom instructions explicitly tell {% data variables.copilot.copilot_code-review_short %} to use specific MCP context.
* Pull request descriptions reference items available through configured MCP servers, such as issue keys or incident IDs.

To verify which MCP context {% data variables.copilot.copilot_code-review_short %} used for a specific review, open the linked review session from the pull request timeline, then check the session logs to see which MCP servers and tools were called.