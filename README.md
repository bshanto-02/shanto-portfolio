# Shamiul Islam Shanto | Portfolio Website

A dark and futuristic personal portfolio for a Computer Science student, aspiring AI engineer, graphic designer and logo maker. Built with plain **HTML, CSS and JavaScript**, with no frameworks and no build step.

## 🔗 View my portfolio: https://bshanto-02.github.io/shanto-portfolio/

[![Open Portfolio](https://img.shields.io/badge/Open-My%20Portfolio-00e5ff?style=for-the-badge)](https://bshanto-02.github.io/shanto-portfolio/)

## Features

- Dark neon design with an animated particle background
- Typing intro, animated skill bars and count-up stats
- Detailed skills: graphic design, logo making, UI/UX, web development, AI/ML (learning), problem solving
- Work gallery with filters (Logos, Posters, UI/UX, Web & Code) and click-to-enlarge images
- Journey timeline and a contact form that opens your email app
- Fully responsive, with a mobile menu
- Links to GitHub, LinkedIn, Codeforces and Figma

## Project structure

```
shanto-portfolio/
├── index.html     # page content
├── style.css      # design, colors, layout, responsive rules
├── script.js      # animations, filters, menu, contact form
├── images/
│   ├── profile.jpg
│   ├── mafia-zone-logo.jpg
│   ├── mz-logo.jpg
│   └── shanto-gamer-poster.jpg
└── README.md
```

## Run it on your computer

1. Download and unzip the project.
2. Double-click `index.html` to open it in your browser.
3. For live reload while editing, open the folder in VS Code and use the **Live Server** extension.

## How to customize

| What | Where |
| --- | --- |
| Profile photo | Replace `images/profile.jpg` |
| Name, intro text, About | `index.html` (Hero and About sections) |
| Skills and chips | `index.html` (Skills section) |
| Skill bar levels | `data-v="85"` on each `.bar` |
| Stats numbers | `data-count="..."` in the About section |
| Add a work item | Copy a `<article class="card">` block in the Work section |
| Colors | `--a` and `--b` at the top of `style.css` |
| Typing words | `words` list at the top of `script.js` |

To add your own logo or design, put the image in `images/` and use:

```html
<div class="thumb"><img src="images/your-file.jpg" alt="Describe the image"></div>
```

## Deploy on GitHub Pages (free)

1. Create a **public** repository on GitHub named `shanto-portfolio`.
2. Upload `index.html`, `style.css`, `script.js`, the `images` folder and `README.md`.
3. Go to **Settings → Pages**, choose branch `main` and folder `/ (root)`, then **Save**.
4. After about a minute, the site is live at `https://bshanto-02.github.io/shanto-portfolio/`.

To update the site later, edit or re-upload a file on GitHub and commit. It refreshes by itself.

**Other free options:** drag the folder onto [Netlify Drop](https://app.netlify.com/drop), or deploy with Vercel.

## Contact

- Email: bshanto567@gmail.com
- GitHub: https://github.com/bshanto-02
- LinkedIn: https://www.linkedin.com/in/shamiul-islam-shanto-034930230/
- Codeforces: https://codeforces.com/profile/Shanto_064
- Figma: https://www.figma.com/design/3Izg5jQDxpW4QrTpZ7vtNc/CARSOME-Website-Redesign-Practice

## License

All designs, logos, photos and content belong to Shamiul Islam Shanto. Please do not reuse them without permission.
