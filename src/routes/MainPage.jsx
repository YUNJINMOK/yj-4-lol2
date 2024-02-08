import Champion from '../components/Champion';
import logo1 from '../assets/png/logo.png';

export default function MainPage() {
    return (
        <>
            {/* 네비게이션 바 */}
            <div className="w-full h-[78px] bg-[#111111] flex justify-center  ">
                <div className="max-w-[1440px] w-full h-full bg-red-500 flex justify-between">
                    {/* 로고 */}
                    <div className="px-4">
                        <img className="w-full h-full object-cover" src={logo1} alt="logoimg" />
                    </div>
                    {/* 리스트 */}
                    <div className=" flex justify-center items-center gap-10">
                        <div>챔피언</div>
                        <div>E스포츠</div>
                        <div>이벤트</div>
                        <div>고객지원</div>
                    </div>
                    {/* 로그인 */}
                    <div className="flex items-center pr-4 gap-10">
                        <div>로그인</div>
                        <div>회원가입</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                {/* 챔피언 리스트 */}
                <Champion />
            </div>
        </>
    );
}
