export const metadata = {
  title: 'Insolvency Process',
  description: 'Page description',
}


import Footer from '@/components/ui/footer';
import React from 'react';

const InsolvencyProcess = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Insolvency Process</h1>
          </div>

          {/* Download PDFs */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">DOWNLOADS</h2>
            <div className="mt-4">

              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">1. Form_B</p>
                </div>
                <div>
                  <a href="/pdfs/Form_B.docx" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>


              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">2. Form_C</p>
                </div>
                <div>
                  <a href="/pdfs/Form_C.docx" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>


              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">3. Form_CA</p>
                </div>
                <div>
                  <a href="/pdfs/Form_CA.docx" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>


              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">4. Form_D</p>
                </div>
                <div>
                  <a href="/pdfs/Form_D.docx" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>


              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">5. Form_E</p>
                </div>
                <div>
                  <a href="/pdfs/Form_E.docx" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>


              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">6. Form_F</p>
                </div>
                <div>
                  <a href="/pdfs/Form_F.docx" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">7. Public Announcement</p>
                </div>
                <div>
                  <a href="/pdfs/Public Announcement Form A.pdf" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">8. CIRP Admission Order</p>
                </div>
                <div>
                  <a href="/pdfs/Admission Order.pdf" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">9. List of Creditors 19 July, 2023</p>
                </div>
                <div>
                  <a href="/pdfs/List of Creditors 19 July, 2023.pdf" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">10. Financial Statement 31 March 2023</p>
                </div>
                <div>
                  <a href="/pdfs/Balance Sheet March 2023.pdf" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="mr-4">10. Form_G</p>
                </div>
                <div>
                  <a href="/pdfs/Form G Expression of Interest.pdf" download>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      Download File
                    </button>
                  </a>
                </div>
              </div>

              {/* Repeat the above pattern for other files */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default InsolvencyProcess;
