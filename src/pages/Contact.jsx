export default function Contact () {
    return (
        <section className="bg-[#1E1E20]/50 mt-[150px]" id="contact">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-[173px] gap-10 lg:px-[120px] px-[30px] lg:py-[223px] py-10 lg:w-full lg:h-[506px]">
                <h1 className="font-[Inter] font-bold lg:text-6xl text-4xl text-white text-center lg:text-left">
                    Contact us for the service you want to use
                </h1>
                <a href="">
                    <button className="bg-[#E8618C] hover:bg-[#E8618C]/60 border border-[#E8618C] rounded-sm py-[17px] w-[201px] font-[Nunito_Sans] font-bold text-[21px] text-white cursor-pointer">
                        Contact us
                    </button>
                </a>
            </div>
        </section>
    )
}