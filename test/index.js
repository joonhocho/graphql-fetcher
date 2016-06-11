import {describe, it} from 'mocha';
import {expect} from 'chai';
import createGraphQLFetcher from '../lib';
import fetch from 'node-fetch';


describe('GraphQL Fetcher', () => {
  const fetcher = createGraphQLFetcher({
    url: 'https://www.graphqlhub.com/graphql',
    fetch,
  });

  it('tests fetcher', async (done) => {
    try {
      const data = await fetcher({
        query: `
          query q($id: ID!) {
            hn2 {
              node(id: $id) {
                id
                ... on HackerNewsV2Story {
                  url
                }
              }
            }
          }
        `,
        variables: {
          id: 'aXRlbToxMTcxNjk3NQ==',
        },
      });
      expect(data).to.eql({
        data: {
          hn2: {
            node: {
              id: 'aXRlbToxMTcxNjk3NQ==',
              url: 'http://facebook.github.io/reason/',
            },
          },
        },
      });
      done();
    } catch (e) {
      done(e);
    }
  });
});
