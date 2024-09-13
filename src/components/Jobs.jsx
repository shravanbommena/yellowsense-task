import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://testapi.getlokalapp.com/common/jobs?page=${pageNo}`
    );
    const data = response.data.results.filter((job) => job.type !== 1040);
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, [pageNo]);

  return (
    <>
      {data.length !== 0 && (
        <ul className="p-4 gap-3 flex flex-col items-center text-slate-400 max-h-screen overflow-y-auto s  [&::-webkit-scrollbar]:w-0 ">
          {data.map((job) => {
            {
              /* console.log(job); */
            }
            return (
              <li
                key={job.id}
                className="w-full  border border-slate-700 bg-slate-800 rounded-xl px-2 py-3 last:mb-20"
              >
                <Link
                  to={{ pathname: `/job/${job.id}`, state: { job } }}
                  className="w-full flex flex-col "
                >
                  <h3 className="text-lg text-slate-100 font-medium">
                    {job.title}
                  </h3>
                  <p>Salary: {job.primary_details.Salary}</p>
                  <p>Location: {job.primary_details.Place}</p>
                  <p>Contact No: {job.custom_link}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Jobs;
