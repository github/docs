<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Pizza Shop</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="logo.png" alt="Your Pizza Shop Logo">
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#order">Order Online</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <h1>Welcome to Your Pizza Shop</h1>
        <p>Delicious pizzas made with love!</p>
    </section>

    <section id="menu">
        <h2>Our Menu</h2>
        <div class="menu-item">
            <h3>Margherita</h3>
            <p>Tomato sauce, mozzarella, basil</p>
            <p>$10.00</p>
        </div>
        <!-- Add more menu items -->
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p>We have been serving the best pizzas since 2005.</p>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@yourpizzashop.com</p>
    </section>

    <section id="order">
        <h2>Order Online</h2>
        <form action="order_process.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" required>
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required>
            <label for="pizza">Choose Pizza:</label>
            <select id="pizza" name="pizza">
                <option value="margherita">Margherita</option>
                <option value="pepperoni">Pepperoni</option>
                <!-- Add more options -->
            </select>
            <button type="submit">Place Order</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2023 Your Pizza Shop. All rights reserved.</p>
    </footer>
</body>
</html>---
title: About READMEs
intro: 'You can add a README file to your repository to tell other people why your project is useful, what they can do with your project, and how they can use it.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
---
## About READMEs

{% data reusables.repositories.about-READMEs %}

For more information about providing guidelines for your project, see {% ifversion fpt or ghec %}[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project) and {% endif %}[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions).

A README is often the first item a visitor will see when visiting your repository. README files typically include information on:
* What the project does
* Why the project is useful
* How users can get started with the project
* Where users can get help with your project
* Who maintains and contributes to the project

If you put your README file in your repository's hidden `.github`, root, or `docs` directory, {% data variables.product.github %} will recognize and automatically surface your README to repository visitors.

If a repository contains more than one README file, then the file shown is chosen from locations in the following order: the `.github` directory, then the repository's root directory, and finally the `docs` directory.

When your README is viewed on GitHub, any content beyond 500 KiB will be truncated.

{% data reusables.profile.profile-readme %}

## Auto-generated table of contents for README files

For the rendered view of any Markdown file in a repository, including README files, {% data variables.product.github %} will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the {% octicon "list-unordered" aria-label="Table of Contents" %} menu icon at the top left of the rendered page.

![Screenshot of the README for a repository. In the upper-left corner, the "Table of contents" dropdown menu (list icon) is expanded.](/assets/images/help/repository/readme-automatic-toc.png)

## Section links in README files and blob pages

{% data reusables.repositories.section-links %}

For more detailed information about section links, see [Section links](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#section-links).

## Relative links and image paths in README files

{% data reusables.repositories.relative-links %}

## Wikis

A README should contain only the necessary information for developers to get started using and contributing to your project. Longer documentation is best suited for wikis. For more information, see [AUTOTITLE](/communities/documenting-your-project-with-wikis/about-wikis).

## Further reading

* [AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
* [5 tips for making your {% data variables.product.company_short %} profile page accessible](https://github.blog/2023-10-26-5-tips-for-making-your-github-profile-page-accessible/) in the {% data variables.product.company_short %} blog
{%- ifversion fpt or ghec %}
* [AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/adding-a-codespaces-badge)
{%- endif %}
