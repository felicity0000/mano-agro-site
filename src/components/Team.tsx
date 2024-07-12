import { MdEmail } from "react-icons/md";
import company from "../assets/company structure.png";
const Team = () => {
  return (
    <div
      id="team"
      className="flex flex-col md:items-center px-4 md:px-48 pt-16"
    >
      <div className="py-8">
        <h2 className="text-green-600 font-semibold text-xl md:text-4xl">
          Team
        </h2>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <img src={company} />
      </div>
      <div>
        <div className="my-5">
          <h4 className="text-green-500">Director's Profile</h4>
          <div>
            {" "}
            <p className="text-justify tracking-tighter">
              <strong>Namoma Emmanuel Isaac</strong> is a pharmacist with over 5
              years of experience in pharmaceutical management, health systems
              strengthening, and providing administrative and technical support
              to the national quantification team in the supply chain of
              COVID-19 vaccines and related supplies. He has worked as a
              director at Mano Agro Inputs, a technical officer at UNEPI/MOH,
              and an associate supply chain technical officer at Medical Access
              Uganda Limited. In his professional experience, Isaac has worked
              with the Ministry of Health, UNEPI, and Medical Access, ensuring
              the availability of HIV-related supplies to the population in the
              Rwenzori region. He has also worked as a quality assurance intern
              at Joint Medical Stores, where he prequalified pharmaceutical and
              medical device suppliers, reviewed orders, and reviewed
              dossiers.In addition to his work at Medical Access, Isaac has held
              leadership positions at Mbarara University, St. Lukes Chapel
              Building Project Committee, and the Kit Ministry Leader. His
              skills include strong interpersonal and communication skills, good
              computer skills, problem-solving abilities, leadership, attention
              to detail, and excellent organizational skills. In addition to his
              work at Medical Access, Isaac has also been involved in sports,
              documentaries, reading and writing, travel, and entrepreneurship.
              His language proficiency includes English, Kiswahili, Lutuoro, and
              Lutooro.
            </p>
            <div className="mb-6 flex justify-start">
            <MdEmail size={24} className="text-green-600 mr-3" />
            <div>
              <h3 className="text-green-600 text-xl font-normal">Email</h3>
              <p className="text-gray-950  text-sm hover:text-green-500">namomemmanuel@gmail.com</p>
            </div>
          </div>
            <hr className=" border-t-2 border-green-500 my-5" />
            <p className="text-justify tracking-tighter">
              <strong>Mugide Jane</strong>, a Ugandan national, has a degree in Business
              Administration (Accounting) from Kyambogo University and has
              worked as an accounting officer at Duckhill Microfinance. She
              currently works at Mano Agro Inputs and has experience in monetary
              management and budget forecasting. Jane has strong interpersonal,
              communication, computer skills, teamwork, problem-solving,
              organizational, and pressure-management skills. She is fluent in
              English, Kiswahili, Luganda, and Lugwere. She has held leadership
              positions at Kamonkoli College and is a member of the Information
              Prefect Kamonkoli College.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
