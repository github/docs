---
title: Scripting with the REST API and .NET
shortTitle: Script with .NET
intro: Learn how to write a script using the .NET Octokit SDK to interact with the REST API.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - .NET
type: tutorial
---

## Introduction

In this tutorial, we will guide you on how to use the .NET Octokit SDK to interact with the REST API of {% data variables.product.company_short %}. The Octokit SDK simplifies the process of making API requests in .NET applications. This SDK is compatible with all modern .NET platforms, including .NET Core and .NET 5.

## Prerequisites

Before we get started, make sure you have the following prerequisites:

- Basic knowledge of C# and .NET
- Access to {% data variables.product.company_short %}'s REST API
- Visual Studio or another .NET development environment

## Installation

To begin using the .NET Octokit SDK, you'll need to install the Octokit NuGet package. You can install it using the Package Manager Console or via the NuGet Package Manager in Visual Studio.

```powershell
Install-Package Octokit
```

## Authenticating

### Personal Access Token (PAT) Authentication

If you want to use the {% data variables.product.company_short %} REST API for personal use, you can authenticate using a Personal Access Token (PAT). Here's how you can do it in C#:

```csharp
using Octokit;

var client = new GitHubClient(new ProductHeaderValue("YourAppName"))
{
    Credentials = new Credentials("YOUR-PAT")
};
```

### GitHub App Authentication

For authentication on behalf of an organization or another user, you can use a GitHub App. Here's how you can authenticate using a GitHub App:

```csharp
using Octokit;

var app = new GitHubApp("YOUR-APP-ID", "YOUR-PRIVATE-KEY");
var installationId = YOUR-INSTALLATION-ID;

var token = app.CreateInstallationToken(installationId);
var client = new GitHubClient(new ProductHeaderValue("YourAppName"))
{
    Credentials = new Credentials(token.Token)
};
```

### Using GitHub Actions

If you're running your script in a GitHub Actions workflow, you can authenticate using the built-in `GITHUB_TOKEN`. Here's an example of how to do it:

```csharp
using Octokit;

var client = new GitHubClient(new ProductHeaderValue("YourAppName"))
{
    Credentials = new Credentials(Environment.GetEnvironmentVariable("GITHUB_TOKEN"))
};
```

## Making Requests

The .NET Octokit SDK supports various ways to make requests, including using the `RepositoriesClient` and `IssuesClient` classes. Here's a simple example of how to get information about a repository:

```csharp
using Octokit;

var client = new GitHubClient(new ProductHeaderValue("YourAppName"))
{
    Credentials = new Credentials("YOUR-PAT")
};

var repository = await client.Repository.Get("owner", "repo");
Console.WriteLine($"Repository Name: {repository.Name}");
```

For more advanced use cases, you can explore the various methods provided by the Octokit SDK.

## Error Handling

It's essential to handle errors when working with the {% data variables.product.company_short %} REST API. You can catch and handle errors using try-catch blocks. Here's an example of how to handle errors when making API requests:

```csharp
using Octokit;

try
{
    var issue = await client.Issue.Get("owner", "repo", 123);
    Console.WriteLine($"Issue Title: {issue.Title}");
}
catch (NotFoundException)
{
    Console.WriteLine("Issue not found");
}
catch (RateLimitExceededException)
{
    Console.WriteLine("Rate limit exceeded. Please wait and retry later.");
}
catch (Exception ex)
{
    Console.WriteLine($"An error occurred: {ex.Message}");
}
```

## Conclusion

In this tutorial, you've learned how to script with the .NET Octokit SDK to interact with the {% data variables.product.company_short %} REST API. You've also seen how to handle authentication, make requests, and handle errors. You can now apply these techniques to build powerful applications that interact with {% data variables.product.company_short %}'s platform.

For more details and advanced features, refer to the [Octokit GitHub repository](https://github.com/octokit/octokit.net) and the [official documentation](https://octokitnet.readthedocs.io/en/latest/).
