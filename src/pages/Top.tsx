import { FadeIn } from "@/shared/animations";
import { Medal, User } from "lucide-react";
import React, { useEffect, useState } from "react";

import { mockTopManData, mockTopWomanData } from '@/shared/mocks/constants';
import { TopDTO } from "@/shared/types/types";

const Top: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>('Парни');
  const [rank, setRank] = useState<number>(0);

  const handleToggle = (gender: string) => {
    setSelectedGender(gender);
  };

  useEffect(() => {
    setRank(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <FadeIn className="h-[75vh] flex  flex-col bg-white items-center p-6 shadow-lg rounded-xl">
      <div className="w-full max-w-3xl p-6">
        {
          selectedGender === 'Парни' ? (
            <h2 className="text-[30px] text-black font-bold text-center">👨Парни</h2>
          ) : (
            <h2 className="text-[30px] text-black font-bold text-center">👩Девушки</h2>
          )
        }

        <div className="w-full h-[60%] overflow-y-auto">
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-white">
              <tr className="border-b border-gray-200 text-gray-700 text-lg font-semibold">
                <th scope="col" className="py-2">
                  <div className="flex flex-col items-center gap-2">
                    <Medal className="text-yellow-500" /> Rank
                  </div>
                </th>
                <th scope="col" className="py-2">
                  <div className="flex flex-col items-center gap-2">
                    <User className="text-blue-500" /> Name
                  </div>
                </th>
                <th scope="col" className="py-2">
                  <div className="flex flex-col items-center gap-2">
                    <img src="/heart.png" width={25} alt="likes" /> Likes
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>

              {selectedGender === 'Парни' ? (
                mockTopManData.map((item: TopDTO) => (<tr key={item.id} className="text-center text-gray-800 font-bold border-b border-gray-200 hover:bg-gray-100 transition-all">
                  <td className="py-3">{item.rank}</td>
                  <td className="py-3">{item.name}</td>
                  <td className="py-3">{item.score}</td>
                </tr>
                ))
              ) : (

                mockTopWomanData.map((item: TopDTO) => (<tr key={item.id} className="text-center text-gray-800 font-bold border-b border-gray-200 hover:bg-gray-100 transition-all">
                  <td className="py-3">{item.rank}</td>
                  <td className="py-3">{item.name}</td>
                  <td className="py-3">{item.score}</td>
                </tr>
                ))
              )}

            </tbody>
          </table>
        </div>

        <div className="text-black mt-4 text-center">
          <div>Твоё место в рейтинге: <span className="font-bold">{rank}</span></div>
        </div>

        <div className="w-[90%] flex items-center justify-center gap-5 m-auto bg-indigo-300 text-white px-4 py-2 rounded-xl shadow-lg">
          <p
            onClick={() => handleToggle('Парни')}
            className={`w-[50%] font-bold py-1 text-center rounded-xl cursor-pointer ${selectedGender === 'Парни' ? 'bg-orange-500 text-black' : 'bg-transparent text-black'
              }`}
          >
            Парни
          </p>
          <p
            onClick={() => handleToggle('Девушки')}
            className={`w-[50%] font-bold py-1 text-center rounded-xl cursor-pointer ${selectedGender === 'Девушки' ? 'bg-indigo-100 text-black' : 'bg-transparent text-black'
              }`}
          >
            Девушки
          </p>
        </div>


      </div>

    </FadeIn>
  );
};

export default Top;
