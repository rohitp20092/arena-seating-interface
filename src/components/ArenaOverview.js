import React from "react";
import { useDispatch } from "react-redux";
import { selectSection } from "../features/seatingSlice";
import { AlertDialog } from "./AlertDialog";

const sections = {
  201: { color: "#4169E1", price: "500H" },
  202: { color: "#FF6347", price: "550H" },
  203: { color: "#FFD700", price: "450H" },
  204: { color: "#8A2BE2", price: "600H" },
  205: { color: "#40E0D0", price: "400H" },
  206: { color: "#FF69B4", price: "350H" },
  207: { color: "#32CD32", price: "300H" },
  208: { color: "#FF4500", price: "700H" },
  209: { color: "#DAA520", price: "550H" },
  210: { color: "#1E90FF", price: "500H" },
  211: { color: "#6A5ACD", price: "600H" },
  212: { color: "#228B22", price: "400H" },
  213: { color: "#B22222", price: "750H" },

};

const ArenaOverview = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [sectionInfo, setSectionInfo] = React.useState(null);
  const dispatch = useDispatch();

  const handleSectionClick = (id) => {
    dispatch(selectSection(id));
    setSectionInfo(sections[id]);
    setOpenDialog(true);
  };

  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      {/* Stage */}
      <div className="bg-gray-500 px-24 py-2 text-center text-white font-semibold rounded-md mb-8">
        Stage
      </div>

      {/* Side and Center Sections */}
      <div className="flex justify-center items-center space-x-4">
        {/* Left Side Sections */}
        <div className="flex flex-col space-y-4">
          {[201, 202, 203].map((id) => (
            <div
              key={id}
              className="p-4 w-16 h-16 flex items-center justify-center rounded-lg cursor-pointer text-white font-semibold"
              style={{ backgroundColor: sections[id].color }}
              onClick={() => handleSectionClick(id)}
            >
              {id}
            </div>
          ))}
          
        </div>

        

        {/* General Access Area */}
        <div className="bg-purple-700 w-64 h-64 rounded-md flex items-center justify-center text-white text-xl font-semibold">
          General Access
        </div>

        {/* Right Side Sections */}
        <div className="flex flex-col space-y-4">
          {[209, 208, 207].map((id) => (
            <div
              key={id}
              className="p-4 w-16 h-16 flex items-center justify-center rounded-lg cursor-pointer text-white font-semibold"
              style={{ backgroundColor: sections[id].color }}
              onClick={() => handleSectionClick(id)}
            >
              {id}
            </div>
          ))}
         
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="flex justify-center space-x-4 mt-4">
        <div className="p-4 w-20 h-16 rounded-bl-[100px] flex items-center justify-center  cursor-pointer text-white font-semibold bg-red-500 relative">
          <div className="h-6 w-6 bg-white absolute top-0 right-0 rounded-bl-[100px]"></div>
        </div>

        {[205, 206, 207].map((id) => (
          <div
            key={id}
            className="p-4 w-16 h-16 flex items-center justify-center rounded-lg cursor-pointer text-white font-semibold"
            style={{ backgroundColor: sections[id].color }}
            onClick={() => handleSectionClick(id)}
          >
            {id}
          </div>
        ))}
        <div className="p-4 w-20 h-16 rounded-br-[100px]   cursor-pointer text-white font-semibold bg-red-500 relative">
          <div className="h-6 w-6 bg-white absolute top-0 left-0 rounded-br-[100px]"></div>
        </div>
      </div>

      {/* Dialog */}
      <AlertDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title="Section Information"
        description={`Price Category: ${sectionInfo?.price}`}
      />
    </div>
  );
};

export default ArenaOverview;
