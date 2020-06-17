const state = {
  slides: [
    {
      title: 'Digital Literacy Project',
      body: `Providing digital and computational competencies for researchers in the Humanities
      `,
      src: '400_rawpixel-983726-unsplash.jpg',
      tag: 'digitalLiteracy'
    },
    {
      title: 'HOPE Project',
      body: `How Democracies Cope with COVID-19: A Data-Driven Approach
      `,
      src: '400_rawpixel-983726-unsplash.jpg',
      tag: 'HOPE'
    }

  ],
  testimonials: [
    /* {
      author: 'Mads Rosendahl Thomsen',
      jobTitle: 'Professor with Special Responsibilities, DLP coordinator',
      association: '',
      src: 'mads.png',
      quote: `The digital transformation is impacting every domain in the humanities. The goal of the Digital Literacy project is to connect researchers from all the departments of
      Arts at Aarhus University, and empower them with knowledge and understanding of digital and computational technologies. The project consists of workshops, tutorials and sprints
      where each researcher develop their specific research project with technical support from CHCAA.`,
    }, */
    {
      author: 'Michael Bang Petersen ',
      src: '',
      jobTitle: 'Associate Professor',
      association: 'Political Science',
      quote: 'some text',
      icon: 'fas fa-music',
      tags: [
        'something',
        'something else'
      ]
    }, {
      author: 'Andreas Roepstorff',
      src: '',
      jobTitle: 'Professor',
      association: 'Interactive Minds Centre',
      quote: 'some text',
      icon: 'fas fa-music',
      tags: [
        'something',
        'something else'
      ]
    }, {
      author: 'Iben Have',
      src: 'Iben_Have.png',
      jobTitle: 'Associate Professor',
      association: 'Media Studies',
      quote: 'The relation between sound and music on Danish radio. We trained a program to differentiate between the categories with a preliminary successrate of 98%',
      icon: 'fas fa-music',
      tags: [
        'Deep Learning',
        'Sound and Image Recognition'
      ]
    }, {
      author: 'Ulf Berthelsen',
      src: 'Ulf_Dalvad_Berthelsen.png',
      jobTitle: 'Associate Professor',
      association: 'DPU',
      quote: 'Digital analytic tools for automated language detection to improve teacher evaluation of their students\' written work',
      icon: 'fas fa-keyboard',
      tags: [
        'NLP',
        'GDPR-compliant research'
      ]
    }, {
      author: 'Ane Hejlskov Larsen',
      src: 'Ane_Larsen.png',
      jobTitle: 'Associate Professor',
      association: 'Art History and Museology',
      quote: 'Complex image analysis on the complete collection of the works of Per Kirkeby for hereto unknown overarching tendencies across time and different types of media',
      icon: 'far fa-images',
      tags: [
        'Machine Learning',
        'Image Analysis'
      ]
    }, {
      author: 'Lone Kølle',
      src: 'Lone_Kølle.png',
      jobTitle: 'Senior Researcher',
      association: 'The Grundtvig Study Centre',
      quote: 'Textmining the texts of Grundtvig which enables researchers to more easily recognize and translate the 19th century text to modern language',
      icon: 'fas fa-book',
      tags: [
        'Machine Learning',
        'Textmining'
      ]
    }, {
      author: 'Mathias Clasen',
      src: 'Mathias_Clasen.png',
      jobTitle: 'Associate Professor',
      association: 'English',
      quote: 'Creating digital tools for large-scale readings of the complete works of Stephen King, which allows for a unique mix of qualitative close reading and quantitative distant reading',
      icon: 'fas fa-book',
      tags: [
        'Textmining',
        'Close Reading',
        'Distant Reading'
      ]
    }, {
      author: 'Mikkel Thelle',
      src: 'Mikkel_Thelle.png',
      jobTitle: 'Associate Professor',
      association: 'History',
      quote: 'Mapping and exploring the history of the changing urban landscape in Copenhagen',
      icon: 'fas fa-map-marked-alt',
      tags: [
        'Machine Learning',
        'Information Retrieval',
        'NLP'
      ]
    }, {
      author: 'Tina Thode Hougaard',
      src: 'Tina_Thode_Hougaard.png',
      jobTitle: 'Associate Professor',
      association: 'Nordic Language and Literature',
      quote: 'The use of emojis on social media as part of a larger study concerning the use of language in different types of media',
      icon: 'fas fa-smile-wink',
      tags: [
        'Information Retrieval',
        'Web Scraping',
        'Data Analysis'
      ]
    }, {
      author: 'Lisbet Tarp',
      src: 'Lisbet_Tarp.png',
      jobTitle: 'Senior Researcher',
      association: 'Statens Museum for Kunst',
      quote: 'Using AI-technologies to gain a fresh perspective on the entire collection available at the SMK website',
      icon: 'far fa-images',
      tags: [
        'Machine Learning',
        'Image Analysis'
      ]
    }, {
      author: 'Karsten Olsen',
      src: 'Karsten_Olsen.png',
      jobTitle: 'Post-doc',
      association: 'Interacting Minds Centre',
      quote: 'Setup remote reading and displaying of the state of a Rubick\'s Cube for studies on collaborative problem solving',
      icon: 'fas fa-cube',
      tags: [
        'Embedded Software',
        'Web Application'
      ]
    }, {
      author: 'Ross D. Kristensen-McLachlan',
      src: 'ross_with_hat.png',
      jobTitle: 'Post-doc',
      association: 'Center for Humanities Computing Aarhus',
      quote: 'Our specially developed tool which allows for in-depth reading, comparison and textmining of corpora both large and small',
      icon: 'fas fa-book-reader',
      tags: [
        'Textmining',
        'Tracer Tool',
        'Web Application'
      ]
    }, {
      author: 'Max Roald Eckardt',
      src: 'meSmall.png',
      jobTitle: 'Research Software Engineer',
      association: 'Center for Humanities Computing Aarhus',
      quote: 'Create off-the-shelf full-text searchable web applications for your research data',
      icon: 'fas fa-database',
      tags: [
        'Web Application',
        'Lucene',
        'Graph',
        'Self-service'
      ]
    }, {
      author: 'Mads Rosendahl Thomsen',
      src: 'mads.png',
      jobTitle: 'Professor',
      association: 'Comparative Literature',
      quote: '<i>The Digital Literacy Project</i> - A series of workshops for researchers in the humanities at AU held in the 2019/2020 academic year',
      icon: 'fas fa-chalkboard-teacher',
      tags: [
        'Close Reading',
        'Distant Reading',
        'Data Analysis',
        'Machine Learning'
      ]
    }
  ]
}
export default state
