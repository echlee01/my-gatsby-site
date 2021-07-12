import { Text } from '@chakra-ui/react';
import React from 'react';

import Layout from '../components/Layout';

// eslint-disable-next-line arrow-body-style
const AboutPage = (): JSX.Element => {
    return (
        <Layout pageTitle="About Us">
            <Text>Welcome to the About Us page.</Text>
        </Layout>
    );
};
export default AboutPage;
