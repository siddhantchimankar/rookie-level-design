/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar : [
    {
      type: 'doc',
      id: 'intro',
    }, 
    {
      type: 'category',
      label: 'Low-level Design',
      items: [
        'Low-level-Design/tic-tac-toe',
      ],
    },
    {
      type: 'category',
      label: 'High-level Design',
      items: [
        'High-level-Design/Note',
      ],
    },
    {
      type: 'doc',
      id: 'Resources',
    },
    {
      type: 'doc',
      id: 'Blog',
      label: 'Personal Blog'
    },
    {
      type: 'doc',
      id: 'About',
    }
  ]
};

module.exports = sidebars;
