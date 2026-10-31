const excerpt =
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,';

const body = [
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
];

const author = {
  name: 'Kate',
  avatar: '/images/da69b4f56a121990b6e384daa20ce95e-bpfull.jpg',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

const tags = ['Branding', 'Typography'];

export const posts = [
  {
    slug: 'best-crm-software-2015',
    title: 'Best CRM Software 2015',
    image: '/images/preview-12.jpg',
    thumb: '/images/preview-12-760x430.jpg',
    categories: ['Portfolio'],
    date: 'September 07, 2015 12:43 pm',
    comments: 0,
    likes: 2,
  },
  {
    slug: 'the-world-doesnt-reward-mediocrity',
    title: 'The World Doesn’t Reward Mediocrity',
    image: '/images/preview-14.jpg',
    thumb: '/images/preview-14-760x430.jpg',
    categories: ['Portfolio'],
    date: 'September 07, 2015 12:42 pm',
    comments: 0,
    likes: 0,
  },
  {
    slug: 'must-dos-of-an-entrepreneur',
    title: 'Must-Dos Of an Entrepreneur',
    image: '/images/preview-5.jpg',
    thumb: '/images/preview-5-760x430.jpg',
    categories: ['Portfolio'],
    date: 'September 07, 2015 12:41 pm',
    comments: 0,
    likes: 0,
  },
  {
    slug: 'a-perfect-day',
    title: 'A Perfect Day',
    image: '/images/Depositphotos_65552723-870x696.jpg',
    thumb: '/images/Depositphotos_65552723-760x430.jpg',
    categories: ['Gallery', 'Masonry 2 columns', 'Masonry 3 columns', 'Portfolio 2 columns', 'Portfolio 3 columns'],
    date: 'August 18, 2015 13:10 pm',
    comments: 1,
    likes: 0,
  },
].map((post) => ({ excerpt, body, author, tags, ...post }));

export const findPost = (slug) => posts.find((post) => post.slug === slug);
