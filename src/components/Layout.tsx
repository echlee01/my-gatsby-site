import { chakra, Container, Heading, HStack, Link, List, ListItem, Text } from '@chakra-ui/react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';

import { LayoutQuery } from '../../graphql-types';

const SiteTitle = chakra(Text, {
    baseStyle: {
        fontSize: '5xl',
        color: 'gray.500',
        fontWeight: 'bold',
    },
});

type LayoutProps = {
    pageTitle: string;
    children: React.ReactNode;
};

const Layout = ({ pageTitle, children }: LayoutProps): JSX.Element => {
    const data: LayoutQuery = useStaticQuery(graphql`
        query Layout {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const siteTitle = data?.site?.siteMetadata?.title;

    return (
        <Container as="main" maxWidth="500px" fontFamily="sans-serif">
            <title>
                {pageTitle} | {siteTitle}
            </title>
            <SiteTitle>{siteTitle}</SiteTitle>
            <nav>
                <HStack as={List} spacing="8">
                    <ListItem>
                        <Link as={GatsbyLink} to="/">
                            Home
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link as={GatsbyLink} to="/about">
                            About
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link as={GatsbyLink} to="/photos">
                            Photos
                        </Link>
                    </ListItem>
                </HStack>
            </nav>
            <Heading color="primary">{pageTitle}</Heading>
            {children}
        </Container>
    );
};
export default Layout;
