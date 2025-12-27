import  { useEffect, useState } from 'react'
import ProgressDemo from './components/Progress.tsx'
import { useParams } from 'react-router-dom'
import {fetchData} from './api/featchapi.js';


const Home = () => {
    const { user } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
       if(!user) return;

       const getData = async () => {
         const result = await fetchData(user);
         console.log("Fetched Data:", result);
         setData(result);
       }
         getData();
    }, [user]);
  return (
     <div className='contain-content mx-auto p-4 flex flex-col gap-4'>
      <h2 className="scroll-m-20 border-b pb-2 pt-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Assessment Report Page
      </h2>
        <div className='flex justify-between px-10 border-b-2'>
            <div>
            <h3 className='text-2xl font-semibold mb-2'>Student Name: <span className='capitalize'>{data?.name}</span></h3>
            <p className='mb-1'>Student Speaking Assessment Report</p>
            <p className='mb-1'>Date: 2024-06-15</p>
            </div>
          <div className='mt-4'>
            <h3 className='text-xl font-semibold mb-2'>Overall Score:{data?.Overall_score}</h3>
          </div>
        </div>

          <div className='flex flex-col gap-6 p-10 justify-around'>
            
            <h2 className='text-center text-2xl font-semibold'>Descriptive Feedback</h2>
            
                {data?.Score.map((item: any, index: number) => {
                const key = Object.keys(item)[0];
                const value = item[key];
                
                const [obtained, total] = value.split("/").map(Number);

                const percentage = (obtained / total) * 100;

                let feedback = "";

                if (obtained >= 8) {
                    feedback = "Excellent performance with strong control.";
                } else if (obtained >= 6) {
                    feedback = "Good performance with minor inaccuracies.";
                } else {
                    feedback = "Needs improvement.";
                }

                return (
                    <div key={index} className="space-y-2">
                    <h1 className="text-lg font-medium">
                        {key}: {value}
                    </h1>

                    <ProgressDemo value={percentage} />

                    <p className="text-sm text-muted-foreground">
                        {feedback}
                    </p>
                    </div>
                );
                })}



    </div>
    </div>
  )
}

export default Home
