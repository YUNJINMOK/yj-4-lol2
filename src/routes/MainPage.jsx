import Champion from '../components/Champion';
import Imgbox from '../components/Imgbox';
import Layout from '../components/Layout';

export default function MainPage() {
    return (
        <>
            <Layout>
                <div className="w-full h-[360px] bg-[#ddd] flex items-center justify-between">
                    <Imgbox />
                </div>
                {/* 챔피언 리스트 */}
                <div className="flex justify-center">
                    <Champion />
                </div>
            </Layout>
        </>
    );
}
