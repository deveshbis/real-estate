
import { useLoaderData } from "react-router-dom";
import AgentCard from "./AgentCard";
import agentPic from '../assets/agent.webp';
import 'animate.css';
import useAuth from "../Hooks/useAuth";
import HelmetTitle from "../components/HelmetTitle/HelmetTitle";


const Agent = () => {

    const agent = useLoaderData();
    const { user } = useAuth();
    if (!user) {
        return <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    }

    return (
        <div>
            <HelmetTitle title="Agent"></HelmetTitle>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={agentPic} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold animate__flip">MEET OUR <br />
                            GENIOUS PEOPLE</h1>
                        <p className="py-6">Meet one of our genius people, a distinguished real estate agent who combines deep market knowledge with unmatched professionalism and a passionate commitment to tailored client service. With over a decade of experience in the real estate industry, our agent has established a reputation for navigating the complexities of the market with ease and efficiency. <br />
                            <hr />
                            Our agent excels in both residential and commercial real estate, providing expert advice that is informed by the latest market trends and economic indicators. Their approach is client-centered, ensuring that each client receives personalized attention and guidance tailored to their unique needs and aspirations. Whether helping first-time buyers navigate their initial purchase, assisting sellers in maximizing their property value, or advising seasoned investors on profitable opportunities, our agents advice is always insightful and backed by thorough research.</p>

                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-semibold text-center mb-2 mt-5 ">HERE IS OUR AGENTS</h1>
            <p className="text-center">Skilled Real Estate Agent with Extensive Market Knowledge, <br />Dedicated to Finding the Perfect Homes and Investment Opportunities for Clients</p>
            <div className="mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                {
                    agent.map(agents => <AgentCard key={agents.id} agent={agents}></AgentCard>)
                }
            </div>
        </div>
    );
};

export default Agent;