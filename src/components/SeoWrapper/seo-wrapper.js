import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

function SeoWrapper({
  description,
  lang,
  meta,
  keywords,
  title,
  disableSiteName,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const titleTemplate = disableSiteName
          ? title
          : `%s | ${data.site.siteMetadata.title}`;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={titleTemplate}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : {
                      name: 'keywords',
                      content: [
                        'microsite',
                        'luxury',
                        'web',
                        'development',
                        'design',
                        'ui',
                        'ux',
                        'agency',
                        'internationalization',
                        'fast',
                        'optimized',
                      ].join(', '),
                    },
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SeoWrapper.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SeoWrapper.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SeoWrapper;

const detailsQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
