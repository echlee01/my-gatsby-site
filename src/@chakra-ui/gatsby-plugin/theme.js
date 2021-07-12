import { extendTheme } from '@chakra-ui/react';

const theme = {
    colors: {
        primary: 'rebeccapurple',
    },
};

export default extendTheme(theme);

// Use this file to override the default Chakra UI theme.
// The above example allows us to access "rebeccapurple"
// from color props by referencing 'primary'

// The way this works is through something called "shadowing"
// https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/

// DON'T CHANGE THE NAME OR LOCATION OF THIS FILE
