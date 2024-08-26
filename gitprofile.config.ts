// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'igor17400', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Igor L.R. Azevedo',
    description: '',
    imageURL: '',
  },
  educations: [
    {
      institution: 'The University of Tokyo',
      degree: 'Research Scholar with focus on Artificial Intelligence',
      from: 'April 2023',
      to: 'Present',
      schoolLink: 'https://sites.google.com/view/toyolab/members?authuser=0',
    },
    {
      institution: 'University of Brasilia',
      degree: 'Bachelor of Electrical Engineering',
      from: 'August 2016',
      to: 'May 2022',
      schoolLink: 'https://international.unb.br/',
    },
    {
      institution: 'UniCEUB',
      degree: 'System Analysis and Development Associate Degree',
      from: 'January 2017',
      to: 'December 2018',
      schoolLink:
        'https://www.uniceub.br/pdp/graduacao/ti/analise-e-desenvolvimento-de-sistemas-96',
    },
  ],
  social: {
    linkedin: 'igor-lima-',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'igorlima1740',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.igor174.com',
    phone: '',
    email: 'lima-rocha-azevedo-igor@g.ecc.u-tokyo.ac.jp',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1KanE0fAWfujOY-ZsuRIKAUxhnuRhDT8H/view?usp=sharing',
  },
  skills: [
    'Python',
    'PyTorch',
    'PyTorch Lightning',
    'C',
    'JavaScript',
    'React.js',
    'Node.js',
    'NestJS',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind CSS',
    'AWS',
  ],
  experiences: [
    {
      company: 'Voga',
      position: 'Technology Coordinator',
      from: 'February 2022',
      to: 'April 2023',
      companyLink: 'https://voga.com.br/',
    },
    {
      company: 'BridgeHub',
      position: 'Development Team Lead',
      from: 'July 2021',
      to: 'January 2022',
      companyLink: 'https://www.bridgehub.com.br/',
    },
    {
      company: 'Cellcrypt Inc.',
      position: 'Researcher Intern',
      from: 'September 2020',
      to: 'July 2021',
      companyLink: 'https://www.cellcrypt.com/',
    },
  ],
  certifications: [
    {
      name: 'Deep Learning',
      body: 'Carnegie Mellon University',
      year: 'September 2024',
      certificateLink: 'https://example.com',
      portfolioLink: 'https://example.com',
    },
    {
      name: 'Algorithms and Data Structures',
      body: 'University of California San Diego',
      year: 'August 2024',
      certificateLink: 'https://github.com/igor17400/algorithms-174',
      portfolioLink: 'https://example.com',
    },
    {
      name: 'Digital Signal Processing',
      body: 'EPFL',
      year: 'August 2024',
      certificateLink: 'https://example.com',
      portfolioLink: 'https://github.com/igor17400/dsp-174',
    },
    {
      name: 'Information Theory',
      body: 'The Chinese University of Hong Kong',
      year: 'August 2024',
      certificateLink: 'https://example.com',
      portfolioLink: 'https://github.com/igor17400/information-theory-174',
    },
    {
      name: 'Model United Nations',
      body: 'Harvard University',
      year: 'January 2016',
      certificateLink:
        'https://docs.google.com/document/d/1OeLCVYxeNLCjI2848y1Or62LnbPeZyRRgZjVIlGC4lQ/edit',
    },
    {
      name: 'Model United Nations',
      body: 'Yale University',
      year: 'January 2016',
      certificateLink:
        'https://docs.google.com/document/d/1HdveJyYtpcptfvcty3LEU59fiH7ukSO2oBXLQtAwZ8w/edit',
    },
  ],
  publications: [
    {
      title:
        'A Look Into News Avoidance Through AWRS: An Avoidance-Aware Recommender System',
      conferenceName: '',
      journalName: '',
      authors: 'Igor L.R. Azevedo, Toyotaro Suzumura, Yuichiro Yasui',
      link: 'https://arxiv.org/abs/2407.09137',
      description:
        'In recent years, journalists have expressed concerns about the increasing trend of news article avoidance, especially within specific domains. This issue has been exacerbated by the rise of recommender systems. Our research indicates that recommender systems should consider avoidance as a fundamental factor. We argue that news articles can be characterized by three principal elements: exposure, relevance, and avoidance, all of which are closely interconnected. To address these challenges, we introduce AWRS, an Avoidance-Aware Recommender System. This framework incorporates avoidance awareness when recommending news, based on the premise that news article avoidance conveys significant information about user preferences. Evaluation results on three news datasets in different languages (English, Norwegian, and Japanese) demonstrate that our method outperforms existing approaches.',
    },
    {
      title:
        "Popular News Always Compete for the User's Attention! POPK: Mitigating Popularity Bias via a Temporal-Counterfactual",
      conferenceName: '',
      journalName: '',
      authors: 'Igor L.R. Azevedo, Toyotaro Suzumura, Yuichiro Yasui',
      link: 'https://arxiv.org/abs/2407.09939',
      description: `In news recommendation systems, reducing popularity bias is essential for delivering accurate and diverse recommendations. This paper presents POPK, a new method that uses temporal-counterfactual analysis to mitigate the influence of popular news articles. By asking, What if, at a given time t, a set of popular news articles were competing for the user's attention to be clicked?", POPK aims to improve recommendation accuracy and diversity. We tested POPK on three different language datasets (Japanese, English, and Norwegian) and found that it successfully enhances traditional methods. POPK offers flexibility for customization to enhance either accuracy or diversity, alongside providing distinct ways of measuring popularity. We argue that popular news articles always compete for attention, even if they are not explicitly present in the user's impression list. POPK systematically eliminates the implicit influence of popular news articles during each training step. We combine counterfactual reasoning with a temporal approach to adjust the negative sample space, refining understanding of user interests. Our findings underscore how POPK effectively enhances the accuracy and diversity of recommended articles while also tailoring the approach to specific needs.`,
    },
    {
      title: 'A SHA-3 Co-Processor for IoT Applications',
      conferenceName: '',
      journalName: '',
      authors: 'Igor L.R. Azevedo; Alexandre S. Nery; Alexandre da C. Sena',
      link: 'https://ieeexplore.ieee.org/document/9263759',
      description: `The Secure Hash Algorithm 3 (SHA-3) is the latest member of the secure hash family of algorithms (SHA) on top of which several technologies are built upon, such as in Blockchain, security applications and protocols, including TLS, SSL, PGP, SSH, IPsec, and S/MIME. Due to tighter processing and power efficiency constraints often present in embedded applications, hardware architectures such as FPGAs (Field-Programmable Gate Array) can be employed to enable the design and implementation of efficient hardware accelerators. Thus, this work implements a SHA-3 Co-Processor in FPGA suitable for IoT applications. Performance, Circuit-area and Energy consumption results show that the Co-Processor is about 65% faster than the ARM Cortex-A9 processor that is also equipped in the FPGA chip, as well as in many IoT embedded systems.`,
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'igorlima1740', // to hide blog section, keep it empty
    limit: 1, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    disableSwitch: false,
    // defaultTheme: 'light',

    // If you want to activate toggle button with only two colors - dark and light
    lightTheme: 'winter',
    darkTheme: 'dark',

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
