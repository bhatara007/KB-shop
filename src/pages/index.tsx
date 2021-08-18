import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Navbar from '../components/Navbar';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  return (
    <div>
      <Navbar />
    </div>
  );
}
