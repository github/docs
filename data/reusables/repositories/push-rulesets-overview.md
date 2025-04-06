With push rulesets, you can block pushes to a private or internal repository and that repository's entire fork network based on file extensions, file path lengths, file and folder paths, and file sizes.

Push rules do not require any branch targeting because they apply to every push to the repository.

Push rulesets allow you to:

* **Restrict file paths**: Prevent commits that include changes in specified file paths from being pushed.

  {% data reusables.repositories.rulesets-push-rules-path-example %}
* **Restrict file path length**: Prevent commits that include file paths that exceed a specified character limit from being pushed.
* **Restrict file extensions**: Prevent commits that include files with specified file extensions from being pushed.
* **Restrict file size**: Prevent commits that exceed a specified file size limit from being pushed.

#### About push rulesets for forked repositories

{% data reusables.repositories.rulesets-push-rulesets-fork-network-information %}
