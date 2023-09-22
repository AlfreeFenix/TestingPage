
import { useData } from "../contexts/DataContext";
function ViewList () {

    const {dataList, setDataList} = useData();


    return (
        <div>
            <div>
                {
                    dataList.map((item) => {
                        return <p>{item.name}</p>
                    })
                }
            </div>
        </div>
    );
}


export default ViewList;