---
title: Scripting with the REST API and .NET
shortTitle: Script with .NET
intro: Learn how to write a script using the Octokit.NET SDK to interact with the REST API.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
type: tutorial
---

## About Octokit.js

If you want to write a script using .NET to interact with a .NET product's REST API, it's recommended to use the Octokit.Net SDK, which is a .NET library for interacting with {% data variables.product.company_short %}'s REST API. The Octokit.NET SDK implements best practices and makes it easier for you to interact with the REST API via .NET. It's well-suited for working with {% data variables.product.company_short %}'s API but can be adapted for other REST APIs as well.

## Prerequisites

This guide assumes that you are familiar with .NET development and the REST API of {% data variables.product.company_short %}. For more information about the REST API, refer to {% data variables.product.company_short %}'s official API documentation.

You must install the Octokit.NET package and import relevant namespaces to use the Octokit.NET SDK in your script. You can install Octokit.NET via NuGet or your preferred package manager. For more information, see the official documentation for Octokit.NET.

## Installation

To begin using the .NET Octokit SDK, you'll need to install the Octokit NuGet package. You can install it using the Package Manager Console or via the NuGet Package Manager in Visual Studio.

```powershell
Install-Package Octokit
```

## Instantiating and authenticating

{% warning %}

**Warning**: Treat your authentication credentials like a password.

To keep your credentials secure, you can store your credentials as a secret in {% data variables.product.prodname_actions %} and run your script through it. For more information, see "[Securing Secrets in GitHub Actions](/actions/security-guides/encrypted-secrets)."

{% ifversion ghec or fpt %}
You can also store your credentials as a secret in {% data variables.product.prodname_codespaces %} and run your script in {% data variables.product.prodname_codespaces %}. For more information, see "[Managing Encrypted Secrets for Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."
{% endif %}

If {% ifversion ghec or fpt %}these options are not possible{% else %}this is not possible{% endif %}, consider using another secure method to store your credentials.

{% endwarning %}

### Authenticating with a {% data variables.product.pat_generic %}

If you want to use the .NET REST API for personal use, you can create a {% data variables.product.pat_generic %}. For more information about creating a {% data variables.product.pat_generic %}, see {% data variables.product.company_short %}'s documentation.

You can pass your {% data variables.product.pat_generic %} when you create an instance of the Octokit `GitHubClient`. In the following example, replace `YOUR-TOKEN` with your {% data variables.product.pat_generic %}.

```csharp
using System;
using Octokit;

var github = new GitHubClient(new ProductHeaderValue("MyApp"));
github.Credentials = new Credentials("YOUR-TOKEN");
```

### Authenticating with a {% data variables.product.prodname_github_app %}

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

### Authenticating in {% data variables.product.prodname_actions %}

If you're running your script in a GitHub Actions workflow, you can authenticate using the built-in `GITHUB_TOKEN`. It's automatically created and authorized for the repository. This token doesn't require manual configuration and is automatically available in your workflow.

You can use it to authenticate with the Octokit SDK to interact with the GitHub API. Here's an example of how to do it:

```csharp
using Octokit;

var client = new GitHubClient(new ProductHeaderValue("YourAppName"))
{
    Credentials = new Credentials(Environment.GetEnvironmentVariable("GITHUB_TOKEN"))
};
```

### Instantiating without authentication

In .NET using the Octokit SDK, you can create an instance of GitHubClient without authentication to use the GitHub REST API with some limitations on rate limits and restricted endpoints. Here's how you can do it:

```csharp
using Octokit;

var github = new GitHubClient(new ProductHeaderValue("YourApp"));
```

Just remember that when you're not authenticated, you will have lower rate limits and access to certain endpoints may be restricted.

## Making Requests

The .NET Octokit SDK supports various ways to make requests, including using the `RepositoriesClient` and `IssuesClient` classes. Here's a simple example of how to get information about a repository:

```csharp
using Octokit;

var client = new GitHubClient(new ProductHeaderValue("YourAppName"))
{
    Credentials = new Credentials("YOUR-TOKEN")
};

var repository = await client.Repository.Get("owner", "repo");
Console.WriteLine($"Repository Name: {repository.Name}");
```

For more advanced use cases, you can explore the various methods provided by the Octokit SDK.

### Using the `request` method to make requests

To use the `request` method to make requests, pass the HTTP method and path as the first argument. Pass any body, query, or path parameters in a hash as the second argument. For example, to make a `GET` request to `/repos/{owner}/{repo}/issues` and pass the `owner`, `repo`, and `per_page` parameters:

