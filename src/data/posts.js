import { gql } from '@apollo/client';

export const QUERY_ALL_POSTS = gql`
  {
    posts(first: 10000) {
      edges {
        node {
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          id
          categories {
            edges {
              node {
                categoryId
                id
                name
                slug
              }
            }
          }
          content
          date
          excerpt
          modified
          postId
          title
          slug
        }
      }
    }
  }
`;

export function getQueryPostBySlug(slug) {
  return gql`
    query {
      postBy(slug: "${slug}"){
        author {
          node {
            avatar {
              height
              url
              width
            }
            id
            name
            slug
          }
        }
        id
        categories {
          edges {
            node {
              categoryId
              id
              name
              slug
            }
          }
        }
        content
        date
        excerpt
        modified
        postId
        title
        slug
      }
    }
  `;
}

export function getQueryPostsByCategoryId(categoryId) {
  return gql`
    query {
      posts(where: { categoryId: ${categoryId} }) {
        edges {
          node {
            author {
              node {
                avatar {
                  height
                  url
                  width
                }
                id
                name
                slug
              }
            }
            id
            categories {
              edges {
                node {
                  categoryId
                  id
                  name
                  slug
                }
              }
            }
            content
            date
            excerpt
            modified
            postId
            title
            slug
          }
        }
      }
    }
  `;
}

export function getQueryPostsByAuthorSlug(slug) {
  return gql`
    query {
      posts(where: {authorName: "${slug}"}) {
        edges {
          node {
            categories {
              edges {
                node {
                  categoryId
                  id
                  name
                  slug
                }
              }
            }
            date
            excerpt
            id
            modified
            postId
            slug
            title
          }
        }
      }
    }
  `;
}
