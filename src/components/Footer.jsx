import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaReddit } from 'react-icons/fa';
import logo1 from '../assets/png/logo.png';

import { Link } from 'react-router-dom';

export default function Footer() {
    return (
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
                        to={'https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&hl=ko'}
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
            <div className=" w-full h-full bg-[#111111] flex justify-center">
                <div className="max-w-[1200px] w-full h-full flex flex-col items-center">
                    <div className="max-w-[600px] w-full flex justify-center space-x-3 py-5 ">
                        <Link to="https://www.youtube.com/channel/UCooLkG0FfrkPBQsSuC95L6w" target="_blank">
                            <span className="w-[32px] h-[32px] bg-[#202020] flex justify-center items-center rounded-xl text-lg text-white">
                                <FaYoutube />
                            </span>
                        </Link>
                        <Link to="https://www.instagram.com/leagueoflegendskorea/" target="_blank">
                            <span className="w-[32px] h-[32px] bg-[#202020] flex justify-center items-center rounded-xl text-lg text-white">
                                <FaInstagram />
                            </span>
                        </Link>
                        <Link to="https://www.facebook.com/LeagueofLegendsKor?fref=ts" target="_blank">
                            <span className="w-[32px] h-[32px] bg-[#202020] flex justify-center items-center rounded-xl text-lg text-white">
                                <FaFacebookSquare />
                            </span>
                        </Link>
                        <Link to="https://twitter.com/LeagueOfLegends" target="_blank">
                            <span className="w-[32px] h-[32px] bg-[#202020] flex justify-center items-center rounded-xl text-lg text-white">
                                <FaTwitter />
                            </span>
                        </Link>
                        <Link to="https://www.reddit.com/r/leagueoflegends/" target="_blank">
                            <span className="w-[32px] h-[32px] bg-[#202020] flex justify-center items-center rounded-xl text-lg text-white">
                                <FaReddit />
                            </span>
                        </Link>
                    </div>
                    <div className="w-[90px] h-[32px] py-3">
                        <img className="" src={logo1} alt="logo" />
                    </div>
                    <div className="max-w-[650px]  w-full h-[50px] flex justify-center items-center mt-10">
                        <p className=" font-medium text-[13px] text-[#7e7e7e] text-center">
                            ™ & © 2024 Riot Games, Inc. League of Legends and all related logos, characters, names and
                            distinctive likenesses thereof are exclusive property of Riot Games, Inc. All Rights
                            Reserved.
                        </p>
                    </div>
                    <div className="max-w-[650px] w-full flex justify-center items-center mt-3">
                        <p className="font-medium text-[13px] text-[#7e7e7e] text-center">
                            라이엇게임즈코리아 유한회사 서울특별시 강남구 테헤란로 521 30층 (삼성동, 파르나스타워)
                            대표자 : 조혁진 | 대표전화 : 02-3454-1560 | FAX : 02-3454-1565 사업자등록번호 : 120-87-68488
                            통신판매업신고 : 2011-서울강남-02718
                        </p>
                    </div>
                    <div className=" w-full h-full flex justify-center py-16">
                        <img
                            className="w-[640px] h-[100px] object-cover"
                            src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt347042469caad5ee/5e8639455bca9a639e7dd8c1/kr-rating.png?&height=100&disable=upscale"
                            alt="footer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
