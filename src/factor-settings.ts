/**
 * Factor Settings - How settings work in Factor...
 *
 * Your settings files are how you customize themes and plugins.
 * They allow you to set text and images, but also override components, routes and more.
 *
 */
export default {
    metatags: {
      defaultTitle: "Pocket Rocket",
      titleTemplate: "%s",
    },
    site: {
      logo: (): Promise<any> => import("./templates/logo.vue"),
      logoTitle: "Pocket Rocket",
      nav: [
        {
          _item: "intro",
          path: "/#intro",
          name: "Inicio",
        },
        {
          _item: "about",
          path: "/#about",
          name: "Acerca de Nosotros",
        },
        {
          _item: "services",
          path: "/#services",
          name: "Servicios",
        },
        {
          _item: "portfolio",
          path: "/#portfolio",
          name: "Portfolio",
        },
        /*{
          _item: "news",
          path: "/#news",
          name: "News",
        },*/
        {
          _item: "contact",
          path: "/#contact",
          name: "Contacto",
        },
      ],
      copyright: "&copy; Pocket Rocket, ", // year will be added automatic :3,
    },
    intro: {
      pretitle: "Agencia Digital",
      title:
        "Estrategias y soluciones a la medida",
      buttons: [
        {
          _item: "contact",
          link: "/#contact",
          text: `Comenzar un nuevo proyecto  <i class="fas fa-arrow-right"></i>`,
          classes: "btn bg-red-500 text-white hover:bg-red-700 hover:text-white",
        },
        {
          _item: "work",
          link: "/#portfolio",
          text: "Conoce nuestro trabajo",
          classes:
            "btn border border-solid border-white text-white hover:bg-white hover:text-red-500",
        },
      ],
      metatags: {
        index: {
          title: "Pocket Rocket",
          description: "Portfolio de Pocket Rocket"
        },
      },
    },
    about: {
      pretitle: "Acerca de Nosotros",
      title: "Pocket Rocket, la historia detrás del éxito",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      photo: require("./img/pckrckt.jpg"),
      career: {
        title: "",
        items: [
          /*{
            _item: "item_1",
            left: "Jul 2019 - Today",
            middle: "Senior Designer at Apple",
            right: "Full-time",
          },
          {
            _item: "item_2",
            left: "Sep 2018 - Jun 2019",
            middle: "Creative Designer at Asana",
            right: "Full-time",
          },
          {
            _item: "item_3",
            left: "Apr 2018 - Sep 2018",
            middle: "Art Director at Google",
            right: "Full-time",
          },
          {
            _item: "item_4",
            left: "Feb 2016 - Mar 2018",
            middle: "Art Director at Dropbox",
            right: "Remote",
          },
          {
            _item: "item_5",
            left: "Aug 2014 - Jan 2016",
            middle: "Art Director at Twitter",
            right: "Full-time",
          },*/
        ],
      },
      counter: [
        /*{
          _item: "item_1",
          text: "Awards Received",
          number: "56",
        },
        {
          _item: "item_2",
          text: "Projects",
          number: "127",
        },
        {
          _item: "item_3",
          text: "Cups of Coffee",
          number: "876",
        },
        {
          _item: "item_4",
          text: "Happy Clients",
          number: "96",
        },*/
      ],
      metatags: {
        index: {
          title: "Acerca de Pocket Rocket",
          description: "Portfolio Pocket Rocket.",
        },
      },
    },
    services: {
      pretitle: "¿Qué hacemos?",
      title: "Hacemos posible el éxito para tu negocio",
      items: [
        {
          _item: "illustration",
          title: "Diseño",
          text:
            "Nemo cupiditate ab quibusdam quaer impedit magni. Earum suscipit ipsum laudantium cupiditate.",
          icon: "illustration",
        },
        {
          _item: "branding",
          title: "Branding",
          text:
            "Nemo cupiditate ab quibusdam quaer impedit magni. Earum suscipit ipsum laudantium cupiditate.",
          icon: "branding",
        },
        {
          _item: "marketing",
          title: "Marketing",
          text:
            "Nemo cupiditate ab quibusdam quaer impedit magni. Earum suscipit ipsum laudantium cupiditate.",
          icon: "marketing",
        },
        {
          _item: "web_development",
          title: "IT Development",
          text:
            "Nemo cupiditate ab quibusdam quaer impedit magni. Earum suscipit ipsum laudantium cupiditate.",
          icon: "webdev",
        },
      ],
      metatags: {
        index: {
          title: "Servicios - Pocket Rocket",
          description: "Todo lo que necesitas para tu negocio.",
        },
      },
    },
    portfolio: {
      pretitle: "Portfolio",
      title: "Algunos de nuestros clientes recientes",
      indexRoute: "/#portfolio",
      postRoute: "/portfolio",
      limit: 8,
      returnLinkText: "Todos los proyectos",
      notFound: {
        title: "Sin Proyectos",
        subTitle: "Por el momento no hay proyectos.",
      },
      layout: {
        index: ["featuredImage"],
        single: ["hero", "featuredImage", "tags", "portfolioEntry"],
      },
      clientsTitle: "Marcas con las que hemos trabajado.",
      clients: [
        /*{
          _item: "sennheiser",
          alt: "sennheiser",
        },
        {
          _item: "coca-cola",
          alt: "coca-cola",
        },
        {
          _item: "adidas",
          alt: "adidas",
        },
        {
          _item: "warner",
          alt: "warner",
        },
        {
          _item: "netflix",
          alt: "netflix",
        },
        {
          _item: "chanel",
          alt: "chanel",
        },*/
      ],
      metatags: {
        index: {
          title: "Portfolio - Pocket Rocket",
          description: "Un poco de nuestro trabajo",
        },
      },
    },
    blog: {
      indexRoute: "/#news",
      postRoute: "/news",
      limit: 10,
      returnLinkText: "Atrás",
      headline: "",
      subheadline: "",
      content: "",
      layout: {
        index: ["featuredImage", "date", "blogHero", "subtitle", "readMore"],
        single: [
          "customSingleHeader",
          "meta",
          "featuredImage",
          "entry",
          "social",
          "authorBio",
        ],
        meta: ["authorDate", "tags"],
      },
      notFound: {
        title: "",
        subTitle: "",
      },
      metatags: {
        index: {
          title: "Pocket Rocket",
          description:
            "",
        },
      },
    },
    contactForm: {
      email: "algun@correo.com",
      submit: {
        btn: "secondary",
        text: "Enviar",
      },
      inputFormat: "vertical",
      confirm: {
        title: "Hemos recibido tu correo",
        subTitle: "En breve nos pondremos en contacto.",
      },
      layout: [
        {
          placeholder: "Nombre",
          _id: "name",
          inputType: "text",
          required: true,
        },
        {
          placeholder: "Ciudad",
          _id: "state",
          inputType: "text",
          required: true,
        },
        {
          placeholder: "Correo",
          _id: "email",
          inputType: "email",
          required: true,
        },
        {
          _id: "message",
          inputType: "textarea",
          required: true,
          placeholder: "Mensaje",
        },
      ],
    },
    contact: {
      pretitle: "Contacto",
      title: "El éxito está a unos pasos, contáctanos y trabajemos juntos",
      form: {
        title: "",
        placeholders: {
          name: "Mensaje",
          email: "Correo",
          text: "Mensaje",
        },
        buttonText: "Enviar",
        confirmation: {
          title: "Hemos recibido tu correo",
          content: "En breve nos pondremos en contacto.",
        },
      },
      info: {
        title: "Información de Contacto",
        items: [
          {
            _item: "address",
            title: "Dirección",
            text: "Escuela Naval 132",
          },
          {
            _item: "email",
            title: "Envíanos un mail",
            text: "algun@correo.com",
          },
          {
            _item: "phone",
            title: "Llámanos",
            text: "(+52) 55 1111 1111",
          },
        ],
      },
      metatags: {
        index: {
          title: "Contact - Factor Ultra Theme",
          description: "Reach out for a new project or just say hello",
        },
      },
    },
  }