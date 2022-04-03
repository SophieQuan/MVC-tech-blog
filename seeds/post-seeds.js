const { Post } = require('../models');

const postdata = [{
        title: 'Donec posuere metus vitae ipsum.',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum.',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        content: 't has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was peets containing Lorem Ipsum passages',
        user_id: 4
    },
    {
        title: 'Pellentesque eget nunc.',
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
        user_id: 7
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        content: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on. ',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        content: 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        user_id: 1
    },
    {
        title: 'Duis ac nibh.',
        content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also.',
        user_id: 9
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        content: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        user_id: 5
    },
    {
        title: 'In hac habitasse platea dictumst.',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        user_id: 3
    },
    {
        title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        content: 'ined chunks as necessary, making this the first true gener',
        user_id: 10
    },
    {
        title: 'Donec dapibus.',
        content: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        user_id: 8
    },
    {
        title: 'Nulla tellus.',
        content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.',
        user_id: 3
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        content: ' The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        user_id: 3
    },
    {
        title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuer.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        user_id: 6
    },
    {
        title: 'Etiam justo.',
        content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
        user_id: 4
    },
    {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        user_id: 6
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea volu?',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;