```csharp
using Octokit;

// Example: Making a GET request to /repos/{owner}/{repo}/issues
var parameters = new Dictionary<string, string>
{
    { "owner", "github" },
    { "repo", "docs" },
    { "per_page", "2" }
};

var result = await github.Connection.Get<object>("repos/{owner}/{repo}/issues", parameters, "application/vnd.github+json");

// Example: Making a POST request to /markdown/raw
var requestBody = new Dictionary<string, string>
{
    { "text", "Hello **world**" }
};

var additionalHeaders = new Dictionary<string, string>
{
    { "content-type", "text/plain" }
    // Add other headers as needed
};

result = await github.Connection.Post<object>("markdown/raw", requestBody, additionalHeaders, "application/vnd.github+json");
```

### Using `rest` endpoint methods to make requests

```csharp
using Octokit;

// Example: Using the rest endpoint method to list issues for a repository
var issues = await github.Issue.GetAllForRepository("github", "docs", new RepositoryIssueRequest { PerPage = 2 });

// Example: Using the rest endpoint method to list issues for a repository with additional headers
var requestWithHeaders = new RepositoryIssueRequest
{
    PerPage = 2,
    Headers = { { "x-github-api-version", "your-api-version" } }
};
issues = await github.Issue.GetAllForRepository("github", "docs", requestWithHeaders);

```

### Making paginated requests

If the endpoint is paginated and you want to fetch more than one page of results, you can use the `paginate` method. `paginate` will fetch the next page of results until it reaches the last page and then return all of the results as a single array. A few endpoints return paginated results as array in an object, as opposed to returning the paginated results as an array. `paginate` always returns an array of items even if the raw result was an object.

```csharp
using Octokit;

// Example: Using the paginate method to fetch all issues from a repository
var issuesData = await github.Repository.GetAllIssues("github", "docs", new RepositoryIssueRequest { PerPage = 100 });

// Example: Using the paginate method with a map function
var mappedIssuesData = await github.Repository.GetAllIssues("github", "docs", new RepositoryIssueRequest { PerPage = 100 },
    (response, done) =>
    {
        var mappedData = response.Select(issue => new { Title = issue.Title, Author = issue.User.Login });
        done();
        return mappedData;
    });

```

## Catching errors

### Catching all errors

Sometimes, the {% data variables.product.company_short %} REST API will return an error. For example, you will get an error if your access token is expired or if you omitted a required parameter. Octokit.NET automatically retries the request when it gets an error other than `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, and `422 Unprocessable Entity`. If an API error occurs even after retries, Octokit.NET throws an error that includes the HTTP status code of the response (`response.status`) and the response headers (`response.headers`). You should handle these errors in your code. For example, you can use a try/catch block to catch errors:

```csharp
using Octokit;
using System;
using System.Collections.Generic;

try
{
    var filesChanged = new List<string>();

    var iterator = await github.Repository.PullRequest.Files("github", "docs", 22809);

    await foreach (var fileData in iterator)
    {
        filesChanged.Add(fileData.Filename);
    }
}
catch (ApiException ex)
{
    Console.Error.WriteLine($"Error! Status: {ex.StatusCode}. Message: {ex.Message}");
}
```

### Handling intended error codes

Sometimes, {% data variables.product.company_short %} uses a 4xx status code to indicate a non-error response. If the endpoint you are using does this, you can add additional handling for specific errors. For example, the `GET /user/starred/{owner}/{repo}` endpoint will return a `404` if the repository is not starred. The following example uses the `404` response to indicate that the repository was not starred; all other errors codes are treated as errors.

```csharp
try
{
    await github.Activity.Starring.CheckStarred("github", "docs");
    Console.WriteLine("The repository is starred by me");
}
catch (NotFoundException)
{
    Console.WriteLine("The repository is not starred by me");
}
catch (ApiException ex)
{
    Console.Error.WriteLine($"An error occurred while checking if the repository is starred: {ex.Message}");
}

```

### Handling rate limit errors

If you receive a rate limit error, you may want to retry your request after waiting. When you are rate limited, {% data variables.product.company_short %} responds with a `403 Forbidden` error and the `x-ratelimit-remaining` response header value will be `"0"`. The response headers will include a `x-ratelimit-reset` header, which tells you the time at which the current rate limit window resets, in UTC epoch seconds. You can retry your request after the time specified by `x-ratelimit-reset`.

```csharp
async Task<IApiResponse<object>> RequestRetry(string route, IDictionary<string, string> parameters)
{
    try
    {
        var response = await github.Connection.Get<object>(route, parameters);
        return new ApiResponse<object>(response.HttpResponseMessage, response.HttpResponseMessage.Headers, response.Body);
    }
    catch (ApiException ex)
    {
        if (ex.StatusCode == System.Net.HttpStatusCode.Forbidden &&
            ex.HttpResponse.Headers["x-ratelimit-remaining"] == "0")
        {
            var resetTimeEpochSeconds = int.Parse(ex.HttpResponse.Headers["x-ratelimit-reset"]);
            var currentTimeEpochSeconds = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
            var secondsToWait = resetTimeEpochSeconds - currentTimeEpochSeconds;
            Console.WriteLine($"You have exceeded your rate limit. Retrying in {secondsToWait} seconds.");
            await Task.Delay((int)secondsToWait * 1000);
            return await RequestRetry(route, parameters);
        }
        else
        {
            Console.Error.WriteLine(ex);
            throw;
        }
    }
}

