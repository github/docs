You can use {% data variables.copilot.subagents_short %} to delegate tasks to an isolated agent with its own context window within your chat session. The {% data variables.copilot.subagent_short %} operates independently without pausing for user feedback and returns the final result to the main chat session. 

{% data variables.copilot.subagents_caps_short %} are best suited for situations where:
* You want to delegate complex, multi-step tasks like research or analysis without interrupting your main session.
* You need to process large amounts of information or multiple documents that would clutter your primary context window.
* You want to explore different approaches or perspectives independently without mixing contexts together.

{% data variables.copilot.subagents_caps_short %} use the same tools and AI model as the main session, but they cannot create other {% data variables.copilot.subagents_short %}. 