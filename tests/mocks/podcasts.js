export const podcasts = [
  {
    id: '101',
    title: 'Back on Figg',
    author: 'T-Rell B.O.F.',
    imageUrl: 'http://fake.com/image1.png',
    description: 'Back on Figg Youtube Live Stream. Hosted by T-Rell and Smacc',
  },
  {
    id: '102',
    title: 'The Joe Budden Podcast',
    author: 'The Joe Budden Network',
    imageUrl: 'http://fake.com/image2.png',
    description:
      'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
  },
  {
    id: '103',
    title: 'Louder Than A Riot',
    author: 'NPR',
    imageUrl: 'http://fake.com/image3.png',
    description:
      "Hip-hop emerged from the voices of the unheard. But freedom doesn't ring the same for everyone. Inside all corners of the culture, Black women and queer folk have dealt with the same oppression the music was built to escape. Season 2 of Louder Than A Riot examines who hip-hop marginalizes, and how misogynoir — the specific racist misogyny against Black women — is embedded into the fabric of the culture that we love.\n\nFrom Rico Nasty facing harassment from toxic fans, to Saucy Santana's unapologetically femme aesthetics in a queerphobic industry, to the assault case that put Megan Thee Stallion's image on trial, each episode of Louder Than A Riot unpacks the unspoken rules of rap that discriminate against a select few and have held the entire culture back. \n\nHosted by NPR Music's Sidney Madden and Rodney Carmichael, Louder Than A Riot confronts power from every angle – from the power the genre wields over its artists, to the power plays that its rulebreakers take in order to get heard. In the midst of a so-called Renaissance for women in rap, these stories reveal a rot at the core of the culture that reflects how voices, bodies, and rights are still policed in America.",
  },
]

export const podcastsAPI = {
  feed: {
    entry: [
      {
        'im:name': {
          label: 'The Joe Budden Podcast',
        },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
            attributes: {
              height: '55',
            },
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
            attributes: {
              height: '60',
            },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
            attributes: {
              height: '170',
            },
          },
        ],
        summary: {
          label:
            'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
        },
        'im:price': {
          label: 'Get',
          attributes: {
            amount: '0',
            currency: 'USD',
          },
        },
        'im:contentType': {
          attributes: {
            term: 'Podcast',
            label: 'Podcast',
          },
        },
        rights: {
          label: '© All rights reserved',
        },
        title: {
          label: 'The Joe Budden Podcast - The Joe Budden Network',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
          },
        },
        id: {
          label: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
          attributes: {
            'im:id': '1535809341',
          },
        },
        'im:artist': {
          label: 'The Joe Budden Network',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme: 'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
            label: 'Music',
          },
        },
        'im:releaseDate': {
          label: '2023-03-18T00:00:00-07:00',
          attributes: {
            label: 'March 18, 2023',
          },
        },
      },
      {
        'im:name': {
          label: 'Back on Figg',
        },
        'im:price': {
          label: 'Get',
          attributes: {
            amount: '0',
            currency: 'USD',
          },
        },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/55x55bb.png',
            attributes: {
              height: '55',
            },
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/60x60bb.png',
            attributes: {
              height: '60',
            },
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/170x170bb.png',
            attributes: {
              height: '170',
            },
          },
        ],
        summary: {
          label: 'Back on Figg Youtube Live Stream. Hosted by T-Rell and Smacc',
        },
        'im:artist': {
          label: 'T-Rell B.O.F.',
        },
        title: {
          label: 'Back on Figg - T-Rell B.O.F.',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/back-on-figg/id1658497449?uo=2',
          },
        },
        id: {
          label: 'https://podcasts.apple.com/us/podcast/back-on-figg/id1658497449?uo=2',
          attributes: {
            'im:id': '1658497449',
          },
        },
        'im:contentType': {
          attributes: {
            term: 'Podcast',
            label: 'Podcast',
          },
        },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme: 'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews',
          },
        },
        'im:releaseDate': {
          label: '2023-03-21T11:47:00-07:00',
          attributes: {
            label: 'March 21, 2023',
          },
        },
      },
      {
        'im:name': {
          label: 'Louder Than A Riot',
        },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/2c/4b/43/2c4b43cc-f9f1-684c-48d6-ea61d330df16/mza_13281496189559218024.png/55x55bb.png',
            attributes: {
              height: '55',
            },
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/2c/4b/43/2c4b43cc-f9f1-684c-48d6-ea61d330df16/mza_13281496189559218024.png/60x60bb.png',
            attributes: {
              height: '60',
            },
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/2c/4b/43/2c4b43cc-f9f1-684c-48d6-ea61d330df16/mza_13281496189559218024.png/170x170bb.png',
            attributes: {
              height: '170',
            },
          },
        ],
        summary: {
          label:
            "Hip-hop emerged from the voices of the unheard. But freedom doesn't ring the same for everyone. Inside all corners of the culture, Black women and queer folk have dealt with the same oppression the music was built to escape. Season 2 of Louder Than A Riot examines who hip-hop marginalizes, and how misogynoir — the specific racist misogyny against Black women — is embedded into the fabric of the culture that we love.\n\nFrom Rico Nasty facing harassment from toxic fans, to Saucy Santana's unapologetically femme aesthetics in a queerphobic industry, to the assault case that put Megan Thee Stallion's image on trial, each episode of Louder Than A Riot unpacks the unspoken rules of rap that discriminate against a select few and have held the entire culture back. \n\nHosted by NPR Music's Sidney Madden and Rodney Carmichael, Louder Than A Riot confronts power from every angle – from the power the genre wields over its artists, to the power plays that its rulebreakers take in order to get heard. In the midst of a so-called Renaissance for women in rap, these stories reveal a rot at the core of the culture that reflects how voices, bodies, and rights are still policed in America.",
        },
        'im:price': {
          label: 'Get',
          attributes: {
            amount: '0',
            currency: 'USD',
          },
        },
        'im:contentType': {
          attributes: {
            term: 'Podcast',
            label: 'Podcast',
          },
        },
        rights: {
          label: '© Copyright 2020-2021 NPR - For Personal Use Only',
        },
        title: {
          label: 'Louder Than A Riot - NPR',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/louder-than-a-riot/id1532093071?uo=2',
          },
        },
        id: {
          label: 'https://podcasts.apple.com/us/podcast/louder-than-a-riot/id1532093071?uo=2',
          attributes: {
            'im:id': '1532093071',
          },
        },
        'im:artist': {
          label: 'NPR',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/npr/125443881?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '1525',
            term: 'Music Interviews',
            scheme: 'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
            label: 'Music Interviews',
          },
        },
        'im:releaseDate': {
          label: '2023-03-16T02:00:00-07:00',
          attributes: {
            label: 'March 16, 2023',
          },
        },
      },
    ],
  },
}
