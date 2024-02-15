This workflow performs the following steps:

1. Checks out a copy of project's repository.
1. Sets up the Java JDK.
1. Sets up the Gradle environment. The [`gradle/actions/setup-gradle`](https://github.com/gradle/actions) action takes care of caching state between workflow runs, and provides a detailed summary of all Gradle executions.
