// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my latest CV here!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-side-quests",
          title: "Side Quests",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-i-presented-my-paper-anti-virus-autobots-predicting-more-infectious-virus-variants-for-pandemic-prevention-through-deep-learning-at-the-4th-international-conference-on-machine-learning-and-applications-2022-copenhagen-denmark-i-m-very-grateful-to-my-research-mentor-dr-bingquan-shen-for-his-guidance-in-this-research",
          title: 'I presented my paper, “Anti-Virus Autobots: Predicting More Infectious Virus Variants for Pandemic...',
          description: "",
          section: "News",},{id: "news-my-paper-predicting-more-infectious-virus-variants-for-pandemic-prevention-through-deep-learning-has-been-published-in-the-international-journal-of-artificial-intelligence-and-applications-vol-13-no-4",
          title: 'My paper, “Predicting More Infectious Virus Variants for Pandemic Prevention through Deep Learning”,...',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-fourth-annual-carnegie-mellon-libraries-hackathon-for-biomedical-data-management-knowledge-graphs-and-deep-learning-our-work-has-been-listed-on-biohackrxiv",
          title: 'I participated in the fourth annual Carnegie Mellon Libraries hackathon for biomedical data...',
          description: "",
          section: "News",},{id: "news-my-contribution-essay-the-role-of-artificial-intelligence-in-art-restoration-has-been-published-in-woven-an-interdisciplinary-journal-of-dietrich-college-issue-4-spring-2024-a-big-thank-you-to-my-interpretation-and-argument-76-101-instructor-dr-chad-szalkowski-ference-for-his-guidance-in-this-project",
          title: 'My contribution essay, “The Role of Artificial Intelligence in Art Restoration”, has been...',
          description: "",
          section: "News",},{id: "news-i-am-joining-the-reliable-autonomous-systems-lab-led-by-prof-reid-simmons-at-the-cmu-robotics-institute-i-will-be-developing-a-real-time-system-to-track-food-items-in-a-kitchen-for-older-adults-with-mild-cognitive-impairment",
          title: 'I am joining the Reliable Autonomous Systems Lab, led by Prof. Reid Simmons,...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-office-of-undergraduate-research-and-scholar-development-presentation-award-for-my-project-ai-vs-human-creativity-investigating-the-effectiveness-of-ai-generated-advertisements",
          title: 'I was awarded the Office of Undergraduate Research and Scholar Development Presentation Award...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-summer-undergraduate-research-fellowship-2025-for-my-research-vision-and-tracking-in-a-smart-ai-kitchen-for-older-adults-with-mild-cognitive-impairment-i-m-very-grateful-to-all-my-research-mentors-for-their-encouragement-and-support",
          title: 'I was awarded the Summer Undergraduate Research Fellowship 2025 for my research, “Vision...',
          description: "",
          section: "News",},{id: "news-i-presented-my-paper-stool-recognition-for-colorectal-cancer-detection-through-deep-learning-at-the-ieee-4th-international-conference-on-computing-and-machine-intelligence-2025-michigan-usa-i-m-very-grateful-to-my-research-mentor-dr-bingquan-shen-for-his-guidance-in-this-research",
          title: 'I presented my paper, “Stool Recognition for Colorectal Cancer Detection through Deep Learning”,...',
          description: "",
          section: "News",},{id: "news-i-presented-my-project-ai-vs-human-creativity-investigating-the-effectiveness-of-ai-generated-advertisements-at-the-national-conference-of-undergraduate-research-2025-pittsburgh-usa-together-with-my-partner-calvin-chan-a-big-thank-you-to-my-marketing-i-70-381-instructor-dr-flora-feng-for-her-guidance-in-this-project",
          title: 'I presented my project, “AI vs Human Creativity: Investigating the Effectiveness of AI-Generated...',
          description: "",
          section: "News",},{id: "news-i-presented-my-research-vision-and-tracking-in-a-smart-ai-kitchen-for-older-adults-with-mild-cognitive-impairment-at-the-cmu-meeting-of-the-minds-undergraduate-research-symposium-2025-together-with-my-teammates-jessica-han-ryan-ding-and-pranavi-kondapalli-a-big-thank-you-to-our-research-advisors-prof-reid-simmons-prof-zackory-erickson-and-dr-pragathi-praveena-for-their-guidance-in-this-research",
          title: 'I presented my research, “Vision and Tracking in a Smart AI Kitchen for...',
          description: "",
          section: "News",},{id: "projects-ai-in-action-seminar-series",
          title: 'AI in Action Seminar Series',
          description: "A CMU SCS seminar series that invites AI leaders to share their insights with the CMU community. Previous speakers include Nobel Laureate Prof. Geoffrey Hinton.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-cmu-star-wars-club",
          title: 'CMU Star Wars Club',
          description: "I co-founded the CMU Star Wars Club with two friends in Fall 2023 to build a community of Star Wars fans across the CMU galaxy. Check out some activities that I&#39;ve led as the 2024-2025 President!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-youtube-channel",
          title: 'YouTube Channel',
          description: "Check out my electric organ YouTube channel for movie/anime/video game soundtracks, pop songs, classics and more! I post new videos every month.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%6C%65%6E%64%61%74@%61%6E%64%72%65%77.%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/glenda-h-tan", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-5892-9302", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/the-glendalorian", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@theglendalorian", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
