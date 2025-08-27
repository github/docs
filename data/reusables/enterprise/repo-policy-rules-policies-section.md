Choose which restrictions are included. When the policy is active, the restrictions apply across all targeted repositories, but can be bypassed by users or teams on the allow list.

If you choose the "Restrict names" policy, you must use **regular expression** syntax to set a pattern that repository names must or must not match. For example, a pattern to enforce `kebab-case` naming would look like `^([a-z][a-z0-9]*)(-[a-z0-9]+)*$`.
* Patterns support RE2 syntax. See Google's [syntax guide](https://github.com/google/re2/wiki/Syntax).
* To validate your expressions, click **Test pattern**, then enter a pattern and test value.
