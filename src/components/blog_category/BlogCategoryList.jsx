import React, { useEffect, useState } from 'react';

// ROUTER
import { useNavigate } from 'react-router-dom';

// API LIST CALL
import BlogCategoryApiService from '../../services/BlogCategoryApiService';

// FIUNCTION
function BlogCategoryList({ props, t, i18n }) {
  // FIELD

  // ROUTER
  let navigate = useNavigate();

  // STATE
  //const [] = React.useState();
  const [blogApiListData, setBlogApiListData] = useState([]); //default boş dizi

  // EFFECT
  useEffect(() => {
    // Component Did Mount
    fetchBlogList();
  }, []);

  // FUNCTION

  // FETCH BLOG LIST ASENKRON
  const fetchBlogList = async () => {
    try {
      // ASENKRON API ÇAĞRI
      // const response = await fetch('http://localhost:4444/blog/category/api/v1/list');
      const response = await BlogCategoryApiService.objectApiList();

      if (response.status === 200) {
        setBlogApiListData(response.data);
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
      }
    } catch (error) {
      console.error('Blog Category: ', error);
    }
  }; // end fetchBlogList



  // RETURN
  return <div className="mt-5">BlogCategoryList</div>;
}

export default BlogCategoryList;
