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

            <h5 className="h5 py-12">
              9 Planets Products Pvt Ltd was incorporated on the 22nd day of
              February 2012. We are a leading manufacturing company with a
              state-of-the-art plant situated at PLOT NO- I-20, KHED CITY DTA,
              KHED (RAJGURUNAGAR), PUNE-410505.
            </h5>

            <h3 className="h3">Product Overview:</h3>
            <h5 className="h5 py-12">
              At 9 Planets Products Pvt Ltd, we specialize in providing
              high-quality foam and PVC boards that cater to various industries
              and applications. Our products are known for their exceptional
              features and superior performance, making them an ideal substitute
              for wood, aluminum, and composite panels.
            </h5>

            <h3 className="h3">Features:</h3>
            <h5 className="h5 py-12">
              Our Foam Boards come with a range of outstanding features,
              including: Waterproof, flame retardant, acid and alkali
              resistance, decay resistance, and resistance to light, heat,
              noise, and vibration. Superior performance compared to other wood
              materials. Ideal substitute for wood, aluminum, and composite
              panels. PVC Boards are characterized by: A smooth, high-hardness
              surface that is not easily scratched. Commonly used in making
              cabinets, furniture, and other applications. Category: Our product
              range is subdivided into the following categories: <br></br><br></br>
              Free Foam:<br></br><br></br>
              These lightweight cellular rigid Free Foam unplasticized PVC
              (uPVC) boards weigh 50% or less than rigid PVC. They have a
              homogenous cellular core with a mat and closed cell surface
              finish. Perfect for outdoor applications, indoor furniture, and
              decorative materials due to their weather resistance and ease of
              processing.<br></br> <br></br>
              PVC Compact Sheet: <br></br><br></br>These boards are made of opaque
              rigid unplasticized PVC (uPVC) and have a flawless glossy surface.
              They offer exceptional resistance to UV radiation, chemical
              erosion, and impact. Ideal for outdoor applications,
              high-demanding construction, and industrial fields. <br></br><br></br>
              Properties of PVC: <br></br><br></br>PVC is a thermoplastic comprising 57% chlorine (derived from
              industrial-grade salt) and 43% carbon (derived predominantly from
              oil/gas via ethylene). Unlike other polymers that heavily rely on
              crude oil or natural gas (non-renewable resources), PVC can be
              considered a natural resource-saving plastic. The chlorine content
              also provides excellent fire resistance to our products.<br></br><br></br> Standard
              Colors:<br></br><br></br> Our EXPAN, SOLVIN, and boards come in a range of standard
              colors, including green, wood color, red, white, blue, pink, grey,
              and black. Additionally, dual-color options are available, with
              combinations like white inner foam core and blue outer skins. <br></br><br></br>At 9
              Planets Products Pvt Ltd, we are committed to providing top-notch
              products that meet the highest industry standards. Our foam and
              PVC boards have a wide range of applications, ensuring that they
              meet your specific needs with unmatched quality and reliability.<br></br><br></br>
              To read more about our products: Please click
              <a href="http://www.9planets.co.in/" class="text-blue-500 bg-transparent no-underline">&nbsp;<u>here</u></a>
            </h5>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
  