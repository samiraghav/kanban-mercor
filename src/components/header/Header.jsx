import IconEdit from "../../assets/icons/edit.svg";
import IconLink from "../../assets/icons/link.svg";
import IconCreate from "../../assets/icons/create.svg";
import IconFilter from "../../assets/icons/filter.svg";
import IconDate from "../../assets/icons/date.svg";
import IconGrid from "../../assets/icons/grid.svg";
import IconPause from "../../assets/icons/pause.svg";
import IconShare from "../../assets/icons/share.svg";
import IconArrowDown from "../../assets/icons/arrowDown.svg";
import Members from "../members/Members";

const Header = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:gap-0 mt-10">
        <div className="flex gap-[17px] items-center md:self-start">
          <span className="font-semibold text-black -mt-3 text-3xl lg:text-[46px]">
            Mobile App
          </span>
          <img src={IconEdit} alt="Edit" />
          <img src={IconLink} alt="Link" />
        </div>
        <div className="flex items-center justify-around md:self-start">
          <img src={IconCreate} alt="Create" />
          <span className="text-base font-medium text-indigo-600 ml-2 mr-3 -mt-1">
            Invite
          </span>
          <Members />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-5 md:gap-0 lg:gap-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center border w-[122px] h-[40px] rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <img src={IconFilter} alt="FilterIcon" className="mr-3" />
            <span className="text-base mr-4">Filter</span>
            <img src={IconArrowDown} alt="ArrowDownIcon" />
          </div>
          <div className="flex items-center border w-[125px] h-[40px] rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <img src={IconDate} alt="DateIcon" className="mr-3" />
            <span className="text-base mr-4">Today</span>
            <img src={IconArrowDown} alt="ArrowDownIcon" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center border w-[97px] h-[40px] rounded-md py-4 pl-3 pr-3 border-solid border-gray-400">
            <img src={IconShare} alt="DateIcon" className="mr-2" />
            <span className="text-base mr-4">Share</span>
          </div>
          <div className="border border-solid border-gray-400 h-[28px] mx-5"></div>
          <div className="flex items-center justify-center bg-[#5030E5] mr-5 w-[40px] h-[40px] rounded-md">
            <img src={IconPause} alt="PauseIcon" />
          </div>
          <img src={IconGrid} alt="GridIcon" />
        </div>
      </div>
    </>
  );
};

export default Header;
