const state = {
  slides: [
    /*
      {
      title: 'Code Refinery Course in Aarhus, November 26-28',
      body: '<a href="https://coderefinery.org/workshops/2019-11-26-aarhus/" target="_blank">Read more and register here</a>',
      src: '400_CR_WS_Aarhus.png',
      tag: 'course'
    },
    {
      title: 'Resources',
      body: 'This section hosts practical tools and links',
      src: 'HD_barn-images-12223-unsplash.jpg',
      tag: 'competency'
    }
  ],
  cards: [
    /*
    {
      title: 'Code Refinery Workshop in Aarhus, November 26-28',
      body: `
        Research Software Engineering Course by CodeRefinery held in Aarhus November 26-28 (<a href="poster_HighRes_Aarhus.png" target="_blank">poster</a>).
        The course is about skill development and best tools and practices. Lessons are held in code-along style and materials are available online.
        <a href="https://coderefinery.org/workshops/2019-11-26-aarhus/" target="_blank">Read more and register here</a>
        `,
      src: 'codeRefinery.jpg',
      tag: 'competency'
    },
     */
    {
      title: 'How to Handle Sensitive Research Data?',
      body: `
        Use <a href="https://dmponline.deic.dk/" target="_blank">DMPOnline.DeiC.dk</a> to write a data management plan.
        <ul>
          <li>
            Order <a href="https://medarbejdere.au.dk/en/administration/it/data-storage/how-to-order-a-shared-folder/" target="_blank">
            a personal network drive</a>
          </li>
          <li>
            Write an email to <a href="https://medarbejdere.au.dk/en/administration/it/contact-it-support/" target="_blank">
            your IT department</a> requesting the personal network drive. 
            You need to attach <a href="https://medarbejdere.au.dk/fileadmin/www.medarbejdere.au.dk/Medarbejderservice/IT/Medarbejderservice_AU_IT/Faelles_filservice__Faellesdrev_/Bestillingsseddel_deltfolder_ver.9.xlsx" target="_blank">
            this excel sheet</a> listing who should have access permissions to the sensitive data.
        </li>
          <li>
            Once the drive is ready, <a href="https://medarbejdere.au.dk/en/administration/it/data-storage/personal-folder-access/" target="_blank">
            here is how to access it</a>.
          </li>
        </ul>
        Read more about these tools and procedures in <a href="https://medarbejdere.au.dk/en/informationsecurity/data-protection/general-information/storing-personal-data/" target="_blank">
        the official AU guidelines</a>.`,
      src: 'sensitiveData.jpg',
      tag: 'sensitiveData'
    },
    {
      title: 'Research Data Management Course',
      body: `DEIC the Danish E-Infrastructure Cooperation features an online course developed by the Danish Universities about
        <a href="https://vidensportal.deic.dk/RDMElearn" target="_blank">the importance of good research data management</a>.
        The three video modules give an introduction to (Research) Data Management and the data life cycle, cover the Fair Principles
        and open data, and highlight the role of data management plans in research projects.
      `,
      src: 'RDMFrame.jpg',
      tag: 'competency'
    },
    {
      title: 'Danish open work id search',
      body: `We feature this widget by courtesy of the DATAKUBEN project. It allows you to quickly
        <a href="#/danishCorpus">find the work id of any item in the danish literature corpus</a> offered by Project Gutenberg. Filter the almost 9000
        listed works by any detail to copy the work id for use in Voyant Tools.
      `,
      src: 'danishCorpus.png',
      tag: 'danishCorpus'
    },
    {
      title: 'Stop Word List Editor',
      body: `
        This feature was developed for the DATAKUBEN project. This simple widget implements an
        <a href="#/stopWords">editor for stop words</a> to be included into Python or JavaScript code. All tags are
        represented visually for convenient search and manipulation.
      `,
      src: 'stopwords.jpg',
      tag: 'stopWords'
    },
    {
      title: 'Data Analysis with Jupyter Notebooks',
      body: `
        <a href="https://www.youtube.com/watch?v=Z-T76FQavig&list=PLzmqDzBWP43RxUN39mFip5nWsxlxEoV0J" target="_blank">This video course</a> by the Datakuben project uses the <a href="https://github.com/digitaltxtlab/CLEAR" target="_blank">Computational Literary Repository (CLEAR)</a> to show learners first steps into data analysis with texts.
        The course covers installation of <a href="https://jupyter.org/" target="_blank">Jupyter notebooks</a> as part of <a href="https://www.anaconda.com/distribution/" target="_blank">Anaconda</a>, 
        a gentle introduction to its features, and an introduction to data analysis basics as featured by the notebooks in the repository.
      `,
      src: 'jupyter_playlist.png',
      tag: 'jupyter'
    },
    {
      title: 'Text Analysis with Voyant Tools',
      body: `
        This Datakuben video course on <a href="https://voyant-tools.org/docs/#!/guide/start" target="_blank">Voyant Tools</a> starts out by describing how to install a local Voyant server for 
        <a href="https://www.youtube.com/watch?v=4urg_apOoJY&list=PLzmqDzBWP43Rsd2jctidmjfkNAsR4NTAu" target="_blank">mac OS X</a> and <a href="https://www.youtube.com/watch?v=8e7M8NqGyF4&list=PLzmqDzBWP43QrknrraIcf9Dd7HY9or3dz" target="_blank">windows</a> users respectively. 
        The course then continues with by covering <a href="https://www.youtube.com/watch?v=M7UgSJmWHKM&list=PLzmqDzBWP43RDUE6St-51PnXBG2J7shbN" target="_blank">a selection of text operations with Voyant tools</a>. 
      `,
      src: 'voyant_playlist.png',
      tag: 'voyant'
    }
  ]
}
export default state
