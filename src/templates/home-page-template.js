import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

// Components
import Content, { HTMLContent } from '../components/content';
import Section from '../components/section';

export const HomePageTemplate = ({
  title,
  content,
  contentComponent,
  openGraph,
  meta
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='keywords' content={meta.keywords} />
        <meta property='og:description' content={openGraph.description} />
        <meta property='og:title' content={openGraph.title} />
        <meta property='og:description' content={openGraph.description} />
        <meta property='og:type' content={openGraph.type} />
        <meta property='og:url' content={openGraph.url} />
        <meta property='og:image' content={openGraph.image} />
      </Helmet>
      <main>
        <Section fullWidth={false} themeNumber={0}>
          <PageContent className='content' content={content} />
        </Section>
      </main>
      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      <script src={withPrefix('/scripts/netlify-identity-init.js')} />
    </div>
  );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <HomePageTemplate
      openGraph={{
        title: post.frontmatter.openGraphTitle,
        description: post.frontmatter.openGraphDescription,
        type: post.frontmatter.openGraphType,
        url: post.frontmatter.openGraphUrl,
        image: post.frontmatter.openGraphImage
      }}
      meta={{
        title: post.frontmatter.metaTitle,
        description: post.frontmatter.metaDescription,
        keywords: post.frontmatter.metaKeywords
      }}
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html} />
  );
};

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        metaTitle
        metaDescription
        metaKeywords
        openGraphTitle
        openGraphDescription
        openGraphType
        openGraphUrl
        openGraphImage
      }
    }
  }`;