var response = await RequestRetry("GET /repos/{owner}/{repo}/issues", new Dictionary<string, string>
{
    { "owner", "github" },
    { "repo", "docs" },
    { "per_page", "2" }
});
```

## Using the response

The `request` method returns a response object. The properties are `Data` (the response body returned by the endpoint), `StatusCode` (the HTTP response code), `ApiUrl` (the URL of the request), and `Headers` (an object containing the response headers). Unless otherwise specified, the response body is in JSON format. Some endpoints do not return a response body; in those cases, the `Data` property is `null`.

```csharp
var response = await github.Connection.Get<object>("repos/{owner}/{repo}/issues/{issue_number}", new Dictionary<string, string>
{
    { "owner", "github" },
    { "repo", "docs" },
    { "issue_number", "11901" }
});

Console.WriteLine($"The status of the response is: {response.StatusCode}");
Console.WriteLine($"The request URL was: {response.ApiUrl}");
Console.WriteLine($"The x-ratelimit-remaining response header is: {response.Headers["x-ratelimit-remaining"]}");
Console.WriteLine($"The issue title is: {((dynamic)response.Data).title}");
```

Similarly, the `paginate` method returns a response object. If the request was successful, the Data property is an array of data returned by the endpoint.

```csharp
var response = await github.Repository.Issue.GetAllForRepository("github", "docs", new RepositoryIssueRequest
{
    PerPage = 100
});

var data = response.Data;

Console.WriteLine($"{data.Count} issues were returned");
Console.WriteLine($"The title of the first issue is: {data[0].Title}");
```

## Example script

Here is a full example script that uses Octokit.NET. The script imports `Octokit` and creates a new instance of `Octokit`. If you want to authenticate with a {% data variables.product.prodname_github_app %} instead of a {% data variables.product.pat_generic %}, you would import and instantiate `App` instead of `Octokit`. For more information, see "[Authenticating with a {% data variables.product.prodname_github_app %}](#authenticating-with-a-github-app)" in this guide.

```csharp
using Octokit;
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static async Task Main(string[] args)
    {
        var github = new GitHubClient(new ProductHeaderValue("YourApp"));

        var owner = "github";
        var repo = "docs";
        var pullNumber = 191;

        var changedFiles = await GetChangedFiles(github, owner, repo, pullNumber);

        var filePathRegex = new Regex(@"/data/", RegexOptions.IgnoreCase);
        if (changedFiles.Any(fileName => filePathRegex.IsMatch(fileName)))
        {
            var commentUrl = await CommentIfDataFilesChanged(github, owner, repo, pullNumber);
            Console.WriteLine($"Comment added at: {commentUrl}");
        }
    }

    static async Task<IReadOnlyList<string>> GetChangedFiles(GitHubClient github, string owner, string repo, int pullNumber)
    {
        var filesChanged = new List<string>();

        try
        {
            var iterator = await github.Repository.PullRequest.Files(owner, repo, pullNumber);

            await foreach (var fileData in iterator)
            {
                filesChanged.Add(fileData.Filename);
            }
        }
        catch (ApiException ex)
        {
            Console.Error.WriteLine($"Error! Status: {ex.StatusCode}. Message: {ex.Message}");
        }

        return filesChanged;
    }

    static async Task<string> CommentIfDataFilesChanged(GitHubClient github, string owner, string repo, int pullNumber)
    {
        var changedFiles = await GetChangedFiles(github, owner, repo, pullNumber);

        var filePathRegex = new Regex(@"/data/", RegexOptions.IgnoreCase);
        if (!changedFiles.Any(fileName => filePathRegex.IsMatch(fileName)))
        {
            return null;
        }

        try
        {
            var comment = await github.Issue.Comment.Create(owner, repo, pullNumber,
                $"It looks like you changed a data file. These files are auto-generated. \n\nYou must revert any changes to data files before your pull request will be reviewed.");

            return comment.HtmlUrl;
        }
        catch (ApiException ex)
        {
            Console.Error.WriteLine($"Error! Status: {ex.StatusCode}. Message: {ex.Message}");
            return null;
        }
    }
}
```

## Next steps

- To learn more about Octokit.NET see [the .NET Octokit SDK documentation](https://github.com/octokit/octokit.NET).
- For some real life examples, look at how {% data variables.product.company_short %} Docs uses Octokit.NET by [searching the {% data variables.product.company_short %} Docs repository](https://github.com/search?q=repo%3Agithub%2Fdocs%20path%3A.github%20octokit&type=code).

