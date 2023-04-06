<div id="top"></div>

<!-- SHIELDS -->

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>

<!-- PROJECT LOGO -->

<br />
<div align="center">
<a href="">
    <img src="public/logo.svg" alt="Logo" height="100">
</a>

<h3 align="center">Remarked</h3>

<p align="center">
    In-browser markdown editor.
    <br />
    <a href="https://remarked.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Riki9811/remarked/issues">Report Bug</a>
    ·
    <a href="https://github.com/Riki9811/remarked/issues">Request Feature</a>
    <br />
</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Table of Contents</summary>
    <ol>
        <li><a href="#what-is-markdown">What is markdown?</a></li>
        <li>
            <a href="#about-the-project">About The Project</a>
            <ul>
                <li><a href="#built-with">Built With</a></li>
            </ul>
        </li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
    </ol>
</details>
<br />

[![Website Screen Shot][product-screenshot]](https://remarked.vercel.app/)

<!-- WHAT IS MARKDOWN -->

## What is markdown?

**Markdown** is a lightweight markup language for creating formatted text using a plain-text editor. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages. While most prefer to use it in collaborative software, documentation pages, and readme files, others prefer it purely for the writing experience it offers.

Using Markdown is different than using a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.

For example, to denote a heading, you add a number sign before it (e.g., # Heading One) It may take a while to get used to seeing Markdown syntax in your text, and that is why tools like this project can help users by blending the writing experiences of pure markdown and common WYSIWYG apps together.

To learn how to write markdown I suggest reading the standard, unambiguous syntax specification [CommonMark](https://commonmark.org/). Another great resource is this [basic syntax guide](https://www.markdownguide.org/basic-syntax/), with a list of all markdown's most used features.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ABOUT THE PROJECT -->

## About The Project

This projects aims to create a web editor for markdown with an easy to use interface that helps the user write faster. The app has local storage support to save all the documents, as well as features to download the documents in `.md`, `.txt` and `.pdf` file formats.

This app provides a toolbar with common WYSIWYG tools, and helps visualizing the output of what the user is writing by showing a live preview. The website shows the optimal layout for the app depending on the device's screen size.

Eventually I would like to turn this project into a full-stack web app (maybe with firebase?) that supports user registration and login to be able to sync your files on multiple devices. I would also like to write my own markdown interpreter instead of using the [React-mde](https://github.com/andrerpena/react-mde#readme) package.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [Vite.js](https://vitejs.dev/)
-   [React.js](https://reactjs.org/)
-   [React Router](https://reactrouter.com)
-   [Typescript](https://www.typescriptlang.org/)
-   [Sass](https://sass-lang.com/)
-   [React-mde](https://github.com/andrerpena/react-mde#readme)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [x] App routing with placeholder pages
-   [ ] Main app interface mockup (responsive)
-   [ ] Side navbar
-   [ ] Local storage sync tools
-   [ ] Markdown text editor and live preview
-   [ ] Document save in `localStorage`
-   [ ] Toolbar layout (responsive)
-   [ ] Toolbar functionalities
-   [ ] Export of documents in supported file formats

See the [open issues](https://github.com/Riki9811/remarked/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, you can simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Riccardo Mariotti - riccardo.mariotti98@gmail.com

Project Link: [https://github.com/Riki9811/remarked](https://github.com/Riki9811/remarked)

Online demo: [https://remarked.vercel.app/](https://remarked.vercel.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Riki9811/remarked.svg?style=for-the-badge
[contributors-url]: https://github.com/Riki9811/remarked/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/Riki9811/remarked.svg?style=for-the-badge
[stars-url]: https://github.com/Riki9811/remarked/stargazers
[issues-shield]: https://img.shields.io/github/issues/Riki9811/remarked.svg?style=for-the-badge
[issues-url]: https://github.com/Riki9811/remarked/issues
[license-shield]: https://img.shields.io/github/license/Riki9811/remarked.svg?style=for-the-badge
[license-url]: https://github.com/Riki9811/remarked/blob/master/LICENSE.txt
[product-screenshot]: src/assets/screenshot.png
