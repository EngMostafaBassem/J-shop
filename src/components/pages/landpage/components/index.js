import React from 'react'
import Nav from '../components/nav'
import Blogs from './blogs'
import Collection from './collection'
import Companies from './companies'
import CTA from './cta'
import Footer from './footer'
import Header from './header/header'
import SampleProduct from './sample-products'
import Testimonials from './testimonials'
const LandPage=()=>{
    const sampleProduct1={
          imgUrl:'assets/images/image_24-removebg-preview.png',
          title:'Gold Woven Chain Bracelet in Black',
          subtitle:'This bracelet features a 5MM Stainless Steel chain with Nylon cord braiding. Each bracelet includes a polishing pad and a cotton jewelry pouch. Proudly made by hand in Atlanta, GA.',
          price:'€ 549.29 '
    }
    const sampleProduct2={
        imgUrl:'assets/images/image_25-removebg-preview.png',
        title:'Gold Black Coral Ring',
        subtitle:'A 14K yellow gold ring Two Hawaiian Black Coral inlaid strips, 14.5x2mm Ring sizes 4-8 Contact us for additional ring sizes To our valued International Customers, an extra CITES charge will be added to your order',
        price:'€ 320.99'
  }
    const collection=[
        {
        imgUrl:'assets/images/image.png',    
        title:'J-Shop’s best Collections',
        subtitle:'Comfort',
        desc:'We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design.'
        },
        {
        imgUrl:'assets/images/image2.png',    
        subtitle:'100% Gold',
        desc:`Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely the ones who brought the custom of wearing gold chains to modern men's everyday life. There are a few reasons why do men wear gold chains.`,
        reversed:true
        },
        {
        imgUrl:'assets/images/image3.png',   
        title:'Trendy',
        desc:`Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely the ones who brought the custom of wearing gold chains to modern men's everyday life. There are a few reasons why do men wear gold chains.`,
        goShopping:true
        },

 ]
    return(
        <>
      
        <Header/>
        <SampleProduct
          product={sampleProduct1}
        />

         <SampleProduct
          product={sampleProduct2}
          isReversed
        />
        {collection.map((item,idx)=><Collection key={idx} collection={item}/>) }
        <Companies/>
        <Testimonials/>
        <CTA/>
        <Blogs/>
        </>
    )

}
export default LandPage