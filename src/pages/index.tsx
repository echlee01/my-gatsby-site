import { Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/Layout';

// eslint-disable-next-line arrow-body-style
const IndexPage = (): JSX.Element => {
    return (
        <Layout pageTitle="Home Page">
            <Text>Welcome to the Home page.</Text>
            <StaticImage
                alt="Wide Event Photo"
                src="../images/event.jpg"
                aspectRatio={21 / 9}
                placeholder="blurred"
                transformOptions={{ cropFocus: 'center' }}
            />
        </Layout>
    );
};

export default IndexPage;
