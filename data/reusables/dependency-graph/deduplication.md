Dependency graph can learn about dependencies in three different ways: static analysis, automatic submission, and manual submission. A repository can have multiple methods configured, which can cause the same package manifest to be scanned multiple times, potentially with different outputs from each scan. Dependency graph uses deduplication logic to parse the outputs, prioritizing the most accurate information for each manifest file.

Dependency graph displays only one instance of each manifest file using the following precedence rules.

1. **User submissions** take the highest priority, because they are usually created during artifact builds they have the most complete information.
   * If there are multiple manual snapshots from different detectors, they are sorted alphabetically by correlator and the first one used.
   * If there are two correlators with the same detector, the resolved dependencies are merged. For more information about correlators and detectors, see [AUTOTITLE](/rest/dependency-graph/dependency-submission).
1. **Automatic submissions** have the second-highest priority since they are also created during artifact builds, but are not submitted by users.
1. **Static analysis results** are used when no other data is available.
