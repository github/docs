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

If you want to write an application using .NET to interact with GitHub's REST API, GitHub recommends using Octokit.net. The SDK implements best practices and makes it easier for you to interact with the REST API via .NET.

## Prerequisites

This guide assumes that you are familiar with .NET development and the {% data variables.product.company_short %} REST API. For more information about the REST API, see [AUTOTITLE](/rest/guides/getting-started-with-the-rest-api).

You must install the Octokit.net package and import relevant namespaces to use the SDK in your script. You can install the package via NuGet or your preferred package manager. For more information, see the [usage instructions on the Octokit.net README](https://github.com/octokit/octokit.net#getting-started).

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

If you want to use the .NET REST API for personal use, you can create a {% data variables.product.pat_generic %}. For more information about creating a {% data variables.product.pat_generic %}, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."

You can pass your {% data variables.product.pat_generic %} when you create an instance of `GitHubClient`. In the following example, replace `YOUR_TOKEN` with your {% data variables.product.pat_generic %}.

```csharp
using System;
using Octokit;

var github = new GitHubClient(new ProductHeaderValue("MyApp"));
github.Credentials = new Credentials("YOUR-TOKEN");
```

### Authenticating with a {% data variables.product.prodname_github_app %}

For authentication on behalf of an organization or another user, you may use a GitHub App. Here's how you can authenticate using a GitHub App:

```csharp
using Octokit;
using System;

var github = new GitHubClient(new ProductHeaderValue("YourAppName"))
{
    Credentials = new Credentials("YOUR-TOKEN")
};
```

### Authenticating in {% data variables.product.prodname_actions %}

If you're running your script in a GitHub Actions workflow, you may authenticate using the built-in `GITHUB_TOKEN` instead of creating and storing your own token. You can grant permissions to the `GITHUB_TOKEN` with the `permissions` key. For more information about Actions' `GITHUB_TOKEN`, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)."

If your workflow needs to access resources outside of the workflow's repository, then you will not be able to use `GITHUB_TOKEN`. In that case, store your credentials as a secret and replace `GITHUB_TOKEN` in the examples below with the name of your secret. For more information about secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."

If you use the `run` keyword to execute your .NET application in your {% data variables.product.prodname_actions %} workflows, you can store the value of `GITHUB_TOKEN` as an environment variable. Your script can access the environment variable as `process.env.VARIABLE_NAME`.

For example, this workflow step stores `GITHUB_TOKEN` in an environment variable called `TOKEN`:

```yaml
- name: Run script
  env:
    TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
  run: |
    dotnet run
```

### Instantiating without authentication

You may create an instance of GitHubClient without authentication to use the GitHub REST API, though the rate limit will be lower and you will not be able to use some endpoints. In this case, simply do not set the credentials on an instance of `GitHubClient`.

```csharp
using Octokit;

var github = new GitHubClient(new ProductHeaderValue("YourApp"));
```

## Making Requests

The .NET Octokit SDK supports two ways to make requests. You can either use the `Connection.{verb}` method or you can use predefined classes.   

### Using the Connection.{verb} Method

The `Connection` class in the Octokit SDK provides methods corresponding to HTTP verbs like `Get`, `Post`, `Put`, etc. Here's an example of how to use the `Get` method to fetch a repository:

```csharp
using Octokit;  

var client = new GitHubClient(new ProductHeaderValue("YourAppName"))
{
    Credentials = new Credentials("YOUR-TOKEN")
};

var response = await client.Connection.Get<Repository>(new Uri("repos/owner/repo", UriKind.Relative));

Console.WriteLine($"Repository Name: {response.Body.Name}");
```

### Using Predefined Classes

The Octokit SDK also provides predefined classes that represent various GitHub resources. These classes provide methods for performing operations on the corresponding resources. Here's an example of how to use the Repository class to fetch a repository:

```csharp
using Octokit;

var client = new GitHubClient(new ProductHeaderValue("YourAppName"))
{
    Credentials = new Credentials("YOUR-TOKEN")
};

var repository = await client.Repository.Get("owner", "repo");

Console.WriteLine($"Repository Name: {repository.Name}");
```

## Catching errors

### Catching all errors

Sometimes, the {% data variables.product.company_short %} REST API will return an error. For example, you will get an error if your access token is expired or if you omitted a required parameter. Octokit.net throws an exception which you can catch and handle appropriately when it gets an error other than `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, and `422 Unprocessable Entity`. If an API error occurs even after retries, Octokit.net throws an error that includes the HTTP status code of the response (`response.status`) and the response headers (`response.headers`). You should handle these errors in your code. For example, you can use a try/catch block to catch errors:

```csharp
using Octokit;
using System;
using System.Collections.Generic;
using System.Net;

try
{
    var github = new GitHubClient(new ProductHeaderValue("YourAppName"))
    {
        Credentials = new Credentials("YOUR-TOKEN")
    };

    var filesChanged = new List<string>();

    var iterator = await github.Repository.PullRequest.Files("github", "docs", 22809);

    await foreach (var fileData in iterator)
    {
        filesChanged.Add(fileData.Filename);
    }
}
catch (ApiException ex)
{
    switch (ex.StatusCode)
    {
        case HttpStatusCode.NotFound:
            Console.Error.WriteLine("The requested resource was not found.");
            break;
        case HttpStatusCode.Unauthorized:
            Console.Error.WriteLine("Invalid credentials provided.");
            break;
        case HttpStatusCode.Forbidden:
            Console.Error.WriteLine("You do not have permission to access the requested resource.");
            break;
        default:
            Console.Error.WriteLine($"An error occurred: {ex.Message}");
            break;
    }
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

The `Get<T>` method in Octokit.NET returns a `ApiResponse<T>` object. The properties are `Body` (the response body returned by the endpoint), `HttpStatusCode` (the HTTP response code), `ApiInfo` (an object containing the response headers and other API information). Unless otherwise specified, the response body is in JSON format and automatically deserialized into the type `T`. Some endpoints do not return a response body; in those cases, the `Body` property is `null`.

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

The `GetAllForRepository` method in Octokit.NET returns a list of issues for a repository. This method automatically handles pagination for you.

```csharp
var issueRequest = new RepositoryIssueRequest
{
    PerPage = 100
};

var issues = await github.Issue.GetAllForRepository("github", "docs", issueRequest);

Console.WriteLine($"{issues.Count} issues were returned");
Console.WriteLine($"The title of the first issue is: {issues[0].Title}");
```

## Example script

Here is a full example script that uses Octokit.net. The script imports `Octokit` and creates a new instance of `Octokit`. If you want to authenticate with a {% data variables.product.prodname_github_app %} instead of a {% data variables.product.pat_generic %}, you would import and instantiate `App` instead of `Octokit`. For more information, see "[Authenticating with a {% data variables.product.prodname_github_app %}](#authenticating-with-a-github-app)" in this guide.

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

- To learn more about Octokit.net see [the .NET Octokit SDK documentation](https://github.com/octokit/octokit.net).

