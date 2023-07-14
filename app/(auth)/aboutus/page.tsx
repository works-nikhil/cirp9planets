export const metadata = {
    title: 'Sign In - Open PRO',
    description: 'Page description',
  }
  
import Footer from '@/components/ui/footer'
  import Link from 'next/link'
  
  export default function AboutUs() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">About Us</h1>
            </div>

            <h3 className="h3">Overview</h3>
            <h5 className="h5 py-12">
              9Planets Products Private Limited, founded by Shekhar Parab and
              Aishwarrya Parab, is committed to offering sustainable,
              eco-friendly, and high-quality products. The company has
              established a cutting-edge manufacturing facility for producing
              rigid PVC sheets of various thicknesses. This state-of-the-art
              facility is fully automated, ensuring the delivery of products
              that meet both domestic and international quality standards.
              9Planets products boast the whitest color available and undergo
              thorough testing with digital flatbed printers to ensure optimal
              quality standards. Additionally, our foamed PVC sheets are
              lightweight, rigid, and come in a range of colors, thicknesses,
              and sheet sizes.
            </h5>

            <h3 className="h3">VISION STATEMENT</h3>
            <h5 className="h5 py-12">
              9Planets Products Private Limited is a leading manufacturer of PVC
              sheets, including Rigid PVC Foam boards, Coextruded, Free Foam,
              and Integral Foam/Celluka Sheets. Our advanced technology enables
              us to produce high-quality materials widely used in outdoor mass
              media marketing indication panels, advertising campaign panels,
              meter boxes, sign and name boards, partitions, studio decorations,
              wall claddings, exhibition stands, road signs, bathroom and
              kitchen furniture, ventilation ducts, chemical storage tanks,
              thermoformed articles, sound insulation covers, seafood storage
              rooms, laminated texturized doorways, display doorways, convenient
              homes and cabins, plantation homes, fencing, and porches. We take
              pride in offering eco-friendly and sustainable products that serve
              as the best alternative to wood. At 9Planets Products Private
              Limited, we prioritize nurturing talent, honing skills, and
              creating a history of excellence every day. Our ultimate goal is
              to provide our customers with the best possible solutions that
              meet their requirements while leveraging our capabilities.
            </h5>

            <h3 className="h3">MISSION STATEMENT</h3>
            <h5 className="h5 py-12">
              "Sustainable, eco-friendly & quality products bearing in mind the
              best interests of our clients"
            </h5>

            <h3 className="h3">KEY HIGHLIGHTS OF THE COMPANY</h3>
            <h5 className="h5 py-12">
              9Planets Products Private Limited is the first manufacturing
              company to establish its infrastructure in the Khed City
              Industrial Park (DTA) located in Rajgurunagar, Pune. Our strategic
              business structure allows easy access to major manufacturing
              clusters such as Pimpri-Chinchwad, Bhosari, Talegaon, Chakan, and
              Ranjangaon, reducing transportation time and losses associated
              with long travel hours. Our prime location is just 50 kilometers
              away from Pune Metropolis, with convenient access to the Mumbai
              Seaport, International Airport, and Mumbai-Pune Expressway.
              Despite being a young business, our excellent product quality and
              accessibility have earned us numerous orders. We prioritize
              maintaining the highest standards, and therefore, 9Planets
              Products Private Limited aims to achieve ISO 9000 certification.
              Our commitment to producing top-quality products remains
              uncompromised. Furthermore, our products are lead-free, and we
              provide a certificate of assurance upon customer request, adhering
              to our policies and guidelines.
            </h5>

            <h3 className="h3">OUR PROMISE</h3>
            <h5 className="h5 py-12">
              9Planets Products Private Limited is the brainchild of Shekhar &
              Aishwarrya Parab. We hold our values dear  we provide only the
              best quality products, made from the best quality raw materials,
              for our customers who deserve only the best.
            </h5>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
  