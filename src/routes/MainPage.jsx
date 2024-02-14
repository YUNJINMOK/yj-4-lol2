import Champion from '../components/Champion';
import logo1 from '../assets/png/logo.png';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <>
            {/* 네비게이션 바 */}

            {/* 챔피언 리스트 */}
            <div className="flex justify-center">
                <Champion />
            </div>
            <div className="w-full h-[600px] bg-[#111111] flex flex-col justify-center">
                <div className=" w-full h-[80px] bg-[#061C25] flex justify-between items-center text-white">
                    <div className="pl-10 font-semibold text-xl">언제나 리그 오브 레전드와 함께</div>
                    <div className="text-sm">
                        리그 오브 레전드 앱을 다운로드해 친구들과 대화하고 최신 게임 및 e스포츠 소식을 확인해 보세요.
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                        <Link
                            to={
                                'https://apps.apple.com/kr/app/%EB%9D%BC%EC%9D%B4%EC%97%87-%EB%AA%A8%EB%B0%94%EC%9D%BC/id1077150310?ls=1'
                            }
                            target="_blank"
                        >
                            <img
                                className="w-[150px] h-full"
                                src="https://www.leagueoflegends.com/static/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.97efaa84.svg"
                                alt="lolimg3"
                            />
                        </Link>
                        <Link
                            to={
                                'https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&hl=ko'
                            }
                            target="_blank"
                        >
                            <img
                                className="w-[150px] h-full"
                                src="https://www.leagueoflegends.com/static/ko_get.96e60d91.svg "
                                alt="icon"
                            />
                        </Link>
                    </div>
                </div>
                <div className=" w-full h-[80px] bg-[#292929] flex justify-center ">
                    <div className="max-w-[1440px] w-full h-full flex justify-center items-center text-white space-x-4 text-sm">
                        <div className="w-[100px] h-[40px] hover:bg-[#d49466] flex justify-center items-center rounded-xl cursor-pointer">
                            고객지원
                        </div>
                        <div className="w-[140px] h-[40px] hover:bg-[#d49466] flex justify-center items-center rounded-xl cursor-pointer">
                            학부모 전용 고객센터
                        </div>
                        <div className="w-[100px] h-[40px] hover:bg-[#d49466] flex justify-center items-center rounded-xl cursor-pointer">
                            pc방
                        </div>
                        <div className="w-[180px] h-[40px] hover:bg-[#d49466] flex justify-center items-center rounded-xl cursor-pointer">
                            라이엇 컴패니언 앱 다운로드
                        </div>
                    </div>
                </div>
                <div className=" w-full h-full bg-[#111111]"></div>
            </div>
        </>
    );
}
