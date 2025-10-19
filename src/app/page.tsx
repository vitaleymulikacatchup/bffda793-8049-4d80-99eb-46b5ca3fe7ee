"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"View from car interior at night in Tokyo, featuring bustling street traffic and illuminated cityscape."},
  {"id":"about-image","url":"https://images.pexels.com/photos/34350854/pexels-photo-34350854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"towards the sky"},
  {"id":"product-1","url":"https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal."},
  {"id":"product-2","url":"https://images.pexels.com/photos/34322095/pexels-photo-34322095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"vegetarian pizza - Photo by Novkov Visuals"},
  {"id":"product-3","url":"https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a cheese pizza on a wooden table, ready to be served and enjoyed."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {name: "Home", id: "home"},
            {name: "Menu", id: "menu"},
            {name: "About", id: "about"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="CyberPunk Pizza"
          buttonText="Order Now"
          buttonVariant="text-stagger"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to CyberPunk Pizza"
            description="Experience the taste of the future with every slice."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url || "/public/images/placeholder.webp"}
            buttons={[
              { text: "View Menu", href: "menu" },
              { text: "Order Now", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="Our Mission"
            description="Bringing cyber-flavored pizza to your table."
            bulletPoints={[
              { title: "Quality Ingredients", description: "Only the best for our pizza.", icon: Sparkles },
              { title: "Futuristic Taste", description: "An experience beyond the ordinary." }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url || "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            title="Our Pizzas"
            description="Discover our delicious range of pizzas."
            products={[
              {
                id: "1",
                brand: "CyberPunk",
                name: "Pepperoni",
                price: "$15.00",
                rating: 5,
                reviewCount: "200",
                imageSrc: assetMap.find(a => a.id === "product-1")?.url || "/public/images/placeholder.webp"
              },
              {
                id: "2",
                brand: "CyberPunk",
                name: "Vegetarian",
                price: "$13.00",
                rating: 4,
                reviewCount: "150",
                imageSrc: assetMap.find(a => a.id === "product-2")?.url || "/public/images/placeholder.webp"
              },
              {
                id: "3",
                brand: "CyberPunk",
                name: "Cheese",
                price: "$12.00",
                rating: 5,
                reviewCount: "180",
                imageSrc: assetMap.find(a => a.id === "product-3")?.url || "/public/images/placeholder.webp"
              }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay Connected"
            title="Contact Us"
            description="Got questions? Want to place an order? Get in touch with us today."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url || "/public/images/placeholder.webp"}
            mediaPosition="left"
            inputPlaceholder="Your email address"
            buttonText="Send Message"
            termsText="We value your privacy. Unsubscribe anytime."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Company",
                items: [
                  { label: "About Us", href: "about" },
                  { label: "Careers", href: "#" }
                ]
              },
              {
                title: "Support",
                items: [
                  { label: "Contact", href: "contact" },
                  { label: "Privacy Policy", href: "#" }
                ]
              }
            ]}
            copyrightText="© 2025 CyberPunk Pizza"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
