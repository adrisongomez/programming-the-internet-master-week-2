# Programming The Internet: Week 2 Exercise

## Requerimientos del proyecto

- La página debe incluir varios elementos de HTML5, como etiquetas semánticas, formularios con validación, video, audio o canvas.
- Implementar CSS3 para el diseño, incluyendo selectores avanzados, animaciones y transiciones.
- Aplicar principios de diseño web responsivo para asegurar que la página sea compatible con diferentes tamaños de pantalla y dispositivos.
- Integrar un framework de CSS (Bootstrap o Tailwind CSS) para mejorar el diseño y la experiencia del usuario.
- La página debe ser no solo funcional sino también estéticamente atractiva.
- Incluir interactividad y creatividad en el diseño para demostrar comprensión de las capacidades de HTML5 y CSS3.

## Requisitos de software

- `node` version: [`v22.13.1`](https://nodejs.org/en/download) or [`nvm`](https://github.com/nvm-sh/nvm)
- [`pnpm`](https://pnpm.io/installation) package manager

## Inicializar el proyecto

*Opcional*: Si posee `nvm` instalado, corra `nvm install` and `nvm` se encargara de instalar la version correcta de `node`.

1- Run `pnpm install` to install all dependecies of the project.
2- Run `pnpm start` to run an HTTP Server on `http://localhost:8080`

## Notas

Como CSS Framework, utilize [TailwindCSS](https://tailwindcss.com/docs/installation/play-cdn) pero utilizando la version del CDN. Como la idea del proyecto es hacer la demostracion de una pagina web estilo MPA (*Multi-page Application*) decide utilizar la version de CDN ya que no necesita un buildstep. Pero considero que la version que incluye instalar varias depencias y crear un build step es superior ya que permite reducir la cantidad de CSS que la pagina tiene que cargar.

Cabe destacar que este proyecto esta en focado en desmostrar el uso de HTML5. Por lo tanto solo se utilizara HTML, CSS y JS. Como reto personal tratare de realizar el proyecto solo en vanilla.js.

Los diseño del proyecto se inspiran de este [proyecto publico](https://www.behance.net/gallery/154022259/Ecommerce-UIUX-site-Web-design-?tracking_source=search_projects|Ecommerce+Site+web+design&l=3) en [Behance por Sergey Pazych](https://www.behance.net/pazychsergey). El diseño solo provee conceptos e ideas del productos final. (No se quien es este men pero se ve que es duro en lo que hace.)

## Algunos conceptos utilizados

- [WebComponent](https://developer.mozilla.org/es/docs/Web/API/Web_components) es un API que permite crear elementos html customizado para evitar la repeticion de codigo. See [ProductCollectionItem]('./src/assets/js/components/ProductCollectionItem.js')

- [FlexBox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) es un modelo de layout que permite maquetar y distribuir los espacios dentro de un elemento.

- [CSS Variables](https://developer.mozilla.org/es/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) que permite guardar valores en CSS lo que permite mantener los estilos mas uniformes.

- [Javascript Module](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules) que permite modulizar el codigo en javascript.

## Estructura del proyecto

- `src/`: Es la carpeta principal donde se mantiene todo el codigo y los assets del proyectos
- `src/assets`: cada piece de contenido que la pagina necesita .
  - `src/assets/styles/`: Contiene todos los archivo CSS. (En caso de ser necesario)
  - `src/assets/js/`: Contine todos los archivos javascript.
  - `src/assets/images/`: Contiene todas las imagenes del proyectos. 
- `src/pages`: Contiene todos los archivos HTML tratando de mantener el routing de la pagina
- `package.json`: Contiene las especificaciones y dependecias del proyecto.
- `pnpm-lock.yaml`: Es un archivo generado a partir del `package.json` por `pnpm`. **NO BORRAR, NI MODIFICAR**
- `README.md`: sirve como documentacion del proyecto

Happy Coding BROH! 👊😎


## Demo videos

### Desktop
https://github.com/user-attachments/assets/868e7980-f48d-4221-af82-48085cdec441

### Mobile
https://github.com/user-attachments/assets/bf8f832a-9bbf-41f6-ae35-76858e6cf051


