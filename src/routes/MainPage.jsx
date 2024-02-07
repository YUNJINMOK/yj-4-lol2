import Champion from "../components/Champion";



export default function MainPage() {

return (
  <>
  {/* 네비게이션 바 */}
  
  <div className="flex justify-center">
    {/* 챔피언 리스트 */}
    <Champion/>
  </div>
  </>
);

}
