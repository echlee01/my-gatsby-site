<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  UKC Website built with Gatsby
</h1>

## 🚀 Quick start

1.  **Install gatsby-cli and clone this repo**

    ```shell
    npm install -g gatsby-cli
    git clone https://github.com/simon-nctran/ukc-website.git
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd ukc-website/
    npm install
    gatsby develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see the site update in real-time!

4.  **Learn more**

    -   [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    -   [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    -   [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    -   [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    -   [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    -   [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Tooling

1. **Install VSCode Extensions**

    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
    - [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
    - [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
    - [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
    - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

2. **Use [`gatsby-plugin-graphql-codegen`](https://github.com/d4rekanguok/gatsby-typescript/tree/master/packages/gatsby-plugin-graphql-codegen#code-generation)**

    Pages (e.g. src/pages/index.tsx):

    ```js
    // Query is made outside of React Component and passed in as props.data

    import { PageProps } from 'gatsby';
    import { IndexPageQuery } from '../../graphql-types'

    type IndexPageProps = PageProps<PhotosPageQuery>;

    const IndexPage = (props: IndexPageProps): JSX.Element => {
      ...
    }

    export const query = graphql`
      query IndexPage {
          ...
      }
    `;
    ```

    Components (e.g. src/components/Layout.tsx):

    ```js
    // Query is made inside React Component and assigned to any variable (e.g. data)

    import { graphql, useStaticQuery } from 'gatsby';
    import { LayoutQuery } from '../../graphql-types';

    const Layout = (props: LayoutProps): JSX.Element => {
      const data: LayoutQuery = useStaticQuery(graphql`
          query Layout {
              ...
          }
      `);

      ...
    }
    ```
