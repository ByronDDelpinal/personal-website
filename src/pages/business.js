import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BlogPreviewList from '../components/blog-preview-list';
import { graphql } from 'gatsby';

function BusinessIndex(props) {
  /**
   * Gets all of the unique categories from the list of business objects.
   * It also adds "All" to the beginning and sets it to active as a page default.
   *
   * Modifies state directly. Does not return.
   *
   * @return {Array} An array of category objects { name: string, selected: bool}
   */
  const getUniqueCategories = () => {
    const allCategories = Array.from(
      props.data.allContentfulBusinesses.nodes
    ).map(business => business.category);

    allCategories.unshift('all');

    const uniqueCategories = allCategories.filter(
      (value, index, self) => self.indexOf(value) === index
    );

    const uniqueObjects = uniqueCategories.map(category => ({
      name: category,
      selected: category === 'all' ? true : false,
    }));

    return uniqueObjects;
  };

  /**
   * Loops through the category list and sets the one passed as a apram to active.
   * Modifies state directly. Does not return.
   *
   * @param {string} categoryName - The name of the category
   */
  const setCategoryToActive = categoryName => {
    const newCategories = Array.from(categories);

    newCategories.map(newCategory => {
      newCategory.selected = newCategory.name === categoryName;
      return newCategory;
    });

    setCategories(newCategories);
  };

  /**
   * Filters the list if it's a category that's not "all". If it's "all", it just resets
   * the list to the page default. Also resets the sort in both cases.
   * Modifies state directly. Does not return.
   *
   * @param {string} categoryName - The name of the category
   */
  const filterBusinesses = categoryName => {
    const sortByElement = document.querySelector('#sort-by');

    // Handle "All" separately since it's a reset
    if (categoryName === 'all') {
      // This goes back to the default
      setCategoryToActive(categoryName);
      setBusinesses(props.data.allContentfulBusinesses.nodes);
      // This resets the sort for the user since that's not handled by the filter
      if (sortByElement) sortByElement.value = '';
      return;
    }

    const allBusinesses = Array.from(props.data.allContentfulBusinesses.nodes);

    const filteredBusinesses = allBusinesses.filter(
      business => business.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (sortByElement) sortByElement.value = '';

    setCategoryToActive(categoryName);
    setBusinesses(filteredBusinesses);
  };

  /**
   * Sorts the list if it's a valid direction. If it's not a valid direction,
   * it just resets the sort to the page default.
   * Modifies state directly. Does not return.
   *
   * @param {string} direction - asc/desc/null
   */
  const sortBusinesses = direction => {
    if (!direction) {
      // This goes back to the default
      setBusinesses(props.data.allContentfulBusinesses.nodes);
      return;
    }

    const sortedBusinesses = Array.from(businesses).sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase

      if (direction === 'asc') {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
      }

      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;

      return 0;
    });

    setBusinesses(sortedBusinesses);
  };

  const siteTitle = `${props.data.site.siteMetadata.title} | Businesses`;
  const [businesses, setBusinesses] = useState(
    props.data.allContentfulBusinesses.nodes
  );
  const [categories, setCategories] = useState(getUniqueCategories());

  return (
    <div class="business-index-page">
      <Helmet title={siteTitle} />
      <Layout>
        <div className="container">
          <div className="text-center pad-20">
  <h2 className="section-title">{businesses.length} Local Listings</h2>
          </div>
          <div className="facets">
            {categories.map(category => (
              <button
                className={`facet${category.selected ? ' selected' : ''}`}
                onClick={() => filterBusinesses(category.name)}
              >
                {category.name}
              </button>
            ))}
            <select
              className="facet"
              id="sort-by"
              onChange={event => sortBusinesses(event.target.value)}
            >
              <option value="">Sort By ▼</option>
              <option value="asc">Sort: A-Z</option>
              <option value="desc">Sort: Z-A</option>
            </select>
          </div>
          <BlogPreviewList businesses={businesses} />
        </div>
      </Layout>
    </div>
  );
}

export default BusinessIndex;

export const pageQuery = graphql`
  query LocalBusinessQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBusinesses {
      nodes {
        category
        id
        name
        image {
          file {
            url
          }
          fluid(maxWidth: 1800) {
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        supportSummary {
          json
        }
        type
        urlName
        website
      }
    }
  }
`;
