import localFont from 'next/font/local';

const Luciole = localFont({
  src: [
    { path: './Luciole-Regular.ttf', weight: '400', style: 'normal'},
    { path: './Luciole-Bold.ttf', weight: '700', style: 'normal'},
    { path: './Luciole-Regular-Italic.ttf', weight: '400', style: 'italic'},
    { path: './Luciole-Bold-Italic.ttf', weight: '700', style: 'italic'},
  ]
});

export default Luciole;
