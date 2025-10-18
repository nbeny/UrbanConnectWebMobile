import { FiBriefcase, FiMapPin, FiCreditCard } from "react-icons/fi";
import { EntrepriseType } from "@/app/profile/page/data";

const CompanyCard = ({ company }: { company: EntrepriseType }) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-gray-900 rounded-2xl text-white shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full shadow-md">
          <FiBriefcase className="text-blue-400 w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{company.nomEntreprise}</h2>
          <p className="text-sm text-gray-400">{company.statusJuridique}</p>
        </div>
      </div>

      {/* Infos supplémentaires */}
      <div className="flex flex-col gap-2 pl-2">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <FiMapPin className="w-4 h-4" /> {company.adresseEntreprise}
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <FiCreditCard className="w-4 h-4" /> IBAN: {company.iban}
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <FiCreditCard className="w-4 h-4" /> BIC: {company.bic}
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <FiBank className="w-4 h-4" /> Banque: {company.bankName}
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <FiBriefcase className="w-4 h-4" /> Statut pro: {company.professionalStatus}
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
