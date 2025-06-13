import { BiCheck } from "react-icons/bi"

export default function Pricing() {
    return (
        <section className="bg-[#19191B] lg:pt-[240px] pt-[100px]" id="pricing">
            <div className="flex flex-col items-center justify-center mx-[30px] relative z-20">
                <h2 className="text-white font-[Nunito_Sans] text-5xl font-extrabold leading-[70.6px] pt-[44px] text-center">
                    Software Development Packages
                </h2>
                <p className="text-white font-[Inter] text-[16px] leading-[24px] font-normal mt-2 lg:w-[1058px] text-center">
                    Simplify offers various pricing packages to meet your needs.
                </p>
            </div>
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 lg:px-[120px] mx-[30px] lg:mx-0">
                {/* Basic Package */}
                <div className="flex flex-col bg-[#5454D4] text-white rounded-3xl p-5">
                    <h4 className="font-[Poppins] text-2xl font-semibold mb-4">
                        Basic Website Package
                    </h4>
                    <p className="font-[Inter] text-lg font-bold mb-4">
                        starting from $400
                    </p>
                    <p className="font-[Inter] text-md font-normal mb-4 text-white/70 text-center">
                        A clean and professional website tailored for individuals, startups, 
                        and small businesses looking to establish a strong online presence without breaking the bank.
                    </p>
                    <div className="w-full">
                        <a href="">
                            <button 
                                className="text-white font-[Arial] text-[15px] leading-[28px] font-bold px-2 py-3 w-full bg-[#E8618C] rounded-[10px] cursor-pointer hover:bg-[#E8618C]/70 transition-all duration-300 ease-in-out">
                                Contact Us
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-2 mt-4">
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Up to 5 pages</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Responsive design</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Basic SEO Optimization</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Project delivery in 1-2 weeks</li>
                        </ul>
                    </div>
                </div>
                {/* Business Package */}
                <div className="flex flex-col bg-[#5454D4] text-white rounded-3xl p-5">
                    <h4 className="font-[Poppins] text-2xl font-semibold mb-4">
                        Business Website Package
                    </h4>
                    <p className="font-[Inter] text-lg font-bold mb-4">
                        starting from $800
                    </p>
                    <p className="font-[Inter] text-md font-normal mb-4 text-white/70 text-center">
                        Designed for businesses ready to grow their brand online. 
                        This package offers a sleek, professional website that communicates trust, 
                        converts leads, and scales with your vision.
                    </p>
                    <div className="w-full">
                        <a href="">
                            <button 
                                className="text-white font-[Arial] text-[15px] leading-[28px] font-bold px-2 py-3 w-full bg-[#E8618C] rounded-[10px] cursor-pointer hover:bg-[#E8618C]/70 transition-all duration-300 ease-in-out">
                                Contact Us
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-2 mt-4">
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Up to 10 pages</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Responsive design</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>On-page SEO and Google indexing</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Social media + WhatsApp integration</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Project delivery in 2-3 weeks</li>
                        </ul>
                    </div>
                </div>
                {/* E-Commerce Package */}
                <div className="flex flex-col bg-[#5454D4] text-white rounded-3xl p-5">
                    <h4 className="font-[Poppins] text-2xl font-semibold mb-4">
                        E-Commerce Website Package
                    </h4>
                    <p className="font-[Inter] text-lg font-bold mb-4">
                        starting from $1,500
                    </p>
                    <p className="font-[Inter] text-md font-normal mb-4 text-white/70 text-center">
                        Built for brands that want to sell online with confidence. 
                        From product management to secure payments and mobile optimization — 
                        this package is your gateway to a full-scale digital storefront.
                    </p>
                    <div className="w-full">
                        <a href="">
                            <button 
                                className="text-white font-[Arial] text-[15px] leading-[28px] font-bold px-2 py-3 w-full bg-[#E8618C] rounded-[10px] cursor-pointer hover:bg-[#E8618C]/70 transition-all duration-300 ease-in-out">
                                Contact Us
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-2 mt-4">
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Product Listing & Management</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Full shopping cart & checkout system</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Integrated secure payment gateways</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Project delivery in 3-5 weeks</li>
                        </ul>
                    </div>
                </div>
                {/* Product Design Packages */}
                {/* Starter Design Package */}
                <div className="flex flex-col bg-[#5454D4] text-white rounded-3xl p-5">
                    <h4 className="font-[Poppins] text-2xl font-semibold mb-4">
                        Starter Design Package
                    </h4>
                    <p className="font-[Inter] text-lg font-bold mb-4">
                        starting from $150
                    </p>
                    <p className="font-[Inter] text-md font-normal mb-4 text-white/70 text-center">
                        For personal brands, solopreneurs, or early-stage projects. 
                        Get a clean, user-friendly interface that makes a lasting impression.
                    </p>
                    <div className="w-full">
                        <a href="">
                            <button 
                                className="text-white font-[Arial] text-[15px] leading-[28px] font-bold px-2 py-3 w-full bg-[#E8618C] rounded-[10px] cursor-pointer hover:bg-[#E8618C]/70 transition-all duration-300 ease-in-out">
                                Contact Us
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-2 mt-4">
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>1-3 screens/pages</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Mobile or Web interface</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Moodboard & color palette</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Delivery in 4-6 days</li>
                        </ul>
                    </div>
                </div>
                {/* Growth Design Package */}
                <div className="flex flex-col bg-[#5454D4] text-white rounded-3xl p-5">
                    <h4 className="font-[Poppins] text-2xl font-semibold mb-4">
                        Growth Design Package
                    </h4>
                    <p className="font-[Inter] text-lg font-bold mb-4">
                        starting from $350
                    </p>
                    <p className="font-[Inter] text-md font-normal mb-4 text-white/70 text-center">
                        Ideal for startups and growing brands. 
                        We design experiences that are not just beautiful, 
                        but also user-centric and conversion-focused.
                    </p>
                    <div className="w-full">
                        <a href="">
                            <button 
                                className="text-white font-[Arial] text-[15px] leading-[28px] font-bold px-2 py-3 w-full bg-[#E8618C] rounded-[10px] cursor-pointer hover:bg-[#E8618C]/70 transition-all duration-300 ease-in-out">
                                Contact Us
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-2 mt-4">
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>4-8 screens/pages</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>User flow & wireframes</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>UI kit & reusable components</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Delivery in 7-10 days</li>
                        </ul>
                    </div>
                </div>
                {/* Advanced Product Design Package */}
                <div className="flex flex-col bg-[#5454D4] text-white rounded-3xl p-5">
                    <h4 className="font-[Poppins] text-2xl font-semibold mb-4">
                        Advanced Product Design Package
                    </h4>
                    <p className="font-[Inter] text-lg font-bold mb-4">
                        starting from $750
                    </p>
                    <p className="font-[Inter] text-md font-normal mb-4 text-white/70 text-center">
                        For businesses launching full-scale platforms, apps, or dashboards. 
                        This package includes full UX strategy, design systems, and everything your developers need.
                    </p>
                    <div className="w-full">
                        <a href="">
                            <button 
                                className="text-white font-[Arial] text-[15px] leading-[28px] font-bold px-2 py-3 w-full bg-[#E8618C] rounded-[10px] cursor-pointer hover:bg-[#E8618C]/70 transition-all duration-300 ease-in-out">
                                Contact Us
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-2 mt-4">
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>10+ screens/pages</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Complete UX research & personas</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Fully interactive Figma prototype</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Dev handoff + design documentation</li>
                            <li className="flex gap-2 items-center text-[16px]"><BiCheck className="text-[#E8618C]" size={36}/>Delivery in 2-3 weeks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}