import { GoPlus } from "react-icons/go";

const FaqBox = ({ question, answer ,activeIndex ,onClick ,special }) => {
    return (
        <div className={`py-3  border-b border-b-secondary/20  w-[1200px] cursor-pointer ${special}`} onClick={onClick}>
            <div className="flex justify-between mb-4 items-center">
                <p className="text-xl font-primary text-primary">{question}</p>
                <GoPlus className={`text-white text-xl transition-all ease-in-out duration-200 ${activeIndex ? 'rotate-45':'rotate-0'}`} />
            </div>
            {activeIndex && <p className="text-sm transition-all ease-in-out duration-300 text-secondary font-primary max-w-[90%]">
                {answer}
            </p>}
        </div>
    )
}

export default FaqBox