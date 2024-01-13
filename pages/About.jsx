import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>
        Welcome to Our Online Haven of Style and Comfort</h1>
      <div className="about-content">
        <p>
          Step into our virtual boutique, where we've meticulously curated a collection of stylish, high-quality products that cater to the discerning shopper. Our mission is to provide a unique and enjoyable shopping experience that reflects our passion for fashion, technology, and comfort.
          We believe that fashion is a form of self-expression and a reflection of one's individuality. With that in mind, we've carefully selected products that range from classic vintage pieces to cutting-edge contemporary designs. Whether you seek a timeless leather jacket to add a touch of sophistication to your wardrobe or a pair of noise-canceling headphones to immerse yourself in your favorite tunes, we have something for every taste and lifestyle.
          Our commitment to quality is unwavering. We work closely with our suppliers to ensure that every item meets our strict standards. Our products are sourced from reputable manufacturers and undergo rigorous quality control checks to guarantee customer satisfaction.
          At our store, shopping is more than just making a purchase; it's about discovering unique treasures and indulging in the joy of finding the perfect item that resonates with you. We strive to create a seamless and enjoyable shopping experience, offering personalized recommendations, secure payment options, and timely delivery.
          Thank you for choosing our store. We hope you find something special that inspires you and brings a smile to your face. Happy shopping!
        </p>
      </div>
      <Footer />
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <p>Contact Us:</p>
      <ul>
        <li>Email: any@anydomain.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Main St, Anytown, USA</li>
      </ul>
    </div>
  )
}

export default About;