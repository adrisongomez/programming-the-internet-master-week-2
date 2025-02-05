# Programming The Internet: Week 2 Exercise

## Project Requirement

- La página debe incluir varios elementos de HTML5, como etiquetas semánticas, formularios con validación, video, audio o canvas.
- Implementar CSS3 para el diseño, incluyendo selectores avanzados, animaciones y transiciones.
- Aplicar principios de diseño web responsivo para asegurar que la página sea compatible con diferentes tamaños de pantalla y dispositivos.
- Integrar un framework de CSS (Bootstrap o Tailwind CSS) para mejorar el diseño y la experiencia del usuario.
- La página debe ser no solo funcional sino también estéticamente atractiva.
- Incluir interactividad y creatividad en el diseño para demostrar comprensión de las capacidades de HTML5 y CSS3.

## Requirement Software:
- `node` version: `v22.13.1` or `nvm`
- `pnpm` package manager

## Getting started

*Optional*: If you have `nvm` install on your computer, just run `nvm install` and nvm would install the proper node version for the project.

1- Run `pnpm install` to install all dependecies of the project.
2- Run `pnpm start` to run an HTTP Server on `http://localhost:8080`


## Key Notes:

For CSS framework, I'm using Tailwind using the CDN installation. The idea of this project is showcasing the use of `HTML5` so it's not need it to add an extra build step. but in case of real scenario, it would be better to use the compiler version due to it produces less CSS than using the CDN which could affect website performance.

Also this project is also focus to use vanilla.js (just to challenge me a little bit) so not Jquery or bundle tool would be use on this project. JUST PURE JS, CSS and HTML.

The design of this project are just a copy from a [public project](https://www.behance.net/gallery/154022259/Ecommerce-UIUX-site-Web-design-?tracking_source=search_projects|Ecommerce+Site+web+design&l=3) on [Behance by Sergey Pazych](Sergey Pazych). The design only provide concept idea of what it's being build and not assets is being provide so I'll pick up whatever public image, video or assets from internet (I don't know this dude, but he is good look his public projects, they are good.)

## Project Structure

- `src/`: Hold all the Source Code and it's what the HTTP Server serve
- `src/assets`: every piece of public assets is store here.
    - `src/assets/styles/`: Have all the css files.
    - `src/assets/js/`: Have all the javascript files.
    - `src/assets/images/`: have all the images on the site. 
- `src/pages`: hold the HTML pages. Keep in mind this project is MPA so each page would be represent by an HTML file on this directory following the routing of the site. For example `pages/about` -> src/pages/about.html
- `package.json`: hold the dependencies and the script to start up the project
- `pnpm-lock.yaml`: hold lock specs from package.json **DO NOT DELETE OR MODIFY THAT FILE*
- `README.md`: serves as documentation for the project.


Happy Coding BROH! 👊😎