import Champion from '../components/Champion';
import Imgbox from '../components/Imgbox';
import Layout from '../components/Layout';
import { Imgbox2 } from '/src/components/Imgbox2.jsx';

export default function MainPage() {
    return (
        <>
            <Layout>
                <div className="w-full h-[500px] bg-[#ddd] flex py-16 justify-around">
                    <Imgbox />
                    <Imgbox2
                        url="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt541a50735cae8db5/64482576b7b7332b233e363b/JaxHeader.jpg?quality=90&crop=12%3A7&width=300"
                        title="개발자 블로그"
                        text="2023 4월 챔피언 업데이트 현황"
                    />

                    <Imgbox2
                        url="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0060849db5c9144a/62bdda094673394f64680347/00_Header_SG2.jpg?quality=90&crop=12%3A7&width=300"
                        title="세계관"
                        text="별 수호자 지난 이야기"
                    />
                </div>
                {/* 챔피언 리스트 */}
                <div className=" relative flex justify-center py-20">
                    <div className="w-[550px] h-[300px]  absolute left-[35%] -top-[1%] flex flex-col justify-center items-center gap-3">
                        <span className="text-4xl font-semibold">챔피언 을</span>
                        <span className="text-7xl font-bold">선택하세요</span>
                        <span className=" text-center">
                            140여 명의 챔피언 중 자신의 플레이 스타일에 어울리는 챔피언을 찾아보세요. 한 명의 챔피언을
                            완벽히 익히거나 모든 챔피언을 사용해 볼 수도 있습니다.
                        </span>
                    </div>
                    <Champion />
                </div>
            </Layout>
        </>
    );
}
