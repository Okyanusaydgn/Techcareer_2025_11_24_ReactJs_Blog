// rfce ==> TAB

// REACT
import React from 'react';

// I18N
import { withTranslation } from 'react-i18next';

// COMPONENTS
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';

// ROUTER
import { Route, Routes } from 'react-router-dom';
import BlogCategoryList from './components/blog_category/BlogCategoryList';
import BlogCategoryView from './components/blog_category/BlogCategoryView';
import BlogCategoryCreate from './components/blog_category/BlogCategoryCreate';
import BlogCategoryUpdate from './components/blog_category/BlogCategoryUpdate';

// ROUTER APP COMPONENT
function RouterApp() {
  return (
    <React.Fragment>
      {/* HEADER */}
      <HeaderComponent logo="fa-solid fa-blog" />

      {/* MAIN */}
      {/* <MainComponent /> */}
      <Routes>
        {/* Root Path */}
        <Route path={'/'} element={<MainComponent />} />
        <Route path={'/index'} element={<MainComponent />} />

        {/* Blog Category */}
        <Route path={'/blog/category/list'} element={<BlogCategoryList />} />
        <Route path={'/blog/category/view/:id'} element={<BlogCategoryView />} />
        <Route path={'/blog/category/create'} element={<BlogCategoryCreate />} />
        <Route path={'/blog/category/update/:id'} element={<BlogCategoryUpdate />} />
      </Routes>

      {/* FOOTER */}
      <FooterComponent copy="&copy; Bütün Haklar Saklıdır." />
    </React.Fragment>
  );
}

// HOC withTranslation
export default withTranslation()(RouterApp);
