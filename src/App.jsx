import { PDFDownloadLink } from "@react-pdf/renderer";
import OrdoVierge from "./components/OrdoVierge";
import Imaging from "./components/Imaging";
import BillingForm from "./components/BillingForm";
import './App.css'

const App = () => (
  <div>
    <h1>Generate PDF</h1>
    <div className="pdf_files">
      <PDFDownloadLink document={<OrdoVierge />} fileName="ordo_vierge.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Ordo Vierge PDF"
        }
      </PDFDownloadLink>

      <PDFDownloadLink document={<BillingForm />} fileName="billing.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Billing Form PDF"
        }
      </PDFDownloadLink>

      <PDFDownloadLink document={<Imaging />} fileName="imaging.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Imaging Form PDF"
        }
      </PDFDownloadLink>
    </div>
  </div>
);

export default App;
