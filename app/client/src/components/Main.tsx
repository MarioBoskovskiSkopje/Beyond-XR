import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BrandBook from "./BrandBook";

export default function Main(props: any) {
  const brands = props.data ? props.data.showRoomMany[0].boards : [];
  return (
    <div>
      <Navbar brands={brands} />
      <Sidebar />
      <BrandBook />
    </div>
  );
}
