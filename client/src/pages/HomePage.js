import React from 'react'
import Layout from '../components/Layout/Layout'
import ContactForm from '../components/ContactForm'
import Carousel from '../components/Carousel'

function HomePage() {
  return (
    <Layout>
       <Carousel/>
       <ContactForm/>
    </Layout>
  )
}

export default HomePage