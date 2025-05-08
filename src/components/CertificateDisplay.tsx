
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  image: string;
  issuer: string;
  date: string;
  score?: string;
  description: string;
}

interface CertificateDisplayProps {
  certificate: Certificate;
}

const CertificateDisplay = ({ certificate }: CertificateDisplayProps) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-900/60 text-white border-none">
      <div className="md:flex">
        <div className="md:w-1/2 bg-black/40 flex items-center justify-center p-4">
          <img 
            src={certificate.image} 
            alt={certificate.title} 
            className="max-h-[350px] object-contain" 
          />
        </div>
        <div className="md:w-1/2 p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-white mb-2">{certificate.title}</h3>
            {certificate.score && (
              <Badge className="bg-pink-600 hover:bg-pink-700">{certificate.score}</Badge>
            )}
          </div>
          
          <div className="flex items-center text-gray-300 mb-4">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">{certificate.date}</span>
          </div>
          
          <p className="text-gray-300 mb-4">
            <span className="font-semibold">Issued by:</span> {certificate.issuer}
          </p>
          
          <p className="text-gray-300">{certificate.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default CertificateDisplay;
