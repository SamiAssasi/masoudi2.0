import React from 'react'
import Header from '../components/Header'
import '../styles/global.scss'
import { graphql } from "gatsby";



const Index = ({ data }) => {
  return (
    <div>
    <Header title={data.contentfulHeader.title} description={data.contentfulHeader.description}></Header>
    </div>
    )
}

export const data = graphql`
  query headerQuery {
    contentfulHeader {
      title
      description 
    }
  }
`;

export default Index;

