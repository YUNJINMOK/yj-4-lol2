import logo1 from '../assets/png/logo.png';

export default function Header() {
    return (
        <div className="w-full h-[78px] bg-[#111111] flex justify-center  ">
            <div className="max-w-[1440px] w-full h-full  flex justify-between">
                {/* 로고 */}
                <div className="px-4">
                    <img className="w-full h-full object-cover" src={logo1} alt="logoimg" />
                </div>
                {/* 리스트 */}
                <div className=" flex h-full justify-center items-center gap-10 text-white ">
                    <div className="w-[100px] h-[40px] hover:bg-[#d49466] flex justify-center items-center rounded-xl cursor-pointer">
                        챔피언
                    </div>
                    <div className="w-[100px] h-[40px] hover:bg-[#d49466] flex justify-center items-center rounded-xl cursor-pointer">
                        E스포츠
                    </div>
                    <div className="w-[100px] h-[40px] hover:bg-[#d49466] flex justify-center items-center rounded-xl cursor-pointer">
                        이벤트
                    </div>
                    <div className="w-[100px] h-[40px] hover:bg-[#d49466] flex justify-center items-center rounded-xl cursor-pointer">
                        고객지원
                    </div>
                </div>
                {/* 로그인 */}
                <div className="flex items-center pr-4 gap-4 ">
                    <div className="w-[100px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer bg-gray-600 text-white font-medium">
                        로그인
                    </div>
                    <div className="w-[100px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer bg-[#00B2CF] font-medium">
                        회원가입
                    </div>
                </div>
            </div>
        </div>
    );
}
