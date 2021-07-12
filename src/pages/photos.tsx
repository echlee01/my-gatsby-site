import { chakra, Text } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { PhotosPageQuery } from '../../graphql-types';
import Layout from '../components/Layout';

const CircularGatsbyImage = chakra(GatsbyImage, {
    baseStyle: {
        borderRadius: 'full',
        width: '50%',
    },
});

type PhotosPageProps = PageProps<PhotosPageQuery>;

const PhotosPage = ({ data }: PhotosPageProps): JSX.Element => {
    const { nodes: photoNodes } = data.allFile;

    return (
        <Layout pageTitle="Photos Page">
            <Text>Welcome to the Photos page.</Text>
            {photoNodes.map((photoNode) => {
                const photoImage = getImage(photoNode?.childImageSharp?.gatsbyImageData);
                return (
                    photoImage !== undefined && (
                        <CircularGatsbyImage
                            key={photoNode.id}
                            image={photoImage}
                            alt={photoNode.name}
                        />
                    )
                );
            })}
        </Layout>
    );
};

export const query = graphql`
    query PhotosPage {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
            nodes {
                childImageSharp {
                    gatsbyImageData(
                        aspectRatio: 1
                        placeholder: BLURRED
                        transformOptions: { cropFocus: CENTER }
                    )
                }
                name
                id
            }
        }
    }
`;

export default PhotosPage;
