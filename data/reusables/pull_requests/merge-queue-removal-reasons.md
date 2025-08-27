There are a number of reasons a pull request can be removed from a merge queue:

* Configured CI service is reporting test failures for a merge group
* Timed out awaiting a successful CI result based off the configured timeout setting
* User requesting a removal via the API or merge queue interface
* Branch protection failure that could not automatically be resolved
