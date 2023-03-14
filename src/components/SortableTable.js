import Table from "../components/Table";
import useSort from "../hooks/use-sort";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
    const { config, data } = props;
    const { sortOrder, sortBy, setSortLabel, sortedData } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) { 
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortLabel(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        }
    });

    return <Table {...props} data={sortedData} config={updatedConfig} />
};

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
               <GoArrowSmallDown />
               <GoArrowSmallUp /> 
            </div>
        );
    }

    if (sortOrder === null) {
        return (
            <div>
               <GoArrowSmallDown />
               <GoArrowSmallUp /> 
            </div>
        );
    } else if (sortOrder === 'asc') {
        return <div><GoArrowSmallDown /></div>
    } else if (sortOrder === 'desc') {
        return <div><GoArrowSmallUp /></div>
    }
}

export default SortableTable;