module.exports = {
  statistics: [{
    counter: 500,
    caption: 'Attendees'
  }, {
    counter: 1,
    caption: 'Día'
  }, {
    counter: 40,
    caption: 'Sesiones'
  }, {
    counter: 4,
    caption: 'Sesiones paralelas'
  }],
  callToAction: {
    text: 'GDG DevFest 2014',
    buttonText: 'See how it was',
    video: {
      id: 't95z_HLMTmM',
      title: 'GDG DevFest Ukraine 2014 - Highlights'
    }
  },
  galleryBlock: {
    title: 'Google IO 2016 - Photos',
    photos: {
      big: '../images/backgrounds/2016-IO.jpg',
      small: ['../images/backgrounds/2016-IO.jpg', '../images/backgrounds/2016-IO.jpg']
    },
    albumUrl: 'https://plus.google.com/events/gallery/cc6tosp4ohkp6qj9pg5jb4g6o3k?sort=1'
  },
  ticketsBlock: {
    title: 'Tickets',
    tickets: [{
      name: 'Student',
      price: 400,
      currency: 'UAH',
      info: '*Before October 23 or 100 tickets.<br/>Requires valid student ID'
    }, {
      name: 'Early Bird',
      price: 600,
      currency: 'UAH',
      info: '*Before September 27 or 150 tickets',
      soldOut: true
    }, {
      name: 'Lazy Bird',
      price: 800,
      currency: 'UAH',
      info: '*Before October 23'
    }],
    details: 'Tickets grant access to all conference sections, coffee breaks, lunch and party. Accommodation is NOT included in the ticket price.'
  },
  // socialFeed: {
  //   source: '/data/tweets.json'
  // },
  // partnershipProposition: '/assets/GDG_DevFest_Ukraine_2015_Partnership_Proposition.pdf'
};
